// pages/goods_detail/goods_detail.js
import {req} from "../../request/indexReq.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetailData(options)
  },

  async getDetailData(options){
    let result = await req({url: "/goods/detail",data: {goods_id: options.goods_id},method: "GET"})
    this.setData({
      goodsData: result
    })  
    console.log(result)
  }

})