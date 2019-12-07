var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  post: config.database.POST,
  database: config.database.DATABASE
})

// 统一链接数据库的方法
let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection){
        if (err) {
          reject(err)
        } else {
          // mySQL自带的方法query
          connection.query(sql, values, (err, rows) => {
            if(err){
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 读取所有users 表的数据,测试数据链接
let getAllusers = function () {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}

// 查找数据库是否存在用户的账号和密码
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd ="${userpwd}";`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}

// 注册用户
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql, value)
}

//根据分类名称查找对应的笔记列表
let findNoteListByType = function(note_type) {
  let _sql = `select * from note where note_type="${note_type}";`
  return allServices.query(_sql)
}
// 根据id 查找对应的笔记详情
let findNoteDetailById = function (id) {
  let _sql = `select * from note where id="${id}";`
  return allServices.query(_sql)
}

// 增添笔记
let insertNote = function (options) {
  let _sql = `insert into note set c_time=?,m_time=?,note_content=?,head_img=?,title=?,note_type=?,useId=?,nickname=?;`
  return allServices.query(_sql,options)
}
module.exports = {
  getAllusers,
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteDetailById,
  insertNote
}
 