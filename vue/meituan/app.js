// 模块化 commonjs
// const express = require('express')
// es6里面的模块化方案  node不支持

// node如何使用 es6模块化
import express from 'express' 
import router from './routes/index.js'
const app = express()
app.listen(3000)

router(app)
module.exports = app