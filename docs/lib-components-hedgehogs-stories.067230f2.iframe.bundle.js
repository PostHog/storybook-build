"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[3833],{"./frontend/src/lib/components/hedgehogs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Library:()=>Library,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),_hedgehogs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/lib/components/hedgehogs.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const allHedgehogs=Object.entries(_hedgehogs__WEBPACK_IMPORTED_MODULE_1__).map((_ref=>{let[key,Hedgehog]=_ref;return{name:key,hedgehog:Hedgehog}})),__WEBPACK_DEFAULT_EXPORT__={title:"Lemon UI/Hog illustrations",tags:["test-skip","autodocs"],parameters:{docs:{description:{component:"\n\n[Related Figma area](https://www.figma.com/file/Y9G24U4r04nEjIDGIEGuKI/PostHog-Design-System-One?node-id=3775%3A2092)\n\nOur hedgehog has many professions so it’s vital you choose the correct one for whatever project\nor page you are working on.s\n\nSingular hedgehog illustrations should be kept in a 200x200px frame\nand scaled up or down accordingly. Wider hedgehog frames containing one or more will keep the\nsame height of 200px but the width may change dependant on the illustration.\n\nAs we continue to\ngrow more and more hedgehogs of different professions and positions will appear, but if you have\na specific idea in mind, please submit new hedgehog requests to Lottie our Graphic Designer and\nshe will get to it dependant on work load.\n"}}}};function Library(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"space-y-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.LemonTable,{dataSource:allHedgehogs,columns:[{title:"Name",key:"name",dataIndex:"name",render:function RenderName(name){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:`<${name} />`})}},{title:"Hedgehog",key:"hedgehog",dataIndex:"hedgehog",render:function RenderHedgehog(Hedgehog){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"h-40",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Hedgehog,{className:"max-h-full w-auto object-contain"})})}}]})})}Library.parameters={...Library.parameters,docs:{...Library.parameters?.docs,source:{originalSource:"function Library(): JSX.Element {\n  return <div className=\"space-y-2\">\n            <LemonTable dataSource={allHedgehogs} columns={[{\n      title: 'Name',\n      key: 'name',\n      dataIndex: 'name',\n      render: function RenderName(name) {\n        return <code>{`<${(name as string)} />`}</code>;\n      }\n    }, {\n      title: 'Hedgehog',\n      key: 'hedgehog',\n      dataIndex: 'hedgehog',\n      render: function RenderHedgehog(Hedgehog) {\n        Hedgehog = (Hedgehog as HedgehogDefinition['hedgehog']);\n        return <div className=\"h-40\">\n                                    <Hedgehog className=\"max-h-full w-auto object-contain\" />\n                                </div>;\n      }\n    }]} />\n        </div>;\n}",...Library.parameters?.docs?.source}}};const __namedExportsOrder=["Library"]}}]);