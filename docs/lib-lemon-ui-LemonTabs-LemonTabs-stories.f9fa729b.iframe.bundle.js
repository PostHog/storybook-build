"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[82821],{"./frontend/src/lib/lemon-ui/LemonTabs/LemonTabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LemonTabs:()=>LemonTabs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_LemonTabs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/lib/lemon-ui/LemonTabs/LemonTabs.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let meta={title:"Lemon UI/Lemon Tabs",component:_LemonTabs__WEBPACK_IMPORTED_MODULE_1__.T,argTypes:{tabs:{control:{type:"object"}},onChange:{control:{disable:!0}}},tags:["autodocs"],args:{tabs:[{key:"calendar",label:"Calendar",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"Imagine some calendar here. \uD83D\uDDD3️"})},{key:"calculator",label:"Calculator",tooltip:"Calculate 2+2, as well as 1/0.",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"Imagine some calculator here. \uD83D\uDD22"})},{key:"banana",label:"Banana",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"Imagine some banana here. \uD83C\uDF4C"})},{key:"settings",label:"Settings",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"Imagine some settings here. ⚙️"})}]}},__WEBPACK_DEFAULT_EXPORT__=meta,LemonTabs=(props=>{let[activeKey,setActiveKey]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.tabs[0].key);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_LemonTabs__WEBPACK_IMPORTED_MODULE_1__.T,{...props,activeKey:activeKey,onChange:newValue=>setActiveKey(newValue)})}).bind({});LemonTabs.args={},LemonTabs.parameters={...LemonTabs.parameters,docs:{...LemonTabs.parameters?.docs,source:{originalSource:"props => {\n  const [activeKey, setActiveKey] = useState((props.tabs[0] as LemonTab<string | number>).key);\n  return <LemonTabsComponent {...props} activeKey={activeKey} onChange={newValue => setActiveKey(newValue)} />;\n}",...LemonTabs.parameters?.docs?.source}}};let __namedExportsOrder=["LemonTabs"]}}]);