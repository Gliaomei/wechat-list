// components/Tabs/Tabs.js
Component({
  /**
    * 里面存放的是 要从父组件中接收的数据
    */
   properties: {
     showList:{
       type:Array,
       value:[]
     },
     loading:{
      type: Boolean,
      value: false
     }
   },
 
   /**
    * 组件的初始数据
    */
   data: {
   },
 
   /*
     1 页面 .js 文件中 存放事件回调函数的时候 存放在data同层级下！！！
     2 组件 .js 文件中 存放事件回调函数的时候 必须要存放在 methods中 ！！！
   */
   methods: {
   }
 }) 