"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Page({
    data: {
        placeholder: '',
        inputValue: '',
        historyList: [],
    },
    onLoad: function () {
        this.setData({ placeholder: wx.getStorageSync('clickItem') });
        if (wx.getStorageSync("historyList").length !== 0) {
            this.setData({
                historyList: wx.getStorageSync("historyList")
            });
        }
    },
    searchHandle: function () {
        var list = [];
        if (wx.getStorageSync("historyList").length !== 0) {
            list = __spreadArray([], wx.getStorageSync("historyList"));
        }
        if (this.data.inputValue === '') {
            list.push(wx.getStorageSync('clickItem'));
            this.setData({
                inputValue: wx.getStorageSync('clickItem')
            });
        }
        else {
            list.push(this.data.inputValue);
        }
        var newList = [];
        for (var i = 0; i < list.length; i++) {
            if (list.indexOf(list[i]) == i) {
                newList.push(list[i]);
            }
        }
        wx.setStorage({
            key: "historyList",
            data: newList
        });
        wx.navigateTo({
            url: "../discover/discover?keyword=" + this.data.inputValue,
        });
    },
    clearHistory: function () {
        this.setData({
            historyList: [],
        });
        wx.setStorage({
            key: "historyList",
            data: [],
        });
    },
    searchHistory: function (item) {
        wx.navigateTo({
            url: "../discover/discover?keyword=" + item.currentTarget.dataset.item,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixXQUFXLEVBQUUsRUFBRTtRQUNmLFVBQVUsRUFBRSxFQUFFO1FBQ2QsV0FBVyxFQUFFLEVBQUU7S0FDaEI7SUFDRCxNQUFNLEVBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQyxDQUFBO1FBQzNELElBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO2FBQzlDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFlBQVksRUFBRTtRQUVaLElBQUksSUFBSSxHQUFjLEVBQUUsQ0FBQztRQUV6QixJQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUMvQyxJQUFJLHFCQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtTQUM3QztRQUNELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO2FBQzNDLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7U0FDaEM7UUFFRCxJQUFJLE9BQU8sR0FBYyxFQUFFLENBQUM7UUFDNUIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUN0QjtTQUNGO1FBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxrQ0FBZ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFZO1NBQzVELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxZQUFZLEVBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLEVBQUU7U0FDaEIsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGFBQWEsRUFBQyxVQUFTLElBQVE7UUFDN0IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxrQ0FBZ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBTTtTQUN2RSxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9ncy50c1xuLy8gY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWwuanMnKVxuLy8gaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbi8vIC0tLS0tLS0tLS0tLS3nrKzkuIDnp43mlrnms5UtLS0tLS0tLS0tLS0tXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICBoaXN0b3J5TGlzdDogW10sXG4gIH0sXG4gIG9uTG9hZCgpOnZvaWQge1xuICAgIHRoaXMuc2V0RGF0YSh7cGxhY2Vob2xkZXI6IHd4LmdldFN0b3JhZ2VTeW5jKCdjbGlja0l0ZW0nKX0pXG4gICAgaWYod3guZ2V0U3RvcmFnZVN5bmMoXCJoaXN0b3J5TGlzdFwiKS5sZW5ndGggIT09IDApe1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaGlzdG9yeUxpc3Q6IHd4LmdldFN0b3JhZ2VTeW5jKFwiaGlzdG9yeUxpc3RcIilcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICAvLyDmkJzntKLmlrnms5VcbiAgc2VhcmNoSGFuZGxlOiBmdW5jdGlvbigpOnZvaWR7XG4gICAgLy8g5aaC5p6caW5wdXTmkJzntKLkuLrnqbog5YiZ55u05o6l5pCc57SgIOeCueWHu+i/m+WFpeeahGl0ZW1cbiAgICBsZXQgbGlzdDpBcnJheTxhbnk+ID0gW107XG4gICAgLy8g5aaC5p6c5pys5Zyw5pyJ5Y6G5Y+y6K6w5b2VXG4gICAgaWYod3guZ2V0U3RvcmFnZVN5bmMoXCJoaXN0b3J5TGlzdFwiKS5sZW5ndGggIT09IDApe1xuICAgICAgbGlzdCA9IFsuLi53eC5nZXRTdG9yYWdlU3luYyhcImhpc3RvcnlMaXN0XCIpXVxuICAgIH1cbiAgICBpZih0aGlzLmRhdGEuaW5wdXRWYWx1ZSA9PT0gJycpe1xuICAgICAgbGlzdC5wdXNoKHd4LmdldFN0b3JhZ2VTeW5jKCdjbGlja0l0ZW0nKSlcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlucHV0VmFsdWU6IHd4LmdldFN0b3JhZ2VTeW5jKCdjbGlja0l0ZW0nKVxuICAgICAgfSlcbiAgICB9ZWxzZXtcbiAgICAgIGxpc3QucHVzaCh0aGlzLmRhdGEuaW5wdXRWYWx1ZSlcbiAgICB9XG4gICAgLy8g5Y676YeNXG4gICAgbGV0IG5ld0xpc3Q6QXJyYXk8YW55PiA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0ICBpZiAobGlzdC5pbmRleE9mKGxpc3RbaV0pID09IGkpe1xuICAgICAgICBuZXdMaXN0LnB1c2gobGlzdFtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICBrZXk6IFwiaGlzdG9yeUxpc3RcIixcbiAgICAgIGRhdGE6IG5ld0xpc3RcbiAgICB9KVxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vZGlzY292ZXIvZGlzY292ZXI/a2V5d29yZD0ke3RoaXMuZGF0YS5pbnB1dFZhbHVlfWAsXG4gICAgfSlcbiAgfSxcbiAgLy8g5riF56m6XG4gIGNsZWFySGlzdG9yeTpmdW5jdGlvbigpOnZvaWR7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGhpc3RvcnlMaXN0OiBbXSxcbiAgICB9KVxuICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAga2V5OiBcImhpc3RvcnlMaXN0XCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9KVxuICB9LFxuICAvL+eCueWOhuWPsuaQnOe0olxuICBzZWFyY2hIaXN0b3J5OmZ1bmN0aW9uKGl0ZW06YW55KTp2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2Rpc2NvdmVyL2Rpc2NvdmVyP2tleXdvcmQ9JHtpdGVtLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtfWAsXG4gICAgfSlcbiAgfVxufSlcbiAgXG4gICJdfQ==