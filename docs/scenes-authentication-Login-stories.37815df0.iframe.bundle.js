(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[60711,64353,39453],{"./frontend/src/scenes/authentication/Login.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Cloud:()=>Cloud,CloudEU:()=>CloudEU,CloudWithGoogleLoginEnforcement:()=>CloudWithGoogleLoginEnforcement,SSOError:()=>SSOError,SecondFactor:()=>SecondFactor,SelfHosted:()=>SelfHosted,SelfHostedWithSAML:()=>SelfHostedWithSAML,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var kea_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea-router@3.1.4_kea@3.1.5/node_modules/kea-router/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),scenes_urls__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/scenes/urls.ts"),_mocks_browser__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/mocks/browser.tsx"),_mocks_fixtures_preflight_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/mocks/fixtures/_preflight.json"),_Login__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/scenes/authentication/Login.tsx"),_Login2FA__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/scenes/authentication/Login2FA.tsx"),_loginLogic__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/scenes/authentication/loginLogic.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let meta={title:"Scenes-Other/Login",parameters:{layout:"fullscreen",viewMode:"story",testOptions:{waitForSelector:".BridgePage__left__message--enter-done"}},decorators:[(0,_mocks_browser__WEBPACK_IMPORTED_MODULE_3__.x8)({post:{"/api/login/precheck":{sso_enforcement:null,saml_available:!1}}})]},__WEBPACK_DEFAULT_EXPORT__=meta,Cloud=()=>((0,_mocks_browser__WEBPACK_IMPORTED_MODULE_3__.ok)({get:{"/_preflight":{..._mocks_fixtures_preflight_json__WEBPACK_IMPORTED_MODULE_4__,cloud:!0,realm:"cloud",can_create_org:!0,available_social_auth_providers:{github:!0,gitlab:!0,"google-oauth2":!0,saml:!1}}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Login__WEBPACK_IMPORTED_MODULE_5__.Login,{})),CloudEU=()=>((0,_mocks_browser__WEBPACK_IMPORTED_MODULE_3__.ok)({get:{"/_preflight":{..._mocks_fixtures_preflight_json__WEBPACK_IMPORTED_MODULE_4__,cloud:!0,region:"EU",realm:"cloud",can_create_org:!0,available_social_auth_providers:{github:!0,gitlab:!0,"google-oauth2":!0,saml:!1}}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Login__WEBPACK_IMPORTED_MODULE_5__.Login,{})),CloudWithGoogleLoginEnforcement=()=>((0,_mocks_browser__WEBPACK_IMPORTED_MODULE_3__.ok)({get:{"/_preflight":{..._mocks_fixtures_preflight_json__WEBPACK_IMPORTED_MODULE_4__,cloud:!0,realm:"cloud",can_create_org:!0,available_social_auth_providers:{github:!0,gitlab:!0,"google-oauth2":!0,saml:!1}}},post:{"/api/login/precheck":{sso_enforcement:"google-oauth2",saml_available:!1}}}),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{_loginLogic__WEBPACK_IMPORTED_MODULE_7__.l.actions.setLoginValue("email","test@posthog.com"),_loginLogic__WEBPACK_IMPORTED_MODULE_7__.l.actions.precheck({email:"test@posthog.com"})},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Login__WEBPACK_IMPORTED_MODULE_5__.Login,{}));CloudWithGoogleLoginEnforcement.parameters={testOptions:{waitForSelector:'[href^="/login/google-oauth2/"]'}};let SelfHosted=()=>((0,_mocks_browser__WEBPACK_IMPORTED_MODULE_3__.ok)({get:{"/_preflight":{..._mocks_fixtures_preflight_json__WEBPACK_IMPORTED_MODULE_4__,cloud:!1,realm:"hosted-clickhouse",available_social_auth_providers:{github:!1,gitlab:!1,"google-oauth2":!1,saml:!1}}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Login__WEBPACK_IMPORTED_MODULE_5__.Login,{})),SelfHostedWithSAML=()=>((0,_mocks_browser__WEBPACK_IMPORTED_MODULE_3__.ok)({get:{"/_preflight":{..._mocks_fixtures_preflight_json__WEBPACK_IMPORTED_MODULE_4__,cloud:!1,realm:"hosted-clickhouse",available_social_auth_providers:{github:!1,gitlab:!1,"google-oauth2":!1,saml:!0}}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Login__WEBPACK_IMPORTED_MODULE_5__.Login,{}));SelfHostedWithSAML.parameters={testOptions:{waitForSelector:'[href^="/login/saml/"]'}};let SSOError=()=>((0,_mocks_browser__WEBPACK_IMPORTED_MODULE_3__.ok)({get:{"/_preflight":_mocks_fixtures_preflight_json__WEBPACK_IMPORTED_MODULE_4__}}),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{kea_router__WEBPACK_IMPORTED_MODULE_0__.router.actions.push(`${scenes_urls__WEBPACK_IMPORTED_MODULE_2__.j.login()}?error_code=improperly_configured_sso`)},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Login__WEBPACK_IMPORTED_MODULE_5__.Login,{})),SecondFactor=()=>((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{kea_router__WEBPACK_IMPORTED_MODULE_0__.router.actions.push(scenes_urls__WEBPACK_IMPORTED_MODULE_2__.j.login2FA())},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Login2FA__WEBPACK_IMPORTED_MODULE_6__.Login2FA,{}));Cloud.parameters={...Cloud.parameters,docs:{...Cloud.parameters?.docs,source:{originalSource:"() => {\n  useStorybookMocks({\n    get: {\n      '/_preflight': {\n        ...preflightJson,\n        cloud: true,\n        realm: 'cloud',\n        can_create_org: true,\n        available_social_auth_providers: {\n          github: true,\n          gitlab: true,\n          'google-oauth2': true,\n          saml: false\n        }\n      }\n    }\n  });\n  return <Login />;\n}",...Cloud.parameters?.docs?.source}}},CloudEU.parameters={...CloudEU.parameters,docs:{...CloudEU.parameters?.docs,source:{originalSource:"() => {\n  useStorybookMocks({\n    get: {\n      '/_preflight': {\n        ...preflightJson,\n        cloud: true,\n        region: 'EU',\n        realm: 'cloud',\n        can_create_org: true,\n        available_social_auth_providers: {\n          github: true,\n          gitlab: true,\n          'google-oauth2': true,\n          saml: false\n        }\n      }\n    }\n  });\n  return <Login />;\n}",...CloudEU.parameters?.docs?.source}}},CloudWithGoogleLoginEnforcement.parameters={...CloudWithGoogleLoginEnforcement.parameters,docs:{...CloudWithGoogleLoginEnforcement.parameters?.docs,source:{originalSource:"() => {\n  useStorybookMocks({\n    get: {\n      '/_preflight': {\n        ...preflightJson,\n        cloud: true,\n        realm: 'cloud',\n        can_create_org: true,\n        available_social_auth_providers: {\n          github: true,\n          gitlab: true,\n          'google-oauth2': true,\n          saml: false\n        }\n      }\n    },\n    post: {\n      '/api/login/precheck': {\n        sso_enforcement: 'google-oauth2',\n        saml_available: false\n      }\n    }\n  });\n  useEffect(() => {\n    // Trigger pre-check\n    loginLogic.actions.setLoginValue('email', 'test@posthog.com');\n    loginLogic.actions.precheck({\n      email: 'test@posthog.com'\n    });\n  }, []);\n  return <Login />;\n}",...CloudWithGoogleLoginEnforcement.parameters?.docs?.source}}},SelfHosted.parameters={...SelfHosted.parameters,docs:{...SelfHosted.parameters?.docs,source:{originalSource:"() => {\n  useStorybookMocks({\n    get: {\n      '/_preflight': {\n        ...preflightJson,\n        cloud: false,\n        realm: 'hosted-clickhouse',\n        available_social_auth_providers: {\n          github: false,\n          gitlab: false,\n          'google-oauth2': false,\n          saml: false\n        }\n      }\n    }\n  });\n  return <Login />;\n}",...SelfHosted.parameters?.docs?.source}}},SelfHostedWithSAML.parameters={...SelfHostedWithSAML.parameters,docs:{...SelfHostedWithSAML.parameters?.docs,source:{originalSource:"() => {\n  useStorybookMocks({\n    get: {\n      '/_preflight': {\n        ...preflightJson,\n        cloud: false,\n        realm: 'hosted-clickhouse',\n        available_social_auth_providers: {\n          github: false,\n          gitlab: false,\n          'google-oauth2': false,\n          saml: true\n        }\n      }\n    }\n  });\n  return <Login />;\n}",...SelfHostedWithSAML.parameters?.docs?.source}}},SSOError.parameters={...SSOError.parameters,docs:{...SSOError.parameters?.docs,source:{originalSource:"() => {\n  useStorybookMocks({\n    get: {\n      '/_preflight': preflightJson\n    }\n  });\n  useEffect(() => {\n    // Change the URL\n    router.actions.push(`${urls.login()}?error_code=improperly_configured_sso`);\n  }, []);\n  return <Login />;\n}",...SSOError.parameters?.docs?.source}}},SecondFactor.parameters={...SecondFactor.parameters,docs:{...SecondFactor.parameters?.docs,source:{originalSource:"() => {\n  useEffect(() => {\n    // Change the URL\n    router.actions.push(urls.login2FA());\n  }, []);\n  return <Login2FA />;\n}",...SecondFactor.parameters?.docs?.source}}};let __namedExportsOrder=["Cloud","CloudEU","CloudWithGoogleLoginEnforcement","SelfHosted","SelfHostedWithSAML","SSOError","SecondFactor"]},"./frontend/src/lib/components/BridgePage/BridgePage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>BridgePage_BridgePage_BridgePage});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@2.0.0_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),BridgePage=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@10.3.1_sass@1.56.0_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./frontend/src/lib/components/BridgePage/BridgePage.scss"),BridgePage_default=__webpack_require__.n(BridgePage),options={};options.insert="head",options.singleton=!1,injectStylesIntoStyleTag_default()(BridgePage_default(),options),BridgePage_default().locals;var clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),CSSTransition=__webpack_require__("./node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0/node_modules/react-transition-group/esm/CSSTransition.js"),src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts");let posthog_logo=__webpack_require__.p+"images/posthog-logo.1e8f704e9f5c893139d4ad8dcb7e2954.svg",posthog_logo_cloud=__webpack_require__.p+"images/posthog-logo-cloud.ff39f38d10e1d8769248bd773fc42a24.svg",posthog_logo_demo=__webpack_require__.p+"images/posthog-logo-demo.a5b7691e421e187226625869bf85673a.svg";var preflightLogic=__webpack_require__("./frontend/src/scenes/PreflightCheck/preflightLogic.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function WelcomeLogo(_ref){let{view}=_ref,UTM_TAGS=`utm_campaign=in-product&utm_tag=${view||"welcome"}-header`,{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic);return(0,jsx_runtime.jsx)(src.rU,{to:`https://posthog.com?${UTM_TAGS}`,children:(0,jsx_runtime.jsx)("div",{className:"header-logo",children:(0,jsx_runtime.jsx)("img",{src:preflight?.demo?posthog_logo_demo:preflight?.cloud?posthog_logo_cloud:posthog_logo,alt:`PostHog${preflight?.cloud?" Cloud":""}`})})})}var types=__webpack_require__("./frontend/src/types.ts"),hedgehogs=__webpack_require__("./frontend/src/lib/components/hedgehogs.tsx");function BridgePage_BridgePage_BridgePage(_ref){let{children,header,footer,view,message,noLogo=!1,sideLogo=!1,fixedWidth=!0,leftContainerContent,hedgehog=!1}=_ref,[messageShowing,setMessageShowing]=(0,react.useState)(!1),{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic);return(0,react.useEffect)(()=>{let t=setTimeout(()=>{setMessageShowing(!0)},200);return()=>clearTimeout(t)},[]),(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.default)("BridgePage",fixedWidth&&"BridgePage--fixed-width"),children:[(0,jsx_runtime.jsxs)("div",{className:"BridgePage__main",children:[leftContainerContent||hedgehog?(0,jsx_runtime.jsx)("div",{className:"BridgePage__left-wrapper",children:(0,jsx_runtime.jsxs)("div",{className:"BridgePage__left",children:[!noLogo&&sideLogo&&(0,jsx_runtime.jsx)("div",{className:"BridgePage__header-logo mb-4",children:(0,jsx_runtime.jsx)(WelcomeLogo,{view:view})}),leftContainerContent&&leftContainerContent,hedgehog&&(0,jsx_runtime.jsxs)("div",{className:"BridgePage__left__art",children:[preflight?.region===types.yp.EU?(0,jsx_runtime.jsx)(hedgehogs.LaptopHogEU,{alt:"",draggable:"false"}):(0,jsx_runtime.jsx)(hedgehogs.LaptopHog4,{alt:"",draggable:"false"}),message?(0,jsx_runtime.jsx)(CSSTransition.Z,{in:messageShowing,timeout:200,classNames:"BridgePage__left__message-",children:(0,jsx_runtime.jsx)("div",{className:"BridgePage__left__message",children:message})}):null]})]})}):null,(0,jsx_runtime.jsxs)("div",{className:"BridgePage__content-wrapper",children:[!noLogo&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.default)("BridgePage__header-logo",{mobile:sideLogo}),children:(0,jsx_runtime.jsx)(WelcomeLogo,{view:view})}),(0,jsx_runtime.jsx)("div",{className:"BridgePage__header",children:header}),(0,jsx_runtime.jsx)("div",{className:"BridgePage__content",children:children})]})]}),footer&&(0,jsx_runtime.jsx)("div",{className:"BridgePage__footer",children:footer})]})}},"./frontend/src/scenes/authentication/Login.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ERROR_MESSAGES:()=>ERROR_MESSAGES,Login:()=>Login_Login,scene:()=>scene});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@2.0.0_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Login=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@10.3.1_sass@1.56.0_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./frontend/src/scenes/authentication/Login.scss"),Login_default=__webpack_require__.n(Login),options={};options.insert="head",options.singleton=!1,injectStylesIntoStyleTag_default()(Login_default(),options),Login_default().locals;var src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),esm_exports=__webpack_require__("./node_modules/.pnpm/@sentry+core@7.112.1/node_modules/@sentry/core/esm/exports.js"),clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib=__webpack_require__("./node_modules/.pnpm/kea-forms@3.2.0_kea@3.1.5/node_modules/kea-forms/lib/index.js"),BridgePage=__webpack_require__("./frontend/src/lib/components/BridgePage/BridgePage.tsx"),SocialLoginButton=__webpack_require__("./frontend/src/lib/components/SocialLoginButton/SocialLoginButton.tsx"),LemonBanner=__webpack_require__("./frontend/src/lib/lemon-ui/LemonBanner/index.ts"),LemonField=__webpack_require__("./frontend/src/lib/lemon-ui/LemonField/index.ts"),Link=__webpack_require__("./frontend/src/lib/lemon-ui/Link/index.ts"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),preflightLogic=__webpack_require__("./frontend/src/scenes/PreflightCheck/preflightLogic.tsx"),loginLogic=__webpack_require__("./frontend/src/scenes/authentication/loginLogic.ts"),api=__webpack_require__("./frontend/src/lib/api.ts"),posthog_icons_es=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.7.3_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),kea_router_lib=__webpack_require__("./node_modules/.pnpm/kea-router@3.1.4_kea@3.1.5/node_modules/kea-router/lib/index.js"),constants=__webpack_require__("./frontend/src/lib/constants.tsx"),types=__webpack_require__("./frontend/src/types.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let sections=[{title:"US hosting",features:["Faster if you and your users are based in the US","Easier to comply with some US regulations","Hosted in Virginia, USA"]},{title:"EU hosting",features:["Faster if you and your users are based in Europe","Keeps data in the EU to comply with GDPR requirements","Hosted in Frankfurt, Germany"]}];function WhyCloudModal(_ref){let{setOpen,open}=_ref;return(0,jsx_runtime.jsx)(src.fQ,{title:"Which region would you like to choose?",isOpen:open,onClose:()=>setOpen(!1),children:(0,jsx_runtime.jsxs)("div",{className:"bg-bg-light w-full max-w-248 h-full ml-auto relative z-10 overflow-auto",children:[(0,jsx_runtime.jsx)("h3",{className:"text-lg text-semibold opacity-50 m-0",children:"A particular region can have advantages, but you can migrate regions at any time for free."}),(0,jsx_runtime.jsx)("ul",{className:"list-none m-0 p-0 mt-6",children:sections.map(section=>(0,jsx_runtime.jsxs)("li",{className:"border-t first:border-t-0 border-dashed border-gray-accent mt-4 pt-2 first:mt-0",children:[(0,jsx_runtime.jsx)("h4",{className:"text-lg m-0 mt-4",children:section.title}),(0,jsx_runtime.jsx)("ul",{className:"list-none p-0 my-2 space-y-1",children:section.features.map(feature=>(0,jsx_runtime.jsxs)("li",{className:"flex items-center space-x-2 text-gray-accent-light align-center",children:[(0,jsx_runtime.jsx)(posthog_icons_es.IconCheckCircle,{className:"w-[20px] flex-shrink-0"}),(0,jsx_runtime.jsx)("span",{className:"text-black font-medium",children:feature})]},feature))})]},section.title))})]})})}let authentication_RegionSelect=()=>{let{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic),[regionModalOpen,setRegionModalOpen]=(0,react.useState)(!1);return preflight?.cloud&&preflight?.region?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LemonField.D.Pure,{label:"Data region",onExplanationClick:()=>setRegionModalOpen(!0),children:(0,jsx_runtime.jsx)(src.Yv,{onChange:region=>{if(!region)return;let{pathname,search,hash}=kea_router_lib.router.values.currentLocation,newUrl=`https://${constants.Yr[region]}${pathname}${search}${hash}`;window.location.href=newUrl},value:preflight?.region,options:[{label:"United States",value:types.yp.US},{label:"European Union",value:types.yp.EU}],fullWidth:!0})}),(0,jsx_runtime.jsx)(WhyCloudModal,{open:regionModalOpen,setOpen:setRegionModalOpen})]}):null};var SupportModalButton=__webpack_require__("./frontend/src/scenes/authentication/SupportModalButton.tsx");let ERROR_MESSAGES={no_new_organizations:"Your email address is not associated with an account. Please ask your administrator for an invite.",invalid_sso_provider:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The SSO provider you specified is invalid. Visit"," ",(0,jsx_runtime.jsx)(Link.r,{to:"https://posthog.com/sso",target:"_blank",children:"https://posthog.com/sso"})," ","for details."]}),improperly_configured_sso:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Cannot login with SSO provider because the provider is not configured, or your instance does not have the required license. Please visit"," ",(0,jsx_runtime.jsx)(Link.r,{to:"https://posthog.com/sso",target:"_blank",children:"https://posthog.com/sso"})," ","for details."]}),jit_not_enabled:"We could not find an account with your email address and your organization does not support automatic enrollment. Please contact your administrator for an invite."},scene={component:Login_Login,logic:loginLogic.l};function Login_Login(){let{precheck}=(0,index_esm.useActions)(loginLogic.l),{precheckResponse,precheckResponseLoading,login,isLoginSubmitting,generalError}=(0,index_esm.useValues)(loginLogic.l),{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic),passwordInputRef=(0,react.useRef)(null),isPasswordHidden="pending"===precheckResponse.status||precheckResponse.sso_enforcement;return(0,react.useEffect)(()=>{if(preflight?.cloud)try{!function(){let currentSubdomain=window.location.hostname.split(".")[0],loggedInInstance=(0,api.ej)("ph_current_instance"),loggedInSubdomain=function(loggedInInstance){try{let url=loggedInInstance?.replace(/"/g,"");if(!url)return null;let hostname=new URL(url).hostname;switch(hostname){case"eu.posthog.com":return"eu";case"us.posthog.com":return"us";default:return null}}catch(e){return(0,esm_exports.Tb)(e,{extra:{loggedInInstance}}),null}}(loggedInInstance);if(!loggedInSubdomain)return;let loggedIntoOtherSubdomain=loggedInSubdomain!==currentSubdomain;if(loggedIntoOtherSubdomain){let newUrl=new URL(window.location.href);newUrl.hostname=newUrl.hostname.replace(currentSubdomain,loggedInSubdomain);let cancelClicked=!1;src.UJ.info(`Redirecting to your logged-in account in the Cloud ${function(subdomain){switch(subdomain){case"us":return"US";case"eu":return"EU"}}(loggedInSubdomain)} region`,{button:{label:"Cancel",action:()=>{cancelClicked=!0}},onClose:()=>{cancelClicked||window.location.assign(newUrl.href)},closeButton:!1,autoClose:2500})}}()}catch(e){(0,esm_exports.Tb)(e)}},[]),(0,react.useEffect)(()=>{isPasswordHidden||passwordInputRef.current?.focus()},[isPasswordHidden]),(0,jsx_runtime.jsx)(BridgePage.N,{view:"login",hedgehog:!0,message:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Welcome to",(0,jsx_runtime.jsx)("br",{})," PostHog",preflight?.cloud?" Cloud":"","!"]}),footer:(0,jsx_runtime.jsx)(SupportModalButton.J,{}),children:(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsx)("h2",{children:"Log in"}),generalError&&(0,jsx_runtime.jsx)(LemonBanner.V,{type:"error",children:generalError.detail||ERROR_MESSAGES[generalError.code]||(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Could not complete your login.",(0,jsx_runtime.jsx)("br",{}),"Please try again."]})}),(0,jsx_runtime.jsxs)(lib.Form,{logic:loginLogic.l,formKey:"login",enableFormOnSubmit:!0,className:"space-y-4",children:[(0,jsx_runtime.jsx)(authentication_RegionSelect,{}),(0,jsx_runtime.jsx)(LemonField.D,{name:"email",label:"Email",children:(0,jsx_runtime.jsx)(src.DF,{className:"ph-ignore-input",autoFocus:!0,"data-attr":"login-email",placeholder:"email@yourcompany.com",type:"email",onBlur:()=>precheck({email:login.email}),onPressEnter:e=>{precheck({email:login.email}),isPasswordHidden&&(e.preventDefault(),passwordInputRef.current?.focus())}})}),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.default)("PasswordWrapper",isPasswordHidden&&"zero-height"),children:(0,jsx_runtime.jsx)(LemonField.D,{name:"password",label:(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 items-center justify-between gap-2",children:[(0,jsx_runtime.jsx)("span",{children:"Password"}),(0,jsx_runtime.jsx)(Link.r,{to:"/reset","data-attr":"forgot-password",children:"Forgot your password?"})]}),children:(0,jsx_runtime.jsx)(src.DF,{type:"password",inputRef:passwordInputRef,className:"ph-ignore-input","data-attr":"password",placeholder:"••••••••••",autoComplete:"current-password"})})}),"pending"!==precheckResponse.status&&precheckResponse.sso_enforcement?(0,jsx_runtime.jsx)(SocialLoginButton.mB,{provider:precheckResponse.sso_enforcement,email:login.email}):(0,jsx_runtime.jsx)(src.Jp,{type:"primary",status:"alt",htmlType:"submit","data-attr":"password-login",fullWidth:!0,center:!0,loading:isLoginSubmitting||precheckResponseLoading,size:"large",children:"Log in"}),precheckResponse.saml_available&&!precheckResponse.sso_enforcement&&(0,jsx_runtime.jsx)(SocialLoginButton.mB,{provider:"saml",email:login.email})]}),preflight?.cloud&&(0,jsx_runtime.jsxs)("div",{className:"text-center mt-4",children:["Don't have an account?"," ",(0,jsx_runtime.jsx)(Link.r,{to:"/signup","data-attr":"signup",className:"font-bold",children:"Create an account"})]}),!precheckResponse.saml_available&&!precheckResponse.sso_enforcement&&(0,jsx_runtime.jsx)(SocialLoginButton.NN,{caption:"Or log in with",topDivider:!0})]})})}},"./frontend/src/scenes/authentication/Login2FA.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Login2FA:()=>Login2FA});var src=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),index_esm=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib=__webpack_require__("./node_modules/.pnpm/kea-forms@3.2.0_kea@3.1.5/node_modules/kea-forms/lib/index.js"),BridgePage=__webpack_require__("./frontend/src/lib/components/BridgePage/BridgePage.tsx"),LemonBanner=__webpack_require__("./frontend/src/lib/lemon-ui/LemonBanner/index.ts"),LemonField=__webpack_require__("./frontend/src/lib/lemon-ui/LemonField/index.ts"),preflightLogic=__webpack_require__("./frontend/src/scenes/PreflightCheck/preflightLogic.tsx"),api=__webpack_require__("./frontend/src/lib/api.ts"),featureFlagLogic=__webpack_require__("./frontend/src/lib/logic/featureFlagLogic.ts"),loginLogic=__webpack_require__("./frontend/src/scenes/authentication/loginLogic.ts");let login2FALogic=(0,index_esm.kea)([(0,index_esm.path)(["scenes","authentication","login2FALogic"]),(0,index_esm.connect)({values:[preflightLogic.preflightLogic,["preflight"],featureFlagLogic.h,["featureFlags"]]}),(0,index_esm.actions)({setGeneralError:(code,detail)=>({code,detail}),setLoginStep:step=>({step}),clearGeneralError:!0}),(0,index_esm.reducers)({generalError:[null,{setGeneralError:(_,error)=>error,clearGeneralError:()=>null}]}),(0,lib.forms)(_ref=>{let{actions}=_ref;return{twofactortoken:{defaults:{token:""},errors:_ref2=>{let{token}=_ref2;return{token:token?6!==token.length||isNaN(parseInt(token))?"A token must consist of 6 digits":null:"Please enter a token to continue"}},submit:async(_ref3,breakpoint)=>{let{token}=_ref3;breakpoint();try{return await api.ZP.create("api/login/token",{token})}catch(e){let{code}=e,{detail}=e;throw actions.setGeneralError(code,detail),e}}}}}),(0,index_esm.listeners)({submitTwofactortokenSuccess:()=>{(0,loginLogic.w)(),window.location.reload()}})]);var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function Login2FA(){let{isTwofactortokenSubmitting,generalError}=(0,index_esm.useValues)(login2FALogic),{preflight}=(0,index_esm.useValues)(preflightLogic.preflightLogic);return(0,jsx_runtime.jsx)(BridgePage.N,{view:"login",hedgehog:!0,message:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Welcome to",(0,jsx_runtime.jsx)("br",{})," PostHog",preflight?.cloud?" Cloud":"","!"]}),children:(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)("h2",{children:"Two-Factor Authentication"}),(0,jsx_runtime.jsx)("p",{children:"Enter a token from your authenticator app."}),(0,jsx_runtime.jsxs)(lib.Form,{logic:login2FALogic,formKey:"twofactortoken",enableFormOnSubmit:!0,className:"space-y-4",children:[generalError&&(0,jsx_runtime.jsx)(LemonBanner.V,{type:"error",children:generalError.detail}),(0,jsx_runtime.jsx)(LemonField.D,{name:"token",label:"Authenticator token",children:(0,jsx_runtime.jsx)(src.DF,{className:"ph-ignore-input",autoFocus:!0,"data-attr":"token",placeholder:"123456",inputMode:"numeric",autoComplete:"one-time-code"})}),(0,jsx_runtime.jsx)(src.Jp,{type:"primary",status:"alt",htmlType:"submit","data-attr":"2fa-login",fullWidth:!0,center:!0,loading:isTwofactortokenSubmitting,size:"large",children:"Login"})]})]})})}},"./frontend/src/scenes/authentication/SupportModalButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>SupportModalButton});var _posthog_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@posthog+icons@0.7.3_react-dom@18.2.0_react@18.2.0/node_modules/@posthog/icons/dist/posthog-icons.es.js"),_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/@posthog/lemon-ui/src/index.ts"),kea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),lib_components_Support_supportLogic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/lib/components/Support/supportLogic.ts"),scenes_PreflightCheck_preflightLogic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/scenes/PreflightCheck/preflightLogic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function SupportModalButton(_ref){let{name,email}=_ref,{openSupportForm}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useActions)(lib_components_Support_supportLogic__WEBPACK_IMPORTED_MODULE_3__.Pw),{preflight}=(0,kea__WEBPACK_IMPORTED_MODULE_2__.useValues)(scenes_PreflightCheck_preflightLogic__WEBPACK_IMPORTED_MODULE_4__.preflightLogic);return preflight?.cloud?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_posthog_lemon_ui__WEBPACK_IMPORTED_MODULE_1__.Jp,{onClick:()=>{openSupportForm({name,email,kind:"bug",target_area:"login"})},icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_posthog_icons__WEBPACK_IMPORTED_MODULE_0__.IconBug,{}),size:"small",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"text-muted",children:"Report an issue"})})})}):null}},"./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@10.3.1_sass@1.56.0_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./frontend/src/lib/components/BridgePage/BridgePage.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,'.BridgePage{background-color:var(--bg-bridge);display:flex;flex:1;flex-direction:column;height:100vh;overflow:scroll;position:relative;-ms-overflow-style:none}.BridgePage::-webkit-scrollbar{width:0!important}.BridgePage .BridgePage__main{align-items:center;display:flex;flex:1;justify-content:center;padding:1rem}.BridgePage .BridgePage__content-wrapper{max-width:380px;width:100%}@media screen and (min-width:768px){.BridgePage .BridgePage__content-wrapper{max-width:100%;width:auto}}.BridgePage .BridgePage__left-wrapper{display:none;margin-right:60px}@media screen and (min-width:768px){.BridgePage .BridgePage__left-wrapper{display:block;visibility:visible}}.BridgePage .BridgePage__content{background-color:#fff;border-radius:var(--radius);box-shadow:var(--shadow-elevation-3000);padding:2rem;position:relative;width:100%}.BridgePage .BridgePage__content h2{font-weight:700;text-align:center}.BridgePage .BridgePage__footer{color:var(--muted);display:flex;font-weight:500;gap:10%;justify-content:center;margin:1rem 0;width:100%}.BridgePage .BridgePage__left{display:none;position:relative;visibility:none}.BridgePage .BridgePage__left img{height:300px}.BridgePage .BridgePage__left .BridgePage__left__art{margin-top:50px}.BridgePage .BridgePage__left .BridgePage__left__message{background-color:var(--text-3000);border-radius:.75rem;bottom:220px;color:#fff;font-size:.8em;font-weight:600;left:265px;max-width:150px;opacity:0;padding:.5rem .75rem;position:absolute;transition-timing-function:cubic-bezier(.455,.03,.31,1.585)}.BridgePage .BridgePage__left .BridgePage__left__message:after{border:10px solid transparent;border-left:10px solid var(--text-3000);content:" ";left:20px;margin-top:-10px;position:absolute;top:100%}.BridgePage .BridgePage__left .BridgePage__left__message.BridgePage__left__message--enter{opacity:0;transform:translateY(50px) rotate(0deg) scale(.5)}.BridgePage .BridgePage__left .BridgePage__left__message.BridgePage__left__message--enter-active,.BridgePage .BridgePage__left .BridgePage__left__message.BridgePage__left__message--enter-done{opacity:1;transform:translateY(0) rotate(5deg) scale(1);transition:opacity .2s,transform .2s}@media(prefers-reduced-motion){.BridgePage .BridgePage__left .BridgePage__left__message{transition:none}}@media screen and (min-width:768px){.BridgePage .BridgePage__left{display:block;visibility:visible}}.BridgePage .BridgePage__cta{max-width:400px}.BridgePage .BridgePage__header-logo.mobile{display:block}@media screen and (min-width:768px){.BridgePage .BridgePage__header-logo.mobile{display:none}}.BridgePage .BridgePage__header-logo .header-logo{padding-bottom:3rem;text-align:center}.BridgePage .BridgePage__header-logo .header-logo img{height:24px}@media screen and (min-width:768px){.BridgePage.BridgePage--fixed-width .BridgePage__content{max-width:400px;width:400px}}',""]),module.exports=exports},"./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@10.3.1_sass@1.56.0_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./frontend/src/scenes/authentication/Login.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".PasswordWrapper{max-height:1000px;overflow:hidden;transition:max-height .8s ease-in-out}.PasswordWrapper.zero-height{margin:0!important;max-height:0}",""]),module.exports=exports}}]);