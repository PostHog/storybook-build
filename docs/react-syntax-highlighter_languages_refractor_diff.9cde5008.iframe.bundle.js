"use strict";(self.webpackChunkposthog=self.webpackChunkposthog||[]).push([[36247],{"./node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/diff.js":module=>{function diff(Prism){var PREFIXES;Prism.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]},Object.keys(PREFIXES={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"}).forEach(function(name){var prefix=PREFIXES[name],alias=[];/^\w+$/.test(name)||alias.push(/\w+/.exec(name)[0]),"diff"===name&&alias.push("bold"),Prism.languages.diff[name]={pattern:RegExp("^(?:["+prefix+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:alias,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(name)[0]}}}}),Object.defineProperty(Prism.languages.diff,"PREFIXES",{value:PREFIXES})}module.exports=diff,diff.displayName="diff",diff.aliases=[]}}]);