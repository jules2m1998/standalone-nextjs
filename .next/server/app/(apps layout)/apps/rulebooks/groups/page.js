(()=>{var e={};e.id=4434,e.ids=[4434],e.modules={46517:e=>{"use strict";e.exports=require("lodash")},89699:e=>{"use strict";e.exports=require("lodash/isEmpty")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},83798:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>d});var s=t(50482),o=t(69108),a=t(62563),n=t.n(a),i=t(68300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["(apps layout)",{children:["apps",{children:["rulebooks",{children:["groups",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,35349)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\(apps layout)\\apps\\rulebooks\\groups\\page.tsx"]}]},{}]},{loading:[()=>Promise.resolve().then(t.bind(t,47256)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\(apps layout)\\apps\\rulebooks\\loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,44166)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\(apps layout)\\apps\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,9767)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\(apps layout)\\apps\\loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,49423)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\(apps layout)\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,42839)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\(apps layout)\\loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,28563)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\layout.tsx"],error:[()=>Promise.resolve().then(t.bind(t,24117)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,10870)),"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\not-found.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\(apps layout)\\apps\\rulebooks\\groups\\page.tsx"],c="/(apps layout)/apps/rulebooks/groups/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(apps layout)/apps/rulebooks/groups/page",pathname:"/apps/rulebooks/groups",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},31447:(e,r,t)=>{Promise.resolve().then(t.bind(t,22709)),Promise.resolve().then(t.bind(t,96404)),Promise.resolve().then(t.bind(t,68285)),Promise.resolve().then(t.bind(t,18706)),Promise.resolve().then(t.bind(t,7524))},42115:()=>{},28371:(e,r,t)=>{"use strict";Object.defineProperty(r,"$",{enumerable:!0,get:function(){return o}});let s=t(13664);function o(e){let{createServerReference:r}=t(82228);return r(e,s.callServer)}},73646:(e,r,t)=>{"use strict";t.d(r,{Z:()=>b});var s=t(49772),o=t.n(s),a=t(3729),n=t(7778),i=t(70136),l=t(3605);function d(e,r){return Array.isArray(e)?e.includes(r):e===r}let u=a.createContext({});u.displayName="AccordionContext";var c=t(95344);let p=a.forwardRef(({as:e="div",bsPrefix:r,className:t,children:s,eventKey:n,...p},x)=>{let{activeEventKey:m}=(0,a.useContext)(u);return r=(0,i.vE)(r,"accordion-collapse"),(0,c.jsx)(l.Z,{ref:x,in:d(m,n),...p,className:o()(t,r),children:(0,c.jsx)(e,{children:a.Children.only(s)})})});p.displayName="AccordionCollapse";let x=a.createContext({eventKey:""});x.displayName="AccordionItemContext";let m=a.forwardRef(({as:e="div",bsPrefix:r,className:t,onEnter:s,onEntering:n,onEntered:l,onExit:d,onExiting:u,onExited:m,...v},g)=>{r=(0,i.vE)(r,"accordion-body");let{eventKey:h}=(0,a.useContext)(x);return(0,c.jsx)(p,{eventKey:h,onEnter:s,onEntering:n,onEntered:l,onExit:d,onExiting:u,onExited:m,children:(0,c.jsx)(e,{ref:g,...v,className:o()(t,r)})})});m.displayName="AccordionBody";let v=a.forwardRef(({as:e="button",bsPrefix:r,className:t,onClick:s,...n},l)=>{r=(0,i.vE)(r,"accordion-button");let{eventKey:p}=(0,a.useContext)(x),m=function(e,r){let{activeEventKey:t,onSelect:s,alwaysOpen:o}=(0,a.useContext)(u);return a=>{let n=e===t?null:e;o&&(n=Array.isArray(t)?t.includes(e)?t.filter(r=>r!==e):[...t,e]:[e]),null==s||s(n,a),null==r||r(a)}}(p,s),{activeEventKey:v}=(0,a.useContext)(u);return"button"===e&&(n.type="button"),(0,c.jsx)(e,{ref:l,onClick:m,...n,"aria-expanded":Array.isArray(v)?v.includes(p):p===v,className:o()(t,r,!d(v,p)&&"collapsed")})});v.displayName="AccordionButton";let g=a.forwardRef(({as:e="h2",bsPrefix:r,className:t,children:s,onClick:a,...n},l)=>(r=(0,i.vE)(r,"accordion-header"),(0,c.jsx)(e,{ref:l,...n,className:o()(t,r),children:(0,c.jsx)(v,{onClick:a,children:s})})));g.displayName="AccordionHeader";let h=a.forwardRef(({as:e="div",bsPrefix:r,className:t,eventKey:s,...n},l)=>{r=(0,i.vE)(r,"accordion-item");let d=(0,a.useMemo)(()=>({eventKey:s}),[s]);return(0,c.jsx)(x.Provider,{value:d,children:(0,c.jsx)(e,{ref:l,...n,className:o()(t,r)})})});h.displayName="AccordionItem";let y=a.forwardRef((e,r)=>{let{as:t="div",activeKey:s,bsPrefix:l,className:d,onSelect:p,flush:x,alwaysOpen:m,...v}=(0,n.Ch)(e,{activeKey:"onSelect"}),g=(0,i.vE)(l,"accordion"),h=(0,a.useMemo)(()=>({activeEventKey:s,onSelect:p,alwaysOpen:m}),[s,p,m]);return(0,c.jsx)(u.Provider,{value:h,children:(0,c.jsx)(t,{ref:r,...v,className:o()(d,g,x&&`${g}-flush`)})})});y.displayName="Accordion";let b=Object.assign(y,{Button:v,Collapse:p,Item:h,Header:g,Body:m})},96404:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(95344),o=t(73646);let a=({children:e,...r})=>s.jsx(o.Z,{...r,children:e})},68285:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var s=t(95344),o=t(3729),a=t(73646),n=t(78154),i=t(20783),l=t.n(i),d=t(92705),u=t(9445),c=t(22254),p=t(69106);let x=({group:e,deleteAction:r=u.z3,notifier:t=p.U0})=>{let i=(0,c.useRouter)(),m=(0,o.useMemo)(()=>e.children,[e.children]),[v,g]=(0,o.useState)(!1),h=(0,o.useCallback)(async()=>{g(!0),await t.toastDeletionAsync(async()=>{if(!await t.displayDeleteAlert())throw Error("CANCEL");return await r(e.id),"SUCCESS"}),g(!1),i.refresh()},[r,e.id,t,i]);return(0,s.jsxs)(a.Z.Item,{eventKey:e.id,children:[(0,s.jsxs)(a.Z.Header,{children:[e.name," (",e.groupType,")"]}),(0,s.jsxs)(a.Z.Body,{children:[m&&!!m.length&&s.jsx(a.Z,{defaultActiveKey:e.id+"children",children:m?.map(e=>s.jsx(x,{group:e,deleteAction:r},e.id))}),!m||!m.length&&s.jsx("p",{children:"No children."}),(0,s.jsxs)("div",{className:"d-flex gap-2 mt-3",children:[s.jsx(n.Z,{as:l(),href:(0,d.zo)("/apps/rulebooks/groups/form/",e.id),disabled:v,variant:"outline-primary",size:"xs",children:"Edit"}),s.jsx(n.Z,{variant:"outline-danger",onClick:h,disabled:v,size:"xs",children:"Delete"})]})]})]})},m=x},44166:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(25036);t(69016);let o=({children:e})=>s.jsx(s.Fragment,{children:e})},9767:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(25036);function o(){return s.jsx("div",{className:"preloader-it",children:s.jsx("div",{className:"loader-pendulums"})})}},35349:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>g,metadata:()=>v});var s=t(25036),o=t(53705),a=t(38053),n=t(86843);let i=(0,n.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\components\RulebookGroup\RulebookListItem\RulebookListItem.tsx`),{__esModule:l,$$typeof:d}=i,u=i.default,c=(0,n.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\components\Accordion\Accordion.tsx`),{__esModule:p,$$typeof:x}=c,m=c.default,v={title:"Rulebooks groups"},g=async()=>{let e=await (0,a.nJ)();return s.jsx(o.ZP,{title:"Rulebooks groups",addButtonRoute:"/apps/rulebooks/groups/form/create",children:s.jsx(m,{defaultActiveKey:"0",children:e.map(e=>s.jsx(u,{group:e},e.id))})})}},47256:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(25036);function o(){return s.jsx("div",{className:"preloader-it",children:s.jsx("div",{className:"loader-pendulums"})})}},69016:()=>{}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1638,9259,6515,8851,5640,9841,5561,4819,6864,307,9106,7108,8730,1467],()=>t(83798));module.exports=s})();