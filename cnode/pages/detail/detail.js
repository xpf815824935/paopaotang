// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   detail:{},
   hidden: false,
  //  is_cllect:false,
   modalHidden: true,

   title: '话题详情',
   collectText: '收藏'

  },
   collect: function() {
    //  用户登录了吗
    // 本地存储
    var accesstroken =
      wx.getStorageSync('CuserInfo').accesstroken;
    if(!accesstroken){
       this.setData({
         modalHidden: false
       })
    }

   },

  onLoad: function (options) {
  // id 解析
  var id = options.id 

 ;
  // console.log(id);
  this.fetchData(id);
  },
 // 获取详情页数据
 cancelChange: function() {
    
 },
 confirmChange: function() {
  this.setData({
    modalHidden: true
  });
  wx.navigateTo({
    url: '/pages/login/login'
  })
 },
 fetchData: function(id) {
    var url = 'https://cnodejs.org/api/v1/topic';
    url += '/' + id + '?mdrender=false';
    console.log(url);
    var that = this ;
    wx.request({
      url: url,
      method: 'GET',
      success: function(res) {
        console.log(res.data.data);
        // console.log(res.data.data);
        // this
        that.setData({
          detail:res.data
        });
        setTimeout(function() {
          that.setData({
            hidden: true,
            detail:res.data.data
          });
        }, 1000)
      }
    })

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