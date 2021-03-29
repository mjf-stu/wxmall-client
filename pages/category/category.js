// pages/category/category.js
import {req} from "../../request/indexReq.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightContent: [],
    current: 0,
    scrollTop: 0
  },
  Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getCategoryData()

    // 缓存
    // let Cates = wx.getStorageSync("Cates");
    // console.log(Cates)
    // if(!Cates){
    //   this.getCategoryData()
    // }
    // else{
    //   this.setData({
    //     leftMenuList: Cates.data.map(i=>i.cat_name),
    //     rightContent: Cates.data.map(i=>i.children)
    //   })
    // }
  },

  /**
   * 获取当前页面数据的方法
   */
  getCategoryData(){
    req({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
      method: "GET"
    }).then((result)=>{
      console.log(result)
      this.Cates = result.data.message
      this.setData({
        leftMenuList: this.Cates.map(i=>i.cat_name),
        rightContent: this.Cates.map(i=>i.children)
      })
      // 缓存数据
      wx.setStorageSync('Cates', {time: Date.now(),data: this.Cates});
      console.log(this.data.leftMenuList)
      console.log(this.data.rightContent)
    })
  },
 
  /**
   * 事件相关方法
   */
  itemSelected(e){
    let i = e.currentTarget.dataset.i
    if(i!==this.data.current){
      console.log(this.data.scrollTop)
      this.setData({
        current: i,
        scrollTop: 0
      })
    }
  }
})