"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[67197],{"./frontend/src/layout/navigation-3000/sidepanel/SidePanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SidePanelActivation:()=>SidePanelActivation,SidePanelDocs:()=>SidePanelDocs,SidePanelNotebooks:()=>SidePanelNotebooks,SidePanelSettings:()=>SidePanelSettings,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var kea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),kea_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea-router@3.1.4_kea@3.1.5/node_modules/kea-router/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),scenes_App__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/scenes/App.tsx"),scenes_urls__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/scenes/urls.ts"),_mocks_browser__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/mocks/browser.tsx"),_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/types.ts"),_sidePanelStateLogic__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/layout/navigation-3000/sidepanel/sidePanelStateLogic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let meta={title:"Scenes-App/SidePanels",parameters:{layout:"fullscreen",viewMode:"story",mockDate:"2023-07-04"},decorators:[(0,_mocks_browser__WEBPACK_IMPORTED_MODULE_5__.x8)({get:{"/api/projects/:team_id/dashboard_templates/":{},"/api/projects/:id/integrations":{results:[]}},post:{"/api/projects/:team_id/query":{}}})]},__WEBPACK_DEFAULT_EXPORT__=meta,BaseTemplate=props=>{let{openSidePanel}=(0,kea__WEBPACK_IMPORTED_MODULE_0__.useActions)(_sidePanelStateLogic__WEBPACK_IMPORTED_MODULE_7__.f);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{kea_router__WEBPACK_IMPORTED_MODULE_1__.router.actions.push(scenes_urls__WEBPACK_IMPORTED_MODULE_4__.j.dashboards()),openSidePanel(props.panel)},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(scenes_App__WEBPACK_IMPORTED_MODULE_3__.g,{})},SidePanelDocs=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BaseTemplate,{panel:_types__WEBPACK_IMPORTED_MODULE_6__.H$.Docs}),SidePanelSettings=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BaseTemplate,{panel:_types__WEBPACK_IMPORTED_MODULE_6__.H$.Settings}),SidePanelActivation=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BaseTemplate,{panel:_types__WEBPACK_IMPORTED_MODULE_6__.H$.Activation}),SidePanelNotebooks=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BaseTemplate,{panel:_types__WEBPACK_IMPORTED_MODULE_6__.H$.Notebooks});SidePanelDocs.parameters={...SidePanelDocs.parameters,docs:{...SidePanelDocs.parameters?.docs,source:{originalSource:"() => {\n  return <BaseTemplate panel={SidePanelTab.Docs} />;\n}",...SidePanelDocs.parameters?.docs?.source}}},SidePanelSettings.parameters={...SidePanelSettings.parameters,docs:{...SidePanelSettings.parameters?.docs,source:{originalSource:"() => {\n  return <BaseTemplate panel={SidePanelTab.Settings} />;\n}",...SidePanelSettings.parameters?.docs?.source}}},SidePanelActivation.parameters={...SidePanelActivation.parameters,docs:{...SidePanelActivation.parameters?.docs,source:{originalSource:"() => {\n  return <BaseTemplate panel={SidePanelTab.Activation} />;\n}",...SidePanelActivation.parameters?.docs?.source}}},SidePanelNotebooks.parameters={...SidePanelNotebooks.parameters,docs:{...SidePanelNotebooks.parameters?.docs,source:{originalSource:"() => {\n  return <BaseTemplate panel={SidePanelTab.Notebooks} />;\n}",...SidePanelNotebooks.parameters?.docs?.source}}};let __namedExportsOrder=["SidePanelDocs","SidePanelSettings","SidePanelActivation","SidePanelNotebooks"]}}]);