let sum = 0
for (let i=0 ;i<100000000;i++) {
  sum += i
}
this.postMessage(sum)
this.onmessage = function () {}