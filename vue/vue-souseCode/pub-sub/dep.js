// 依赖收集
class Dep { // 订阅者
  constructor () {
    // 用来存放watcher对象的数组
    this.subs = []
  }
  // 在subs中添加watcher对象
  addSub (sub) {
    this.subs.push(sub)
  }
  // 通知所有的 watcher对象跟视图
  notify () {
    this.subs.forEach((sub) => {
      // 去更新视图
      sub.update()
    })
  }
}

// 观察者
class Watcher {
  constructor (){
    // 在new一个 watcher 对象是将该对象赋值给Dep.target,在get中会用得到
    Dep.target = this
  }
  // 跟新视图的方法
  update () {
    console.log('视图更新了')
  }
}

Dep.target = null


function defineReactive (obj, key, val) {
  // dep类对象
  const dep = new Dep()
  // defineProperty是用来给监听的对象增加或者修改属性的
  Object.defineProperty(obj,key,{
    enumerable: true, // 是否可以枚举
    configurable: true,
    get: function reactiveGetter() {
      // 将Dep.target 也就是当前的watcher对象存入了dep的subs中
      dep.addSub(Dep.target)
      return val
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) {
        return
      }
      // 触发dep中的notify方法, 通知所有的watcher 对象更新视图
      dep.notify()
    }
  })
}

function observe(value) {
  if(!value || (typeof value !== 'Object')){
    return
  }
  Object.keys(value).forEach((key)=>{
    defineReactive(value,key,value[key])
  })
}

class Vue {
  constructor (options) {
    this._data =options.data
    observe(this._data)
    // 新建一个观察者的对象,
    new Watcher()
    // 模拟render的过程, 为了触发test属性的get函数
    console.log('render~~',this._data.test)
  }
}
let o = new Vue({
  data: {
    test: 'i am test'
  }
})
o._data.test = 'hello'
