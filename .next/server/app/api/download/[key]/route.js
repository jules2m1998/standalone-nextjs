"use strict";(()=>{var e={};e.id=6306,e.ids=[6306],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},89336:(e,o,a)=>{a.r(o),a.d(o,{headerHooks:()=>c,originalPathname:()=>k,patchFetch:()=>v,requestAsyncStorage:()=>p,routeModule:()=>i,serverHooks:()=>l,staticGenerationAsyncStorage:()=>u,staticGenerationBailout:()=>h});var t={};a.r(t),a.d(t,{GET:()=>d});var r=a(95419),n=a(69108),s=a(99678);async function d(e,{params:o}){let a=await fetch(`${process.env.API_URL}/api/files/${o.key}/download`,{headers:{...e.headers}});return new Response(a.body,{headers:{...a.headers}})}let i=new r.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/download/[key]/route",pathname:"/api/download/[key]",filename:"route",bundlePath:"app/api/download/[key]/route"},resolvedPagePath:"C:\\Users\\mevaa\\Desktop\\WORK\\RegBook\\RegbookFront\\src\\app\\api\\download\\[key]\\route.ts",nextConfigOutput:"standalone",userland:t}),{requestAsyncStorage:p,staticGenerationAsyncStorage:u,serverHooks:l,headerHooks:c,staticGenerationBailout:h}=i,k="/api/download/[key]/route";function v(){return(0,s.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:u})}},95419:(e,o,a)=>{e.exports=a(30517)}};var o=require("../../../../webpack-runtime.js");o.C(e);var a=e=>o(o.s=e),t=o.X(0,[1638],()=>a(89336));module.exports=t})();