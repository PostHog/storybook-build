"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[17066],{"./frontend/src/scenes/data-management/definition/DefinitionEdit.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefinitionEdit:()=>DefinitionEdit,scene:()=>scene});var src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib=__webpack_require__("./node_modules/.pnpm/kea-forms@3.2.0_kea@3.1.5/node_modules/kea-forms/lib/index.js"),DefinitionPopoverContents=__webpack_require__("./frontend/src/lib/components/DefinitionPopover/DefinitionPopoverContents.tsx"),NotFound=__webpack_require__("./frontend/src/lib/components/NotFound/index.tsx"),ObjectTags=__webpack_require__("./frontend/src/lib/components/ObjectTags/ObjectTags.tsx"),PageHeader=__webpack_require__("./frontend/src/lib/components/PageHeader.tsx"),types=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/types.ts"),LemonButton=__webpack_require__("./frontend/src/lib/lemon-ui/LemonButton/index.ts"),LemonField=__webpack_require__("./frontend/src/lib/lemon-ui/LemonField/index.ts"),LemonSelect=__webpack_require__("./frontend/src/lib/lemon-ui/LemonSelect/index.ts"),LemonTextArea=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTextArea/LemonTextArea.tsx"),taxonomy=__webpack_require__("./frontend/src/lib/taxonomy.tsx"),kea_loaders_lib=__webpack_require__("./node_modules/.pnpm/kea-loaders@3.0.0_kea@3.1.5/node_modules/kea-loaders/lib/index.js"),kea_router_lib=__webpack_require__("./node_modules/.pnpm/kea-router@3.2.0_kea@3.1.5/node_modules/kea-router/lib/index.js"),kea_subscriptions_lib=__webpack_require__("./node_modules/.pnpm/kea-subscriptions@3.0.1_kea@3.1.5/node_modules/kea-subscriptions/lib/index.js"),api=__webpack_require__("./frontend/src/lib/api.ts"),LemonToast=__webpack_require__("./frontend/src/lib/lemon-ui/LemonToast/LemonToast.tsx"),utils=__webpack_require__("./frontend/src/lib/utils.tsx"),definitionLogic=__webpack_require__("./frontend/src/scenes/data-management/definition/definitionLogic.ts"),eventDefinitionsTableLogic=__webpack_require__("./frontend/src/scenes/data-management/events/eventDefinitionsTableLogic.ts"),propertyDefinitionsTableLogic=__webpack_require__("./frontend/src/scenes/data-management/properties/propertyDefinitionsTableLogic.ts"),urls=__webpack_require__("./frontend/src/scenes/urls.ts"),propertyDefinitionsModel=__webpack_require__("./frontend/src/models/propertyDefinitionsModel.ts"),tagsModel=__webpack_require__("./frontend/src/models/tagsModel.ts");let definitionEditLogic=(0,index_esm.kea)([(0,index_esm.path)(["scenes","data-management","definition","definitionDetailLogic"]),(0,index_esm.props)({}),(0,index_esm.key)(props=>props.id||"new"),(0,index_esm.connect)(_ref=>{let{id}=_ref;return{values:[(0,definitionLogic.k)({id}),["definition","isEvent","singular"]],actions:[(0,definitionLogic.k)({id}),["setDefinition"],propertyDefinitionsTableLogic.T,["setLocalPropertyDefinition"],eventDefinitionsTableLogic.qh,["setLocalEventDefinition"],tagsModel.x,["loadTags"]]}}),(0,lib.forms)(_ref2=>{let{actions}=_ref2;return{editDefinition:{defaults:{},errors:_ref3=>{let{name}=_ref3;return{name:name?null:"You need to set a name"}},submit:definition=>{actions.saveDefinition(definition)}}}}),(0,kea_loaders_lib.loaders)(_ref4=>{let{values,actions}=_ref4;return{editDefinition:[{},{saveDefinition:async(_,breakpoint)=>{let definition={...values.editDefinition};if(values.isEvent){var _event$owner$id;let _event=definition;definition=await api.ZP.eventDefinitions.update({eventDefinitionId:_event.id,eventDefinitionData:{..._event,owner:null!==(_event$owner$id=_event.owner?.id)&&void 0!==_event$owner$id?_event$owner$id:null,verified:!!_event.verified}})}else{let _eventProperty=definition;definition=await api.ZP.propertyDefinitions.update({propertyDefinitionId:_eventProperty.id,propertyDefinitionData:_eventProperty}),(0,propertyDefinitionsModel.s8)({[`event/${definition.name}`]:definition})}return breakpoint(),LemonToast.UJ.success(`${(0,utils.fm)(values.singular)} saved`),values.isEvent?actions.setLocalEventDefinition(definition):actions.setLocalPropertyDefinition(definition),actions.setDefinition(definition),actions.loadTags(),kea_router_lib.router.actions.push(values.isEvent?urls.j.eventDefinition(definition.id):urls.j.propertyDefinition(definition.id)),definition}}]}}),(0,kea_subscriptions_lib.Vt)(_ref5=>{let{actions}=_ref5;return{definition:def=>{actions.resetEditDefinition(def)}}}),(0,kea_router_lib.beforeUnload)(_ref6=>{let{values,actions}=_ref6;return{enabled:()=>values.editDefinitionChanged,message:`Leave?
Changes you made will be discarded.`,onConfirm:()=>{actions.resetEditDefinition(values.definition)}}})]);var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let scene={component:DefinitionEdit,logic:definitionLogic.k,paramsToProps:_ref=>{let{params:{id}}=_ref;return{id}}};function DefinitionEdit(){let props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},logic=definitionEditLogic(props),{definitionLoading,definitionMissing,hasTaxonomyFeatures,isProperty}=(0,index_esm.useValues)((0,definitionLogic.k)(props)),{editDefinition}=(0,index_esm.useValues)(logic),{saveDefinition}=(0,index_esm.useActions)(logic),{tags,tagsLoading}=(0,index_esm.useValues)(tagsModel.x),showVerifiedCheckbox=hasTaxonomyFeatures&&!(0,taxonomy.jA)(editDefinition.name)&&"verified"in editDefinition;return definitionMissing?(0,jsx_runtime.jsx)(NotFound.T,{object:"event"}):(0,jsx_runtime.jsxs)(lib.Form,{logic:definitionEditLogic,props:props,formKey:"editDefinition",children:[(0,jsx_runtime.jsx)(PageHeader.m,{buttons:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LemonButton.J,{"data-attr":"cancel-definition",type:"secondary",to:isProperty?urls.j.propertyDefinition(editDefinition.id):urls.j.eventDefinition(editDefinition.id),disabledReason:definitionLoading?"Loading...":void 0,children:"Cancel"}),(0,jsx_runtime.jsx)(LemonButton.J,{"data-attr":"save-definition",type:"primary",onClick:()=>{saveDefinition({})},disabledReason:definitionLoading?"Loading...":void 0,children:"Save"})]})}),definitionLoading?(0,jsx_runtime.jsxs)("div",{className:"space-y-4 mt-4",children:[(0,jsx_runtime.jsx)(src.yW,{className:"h-10 w-1/3"}),(0,jsx_runtime.jsx)(src.yW,{className:"h-6 w-1/2"}),(0,jsx_runtime.jsx)(src.yW,{className:"h-30 w-1/2"})]}):(0,jsx_runtime.jsxs)("div",{className:"my-4 space-y-4",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("h1",{children:['Editing "',(0,taxonomy.R6)(editDefinition.name,types.t.Events)||"",'"']}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap items-center gap-2 text-muted-alt",children:[(0,jsx_runtime.jsx)("div",{children:"Raw event name:"}),(0,jsx_runtime.jsx)(src.oe,{className:"font-mono",children:editDefinition.name})]})]}),hasTaxonomyFeatures&&"tags"in editDefinition&&(0,jsx_runtime.jsx)("div",{className:"ph-ignore-input",children:(0,jsx_runtime.jsx)(LemonField.D,{name:"tags",label:"Tags","data-attr":"definition-tags",children:_ref2=>{let{value,onChange}=_ref2;return(0,jsx_runtime.jsx)(ObjectTags.D,{className:"definition-tags",saving:definitionLoading||tagsLoading,tags:value||[],onChange:tags=>onChange(tags),style:{marginBottom:4},tagsAvailable:tags})}})}),hasTaxonomyFeatures&&(0,jsx_runtime.jsx)("div",{className:"ph-ignore-input",children:(0,jsx_runtime.jsx)(LemonField.D,{name:"description",label:"Description","data-attr":"definition-description",children:(0,jsx_runtime.jsx)(LemonTextArea._,{value:editDefinition.description})})}),showVerifiedCheckbox&&(0,jsx_runtime.jsx)("div",{className:"ph-ignore-input",children:(0,jsx_runtime.jsx)(LemonField.D,{name:"verified",label:"Verification","data-attr":"definition-verified",children:_ref3=>{let{value,onChange}=_ref3;return(0,jsx_runtime.jsx)(DefinitionPopoverContents._,{isProperty:isProperty,verified:!!value,onChange:nextVerified=>{onChange(nextVerified)}})}})}),isProperty&&(0,jsx_runtime.jsx)("div",{className:"ph-ignore-input",children:(0,jsx_runtime.jsx)(LemonField.D,{name:"property_type",label:"Property Type","data-attr":"property-type",children:_ref4=>{let{value,onChange}=_ref4;return(0,jsx_runtime.jsx)(LemonSelect.Yv,{onChange:val=>onChange(val),value:value,options:[{value:"DateTime",label:"DateTime"},{value:"String",label:"String"},{value:"Numeric",label:"Numeric"},{value:"Boolean",label:"Boolean"}]})}})})]})]})}},"./frontend/src/scenes/data-management/definition/definitionLogic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>definitionLogic});var kea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),kea_loaders__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea-loaders@3.0.0_kea@3.1.5/node_modules/kea-loaders/lib/index.js"),kea_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea-router@3.2.0_kea@3.1.5/node_modules/kea-router/lib/index.js"),lib_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/api.ts"),lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/types.ts"),lib_taxonomy__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/lib/taxonomy.tsx"),scenes_sceneTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/scenes/sceneTypes.ts"),scenes_urls__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/scenes/urls.ts"),scenes_userLogic__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./frontend/src/scenes/userLogic.ts"),_models_propertyDefinitionsModel__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./frontend/src/models/propertyDefinitionsModel.ts"),_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./frontend/src/types.ts"),_DataManagementScene__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./frontend/src/scenes/data-management/DataManagementScene.tsx"),_events_eventDefinitionsTableLogic__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./frontend/src/scenes/data-management/events/eventDefinitionsTableLogic.ts"),_properties_propertyDefinitionsTableLogic__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./frontend/src/scenes/data-management/properties/propertyDefinitionsTableLogic.ts");let createNewDefinition=isEvent=>({id:"new",name:`New ${isEvent?"Event":"Event property"}`}),definitionLogic=(0,kea__WEBPACK_IMPORTED_MODULE_0__.kea)([(0,kea__WEBPACK_IMPORTED_MODULE_0__.path)(["scenes","data-management","definition","definitionViewLogic"]),(0,kea__WEBPACK_IMPORTED_MODULE_0__.props)({}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.key)(props=>props.id||"new"),(0,kea__WEBPACK_IMPORTED_MODULE_0__.actions)({setDefinition:function(definition){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{definition,options}},loadDefinition:id=>({id}),setDefinitionMissing:!0}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.connect)(()=>({values:[scenes_userLogic__WEBPACK_IMPORTED_MODULE_8__.userLogic,["hasAvailableFeature"]]})),(0,kea__WEBPACK_IMPORTED_MODULE_0__.reducers)(()=>({definitionMissing:[!1,{setDefinitionMissing:()=>!0}]})),(0,kea_loaders__WEBPACK_IMPORTED_MODULE_1__.loaders)(_ref=>{let{values,actions}=_ref;return{definition:[createNewDefinition(values.isEvent),{setDefinition:_ref2=>{let{definition,options:{merge}}=_ref2;return merge?{...values.definition,...definition}:definition},loadDefinition:async(_ref3,breakpoint)=>{let{id}=_ref3,definition={...values.definition};try{values.isEvent?definition=await lib_api__WEBPACK_IMPORTED_MODULE_3__.ZP.eventDefinitions.get({eventDefinitionId:id}):(definition=await lib_api__WEBPACK_IMPORTED_MODULE_3__.ZP.propertyDefinitions.get({propertyDefinitionId:id}),(0,_models_propertyDefinitionsModel__WEBPACK_IMPORTED_MODULE_9__.s8)({[`event/${definition.name}`]:definition})),breakpoint()}catch(response){throw actions.setDefinitionMissing(),response}return definition},deleteDefinition:async()=>(values.isEvent?await lib_api__WEBPACK_IMPORTED_MODULE_3__.ZP.eventDefinitions.delete({eventDefinitionId:values.definition.id}):await lib_api__WEBPACK_IMPORTED_MODULE_3__.ZP.propertyDefinitions.delete({propertyDefinitionId:values.definition.id}),kea_router__WEBPACK_IMPORTED_MODULE_2__.router.actions.push(values.isEvent?scenes_urls__WEBPACK_IMPORTED_MODULE_7__.j.eventDefinitions():scenes_urls__WEBPACK_IMPORTED_MODULE_7__.j.propertyDefinitions()),values.isEvent?_events_eventDefinitionsTableLogic__WEBPACK_IMPORTED_MODULE_12__.qh.findMounted()?.actions.loadEventDefinitions():_properties_propertyDefinitionsTableLogic__WEBPACK_IMPORTED_MODULE_13__.T.findMounted()?.actions.loadPropertyDefinitions(),values.definition)}]}}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.selectors)({hasTaxonomyFeatures:[s=>[s.hasAvailableFeature],hasAvailableFeature=>hasAvailableFeature(_types__WEBPACK_IMPORTED_MODULE_10__.P$.INGESTION_TAXONOMY)||hasAvailableFeature(_types__WEBPACK_IMPORTED_MODULE_10__.P$.TAGGING)],isEvent:[()=>[kea_router__WEBPACK_IMPORTED_MODULE_2__.router.selectors.location],_ref4=>{let{pathname}=_ref4;return pathname.includes(scenes_urls__WEBPACK_IMPORTED_MODULE_7__.j.eventDefinitions())}],isProperty:[s=>[s.isEvent],isEvent=>!isEvent],singular:[s=>[s.isEvent],isEvent=>isEvent?"event":"property"],breadcrumbs:[s=>[s.definition,s.isEvent],(definition,isEvent)=>[{key:scenes_sceneTypes__WEBPACK_IMPORTED_MODULE_6__.x.DataManagement,name:"Data Management",path:isEvent?scenes_urls__WEBPACK_IMPORTED_MODULE_7__.j.eventDefinitions():scenes_urls__WEBPACK_IMPORTED_MODULE_7__.j.propertyDefinitions()},{key:isEvent?_DataManagementScene__WEBPACK_IMPORTED_MODULE_11__.DataManagementTab.EventDefinitions:_DataManagementScene__WEBPACK_IMPORTED_MODULE_11__.DataManagementTab.PropertyDefinitions,name:isEvent?"Events":"Properties",path:isEvent?scenes_urls__WEBPACK_IMPORTED_MODULE_7__.j.eventDefinitions():scenes_urls__WEBPACK_IMPORTED_MODULE_7__.j.propertyDefinitions()},{key:[isEvent?scenes_sceneTypes__WEBPACK_IMPORTED_MODULE_6__.x.EventDefinition:scenes_sceneTypes__WEBPACK_IMPORTED_MODULE_6__.x.PropertyDefinition,definition?.id||"new"],name:definition?.id!=="new"&&(0,lib_taxonomy__WEBPACK_IMPORTED_MODULE_5__.R6)(definition?.name,isEvent?lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__.t.Events:lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_4__.t.EventProperties)||"Untitled"}]]}),(0,kea__WEBPACK_IMPORTED_MODULE_0__.afterMount)(_ref5=>{let{actions,values,props}=_ref5;props.id&&"new"!==props.id?actions.loadDefinition(props.id):actions.setDefinition(createNewDefinition(values.isEvent))})])}}]);
//# sourceMappingURL=17066.f257a820.iframe.bundle.js.map