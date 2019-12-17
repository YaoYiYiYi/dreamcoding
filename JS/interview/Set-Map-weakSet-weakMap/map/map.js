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
console.log(map2.get(+0)) // 说明对于map来说Numbel类型 +0和-0是一样的，但是+1和-1是不一样的
map2.set(true,1)
map2.set('true',2)
console.log(map2.get(true)) // String和boor是不一样的
// undefined 和 null也是不一样的  NAN也可以作为key值