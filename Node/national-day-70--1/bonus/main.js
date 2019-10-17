//salary 绩效等级
// A 12
// B 6
// C 3
// D 0

let caculateBonus = null;

// 对象字面量，发钱的策略，和计算分离开来
let categories = {
    's':(salary)=>{
        return salary*60;
    },
    'A':(salary)=>{
        return salary*24;
    },
    'B':(salary)=>{
        return salary*18;
    },
    'C':(salary)=>{
        return salary*15;
    },
    'D':(salary)=>{
        return salary*12;
    }
}
caculateBonus = (salary,type = 'C') =>{
    let bounce = categories[type](salary)
    return bounce;
}
//计算过程
//  caculateBonus = (salary,type='C')=>{
//      let bounce;
//      switch(type)
//      {
        
//          case 'A':
//              bounce = salary*24
//          break;
//          case 'B':
//               bounce = salary*18
//          break;
//          case 'C':
//               bounce = salary*15
//          break;
//          case 'D':
//               bounce = salary*12
//          break;
         
//      }
//      return bounce;
 //   }
    console.log(caculateBonus(20000,'A'));