/**
 * 
 * @param {arry} piles 
 * @param {int} H 
 * @return {int} K 
 * @function   最慢的吃法
 */

const canEatAllBAnanas=(piles,H,mid)=>{
    let h=0;
    /*for(let i=0;i<piles.length;i++){
        h +=Math.ceil(piles[i]/mid)
    }*/
    for(let pile of piles){
        h+=Math.ceil(pile/mid);
    }
    if(h<=H)
    {
        return true;
    }
    else{
        return false;
    }
}

const minEatingSpeed = (piles,H)=>{
    let low = 1;
    let high = Math.max(...piles);
    /* Math.max() = ....
     for(let i = 0;i < piles.length;i++){
        if(piles[i]>hi){
            hi = piles[i];
        }
    }*/ 
    let mid=0;
    while(low<=high){
         mid=low+((high-low)>>1);
         console.log(low,mid,high,'-------');
        if(canEatAllBAnanas(piles,H,mid)){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    console.log(low,mid,high,'-------');
    return low ;
}
console.log(minEatingSpeed([3,6,7,11,8],8));