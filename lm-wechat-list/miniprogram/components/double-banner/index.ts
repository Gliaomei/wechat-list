Component({
  properties:{
    itemInfo: {
      type: Object,
      value: {},
      observer(newValue){
        this.resetData(newValue)
      }
    }
  },
  data:{
    imgInfo:{},
  },
  lifetimes: {
    attached: function () {
      this.resetData(this.properties.itemInfo)
    }
  },
  methods: {
    clickLink(item:any):void {
      const { link } = item.currentTarget.dataset.item
      console.log(link);
    },
    // 重置数据
    resetData(item:any):void{
      let { options } = item.component[0];
      this.setData({
        imgInfo: JSON.parse(options)
      })
    }
  }
})