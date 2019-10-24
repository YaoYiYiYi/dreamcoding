// pages/index/index.js
const Grid = require('./grid.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      num:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const gameGrid = new Grid(4)
    this.game = gameGrid//为了方便后面调用
    //两个格子 
    this.addRandomData();
    this.setData({
      num :gameGrid.grid
    })
  },
  addRandomData() {
      let cell = this.game.selectCell();
      this.game.grid[cell.i][cell.j] = Math.random()>0.5 ? 2:4;
  },
  game :null,
  startX:0,
  startY:0,
  endX:0,
  endY:0,
  touchstart(event){
    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  },
  touchmove(event){
    const touch = event.touches[0];
    this.endX = touch.clientX;
    this.endY = touch.clientY;
  },
  touchend(event){
    // const touch = event.touches[0];
    // this.endX = touch.clientX;
    // this.endY = touch.clientY;
    //console.log(this.startX,this.startY,this.endX,this.endY)
    const disX = this.startX-this.endX;
    const disY = this.startY -this.endY;
    const absDisX = Math.abs(disX)
    const absdisY = Math.abs(disY)
    if(absDisX>10||absdisY>10){
      // 0代表上，1代表右，2代表下，3代表左
      /*if(absDisX>absdisY){
         if(disX>0){
           return 3
         }
         else{return 1}
      }*/
      var direction = absDisX >absdisY ? (disX<0?1:3) : (disY<0?2:0)
      console.log(direction)
      this.move(direction)
    }
  },

  move(direction){
     //数字的合并
     this.combine()
  },
  combine(direction){
    //数字的滑动，把数字靠边
    var arr = this.game
    if(direction ===0){

    }
  
    slideNumber()
    
  },
  slideNumber(arr){
    //['' ,'2' ,' ', 2]=>[2,2,'','']
    let current = 0
    for(let i=0;i<arr.length;i++){
      if(arr[i]!==''){
        arr[current] = arr[i];
        current++
      }
    }
    for(let j=current;j<arr.length;j++){
      arr[j]=''
    }
    return arr
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})