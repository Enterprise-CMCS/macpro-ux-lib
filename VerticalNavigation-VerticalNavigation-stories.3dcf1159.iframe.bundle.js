/*! For license information please see VerticalNavigation-VerticalNavigation-stories.3dcf1159.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_enterprise_cmcs_macpro_ux_lib=self.webpackChunk_enterprise_cmcs_macpro_ux_lib||[]).push([[569],{"./src/components/VerticalNavigation/VerticalNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SelectedId:()=>SelectedId,Togglable:()=>Togglable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VerticalNavigation_stories});var react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VerticalNavigationItem=({navClick,id,selectedIds,text,togglable,items,href})=>{const generateSections=(id,text,togglable,href,items,previousItemsIds=[])=>(0,jsx_runtime.jsxs)("li",{className:"usa-sidenav__item",children:[(0,jsx_runtime.jsxs)("a",{href,tabIndex:0,className:selectedIds.includes(id)?"usa-current":"",onClick:()=>selectedIds.includes(id)?togglable?navClick([...previousItemsIds.filter((prevId=>prevId!==id))]):void 0:navClick([...previousItemsIds,id]),children:[text,togglable&&(0,jsx_runtime.jsx)("span",{className:"float-right",children:selectedIds.includes(id)?(0,jsx_runtime.jsx)(Icon.J,{name:"arrow_drop_up"}):(0,jsx_runtime.jsx)(Icon.J,{name:"arrow_drop_down"})})]}),selectedIds.includes(id)&&items&&items.length>0&&(0,jsx_runtime.jsx)("ul",{className:"usa-sidenav__sublist",children:items.map((itemChild=>(previousItemsIds.push(id),generateSections(itemChild.id,itemChild.text,itemChild.togglable,itemChild.href,itemChild.items,previousItemsIds))))})]},id);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:generateSections(id,text,togglable,href,items)})};try{VerticalNavigationItem.displayName="VerticalNavigationItem",VerticalNavigationItem.__docgenInfo={description:"Vertical Navigation Child Component",displayName:"VerticalNavigationItem",props:{navClick:{defaultValue:null,description:"",name:"navClick",required:!0,type:{name:"Dispatch<SetStateAction<string[]>>"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavigationItemChild[]"}},togglable:{defaultValue:null,description:"",name:"togglable",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VerticalNavigation/VerticalNavigationItem.tsx#VerticalNavigationItem"]={docgenInfo:VerticalNavigationItem.__docgenInfo,name:"VerticalNavigationItem",path:"src/components/VerticalNavigation/VerticalNavigationItem.tsx#VerticalNavigationItem"})}catch(__react_docgen_typescript_loader_error){}const VerticalNavigation=({selectedId,items,...rest})=>{const getSelectedSecitons=(items,selectedId,prevSelectedIds=[])=>{let foundSelectedIds=[];return items.some((item=>{if(item.id===selectedId)return foundSelectedIds.push(item.id,...prevSelectedIds),!0;item.items?.length&&(prevSelectedIds.push(item.id),foundSelectedIds=getSelectedSecitons(item.items,selectedId,prevSelectedIds))})),foundSelectedIds},[selectedIds,setSelectedIds]=(0,react.useState)(selectedId?getSelectedSecitons(items,selectedId):[]);return(0,jsx_runtime.jsx)("div",{className:"tablet:grid-col-4 pointer",children:(0,jsx_runtime.jsx)("nav",{"aria-label":"Side navigation",...rest,children:(0,jsx_runtime.jsx)("ul",{className:"usa-sidenav",children:items.map((item=>(0,jsx_runtime.jsx)(VerticalNavigationItem,{selectedIds,navClick:setSelectedIds,id:item.id,text:item.text,items:item.items,togglable:item.togglable},item.id)))})})})};VerticalNavigation.displayName="VerticalNavigation";try{VerticalNavigation.displayName="VerticalNavigation",VerticalNavigation.__docgenInfo={description:"Vertical Navigation Component",displayName:"VerticalNavigation",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"IVerticalNavigationItem[]"}},selectedId:{defaultValue:null,description:"",name:"selectedId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VerticalNavigation/VerticalNavigation.tsx#VerticalNavigation"]={docgenInfo:VerticalNavigation.__docgenInfo,name:"VerticalNavigation",path:"src/components/VerticalNavigation/VerticalNavigation.tsx#VerticalNavigation"})}catch(__react_docgen_typescript_loader_error){}const VerticalNavigation_stories={title:"COMPONENTS/Vertical Navigation",component:VerticalNavigation,argTypes:{items:{description:"Navigation section items to be rendered for the sidebar, can be up to three layers deep. \n\nExample object structure: `{ id: '1', items: [],  text: 'Parent'}`",control:!1},selectedId:{description:"An ID(s) of a section(s) on which should be programatically marked as currently active"}},args:{},parameters:{docs:{description:{component:"Hierarchical, vertical navigation to place at the side of a page. The recommendation is to display a navigational hierarchy with one to three levels. In theory it can be infinitely nested, but three layers max is recommended for a better user experience."}}}},Template=({...rest})=>(0,jsx_runtime.jsx)(VerticalNavigation,{...rest});Template.displayName="Template";const Default=Template.bind({});Default.args={items:[{id:"1",items:[],text:"Parent"},{id:"2",items:[{id:"4",items:[{id:"6",text:"Grandchild"},{id:"7",text:"Grandchild"}],text:"Child"},{id:"5",items:[],text:"Child"}],text:"Parent"},{id:"3",items:[],text:"Parent"}]};const Togglable=Template.bind({});Togglable.parameters={docs:{description:{story:"Items with navigation children are given the option to be toggleable to show/hide their navigation options."}}},Togglable.args={items:[{id:"1",items:[],text:"Parent"},{id:"2",togglable:!0,items:[{id:"4",togglable:!0,items:[{id:"6",text:"Grandchild"},{id:"7",text:"Grandchild"}],text:"Child with toggle"},{id:"5",items:[],text:"Child"}],text:"Parent with toggle"},{id:"3",items:[],text:"Parent"}]};const SelectedId=Template.bind({});SelectedId.parameters={docs:{description:{story:"We can set a selected ID of one of the sections on the page and it will be marked on page load."}}},SelectedId.args={selectedId:"7",items:[{id:"1",items:[],text:"Parent"},{id:"2",togglable:!0,items:[{id:"4",togglable:!0,items:[{id:"6",text:"Grandchild"},{id:"7",text:"Grandchild"}],text:"Child with toggle"},{id:"5",items:[],text:"Child"}],text:"Parent with toggle"},{id:"3",items:[],text:"Parent"}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <VerticalNavigation {...rest} />",...Default.parameters?.docs?.source}}},Togglable.parameters={...Togglable.parameters,docs:{...Togglable.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <VerticalNavigation {...rest} />",...Togglable.parameters?.docs?.source}}},SelectedId.parameters={...SelectedId.parameters,docs:{...SelectedId.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <VerticalNavigation {...rest} />",...SelectedId.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Togglable","SelectedId"]},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});__webpack_require__("./node_modules/react/index.js");const sprite_namespaceObject=__webpack_require__.p+"static/media/sprite.b17a73c3.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Icon=({name,iconSize=3,role="img",ariaHidden=!0,ariaLabel,color="black",className,...rest})=>{const iconName=name.replace(/_/g," ");return(0,jsx_runtime.jsx)("svg",{"aria-label":ariaLabel||`${iconName} icon`,className:`usa-icon--size-${iconSize}${className?` ${className}`:""}`,"aria-hidden":ariaHidden,role,fill:"currentColor",color,...rest,children:(0,jsx_runtime.jsx)("use",{href:`${sprite_namespaceObject}#${name}`})})};Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Icon Component",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},iconSize:{defaultValue:{value:"3"},description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},ariaHidden:{defaultValue:{value:"true"},description:"",name:"ariaHidden",required:!1,type:{name:"boolean"}},role:{defaultValue:{value:"img"},description:"",name:"role",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},color:{defaultValue:{value:"black"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);