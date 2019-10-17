function create(obj){
    // 返回一个实例对象
    //对象，它的对象是obj

    // tom.__proto__= obj;
    // return tom;
    function F(){}
    F.prototype = obj;
    return new F() ;
}
var Person = {
    name = 'noname',
    age = '0',
    greet: function(){
         console.log(`hello,${this.name}`)
    }
}
var tom = creat(Person);
tom.name = 'tom';
console.log(this.tom)