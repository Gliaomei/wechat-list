"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Page({
    data: {
        dataList: [],
        windowWidth: 0,
        windowHeight: wx.getStorageSync('windowHeight'),
        imgMargin: 6,
        imgWidth: 0,
        topArr: [0, 0],
    },
    onLoad: function () {
        var that = this;
        wx.showLoading({
            title: '加载中...',
        });
        wx.request({
            url: 'https://example.com/showlist',
            dataType: 'json',
            success: function (res) {
                wx.hideLoading();
                that.setData({ dataList: res.data.list }, function () {
                    wx.hideLoading();
                });
            }
        });
    },
    loadMoreImages: function () {
        wx.showLoading({
            title: '加载中...',
        });
        var changeList = __spreadArray([], this.data.dataList);
        var tmpArr = [];
        for (var i = 0; i < changeList.length; i++) {
            var index = parseInt(Math.random() * 100) % changeList.length;
            tmpArr.push(changeList[index]);
            changeList.splice(index, 1);
        }
        var dataList = this.data.dataList.concat(tmpArr);
        this.setData({ dataList: dataList }, function () {
            wx.hideLoading();
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsQ0FBQztRQUNkLFlBQVksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztRQUMvQyxTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVEsRUFBRSxDQUFDO1FBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmO0lBQ0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDhCQUE4QjtZQUNuQyxRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQVAsVUFBUSxHQUFPO2dCQUNiLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUN4QyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxjQUFjLEVBQUU7UUFDZCxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFBO1FBQ0osSUFBSSxVQUFVLHFCQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxELElBQUksTUFBTSxHQUFlLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ25DLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXG4vLyBpbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuLy8gLS0tLS0tLS0tLS0tLeesrOS4gOenjeaWueazlS0tLS0tLS0tLS0tLS1cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YUxpc3Q6IFtdLCAvL+aVsOaNrua6kFxuICAgIHdpbmRvd1dpZHRoOiAwLCAvL+mhtemdouinhuWbvuWuveW6plxuICAgIHdpbmRvd0hlaWdodDogd3guZ2V0U3RvcmFnZVN5bmMoJ3dpbmRvd0hlaWdodCcpLCAvL+inhuWbvumrmOW6plxuICAgIGltZ01hcmdpbjogNiwgLy/lm77niYfovrnot506IOWNleS9jXB4XG4gICAgaW1nV2lkdGg6IDAsICAvL+WbvueJh+WuveW6pjog5Y2V5L2NcHhcbiAgICB0b3BBcnI6IFswLCAwXSwgLy/lrZjlgqjmr4/liJfnmoTntK/np690b3BcbiAgfSxcbiAgb25Mb2FkKCk6dm9pZCB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitLi4uJyxcbiAgICB9KVxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9zaG93bGlzdCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzcyhyZXM6YW55KSB7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIHRoYXQuc2V0RGF0YSh7IGRhdGFMaXN0OiByZXMuZGF0YS5saXN0IH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICAvLyDkuIrmi4nliqDovb3mm7TlpJpcbiAgbG9hZE1vcmVJbWFnZXM6IGZ1bmN0aW9uKCk6dm9pZCB7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0uLi4nLFxuICAgIH0pXG4gIGxldCBjaGFuZ2VMaXN0OkFycmF5PGFueT4gPSBbLi4udGhpcy5kYXRhLmRhdGFMaXN0XTtcblxuICAgIGxldCB0bXBBcnI6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5nZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAgYXMgYW55KSAlIGNoYW5nZUxpc3QubGVuZ3RoO1xuICAgICAgdG1wQXJyLnB1c2goY2hhbmdlTGlzdFtpbmRleF0pO1xuICAgICAgY2hhbmdlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBsZXQgZGF0YUxpc3QgPSB0aGlzLmRhdGEuZGF0YUxpc3QuY29uY2F0KHRtcEFyciBhcyBhbnkpO1xuICAgIHRoaXMuc2V0RGF0YSh7IGRhdGFMaXN0OiBkYXRhTGlzdCB9LCBmdW5jdGlvbigpe1xuICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgIH0pO1xuICB9XG59KVxuXG4iXX0=