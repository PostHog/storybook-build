"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[55458],{"./frontend/src/scenes/error-tracking/ErrorTrackingFilters.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>ErrorTrackingFilters});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_components_DateFilter_DateFilter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/components/DateFilter/DateFilter.tsx"),lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/types.ts"),lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/UniversalFilters.tsx"),lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/universalFiltersLogic.ts"),lib_components_UniversalFilters_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/utils.ts"),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),scenes_insights_filters_TestAccountFilter__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./frontend/src/scenes/insights/filters/TestAccountFilter/index.ts"),_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingLogic.ts"),_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingSceneLogic.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let ErrorTrackingFilters=_ref=>{let{showOrder=!0}=_ref,{dateRange,filterGroup,filterTestAccounts}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_9__.H),{setDateRange,setFilterGroup,setFilterTestAccounts}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_9__.H),{order}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_10__.D),{setOrder}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_10__.D);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"divide-y bg-bg-light rounded border",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"flex justify-between px-2 py-1.5 flex-wrap gap-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lib_components_DateFilter_DateFilter__WEBPACK_IMPORTED_MODULE_2__.f,{dateFrom:dateRange.date_from,dateTo:dateRange.date_to,onChange:(changedDateFrom,changedDateTo)=>{setDateRange({date_from:changedDateFrom,date_to:changedDateTo})},size:"small"}),showOrder&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.LemonSelect,{onSelect:setOrder,onChange:setOrder,value:order,options:[{value:"last_seen",label:"Last seen"},{value:"first_seen",label:"First seen"},{value:"occurrences",label:"Occurrences"},{value:"users",label:"Users"},{value:"sessions",label:"Sessions"}],size:"small"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(scenes_insights_filters_TestAccountFilter__WEBPACK_IMPORTED_MODULE_8__.z,{size:"small",filters:{filter_test_accounts:filterTestAccounts},onChange:_ref2=>{let{filter_test_accounts}=_ref2;setFilterTestAccounts(filter_test_accounts||!1)}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{className:"flex flex-1 items-center space-x-2 px-2 py-1.5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_4__.Z,{rootKey:"error-tracking",group:filterGroup,taxonomicGroupTypes:[lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_3__.t.PersonProperties,lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_3__.t.Cohorts],onChange:setFilterGroup,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(RecordingsUniversalFilterGroup,{})})})]})},RecordingsUniversalFilterGroup=()=>{let{filterGroup}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_5__.d),{replaceGroupValue,removeGroupValue}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_5__.d),[allowInitiallyOpen,setAllowInitiallyOpen]=(0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{setAllowInitiallyOpen(!0)},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,{children:filterGroup.values.map((filterOrGroup,index)=>(0,lib_components_UniversalFilters_utils__WEBPACK_IMPORTED_MODULE_6__.pU)(filterOrGroup)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_4__.Z.Group,{index:index,group:filterOrGroup,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(RecordingsUniversalFilterGroup,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_4__.Z.AddFilterButton,{size:"small",type:"secondary"})]},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_4__.Z.Value,{index:index,filter:filterOrGroup,onRemove:()=>removeGroupValue(index),onChange:value=>replaceGroupValue(index,value),initiallyOpen:allowInitiallyOpen},index))})}},"./frontend/src/scenes/error-tracking/ErrorTrackingScene.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorTrackingScene:()=>ErrorTrackingScene,scene:()=>scene});var _posthog_apps_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/apps-common/src/index.ts"),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_lemon_ui_LemonTable_LemonTableLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTable/LemonTableLink.tsx"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),scenes_urls__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/scenes/urls.ts"),_queries_Query_Query__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/queries/Query/Query.tsx"),_ErrorTrackingFilters__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/scenes/error-tracking/ErrorTrackingFilters.tsx"),_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingLogic.ts"),_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingSceneLogic.ts"),_queries__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./frontend/src/scenes/error-tracking/queries.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let scene={component:ErrorTrackingScene,logic:_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_9__.D};function ErrorTrackingScene(){let{order}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useValues)(_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_9__.D),{dateRange,filterTestAccounts,filterGroup,sparklineSelectedPeriod}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useValues)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_8__.H),query=(0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_queries__WEBPACK_IMPORTED_MODULE_10__.mx)({order,dateRange,filterTestAccounts,filterGroup,sparklineSelectedPeriod}),[order,dateRange,filterTestAccounts,filterGroup,sparklineSelectedPeriod]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ErrorTrackingFilters__WEBPACK_IMPORTED_MODULE_7__.n,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_queries_Query_Query__WEBPACK_IMPORTED_MODULE_6__.A,{query:query,context:{columns:{error:{width:"50%",render:CustomGroupTitleColumn},volume:{renderTitle:CustomVolumeColumnHeader}},showOpenEditorButton:!1}})]})}let CustomVolumeColumnHeader=_ref=>{let{columnName}=_ref,{sparklineSelectedPeriod,sparklineOptions:options}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useValues)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_8__.H),{setSparklineSelectedPeriod}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useActions)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_8__.H);return sparklineSelectedPeriod?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"flex justify-between items-center min-w-64",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{children:columnName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.LemonSegmentedButton,{size:"xsmall",value:sparklineSelectedPeriod,options:options,onChange:value=>setSparklineSelectedPeriod(value)})]}):null},CustomGroupTitleColumn=props=>{let{value,record}=props,properties=JSON.parse(value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lib_lemon_ui_LemonTable_LemonTableLink__WEBPACK_IMPORTED_MODULE_3__.i,{title:properties.$exception_fingerprint,description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"space-y-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{className:"line-clamp-1",children:properties.$exception_message}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ref2=>{let{record}=_ref2,[last_seen,first_seen]=record.slice(-2);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"space-x-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_apps_common__WEBPACK_IMPORTED_MODULE_0__.TZLabel,{time:first_seen,className:"border-dotted border-b"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span",{children:"|"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_apps_common__WEBPACK_IMPORTED_MODULE_0__.TZLabel,{time:last_seen,className:"border-dotted border-b"})]})},{record:record})]}),to:scenes_urls__WEBPACK_IMPORTED_MODULE_5__.j.errorTrackingGroup(properties.$exception_fingerprint)})}},"./frontend/src/scenes/error-tracking/errorTrackingLogic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>errorTrackingLogic});var kea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/types.ts");let lastHour={value:"1h",label:"1h"},lastDay={value:"24h",label:"24h"},lastMonth={value:"mStart",label:"Month"},lastYear={value:"yStart",label:"Year"},customOptions={dStart:[lastDay,lastHour],"-24h":[lastDay,lastHour],"-1dStart":[{value:"-1d24h",label:"24h"},{value:"-1d1h",label:"1h"}],mStart:[lastMonth,lastDay],yStart:[lastYear,lastMonth],all:[lastYear,lastMonth,lastDay]},DEFAULT_FILTER_GROUP={type:_types__WEBPACK_IMPORTED_MODULE_1__.J2.And,values:[{type:_types__WEBPACK_IMPORTED_MODULE_1__.J2.And,values:[]}]},errorTrackingLogic=(0,kea__WEBPACK_IMPORTED_MODULE_0__.kea)([(0,kea__WEBPACK_IMPORTED_MODULE_0__.path)(["scenes","error-tracking","errorTrackingLogic"]),(0,kea__WEBPACK_IMPORTED_MODULE_0__.actions)({setDateRange:dateRange=>({dateRange}),setFilterGroup:filterGroup=>({filterGroup}),setFilterTestAccounts:filterTestAccounts=>({filterTestAccounts}),setSparklineSelectedPeriod:period=>({period}),_setSparklineOptions:options=>({options})}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.reducers)({dateRange:[{date_from:"-7d",date_to:null},{persist:!0},{setDateRange:(_,_ref)=>{let{dateRange}=_ref;return dateRange}}],filterGroup:[DEFAULT_FILTER_GROUP,{persist:!0},{setFilterGroup:(_,_ref2)=>{let{filterGroup}=_ref2;return filterGroup}}],filterTestAccounts:[!1,{persist:!0},{setFilterTestAccounts:(_,_ref3)=>{let{filterTestAccounts}=_ref3;return filterTestAccounts}}],sparklineSelectedPeriod:[lastDay.value,{persist:!0},{setSparklineSelectedPeriod:(_,_ref4)=>{let{period}=_ref4;return period}}],sparklineOptions:[[lastDay,lastHour],{persist:!0},{_setSparklineOptions:(_,_ref5)=>{let{options}=_ref5;return options}}]}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.listeners)(_ref6=>{let{values,actions}=_ref6;return{setDateRange:_ref7=>{let{dateRange:{date_from}}=_ref7;if(date_from){var _customOptions$date_f;let options=null!==(_customOptions$date_f=customOptions[date_from])&&void 0!==_customOptions$date_f?_customOptions$date_f:[];if(0===options.length){let isRelative=date_from.match(/-\d+[hdmy]/);if(isRelative){let value=date_from?.replace("-","");options.push({value:value,label:value},lastDay)}}if(0===options.length)actions.setSparklineSelectedPeriod(null);else{let possibleValues=options.map(o=>o.value);values.sparklineSelectedPeriod&&possibleValues.includes(values.sparklineSelectedPeriod)||actions.setSparklineSelectedPeriod(options[0].value)}actions._setSparklineOptions(options)}else actions.setSparklineSelectedPeriod(null),actions._setSparklineOptions([])}}})])},"./frontend/src/scenes/error-tracking/errorTrackingSceneLogic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>errorTrackingSceneLogic});var kea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js");let errorTrackingSceneLogic=(0,kea__WEBPACK_IMPORTED_MODULE_0__.kea)([(0,kea__WEBPACK_IMPORTED_MODULE_0__.path)(["scenes","error-tracking","errorTrackingSceneLogic"]),(0,kea__WEBPACK_IMPORTED_MODULE_0__.actions)({setOrder:order=>({order})}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.reducers)({order:["last_seen",{persist:!0},{setOrder:(_,_ref)=>{let{order}=_ref;return order}}]})])},"./frontend/src/scenes/error-tracking/queries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F1:()=>errorTrackingGroupBreakdownQuery,Ge:()=>errorTrackingGroupQuery,mx:()=>errorTrackingQuery});var lib_dayjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/lib/dayjs.ts"),lib_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/lib/utils.tsx"),_queries_schema__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/queries/schema.ts"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/types.ts");let SPARKLINE_CONFIGURATIONS={"-1d1h":{value:60,displayAs:"minute",offsetHours:24},"-1d24h":{value:24,displayAs:"hour",offsetHours:24},"1h":{value:60,displayAs:"minute"},"24h":{value:24,displayAs:"hour"},"7d":{value:168,displayAs:"hour"},"14d":{value:336,displayAs:"hour"},"90d":{value:90,displayAs:"day"},"180d":{value:26,displayAs:"week"},mStart:{value:31,displayAs:"day"},yStart:{value:52,displayAs:"week"}},toStartOfIntervalFn={minute:"toStartOfMinute",hour:"toStartOfHour",day:"toStartOfDay",week:"toStartOfWeek",month:"toStartOfMonth"},errorTrackingQuery=_ref=>{let{order,dateRange,filterTestAccounts,filterGroup,sparklineSelectedPeriod}=_ref,select=['any(properties) as "context.columns.error"',"properties.$exception_fingerprint","count() as occurrences","count(distinct $session_id) as sessions","count(distinct distinct_id) as users","max(timestamp) as last_seen","min(timestamp) as first_seen"],columns=["context.columns.error","properties.$exception_fingerprint","occurrences","sessions","users","last_seen","first_seen"];if(sparklineSelectedPeriod){let{value,displayAs,offsetHours}=parseSparklineSelection(sparklineSelectedPeriod),{labels,data}=generateSparklineProps({value,displayAs,offsetHours});select.splice(2,0,`<Sparkline data={${data}} labels={[${labels.join(",")}]} /> as "context.columns.volume"`),columns.splice(2,0,"context.columns.volume")}return{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.DataTableNode,source:{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.ErrorTrackingQuery,select:select,order:order,dateRange:dateRange,filterGroup:filterGroup,filterTestAccounts:filterTestAccounts},hiddenColumns:["properties.$exception_fingerprint","last_seen","first_seen"],showActions:!1,showTimings:!1,columns:columns}},parseSparklineSelection=selection=>{if(selection in SPARKLINE_CONFIGURATIONS)return SPARKLINE_CONFIGURATIONS[selection];let result=selection.match(/\d+|\D+/g);if(result){let[value,unit]=result;return{value:Number(value)*("y"===unit?12:1),displayAs:"h"===unit?"hour":"d"===unit?"day":"w"===unit?"week":"month"}}return{value:24,displayAs:"hour"}},generateSparklineProps=_ref2=>{let{value,displayAs,offsetHours}=_ref2,offset=null!=offsetHours?offsetHours:0,now=(0,lib_dayjs__WEBPACK_IMPORTED_MODULE_0__.Bv)().subtract(offset,"hours").startOf(displayAs),dates=(0,lib_utils__WEBPACK_IMPORTED_MODULE_1__.w6)(value).map(idx=>now.subtract(value-(idx+1),displayAs)),labels=dates.map(d=>`'${d.format("D MMM, YYYY HH:mm")} (UTC)'`),toStartOfInterval=toStartOfIntervalFn[displayAs],data=`reverse(arrayMap(x -> countEqual(groupArray(dateDiff('${displayAs}', ${toStartOfInterval}(timestamp), ${toStartOfInterval}(subtractHours(now(), ${offset})))), x), range(${value})))`;return{labels,data}},errorTrackingGroupQuery=_ref3=>{let{fingerprint,dateRange,filterTestAccounts,filterGroup}=_ref3;return{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.ErrorTrackingQuery,select:["uuid","properties","timestamp","person"],fingerprint:fingerprint,dateRange:dateRange,filterGroup:filterGroup,filterTestAccounts:filterTestAccounts}},errorTrackingGroupBreakdownQuery=_ref4=>{let{breakdownProperty,dateRange,filterTestAccounts,filterGroup}=_ref4;return{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.InsightVizNode,source:{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.TrendsQuery,trendsFilter:{display:_types__WEBPACK_IMPORTED_MODULE_3__.Qb.ActionsBarValue},breakdownFilter:{breakdown_type:"event",breakdown:breakdownProperty,breakdown_limit:10},series:[{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.EventsNode,event:"$exception",math:_types__WEBPACK_IMPORTED_MODULE_3__.vN.TotalCount}],dateRange:dateRange,properties:filterGroup.values,filterTestAccounts}}}}}]);