"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[41273],{"./frontend/src/scenes/pipeline/PipelineNodeNew.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PipelineNodeNew:()=>PipelineNodeNew,scene:()=>scene});var posthog_icons_es=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.7.3_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib=__webpack_require__("./node_modules/.pnpm/kea-router@3.1.4_kea@3.1.5/node_modules/kea-router/lib/index.js"),NotFound=__webpack_require__("./frontend/src/lib/components/NotFound/index.tsx"),PayGateMini=__webpack_require__("./frontend/src/lib/components/PayGateMini/PayGateMini.tsx"),LemonButton=__webpack_require__("./frontend/src/lib/lemon-ui/LemonButton/index.ts"),LemonTable=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTable/index.ts"),LemonTableLink=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTable/LemonTableLink.tsx"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),urls=__webpack_require__("./frontend/src/scenes/urls.ts"),types=__webpack_require__("./frontend/src/types.ts"),src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea_forms_lib=__webpack_require__("./node_modules/.pnpm/kea-forms@3.1.3_kea@3.1.5/node_modules/kea-forms/lib/index.js"),PayGateButton=__webpack_require__("./frontend/src/lib/components/PayGateMini/PayGateButton.tsx"),useFeatureFlag=__webpack_require__("./frontend/src/lib/hooks/useFeatureFlag.ts"),pipelineAccessLogic=__webpack_require__("./frontend/src/scenes/pipeline/pipelineAccessLogic.tsx"),pipeline_types=__webpack_require__("./frontend/src/scenes/pipeline/types.ts"),fuse_esm=__webpack_require__("./node_modules/.pnpm/fuse.js@6.6.2/node_modules/fuse.js/dist/fuse.esm.js"),kea_loaders_lib=__webpack_require__("./node_modules/.pnpm/kea-loaders@3.0.0_kea@3.1.5/node_modules/kea-loaders/lib/index.js"),api=__webpack_require__("./frontend/src/lib/api.ts"),constants=__webpack_require__("./frontend/src/lib/constants.tsx"),LemonField=__webpack_require__("./frontend/src/lib/lemon-ui/LemonField/index.ts"),featureFlagLogic=__webpack_require__("./frontend/src/lib/logic/featureFlagLogic.ts"),utils=__webpack_require__("./frontend/src/lib/utils.tsx"),dist_module=__webpack_require__("./node_modules/.pnpm/posthog-js@1.149.2/node_modules/posthog-js/dist/module.js"),userLogic=__webpack_require__("./frontend/src/scenes/userLogic.ts"),HogFunctionIcon=__webpack_require__("./frontend/src/scenes/pipeline/hogfunctions/HogFunctionIcon.tsx"),pipeline_utils=__webpack_require__("./frontend/src/scenes/pipeline/utils.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let newDestinationsLogic=(0,index_esm.kea)([(0,index_esm.connect)({values:[userLogic.userLogic,["user"],featureFlagLogic.h,["featureFlags"]]}),(0,index_esm.path)(()=>["scenes","pipeline","destinations","newDestinationsLogic"]),(0,index_esm.actions)({setFilters:filters=>({filters}),resetFilters:!0,openFeedbackDialog:!0}),(0,index_esm.reducers)({filters:[{},{setFilters:(state,_ref)=>{let{filters}=_ref;return{...state,...filters}},resetFilters:()=>({})}]}),(0,kea_loaders_lib.loaders)({plugins:[{},{loadPlugins:async()=>(0,pipeline_utils.c$)("api/organizations/@current/pipeline_destinations")}],hogFunctionTemplates:[{},{loadHogFunctionTemplates:async()=>{let templates=await api.ZP.hogFunctions.listTemplates();return templates.results.reduce((acc,template)=>(acc[template.id]=template,acc),{})}}]}),(0,index_esm.selectors)(()=>({loading:[s=>[s.pluginsLoading,s.hogFunctionTemplatesLoading],(pluginsLoading,hogFunctionTemplatesLoading)=>pluginsLoading||hogFunctionTemplatesLoading],batchExportServiceNames:[s=>[s.user],user=>{let services=types.e2.filter(service=>"HTTP"!==service);return(user?.is_impersonated||user?.is_staff)&&services.push("HTTP"),services}],destinations:[s=>[s.plugins,s.hogFunctionTemplates,s.batchExportServiceNames,s.featureFlags,lib.router.selectors.hashParams],(plugins,hogFunctionTemplates,batchExportServiceNames,featureFlags,hashParams)=>{let hogTemplates=featureFlags[constants.y8.HOG_FUNCTIONS]?Object.values(hogFunctionTemplates):[];return[...hogTemplates.map(hogFunction=>({icon:(0,jsx_runtime.jsx)(HogFunctionIcon._,{size:"small",src:hogFunction.icon_url}),name:hogFunction.name,description:hogFunction.description,backend:pipeline_types.b.HogFunction,url:(0,lib.combineUrl)(urls.j.pipelineNodeNew(types.We.Destination,`hog-${hogFunction.id}`),{},hashParams).url,status:hogFunction.status})),...Object.values(plugins).map(plugin=>({icon:(0,jsx_runtime.jsx)(pipeline_utils.Wf,{plugin:plugin}),name:plugin.name,description:plugin.description||"",backend:pipeline_types.b.Plugin,url:urls.j.pipelineNodeNew(types.We.Destination,`${plugin.id}`)})),...batchExportServiceNames.map(service=>({icon:(0,jsx_runtime.jsx)(pipeline_utils.oe,{type:service}),name:service,description:`${service} batch export`,backend:pipeline_types.b.BatchExport,url:urls.j.pipelineNodeNew(types.We.Destination,`${service}`)}))]}],destinationsFuse:[s=>[s.destinations],destinations=>new fuse_esm.Z(destinations||[],{keys:["name","description"],threshold:.3})],filteredDestinations:[s=>[s.filters,s.destinations,s.destinationsFuse],(filters,destinations,destinationsFuse)=>{let{search,kind}=filters;return(search?destinationsFuse.search(search).map(x=>x.item):destinations).filter(dest=>!kind||dest.backend===kind)}]})),(0,index_esm.listeners)(_ref2=>{let{values}=_ref2;return{setFilters:async(_ref3,breakpoint)=>{let{filters}=_ref3;filters.search&&filters.search.length>2&&(await breakpoint(1e3),dist_module.ZP.capture("cdp destination search",{search:filters.search}))},openFeedbackDialog:async(_,breakpoint)=>{await breakpoint(100),src.LemonDialog.openForm({title:"What destination would you like to see?",initialValues:{destination_name:values.filters.search},errors:{destination_name:x=>x?void 0:"Required"},description:void 0,content:(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)(LemonField.D,{name:"destination_name",label:"Destination",children:(0,jsx_runtime.jsx)(src.LemonInput,{placeholder:"What destination would you like to see?",autoFocus:!0})}),(0,jsx_runtime.jsx)(LemonField.D,{name:"destination_details",label:"Additional information",showOptional:!0,children:(0,jsx_runtime.jsx)(src.LemonTextArea,{placeholder:"Any extra details about what you would need this destination to do or your overall goal"})})]}),onSubmit:async values=>{dist_module.ZP.capture("cdp destination feedback",{...values}),src.lemonToast.success("Thank you for your feedback!")}})}}}),(0,lib.actionToUrl)(_ref4=>{let{values}=_ref4,urlFromFilters=()=>[lib.router.values.location.pathname,{...values.filters},lib.router.values.hashParams,{replace:!0}];return{setFilters:()=>urlFromFilters(),resetFilters:()=>urlFromFilters()}}),(0,lib.urlToAction)(_ref5=>{let{actions,values}=_ref5;return{"*":(_,searchParams)=>{(0,utils.h0)(values.filters,searchParams)||actions.setFilters(searchParams)}}}),(0,index_esm.afterMount)(_ref6=>{let{actions}=_ref6;actions.loadPlugins(),actions.loadHogFunctionTemplates()})]);function DestinationOptionsTable(){var _filters$search;let hogFunctionsEnabled=!!(0,useFeatureFlag.y)("HOG_FUNCTIONS"),{loading,filteredDestinations,filters}=(0,index_esm.useValues)(newDestinationsLogic),{setFilters,openFeedbackDialog}=(0,index_esm.useActions)(newDestinationsLogic),{canEnableNewDestinations}=(0,index_esm.useValues)(pipelineAccessLogic.g);return(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)(PayGateMini.E,{feature:types.P$.DATA_PIPELINES}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsx)(src.LemonInput,{type:"search",placeholder:"Search...",value:null!==(_filters$search=filters.search)&&void 0!==_filters$search?_filters$search:"",onChange:e=>setFilters({search:e})}),(0,jsx_runtime.jsx)(src.Link,{className:"text-sm font-semibold",subtle:!0,onClick:()=>openFeedbackDialog(),children:"Can't find what you're looking for?"}),(0,jsx_runtime.jsx)("div",{className:"flex-1"}),(0,jsx_runtime.jsx)(src.LemonSelect,{type:"secondary",size:"small",options:[{label:"All kinds",value:null},hogFunctionsEnabled?{label:"Realtime (new)",value:pipeline_types.b.HogFunction}:void 0,{label:"Realtime",value:pipeline_types.b.Plugin},{label:"Batch exports",value:pipeline_types.b.BatchExport}].filter(Boolean),value:filters.kind,onChange:e=>setFilters({kind:null!=e?e:void 0})})]}),(0,jsx_runtime.jsx)(src.LemonTable,{dataSource:filteredDestinations,size:"small",loading:loading,columns:[{title:"App",width:0,render:(_,target)=>target.icon},{title:"Name",sticky:!0,key:"name",sorter:(a,b)=>a.name.localeCompare(b.name),render:function RenderName(_,target){return(0,jsx_runtime.jsx)(LemonTableLink.i,{to:canEnableNewDestinations||"free"===target.status?target.url:void 0,title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[target.name,"alpha"===target.status?(0,jsx_runtime.jsx)(src.LemonTag,{type:"danger",children:"Experimental"}):"beta"===target.status?(0,jsx_runtime.jsx)(src.LemonTag,{type:"completion",children:"Beta"}):"stable"===target.status?(0,jsx_runtime.jsx)(src.LemonTag,{type:"highlight",children:"New"}):target.status?(0,jsx_runtime.jsx)(src.LemonTag,{type:"highlight",children:(0,kea_forms_lib.capitalizeFirstLetter)(target.status)}):void 0]}),description:target.description})}},{title:"Actions",width:100,align:"right",render:function RenderActions(_,target){return canEnableNewDestinations||"free"===target.status?(0,jsx_runtime.jsx)(src.LemonButton,{type:"primary","data-attr":`new-${types.We.Destination}`,icon:(0,jsx_runtime.jsx)(posthog_icons_es.IconPlusSmall,{}),to:target.url,fullWidth:!0,children:"Create"}):(0,jsx_runtime.jsx)("span",{className:"whitespace-nowrap",children:(0,jsx_runtime.jsx)(PayGateButton.R,{feature:types.P$.DATA_PIPELINES,type:"secondary"})})}}]})]})}var frontendAppsLogic=__webpack_require__("./frontend/src/scenes/pipeline/frontendAppsLogic.tsx"),HogFunctionConfiguration=__webpack_require__("./frontend/src/scenes/pipeline/hogfunctions/HogFunctionConfiguration.tsx"),PipelineBatchExportConfiguration=__webpack_require__("./frontend/src/scenes/pipeline/PipelineBatchExportConfiguration.tsx"),PipelineNode=__webpack_require__("./frontend/src/scenes/pipeline/PipelineNode.tsx"),pipelineNodeNewLogic=__webpack_require__("./frontend/src/scenes/pipeline/pipelineNodeNewLogic.tsx"),PipelinePluginConfiguration=__webpack_require__("./frontend/src/scenes/pipeline/PipelinePluginConfiguration.tsx"),transformationsLogic=__webpack_require__("./frontend/src/scenes/pipeline/transformationsLogic.tsx");let paramsToProps=_ref=>{let{params:{stage,id}}=_ref,numericId=id&&/^\d+$/.test(id)?parseInt(id):void 0,pluginId=numericId&&!isNaN(numericId)?numericId:null,hogFunctionId=pluginId?null:id?.startsWith("hog-")?id.slice(4):null,batchExportDestination=hogFunctionId?null:null!=id?id:null;return{stage:PipelineNode.PIPELINE_TAB_TO_NODE_STAGE[stage+"s"]||null,pluginId,batchExportDestination,hogFunctionId}},scene={component:PipelineNodeNew,logic:pipelineNodeNewLogic.Q,paramsToProps};function convertPluginToTableEntry(plugin){return{backend:pipeline_types.b.Plugin,id:plugin.id,name:plugin.name,description:plugin.description||"",icon:(0,jsx_runtime.jsx)(pipeline_utils.Wf,{plugin:plugin}),url:plugin.url}}function PipelineNodeNew(){let params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{stage,pluginId,batchExportDestination,hogFunctionId}=paramsToProps({params});if(!stage)return(0,jsx_runtime.jsx)(NotFound.T,{object:"pipeline app stage"});if(pluginId){let res=(0,jsx_runtime.jsx)(PipelinePluginConfiguration.s,{stage:stage,pluginId:pluginId});return stage===types.We.Destination?(0,jsx_runtime.jsx)(PayGateMini.E,{feature:types.P$.DATA_PIPELINES,children:res}):res}return batchExportDestination?stage!==types.We.Destination?(0,jsx_runtime.jsx)(NotFound.T,{object:batchExportDestination}):(0,jsx_runtime.jsx)(PayGateMini.E,{feature:types.P$.DATA_PIPELINES,children:(0,jsx_runtime.jsx)(PipelineBatchExportConfiguration.B,{service:batchExportDestination})}):hogFunctionId?(0,jsx_runtime.jsx)(HogFunctionConfiguration.g,{templateId:hogFunctionId}):stage===types.We.Transformation?(0,jsx_runtime.jsx)(TransformationOptionsTable,{}):stage===types.We.Destination?(0,jsx_runtime.jsx)(DestinationOptionsTable,{}):stage===types.We.SiteApp?(0,jsx_runtime.jsx)(SiteAppOptionsTable,{}):(0,jsx_runtime.jsx)(NotFound.T,{object:"pipeline new options"})}function TransformationOptionsTable(){let{plugins,loading}=(0,index_esm.useValues)(transformationsLogic.P),targets=Object.values(plugins).map(convertPluginToTableEntry);return(0,jsx_runtime.jsx)(NodeOptionsTable,{stage:types.We.Transformation,targets:targets,loading:loading})}function SiteAppOptionsTable(){let{plugins,loading}=(0,index_esm.useValues)(frontendAppsLogic.$),targets=Object.values(plugins).map(convertPluginToTableEntry);return(0,jsx_runtime.jsx)(NodeOptionsTable,{stage:types.We.SiteApp,targets:targets,loading:loading})}function NodeOptionsTable(_ref2){let{stage,targets,loading}=_ref2,{hashParams}=(0,index_esm.useValues)(lib.router),{loadPlugins}=(0,index_esm.useActions)(pipelineNodeNewLogic.Q);return(0,react.useEffect)(()=>{loadPlugins()},[]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(LemonTable.g,{dataSource:targets,size:"small",loading:loading,columns:[{title:"App",width:0,render:function RenderAppInfo(_,target){return target.icon}},{title:"Name",sticky:!0,render:function RenderName(_,target){return(0,jsx_runtime.jsx)(LemonTableLink.i,{to:urls.j.pipelineNodeNew(stage,target.id),title:target.name,description:target.description})}},{title:"Actions",width:100,align:"right",render:function RenderActions(_,target){return(0,jsx_runtime.jsx)(LemonButton.J,{type:"primary","data-attr":`new-${stage}-${target.id}`,icon:(0,jsx_runtime.jsx)(posthog_icons_es.IconPlusSmall,{}),to:(0,lib.combineUrl)(urls.j.pipelineNodeNew(stage,target.id),{},hashParams).url,children:"Create"})}}]})})}}}]);