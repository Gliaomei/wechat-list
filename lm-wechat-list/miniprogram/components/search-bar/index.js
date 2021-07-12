"use strict";
Component({
    properties: {
        navbarData: {
            type: Array,
            value: [],
        },
        showBack: {
            type: Boolean,
            value: false,
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
        backImgUrl: '../../images/back.png',
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
                        searchMarginTop: statusBarHeight + margin + 4,
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
        },
        backHandle: function () {
            wx.navigateTo({
                url: '/pages/index/index'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQztRQUNaLGNBQWMsRUFBRTtZQUNkLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxlQUFlLEVBQUUsQ0FBQztRQUNsQixXQUFXLEVBQUUsQ0FBQztRQUNkLFlBQVksRUFBRSxDQUFDO1FBQ2YsV0FBVyxFQUFFLEVBQUU7UUFDZixVQUFVLEVBQUUsdUJBQXVCO0tBQ3BDO0lBQ0QsU0FBUyxFQUFFO1FBRVQsUUFBUSxFQUFFO1lBQUEsaUJBa0JUO1lBakJDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsY0FBYyxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRTthQUNyRCxDQUFDLENBQUE7WUFDSSxJQUFBLEtBQWdDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUF0RCxHQUFHLFNBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxLQUFLLFdBQTZCLENBQUM7WUFDL0QsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDZixPQUFPLEVBQUUsVUFBQyxHQUFHO29CQUNILElBQUEsZUFBZSxHQUFLLEdBQUcsZ0JBQVIsQ0FBUTtvQkFDL0IsSUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLGVBQWUsQ0FBQTtvQkFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxTQUFTLEVBQUUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxlQUFlLEVBQUUsZUFBZSxHQUFHLE1BQU0sR0FBRyxDQUFDO3dCQUM3QyxZQUFZLEVBQUUsTUFBTTt3QkFDcEIsV0FBVyxFQUFFLEtBQUssR0FBRyxLQUFLO3FCQUMzQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUVQLGlCQUFpQixFQUFFO1lBQUEsaUJBT2xCO29DQUxVLENBQUM7Z0JBQ1IsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBO2dCQUM1RCxDQUFDLEVBQUcsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFBOztZQUhiLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO3dCQUE3QyxDQUFDO2FBSVQ7UUFDSCxDQUFDO1FBRUQsV0FBVyxFQUFFLFVBQVMsSUFBUztZQUM3QixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSTthQUN0QyxDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSwrQkFBK0I7YUFDckMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELFVBQVUsRUFBRTtZQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG9CQUFvQjthQUMxQixDQUFDLENBQUM7UUFXTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIG5hdmJhckRhdGE6IHsgICAvL25hdmJhckRhdGEgICDnlLHniLbpobXpnaLkvKDpgJLnmoTmlbDmja7vvIzlj5jph4/lkI3lrZfoh6rlkb3lkI1cbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IFtdLFxuICAgIH0sXG4gICAgc2hvd0JhY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgbmF2SGVpZ2h0OiAwLFxuICAgIG1lbnVCdXR0b25JbmZvOiB7XG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0sXG4gICAgc2VhcmNoTWFyZ2luVG9wOiAwLCAvLyDmkJzntKLmoYbkuIrovrnot51cbiAgICBzZWFyY2hXaWR0aDogMCwgLy8g5pCc57Si5qGG5a695bqmXG4gICAgc2VhcmNoSGVpZ2h0OiAwLCAvLyDmkJzntKLmoYbpq5jluqZcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgYmFja0ltZ1VybDogJy4uLy4uL2ltYWdlcy9iYWNrLnBuZycsXG4gIH0sXG4gIGxpZmV0aW1lczoge1xuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOWPr+S7peS4uuWHveaVsO+8jOaIluS4gOS4quWcqG1ldGhvZHPmrrXkuK3lrprkuYnnmoTmlrnms5XlkI1cbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbWVudUJ1dHRvbkluZm86IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgfSlcbiAgICAgIGNvbnN0IHsgdG9wLCB3aWR0aCwgaGVpZ2h0LCByaWdodCB9ID0gdGhpcy5kYXRhLm1lbnVCdXR0b25JbmZvO1xuICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0YXR1c0JhckhlaWdodCB9ID0gcmVzXG4gICAgICAgICAgY29uc3QgbWFyZ2luID0gdG9wIC0gc3RhdHVzQmFySGVpZ2h0XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG5hdkhlaWdodDogKGhlaWdodCArIHN0YXR1c0JhckhlaWdodCArIChtYXJnaW4gKiAyKSksXG4gICAgICAgICAgICBzZWFyY2hNYXJnaW5Ub3A6IHN0YXR1c0JhckhlaWdodCArIG1hcmdpbiArIDQsIC8vIOeKtuaAgeagjyArIOiDtuWbiuaMiemSrui+uei3nVxuICAgICAgICAgICAgc2VhcmNoSGVpZ2h0OiBoZWlnaHQsICAvLyDkuI7og7blm4rmjInpkq7lkIzpq5hcbiAgICAgICAgICAgIHNlYXJjaFdpZHRoOiByaWdodCAtIHdpZHRoIC8vIOiDtuWbiuaMiemSruWPs+i+ueWdkOaghyAtIOiDtuWbiuaMiemSruWuveW6piA9IOaMiemSruW3pui+ueWPr+S9v+eUqOWuveW6plxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFuZ2VQbGFjZWhvbGRlcigpO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvLyDmm7TmlLlwbGFjZWhvbGRlclxuICAgIGNoYW5nZVBsYWNlaG9sZGVyIDpmdW5jdGlvbiAoKTp2b2lke1xuICAgICAgLy8gbGV0IF90aGlzID0gdGhpcztcbiAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnByb3BlcnRpZXMubmF2YmFyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7cGxhY2Vob2xkZXI6IHRoaXMucHJvcGVydGllcy5uYXZiYXJEYXRhW2ldfSlcbiAgICAgICAgfSAsIDMwMDAqaSlcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIOeCueWHu+i3s+i9rOaQnOe0oumhtemdolxuICAgIGJpbmRWaWV3VGFwOiBmdW5jdGlvbihpdGVtOiBhbnkpOnZvaWR7XG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiBcImNsaWNrSXRlbVwiLFxuICAgICAgICBkYXRhOiBpdGVtLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtXG4gICAgICB9KVxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uLy4uL3BhZ2VzL3NlYXJjaC1wYWdlL2luZGV4JyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDngrnlh7vov5Tlm55cbiAgICBiYWNrSGFuZGxlOiBmdW5jdGlvbigpOnZvaWR7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgfSk7XG4gICAgICAvLyBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgLy8gaWYgKHBhZ2VzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAvLyAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAvLyAgICAgZGVsdGE6IDFcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIC8vICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxufSkgIl19