var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}
// let k = 'left'
// console.log(tree[k])

// 先序遍历
// function preOrder (tree) {
//   if(tree.left){
//     preOrder(tree.left)
//   }
//   console.log('value: ',tree.value)
//   if(tree.right){
//     preOrder(tree.right)
//   }
// }
// preOrder(tree)

// 深度优先,栈来处理递归
var preOrderUnRecur = function (tree) {
  if(!tree){
    throw new Error('Empty Tree')
  }
  let stack = []
  stack.push(tree)
  while (stack.length !== 0) {
    tree = stack.pop() // 返回删除最后一项
    console.log(tree.value)
    if (tree.right) {
      stack.push(tree.right)
    }
    if (tree.left) {
      stack.push(tree.left)
    }
  }
}
preOrderUnRecur(tree)

// 广度优先
var BreadthFirstUnRecur = function (tree) {
  if(!tree){
    throw new Error('Empty Tree')
  }
  let stack = []
  stack.push(tree)
  while (stack.length !== 0) {
    tree = stack.shift() // 返回删除首项的那一项
    console.log(tree.value)
    if (tree.left) {
      stack.push(tree.left)
    }
    if (tree.right) {
      stack.push(tree.right)
    }
  }
}
BreadthFirstUnRecur(tree)
