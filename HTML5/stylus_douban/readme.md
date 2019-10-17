--页面支持的是html, css , js , 开发的标准
   但是近五年来，前端出现了很多新的做法，工作流发生了变化

css { key:val ;}  stylus要快速一点，更加的程序化

都是由Node 的大火带来的
未来写的是stylus : css   typescript ；js   组件: html

1. npm init -y   (使之 node 后端的项目仍有的能力)
2. 在生成的package.json中的“scripts”在里面 添加一句
   "compile_stylus":"stylus common.styl -o common.css" ,
   "compile_stylus":"stylus -w common.styl -o common.css",
   -w的目的是一直监听这个文件的改变

stylus -> css css变化了刷新页面  live-server