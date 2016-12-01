// pages/movie/movie.js
var functions = require('../function.js')
var url = "https://api.douban.com/v2/movie/subject"
Page({
  data:{
    list:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    functions.fetchDetail.call(that, url+"/"+options.id)
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})