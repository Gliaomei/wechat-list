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
    let list:Array<any> = [];
    // 如果本地有历史记录
    if(wx.getStorageSync("historyList").length !== 0){
      list = [...wx.getStorageSync("historyList")]
    }
    if(this.data.inputValue === ''){
      list.push(wx.getStorageSync('clickItem'))
      this.setData({
        inputValue: wx.getStorageSync('clickItem')
      })
    }else{
      list.push(this.data.inputValue)
    }
    // 去重
    let newList:Array<any> = [];
    for(let i = 0; i < list.length; i++) {
		  if (list.indexOf(list[i]) == i){
        newList.push(list[i])
      }
    }
    wx.setStorage({
      key: "historyList",
      data: newList
    })
    wx.navigateTo({
      url: `../discover/discover?keyword=${this.data.inputValue}`,
    })
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
  },
  //点历史搜索
  searchHistory:function(item:any):void {
    wx.navigateTo({
      url: `../discover/discover?keyword=${item.currentTarget.dataset.item}`,
    })
  }
})
  
  