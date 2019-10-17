--new 的过程
1. 创建一个空对象{}
2. new functionA(){ }
   函数运行时， 会产生  this{}（动态决定的） <= this.name
   当我们的函数不是以new 的方式运行的时候  FunctionA就是一个普通函数 this是指向window
        启动严格模式,'use strict';this是Undefined
    arguments
    两口子之间的关系  constructor prototype 一个提供属性，一个提供方法
    JS中没有类， person对象(函数)
    woniu.__proto__ === Person.prototype

    this 当作为对象的方法被执行时，指向对象
    woniu.sing()=====woniu

    new Peoson 的this指向 实例
    普通函数  Person 的this 是指向 undefined或者是window




----面向对象的做法 三种
    constructor + prototype 基于原型
    es6 class 关键字
    Object.create(原型对象)

---手写代码是JS考试的方式
    Object.create()
    function create(Obj){
        function F(){} //空函数

        F.prototype = obj;
        return new F();//返回的是一个对象
    }
    

