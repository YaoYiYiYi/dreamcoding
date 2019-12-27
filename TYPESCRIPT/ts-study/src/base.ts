// ts中的原始数据类型
const isLoading: boolean = false
const decLiteral: number = 6
const hexLiteral:number  = 0xf00d // 不管多少进制都是Number
const book: string = "深入浅出 TypeScript"

// void 空类型
function use(): void {
  console.log('wn')
}
const a:void = undefined
const b:null = null

let u: undefined = undefined
let n: null = null

const sym1 = Symbol('key1')
const sym2 = Symbol('key2')
// symbol('key1') === symbol('key2') // false


// 大树整型
// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2 true
// const max = bigint(Number.MAX_SAFE_INTEGER)
// const max1 = max + 1