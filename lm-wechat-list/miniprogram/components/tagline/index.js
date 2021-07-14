"use strict";
Component({
    properties: {
        itemInfo: {
            type: Object,
            value: {},
        }
    },
    data: {
        linkInfo: {
            headDescription: '',
            link: '',
            linkDescription: '',
        },
    },
    lifetimes: {
        attached: function () {
            var options = this.properties.itemInfo.component[0].options;
            this.setData({
                linkInfo: JSON.parse(options)
            });
        }
    },
    methods: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFDO1FBQ1QsUUFBUSxFQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFDRCxJQUFJLEVBQUM7UUFDSCxRQUFRLEVBQUU7WUFDUixlQUFlLEVBQUMsRUFBRTtZQUNsQixJQUFJLEVBQUUsRUFBRTtZQUNSLGVBQWUsRUFBRSxFQUFFO1NBQ3BCO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDRCxJQUFBLE9BQU8sR0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQTFDLENBQTJDO1lBQ3pELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQzlCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBRSxFQUFFO0NBQ1osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczp7XG4gICAgaXRlbUluZm86e1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHt9LFxuICAgIH1cbiAgfSxcbiAgZGF0YTp7XG4gICAgbGlua0luZm86IHtcbiAgICAgIGhlYWREZXNjcmlwdGlvbjonJyxcbiAgICAgIGxpbms6ICcnLFxuICAgICAgbGlua0Rlc2NyaXB0aW9uOiAnJyxcbiAgICB9LFxuICB9LFxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3R7IG9wdGlvbnMgfSA9IHRoaXMucHJvcGVydGllcy5pdGVtSW5mby5jb21wb25lbnRbMF07XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaW5rSW5mbzogSlNPTi5wYXJzZShvcHRpb25zKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHt9XG59KSJdfQ==