"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[23729],{"./frontend/src/scenes/data-warehouse/DataWarehouseBetaNotice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>DataWarehouseBetaNotice});var _posthog_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_components_Support_supportLogic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/components/Support/supportLogic.ts"),lib_lemon_ui_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/lemon-ui/icons/index.ts"),lib_lemon_ui_LemonBanner__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/lib/lemon-ui/LemonBanner/index.ts"),scenes_PreflightCheck_preflightLogic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/scenes/PreflightCheck/preflightLogic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let DataWarehouseBetaNotice=()=>{let{openSupportForm}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useActions)(lib_components_Support_supportLogic__WEBPACK_IMPORTED_MODULE_3__.Pw),{preflight}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useValues)(scenes_PreflightCheck_preflightLogic__WEBPACK_IMPORTED_MODULE_6__.preflightLogic),showSupportOptions=preflight?.cloud;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lib_lemon_ui_LemonBanner__WEBPACK_IMPORTED_MODULE_5__.V,{type:"info",className:"my-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"flex items-center flex-wrap gap-2 justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"flex-1 min-w-full sm:min-w-0",children:"PostHog Data Warehouse is in Beta. Thanks for taking part! We'd love to hear what you think."}),showSupportOptions?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span",{className:"flex items-center gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.LemonButton,{type:"secondary",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_posthog_icons__WEBPACK_IMPORTED_MODULE_0__.IconBug,{}),onClick:()=>openSupportForm({kind:"bug"}),children:"Report a bug"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.LemonButton,{type:"secondary",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lib_lemon_ui_icons__WEBPACK_IMPORTED_MODULE_4__.Rz,{}),onClick:()=>openSupportForm({kind:"feedback"}),children:"Give feedback"})]}):null]})})}},"./frontend/src/scenes/data-warehouse/new/NewSourceWizard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NewSourceWizard:()=>NewSourceWizard,scene:()=>scene});var src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),PageHeader=__webpack_require__("./frontend/src/lib/components/PageHeader.tsx"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DataWarehouseBetaNotice=__webpack_require__("./frontend/src/scenes/data-warehouse/DataWarehouseBetaNotice.tsx"),sourceWizardLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/new/sourceWizardLogic.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function PostgresSchemaForm(){let{toggleSchemaShouldSync}=(0,index_esm.useActions)(sourceWizardLogic.So),{databaseSchema}=(0,index_esm.useValues)(sourceWizardLogic.So),[toggleAllState,setToggleAllState]=(0,react.useState)(!1),toggleAllSwitches=()=>{databaseSchema.forEach(schema=>{toggleSchemaShouldSync(schema,toggleAllState)}),setToggleAllState(!toggleAllState)};return(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-2",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src.LemonTable,{emptyState:"No schemas found",dataSource:databaseSchema,columns:[{title:"Table",key:"table",render:function RenderTable(_,schema){return schema.table}},{title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children:"Sync"}),(0,jsx_runtime.jsxs)(src.Link,{className:"ml-2 w-[60px] overflow-visible",onClick:()=>toggleAllSwitches(),children:[toggleAllState?"Enable":"Disable"," all"]})]}),key:"should_sync",render:function RenderShouldSync(_,schema){return(0,jsx_runtime.jsx)(src.LemonSwitch,{checked:schema.should_sync,onChange:checked=>{toggleSchemaShouldSync(schema,checked)}})}}]})})})}var lib=__webpack_require__("./node_modules/.pnpm/kea-forms@3.1.3_kea@3.1.5/node_modules/kea-forms/lib/index.js"),LemonField=__webpack_require__("./frontend/src/lib/lemon-ui/LemonField/index.ts");let sourceFieldToElement=field=>{if("switch-group"===field.type)return(0,jsx_runtime.jsx)(LemonField.D,{name:[field.name,"enabled"],label:field.label,children:_ref=>{let{value,onChange}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.LemonSwitch,{checked:value,onChange:onChange}),value&&(0,jsx_runtime.jsx)(lib.Group,{name:field.name,children:field.fields.map(sourceFieldToElement)})]})}},field.name);if("select"===field.type){let hasOptionFields=!!field.options.filter(n=>{var _n$fields$length;return(null!==(_n$fields$length=n.fields?.length)&&void 0!==_n$fields$length?_n$fields$length:0)>0}).length;return(0,jsx_runtime.jsx)(LemonField.D,{name:hasOptionFields?[field.name,"selection"]:field.name,label:field.label,children:_ref2=>{let{value,onChange}=_ref2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.LemonSelect,{options:field.options,value:null!=value?value:field.defaultValue,onChange:onChange}),(0,jsx_runtime.jsx)(lib.Group,{name:field.name,children:field.options.find(n=>n.value===(null!=value?value:field.defaultValue))?.fields?.map(sourceFieldToElement)})]})}},field.name)}return"textarea"===field.type?(0,jsx_runtime.jsx)(LemonField.D,{name:field.name,label:field.label,children:(0,jsx_runtime.jsx)(src.LemonTextArea,{className:"ph-ignore-input","data-attr":field.name,placeholder:field.placeholder,minRows:4})},field.name):(0,jsx_runtime.jsx)(LemonField.D,{name:field.name,label:field.label,children:(0,jsx_runtime.jsx)(src.LemonInput,{className:"ph-ignore-input","data-attr":field.name,placeholder:field.placeholder,type:field.type})},field.name)};function SourceForm(_ref3){let{sourceConfig}=_ref3;return(0,jsx_runtime.jsxs)(lib.Form,{logic:sourceWizardLogic.So,formKey:"sourceConnectionDetails",className:"space-y-4",enableFormOnSubmit:!0,children:[(0,jsx_runtime.jsx)(lib.Group,{name:"payload",children:sourceWizardLogic.l2[sourceConfig.name].fields.map(field=>sourceFieldToElement(field))}),(0,jsx_runtime.jsx)(LemonField.D,{name:"prefix",label:"Table Prefix (optional)",children:(0,jsx_runtime.jsx)(src.LemonInput,{className:"ph-ignore-input","data-attr":"prefix",placeholder:"internal_"})})]})}var dataWarehouseSettingsLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/settings/dataWarehouseSettingsLogic.ts"),urls=__webpack_require__("./frontend/src/scenes/urls.ts"),queries_schema=__webpack_require__("./frontend/src/queries/schema.ts");let SyncProgressStep=()=>{var _source$schemas;let{sourceId}=(0,index_esm.useValues)(sourceWizardLogic.So),{cancelWizard}=(0,index_esm.useActions)(sourceWizardLogic.So),{dataWarehouseSources,dataWarehouseSourcesLoading}=(0,index_esm.useValues)(dataWarehouseSettingsLogic.T),source=dataWarehouseSources?.results.find(n=>n.id===sourceId),schemas=null!==(_source$schemas=source?.schemas)&&void 0!==_source$schemas?_source$schemas:[],getSyncStatus=schema=>schema.should_sync?"Running"===schema.status?{status:"Syncing...",tagType:"primary"}:"Completed"===schema.status?{status:"Completed",tagType:"success"}:{status:"Error",tagType:"danger"}:{status:"Not synced",tagType:"default"};return(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-2",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src.LemonTable,{emptyState:"No schemas selected",dataSource:schemas,loading:dataWarehouseSourcesLoading,disableTableWhileLoading:!1,columns:[{title:"Table",key:"table",render:function RenderTable(_,schema){return schema.name}},{title:"Status",key:"status",render:function RenderStatus(_,schema){let{status,tagType}=getSyncStatus(schema);return(0,jsx_runtime.jsx)(src.LemonTag,{type:tagType,children:status})}},{key:"actions",width:0,render:function RenderStatus(_,schema){if(schema.table&&"Completed"===schema.status){let query={kind:queries_schema.OH.DataTableNode,full:!0,source:{kind:queries_schema.OH.HogQLQuery,query:`SELECT ${schema.table.columns.filter(_ref=>{let{table,fields,chain,schema_valid}=_ref;return!table&&!fields&&!chain&&schema_valid}).map(_ref2=>{let{name}=_ref2;return name})} FROM ${"numbers"===schema.table.name?"numbers(0, 10)":schema.table.name} LIMIT 100`}};return(0,jsx_runtime.jsx)(src.LemonButton,{className:"my-1",type:"primary",onClick:()=>cancelWizard(),to:urls.j.insightNew(void 0,void 0,JSON.stringify(query)),children:"Query"})}return""}}]})})})};var dataWarehouseTableLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/new/dataWarehouseTableLogic.tsx");let ProviderMappings={aws:{fileUrlPatternPlaceholder:"eg: https://your-org.s3.amazonaws.com/airbyte/stripe/invoices/*.pqt",accessKeyPlaceholder:"eg: AKIAIOSFODNN7EXAMPLE",accessKeyLabel:"Access key",accessSecretLabel:"Access secret"},"google-cloud":{fileUrlPatternPlaceholder:"eg: https://storage.googleapis.com/your-org/airbyte/stripe/invoices/*.pqt",accessKeyPlaceholder:"eg: GOOGTS7C7FUP3AIRVEXAMPLE",accessKeyLabel:"Access ID",accessSecretLabel:"Secret"},"cloudflare-r2":{fileUrlPatternPlaceholder:"eg: https://your-account-id.r2.cloudflarestorage.com/airbyte/stripe/invoices/*.pqt",accessKeyPlaceholder:"eg: AKIAIOSFODNN7EXAMPLE",accessKeyLabel:"Access key",accessSecretLabel:"Access secret"}};function DatawarehouseTableForm(){let{manualLinkingProvider}=(0,index_esm.useValues)(sourceWizardLogic.So),provider=null!=manualLinkingProvider?manualLinkingProvider:"aws";return(0,jsx_runtime.jsx)(lib.Form,{formKey:"table",logic:dataWarehouseTableLogic.U,className:"space-y-4",enableFormOnSubmit:!0,autoComplete:"off",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-2 max-w-160",children:[(0,jsx_runtime.jsx)(LemonField.D,{name:"name",label:"Table name",children:(0,jsx_runtime.jsx)(src.LemonInput,{"data-attr":"table-name",className:"ph-ignore-input",placeholder:"Examples: stripe_invoice, hubspot_contacts, users",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1})}),(0,jsx_runtime.jsx)("div",{className:"text-muted text-xs mb-4",children:"This will be the table name used when writing queries"}),(0,jsx_runtime.jsx)(LemonField.D,{name:"url_pattern",label:"Files URL pattern",children:(0,jsx_runtime.jsx)(src.LemonInput,{"data-attr":"table-name",className:"ph-ignore-input",placeholder:ProviderMappings[provider].fileUrlPatternPlaceholder,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1})}),(0,jsx_runtime.jsxs)("div",{className:"text-muted text-xs mb-4",children:["You can use ",(0,jsx_runtime.jsx)("strong",{children:"*"})," to select multiple files."]}),(0,jsx_runtime.jsx)(LemonField.D,{name:"format",label:"File format",className:"w-max mb-4",children:(0,jsx_runtime.jsx)(src.LemonSelect,{"data-attr":"table-format",options:[{label:"Parquet (recommended)",value:"Parquet"},{label:"CSV",value:"CSV"},{label:"JSON",value:"JSONEachRow"}]})}),(0,jsx_runtime.jsx)(LemonField.D,{name:["credential","access_key"],label:ProviderMappings[provider].accessKeyLabel,children:(0,jsx_runtime.jsx)(src.LemonInput,{"data-attr":"access-key",className:"ph-ignore-input",placeholder:ProviderMappings[provider].accessKeyPlaceholder,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1})}),(0,jsx_runtime.jsx)(LemonField.D,{name:["credential","access_secret"],label:ProviderMappings[provider].accessSecretLabel,children:(0,jsx_runtime.jsx)(src.LemonInput,{"data-attr":"access-secret",className:"ph-ignore-input",type:"password",placeholder:"eg: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1})}),"google-cloud"===provider&&(0,jsx_runtime.jsxs)("div",{className:"text-muted text-xs",children:["We use HMAC keys to access your Google Cloud Storage. Find more about generating them"," ",(0,jsx_runtime.jsx)(src.Link,{to:"https://cloud.google.com/storage/docs/authentication/hmackeys",target:"_new",children:"here"})]})]})})}var DataWarehouseSourcesTable=__webpack_require__("./frontend/src/scenes/data-warehouse/settings/DataWarehouseSourcesTable.tsx");let scene={component:NewSourceWizard,logic:sourceWizardLogic.So};function NewSourceWizard(){let{modalTitle,modalCaption}=(0,index_esm.useValues)(sourceWizardLogic.So),{onBack,onSubmit,closeWizard}=(0,index_esm.useActions)(sourceWizardLogic.So),{currentStep,isLoading,canGoBack,canGoNext,nextButtonText,showSkipButton}=(0,index_esm.useValues)(sourceWizardLogic.So),{tableLoading:manualLinkIsLoading}=(0,index_esm.useValues)(dataWarehouseTableLogic.U),footer=(0,react.useCallback)(()=>1===currentStep?null:(0,jsx_runtime.jsxs)("div",{className:"mt-2 flex flex-row justify-end gap-2",children:[(0,jsx_runtime.jsx)(src.LemonButton,{type:"secondary",center:!0,"data-attr":"source-modal-back-button",onClick:onBack,disabledReason:!canGoBack&&"You cant go back from here",children:"Back"}),(0,jsx_runtime.jsx)(src.LemonButton,{loading:isLoading||manualLinkIsLoading,disabledReason:!canGoNext&&"You cant click next yet",type:"primary",center:!0,onClick:()=>onSubmit(),"data-attr":"source-link",children:nextButtonText})]}),[currentStep,isLoading,manualLinkIsLoading,canGoNext,canGoBack,nextButtonText,showSkipButton]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(PageHeader.m,{buttons:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(src.LemonButton,{type:"secondary",center:!0,"data-attr":"source-form-cancel-button",onClick:closeWizard,children:"Cancel"})})}),(0,jsx_runtime.jsx)(DataWarehouseBetaNotice.W,{}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:modalTitle}),(0,jsx_runtime.jsx)("p",{children:modalCaption}),(0,jsx_runtime.jsx)(FirstStep,{}),(0,jsx_runtime.jsx)(SecondStep,{}),(0,jsx_runtime.jsx)(ThirdStep,{}),(0,jsx_runtime.jsx)(FourthStep,{}),footer()]})]})}function ModalPage(_ref){let{children,page}=_ref,{currentStep}=(0,index_esm.useValues)(sourceWizardLogic.So);return currentStep!==page?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}):(0,jsx_runtime.jsx)("div",{children:children})}function FirstStep(){let{connectors,manualConnectors,addToHubspotButtonUrl}=(0,index_esm.useValues)(sourceWizardLogic.So),{selectConnector,toggleManualLinkFormVisible,onNext,setManualLinkingProvider}=(0,index_esm.useActions)(sourceWizardLogic.So),onClick=sourceConfig=>{"Hubspot"==sourceConfig.name?window.open(addToHubspotButtonUrl()):selectConnector(sourceConfig),onNext()},onManualLinkClick=manulLinkSource=>{toggleManualLinkFormVisible(!0),setManualLinkingProvider(manulLinkSource)};return(0,jsx_runtime.jsxs)(ModalPage,{page:1,children:[(0,jsx_runtime.jsx)("h2",{className:"mt-4",children:"Managed by PostHog"}),(0,jsx_runtime.jsxs)("span",{children:["Data will be synced to PostHog and regularly refreshed."," ",(0,jsx_runtime.jsx)(src.Link,{to:"https://posthog.com/docs/data-warehouse/setup#stripe",children:"Learn more"})]}),(0,jsx_runtime.jsx)(src.LemonTable,{dataSource:connectors,loading:!1,disableTableWhileLoading:!1,columns:[{title:"Source",width:0,render:function RenderAppInfo(_,sourceConfig){return(0,jsx_runtime.jsx)(DataWarehouseSourcesTable.MX,{type:sourceConfig.name})}},{title:"Name",key:"name",render:function RenderName(_,sourceConfig){return(0,jsx_runtime.jsx)("span",{className:"font-semibold text-sm gap-1",children:sourceConfig.name})}},{key:"actions",width:0,render:function RenderActions(_,sourceConfig){return(0,jsx_runtime.jsx)("div",{className:"flex flex-row justify-end",children:(0,jsx_runtime.jsx)(src.LemonButton,{onClick:()=>onClick(sourceConfig),className:"my-2",type:"primary",children:"Link"})})}}]}),(0,jsx_runtime.jsx)("h2",{className:"mt-4",children:"Self Managed"}),(0,jsx_runtime.jsxs)("span",{children:["Data will be queried directly from your data source that you manage."," ",(0,jsx_runtime.jsx)(src.Link,{to:"https://posthog.com/docs/data-warehouse/setup#linking-a-custom-source",children:"Learn more"})]}),(0,jsx_runtime.jsx)(src.LemonTable,{dataSource:manualConnectors,loading:!1,disableTableWhileLoading:!1,columns:[{title:"Source",width:0,render:function RenderAppInfo(_,sourceConfig){return(0,jsx_runtime.jsx)(DataWarehouseSourcesTable.MX,{type:sourceConfig.type})}},{title:"Name",key:"name",render:function RenderName(_,sourceConfig){return(0,jsx_runtime.jsx)("span",{className:"font-semibold text-sm gap-1",children:sourceConfig.name})}},{key:"actions",width:0,render:function RenderActions(_,sourceConfig){return(0,jsx_runtime.jsx)("div",{className:"flex flex-row justify-end",children:(0,jsx_runtime.jsx)(src.LemonButton,{onClick:()=>onManualLinkClick(sourceConfig.type),className:"my-2",type:"primary",children:"Link"})})}}]})]})}function SecondStep(){let{selectedConnector}=(0,index_esm.useValues)(sourceWizardLogic.So);return(0,jsx_runtime.jsx)(ModalPage,{page:2,children:selectedConnector?(0,jsx_runtime.jsx)(SourceForm,{sourceConfig:selectedConnector}):(0,jsx_runtime.jsx)(DatawarehouseTableForm,{})})}function ThirdStep(){return(0,jsx_runtime.jsx)(ModalPage,{page:3,children:(0,jsx_runtime.jsx)(PostgresSchemaForm,{})})}function FourthStep(){return(0,jsx_runtime.jsx)(ModalPage,{page:4,children:(0,jsx_runtime.jsx)(SyncProgressStep,{})})}}}]);