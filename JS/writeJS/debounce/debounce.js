const debounce = (fn,delay) => {
  let timer = null
  return (...args) => {
  clearTimeout(timer)
  timer =  setTimeout(()=>{
    fn.apply(this,...args)
  },delay)
  }
}
test = function () {
  console.log(123)
}

methods: {
  function a () {
    ajax.get(
      {
        success:function() {
          // this.b() // 会导致b函数里面的this作用域失效
          // 应该改成 this.b.call(this)
        }
      }
    )
  }
  function b () {
    this.name = 'wn'
  }
}