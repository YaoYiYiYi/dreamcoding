// const data = {}
// const element = document.getElementById('myDiv')
// data[element] = 'wn'
// 但Obj的key值是字符串类型，所以会把element转化为字符型 ===>>>> data['[object HTMLDivElement']


const m = new Map()
// map类型的好处是，它的key值可以是很多类型，不一定是字符串
const o = {p: 'hello word'}

m.set(o, 'content')  // .set方法  map类型 存数据或者修改数据
m.has(o) // .get方法是 判断是否有数据
m.delete(o) // delete方法是 删除数据
m.get(o) // .get取数据

const items = [
  ['name', 'wn'],
  ['sex','boy']
]
const map = new Map()
items.forEach(([key, value])=>{
  map.set(key, value)
})
//   === const map = new Map(items)
// Map { 'name' => 'wn', 'sex' => 'boy' }
console.log(map.size) // .size属性获取它的长度

// 实际上不仅仅是数组， 任何具有Iterator接口，只要每一个成员都是双元素数组的数据结构，都可以作为Map的参数
// 所以Set， Map都可以当作参数用来生成 新的Map

const set = new Set([
  ['foo',1],
  ['bar',2]
])

const m1 = new Map(set)
const m2 = new Map([['baz', 3]])
const m3 = new Map(m2) // 因为m2是map类型所以可以传，但是如果是Obj就不可以
console.log(m3.get('baz'))


const map1 = new Map()
// map1.set(1,'aaa').set(1,'bbb')
// console.log(map1.get(1))
const k1 = ['a']
const k2 = ['a']
map1.set(k1,111).set(k2,222)
console.log(map1)  // 对不同对象的引用, 在map结构中视为两个键


let map2 = new Map()
map2.set(-0,123)
map2.get(+0) // 说明对于map来说Numbel类型 +0和-0是一样的，但是+1和-1是不一样的
map2.set(true,1)
map2.set('true',2)
map2.get(true) // String和boor是不一样的
// undefined 和 null也是不一样的  NAN也可以作为key值

// 实例属性和操作方法
const map11 = new Map()
// map11.set('foo', true)
// map11.set('bar', false)
map11.set('abc', 123)
map11.set(22, 'abc')
map11.set(undefined, NaN)
// console.log(map11.size)
// console.log(map11.get(123))
// map11.delete(22)
// map11.clear()
console.log(map11)


// 遍历 
// map数据结构的时候的遍历顺序 一定会按照数据本身的顺序进行
const map3 = new Map([
  ['foo', 'no'],
  ['bar', 'yes']
])
console.log(map3.keys()) // 就是map类型的key值
// for of 遍历的是带有迭代器的
for(let key of map3.keys()) {
 // console.log(key)
}
for(let value of map3.values()){
  // console.log(value)
}
for(let item of map3.entries()){
  console.log(item[0], item[1])
  console.log(item)
}
console.log([...map3])
// map33.prototype[Symbol.iterator] === map.prototype.entries 所以map33和map33.entries()是一样的
map3.forEach((value, key, map) => {
  console.log(key + ':' +value, map)
}) // forEach可以用 但是map方法会报错


// 类型转换
// Map => 对象
function setMapToObj (strMap) {
  let obj = Object.create(null)
  for( let [k,v] of strMap) {
    obj[k] = v
  }
  return obj
}
function setObjToMap (obj1) {
  let map4 = new Map()
  // for(let item in obj1){
  for(let item of Object.keys(obj1)) {
    console.log(item, obj1[item])
    map4.set(item, obj1[item])
  }
  return map4
}
console.log(setObjToMap({a:1,b:2}))
