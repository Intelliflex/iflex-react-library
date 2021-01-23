(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1087:function(module,exports,__webpack_require__){"use strict";__webpack_require__(4),__webpack_require__(51),__webpack_require__(41),__webpack_require__(1088),__webpack_require__(1089),__webpack_require__(6),__webpack_require__(42);var _clientApi=__webpack_require__(57),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1090);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1090:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1091:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(358).configure)([__webpack_require__(1092),__webpack_require__(1094)],module,!1)}).call(this,__webpack_require__(106)(module))},1092:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":1093};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1092},1093:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(16),__webpack_require__(3),__webpack_require__(6),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(43),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(211),_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(478),_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_6__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,{title:"My Library/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h1",{id:"welcome-to-iflex-react-library-storybook"},"Welcome to iflex-react-library Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Using Storybook you can easily test and document the components you have created with ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("b",null,"iflex-react-library"),". This can be done without the need to create your own user interface. Simply create your own stories similar to the samples provided and your components will be displayed and documented (according to comments and prop typers in your components)"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/introduction",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_6___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"Storybook"),"Link to Storybook React Documentation"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",{className:"tip"},"Tip"),"To change this Introduction page, edit the Markdown in ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"My Library/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1094:function(module,exports,__webpack_require__){var map={"./stories/About.stories.js":1095,"./stories/Button.stories.js":1101,"./stories/Layout.stories.js":1102};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1094},1095:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"About",(function(){return About}));__webpack_require__(3);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),iflex_react_library__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(63));__webpack_exports__.default={title:"My Library/About",component:iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var About=Template.bind({});About.args={showCounter:!0},About.parameters=Object.assign({storySource:{source:"(args) => <AboutComponent {...args} />"}},About.parameters)},1097:function(module,exports,__webpack_require__){var api=__webpack_require__(468),content=__webpack_require__(1098);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1098:function(module,exports,__webpack_require__){(exports=__webpack_require__(469)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  margin: 10px;\n  margin-left: 0px;\n}\n.storybook-button-small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button-medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button-large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},1099:function(module,exports,__webpack_require__){var api=__webpack_require__(468),content=__webpack_require__(1100);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1100:function(module,exports,__webpack_require__){(exports=__webpack_require__(469)(!1)).push([module.i,"body {\r\n  margin: 0px;\r\n  padding: 10px;\r\n}\r\n\r\n.sidebar {\r\n  grid-area: sidebar;\r\n}\r\n\r\n.content {\r\n  grid-area: content;\r\n  position: relative;\r\n}\r\n\r\n.header {\r\n  grid-area: header;\r\n}\r\n\r\n.footer {\r\n  grid-area: footer;\r\n}\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  grid-template-columns: 25% 50% 25%;\r\n  grid-template-areas:\r\n    'header  header  header'\r\n    'sidebar content content'\r\n    'footer  footer  footer';\r\n  background-color: #fff;\r\n  color: #444;\r\n}\r\n\r\n.box {\r\n  background-color: #444;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  padding: 25px;\r\n  font-size: 150%;\r\n}\r\n\r\n.header,\r\n.footer {\r\n  background-color: #999;\r\n}\r\n\r\n.topleft {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.topright {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.bottomleft {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.bottomright {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n",""]),module.exports=exports},1101:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Button",(function(){return Button}));__webpack_require__(3);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),iflex_react_library__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(63));__webpack_exports__.default={title:"My Library/Button",component:iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.b};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.b,Object.assign({},args))};Template.displayName="Template";var Button=Template.bind({});Button.args={label:"Sample Button"},Button.parameters=Object.assign({storySource:{source:"(args) => <Btn {...args} />"}},Button.parameters)},1102:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Layout",(function(){return Layout}));__webpack_require__(3);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),iflex_react_library__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(63));__webpack_exports__.default={title:"My Library/Layout",component:iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.c};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.c,Object.assign({},args))};Template.displayName="Template";var Layout=Template.bind({});Layout.args={header:"This is Sample Header Text",content:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.a,{showCounter:!0}),sidebar:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.b,{label:"Test Button 1",size:"large"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.b,{label:"Test Button 2",color:"green",size:"large"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(iflex_react_library__WEBPACK_IMPORTED_MODULE_3__.b,{label:"Test Button 3",color:"red",size:"large"})]})},Layout.parameters=Object.assign({storySource:{source:"(args) => <LayoutComponent {...args} />"}},Layout.parameters)},316:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(482),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(483),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,".test-component{margin-top:10px;background-color:#fff;border:1px solid #000;border-radius:5px;padding:16px;width:500px;text-align:center}.test-component.test-component-secondary{background-color:#000;color:#fff}.test-component-heading{color:blue}.test-component-logo{width:300px;animation:logo-spin infinite 20s linear}.test-component-counter{color:green}.test-component-text{color:purple}@keyframes logo-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}","",{version:3,sources:["webpack://./src/library/Sample/About.scss"],names:[],mappings:"AAAA,gBACE,eAAA,CACA,qBAAA,CACA,qBAAA,CACA,iBAAA,CACA,YAAA,CACA,WAAA,CACA,iBAAA,CAEA,yCACE,qBAAA,CACA,UAAA,CAGF,wBACE,UAAA,CAEF,qBACE,WAAA,CACA,uCAAA,CAEF,wBACE,WAAA,CAEF,qBACE,YAAA,CAIJ,qBACE,KACE,sBAAA,CAEF,GACE,wBAAA,CAAA",sourcesContent:[".test-component {\n  margin-top: 10px;\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 16px;\n  width: 500px;\n  text-align: center;\n\n  &.test-component-secondary {\n    background-color: black;\n    color: white;\n  }\n\n  &-heading {\n    color: blue;\n  }\n  &-logo {\n    width: 300px;\n    animation: logo-spin infinite 20s linear;\n  }\n  &-counter {\n    color: green;\n  }\n  &-text {\n    color: purple;\n  }\n}\n\n@keyframes logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},478:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/storybookLogo.5c0b55b7.png"},479:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo.103b5fa1.svg"},480:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/bootflex110.1262c348.png"},486:function(module,exports,__webpack_require__){__webpack_require__(487),__webpack_require__(651),__webpack_require__(652),__webpack_require__(810),__webpack_require__(1028),__webpack_require__(1061),__webpack_require__(1066),__webpack_require__(1078),__webpack_require__(1080),__webpack_require__(1085),__webpack_require__(1087),module.exports=__webpack_require__(1091)},560:function(module,exports){},63:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return src_library_Sample_About})),__webpack_require__.d(__webpack_exports__,"b",(function(){return library_Sample_Button})),__webpack_require__.d(__webpack_exports__,"c",(function(){return library_Sample_Layout}));var jsx_runtime=__webpack_require__(9),react=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),DefaultComponent_DefaultComponent=function DefaultComponent(_ref){var children=_ref.children;return Object(jsx_runtime.jsxs)("div",{style:{padding:"10px",height:"100vw",position:"relative",backgroundColor:"aliceblue"},children:[Object(jsx_runtime.jsx)("h1",{style:{color:"green"},children:"IFLEX-REACT-LIBRARY"}),Object(jsx_runtime.jsx)("h3",{style:{color:"darkorange"},children:"This text is from the default Component"}),children]})};DefaultComponent_DefaultComponent.displayName="DefaultComponent",DefaultComponent_DefaultComponent.propTypes={children:prop_types_default.a.node.isRequired},DefaultComponent_DefaultComponent.__docgenInfo={description:"",methods:[],displayName:"DefaultComponent",props:{children:{type:{name:"node"},required:!0,description:""}}};"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\library\\Sample\\DefaultComponent.jsx"]={name:"DefaultComponent",docgenInfo:DefaultComponent_DefaultComponent.__docgenInfo,path:"src\\library\\Sample\\DefaultComponent.jsx"});var logo=__webpack_require__(479),logo_default=__webpack_require__.n(logo),bootflex110=__webpack_require__(480),bootflex110_default=__webpack_require__.n(bootflex110),injectStylesIntoStyleTag=__webpack_require__(481),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Sample_About=__webpack_require__(316),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Sample_About.a,options),Sample_About.a.locals;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var About_About=function About(_ref){var showCounter=_ref.showCounter,showReactLogo=_ref.showReactLogo,showBootflexLogo=_ref.showBootflexLogo,_useState2=_slicedToArray(Object(react.useState)(0),2),count=_useState2[0],setCount=_useState2[1];return Object(react.useEffect)((function(){var timer=setTimeout((function(){return setCount(count+1)}),1e3);return function(){return clearTimeout(timer)}}),[count,setCount]),Object(jsx_runtime.jsx)("div",{className:"test-component",children:Object(jsx_runtime.jsxs)("div",{"data-testid":"test-component",className:"test-component-primary",children:[showReactLogo?Object(jsx_runtime.jsx)("img",{src:logo_default.a,className:"test-component-logo",alt:"logo"}):Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{}),Object(jsx_runtime.jsx)("h1",{className:"test-component-heading",children:"iflex-react-library"}),showCounter?Object(jsx_runtime.jsxs)("h3",{className:"test-component-counter",children:["Page has been open for ",Object(jsx_runtime.jsx)("code",{children:count})," seconds."]}):Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{}),Object(jsx_runtime.jsx)("p",{className:"test-component-text",children:"X-This component demonstrates a library component using Hooks, Images and scss inside a library module file. If you install this library into an external app via npm these images and hooks will not created an error. Try modifying any of the sample components and see how state is preserved (time counter is not reset to zero) when changes are made."}),showBootflexLogo?Object(jsx_runtime.jsx)("img",{src:bootflex110_default.a,alt:"bootflexlogo"}):Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{})]})})};About_About.displayName="About",About_About.propTypes={showCounter:prop_types_default.a.bool,showReactLogo:prop_types_default.a.bool,showBootflexLogo:prop_types_default.a.bool},About_About.defaultProps={showCounter:!0,showReactLogo:!0,showBootflexLogo:!0},About_About.__docgenInfo={description:"Button Component",methods:[],displayName:"About",props:{showCounter:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Show the Counter"},showReactLogo:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Show React Logo"},showBootflexLogo:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Show Bootflex Logo"}}};var src_library_Sample_About=About_About;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\library\\Sample\\About.jsx"]={name:"About",docgenInfo:About_About.__docgenInfo,path:"src\\library\\Sample\\About.jsx"});__webpack_require__(16),__webpack_require__(3),__webpack_require__(6),__webpack_require__(1097);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button_Button=function Button(_ref){var color=_ref.color,size=_ref.size,label=_ref.label,onClick=_ref.onClick,props=_objectWithoutProperties(_ref,["color","size","label","onClick"]),style={color:"white"};return color&&(style.backgroundColor=color),Object(jsx_runtime.jsx)("button",Object.assign({type:"button",className:"storybook-button storybook-button-".concat(size),style:style,onClick:onClick},props,{children:label}))};Button_Button.displayName="Button",Button_Button.propTypes={color:prop_types_default.a.oneOf(["blue","red","green","purple"]),size:prop_types_default.a.oneOf(["small","medium","large"]),label:prop_types_default.a.string.isRequired,onClick:prop_types_default.a.func},Button_Button.defaultProps={label:"Button",color:"blue",size:"medium",onClick:void 0},Button_Button.__docgenInfo={description:"Here you can document your component. A preview of the component is shown below. The properties table is automatically populated based on React.propTypes.",methods:[],displayName:"Button",props:{label:{defaultValue:{value:"'Button'",computed:!1},type:{name:"string"},required:!1,description:"Label"},color:{defaultValue:{value:"'blue'",computed:!1},type:{name:"enum",value:[{value:"'blue'",computed:!1},{value:"'red'",computed:!1},{value:"'green'",computed:!1},{value:"'purple'",computed:!1}]},required:!1,description:"The color for the button"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"}}};var library_Sample_Button=Button_Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\library\\Sample\\Button.jsx"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src\\library\\Sample\\Button.jsx"});__webpack_require__(1099);var Layout_Layout=function Layout(_ref){var header=_ref.header,sidebar=_ref.sidebar,content=_ref.content,footer=_ref.footer;return Object(jsx_runtime.jsxs)("div",{className:"wrapper",children:[header?Object(jsx_runtime.jsx)("div",{className:"box header",children:header}):Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{}),sidebar?Object(jsx_runtime.jsx)("div",{className:"box sidebar",children:sidebar}):Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{}),content?Object(jsx_runtime.jsx)("div",{className:"box content",children:content}):Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{}),footer?Object(jsx_runtime.jsx)("div",{className:"box footer",children:footer}):Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{})]})};Layout_Layout.displayName="Layout",Layout_Layout.propTypes={header:prop_types_default.a.string,content:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.element]),footer:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.element]),sidebar:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.element])},Layout_Layout.defaultProps={header:"HEADER",content:"Please provide body prop to Layout",sidebar:"SIDEBAR",footer:"FOOTER"},Layout_Layout.__docgenInfo={description:"This is Documentation for Layout Component. You will document your own component here.",methods:[],displayName:"Layout",props:{header:{defaultValue:{value:"'HEADER'",computed:!1},type:{name:"string"},required:!1,description:"header"},content:{defaultValue:{value:"'Please provide body prop to Layout'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1,description:"body (always required)"},sidebar:{defaultValue:{value:"'SIDEBAR'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1,description:"sidebar"},footer:{defaultValue:{value:"'FOOTER'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1,description:"footer"}}};var library_Sample_Layout=Layout_Layout;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\library\\Sample\\Layout.jsx"]={name:"Layout",docgenInfo:Layout_Layout.__docgenInfo,path:"src\\library\\Sample\\Layout.jsx"})},652:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(358)}},[[486,1,2]]]);
//# sourceMappingURL=main.1701128ced4e350f72dc.bundle.js.map