class Watcher {
  constructor (opts) {
    this.$data = opts.data
    this.$watch = opts.watch
    for (let key in opts.data) {
      this.setData(key, opts.data[key])
    }
  }
  setData (_key, _val) {
    console.log(this)
    Object.defineProperty(this, _key, {
      get () {
        return this.$data[_key]
      },
      set (val) {
        const oldVal = this.$data[_key]
        if (oldVal === val) {
          return val
        }
        this.$data[_key] = val
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
          this.$watch[_key].call(this, val, oldVal)
        )
        return val
      }
    }) // Object.defineProperties(this) this把上下文指向当前的对象
  }
}

// let vm = new Watcher({
//   data: {
//     a: 0,
//     b: 'hello'
//   },
//   watch: {
//     a (newVal, oldVal) {
//       console.log(oldVal, newVal)
//     },
//     b (newVal, oldVal) {
//       console.log(oldVal, newVal)
//     }
//   }
// })
// console.log(vm.$data.a)
// setTimeout(() => {
//   vm.a = 1
// }, 2000)