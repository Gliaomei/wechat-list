// const app = getApp<IAppOption>()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Array,
      value: [],
    },
    showBack: {
      type: Boolean,
      value: false,
    }
  },
  data: {
    navHeight: 0,
    menuButtonInfo: {
      top: 0,
      width: 0,
      height: 0,
      right: 0,
    },
    searchMarginTop: 0, // 搜索框上边距
    searchWidth: 0, // 搜索框宽度
    searchHeight: 0, // 搜索框高度
    placeholder: '',
    backImgUrl: '../../images/back.png',
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.setData({
        menuButtonInfo: wx.getMenuButtonBoundingClientRect()
      })
      const { top, width, height, right } = this.data.menuButtonInfo;
      wx.getSystemInfo({
        success: (res) => {
          const { statusBarHeight } = res
          const margin = top - statusBarHeight
          this.setData({
            navHeight: (height + statusBarHeight + (margin * 2)),
            searchMarginTop: statusBarHeight + margin + 4, // 状态栏 + 胶囊按钮边距
            searchHeight: height,  // 与胶囊按钮同高
            searchWidth: right - width // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
          })
        },
      })
      this.changePlaceholder();
    },
  },
  methods: {
    // 更改placeholder
    changePlaceholder :function ():void{
      // let _this = this;
      for (let i=0; i<this.properties.navbarData.length; i++) {
        setTimeout(() =>{
          this.setData({placeholder: this.properties.navbarData[i]})
        } , 3000*i)
      }
    },
    // 点击跳转搜索页面
    bindViewTap: function(item: any):void{
      wx.setStorage({
        key: "clickItem",
        data: item.currentTarget.dataset.item
      })
      wx.navigateTo({
        url: '../../pages/search-page/index',
      })
    },
    // 点击返回
    backHandle: function():void{
      wx.navigateTo({
        url: '/pages/index/index'
      });
      // const pages = getCurrentPages();
      // if (pages.length >= 2) {
      //   wx.navigateBack({
      //     delta: 1
      //   });
      // } else {
      //   wx.navigateTo({
      //     url: '/pages/index/index'
      //   });
      // }
    }
  }
}) 