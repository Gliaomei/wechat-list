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
            var _a = JSON.parse(options), articleInfo = _a.articleInfo, headDescription = _a.headDescription, link = _a.link;
            this.setData({
                articleInfo: articleInfo,
                headDescription: headDescription,
                link: link
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFDO1FBQ1QsUUFBUSxFQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsWUFBQyxRQUFRO2dCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsQ0FBQztTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUM7UUFDSCxXQUFXLEVBQUMsRUFBRTtRQUNkLGVBQWUsRUFBRSxFQUFFO1FBQ25CLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBRVAsU0FBUyxFQUFULFVBQVUsSUFBUTtZQUNULElBQUEsT0FBTyxHQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQXRCLENBQXVCO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQzlCLENBQUMsQ0FBQTtZQUNJLElBQUEsS0FBd0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBekQsV0FBVyxpQkFBQSxFQUFFLGVBQWUscUJBQUEsRUFBRSxJQUFJLFVBQXVCLENBQUM7WUFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxXQUFXLEVBQUUsV0FBVztnQkFDeEIsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczp7XG4gICAgaXRlbUluZm86e1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHt9LFxuICAgICAgb2JzZXJ2ZXIobmV3VmFsdWUpe1xuICAgICAgICB0aGlzLnJlc2V0RGF0YShuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhOntcbiAgICBhcnRpY2xlSW5mbzp7fSxcbiAgICBoZWFkRGVzY3JpcHRpb246ICcnLFxuICAgIGxpbms6ICcnLFxuICB9LFxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNldERhdGEodGhpcy5wcm9wZXJ0aWVzLml0ZW1JbmZvKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvLyDph43nva7mlbDmja5cbiAgICByZXNldERhdGEoaXRlbTphbnkpOnZvaWR7XG4gICAgICBjb25zdHsgb3B0aW9ucyB9ID0gaXRlbS5jb21wb25lbnRbMF07XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaW5rSW5mbzogSlNPTi5wYXJzZShvcHRpb25zKVxuICAgICAgfSlcbiAgICAgIGNvbnN0IHsgYXJ0aWNsZUluZm8sIGhlYWREZXNjcmlwdGlvbiwgbGlua30gPSBKU09OLnBhcnNlKG9wdGlvbnMpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXJ0aWNsZUluZm86IGFydGljbGVJbmZvLFxuICAgICAgICBoZWFkRGVzY3JpcHRpb246IGhlYWREZXNjcmlwdGlvbixcbiAgICAgICAgbGluazogbGlua1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pIl19