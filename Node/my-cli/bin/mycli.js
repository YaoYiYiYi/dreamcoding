#!/usr/bin/env node
//  #! 是用于启动该文件的一个环境
// 由于用了node来读取文件, 所以文件可以不带后缀
const commander = require('commander');
commander.version('1.0.0')
.usage(`<command> [项目名称]`)
.command('init', 'init project')
.command('hello', 'hello')
.parse(process.argv)
// node app.js  启动进程 init webpack --version都是argv