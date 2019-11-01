const Events = require('events')
const ev = new Events()
// 订阅 如果price发生变化，就会输出
ev.on('price_up',()=>{
    console.log('123')
})
ev.on('price_down',()=>{
    console.log('456')
})

// 发布 
ev.emit('price_up')
ev.emit('price_down')

