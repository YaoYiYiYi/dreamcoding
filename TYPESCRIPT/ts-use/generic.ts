// 泛型

// const arr: Array<number> = [1,2,3]
// let x: [number,string]   
// x = [1,'w']

// 声明泛型变量 <T> 它用于捕获开发者传入的参数类型， 我们就可以使用这个变量T 做参数类型和返回值的类型
function returnItem1<T> (para: T): T{ // T就是泛型变量
  return para
}

function swap<T,U>(tuple:[T, U]) {
  return [tuple[0],tuple[1]]
}
swap([1,'wn'])



// 泛型变量
function getArrayLength<T> (arg: Array<T>) {
  console.log(arg.length)
  return arg
}

// 泛型接口
interface ReturnItem<T> {
  (para: T): T
}
const returnItem: ReturnItem<number> = para => para



// 泛型类

// class Stack {
//   private arr: number[] = []
  
//   public push(item: number) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }
class Stack<T> {
  private arr: T[] = []
  
  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
const app = new Stack
app.push('123')

// 泛型约束
type Params = number | string
class Stack1<T extends Params> {
  private arr: T[] = []
  
  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
// const stack = new Stack1()
// stack.push(true) 报错



// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T,key: U) { // obj={}
  return obj[key]
}
const a = {
  name: 'wn',
  id: 1
}
getValue(a, 'id')


// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}
// 一个东西是不能继承两个接口的，所以要把两个接口合并成一个大接口
interface ChildInterface extends FirstInterface,SecondInterface {}
class Demo<T extends ChildInterface> {

  private genericProperty!: T
  useT () {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse()
  }
}



// 泛型与new 
// {new():T} 泛型可被构造
function fatory<T> (type: {new():T}):T {
  return new type()
}