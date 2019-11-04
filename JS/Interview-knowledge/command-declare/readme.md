// 类数组 有数组的特征
// 有着数组的下标索引 可以去获取值，有length长度
//利用Array.isArray(),可以判断是否是数组

function foo(a,b,c,d){
    console.log(arguments,
    Array.isArray(arguments),arguments[0],arguments.length) //arguments就是类数组
}
foo(1,2,3,4)


let arry = [1,2,3,4]
arry.reduce((pre,next) => {
    console.log(pre,next)
    return pre + next
})
1,2  3,3  6,4  return 10

申明式代码  
并不关系过程，只关系结果