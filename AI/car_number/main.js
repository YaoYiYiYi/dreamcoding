var AipOcrClient = require('baidu-aip-sdk').ocr // 不属于图片识别,从图片种提取文字
var fs = require('fs')
var image = fs.readFileSync('./car3.jpg').toString('base64')// 文件本身就是二进制文本
var APP_ID = "17799073"
var API_KEY = "qIdkHNKadiqydvTrOgMeCLkz"
var SECRET_KEY = "nKFRE7PWqZf5yveVq22A9w5Hlz58GiNG"
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)
var Options = {}
client.licensePlate(image, Options)
  .then(function(result){
    console.log(result)
  })
  .catch(function(err){
    console.log(err)
  })