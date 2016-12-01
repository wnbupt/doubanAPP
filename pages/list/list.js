// pages/list/list.js
var functions = require("../function.js")
Page({
  data:{
    list:[],
    showLoading:true
  },
  onLoad:function(options){
    console.log(options.id);
    var url = "https://api.douban.com/v2/movie/"+options.id
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    functions.fetchMovie.call(that, url,function(data){
            that.setData({
                showLoading: false
            })
    })
  },
  getDetail:function(e){
        wx.navigateTo({
          url: '../movie/movie?id='+e.currentTarget.dataset.id,
          success: function(res){
            console.log("success");
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})