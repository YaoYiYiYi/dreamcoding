const a = {
  b: 1,
  c: 2
}
function fn() {
  console.log('a的值发生了变化',a.b)
}
function bindData() {
  Object.keys(a).map(key => {
    let v = a[key]
    Object.defineProperty(a, key, {
      get() { // 读取属性调用的方法
        console.log('正在读取a里面的值')
        return v
      },
      set(newVal) { // 写入属性时, 调用的方法
        console.log('正在修改写入a的值')
        v = newVal
        fn()
      }
    }) 
  })
 // 监听对象的变化，或者修改属性
  // 第一个参数是对象名, 第二个是属性, 第三个是
}
bindData()
a.b = 3
console.log(a.b)
