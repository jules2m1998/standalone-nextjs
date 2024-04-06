"use strict";(()=>{var e={};e.id=5960,e.ids=[5960],e.modules={46517:e=>{e.exports=require("lodash")},89699:e=>{e.exports=require("lodash/isEmpty")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},25528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},91842:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>y,originalPathname:()=>h,patchFetch:()=>g,requestAsyncStorage:()=>u,routeModule:()=>l,serverHooks:()=>d,staticGenerationAsyncStorage:()=>p,staticGenerationBailout:()=>m});var s={};r.r(s),r.d(s,{GET:()=>c});var o=r(95419),n=r(69108),a=r(99678),i=r(15922);async function c(e){let t=await i.p.downLoadUsers(),r=new Headers;return r.append("Content-Disposition",'attachment; filename="export-users.csv"'),r.append("Content-Type",t.type),new Response(Buffer.from(await t.arrayBuffer()),{headers:r})}let l=new o.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/user/export-csv/route",pathname:"/api/user/export-csv",filename:"route",bundlePath:"app/api/user/export-csv/route"},resolvedPagePath:"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\api\\user\\export-csv\\route.ts",nextConfigOutput:"standalone",userland:s}),{requestAsyncStorage:u,staticGenerationAsyncStorage:p,serverHooks:d,headerHooks:y,staticGenerationBailout:m}=l,h="/api/user/export-csv/route";function g(){return(0,a.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:p})}},86843:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createProxy",{enumerable:!0,get:function(){return s}});let s=r(18195).createClientModuleProxy},48096:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DYNAMIC_ERROR_CODE:function(){return r},DynamicServerError:function(){return s}});let r="DYNAMIC_SERVER_USAGE";class s extends Error{constructor(e){super("Dynamic server usage: "+e),this.digest=r}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72973:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"staticGenerationBailout",{enumerable:!0,get:function(){return i}});let s=r(48096),o=r(25319);class n extends Error{constructor(...e){super(...e),this.code="NEXT_STATIC_GEN_BAILOUT"}}function a(e,t){let{dynamic:r,link:s}=t||{};return"Page"+(r?' with `dynamic = "'+r+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(s?" See more info here: "+s:"")}let i=(e,t)=>{let{dynamic:r,link:i}=void 0===t?{}:t,c=o.staticGenerationAsyncStorage.getStore();if(!c)return!1;if(c.forceStatic)return!0;if(c.dynamicShouldError)throw new n(a(e,{link:i,dynamic:null!=r?r:"error"}));let l=a(e,{dynamic:r,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==c.postpone||c.postpone.call(c,e),c.revalidate=0,c.isStaticGeneration){let t=new s.DynamicServerError(l);throw c.dynamicUsageDescription=e,c.dynamicUsageStack=t.stack,t}return!1};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},50482:(e,t,r)=>{e.exports=r(20399)},25091:(e,t,r)=>{e.exports=r(50482).vendored["react-rsc"].ReactDOM},25036:(e,t,r)=>{e.exports=r(50482).vendored["react-rsc"].ReactJsxRuntime},18195:(e,t,r)=>{e.exports=r(50482).vendored["react-rsc"].ReactServerDOMWebpackServerEdge},40002:(e,t,r)=>{e.exports=r(50482).vendored["react-rsc"].React},95419:(e,t,r)=>{e.exports=r(30517)},69470:(e,t,r)=>{r.r(t),r.d(t,{GET:()=>p,POST:()=>p,authOptions:()=>u});var s=r(78437),o=r(26147),n=r(89699),a=r.n(n),i=r(81355),c=r.n(i);async function l(e){let t=await fetch(`${process.env.REFRESH_TOKEN_URL}`,{headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({client_id:`${process.env.KEYCLOAK_CLIENT_ID}`,client_secret:`${process.env.KEYCLOAK_CLIENT_SECRET}`,grant_type:"refresh_token",refresh_token:e.refresh_token}),method:"POST"}),r=await t.json();if(!t.ok)throw r;return{...e,access_token:r.access_token,decoded:(0,o.Z)(r.access_token),id_token:r.id_token,expires_at:Math.floor(Date.now()/1e3)+r.expires_in,refresh_token:r.refresh_token}}let u={providers:[(0,r(10379).Z)({clientId:`${process.env.KEYCLOAK_CLIENT_ID}`,clientSecret:`${process.env.KEYCLOAK_CLIENT_SECRET}`,issuer:`${process.env.KEYCLOAK_CLIENT_ISSUER}`})],callbacks:{async jwt({token:e,account:t}){let r=Math.floor(Date.now()/1e3);if(t)return e.decoded=(0,o.Z)(t.access_token),e.access_token=t.access_token,e.id_token=t.id_token,e.expires_at=t.expires_at,e.refresh_token=t.refresh_token,e;if(r<e.expires_at)return e;try{return await l(e)}catch(t){return{...e,error:"RefreshAccessTokenError"}}},session:async({session:e,token:t})=>(e.access_token=(0,s.HI)(t.access_token),e.id_token=(0,s.HI)(t.id_token),e.roles=t.decoded.resource_access[process.env.KEYCLOAK_CLIENT_ID??""]?.roles??[],e.error=t.error,a()(e.error))?e:{}}},p=c()(u)},15922:(e,t,r)=>{r.d(t,{p:()=>i});var s=r(78437),o=r(46517),n=r.n(o);class a{constructor(e){this.httpClientServer=e}get url(){return"/api/users"}async getById(e){let t=await this.httpClientServer.get({url:(0,s.zo)(this.url,"/",e)});return t.ok?await t.json():null}async updateUser(e){return await this.httpClientServer.put({url:(0,s.zo)(this.url,"/",e.id),body:JSON.stringify({firstName:e.firstName,lastName:e.lastName,enabled:e.enabled,company:e.company})})}async resetPassword(e){return await this.httpClientServer.post({url:(0,s.zo)(this.url,"/",e),body:""})}async getAllUsers(e){null!=e&&(e.withUsers=!0);let t=await this.httpClientServer.get({url:this.url,query:e});var r=await t.json(),s=t.headers.get("x-pagination"),o={pageNumber:1,pageSize:10,totalPages:0};return n().isEmpty(s)||(o=JSON.parse(s)),{items:r,pagination:o}}async deleteUser(e){return await this.httpClientServer.delete({url:(0,s.zo)(this.url,"/",e)})}async downLoadUsers(){let e=await this.httpClientServer.get({url:(0,s.zo)(this.url,"/export")});return await e.blob()}async createUser(e){return(await this.httpClientServer.post({url:this.url,body:JSON.stringify({firstName:e.firstName,lastName:e.lastName,email:e.email,roles:e.roles,company:e.company})})).json()}async getUserAvailableRoles(e){return(await this.httpClientServer.get({url:(0,s.zo)(this.url,"/",e,"/available-roles")})).json()}async getUserRoles(){return(await this.httpClientServer.get({url:(0,s.zo)(this.url,"/roles")})).json()}async assignRoles(e,t){return(await this.httpClientServer.post({url:(0,s.zo)(this.url,"/",e,"/roles"),body:JSON.stringify(t)})).ok}async unassignRoles(e,t){return(await this.httpClientServer.baseRequest({method:"DELETE",url:(0,s.zo)(this.url,"/",e,"/roles"),body:JSON.stringify(t)})).ok}async createSubscription(e,t){let r=await this.httpClientServer.post({url:(0,s.zo)(`/api/users/${e}/subscriptions`),body:JSON.stringify(t)});return await r.json()}async updateSubscription(e,t){return(await this.httpClientServer.put({url:(0,s.zo)(`/api/users/${e}/subscriptions`),body:JSON.stringify(t)})).ok}async updateKey(e,t,r){return(await this.httpClientServer.put({url:(0,s.zo)(`/api/users/${e}/apiKeys/${t}`),body:JSON.stringify(r)})).ok}async createKey(e,t){return(await this.httpClientServer.post({url:(0,s.zo)(`/api/users/${e}/apiKeys`),body:JSON.stringify(t)})).ok}}let i=new a(s.tr)},35969:(e,t,r)=>{function s(...e){return e.join("")}r.d(t,{zo:()=>s}),r(89699),r(25241)},78437:(e,t,r)=>{r.d(t,{zo:()=>f.zo,pe:()=>h,HI:()=>m,lI:()=>g,Pb:()=>n,tr:()=>p,U0:()=>T,ZU:()=>w,oZ:()=>v});class s{constructor(e,t){this.baseUrl=e,this.globalHeaders={...t}}get gHeaders(){return this.globalHeaders??{}}objectToQueryParams(e){return Object.entries(e).reduce((e,[t,r])=>[`${t}=${"string"==typeof r?r:JSON.stringify(r)}`,...e],[]).join("&")}async baseRequest(e){let{method:t,url:r,body:s,headers:o}=e;if(!this.baseUrl&&!r)throw Error("unable to perform a query on an undefined url");let n=r??this.baseUrl??"";r&&!/^https?:\/\/.*/i.test(r)&&(n=this.baseUrl+r);let a={url:n,options:{method:t,headers:{...this.gHeaders,...o??{}},body:s}};if(this.requestInterceptor&&(a=await this.requestInterceptor(a)),!a)return Promise.resolve(new Response(JSON.stringify(null),{status:499}));{let e=fetch(a.url??"",{method:a.options?.method??"GET",headers:a.options?{...a.options.headers}:{},body:a.options?.body});return this.responseInterceptor&&(e=this.responseInterceptor(e)),e}}get(e){let{headers:t,query:r}=e,s=e.url;return r&&(s+=`?${this.objectToQueryParams(r)}`),this.baseRequest({url:s,method:"GET",headers:t})}post(e){let{url:t,body:r,headers:s}=e;return this.baseRequest({url:t,method:"POST",headers:s,body:r})}patch(e){let{url:t,body:r,headers:s}=e;return this.baseRequest({url:t,method:"PATCH",headers:{"Content-Type":"application/json-patch+json"},body:r})}put(e){let{url:t,body:r,headers:s}=e;return this.baseRequest({url:t,method:"PUT",headers:s,body:r})}async delete(e){let{headers:t,query:r}=e,s=e.url;r&&(s+=`?${this.objectToQueryParams(r)}`);let o=await this.baseRequest({url:s,method:"DELETE",headers:t});return o?.status===499?{isNotAction:!0}:{isNotAction:!1,response:o}}}let o=new s("",{});o.requestInterceptor=async e=>(console.log("httpClientImplementation.responseInterceptor",e),"DELETE"!==e?.options?.method||await T.displayDeleteAlert())?e:null,o.responseInterceptor=async e=>{let t=await e;if(console.log("httpClientImplementation.responseInterceptor",t.status),500===t.status)throw Error("Something went wrong");if(404===t.status&&(window.location.href="/not-found"),400===t.status||409===t.status){let e=await t.clone().json();T.error(e.detail)}return e};let n=o;var a=r(69470),i=r(81355),c=r(44551);let l=new s(process.env.API_URL??"",{Accept:"application/json","Content-Type":"application/json"}),u=async e=>{let t=await (0,i.getServerSession)(a.authOptions),r=t?.access_token,s=r?h(r):"";return{...e,options:{...e.options,headers:{...e?.options?.headers,...t&&{Authorization:`Bearer ${s}`}}}}};l.requestInterceptor=u,l.responseInterceptor=async e=>{let t=await e;if(console.log("httpClientServerImplementation.responseInterceptor",t.status),401===t.status&&(0,c.redirect)("/logout"),403===t.status&&(0,c.redirect)("/not-found"),500===t.status){let e=t.clone();throw console.log(await e.json()),Error("Something went wrong")}return e};let p=l;var d=r(68693),y=r.n(d);function m(e){let t=`${process.env.NEXTAUTH_SECRET}`;return new(y())(t).encrypt(e)}function h(e){let t=`${process.env.NEXTAUTH_SECRET}`;return new(y())(t).decrypt(e)}async function g(){let e=await (0,i.getServerSession)(a.authOptions);return e?h(e.id_token):null}var f=r(35969);function w(e){return new Date(e)}let v=({filters:e,sortOrder:t,pageSize:r,pageNumber:s})=>{let o=null,n={};return t&&(o=Object.entries(t).reduce((e,[t,r])=>[...e,(0,f.zo)(t," ",r)],[]).join(","),n={...n,sortOrder:o}),e&&(n={...n,filters:e}),r&&(n={...n,pageSize:r}),s&&(n={...n,pageNumber:s}),n};var S=r(86843);let b=(0,S.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\utils\converters\useClientRenderToString.ts`),{__esModule:k,$$typeof:R}=b;b.default,(0,S.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\utils\converters\useClientRenderToString.ts#useClientRenderToString`);var _=r(25036),C=r(23222),x=r(64338),E=r.n(x),O=r(29903);class j{constructor(){this.mySwal=(0,O.Z)(E())}startLoading(e){return C.Am.loading(e)}stopLoading(e){return C.Am.done(e)}async displayDeleteAlert(){let{isConfirmed:e}=await this.mySwal.fire({title:_.jsx("h3",{children:"Are you sure ?"}),confirmButtonColor:"#500000",cancelButtonColor:"#FF0000",confirmButtonText:"Delete",cancelButtonText:"Cancel",showCancelButton:!0,customClass:{cancelButton:"swal-cancel-btn",confirmButton:"swal-confirm-btn",container:"swal-container-content"},icon:"warning",html:_.jsx("p",{children:"You won't be able to revert this!"})});return e}async toastAsync(e,t,r,s,o=null){let n=C.Am.loading(t);try{let t=await e();return C.Am.update(n,{render:r,type:"success",isLoading:!1,autoClose:!0}),t}catch(e){return"CANCEL"===e.message&&o?C.Am.update(n,{render:o,type:"warning",isLoading:!1,autoClose:!0}):C.Am.update(n,{render:s,type:"error",isLoading:!1,autoClose:!0}),e.message}}async toastDeletionAsync(e){return await this.toastAsync(e,"Deletion in progress","Element successfully deleted","Something went wrong during deletion!","Deletion canceled")}async toastCreationAsync(e){return await this.toastAsync(e,"Creation in progress","Element successfully created","Something went wrong during creation!","Creation canceled")}error(e){C.Am.error(e)}success(e){C.Am.success(e)}async toastUpdateAsync(e){return await this.toastAsync(e,"Update in progress","Element successfully updated","Something went wrong during update!","Update canceled")}}let T=new j},23222:(e,t,r)=>{r.d(t,{Am:()=>c,Ix:()=>i});var s=r(86843);let o=(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs`),{__esModule:n,$$typeof:a}=o;o.default,(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#Bounce`),(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#Flip`),(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#Icons`),(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#Slide`);let i=(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#ToastContainer`);(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#Zoom`),(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#collapseToast`),(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#cssTransition`);let c=(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#toast`);(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#useToast`),(0,s.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\node_modules\react-toastify\dist\react-toastify.esm.mjs#useToastContainer`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,5561],()=>r(91842));module.exports=s})();