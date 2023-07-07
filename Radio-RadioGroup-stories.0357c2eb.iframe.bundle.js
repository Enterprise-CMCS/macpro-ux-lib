/*! For license information please see Radio-RadioGroup-stories.0357c2eb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_enterprise_cmcs_macpro_ux_lib=self.webpackChunk_enterprise_cmcs_macpro_ux_lib||[]).push([[12],{"./src/components/Radio/RadioGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultGroup:()=>DefaultGroup,Tile:()=>Tile,TileWithDescription:()=>TileWithDescription,WithChildren:()=>WithChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioGroup_stories});var react=__webpack_require__("./node_modules/react/index.js"),Radio=__webpack_require__("./src/components/Radio/Radio.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioGroup=({groupName,radioProps})=>{const[selected,setSelected]=react.useState(""),handleChange=e=>{setSelected(e.target.id)};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(radioProps=>{let radios=[];for(var props of radioProps){const customOnChange=props.onChange;props.onChange=e=>{setSelected(e.target.id),customOnChange&&customOnChange(e)},radios.push((0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Radio.Y,{onChange:handleChange,name:groupName,...props},props.id),props.id===selected&&props.children&&(0,jsx_runtime.jsx)("div",{className:"border-left-05 border-primary margin-left-1 padding-left-205",children:props.children})]},`${groupName}-${props.id}`))}return radios})(radioProps)})};try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{groupName:{defaultValue:null,description:"",name:"groupName",required:!0,type:{name:"string"}},radioProps:{defaultValue:null,description:"",name:"radioProps",required:!0,type:{name:"RadioProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/Radio/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}var TextArea=__webpack_require__("./src/components/TextArea/TextArea.tsx");const RadioGroup_stories={title:"COMPONENTS/Radio/RadioGroup",component:RadioGroup,argTypes:{groupName:{description:"Name of the radio group. This name automatically propagates to each Radio component in a RadioGroup."},radioProps:{control:!1,description:"An array of Radio component properties. See the Radio component for a complete list."}},args:{groupName:"default-group"},parameters:{docs:{description:{component:"Two or more Radio components may be contained in a RadioGroup component in order to manage the selected state and show/hide any children provided within the `radioProps` object."}}}},Template=({...rest})=>(0,jsx_runtime.jsx)(RadioGroup,{...rest});Template.displayName="Template";const children=[(0,jsx_runtime.jsx)(RadioGroup,{groupName:"children",radioProps:[{id:"child-1",value:"child-1",label:"Child 1",children:[(0,jsx_runtime.jsx)(TextArea.K,{fieldName:"child-textarea",id:"child-textarea",label:"Child 1 TextArea"}),(0,jsx_runtime.jsx)(RadioGroup,{groupName:"child-1-children",radioProps:[{id:"child-1-child-1",value:"child-1-child-1",label:"Child 1 Child 1",children:[(0,jsx_runtime.jsx)(TextArea.K,{fieldName:"child-1-child-textarea",id:"child-1-child-textarea",label:"Child 1 Child 1 TextArea"})]},{id:"child-1-child-2",value:"child-1-child-2",label:"Child 1 Child 2"}]})]},{id:"child-2",value:"child-2",label:"Child 2",children:[(0,jsx_runtime.jsx)(TextArea.K,{fieldName:"child-textarea",id:"child-textarea",label:"Child 2 TextArea"})]}]})],DefaultGroup=Template.bind({});DefaultGroup.args={groupName:"default-group",radioProps:[{id:"radio-1",value:"radio-1",label:"Radio 1"},{id:"radio-2",value:"radio-2",label:"Radio 2"},{id:"radio-3",value:"radio-3",label:"Radio 3",disabled:!0}]};const WithChildren=Template.bind({});WithChildren.args={groupName:"with-children",radioProps:[{id:"with-children-1",value:"with-children-1",label:"Radio 1",children},{id:"with-children-2",value:"with-children-2",label:"Radio 2",children:[(0,jsx_runtime.jsx)("p",{children:"A child may be any JSX element."}),(0,jsx_runtime.jsx)(TextArea.K,{fieldName:"with-children-2-textarea",id:"with-children-2-textarea",label:"Radio 2 TextArea"})]}]},WithChildren.parameters={docs:{description:{story:"Children are passed as an array of JSX elements to the parent Radio's `radioProps`. When passing Radio components as children, ensure they are wrapped in their own RadioGroup component (with a unique `name`) to capture state and correctly show/hide any children they may have. Children of children may also be passed this way in order to have a hirarchy several levels deep. See the code example below."}}};const Tile=Template.bind({});Tile.args={groupName:"tile-group",radioProps:[{id:"tile-radio-1",value:"tile-radio-1",label:"Radio 1",isTile:!0},{id:"tile-radio-2",value:"tile-radio-2",label:"Radio 2",isTile:!0},{id:"tile-radio-3",value:"tile-radio-3",label:"Radio 3",isTile:!0,disabled:!0}]};const TileWithDescription=Template.bind({});TileWithDescription.args={groupName:"tile-desc-group",radioProps:[{id:"tile-desc-radio-1",value:"tile-desc-radio-1",label:"Radio 1",isTile:!0,tileDescription:"Radio 1 tile description."},{id:"tile-desc-radio-2",value:"tile-desc-radio-2",label:"Radio 2",isTile:!0,tileDescription:"Radio 2 tile description."},{id:"tile-desc-radio-3",value:"tile-desc-radio-3",label:"Radio 3",isTile:!0,tileDescription:"Radio 3 tile description.",disabled:!0}]},DefaultGroup.parameters={...DefaultGroup.parameters,docs:{...DefaultGroup.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <RadioGroup {...rest} />",...DefaultGroup.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <RadioGroup {...rest} />",...WithChildren.parameters?.docs?.source}}},Tile.parameters={...Tile.parameters,docs:{...Tile.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <RadioGroup {...rest} />",...Tile.parameters?.docs?.source}}},TileWithDescription.parameters={...TileWithDescription.parameters,docs:{...TileWithDescription.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <RadioGroup {...rest} />",...TileWithDescription.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultGroup","WithChildren","Tile","TileWithDescription"]},"./src/components/Radio/Radio.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Radio(props,ref){const{children,disabled=!1,id,isTile=!1,label,tileDescription,value,...otherProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"usa-radio",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{className:isTile?"usa-radio__input usa-radio__input--tile":"usa-radio__input",disabled,id,ref,type:"radio",value,...otherProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:"usa-radio__label",htmlFor:id,children:[label,isTile&&tileDescription&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"usa-radio__label-description",children:tileDescription})]})]})}));try{Radio.displayName="Radio",Radio.__docgenInfo={description:"Radio Component",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isTile:{defaultValue:null,description:"",name:"isTile",required:!1,type:{name:"boolean"}},tileDescription:{defaultValue:null,description:"",name:"tileDescription",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/Radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextArea/TextArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TextArea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextArea=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function TextArea({onChange,...props},ref){const{id,label,name,characterCountMessage,errorMessage,inputError=!1,inputSuccess=!1,maxLength,required=!1,showCharacterCount=!1,...otherProps}=props,[charCount,setCharCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"usa-form-group"+(inputError?" usa-form-group--error":""),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:"usa-label"+(inputError?" usa-label--error":""),htmlFor:id,children:[label,required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"required-star",children:"*"})]}),inputError&&errorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"usa-error-message",role:"alert",children:errorMessage}),showCharacterCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"usa-hint",children:[characterCountMessage?`${characterCountMessage} `:"",charCount,void 0!==maxLength&&` / ${maxLength}`]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea",{className:"usa-textarea"+(inputError?" usa-input-group--error":"")+(inputSuccess?" usa-input--success":""),id,maxLength,name,onChange:e=>{onChange&&onChange(e),setCharCount(e.target.value.length.toString())},ref,required,...otherProps})]})}));try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"TextArea Component",displayName:"TextArea",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},inputError:{defaultValue:null,description:"",name:"inputError",required:!1,type:{name:"boolean"}},inputSuccess:{defaultValue:null,description:"",name:"inputSuccess",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},characterCountMessage:{defaultValue:null,description:"",name:"characterCountMessage",required:!1,type:{name:"string"}},showCharacterCount:{defaultValue:null,description:"",name:"showCharacterCount",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);