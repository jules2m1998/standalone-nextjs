(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{17194:function(e,t,n){"use strict";var r=n(51829),l=n(2265),s=n(60488),a=n(21271),i=n(36123),o=n(51066),c=n(59741),u=n(79861),f=n(57410),d=n(57437);let p=["as","onSelect","activeKey","role","onKeyDown"],h=()=>{},v=(0,u.PB)("event-key"),x=l.forwardRef((e,t)=>{let n,f,{as:x="div",onSelect:m,activeKey:y,role:g,onKeyDown:j}=e,b=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,p),A=(0,s.Z)(),Z=(0,l.useRef)(!1),N=(0,l.useContext)(o.Z),k=(0,l.useContext)(c.Z);k&&(g=g||"tablist",y=k.activeKey,n=k.getControlledId,f=k.getControllerId);let O=(0,l.useRef)(null),w=e=>{let t=O.current;if(!t)return null;let n=(0,r.Z)(t,`[${v}]:not([aria-disabled=true])`),l=t.querySelector("[aria-selected=true]");if(!l||l!==document.activeElement)return null;let s=n.indexOf(l);if(-1===s)return null;let a=s+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},C=(e,t)=>{null!=e&&(null==m||m(e,t),null==N||N(e,t))};(0,l.useEffect)(()=>{if(O.current&&Z.current){let e=O.current.querySelector(`[${v}][aria-selected=true]`);null==e||e.focus()}Z.current=!1});let _=(0,a.Z)(t,O);return(0,d.jsx)(o.Z.Provider,{value:C,children:(0,d.jsx)(i.Z.Provider,{value:{role:g,activeKey:(0,o.h)(y),getControlledId:n||h,getControllerId:f||h},children:(0,d.jsx)(x,Object.assign({},b,{onKeyDown:e=>{let t;if(null==j||j(e),k){switch(e.key){case"ArrowLeft":case"ArrowUp":t=w(-1);break;case"ArrowRight":case"ArrowDown":t=w(1);break;default:return}t&&(e.preventDefault(),C(t.dataset[(0,u.$F)("EventKey")]||null,e),Z.current=!0,A())}},ref:_,role:g}))})})});x.displayName="Nav",t.Z=Object.assign(x,{Item:f.Z})},57410:function(e,t,n){"use strict";n.d(t,{v:function(){return d}});var r=n(2265),l=n(25113),s=n(36123),a=n(51066),i=n(98949),o=n(79861),c=n(59741),u=n(57437);let f=["as","active","eventKey"];function d({key:e,onClick:t,active:n,id:i,role:u,disabled:f}){let d=(0,r.useContext)(a.Z),p=(0,r.useContext)(s.Z),h=(0,r.useContext)(c.Z),v=n,x={role:u};if(p){u||"tablist"!==p.role||(x.role="tab");let t=p.getControllerId(null!=e?e:null),r=p.getControlledId(null!=e?e:null);x[(0,o.PB)("event-key")]=e,x.id=t||i,((v=null==n&&null!=e?p.activeKey===e:n)||!(null!=h&&h.unmountOnExit)&&!(null!=h&&h.mountOnEnter))&&(x["aria-controls"]=r)}return"tab"===x.role&&(x["aria-selected"]=v,v||(x.tabIndex=-1),f&&(x.tabIndex=-1,x["aria-disabled"]=!0)),x.onClick=(0,l.Z)(n=>{f||(null==t||t(n),null!=e&&d&&!n.isPropagationStopped()&&d(e,n))}),[x,{isActive:v}]}let p=r.forwardRef((e,t)=>{let{as:n=i.ZP,active:r,eventKey:l}=e,s=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,f),[c,p]=d(Object.assign({key:(0,a.h)(l,s.href),active:r},s));return c[(0,o.PB)("active")]=p.isActive,(0,u.jsx)(n,Object.assign({},s,c,{ref:t}))});p.displayName="NavItem",t.Z=p},59741:function(e,t,n){"use strict";let r=n(2265).createContext(null);t.Z=r},34462:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2265),l=n(26857);let s=(0,r.createContext)(l.Z?window:void 0);function a(){return(0,r.useContext)(s)}s.Provider},54440:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(n=(function(){return l}).apply(t,[]))&&(e.exports=n)}()},41535:function(e,t,n){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,{Z:function(){return r}})},55549:function(e,t,n){Promise.resolve().then(n.bind(n,31020))},67205:function(e,t,n){"use strict";var r=n(57437),l=n(61396),s=n.n(l),a=n(24033),i=n(16691),o=n.n(i),c=n(91157),u=n(42824),f=n(8427),d=n(46716),p=n(29710),h=n(16007);t.Z=()=>{let e=(0,a.usePathname)(),t=e.match("/auth/login/simple"),n=e.match("/auth/signup/simple");return(0,r.jsx)(c.Z,{expand:"xl",className:"hk-navbar navbar-light fixed-top",children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)("div",{className:"nav-start-wrap",children:(0,r.jsx)(c.Z.Brand,{as:s(),href:"/",children:(0,r.jsx)(o(),{className:"brand-img d-inline-block",src:h.Z,alt:"brand"})})}),(0,r.jsx)("div",{className:"nav-end-wrap",children:(0,r.jsxs)(f.Z,{as:"ul",className:"flex-row",children:[t&&(0,r.jsx)(f.Z.Item,{as:"li",className:"nav-link py-0",children:(0,r.jsx)(d.Z,{size:"sm",variant:"outline-light",children:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"icon",children:(0,r.jsx)("span",{className:"feather-icon",children:(0,r.jsx)(p.Z,{})})}),(0,r.jsx)("span",{children:"Get Help"})]})})}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z.Item,{as:"li",className:"nav-link py-0",children:(0,r.jsx)(d.Z,{variant:"primary",as:"a",href:"#",children:"Help"})}),(0,r.jsx)(f.Z.Item,{as:"li",className:"nav-link py-0",children:(0,r.jsx)(d.Z,{variant:"outline-light",as:s(),href:"/auth/login",children:"Sign In"})})]})]})})]})})}},31020:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(57437),l=n(67205),s=n(59322),a=n(4007),i=n.n(a),o={src:"/_next/static/media/home-page.3a5c6d7a.svg",height:485,width:827,blurWidth:0,blurHeight:0},c=n(16691),u=n.n(c),f=n(46716),d=n(46928),p=n(61396),h=n.n(p);n(2265);var v=()=>(0,r.jsx)("div",{className:"preloader-it",children:(0,r.jsx)("div",{className:"loader-pendulums"})}),x=()=>{let{login:e,user:t,status:n}=(0,d.aC)();return"loading"===n?(0,r.jsx)(v,{}):(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{}),(0,r.jsxs)("div",{className:"hk-pg-wrapper",children:[(0,r.jsxs)("div",{className:i().body,children:[(0,r.jsx)(u(),{src:o,alt:"Home pqge"}),(0,r.jsx)("h3",{className:"mb-2",children:"Welcome to RegBook"}),(0,r.jsx)("p",{children:"Regbook is a saas platform that will save you time by providing information on rulebooks in a classifiable way."}),"unauthenticated"===n&&(0,r.jsx)(f.Z,{color:"primary",onClick:e,children:"Sign In"}),"authenticated"===n&&(0,r.jsx)(h(),{href:"/dashboard",children:"Go to dashboard"})]}),(0,r.jsx)(s.Z,{})]})]})}},59322:function(e,t,n){"use strict";var r=n(57437),l=n(61396),s=n.n(l),a=n(42824),i=n(38597),o=n(94434),c=n(3794);t.Z=()=>(0,r.jsx)("div",{className:"hk-footer",children:(0,r.jsx)(a.Z,{as:"footer",className:"footer",children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{xl:8,children:(0,r.jsxs)("p",{className:"footer-text",children:[(0,r.jsxs)("span",{className:"copy-text",children:["Reg-Book \xa9 ",new Date().getFullYear()," All rights reserved."]})," ",(0,r.jsx)(s(),{href:"#",children:"Privacy Policy"}),(0,r.jsx)("span",{className:"footer-link-sep",children:"|"}),(0,r.jsx)(s(),{href:"#",children:"T&C"}),(0,r.jsx)("span",{className:"footer-link-sep",children:"|"}),(0,r.jsx)(s(),{href:"#",children:"System Status"})]})}),(0,r.jsx)(o.Z,{xl:4,children:(0,r.jsxs)(s(),{href:"#",className:"footer-extr-link link-default",children:[(0,r.jsx)("span",{className:"feather-icon",children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)("u",{children:"Send feedback to our help forum"})]})})]})})})},4007:function(e){e.exports={body:"home_body__0UR4M"}},16007:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo-light.f10a96c6.png",height:60,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEVRAABQAQBMAACKMgqBLQpQAADC9x+NAAAABnRSTlNTPjFdSV8MMeEhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVR4nGNgYGBkYmRkYmJgZWBiYGRmZgEAAMsAHOmsVGMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},30622:function(e,t,n){"use strict";var r=n(2265),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:l,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},57437:function(e,t,n){"use strict";e.exports=n(30622)},95915:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,l.default)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var l=null;return t.forEach(function(e){if(null==l){var t=e.apply(void 0,n);null!=t&&(l=t)}}),l})};var r,l=(r=n(38896))&&r.__esModule?r:{default:r};e.exports=t.default},38896:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,l,s,a){var i=l||"<<anonymous>>",o=a||r;if(null==n[r])return t?Error("Required "+s+" `"+o+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),f=6;f<c;f++)u[f-6]=arguments[f];return e.apply(void 0,[n,r,i,s,o].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},33018:function(e,t,n){"use strict";var r=n(61289);function l(){}function s(){}s.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,s,a){if(a!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:l};return n.PropTypes=n,n}},74275:function(e,t,n){e.exports=n(33018)()},61289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},78069:function(e,t,n){"use strict";let r=n(2265).createContext(null);r.displayName="CardHeaderContext",t.Z=r},94434:function(e,t,n){"use strict";var r=n(54440),l=n.n(r),s=n(2265),a=n(57127),i=n(57437);let o=s.forwardRef((e,t)=>{let[{className:n,...r},{as:s="div",bsPrefix:o,spans:c}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,a.vE)(t,"col");let s=(0,a.pi)(),i=(0,a.zG)(),o=[],c=[];return s.forEach(e=>{let n,l,s;let a=r[e];delete r[e],"object"==typeof a&&null!=a?{span:n,offset:l,order:s}=a:n=a;let u=e!==i?`-${e}`:"";n&&o.push(!0===n?`${t}${u}`:`${t}${u}-${n}`),null!=s&&c.push(`order${u}-${s}`),null!=l&&c.push(`offset${u}-${l}`)}),[{...r,className:l()(n,...o,...c)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,i.jsx)(s,{...r,ref:t,className:l()(n,!c.length&&o)})});o.displayName="Col",t.Z=o},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(54440),l=n.n(r);n(95915);var s=n(2265),a=n(30538),i=n(17194),o=n(57127),c=n(69414),u=n(78069),f=(0,n(12510).Z)("nav-item"),d=n(95511),p=n(57410),h=n(51066),v=n(57437);let x=s.forwardRef(({bsPrefix:e,className:t,as:n=d.Z,active:r,eventKey:s,disabled:a=!1,...i},c)=>{e=(0,o.vE)(e,"nav-link");let[u,f]=(0,p.v)({key:(0,h.h)(s,i.href),active:r,disabled:a,...i});return(0,v.jsx)(n,{...i,...u,ref:c,disabled:a,className:l()(t,e,a&&"disabled",f.isActive&&"active")})});x.displayName="NavLink";let m=s.forwardRef((e,t)=>{let n,r;let{as:f="div",bsPrefix:d,variant:p,fill:h=!1,justify:x=!1,navbar:m,navbarScroll:y,className:g,activeKey:j,...b}=(0,a.Ch)(e,{activeKey:"onSelect"}),A=(0,o.vE)(d,"nav"),Z=!1,N=(0,s.useContext)(c.Z),k=(0,s.useContext)(u.Z);return N?(n=N.bsPrefix,Z=null==m||m):k&&({cardHeaderBsPrefix:r}=k),(0,v.jsx)(i.Z,{as:f,ref:t,activeKey:j,className:l()(g,{[A]:!Z,[`${n}-nav`]:Z,[`${n}-nav-scroll`]:Z&&y,[`${r}-${p}`]:!!r,[`${A}-${p}`]:!!p,[`${A}-fill`]:h,[`${A}-justified`]:x}),...b})});m.displayName="Nav";var y=Object.assign(m,{Item:f,Link:x})},38597:function(e,t,n){"use strict";var r=n(54440),l=n.n(r),s=n(2265),a=n(57127),i=n(57437);let o=s.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},s)=>{let o=(0,a.vE)(e,"row"),c=(0,a.pi)(),u=(0,a.zG)(),f=`${o}-cols`,d=[];return c.forEach(e=>{let t;let n=r[e];delete r[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n;let l=e!==u?`-${e}`:"";null!=t&&d.push(`${f}${l}-${t}`)}),(0,i.jsx)(n,{ref:s,...r,className:l()(t,o,...d)})});o.displayName="Row",t.Z=o},57127:function(e,t,n){"use strict";n.d(t,{SC:function(){return u},pi:function(){return o},vE:function(){return i},zG:function(){return c}});var r=n(2265);n(57437);let l=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:s,Provider:a}=l;function i(e,t){let{prefixes:n}=(0,r.useContext)(l);return e||n[t]||t}function o(){let{breakpoints:e}=(0,r.useContext)(l);return e}function c(){let{minBreakpoint:e}=(0,r.useContext)(l);return e}function u(){let{dir:e}=(0,r.useContext)(l);return"rtl"===e}},12510:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(54440),l=n.n(r),s=/-(.)/g,a=n(2265),i=n(57127),o=n(57437);let c=e=>e[0].toUpperCase()+e.replace(s,function(e,t){return t.toUpperCase()}).slice(1);function u(e,{displayName:t=c(e),Component:n,defaultProps:r}={}){let s=a.forwardRef(({className:t,bsPrefix:s,as:a=n||"div",...c},u)=>{let f={...r,...c},d=(0,i.vE)(s,e);return(0,o.jsx)(a,{ref:u,className:l()(t,d),...f})});return s.displayName=t,s}},29710:function(e,t,n){"use strict";var r=n(2265),l=n(74275),s=n.n(l);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=(0,r.forwardRef)(function(e,t){var n=e.color,l=e.size,s=void 0===l?24:l,i=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});i.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},i.displayName="HelpCircle",t.Z=i}},function(e){e.O(0,[8218,9461,4562,9460,6349,1103,2639,4037,8093,6691,7176,2749,1282,6862,6928,2971,4938,1744],function(){return e(e.s=55549)}),_N_E=e.O()}]);