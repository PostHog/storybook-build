"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[4710],{"./frontend/src/scenes/session-recordings/playlist/SessionRecordingPreview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AndroidRecording:()=>AndroidRecording,Loading:()=>Loading,WebRecording:()=>WebRecording,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SessionRecordingPreview__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/scenes/session-recordings/playlist/SessionRecordingPreview.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let meta={title:"Replay/Components/PropertyIcons",component:_SessionRecordingPreview__WEBPACK_IMPORTED_MODULE_0__.D7,parameters:{layout:"fullscreen",viewMode:"story",mockDate:"2023-01-31 12:00:00"}},__WEBPACK_DEFAULT_EXPORT__=meta,Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"border rounded px-4 py-2 w-fit",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SessionRecordingPreview__WEBPACK_IMPORTED_MODULE_0__.D7,{...args})}),WebRecording=Template.bind({});WebRecording.args={iconClassnames:"wat",loading:!1,onPropertyClick:()=>{},recordingProperties:[{label:"Mac OS X",value:"Mac OS X",property:"$os",tooltipValue:"Mac OS X"},{label:"Chrome",value:"Chrome",property:"$browser",tooltipValue:"Chrome"},{label:"United States",value:"United States",property:"$geoip_country_code",tooltipValue:"United States"},{label:"Desktop",value:"Desktop",property:"$device_type",tooltipValue:"Desktop"}]};let AndroidRecording=Template.bind({});AndroidRecording.args={iconClassnames:"wat",loading:!1,onPropertyClick:()=>{},recordingProperties:[{label:"Android",value:"Android",property:"$os_name",tooltipValue:"Android"},{label:"Awesome Fun App",value:"Awesome Fun App",property:"$app_name",tooltipValue:"Awesome Fun App"},{label:"United States",value:"United States",property:"$geoip_country_code",tooltipValue:"United States"},{label:"Mobile",value:"Mobile",property:"$device_type",tooltipValue:"Mobile"}]};let Loading=Template.bind({});Loading.args={iconClassnames:"wat",loading:!0,onPropertyClick:()=>{},recordingProperties:[]},Loading.parameters={testOptions:{waitForLoadersToDisappear:!1}},WebRecording.parameters={...WebRecording.parameters,docs:{...WebRecording.parameters?.docs,source:{originalSource:'(args: PropertyIconsProps) => {\n  return <div className="border rounded px-4 py-2 w-fit">\n            <PropertyIcons {...args} />\n        </div>;\n}',...WebRecording.parameters?.docs?.source}}},AndroidRecording.parameters={...AndroidRecording.parameters,docs:{...AndroidRecording.parameters?.docs,source:{originalSource:'(args: PropertyIconsProps) => {\n  return <div className="border rounded px-4 py-2 w-fit">\n            <PropertyIcons {...args} />\n        </div>;\n}',...AndroidRecording.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'(args: PropertyIconsProps) => {\n  return <div className="border rounded px-4 py-2 w-fit">\n            <PropertyIcons {...args} />\n        </div>;\n}',...Loading.parameters?.docs?.source}}};let __namedExportsOrder=["WebRecording","AndroidRecording","Loading"]}}]);