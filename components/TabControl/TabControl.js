// components/TabControl.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemSelected(e){
      const index = e.currentTarget.dataset.i
      this.triggerEvent("changeTabs",{index})
    },
  }
})
