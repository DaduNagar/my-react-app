import{bg as R,bh as T,bi as b,bj as u,bk as V,bl as B,bm as D,r as p,bn as F,j as M,e as E,bo as $,f as G,a as N,bp as k,s as O,bq as U}from"./index-DdyQWS_J.js";const A=R(),q=T("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function I(e){return $({props:e,name:"MuiStack",defaultTheme:A})}function L(e,s){const n=p.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(p.cloneElement(s,{key:`separator-${t}`})),a),[])}const z=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],H=({ownerState:e,theme:s})=>{let n={display:"flex",flexDirection:"column",...b({theme:s},u({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a}))};if(e.spacing){const a=V(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=u({values:e.direction,base:c}),d=u({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const l=r>0?t[i[r-1]]:"column";t[o]=l}}),n=B(n,b({theme:s},d,(o,r)=>e.useFlexGap?{gap:k(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${z(r?t[r]:e.direction)}`]:k(a,o)}}))}return n=D(s.breakpoints,n),n};function J(e={}){const{createStyledComponent:s=q,useThemeProps:n=I,componentName:a="MuiStack"}=e,c=()=>G({root:["root"]},o=>N(a,o),{}),t=s(H);return p.forwardRef(function(o,r){const i=n(o),f=F(i),{component:l="div",direction:v="column",spacing:h=0,divider:y,children:g,className:x,useFlexGap:j=!1,...C}=f,P={direction:v,spacing:h,useFlexGap:j},S=c();return M.jsx(t,{as:l,ownerState:P,ref:r,className:E(S.root,x),...C,children:y?L(g,y):g})})}const Q=J({createStyledComponent:O("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>U({props:e,name:"MuiStack"})});export{Q as S};
