"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[73949],{"./frontend/src/lib/components/Errors/ErrorDisplay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnonymousErrorWithStackTrace:()=>AnonymousErrorWithStackTrace,ChainedErrorStack:()=>ChainedErrorStack,ImportingModule:()=>ImportingModule,ResizeObserverLoopLimitExceeded:()=>ResizeObserverLoopLimitExceeded,SafariScriptError:()=>SafariScriptError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lib_components_Errors_ErrorDisplay__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/lib/components/Errors/ErrorDisplay.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let meta={title:"Components/Errors/Error Display",component:lib_components_Errors_ErrorDisplay__WEBPACK_IMPORTED_MODULE_0__.X},__WEBPACK_DEFAULT_EXPORT__=meta;function errorProperties(properties){return{$os:"Windows",$os_version:"10.0",$browser:"Chrome",$device_type:"Desktop",$current_url:"https://app.posthog.com/home",$host:"app.posthog.com",$pathname:"/home",$browser_version:113,$browser_language:"es-ES",$screen_height:1080,$screen_width:1920,$viewport_height:929,$viewport_width:1920,$lib:"web",$lib_version:"1.63.3",distinct_id:"iOizUPH4RH65nZjvGVBz5zZUmwdHvq2mxzNySQqqYkG",$device_id:"186144e7357245-0cfe8bf1b5b877-26021051-1fa400-186144e7358d3",$active_feature_flags:["are-the-flags","important-for-the-error"],$feature_flag_payloads:{"are-the-flags":'{\n    "flag": "payload"\n}'},$user_id:"iOizUPH4RH65nZjvGVBz5zZUmwdHvq2mxzNySQqqYkG",$groups:{project:"00000000-0000-0000-1847-88f0ffa23444",organization:"00000000-0000-0000-a050-5d4557279956",customer:"the-customer",instance:"https://app.posthog.com"},$exception_message:"ResizeObserver loop limit exceeded",$exception_type:"Error",$exception_fingerprint:"Error",$exception_personURL:"https://app.posthog.com/person/the-person-id",$sentry_event_id:"id-from-the-sentry-integration",$sentry_exception:{values:[{value:"ResizeObserver loop limit exceeded",type:"Error",mechanism:{type:"onerror",handled:!1,synthetic:!0},stacktrace:{frames:[{colno:0,filename:"https://app.posthog.com/home",function:"?",in_app:!0,lineno:0}]}}]},$sentry_exception_message:"ResizeObserver loop limit exceeded",$sentry_exception_type:"Error",$sentry_tags:{"PostHog Person URL":"https://app.posthog.com/person/the-person-id","PostHog Recording URL":"https://app.posthog.com/replay/the-session-id?t=866"},$sentry_url:"https://sentry.io/organizations/posthog/issues/?project=the-sentry-project-id&query=the-sentry-id",$session_id:"the-session-id",$window_id:"the-window-id",$pageview_id:"the-pageview-id",$sent_at:"2023-06-03T10:03:57.787000+00:00",$geoip_city_name:"Whoville",$geoip_country_name:"Wholand",$geoip_country_code:"WH",$geoip_continent_name:"Mystery",$geoip_continent_code:"MY",$geoip_latitude:-30.5023,$geoip_longitude:-71.1545,$geoip_time_zone:"UTC",$lib_version__major:1,$lib_version__minor:63,$lib_version__patch:3,...properties}}function ResizeObserverLoopLimitExceeded(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lib_components_Errors_ErrorDisplay__WEBPACK_IMPORTED_MODULE_0__.X,{eventProperties:errorProperties({$exception_message:"ResizeObserver loop limit exceeded",$exception_type:"Error",$exception_personURL:"https://app.posthog.com/person/the-person-id"})})}function SafariScriptError(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lib_components_Errors_ErrorDisplay__WEBPACK_IMPORTED_MODULE_0__.X,{eventProperties:errorProperties({$exception_type:"Error",$exception_message:"Script error.",$exception_is_synthetic:!0})})}function ImportingModule(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lib_components_Errors_ErrorDisplay__WEBPACK_IMPORTED_MODULE_0__.X,{eventProperties:errorProperties({$exception_type:"UnhandledRejection",$exception_message:"Importing module '/static/chunk-PIJHGO7Q.js' is not found.",$exception_stack_trace_raw:"[]",$exception_handled:!1})})}function AnonymousErrorWithStackTrace(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lib_components_Errors_ErrorDisplay__WEBPACK_IMPORTED_MODULE_0__.X,{eventProperties:errorProperties({$exception_type:"Error",$exception_message:"wat",$exception_stack_trace_raw:'[{"filename":"<anonymous>","function":"?","in_app":true,"lineno":1,"colno":26}]'})})}function ChainedErrorStack(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lib_components_Errors_ErrorDisplay__WEBPACK_IMPORTED_MODULE_0__.X,{eventProperties:errorProperties({$exception_type:"ZeroDivisionError",$exception_message:"division by zero",$exception_list:[{module:null,type:"ZeroDivisionError",value:"division by zero",stacktrace:{frames:[{filename:"example2.py",abs_path:"/posthog-python/example2.py",function:"will_raise",module:"__main__",lineno:33,pre_context:["def more_obfuscation():","    print(3 / 0)","","def will_raise():","    try:"],context_line:"        more_obfuscation()",post_context:["    except Exception as e:",'        raise CustomException("This is a custom exception") from e',"","will_raise()","exit()"]},{filename:"example2.py",abs_path:"/posthog-python/example2.py",function:"more_obfuscation",module:"__main__",lineno:29,pre_context:["","class CustomException(Exception):","    pass","","def more_obfuscation():"],context_line:"    print(3 / 0)",post_context:["","def will_raise():","    try:","        more_obfuscation()","    except Exception as e:"]}]}},{module:"__main__",type:"CustomException",value:"This is a custom exception",stacktrace:{frames:[{filename:"example2.py",abs_path:"/Users/neilkakkar/Project/posthog-python/example2.py",function:"<module>",module:"__main__",lineno:37,pre_context:["    try:","        more_obfuscation()","    except Exception as e:",'        raise CustomException("This is a custom exception") from e',""],context_line:"will_raise()",post_context:["exit()","","",'# print(posthog.get_all_flags("distinct_id_random_22"))',"# print("]},{filename:"example2.py",abs_path:"/Users/neilkakkar/Project/posthog-python/example2.py",function:"will_raise",module:"__main__",lineno:35,pre_context:["","def will_raise():","    try:","        more_obfuscation()","    except Exception as e:"],context_line:'        raise CustomException("This is a custom exception") from e',post_context:["","will_raise()","exit()","",""]}]}}]})})}ResizeObserverLoopLimitExceeded.parameters={...ResizeObserverLoopLimitExceeded.parameters,docs:{...ResizeObserverLoopLimitExceeded.parameters?.docs,source:{originalSource:"function ResizeObserverLoopLimitExceeded(): JSX.Element {\n  return <ErrorDisplay eventProperties={errorProperties({\n    $exception_message: 'ResizeObserver loop limit exceeded',\n    $exception_type: 'Error',\n    $exception_personURL: 'https://app.posthog.com/person/the-person-id'\n  })} />;\n}",...ResizeObserverLoopLimitExceeded.parameters?.docs?.source}}},SafariScriptError.parameters={...SafariScriptError.parameters,docs:{...SafariScriptError.parameters?.docs,source:{originalSource:"function SafariScriptError(): JSX.Element {\n  return <ErrorDisplay eventProperties={errorProperties({\n    $exception_type: 'Error',\n    $exception_message: 'Script error.',\n    $exception_is_synthetic: true\n  })} />;\n}",...SafariScriptError.parameters?.docs?.source}}},ImportingModule.parameters={...ImportingModule.parameters,docs:{...ImportingModule.parameters?.docs,source:{originalSource:"function ImportingModule(): JSX.Element {\n  return <ErrorDisplay eventProperties={errorProperties({\n    $exception_type: 'UnhandledRejection',\n    $exception_message: \"Importing module '/static/chunk-PIJHGO7Q.js' is not found.\",\n    $exception_stack_trace_raw: '[]',\n    $exception_handled: false\n  })} />;\n}",...ImportingModule.parameters?.docs?.source}}},AnonymousErrorWithStackTrace.parameters={...AnonymousErrorWithStackTrace.parameters,docs:{...AnonymousErrorWithStackTrace.parameters?.docs,source:{originalSource:'function AnonymousErrorWithStackTrace(): JSX.Element {\n  return <ErrorDisplay eventProperties={errorProperties({\n    $exception_type: \'Error\',\n    $exception_message: \'wat\',\n    $exception_stack_trace_raw: \'[{"filename":"<anonymous>","function":"?","in_app":true,"lineno":1,"colno":26}]\'\n  })} />;\n}',...AnonymousErrorWithStackTrace.parameters?.docs?.source}}},ChainedErrorStack.parameters={...ChainedErrorStack.parameters,docs:{...ChainedErrorStack.parameters?.docs,source:{originalSource:"function ChainedErrorStack(): JSX.Element {\n  return <ErrorDisplay eventProperties={errorProperties({\n    $exception_type: 'ZeroDivisionError',\n    $exception_message: 'division by zero',\n    $exception_list: [{\n      module: null,\n      type: 'ZeroDivisionError',\n      value: 'division by zero',\n      stacktrace: {\n        frames: [{\n          filename: 'example2.py',\n          abs_path: '/posthog-python/example2.py',\n          function: 'will_raise',\n          module: '__main__',\n          lineno: 33,\n          pre_context: ['def more_obfuscation():', '    print(3 / 0)', '', 'def will_raise():', '    try:'],\n          context_line: '        more_obfuscation()',\n          post_context: ['    except Exception as e:', '        raise CustomException(\"This is a custom exception\") from e', '', 'will_raise()', 'exit()']\n        }, {\n          filename: 'example2.py',\n          abs_path: '/posthog-python/example2.py',\n          function: 'more_obfuscation',\n          module: '__main__',\n          lineno: 29,\n          pre_context: ['', 'class CustomException(Exception):', '    pass', '', 'def more_obfuscation():'],\n          context_line: '    print(3 / 0)',\n          post_context: ['', 'def will_raise():', '    try:', '        more_obfuscation()', '    except Exception as e:']\n        }]\n      }\n    }, {\n      module: '__main__',\n      type: 'CustomException',\n      value: 'This is a custom exception',\n      stacktrace: {\n        frames: [{\n          filename: 'example2.py',\n          abs_path: '/Users/neilkakkar/Project/posthog-python/example2.py',\n          function: '<module>',\n          module: '__main__',\n          lineno: 37,\n          pre_context: ['    try:', '        more_obfuscation()', '    except Exception as e:', '        raise CustomException(\"This is a custom exception\") from e', ''],\n          context_line: 'will_raise()',\n          post_context: ['exit()', '', '', '# print(posthog.get_all_flags(\"distinct_id_random_22\"))', '# print(']\n        }, {\n          filename: 'example2.py',\n          abs_path: '/Users/neilkakkar/Project/posthog-python/example2.py',\n          function: 'will_raise',\n          module: '__main__',\n          lineno: 35,\n          pre_context: ['', 'def will_raise():', '    try:', '        more_obfuscation()', '    except Exception as e:'],\n          context_line: '        raise CustomException(\"This is a custom exception\") from e',\n          post_context: ['', 'will_raise()', 'exit()', '', '']\n        }]\n      }\n    }]\n  })} />;\n}",...ChainedErrorStack.parameters?.docs?.source}}};let __namedExportsOrder=["ResizeObserverLoopLimitExceeded","SafariScriptError","ImportingModule","AnonymousErrorWithStackTrace","ChainedErrorStack"]}}]);