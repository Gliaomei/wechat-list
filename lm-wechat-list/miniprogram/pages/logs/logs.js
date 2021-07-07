"use strict";
Page({
    data: {
        dataList: [],
        windowWidth: 0,
        windowHeight: 0,
        imgMargin: 6,
        imgWidth: 0,
        topArr: [0, 0],
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                console.log(res);
                var windowWidth = res.windowWidth;
                var imgMargin = that.data.imgMargin;
                var imgWidth = (windowWidth - imgMargin * 3) / 2;
                that.setData({
                    windowWidth: windowWidth,
                    windowHeight: res.windowHeight,
                    imgWidth: imgWidth
                }, function () {
                    console.log(windowWidth);
                    that.loadMoreImages();
                });
            }
        });
    },
    loadImage: function (e) {
        var index = e.currentTarget.dataset.index;
        var imgW = e.detail.width;
        var imgH = e.detail.height;
        var imgWidth = this.data.imgWidth;
        var imgScaleH = imgWidth / imgW * imgH;
        var dataList = this.data.dataList;
        var margin = this.data.imgMargin;
        var firtColH = this.data.topArr[0], secondColH = this.data.topArr[1];
        var obj = dataList[index];
        obj.height = imgScaleH;
        if (firtColH < secondColH) {
            obj.left = margin;
            obj.top = firtColH + margin;
            firtColH += margin + obj.height;
        }
        else {
            obj.left = margin * 2 + imgWidth;
            obj.top = secondColH + margin;
            secondColH += margin + obj.height;
        }
        this.setData({
            dataList: dataList,
            topArr: [firtColH, secondColH],
        });
    },
    loadMoreImages: function () {
        wx.showLoading({
            title: '加载中...',
        });
        var imgs = [
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1409185525,4059560780&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4076355782,2436939971&fm=15&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=777075993,2126273204&fm=11&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=57777155,3251523579&fm=11&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3825727093,2830650732&fm=11&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2379065095,654347953&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2749679283,2472217536&fm=11&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=677128138,409184861&fm=11&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1884091074,3049103326&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1600363417,3661952978&fm=11&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2069544162,3090555174&fm=11&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3328655038,3143543956&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3953624046,2332872335&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=717009955,687560133&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4243037288,2388509769&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2644451528,4180971732&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2658655215,924706045&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=400545645,1325440240&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2735743532,3162562682&fm=11&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2357555025,1781222560&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1604156508,3282489713&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=380663325,2271064034&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=174537541,3462862985&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1752649241,364583051&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2890516059,4166188770&fm=27&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2435144503,200941795&fm=11&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=877833827,2847590581&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=894452177,2810600152&fm=11&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4053642431,248486335&fm=27&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2914607659,905736210&fm=11&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1629456501,1514429218&fm=26&gp=0.jpg',
        ];
        var tmpArr = [];
        for (var i = 0; i < 22; i++) {
            var index = parseInt(Math.random() * 100) % imgs.length;
            var obj = {
                src: imgs[index],
                height: 0,
                top: 0,
                left: 0,
            };
            tmpArr.push(obj);
            imgs.splice(index, 1);
        }
        var dataList = this.data.dataList.concat(tmpArr);
        this.setData({ dataList: dataList }, function () {
            wx.hideLoading();
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLENBQUM7UUFDZCxZQUFZLEVBQUUsQ0FBQztRQUNmLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLENBQUM7UUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2Y7SUFDRCxNQUFNO1FBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUVwQyxJQUFJLFFBQVEsR0FBRyxDQUFDLFdBQVcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVqRCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFdBQVcsRUFBRSxXQUFXO29CQUN4QixZQUFZLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0JBQzlCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQixFQUFFO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFTLENBQU07UUFDeEIsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2xE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LENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ25DLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXG4vLyBpbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBkYXRhTGlzdDogW10sIC8v5pWw5o2u5rqQXG4gICAgd2luZG93V2lkdGg6IDAsIC8v6aG16Z2i6KeG5Zu+5a695bqmXG4gICAgd2luZG93SGVpZ2h0OiAwLCAvL+inhuWbvumrmOW6plxuICAgIGltZ01hcmdpbjogNiwgLy/lm77niYfovrnot506IOWNleS9jXB4XG4gICAgaW1nV2lkdGg6IDAsICAvL+WbvueJh+WuveW6pjog5Y2V5L2NcHhcbiAgICB0b3BBcnI6IFswLCAwXSwgLy/lrZjlgqjmr4/liJfnmoTntK/np690b3BcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xuICAgICAgICBsZXQgaW1nTWFyZ2luID0gdGhhdC5kYXRhLmltZ01hcmdpbjtcbiAgICAgICAgLy/kuKTliJfvvIzmr4/liJfnmoTlm77niYflrr3luqZcbiAgICAgICAgbGV0IGltZ1dpZHRoID0gKHdpbmRvd1dpZHRoIC0gaW1nTWFyZ2luICogMykgLyAyO1xuXG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgd2luZG93V2lkdGg6IHdpbmRvd1dpZHRoLFxuICAgICAgICAgIHdpbmRvd0hlaWdodDogcmVzLndpbmRvd0hlaWdodCxcbiAgICAgICAgICBpbWdXaWR0aDogaW1nV2lkdGhcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvd1dpZHRoKTtcbiAgICAgICAgICB0aGF0LmxvYWRNb3JlSW1hZ2VzKCk7IC8v5Yid5aeL5YyW5pWw5o2uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8vIOWKoOi9veWbvueJh1xuICBsb2FkSW1hZ2U6IGZ1bmN0aW9uKGU6IGFueSk6dm9pZCB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDsgLy/lm77niYfmiYDlnKjntKLlvJVcbiAgICBsZXQgaW1nVzogbnVtYmVyID0gZS5kZXRhaWwud2lkdGg7XG4gICAgbGV0IGltZ0g6IG51bWJlciA9IGUuZGV0YWlsLmhlaWdodDsgLy/lm77niYflrp7pmYXlrr3luqblkozpq5jluqZcbiAgICBsZXQgaW1nV2lkdGg6IG51bWJlciA9IHRoaXMuZGF0YS5pbWdXaWR0aDsgLy/lm77niYflrr3luqZcbiAgICBsZXQgaW1nU2NhbGVIOm51bWJlciA9IGltZ1dpZHRoIC8gaW1nVyAqIGltZ0g7IC8v6K6h566X5Zu+54mH5bqU6K+l5pi+56S655qE6auY5bqmXG5cbiAgICBsZXQgZGF0YUxpc3QgPSB0aGlzLmRhdGEuZGF0YUxpc3Q7XG4gICAgdmFyIG1hcmdpbjpudW1iZXIgPSB0aGlzLmRhdGEuaW1nTWFyZ2luOyAgLy/lm77niYfpl7Tot51cbiAgICAvL+esrOS4gOWIl+eahOe0r+enr3RvcO+8jOWSjOesrOS6jOWIl+eahOe0r+enr3RvcFxuICAgIHZhciBmaXJ0Q29sSDpudW1iZXIgPSB0aGlzLmRhdGEudG9wQXJyWzBdLCBzZWNvbmRDb2xIID0gdGhpcy5kYXRhLnRvcEFyclsxXTtcbiAgICBsZXQgb2JqOmFueSA9IGRhdGFMaXN0W2luZGV4XTtcblxuICAgIG9iai5oZWlnaHQgPSBpbWdTY2FsZUg7XG4gICAgaWYgKGZpcnRDb2xIIDwgc2Vjb25kQ29sSCkgeyAvL+ihqOekuuaWsOWbvueJh+W6lOivpeaUvuWIsOesrOS4gOWIl1xuICAgICAgb2JqLmxlZnQgPSBtYXJnaW47XG4gICAgICBvYmoudG9wID0gZmlydENvbEggKyBtYXJnaW47XG4gICAgICBmaXJ0Q29sSCArPSBtYXJnaW4gKyBvYmouaGVpZ2h0O1xuICAgIH1lbHNlIHsgLy/mlL7liLDnrKzkuozliJdcbiAgICAgIG9iai5sZWZ0ID0gbWFyZ2luICogMiArIGltZ1dpZHRoO1xuICAgICAgb2JqLnRvcCA9IHNlY29uZENvbEggKyBtYXJnaW47XG4gICAgICBzZWNvbmRDb2xIICs9IG1hcmdpbiArIG9iai5oZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBkYXRhTGlzdDogZGF0YUxpc3QsXG4gICAgICB0b3BBcnI6IFtmaXJ0Q29sSCwgc2Vjb25kQ29sSF0sXG4gICAgfSk7XG4gIH0sXG4gIC8v5Yqg6L295pu05aSa5Zu+54mHXG4gIGxvYWRNb3JlSW1hZ2VzOiBmdW5jdGlvbiAoKTp2b2lkIHtcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rS4uLicsXG4gICAgfSlcbiAgICB2YXIgaW1ncyA9IFtcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTQwOTE4NTUyNSw0MDU5NTYwNzgwJmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NDA3NjM1NTc4MiwyNDM2OTM5OTcxJmZtPTE1JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Nzc3MDc1OTkzLDIxMjYyNzMyMDQmZm09MTEmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT01Nzc3NzE1NSwzMjUxNTIzNTc5JmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzgyNTcyNzA5MywyODMwNjUwNzMyJmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjM3OTA2NTA5NSw2NTQzNDc5NTMmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNzQ5Njc5MjgzLDI0NzIyMTc1MzYmZm09MTEmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT02NzcxMjgxMzgsNDA5MTg0ODYxJmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTg4NDA5MTA3NCwzMDQ5MTAzMzI2JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTYwMDM2MzQxNywzNjYxOTUyOTc4JmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjA2OTU0NDE2MiwzMDkwNTU1MTc0JmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzMyODY1NTAzOCwzMTQzNTQzOTU2JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mzk1MzYyNDA0NiwyMzMyODcyMzM1JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NzE3MDA5OTU1LDY4NzU2MDEzMyZmbT0yNiZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQyNDMwMzcyODgsMjM4ODUwOTc2OSZmbT0yNiZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI2NDQ0NTE1MjgsNDE4MDk3MTczMiZmbT0yNiZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI2NTg2NTUyMTUsOTI0NzA2MDQ1JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NDAwNTQ1NjQ1LDEzMjU0NDAyNDAmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNzM1NzQzNTMyLDMxNjI1NjI2ODImZm09MTEmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMzU3NTU1MDI1LDE3ODEyMjI1NjAmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNjA0MTU2NTA4LDMyODI0ODk3MTMmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zODA2NjMzMjUsMjI3MTA2NDAzNCZmbT0yNiZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE3NDUzNzU0MSwzNDYyODYyOTg1JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTc1MjY0OTI0MSwzNjQ1ODMwNTEmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yODkwNTE2MDU5LDQxNjYxODg3NzAmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNDM1MTQ0NTAzLDIwMDk0MTc5NSZmbT0xMSZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTg3NzgzMzgyNywyODQ3NTkwNTgxJmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9ODk0NDUyMTc3LDI4MTA2MDAxNTImZm09MTEmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT00MDUzNjQyNDMxLDI0ODQ4NjMzNSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI5MTQ2MDc2NTksOTA1NzM2MjEwJmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTYyOTQ1NjUwMSwxNTE0NDI5MjE4JmZtPTI2JmdwPTAuanBnJyxcbiAgICBdO1xuXG4gICAgbGV0IHRtcEFycjogQXJyYXk8YW55PiA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjI7IGkrKykge1xuICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMCBhcyBhbnkpICUgaW1ncy5sZW5ndGg7XG4gICAgICB2YXIgb2JqID0ge1xuICAgICAgICBzcmM6IGltZ3NbaW5kZXhdLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgIH1cbiAgICAgIHRtcEFyci5wdXNoKG9iaik7XG4gICAgICBpbWdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHZhciBkYXRhTGlzdCA9IHRoaXMuZGF0YS5kYXRhTGlzdC5jb25jYXQodG1wQXJyIGFzIGFueSk7XG4gICAgdGhpcy5zZXREYXRhKHsgZGF0YUxpc3Q6IGRhdGFMaXN0IH0sIGZ1bmN0aW9uKCl7XG4gICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgfSk7XG4gIH0sXG59KVxuIl19