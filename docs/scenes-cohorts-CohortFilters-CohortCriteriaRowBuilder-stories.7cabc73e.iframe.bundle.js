"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[1340],{"./frontend/src/scenes/cohorts/CohortFilters/CohortCriteriaRowBuilder.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_CohortCriteriaRowBuilder:()=>_CohortCriteriaRowBuilder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var kea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/kea@3.1.5_react@18.2.0/node_modules/kea/lib/index.esm.js"),kea_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/kea-forms@3.0.3_kea@3.1.5/node_modules/kea-forms/lib/index.js"),lib_components_TaxonomicFilter_mocks_taxonomicFilterMocksDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/__mocks__/taxonomicFilterMocksDecorator.ts"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),scenes_cohorts_cohortEditLogic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./frontend/src/scenes/cohorts/cohortEditLogic.ts"),scenes_cohorts_CohortFilters_CohortCriteriaRowBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./frontend/src/scenes/cohorts/CohortFilters/CohortCriteriaRowBuilder.tsx"),_models_actionsModel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./frontend/src/models/actionsModel.ts"),_models_cohortsModel__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./frontend/src/models/cohortsModel.ts"),_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./frontend/src/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Filters/Cohort Filters/Row Builder",component:scenes_cohorts_CohortFilters_CohortCriteriaRowBuilder__WEBPACK_IMPORTED_MODULE_5__.t,decorators:[lib_components_TaxonomicFilter_mocks_taxonomicFilterMocksDecorator__WEBPACK_IMPORTED_MODULE_2__.p]};function _CohortCriteriaRowBuilder(props){(0,kea__WEBPACK_IMPORTED_MODULE_0__.useMountedLogic)(_models_actionsModel__WEBPACK_IMPORTED_MODULE_6__.D),(0,kea__WEBPACK_IMPORTED_MODULE_0__.useMountedLogic)(_models_cohortsModel__WEBPACK_IMPORTED_MODULE_7__.Q),(0,kea__WEBPACK_IMPORTED_MODULE_0__.useMountedLogic)((0,scenes_cohorts_cohortEditLogic__WEBPACK_IMPORTED_MODULE_4__.B)({id:1}));const[type,setType]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_types__WEBPACK_IMPORTED_MODULE_8__.G2.PerformEvent);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(kea_forms__WEBPACK_IMPORTED_MODULE_1__.Form,{logic:scenes_cohorts_cohortEditLogic__WEBPACK_IMPORTED_MODULE_4__.B,props:{id:1},formKey:"cohort",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(scenes_cohorts_CohortFilters_CohortCriteriaRowBuilder__WEBPACK_IMPORTED_MODULE_5__.t,{...props,criteria:{},type,onChangeType:setType})})}_CohortCriteriaRowBuilder.parameters={..._CohortCriteriaRowBuilder.parameters,docs:{..._CohortCriteriaRowBuilder.parameters?.docs,source:{originalSource:"function _CohortCriteriaRowBuilder(props: CohortCriteriaRowBuilderProps): JSX.Element {\n  useMountedLogic(actionsModel);\n  useMountedLogic(cohortsModel);\n  useMountedLogic(cohortEditLogic({\n    id: 1\n  }));\n  const [type, setType] = useState<BehavioralFilterType>(BehavioralEventType.PerformEvent);\n  return <Form logic={cohortEditLogic} props={{\n    id: 1\n  }} formKey={'cohort'}>\n            <CohortCriteriaRowBuilder {...props} criteria={{}} type={type} onChangeType={setType} />\n        </Form>;\n}",..._CohortCriteriaRowBuilder.parameters?.docs?.source}}};const __namedExportsOrder=["_CohortCriteriaRowBuilder"]},"./frontend/src/lib/components/TaxonomicFilter/__mocks__/taxonomicFilterMocksDecorator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>taxonomicFilterMocksDecorator});var _mocks_browser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/mocks/browser.tsx"),_test_mocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/test/mocks.ts");const taxonomicFilterMocksDecorator=(0,_mocks_browser__WEBPACK_IMPORTED_MODULE_0__.x8)({get:{"/api/projects/:team_id/actions":{results:[_test_mocks__WEBPACK_IMPORTED_MODULE_1__.Jq]},"/api/projects/:team_id/persons/properties":[{id:1,name:"location",count:1},{id:2,name:"role",count:2},{id:3,name:"height",count:3},{id:4,name:"$browser",count:4}],"/api/projects/:team_id/property_definitions":[{name:"file_count",count:205},{name:"industry",count:205},{name:"name",count:205},{name:"plan",count:205},{name:"team_size",count:205},{name:"used_mb",count:205}],"/api/projects/:team_id/event_definitions":[{id:"a",name:"signed up",description:"signed up",count:101},{id:"b",name:"viewed insights",description:"signed up",count:1,verified:!0},{id:"c",name:"logged out",description:"signed up",count:103}],"/api/projects/:team_id/cohorts/":[{id:1,name:"Properties Cohort",count:1,groups:[{id:"a",name:"Properties Group",count:1,matchType:"properties"}]},{id:2,name:"Entities Cohort",count:1,groups:[{id:"b",name:"Entities Group",count:1,matchType:"entities"}]}]}})},"./frontend/src/test/mocks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eu:()=>mockIntegration,Jq:()=>mockActionDefinition,lI:()=>createMockSubscription,y5:()=>mockSlackChannels});var lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./frontend/src/lib/components/TaxonomicFilter/types.ts"),lib_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/src/lib/constants.tsx"),scenes_cohorts_CohortFilters_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/src/scenes/cohorts/CohortFilters/types.ts"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./frontend/src/types.ts");["event1","test event","$click","$autocapture","search","other event",...Array(150)].map(((name,index)=>({id:`uuid-${index}-foobar`,name:name||`misc-${index}-generated`,description:`${name||"name generation"} is the best!`,tags:[]})));const mockEventPropertyDefinition={id:"017e8d9e-4241-0000-57ad-3a7237ffdb8e",name:"$active_feature_flags",description:"",tags:[],is_numerical:!1,updated_at:"2022-01-24T21:32:38.359756Z",updated_by:null,is_seen_on_filtered_events:!0,property_type:void 0},mockActionDefinition=(["prop1","purchase_value","$click","$browser","browser_no_dollar_not_on_event","is_admin",...Array(50)].map(((name,index)=>({...mockEventPropertyDefinition,id:`uuid-${index}-foobar`,name:name||`misc-${index}-generated`,description:`${name||"name generation"} is the best!`,is_seen_on_filtered_events:(name||"").includes("$")}))),{id:3,name:"Action with a moderately long name",post_to_slack:!1,slack_message_format:"",steps:[{id:3,event:"$rageclick",tag_name:"div",text:null,href:null,selector:".buy-now-important-on-sale-button",url:"test",name:"Rage",url_matching:"contains",properties:[]},{id:4,event:null,properties:[{type:"property",key:"$geoip_country_code",value:["US","DE"],operator:"exact"}]}],created_at:"2022-01-24T21:32:38.360176Z",deleted:!1,is_calculating:!1,last_calculated_at:"2022-01-24T21:32:38.359756Z",team_id:1,created_by:null}),mockSubscription=(lib_constants__WEBPACK_IMPORTED_MODULE_1__.pt,_types__WEBPACK_IMPORTED_MODULE_3__.FT.Person,_types__WEBPACK_IMPORTED_MODULE_3__.WV.Exact,_types__WEBPACK_IMPORTED_MODULE_3__.J2.Or,_types__WEBPACK_IMPORTED_MODULE_3__.J2.Or,scenes_cohorts_CohortFilters_types__WEBPACK_IMPORTED_MODULE_2__.y4.Behavioral,_types__WEBPACK_IMPORTED_MODULE_3__.G2.PerformEvent,lib_components_TaxonomicFilter_types__WEBPACK_IMPORTED_MODULE_0__.t.Events,_types__WEBPACK_IMPORTED_MODULE_3__.Xy.Day,{id:1,title:"My example subscription",target_type:"email",target_value:"ben@posthog.com,geoff@other-company.com",frequency:"monthly",interval:2,start_date:"2022-01-01T00:09:00",byweekday:["wednesday"],bysetpos:1,summary:"sent every month on the first wednesday",created_at:"2022-01-01T00:09:00",updated_at:"2022-01-01T00:09:00"}),createMockSubscription=function(){return{...mockSubscription,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}},mockIntegration={id:1,kind:"slack",config:{team:{id:"123",name:"PostHog"}},created_at:"2022-01-01T00:09:00",created_by:{id:0,uuid:"1234",distinct_id:"1234",first_name:"Tim",email:"tim@posthog.com"}},mockSlackChannels=[{id:"C1",name:"general",is_private:!1,is_ext_shared:!1,is_member:!1},{id:"C2",name:"dev",is_private:!1,is_ext_shared:!1,is_member:!0},{id:"C3",name:"pineapple-conspiracies",is_private:!0,is_ext_shared:!1,is_member:!0},{id:"C4",name:"external-community",is_private:!1,is_ext_shared:!0,is_member:!1}]}}]);