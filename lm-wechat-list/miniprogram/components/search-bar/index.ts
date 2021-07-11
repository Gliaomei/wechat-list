// const app = getApp<IAppOption>()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
    }
  },
  data: {
    height: 0,
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1
    },
    navHeight: 0,
    menuButtonInfo: {
      top: 0,
      width: 0,
      height: 0,
      right: 0,
    },
    searchMarginTop: 0, // 搜索框上边距
    searchWidth: 0, // 搜索框宽度
    searchHeight: 0 // 搜索框高度
  },
  lifetimes: {
    
    
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      // wx.getSystemInfo({
      //   success: (res) => {
      //     this.data.height = res.statusBarHeight
      //   }
      // })
      this.setData({
        menuButtonInfo: wx.getMenuButtonBoundingClientRect()
      })
      console.log(this.data.menuButtonInfo)
      const { top, width, height, right } = this.data.menuButtonInfo;
      wx.getSystemInfo({
        success: (res) => {
          const { statusBarHeight } = res
          const margin = top - statusBarHeight
          this.setData({
            navHeight: (height + statusBarHeight + (margin * 2)),
            searchMarginTop: statusBarHeight + margin, // 状态栏 + 胶囊按钮边距
            searchHeight: height,  // 与胶囊按钮同高
            searchWidth: right - width // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
          })
        },
      })
    },
    moved: function () { },
    detached: function () { },
  },
  methods: {
  }
}) 