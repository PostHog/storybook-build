"use strict";(self.webpackChunk_posthog_frontend=self.webpackChunk_posthog_frontend||[]).push([[57622],{"./products/llm_observability/frontend/ConversationDisplay/ConversationDisplay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Anthropic:()=>Anthropic,Basic:()=>Basic,Error:()=>Error,Markdown:()=>Markdown,Tools:()=>Tools,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ConversationDisplay__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./products/llm_observability/frontend/ConversationDisplay/ConversationDisplay.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Scenes-App/LLM Observability/Conversation Display",component:_ConversationDisplay__WEBPACK_IMPORTED_MODULE_0__.t},Template=_ref=>{let{eventProperties}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ConversationDisplay__WEBPACK_IMPORTED_MODULE_0__.t,{eventProperties:eventProperties})},Basic=Template.bind({});Basic.args={eventProperties:{$ai_input:[{role:"system",content:"You are a good bot."},{role:"user",content:"Hello!"},{role:"assistant",content:"Hi there!"},{role:"user",content:"How are you?"}],$ai_output:{choices:[{role:"assistant",content:"I am doing well, thank you!"}]},$ai_input_tokens:8,$ai_output_tokens:6,$ai_latency:.123,$ai_total_cost_usd:7e-4,$ai_model:"gpt-9",$ai_http_status:200}};let Markdown=Template.bind({});Markdown.args={eventProperties:{$ai_input:[{role:"system",content:"You are a good bot."},{role:"user",content:"What is the meaning of life?"},{role:"assistant",content:`# The Meaning of Life 🌟

## A Philosophical Journey

### 1. Scientific Perspective 🔬
* Universe began 13.8 billion years ago
* Life emerged through evolution
* We are made of **stardust**

### 2. Cultural Views 🌍
1. Eastern Philosophy
2. Western Thought
3. Modern Interpretations

> "The meaning of life is to find your gift. The purpose of life is to give it away." 
> - Pablo Picasso

#### Code Example
\`\`\`python
def meaning_of_life():
    return 42
\`\`\`

| Perspective | View |
|------------|------|
| Scientific | Evolution |
| Religious  | Divine |
| Personal   | Individual |

**Bold statement:** Life's meaning is what we make of it!

---

[Learn More](https://example.com)
![Life Image](https://res.cloudinary.com/dmukukwp6/image/upload/q_100/v1/posthog.com/src/components/Home/Slider/images/product-analytics-hog)

~~There is no meaning~~ There is meaning everywhere!`},{role:"user",content:"Wow, I'm going to need some time to ponder."}],$ai_output:{choices:[{role:"assistant",content:"Sure thing! I will be here when you are ready."}]},$ai_input_tokens:8,$ai_output_tokens:6,$ai_latency:.123,$ai_total_cost_usd:7e-4,$ai_model:"gpt-9",$ai_http_status:200}};let Tools=Template.bind({});Tools.args={eventProperties:{$ai_input:[{role:"system",content:"You are a good bot."},{role:"user",content:'Please foo "Bar!"'}],$ai_output:{choices:[{role:"assistant",content:"",tool_calls:[{function:{arguments:'{"thing":"Bar!"}',name:"foo"},id:"call_81KeSSme8dNjnyK3xK59uNzu",index:0,type:"function"}]}]},$ai_input_tokens:8,$ai_output_tokens:6,$ai_latency:.123,$ai_total_cost_usd:7e-4,$ai_model:"gpt-9",$ai_http_status:400}};let Error=Template.bind({});Error.args={eventProperties:{$ai_input:[{role:"system",content:"You are a good bot."},{role:"user",content:'Please foo "Bar!"'}],$ai_model:"gpt-9",$ai_http_status:400}};let Anthropic=Template.bind({});Anthropic.args={eventProperties:{$ai_input:[{role:"system",content:[{type:"text",text:"You are a good bot."},{type:"text",text:"Answer with Foo."}]},{role:"user",content:"Hello!"},{role:"assistant",content:"Foo"},{role:"user",content:"How are you?"}],$ai_output_choices:[{type:"text",text:"Foo"}],$ai_input_tokens:8,$ai_output_tokens:6,$ai_latency:.123,$ai_total_cost_usd:7e-4,$ai_model:"gpt-9",$ai_http_status:200}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"({\n  eventProperties\n}) => {\n  return <ConversationDisplayComponent eventProperties={eventProperties} />;\n}",...Basic.parameters?.docs?.source}}},Markdown.parameters={...Markdown.parameters,docs:{...Markdown.parameters?.docs,source:{originalSource:"({\n  eventProperties\n}) => {\n  return <ConversationDisplayComponent eventProperties={eventProperties} />;\n}",...Markdown.parameters?.docs?.source}}},Tools.parameters={...Tools.parameters,docs:{...Tools.parameters?.docs,source:{originalSource:"({\n  eventProperties\n}) => {\n  return <ConversationDisplayComponent eventProperties={eventProperties} />;\n}",...Tools.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"({\n  eventProperties\n}) => {\n  return <ConversationDisplayComponent eventProperties={eventProperties} />;\n}",...Error.parameters?.docs?.source}}},Anthropic.parameters={...Anthropic.parameters,docs:{...Anthropic.parameters?.docs,source:{originalSource:"({\n  eventProperties\n}) => {\n  return <ConversationDisplayComponent eventProperties={eventProperties} />;\n}",...Anthropic.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","Markdown","Tools","Error","Anthropic"]}}]);
//# sourceMappingURL=llm_observability-frontend-ConversationDisplay-ConversationDisplay-stories.c7203c2e.iframe.bundle.js.map