## 静态资源
不会随着服务运行而去改变的东西
html css js jpg
请求的url 和磁盘的上的路劲 一一对应起来
:3000/bg.png ====> 404 
:3000/js/home.js  ->  read  ->  res

比如 nginx
file:///F:/dreamcoding/Node/static-resouce-server/bg.jpg

浏览器 双击打开 file 协议 ./  ../
放到服务器上面 http 协议