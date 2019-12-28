// 抽象类
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming this earch ...')
  }
}

// const animal = new Animal() 无法创建一个抽象类的实例
class Cat extends Animal{
  makeSound() {
    console.log('喵喵喵')
  }
}
const animal = new Cat() // 可以先继承在 创建实例
animal.move()

// 访问限定符
class Cat1 {
  public run () {
    console.log('跑起来了')
  }
  private eat () { // 私有的 只能在类当中被调用
    console.log('eating')
  }
  protected sleep () {  // 只能被类的内部 和类的子类访问
    console.log('sleeping')
  }
}
const cat1 = new Cat1()
cat1.run()
// cat1.eat() 会报错，私有的 只能在类当中被调用
// cat1.sleep()

class Cat2 extends Cat1 {
  init () {
    this.run()
    this.sleep()
  }
}
const  cat2 = new Cat2()


// class可以作为接口
// export default class Props {
//   public Children: Array<React.ReactElement<any>>
// }