let notSure:any = 4 //"4"
notSure = "wn"

let value: any 
value = true
value = 1
value = 'hello'
value = Symbol('type')
value = {}
value = []
value.foo.bar


let val: unknown
val = true
val = 1
val = 'hello'
val = Symbol('type')
val = {}
val = []
// val.foo.bar 会报错

// never 永远不存在的类型 类型是任何类型的子类型， 也可以赋值给任何类型
// 然而没有类型是never类型的子类型 或 赋值给never类型

// 可以用never的就可以用别的类型,用了别的不一定能用never
// let test: never = "hello" 会报错
function error(message: string) { //function类型可以指明也可以不指明类型
  throw new Error(message)
}
const empty: never[] = [] // 永远为空数组

// Array
const list: number[] = [1,2,3,4]
const list1: Array<number> = [1,2,3,4] // 泛型是一种定义数组的模式
const list2: Array<number | string> = []
// {
//   0: string,
//   1: number,
//   length: 2
// }

// Tuple 元组
let x: [string,number] // 定义几种类型，在元组中就必须用到，如果没有出现也会报错
x = ['hello',10]
// x = [10, 'hello'] 顺序也不能和定义的 不一样， 不然也会报错

// object
enum Direction {
  center = 1
}
let value1: object

value1 = Direction
value1 = [1]
value = [1,'hello']
value = {}

