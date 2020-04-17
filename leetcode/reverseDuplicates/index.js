var ListNode = function (val) {
  this.val = val
  this.next = null
}

var reverseDuplicate = function (head) {
  if(head === null || head.next === null) return head
  let cur = head
  let pre = null
  while(cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    // console.log(pre)
    cur = next
  }
  return pre
}
let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
console.log(reverseDuplicate(n1))