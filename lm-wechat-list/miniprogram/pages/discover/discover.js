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
        loading: false,
    },
    onLoad: function () {
        this.getShowList();
    },
    getShowList: function () {
        var that = this;
        this.setData({ loading: true });
        wx.request({
            url: 'https://example.com/showlist',
            dataType: 'json',
            success: function (res) {
                that.setData({ loading: false });
                wx.stopPullDownRefresh();
                that.setData({ dataList: res.data.list }, function () {
                    wx.hideLoading();
                });
            }
        });
    },
    onReachBottom: function () {
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
    },
    onPullDownRefresh: function () {
        this.setData({ dataList: [] });
        this.getShowList();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY292ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNjb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxDQUFDO1FBQ2QsWUFBWSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO1FBQy9DLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLENBQUM7UUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxFQUFFLEtBQUs7S0FDZjtJQUNELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVyxFQUFFO1FBQ1gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDhCQUE4QjtZQUNuQyxRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQVAsVUFBUSxHQUFPO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDakMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUE7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDeEMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsYUFBYSxFQUFFO1FBQ2IsSUFBSSxVQUFVLHFCQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJELElBQUksTUFBTSxHQUFlLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ25DLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUIsRUFBRTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXG4vLyBpbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuLy8gLS0tLS0tLS0tLS0tLeesrOS4gOenjeaWueazlS0tLS0tLS0tLS0tLS1cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YUxpc3Q6IFtdLCAvL+aVsOaNrua6kFxuICAgIHdpbmRvd1dpZHRoOiAwLCAvL+mhtemdouinhuWbvuWuveW6plxuICAgIHdpbmRvd0hlaWdodDogd3guZ2V0U3RvcmFnZVN5bmMoJ3dpbmRvd0hlaWdodCcpLCAvL+inhuWbvumrmOW6plxuICAgIGltZ01hcmdpbjogNiwgLy/lm77niYfovrnot506IOWNleS9jXB4XG4gICAgaW1nV2lkdGg6IDAsICAvL+WbvueJh+WuveW6pjog5Y2V5L2NcHhcbiAgICB0b3BBcnI6IFswLCAwXSwgLy/lrZjlgqjmr4/liJfnmoTntK/np690b3BcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfSxcbiAgb25Mb2FkKCk6dm9pZCB7XG4gICAgdGhpcy5nZXRTaG93TGlzdCgpO1xuICB9LFxuICAvLyDojrflj5bliJfooahcbiAgZ2V0U2hvd0xpc3Q6IGZ1bmN0aW9uKCk6dm9pZCB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuc2V0RGF0YSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwczovL2V4YW1wbGUuY29tL3Nob3dsaXN0JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzKHJlczphbnkpIHtcbiAgICAgICAgdGhhdC5zZXREYXRhKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKSAvL+WBnOatouS4i+aLieWIt+aWsFxuICAgICAgICB0aGF0LnNldERhdGEoeyBkYXRhTGlzdDogcmVzLmRhdGEubGlzdCB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy8g5LiK5ouJ5Yqg6L295pu05aSaXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uKCk6dm9pZCB7XG4gICAgbGV0IGNoYW5nZUxpc3Q6IEFycmF5PGFueT4gPSBbLi4udGhpcy5kYXRhLmRhdGFMaXN0XTtcblxuICAgIGxldCB0bXBBcnI6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5nZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAgYXMgYW55KSAlIGNoYW5nZUxpc3QubGVuZ3RoO1xuICAgICAgdG1wQXJyLnB1c2goY2hhbmdlTGlzdFtpbmRleF0pO1xuICAgICAgY2hhbmdlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBsZXQgZGF0YUxpc3QgPSB0aGlzLmRhdGEuZGF0YUxpc3QuY29uY2F0KHRtcEFyciBhcyBhbnkpO1xuICAgIHRoaXMuc2V0RGF0YSh7IGRhdGFMaXN0OiBkYXRhTGlzdCB9LCBmdW5jdGlvbigpe1xuICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgIH0pO1xuICB9LFxuICAvLyDkuIvmi4nliLfmlrBcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uKCk6dm9pZCB7XG4gICAgdGhpcy5zZXREYXRhKHsgZGF0YUxpc3Q6IFtdIH0pO1xuICAgIHRoaXMuZ2V0U2hvd0xpc3QoKTtcbiAgfVxufSlcblxuIl19