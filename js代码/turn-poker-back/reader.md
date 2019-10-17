var 和 function 相当于把定义提前

console.log(a);
var a = 1;
=====
var a ;
console.log(a);
 a = 1;

arr[1,2,3,4,5]
 arr.sort((a,b)=>a-b); //表示a-b<0,则原封不动，用于升序
                 b-a   //表示b-a<0,则原封不动, 用于降序

 arr.sort((a,b)=>0.5-Math.random()) //乱序，随机排列，伪随机

