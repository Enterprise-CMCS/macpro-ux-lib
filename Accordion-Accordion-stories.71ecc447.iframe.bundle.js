/*! For license information please see Accordion-Accordion-stories.71ecc447.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_enterprise_cmcs_macpro_ux_lib=self.webpackChunk_enterprise_cmcs_macpro_ux_lib||[]).push([[712],{"./src/components/Accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Accordion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Accordion/Accordion.tsx"),_AccordionGroup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Accordion/AccordionGroup.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"COMPONENTS/Accordion/Accordion",component:_Accordion__WEBPACK_IMPORTED_MODULE_1__.U,args:{hidden:!0},argTypes:{className:{description:"Additional classes that will be applied to the Accordion label.",type:{name:"string"}},children:{description:"React components that will be rendered within the Accordion content section.\n\n`React.Node`",control:!1},label:{description:"Label text to be rendered identifying the Accordion."},hidden:{description:"Determines if the Accordion content will be visible or not on initial render. Defaults to true.",type:{name:"boolean"}},id:{description:"Unique identifier required for each Accordion item used for form control."}}},Template=({...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AccordionGroup__WEBPACK_IMPORTED_MODULE_2__.b,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Accordion__WEBPACK_IMPORTED_MODULE_1__.U,{...rest})});Template.displayName="Template";const Default=Template.bind({});Default.args={children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."},"accordion-1-prose")],id:"accordion-1",label:"First Amendment"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <AccordionGroup>\n    <Accordion {...rest} />\n  </AccordionGroup>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Accordion/Accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Accordion});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Accordion=({className,children,label,hidden=!0,id,onClick,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"usa-accordion__heading"+(className?` ${className}`:""),...rest,onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:"button",className:"usa-accordion__button","aria-expanded":!hidden,"aria-controls":id,children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{id,className:"usa-accordion__content usa-prose",hidden,children})]});try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:'**Accordion Component**\n\nA single Accordion item. Any instance of an Accordion requires an AccordionGroup wrapper.\n\n```JavaScript\n<Accordion label="First Amendment" id="accordion-1">\n    <p>\n       Congress shall make no law respecting an establishment of religion, or\n       prohibiting the free exercise thereof; or abridging the freedom of\n       speech, or of the press; or the right of the people peaceably to\n       assemble, and to petition the Government for a redress of grievances.\n     </p>\n</Accordion>\n```',displayName:"Accordion",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Accordion/AccordionGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>AccordionGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const AccordionGroup=({bordered=!1,className,children,id,multiSelect=!1,...rest})=>{const arrayChildren=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),[contentHidden,setContentHidden]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(arrayChildren.map((child=>{if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child))return child.props.hidden??!0})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:`usa-accordion${bordered?" usa-accordion--bordered":""}${multiSelect?" usa-accordion--multiselectable":""}${className?` ${className}`:""}`,id,"data-allow-multiple":multiSelect,...rest,children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(arrayChildren,((child,idx)=>{if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child))return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{hidden:contentHidden[idx],onClick:()=>{const stateArray=multiSelect?[...contentHidden]:arrayChildren.map((()=>!0));stateArray[idx]=!contentHidden[idx],setContentHidden(stateArray)}})}))})};AccordionGroup.displayName="AccordionGroup";try{AccordionGroup.displayName="AccordionGroup",AccordionGroup.__docgenInfo={description:"**AccordionGroup Component**\n\nA wrapper component for `<Accordion>` items.\n\n```JavaScript\n<AccordionGroup>\n    <Accordion></Accordion>\n    <Accordion></Accordion>\n    <Accordion></Accordion>\n</AccordionGroup>\n```",displayName:"AccordionGroup",props:{bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},multiSelect:{defaultValue:{value:"false"},description:"",name:"multiSelect",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionGroup.tsx#AccordionGroup"]={docgenInfo:AccordionGroup.__docgenInfo,name:"AccordionGroup",path:"src/components/Accordion/AccordionGroup.tsx#AccordionGroup"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);