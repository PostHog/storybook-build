"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[10223],{"./frontend/src/lib/lemon-ui/LemonInputSelect/LemonInputSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,EmptyLoading:()=>EmptyLoading,Loading:()=>Loading,MultipleSelect:()=>MultipleSelect,MultipleSelectWithCustom:()=>MultipleSelectWithCustom,NoOptions:()=>NoOptions,PrefilledManyValues:()=>PrefilledManyValues,SingleOptionWithCustom:()=>SingleOptionWithCustom,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lib_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/lib/utils.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_ProfilePicture__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/lemon-ui/ProfilePicture/index.ts"),_LemonInputSelect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/lemon-ui/LemonInputSelect/LemonInputSelect.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let names=["ben","marius","paul","tiina","tim","james","neil","tom","annika","thomas","eric","yakko","manoel","leon","lottie","charles"],meta={title:"Lemon UI/Lemon Input Select",component:_LemonInputSelect__WEBPACK_IMPORTED_MODULE_3__.n,args:{options:names.map((x,i)=>({key:`user-${i}`,labelComponent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:"flex gap-2 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ProfilePicture__WEBPACK_IMPORTED_MODULE_2__.Y,{user:{first_name:x,email:`${x}@posthog.com`},size:"sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{children:[(0,lib_utils__WEBPACK_IMPORTED_MODULE_0__.fm)(x)," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:`<${x}@posthog.com>`})]})]}),label:`${(0,lib_utils__WEBPACK_IMPORTED_MODULE_0__.fm)(x)} <${x}@posthog.com>`}))},tags:["autodocs"]},__WEBPACK_DEFAULT_EXPORT__=meta,Template=props=>{let[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value||[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonInputSelect__WEBPACK_IMPORTED_MODULE_3__.n,{...props,value:value,onChange:setValue,className:"w-140"})},Default=Template.bind({});Default.args={placeholder:"Pick one email",mode:"single"};let MultipleSelect=Template.bind({});MultipleSelect.args={placeholder:"Pick email addresses",mode:"multiple"};let MultipleSelectWithCustom=Template.bind({});MultipleSelectWithCustom.args={placeholder:"Enter URLs",mode:"multiple",allowCustomValues:!0,options:[{key:"http://posthog.com/docs",label:"http://posthog.com/docs"},{key:"http://posthog.com/pricing",label:"http://posthog.com/pricing"},{key:"http://posthog.com/products",label:"http://posthog.com/products"}]};let Disabled=Template.bind({});Disabled.args={mode:"single",placeholder:"Disabled...",disabled:!0};let Loading=Template.bind({});Loading.args={mode:"single",placeholder:"Loading with options...",loading:!0},Loading.parameters={testOptions:{waitForLoadersToDisappear:!1}};let EmptyLoading=Template.bind({});EmptyLoading.args={mode:"single",placeholder:"Loading without options...",options:[],loading:!0},EmptyLoading.parameters={testOptions:{waitForLoadersToDisappear:!1}};let NoOptions=Template.bind({});NoOptions.args={mode:"multiple",allowCustomValues:!0,placeholder:"No options...",options:[]};let SingleOptionWithCustom=Template.bind({});SingleOptionWithCustom.args={mode:"single",allowCustomValues:!0,placeholder:"Only one option allowed but can be custom"};let PrefilledManyValues=Template.bind({});PrefilledManyValues.args={mode:"multiple",allowCustomValues:!0,value:names.map((_,i)=>`user-${i}`)},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...Default.parameters?.docs?.source}}},MultipleSelect.parameters={...MultipleSelect.parameters,docs:{...MultipleSelect.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...MultipleSelect.parameters?.docs?.source}}},MultipleSelectWithCustom.parameters={...MultipleSelectWithCustom.parameters,docs:{...MultipleSelectWithCustom.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...MultipleSelectWithCustom.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...Disabled.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...Loading.parameters?.docs?.source}}},EmptyLoading.parameters={...EmptyLoading.parameters,docs:{...EmptyLoading.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...EmptyLoading.parameters?.docs?.source}}},NoOptions.parameters={...NoOptions.parameters,docs:{...NoOptions.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...NoOptions.parameters?.docs?.source}}},SingleOptionWithCustom.parameters={...SingleOptionWithCustom.parameters,docs:{...SingleOptionWithCustom.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...SingleOptionWithCustom.parameters?.docs?.source}}},PrefilledManyValues.parameters={...PrefilledManyValues.parameters,docs:{...PrefilledManyValues.parameters?.docs,source:{originalSource:'(props: LemonInputSelectProps) => {\n  const [value, setValue] = useState(props.value || []);\n  return <LemonInputSelect {...props} value={value} onChange={setValue} className="w-140" />;\n}',...PrefilledManyValues.parameters?.docs?.source}}};let __namedExportsOrder=["Default","MultipleSelect","MultipleSelectWithCustom","Disabled","Loading","EmptyLoading","NoOptions","SingleOptionWithCustom","PrefilledManyValues"]}}]);