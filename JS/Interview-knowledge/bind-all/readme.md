## call apply bind
都可以 绑定 this
call / apply 是同一类的，可以调用函数
```js
function foo(a,b) {}
// foo()
// foo.call(this,a,b)
// foo.call(this,[a,b])
```

# 柯里化(curry)
函数式编程
bind可以进行绑定第一个固定参数