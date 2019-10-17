var http = require('http');//http是node的底层 核心库
//require是一个引入包的内容
var fs = require('fs'); //引入文件库
var path = require('path');

//web服务本质是 有人来访问我们的网站 request
// 网站的开发者，响应用户的请求，res代表开发网站的人，req是访问者 
http.createServer(function(req,res){
    console.log(req.url);
    // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    // res.write("Hello,World哈喽233")
   if(req.url=='/images/sloth.png'){
       console.log('图片');
       //将图片资源返回给用户
       //200表示成功404表示失败
       res.writeHead(200,{'Content-Type':'image/png'});
       let imgStream = fs.createReadStream(path.join(__dirname,'sloth.png')
       );
       imgStream.pipe(res);
       return;
   }

    let fileStream = fs.createReadStream(path.join(__dirname,'index.html'));
    fileStream.pipe(res);
})//创建web服务
.listen(1290)
