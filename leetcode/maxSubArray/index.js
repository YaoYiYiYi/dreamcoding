var maxSubArray = function(nums) {
    var max = nums[0] 
    let arry = [nums[0]]
    let maxIndex
    for (let i = 1; i < nums.length; i++){
      if(arry[i-1] > 0) {
        maxIndex = arry[i-1] + nums[i]
      } else{
        maxIndex = nums[i]
      }
      arry[i] = maxIndex
      if(maxIndex > max) {
        max = maxIndex
      }
    }
    return max
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(1 / 0) // 等于infinity 无穷