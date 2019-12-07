const router = require('koa-router')()
const userServices = require('../controllers/mySqlConfig')
const utils = require('../controllers/utils')
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

// 注册
router.post('/userRegister', async(ctx, next) => {
  var username = ctx.request.body.username;
  var userpwd = ctx.request.body.userpwd;
  var nickname = ctx.request.body.nickname;
  if(!username || !userpwd || !nickname ){
    ctx.body = {
      code: '8000',
      mess: '账号，密码，昵称不能为空'
    }
    return
  }
  let user = {
    username: username,
    userpwd: userpwd,
    nickname: nickname
  }

  await userServices.findUser(username).then(async (res)=>{
    if (res.length) {
      try {
        throw Error('用户名以及存在')
      } catch(error) {
        console.log(error)
      }
      ctx.body = {
        code: '8003',
        data: 'err',
        mess: '用户名已经存在'
      }
    } else {
      await userServices.insertUser([username, userpwd, nickname]).then((res)=> {
        let r = ''
        if (res.affectedRows) {
          r = 'ok'
          ctx.body = {
            code: '200',
            data: '',
            mess: '注册成功'
          }
        } else {
          r = 'err'
          ctx.body = {
            code:'500',
            data: '',
            mess: '注册失败'
          }
        }
      })
      .catch((err) => {
        ctx.body = {
          code:'500',
          data: err
        }
      })
      
    }
  })
})

// 根据分类查找
router.post('/findNoteListBytype', async(ctx, next) => {
  let note_type = ctx.request.body.noteType
  // console.log(note_type)
  await userServices.findNoteListByType(note_type).then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok',
      ctx.body = {
        code: '200',
        data: res,
        mess: '查询成功'
      }
    }else {
      r = 'error',
      ctx.body = {
        code: '400',
        data: r,
        mess: '查询失败'
      }
    }
  })
  .catch ((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})
// 根据id 查找对应的笔记详情
router.post('/findNoteDetailById', async(ctx, next)=> {
  let id = ctx.request.body.id
  await userServices.findNoteDetailById(id).then(async(res)=>{
    let r = ''
    if(res.length){
      ctx.body = {
        code: '200',
        data: res[0],
        mess: '查找成功'
      }
    } else {
      r = 'error',
      ctx.body = {
        code: '404',
        data: r,
        mess: '查找失败'
      }
    }
  })
  .catch((error) => {
    ctx.body = {
      code: '8000',
      data: error
    }
  })
})

// 插入笔记
router.post('/insertNote', async(ctx, next) =>{
  let c_time = utils.getNowFormatDate()
  let m_time = utils.getNowFormatDate()
  let note_content = ctx.request.body.note_content
  let head_img = ctx.request.body.head_img
  let title = ctx.request.body.title
  let note_type = ctx.request.body.note_type
  let useId = ctx.request.body.userId
  let nickname = ctx.request.body.nickname
  console.log(c_time,m_time,note_content,title,note_type,useId,nickname)
  await userServices.insertNote([c_time,m_time,note_content,head_img,title,note_type,useId,nickname])
        .then(async(res)=>{
          let r =''
          if(res.affectedRows){
            r = 'ok',
            ctx.body = {
              code: '200',
              data: r,
              mess: '发表成功'
            }
          } else {
            r = 'error',
            ctx.body = {
              code: '8000',
              data: r,
              mess: '发表失败'
            }
          }
        })
        .catch((err)=> {
          ctx.body = {
            code: '500',
            data: err
          }
        })
})

module.exports = router
