Page({
  data: {
    categoriesList: [], //数据源
    loading: false,
    navbarData: ["Ozworld","看见每一种可能","2020欧洲杯","LOVE UNITES新系列","ADIZERO PRIME X"],
    contentId: '',
    layout: [],
  },
  onLoad():void {
    this.getCategoriesList()
  },
  // 获取分类列表
  getCategoriesList():void {
    let _this = this;
    let list = [{
      "contentName": "推荐",
      "contentCode": "share",
      "contentId": "1"
    }]
    wx.request({
      url: 'https://example.com/categories',
      dataType: 'json',
      success(res:any) {
        _this.setData({
          categoriesList: [...list,...res.data.content] as any
        })
      }
    })
  },
  // 点击分类item
  clickHandle(item:any):void {
    this.setData({
      contentId: item.currentTarget.dataset.item.contentId,
    })
    this.getContentDetail()
  },
  // 获取内容
  getContentDetail():void {
    let _this = this;
    wx.request({
      url: `https://ecp-sit-public.s3.cn-north-1.amazonaws.com.cn/ecp-cms/cdn-file/page_conf/WMS/zh_CN/online/0/${this.data.contentId}.json`,
      dataType: 'json',
      success(res:any) {
        _this.setData({
          layout: res.data.layout
        })
      }
    })
  }
})