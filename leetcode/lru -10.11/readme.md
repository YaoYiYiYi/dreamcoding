- es5
  JS 的过去
        在es5 里面没有class类 和关键字

在JS中，函数是很重要的
        function LRUcache 定义了一个类 
        类就可以被new
        构造函数
        new LRUCache 可以被实例化

 new 发生了什么？
        生成了一个对象 {} Object
        内存中生成了一个空的对象 {} new
        加上属性 构造函数里面需要加上this 


        面向对象编程  类 ，构造函数 ， 方法， 属性 
            class  constructor
        function A   函数本身 prototype this. 

        函数具有prototype属性  ，对象不具有

        火车头是构造函数 constructor  prototype对象

        基于原型的面向对象



-----
     任何函数都有 prototype属性 他的值是对象，
     key =>function(){}
----任何对象都是 __proto__,指向 构造函数的prototpe属性 
  JS的面向对象，类和实例的关系，不是父子关系，没有血缘

  JS 的面向对象是基于原型的

---new 的过程是什么
    构造函数 被执行，内部会创造一个this 帮助指向对象 添加了属性
    在这个对象上的 __proto__ 属性 找到原型链上的方法
    cache instanceos LRUCache
    JS 之中没有类的概念， LRUCache也是对象 


- es6 7 8 9

             2
1            1
1   2        0
get(1)
2   1
--装 容量 
--push 最后一个元素是最重要的
--下标0 的元素可以被替代的
---空间是否还在有
-- 访问get  返回在哪， 在原位置删除，且把它放到最后面去
   