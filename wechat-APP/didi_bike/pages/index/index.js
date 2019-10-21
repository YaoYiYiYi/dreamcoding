// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[],
    longitude:116.438502,//经度
    latitude:39.902383,//维度
    scale:18//缩放等级
  },
  tocreateMarkers(longitude,latitude){
    let markers = [
      {
        "id":1,
        "iconPath":"/images/map-bicycle.png",
        "latitude":latitude,
        "longitude":longitude,
        "width":52.5,
        "height":30,
        "callout":{}
      }
    ]
    this.setData({
      markers
    })
  },
  toVisit(e){
    console.log(e)
  },
  toScan(){
    return wx.scanCode({
      success:(res)=>{
        //console.log(res)
        wx.showModal({
          title:'scan',
          content:JSON.stringify(res)
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中'
    })
    //手机的GPS
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        console.log(res)
        let {longitude,latitude} = res;
        this.tocreateMarkers(longitude,latitude)
        this.setData({
          longitude,
          latitude
        },()=>{
          wx.hideLoading()
        })
      }
    })
  },
  toUser(){

  },
  toMsg(){

  },
  toReset(){
    //当你使用地图来来去去的，返回原来的界面
    this.mapCtx.moveToLocation();
    this.setData({
       scale:18
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 地图上下文环境  把地图的组件放入到JS中(用id)
    this.mapCtx = wx.createMapContext('myMap')
    
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