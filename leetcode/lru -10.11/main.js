// 可以被运行的对象叫做函数
function LRUCache(capacity){
    this.capacity = capacity;//容量
    this.obj = {};//get set 负责存储
    // push 
    //splice 
    //pop移除最后一个 
    // unshift在开头添加元素
    this.arr = [];
}

LRUCache.prototype.get = function(key){
    // 没有的话返回-1 
    if(this.obj[key])
    {
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
        return this.obj[key];
        
    }else{
        return -1;
    }
}
LRUCache.prototype.put = function(key,value){
    if(this.obj[key]){
        //已存在
        this.obj[key] = value;//更新值
        // 调整他的优先级，在某个位置，先把他删除，在把它移动到最前面
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
        return;
    }

    if(this.capacity===this.arr.length)
    {
        var k = this.arr.pop(); //去除且可以返回
        this.obj[k] = undefined;
    }   
    this.obj[key] = value;
    this.arr.unshift(key); //认为最前面是最优先 
}

let cache = new LRUCache(2);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
cache.put(3,3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(3));
console.log(cache.get(4));
console.log(cache.arr,cache.obj)

//console.log(cache.capacity);
