"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[34381],{"./frontend/src/scenes/activity/ActivityScene.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActivityScene:()=>ActivityScene,scene:()=>scene});var index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib=__webpack_require__("./node_modules/.pnpm/kea-router@3.1.4_kea@3.1.5/node_modules/kea-router/lib/index.js"),PageHeader=__webpack_require__("./frontend/src/lib/components/PageHeader.tsx"),constants=__webpack_require__("./frontend/src/lib/constants.tsx"),LemonTabs=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTabs/index.ts"),featureFlagLogic=__webpack_require__("./frontend/src/lib/logic/featureFlagLogic.ts"),utils=__webpack_require__("./frontend/src/lib/utils.tsx"),sceneTypes=__webpack_require__("./frontend/src/scenes/sceneTypes.ts"),urls=__webpack_require__("./frontend/src/scenes/urls.ts"),types=__webpack_require__("./frontend/src/types.ts"),Query=__webpack_require__("./frontend/src/queries/Query/Query.tsx"),fast_deep_equal=__webpack_require__("./node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"),fast_deep_equal_default=__webpack_require__.n(fast_deep_equal),LemonToast=__webpack_require__("./frontend/src/lib/lemon-ui/LemonToast/LemonToast.tsx"),defaults=__webpack_require__("./frontend/src/scenes/activity/explore/defaults.ts"),teamLogic=__webpack_require__("./frontend/src/scenes/teamLogic.tsx"),defaultEventsQuery=__webpack_require__("./frontend/src/queries/nodes/DataTable/defaultEventsQuery.ts");let eventsSceneLogic=(0,index_esm.kea)([(0,index_esm.path)(["scenes","events","eventsSceneLogic"]),(0,index_esm.connect)({values:[teamLogic.teamLogic,["currentTeam"],featureFlagLogic.h,["featureFlags"]]}),(0,index_esm.actions)({setQuery:query=>({query})}),(0,index_esm.reducers)({savedQuery:[null,{setQuery:(_,_ref)=>{let{query}=_ref;return query}}]}),(0,index_esm.selectors)({defaultQuery:[s=>[s.currentTeam],currentTeam=>{let defaultSourceForTeam=currentTeam&&(0,defaultEventsQuery.Rr)(currentTeam),defaultForScene=(0,defaults.w)();return defaultSourceForTeam?{...defaultForScene,source:defaultSourceForTeam}:defaultForScene}],query:[s=>[s.savedQuery,s.defaultQuery],(savedQuery,defaultQuery)=>savedQuery||defaultQuery]}),(0,lib.actionToUrl)(_ref2=>{let{values}=_ref2;return{setQuery:()=>[values.featureFlags[constants.y8.LIVE_EVENTS]?urls.j.activity(types.ZO.ExploreEvents):urls.j.events(),{},(0,utils.h0)(values.query,values.defaultQuery)?{}:{q:values.query},{replace:!0}]}}),(0,lib.urlToAction)(_ref3=>{let{actions,values}=_ref3,eventsQueryHandler=(_,__,_ref4)=>{let{q:queryParam}=_ref4;fast_deep_equal_default()(queryParam,values.query)||(queryParam?"object"==typeof queryParam?actions.setQuery(queryParam):(LemonToast.UJ.error("Invalid query in URL"),console.error({queryParam})):(0,utils.h0)(values.query,values.defaultQuery)||actions.setQuery(values.defaultQuery))};return{[urls.j.events()]:eventsQueryHandler,[urls.j.activity(types.ZO.ExploreEvents)]:eventsQueryHandler}})]);var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function EventsScene(){let{query}=(0,index_esm.useValues)(eventsSceneLogic),{setQuery}=(0,index_esm.useActions)(eventsSceneLogic);return(0,jsx_runtime.jsx)(Query.A,{query:query,setQuery:setQuery,context:{showOpenEditorButton:!0}})}var posthog_icons_es=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),PropertyKeyInfo=__webpack_require__("./frontend/src/lib/components/PropertyKeyInfo.tsx"),TaxonomicFilter_types=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/types.ts"),TZLabel=__webpack_require__("./frontend/src/lib/components/TZLabel/index.tsx"),LemonTable=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTable/index.ts"),apiHost=__webpack_require__("./frontend/src/lib/utils/apiHost.ts");let ERROR_TOAST_ID="live-stream-error",liveEventsTableLogic=(0,index_esm.kea)([(0,index_esm.path)(["scenes","activity","live-events","liveEventsTableLogic"]),(0,index_esm.connect)({values:[teamLogic.teamLogic,["currentTeam"]]}),(0,index_esm.actions)(()=>({addEvents:events=>({events}),clearEvents:!0,setFilters:filters=>({filters}),updateEventsConnection:!0,pauseStream:!0,resumeStream:!0,setCurEventProperties:curEventProperties=>({curEventProperties}),setClientSideFilters:clientSideFilters=>({clientSideFilters}),pollStats:!0,setStats:stats=>({stats}),showLiveStreamErrorToast:!0})),(0,index_esm.reducers)({events:[[],{addEvents:(state,_ref)=>{let{events}=_ref,newState=[...events,...state];return newState.length>500?newState.slice(0,400):newState},clearEvents:()=>[]}],filters:[{eventType:null},{setFilters:(state,_ref2)=>{let{filters}=_ref2;return{...state,...filters}}}],clientSideFilters:[{},{setClientSideFilters:(_,_ref3)=>{let{clientSideFilters}=_ref3;return clientSideFilters}}],streamPaused:[!1,{pauseStream:()=>!0,resumeStream:()=>!1}],curEventProperties:[[],{setCurEventProperties:(_,_ref4)=>{let{curEventProperties}=_ref4;return curEventProperties}}],stats:[{users_on_product:null},{setStats:(_,_ref5)=>{let{stats}=_ref5;return stats}}],lastBatchTimestamp:[null,{addEvents:(state,_ref6)=>{let{events}=_ref6;return events.length>0?performance.now():state}}]}),(0,index_esm.selectors)(_ref7=>{let{selectors}=_ref7;return{eventCount:[()=>[selectors.events],events=>events.length],filteredEvents:[s=>[s.events,s.clientSideFilters],(events,clientSideFilters)=>events.filter(event=>Object.entries(clientSideFilters).every(_ref8=>{let[key,value]=_ref8;return event[key]===value}))]}}),(0,index_esm.listeners)(_ref9=>{let{actions,values,cache}=_ref9;return{setFilters:()=>{actions.clearEvents(),actions.updateEventsConnection()},updateEventsConnection:async()=>{if(cache.eventsSource&&cache.eventsSource.close(),values.streamPaused||!values.currentTeam)return;let{eventType}=values.filters,url=new URL(`${(0,apiHost.K)()}/events`);eventType&&url.searchParams.append("eventType",eventType);let source=new window.EventSourcePolyfill(url.toString(),{headers:{Authorization:`Bearer ${values.currentTeam.live_events_token}`}});cache.batch=[],source.onmessage=function(event){src.lemonToast.dismiss(ERROR_TOAST_ID);let eventData=JSON.parse(event.data);cache.batch.push(eventData),(cache.batch.length>=10||performance.now()-(values.lastBatchTimestamp||0)>300)&&(actions.addEvents(cache.batch),cache.batch.length=0)},source.onerror=function(e){console.error("Failed to poll events: ",e),cache.hasShownLiveStreamErrorToast||(src.lemonToast.error(`Cannot connect to the live event stream. Continuing to retry in the background…`,{icon:(0,jsx_runtime.jsx)(src.Spinner,{}),toastId:ERROR_TOAST_ID,autoClose:!1}),cache.hasShownLiveStreamErrorToast=!0)},cache.eventsSource=source},pauseStream:()=>{cache.eventsSource&&cache.eventsSource.close()},resumeStream:()=>{actions.updateEventsConnection()},pollStats:async()=>{try{if(!values.currentTeam)return;let response=await fetch(`${(0,apiHost.K)()}/stats`,{headers:{Authorization:`Bearer ${values.currentTeam.live_events_token}`}}),data=await response.json();actions.setStats(data)}catch(error){console.error("Failed to poll stats:",error)}}}}),(0,index_esm.events)(_ref10=>{let{actions,cache}=_ref10;return{afterMount:()=>{actions.updateEventsConnection(),cache.statsInterval=setInterval(()=>{actions.pollStats()},1500)},beforeUnmount:()=>{cache.eventsSource&&cache.eventsSource.close(),cache.statsInterval&&clearInterval(cache.statsInterval)}}})]),columns=[{title:"Event",key:"event",className:"max-w-80",render:function Render(_,event){return(0,jsx_runtime.jsx)(PropertyKeyInfo.T,{value:event.event,type:TaxonomicFilter_types.t.Events})}},{title:"URL / Screen",key:"$current_url",className:"max-w-80",render:function Render(_,event){return(0,jsx_runtime.jsx)("span",{children:event.properties.$current_url||event.properties.$screen_name})}},{title:"Time",key:"timestamp",className:"max-w-80",render:function Render(_,event){return(0,jsx_runtime.jsx)(TZLabel.w,{time:event.timestamp})}}],ACTIVITY_TABS=[{key:types.ZO.ExploreEvents,label:"Explore",content:(0,jsx_runtime.jsx)(EventsScene,{}),link:urls.j.activity(types.ZO.ExploreEvents)},{key:types.ZO.LiveEvents,label:"Live",content:(0,jsx_runtime.jsx)(function(){var _stats$users_on_produ;let{events,stats,streamPaused}=(0,index_esm.useValues)(liveEventsTableLogic),{pauseStream,resumeStream}=(0,index_esm.useActions)(liveEventsTableLogic);return(0,jsx_runtime.jsxs)("div",{"data-attr":"manage-events-table",children:[(0,jsx_runtime.jsxs)("div",{className:"mb-4 flex w-full justify-between items-center",children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)(src.Tooltip,{title:"Estimate of users active in the last 30 seconds.",placement:"right",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-justify-center items-center bg-white px-3 py-2 rounded border border-3000 text-xs font-medium text-gray-600 space-x-2.5",children:[(0,jsx_runtime.jsxs)("span",{className:"relative flex h-2.5 w-2.5",children:[(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.default)("absolute inline-flex h-full w-full rounded-full bg-danger",stats?.users_on_product!=null&&"animate-ping"),style:{opacity:.75}}),(0,jsx_runtime.jsx)("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-danger"})]}),(0,jsx_runtime.jsxs)("span",{className:"text-sm cursor-default",children:["Users active right now: ",(0,jsx_runtime.jsx)("b",{children:null!==(_stats$users_on_produ=stats?.users_on_product)&&void 0!==_stats$users_on_produ?_stats$users_on_produ:"—"})]})]})})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src.LemonButton,{icon:streamPaused?(0,jsx_runtime.jsx)(posthog_icons_es.IconPlayFilled,{className:"w-4 h-4"}):(0,jsx_runtime.jsx)(posthog_icons_es.IconPauseFilled,{className:"w-4 h-4"}),type:"secondary",onClick:streamPaused?resumeStream:pauseStream,children:streamPaused?"Play":"Pause"})})]}),(0,jsx_runtime.jsx)(LemonTable.g,{columns:columns,"data-attr":"live-events-table",rowKey:"uuid",dataSource:events,useURLForSorting:!1,emptyState:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4 p-6",children:[streamPaused?(0,jsx_runtime.jsx)(posthog_icons_es.IconPauseFilled,{className:"text-4xl"}):(0,jsx_runtime.jsx)(src.Spinner,{className:"text-4xl",textColored:!0}),(0,jsx_runtime.jsx)("span",{className:"text-lg font-title font-semibold leading-tight",children:streamPaused?"Stream paused":"Waiting for events…"})]}),nouns:["event","events"]})]})},{}),link:urls.j.activity(types.ZO.LiveEvents)}],activitySceneLogic=(0,index_esm.kea)([(0,index_esm.path)(["scenes","events","activitySceneLogic"]),(0,index_esm.connect)({values:[featureFlagLogic.h,["featureFlags"]]}),(0,index_esm.actions)({setTab:tab=>({tab})}),(0,index_esm.reducers)({tab:[types.ZO.ExploreEvents,{setTab:(_,_ref)=>{let{tab}=_ref;return tab}}]}),(0,index_esm.selectors)({breadcrumbs:[s=>[s.tab,s.featureFlags],(tab,featureFlags)=>featureFlags[constants.y8.LIVE_EVENTS]?[{key:sceneTypes.x.Activity,name:"Activity",path:urls.j.activity()},{key:tab,name:(0,utils.fm)(tab)}]:[{key:sceneTypes.x.Activity,name:"Activity"}]]}),(0,lib.urlToAction)(_ref2=>{let{actions}=_ref2;return{[urls.j.activity(":tab")]:_ref3=>{let{tab}=_ref3;actions.setTab(tab)}}})]);function ActivityScene(){let{tab}=(0,index_esm.useValues)(activitySceneLogic),{setTab}=(0,index_esm.useActions)(activitySceneLogic),{featureFlags}=(0,index_esm.useValues)(featureFlagLogic.h);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(PageHeader.m,{tabbedPage:!0}),featureFlags[constants.y8.LIVE_EVENTS]?(0,jsx_runtime.jsx)(LemonTabs.T,{activeKey:tab,onChange:t=>setTab(t),tabs:ACTIVITY_TABS}):(0,jsx_runtime.jsx)(EventsScene,{})]})}let scene={component:ActivityScene,logic:activitySceneLogic}}}]);