/**
 * @param {number[]} candies
 * @return {number}
 */
// es6新特性在牛客网不是很支持
var distributeCandies = function(candies) {
    // 糖果的种类数
    var count = 0 
    // let arr = []
    let obj = {}
    // candies.forEach(function(item) {
    //   if(!obj[item]){
    //     count++
    //     obj[item] = 1
    //   }
    // })
    for(let candy of candies){
      if(!obj[candy]){
        console.log(candy)
        obj[candy] = candy
        count++
      }
    }
    return count >= (candies.length >> 1) ? candies.length >> 1 : count
};

console.log(distributeCandies([1,1,2,2,3,3]))