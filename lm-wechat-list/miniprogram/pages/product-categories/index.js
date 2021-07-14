"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Page({
    data: {
        categoriesList: [],
        loading: false,
        navbarData: ["Ozworld", "看见每一种可能", "2020欧洲杯", "LOVE UNITES新系列", "ADIZERO PRIME X"],
        contentId: '',
        layout: [],
    },
    onLoad: function () {
        this.getCategoriesList();
    },
    getCategoriesList: function () {
        var _this = this;
        var list = [{
                "contentName": "推荐",
                "contentCode": "share",
                "contentId": "1"
            }];
        wx.request({
            url: 'https://example.com/categories',
            dataType: 'json',
            success: function (res) {
                _this.setData({
                    categoriesList: __spreadArray(__spreadArray([], list), res.data.content)
                });
            }
        });
    },
    clickHandle: function (item) {
        this.setData({
            contentId: item.currentTarget.dataset.item.contentId,
        });
        this.getContentDetail();
    },
    getContentDetail: function () {
        var _this = this;
        wx.request({
            url: "https://ecp-sit-public.s3.cn-north-1.amazonaws.com.cn/ecp-cms/cdn-file/page_conf/WMS/zh_CN/online/0/" + this.data.contentId + ".json",
            dataType: 'json',
            success: function (res) {
                _this.setData({
                    layout: res.data.layout
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBRTtRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixDQUFDO1FBQzlFLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsRUFBakI7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQztnQkFDVixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLFdBQVcsRUFBRSxHQUFHO2FBQ2pCLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsZ0NBQWdDO1lBQ3JDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBUCxVQUFRLEdBQU87Z0JBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixjQUFjLEVBQUUsZ0NBQUksSUFBSSxHQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFRO2lCQUNyRCxDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVcsRUFBWCxVQUFZLElBQVE7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUztTQUNyRCxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBRUQsZ0JBQWdCLEVBQWhCO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUseUdBQXVHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxVQUFPO1lBQ3RJLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBUCxVQUFRLEdBQU87Z0JBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO2lCQUN4QixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgY2F0ZWdvcmllc0xpc3Q6IFtdLCAvL+aVsOaNrua6kFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG5hdmJhckRhdGE6IFtcIk96d29ybGRcIixcIueci+ingeavj+S4gOenjeWPr+iDvVwiLFwiMjAyMOasp+a0suadr1wiLFwiTE9WRSBVTklURVPmlrDns7vliJdcIixcIkFESVpFUk8gUFJJTUUgWFwiXSxcbiAgICBjb250ZW50SWQ6ICcnLFxuICAgIGxheW91dDogW10sXG4gIH0sXG4gIG9uTG9hZCgpOnZvaWQge1xuICAgIHRoaXMuZ2V0Q2F0ZWdvcmllc0xpc3QoKVxuICB9LFxuICAvLyDojrflj5bliIbnsbvliJfooahcbiAgZ2V0Q2F0ZWdvcmllc0xpc3QoKTp2b2lkIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBsaXN0ID0gW3tcbiAgICAgIFwiY29udGVudE5hbWVcIjogXCLmjqjojZBcIixcbiAgICAgIFwiY29udGVudENvZGVcIjogXCJzaGFyZVwiLFxuICAgICAgXCJjb250ZW50SWRcIjogXCIxXCJcbiAgICB9XVxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9jYXRlZ29yaWVzJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzKHJlczphbnkpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgY2F0ZWdvcmllc0xpc3Q6IFsuLi5saXN0LC4uLnJlcy5kYXRhLmNvbnRlbnRdIGFzIGFueVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8vIOeCueWHu+WIhuexu2l0ZW1cbiAgY2xpY2tIYW5kbGUoaXRlbTphbnkpOnZvaWQge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjb250ZW50SWQ6IGl0ZW0uY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW0uY29udGVudElkLFxuICAgIH0pXG4gICAgdGhpcy5nZXRDb250ZW50RGV0YWlsKClcbiAgfSxcbiAgLy8g6I635Y+W5YaF5a65XG4gIGdldENvbnRlbnREZXRhaWwoKTp2b2lkIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9lY3Atc2l0LXB1YmxpYy5zMy5jbi1ub3J0aC0xLmFtYXpvbmF3cy5jb20uY24vZWNwLWNtcy9jZG4tZmlsZS9wYWdlX2NvbmYvV01TL3poX0NOL29ubGluZS8wLyR7dGhpcy5kYXRhLmNvbnRlbnRJZH0uanNvbmAsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzcyhyZXM6YW55KSB7XG4gICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgIGxheW91dDogcmVzLmRhdGEubGF5b3V0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSkiXX0=