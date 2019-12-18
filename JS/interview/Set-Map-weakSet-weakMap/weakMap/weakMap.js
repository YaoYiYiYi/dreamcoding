const wn = new WeakMap() // weakMap没有size这个方法 所以就没有forEach clear方法
const key = {foo:1}
wn.set(key,2)
console.log(wn.get(key))
const k1 = [1,2,3]
const k2 = [4,5,6]
const wm = new WeakMap([[k1, 'foo'],[k2,'bar']])
// const wm = new WeakMap([[k1], [k2]])
// console.log(wm.get(k2))

// wn.set(1,2) //会报错  因为1不是obj对象类型
// weakMap只接受对象作为键名,不接受其他的类型作为键名(null 除外)

const e1 = document.getElementById('foo')
const e2 = documnet.getElementById('bar')
const arr = [
  [e1, 'foo元素'],
  [e2, 'bar元素']
]
// 当不需要e1 和 e2的时候，必须手动删除
arr[0] = null
arr[1] = null

const wnn = new WeakMap()
const element = document.getElementById('test')
wnn.set(element, 'some infomation')
wnn.get(element)

const ww = new WeakMap()
let key1 = {}
let obj = {foo : 1}
ww.set(key1,obj)
obj.foo = 2
console.log(ww.get(key))// 发现并没有改变， 因为弱引用的是 key 被回收, value没有被回收

let myElement = document.getElementById('log')
let myWeakmap = new WeakMap()
myWeakmap.set(myWeakmap, {timesClicked: 0})
myElement.addEventListener('click', function() {
  let logoData =myWeakmap.get(myElement)
  logoData.timesClicked++
})