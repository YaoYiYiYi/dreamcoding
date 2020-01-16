var removeDuplicates = function(nums) {
    const size = nums.length
    let slowP = 0
    for(let fastP = 1; fastP < size; fastP++) {
      if(nums[slowP]!==nums[fastP]) {
        slowP++
        nums[slowP]= nums[fastP]
      }
    }
    // console.log(nums)
    return slowP+1
};
console.log(removeDuplicates([1,1,2]))