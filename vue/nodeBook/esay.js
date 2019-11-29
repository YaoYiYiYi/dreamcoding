const http =require('http')
var server = http.createServer((req, res)=>{
  // req 是参数， res是返回的东西
  console.log('req content', req.url)
  res.end('123')
})
server.listen(3000,()=>{
  console.log('ok')
})