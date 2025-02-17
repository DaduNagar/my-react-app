import{r as c,j as e,aC as m,aD as u,s as i,p as x,B as j,aE as d,$ as p,a0 as s}from"./index-DdyQWS_J.js";import{R as h,a as o}from"./RadioGroup-DuEJp0gp.js";import{F as t}from"./FormGroup-NUYvTQor.js";import{S as b}from"./Stack-NYXJrSZQ.js";import"./SwitchBase-t5Mnkak7.js";const g=i("div")(({theme:a})=>({display:"flex","& .group":{margin:a.spacing(1,0)},"& .formControl":{marginRight:a.spacing(3),marginLeft:a.spacing(3)}}));function f(){const[a,l]=c.useState("female");function n(r){l(r.target.value)}return e.jsx(g,{children:e.jsxs(m,{component:"fieldset",className:"formControl",children:[e.jsx(u,{component:"legend",children:"Gender"}),e.jsxs(h,{value:a,name:"gender1",className:"group","aria-label":"Gender",onChange:n,children:[e.jsx(t,{value:"female",control:e.jsx(o,{}),label:"Female"}),e.jsx(t,{value:"male",control:e.jsx(o,{}),label:"Male"}),e.jsx(t,{value:"other",control:e.jsx(o,{}),label:"Other"}),e.jsx(t,{value:"disabled",disabled:!0,control:e.jsx(o,{}),label:"(Disabled option)"})]})]})})}const v=x(e.jsx("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonChecked"),C=x(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked"),R=i(o)(()=>({color:d[400],"&$checked":{color:d[600]}}));function S(){const[a,l]=c.useState("a");function n(r){l(r.target.value)}return e.jsxs(j,{children:[e.jsx(o,{value:"a",onChange:n,name:"radio-button-demo",checked:a==="a"}),e.jsx(o,{value:"b",onChange:n,name:"radio-button-demo",checked:a==="b"}),e.jsx(R,{value:"c",color:"default",onChange:n,name:"radio-button-demo",checked:a==="c"}),e.jsx(o,{value:"d",color:"default",onChange:n,name:"radio-button-demo",checked:a==="d"}),e.jsx(o,{value:"e",color:"default",onChange:n,name:"radio-button-demo",checked:a==="e",icon:e.jsx(C,{fontSize:"small"}),checkedIcon:e.jsx(v,{fontSize:"small"})})]})}function k(){const[a,l]=c.useState("female");function n(r){l(r.target.value)}return e.jsxs(m,{component:"fieldset",children:[e.jsx(u,{component:"legend",children:"labelPlacement"}),e.jsxs(h,{"aria-label":"position",name:"position",value:a,onChange:n,row:!0,children:[e.jsx(t,{value:"top",label:"Top",labelPlacement:"top",control:e.jsx(o,{color:"primary"})}),e.jsx(t,{value:"start",label:"Start",labelPlacement:"start",control:e.jsx(o,{color:"primary"})}),e.jsx(t,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:e.jsx(o,{color:"primary"})}),e.jsx(t,{value:"end",label:"End",labelPlacement:"end",control:e.jsx(o,{color:"primary"})})]})]})}const B=i("div")(({theme:a})=>({margin:30,[a.breakpoints.down("sm")]:{margin:16},"& .breadcrumb":{marginBottom:30,[a.breakpoints.down("sm")]:{marginBottom:16}}}));function G(){return e.jsxs(B,{children:[e.jsx(j,{className:"breadcrumb",children:e.jsx(p,{routeSegments:[{name:"Material",path:"/material"},{name:"Radio"}]})}),e.jsxs(b,{spacing:3,children:[e.jsx(s,{title:"Simple Radio Button",children:e.jsx(f,{})}),e.jsx(s,{title:"Standalone Radio Button",children:e.jsx(S,{})}),e.jsx(s,{title:"Label Placement",children:e.jsx(k,{})})]})]})}export{G as default};
