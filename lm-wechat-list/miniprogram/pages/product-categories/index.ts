Page({
  data: {
    categoriesList: [], //数据源
    loading: true,
    navbarData: ["Ozworld","看见每一种可能","2020欧洲杯","LOVE UNITES新系列","ADIZERO PRIME X"],
    contentId: '1',
    layout: [],
  },
  onLoad():void {
    let _this = this;
    Promise.all([this.getCategoriesList(), this.getContentDetail()]).then(() => {
      _this.setData({
        loading: false
      })             //['成功了', 'success']
    }).catch(() => {
      _this.setData({
        loading: false
      })
    })
  },
  // 获取分类列表
  getCategoriesList():any {
    let _this = this;
    let list = [{
      "contentName": "推荐",
      "contentCode": "share",
      "contentId": "1"
    }]
    return new Promise((resolve:any, reject:any) =>{
      wx.request({
        url: 'https://example.com/categories',
        dataType: 'json',
        success(res:any) {
          _this.setData({
            categoriesList: [...list,...res.data.content] as any
          })
          resolve()
        },
        fail(){
          reject()
        }
      })
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
  getContentDetail():any {
    let _this = this;
    return new Promise((resolve:any, reject:any) =>{
      wx.request({
        url: `https://ecp-sit-public.s3.cn-north-1.amazonaws.com.cn/ecp-cms/cdn-file/page_conf/WMS/zh_CN/online/0/${this.data.contentId}.json`,
        dataType: 'json',
        success(res:any) {
          _this.setData({
            layout: res.data.layout
          })
          resolve()
        },
        fail(){
          reject()
        }
      })
    })
  }
})