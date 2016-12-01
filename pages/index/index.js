// 创建一个页面对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
var functions = require('../function.js')
var url = 'https://api.douban.com/v2/movie/in_theaters'
var pageSize = 20
Page({
    data:{
        list: [],
        hasMore: true,
        showLoading: true,
        start: 0
    },
    onLoad:function(){
        var that = this
        functions.fetchList.call(that, url , function(data){
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