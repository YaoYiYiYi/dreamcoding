function cloneShallow(source) {
  var target = {}
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {//不能将继承的proto的属性拷贝出去
      target[key] = source[key]
    }
  }
  return target
}


function cloneDeep(source){
  if(typeof source !== 'object')
  {
    return source
  }
  var target = Array.isArray(source)?[]:{}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)){//不能将继承的proto的属性拷贝出去
      if(typeof source[key] === 'object'){
        target[key] = cloneDeep(source[key])
      }else{
        target[key] = source[key] 
      }
    }
  }
  return target
}
let a = [0, '1', [2, 3]]

let b = cloneDeep(a)
a[0] = 9
a[2][0] = 4

console.log(b)




function cloneDeep2(x){
  const root = {}
  //栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while (loopList.length) {
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    let res = parent
    // 初始化赋值目标，Key为undefined的拷贝到父元素，否则拷贝到子元素
    if(typeof key !== 'undefined'){
      if(data.hasOwnProperty(k)){
        if (typeof data[k] === "object") {
          //进行下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        }else{
          res[k] = data[k]
        }
      }
    }
  }
  return root
}