const add = (a: number, b?: number) => {
  return a + (b ? b : 0)
}

const add1 = (a: number,...rest: number[]) => {
  rest.reduce((a,b)=> {
    return a + b 
  }, a)
}

// 函数重载

interface Direction2{
  top: number,
  right: number,
  bottom: number,
  left: number
}
function assigned(top: number): Direction2
function assigned(top: number, left: number): Direction2
function assigned(top: number, left: number,bottom: number ,right: number): Direction2


function assigned (a: number,b?: number, c?: number,d?: any) {
  if(b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if ( c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}

// 重载

assigned(1,2)