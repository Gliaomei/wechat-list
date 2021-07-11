"use strict";
Component({
    properties: {
        navbarData: {
            type: Object,
            value: {},
        }
    },
    data: {
        height: 0,
        navbarData: {
            showCapsule: 1
        },
        navHeight: 0,
        menuButtonInfo: {
            top: 0,
            width: 0,
            height: 0,
            right: 0,
        },
        searchMarginTop: 0,
        searchWidth: 0,
        searchHeight: 0
    },
    lifetimes: {
        attached: function () {
            var _this = this;
            this.setData({
                menuButtonInfo: wx.getMenuButtonBoundingClientRect()
            });
            console.log(this.data.menuButtonInfo);
            var _a = this.data.menuButtonInfo, top = _a.top, width = _a.width, height = _a.height, right = _a.right;
            wx.getSystemInfo({
                success: function (res) {
                    var statusBarHeight = res.statusBarHeight;
                    var margin = top - statusBarHeight;
                    _this.setData({
                        navHeight: (height + statusBarHeight + (margin * 2)),
                        searchMarginTop: statusBarHeight + margin,
                        searchHeight: height,
                        searchWidth: right - width
                    });
                },
            });
        },
        moved: function () { },
        detached: function () { },
    },
    methods: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsQ0FBQztRQUVULFVBQVUsRUFBRTtZQUNWLFdBQVcsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxTQUFTLEVBQUUsQ0FBQztRQUNaLGNBQWMsRUFBRTtZQUNkLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxlQUFlLEVBQUUsQ0FBQztRQUNsQixXQUFXLEVBQUUsQ0FBQztRQUNkLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsU0FBUyxFQUFFO1FBSVQsUUFBUSxFQUFFO1lBQUEsaUJBdUJUO1lBakJDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsY0FBYyxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRTthQUNyRCxDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDL0IsSUFBQSxLQUFnQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBdEQsR0FBRyxTQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsS0FBSyxXQUE2QixDQUFDO1lBQy9ELEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ2YsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDSCxJQUFBLGVBQWUsR0FBSyxHQUFHLGdCQUFSLENBQVE7b0JBQy9CLElBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxlQUFlLENBQUE7b0JBQ3BDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLGVBQWUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsZUFBZSxFQUFFLGVBQWUsR0FBRyxNQUFNO3dCQUN6QyxZQUFZLEVBQUUsTUFBTTt3QkFDcEIsV0FBVyxFQUFFLEtBQUssR0FBRyxLQUFLO3FCQUMzQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxLQUFLLEVBQUUsY0FBYyxDQUFDO1FBQ3RCLFFBQVEsRUFBRSxjQUFjLENBQUM7S0FDMUI7SUFDRCxPQUFPLEVBQUUsRUFDUjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5Db21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbmF2YmFyRGF0YTogeyAgIC8vbmF2YmFyRGF0YSAgIOeUseeItumhtemdouS8oOmAkueahOaVsOaNru+8jOWPmOmHj+WQjeWtl+iHquWRveWQjVxuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHt9LFxuICAgIH1cbiAgfSxcbiAgZGF0YToge1xuICAgIGhlaWdodDogMCxcbiAgICAvL+m7mOiupOWAvCAg6buY6K6k5pi+56S65bem5LiK6KeSXG4gICAgbmF2YmFyRGF0YToge1xuICAgICAgc2hvd0NhcHN1bGU6IDFcbiAgICB9LFxuICAgIG5hdkhlaWdodDogMCxcbiAgICBtZW51QnV0dG9uSW5mbzoge1xuICAgICAgdG9wOiAwLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICB9LFxuICAgIHNlYXJjaE1hcmdpblRvcDogMCwgLy8g5pCc57Si5qGG5LiK6L656LedXG4gICAgc2VhcmNoV2lkdGg6IDAsIC8vIOaQnOe0ouahhuWuveW6plxuICAgIHNlYXJjaEhlaWdodDogMCAvLyDmkJzntKLmoYbpq5jluqZcbiAgfSxcbiAgbGlmZXRpbWVzOiB7XG4gICAgXG4gICAgXG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM5Y+v5Lul5Li65Ye95pWw77yM5oiW5LiA5Liq5ZyobWV0aG9kc+auteS4reWumuS5ieeahOaWueazleWQjVxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIC8vICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgLy8gICAgIHRoaXMuZGF0YS5oZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBtZW51QnV0dG9uSW5mbzogd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLm1lbnVCdXR0b25JbmZvKVxuICAgICAgY29uc3QgeyB0b3AsIHdpZHRoLCBoZWlnaHQsIHJpZ2h0IH0gPSB0aGlzLmRhdGEubWVudUJ1dHRvbkluZm87XG4gICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc3RhdHVzQmFySGVpZ2h0IH0gPSByZXNcbiAgICAgICAgICBjb25zdCBtYXJnaW4gPSB0b3AgLSBzdGF0dXNCYXJIZWlnaHRcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgbmF2SGVpZ2h0OiAoaGVpZ2h0ICsgc3RhdHVzQmFySGVpZ2h0ICsgKG1hcmdpbiAqIDIpKSxcbiAgICAgICAgICAgIHNlYXJjaE1hcmdpblRvcDogc3RhdHVzQmFySGVpZ2h0ICsgbWFyZ2luLCAvLyDnirbmgIHmoI8gKyDog7blm4rmjInpkq7ovrnot51cbiAgICAgICAgICAgIHNlYXJjaEhlaWdodDogaGVpZ2h0LCAgLy8g5LiO6IO25ZuK5oyJ6ZKu5ZCM6auYXG4gICAgICAgICAgICBzZWFyY2hXaWR0aDogcmlnaHQgLSB3aWR0aCAvLyDog7blm4rmjInpkq7lj7PovrnlnZDmoIcgLSDog7blm4rmjInpkq7lrr3luqYgPSDmjInpkq7lt6bovrnlj6/kvb/nlKjlrr3luqZcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIG1vdmVkOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgZGV0YWNoZWQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICB9XG59KSAiXX0=