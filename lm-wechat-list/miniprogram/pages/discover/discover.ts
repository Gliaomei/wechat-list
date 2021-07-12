// logs.ts
// const util = require('../../utils/util.js')
// import { formatTime } from '../../utils/util'

// -------------第一种方法-------------
Page({
  data: {
    dataList: [], //数据源
    loading: false,
    navbarData: ["Ozworld","看见每一种可能","2020欧洲杯","LOVE UNITES新系列","ADIZERO PRIME X"],
  },
  onLoad():void {
    this.getShowList();
  },
  // 获取列表
  getShowList: function():void {
    let that = this;
    this.setData({ loading: true });
    wx.request({
      url: 'https://example.com/showlist',
      dataType: 'json',
      success(res:any) {
        that.setData({ loading: false });
        wx.stopPullDownRefresh() //停止下拉刷新
        that.setData({ dataList: res.data.list }, function(){
          wx.hideLoading()
        });
      }
    })
  },
  // 上拉加载更多
  onReachBottom: function():void {
    let changeList: Array<any> = [...this.data.dataList];

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
  },
  // 下拉刷新
  onPullDownRefresh: function():void {
    this.setData({ dataList: [] });
    this.getShowList();
  },
})

