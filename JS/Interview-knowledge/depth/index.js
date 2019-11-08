// let a = {
//   name: 'wn',
//   book: {
//     title: "you don't konw js",
//     price: "45"
//   }
// }
// let b = a
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)


// let a ={name:'wc'}
// let b={age:'18'}
// let c={}
// Object.assign(c,a,b)
// console.log(c,a)

// let a = {
//   name: 'wn',
//   book: {
//     title: "you don't konw js",
//     price: "45"
//   }
// }
// let b = Object.assign({},a)
// let b = {...a} 既不是深拷贝也不是浅拷贝要看元素分析
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)


// let a = [0, '1', [2,3]]
// let b = []
// b = ['1', [2,3]]
// let b = a.slice(1) //既不是深拷贝也不是浅拷贝要看元素分析
// a[1]='22'
// a[2][0]=4
// console.log(b)