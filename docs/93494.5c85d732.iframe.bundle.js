"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[93494],{"./frontend/src/scenes/error-tracking/AssigneeSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>AssigneeSelect});var _posthog_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.8.1_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),lib_components_MemberSelect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/components/MemberSelect.tsx"),lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let AssigneeSelect=_ref=>{let{assignee,onChange,showName=!1,...buttonProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lib_components_MemberSelect__WEBPACK_IMPORTED_MODULE_2__.a,{defaultLabel:"Unassigned",value:assignee,onChange:user=>{let assigneeId=user?.id||null;onChange(assigneeId)},children:user=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.Jp,{tooltip:user?.first_name,icon:user?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.YY,{size:"md",user:user}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_icons__WEBPACK_IMPORTED_MODULE_0__.IconPerson,{className:"rounded-full border border-dashed border-muted text-muted p-0.5"}),sideIcon:null,...buttonProps,children:showName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"pl-1",children:user?(0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.v2)(user):"Unassigned"}):null})})}},"./frontend/src/scenes/error-tracking/ErrorTrackingFilters.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_components_DateFilter_DateFilter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/components/DateFilter/DateFilter.tsx"),lib_components_MemberSelect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/components/MemberSelect.tsx"),lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/types.ts"),lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/UniversalFilters.tsx"),lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/universalFiltersLogic.ts"),lib_components_UniversalFilters_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/lib/components/UniversalFilters/utils.ts"),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),scenes_insights_filters_TestAccountFilter__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./frontend/src/scenes/insights/filters/TestAccountFilter/index.ts"),_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingLogic.ts"),_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingSceneLogic.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let RecordingsUniversalFilterGroup=()=>{let{filterGroup}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_6__.d),{replaceGroupValue,removeGroupValue}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(lib_components_UniversalFilters_universalFiltersLogic__WEBPACK_IMPORTED_MODULE_6__.d),[allowInitiallyOpen,setAllowInitiallyOpen]=(0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{setAllowInitiallyOpen(!0)},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{children:filterGroup.values.map((filterOrGroup,index)=>(0,lib_components_UniversalFilters_utils__WEBPACK_IMPORTED_MODULE_7__.pU)(filterOrGroup)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__.Z.Group,{index:index,group:filterOrGroup,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(RecordingsUniversalFilterGroup,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__.Z.AddFilterButton,{size:"small",type:"secondary"})]},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__.Z.Value,{index:index,filter:filterOrGroup,onRemove:()=>removeGroupValue(index),onChange:value=>replaceGroupValue(index,value),initiallyOpen:allowInitiallyOpen},index))})},__WEBPACK_DEFAULT_EXPORT__={FilterGroup:()=>{let{filterGroup,filterTestAccounts,searchQuery}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__.H),{setFilterGroup,setFilterTestAccounts,setSearchQuery}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__.H);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex flex-1 items-center justify-between space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex items-center gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.DF,{type:"search",placeholder:"Search...",value:searchQuery,onChange:setSearchQuery}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_UniversalFilters_UniversalFilters__WEBPACK_IMPORTED_MODULE_5__.Z,{rootKey:"error-tracking",group:filterGroup,taxonomicGroupTypes:[lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__.t.PersonProperties,lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__.t.Cohorts],onChange:setFilterGroup,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(RecordingsUniversalFilterGroup,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(scenes_insights_filters_TestAccountFilter__WEBPACK_IMPORTED_MODULE_9__.z,{size:"small",filters:{filter_test_accounts:filterTestAccounts},onChange:_ref=>{let{filter_test_accounts}=_ref;setFilterTestAccounts(filter_test_accounts||!1)}})})]})},Options:_ref2=>{let{isGroup=!1}=_ref2,{dateRange,assignee,hasGroupActions}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__.H),{setDateRange,setAssignee}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_10__.H),{order}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_11__.D),{setOrder}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_errorTrackingSceneLogic__WEBPACK_IMPORTED_MODULE_11__.D);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex gap-4 py-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex items-center gap-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"Date range:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_DateFilter_DateFilter__WEBPACK_IMPORTED_MODULE_2__.f,{dateFrom:dateRange.date_from,dateTo:dateRange.date_to,onChange:(changedDateFrom,changedDateTo)=>{setDateRange({date_from:changedDateFrom,date_to:changedDateTo})},size:"small"})]}),!isGroup&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex items-center gap-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"Sort by:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Yv,{onSelect:setOrder,onChange:setOrder,value:order,options:[{value:"last_seen",label:"Last seen"},{value:"first_seen",label:"First seen"},{value:"occurrences",label:"Occurrences"},{value:"users",label:"Users"},{value:"sessions",label:"Sessions"}],size:"small"})]})]}),hasGroupActions&&!isGroup&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"flex items-center gap-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"Assigned to:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lib_components_MemberSelect__WEBPACK_IMPORTED_MODULE_3__.a,{value:assignee,onChange:user=>{setAssignee(user?.id||null)}})]})]})}}},"./frontend/src/scenes/error-tracking/ErrorTrackingScene.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorTrackingScene:()=>ErrorTrackingScene,scene:()=>scene});var src=__webpack_require__("./frontend/@posthog/apps-common/src/index.ts"),posthog_icons_es=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.8.1_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),lemon_ui_src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib=__webpack_require__("./node_modules/.pnpm/kea-forms@3.2.0_kea@3.1.5/node_modules/kea-forms/lib/index.js"),icons=__webpack_require__("./frontend/src/lib/lemon-ui/icons/index.ts"),LemonButton=__webpack_require__("./frontend/src/lib/lemon-ui/LemonButton/index.ts"),preflightLogic=__webpack_require__("./frontend/src/scenes/PreflightCheck/preflightLogic.tsx"),supportLogic=__webpack_require__("./frontend/src/lib/components/Support/supportLogic.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let FeedbackNotice=_ref=>{let{text}=_ref,{openSupportForm}=(0,index_esm.useActions)(supportLogic.Pw),{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic),showSupportOptions=preflight?.cloud;return(0,jsx_runtime.jsx)(lemon_ui_src.Vp,{type:"info",className:"my-4",children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center flex-wrap gap-2 justify-between",children:[(0,jsx_runtime.jsx)("div",{className:"flex-1 min-w-full sm:min-w-0",children:text}),showSupportOptions?(0,jsx_runtime.jsxs)("span",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsx)(LemonButton.J,{type:"secondary",icon:(0,jsx_runtime.jsx)(posthog_icons_es.IconBug,{}),onClick:()=>openSupportForm({kind:"bug",isEmailFormOpen:!0}),children:"Report a bug"}),(0,jsx_runtime.jsx)(LemonButton.J,{type:"secondary",icon:(0,jsx_runtime.jsx)(icons.Rz,{}),onClick:()=>openSupportForm({kind:"feedback",isEmailFormOpen:!0}),children:"Give feedback"})]}):null]})})};var PageHeader=__webpack_require__("./frontend/src/lib/components/PageHeader.tsx"),LemonField=__webpack_require__("./frontend/src/lib/lemon-ui/LemonField/index.ts"),LemonTableLink=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTable/LemonTableLink.tsx"),urls=__webpack_require__("./frontend/src/scenes/urls.ts"),InsightViz=__webpack_require__("./frontend/src/queries/nodes/InsightViz/InsightViz.tsx"),Query=__webpack_require__("./frontend/src/queries/Query/Query.tsx"),AssigneeSelect=__webpack_require__("./frontend/src/scenes/error-tracking/AssigneeSelect.tsx"),api=__webpack_require__("./frontend/src/lib/api.ts"),dataNodeLogic=__webpack_require__("./frontend/src/queries/nodes/DataNode/dataNodeLogic.ts"),utils=__webpack_require__("./frontend/src/scenes/error-tracking/utils.ts");let errorTrackingDataNodeLogic=(0,index_esm.kea)([(0,index_esm.path)(["scenes","error-tracking","errorTrackingDataNodeLogic"]),(0,index_esm.props)({}),(0,index_esm.connect)(_ref=>{let{key,query}=_ref;return{values:[(0,dataNodeLogic.M)({key,query}),["response"]],actions:[(0,dataNodeLogic.M)({key,query}),["setResponse"]]}}),(0,index_esm.actions)({mergeGroups:indexes=>({indexes}),assignGroup:(recordIndex,assigneeId)=>({recordIndex,assigneeId})}),(0,index_esm.listeners)(_ref2=>{let{values,actions}=_ref2;return{mergeGroups:async _ref3=>{let{indexes}=_ref3,results=values.response?.results,groups=results.filter((_,id)=>indexes.includes(id)),primaryGroup=groups.shift();if(primaryGroup&&groups.length>0){let mergingFingerprints=groups.map(g=>g.fingerprint),mergedGroup=(0,utils.f)(primaryGroup,groups);actions.setResponse({...values.response,results:results.filter((_,id)=>!indexes.includes(id)).map(group=>mergedGroup.fingerprint===group.fingerprint?mergedGroup:group)}),await api.ZP.errorTracking.merge(primaryGroup?.fingerprint,mergingFingerprints)}},assignGroup:async _ref4=>{let{recordIndex,assigneeId}=_ref4,response=values.response;if(response){let params={assignee:assigneeId},results=response.results,group={...results[recordIndex],...params};results.splice(recordIndex,1,group),actions.setResponse({...response,results:results}),await api.ZP.errorTracking.update(group.fingerprint,params)}}}})]);var ErrorTrackingFilters=__webpack_require__("./frontend/src/scenes/error-tracking/ErrorTrackingFilters.tsx"),errorTrackingLogic=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingLogic.ts"),errorTrackingSceneLogic=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingSceneLogic.ts");let scene={component:ErrorTrackingScene,logic:errorTrackingSceneLogic.D};function ErrorTrackingScene(){let{query,selectedRowIndexes}=(0,index_esm.useValues)(errorTrackingSceneLogic.D),insightProps={dashboardItemId:"new-ErrorTrackingQuery"};return(0,jsx_runtime.jsxs)(index_esm.BindLogic,{logic:errorTrackingDataNodeLogic,props:{query,key:(0,InsightViz.gG)(insightProps)},children:[(0,jsx_runtime.jsx)(Header,{}),(0,jsx_runtime.jsx)(ConfigurationModal,{}),(0,jsx_runtime.jsx)(FeedbackNotice,{text:"Error tracking is in closed alpha. Thanks for taking part! We'd love to hear what you think."}),(0,jsx_runtime.jsx)(ErrorTrackingFilters.ZP.FilterGroup,{}),(0,jsx_runtime.jsx)(lemon_ui_src.p2,{className:"mt-2"}),0===selectedRowIndexes.length?(0,jsx_runtime.jsx)(ErrorTrackingFilters.ZP.Options,{}):(0,jsx_runtime.jsx)(ErrorTrackingActions,{}),(0,jsx_runtime.jsx)(Query.A,{query:query,context:{columns:{error:{width:"50%",render:CustomGroupTitleColumn},occurrences:{align:"center"},sessions:{align:"center"},users:{align:"center"},volume:{renderTitle:CustomVolumeColumnHeader},assignee:{render:AssigneeColumn}},showOpenEditorButton:!1,insightProps:insightProps,alwaysRefresh:!0}})]})}let ErrorTrackingActions=()=>{let{selectedRowIndexes}=(0,index_esm.useValues)(errorTrackingSceneLogic.D),{setSelectedRowIndexes}=(0,index_esm.useActions)(errorTrackingSceneLogic.D),{mergeGroups}=(0,index_esm.useActions)(errorTrackingDataNodeLogic);return(0,jsx_runtime.jsxs)("div",{className:"sticky top-[var(--breadcrumbs-height-compact)] z-20 py-2 bg-bg-3000 flex space-x-1",children:[(0,jsx_runtime.jsx)(lemon_ui_src.Jp,{type:"secondary",size:"small",onClick:()=>setSelectedRowIndexes([]),children:"Unselect all"}),selectedRowIndexes.length>1&&(0,jsx_runtime.jsx)(lemon_ui_src.Jp,{type:"secondary",size:"small",onClick:()=>{mergeGroups(selectedRowIndexes),setSelectedRowIndexes([])},children:"Merge"})]})},CustomVolumeColumnHeader=_ref=>{let{columnName}=_ref,{sparklineSelectedPeriod,sparklineOptions:options}=(0,index_esm.useValues)(errorTrackingLogic.H),{setSparklineSelectedPeriod}=(0,index_esm.useActions)(errorTrackingLogic.H);return sparklineSelectedPeriod?(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center min-w-64",children:[(0,jsx_runtime.jsx)("div",{children:columnName}),(0,jsx_runtime.jsx)(lemon_ui_src.P4,{size:"xsmall",value:sparklineSelectedPeriod,options:options,onChange:value=>setSparklineSelectedPeriod(value)})]}):null},CustomGroupTitleColumn=props=>{let{hasGroupActions}=(0,index_esm.useValues)(errorTrackingLogic.H),{selectedRowIndexes}=(0,index_esm.useValues)(errorTrackingSceneLogic.D),{setSelectedRowIndexes}=(0,index_esm.useActions)(errorTrackingSceneLogic.D),rowIndex=props.recordIndex,record=props.record,checked=selectedRowIndexes.includes(props.recordIndex);return(0,jsx_runtime.jsxs)("div",{className:"flex items-start space-x-1.5 group",children:[hasGroupActions&&(0,jsx_runtime.jsx)(lemon_ui_src.Hw,{className:(0,clsx_m.default)("pt-1 group-hover:visible",!checked&&"invisible"),checked:checked,onChange:newValue=>{setSelectedRowIndexes(newValue?[...selectedRowIndexes,rowIndex]:selectedRowIndexes.filter(id=>id!=rowIndex))}}),(0,jsx_runtime.jsx)(LemonTableLink.i,{title:record.exception_type||"Unknown Type",description:(0,jsx_runtime.jsxs)("div",{className:"space-y-1",children:[(0,jsx_runtime.jsx)("div",{className:"line-clamp-1",children:record.description}),(0,jsx_runtime.jsxs)("div",{className:"space-x-1",children:[(0,jsx_runtime.jsx)(src.w4,{time:record.first_seen,className:"border-dotted border-b"}),(0,jsx_runtime.jsx)("span",{children:"|"}),(0,jsx_runtime.jsx)(src.w4,{time:record.last_seen,className:"border-dotted border-b"})]})]}),className:"flex-1",to:urls.j.errorTrackingGroup((0,utils.O)(record.fingerprint))})]})},AssigneeColumn=props=>{let{assignGroup}=(0,index_esm.useActions)(errorTrackingDataNodeLogic),record=props.record;return(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)(AssigneeSelect.i,{assignee:record.assignee,onChange:assigneeId=>assignGroup(props.recordIndex,assigneeId)})})},Header=()=>{let{setIsConfigurationModalOpen}=(0,index_esm.useActions)(errorTrackingSceneLogic.D);return(0,jsx_runtime.jsx)(PageHeader.m,{buttons:(0,jsx_runtime.jsx)(lemon_ui_src.Jp,{type:"secondary",icon:(0,jsx_runtime.jsx)(posthog_icons_es.IconGear,{}),onClick:()=>setIsConfigurationModalOpen(!0),children:"Configure"})})},ConfigurationModal=()=>{let{isConfigurationModalOpen,isUploadSourceMapSubmitting}=(0,index_esm.useValues)(errorTrackingSceneLogic.D),{setIsConfigurationModalOpen}=(0,index_esm.useActions)(errorTrackingSceneLogic.D);return(0,jsx_runtime.jsx)(lemon_ui_src.fQ,{title:"",onClose:()=>setIsConfigurationModalOpen(!1),isOpen:isConfigurationModalOpen,simple:!0,children:(0,jsx_runtime.jsxs)(lib.Form,{logic:errorTrackingSceneLogic.D,formKey:"uploadSourceMap",className:"gap-1",enableFormOnSubmit:!0,children:[(0,jsx_runtime.jsx)(lemon_ui_src.fQ.Header,{children:(0,jsx_runtime.jsx)("h3",{children:"Upload source map"})}),(0,jsx_runtime.jsx)(lemon_ui_src.fQ.Content,{className:"space-y-2",children:(0,jsx_runtime.jsx)(LemonField.D,{name:"files",children:(0,jsx_runtime.jsx)(lemon_ui_src.mH,{accept:"text/plain",multiple:!1,callToAction:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-2 border border-dashed rounded p-4",children:[(0,jsx_runtime.jsxs)("span",{className:"flex items-center gap-2 font-semibold",children:[(0,jsx_runtime.jsx)(icons.bn,{className:"text-2xl"})," Add source map"]}),(0,jsx_runtime.jsx)("div",{children:"Drag and drop your local source map here or click to open the file browser."})]})})})}),(0,jsx_runtime.jsxs)(lemon_ui_src.fQ.Footer,{children:[(0,jsx_runtime.jsx)(lemon_ui_src.Jp,{type:"secondary",onClick:()=>setIsConfigurationModalOpen(!1),children:"Cancel"}),(0,jsx_runtime.jsx)(lemon_ui_src.Jp,{type:"primary",status:"alt",htmlType:"submit",loading:isUploadSourceMapSubmitting,children:"Upload"})]})]})})}},"./frontend/src/scenes/error-tracking/errorTrackingLogic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>errorTrackingLogic});var kea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/lib/constants.tsx"),lib_logic_featureFlagLogic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/logic/featureFlagLogic.ts"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/types.ts");let lastHour={value:"1h",label:"1h"},lastDay={value:"24h",label:"24h"},lastMonth={value:"mStart",label:"Month"},lastYear={value:"yStart",label:"Year"},customOptions={dStart:[lastDay,lastHour],"-24h":[lastDay,lastHour],"-1dStart":[{value:"-1d24h",label:"24h"},{value:"-1d1h",label:"1h"}],mStart:[lastMonth,lastDay],yStart:[lastYear,lastMonth],all:[lastYear,lastMonth,lastDay]},DEFAULT_FILTER_GROUP={type:_types__WEBPACK_IMPORTED_MODULE_3__.J2.And,values:[{type:_types__WEBPACK_IMPORTED_MODULE_3__.J2.And,values:[]}]},errorTrackingLogic=(0,kea__WEBPACK_IMPORTED_MODULE_0__.kea)([(0,kea__WEBPACK_IMPORTED_MODULE_0__.path)(["scenes","error-tracking","errorTrackingLogic"]),(0,kea__WEBPACK_IMPORTED_MODULE_0__.connect)({values:[lib_logic_featureFlagLogic__WEBPACK_IMPORTED_MODULE_2__.h,["featureFlags"]]}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.actions)({setDateRange:dateRange=>({dateRange}),setAssignee:assignee=>({assignee}),setFilterGroup:filterGroup=>({filterGroup}),setFilterTestAccounts:filterTestAccounts=>({filterTestAccounts}),setSearchQuery:searchQuery=>({searchQuery}),setSparklineSelectedPeriod:period=>({period}),_setSparklineOptions:options=>({options})}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.reducers)({dateRange:[{date_from:"-7d",date_to:null},{persist:!0},{setDateRange:(_,_ref)=>{let{dateRange}=_ref;return dateRange}}],assignee:[null,{persist:!0},{setAssignee:(_,_ref2)=>{let{assignee}=_ref2;return assignee}}],filterGroup:[DEFAULT_FILTER_GROUP,{persist:!0},{setFilterGroup:(_,_ref3)=>{let{filterGroup}=_ref3;return filterGroup}}],filterTestAccounts:[!1,{persist:!0},{setFilterTestAccounts:(_,_ref4)=>{let{filterTestAccounts}=_ref4;return filterTestAccounts}}],searchQuery:["",{setSearchQuery:(_,_ref5)=>{let{searchQuery}=_ref5;return searchQuery}}],sparklineSelectedPeriod:[lastDay.value,{persist:!0},{setSparklineSelectedPeriod:(_,_ref6)=>{let{period}=_ref6;return period}}],sparklineOptions:[[lastDay,lastHour],{persist:!0},{_setSparklineOptions:(_,_ref7)=>{let{options}=_ref7;return options}}]}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.selectors)({hasGroupActions:[s=>[s.featureFlags],featureFlags=>!!featureFlags[lib_constants__WEBPACK_IMPORTED_MODULE_1__.y8.ERROR_TRACKING_GROUP_ACTIONS]]}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.listeners)(_ref8=>{let{values,actions}=_ref8;return{setDateRange:_ref9=>{let{dateRange:{date_from}}=_ref9;if(date_from){var _customOptions$date_f;let options=null!==(_customOptions$date_f=customOptions[date_from])&&void 0!==_customOptions$date_f?_customOptions$date_f:[];if(0===options.length){let isRelative=date_from.match(/-\d+[hdmy]/);if(isRelative){let value=date_from?.replace("-","");options.push({value:value,label:value},lastDay)}}if(0===options.length)actions.setSparklineSelectedPeriod(null);else{let possibleValues=options.map(o=>o.value);values.sparklineSelectedPeriod&&possibleValues.includes(values.sparklineSelectedPeriod)||actions.setSparklineSelectedPeriod(options[0].value)}actions._setSparklineOptions(options)}else actions.setSparklineSelectedPeriod(null),actions._setSparklineOptions([])}}})])},"./frontend/src/scenes/error-tracking/errorTrackingSceneLogic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>errorTrackingSceneLogic});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),kea_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea-forms@3.2.0_kea@3.1.5/node_modules/kea-forms/lib/index.js"),kea_subscriptions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/kea-subscriptions@3.0.1_kea@3.1.5/node_modules/kea-subscriptions/lib/index.js"),lib_api__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/api.ts"),_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/scenes/error-tracking/errorTrackingLogic.ts"),_queries__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/scenes/error-tracking/queries.ts");let errorTrackingSceneLogic=(0,kea__WEBPACK_IMPORTED_MODULE_1__.kea)([(0,kea__WEBPACK_IMPORTED_MODULE_1__.path)(["scenes","error-tracking","errorTrackingSceneLogic"]),(0,kea__WEBPACK_IMPORTED_MODULE_1__.connect)({values:[_errorTrackingLogic__WEBPACK_IMPORTED_MODULE_5__.H,["dateRange","assignee","filterTestAccounts","filterGroup","sparklineSelectedPeriod","searchQuery","hasGroupActions"]]}),(0,kea__WEBPACK_IMPORTED_MODULE_1__.actions)({setOrder:order=>({order}),setIsConfigurationModalOpen:open=>({open}),setSelectedRowIndexes:ids=>({ids})}),(0,kea__WEBPACK_IMPORTED_MODULE_1__.reducers)({order:["last_seen",{persist:!0},{setOrder:(_,_ref)=>{let{order}=_ref;return order}}],isConfigurationModalOpen:[!1,{setIsConfigurationModalOpen:(_,_ref2)=>{let{open}=_ref2;return open}}],selectedRowIndexes:[[],{setSelectedRowIndexes:(_,_ref3)=>{let{ids}=_ref3;return ids}}]}),(0,kea__WEBPACK_IMPORTED_MODULE_1__.selectors)({query:[s=>[s.order,s.dateRange,s.assignee,s.filterTestAccounts,s.filterGroup,s.sparklineSelectedPeriod,s.searchQuery,s.hasGroupActions],(order,dateRange,assignee,filterTestAccounts,filterGroup,sparklineSelectedPeriod,searchQuery,hasGroupActions)=>(0,_queries__WEBPACK_IMPORTED_MODULE_6__.mx)({order,dateRange,assignee,filterTestAccounts,filterGroup,sparklineSelectedPeriod,searchQuery,columns:hasGroupActions?["error","occurrences","sessions","users","assignee"]:["error","occurrences","sessions","users"]})]}),(0,kea_subscriptions__WEBPACK_IMPORTED_MODULE_3__.Vt)(_ref4=>{let{actions}=_ref4;return{query:()=>actions.setSelectedRowIndexes([])}}),(0,kea_forms__WEBPACK_IMPORTED_MODULE_2__.forms)(_ref5=>{let{actions}=_ref5;return{uploadSourceMap:{defaults:{files:[]},submit:async _ref6=>{let{files}=_ref6;if(files.length>0){let formData=new FormData,file=files[0];formData.append("source_map",file),await lib_api__WEBPACK_IMPORTED_MODULE_4__.ZP.errorTracking.uploadSourceMaps(formData),actions.setIsConfigurationModalOpen(!1),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.UJ.success("Source map uploaded")}}}}})])},"./frontend/src/scenes/error-tracking/queries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ge:()=>errorTrackingGroupQuery,mJ:()=>errorTrackingGroupEventsQuery,mx:()=>errorTrackingQuery});var lib_dayjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/lib/dayjs.ts"),lib_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/lib/utils.tsx"),_queries_schema__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/queries/schema.ts");__webpack_require__("./frontend/src/types.ts");let SPARKLINE_CONFIGURATIONS={"-1d1h":{value:60,displayAs:"minute",offsetHours:24},"-1d24h":{value:24,displayAs:"hour",offsetHours:24},"1h":{value:60,displayAs:"minute"},"24h":{value:24,displayAs:"hour"},"7d":{value:168,displayAs:"hour"},"14d":{value:336,displayAs:"hour"},"90d":{value:90,displayAs:"day"},"180d":{value:26,displayAs:"week"},mStart:{value:31,displayAs:"day"},yStart:{value:52,displayAs:"week"}},toStartOfIntervalFn={minute:"toStartOfMinute",hour:"toStartOfHour",day:"toStartOfDay",week:"toStartOfWeek",month:"toStartOfMonth"},errorTrackingQuery=_ref=>{let{order,dateRange,assignee,filterTestAccounts,filterGroup,searchQuery,sparklineSelectedPeriod,columns,limit=50}=_ref,select=[];if(sparklineSelectedPeriod){let{value,displayAs,offsetHours}=parseSparklineSelection(sparklineSelectedPeriod),{labels,data}=generateSparklineProps({value,displayAs,offsetHours});select.splice(1,0,`<Sparkline data={${data}} labels={[${labels.join(",")}]} /> as volume`),columns.splice(1,0,"volume")}return{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.DataTableNode,source:{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.ErrorTrackingQuery,select:select,order:order,dateRange:dateRange,assignee:assignee,filterGroup:filterGroup,filterTestAccounts:filterTestAccounts,searchQuery:searchQuery,limit:limit},showActions:!1,showTimings:!1,columns:columns}},parseSparklineSelection=selection=>{if(selection in SPARKLINE_CONFIGURATIONS)return SPARKLINE_CONFIGURATIONS[selection];let result=selection.match(/\d+|\D+/g);if(result){let[value,unit]=result;return{value:Number(value)*("y"===unit?12:1),displayAs:"h"===unit?"hour":"d"===unit?"day":"w"===unit?"week":"month"}}return{value:24,displayAs:"hour"}},generateSparklineProps=_ref2=>{let{value,displayAs,offsetHours}=_ref2,offset=null!=offsetHours?offsetHours:0,now=(0,lib_dayjs__WEBPACK_IMPORTED_MODULE_0__.Bv)().subtract(offset,"hours").startOf(displayAs),dates=(0,lib_utils__WEBPACK_IMPORTED_MODULE_1__.w6)(value).map(idx=>now.subtract(value-(idx+1),displayAs)),labels=dates.map(d=>`'${d.format("D MMM, YYYY HH:mm")} (UTC)'`),toStartOfInterval=toStartOfIntervalFn[displayAs],data=`reverse(arrayMap(x -> countEqual(groupArray(dateDiff('${displayAs}', ${toStartOfInterval}(timestamp), ${toStartOfInterval}(subtractHours(now(), ${offset})))), x), range(${value})))`;return{labels,data}},errorTrackingGroupQuery=_ref3=>{let{fingerprint,dateRange,filterTestAccounts,filterGroup}=_ref3;return{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.ErrorTrackingQuery,fingerprint:fingerprint,dateRange:dateRange,filterGroup:filterGroup,filterTestAccounts:filterTestAccounts}},errorTrackingGroupEventsQuery=_ref4=>{let{select,fingerprints,dateRange,filterTestAccounts,filterGroup,offset}=_ref4,group=filterGroup.values[0],properties=group.values,where=[`has(${stringifyFingerprints(fingerprints)}, JSONExtract(ifNull(properties.$exception_fingerprint,'[]'),'Array(String)'))`],query={kind:_queries_schema__WEBPACK_IMPORTED_MODULE_2__.OH.EventsQuery,event:"$exception",select,where,properties,filterTestAccounts:filterTestAccounts,offset:offset,limit:50};return dateRange.date_from&&(query.after=dateRange.date_from),dateRange.date_to&&(query.before=dateRange.date_to),query},stringifyFingerprints=fingerprints=>{let stringifiedFingerprints=fingerprints.map(fp=>{let stringifiedParts=fp.map(s=>`'${s}'`);return`[${stringifiedParts.join(",")}]`});return`[${stringifiedFingerprints.join(",")}]`}}}]);