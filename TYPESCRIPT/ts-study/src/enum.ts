enum Direction{
  up = 'up',
  Down = 'down',
  Left = ' left',
  right = 'right'
}
console.log(Direction['Down'])

// 异构枚举, 值得是放不同的数据类型
enum yg {
  no = 0,
  yes = 'Yes'
}

// 反向映射
enum a {
  Up,
  DOwn,
  Left,
  Right
}
// a[a['up']] = up


// 联合枚举
const enum a1{
  up,
  Down,
  Left,
  right
}

var aa: number = 0
// console.log(aa === a1['up'] ) // true


type c = 0 // 定义类型
declare let bb: c
// bb = 1 会报错
// bb = a1['up']  是ok的

enum Animal1 {
  Dog,
  Cat
}
declare let a3: a1

a3 = a1.up
// a3 = Animal.Dog 会报错，因为a3 已经定义了别的类型，是不能赋值别的枚举类型
enum Animal1 { //如果继续定义的话，就会和之前定义的合并
}
