// pages/index/index.js
const articleList = require('./articleList.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: articleList.data
  },
  // requestArticle(){
  //   wx.request({
  //     url:'http://static.zhaoboy.com/ikcamp-mock/list.json',
  //     success:(res)=>{
  //       //console.log(res.data)
  //       console.log(JSON.parse(res.data))
  //     }
  //   })
  //},

  gotoDetail:function(){
    wx.navigateTo({
      url:'../detail/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.requestArticle();
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