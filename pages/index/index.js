// index.js
// 获取应用实例
// const app = getApp()
// commonJS
// const {req} = require("../../request/indexReq")
// ES6
import {req} from "../../request/indexReq.js"

Page({
    data: {
        swiperImgs:[],
        navImgs:[],
        floorList:[],
        floor_title:[],
        product_list:[],
    },
    //options(Object)
    onLoad: function(options) {
        this.getSwiperList()
        this.getNavList()
        this.getFloorData()
    },

    // 请求后台数据
    getSwiperList(){
        req({
            url: '/home/swiperdata',
            method: "GET"
        }).then((result)=>{
            console.log(result)
            this.setData({
                swiperImgs: result
            })
        }).catch(err=>{console.log(err)})
    },
    getNavList(){
        req({
            url: "/home/catitems",
            method: "GET"
        }).then(result=>{
            console.log(result)
            this.setData({
                navImgs: result
            })
        })
    },
    getFloorData(){
        req({
            url: "/home/floordata",
            method: "GET"
        }).then(result=>{
            console.log(result)
            this.setData({
                floorList: result
            })
            let titles = []
            let lists = []
            for(let i=0 ; i<=this.data.floorList.length-1;i++){
                titles.push(this.data.floorList[i].floor_title)
                lists.push(this.data.floorList[i].product_list)
            }
            this.setData({
                floor_title: titles,
                product_list: lists
            })
            console.log(this.data.product_list)
            titles=null
            lists=null
        })
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
  
  