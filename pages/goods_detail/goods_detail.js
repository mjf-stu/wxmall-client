// pages/goods_detail/goods_detail.js
import {req} from "../../request/indexReq.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData: {},
    bigPicsShow: 0,
    initImgIndex: 0
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
      goodsData: {
        pics:result.pics,
        goods_price:result.goods_price,
        goods_name:result.goods_name,
        goods_introduce:result.goods_introduce.replace(/\.webp/g,".jpg")
      }
    })  
    console.log(result)
  },

  showBigImage(e){
    let pics = this.data.goodsData.pics.map(e=>e.pics_sma_url)
    wx.previewImage({
      current: pics[ e.currentTarget.dataset.index],
      urls: [...pics],
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
    // this.setData({
    //   initImgIndex: e.currentTarget.dataset.index,
    //   bigPicsShow: 1
    // })
  },

  closeBigImg(e){
    this.setData({
      initImgIndex: 0,
      bigPicsShow: 0
    })
  }
})