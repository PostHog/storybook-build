"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[86721],{"./frontend/src/scenes/heatmaps/HeatmapsBrowser.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeatmapsBrowserNoPageSelected:()=>HeatmapsBrowserNoPageSelected,HeatmapsBrowserNoPagesAvailable:()=>HeatmapsBrowserNoPagesAvailable,HeatmapsBrowserWithPageSelected:()=>HeatmapsBrowserWithPageSelected,HeatmapsBrowserWithUnauthorizedPageSelected:()=>HeatmapsBrowserWithUnauthorizedPageSelected,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var kea_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea-router@3.2.0_kea@3.1.5/node_modules/kea-router/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),scenes_App__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/scenes/App.tsx"),scenes_urls__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/scenes/urls.ts"),_mocks_browser__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/mocks/browser.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let topUrls=[],meta={title:"Scenes-App/Heatmaps",parameters:{layout:"fullscreen",viewMode:"story",mockDate:"2023-01-28"},decorators:[(0,_mocks_browser__WEBPACK_IMPORTED_MODULE_4__.x8)({get:{"/api/projects/:team_id/integrations":{}},post:{"/api/projects/:team_id/query":async(req,res,ctx)=>{let qry=(await req.clone().json()).query.query;return res(qry.startsWith("SELECT properties.$current_url AS url, count()")?ctx.json({results:topUrls}):ctx.json({results:[]}))}}})]},__WEBPACK_DEFAULT_EXPORT__=meta;function HeatmapsBrowserNoPagesAvailable(){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{kea_router__WEBPACK_IMPORTED_MODULE_0__.router.actions.push(scenes_urls__WEBPACK_IMPORTED_MODULE_3__.j.heatmaps())},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(scenes_App__WEBPACK_IMPORTED_MODULE_2__.g,{})}function HeatmapsBrowserNoPageSelected(){return topUrls=[["https://example.io/most-views",100],["https://example.com/fewest-views",50]],(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{kea_router__WEBPACK_IMPORTED_MODULE_0__.router.actions.push(scenes_urls__WEBPACK_IMPORTED_MODULE_3__.j.heatmaps())},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(scenes_App__WEBPACK_IMPORTED_MODULE_2__.g,{})}function HeatmapsBrowserWithUnauthorizedPageSelected(){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{kea_router__WEBPACK_IMPORTED_MODULE_0__.router.actions.push(scenes_urls__WEBPACK_IMPORTED_MODULE_3__.j.heatmaps("pageURL=https://example.com"))},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(scenes_App__WEBPACK_IMPORTED_MODULE_2__.g,{})}function HeatmapsBrowserWithPageSelected(){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{kea_router__WEBPACK_IMPORTED_MODULE_0__.router.actions.push(scenes_urls__WEBPACK_IMPORTED_MODULE_3__.j.heatmaps('pageURL=https://posthog.com&heatmapPalette=red&heatmapFilters={"type"%3A"mousemove"}'))},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(scenes_App__WEBPACK_IMPORTED_MODULE_2__.g,{})}HeatmapsBrowserNoPagesAvailable.parameters={...HeatmapsBrowserNoPagesAvailable.parameters,docs:{...HeatmapsBrowserNoPagesAvailable.parameters?.docs,source:{originalSource:"function HeatmapsBrowserNoPagesAvailable(): JSX.Element {\n  useEffect(() => {\n    router.actions.push(urls.heatmaps());\n  }, []);\n  return <App />;\n}",...HeatmapsBrowserNoPagesAvailable.parameters?.docs?.source}}},HeatmapsBrowserNoPageSelected.parameters={...HeatmapsBrowserNoPageSelected.parameters,docs:{...HeatmapsBrowserNoPageSelected.parameters?.docs,source:{originalSource:"function HeatmapsBrowserNoPageSelected(): JSX.Element {\n  topUrls = [['https://example.io/most-views', 100], ['https://example.com/fewest-views', 50]];\n  useEffect(() => {\n    router.actions.push(urls.heatmaps());\n  }, []);\n  return <App />;\n}",...HeatmapsBrowserNoPageSelected.parameters?.docs?.source}}},HeatmapsBrowserWithUnauthorizedPageSelected.parameters={...HeatmapsBrowserWithUnauthorizedPageSelected.parameters,docs:{...HeatmapsBrowserWithUnauthorizedPageSelected.parameters?.docs,source:{originalSource:"function HeatmapsBrowserWithUnauthorizedPageSelected(): JSX.Element {\n  useEffect(() => {\n    router.actions.push(urls.heatmaps('pageURL=https://example.com'));\n  }, []);\n  return <App />;\n}",...HeatmapsBrowserWithUnauthorizedPageSelected.parameters?.docs?.source}}},HeatmapsBrowserWithPageSelected.parameters={...HeatmapsBrowserWithPageSelected.parameters,docs:{...HeatmapsBrowserWithPageSelected.parameters?.docs,source:{originalSource:'function HeatmapsBrowserWithPageSelected(): JSX.Element {\n  useEffect(() => {\n    router.actions.push(urls.heatmaps(\'pageURL=https://posthog.com&heatmapPalette=red&heatmapFilters={"type"%3A"mousemove"}\'));\n  }, []);\n  return <App />;\n}',...HeatmapsBrowserWithPageSelected.parameters?.docs?.source}}};let __namedExportsOrder=["HeatmapsBrowserNoPagesAvailable","HeatmapsBrowserNoPageSelected","HeatmapsBrowserWithUnauthorizedPageSelected","HeatmapsBrowserWithPageSelected"]}}]);