// es6中新的 set数据结构  set-map-weakSet-weakMap
var a = new Set() // set类型类似数组,但是没有索引,成员的值是唯一的
let b = [2,3,4,5,6,4,2,3]
// 给set的类型增加值时候，用add()
b.forEach(x => a.add(x))
// Array.from(arry) 可以强制转化成数组的类型
for(let i of a){
  // console.log(i)
}

const items = new Set([1,2,3,4,5,5,4])
console.log(items.size) // set没有length方法但是有size方法

// let a = [...new Set([1,2,3,4,5,5,4])] 没有重复项的数组
let c = [...new Set('abcdbc')].join('') // set也可以做字符串的去重
// console.log(c)
let set = new Set()
let a1 = NaN
let b1 = NaN
set.add(a1)
set.add(b1)
// console.log(a1===b1) 在js中NAN和NAN是不一样的
// console.log(set) 在set中NAN和NAN是一样的, 所以会去重

let set1 = new Set()
let a11 = {a:1}
let b11 = {a:1}
set1.add(a11)
set1.add(b11)
console.log(set1.size) // 在set中对象和对象是不一样的

let s = new Set()
s.add(1).add(2).add(2)
console.log(s.size)
console.log(s.has(1))
console.log(s.has(3)) // set有一个has方法, 可以判断是否存在某个值
console.log(s)
s.delete(2) // set自带一个delete方法
console.log(s)

// set类型可以, 用Array.from(set)转化为数组型

let set22 = new Set(['red','yellow','blue'])
// [{'red':'red'}, {'yellow':'yellow'},{'blue':'blue'}] set的实际显示有key value

// Set.prototype[Symbol.iterator] === Set.prototype.values
for(let item of set22.values()){ // set.values === set
  console.log(item)
}
for(let item of set22.keys()){
  console.log(item)
}
for(let item of set22.entries()){
  // 返回key和value
  console.log(item)
}
set22.forEach((value, key) =>{
  console.log(key+':'+value)
})

let arr = [...set22] // set类型可以进行解构
console.log(arr)

let testArr = [1,2,3,4,3,2]
let unique = [...new Set(testArr)]
console.log(unique)

let onreset = new Set([1,2,3])
// onreset = [...onreset].map(x => x*2)
// onreset = [...onreset].filter(x=> x%2 ==0)

let d = new Set([4,3,2])
// 并集
let union = new Set([...onreset,...d])
// 交集
let intersect = new Set([...onreset].filter(x=> b.has(x)))
// 差集
let difference = new Set([...onreset].filter(x =>!b.has(x)))
console.log(union)