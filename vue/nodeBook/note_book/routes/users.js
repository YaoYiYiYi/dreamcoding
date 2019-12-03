const router = require('koa-router')()
const userServices = require('../controllers/mySqlConfig')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
// async是异步的
router.get('/all', async(ctx, next) => {
  await userServices.getAllusers().then((res) => {
    console.log('打印结果为： '+ JSON.stringify(res))
    ctx.body = res
  })
})

// 登入
router.post('/userLogin', async(ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd
  console.log(_username,_userpwd)
  await userServices.userLogin(_username, _userpwd)
  .then((res) => {
    let r = ''
    console.log(res)
    if(res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '200',
        data: result,
        mess: '登入成功'
      }
    } else {
      r = 'error';
      ctx.body = {
        code: '404',
        data: r,
        mess: '账号密码错误'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})

module.exports = router
