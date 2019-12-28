// 接口
const getUsername = (user: User) => {
  user.say = function (words: string) { return  'hello word'}
  user.name
}

interface User{
  name: string,
  age?: number, // 加？是可能存在 也可能不存在undefined
  readonly isMale: boolean, // 加上readonly 就是只读属性，不能修改
  say: (words: string) => string
  //  或者是写 say: Say
}

interface Say {
  (words: string): string
}

interface Config {
  width?: number
  [propName: string]: any // 类型断言 2. 相当于是 外面无论传什么值，就不会报错，他都可以帮他生成
}
function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if(config.width) {
    square = config.width * config.width
  }
  return {area: square}
}

let mySquare = CalculateAreas({width: 5})

// 类型断言
let mySquare1 = CalculateAreas({widdth: 6} as Config) // 1. 不管报错，直接把数据传入

// 3.将字面量赋值给另外一个变量
let options = {widdth: 5}
let mySquare2 = CalculateAreas(options)


interface SupperUser {
  getGrade: () => void
}

// 继承接口
interface VIPUser extends User , SupperUser{
  broadcast: () => void
}