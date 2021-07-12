// logs.ts
// const util = require('../../utils/util.js')
// import { formatTime } from '../../utils/util'

// -------------第一种方法-------------
Page({
  data: {
    placeholder: '',
    inputValue: '',
    historyList: [],
  },
  onLoad():void {
    this.setData({placeholder: wx.getStorageSync('clickItem')})
    if(wx.getStorageSync("historyList").length !== 0){
      this.setData({
        historyList: wx.getStorageSync("historyList")
      })
    }
  },
  // 搜索方法
  searchHandle: function():void{
    // 如果input搜索为空 则直接搜素 点击进入的item
    let list:any[] = []
    // 如果本地有历史记录
    if(wx.getStorageSync("historyList").length !== 0){
      list = [...wx.getStorageSync("historyList")]
    }
    if(this.data.inputValue === ''){
      list.push(wx.getStorageSync('clickItem'))
      wx.setStorage({
        key: "historyList",
        data: list
      })
    }else{
      list.push(this.data.inputValue)
      wx.setStorage({
        key: "historyList",
        data: list,
      })
    }
    wx.navigateBack({
      delta: -1
    });
  },
  // 清空
  clearHistory:function():void{
    this.setData({
      historyList: [],
    })
    wx.setStorage({
      key: "historyList",
      data: [],
    })
  }
})
  
  