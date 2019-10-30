# vue-router

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



build 是代码打包之后存的文件夹
config 配置文件
node_modules 是依赖文件
src 是开发文件夹 
    assets资源 可以拿来放图片
    components 放入页面代码(自带一个helloword的html)
    router 配置路由
    APP.vue 整个项目最外层的文件，可以作用与所有的页面(APP.wxml/App.wxss/App.json)
    main.js是作用所有的JS
static 放入至关重要的方法，可以方便重复调用
babelrc 将各种代码都可以翻译html和css

路由跳转
   在router里面添加路由
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
