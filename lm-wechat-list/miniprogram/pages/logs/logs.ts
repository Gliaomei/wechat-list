// logs.ts
// const util = require('../../utils/util.js')
// import { formatTime } from '../../utils/util'

// -------------第一种方法-------------
Page({
  data: {
    dataList: [], //数据源
    windowWidth: 0, //页面视图宽度
    windowHeight: wx.getStorageSync('windowHeight'), //视图高度
    imgMargin: 6, //图片边距: 单位px
    imgWidth: 0,  //图片宽度: 单位px
    topArr: [0, 0], //存储每列的累积top
  },
  onLoad():void {
    let that = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://example.com/showlist',
      dataType: 'json',
      success(res:any) {
        wx.hideLoading();
        that.setData({ dataList: res.data.list }, function(){
          wx.hideLoading()
        });
      }
    })
  },
  // 上拉加载更多
  loadMoreImages: function():void {
    wx.showLoading({
      title: '加载中...',
    })
  let changeList:Array<any> = [...this.data.dataList];

    let tmpArr: Array<any> = [];
    for (let i = 0; i < changeList.length; i++) {
      let index = parseInt(Math.random() * 100 as any) % changeList.length;
      tmpArr.push(changeList[index]);
      changeList.splice(index, 1);
    }
    let dataList = this.data.dataList.concat(tmpArr as any);
    this.setData({ dataList: dataList }, function(){
      wx.hideLoading()
    });
  }
})

