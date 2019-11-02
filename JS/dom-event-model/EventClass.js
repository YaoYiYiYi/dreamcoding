class Events{
    constructor(){
        this.listener = {}
    }
    on(key,fn){
        if(!this.listener[key]){
            this.listener[key] = []
        }
        this.listener[key].push(fn)
    }
    emit(key){
        for(let fn of this.listener[key]){
            fn()
        }
    }
}
const ev = new Events()
ev.on('price_down',()=>{console.log(1)})
ev.on('price_up',()=>{console.log(2)})
ev.emit('price_up')

const subPub = {
    'price':[
        ()=>{console.log(3)},
        ()=>{console.log(4)}
    ]
}
// var price = new Events()
// for(let fn of subPub.price){
//     price.on(fn)
// }
// price.emit()

function foo(){
    console.log('foo')
}
// 在subPub上面添加一个 value为数组的key (foo)  把foo 放入数组里
console.log([].push(foo))
subPub.foo = [].push(foo)
console.log(subPub)
// subPub.foo.push(foo)
// console.log(subPub)
