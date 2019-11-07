em 相对父容器判断大小，如果自身有font-size，那么就相对自己来


## 
 浏览器收到html,会解析为dom模型
 遇到css就会解析为cssom
 把dom cssom合在一起 生成一颗渲染树
 根据样式 计算布局，开始渲染 布局

 domContentloaded 就是当html解析完之后发生的

 有一些标签 img link script 会引入外部资源 会在解析完html之后请求资源
