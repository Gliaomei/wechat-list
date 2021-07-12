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
        bindViewTap: function (item) {
            wx.setStorage({
                key: "clickItem",
                data: item.currentTarget.dataset.item
            });
            wx.navigateTo({
                url: '../../pages/search-page/index',
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQztRQUNaLGNBQWMsRUFBRTtZQUNkLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxlQUFlLEVBQUUsQ0FBQztRQUNsQixXQUFXLEVBQUUsQ0FBQztRQUNkLFlBQVksRUFBRSxDQUFDO1FBQ2YsV0FBVyxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUMsQ0FBQztnQkFDTixLQUFLLEVBQUMsRUFBRTtnQkFDUixPQUFPLEVBQUMsU0FBUzthQUNsQixFQUFDO2dCQUNBLEtBQUssRUFBQyxFQUFFO2dCQUNSLE9BQU8sRUFBQyxZQUFZO2FBQ3JCLENBQUM7S0FDSDtJQUNELFNBQVMsRUFBRTtRQUVULFFBQVEsRUFBRTtZQUFBLGlCQWtCVDtZQWpCQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGNBQWMsRUFBRSxFQUFFLENBQUMsK0JBQStCLEVBQUU7YUFDckQsQ0FBQyxDQUFBO1lBQ0ksSUFBQSxLQUFnQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBdEQsR0FBRyxTQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsS0FBSyxXQUE2QixDQUFDO1lBQy9ELEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ2YsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDSCxJQUFBLGVBQWUsR0FBSyxHQUFHLGdCQUFSLENBQVE7b0JBQy9CLElBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxlQUFlLENBQUE7b0JBQ3BDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLGVBQWUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsZUFBZSxFQUFFLGVBQWUsR0FBRyxNQUFNO3dCQUN6QyxZQUFZLEVBQUUsTUFBTTt3QkFDcEIsV0FBVyxFQUFFLEtBQUssR0FBRyxLQUFLO3FCQUMzQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUVQLGlCQUFpQixFQUFFO1lBQUEsaUJBT2xCO29DQUxVLENBQUM7Z0JBQ1IsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBO2dCQUM1RCxDQUFDLEVBQUcsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFBOztZQUhiLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO3dCQUE3QyxDQUFDO2FBSVQ7UUFDSCxDQUFDO1FBRUQsV0FBVyxFQUFFLFVBQVMsSUFBUztZQUM3QixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSTthQUN0QyxDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSwrQkFBK0I7YUFDckMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcbkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICBuYXZiYXJEYXRhOiB7ICAgLy9uYXZiYXJEYXRhICAg55Sx54i26aG16Z2i5Lyg6YCS55qE5pWw5o2u77yM5Y+Y6YeP5ZCN5a2X6Ieq5ZG95ZCNXG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBbXSxcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBuYXZIZWlnaHQ6IDAsXG4gICAgbWVudUJ1dHRvbkluZm86IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSxcbiAgICBzZWFyY2hNYXJnaW5Ub3A6IDAsIC8vIOaQnOe0ouahhuS4iui+uei3nVxuICAgIHNlYXJjaFdpZHRoOiAwLCAvLyDmkJzntKLmoYblrr3luqZcbiAgICBzZWFyY2hIZWlnaHQ6IDAsIC8vIOaQnOe0ouahhumrmOW6plxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBhZExpc3Q6W3tcbiAgICAgICd1cmwnOicnLFxuICAgICAgJ3RpdGxlJzon5Yia5Yia6aKE57qm5LqG5pyN5YqhJ1xuICAgIH0se1xuICAgICAgJ3VybCc6JycsXG4gICAgICAndGl0bGUnOiflhoXlrrnlhoXlrrnlhoXlrrnlhoXlrrnlhoXlrrknXG4gICAgfV0sXG4gIH0sXG4gIGxpZmV0aW1lczoge1xuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOWPr+S7peS4uuWHveaVsO+8jOaIluS4gOS4quWcqG1ldGhvZHPmrrXkuK3lrprkuYnnmoTmlrnms5XlkI1cbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbWVudUJ1dHRvbkluZm86IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgfSlcbiAgICAgIGNvbnN0IHsgdG9wLCB3aWR0aCwgaGVpZ2h0LCByaWdodCB9ID0gdGhpcy5kYXRhLm1lbnVCdXR0b25JbmZvO1xuICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0YXR1c0JhckhlaWdodCB9ID0gcmVzXG4gICAgICAgICAgY29uc3QgbWFyZ2luID0gdG9wIC0gc3RhdHVzQmFySGVpZ2h0XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG5hdkhlaWdodDogKGhlaWdodCArIHN0YXR1c0JhckhlaWdodCArIChtYXJnaW4gKiAyKSksXG4gICAgICAgICAgICBzZWFyY2hNYXJnaW5Ub3A6IHN0YXR1c0JhckhlaWdodCArIG1hcmdpbiwgLy8g54q25oCB5qCPICsg6IO25ZuK5oyJ6ZKu6L656LedXG4gICAgICAgICAgICBzZWFyY2hIZWlnaHQ6IGhlaWdodCwgIC8vIOS4juiDtuWbiuaMiemSruWQjOmrmFxuICAgICAgICAgICAgc2VhcmNoV2lkdGg6IHJpZ2h0IC0gd2lkdGggLy8g6IO25ZuK5oyJ6ZKu5Y+z6L655Z2Q5qCHIC0g6IO25ZuK5oyJ6ZKu5a695bqmID0g5oyJ6ZKu5bem6L655Y+v5L2/55So5a695bqmXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYW5nZVBsYWNlaG9sZGVyKCk7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIOabtOaUuXBsYWNlaG9sZGVyXG4gICAgY2hhbmdlUGxhY2Vob2xkZXIgOmZ1bmN0aW9uICgpOnZvaWR7XG4gICAgICAvLyBsZXQgX3RoaXMgPSB0aGlzO1xuICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucHJvcGVydGllcy5uYXZiYXJEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtwbGFjZWhvbGRlcjogdGhpcy5wcm9wZXJ0aWVzLm5hdmJhckRhdGFbaV19KVxuICAgICAgICB9ICwgMzAwMCppKVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8g54K55Ye76Lez6L2s5pCc57Si6aG16Z2iXG4gICAgYmluZFZpZXdUYXA6IGZ1bmN0aW9uKGl0ZW06IGFueSk6dm9pZHtcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6IFwiY2xpY2tJdGVtXCIsXG4gICAgICAgIGRhdGE6IGl0ZW0uY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW1cbiAgICAgIH0pXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vLi4vcGFnZXMvc2VhcmNoLXBhZ2UvaW5kZXgnLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pICJdfQ==