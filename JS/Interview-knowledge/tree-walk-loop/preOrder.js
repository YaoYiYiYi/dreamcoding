const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left:{
        val: 5
      },
      right: {
        val: 6,
        left: {
          val: 8
        }
      }
    },
    right: {
      val: 7,
      right: {
        val: 9
      }
    }
  },
  right: {
    val: 3
  }
}
let arr = []
// 爆栈
// 手动维护一个栈
const preOrder = function(tree) {
  if(tree.val){
    arr.push(tree.val)
  }
  if(tree.left){
    preOrder(tree.left)
  }
  if(tree.right) {
    preOrder(tree.right)
  }
}
preOrder(tree)
console.log(arr)

function loopPreOrder(tree) {
  let stack = []
  let res = []
  let current = tree
  stack.push(current)
  while(stack.length > 0){
    while(current){
      res.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    console.log(current)
    current = current.right
  }
  return res
}
console.log(loopPreOrder(tree))