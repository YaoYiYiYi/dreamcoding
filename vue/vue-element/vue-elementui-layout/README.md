## babel
js 的语法编译器
class 关键词 -> 经过babel的编译 -> es5的代码
里面有丰富的插件机制
vue 提供了 babel-plugin-transform-vue-jsx 负责将 模板template 编译为js
```css
<el-row>
  <el-col >12</el-col>
  <el-col>10</el-col>
  <el-col>2</el-col>
</el-row>

h("el-row", [h("el-col", ["12"]), h("el-col", ["10"]), h("el-col", ["2"])]);


<template>
  <div class="my-el-row">
    <slot></slot>
  </div>
  <!-- h("div") -->
</template>