Page({
    data: {
    },
    getList: function (e) {
        var id = e.currentTarget.dataset.id
        console.log(id)
        wx.navigateTo({
            url: '../list/list?id='+id,
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    }
})