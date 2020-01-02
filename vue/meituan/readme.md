- node 做后端的, 
如何让es6 模块化来到node 开发中index.js中 (@babel/register) + app.js(模块化)

npm add @babel/cli @babel/core @babel/preset-env @babel/plugin-syntax-dynamic-import @babel/register @babel/runtime
npm add @babel/plugin-transform-runtime

- 分层
router对象  -> 交给controller去做(校验) 
  /controller目录 
    /v1/cities.js