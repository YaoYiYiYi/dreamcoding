--restful web
一切皆资源
DOM  + css + js
URL  Universal Resource Location
http://www.taobao.com/shop/1/good/2

明确的给我们表达它的资源是什么意思
npm init -y 从前端到后端
   scripts 执行一些mingl
   json-server  npm包
   url 上面将我们的json文件向外暴露
   Json就是一个资源 web server (restful)
   ---语义化URL
   :1314/posts  posts是GET的一种请求 文章列表的请求
   :1314/posts/1  (:id)  访问第一篇文章  详情

   GET    url 明文访问 
   POST   用于新增数据
   PUT    修改数据  (覆盖性修改，只保存put的内容,之前的全部删除)
   PATCH  修改数据  (部分修改)
   DELETE 删除数据  

   - :8080 live-server web页面
     :1314 启动了后端API
     不同的端口代表不同的服务
     前后端全栈型的项目 
