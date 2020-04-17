function TreeNode (val) {
  this.val = val
  this.next = null
}

var removeDuplicates = function (head) {
  if(head === null || head.next === null) return cur
  let cur = head
  while(cur.next!==null) {
    if(cur.val === cur.next.val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }
  return head
}

let n1 = new TreeNode(1)
let n2 = new TreeNode(1)
let n3 = new TreeNode(2)
n1.next = n2
n2.next = n3 
console.log(removeDuplicates(n1))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      