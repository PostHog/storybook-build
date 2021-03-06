(window.webpackJsonp=window.webpackJsonp||[]).push([[231,235],{"./frontend/src/scenes/cohorts/Cohort.tsx":function(y,n,e){"use strict";e.r(n),e.d(n,"scene",function(){return Se}),e.d(n,"Cohort",function(){return ae});var l=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(l),C=e("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./frontend/src/scenes/cohorts/Cohort.scss"),i=e.n(C),b={};b.insert="head",b.singleton=!1;var le=s()(i.a,b),re=i.a.locals||{},K=e("./node_modules/react/index.js"),t=e.n(K),ce=e("./node_modules/core-js/modules/es.function.name.js"),u=e("./node_modules/kea/lib/index.esm.js"),H=e("./frontend/src/scenes/urls.ts"),Z=e("./frontend/src/models/cohortsModel.ts"),j=Object(u.kea)([Object(u.props)({}),Object(u.key)(function(f){return f.id||"new"}),Object(u.path)(["scenes","cohorts","cohortLogic"]),Object(u.selectors)({breadcrumbs:[function(){return[Z.a.selectors.cohortsById,function(f,x){return x.id}]},function(f,x){var S;return[{name:"Cohorts",path:H.a.cohorts()},{name:x!=="new"&&((S=f[x])===null||S===void 0?void 0:S.name)||"Untitled"}]}]})]),U=e("./node_modules/antd/lib/dropdown/style/index.css"),m=e("./frontend/src/scenes/cohorts/cohortEditLogic.ts"),V=e("./frontend/src/scenes/userLogic.ts"),P=e("./frontend/src/lib/forms/VerticalForm.tsx"),w=e("./frontend/src/lib/components/PageHeader.tsx"),L=e("./frontend/src/lib/components/LemonButton/index.ts"),r=e("./node_modules/kea-router/lib/index.js"),a=e("./node_modules/antd/es/divider/index.js"),o=e("./node_modules/antd/es/row/index.js"),c=e("./node_modules/antd/es/col/index.js"),h=e("./frontend/src/lib/forms/Field.tsx"),B=e("./frontend/src/lib/components/LemonInput/LemonInput.tsx"),W=e("./frontend/src/lib/components/Tooltip.tsx"),Y=e("./frontend/src/lib/components/LemonSelect.tsx"),ie=e("./frontend/src/scenes/cohorts/CohortFilters/constants.tsx"),T=e("./frontend/src/lib/constants.tsx"),ee=e("./frontend/src/types.ts"),ne=e("./frontend/src/lib/components/LemonTextArea/LemonTextArea.tsx"),d=e("./node_modules/antd/lib/upload/Dragger.js"),A=e.n(d),g=e("./frontend/src/lib/components/icons.tsx"),O=e("./frontend/src/lib/components/PropertyGroupFilters/PropertyGroupFilters.tsx"),z=e("./node_modules/core-js/modules/es.array.map.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),I=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./frontend/src/scenes/cohorts/CohortFilters/CohortCriteriaGroups.scss"),J=e.n(k),v={};v.insert="head",v.singleton=!1;var R=s()(J.a,v),D=J.a.locals||{},te=e("./frontend/src/scenes/cohorts/cohortUtils.tsx"),Q=e("./node_modules/kea-forms/lib/index.js"),Ee=e("./node_modules/kea-forms/lib/components.js"),ye=e("./node_modules/clsx/dist/clsx.m.js"),ge=e("./frontend/src/lib/components/Lettermark/Lettermark.tsx"),Ce=e("./frontend/src/lib/utils.tsx"),je=e("./frontend/src/lib/components/LemonDivider/index.ts"),Pe=e("./frontend/src/lib/components/AlertMessage/index.ts"),Te=e("./frontend/src/scenes/cohorts/CohortFilters/CohortCriteriaRowBuilder.tsx");function de(f){var x=Object(m.a)(f),S=Object(u.useValues)(x),se=S.cohort,q=Object(u.useActions)(x),fe=q.setInnerGroupType,he=q.duplicateFilter,me=q.removeFilter,p=q.addFilter;return t.a.createElement(t.a.Fragment,null,se.filters.properties.values.map(function(F,G){return Object(te.i)(F)?t.a.createElement(Q.Group,{key:G,name:["filters","properties","values",G]},G!==0&&t.a.createElement("div",{className:"CohortCriteriaGroups__matching-group__logical-divider"},se.filters.properties.type),t.a.createElement(Ee.Field,{name:"id",template:function(E){var M=E.error,_=E.kids;return t.a.createElement("div",{className:Object(ye.a)("CohortCriteriaGroups__matching-group",M&&"CohortCriteriaGroups__matching-group--error")},t.a.createElement(o.a,{align:"middle",wrap:!1,className:"px-4"},t.a.createElement(ge.a,{name:Ce.d[G],color:ge.b.Gray}),t.a.createElement(O.a,{prefix:"Match persons against",suffix:"criteria",onChange:function(pe){return fe(pe,G)},value:F.type}),t.a.createElement("div",{style:{flex:1,minWidth:"0.5rem"}}),t.a.createElement(L.a,{icon:t.a.createElement(g.IconCopy,null),type:"alt",onClick:function(){return he(G)}}),se.filters.properties.values.length>1&&t.a.createElement(L.a,{icon:t.a.createElement(g.IconDelete,null),type:"alt",onClick:function(){return me(G)}})),t.a.createElement(je.a,{large:!0}),M&&t.a.createElement(o.a,{className:"CohortCriteriaGroups__matching-group__error-row"},t.a.createElement(Pe.a,{type:"error",style:{width:"100%"}},t.a.createElement(t.a.Fragment,null,M))),_)}},t.a.createElement(t.a.Fragment,null,F.values.map(function(oe,E){return Object(te.i)(oe)?null:t.a.createElement(Q.Group,{key:E,name:["values",E]},t.a.createElement(Te.a,{id:f.id,groupIndex:G,index:E,logicalOperator:F.type,criteria:oe,type:Object(te.g)(oe),hideDeleteIcon:F.values.length<=1}),E===F.values.length-1&&t.a.createElement(o.a,null,t.a.createElement(L.a,{"data-attr":"cohort-add-filter-group-criteria",style:{margin:"0.75rem"},type:"secondary",onClick:function(){return p(G)},icon:t.a.createElement(g.IconPlusMini,{color:"var(--primary)"})},"Add criteria")))})))):null}),t.a.createElement(L.a,{"data-attr":"cohort-add-filter-group",className:"mb-4 mt-4",type:"secondary",onClick:function(){return p()},icon:t.a.createElement(g.IconPlusMini,{color:"var(--primary)"}),fullWidth:!0},"Add criteria group"))}try{de.displayName="CohortCriteriaGroups",de.__docgenInfo={description:"",displayName:"CohortCriteriaGroups",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:'number | "new"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["frontend/src/scenes/cohorts/CohortFilters/CohortCriteriaGroups.tsx#CohortCriteriaGroups"]={docgenInfo:de.__docgenInfo,name:"CohortCriteriaGroups",path:"frontend/src/scenes/cohorts/CohortFilters/CohortCriteriaGroups.tsx#CohortCriteriaGroups"})}catch(f){}var Oe=e("./frontend/src/lib/components/Spinner/Spinner.tsx"),xe=e("./frontend/src/scenes/persons/Persons.tsx");function ue(f){var x=f.id,S={id:x},se=Object(m.a)(S),q=Object(u.useActions)(se),fe=q.deleteCohort,he=q.setOuterGroupsType,me=Object(u.useValues)(se),p=me.cohort,F=me.cohortLoading,G=Object(u.useValues)(V.a),oe=G.hasAvailableFeature,E=p.id==="new"||p.id===void 0;return t.a.createElement("div",{className:"cohort"},t.a.createElement(P.a,{logic:m.a,props:S,formKey:"cohort",enableFormOnSubmit:!0},t.a.createElement(w.a,{title:E?"New cohort":p.name||"Untitled",buttons:t.a.createElement("div",{className:"flex items-center"},E?t.a.createElement(L.a,{"data-attr":"cancel-cohort",type:"secondary",onClick:function(){r.router.actions.push(H.a.cohorts())},style:{marginRight:8},disabled:F},"Cancel"):t.a.createElement(L.a,{"data-attr":"delete-cohort",status:"danger",type:"secondary",onClick:function(){fe()},style:{marginRight:8},disabled:F},"Delete"),t.a.createElement(L.a,{type:"primary","data-attr":"save-cohort",htmlType:"submit",loading:F||p.is_calculating,disabled:F||p.is_calculating},"Save"))}),t.a.createElement(a.a,null),t.a.createElement(o.a,{gutter:[16,24],style:{maxWidth:640},"data-tooltip":"cohorts-type"},t.a.createElement(c.a,{xs:24,sm:12},t.a.createElement(h.a,{name:"name",label:"Name",className:"Cohort__Name"},t.a.createElement(B.a,{"data-attr":"cohort-name"}))),t.a.createElement(c.a,{xs:24,sm:12},t.a.createElement(h.a,{name:"is_static",label:"Type"},function(M){var _=M.value,X=M.onChange;return t.a.createElement(W.a,{title:E?null:"Create a new cohort to use a different type of cohort."},t.a.createElement("div",null,t.a.createElement(Y.a,{disabled:!E,options:ie.b,value:_?T.b.Static:T.b.Dynamic,onChange:function(ve){X(ve===T.b.Static)},type:"stealth",outlined:!0,style:{width:"100%"},"data-attr":"cohort-type"})))}))),oe(ee.d.DASHBOARD_COLLABORATION)&&t.a.createElement(o.a,{gutter:[16,24],className:"mt-4 ph-ignore-input",style:{maxWidth:640}},t.a.createElement(c.a,{span:24},t.a.createElement(h.a,{name:"description",label:"Description","data-attr":"cohort-description"},t.a.createElement(ne.a,null)))),p.is_static?t.a.createElement(o.a,{gutter:24,className:"mt-4 ph-ignore-input"},t.a.createElement(c.a,{span:24},t.a.createElement(h.a,{name:"csv",label:E?"Upload users":"Add users","data-attr":"cohort-csv"},function(M){var _,X,pe=M.onChange;return t.a.createElement(t.a.Fragment,null,t.a.createElement("span",{className:"mb-4"},"Upload a CSV file to add users to your cohort. The CSV file only requires a single column with the user\u2019s distinct ID."),t.a.createElement(A.a,{name:"file",multiple:!1,fileList:p.csv?[p.csv]:[],accept:".csv",showUploadList:!1,beforeUpload:function(be){return pe(be),!1},className:"cohort-csv-dragger"},p.csv?t.a.createElement(t.a.Fragment,null,t.a.createElement(g.IconUploadFile,{style:{fontSize:"3rem",color:"var(--muted-alt)"}}),t.a.createElement("div",{className:"ant-upload-text"},(_=(X=p.csv)===null||X===void 0?void 0:X.name)!==null&&_!==void 0?_:"File chosen")):t.a.createElement(t.a.Fragment,null,t.a.createElement(g.IconUploadFile,{style:{fontSize:"3rem",color:"var(--muted-alt)"}}),t.a.createElement("div",{className:"ant-upload-text"},"Drag a file here or click to browse for a file"))))}))):t.a.createElement(t.a.Fragment,null,t.a.createElement(a.a,null),t.a.createElement(o.a,{gutter:24,className:"mt-4"},t.a.createElement(c.a,{span:24},t.a.createElement(t.a.Fragment,null,t.a.createElement(o.a,{align:"middle",justify:"space-between",wrap:!1},t.a.createElement(o.a,{className:"ant-form-item ant-form-item-label",style:{marginBottom:0}},t.a.createElement("label",{htmlFor:"groups",title:"Matching criteria"},"Matching criteria"),t.a.createElement("span",null,"Actors who match the following criteria will be part of the cohort. Continuously updated automatically.")),t.a.createElement(o.a,{align:"middle",wrap:!1,justify:"space-between",className:"pl-4"},t.a.createElement(O.a,{value:p.filters.properties.type,onChange:function(_){he(_)},topLevelFilter:!0,suffix:"criteria"}))),t.a.createElement(de,{id:S.id}))))),!E&&t.a.createElement(t.a.Fragment,null,t.a.createElement(a.a,null),t.a.createElement("div",null,t.a.createElement("h3",{className:"l3"},"Persons in this cohort"),p.is_calculating?t.a.createElement("div",{className:"cohort-recalculating flex items-center"},t.a.createElement(Oe.a,{size:"sm",style:{marginRight:4}}),"We're recalculating who belongs to this cohort. This could take up to a couple of minutes."):t.a.createElement("div",{style:{marginTop:15}},t.a.createElement(xe.Persons,{cohort:p.id}))))))}try{ue.displayName="CohortEdit",ue.__docgenInfo={description:"",displayName:"CohortEdit",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:'number | "new"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["frontend/src/scenes/cohorts/CohortEdit.tsx#CohortEdit"]={docgenInfo:ue.__docgenInfo,name:"CohortEdit",path:"frontend/src/scenes/cohorts/CohortEdit.tsx#CohortEdit"})}catch(f){}var Se={component:ae,logic:j,paramsToProps:function(x){var S=x.params.id;return{id:S&&S!=="new"?parseInt(S):"new"}}};function ae(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=f.id;return t.a.createElement(ue,{id:x})}try{ae.displayName="Cohort",ae.__docgenInfo={description:"",displayName:"Cohort",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:'number | "new"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["frontend/src/scenes/cohorts/Cohort.tsx#Cohort"]={docgenInfo:ae.__docgenInfo,name:"Cohort",path:"frontend/src/scenes/cohorts/Cohort.tsx#Cohort"})}catch(f){}},"./frontend/src/scenes/groups/groupsListLogic.ts":function(y,n,e){"use strict";e.d(n,"a",function(){return L});var l=e("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),s=e.n(l),C=e("./node_modules/@babel/runtime/regenerator/index.js"),i=e.n(C),b=e("./node_modules/core-js/modules/es.array.iterator.js"),le=e.n(b),re=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(re),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ce=e.n(t),u=e("./node_modules/core-js/modules/es.array.concat.js"),H=e.n(u),Z=e("./node_modules/kea/lib/index.esm.js"),j=e("./frontend/src/lib/api.ts"),U=e("./frontend/src/lib/introductions/groupsAccessLogic.ts"),m=e("./frontend/src/lib/utils.tsx"),V=e("./frontend/src/scenes/teamLogic.tsx"),P=e("./frontend/src/scenes/urls.ts"),w=e("./frontend/src/models/groupsModel.ts"),L=Object(Z.kea)({path:["groups","groupsListLogic"],connect:{values:[V.a,["currentTeamId"],w.a,["groupTypes","aggregationLabel"],U.b,["groupsEnabled"]]},actions:function(){return{loadGroups:function(o){return{url:o}},setTab:function(o){return{tab:o}}}},loaders:function(a){var o=a.values;return{groups:[{next:null,previous:null,results:[]},{loadGroups:function(){var c=s()(i.a.mark(function B(W){var Y;return i.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(Y=W.url,!o.groupsEnabled){T.next=6;break}return Y=Y||"api/projects/".concat(o.currentTeamId,"/groups/?group_type_index=").concat(o.currentTab),T.next=5,j.b.get(Y);case 5:return T.abrupt("return",T.sent);case 6:case"end":return T.stop()}},B)}));function h(B){return c.apply(this,arguments)}return h}()}]}},reducers:{currentTab:["-1",{setTab:function(a,o){var c=o.tab;return c}}]},selectors:{currentTabName:[function(r){return[r.currentTab,r.groupTypes,r.aggregationLabel]},function(r,a,o){return r==="-1"?"Persons":a!=null&&a.length?Object(m.j)(o(parseInt(r)).singular):""}],groupName:[function(r){return[r.currentTab,r.aggregationLabel]},function(r,a){return r==="-1"?{singular:"person",plural:"persons"}:a(parseInt(r))}],breadcrumbs:[function(r){return[r.currentTabName,r.currentTab]},function(r,a){return[{name:r,path:P.a.groups(a)}]}]},actionToUrl:function(){return{setTab:function(o){var c=o.tab;return c!=="-1"?P.a.groups(c):P.a.persons()}}},urlToAction:function(a){var o=a.actions,c=a.values;return{"/groups/:id":function(B){var W=B.id;W&&(o.setTab(W),o.loadGroups())},"/persons":function(){c.currentTab!=="-1"&&o.setTab("-1")}}}})},"./frontend/src/scenes/persons/PersonPageHeader.tsx":function(y,n,e){"use strict";e.d(n,"a",function(){return j});var l=e("./node_modules/kea/lib/index.esm.js"),s=e("./frontend/src/lib/components/PageHeader.tsx"),C=e("./node_modules/react/index.js"),i=e.n(C),b=e("./node_modules/core-js/modules/es.array.includes.js"),le=e("./node_modules/core-js/modules/es.string.includes.js"),re=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/antd/es/tabs/index.js"),t=e("./frontend/src/lib/introductions/groupsAccessLogic.ts"),ce=e("./frontend/src/lib/utils.tsx"),u=e("./frontend/src/models/groupsModel.ts"),H=e("./frontend/src/scenes/groups/groupsListLogic.ts");function Z(){var U=Object(l.useActions)(H.a),m=U.setTab,V=Object(l.useValues)(H.a),P=V.currentTab,w=Object(l.useValues)(u.a),L=w.groupTypes,r=w.aggregationLabel,a=Object(l.useValues)(t.b),o=a.groupsAccessStatus,c=[t.a.HasAccess,t.a.HasGroupTypes,t.a.NoAccess].includes(o);return i.a.createElement(K.a,{activeKey:P,onChange:function(B){return m(B)}},i.a.createElement(K.a.TabPane,{tab:"Persons",key:"-1"}),c?i.a.createElement(K.a.TabPane,{tab:"Introducing Group Analytics",key:"0"}):L.map(function(h){return i.a.createElement(K.a.TabPane,{tab:Object(ce.j)(r(h.group_type_index).plural),key:h.group_type_index})}))}function j(U){var m=U.hideGroupTabs,V=Object(l.useValues)(u.a),P=V.showGroupsOptions;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Persons".concat(P?" & Groups":""),caption:"A catalog of your product's end users".concat(P?" and groups":"",".")}),!m&&P&&i.a.createElement(Z,null))}try{j.displayName="PersonPageHeader",j.__docgenInfo={description:"",displayName:"PersonPageHeader",props:{hideGroupTabs:{defaultValue:null,description:"",name:"hideGroupTabs",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["frontend/src/scenes/persons/PersonPageHeader.tsx#PersonPageHeader"]={docgenInfo:j.__docgenInfo,name:"PersonPageHeader",path:"frontend/src/scenes/persons/PersonPageHeader.tsx#PersonPageHeader"})}catch(U){}},"./frontend/src/scenes/persons/Persons.scss":function(y,n,e){"use strict";var l=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(l),C=e("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./frontend/src/scenes/persons/Persons.scss"),i=e.n(C),b={};b.insert="head",b.singleton=!1;var le=s()(i.a,b),re=i.a.locals||{}},"./frontend/src/scenes/persons/Persons.tsx":function(y,n,e){"use strict";e.r(n),e.d(n,"scene",function(){return T}),e.d(n,"Persons",function(){return ee}),e.d(n,"PersonsScene",function(){return ne});var l=e("./node_modules/react/index.js"),s=e.n(l),C=e("./node_modules/kea/lib/index.esm.js"),i=e("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),b=e.n(i),le=e("./node_modules/core-js/modules/es.array.concat.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./frontend/src/lib/components/TimezoneAware/index.tsx"),t=e("./frontend/src/lib/components/PropertiesTable.tsx"),ce=e("./frontend/src/scenes/persons/Persons.scss"),u=e("./frontend/src/lib/components/CopyToClipboard.tsx"),H=e("./frontend/src/scenes/persons/PersonHeader.tsx"),Z=e("./frontend/src/lib/components/LemonTable/index.ts");function j(d){var A=d.people,g=d.loading,O=g===void 0?!1:g,z=d.hasPrevious,N=d.hasNext,I=d.loadPrevious,$=d.loadNext,k=d.compact,J=[{title:"Person",key:"person",render:function(R,D){return s.a.createElement(H.a,{withIcon:!0,person:D})}},{title:"ID",key:"id",render:function(R,D){return s.a.createElement("div",{style:{overflow:"hidden"}},D.distinct_ids.length&&s.a.createElement(u.a,{explicitValue:D.distinct_ids[0],iconStyle:{color:"var(--primary)"},description:"person distinct ID"},D.distinct_ids[0]))}}].concat(b()(k?[]:[{title:"First seen",dataIndex:"created_at",render:function(R){return R?s.a.createElement(K.b,{time:R}):s.a.createElement(s.a.Fragment,null)}}]));return s.a.createElement(Z.a,{"data-tooltip":"persons-table",columns:J,loading:O,rowKey:"id",pagination:{controlled:!0,pageSize:100,onForward:N?function(){$==null||$(),window.scrollTo(0,0)}:void 0,onBackward:z?function(){I==null||I(),window.scrollTo(0,0)}:void 0},expandable:{expandedRowRender:function(R){var D=R.properties;return Object.keys(D).length?s.a.createElement(t.a,{properties:D}):"This person has no properties."}},dataSource:A,emptyState:"No persons",nouns:["person","persons"]})}try{j.displayName="PersonsTable",j.__docgenInfo={description:"",displayName:"PersonsTable",props:{people:{defaultValue:null,description:"",name:"people",required:!0,type:{name:"PersonType[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},hasPrevious:{defaultValue:null,description:"",name:"hasPrevious",required:!1,type:{name:"boolean"}},hasNext:{defaultValue:null,description:"",name:"hasNext",required:!1,type:{name:"boolean"}},loadPrevious:{defaultValue:null,description:"",name:"loadPrevious",required:!1,type:{name:"(() => void)"}},loadNext:{defaultValue:null,description:"",name:"loadNext",required:!1,type:{name:"(() => void)"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["frontend/src/scenes/persons/PersonsTable.tsx#PersonsTable"]={docgenInfo:j.__docgenInfo,name:"PersonsTable",path:"frontend/src/scenes/persons/PersonsTable.tsx#PersonsTable"})}catch(d){}var U=e("./node_modules/antd/es/popconfirm/index.js"),m=e("./frontend/src/scenes/persons/personsLogic.ts"),V=e("./node_modules/@babel/runtime/helpers/slicedToArray.js"),P=e.n(V),w=e("./node_modules/core-js/modules/es.regexp.exec.js"),L=e("./node_modules/core-js/modules/es.string.search.js"),r=e("./node_modules/antd/es/input/index.js"),a=e("./frontend/src/lib/components/LemonRow/index.ts"),o=e("./frontend/src/lib/components/icons.tsx"),c=function(A){var g=A.autoFocus,O=g===void 0?!0:g,z=Object(C.useActions)(m.a),N=z.loadPersons,I=z.setListFilters,$=Object(C.useValues)(m.a),k=$.listFilters,J=Object(l.useState)(""),v=P()(J,2),R=v[0],D=v[1];return Object(l.useEffect)(function(){D(k.search||"")},[]),s.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"min(100%, 24rem)"}},s.a.createElement(r.a.Search,{"data-attr":"persons-search",placeholder:"Search for persons",autoFocus:O,value:R,onChange:function(Q){D(Q.target.value)},enterButton:!0,onPressEnter:function(Q){Q.preventDefault(),I({search:R||void 0}),N()},allowClear:!0,onSearch:function(Q){I({search:Q||void 0}),N()},style:{width:"100%"}}),s.a.createElement(a.a,{className:"ml-2",type:"stealth",tooltip:s.a.createElement(s.a.Fragment,null,'Search by email or Distinct ID. Email will match partially, for example: "@gmail.com". Distinct ID needs to match exactly.'),icon:s.a.createElement(o.IconInfo,null)}))};try{c.displayName="PersonsSearch",c.__docgenInfo={description:"",displayName:"PersonsSearch",props:{autoFocus:{defaultValue:{value:"true"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["frontend/src/scenes/persons/PersonsSearch.tsx#PersonsSearch"]={docgenInfo:c.__docgenInfo,name:"PersonsSearch",path:"frontend/src/scenes/persons/PersonsSearch.tsx#PersonsSearch"})}catch(d){}var h=e("./frontend/src/scenes/persons/PersonPageHeader.tsx"),B=e("./frontend/src/lib/components/PropertyFilters/PropertyFilters.tsx"),W=e("./frontend/src/lib/components/TaxonomicFilter/types.ts"),Y=e("./frontend/src/lib/components/LemonButton/index.ts"),ie=e("./frontend/src/lib/components/ExportButton/exporter.tsx"),T={component:ne,logic:m.a,paramsToProps:function(){return{syncWithUrl:!0}}};function ee(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=d.cohort;return s.a.createElement(C.BindLogic,{logic:m.a,props:{cohort:A,syncWithUrl:!A}},s.a.createElement(ne,null))}function ne(){var d=Object(C.useActions)(m.a),A=d.loadPersons,g=d.setListFilters,O=Object(C.useValues)(m.a),z=O.cohortId,N=O.persons,I=O.listFilters,$=O.personsLoading,k=O.exporterProps,J=O.apiDocsURL;return s.a.createElement("div",{className:"persons-list"},!z&&s.a.createElement(h.a,null),s.a.createElement("div",{className:"space-y-2"},s.a.createElement("div",{className:"flex justify-between",style:{gap:"0.75rem"}},s.a.createElement(c,{autoFocus:!z}),s.a.createElement(U.a,{placement:"topRight",title:s.a.createElement(s.a.Fragment,null,"Exporting by csv is limited to 10,000 users.",s.a.createElement("br",null),"To return more, please use ",s.a.createElement("a",{href:J},"the API"),". Do you want to export by CSV?"),onConfirm:function(){return Object(ie.a)(k[0])}},s.a.createElement(Y.a,{type:"secondary",icon:s.a.createElement(o.IconExport,{style:{color:"var(--primary)"}})},I.properties&&I.properties.length>0?s.a.createElement("div",{style:{display:"block"}},"Export (",s.a.createElement("strong",null,I.properties.length)," filter)"):"Export"))),s.a.createElement(B.a,{pageKey:"persons-list-page",propertyFilters:I.properties,onChange:function(R){g({properties:R}),A()},endpoint:"person",taxonomicGroupTypes:[W.a.PersonProperties,W.a.Cohorts],showConditionBadge:!0}),s.a.createElement(j,{people:N.results,loading:$,hasPrevious:!!N.previous,hasNext:!!N.next,loadPrevious:function(){return A(N.previous)},loadNext:function(){return A(N.next)}})))}try{ee.displayName="Persons",ee.__docgenInfo={description:"",displayName:"Persons",props:{cohort:{defaultValue:null,description:"",name:"cohort",required:!1,type:{name:'number | "new"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["frontend/src/scenes/persons/Persons.tsx#Persons"]={docgenInfo:ee.__docgenInfo,name:"Persons",path:"frontend/src/scenes/persons/Persons.tsx#Persons"})}catch(d){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./frontend/src/scenes/cohorts/Cohort.scss":function(y,n,e){var l=e("./node_modules/css-loader/dist/runtime/api.js");n=l(!1),n.push([y.i,".Cohort__Name.ant-form-item-has-error .ant-form-item-explain-error{font-weight:500;margin:.25rem 0}.Cohort__Name.ant-form-item-has-error .LemonInput{border:1px solid var(--danger)}",""]),y.exports=n},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./frontend/src/scenes/cohorts/CohortFilters/CohortCriteriaGroups.scss":function(y,n,e){var l=e("./node_modules/css-loader/dist/runtime/api.js");n=l(!1),n.push([y.i,".CohortCriteriaGroups__matching-group{padding-top:1rem;border:1px solid var(--border);border-radius:4px;width:100%;margin:.5rem 0}.CohortCriteriaGroups__matching-group.CohortCriteriaGroups__matching-group--error{border:1px solid var(--danger)}.CohortCriteriaGroups__matching-group .CohortCriteriaGroups__matching-group__error-row{padding:0 1rem 1rem}.CohortCriteriaGroups__matching-group__logical-divider{color:var(--primary-alt);font-weight:600;font-size:12px;text-transform:uppercase;padding:0 1.5rem}",""]),y.exports=n},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./frontend/src/scenes/persons/Persons.scss":function(y,n,e){var l=e("./node_modules/css-loader/dist/runtime/api.js");n=l(!1),n.push([y.i,".extra-ids{display:inline-flex;align-items:center;height:1.25rem;line-height:1.125rem;margin:0 0 0 .25rem;padding:0 .25rem 0 .375rem;color:var(--primary);cursor:pointer}.extra-ids svg{margin-left:.25rem}",""]),y.exports=n}}]);
