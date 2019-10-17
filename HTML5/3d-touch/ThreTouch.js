const FRAME_WIDTH = 988/4;
   FRAME_HIGHT =1164/6,
   MASK_WIDTH = 146;

class ThreeDTouch{
    //构造函数  可以封装
    constructor (el,callback){
        this.el = el;
        this.callback = callback;
        this.bindEvents();//调用对象的bindEvents
    }
    bindEvents(){
        this.el.addEventListener('touchstart',this.touchDidStrat);
        this.el.addEventListener('touchforcechange',this.touchForceDidChange)
    }
touchDidStart(){

}
touchForceDidChange(event){
     document.getElementById('force_val')
     .innerHTML = event.touches[0].force;
}

}
let toucher = new ThreeDTouch(document.getElementById('force_btn'),function(){

})