"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[75261],{"./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Adapter:()=>Adapter,CodeActionAdaptor:()=>CodeActionAdaptor,DefinitionAdapter:()=>DefinitionAdapter,DiagnosticsAdapter:()=>DiagnosticsAdapter,DocumentHighlightAdapter:()=>DocumentHighlightAdapter,FormatAdapter:()=>FormatAdapter,FormatHelper:()=>FormatHelper,FormatOnTypeAdapter:()=>FormatOnTypeAdapter,InlayHintsAdapter:()=>InlayHintsAdapter,Kind:()=>Kind,LibFiles:()=>LibFiles,OutlineAdapter:()=>OutlineAdapter,QuickInfoAdapter:()=>QuickInfoAdapter,ReferenceAdapter:()=>ReferenceAdapter,RenameAdapter:()=>RenameAdapter,SignatureHelpAdapter:()=>SignatureHelpAdapter,SuggestAdapter:()=>SuggestAdapter,WorkerManager:()=>WorkerManager,flattenDiagnosticMessageText:()=>flattenDiagnosticMessageText,getJavaScriptWorker:()=>getJavaScriptWorker,getTypeScriptWorker:()=>getTypeScriptWorker,setupJavaScript:()=>setupJavaScript,setupTypeScript:()=>setupTypeScript});var secondTarget,javaScriptWorker,typeScriptWorker,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/editor.api.js"),_monaco_contribution_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js"),__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__publicField=(obj,key,value)=>(__defNormalProp(obj,"symbol"!=typeof key?key+"":key,value),value),monaco_editor_core_exports={};__copyProps(monaco_editor_core_exports,_editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__,"default"),secondTarget&&__copyProps(secondTarget,_editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__,"default");var WorkerManager=class{constructor(_modeId,_defaults){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_configChangeListener",void 0),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_updateExtraLibsToken",void 0),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_extraLibsChangeListener",void 0),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_worker",void 0),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_client",void 0),this._modeId=_modeId,this._defaults=_defaults,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;let myToken=++this._updateExtraLibsToken,proxy=await this._worker.getProxy();this._updateExtraLibsToken===myToken&&proxy.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=monaco_editor_core_exports.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync())?await this._worker.withSyncedResources(monaco_editor_core_exports.editor.getModels().filter(model=>model.getLanguageId()===this._modeId).map(model=>model.uri)):await this._worker.getProxy())()),this._client}async getLanguageServiceWorker(){let client=await this._getClient();if(this._worker){for(var _len=arguments.length,resources=Array(_len),_key=0;_key<_len;_key++)resources[_key]=arguments[_key];await this._worker.withSyncedResources(resources)}return client}},libFileSet={};function flattenDiagnosticMessageText(diag,newLine){let indent=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("string"==typeof diag)return diag;if(void 0===diag)return"";let result="";if(indent){result+=newLine;for(let i=0;i<indent;i++)result+="  "}if(result+=diag.messageText,indent++,diag.next)for(let kid of diag.next)result+=flattenDiagnosticMessageText(kid,newLine,indent);return result}function displayPartsToString(displayParts){return displayParts?displayParts.map(displayPart=>displayPart.text).join(""):""}libFileSet["lib.d.ts"]=!0,libFileSet["lib.decorators.d.ts"]=!0,libFileSet["lib.decorators.legacy.d.ts"]=!0,libFileSet["lib.dom.d.ts"]=!0,libFileSet["lib.dom.iterable.d.ts"]=!0,libFileSet["lib.es2015.collection.d.ts"]=!0,libFileSet["lib.es2015.core.d.ts"]=!0,libFileSet["lib.es2015.d.ts"]=!0,libFileSet["lib.es2015.generator.d.ts"]=!0,libFileSet["lib.es2015.iterable.d.ts"]=!0,libFileSet["lib.es2015.promise.d.ts"]=!0,libFileSet["lib.es2015.proxy.d.ts"]=!0,libFileSet["lib.es2015.reflect.d.ts"]=!0,libFileSet["lib.es2015.symbol.d.ts"]=!0,libFileSet["lib.es2015.symbol.wellknown.d.ts"]=!0,libFileSet["lib.es2016.array.include.d.ts"]=!0,libFileSet["lib.es2016.d.ts"]=!0,libFileSet["lib.es2016.full.d.ts"]=!0,libFileSet["lib.es2017.d.ts"]=!0,libFileSet["lib.es2017.full.d.ts"]=!0,libFileSet["lib.es2017.intl.d.ts"]=!0,libFileSet["lib.es2017.object.d.ts"]=!0,libFileSet["lib.es2017.sharedmemory.d.ts"]=!0,libFileSet["lib.es2017.string.d.ts"]=!0,libFileSet["lib.es2017.typedarrays.d.ts"]=!0,libFileSet["lib.es2018.asyncgenerator.d.ts"]=!0,libFileSet["lib.es2018.asynciterable.d.ts"]=!0,libFileSet["lib.es2018.d.ts"]=!0,libFileSet["lib.es2018.full.d.ts"]=!0,libFileSet["lib.es2018.intl.d.ts"]=!0,libFileSet["lib.es2018.promise.d.ts"]=!0,libFileSet["lib.es2018.regexp.d.ts"]=!0,libFileSet["lib.es2019.array.d.ts"]=!0,libFileSet["lib.es2019.d.ts"]=!0,libFileSet["lib.es2019.full.d.ts"]=!0,libFileSet["lib.es2019.intl.d.ts"]=!0,libFileSet["lib.es2019.object.d.ts"]=!0,libFileSet["lib.es2019.string.d.ts"]=!0,libFileSet["lib.es2019.symbol.d.ts"]=!0,libFileSet["lib.es2020.bigint.d.ts"]=!0,libFileSet["lib.es2020.d.ts"]=!0,libFileSet["lib.es2020.date.d.ts"]=!0,libFileSet["lib.es2020.full.d.ts"]=!0,libFileSet["lib.es2020.intl.d.ts"]=!0,libFileSet["lib.es2020.number.d.ts"]=!0,libFileSet["lib.es2020.promise.d.ts"]=!0,libFileSet["lib.es2020.sharedmemory.d.ts"]=!0,libFileSet["lib.es2020.string.d.ts"]=!0,libFileSet["lib.es2020.symbol.wellknown.d.ts"]=!0,libFileSet["lib.es2021.d.ts"]=!0,libFileSet["lib.es2021.full.d.ts"]=!0,libFileSet["lib.es2021.intl.d.ts"]=!0,libFileSet["lib.es2021.promise.d.ts"]=!0,libFileSet["lib.es2021.string.d.ts"]=!0,libFileSet["lib.es2021.weakref.d.ts"]=!0,libFileSet["lib.es2022.array.d.ts"]=!0,libFileSet["lib.es2022.d.ts"]=!0,libFileSet["lib.es2022.error.d.ts"]=!0,libFileSet["lib.es2022.full.d.ts"]=!0,libFileSet["lib.es2022.intl.d.ts"]=!0,libFileSet["lib.es2022.object.d.ts"]=!0,libFileSet["lib.es2022.regexp.d.ts"]=!0,libFileSet["lib.es2022.sharedmemory.d.ts"]=!0,libFileSet["lib.es2022.string.d.ts"]=!0,libFileSet["lib.es2023.array.d.ts"]=!0,libFileSet["lib.es2023.d.ts"]=!0,libFileSet["lib.es2023.full.d.ts"]=!0,libFileSet["lib.es5.d.ts"]=!0,libFileSet["lib.es6.d.ts"]=!0,libFileSet["lib.esnext.d.ts"]=!0,libFileSet["lib.esnext.full.d.ts"]=!0,libFileSet["lib.esnext.intl.d.ts"]=!0,libFileSet["lib.scripthost.d.ts"]=!0,libFileSet["lib.webworker.d.ts"]=!0,libFileSet["lib.webworker.importscripts.d.ts"]=!0,libFileSet["lib.webworker.iterable.d.ts"]=!0;var Adapter=class{constructor(_worker){this._worker=_worker}_textSpanToRange(model,span){let p1=model.getPositionAt(span.start),p2=model.getPositionAt(span.start+span.length),{lineNumber:startLineNumber,column:startColumn}=p1,{lineNumber:endLineNumber,column:endColumn}=p2;return{startLineNumber,startColumn,endLineNumber,endColumn}}},LibFiles=class{constructor(_worker){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_libFiles",void 0),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_hasFetchedLibFiles",void 0),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_fetchLibFilesPromise",void 0),this._worker=_worker,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(uri){return!!uri&&0===uri.path.indexOf("/lib.")&&!!libFileSet[uri.path.slice(1)]}getOrCreateModel(fileName){let uri=monaco_editor_core_exports.Uri.parse(fileName),model=monaco_editor_core_exports.editor.getModel(uri);if(model)return model;if(this.isLibFile(uri)&&this._hasFetchedLibFiles)return monaco_editor_core_exports.editor.createModel(this._libFiles[uri.path.slice(1)],"typescript",uri);let matchedLibFile=_monaco_contribution_js__WEBPACK_IMPORTED_MODULE_2__.TG.getExtraLibs()[fileName];return matchedLibFile?monaco_editor_core_exports.editor.createModel(matchedLibFile.content,"typescript",uri):null}_containsLibFile(uris){for(let uri of uris)if(this.isLibFile(uri))return!0;return!1}async fetchLibFilesIfNecessary(uris){this._containsLibFile(uris)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(w=>w.getLibFiles()).then(libFiles=>{this._hasFetchedLibFiles=!0,this._libFiles=libFiles})),this._fetchLibFilesPromise}},DiagnosticsAdapter=class extends Adapter{constructor(_libFiles,_defaults,_selector,worker){super(worker),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_disposables",[]),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"_listener",Object.create(null)),this._libFiles=_libFiles,this._defaults=_defaults,this._selector=_selector;let onModelAdd=model=>{let handle;if(model.getLanguageId()!==_selector)return;let maybeValidate=()=>{let{onlyVisible}=this._defaults.getDiagnosticsOptions();onlyVisible?model.isAttachedToEditor()&&this._doValidate(model):this._doValidate(model)},changeSubscription=model.onDidChangeContent(()=>{clearTimeout(handle),handle=window.setTimeout(maybeValidate,500)}),visibleSubscription=model.onDidChangeAttached(()=>{let{onlyVisible}=this._defaults.getDiagnosticsOptions();onlyVisible&&(model.isAttachedToEditor()?maybeValidate():monaco_editor_core_exports.editor.setModelMarkers(model,this._selector,[]))});this._listener[model.uri.toString()]={dispose(){changeSubscription.dispose(),visibleSubscription.dispose(),clearTimeout(handle)}},maybeValidate()},onModelRemoved=model=>{monaco_editor_core_exports.editor.setModelMarkers(model,this._selector,[]);let key=model.uri.toString();this._listener[key]&&(this._listener[key].dispose(),delete this._listener[key])};this._disposables.push(monaco_editor_core_exports.editor.onDidCreateModel(model=>onModelAdd(model))),this._disposables.push(monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved)),this._disposables.push(monaco_editor_core_exports.editor.onDidChangeModelLanguage(event=>{onModelRemoved(event.model),onModelAdd(event.model)})),this._disposables.push({dispose(){for(let model of monaco_editor_core_exports.editor.getModels())onModelRemoved(model)}});let recomputeDiagostics=()=>{for(let model of monaco_editor_core_exports.editor.getModels())onModelRemoved(model),onModelAdd(model)};this._disposables.push(this._defaults.onDidChange(recomputeDiagostics)),this._disposables.push(this._defaults.onDidExtraLibsChange(recomputeDiagostics)),monaco_editor_core_exports.editor.getModels().forEach(model=>onModelAdd(model))}dispose(){this._disposables.forEach(d=>d&&d.dispose()),this._disposables=[]}async _doValidate(model){let worker=await this._worker(model.uri);if(model.isDisposed())return;let promises=[],{noSyntaxValidation,noSemanticValidation,noSuggestionDiagnostics}=this._defaults.getDiagnosticsOptions();noSyntaxValidation||promises.push(worker.getSyntacticDiagnostics(model.uri.toString())),noSemanticValidation||promises.push(worker.getSemanticDiagnostics(model.uri.toString())),noSuggestionDiagnostics||promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));let allDiagnostics=await Promise.all(promises);if(!allDiagnostics||model.isDisposed())return;let diagnostics=allDiagnostics.reduce((p,c)=>c.concat(p),[]).filter(d=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(d.code)),relatedUris=diagnostics.map(d=>d.relatedInformation||[]).reduce((p,c)=>c.concat(p),[]).map(relatedInformation=>relatedInformation.file?monaco_editor_core_exports.Uri.parse(relatedInformation.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(relatedUris),model.isDisposed()||monaco_editor_core_exports.editor.setModelMarkers(model,this._selector,diagnostics.map(d=>this._convertDiagnostics(model,d)))}_convertDiagnostics(model,diag){let diagStart=diag.start||0,diagLength=diag.length||1,{lineNumber:startLineNumber,column:startColumn}=model.getPositionAt(diagStart),{lineNumber:endLineNumber,column:endColumn}=model.getPositionAt(diagStart+diagLength),tags=[];return diag.reportsUnnecessary&&tags.push(monaco_editor_core_exports.MarkerTag.Unnecessary),diag.reportsDeprecated&&tags.push(monaco_editor_core_exports.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(diag.category),startLineNumber,startColumn,endLineNumber,endColumn,message:flattenDiagnosticMessageText(diag.messageText,"\n"),code:diag.code.toString(),tags,relatedInformation:this._convertRelatedInformation(model,diag.relatedInformation)}}_convertRelatedInformation(model,relatedInformation){if(!relatedInformation)return[];let result=[];return relatedInformation.forEach(info=>{let relatedResource=model;if(info.file&&(relatedResource=this._libFiles.getOrCreateModel(info.file.fileName)),!relatedResource)return;let infoStart=info.start||0,infoLength=info.length||1,{lineNumber:startLineNumber,column:startColumn}=relatedResource.getPositionAt(infoStart),{lineNumber:endLineNumber,column:endColumn}=relatedResource.getPositionAt(infoStart+infoLength);result.push({resource:relatedResource.uri,startLineNumber,startColumn,endLineNumber,endColumn,message:flattenDiagnosticMessageText(info.messageText,"\n")})}),result}_tsDiagnosticCategoryToMarkerSeverity(category){switch(category){case 1:return monaco_editor_core_exports.MarkerSeverity.Error;case 3:break;case 0:return monaco_editor_core_exports.MarkerSeverity.Warning;case 2:return monaco_editor_core_exports.MarkerSeverity.Hint}return monaco_editor_core_exports.MarkerSeverity.Info}},SuggestAdapter=class extends Adapter{get triggerCharacters(){return["."]}async provideCompletionItems(model,position,_context,token){let wordInfo=model.getWordUntilPosition(position),wordRange=new monaco_editor_core_exports.Range(position.lineNumber,wordInfo.startColumn,position.lineNumber,wordInfo.endColumn),resource=model.uri,offset=model.getOffsetAt(position),worker=await this._worker(resource);if(model.isDisposed())return;let info=await worker.getCompletionsAtPosition(resource.toString(),offset);if(!info||model.isDisposed())return;let suggestions=info.entries.map(entry=>{let range=wordRange;if(entry.replacementSpan){let p1=model.getPositionAt(entry.replacementSpan.start),p2=model.getPositionAt(entry.replacementSpan.start+entry.replacementSpan.length);range=new monaco_editor_core_exports.Range(p1.lineNumber,p1.column,p2.lineNumber,p2.column)}let tags=[];return void 0!==entry.kindModifiers&&-1!==entry.kindModifiers.indexOf("deprecated")&&tags.push(monaco_editor_core_exports.languages.CompletionItemTag.Deprecated),{uri:resource,position,offset,range,label:entry.name,insertText:entry.name,sortText:entry.sortText,kind:SuggestAdapter.convertKind(entry.kind),tags}});return{suggestions}}async resolveCompletionItem(item,token){let resource=item.uri,position=item.position,offset=item.offset,worker=await this._worker(resource),details=await worker.getCompletionEntryDetails(resource.toString(),offset,item.label);return details?{uri:resource,position,label:details.name,kind:SuggestAdapter.convertKind(details.kind),detail:displayPartsToString(details.displayParts),documentation:{value:SuggestAdapter.createDocumentationString(details)}}:item}static convertKind(kind){switch(kind){case Kind.primitiveType:case Kind.keyword:return monaco_editor_core_exports.languages.CompletionItemKind.Keyword;case Kind.variable:case Kind.localVariable:return monaco_editor_core_exports.languages.CompletionItemKind.Variable;case Kind.memberVariable:case Kind.memberGetAccessor:case Kind.memberSetAccessor:return monaco_editor_core_exports.languages.CompletionItemKind.Field;case Kind.function:case Kind.memberFunction:case Kind.constructSignature:case Kind.callSignature:case Kind.indexSignature:return monaco_editor_core_exports.languages.CompletionItemKind.Function;case Kind.enum:return monaco_editor_core_exports.languages.CompletionItemKind.Enum;case Kind.module:return monaco_editor_core_exports.languages.CompletionItemKind.Module;case Kind.class:return monaco_editor_core_exports.languages.CompletionItemKind.Class;case Kind.interface:return monaco_editor_core_exports.languages.CompletionItemKind.Interface;case Kind.warning:return monaco_editor_core_exports.languages.CompletionItemKind.File}return monaco_editor_core_exports.languages.CompletionItemKind.Property}static createDocumentationString(details){let documentationString=displayPartsToString(details.documentation);if(details.tags)for(let tag of details.tags)documentationString+=`

${tagToString(tag)}`;return documentationString}};function tagToString(tag){let tagLabel=`*@${tag.name}*`;if("param"===tag.name&&tag.text){let[paramName,...rest]=tag.text;tagLabel+=`\`${paramName.text}\``,rest.length>0&&(tagLabel+=` \u2014 ${rest.map(r=>r.text).join(" ")}`)}else Array.isArray(tag.text)?tagLabel+=` \u2014 ${tag.text.map(r=>r.text).join(" ")}`:tag.text&&(tagLabel+=` \u2014 ${tag.text}`);return tagLabel}var SignatureHelpAdapter=class SignatureHelpAdapter extends Adapter{constructor(){super(...arguments),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(context){switch(context.triggerKind){case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.TriggerCharacter:if(!context.triggerCharacter)return{kind:"invoked"};if(context.isRetrigger)return{kind:"retrigger",triggerCharacter:context.triggerCharacter};return{kind:"characterTyped",triggerCharacter:context.triggerCharacter};case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.ContentChange:return context.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(model,position,token,context){let resource=model.uri,offset=model.getOffsetAt(position),worker=await this._worker(resource);if(model.isDisposed())return;let info=await worker.getSignatureHelpItems(resource.toString(),offset,{triggerReason:SignatureHelpAdapter._toSignatureHelpTriggerReason(context)});if(!info||model.isDisposed())return;let ret={activeSignature:info.selectedItemIndex,activeParameter:info.argumentIndex,signatures:[]};return info.items.forEach(item=>{let signature={label:"",parameters:[]};signature.documentation={value:displayPartsToString(item.documentation)},signature.label+=displayPartsToString(item.prefixDisplayParts),item.parameters.forEach((p,i,a)=>{let label=displayPartsToString(p.displayParts),parameter={label,documentation:{value:displayPartsToString(p.documentation)}};signature.label+=label,signature.parameters.push(parameter),i<a.length-1&&(signature.label+=displayPartsToString(item.separatorDisplayParts))}),signature.label+=displayPartsToString(item.suffixDisplayParts),ret.signatures.push(signature)}),{value:ret,dispose(){}}}},QuickInfoAdapter=class extends Adapter{async provideHover(model,position,token){let resource=model.uri,offset=model.getOffsetAt(position),worker=await this._worker(resource);if(model.isDisposed())return;let info=await worker.getQuickInfoAtPosition(resource.toString(),offset);if(!info||model.isDisposed())return;let documentation=displayPartsToString(info.documentation),tags=info.tags?info.tags.map(tag=>tagToString(tag)).join("  \n\n"):"",contents=displayPartsToString(info.displayParts);return{range:this._textSpanToRange(model,info.textSpan),contents:[{value:"```typescript\n"+contents+"\n```\n"},{value:documentation+(tags?"\n\n"+tags:"")}]}}},DocumentHighlightAdapter=class extends Adapter{async provideDocumentHighlights(model,position,token){let resource=model.uri,offset=model.getOffsetAt(position),worker=await this._worker(resource);if(model.isDisposed())return;let entries=await worker.getDocumentHighlights(resource.toString(),offset,[resource.toString()]);if(!(!entries||model.isDisposed()))return entries.flatMap(entry=>entry.highlightSpans.map(highlightSpans=>({range:this._textSpanToRange(model,highlightSpans.textSpan),kind:"writtenReference"===highlightSpans.kind?monaco_editor_core_exports.languages.DocumentHighlightKind.Write:monaco_editor_core_exports.languages.DocumentHighlightKind.Text})))}},DefinitionAdapter=class extends Adapter{constructor(_libFiles,worker){super(worker),this._libFiles=_libFiles}async provideDefinition(model,position,token){let resource=model.uri,offset=model.getOffsetAt(position),worker=await this._worker(resource);if(model.isDisposed())return;let entries=await worker.getDefinitionAtPosition(resource.toString(),offset);if(!entries||model.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(entries.map(entry=>monaco_editor_core_exports.Uri.parse(entry.fileName))),model.isDisposed()))return;let result=[];for(let entry of entries){let refModel=this._libFiles.getOrCreateModel(entry.fileName);refModel&&result.push({uri:refModel.uri,range:this._textSpanToRange(refModel,entry.textSpan)})}return result}},ReferenceAdapter=class extends Adapter{constructor(_libFiles,worker){super(worker),this._libFiles=_libFiles}async provideReferences(model,position,context,token){let resource=model.uri,offset=model.getOffsetAt(position),worker=await this._worker(resource);if(model.isDisposed())return;let entries=await worker.getReferencesAtPosition(resource.toString(),offset);if(!entries||model.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(entries.map(entry=>monaco_editor_core_exports.Uri.parse(entry.fileName))),model.isDisposed()))return;let result=[];for(let entry of entries){let refModel=this._libFiles.getOrCreateModel(entry.fileName);refModel&&result.push({uri:refModel.uri,range:this._textSpanToRange(refModel,entry.textSpan)})}return result}},OutlineAdapter=class extends Adapter{async provideDocumentSymbols(model,token){let resource=model.uri,worker=await this._worker(resource);if(model.isDisposed())return;let root=await worker.getNavigationTree(resource.toString());if(!root||model.isDisposed())return;let convert=(item,containerLabel)=>{let result2={name:item.text,detail:"",kind:outlineTypeTable[item.kind]||monaco_editor_core_exports.languages.SymbolKind.Variable,range:this._textSpanToRange(model,item.spans[0]),selectionRange:this._textSpanToRange(model,item.spans[0]),tags:[],children:item.childItems?.map(child=>convert(child,item.text)),containerName:containerLabel};return result2},result=root.childItems?root.childItems.map(item=>convert(item)):[];return result}},Kind=class{};__publicField(Kind,"unknown",""),__publicField(Kind,"keyword","keyword"),__publicField(Kind,"script","script"),__publicField(Kind,"module","module"),__publicField(Kind,"class","class"),__publicField(Kind,"interface","interface"),__publicField(Kind,"type","type"),__publicField(Kind,"enum","enum"),__publicField(Kind,"variable","var"),__publicField(Kind,"localVariable","local var"),__publicField(Kind,"function","function"),__publicField(Kind,"localFunction","local function"),__publicField(Kind,"memberFunction","method"),__publicField(Kind,"memberGetAccessor","getter"),__publicField(Kind,"memberSetAccessor","setter"),__publicField(Kind,"memberVariable","property"),__publicField(Kind,"constructorImplementation","constructor"),__publicField(Kind,"callSignature","call"),__publicField(Kind,"indexSignature","index"),__publicField(Kind,"constructSignature","construct"),__publicField(Kind,"parameter","parameter"),__publicField(Kind,"typeParameter","type parameter"),__publicField(Kind,"primitiveType","primitive type"),__publicField(Kind,"label","label"),__publicField(Kind,"alias","alias"),__publicField(Kind,"const","const"),__publicField(Kind,"let","let"),__publicField(Kind,"warning","warning");var outlineTypeTable=Object.create(null);outlineTypeTable[Kind.module]=monaco_editor_core_exports.languages.SymbolKind.Module,outlineTypeTable[Kind.class]=monaco_editor_core_exports.languages.SymbolKind.Class,outlineTypeTable[Kind.enum]=monaco_editor_core_exports.languages.SymbolKind.Enum,outlineTypeTable[Kind.interface]=monaco_editor_core_exports.languages.SymbolKind.Interface,outlineTypeTable[Kind.memberFunction]=monaco_editor_core_exports.languages.SymbolKind.Method,outlineTypeTable[Kind.memberVariable]=monaco_editor_core_exports.languages.SymbolKind.Property,outlineTypeTable[Kind.memberGetAccessor]=monaco_editor_core_exports.languages.SymbolKind.Property,outlineTypeTable[Kind.memberSetAccessor]=monaco_editor_core_exports.languages.SymbolKind.Property,outlineTypeTable[Kind.variable]=monaco_editor_core_exports.languages.SymbolKind.Variable,outlineTypeTable[Kind.const]=monaco_editor_core_exports.languages.SymbolKind.Variable,outlineTypeTable[Kind.localVariable]=monaco_editor_core_exports.languages.SymbolKind.Variable,outlineTypeTable[Kind.variable]=monaco_editor_core_exports.languages.SymbolKind.Variable,outlineTypeTable[Kind.function]=monaco_editor_core_exports.languages.SymbolKind.Function,outlineTypeTable[Kind.localFunction]=monaco_editor_core_exports.languages.SymbolKind.Function;var FormatHelper=class extends Adapter{static _convertOptions(options){return{ConvertTabsToSpaces:options.insertSpaces,TabSize:options.tabSize,IndentSize:options.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(model,change){return{text:change.newText,range:this._textSpanToRange(model,change.span)}}},FormatAdapter=class extends FormatHelper{constructor(){super(...arguments),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"canFormatMultipleRanges",!1)}async provideDocumentRangeFormattingEdits(model,range,options,token){let resource=model.uri,startOffset=model.getOffsetAt({lineNumber:range.startLineNumber,column:range.startColumn}),endOffset=model.getOffsetAt({lineNumber:range.endLineNumber,column:range.endColumn}),worker=await this._worker(resource);if(model.isDisposed())return;let edits=await worker.getFormattingEditsForRange(resource.toString(),startOffset,endOffset,FormatHelper._convertOptions(options));if(!(!edits||model.isDisposed()))return edits.map(edit=>this._convertTextChanges(model,edit))}},FormatOnTypeAdapter=class extends FormatHelper{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(model,position,ch,options,token){let resource=model.uri,offset=model.getOffsetAt(position),worker=await this._worker(resource);if(model.isDisposed())return;let edits=await worker.getFormattingEditsAfterKeystroke(resource.toString(),offset,ch,FormatHelper._convertOptions(options));if(!(!edits||model.isDisposed()))return edits.map(edit=>this._convertTextChanges(model,edit))}},CodeActionAdaptor=class extends FormatHelper{async provideCodeActions(model,range,context,token){let resource=model.uri,start=model.getOffsetAt({lineNumber:range.startLineNumber,column:range.startColumn}),end=model.getOffsetAt({lineNumber:range.endLineNumber,column:range.endColumn}),formatOptions=FormatHelper._convertOptions(model.getOptions()),errorCodes=context.markers.filter(m=>m.code).map(m=>m.code).map(Number),worker=await this._worker(resource);if(model.isDisposed())return;let codeFixes=await worker.getCodeFixesAtPosition(resource.toString(),start,end,errorCodes,formatOptions);if(!codeFixes||model.isDisposed())return{actions:[],dispose:()=>{}};let actions=codeFixes.filter(fix=>0===fix.changes.filter(change=>change.isNewFile).length).map(fix=>this._tsCodeFixActionToMonacoCodeAction(model,context,fix));return{actions,dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(model,context,codeFix){let edits=[];for(let change of codeFix.changes)for(let textChange of change.textChanges)edits.push({resource:model.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(model,textChange.span),text:textChange.newText}});let action={title:codeFix.description,edit:{edits},diagnostics:context.markers,kind:"quickfix"};return action}},RenameAdapter=class extends Adapter{constructor(_libFiles,worker){super(worker),this._libFiles=_libFiles}async provideRenameEdits(model,position,newName,token){let resource=model.uri,fileName=resource.toString(),offset=model.getOffsetAt(position),worker=await this._worker(resource);if(model.isDisposed())return;let renameInfo=await worker.getRenameInfo(fileName,offset,{allowRenameOfImportPath:!1});if(!1===renameInfo.canRename)return{edits:[],rejectReason:renameInfo.localizedErrorMessage};if(void 0!==renameInfo.fileToRename)throw Error("Renaming files is not supported.");let renameLocations=await worker.findRenameLocations(fileName,offset,!1,!1,!1);if(!renameLocations||model.isDisposed())return;let edits=[];for(let renameLocation of renameLocations){let model2=this._libFiles.getOrCreateModel(renameLocation.fileName);if(model2)edits.push({resource:model2.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(model2,renameLocation.textSpan),text:newName}});else throw Error(`Unknown file ${renameLocation.fileName}.`)}return{edits}}},InlayHintsAdapter=class extends Adapter{async provideInlayHints(model,range,token){let resource=model.uri,fileName=resource.toString(),start=model.getOffsetAt({lineNumber:range.startLineNumber,column:range.startColumn}),end=model.getOffsetAt({lineNumber:range.endLineNumber,column:range.endColumn}),worker=await this._worker(resource);if(model.isDisposed())return null;let tsHints=await worker.provideInlayHints(fileName,start,end),hints=tsHints.map(hint=>({...hint,label:hint.text,position:model.getPositionAt(hint.position),kind:this._convertHintKind(hint.kind)}));return{hints,dispose:()=>{}}}_convertHintKind(kind){return"Parameter"===kind?monaco_editor_core_exports.languages.InlayHintKind.Parameter:monaco_editor_core_exports.languages.InlayHintKind.Type}};function setupTypeScript(defaults){typeScriptWorker=setupMode(defaults,"typescript")}function setupJavaScript(defaults){javaScriptWorker=setupMode(defaults,"javascript")}function getJavaScriptWorker(){return new Promise((resolve,reject)=>{if(!javaScriptWorker)return reject("JavaScript not registered!");resolve(javaScriptWorker)})}function getTypeScriptWorker(){return new Promise((resolve,reject)=>{if(!typeScriptWorker)return reject("TypeScript not registered!");resolve(typeScriptWorker)})}function setupMode(defaults,modeId){let disposables=[],providers=[],client=new WorkerManager(modeId,defaults);disposables.push(client);let worker=function(){return client.getLanguageServiceWorker(...arguments)},libFiles=new LibFiles(worker);return!function(){let{modeConfiguration}=defaults;disposeAll(providers),modeConfiguration.completionItems&&providers.push(monaco_editor_core_exports.languages.registerCompletionItemProvider(modeId,new SuggestAdapter(worker))),modeConfiguration.signatureHelp&&providers.push(monaco_editor_core_exports.languages.registerSignatureHelpProvider(modeId,new SignatureHelpAdapter(worker))),modeConfiguration.hovers&&providers.push(monaco_editor_core_exports.languages.registerHoverProvider(modeId,new QuickInfoAdapter(worker))),modeConfiguration.documentHighlights&&providers.push(monaco_editor_core_exports.languages.registerDocumentHighlightProvider(modeId,new DocumentHighlightAdapter(worker))),modeConfiguration.definitions&&providers.push(monaco_editor_core_exports.languages.registerDefinitionProvider(modeId,new DefinitionAdapter(libFiles,worker))),modeConfiguration.references&&providers.push(monaco_editor_core_exports.languages.registerReferenceProvider(modeId,new ReferenceAdapter(libFiles,worker))),modeConfiguration.documentSymbols&&providers.push(monaco_editor_core_exports.languages.registerDocumentSymbolProvider(modeId,new OutlineAdapter(worker))),modeConfiguration.rename&&providers.push(monaco_editor_core_exports.languages.registerRenameProvider(modeId,new RenameAdapter(libFiles,worker))),modeConfiguration.documentRangeFormattingEdits&&providers.push(monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(modeId,new FormatAdapter(worker))),modeConfiguration.onTypeFormattingEdits&&providers.push(monaco_editor_core_exports.languages.registerOnTypeFormattingEditProvider(modeId,new FormatOnTypeAdapter(worker))),modeConfiguration.codeActions&&providers.push(monaco_editor_core_exports.languages.registerCodeActionProvider(modeId,new CodeActionAdaptor(worker))),modeConfiguration.inlayHints&&providers.push(monaco_editor_core_exports.languages.registerInlayHintsProvider(modeId,new InlayHintsAdapter(worker))),modeConfiguration.diagnostics&&providers.push(new DiagnosticsAdapter(libFiles,defaults,modeId,worker))}(),disposables.push({dispose:()=>disposeAll(providers)}),worker}function disposeAll(disposables){for(;disposables.length;)disposables.pop().dispose()}}}]);
//# sourceMappingURL=75261.a55f10bd.iframe.bundle.js.map