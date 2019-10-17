/*function longestCommonPrefix(){

}*/
//const常量声名

/**
 *  @author     ysw
 *  @param      strs 字符串数组
 *  @func       返回最长字符子串
 *  @return     字符中
 */
function isCommonPrefix(strs,middle){
    const prefix = strs[0].substring(0,middle);
    for(let i=1;i<strs.length;i++){
        if(!strs[i].startsWith(prefix)) return false;
    }
    return true ;node
}

const longestCommonPrefix=(strs)=>{
    //最长公众子串，不会比最短的一个字符串长
    if(strs.length===0){
        return ''
    }
    if(strs.length===1){
        return strs[0]
    }
    //定义minLen为无限大 ，算出最小的字符长度
    let minLen = Number.MAX_VALUE;
    for(let i=0;i<strs.length;i++){
        // if(strs[i].length<minLen){
        //     minLen = strs[i].length;
        // }
        minLen = Math.min(minLen,strs[i].length);
        //console.log.apply(minLen);
        let low = 0,   /*动态的左侧 */
            high = minLen;
            while(low<=high){
                const middle = (low+high)>>1;

                //判断是否是公共子串，返回值是boolon
                if(isCommonPrefix(strs,middle)){
                    low= middle+1;
                }
                else{
                    high=middle-1;
                }
            }
            return strs[0].substring(0,(low+high)>>1);
    }

    return strs.length;
    }
const strs=['flower','flow','flight']
console.log(longestCommonPrefix(strs));