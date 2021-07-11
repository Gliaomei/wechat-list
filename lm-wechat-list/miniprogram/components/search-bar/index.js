"use strict";
Component({
    properties: {
        navbarData: {
            type: Array,
            value: [],
        }
    },
    data: {
        navHeight: 0,
        menuButtonInfo: {
            top: 0,
            width: 0,
            height: 0,
            right: 0,
        },
        searchMarginTop: 0,
        searchWidth: 0,
        searchHeight: 0,
        placeholder: '',
        adList: [{
                'url': '',
                'title': '刚刚预约了服务'
            }, {
                'url': '',
                'title': '内容内容内容内容内容'
            }],
    },
    lifetimes: {
        attached: function () {
            var _this = this;
            this.setData({
                menuButtonInfo: wx.getMenuButtonBoundingClientRect()
            });
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
            this.changePlaceholder();
        },
    },
    methods: {
        changePlaceholder: function () {
            var _this = this;
            var _loop_1 = function (i) {
                setTimeout(function () {
                    _this.setData({ placeholder: _this.properties.navbarData[i] });
                }, 3000 * i);
            };
            for (var i = 0; i < this.properties.navbarData.length; i++) {
                _loop_1(i);
            }
        },
        bindViewTap: function () {
            wx.navigateTo({
                url: '../../pages/search-page/index',
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQztRQUNaLGNBQWMsRUFBRTtZQUNkLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxlQUFlLEVBQUUsQ0FBQztRQUNsQixXQUFXLEVBQUUsQ0FBQztRQUNkLFlBQVksRUFBRSxDQUFDO1FBQ2YsV0FBVyxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUMsQ0FBQztnQkFDTixLQUFLLEVBQUMsRUFBRTtnQkFDUixPQUFPLEVBQUMsU0FBUzthQUNsQixFQUFDO2dCQUNBLEtBQUssRUFBQyxFQUFFO2dCQUNSLE9BQU8sRUFBQyxZQUFZO2FBQ3JCLENBQUM7S0FDSDtJQUNELFNBQVMsRUFBRTtRQUVULFFBQVEsRUFBRTtZQUFBLGlCQWtCVDtZQWpCQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGNBQWMsRUFBRSxFQUFFLENBQUMsK0JBQStCLEVBQUU7YUFDckQsQ0FBQyxDQUFBO1lBQ0ksSUFBQSxLQUFnQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBdEQsR0FBRyxTQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsS0FBSyxXQUE2QixDQUFDO1lBQy9ELEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ2YsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDSCxJQUFBLGVBQWUsR0FBSyxHQUFHLGdCQUFSLENBQVE7b0JBQy9CLElBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxlQUFlLENBQUE7b0JBQ3BDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLGVBQWUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsZUFBZSxFQUFFLGVBQWUsR0FBRyxNQUFNO3dCQUN6QyxZQUFZLEVBQUUsTUFBTTt3QkFDcEIsV0FBVyxFQUFFLEtBQUssR0FBRyxLQUFLO3FCQUMzQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUVQLGlCQUFpQixFQUFFO1lBQUEsaUJBT2xCO29DQUxVLENBQUM7Z0JBQ1IsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBO2dCQUM1RCxDQUFDLEVBQUcsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFBOztZQUhiLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO3dCQUE3QyxDQUFDO2FBSVQ7UUFDSCxDQUFDO1FBRUQsV0FBVyxFQUFFO1lBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsK0JBQStCO2FBQ3JDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5Db21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbmF2YmFyRGF0YTogeyAgIC8vbmF2YmFyRGF0YSAgIOeUseeItumhtemdouS8oOmAkueahOaVsOaNru+8jOWPmOmHj+WQjeWtl+iHquWRveWQjVxuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWx1ZTogW10sXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgbmF2SGVpZ2h0OiAwLFxuICAgIG1lbnVCdXR0b25JbmZvOiB7XG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0sXG4gICAgc2VhcmNoTWFyZ2luVG9wOiAwLCAvLyDmkJzntKLmoYbkuIrovrnot51cbiAgICBzZWFyY2hXaWR0aDogMCwgLy8g5pCc57Si5qGG5a695bqmXG4gICAgc2VhcmNoSGVpZ2h0OiAwLCAvLyDmkJzntKLmoYbpq5jluqZcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgYWRMaXN0Olt7XG4gICAgICAndXJsJzonJyxcbiAgICAgICd0aXRsZSc6J+WImuWImumihOe6puS6huacjeWKoSdcbiAgICB9LHtcbiAgICAgICd1cmwnOicnLFxuICAgICAgJ3RpdGxlJzon5YaF5a655YaF5a655YaF5a655YaF5a655YaF5a65J1xuICAgIH1dLFxuICB9LFxuICBsaWZldGltZXM6IHtcbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzlj6/ku6XkuLrlh73mlbDvvIzmiJbkuIDkuKrlnKhtZXRob2Rz5q615Lit5a6a5LmJ55qE5pa55rOV5ZCNXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIG1lbnVCdXR0b25JbmZvOiB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIH0pXG4gICAgICBjb25zdCB7IHRvcCwgd2lkdGgsIGhlaWdodCwgcmlnaHQgfSA9IHRoaXMuZGF0YS5tZW51QnV0dG9uSW5mbztcbiAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzdGF0dXNCYXJIZWlnaHQgfSA9IHJlc1xuICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IHRvcCAtIHN0YXR1c0JhckhlaWdodFxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBuYXZIZWlnaHQ6IChoZWlnaHQgKyBzdGF0dXNCYXJIZWlnaHQgKyAobWFyZ2luICogMikpLFxuICAgICAgICAgICAgc2VhcmNoTWFyZ2luVG9wOiBzdGF0dXNCYXJIZWlnaHQgKyBtYXJnaW4sIC8vIOeKtuaAgeagjyArIOiDtuWbiuaMiemSrui+uei3nVxuICAgICAgICAgICAgc2VhcmNoSGVpZ2h0OiBoZWlnaHQsICAvLyDkuI7og7blm4rmjInpkq7lkIzpq5hcbiAgICAgICAgICAgIHNlYXJjaFdpZHRoOiByaWdodCAtIHdpZHRoIC8vIOiDtuWbiuaMiemSruWPs+i+ueWdkOaghyAtIOiDtuWbiuaMiemSruWuveW6piA9IOaMiemSruW3pui+ueWPr+S9v+eUqOWuveW6plxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFuZ2VQbGFjZWhvbGRlcigpO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvLyDmm7TmlLlwbGFjZWhvbGRlclxuICAgIGNoYW5nZVBsYWNlaG9sZGVyIDpmdW5jdGlvbiAoKTp2b2lke1xuICAgICAgLy8gbGV0IF90aGlzID0gdGhpcztcbiAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnByb3BlcnRpZXMubmF2YmFyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7cGxhY2Vob2xkZXI6IHRoaXMucHJvcGVydGllcy5uYXZiYXJEYXRhW2ldfSlcbiAgICAgICAgfSAsIDMwMDAqaSlcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIOeCueWHu+i3s+i9rOaQnOe0oumhtemdolxuICAgIGJpbmRWaWV3VGFwOiBmdW5jdGlvbigpOnZvaWR7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vLi4vcGFnZXMvc2VhcmNoLXBhZ2UvaW5kZXgnLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pICJdfQ==