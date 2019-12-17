global.gc()
console.log(process.memoryUsage())
// 引用计数
let array = new Array(4*1024) // []
let map = new Map()
array = null // -1
console.log(process.memoryUsage())