(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[9416,8754],{"./frontend/src/scenes/authentication/signup/verify-email/VerifyEmail.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VerifyEmailInvalid:()=>VerifyEmailInvalid,VerifyEmailPending:()=>VerifyEmailPending,VerifyEmailSuccess:()=>VerifyEmailSuccess,VerifyingEmail:()=>VerifyingEmail,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_VerifyEmail__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/scenes/authentication/signup/verify-email/VerifyEmail.tsx"),_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/scenes/authentication/signup/verify-email/verifyEmailLogic.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Scenes-Other/Verify Email",parameters:{layout:"fullscreen",viewMode:"story"}},VerifyEmailPending=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_2__.C.actions.setView("pending"),_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_2__.C.actions.setUuid("12345678")}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_VerifyEmail__WEBPACK_IMPORTED_MODULE_1__.VerifyEmail,{})),VerifyingEmail=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_2__.C.actions.setView("verify")}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_VerifyEmail__WEBPACK_IMPORTED_MODULE_1__.VerifyEmail,{}));VerifyingEmail.parameters={testOptions:{waitForLoadersToDisappear:!1}};const VerifyEmailSuccess=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_2__.C.actions.setView("success")}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_VerifyEmail__WEBPACK_IMPORTED_MODULE_1__.VerifyEmail,{})),VerifyEmailInvalid=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_2__.C.actions.setView("invalid"),_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_2__.C.actions.setUuid("12345678")}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_VerifyEmail__WEBPACK_IMPORTED_MODULE_1__.VerifyEmail,{}));VerifyEmailPending.parameters={...VerifyEmailPending.parameters,docs:{...VerifyEmailPending.parameters?.docs,source:{originalSource:"() => {\n  useEffect(() => {\n    verifyEmailLogic.actions.setView('pending');\n    verifyEmailLogic.actions.setUuid('12345678');\n  }, []);\n  return <VerifyEmail />;\n}",...VerifyEmailPending.parameters?.docs?.source}}},VerifyingEmail.parameters={...VerifyingEmail.parameters,docs:{...VerifyingEmail.parameters?.docs,source:{originalSource:"() => {\n  useEffect(() => {\n    verifyEmailLogic.actions.setView('verify');\n  }, []);\n  return <VerifyEmail />;\n}",...VerifyingEmail.parameters?.docs?.source}}},VerifyEmailSuccess.parameters={...VerifyEmailSuccess.parameters,docs:{...VerifyEmailSuccess.parameters?.docs,source:{originalSource:"() => {\n  useEffect(() => {\n    verifyEmailLogic.actions.setView('success');\n  }, []);\n  return <VerifyEmail />;\n}",...VerifyEmailSuccess.parameters?.docs?.source}}},VerifyEmailInvalid.parameters={...VerifyEmailInvalid.parameters,docs:{...VerifyEmailInvalid.parameters?.docs,source:{originalSource:"() => {\n  useEffect(() => {\n    verifyEmailLogic.actions.setView('invalid');\n    verifyEmailLogic.actions.setUuid('12345678');\n  }, []);\n  return <VerifyEmail />;\n}",...VerifyEmailInvalid.parameters?.docs?.source}}};const __namedExportsOrder=["VerifyEmailPending","VerifyingEmail","VerifyEmailSuccess","VerifyEmailInvalid"]},"./frontend/src/lib/components/BridgePage/BridgePage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>BridgePage_BridgePage_BridgePage});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@2.0.0_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),BridgePage=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@10.3.1_sass@1.56.0_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./frontend/src/lib/components/BridgePage/BridgePage.scss"),BridgePage_default=__webpack_require__.n(BridgePage),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(BridgePage_default(),options);BridgePage_default().locals;var clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),CSSTransition=__webpack_require__("./node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0/node_modules/react-transition-group/esm/CSSTransition.js"),src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts");const posthog_logo=__webpack_require__.p+"images/posthog-logo.1e8f704e9f5c893139d4ad8dcb7e2954.svg",posthog_logo_cloud=__webpack_require__.p+"images/posthog-logo-cloud.ff39f38d10e1d8769248bd773fc42a24.svg",posthog_logo_demo=__webpack_require__.p+"images/posthog-logo-demo.a5b7691e421e187226625869bf85673a.svg";var preflightLogic=__webpack_require__("./frontend/src/scenes/PreflightCheck/preflightLogic.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function WelcomeLogo(_ref){let{view}=_ref;const UTM_TAGS=`utm_campaign=in-product&utm_tag=${view||"welcome"}-header`,{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic);return(0,jsx_runtime.jsx)(src.Link,{to:`https://posthog.com?${UTM_TAGS}`,children:(0,jsx_runtime.jsx)("div",{className:"header-logo",children:(0,jsx_runtime.jsx)("img",{src:preflight?.demo?posthog_logo_demo:preflight?.cloud?posthog_logo_cloud:posthog_logo,alt:"PostHog"+(preflight?.cloud?" Cloud":"")})})})}var types=__webpack_require__("./frontend/src/types.ts"),hedgehogs=__webpack_require__("./frontend/src/lib/components/hedgehogs.tsx");function BridgePage_BridgePage_BridgePage(_ref){let{children,header,footer,view,message,noLogo=!1,sideLogo=!1,fixedWidth=!0,leftContainerContent,hedgehog=!1}=_ref;const[messageShowing,setMessageShowing]=(0,react.useState)(!1),{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic);return(0,react.useEffect)((()=>{const t=setTimeout((()=>{setMessageShowing(!0)}),200);return()=>clearTimeout(t)}),[]),(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.default)("BridgePage",fixedWidth&&"BridgePage--fixed-width"),children:[(0,jsx_runtime.jsxs)("div",{className:"BridgePage__main",children:[leftContainerContent||hedgehog?(0,jsx_runtime.jsx)("div",{className:"BridgePage__left-wrapper",children:(0,jsx_runtime.jsxs)("div",{className:"BridgePage__left",children:[!noLogo&&sideLogo&&(0,jsx_runtime.jsx)("div",{className:"BridgePage__header-logo mb-4",children:(0,jsx_runtime.jsx)(WelcomeLogo,{view})}),leftContainerContent&&leftContainerContent,hedgehog&&(0,jsx_runtime.jsxs)("div",{className:"BridgePage__left__art",children:[preflight?.region===types.yp.EU?(0,jsx_runtime.jsx)(hedgehogs.LaptopHogEU,{alt:"",draggable:"false"}):(0,jsx_runtime.jsx)(hedgehogs.LaptopHog4,{alt:"",draggable:"false"}),message?(0,jsx_runtime.jsx)(CSSTransition.Z,{in:messageShowing,timeout:200,classNames:"BridgePage__left__message-",children:(0,jsx_runtime.jsx)("div",{className:"BridgePage__left__message",children:message})}):null]})]})}):null,(0,jsx_runtime.jsxs)("div",{className:"BridgePage__content-wrapper",children:[!noLogo&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.default)("BridgePage__header-logo",{mobile:sideLogo}),children:(0,jsx_runtime.jsx)(WelcomeLogo,{view})}),(0,jsx_runtime.jsx)("div",{className:"BridgePage__header",children:header}),(0,jsx_runtime.jsx)("div",{className:"BridgePage__content",children})]})]}),footer&&(0,jsx_runtime.jsx)("div",{className:"BridgePage__footer",children:footer})]})}},"./frontend/src/scenes/authentication/signup/verify-email/VerifyEmail.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VerifyEmail:()=>VerifyEmail,VerifyEmailHelpLinks:()=>VerifyEmailHelpLinks,scene:()=>scene});var _posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_components_BridgePage_BridgePage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/components/BridgePage/BridgePage.tsx"),lib_components_hedgehogs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/components/hedgehogs.tsx"),lib_components_Support_supportLogic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/lib/components/Support/supportLogic.ts"),lib_lemon_ui_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/lib/lemon-ui/Spinner/Spinner.tsx"),_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/scenes/authentication/signup/verify-email/verifyEmailLogic.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const scene={component:VerifyEmail,logic:_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_6__.C},VerifyEmailHelpLinks=()=>{const{requestVerificationLink}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_6__.C),{uuid}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_6__.C),{openSupportForm}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useActions)(lib_components_Support_supportLogic__WEBPACK_IMPORTED_MODULE_4__.Pw);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"flex flex-row gap-x-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.LemonButton,{type:"secondary",className:"mt-8",onClick:()=>{openSupportForm({kind:"bug",target_area:"login"})},children:"Contact support"}),uuid&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_0__.LemonButton,{type:"secondary",className:"mt-8",onClick:()=>{requestVerificationLink(uuid)},children:"Request a new link"})]})};function VerifyEmail(){const{view}=(0,kea__WEBPACK_IMPORTED_MODULE_1__.useValues)(_verifyEmailLogic__WEBPACK_IMPORTED_MODULE_6__.C);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"flex h-full flex-col",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"flex h-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lib_components_BridgePage_BridgePage__WEBPACK_IMPORTED_MODULE_2__.N,{view:"verifyEmail",fixedWidth:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"px-12 py-8 text-center flex flex-col items-center max-w-200",children:"pending"===view?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:"text-xl",children:"Welcome to PostHog!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:"text-3xl font-bold",children:"Let's verify your email address."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"max-w-80 my-12",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lib_components_hedgehogs__WEBPACK_IMPORTED_MODULE_3__.MailHog,{className:"w-full h-full"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{children:"An email has been sent to with a link to verify your email address. If you have not received the email in a few minutes, please check your spam folder."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(VerifyEmailHelpLinks,{})]}):"verify"===view?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lib_lemon_ui_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__.$,{className:"text-4xl mb-12"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{children:"Verifying your email address..."})]}):"success"===view?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:"text-3xl font-bold",children:"Success!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"max-w-60 mb-12",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lib_components_hedgehogs__WEBPACK_IMPORTED_MODULE_3__.HeartHog,{className:"w-full h-full"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{children:"Thanks for verifying your email address. Now taking you to PostHog..."})]}):"invalid"===view?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:"text-3xl font-bold",children:"Whoops!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"max-w-60 mb-12",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lib_components_hedgehogs__WEBPACK_IMPORTED_MODULE_3__.SurprisedHog,{className:"w-full h-full"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{children:"Seems like that link isn't quite right. Try again?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(VerifyEmailHelpLinks,{})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lib_lemon_ui_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__.$,{className:"text-4xl"})})})})})}},"./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@10.3.1_sass@1.56.0_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./frontend/src/lib/components/BridgePage/BridgePage.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,'.BridgePage{position:relative;display:flex;flex:1;flex-direction:column;height:100%;min-height:100vh;overflow:hidden;background-color:var(--bg-bridge);-ms-overflow-style:none}.BridgePage::-webkit-scrollbar{width:0!important}.BridgePage .BridgePage__main{display:flex;flex:1;align-items:center;justify-content:center;padding:1rem}.BridgePage .BridgePage__content-wrapper{max-width:100%}.BridgePage .BridgePage__left-wrapper{display:none;margin-right:60px}@media screen and (min-width:768px){.BridgePage .BridgePage__left-wrapper{display:block;visibility:visible}}.BridgePage .BridgePage__content{position:relative;width:100%;padding:2rem;background-color:#fff;border-radius:var(--radius);box-shadow:var(--shadow-elevation)}.BridgePage .BridgePage__content h2{font-weight:700;text-align:center}.BridgePage .BridgePage__footer{display:flex;gap:10%;justify-content:center;width:100%;margin:1rem 0;font-weight:500;color:var(--muted)}.BridgePage .BridgePage__left{position:relative;display:none;visibility:none}.BridgePage .BridgePage__left img{height:300px}.BridgePage .BridgePage__left .BridgePage__left__art{margin-top:50px}.BridgePage .BridgePage__left .BridgePage__left__message{position:absolute;bottom:220px;left:265px;max-width:150px;padding:.5rem .75rem;font-size:.8em;font-weight:600;color:#fff;background-color:var(--default);border-radius:.75rem;opacity:0;transition-timing-function:cubic-bezier(.455,.03,.31,1.585)}.BridgePage .BridgePage__left .BridgePage__left__message:after{position:absolute;top:100%;left:20px;margin-top:-10px;content:" ";border:10px solid transparent;border-left:10px solid var(--default)}.BridgePage .BridgePage__left .BridgePage__left__message.BridgePage__left__message--enter{opacity:0;transform:translateY(50px) rotate(0deg) scale(.5)}.BridgePage .BridgePage__left .BridgePage__left__message.BridgePage__left__message--enter-active,.BridgePage .BridgePage__left .BridgePage__left__message.BridgePage__left__message--enter-done{opacity:1;transition:opacity .2s,transform .2s;transform:translateY(0) rotate(5deg) scale(1)}@media(prefers-reduced-motion){.BridgePage .BridgePage__left .BridgePage__left__message{transition:none}}@media screen and (min-width:768px){.BridgePage .BridgePage__left{display:block;visibility:visible}}.BridgePage .BridgePage__cta{max-width:400px}.BridgePage .BridgePage__header-logo.mobile{display:block}@media screen and (min-width:768px){.BridgePage .BridgePage__header-logo.mobile{display:none}}.BridgePage .BridgePage__header-logo .header-logo{padding-bottom:3rem;text-align:center}.BridgePage .BridgePage__header-logo .header-logo img{height:24px}@media screen and (min-width:768px){.BridgePage.BridgePage--fixed-width .BridgePage__content{width:400px;max-width:400px}}',""]),module.exports=exports}}]);