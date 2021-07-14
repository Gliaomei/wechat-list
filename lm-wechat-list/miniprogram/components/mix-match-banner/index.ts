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
    linkInfo: {},
  },
  lifetimes: {
    attached: function () {
      this.resetData(this.properties.itemInfo)
    }
  },
  methods: {
    resetData(info:any):void{
      const{ options } = info.component[0];
      this.setData({
        linkInfo: JSON.parse(options)
      })
      console.log(JSON.parse(options));
      
    }
  }
})