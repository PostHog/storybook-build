"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[89448],{"./frontend/src/scenes/data-warehouse/DataWarehouseInitialBillingLimitNotice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>DataWarehouseInitialBillingLimitNotice});var index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),LemonBanner=__webpack_require__("./frontend/src/lib/lemon-ui/LemonBanner/index.ts"),urls=__webpack_require__("./frontend/src/scenes/urls.ts"),billingLogic=__webpack_require__("./frontend/src/scenes/billing/billingLogic.tsx"),billingProductLogic=__webpack_require__("./frontend/src/scenes/billing/billingProductLogic.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let InitialBillingLimitNoticeContents=_ref=>{let{product}=_ref,{currentAndUpgradePlans,customLimitUsd}=(0,index_esm.useValues)((0,billingProductLogic.c)({product})),initialBillingLimit=currentAndUpgradePlans?.currentPlan?.initial_billing_limit,isUsingInitialBillingLimit=currentAndUpgradePlans?.currentPlan?.initial_billing_limit==customLimitUsd&&customLimitUsd&&customLimitUsd>0;return isUsingInitialBillingLimit?(0,jsx_runtime.jsxs)(LemonBanner.V,{type:"info",className:"my-4",action:{type:"primary",children:"Change limit",to:urls.j.organizationBilling([product.type])},dismissKey:`initial-billing-limit-notice-${product.type}`,children:[(0,jsx_runtime.jsxs)("p",{className:"flex-1 min-w-full sm:min-w-0",children:["Default initial billing limit of ",(0,jsx_runtime.jsxs)("b",{className:"text-primary",children:["$",initialBillingLimit]})," active."]}),(0,jsx_runtime.jsx)("p",{className:"font-normal",children:"This protects you from accidentally incurring large unexpected charges. Some features may stop working and data may be dropped if your usage exceeds your limit."})]}):null},InitialBillingLimitNotice=_ref2=>{let{product_key}=_ref2,{billing}=(0,index_esm.useValues)(billingLogic.kr),product=billing?.products.find(p=>p.type===product_key);return product?(0,jsx_runtime.jsx)(InitialBillingLimitNoticeContents,{product:product}):null};var types=__webpack_require__("./frontend/src/types.ts"),dataWarehouseSettingsLogic=__webpack_require__("./frontend/src/scenes/data-warehouse/settings/dataWarehouseSettingsLogic.ts");let DataWarehouseInitialBillingLimitNotice=()=>{let{dataWarehouseSources,selfManagedTables}=(0,index_esm.useValues)(dataWarehouseSettingsLogic.T),hasSources=dataWarehouseSources?.results&&dataWarehouseSources?.results.length>0||selfManagedTables?.length>0;return hasSources?(0,jsx_runtime.jsx)(InitialBillingLimitNotice,{product_key:types.Md.DATA_WAREHOUSE}):null}},"./frontend/src/scenes/data-warehouse/external/DataWarehouseExternalScene.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataWarehouseExternalScene:()=>DataWarehouseExternalScene,scene:()=>scene});var _posthog_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.7.3_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),kea_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/kea-router@3.1.4_kea@3.1.5/node_modules/kea-router/lib/index.js"),lib_components_PageHeader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/components/PageHeader.tsx"),scenes_insights_insightDataLogic__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/scenes/insights/insightDataLogic.tsx"),scenes_insights_insightLogic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/scenes/insights/insightLogic.ts"),scenes_insights_InsightSaveButton__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/scenes/insights/InsightSaveButton.tsx"),scenes_insights_insightSceneLogic__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./frontend/src/scenes/insights/insightSceneLogic.tsx"),scenes_urls__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./frontend/src/scenes/urls.ts"),_DataWarehouseInitialBillingLimitNotice__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./frontend/src/scenes/data-warehouse/DataWarehouseInitialBillingLimitNotice.tsx"),_dataWarehouseSceneLogic__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./frontend/src/scenes/data-warehouse/external/dataWarehouseSceneLogic.ts"),_DataWarehouseTables__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./frontend/src/scenes/data-warehouse/external/DataWarehouseTables.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let scene={component:DataWarehouseExternalScene,logic:_dataWarehouseSceneLogic__WEBPACK_IMPORTED_MODULE_11__.M};function DataWarehouseExternalScene(){let{insightProps,insightChanged,insightSaving,hasDashboardItemId}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useValues)((0,scenes_insights_insightLogic__WEBPACK_IMPORTED_MODULE_6__.zm)({dashboardItemId:"new",cachedInsight:null})),{saveInsight,saveAs}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useActions)((0,scenes_insights_insightDataLogic__WEBPACK_IMPORTED_MODULE_5__.Sw)(insightProps));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lib_components_PageHeader__WEBPACK_IMPORTED_MODULE_4__.m,{buttons:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(scenes_insights_InsightSaveButton__WEBPACK_IMPORTED_MODULE_7__.w,{saveAs:saveAs,saveInsight:saveInsight,isSaved:hasDashboardItemId,addingToDashboard:!1,insightSaving:insightSaving,insightChanged:insightChanged}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.LemonButton,{type:"primary","data-attr":"new-data-warehouse-easy-link",to:scenes_urls__WEBPACK_IMPORTED_MODULE_9__.j.dataWarehouseTable(),children:"Link source"},"new-data-warehouse-easy-link"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.LemonButton,{type:"primary",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_posthog_icons__WEBPACK_IMPORTED_MODULE_0__.IconGear,{}),"data-attr":"new-data-warehouse-settings-link",onClick:()=>kea_router__WEBPACK_IMPORTED_MODULE_3__.router.actions.push(scenes_urls__WEBPACK_IMPORTED_MODULE_9__.j.dataWarehouseSettings())},"new-data-warehouse-settings-link")]}),caption:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",{children:["Below are all the sources that can be queried within PostHog with"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"https://posthog.com/manual/hogql",target:"_blank",children:"HogQL"}),". Connect your own tables from S3 to query data from outside PostHog."," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"https://posthog.com/docs/data/data-warehouse",children:"Learn more"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_DataWarehouseInitialBillingLimitNotice__WEBPACK_IMPORTED_MODULE_10__.g,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(kea__WEBPACK_IMPORTED_MODULE_2__.BindLogic,{logic:scenes_insights_insightSceneLogic__WEBPACK_IMPORTED_MODULE_8__.T,props:{},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_DataWarehouseTables__WEBPACK_IMPORTED_MODULE_12__.M,{})})]})}},"./frontend/src/scenes/insights/InsightSaveButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>InsightSaveButton});var lib_lemon_ui_LemonButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/lib/lemon-ui/LemonButton/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function InsightSaveButton(_ref){let{saveAs,saveInsight,isSaved,insightSaving,insightChanged,addingToDashboard}=_ref,disabled=isSaved&&!insightChanged,saveAsAvailable=isSaved&&!addingToDashboard;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lib_lemon_ui_LemonButton__WEBPACK_IMPORTED_MODULE_0__.J,{type:"primary",onClick:()=>saveInsight(!0),"data-attr":"insight-save-button",disabled:disabled,loading:!disabled&&insightSaving,sideAction:{dropdown:{placement:"bottom-end",overlay:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(lib_lemon_ui_LemonButton__WEBPACK_IMPORTED_MODULE_0__.J,{onClick:()=>saveInsight(!1),"data-attr":"insight-save-and-continue",fullWidth:!0,children:[addingToDashboard?"Save, add to dashboard":"Save"," & continue editing"]}),saveAsAvailable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lib_lemon_ui_LemonButton__WEBPACK_IMPORTED_MODULE_0__.J,{onClick:saveAs,"data-attr":"insight-save-as-new-insight",fullWidth:!0,children:"Save as…"})]})},disabled:disabled&&!saveAsAvailable,"data-attr":"insight-save-dropdown"},children:disabled?"No changes to be saved":addingToDashboard?"Save & add to dashboard":"Save"})}}}]);