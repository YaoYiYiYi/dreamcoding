触屏 重力感应 陀螺仪 手机区别于PC 
touchstart touchmove  touchend ? 
- 让我们的阴影 感知力度？ css border-radius 50%  
- 那么多张树懒的照片？ 
- 力度作用到照片? 
- 雪碧图 
  往右走， 往下走都是负值
  background-size: 400%;

-   live-server
    http协议是web的底层

    - node内建 http模块
     http.createserver((req,res)=>{
         console.log(req.url)
     }).listen(1314)
     一直伺服状态

     通过某个ip 某个端口 来访问

     -http fs path node 内置模块
     index.html
      sloth.png
    一切皆是资源  url表示 
    /    index.html
    /   images/sloth.png   sloth.png
    区别  req.url
    文件类型不一样  text/html   image/png
    res.WriteHead(200,{'Content-Type':'text/html;charset=utf-8'})