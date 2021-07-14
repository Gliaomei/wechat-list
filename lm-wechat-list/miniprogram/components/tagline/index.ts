Component({
  properties:{
    itemInfo:{
      type: Object,
      value: {},
      observer(newValue){
        const{ options } = newValue.component[0];
        this.setData({
          linkInfo: JSON.parse(options)
        })
      }
    }
  },
  data:{
    linkInfo: {
      headDescription:'',
      link: '',
      linkDescription: '',
    },
  },
  lifetimes: {
    attached: function () {
      const{ options } = this.properties.itemInfo.component[0];
      this.setData({
        linkInfo: JSON.parse(options)
      })
    }
  },
})