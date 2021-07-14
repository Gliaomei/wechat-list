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
        articleInfo: {},
        headDescription: '',
        link: '',
    },
    lifetimes: {
        attached: function () {
            this.resetData(this.properties.itemInfo);
        }
    },
    methods: {
        resetData: function (item) {
            var options = item.component[0].options;
            this.setData({
                linkInfo: JSON.parse(options)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFDO1FBQ1QsUUFBUSxFQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsWUFBQyxRQUFRO2dCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDMUIsQ0FBQztTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUM7UUFDSCxXQUFXLEVBQUMsRUFBRTtRQUNkLGVBQWUsRUFBRSxFQUFFO1FBQ25CLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUMsQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBRVAsU0FBUyxFQUFULFVBQVUsSUFBUTtZQUNULElBQUEsT0FBTyxHQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQXRCLENBQXVCO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQzlCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNBLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6e1xuICAgIGl0ZW1JbmZvOntcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiB7fSxcbiAgICAgIG9ic2VydmVyKG5ld1ZhbHVlKXtcbiAgICAgICAgdGhpcy5yZXNldERhdGEobmV3VmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhOntcbiAgICBhcnRpY2xlSW5mbzp7fSxcbiAgICBoZWFkRGVzY3JpcHRpb246ICcnLFxuICAgIGxpbms6ICcnLFxuICB9LFxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNldERhdGEodGhpcy5wcm9wZXJ0aWVzLml0ZW1JbmZvKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIOmHjee9ruaVsOaNrlxuICAgIHJlc2V0RGF0YShpdGVtOmFueSk6dm9pZHtcbiAgICAgIGNvbnN0eyBvcHRpb25zIH0gPSBpdGVtLmNvbXBvbmVudFswXTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpbmtJbmZvOiBKU09OLnBhcnNlKG9wdGlvbnMpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICB9KSJdfQ==