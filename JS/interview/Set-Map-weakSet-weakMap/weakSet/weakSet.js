// weakSet弱化版本的Set
// 弱引用型的话，会被js的垃圾回收机制回收掉

// var a = '1'
// var b = 2
// var c = new WeakSet()
// var d = 3 当执行完以后就会销毁垃圾回收机制


const a = [[1,2],[3,4]]
const ws0 = new WeakSet(a)
// console.log(ws)
// ws.add(1)
// ws.add(Symbol(1))
// 在weakSet上面的add方法,增加普通的变量是没有用的,只能存储对象
// weakSet可以接受一个 数组 或者 类数组作为参数， 该数组的所有的成员，都会自动成为weakSet实例对象的成员
// 但是，传进来的数组的成员只能是对象
const b = [5,6]
// const wn = new WeakSet(b)
// console.log(wn) // 会报

const ws = new WeakSet()
const obj = {}
const foo = {}
// ws.add(window) // window就是一个对象
ws.add(obj)
ws.has(obj) // weakSet有has方法
ws.delete(obj) // weakSet有delete方法
ws.add(foo)
// console.log(ws.size)  weakSet没有size属性因为没有长度 所以不能被遍历，weakSet也不能用forEach属性

const foos = new WeakSet()
// foos对实例的引用不会被记录到内存回收机制当中，所以删除实例的时候不用考虑foos，也不会造成内存泄漏
class Foo{
  constructor(){
    foos.add(this)
  }
  methods () {
    if(!foos.has(this)){
      throw new TypeError('error')
    }
  }
}
let faa = new Foo()
// 保证这个Foo的实例方法只能在Foo的实例上面调用
// 必须new以后 被实例调用，被单独拿出来就不行

