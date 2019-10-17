--基本的结构套路 
  #app>.page
---*css 解析也是要花时间的  *费时


--浏览器有认识  
  -webkit Google浏览器内核  手机端多以为主
  -ms PC端，window操作系统，内核是微软的

  text-size-adjust :100%
  用加前缀的方式，-webkit
--自适应，rem em =>(相对单位)   px(靠不住)
   weui使用的是em 
   html 中定义font-size：100px  京东喜欢用这种
   字体大小是 16px 那么就是16rem 

---css考点
    -webkit-text-size-adjust :100%
    -webkit-tap-hightlight-color:transpant
    -webkit-overfolw-scrolling:touch
    html font-size:100px
--oo css
.quick-login .quick-type  优先级大于>  .quick-type
选择器产生 stylus 嵌套 （因为 只写一个类名的话很容易发生冲突）
模块化，命名空间的概念

--base64
    其实他更小，任何一张图片都是编码
    传输就要更加的快，完全的在CSS中，不需要发送http请求 性能开销的核心
    http请求数应该尽量的去减少 
