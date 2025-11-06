"use strict";(self.webpackChunk_posthog_storybook=self.webpackChunk_posthog_storybook||[]).push([[14710],{"../../frontend/src/scenes/themes/CustomCssScene.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomCssScene:()=>CustomCssScene,scene:()=>scene});var kea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/kea@3.1.7_react@18.2.0/node_modules/kea/lib/index.esm.js"),kea_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/kea-router@3.4.1_kea@3.1.7_react@18.2.0_/node_modules/kea-router/lib/index.js"),_posthog_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@posthog+icons@0.35.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../frontend/@posthog/lemon-ui/src/index.ts"),lib_hooks_useOnMountEffect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../frontend/src/lib/hooks/useOnMountEffect.ts"),lib_monaco_CodeEditor__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../frontend/src/lib/monaco/CodeEditor.tsx"),_layout_navigation_3000_themeLogic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../frontend/src/layout/navigation-3000/themeLogic.ts"),_layout_scenes_components_SceneContent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../frontend/src/layout/scenes/components/SceneContent.tsx"),_layout_scenes_components_SceneDivider__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../frontend/src/layout/scenes/components/SceneDivider.tsx"),_layout_scenes_components_SceneTitleSection__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../frontend/src/layout/scenes/components/SceneTitleSection.tsx"),_urls__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../frontend/src/scenes/urls.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let scene={component:CustomCssScene},TRON_THEME=`:root {
    --radius: 0px;
}

body[theme=dark] {
    --border: rgba(0, 255, 1, 0.5);
    --link: #00FF01;
    --border-bold: #00FF01;
    --color-bg-3000: #111;
    --glass-bg-3000: #111;
    --color-bg-light: #222;
    --color-bg-table: #222;
    --muted-3000: #0EA70E;
    --primary-3000: #00FF01;
    --primary-3000-hover: #00FF01;
    --primary-alt-highlight: rgba(0, 255, 1, 0.1);
    --text-3000: #00FF01;
    --color-accent-3000: #222;
    --glass-border-3000: rgba(0,0,0,.3);
    --font-title: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;

    --primary-3000-frame-bg-light: #00FF01;
    --primary-3000-button-bg: #00FF01;
    --primary-3000-button-border: #00FF01;
    --color-text-tertiary: #00FF01;
}

.TopBar3000__content {
	border-bottom: solid 1px #00FF01;
}`,BARBIE_THEME=`:root {
    --radius: 16px;
}

body[theme=light] {
    --border: rgba(255, 105, 180, 0.5);
    --border-3000: #ff409f;
    --link: #E306AD;
    --border-bold: rgba(255, 105, 180, 0.8);
    --color-bg-3000: #FED9E9;
    --glass-bg-3000: rgba(255, 192, 203, 0.8);
    --color-bg-light: #FFF0F5;
    --color-bg-table: #F8BBD0;
    --muted-3000: #E306AD;
    --primary-3000: #FF69B4;
    --primary-3000-hover: #FF1493;
    --primary-alt-highlight: rgba(255, 105, 180, 0.1);
    --text-3000: #ed3993;
    --text-3000-light: #58003f;
    --color-accent-3000: #FEBDE2;
    --glass-border-3000: rgba(245, 145, 199, 0.3);

    --primary-3000-frame-bg-light: #F18DBC;
    --primary-3000-button-bg: #FF69B4;
    --primary-3000-button-border: #FF1493;
    --primary-3000-button-border-hover: #db097b;
    --color-text-tertiary: #FFB6C1;

    --secondary-3000-button-border: #FF1493;
    --secondary-3000-frame-bg-light: #F7B9D7;
    --secondary-3000-button-border-hover: #d40b76;
}`;function CustomCssScene(){let{persistedCustomCss,previewingCustomCss}=(0,kea__WEBPACK_IMPORTED_MODULE_0__.useValues)(_layout_navigation_3000_themeLogic__WEBPACK_IMPORTED_MODULE_6__.b),{saveCustomCss,setPreviewingCustomCss}=(0,kea__WEBPACK_IMPORTED_MODULE_0__.useActions)(_layout_navigation_3000_themeLogic__WEBPACK_IMPORTED_MODULE_6__.b);return(0,lib_hooks_useOnMountEffect__WEBPACK_IMPORTED_MODULE_4__.x)(()=>{setPreviewingCustomCss(previewingCustomCss||persistedCustomCss||"")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_layout_scenes_components_SceneContent__WEBPACK_IMPORTED_MODULE_7__._,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_layout_scenes_components_SceneTitleSection__WEBPACK_IMPORTED_MODULE_9__.s,{name:"Custom CSS",resourceType:{type:"customCss",forceIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_icons__WEBPACK_IMPORTED_MODULE_2__.IconWrench,{})},actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_3__.Jp,{type:"secondary",onClick:()=>{kea_router__WEBPACK_IMPORTED_MODULE_1__.router.actions.push(_urls__WEBPACK_IMPORTED_MODULE_10__.j.projectRoot())},size:"small",children:"Preview"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_3__.Jp,{type:"primary",onClick:()=>{saveCustomCss(),kea_router__WEBPACK_IMPORTED_MODULE_1__.router.actions.push(_urls__WEBPACK_IMPORTED_MODULE_10__.j.projectRoot())},size:"small",children:"Save and set"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("p",{children:["You can add custom CSS to change the style of your PostHog instance. If you need some inspiration try our templates: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_3__.rU,{onClick:()=>setPreviewingCustomCss(TRON_THEME),children:"Tron"}),","," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_3__.rU,{onClick:()=>setPreviewingCustomCss(BARBIE_THEME),children:"Barbie"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_layout_scenes_components_SceneDivider__WEBPACK_IMPORTED_MODULE_8__.V,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lib_monaco_CodeEditor__WEBPACK_IMPORTED_MODULE_5__.p,{className:"border",language:"css",value:previewingCustomCss||"",onChange:v=>setPreviewingCustomCss(null!=v?v:null),height:600,options:{minimap:{enabled:!1}}})]})}}}]);
//# sourceMappingURL=14710.22054c41.iframe.bundle.js.map