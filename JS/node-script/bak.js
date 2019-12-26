const shell = require('shelljs') // fs的功能,管理文件
const moment = require('moment') // 时间插件
const schedule = require('node-schedule')

// node定时任务模块 node-schedule
function copy() {
  const current = moment().format('YYYYMMDDhhmmss') // 格式化时间 2019-12-26-10：23
  const folder = `src_${current}`

  // 先创建一个时间信息的文件夹，为了防止覆盖同一个文件
  shell.mkdir('-p', './bak/'+folder)

  // shelljs 复制文件或者文件夹
  shell.cp('-rf','./test','./bak/'+folder)
}

schedule.scheduleJob('00 00 00 * * *', ()=>{
  // 秒 分 时 日 月 年 *不设置年月日
  copy()
})

// 自动执行命令
// shell.exec('cls') // 执行windows 下的清空显示命令
// shell.exec('npm run bak')
shell.exec('node --version', {
  silent: true, // 执行过程中，命令提示不会显示过程信息
  async: false // 不要异步执行
}, (code, stdout, stderr)=>{
  // stdout指上一次的输入
  // 执行完毕后继续 执行这里的回调函数

  // 自动修改内容

  // -i表示创建备份，version表示需要替换的内容， aa表示需要替换的新内容 最后一个参数表示文件路径
  // shell.sed('-i','version','aa','./version.js')
  shell.sed('-i', /version\s=/, 'v=' , './version.js')
  const content = shell.cat('./version.js')
  // console.log(content)
  // 最后一位每次打包， 让我们的版本号自动+1
  const rep = content.stdout.split('.')
  // console.log(rep)

  // 接受控制台的输入
  process.stdout.write("需要变更版本号吗(y/n)?")
  //可以拿到用户输入的东西
  process.stdin.on('data',(input)=>{
    input = input.toString().trim()
    if(['Y','y','YES','yes'].indexOf(input) > -1) {
      rep[rep.length-1] = parseInt(rep[rep.length-1]) + 1 + "'"
      // console.log(rep[rep.length-1])
      shell.sed('-i', content, rep.join('.'), './version.js')
    }
    if(['N','n','NO','no'].indexOf(input)>-1){
      process.exit(0)
    }
  })
})