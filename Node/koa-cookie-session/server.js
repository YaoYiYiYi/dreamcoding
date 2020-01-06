const Koa = require('koa')
const KoaStatic = require('koa-static')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

app.use(KoaStatic(__dirname + '/static'))
let sessionTable = []
router.get('/login', (ctx, next) => {
  // 后端通过Set-cookie

  // 通过了验证， 就存入用户的登入状态 session

  // http 是无状态的
  sessionTable = [{
    sessionId: 001,
    uid: 001,
    islogin: true,

  }]
  ctx.cookies.set('sessionId', 001, {
    maxAge: 60*1000 // 毫秒为单位
  })
  ctx.body = {code: 0}
});

router.get('/islogin', async(ctx) => {
  // 通过cookie来知道 sessionId
  // cookie会自动的附加到请求头上面
  const sid = ctx.cookies.get('sessionId')
  const session = sessionTable.find(s => s.sessionId == sid)
  if(session) {
    const uid = session.uid
    ctx.body = {
      code: 0,
      uid
    }
  } else {
    ctx.body = {
      code: 1,
      msg: '未登入'
    }
  }
})

 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, ()=> {
  console.log(8080)
})