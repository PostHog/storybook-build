(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[21662],{"./frontend/src/scenes/error-tracking/AssigneeSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>AssigneeSelect});var _posthog_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.8.1_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),lib_components_MemberSelect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/components/MemberSelect.tsx"),lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let AssigneeSelect=_ref=>{let{assignee,onChange,showName=!1,...buttonProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lib_components_MemberSelect__WEBPACK_IMPORTED_MODULE_2__.a,{defaultLabel:"Unassigned",value:assignee,onChange:user=>{let assigneeId=user?.id||null;onChange(assigneeId)},children:user=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.Jp,{tooltip:user?.first_name,icon:user?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.YY,{size:"md",user:user}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_icons__WEBPACK_IMPORTED_MODULE_0__.IconPerson,{className:"rounded-full border border-dashed border-muted text-muted p-0.5"}),sideIcon:null,...buttonProps,children:showName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"pl-1",children:user?(0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.v2)(user):"Unassigned"}):null})})}},"./frontend/src/scenes/error-tracking/ErrorTrackingFilters.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_components_DateFilter_DateFilter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/components/DateFilter/DateFilter.tsx"),lib_components_MemberSelect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/components/MemberSelect.tsx"),lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/types.ts"),lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/UniversalFilters.tsx"),lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/universalFiltersLogic.ts"),lib_components_UniversalFilters_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/utils.ts"),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),scenes_insights_filters_TestAccountFilter__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./frontend/src/scenes/insights/filters/TestAccountFilter/index.ts"),_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingLogic.ts"),_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingSceneLogic.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let RecordingsUniversalFilterGroup=()=>{let{filterGroup}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_6__.d),{replaceGroupValue,removeGroupValue}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_6__.d),[allowInitiallyOpen,setAllowInitiallyOpen]=(0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{setAllowInitiallyOpen(!0)},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{children:filterGroup.values.map((filterOrGroup,index)=>(0,lib_components_UniversalFilters_utils__WEBPACK_IMPORTED_MODULE_7__.pU)(filterOrGroup)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__.Z.Group,{index:index,group:filterOrGroup,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(RecordingsUniversalFilterGroup,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__.Z.AddFilterButton,{size:"small",type:"secondary"})]},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__.Z.Value,{index:index,filter:filterOrGroup,onRemove:()=>removeGroupValue(index),onChange:value=>replaceGroupValue(index,value),initiallyOpen:allowInitiallyOpen},index))})},__WEBPACK_DEFAULT_EXPORT__={FilterGroup:()=>{let{filterGroup,filterTestAccounts,searchQuery}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__.H),{setFilterGroup,setFilterTestAccounts,setSearchQuery}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__.H);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex flex-1 items-center justify-between space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex items-center gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.DF,{type:"search",placeholder:"Search...",value:searchQuery,onChange:setSearchQuery}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__.Z,{rootKey:"error-tracking",group:filterGroup,taxonomicGroupTypes:[lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__.t.PersonProperties,lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__.t.Cohorts],onChange:setFilterGroup,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(RecordingsUniversalFilterGroup,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(scenes_insights_filters_TestAccountFilter__WEBPACK_IMPORTED_MODULE_9__.z,{size:"small",filters:{filter_test_accounts:filterTestAccounts},onChange:_ref=>{let{filter_test_accounts}=_ref;setFilterTestAccounts(filter_test_accounts||!1)}})})]})},Options:_ref2=>{let{showOrder=!0}=_ref2,{dateRange,assignee}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__.H),{setDateRange,setAssignee}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__.H),{order}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_11__.D),{setOrder}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_11__.D);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex gap-4 py-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex items-center gap-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"Date range:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_DateFilter_DateFilter__WEBPACK_IMPORTED_MODULE_2__.f,{dateFrom:dateRange.date_from,dateTo:dateRange.date_to,onChange:(changedDateFrom,changedDateTo)=>{setDateRange({date_from:changedDateFrom,date_to:changedDateTo})},size:"small"})]}),showOrder&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex items-center gap-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"Sort by:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Yv,{onSelect:setOrder,onChange:setOrder,value:order,options:[{value:"last_seen",label:"Last seen"},{value:"first_seen",label:"First seen"},{value:"occurrences",label:"Occurrences"},{value:"users",label:"Users"},{value:"sessions",label:"Sessions"}],size:"small"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex items-center gap-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"Assigned to:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_MemberSelect__WEBPACK_IMPORTED_MODULE_3__.a,{value:assignee,onChange:user=>{setAssignee(user?.id||null)}})]})]})}}},"./frontend/src/scenes/error-tracking/ErrorTrackingGroupScene.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorTrackingGroupScene:()=>ErrorTrackingGroupScene,scene:()=>scene});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@2.0.0_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),ErrorTracking=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@10.3.1_sass@1.56.0_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./frontend/src/scenes/error-tracking/ErrorTracking.scss"),ErrorTracking_default=__webpack_require__.n(ErrorTracking),options={};options.insert="head",options.singleton=!1,injectStylesIntoStyleTag_default()(ErrorTracking_default(),options),ErrorTracking_default().locals;var src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),PageHeader=__webpack_require__("./frontend/src/lib/components/PageHeader.tsx"),utils=__webpack_require__("./frontend/src/lib/utils.tsx"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),AssigneeSelect=__webpack_require__("./frontend/src/scenes/error-tracking/AssigneeSelect.tsx"),ErrorTrackingFilters=__webpack_require__("./frontend/src/scenes/error-tracking/ErrorTrackingFilters.tsx"),lib=__webpack_require__("./node_modules/.pnpm/kea-loaders@3.0.0_kea@3.1.5/node_modules/kea-loaders/lib/index.js"),kea_router_lib=__webpack_require__("./node_modules/.pnpm/kea-router@3.2.0_kea@3.1.5/node_modules/kea-router/lib/index.js"),api=__webpack_require__("./frontend/src/lib/api.ts"),dayjs=__webpack_require__("./frontend/src/lib/dayjs.ts"),sceneTypes=__webpack_require__("./frontend/src/scenes/sceneTypes.ts"),urls=__webpack_require__("./frontend/src/scenes/urls.ts"),errorTrackingLogic=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingLogic.ts"),queries=__webpack_require__("./frontend/src/scenes/error-tracking/queries.ts");let ErrorGroupTab=function(ErrorGroupTab){return ErrorGroupTab.Overview="overview",ErrorGroupTab.Breakdowns="breakdowns",ErrorGroupTab}({}),errorTrackingGroupSceneLogic=(0,index_esm.kea)([(0,index_esm.path)(key=>["scenes","error-tracking","errorTrackingGroupSceneLogic",key]),(0,index_esm.props)({}),(0,index_esm.connect)({values:[errorTrackingLogic.H,["dateRange","filterTestAccounts","filterGroup"]]}),(0,index_esm.actions)({setErrorGroupTab:tab=>({tab}),setActiveEventUUID:uuid=>({uuid}),updateGroup:group=>({group})}),(0,index_esm.reducers)(()=>({errorGroupTab:[ErrorGroupTab.Overview,{setErrorGroupTab:(_,_ref)=>{let{tab}=_ref;return tab}}],activeEventUUID:[void 0,{setActiveEventUUID:(_,_ref2)=>{let{uuid}=_ref2;return uuid}}]})),(0,lib.loaders)(_ref3=>{let{props,values}=_ref3;return{group:[null,{loadGroup:async()=>{let response=await api.ZP.query((0,queries.Ge)({fingerprint:props.fingerprint,dateRange:values.dateRange,filterTestAccounts:values.filterTestAccounts,filterGroup:values.filterGroup}),{},void 0,!0);return response.results[0]},updateGroup:async _ref4=>{let{group}=_ref4,response=await api.ZP.errorTracking.update(props.fingerprint,group);return{...values.group,...response}}}],events:[[],{loadEvents:async()=>{let response=await api.ZP.query((0,queries.mJ)({select:["uuid","properties","timestamp","person"],fingerprints:values.combinedFingerprints,dateRange:values.dateRange,filterTestAccounts:values.filterTestAccounts,filterGroup:values.filterGroup,offset:values.events.length})),newResults=response.results.map(r=>({uuid:r[0],properties:JSON.parse(r[1]),timestamp:(0,dayjs.Bv)(r[2]),person:r[3]}));return[...values.events,...newResults]}}]}}),(0,index_esm.listeners)(_ref5=>{let{values,actions}=_ref5;return{loadGroupSuccess:()=>{actions.loadEvents()},loadEventsSuccess:()=>{values.activeEventUUID||actions.setActiveEventUUID(values.events[0]?.uuid)}}}),(0,index_esm.selectors)({breadcrumbs:[s=>[s.group],group=>{let exceptionType=group?.exception_type||"Unknown Type";return[{key:sceneTypes.x.ErrorTracking,name:"Error tracking",path:urls.j.errorTracking()},{key:[sceneTypes.x.ErrorTrackingGroup,exceptionType],name:exceptionType}]}],combinedFingerprints:[s=>[s.group],group=>group?[group.fingerprint,...group.merged_fingerprints]:[]]}),(0,kea_router_lib.actionToUrl)(_ref6=>{let{values}=_ref6;return{setErrorGroupTab:()=>{let searchParams=kea_router_lib.router.values.searchParams;return values.errorGroupTab!=ErrorGroupTab.Overview&&(searchParams.tab=values.errorGroupTab),[kea_router_lib.router.values.location.pathname,searchParams]}}}),(0,kea_router_lib.urlToAction)(_ref7=>{let{actions}=_ref7;return{[urls.j.errorTrackingGroup("*")]:(_,searchParams)=>{searchParams.tab&&actions.setErrorGroupTab(searchParams.tab)}}})]);var apps_common_src=__webpack_require__("./frontend/@posthog/apps-common/src/index.ts"),clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),EmptyMessage=__webpack_require__("./frontend/src/lib/components/EmptyMessage/EmptyMessage.tsx"),ErrorDisplay=__webpack_require__("./frontend/src/lib/components/Errors/ErrorDisplay.tsx"),Playlist=__webpack_require__("./frontend/src/lib/components/Playlist/Playlist.tsx"),sessionPlayerModalLogic=__webpack_require__("./frontend/src/scenes/session-recordings/player/modal/sessionPlayerModalLogic.ts"),SessionRecordingPreview=__webpack_require__("./frontend/src/scenes/session-recordings/playlist/SessionRecordingPreview.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let OverviewTab=()=>{let{events,groupLoading,eventsLoading,activeEventUUID}=(0,index_esm.useValues)(errorTrackingGroupSceneLogic),{loadEvents,setActiveEventUUID}=(0,index_esm.useActions)(errorTrackingGroupSceneLogic);return(0,jsx_runtime.jsx)("div",{className:"ErrorTracking__group",children:(0,jsx_runtime.jsx)("div",{className:"h-full space-y-2",children:(0,jsx_runtime.jsx)(Playlist.g,{loading:groupLoading||eventsLoading,title:"Exceptions",sections:[{key:"exceptions",title:"Exceptions",items:events.map(e=>({...e,id:e.uuid})),render:ListItemException}],onSelect:_ref=>{let{uuid}=_ref;setActiveEventUUID(uuid)},activeItemId:activeEventUUID,listEmptyState:(0,jsx_runtime.jsx)("div",{className:"flex justify-center p-4",children:"No exceptions found"}),content:_ref2=>{let{activeItem:event}=_ref2;return event?(0,jsx_runtime.jsxs)("div",{className:"h-full overflow-auto",children:[(0,jsx_runtime.jsx)("div",{className:"bg-bg-light p-1 flex justify-end border-b min-h-[42px]",children:(0,jsx_runtime.jsx)(ViewSessionButton,{event:event})}),(0,jsx_runtime.jsx)("div",{className:"pl-2",children:(0,jsx_runtime.jsx)(ErrorDisplay.X,{eventProperties:event.properties})})]}):(0,jsx_runtime.jsx)(EmptyMessage.M,{title:"No exception selected",description:"Please select an exception from the list on the left"})},onScrollListEdge:edge=>{"bottom"!==edge||eventsLoading||loadEvents()}})})})},ViewSessionButton=_ref3=>{let{event}=_ref3,{openSessionPlayer}=(0,index_esm.useActions)(sessionPlayerModalLogic.A),sessionId=event.properties.$session_id;return(0,jsx_runtime.jsx)(src.Jp,{size:"small",onClick:()=>{let fiveSecondsBeforeEvent=(0,dayjs.Bv)(event.timestamp).valueOf()-5e3;openSessionPlayer({id:sessionId},Math.max(fiveSecondsBeforeEvent,0))},disabledReason:sessionId?void 0:"There was no Session ID associated with this exception",children:"View recording"})},ListItemException=_ref4=>{let{item:{timestamp,properties,person},isActive}=_ref4,recordingProperties=["$browser","$device_type","$os"].flatMap(property=>{let value=properties[property],label=value;return"$device_type"===property&&(value=properties.$device_type||properties.$initial_device_type),{property,value,label}}).filter(property=>!!property.value);return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.default)("cursor-pointer p-2 space-y-1 border-l-4",isActive?"border-primary-3000":"border-transparent"),children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center space-x-3",children:[(0,jsx_runtime.jsx)("div",{className:"line-clamp-1",children:(0,jsx_runtime.jsx)(apps_common_src.IZ,{person:person,withIcon:!0,noPopover:!0,noLink:!0})}),(0,jsx_runtime.jsx)(SessionRecordingPreview.D7,{recordingProperties:recordingProperties,iconClassNames:"text-muted"})]}),properties.$current_url&&(0,jsx_runtime.jsx)("div",{className:"text-xs text-muted truncate",children:properties.$current_url}),(0,jsx_runtime.jsx)(apps_common_src.w4,{className:"overflow-hidden text-ellipsis text-xs text-muted shrink-0",time:timestamp,placement:"right",showPopover:!1})]})},scene={component:ErrorTrackingGroupScene,logic:errorTrackingGroupSceneLogic,paramsToProps:_ref=>{let{params:{fingerprint}}=_ref;return{fingerprint:JSON.parse((0,utils.tV)(decodeURIComponent(fingerprint)))}}},STATUS_LABEL={active:"Active",archived:"Archived",resolved:"Resolved",pending_release:"Pending release"};function ErrorTrackingGroupScene(){let{group,groupLoading}=(0,index_esm.useValues)(errorTrackingGroupSceneLogic),{updateGroup,loadGroup}=(0,index_esm.useActions)(errorTrackingGroupSceneLogic);return(0,react.useEffect)(()=>{groupLoading||loadGroup()},[]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(PageHeader.m,{buttons:!!group&&("active"===group.status?(0,jsx_runtime.jsxs)("div",{className:"flex divide-x gap-x-2",children:[(0,jsx_runtime.jsx)(AssigneeSelect.i,{assignee:group.assignee,onChange:assignee=>updateGroup({assignee}),type:"secondary",showName:!0}),(0,jsx_runtime.jsxs)("div",{className:"flex pl-2 gap-x-2",children:[(0,jsx_runtime.jsx)(src.Jp,{type:"secondary",onClick:()=>updateGroup({status:"archived"}),children:"Archive"}),(0,jsx_runtime.jsx)(src.Jp,{type:"primary",onClick:()=>updateGroup({status:"resolved"}),children:"Resolve"})]})]}):(0,jsx_runtime.jsx)(src.Jp,{type:"secondary",className:"upcasefirst-letter:uppercase",onClick:()=>updateGroup({status:"active"}),tooltip:"Mark as active",children:STATUS_LABEL[group.status]}))}),(0,jsx_runtime.jsx)(ErrorTrackingFilters.ZP.FilterGroup,{}),(0,jsx_runtime.jsx)(src.p2,{className:"mt-2"}),(0,jsx_runtime.jsx)(ErrorTrackingFilters.ZP.Options,{showOrder:!1}),(0,jsx_runtime.jsx)("div",{className:"pt-2",children:(0,jsx_runtime.jsx)(OverviewTab,{})})]})}},"./frontend/src/scenes/error-tracking/errorTrackingLogic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>errorTrackingLogic});var kea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/types.ts");let lastHour={value:"1h",label:"1h"},lastDay={value:"24h",label:"24h"},lastMonth={value:"mStart",label:"Month"},lastYear={value:"yStart",label:"Year"},customOptions={dStart:[lastDay,lastHour],"-24h":[lastDay,lastHour],"-1dStart":[{value:"-1d24h",label:"24h"},{value:"-1d1h",label:"1h"}],mStart:[lastMonth,lastDay],yStart:[lastYear,lastMonth],all:[lastYear,lastMonth,lastDay]},DEFAULT_FILTER_GROUP={type:_types__WEBPACK_IMPORTED_MODULE_1__.J2.And,values:[{type:_types__WEBPACK_IMPORTED_MODULE_1__.J2.And,values:[]}]},errorTrackingLogic=(0,kea__WEBPACK_IMPORTED_MODULE_0__.kea)([(0,kea__WEBPACK_IMPORTED_MODULE_0__.path)(["scenes","error-tracking","errorTrackingLogic"]),(0,kea__WEBPACK_IMPORTED_MODULE_0__.actions)({setDateRange:dateRange=>({dateRange}),setAssignee:assignee=>({assignee}),setFilterGroup:filterGroup=>({filterGroup}),setFilterTestAccounts:filterTestAccounts=>({filterTestAccounts}),setSearchQuery:searchQuery=>({searchQuery}),setSparklineSelectedPeriod:period=>({period}),_setSparklineOptions:options=>({options})}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.reducers)({dateRange:[{date_from:"-7d",date_to:null},{persist:!0},{setDateRange:(_,_ref)=>{let{dateRange}=_ref;return dateRange}}],assignee:[null,{persist:!0},{setAssignee:(_,_ref2)=>{let{assignee}=_ref2;return assignee}}],filterGroup:[DEFAULT_FILTER_GROUP,{persist:!0},{setFilterGroup:(_,_ref3)=>{let{filterGroup}=_ref3;return filterGroup}}],filterTestAccounts:[!1,{persist:!0},{setFilterTestAccounts:(_,_ref4)=>{let{filterTestAccounts}=_ref4;return filterTestAccounts}}],searchQuery:["",{setSearchQuery:(_,_ref5)=>{let{searchQuery}=_ref5;return searchQuery}}],sparklineSelectedPeriod:[lastDay.value,{persist:!0},{setSparklineSelectedPeriod:(_,_ref6)=>{let{period}=_ref6;return period}}],sparklineOptions:[[lastDay,lastHour],{persist:!0},{_setSparklineOptions:(_,_ref7)=>{let{options}=_ref7;return options}}]}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.listeners)(_ref8=>{let{values,actions}=_ref8;return{setDateRange:_ref9=>{let{dateRange:{date_from}}=_ref9;if(date_from){var _customOptions$date_f;let options=null!==(_customOptions$date_f=customOptions[date_from])&&void 0!==_customOptions$date_f?_customOptions$date_f:[];if(0===options.length){let isRelative=date_from.match(/-\d+[hdmy]/);if(isRelative){let value=date_from?.replace("-","");options.push({value:value,label:value},lastDay)}}if(0===options.length)actions.setSparklineSelectedPeriod(null);else{let possibleValues=options.map(o=>o.value);values.sparklineSelectedPeriod&&possibleValues.includes(values.sparklineSelectedPeriod)||actions.setSparklineSelectedPeriod(options[0].value)}actions._setSparklineOptions(options)}else actions.setSparklineSelectedPeriod(null),actions._setSparklineOptions([])}}})])},"./frontend/src/scenes/error-tracking/errorTrackingSceneLogic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>errorTrackingSceneLogic});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),kea_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea-forms@3.2.0_kea@3.1.5/node_modules/kea-forms/lib/index.js"),kea_subscriptions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/kea-subscriptions@3.0.1_kea@3.1.5/node_modules/kea-subscriptions/lib/index.js"),lib_api__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/api.ts"),_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingLogic.ts"),_queries__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/scenes/error-tracking/queries.ts");let errorTrackingSceneLogic=(0,kea__WEBPACK_IMPORTED_MODULE_1__.kea)([(0,kea__WEBPACK_IMPORTED_MODULE_1__.path)(["scenes","error-tracking","errorTrackingSceneLogic"]),(0,kea__WEBPACK_IMPORTED_MODULE_1__.connect)({values:[_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_5__.H,["dateRange","assignee","filterTestAccounts","filterGroup","sparklineSelectedPeriod","searchQuery"]]}),(0,kea__WEBPACK_IMPORTED_MODULE_1__.actions)({setOrder:order=>({order}),setIsConfigurationModalOpen:open=>({open}),setSelectedRowIndexes:ids=>({ids})}),(0,kea__WEBPACK_IMPORTED_MODULE_1__.reducers)({order:["last_seen",{persist:!0},{setOrder:(_,_ref)=>{let{order}=_ref;return order}}],isConfigurationModalOpen:[!1,{setIsConfigurationModalOpen:(_,_ref2)=>{let{open}=_ref2;return open}}],selectedRowIndexes:[[],{setSelectedRowIndexes:(_,_ref3)=>{let{ids}=_ref3;return ids}}]}),(0,kea__WEBPACK_IMPORTED_MODULE_1__.selectors)({query:[s=>[s.order,s.dateRange,s.assignee,s.filterTestAccounts,s.filterGroup,s.sparklineSelectedPeriod,s.searchQuery],(order,dateRange,assignee,filterTestAccounts,filterGroup,sparklineSelectedPeriod,searchQuery)=>(0,_queries__WEBPACK_IMPORTED_MODULE_6__.mx)({order,dateRange,assignee,filterTestAccounts,filterGroup,sparklineSelectedPeriod,searchQuery})]}),(0,kea_subscriptions__WEBPACK_IMPORTED_MODULE_3__.Vt)(_ref4=>{let{actions}=_ref4;return{query:()=>actions.setSelectedRowIndexes([])}}),(0,kea_forms__WEBPACK_IMPORTED_MODULE_2__.forms)(_ref5=>{let{actions}=_ref5;return{uploadSourceMap:{defaults:{files:[]},submit:async _ref6=>{let{files}=_ref6;if(files.length>0){let formData=new FormData,file=files[0];formData.append("source_map",file),await lib_api__WEBPACK_IMPORTED_MODULE_4__.ZP.errorTracking.uploadSourceMaps(formData),actions.setIsConfigurationModalOpen(!1),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.UJ.success("Source map uploaded")}}}}})])},"./frontend/src/scenes/error-tracking/queries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ge:()=>errorTrackingGroupQuery,mJ:()=>errorTrackingGroupEventsQuery,mx:()=>errorTrackingQuery});var lib_dayjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/lib/dayjs.ts"),lib_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/lib/utils.tsx"),_queries_schema__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/queries/schema.ts");__webpack_require__("./frontend/src/types.ts");let SPARKLINE_CONFIGURATIONS={"-1d1h":{value:60,displayAs:"minute",offsetHours:24},"-1d24h":{value:24,displayAs:"hour",offsetHours:24},"1h":{value:60,displayAs:"minute"},"24h":{value:24,displayAs:"hour"},"7d":{value:168,displayAs:"hour"},"14d":{value:336,displayAs:"hour"},"90d":{value:90,displayAs:"day"},"180d":{value:26,displayAs:"week"},mStart:{value:31,displayAs:"day"},yStart:{value:52,displayAs:"week"}},toStartOfIntervalFn={minute:"toStartOfMinute",hour:"toStartOfHour",day:"toStartOfDay",week:"toStartOfWeek",month:"toStartOfMonth"},errorTrackingQuery=_ref=>{let{order,dateRange,assignee,filterTestAccounts,filterGroup,searchQuery,sparklineSelectedPeriod,columns,limit=50}=_ref,select=[];if(columns||(columns=["error","occurrences","sessions","users","assignee"]),sparklineSelectedPeriod){let{value,displayAs,offsetHours}=parseSparklineSelection(sparklineSelectedPeriod),{labels,data}=generateSparklineProps({value,displayAs,offsetHours});select.splice(1,0,`<Sparkline data={${data}} labels={[${labels.join(",")}]} /> as volume`),columns.splice(1,0,"volume")}return{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.DataTableNode,source:{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.ErrorTrackingQuery,select:select,order:order,dateRange:dateRange,assignee:assignee,filterGroup:filterGroup,filterTestAccounts:filterTestAccounts,searchQuery:searchQuery,limit:limit},showActions:!1,showTimings:!1,columns:columns}},parseSparklineSelection=selection=>{if(selection in SPARKLINE_CONFIGURATIONS)return SPARKLINE_CONFIGURATIONS[selection];let result=selection.match(/\d+|\D+/g);if(result){let[value,unit]=result;return{value:Number(value)*("y"===unit?12:1),displayAs:"h"===unit?"hour":"d"===unit?"day":"w"===unit?"week":"month"}}return{value:24,displayAs:"hour"}},generateSparklineProps=_ref2=>{let{value,displayAs,offsetHours}=_ref2,offset=null!=offsetHours?offsetHours:0,now=(0,lib_dayjs__WEBPACK_IMPORTED_MODULE_0__.Bv)().subtract(offset,"hours").startOf(displayAs),dates=(0,lib_utils__WEBPACK_IMPORTED_MODULE_1__.w6)(value).map(idx=>now.subtract(value-(idx+1),displayAs)),labels=dates.map(d=>`'${d.format("D MMM, YYYY HH:mm")} (UTC)'`),toStartOfInterval=toStartOfIntervalFn[displayAs],data=`reverse(arrayMap(x -> countEqual(groupArray(dateDiff('${displayAs}', ${toStartOfInterval}(timestamp), ${toStartOfInterval}(subtractHours(now(), ${offset})))), x), range(${value})))`;return{labels,data}},errorTrackingGroupQuery=_ref3=>{let{fingerprint,dateRange,filterTestAccounts,filterGroup}=_ref3;return{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.ErrorTrackingQuery,fingerprint:fingerprint,dateRange:dateRange,filterGroup:filterGroup,filterTestAccounts:filterTestAccounts}},errorTrackingGroupEventsQuery=_ref4=>{let{select,fingerprints,dateRange,filterTestAccounts,filterGroup,offset}=_ref4,group=filterGroup.values[0],properties=group.values,where=[`has(${stringifyFingerprints(fingerprints)}, JSONExtract(ifNull(properties.$exception_fingerprint,'[]'),'Array(String)'))`],query={kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.EventsQuery,event:"$exception",select,where,properties,filterTestAccounts:filterTestAccounts,offset:offset,limit:50};return dateRange.date_from&&(query.after=dateRange.date_from),dateRange.date_to&&(query.before=dateRange.date_to),query},stringifyFingerprints=fingerprints=>{let stringifiedFingerprints=fingerprints.map(fp=>{let stringifiedParts=fp.map(s=>`'${s}'`);return`[${stringifiedParts.join(",")}]`});return`[${stringifiedFingerprints.join(",")}]`}},"./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@10.3.1_sass@1.56.0_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./frontend/src/scenes/error-tracking/ErrorTracking.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".ErrorTracking__group{height:calc(100vh - 12rem);min-height:25rem}",""]),module.exports=exports}}]);