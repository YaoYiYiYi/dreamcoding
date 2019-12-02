const http = require('http')
const fs = require('fs')
const path = require('path')
http.createServer((req, res) => {
  // pipe用res来接收fs转的内容
  // console.log(req.url)
  // jpg 很多
  if (req.url === '/bg.jpg') {
    return fs.createReadStream('file:///F:/dreamcoding/Node/static-resouce-server/bg.jpg').pipe(res)
  }
  fs.createReadStream('./index.html').pipe(res)
}).listen(3000, () => {
  console.log('http://localhost:3000')
})