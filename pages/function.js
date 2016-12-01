module.exports = {
    fetchList: function (url, cb) {
        var that = this
        fetch(url).then(function (response) {
            response.json().then(function (data) {
                if (data.subjects.length === 0) {
                    that.setData({
                        hasMore: false,
                    })
                } else {
                    that.setData({
                        list: that.data.list.concat(data.subjects)
                    })
                }
                cb(data)
            })
        })
    },
    fetchDetail: function (url) {
        var that = this
        fetch(url).then(function (response) {
            response.json().then(function (data) {
                that.setData({
                    list: data
                })
            })
        })
    },
    fetchMovie: function (url,cb) {
        var that = this
        fetch(url).then(function (response) {
            response.json().then(function (data) {
                that.setData({
                    list: data.subjects
                })
                cb(data)
            })
        })
    }
}