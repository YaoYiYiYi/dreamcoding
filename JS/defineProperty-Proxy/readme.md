## 监听对象属性的改变 definePropety
1. get / set
2. Proxy 代理的意思
  在目标对象之前"拦截" 一层， 对目标对象的访问，都经过这一层的拦截

## defineProperty 和proxy的对比

# defineProperty
1. 只能监测对象的属性,而且是用definePoperty 定义上去的属性，不能检测 '未来 '的属性 就是不存在的属性，是不被监听的

# proxy
1. 整个对象的拦截, 多达 13 种 操作 不仅仅是 get set 包括未来属性
2. 可以拦截数组 包括数组 (a[0] = 123 这个是defineProperty不能监测的)

## 元编程
对语言js 再次编程
1. proxy