var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify // 图片分类
var fs = require('fs')

var APP_ID = "17798918"
var API_KEY = "0XR1TL5gFzg0nAoXyG3bYjOF"
var SECRET_KEY = "bKtoLs2gNU6gHV1ETB8n6sykixumdkF7"
// 内存 -> I/O
var image = fs.readFileSync('car.jpg').toString("base64") // 读取文件是异步，但是这个方法Sync是同步
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY)
client.carDetect(image)
  .then(function(result){
    console.log(result)
  })
  .catch(function(err){
    console.log(err)
  })
// console.log(image)
