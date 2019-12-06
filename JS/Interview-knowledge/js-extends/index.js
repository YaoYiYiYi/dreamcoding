function Person() {
  this.age = 30
}
Person.prototype.say = function() {}
var p = new Person()
p.age = 22
console.log(p.__proto__)
// console.log(p.__proto__ === Person.prototype)
// console.log(Person.prototype.constructor === Person)
console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function Student() {}
Student.prototype.sing = function () {}
var s = new Student()
// 继承的三种方法
// 1. Student.prototype.__proto__ = Person.prototype
// 2. Student.prototype = new Person()
// Student.prototype = Object.create(Person.prototype)
// Object.create的方法实现 原理是mycreate
// function myCreate(obj) {
//   var F = function() {}
//   F.prototype = obj
//   return new F()
// }
// 3. es6 expends使用的方法
function Student1 () {
  // 继承属性
  Person.call(this)
} 
// 继承方法
Student1.prototype = Object.create(Person.prototype)
// 修正 constructor
Student1.prototype.constructor = Student1
var ss1 = new Student1()
console.log(ss1)
