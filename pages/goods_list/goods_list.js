// pages/goods_list/goods_list.js
import {req} from "../../request/indexReq.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        name:"综合",
        isActive: true
      },{
        name:"销量",
        isActive: false
      },{
        name:"价格",
        isActive: false
      }
    ],
    goods: [],
    // tipsShow: 0
  },
  // 列表查询需要的参数
  queryParams:{
    query: "",
    cid: "0",
    pagenum: 1,
    pagesize: 10,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryParams.cid = options.catid
    this.getGoods(this.queryParams)
    // tips的显示隐藏防抖函数赋值
    // this.tipsDebounce = this.debounce(()=>{
    //   this.setData({
    //     tipsShow: 0
    //   })
    // },2000)
  },

  /**
   *  方法  
   */
  // 网络请求
  async getGoods(options){
    const result = await req({url: "/goods/search",method: "GET",data: {...options}})
    let goods = this.data.goods
    if(result.goods.length === 0){
      return 0
    }
    else{
      goods.push(...result.goods)
      this.setData({
        goods
      })
    }
    console.log(this.data.goods)
  },
  // 事件
  changeTabs(e){
    const i = e.detail.index
    const tabs = this.data.tabs
    tabs.forEach((item,index)=>{
      index === i ? item.isActive = true : item.isActive = false
    })
    this.setData({
      tabs
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.queryParams.pagenum++
    const result = this.getGoods(this.queryParams)
    result.then(result=>{
      if(result===0){
        this.queryParams.pagenum--
        wx.showToast({
          title: '没有更多内容',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
          success: (result) => {
            
          },
          fail: () => {},
          complete: () => {}
        });
          
        // this.setData({
        //   tipsShow: 1
        // })
        // this.tipsDebounce()
      }
    })
  },
  // tipsDebounce(){

  // },
  // debounce(fn,dely){
  //   let timer = null 
  //   return function(){
  //     if(timer !== null){
  //       clearTimeout(timer)
  //     }
  //     timer = setTimeout(() => {
  //       fn()
  //     }, dely);
  //   }
  // }

  // 下拉刷新事件
  onPullDownRefresh(){
    this.queryParams.pagenum = 1
    this.setData({
      goods: []
    })
    this.getGoods(this.queryParams).then(result=>{
      wx.stopPullDownRefresh()
    })
  }
})
