let http = require('http')
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request')
let response = require('./response')
let Stream = require('stream')

class Koa extends EventEmitter {
  constructor () {
    super() // 继承EventEmitter里面的方法
    // this.fn
    this.middlewares =[]
    this.context = context
    this.request = request
    this.response = response
  }

  use (fn) {
    // this.fn = fn
    this.middlewares.push(fn)
  }

  compose(middlewares, ctx) { // 保证接受中间件数组 将ctx作为参数
    function dispatch(index) { // 利用递归将中间件全部串联起来
      if(index === middlewares.length) return Promise.resolve() //保证最后一个next 不执行
      let middleware = middlewares[index]
      return Promise.resolve(middleware(ctx, ()=> dispatch(index +1))) // 用promise.resolve包裹中间件 
    }
    return dispatch(0)
  }

  createContext (req, res) {
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)

    // 交叉赋值
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.ctx = response.ctx
    request.response = response
    response.request = request
    return ctx
  }

  // 创建一个处理请求的函数
  handleRequest (req, res) {
    res.statusCode = 404
    let ctx = this.createContext(req, res) // 真正创建ctx
    let fn = this.compose(this.middlewares, ctx)
    fn.then(() => {
      if(typeof ctx.body === 'object') {
        res.setHeader('Content-Type', 'application/json;charset=utf8')
        res.end(JSON.stringify(ctx.body))
      } else if (ctx.body instanceof Stream) {
        ctx.body.pipe(res) // 处理数据 流类型 文件流比如图片
      } else if (typeof ctx.body === 'string' || Buffer.isBuffer(ctx.body)) {
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end(ctx.body)
      } else {
        res.end('Not Found')
      }
    })
    .catch(err => {
      this.emit('error', err)
      res.statusCode = 500
      res.end('server error')
    })
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa