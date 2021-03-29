// pages/category/category.js
import {req} from "../../request/indexReq.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightContent: [],
    current: 0
  },
  Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryData()
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
      console.log(this.data.leftMenuList)
      console.log(this.data.rightContent)
    })
  }
 
})