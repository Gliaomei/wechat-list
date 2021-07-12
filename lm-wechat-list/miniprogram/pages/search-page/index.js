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
            wx.setStorage({
                key: "historyList",
                data: list
            });
        }
        else {
            list.push(this.data.inputValue);
            wx.setStorage({
                key: "historyList",
                data: list,
            });
        }
        wx.navigateBack({
            delta: -1
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixXQUFXLEVBQUUsRUFBRTtRQUNmLFVBQVUsRUFBRSxFQUFFO1FBQ2QsV0FBVyxFQUFFLEVBQUU7S0FDaEI7SUFDRCxNQUFNLEVBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQyxDQUFBO1FBQzNELElBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO2FBQzlDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFlBQVksRUFBRTtRQUVaLElBQUksSUFBSSxHQUFTLEVBQUUsQ0FBQTtRQUVuQixJQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUMvQyxJQUFJLHFCQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtTQUM3QztRQUNELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1lBQ3pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLGFBQWE7Z0JBQ2xCLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxhQUFhO2dCQUNsQixJQUFJLEVBQUUsSUFBSTthQUNYLENBQUMsQ0FBQTtTQUNIO1FBQ0QsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxFQUFDO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsYUFBYTtZQUNsQixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXG4vLyBpbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuLy8gLS0tLS0tLS0tLS0tLeesrOS4gOenjeaWueazlS0tLS0tLS0tLS0tLS1cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGhpc3RvcnlMaXN0OiBbXSxcbiAgfSxcbiAgb25Mb2FkKCk6dm9pZCB7XG4gICAgdGhpcy5zZXREYXRhKHtwbGFjZWhvbGRlcjogd3guZ2V0U3RvcmFnZVN5bmMoJ2NsaWNrSXRlbScpfSlcbiAgICBpZih3eC5nZXRTdG9yYWdlU3luYyhcImhpc3RvcnlMaXN0XCIpLmxlbmd0aCAhPT0gMCl7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBoaXN0b3J5TGlzdDogd3guZ2V0U3RvcmFnZVN5bmMoXCJoaXN0b3J5TGlzdFwiKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIC8vIOaQnOe0ouaWueazlVxuICBzZWFyY2hIYW5kbGU6IGZ1bmN0aW9uKCk6dm9pZHtcbiAgICAvLyDlpoLmnpxpbnB1dOaQnOe0ouS4uuepuiDliJnnm7TmjqXmkJzntKAg54K55Ye76L+b5YWl55qEaXRlbVxuICAgIGxldCBsaXN0OmFueVtdID0gW11cbiAgICAvLyDlpoLmnpzmnKzlnLDmnInljoblj7LorrDlvZVcbiAgICBpZih3eC5nZXRTdG9yYWdlU3luYyhcImhpc3RvcnlMaXN0XCIpLmxlbmd0aCAhPT0gMCl7XG4gICAgICBsaXN0ID0gWy4uLnd4LmdldFN0b3JhZ2VTeW5jKFwiaGlzdG9yeUxpc3RcIildXG4gICAgfVxuICAgIGlmKHRoaXMuZGF0YS5pbnB1dFZhbHVlID09PSAnJyl7XG4gICAgICBsaXN0LnB1c2god3guZ2V0U3RvcmFnZVN5bmMoJ2NsaWNrSXRlbScpKVxuICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogXCJoaXN0b3J5TGlzdFwiLFxuICAgICAgICBkYXRhOiBsaXN0XG4gICAgICB9KVxuICAgIH1lbHNle1xuICAgICAgbGlzdC5wdXNoKHRoaXMuZGF0YS5pbnB1dFZhbHVlKVxuICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogXCJoaXN0b3J5TGlzdFwiLFxuICAgICAgICBkYXRhOiBsaXN0LFxuICAgICAgfSlcbiAgICB9XG4gICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgIGRlbHRhOiAtMVxuICAgIH0pO1xuICB9LFxuICAvLyDmuIXnqbpcbiAgY2xlYXJIaXN0b3J5OmZ1bmN0aW9uKCk6dm9pZHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaGlzdG9yeUxpc3Q6IFtdLFxuICAgIH0pXG4gICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICBrZXk6IFwiaGlzdG9yeUxpc3RcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH0pXG4gIH1cbn0pXG4gIFxuICAiXX0=