"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[8947,902],{"./node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javadoc.js":(module,__unused_webpack_exports,__webpack_require__)=>{var refractorJava=__webpack_require__("./node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/java.js"),refractorJavadoclike=__webpack_require__("./node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javadoclike.js");function javadoc(Prism){var codeLinePattern,memberReference,reference;Prism.register(refractorJava),Prism.register(refractorJavadoclike),codeLinePattern=/(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,memberReference=/#\s*\w+(?:\s*\([^()]*\))?/.source,reference=/(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g,function(){return memberReference}),Prism.languages.javadoc=Prism.languages.extend("javadoclike",{}),Prism.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source+"(?:"+reference+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:Prism.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:codeLinePattern,lookbehind:!0,inside:Prism.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:codeLinePattern,lookbehind:!0,inside:{tag:Prism.languages.markup.tag,entity:Prism.languages.markup.entity,code:{pattern:/.+/,inside:Prism.languages.java,alias:"language-java"}}}}}],tag:Prism.languages.markup.tag,entity:Prism.languages.markup.entity}),Prism.languages.javadoclike.addSupport("java",Prism.languages.javadoc)}module.exports=javadoc,javadoc.displayName="javadoc",javadoc.aliases=[]},"./node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javadoclike.js":module=>{function javadoclike(Prism){var javaDocLike;Object.defineProperty(javaDocLike=Prism.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/},"addSupport",{value:function(languages,docLanguage){"string"==typeof languages&&(languages=[languages]),languages.forEach(function(lang){!function(lang,callback){var tokenName="doc-comment",grammar=Prism.languages[lang];if(grammar){var token=grammar[tokenName];if(!token){var definition={};definition[tokenName]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},token=(grammar=Prism.languages.insertBefore(lang,"comment",definition))[tokenName]}if(token instanceof RegExp&&(token=grammar[tokenName]={pattern:token}),Array.isArray(token))for(var i=0,l=token.length;i<l;i++)token[i]instanceof RegExp&&(token[i]={pattern:token[i]}),callback(token[i]);else callback(token)}}(lang,function(pattern){pattern.inside||(pattern.inside={}),pattern.inside.rest=docLanguage})})}}),javaDocLike.addSupport(["java","javascript","php"],javaDocLike)}module.exports=javadoclike,javadoclike.displayName="javadoclike",javadoclike.aliases=[]}}]);