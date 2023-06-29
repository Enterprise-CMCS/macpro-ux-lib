/*! For license information please see TextInput-TextInput-stories.eea4e20b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_enterprise_cmcs_macpro_ux_lib=self.webpackChunk_enterprise_cmcs_macpro_ux_lib||[]).push([[411],{"./src/components/TextInput/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PrefixSuffixAndFilter:()=>PrefixSuffixAndFilter,RequiredAndError:()=>RequiredAndError,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _TextInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TextInput/TextInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"COMPONENTS/TextInput",component:_TextInput__WEBPACK_IMPORTED_MODULE_1__.o,args:{label:"Input Label",fieldName:"input-type-text",inputError:!1,inputSuccess:!1,required:!1},argTypes:{label:{description:"Field label."},fieldName:{description:"Name of the input field."},errorMessage:{description:"Error message text displayed when inputError === true."},inputError:{description:"Triggers error message and error styling."},inputFilter:{description:"Used to limit input values. If a RegExp is not provided, all input types are allowed."},inputSuccess:{description:"Trigger success styling."},prefix:{description:"Text to be displayed at the front of input field. Not stored in value. Ex: currency indicator."},required:{description:"Adds semantic required attr and appends an * to the end of the input label."},suffix:{description:"Text to be displayed at the end of input field. Not stored in value. Ex: mass indicator (lbs, fl oz)"}}},Template=({...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextInput__WEBPACK_IMPORTED_MODULE_1__.o,{...rest});Template.displayName="Template";const Default=Template.bind({}),PrefixSuffixAndFilter=Template.bind({}),RequiredAndError=Template.bind({}),Success=Template.bind({});Default.args={},PrefixSuffixAndFilter.args={inputFilter:/^-?\d*$/i,label:"This Field Only Accepts Numbers",prefix:"#",suffix:"lbs."},RequiredAndError.args={errorMessage:"Helpful Error Message",inputError:!0,label:"Required Input Field",required:!0,id:"required-and-error-textarea"},Success.args={label:"Field with Success Indicator",inputSuccess:!0,id:"success-textarea"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <TextInput {...rest} />",...Default.parameters?.docs?.source}}},PrefixSuffixAndFilter.parameters={...PrefixSuffixAndFilter.parameters,docs:{...PrefixSuffixAndFilter.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <TextInput {...rest} />",...PrefixSuffixAndFilter.parameters?.docs?.source}}},RequiredAndError.parameters={...RequiredAndError.parameters,docs:{...RequiredAndError.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <TextInput {...rest} />",...RequiredAndError.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <TextInput {...rest} />",...Success.parameters?.docs?.source}}};const __namedExportsOrder=["Default","PrefixSuffixAndFilter","RequiredAndError","Success"]},"./src/components/TextInput/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>TextInput});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput=({label,errorMessage,fieldName,id,inputError=!1,inputFilter,inputSuccess=!1,prefix,required=!1,suffix,...rest})=>{const[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"usa-form-group"+(inputError?" usa-form-group--error":""),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:"usa-label"+(inputError?" usa-label--error":""),htmlFor:`input-type-text-${id}`,children:[label,required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{style:{color:"#E51C3E"},children:"*"})]}),inputError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"usa-error-message",id:"input-error-message",role:"alert",children:errorMessage}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:`usa-input-group${inputError?" usa-input-group--error":""}${inputSuccess?" usa-input--success":""}${focused?" usa-focus":""}`,children:[prefix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"usa-input-prefix","aria-hidden":"true",children:prefix}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{"aria-describedby":""+(inputError?"input-error-message":""),className:"usa-input",id:`input-type-text-${id}`,name:fieldName,onBlur:()=>setFocused(!1),onChange:e=>{inputFilter&&inputFilter.test(e.target.value)?setInputValue(e.target.value):inputFilter||setInputValue(e.target.value)},onFocus:()=>setFocused(!0),required,value:inputValue,...rest}),suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"usa-input-suffix","aria-hidden":"true",children:suffix})]})]})};TextInput.displayName="TextInput";try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"TextInput Component",displayName:"TextInput",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},fieldName:{defaultValue:null,description:"",name:"fieldName",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},inputError:{defaultValue:{value:"false"},description:"",name:"inputError",required:!1,type:{name:"boolean"}},inputFilter:{defaultValue:null,description:"",name:"inputFilter",required:!1,type:{name:"RegExp"}},inputSuccess:{defaultValue:{value:"false"},description:"",name:"inputSuccess",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextInput/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/TextInput/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);