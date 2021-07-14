Component({
  properties:{
    itemInfo:{
      type: Object,
      value: {},
      observer(newValue){
        this.resetData(newValue)
      }
    }
  },
  data:{
    articleInfo:{},
    headDescription: '',
    link: '',
  },
  lifetimes: {
    attached: function () {
      this.resetData(this.properties.itemInfo)
    }
  },
  methods: {
    // 重置数据
    resetData(item:any):void{
      const{ options } = item.component[0];
      this.setData({
        linkInfo: JSON.parse(options)
      })
    }
  }
  })