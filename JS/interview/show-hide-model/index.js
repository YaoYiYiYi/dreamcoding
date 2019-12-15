// 显隐式原型

// function Person (name) {
//   this.name = name
// }
// let p = new Person('wn')
// p.__proto__ = Person.prototype
// console.log(p.__proto__)
// console.log(Person.__proto__)
// console.log(Function.__proto__)  函数的上一级也还是函数


// var foo = {}
// var foo = new Object()
// var F = function() {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)
// console.log(foo.b) 对象拿不到函数的原型链
// console.log(Foo.a)
// console.log(Foo.b) 函数可以拿到对象的原型链

// function Person(name) {
//   this.name = name
//   return {} // 如果构造函数中return的是对象的话，那么就会影响后面的构造对象
// }
// let p = new Person('wn')
// console.log(p)


// for in 返回的数组的下标
// for in 会显示原型链上面的值和添加的值
// Array.prototype.method = function() {}
// var myArray = [1,2,3,4,5,6,7] 
// myArray.name = 'wn'
// for(let index in myArray){
//   console.log(index)
// }
// console.log(myArray)
Array.prototype.method = function() {}
var myArray = [1,2,3,4,5,6,7] 
myArray.name = 'wn'
for(let index of myArray){
  console.log(index)
}

// for in
// 1. index是索引，不是值
// 2. 遍历的顺序可能不是按照实际数组的内部顺序进行的
// 3. 使用for in 会遍历数组的所有的可枚举的属性，包括原型

// for of
// 1. 遍历的是数组的元素
// 2. 遍历不包括数组的原型和索引
