"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[7422],{"./frontend/src/lib/lemon-ui/LemonField/LemonField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_FieldsWithKeaForm:()=>_FieldsWithKeaForm,_PureFields:()=>_PureFields,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),kea_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea-forms@3.2.0_kea@3.1.5/node_modules/kea-forms/lib/index.js"),_LemonField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/lemon-ui/LemonField/LemonField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let meta={title:"Lemon UI/Lemon Field",component:_LemonField__WEBPACK_IMPORTED_MODULE_3__.D,parameters:{docs:{description:{component:`

[Related Figma area](https://www.figma.com/file/Y9G24U4r04nEjIDGIEGuKI/PostHog-Design-System-One?node-id=3139%3A1388)

Fields are a wrapping component that take care of rendering a label, input and error messages in a standard format.

They can be used in a kea-forms controlled way via \`Field\` or a pure way via \`PureField\`.
`}}},tags:["autodocs"]},__WEBPACK_DEFAULT_EXPORT__=meta,_PureFields=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonField__WEBPACK_IMPORTED_MODULE_3__.D.Pure,{label:"Text input label",showOptional:!0,help:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:"Optional descriptive or supportive text for the preceeding form element. This content can wrap to multiple lines."}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.DF,{placeholder:"Optional descriptive placeholder text"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonField__WEBPACK_IMPORTED_MODULE_3__.D.Pure,{label:"Select label",info:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:"With info!"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Yv,{options:[{value:"foo",label:"bar"}],fullWidth:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonField__WEBPACK_IMPORTED_MODULE_3__.D.Pure,{label:"Textarea label",error:"This field has an error",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__._V,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonField__WEBPACK_IMPORTED_MODULE_3__.D.Pure,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Hw,{bordered:!0,label:"Checkbox labels are set differently",fullWidth:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"flex justify-end gap-2 border-t mt-4 pt-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Jp,{type:"secondary",children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Jp,{htmlType:"submit",type:"primary",children:"Submit"})]})]}),formLogic=(0,kea__WEBPACK_IMPORTED_MODULE_1__.kea)([(0,kea__WEBPACK_IMPORTED_MODULE_1__.path)(["lib","forms","Field","stories"]),(0,kea_forms__WEBPACK_IMPORTED_MODULE_2__.forms)(_ref=>{let{actions}=_ref;return{myForm:{defaults:{name:"",email:"",pineappleOnPizza:!1},errors:_ref2=>{let{name,email,pineappleOnPizza}=_ref2;return{name:name?null:"Please enter your name",email:email?email.includes("@")?null:"not a valid email":"Please enter your email",pineappleOnPizza:pineappleOnPizza?"I think you meant to leave this unchecked...":null}},submit:async(_,breakpoint)=>{await breakpoint(3e3),actions.resetMyForm()}},simpleForm:{defaults:{name:""},errors:_ref3=>{let{name}=_ref3;return{name:name?void 0:"Please enter your name"}},submit:async(_,breakpoint)=>{await breakpoint(3e3),actions.resetSimpleForm()}}}})]),_FieldsWithKeaForm=()=>{let formKey="myForm",formValues=function(formKey){let allValues=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useAllValues)(formLogic);return Object.fromEntries(Object.entries(allValues).filter(_ref4=>{let[key]=_ref4;return key.toLowerCase().includes(formKey.toLowerCase())}))}(formKey);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(kea_forms__WEBPACK_IMPORTED_MODULE_2__.Form,{logic:formLogic,formKey:formKey,enableFormOnSubmit:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonField__WEBPACK_IMPORTED_MODULE_3__.D,{name:"name",label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["Name ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"(What should we call you?)"})]}),help:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:"Optional descriptive or supportive text for the preceeding form element. This content can wrap to multiple lines."}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.DF,{placeholder:"Jon Snow"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonField__WEBPACK_IMPORTED_MODULE_3__.D,{name:"select",label:"Select label",info:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:"With info!"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Yv,{options:[{value:"foo",label:"bar"}],fullWidth:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonField__WEBPACK_IMPORTED_MODULE_3__.D,{name:"email",label:"Email address",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.DF,{type:"email"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LemonField__WEBPACK_IMPORTED_MODULE_3__.D,{name:"pineappleOnPizza",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Hw,{bordered:!0,label:"Pineapple on your pizza?",fullWidth:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"flex justify-end gap-2 border-t mt-4 pt-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Jp,{type:"secondary",children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.Jp,{htmlType:"submit",type:"primary",children:"Submit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("pre",{className:"rounded-lg text-bg-light bg-default p-2 m-2",children:["formLogic.values = ",JSON.stringify(formValues,null,2)]})]})})};_PureFields.parameters={..._PureFields.parameters,docs:{..._PureFields.parameters?.docs,source:{originalSource:'(): JSX.Element => {\n  return <div className="space-y-4">\n            <LemonField.Pure label="Text input label" showOptional help={<>\n                        Optional descriptive or supportive text for the preceeding form element. This content can wrap\n                        to multiple lines.\n                    </>}>\n                <LemonInput placeholder="Optional descriptive placeholder text" />\n            </LemonField.Pure>\n\n            <LemonField.Pure label="Select label" info={<>With info!</>}>\n                <LemonSelect options={[{\n        value: \'foo\',\n        label: \'bar\'\n      }]} fullWidth />\n            </LemonField.Pure>\n\n            <LemonField.Pure label="Textarea label" error="This field has an error">\n                <LemonTextArea />\n            </LemonField.Pure>\n            <LemonField.Pure>\n                <LemonCheckbox bordered label="Checkbox labels are set differently" fullWidth />\n            </LemonField.Pure>\n\n            <div className="flex justify-end gap-2 border-t mt-4 pt-4">\n                <LemonButton type="secondary">Cancel</LemonButton>\n                <LemonButton htmlType="submit" type="primary">\n                    Submit\n                </LemonButton>\n            </div>\n        </div>;\n}',..._PureFields.parameters?.docs?.source}}},_FieldsWithKeaForm.parameters={..._FieldsWithKeaForm.parameters,docs:{..._FieldsWithKeaForm.parameters?.docs,source:{originalSource:'(): JSX.Element => {\n  const formKey = \'myForm\';\n  const formValues = useSpecificFormValues(formKey);\n  return <Form logic={formLogic} formKey={formKey} enableFormOnSubmit>\n            <div className="space-y-4">\n                <LemonField name="name" label={<>\n                            Name <span>(What should we call you?)</span>\n                        </>} help={<>\n                            Optional descriptive or supportive text for the preceeding form element. This content can\n                            wrap to multiple lines.\n                        </>}>\n                    <LemonInput placeholder="Jon Snow" />\n                </LemonField>\n\n                <LemonField name="select" label="Select label" info={<>With info!</>}>\n                    <LemonSelect options={[{\n          value: \'foo\',\n          label: \'bar\'\n        }]} fullWidth />\n                </LemonField>\n\n                <LemonField name="email" label="Email address">\n                    <LemonInput type="email" />\n                </LemonField>\n                <LemonField name="pineappleOnPizza">\n                    <LemonCheckbox bordered label="Pineapple on your pizza?" fullWidth />\n                </LemonField>\n\n                <div className="flex justify-end gap-2 border-t mt-4 pt-4">\n                    <LemonButton type="secondary">Cancel</LemonButton>\n                    <LemonButton htmlType="submit" type="primary">\n                        Submit\n                    </LemonButton>\n                </div>\n\n                <pre className="rounded-lg text-bg-light bg-default p-2 m-2">\n                    formLogic.values = {JSON.stringify(formValues, null, 2)}\n                </pre>\n            </div>\n        </Form>;\n}',..._FieldsWithKeaForm.parameters?.docs?.source}}};let __namedExportsOrder=["_PureFields","_FieldsWithKeaForm"]}}]);
//# sourceMappingURL=lib-lemon-ui-LemonField-LemonField-stories.f260c8d5.iframe.bundle.js.map