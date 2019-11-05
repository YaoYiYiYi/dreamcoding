# vue-ele-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


组件如何引入

vertical-align 左右两个容器怎么对齐 top middle

npm install axios  接口的命令插件  // 非官方的组件使用都要use
npm install stylus stylus-loader --save-dev  在vue中安装stylus

可以先建立一个stylus文件 在里面建立一个index.styl,将其中所有的其他styl类型文件引入到这个index中
这样在外面就这需要引入index 这一个就好了  引入格式是  @import '文件地址'
然后在你要在你要写的文件中，的style中写一下以下代码就可以引入了
@import '../../common/stylus/index'

style 中的话如果写入 lang="stylus" scoped 接下来的语言就是styl格式，只在这个文件里生效

Object.assign({},this.seller,res.data.data)表示合并对象
filter blur(10px)  可以虚化，px 越大就虚化越严重

npm install better-scroll --save 滚动条