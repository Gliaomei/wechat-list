Component({
  properties:{
    itemInfo:{
      type: Object,
      value: {},
    }
  },
  data:{
    articleInfo:{},
  },
  lifetimes: {
    attached: function () {
      const{ options } = this.properties.itemInfo.component[0];
      this.setData({
        linkInfo: JSON.parse(options)
      })
      const { articleInfo } = JSON.parse(options);
      this.setData({
        articleInfo: articleInfo
      })
    }
  },
  methods: {}
  })