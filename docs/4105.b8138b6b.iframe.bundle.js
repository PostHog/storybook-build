"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[4105],{"./frontend/src/scenes/web-analytics/WebAnalyticsScene.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WebAnalyticsScene:()=>WebAnalyticsScene,scene:()=>scene});var index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib=__webpack_require__("./node_modules/.pnpm/kea-loaders@3.0.0_kea@3.1.5/node_modules/kea-loaders/lib/index.js"),kea_router_lib=__webpack_require__("./node_modules/.pnpm/kea-router@3.1.3_kea@3.1.5/node_modules/kea-router/lib/index.js"),kea_window_values_lib=__webpack_require__("./node_modules/.pnpm/kea-window-values@3.0.0_kea@3.1.5/node_modules/kea-window-values/lib/index.js"),api=__webpack_require__("./frontend/src/lib/api.ts"),constants=__webpack_require__("./frontend/src/lib/constants.tsx"),dayjs=__webpack_require__("./frontend/src/lib/dayjs.ts"),utils=__webpack_require__("./frontend/src/lib/utils.tsx"),schema=__webpack_require__("./frontend/src/queries/schema.ts"),types=__webpack_require__("./frontend/src/types.ts");let GraphsTab=function(GraphsTab){return GraphsTab.UNIQUE_USERS="UNIQUE_USERS",GraphsTab.PAGE_VIEWS="PAGE_VIEWS",GraphsTab.NUM_SESSION="NUM_SESSION",GraphsTab}({}),SourceTab=function(SourceTab){return SourceTab.REFERRING_DOMAIN="REFERRING_DOMAIN",SourceTab.CHANNEL="CHANNEL",SourceTab.UTM_SOURCE="UTM_SOURCE",SourceTab.UTM_MEDIUM="UTM_MEDIUM",SourceTab.UTM_CAMPAIGN="UTM_CAMPAIGN",SourceTab.UTM_CONTENT="UTM_CONTENT",SourceTab.UTM_TERM="UTM_TERM",SourceTab}({}),DeviceTab=function(DeviceTab){return DeviceTab.BROWSER="BROWSER",DeviceTab.OS="OS",DeviceTab.DEVICE_TYPE="DEVICE_TYPE",DeviceTab}({}),PathTab=function(PathTab){return PathTab.PATH="PATH",PathTab.INITIAL_PATH="INITIAL_PATH",PathTab}({}),GeographyTab=function(GeographyTab){return GeographyTab.MAP="MAP",GeographyTab.COUNTRIES="COUNTRIES",GeographyTab.REGIONS="REGIONS",GeographyTab.CITIES="CITIES",GeographyTab}({});const GEOIP_PLUGIN_URLS=["https://github.com/PostHog/posthog-plugin-geoip","https://www.npmjs.com/package/@posthog/geoip-plugin"],initialWebAnalyticsFilter=[],initialInterval=(0,utils.Rx)("-7d",null),webAnalyticsLogic=(0,index_esm.kea)([(0,index_esm.path)(["scenes","webAnalytics","webAnalyticsSceneLogic"]),(0,index_esm.connect)({}),(0,index_esm.actions)({setWebAnalyticsFilters:webAnalyticsFilters=>({webAnalyticsFilters}),togglePropertyFilter:(type,key,value,tabChange)=>({type,key,value,tabChange}),setGraphsTab:tab=>({tab}),setSourceTab:tab=>({tab}),setDeviceTab:tab=>({tab}),setPathTab:tab=>({tab}),setGeographyTab:tab=>({tab}),setDates:(dateFrom,dateTo)=>({dateFrom,dateTo}),setInterval:interval=>({interval}),setStateFromUrl:state=>({state})}),(0,index_esm.reducers)({webAnalyticsFilters:[initialWebAnalyticsFilter,{setWebAnalyticsFilters:(_,_ref)=>{let{webAnalyticsFilters}=_ref;return webAnalyticsFilters},togglePropertyFilter:(oldPropertyFilters,_ref2)=>{let{key,value,type}=_ref2;if(oldPropertyFilters.some((f=>f.type===type&&f.key===key&&f.operator===types.WV.Exact)))return oldPropertyFilters.map((f=>{if(f.key!==key||f.type!==type||f.operator!==types.WV.Exact)return f;const oldValue=(Array.isArray(f.value)?f.value:[f.value]).filter(utils.DX);let newValue;if(oldValue.includes(value)){if(!(oldValue.length>1))return null;newValue=[value]}else newValue=[...oldValue,value];return{type:types.FT.Event,key,operator:types.WV.Exact,value:newValue}})).filter(utils.DX);{const newFilter={type,key,value,operator:types.WV.Exact};return[...oldPropertyFilters,newFilter]}},setStateFromUrl:(_,_ref3)=>{let{state}=_ref3;return state.filters}}],_graphsTab:[null,{setGraphsTab:(_,_ref4)=>{let{tab}=_ref4;return tab},setStateFromUrl:(_,_ref5)=>{let{state}=_ref5;return state.graphsTab},togglePropertyFilter:(oldTab,_ref6)=>{let{tabChange}=_ref6;return tabChange?.graphsTab||oldTab}}],_sourceTab:[null,{setSourceTab:(_,_ref7)=>{let{tab}=_ref7;return tab},setStateFromUrl:(_,_ref8)=>{let{state}=_ref8;return state.sourceTab},togglePropertyFilter:(oldTab,_ref9)=>{let{tabChange}=_ref9;return tabChange?.sourceTab||oldTab}}],_deviceTab:[null,{setDeviceTab:(_,_ref10)=>{let{tab}=_ref10;return tab},setStateFromUrl:(_,_ref11)=>{let{state}=_ref11;return state.deviceTab},togglePropertyFilter:(oldTab,_ref12)=>{let{tabChange}=_ref12;return tabChange?.deviceTab||oldTab}}],_pathTab:[null,{setPathTab:(_,_ref13)=>{let{tab}=_ref13;return tab},setStateFromUrl:(_,_ref14)=>{let{state}=_ref14;return state.pathTab},togglePropertyFilter:(oldTab,_ref15)=>{let{tabChange}=_ref15;return tabChange?.pathTab||oldTab}}],_geographyTab:[null,{setGeographyTab:(_,_ref16)=>{let{tab}=_ref16;return tab},setStateFromUrl:(_,_ref17)=>{let{state}=_ref17;return state.geographyTab},togglePropertyFilter:(oldTab,_ref18)=>{let{tabChange}=_ref18;return tabChange?.geographyTab||oldTab}}],dateFilter:[{dateFrom:"-7d",dateTo:null,interval:initialInterval},{setDates:(_,_ref19)=>{let{dateTo,dateFrom}=_ref19;return{dateTo,dateFrom,interval:(0,utils.Rx)(dateFrom,dateTo)}},setInterval:(_ref20,_ref21)=>{let{dateFrom:oldDateFrom,dateTo:oldDateTo}=_ref20,{interval}=_ref21;const{dateFrom,dateTo}=(0,utils.pQ)(interval,oldDateFrom,oldDateTo);return{dateTo,dateFrom,interval}},setStateFromUrl:(_,_ref22)=>{let{state:{dateTo,dateFrom,interval}}=_ref22;return dateFrom||dateTo||(dateFrom="-7d",dateTo=null),{dateTo,dateFrom,interval:interval||(0,utils.Rx)(dateFrom,dateTo)}}}]}),(0,index_esm.selectors)((_ref23=>{let{actions,values}=_ref23;return{graphsTab:[s=>[s._graphsTab],graphsTab=>graphsTab||GraphsTab.UNIQUE_USERS],sourceTab:[s=>[s._sourceTab],sourceTab=>sourceTab||SourceTab.REFERRING_DOMAIN],deviceTab:[s=>[s._deviceTab],deviceTab=>deviceTab||DeviceTab.DEVICE_TYPE],pathTab:[s=>[s._pathTab],pathTab=>pathTab||PathTab.PATH],geographyTab:[s=>[s._geographyTab],geographyTab=>geographyTab||GeographyTab.MAP],tiles:[s=>[s.webAnalyticsFilters,s.graphsTab,s.sourceTab,s.deviceTab,s.pathTab,s.geographyTab,s.dateFilter,()=>values.statusCheck,()=>values.isGreaterThanMd,()=>values.shouldShowGeographyTile],(webAnalyticsFilters,graphsTab,sourceTab,deviceTab,pathTab,geographyTab,_ref24,statusCheck,isGreaterThanMd,shouldShowGeographyTile)=>{let{dateFrom,dateTo,interval}=_ref24;const dateRange={date_from:dateFrom,date_to:dateTo},compare=!!dateRange.date_from;return[{layout:{colSpanClassName:"md:col-span-full",orderWhenLargeClassName:"xxl:order-0"},query:{kind:schema.OH.WebOverviewQuery,properties:webAnalyticsFilters,dateRange}},{layout:{colSpanClassName:"md:col-span-2",orderWhenLargeClassName:"xxl:order-1"},activeTabId:graphsTab,setTabId:actions.setGraphsTab,tabs:[{id:GraphsTab.UNIQUE_USERS,title:"Unique visitors",linkText:"Visitors",query:{kind:schema.OH.InsightVizNode,source:{kind:schema.OH.TrendsQuery,dateRange,interval,series:[{event:"$pageview",kind:schema.OH.EventsNode,math:types.vN.UniqueUsers,name:"$pageview"}],trendsFilter:{compare,display:types.Qb.ActionsLineGraph},filterTestAccounts:!0,properties:webAnalyticsFilters},hidePersonsModal:!0,embedded:!0},showIntervalSelect:!0},{id:GraphsTab.PAGE_VIEWS,title:"Page views",linkText:"Views",query:{kind:schema.OH.InsightVizNode,source:{kind:schema.OH.TrendsQuery,dateRange,interval,series:[{event:"$pageview",kind:schema.OH.EventsNode,math:types.vN.TotalCount,name:"$pageview"}],trendsFilter:{compare,display:types.Qb.ActionsLineGraph},filterTestAccounts:!0,properties:webAnalyticsFilters},hidePersonsModal:!0,embedded:!0},showIntervalSelect:!0},{id:GraphsTab.NUM_SESSION,title:"Sessions",linkText:"Sessions",query:{kind:schema.OH.InsightVizNode,source:{kind:schema.OH.TrendsQuery,dateRange,interval,series:[{event:"$pageview",kind:schema.OH.EventsNode,math:types.vN.UniqueSessions,name:"$pageview"}],trendsFilter:{compare,display:types.Qb.ActionsLineGraph},filterTestAccounts:!0,properties:webAnalyticsFilters},suppressSessionAnalysisWarning:!0,hidePersonsModal:!0,embedded:!0},showIntervalSelect:!0}]},{layout:{colSpanClassName:"md:col-span-2",orderWhenLargeClassName:"xxl:order-4"},activeTabId:pathTab,setTabId:actions.setPathTab,tabs:[{id:PathTab.PATH,title:"Top paths",linkText:"Path",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.Page,dateRange,includeScrollDepth:statusCheck?.isSendingPageLeavesScroll},embedded:!1}},{id:PathTab.INITIAL_PATH,title:"Top entry paths",linkText:"Entry Path",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.InitialPage,dateRange,includeScrollDepth:statusCheck?.isSendingPageLeavesScroll},embedded:!1}}]},{layout:{colSpanClassName:"md:col-span-1",orderWhenLargeClassName:"xxl:order-2"},activeTabId:sourceTab,setTabId:actions.setSourceTab,tabs:[{id:SourceTab.REFERRING_DOMAIN,title:"Top referrers",linkText:"Referrering domain",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.InitialReferringDomain,dateRange}}},{id:SourceTab.CHANNEL,title:"Top channels",linkText:"Channel",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.InitialChannelType,dateRange}}},{id:SourceTab.UTM_SOURCE,title:"Top sources",linkText:"UTM source",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.InitialUTMSource,dateRange}}},{id:SourceTab.UTM_MEDIUM,title:"Top UTM medium",linkText:"UTM medium",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.InitialUTMMedium,dateRange}}},{id:SourceTab.UTM_CAMPAIGN,title:"Top UTM campaigns",linkText:"UTM campaign",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.InitialUTMCampaign,dateRange}}},{id:SourceTab.UTM_CONTENT,title:"Top UTM content",linkText:"UTM content",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.InitialUTMContent,dateRange}}},{id:SourceTab.UTM_TERM,title:"Top UTM terms",linkText:"UTM term",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.InitialUTMTerm,dateRange}}}]},{layout:{colSpanClassName:"md:col-span-1",orderWhenLargeClassName:"xxl:order-3"},activeTabId:deviceTab,setTabId:actions.setDeviceTab,tabs:[{id:DeviceTab.DEVICE_TYPE,title:"Device types",linkText:"Device type",query:{kind:schema.OH.InsightVizNode,source:{kind:schema.OH.TrendsQuery,breakdown:{breakdown:"$device_type",breakdown_type:"event"},dateRange,series:[{event:"$pageview",kind:schema.OH.EventsNode,math:types.vN.UniqueUsers}],trendsFilter:{display:types.Qb.ActionsPie,show_labels_on_series:!0},filterTestAccounts:!0,properties:webAnalyticsFilters},hidePersonsModal:!0,vizSpecificOptions:{[types.Qb.ActionsPie]:{disableHoverOffset:!0,hideAggregation:!0}},embedded:!0}},{id:DeviceTab.BROWSER,title:"Top browsers",linkText:"Browser",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.Browser,dateRange},embedded:!1}},{id:DeviceTab.OS,title:"Top OSs",linkText:"OS",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.OS,dateRange},embedded:!1}}]},shouldShowGeographyTile?{layout:{colSpanClassName:"md:col-span-full"},activeTabId:geographyTab||GeographyTab.MAP,setTabId:actions.setGeographyTab,tabs:[{id:GeographyTab.MAP,title:"World map",linkText:"Map",query:{kind:schema.OH.InsightVizNode,source:{kind:schema.OH.TrendsQuery,breakdown:{breakdown:"$geoip_country_code",breakdown_type:"person"},dateRange,series:[{event:"$pageview",kind:schema.OH.EventsNode,math:types.vN.UniqueUsers}],trendsFilter:{display:types.Qb.WorldMap},filterTestAccounts:!0,properties:webAnalyticsFilters},hidePersonsModal:!0,embedded:!0}},{id:GeographyTab.COUNTRIES,title:"Top countries",linkText:"Countries",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.Country,dateRange}}},{id:GeographyTab.REGIONS,title:"Top regions",linkText:"Regions",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.Region,dateRange}}},{id:GeographyTab.CITIES,title:"Top cities",linkText:"Cities",query:{full:!0,kind:schema.OH.DataTableNode,source:{kind:schema.OH.WebStatsTableQuery,properties:webAnalyticsFilters,breakdownBy:schema.GI.City,dateRange}}}]}:null,{title:"Retention",layout:{colSpanClassName:"md:col-span-2"},query:{kind:schema.OH.InsightVizNode,source:{kind:schema.OH.RetentionQuery,properties:webAnalyticsFilters,dateRange,filterTestAccounts:!0,retentionFilter:{retention_type:constants.qL,retention_reference:"total",total_intervals:isGreaterThanMd?8:5,period:types.xW.Week}},vizSpecificOptions:{[types.dw.RETENTION]:{hideLineGraph:!0,hideSizeColumn:!isGreaterThanMd,useSmallLayout:!isGreaterThanMd}},embedded:!0}}].filter(utils.DX)}],hasCountryFilter:[s=>[s.webAnalyticsFilters],webAnalyticsFilters=>webAnalyticsFilters.some((filter=>"$geoip_country_code"===filter.key))],hasDeviceTypeFilter:[s=>[s.webAnalyticsFilters],webAnalyticsFilters=>webAnalyticsFilters.some((filter=>"$device_type"===filter.key))],hasBrowserFilter:[s=>[s.webAnalyticsFilters],webAnalyticsFilters=>webAnalyticsFilters.some((filter=>"$browser"===filter.key))],hasOSFilter:[s=>[s.webAnalyticsFilters],webAnalyticsFilters=>webAnalyticsFilters.some((filter=>"$os"===filter.key))]}})),(0,lib.loaders)((()=>({statusCheck:{__default:null,loadStatusCheck:async()=>{const[pageviewResult,pageleaveResult,pageleaveScroll]=await Promise.allSettled([api.ZP.eventDefinitions.list({event_type:types.uW.Event,search:"$pageview"}),api.ZP.eventDefinitions.list({event_type:types.uW.Event,search:"$pageleave"}),api.ZP.propertyDefinitions.list({event_names:["$pageleave"],properties:["$prev_pageview_max_content_percentage"]})]),pageviewEntry="fulfilled"===pageviewResult.status?pageviewResult.value.results.find((r=>"$pageview"===r.name)):void 0,pageleaveEntry="fulfilled"===pageleaveResult.status?pageleaveResult.value.results.find((r=>"$pageleave"===r.name)):void 0,pageleaveScrollEntry="fulfilled"===pageleaveScroll.status?pageleaveScroll.value.results.find((r=>"$prev_pageview_max_content_percentage"===r.name)):void 0;return{isSendingPageViews:!!pageviewEntry&&!isDefinitionStale(pageviewEntry),isSendingPageLeaves:!!pageleaveEntry&&!isDefinitionStale(pageleaveEntry),isSendingPageLeavesScroll:!!pageleaveScrollEntry&&!isDefinitionStale(pageleaveScrollEntry)}}},shouldShowGeographyTile:{_default:null,loadShouldShowGeographyTile:async()=>{const[propertiesResponse,pluginsResponse,pluginsConfigResponse]=await Promise.allSettled([api.ZP.propertyDefinitions.list({event_names:["$pageview"],properties:["$geoip_country_code"]}),api.ZP.loadPaginatedResults("api/organizations/@current/plugins"),api.ZP.loadPaginatedResults("api/plugin_config")]);if(!("fulfilled"===propertiesResponse.status&&propertiesResponse.value.results.some((property=>"$geoip_country_code"===property.name&&!isDefinitionStale(property)))))return!1;const geoIpPlugin="fulfilled"===pluginsResponse.status&&pluginsResponse.value.find((plugin=>GEOIP_PLUGIN_URLS.includes(plugin.url))),geoIpPluginId=geoIpPlugin?geoIpPlugin.id:void 0,geoIpPluginConfig=(0,utils.DX)(geoIpPluginId)&&"fulfilled"===pluginsConfigResponse.status&&pluginsConfigResponse.value.find((plugin=>plugin.plugin===geoIpPluginId));return!!geoIpPluginConfig&&geoIpPluginConfig.enabled}}}))),(0,index_esm.afterMount)((_ref25=>{let{actions}=_ref25;actions.loadStatusCheck(),actions.loadShouldShowGeographyTile()})),(0,kea_window_values_lib.windowValues)({isGreaterThanMd:window=>window.innerWidth>768}),(0,kea_router_lib.actionToUrl)((_ref26=>{let{values}=_ref26;const stateToUrl=()=>{const{webAnalyticsFilters,dateFilter:{dateTo,dateFrom,interval},sourceTab,deviceTab,pathTab,geographyTab,graphsTab}=values,urlParams=new URLSearchParams;return webAnalyticsFilters.length>0&&urlParams.set("filters",JSON.stringify(webAnalyticsFilters)),"-7d"===dateFrom&&null===dateTo&&interval===initialInterval||(urlParams.set("date_from",null!=dateFrom?dateFrom:""),urlParams.set("date_to",null!=dateTo?dateTo:""),urlParams.set("interval",null!=interval?interval:"")),deviceTab&&urlParams.set("device_tab",deviceTab),sourceTab&&urlParams.set("source_tab",sourceTab),graphsTab&&urlParams.set("graphs_tab",graphsTab),pathTab&&urlParams.set("path_tab",pathTab),geographyTab&&urlParams.set("geography_tab",geographyTab),`/web?${urlParams.toString()}`};return{setWebAnalyticsFilters:stateToUrl,togglePropertyFilter:stateToUrl,setDates:stateToUrl,setInterval:stateToUrl,setDeviceTab:stateToUrl,setSourceTab:stateToUrl,setGraphsTab:stateToUrl,setPathTab:stateToUrl,setGeographyTab:stateToUrl}})),(0,kea_router_lib.urlToAction)((_ref27=>{let{actions}=_ref27;return{"/web":(_,_ref28)=>{let{filters,date_from,date_to,interval,device_tab,source_tab,graphs_tab,path_tab,geography_tab}=_ref28;actions.setStateFromUrl({filters:filters||initialWebAnalyticsFilter,dateFrom:date_from||null,dateTo:date_to||null,interval:interval||null,deviceTab:device_tab||null,sourceTab:source_tab||null,graphsTab:graphs_tab||null,pathTab:path_tab||null,geographyTab:geography_tab||null})}}}))]),isDefinitionStale=definition=>{const parsedLastSeen=definition.last_seen_at?(0,dayjs.Bv)(definition.last_seen_at):null;return!!parsedLastSeen&&(0,dayjs.Bv)().diff(parsedLastSeen,"seconds")>constants.Mo};var clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),DateFilter=__webpack_require__("./frontend/src/lib/components/DateFilter/DateFilter.tsx"),PropertyFilters=__webpack_require__("./frontend/src/lib/components/PropertyFilters/PropertyFilters.tsx"),PropertyFilters_utils=__webpack_require__("./frontend/src/lib/components/PropertyFilters/utils.ts"),TaxonomicFilter_types=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/types.ts"),LemonBanner=__webpack_require__("./frontend/src/lib/lemon-ui/LemonBanner/index.ts"),Link=__webpack_require__("./frontend/src/lib/lemon-ui/Link/index.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const WebAnalyticsHealthCheck=()=>{const{statusCheck}=(0,index_esm.useValues)(webAnalyticsLogic);return statusCheck?statusCheck.isSendingPageViews?statusCheck.isSendingPageLeaves?null:(0,jsx_runtime.jsxs)(LemonBanner.V,{type:"warning",className:"mt-2",children:[(0,jsx_runtime.jsxs)("p",{children:["No ",(0,jsx_runtime.jsx)("code",{children:"$pageleave"})," events have been received, this means that Bounce rate and Session duration might be inaccurate."]}),(0,jsx_runtime.jsxs)("p",{children:["Please see"," ",(0,jsx_runtime.jsx)(Link.r,{to:"https://posthog.com/docs/libraries/js",children:"documentation for how to set up posthog-js"}),"."]})]}):(0,jsx_runtime.jsxs)(LemonBanner.V,{type:"warning",className:"mt-2",children:[(0,jsx_runtime.jsxs)("p",{children:["No ",(0,jsx_runtime.jsx)("code",{children:"$pageview"})," ",statusCheck.isSendingPageLeaves?null:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["or ",(0,jsx_runtime.jsx)("code",{children:"$pageleave"})," "]}),"events have been received. Web analytics won't work correctly (it'll be a little empty!)"]}),(0,jsx_runtime.jsxs)("p",{children:["Please see"," ",(0,jsx_runtime.jsx)(Link.r,{to:"https://posthog.com/docs/libraries/js",children:"documentation for how to set up posthog-js"}),"."]})]}):null};var src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),supportLogic=__webpack_require__("./frontend/src/lib/components/Support/supportLogic.ts"),icons=__webpack_require__("./frontend/src/lib/lemon-ui/icons/index.ts"),preflightLogic=__webpack_require__("./frontend/src/scenes/PreflightCheck/preflightLogic.tsx");const WebAnalyticsNotice=()=>{const{openSupportForm}=(0,index_esm.useActions)(supportLogic.Pw),{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic),showSupportOptions=preflight?.cloud;return(0,jsx_runtime.jsx)(LemonBanner.V,{type:"info",className:"my-4",children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center flex-wrap gap-2 justify-between",children:[(0,jsx_runtime.jsx)("span",{className:"flex-1 min-w-[25rem]",children:"PostHog Web Analytics is in opt-in Beta. Thanks for taking part! We'd love to hear what you think."}),showSupportOptions?(0,jsx_runtime.jsxs)("span",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsx)(src.LemonButton,{type:"secondary",icon:(0,jsx_runtime.jsx)(icons.Hkj,{}),onClick:()=>openSupportForm({kind:"bug"}),children:"Report a bug"}),(0,jsx_runtime.jsx)(src.LemonButton,{type:"secondary",icon:(0,jsx_runtime.jsx)(icons.Rz4,{}),onClick:()=>openSupportForm({kind:"feedback"}),children:"Give feedback"})]}):null]})})};var IntervalFilter=__webpack_require__("./frontend/src/lib/components/IntervalFilter/index.ts"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),WorldMap=__webpack_require__("./frontend/src/scenes/insights/views/WorldMap/index.ts"),Query=__webpack_require__("./frontend/src/queries/Query/Query.tsx");const PercentageCell=_ref=>{let{value}=_ref;return"number"==typeof value?(0,jsx_runtime.jsx)("span",{children:`${(100*value).toFixed(1)}%`}):null},NumericCell=_ref2=>{let{value}=_ref2;return(0,jsx_runtime.jsx)("span",{children:"number"==typeof value?value.toLocaleString():String(value)})},webStatsBreakdownToPropertyName=breakdownBy=>{switch(breakdownBy){case schema.GI.Page:return{key:"$pathname",type:types.FT.Event};case schema.GI.InitialPage:return{key:"$initial_pathname",type:types.FT.Person};case schema.GI.InitialChannelType:return;case schema.GI.InitialReferringDomain:return{key:"$initial_referring_domain",type:types.FT.Person};case schema.GI.InitialUTMSource:return{key:"$initial_utm_source",type:types.FT.Person};case schema.GI.InitialUTMCampaign:return{key:"$initial_utm_campaign",type:types.FT.Person};case schema.GI.InitialUTMMedium:return{key:"$initial_utm_medium",type:types.FT.Person};case schema.GI.InitialUTMContent:return{key:"$initial_utm_content",type:types.FT.Person};case schema.GI.InitialUTMTerm:return{key:"$initial_utm_term",type:types.FT.Person};case schema.GI.Browser:return{key:"$browser",type:types.FT.Event};case schema.GI.OS:return{key:"$os",type:types.FT.Event};case schema.GI.DeviceType:return{key:"$device_type",type:types.FT.Event};case schema.GI.Country:return{key:"$geoip_country_code",type:types.FT.Event};case schema.GI.Region:return{key:"$geoip_subdivision_1_code",type:types.FT.Event};case schema.GI.City:return{key:"$geoip_city_name",type:types.FT.Event};default:throw new utils.q0(breakdownBy)}},webAnalyticsDataTableQueryContext={columns:{breakdown_value:{renderTitle:props=>{const{query}=props,{source}=query;if(source.kind!==schema.OH.WebStatsTableQuery)return null;const{breakdownBy}=source;switch(breakdownBy){case schema.GI.Page:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Path"});case schema.GI.InitialPage:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Initial Path"});case schema.GI.InitialChannelType:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Initial Channel Type"});case schema.GI.InitialReferringDomain:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Referring Domain"});case schema.GI.InitialUTMSource:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"UTM Source"});case schema.GI.InitialUTMCampaign:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"UTM Campaign"});case schema.GI.InitialUTMMedium:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"UTM Medium"});case schema.GI.InitialUTMTerm:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"UTM Term"});case schema.GI.InitialUTMContent:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"UTM Content"});case schema.GI.Browser:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Browser"});case schema.GI.OS:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"OS"});case schema.GI.DeviceType:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Device Type"});case schema.GI.Country:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Country"});case schema.GI.Region:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Region"});case schema.GI.City:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"City"});default:throw new utils.q0(breakdownBy)}},render:props=>{const{value,query}=props,{source}=query;if(source.kind!==schema.OH.WebStatsTableQuery)return null;const{breakdownBy}=source;switch(breakdownBy){case schema.GI.Country:if("string"==typeof value){const countryCode=value;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,WorldMap.q9)(countryCode)," ",WorldMap.XJ[countryCode]||countryCode]})}break;case schema.GI.Region:if(Array.isArray(value)){const[countryCode,regionCode,regionName]=value;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,WorldMap.q9)(countryCode)," ",WorldMap.XJ[countryCode]||countryCode," -"," ",regionName||regionCode]})}break;case schema.GI.City:if(Array.isArray(value)){const[countryCode,cityName]=value;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,WorldMap.q9)(countryCode)," ",WorldMap.XJ[countryCode]||countryCode," - ",cityName]})}}return"string"==typeof value?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:value}):null}},bounce_rate:{title:"Bounce Rate",render:PercentageCell,align:"right"},views:{title:"Views",render:NumericCell,align:"right"},visitors:{title:"Visitors",render:NumericCell,align:"right"},average_scroll_percentage:{title:"Average Scroll",render:PercentageCell,align:"right"},scroll_gt80_percentage:{title:"Deep Scroll Rate",render:PercentageCell,align:"right"}}},WebStatsTrendTile=_ref3=>{let{query,showIntervalTile}=_ref3;const{togglePropertyFilter,setInterval}=(0,index_esm.useActions)(webAnalyticsLogic),{hasCountryFilter,deviceTab,hasDeviceTypeFilter,hasBrowserFilter,hasOSFilter,dateFilter:{interval}}=(0,index_esm.useValues)(webAnalyticsLogic),worldMapPropertyName=webStatsBreakdownToPropertyName(schema.GI.Country)?.key,deviceTypePropertyName=webStatsBreakdownToPropertyName(schema.GI.DeviceType)?.key,onWorldMapClick=(0,react.useCallback)((breakdownValue=>{worldMapPropertyName&&togglePropertyFilter(types.FT.Event,worldMapPropertyName,breakdownValue,{geographyTab:hasCountryFilter?void 0:GeographyTab.REGIONS})}),[togglePropertyFilter,worldMapPropertyName]),onDeviceTilePieChartClick=(0,react.useCallback)((graphPoint=>{if(null==graphPoint.seriesId)return;const dataset=graphPoint.crossDataset?.[graphPoint.seriesId];if(!dataset)return;const breakdownValue=dataset.breakdownValues?.[graphPoint.index];if(!breakdownValue)return;if(!deviceTypePropertyName)return;let newTab;deviceTab===DeviceTab.DEVICE_TYPE||hasDeviceTypeFilter?deviceTab===DeviceTab.BROWSER||hasBrowserFilter?deviceTab===DeviceTab.OS||hasOSFilter||(newTab=DeviceTab.OS):newTab=DeviceTab.BROWSER:newTab=DeviceTab.DEVICE_TYPE,togglePropertyFilter(types.FT.Event,deviceTypePropertyName,breakdownValue,{deviceTab:newTab})}),[togglePropertyFilter,deviceTypePropertyName,deviceTab,hasDeviceTypeFilter,hasBrowserFilter,hasOSFilter]),context=(0,react.useMemo)((()=>({...webAnalyticsDataTableQueryContext,chartRenderingMetadata:{[types.Qb.WorldMap]:{countryProps:(countryCode,values)=>({onClick:values&&(values.count>0||values.aggregated_value>0)?()=>onWorldMapClick(countryCode):void 0})},[types.Qb.ActionsPie]:{onSegmentClick:onDeviceTilePieChartClick}}})),[onWorldMapClick]);return(0,jsx_runtime.jsxs)("div",{className:"border rounded bg-bg-light",children:[showIntervalTile&&(0,jsx_runtime.jsx)("div",{className:"flex flex-row items-center justify-end m-2 mr-4",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row items-center",children:[(0,jsx_runtime.jsx)("span",{className:"mr-2",children:"Group by"}),(0,jsx_runtime.jsx)(IntervalFilter.T,{interval,onIntervalChange:setInterval,options:[{value:"hour",label:"Hour"},{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}]})]})}),(0,jsx_runtime.jsx)(Query.A,{query,readOnly:!0,context})]})},WebStatsTableTile=_ref4=>{let{query,breakdownBy}=_ref4;const{togglePropertyFilter}=(0,index_esm.useActions)(webAnalyticsLogic),{key,type}=webStatsBreakdownToPropertyName(breakdownBy)||{},onClick=(0,react.useCallback)((breakdownValue=>{key&&type&&togglePropertyFilter(type,key,breakdownValue)}),[togglePropertyFilter,type,key]),context=(0,react.useMemo)((()=>({...webAnalyticsDataTableQueryContext,rowProps:record=>{const breakdownValue=getBreakdownValue(record,breakdownBy);return void 0===breakdownValue?{}:{onClick:key&&type?()=>onClick(breakdownValue):void 0}}})),[onClick]);return(0,jsx_runtime.jsx)(Query.A,{query,readOnly:!0,context})},getBreakdownValue=(record,breakdownBy)=>{if("object"!=typeof record||!record||!("result"in record))return;const result=record.result;if(!Array.isArray(result))return;const breakdownValue=result[0];switch(breakdownBy){case schema.GI.Country:if(Array.isArray(breakdownValue))return breakdownValue[0];break;case schema.GI.Region:case schema.GI.City:if(Array.isArray(breakdownValue))return breakdownValue[1]}return"string"==typeof breakdownValue?breakdownValue:void 0},WebTabs=_ref=>{let{className,activeTabId,tabs,setActiveTabId}=_ref;const activeTab=tabs.find((t=>t.id===activeTabId));return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.default)(className,"flex flex-col"),children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-row items-center self-stretch mb-3",children:[(0,jsx_runtime.jsx)("h2",{className:"flex-1 m-0",children:activeTab?.title}),tabs.length>3?(0,jsx_runtime.jsx)(src.LemonSelect,{size:"small",disabled:!1,value:activeTabId,dropdownMatchSelectWidth:!1,onChange:setActiveTabId,options:tabs.map((_ref2=>{let{id,linkText}=_ref2;return{value:id,label:linkText}}))}):(0,jsx_runtime.jsx)(src.LemonSegmentedButton,{size:"small",options:tabs.map((_ref3=>{let{id,linkText}=_ref3;return{label:linkText,value:id}})),onChange:value=>setActiveTabId(value),value:activeTabId})]}),(0,jsx_runtime.jsx)("div",{className:"flex-1 flex flex-col",children:activeTab?.content})]})},Filters=()=>{const{webAnalyticsFilters,dateFilter:{dateTo,dateFrom}}=(0,index_esm.useValues)(webAnalyticsLogic),{setWebAnalyticsFilters,setDates}=(0,index_esm.useActions)(webAnalyticsLogic);return(0,jsx_runtime.jsxs)("div",{className:"sticky z-20 pt-2",style:{backgroundColor:"var(--bg-3000)",top:"var(--breadcrumbs-height)"},children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-2",children:[(0,jsx_runtime.jsx)(DateFilter.f,{dateFrom,dateTo,onChange:setDates}),(0,jsx_runtime.jsx)(PropertyFilters.t,{taxonomicGroupTypes:[TaxonomicFilter_types.t.EventProperties,TaxonomicFilter_types.t.PersonProperties],onChange:filters=>setWebAnalyticsFilters(filters.filter(PropertyFilters_utils.$)),propertyFilters:webAnalyticsFilters,pageKey:"web-analytics",eventNames:["$pageview","$pageleave","$autocapture"],propertyAllowList:{[TaxonomicFilter_types.t.EventProperties]:["$pathname","$host","$browser","$os","$device_type","$geoip_country_code","$geoip_subdivision_1_code","$geoip_city_name"],[TaxonomicFilter_types.t.PersonProperties]:["$initial_pathname","$initial_referring_domain","$initial_utm_source","$initial_utm_campaign","$initial_utm_medium","$initial_utm_content","$initial_utm_term"]}})]}),(0,jsx_runtime.jsx)("div",{className:"bg-border h-px w-full mt-2"})]})},Tiles=()=>{const{tiles}=(0,index_esm.useValues)(webAnalyticsLogic);return(0,jsx_runtime.jsx)("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-x-4 gap-y-10",children:tiles.map(((tile,i)=>{if("query"in tile){var _layout$colSpanClassN,_layout$rowSpanClassN,_layout$orderWhenLarg;const{query,title,layout}=tile;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.default)("col-span-1 row-span-1 flex flex-col",null!==(_layout$colSpanClassN=layout.colSpanClassName)&&void 0!==_layout$colSpanClassN?_layout$colSpanClassN:"md:col-span-6",null!==(_layout$rowSpanClassN=layout.rowSpanClassName)&&void 0!==_layout$rowSpanClassN?_layout$rowSpanClassN:"md:row-span-1",null!==(_layout$orderWhenLarg=layout.orderWhenLargeClassName)&&void 0!==_layout$orderWhenLarg?_layout$orderWhenLarg:"xxl:order-12",layout.className),children:[title&&(0,jsx_runtime.jsx)("h2",{className:"m-0 mb-3",children:title}),(0,jsx_runtime.jsx)(WebQuery,{query})]},i)}return"tabs"in tile?(0,jsx_runtime.jsx)(TabsTileItem,{tile},i):null}))})},TabsTileItem=_ref=>{let{tile}=_ref;const{layout}=tile;return(0,jsx_runtime.jsx)(WebTabs,{className:(0,clsx_m.default)("col-span-1 row-span-1",layout.colSpanClassName||"md:col-span-1",layout.rowSpanClassName||"md:row-span-1",layout.orderWhenLargeClassName||"xxl:order-12",layout.className),activeTabId:tile.activeTabId,setActiveTabId:tile.setTabId,tabs:tile.tabs.map((tab=>({id:tab.id,content:(0,jsx_runtime.jsx)(WebQuery,{query:tab.query,showIntervalSelect:tab.showIntervalSelect},tab.id),linkText:tab.linkText,title:tab.title})))})},WebQuery=_ref2=>{let{query,showIntervalSelect}=_ref2;return query.kind===schema.OH.DataTableNode&&query.source.kind===schema.OH.WebStatsTableQuery?(0,jsx_runtime.jsx)(WebStatsTableTile,{query,breakdownBy:query.source.breakdownBy}):query.kind===schema.OH.InsightVizNode?(0,jsx_runtime.jsx)(WebStatsTrendTile,{query,showIntervalTile:showIntervalSelect}):(0,jsx_runtime.jsx)(Query.A,{query,readOnly:!0,context:webAnalyticsDataTableQueryContext})},WebAnalyticsDashboard=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(WebAnalyticsNotice,{}),(0,jsx_runtime.jsxs)("div",{className:"WebAnalyticsDashboard w-full flex flex-col",children:[(0,jsx_runtime.jsx)(Filters,{}),(0,jsx_runtime.jsx)(WebAnalyticsHealthCheck,{}),(0,jsx_runtime.jsx)(Tiles,{})]})]});function WebAnalyticsScene(){return(0,jsx_runtime.jsx)(WebAnalyticsDashboard,{})}const scene={component:WebAnalyticsScene,logic:webAnalyticsLogic}}}]);