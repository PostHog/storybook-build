"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[3110,48861],{"./frontend/src/scenes/data-warehouse/DataWarehouseInitialBillingLimitNotice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>DataWarehouseInitialBillingLimitNotice});var index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),LemonBanner=__webpack_require__("./frontend/src/lib/lemon-ui/LemonBanner/index.ts"),urls=__webpack_require__("./frontend/src/scenes/urls.ts"),billingLogic=__webpack_require__("./frontend/src/scenes/billing/billingLogic.tsx"),billingProductLogic=__webpack_require__("./frontend/src/scenes/billing/billingProductLogic.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let InitialBillingLimitNoticeContents=_ref=>{let{product}=_ref,{currentAndUpgradePlans,hasCustomLimitSet,customLimitUsd}=(0,index_esm.useValues)((0,billingProductLogic.c)({product})),initialBillingLimit=currentAndUpgradePlans?.currentPlan?.initial_billing_limit,isUsingInitialBillingLimit=hasCustomLimitSet&&currentAndUpgradePlans?.currentPlan?.initial_billing_limit==customLimitUsd;return isUsingInitialBillingLimit?(0,jsx_runtime.jsxs)(LemonBanner.V,{type:"info",className:"my-4",action:{type:"primary",children:"Change limit",to:urls.j.organizationBilling([product.type])},dismissKey:`initial-billing-limit-notice-${product.type}`,children:[(0,jsx_runtime.jsxs)("p",{className:"flex-1 min-w-full sm:min-w-0",children:["Default initial billing limit of ",(0,jsx_runtime.jsxs)("b",{className:"text-primary",children:["$",initialBillingLimit]})," active."]}),(0,jsx_runtime.jsx)("p",{className:"font-normal",children:"This protects you from accidentally incurring large unexpected charges. Some features may stop working and data may be dropped if your usage exceeds your limit."})]}):null},InitialBillingLimitNotice=_ref2=>{let{product_key}=_ref2,{billing}=(0,index_esm.useValues)(billingLogic.kr),product=billing?.products.find(p=>p.type===product_key);return product?(0,jsx_runtime.jsx)(InitialBillingLimitNoticeContents,{product:product}):null};var types=__webpack_require__("./frontend/src/types.ts"),dataWarehouseSettingsLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/settings/dataWarehouseSettingsLogic.ts");let DataWarehouseInitialBillingLimitNotice=()=>{let{dataWarehouseSources,selfManagedTables}=(0,index_esm.useValues)(dataWarehouseSettingsLogic.T),hasSources=dataWarehouseSources?.results&&dataWarehouseSources?.results.length>0||selfManagedTables?.length>0;return hasSources?(0,jsx_runtime.jsx)(InitialBillingLimitNotice,{product_key:types.Md.DATA_WAREHOUSE}):null}},"./frontend/src/scenes/data-warehouse/external/forms/SyncMethodForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>SyncMethodForm});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),lib_lemon_ui_LemonRadio__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/lib/lemon-ui/LemonRadio/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let getIncrementalSyncSupported=schema=>schema.incremental_available?0===schema.incremental_fields.length?{disabled:!0,disabledReason:"No incremental fields found on table"}:{disabled:!1}:{disabled:!0,disabledReason:"Incremental append replication isn't supported on this table"},hasInputChanged=(newSchemaSyncType,newSchemaIncrementalField,originalSchemaSyncType,originalSchemaIncrementalField)=>originalSchemaSyncType!==newSchemaSyncType||"incremental"===newSchemaSyncType&&newSchemaIncrementalField!==originalSchemaIncrementalField,getSaveDisabledReason=(syncType,incrementalField)=>syncType?"incremental"!==syncType||incrementalField?void 0:"You must select an incremental field":"You must select a sync method before saving",SyncMethodForm=_ref=>{var _schema$sync_type,_schema$incremental_f,_schema$sync_type2,_schema$incremental_f2,_schema$incremental_f4;let{schema,onClose,onSave,saveButtonIsLoading,showRefreshMessageOnChange}=_ref,[originalSchemaSyncType]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null!==(_schema$sync_type=schema.sync_type)&&void 0!==_schema$sync_type?_schema$sync_type:null),[originalSchemaIncrementalField]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null!==(_schema$incremental_f=schema.incremental_field)&&void 0!==_schema$incremental_f?_schema$incremental_f:null),[radioValue,setRadioValue]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null!==(_schema$sync_type2=schema.sync_type)&&void 0!==_schema$sync_type2?_schema$sync_type2:void 0),[incrementalFieldValue,setIncrementalFieldValue]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null!==(_schema$incremental_f2=schema.incremental_field)&&void 0!==_schema$incremental_f2?_schema$incremental_f2:null);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{var _schema$sync_type3,_schema$incremental_f3;setRadioValue(null!==(_schema$sync_type3=schema.sync_type)&&void 0!==_schema$sync_type3?_schema$sync_type3:void 0),setIncrementalFieldValue(null!==(_schema$incremental_f3=schema.incremental_field)&&void 0!==_schema$incremental_f3?_schema$incremental_f3:null)},[schema.table]);let incrementalSyncSupported=getIncrementalSyncSupported(schema),inputChanged=hasInputChanged(null!=radioValue?radioValue:null,incrementalFieldValue,originalSchemaSyncType,originalSchemaIncrementalField);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lib_lemon_ui_LemonRadio__WEBPACK_IMPORTED_MODULE_1__._,{radioPosition:"top",value:radioValue,options:[{value:"incremental",disabledReason:incrementalSyncSupported.disabled&&incrementalSyncSupported.disabledReason||void 0,label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"mb-6 font-normal",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"items-center flex leading-[normal] overflow-hidden mb-2.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{className:"mb-0 mr-2",children:"Incremental append replication"}),!incrementalSyncSupported.disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.oe,{type:"success",children:"Recommended"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"When using incremental append replication, we'll store the max value of the below field on each sync and only sync rows with greater or equal value on the next run."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{children:["You should pick a field that increments for each row, such as a"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"created_at"})," timestamp."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{children:["This method will append all new rows to your existing table - this means duplicate data can exist if the incremental field updates for updated rows (such as when using an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"updated_at"})," field)"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Yv,{value:incrementalFieldValue,onChange:newValue=>setIncrementalFieldValue(newValue),options:null!==(_schema$incremental_f4=schema.incremental_fields.map(n=>({value:n.field,label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"leading-5",children:n.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.oe,{className:"ml-2",type:"success",children:n.type})]})})))&&void 0!==_schema$incremental_f4?_schema$incremental_f4:[],disabledReason:incrementalSyncSupported.disabled?"":void 0})]})},{value:"full_refresh",label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"mb-6 font-normal",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"items-center flex leading-[normal] overflow-hidden mb-2.5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{className:"mb-0 mr-2",children:"Full table replication"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"We'll replicate the whole table on every sync. This can take longer to sync and increase your monthly billing."})]})}],onChange:newValue=>setRadioValue(newValue)}),inputChanged&&showRefreshMessageOnChange&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"text-danger",children:"Note: Changing the sync type or incremental append replication field will trigger a full table refresh"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"flex flex-row justify-end w-full",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Jp,{className:"mr-3",type:"secondary",onClick:onClose,children:"Close"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Jp,{type:"primary",loading:saveButtonIsLoading,disabledReason:getSaveDisabledReason(radioValue,incrementalFieldValue),onClick:()=>{if("incremental"===radioValue){let fieldSelected=schema.incremental_fields.find(n=>n.field===incrementalFieldValue);if(!fieldSelected){_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.UJ.error("Selected field for incremental append replication not found");return}onSave("incremental",incrementalFieldValue,fieldSelected.field_type)}else onSave("full_refresh",null,null)},children:"Save"})]})]})}},"./frontend/src/scenes/data-warehouse/new/NewSourceWizard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NewSourceWizardScene:()=>NewSourceWizardScene,NewSourcesWizard:()=>NewSourcesWizard,scene:()=>scene});var src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),PageHeader=__webpack_require__("./frontend/src/lib/components/PageHeader.tsx"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DataWarehouseInitialBillingLimitNotice=__webpack_require__("./frontend/src/scenes/data-warehouse/DataWarehouseInitialBillingLimitNotice.tsx"),sourceWizardLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/new/sourceWizardLogic.tsx"),SyncMethodForm=__webpack_require__("./frontend/src/scenes/data-warehouse/external/forms/SyncMethodForm.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function SchemaForm(){let{toggleSchemaShouldSync,openSyncMethodModal}=(0,index_esm.useActions)(sourceWizardLogic.So),{databaseSchema}=(0,index_esm.useValues)(sourceWizardLogic.So);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-2",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src.g3,{emptyState:"No schemas found",dataSource:databaseSchema,columns:[{width:0,key:"enabled",render:(_,schema)=>(0,jsx_runtime.jsx)(src.Hw,{checked:schema.should_sync,onChange:checked=>{toggleSchemaShouldSync(schema,checked)},disabledReason:null===schema.sync_type?"Please set up a sync method first":void 0})},{title:"Table",key:"table",render:function RenderTable(_,schema){return schema.table}},{key:"sync_type",title:"Sync method",align:"right",tooltip:"Full refresh will refresh the full table on every sync, whereas incremental will only sync new and updated rows since the last sync",render:(_,schema)=>schema.sync_type?(0,jsx_runtime.jsx)("div",{className:"justify-end flex",children:(0,jsx_runtime.jsx)(src.Jp,{className:"my-1",size:"small",type:"secondary",onClick:()=>openSyncMethodModal(schema),children:"full_refresh"===schema.sync_type?"Full refresh":"Incremental"})}):(0,jsx_runtime.jsx)("div",{className:"justify-end flex",children:(0,jsx_runtime.jsx)(src.Jp,{className:"my-1",type:"primary",onClick:()=>openSyncMethodModal(schema),children:"Set up"})})}]})})}),(0,jsx_runtime.jsx)(SyncMethodModal,{})]})}let SyncMethodModal=()=>{let{cancelSyncMethodModal,updateSchemaSyncType,toggleSchemaShouldSync}=(0,index_esm.useActions)(sourceWizardLogic.So),{syncMethodModalOpen,currentSyncMethodModalSchema}=(0,index_esm.useValues)(sourceWizardLogic.So);return currentSyncMethodModalSchema?(0,jsx_runtime.jsx)(src.fQ,{title:`Sync method for ${currentSyncMethodModalSchema.table}`,isOpen:syncMethodModalOpen,onClose:cancelSyncMethodModal,children:(0,jsx_runtime.jsx)(SyncMethodForm.m,{schema:currentSyncMethodModalSchema,onClose:cancelSyncMethodModal,onSave:(syncType,incrementalField,incrementalFieldType)=>{"incremental"===syncType?updateSchemaSyncType(currentSyncMethodModalSchema,syncType,incrementalField,incrementalFieldType):updateSchemaSyncType(currentSyncMethodModalSchema,null!=syncType?syncType:null,null,null),toggleSchemaShouldSync(currentSyncMethodModalSchema,!0),cancelSyncMethodModal()}})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})};var lib=__webpack_require__("./node_modules/.pnpm/kea-forms@3.2.0_kea@3.1.5/node_modules/kea-forms/lib/index.js"),LemonField=__webpack_require__("./frontend/src/lib/lemon-ui/LemonField/index.ts"),IntegrationChoice=__webpack_require__("./frontend/src/scenes/pipeline/hogfunctions/integrations/IntegrationChoice.tsx");function DataWarehouseIntegrationChoice(_ref){let{sourceConfig,...props}=_ref;return(0,jsx_runtime.jsx)(IntegrationChoice.a,{...props,integration:sourceConfig.name.toLowerCase(),redirectUrl:`/data-warehouse/new?kind=${sourceConfig.name.toLowerCase()}`})}let sourceFieldToElement=(field,sourceConfig)=>{if("switch-group"===field.type)return(0,jsx_runtime.jsx)(LemonField.D,{name:[field.name,"enabled"],label:field.label,children:_ref=>{let{value,onChange}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.f4,{checked:value,onChange:onChange}),value&&(0,jsx_runtime.jsx)(lib.Group,{name:field.name,children:field.fields.map(field=>sourceFieldToElement(field,sourceConfig))})]})}},field.name);if("select"===field.type){let hasOptionFields=!!field.options.filter(n=>{var _n$fields$length;return(null!==(_n$fields$length=n.fields?.length)&&void 0!==_n$fields$length?_n$fields$length:0)>0}).length;return(0,jsx_runtime.jsx)(LemonField.D,{name:hasOptionFields?[field.name,"selection"]:field.name,label:field.label,children:_ref2=>{let{value,onChange}=_ref2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Yv,{options:field.options,value:null!=value?value:field.defaultValue,onChange:onChange}),(0,jsx_runtime.jsx)(lib.Group,{name:field.name,children:field.options.find(n=>n.value===(null!=value?value:field.defaultValue))?.fields?.map(field=>sourceFieldToElement(field,sourceConfig))})]})}},field.name)}return"textarea"===field.type?(0,jsx_runtime.jsx)(LemonField.D,{name:field.name,label:field.label,children:(0,jsx_runtime.jsx)(src._V,{className:"ph-ignore-input","data-attr":field.name,placeholder:field.placeholder,minRows:4})},field.name):"oauth"===field.type?(0,jsx_runtime.jsx)(LemonField.D,{name:field.name,label:field.label,children:_ref3=>{let{value,onChange}=_ref3;return(0,jsx_runtime.jsx)(DataWarehouseIntegrationChoice,{sourceConfig:sourceConfig,value:value,onChange:onChange},field.name)}},field.name):(0,jsx_runtime.jsx)(LemonField.D,{name:field.name,label:field.label,children:(0,jsx_runtime.jsx)(src.DF,{className:"ph-ignore-input","data-attr":field.name,placeholder:field.placeholder,type:field.type})},field.name)};function SourceForm(_ref4){let{sourceConfig}=_ref4,{source}=(0,index_esm.useValues)(sourceWizardLogic.So),showSourceFields=!sourceWizardLogic.l2[sourceConfig.name].showSourceForm||sourceWizardLogic.l2[sourceConfig.name].showSourceForm?.(source.payload),showPrefix=!sourceWizardLogic.l2[sourceConfig.name].showPrefix||sourceWizardLogic.l2[sourceConfig.name].showPrefix?.(source.payload);return(0,jsx_runtime.jsxs)(lib.Form,{logic:sourceWizardLogic.So,formKey:"sourceConnectionDetails",className:"space-y-4",enableFormOnSubmit:!0,children:[showSourceFields&&(0,jsx_runtime.jsx)(lib.Group,{name:"payload",children:sourceWizardLogic.l2[sourceConfig.name].fields.map(field=>sourceFieldToElement(field,sourceConfig))}),showPrefix&&(0,jsx_runtime.jsx)(LemonField.D,{name:"prefix",label:"Table Prefix (optional)",children:(0,jsx_runtime.jsx)(src.DF,{className:"ph-ignore-input","data-attr":"prefix",placeholder:"internal_"})})]})}var dataWarehouseSettingsLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/settings/dataWarehouseSettingsLogic.ts"),utils=__webpack_require__("./frontend/src/scenes/data-warehouse/utils.ts"),urls=__webpack_require__("./frontend/src/scenes/urls.ts");let SyncProgressStep=()=>{var _source$schemas;let{sourceId,isWrapped}=(0,index_esm.useValues)(sourceWizardLogic.So),{cancelWizard}=(0,index_esm.useActions)(sourceWizardLogic.So),{dataWarehouseSources,dataWarehouseSourcesLoading}=(0,index_esm.useValues)(dataWarehouseSettingsLogic.T),source=dataWarehouseSources?.results.find(n=>n.id===sourceId),schemas=null!==(_source$schemas=source?.schemas)&&void 0!==_source$schemas?_source$schemas:[],getSyncStatus=schema=>schema.should_sync?"Running"===schema.status?{status:"Syncing...",tagType:"primary"}:"Completed"===schema.status?{status:"Completed",tagType:"success"}:{status:"Error",tagType:"danger"}:{status:"Not synced",tagType:"default"},columns=[{title:"Table",key:"table",render:function RenderTable(_,schema){return schema.name}},{title:"Status",key:"status",render:function RenderStatus(_,schema){let{status,tagType}=getSyncStatus(schema);return(0,jsx_runtime.jsx)(src.oe,{type:tagType,children:status})}}];return isWrapped||columns.push({key:"actions",width:0,render:function RenderStatus(_,schema){if(schema.table&&"Completed"===schema.status){let query=(0,utils.w)(schema.table.name,schema.table.columns);return(0,jsx_runtime.jsx)(src.Jp,{className:"my-1",type:"primary",onClick:()=>cancelWizard(),to:urls.j.insightNew(void 0,void 0,query),children:"Query"})}return""}}),(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-2",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src.g3,{emptyState:"No schemas selected",dataSource:schemas,loading:dataWarehouseSourcesLoading,disableTableWhileLoading:!1,columns:columns})})})};var dataWarehouseTableLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/new/dataWarehouseTableLogic.tsx");let ProviderMappings={aws:{fileUrlPatternPlaceholder:"eg: https://your-org.s3.amazonaws.com/airbyte/stripe/invoices/*.pqt",accessKeyPlaceholder:"eg: AKIAIOSFODNN7EXAMPLE",accessKeyLabel:"Access key",accessSecretLabel:"Access secret"},"google-cloud":{fileUrlPatternPlaceholder:"eg: https://storage.googleapis.com/your-org/airbyte/stripe/invoices/*.pqt",accessKeyPlaceholder:"eg: GOOGTS7C7FUP3AIRVEXAMPLE",accessKeyLabel:"Access ID",accessSecretLabel:"Secret"},"cloudflare-r2":{fileUrlPatternPlaceholder:"eg: https://your-account-id.r2.cloudflarestorage.com/airbyte/stripe/invoices/*.pqt",accessKeyPlaceholder:"eg: AKIAIOSFODNN7EXAMPLE",accessKeyLabel:"Access key",accessSecretLabel:"Access secret"},azure:{fileUrlPatternPlaceholder:"https://your-storage-container.blob.core.windows.net/airbyte/stripe/invoices/*.parquet",accessKeyPlaceholder:"your-storage-container",accessKeyLabel:"Storage account name",accessSecretLabel:"Account key"}};function DatawarehouseTableForm(){let{manualLinkingProvider}=(0,index_esm.useValues)(sourceWizardLogic.So),provider=null!=manualLinkingProvider?manualLinkingProvider:"aws";return(0,jsx_runtime.jsx)(lib.Form,{formKey:"table",logic:dataWarehouseTableLogic.U,className:"space-y-4",enableFormOnSubmit:!0,autoComplete:"off",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-2 max-w-160",children:[(0,jsx_runtime.jsx)(LemonField.D,{name:"name",label:"Table name",children:(0,jsx_runtime.jsx)(src.DF,{"data-attr":"table-name",className:"ph-ignore-input",placeholder:"Examples: stripe_invoice, hubspot_contacts, users",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1})}),(0,jsx_runtime.jsx)("div",{className:"text-muted text-xs mb-4",children:"This will be the table name used when writing queries"}),(0,jsx_runtime.jsx)(LemonField.D,{name:"url_pattern",label:"Files URL pattern",children:(0,jsx_runtime.jsx)(src.DF,{"data-attr":"table-name",className:"ph-ignore-input",placeholder:ProviderMappings[provider].fileUrlPatternPlaceholder,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1})}),(0,jsx_runtime.jsxs)("div",{className:"text-muted text-xs mb-4",children:["You can use ",(0,jsx_runtime.jsx)("strong",{children:"*"})," to select multiple files."]}),(0,jsx_runtime.jsx)(LemonField.D,{name:"format",label:"File format",className:"w-max mb-4",children:(0,jsx_runtime.jsx)(src.Yv,{"data-attr":"table-format",options:[{label:"Parquet (recommended)",value:"Parquet"},{label:"CSV",value:"CSV"},{label:"CSV with headers",value:"CSVWithNames"},{label:"JSON",value:"JSONEachRow"},{label:"Delta",value:"Delta"}]})}),(0,jsx_runtime.jsx)(LemonField.D,{name:["credential","access_key"],label:ProviderMappings[provider].accessKeyLabel,children:(0,jsx_runtime.jsx)(src.DF,{"data-attr":"access-key",className:"ph-ignore-input",placeholder:ProviderMappings[provider].accessKeyPlaceholder,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1})}),(0,jsx_runtime.jsx)(LemonField.D,{name:["credential","access_secret"],label:ProviderMappings[provider].accessSecretLabel,children:(0,jsx_runtime.jsx)(src.DF,{"data-attr":"access-secret",className:"ph-ignore-input",type:"password",placeholder:"eg: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1})}),"google-cloud"===provider&&(0,jsx_runtime.jsxs)("div",{className:"text-muted text-xs",children:["We use HMAC keys to access your Google Cloud Storage. Find more about generating them"," ",(0,jsx_runtime.jsx)(src.rU,{to:"https://cloud.google.com/storage/docs/authentication/hmackeys",target:"_new",children:"here"})]})]})})}var DataWarehouseManagedSourcesTable=__webpack_require__("./frontend/src/scenes/data-warehouse/settings/DataWarehouseManagedSourcesTable.tsx");let scene={component:NewSourceWizardScene,logic:sourceWizardLogic.So};function NewSourceWizardScene(){let{closeWizard}=(0,index_esm.useActions)(sourceWizardLogic.So);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(PageHeader.m,{buttons:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(src.Jp,{type:"secondary",center:!0,"data-attr":"source-form-cancel-button",onClick:closeWizard,children:"Cancel"})})}),(0,jsx_runtime.jsx)(NewSourcesWizard,{})]})}function NewSourcesWizard(_ref){let{onComplete}=_ref,wizardLogic=(0,sourceWizardLogic.So)({onComplete}),{modalTitle,modalCaption,isWrapped,currentStep,isLoading,canGoBack,canGoNext,nextButtonText,showSkipButton}=(0,index_esm.useValues)(wizardLogic),{onBack,onSubmit}=(0,index_esm.useActions)(wizardLogic),{tableLoading:manualLinkIsLoading}=(0,index_esm.useValues)(dataWarehouseTableLogic.U),footer=(0,react.useCallback)(()=>1===currentStep?null:(0,jsx_runtime.jsxs)("div",{className:"mt-4 flex flex-row justify-end gap-2",children:[canGoBack&&(0,jsx_runtime.jsx)(src.Jp,{type:"secondary",center:!0,"data-attr":"source-modal-back-button",onClick:onBack,disabledReason:!canGoBack&&"You cant go back from here",children:"Back"}),(0,jsx_runtime.jsx)(src.Jp,{loading:isLoading||manualLinkIsLoading,disabledReason:!canGoNext&&"You cant click next yet",type:"primary",center:!0,onClick:()=>onSubmit(),"data-attr":"source-link",children:nextButtonText})]}),[currentStep,isLoading,manualLinkIsLoading,canGoNext,canGoBack,nextButtonText,showSkipButton]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!isWrapped&&(0,jsx_runtime.jsx)(DataWarehouseInitialBillingLimitNotice.g,{}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:modalTitle}),(0,jsx_runtime.jsx)("p",{children:modalCaption}),1===currentStep?(0,jsx_runtime.jsx)(FirstStep,{}):2===currentStep?(0,jsx_runtime.jsx)(SecondStep,{}):3===currentStep?(0,jsx_runtime.jsx)(ThirdStep,{}):4===currentStep?(0,jsx_runtime.jsx)(FourthStep,{}):(0,jsx_runtime.jsx)("div",{children:"Something went wrong..."}),footer()]})]})}function FirstStep(){let{connectors,manualConnectors,addToHubspotButtonUrl}=(0,index_esm.useValues)(sourceWizardLogic.So),{selectConnector,toggleManualLinkFormVisible,onNext,setManualLinkingProvider}=(0,index_esm.useActions)(sourceWizardLogic.So),onClick=sourceConfig=>{"Hubspot"==sourceConfig.name?window.open(addToHubspotButtonUrl()):selectConnector(sourceConfig),onNext()},onManualLinkClick=manulLinkSource=>{toggleManualLinkFormVisible(!0),setManualLinkingProvider(manulLinkSource)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{className:"mt-4",children:"Managed by PostHog"}),(0,jsx_runtime.jsxs)("p",{children:["Data will be synced to PostHog and regularly refreshed."," ",(0,jsx_runtime.jsx)(src.rU,{to:"https://posthog.com/docs/data-warehouse/setup#stripe",children:"Learn more"})]}),(0,jsx_runtime.jsx)(src.g3,{dataSource:connectors,loading:!1,disableTableWhileLoading:!1,columns:[{title:"Source",width:0,render:function RenderAppInfo(_,sourceConfig){return(0,jsx_runtime.jsx)(DataWarehouseManagedSourcesTable.MX,{type:sourceConfig.name})}},{title:"Name",key:"name",render:function RenderName(_,sourceConfig){var _sourceConfig$label;return(0,jsx_runtime.jsx)("span",{className:"font-semibold text-sm gap-1",children:null!==(_sourceConfig$label=sourceConfig.label)&&void 0!==_sourceConfig$label?_sourceConfig$label:sourceConfig.name})}},{key:"actions",width:0,render:function RenderActions(_,sourceConfig){return(0,jsx_runtime.jsx)("div",{className:"flex flex-row justify-end",children:(0,jsx_runtime.jsx)(src.Jp,{onClick:()=>onClick(sourceConfig),className:"my-2",type:"primary",children:"Link"})})}}]}),(0,jsx_runtime.jsx)("h2",{className:"mt-4",children:"Self Managed"}),(0,jsx_runtime.jsxs)("p",{children:["Data will be queried directly from your data source that you manage."," ",(0,jsx_runtime.jsx)(src.rU,{to:"https://posthog.com/docs/data-warehouse/setup#linking-a-custom-source",children:"Learn more"})]}),(0,jsx_runtime.jsx)(src.g3,{dataSource:manualConnectors,loading:!1,disableTableWhileLoading:!1,columns:[{title:"Source",width:0,render:function RenderAppInfo(_,sourceConfig){return(0,jsx_runtime.jsx)(DataWarehouseManagedSourcesTable.MX,{type:sourceConfig.type})}},{title:"Name",key:"name",render:function RenderName(_,sourceConfig){return(0,jsx_runtime.jsx)("span",{className:"font-semibold text-sm gap-1",children:sourceConfig.name})}},{key:"actions",width:0,render:function RenderActions(_,sourceConfig){return(0,jsx_runtime.jsx)("div",{className:"flex flex-row justify-end",children:(0,jsx_runtime.jsx)(src.Jp,{onClick:()=>onManualLinkClick(sourceConfig.type),className:"my-2",type:"primary",children:"Link"})})}}]})]})}function SecondStep(){let{selectedConnector}=(0,index_esm.useValues)(sourceWizardLogic.So);return selectedConnector?(0,jsx_runtime.jsx)(SourceForm,{sourceConfig:selectedConnector}):(0,jsx_runtime.jsx)(DatawarehouseTableForm,{})}function ThirdStep(){return(0,jsx_runtime.jsx)(SchemaForm,{})}function FourthStep(){return(0,jsx_runtime.jsx)(SyncProgressStep,{})}},"./frontend/src/scenes/data-warehouse/settings/DataWarehouseManagedSourcesTable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lL:()=>DataWarehouseManagedSourcesTable,MX:()=>RenderDataWarehouseSourceIcon});var src=__webpack_require__("./frontend/@posthog/apps-common/src/index.ts"),lemon_ui_src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),More=__webpack_require__("./frontend/src/lib/lemon-ui/LemonButton/More.tsx"),LemonTableLink=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTable/LemonTableLink.tsx"),aws_s3=__webpack_require__("./frontend/public/services/aws-s3.png");let azure=__webpack_require__.p+"images/azure.af1ab71d57e8348437183a694553a45f.png",cloudflare=__webpack_require__.p+"images/cloudflare.ac2b10d48ae784e080e8f5be0b4d19cb.png",google_cloud_storage=__webpack_require__.p+"images/google-cloud-storage.e1bd2d5efb0bf56cf48e9e90cd2c6c3a.png";var hubspot=__webpack_require__("./frontend/public/services/hubspot.png");let mysql=__webpack_require__.p+"images/mysql.7912374cef9be6a09530b67289e766b5.png";var postgres=__webpack_require__("./frontend/public/services/postgres.png"),salesforce=__webpack_require__("./frontend/public/services/salesforce.png"),snowflake=__webpack_require__("./frontend/public/services/snowflake.png");let sql_azure=__webpack_require__.p+"images/sql-azure.be99f21a93dbdf9b0e2092e1bd3f9f70.png",stripe=__webpack_require__.p+"images/stripe.675a1480d2e5d55e32e3e9e0dc54b92e.png",vitally=__webpack_require__.p+"images/vitally.2399d8a0e27a2b9b051d4500481e3009.png",zendesk=__webpack_require__.p+"images/zendesk.4febb7199e1b2b53c901089ce7fcccd1.png";var urls=__webpack_require__("./frontend/src/scenes/urls.ts"),types=__webpack_require__("./frontend/src/types.ts"),sourceWizardLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/new/sourceWizardLogic.tsx"),dataWarehouseSettingsLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/settings/dataWarehouseSettingsLogic.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let StatusTagSetting={Running:"primary",Completed:"success",Error:"danger",Failed:"danger","Billing limits":"danger"};function DataWarehouseManagedSourcesTable(){var _dataWarehouseSources;let{dataWarehouseSources,dataWarehouseSourcesLoading,sourceReloadingById}=(0,index_esm.useValues)(dataWarehouseSettingsLogic.T),{deleteSource,reloadSource}=(0,index_esm.useActions)(dataWarehouseSettingsLogic.T);return(0,jsx_runtime.jsx)(lemon_ui_src.g3,{dataSource:null!==(_dataWarehouseSources=dataWarehouseSources?.results)&&void 0!==_dataWarehouseSources?_dataWarehouseSources:[],loading:dataWarehouseSourcesLoading,disableTableWhileLoading:!1,pagination:{pageSize:10},columns:[{width:0,render:function RenderAppInfo(_,source){return(0,jsx_runtime.jsx)(RenderDataWarehouseSourceIcon,{type:source.source_type})}},{title:"Source",key:"name",render:function RenderName(_,source){var _SOURCE_DETAILS$sourc;return(0,jsx_runtime.jsx)(LemonTableLink.i,{to:urls.j.pipelineNode(types.We.Source,`managed-${source.id}`,types.il.Schemas),title:null!==(_SOURCE_DETAILS$sourc=sourceWizardLogic.l2[source.source_type]?.label)&&void 0!==_SOURCE_DETAILS$sourc?_SOURCE_DETAILS$sourc:source.source_type,description:source.prefix})}},{title:"Last Successful Run",key:"last_run_at",tooltip:"Time of the last run that completed a data import",render:(_,run)=>run.last_run_at?(0,jsx_runtime.jsx)(src.w4,{time:run.last_run_at,formatDate:"MMM\xa0DD,\xa0YYYY",formatTime:"HH:mm"}):"Never"},{title:"Total Rows Synced",key:"rows_synced",tooltip:"Total number of rows synced across all schemas in this source",render:function RenderRowsSynced(_,source){return source.schemas.reduce((acc,schema)=>{var _schema$table$row_cou;return acc+(null!==(_schema$table$row_cou=schema.table?.row_count)&&void 0!==_schema$table$row_cou?_schema$table$row_cou:0)},0).toLocaleString()}},{title:"Status",key:"status",render:function RenderStatus(_,source){return(0,jsx_runtime.jsx)(lemon_ui_src.oe,{type:StatusTagSetting[source.status]||"default",children:source.status})}},{key:"actions",width:0,render:function RenderActions(_,source){return(0,jsx_runtime.jsx)("div",{className:"flex flex-row justify-end",children:sourceReloadingById[source.id]?(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(lemon_ui_src.$j,{})}):(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(More.T,{overlay:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(lemon_ui_src.u,{title:"Start the data import for this schema again",children:(0,jsx_runtime.jsx)(lemon_ui_src.Jp,{type:"tertiary","data-attr":`reload-data-warehouse-${source.source_type}`,onClick:()=>{reloadSource(source)},children:"Reload"},`reload-data-warehouse-${source.source_type}`)}),(0,jsx_runtime.jsx)(lemon_ui_src.Jp,{status:"danger","data-attr":`delete-data-warehouse-${source.source_type}`,onClick:()=>{lemon_ui_src.dn.open({title:"Delete data source?",description:"Are you sure you want to delete this data source? All related tables will be deleted.",primaryButton:{children:"Delete",status:"danger",onClick:()=>deleteSource(source)},secondaryButton:{children:"Cancel"}})},children:"Delete"},`delete-data-warehouse-${source.source_type}`)]})})})})}}]})}function RenderDataWarehouseSourceIcon(_ref){let{type,size="small"}=_ref,sizePx="small"===size?30:60,icon={Stripe:stripe,Hubspot:hubspot.Z,Zendesk:zendesk,Postgres:postgres.Z,MySQL:mysql,Snowflake:snowflake.Z,aws:aws_s3.Z,"google-cloud":google_cloud_storage,"cloudflare-r2":cloudflare,azure:azure,Salesforce:salesforce.Z,MSSQL:sql_azure,Vitally:vitally}[type];return(0,jsx_runtime.jsx)("div",{className:"flex items-center gap-4",children:(0,jsx_runtime.jsx)(lemon_ui_src.u,{title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[type,(0,jsx_runtime.jsx)("br",{}),"Click to view docs"]}),children:(0,jsx_runtime.jsx)(lemon_ui_src.rU,{to:types.zD.includes(type)?"https://posthog.com/docs/data-warehouse/setup#step-1-creating-a-bucket-in-s3":`https://posthog.com/docs/data-warehouse/setup#${type.toLowerCase()}`,children:(0,jsx_runtime.jsx)("img",{src:icon,alt:type,height:sizePx,width:sizePx,className:"rounded object-contain"})})})})}},"./frontend/src/scenes/data-warehouse/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>defaultQuery});var _queries_schema__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/queries/schema.ts");let defaultQuery=(table,columns)=>({kind:_queries_schema__WEBPACK_IMPORTED_MODULE_0__.OH.DataVisualizationNode,source:{kind:_queries_schema__WEBPACK_IMPORTED_MODULE_0__.OH.HogQLQuery,query:`SELECT ${columns.filter(_ref=>{let{table,fields,chain,schema_valid}=_ref;return!table&&!fields&&!chain&&schema_valid}).map(_ref2=>{let{name}=_ref2;return name})} FROM ${"numbers"===table?"numbers(0, 10)":table} LIMIT 100`}})},"./frontend/src/scenes/pipeline/hogfunctions/integrations/IntegrationChoice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>IntegrationChoice});var _posthog_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.8.1_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/api.ts"),lib_integrations_integrationsLogic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/integrations/integrationsLogic.ts"),lib_integrations_IntegrationView__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/lib/integrations/IntegrationView.tsx"),lib_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/lib/utils.tsx"),scenes_urls__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/scenes/urls.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function IntegrationChoice(_ref){let{onChange,value,integration,redirectUrl}=_ref,{integrationsLoading,integrations}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useValues)(lib_integrations_integrationsLogic__WEBPACK_IMPORTED_MODULE_4__.a),integrationsOfKind=integrations?.filter(x=>x.kind===integration),integrationKind=integrationsOfKind?.find(integration=>integration.id===value);if(!integration)return null;if(integrationsLoading)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.yW,{className:"h-10"});let button=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.d6,{items:[integrationsOfKind?.length?{items:[...integrationsOfKind?.map(integration=>({icon:react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("img",{src:integration.icon_url,className:"w-6 h-6 rounded"}),onClick:()=>onChange?.(integration.id),active:integration.id===value,label:integration.display_name}))||[]]}:null,{items:[{to:lib_api__WEBPACK_IMPORTED_MODULE_3__.ZP.integrations.authorizeUrl({kind:integration,next:redirectUrl}),disableClientSideRouting:!0,label:integrationsOfKind?.length?`Connect to a different ${integration} integration`:`Connect to ${integration}`}]},{items:[{to:scenes_urls__WEBPACK_IMPORTED_MODULE_7__.j.settings("project-integrations"),label:"Manage integrations",sideIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_posthog_icons__WEBPACK_IMPORTED_MODULE_0__.IconExternal,{})},value?{onClick:()=>onChange?.(null),label:"Clear",sideIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_posthog_icons__WEBPACK_IMPORTED_MODULE_0__.IconX,{})}:null]}],children:integrationKind?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.Jp,{type:"secondary",children:"Change"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.Jp,{type:"secondary",children:["Choose ",(0,lib_utils__WEBPACK_IMPORTED_MODULE_6__.fm)(integration)," connection"]})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:integrationKind?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lib_integrations_IntegrationView__WEBPACK_IMPORTED_MODULE_5__.K,{integration:integrationKind,suffix:button}):button})}}}]);