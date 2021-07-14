Component({
  properties:{
    itemInfo:{
      type: Object,
      value: {},
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
  methods: {}
})