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
    resetData(item:any):void{
      let { options } = item.component[0];
      this.setData({
        imgInfo: JSON.parse(options)
      })
    }
  }
})