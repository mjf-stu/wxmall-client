// index.js
// 获取应用实例
// const app = getApp()
const {getSwiperImgs} = require("../../request/indexReq")

Page({
    data: {
        swiperImgs:[]
    },
    //options(Object)
    onLoad: function(options) {
        // 获取图片轮播图片
        getSwiperImgs().then((result)=>{
            console.log(result)
            this.setData({
                "swiperImgs": result.data.message
            })
        }).catch(err=>{console.log(err)})
    },
    onReady: function() {
        
    },
    onShow: function() {
        
    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item) {

    }
});
  
  