const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const KoaCors = require('koa-cors')
const KoaBody = require('koa-body')
const app = new Koa()
const path = require('path')
const router = new KoaRouter()
// 单个路由的
router.post('/upload', KoaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/static/'),
    keepExtensions: true,
    hash: true // hash字符串MDS sha256
  }
  }), 
  async (ctx) => {
    const diskPath = ctx.request.files.avatar.path
    let fileName = path.basename(diskPath)
    ctx.body = {
      code: 200,
      url: `http://localhost:3000/${fileName}`
    }
})
// 全局的 顺序
app.use(KoaCors())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
  console.log('server is running')
})