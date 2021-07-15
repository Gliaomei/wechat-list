"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Page({
    data: {
        categoriesList: [],
        loading: true,
        navbarData: ["Ozworld", "看见每一种可能", "2020欧洲杯", "LOVE UNITES新系列", "ADIZERO PRIME X"],
        contentId: '1',
        layout: [],
    },
    onLoad: function () {
        var _this = this;
        Promise.all([this.getCategoriesList(), this.getContentDetail()]).then(function () {
            _this.setData({
                loading: false
            });
        }).catch(function () {
            _this.setData({
                loading: false
            });
        });
    },
    getCategoriesList: function () {
        var _this = this;
        var list = [{
                "contentName": "推荐",
                "contentCode": "share",
                "contentId": "1"
            }];
        return new Promise(function (resolve, reject) {
            wx.request({
                url: 'https://example.com/categories',
                dataType: 'json',
                success: function (res) {
                    _this.setData({
                        categoriesList: __spreadArray(__spreadArray([], list), res.data.content)
                    });
                    resolve();
                },
                fail: function () {
                    reject();
                }
            });
        });
    },
    clickHandle: function (item) {
        this.setData({
            contentId: item.currentTarget.dataset.item.contentId,
        });
        this.getContentDetail();
    },
    getContentDetail: function () {
        var _this_1 = this;
        var _this = this;
        return new Promise(function (resolve, reject) {
            wx.request({
                url: "https://ecp-sit-public.s3.cn-north-1.amazonaws.com.cn/ecp-cms/cdn-file/page_conf/WMS/zh_CN/online/0/" + _this_1.data.contentId + ".json",
                dataType: 'json',
                success: function (res) {
                    _this.setData({
                        layout: res.data.layout
                    });
                    resolve();
                },
                fail: function () {
                    reject();
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBRTtRQUNsQixPQUFPLEVBQUUsSUFBSTtRQUNiLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixDQUFDO1FBQzlFLFNBQVMsRUFBRSxHQUFHO1FBQ2QsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELE1BQU0sRUFBTjtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwRSxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLE9BQU8sRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixPQUFPLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGlCQUFpQixFQUFqQjtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDO2dCQUNWLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixhQUFhLEVBQUUsT0FBTztnQkFDdEIsV0FBVyxFQUFFLEdBQUc7YUFDakIsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVcsRUFBRSxNQUFVO1lBQ3pDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLGdDQUFnQztnQkFDckMsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLE9BQU8sRUFBUCxVQUFRLEdBQU87b0JBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixjQUFjLEVBQUUsZ0NBQUksSUFBSSxHQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFRO3FCQUNyRCxDQUFDLENBQUE7b0JBQ0YsT0FBTyxFQUFFLENBQUE7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFJO29CQUNGLE1BQU0sRUFBRSxDQUFBO2dCQUNWLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxJQUFRO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDckQsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7SUFDekIsQ0FBQztJQUVELGdCQUFnQixFQUFoQjtRQUFBLG1CQWlCQztRQWhCQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVcsRUFBRSxNQUFVO1lBQ3pDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLHlHQUF1RyxPQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsVUFBTztnQkFDdEksUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLE9BQU8sRUFBUCxVQUFRLEdBQU87b0JBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUN4QixDQUFDLENBQUE7b0JBQ0YsT0FBTyxFQUFFLENBQUE7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFJO29CQUNGLE1BQU0sRUFBRSxDQUFBO2dCQUNWLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgZGF0YToge1xuICAgIGNhdGVnb3JpZXNMaXN0OiBbXSwgLy/mlbDmja7mupBcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIG5hdmJhckRhdGE6IFtcIk96d29ybGRcIixcIueci+ingeavj+S4gOenjeWPr+iDvVwiLFwiMjAyMOasp+a0suadr1wiLFwiTE9WRSBVTklURVPmlrDns7vliJdcIixcIkFESVpFUk8gUFJJTUUgWFwiXSxcbiAgICBjb250ZW50SWQ6ICcxJyxcbiAgICBsYXlvdXQ6IFtdLFxuICB9LFxuICBvbkxvYWQoKTp2b2lkIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIFByb21pc2UuYWxsKFt0aGlzLmdldENhdGVnb3JpZXNMaXN0KCksIHRoaXMuZ2V0Q29udGVudERldGFpbCgpXSkudGhlbigoKSA9PiB7XG4gICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0pICAgICAgICAgICAgIC8vWyfmiJDlip/kuoYnLCAnc3VjY2VzcyddXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIC8vIOiOt+WPluWIhuexu+WIl+ihqFxuICBnZXRDYXRlZ29yaWVzTGlzdCgpOmFueSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgbGlzdCA9IFt7XG4gICAgICBcImNvbnRlbnROYW1lXCI6IFwi5o6o6I2QXCIsXG4gICAgICBcImNvbnRlbnRDb2RlXCI6IFwic2hhcmVcIixcbiAgICAgIFwiY29udGVudElkXCI6IFwiMVwiXG4gICAgfV1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6YW55LCByZWplY3Q6YW55KSA9PntcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2V4YW1wbGUuY29tL2NhdGVnb3JpZXMnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBzdWNjZXNzKHJlczphbnkpIHtcbiAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXNMaXN0OiBbLi4ubGlzdCwuLi5yZXMuZGF0YS5jb250ZW50XSBhcyBhbnlcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKCl7XG4gICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICAvLyDngrnlh7vliIbnsbtpdGVtXG4gIGNsaWNrSGFuZGxlKGl0ZW06YW55KTp2b2lkIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY29udGVudElkOiBpdGVtLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtLmNvbnRlbnRJZCxcbiAgICB9KVxuICAgIHRoaXMuZ2V0Q29udGVudERldGFpbCgpXG4gIH0sXG4gIC8vIOiOt+WPluWGheWuuVxuICBnZXRDb250ZW50RGV0YWlsKCk6YW55IHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTphbnksIHJlamVjdDphbnkpID0+e1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vZWNwLXNpdC1wdWJsaWMuczMuY24tbm9ydGgtMS5hbWF6b25hd3MuY29tLmNuL2VjcC1jbXMvY2RuLWZpbGUvcGFnZV9jb25mL1dNUy96aF9DTi9vbmxpbmUvMC8ke3RoaXMuZGF0YS5jb250ZW50SWR9Lmpzb25gLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBzdWNjZXNzKHJlczphbnkpIHtcbiAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGxheW91dDogcmVzLmRhdGEubGF5b3V0XG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCgpe1xuICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufSkiXX0=