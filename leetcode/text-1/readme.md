arr.push(str)
将str插入进arr中
strs.substring(a,b)  从a开始到b结束 
-----二分查找
  每次从中间查找，符合概率 每次都可以排除一半的元素
  主要是通过 High 和 Low middle 重复的去做计算，并作相应的调整


----位移运算  >>1 除二 取整
     算法的时间复杂度 0(n) log2n


node -v
nodemon --version

---leetcode是大厂算法题的来源
---minLen   0-minLen皆有可能
    取出部分，str[0] str[01]  str[02] .....str[minLen]

    从前往后
    for(let i=0 ;i < strs[i].length;i++){
        str[i].startsWith(str02)  是否包含最小字串
    }
    从后往前[minLen] [minLen-1]......
    概率是一样的，无法确定，和Str有关
    从中间开始，用二分查找

    5>>1 右移1位 0101---0010 等于5/2取整 floor 向下取整 round 四舍五入
    5<<1 左移  5*2 =10  0101---1010