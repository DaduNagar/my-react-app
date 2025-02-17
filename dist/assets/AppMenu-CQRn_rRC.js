import{s as f,ao as F,h as N,m as R,n as g,r as c,u as E,ap as M,aq as G,ar as U,j as t,e as k,f as T,B as S,z as H,as as C,at as W,I as q,p as L,ac as _,$ as J,a0 as h}from"./index-DdyQWS_J.js";import{g as K,M as p}from"./MenuItem-BPOGE4Jz.js";import{l as x,g as Q,L as v}from"./ListItemText-1vJduNRZ.js";import{M as X}from"./MoreVert-BpOqbAmJ.js";import{S as Y}from"./Stack-NYXJrSZQ.js";const Z=(e,n)=>{const{ownerState:s}=e;return[n.root,s.dense&&n.dense,s.alignItems==="flex-start"&&n.alignItemsFlexStart,s.divider&&n.divider,!s.disableGutters&&n.gutters]},ee=e=>{const{alignItems:n,classes:s,dense:o,disabled:a,disableGutters:i,divider:d,selected:r}=e,u=T({root:["root",o&&"dense",!i&&"gutters",d&&"divider",a&&"disabled",n==="flex-start"&&"alignItemsFlexStart",r&&"selected"]},Q,s);return{...s,...u}},te=f(F,{shouldForwardProp:e=>N(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Z})(R(({theme:e})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:g(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:g(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:g(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:g(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},variants:[{props:({ownerState:n})=>n.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:n})=>!n.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:n})=>n.dense,style:{paddingTop:4,paddingBottom:4}}]}))),ne=c.forwardRef(function(n,s){const o=E({props:n,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:i=!1,component:d="div",children:r,dense:l=!1,disableGutters:u=!1,divider:z=!1,focusVisibleClassName:P,selected:V=!1,className:A,...m}=o,B=c.useContext(M),w=c.useMemo(()=>({dense:l||B.dense||!1,alignItems:a,disableGutters:u}),[a,B.dense,l,u]),I=c.useRef(null);G(()=>{i&&I.current&&I.current.focus()},[i]);const $={...o,alignItems:a,dense:w.dense,disableGutters:u,divider:z,selected:V},b=ee($),D=U(I,s);return t.jsx(M.Provider,{value:w,children:t.jsx(te,{ref:D,href:m.href||m.to,component:(m.href||m.to)&&d==="div"?"button":d,focusVisibleClassName:k(b.focusVisible,P),ownerState:$,className:k(b.root,A),...m,classes:b,children:r})})}),se=e=>{const{alignItems:n,classes:s}=e;return T({root:["root",n==="flex-start"&&"alignItemsFlexStart"]},K,s)},oe=f("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,s.alignItems==="flex-start"&&n.alignItemsFlexStart]}})(R(({theme:e})=>({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),j=c.forwardRef(function(n,s){const o=E({props:n,name:"MuiListItemIcon"}),{className:a,...i}=o,d=c.useContext(M),r={...o,alignItems:d.alignItems},l=se(r);return t.jsx(oe,{className:k(l.root,a),ownerState:r,ref:s,...i})});function ae(){const[e,n]=c.useState(null);function s(a){n(a.currentTarget)}function o(){n(null)}return t.jsxs(S,{children:[t.jsx(H,{variant:"outlined","aria-haspopup":"true",onClick:s,"aria-owns":e?"simple-menu":void 0,children:"Open Menu"}),t.jsxs(C,{id:"simple-menu",anchorEl:e,open:!!e,onClose:o,children:[t.jsx(p,{onClick:o,children:"Profile"}),t.jsx(p,{onClick:o,children:"My account"}),t.jsx(p,{onClick:o,children:"Logout"})]})]})}const ie=f("div")(({theme:e})=>({width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper})),O=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function re(){const[e,n]=c.useState(null),[s,o]=c.useState(1);function a(r){n(r.currentTarget)}function i(r,l){o(l),n(null)}function d(){n(null)}return t.jsxs(ie,{children:[t.jsx(W,{component:"nav","aria-label":"Device settings",children:t.jsx(ne,{onClick:a,children:t.jsx(v,{primary:"When device is locked",secondary:O[s]})})}),t.jsx(C,{id:"lock-menu",anchorEl:e,keepMounted:!0,open:!!e,onClose:d,children:O.map((r,l)=>t.jsx(p,{disabled:l===0,selected:l===s,onClick:u=>i(u,l),children:r},r))})]})}const le=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],ce=48;function de(){const[e,n]=c.useState(null),s=!!e;function o(i){n(i.currentTarget)}function a(){n(null)}return t.jsxs(S,{children:[t.jsx(q,{"aria-label":"More","aria-owns":s?"long-menu":void 0,"aria-haspopup":"true",onClick:o,children:t.jsx(X,{})}),t.jsx(C,{open:s,id:"long-menu",anchorEl:e,onClose:a,PaperProps:{style:{maxHeight:ce*4.5,width:200}},children:le.map(i=>t.jsx(p,{selected:i==="Pyxis",onClick:a,children:i},i))})]})}const ue=L(t.jsx("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM12 13 3.74 7.84 12 3l8.26 4.84z"}),"Drafts"),pe=L(t.jsx("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19zm-3-5h-2V7h-4v3H8l4 4z"}),"MoveToInbox"),me=L(t.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),y=f(p)(({theme:e})=>({"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}));function xe(){const[e,n]=_.useState(null);function s(a){n(a.currentTarget)}function o(){n(null)}return t.jsxs("div",{children:[t.jsx(H,{color:"primary",variant:"contained","aria-haspopup":"true",onClick:s,"aria-owns":e?"simple-menu":void 0,children:"Open Menu"}),t.jsxs(C,{elevation:0,id:"simple-menu",anchorEl:e,onClose:o,open:!!e,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},sx:{border:"1px solid #d3d4d5"},children:[t.jsxs(y,{children:[t.jsx(j,{children:t.jsx(me,{})}),t.jsx(v,{primary:"Sent mail"})]}),t.jsxs(y,{children:[t.jsx(j,{children:t.jsx(ue,{})}),t.jsx(v,{primary:"Drafts"})]}),t.jsxs(y,{children:[t.jsx(j,{children:t.jsx(pe,{})}),t.jsx(v,{primary:"Inbox"})]})]})]})}const fe=f("div")(({theme:e})=>({margin:"30px",[e.breakpoints.down("sm")]:{margin:16},"& .breadcrumb":{marginBottom:"30px",[e.breakpoints.down("sm")]:{marginBottom:16}}}));function be(){return t.jsxs(fe,{children:[t.jsx(S,{className:"breadcrumb",children:t.jsx(J,{routeSegments:[{name:"Material",path:"/material"},{name:"Menu"}]})}),t.jsxs(Y,{spacing:3,children:[t.jsx(h,{title:"simple menu",children:t.jsx(ae,{})}),t.jsx(h,{title:"selected menu",children:t.jsx(re,{})}),t.jsx(h,{title:"customized menu",children:t.jsx(xe,{})}),t.jsx(h,{title:"max height menu",children:t.jsx(de,{})})]})]})}export{be as default};
