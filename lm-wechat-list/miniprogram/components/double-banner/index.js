"use strict";
Component({
    properties: {
        itemInfo: {
            type: Object,
            value: {},
            observer: function (newValue) {
                this.resetData(newValue);
            }
        }
    },
    data: {
        imgInfo: {},
    },
    lifetimes: {
        attached: function () {
            this.resetData(this.properties.itemInfo);
        }
    },
    methods: {
        clickLink: function (item) {
            var link = item.currentTarget.dataset.item.link;
            console.log(link);
        },
        resetData: function (item) {
            var options = item.component[0].options;
            this.setData({
                imgInfo: JSON.parse(options)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFDO1FBQ1QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsWUFBQyxRQUFRO2dCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDMUIsQ0FBQztTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUM7UUFDSCxPQUFPLEVBQUMsRUFBRTtLQUNYO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzFDLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBVCxVQUFVLElBQVE7WUFDUixJQUFBLElBQUksR0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQXBDLENBQW9DO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUVELFNBQVMsRUFBVCxVQUFVLElBQVE7WUFDVixJQUFBLE9BQU8sR0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUF0QixDQUF1QjtZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUM3QixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOntcbiAgICBpdGVtSW5mbzoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHt9LFxuICAgICAgb2JzZXJ2ZXIobmV3VmFsdWUpe1xuICAgICAgICB0aGlzLnJlc2V0RGF0YShuZXdWYWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGE6e1xuICAgIGltZ0luZm86e30sXG4gIH0sXG4gIGxpZmV0aW1lczoge1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc2V0RGF0YSh0aGlzLnByb3BlcnRpZXMuaXRlbUluZm8pXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xpY2tMaW5rKGl0ZW06YW55KTp2b2lkIHtcbiAgICAgIGNvbnN0IHsgbGluayB9ID0gaXRlbS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbVxuICAgICAgY29uc29sZS5sb2cobGluayk7XG4gICAgfSxcbiAgICAvLyDph43nva7mlbDmja5cbiAgICByZXNldERhdGEoaXRlbTphbnkpOnZvaWR7XG4gICAgICBsZXQgeyBvcHRpb25zIH0gPSBpdGVtLmNvbXBvbmVudFswXTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGltZ0luZm86IEpTT04ucGFyc2Uob3B0aW9ucylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSJdfQ==