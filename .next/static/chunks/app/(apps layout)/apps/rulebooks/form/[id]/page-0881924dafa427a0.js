(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{1474:function(e,l,a){Promise.resolve().then(a.bind(a,51064))},51064:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return O}});var r=a(57437),s=a(60204),i=a(54440),d=a.n(i),n=a(42824),o=a(38597),t=a(94434),c=a(37540),u=a(67663),m=a(14506),p=a(24033),h=a(96778),x=a.n(h),j=a(61865),v=a(69174),b=a(35691),f=a(63014),g=a(38038),Z=a(23588),y=a(2265),N=a(23377),k=a(92887),C=a(8427),w=a(70507),I=a(46716),R=a(58749),B=a(61396),F=a.n(B),G=a(28481),S=a(3414),L=a(89798),_=a(16862),q=e=>{let{title:l,onChange:a,onBlur:s,errors:i}=e,[d,n]=(0,y.useState)([]),o=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";let a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(l<0?0:l))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]},t=e=>{let l=d.filter(l=>l.id!==e);n(l),a(l.map(e=>e.file))};return(0,r.jsx)("div",{className:"fileupload-view",children:(0,r.jsx)("div",{className:"row justify-content-center m-0",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("div",{className:"card mt-5",children:(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("div",{className:"kb-data-box",children:[(0,r.jsx)("div",{className:"kb-modal-data-title",children:(0,r.jsxs)("div",{className:"kb-data-title",children:[(0,r.jsx)("h6",{children:l}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null==i?void 0:i.message})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"kb-file-upload",children:(0,r.jsxs)("div",{className:"file-upload-box",children:[(0,r.jsx)("input",{type:"file",id:"fileupload",className:"file-upload-input",onChange:e=>{let l=[...d.map(e=>e.file)];for(let a=0;a<e.target.files.length;a++){l.push(e.target.files[a]);let r=new FileReader,s=e.target.files[a];r.onloadend=()=>{n(l=>[...l,{id:(0,G.x0)(),filename:e.target.files[a].name,filetype:e.target.files[a].type,fileimage:r.result,datetime:e.target.files[a].lastModifiedDate.toLocaleString("en-GB"),filesize:o(e.target.files[a].size),file:s}])},e.target.files[a]&&r.readAsDataURL(s)}a(l)},multiple:!0,onBlur:s}),(0,r.jsxs)("span",{children:["Drag and drop or"," ",(0,r.jsx)("span",{className:"file-link",children:"Choose your files"})]})]})}),(0,r.jsx)("div",{className:"kb-attach-box mb-3",children:d.map(e=>{let{id:l,filename:a,fileimage:s,datetime:i,filesize:d}=e;return(0,r.jsxs)("div",{className:"file-atc-box",children:[a.match(/.(jpg|jpeg|png|gif|svg)$/i)?(0,r.jsxs)("div",{className:"file-image",children:[" ",(0,r.jsx)(S.Z,{src:s,alt:""})]}):(0,r.jsx)("div",{className:"file-image",children:(0,r.jsx)("div",{style:{width:48},children:(0,r.jsx)(L.a,{extension:(0,_.RT)(a),...L.j[(0,_.RT)(a)]})})}),(0,r.jsxs)("div",{className:"file-detail",children:[(0,r.jsx)("h6",{children:a}),(0,r.jsx)("p",{}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:["Size : ",d]}),(0,r.jsxs)("span",{className:"ml-2",children:["Modified Time : ",i]})]}),(0,r.jsx)("div",{className:"file-actions",children:(0,r.jsx)("button",{type:"button",className:"file-action-btn",onClick:()=>t(l),children:"Delete"})})]})]},l)})})]})]})})})})})})},T=a(79116),U=a.n(T),M=e=>{var l,a,s,i,n,o,t,c,u,h,x,B,G,S,L,_;let{rulebook:T}=e,[M,O]=(0,y.useState)(!1),P=(0,g.NL)(),D=(0,p.useRouter)(),A=b.Ry({name:b.Z_().required(),lawTitle:b.Z_().required(),description:b.Z_(),mainUrl:b.Z_().url().required(),feedUrl:b.Z_().url().required(),mainRuleId:b.Rx().integer().required(),refSearchId:b.Rx().integer(),feedId:b.Rx().integer().required(),regulatorCode:b.Ry({value:b.Z_().required(),label:b.Z_().required()}),countryCode:b.Ry({value:b.Z_().required(),label:b.Z_().required()}),ruleBookGroupId:b.Ry({value:b.Z_().required(),label:b.Z_().required()}),files:b.nK()}).required(),{register:K,handleSubmit:E,control:Q,formState:{errors:z}}=(0,j.cI)({resolver:(0,v.X)(A),defaultValues:{lawTitle:T.lawTitle,name:T.name,description:T.description,mainUrl:T.mainUrl,feedUrl:T.feedUrl,mainRuleId:T.mainRuleId,refSearchId:T.refSearchId,feedId:T.feedId,regulatorCode:{value:null===(l=T.regulator)||void 0===l?void 0:l.value,label:null===(a=T.regulator)||void 0===a?void 0:a.label},countryCode:{value:null===(s=T.country)||void 0===s?void 0:s.value,label:null===(i=T.country)||void 0===i?void 0:i.label},ruleBookGroupId:{value:null===(n=T.group)||void 0===n?void 0:n.value,label:null===(o=T.group)||void 0===o?void 0:o.label}}}),X=async e=>{try{return await (0,m.dy)(e)}catch(e){return f.toast.error("An unknown error occurred"),[]}},H=async e=>{try{return await (0,m.ox)(e)}catch(e){return f.toast.error("An unknown error occurred"),[]}},V=async e=>{try{return await (0,m.HX)({filters:'name @= "'.concat(e,'"'),pageSize:100,canContainsRuleBooks:!0})}catch(e){return f.toast.error("An unknown error occurred"),[]}},Y=(0,Z.D)({mutationFn:e=>(0,m.iB)(e),onMutate:e=>({id:1}),onSuccess:(e,l)=>{P.invalidateQueries({queryKey:["rulebooks"]}),f.toast.success("Rulebook have been created successfully"),D.push("/apps/rulebooks")},onError:(e,l)=>{console.log("rolling back optimistic update with variables",l)},onSettled:(e,l,a,r)=>{O(!1)}});return(0,r.jsxs)(N.Z,{className:"edit-post-form row",onSubmit:E(e=>{var l;O(!0);let a=new FormData;a.append("name",e.name),a.append("ruleBookGroupId",e.ruleBookGroupId.value),a.append("lawTitle",e.lawTitle),a.append("regulatorCode",e.regulatorCode.value),a.append("countryCode",e.countryCode.value),a.append("mainRuleId",e.mainRuleId.toString()),a.append("feedId",e.feedId.toString()),a.append("mainUrl",e.mainUrl),a.append("feedUrl",e.feedUrl),a.append("description",null!==(l=e.description)&&void 0!==l?l:""),e.files&&U()(e.files,e=>{a.append("Files",e,e.name)}),Y.mutate(a)}),children:[(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)(N.Z.Group,{children:[(0,r.jsx)(N.Z.Label,{children:"RuleBookGroup"}),(0,r.jsx)(j.Qr,{name:"ruleBookGroupId",control:Q,render:e=>{let{field:l}=e;return(0,r.jsx)(R.Z,{...l,defaultOptions:!0,cacheOptions:!0,loadOptions:V,placeholder:"Select RuleGroup"})}}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(t=z.ruleBookGroupId)||void 0===t?void 0:t.message})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)(N.Z.Group,{className:"mb-3",children:[(0,r.jsx)(N.Z.Label,{children:"LawTitle"}),(0,r.jsx)(N.Z.Control,{placeholder:"LawTitle",type:"text",...K("lawTitle")}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(c=z.lawTitle)||void 0===c?void 0:c.message})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)(N.Z.Group,{className:"mb-3",children:[(0,r.jsx)(N.Z.Label,{children:"Name"}),(0,r.jsx)(N.Z.Control,{placeholder:"Name",type:"text",...K("name")}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(u=z.name)||void 0===u?void 0:u.message})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)(N.Z.Group,{children:[(0,r.jsx)(N.Z.Label,{children:"Regulator"}),(0,r.jsx)(j.Qr,{name:"regulatorCode",control:Q,render:e=>{let{field:l}=e;return(0,r.jsx)(R.Z,{...l,defaultOptions:!0,cacheOptions:!0,loadOptions:X,placeholder:"Select Regulators"})}}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(h=z.regulatorCode)||void 0===h?void 0:h.message})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)(N.Z.Group,{children:[(0,r.jsx)(N.Z.Label,{children:"Country"}),(0,r.jsx)(j.Qr,{name:"countryCode",control:Q,render:e=>{let{field:l}=e;return(0,r.jsx)(R.Z,{...l,defaultOptions:!0,cacheOptions:!0,loadOptions:H,placeholder:"Select Countries"})}}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(x=z.countryCode)||void 0===x?void 0:x.message})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)(N.Z.Group,{className:"mb-3",children:[(0,r.jsx)(N.Z.Label,{children:"Main Page"}),(0,r.jsx)(N.Z.Control,{placeholder:"Main Page",type:"text",...K("mainUrl")}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(B=z.mainUrl)||void 0===B?void 0:B.message})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)(N.Z.Group,{className:"mb-3",children:[(0,r.jsx)(N.Z.Label,{children:"Feed Page"}),(0,r.jsx)(N.Z.Control,{placeholder:"Feed Page",type:"text",...K("feedUrl")}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(G=z.feedUrl)||void 0===G?void 0:G.message})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)(N.Z.Group,{className:"mb-3",children:[(0,r.jsx)(N.Z.Label,{children:"Main Rule Id"}),(0,r.jsx)(N.Z.Control,{placeholder:"Main Rule Id",type:"number",...K("mainRuleId")}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(S=z.mainRuleId)||void 0===S?void 0:S.message})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)(N.Z.Group,{className:"mb-3",children:[(0,r.jsx)(N.Z.Label,{children:"FeedId"}),(0,r.jsx)(N.Z.Control,{placeholder:"FeedId",type:"number",...K("feedId")}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(L=z.feedId)||void 0===L?void 0:L.message})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)(N.Z.Group,{className:"mb-3",children:[(0,r.jsx)(N.Z.Label,{children:"Description"}),(0,r.jsx)(N.Z.Control,{as:"textarea",rows:3,placeholder:"Description",type:"text",...K("description")}),(0,r.jsx)(N.Z.Control.Feedback,{type:"invalid",children:null===(_=z.description)||void 0===_?void 0:_.message})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)(k.Z.Container,{defaultActiveKey:"files",children:[(0,r.jsx)(C.Z,{variant:"tabs",className:"nav-light border-bottom-0",children:(0,r.jsx)(C.Z.Item,{children:(0,r.jsx)(C.Z.Link,{eventKey:"files",children:(0,r.jsx)("span",{className:"nav-link-text",children:"Files"})})})}),(0,r.jsx)(w.Z,{className:"card-border rounded-top-start-0",children:(0,r.jsx)(w.Z.Body,{children:(0,r.jsx)(k.Z.Content,{className:"mt-0",children:(0,r.jsx)(k.Z.Pane,{eventKey:"files",children:(0,r.jsx)(j.Qr,{name:"files",control:Q,render:e=>{let{field:{onChange:l,onBlur:a,value:s}}=e;return(0,r.jsx)(q,{onBlur:a,onChange:l,title:"Attach Files",errors:z.files})}})})})})})]})}),(0,r.jsxs)("div",{className:"col-md-12 d-flex justify-content-between",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)(I.Z,{className:d()("btn-block ld-ext-right",{running:M}),disabled:M,variant:"primary",type:"submit",children:["Create",(0,r.jsx)("div",{className:"ld ld-ring ld-spin"})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)(I.Z,{className:"btn-block",variant:"secondary",href:"/apps/rulebooks/",as:F(),disabled:M,children:"Cancel"})})]})]})},O=()=>{var e;let l=null!==(e=(0,p.useSearchParams)().get("rulebookId"))&&void 0!==e?e:"",{isPending:a,data:i}=(0,u.a)({queryKey:["rulebook",l],queryFn:async()=>x()(l)?{}:await (0,m.Ns)(l),staleTime:18e5,gcTime:36e5});return(0,r.jsx)("div",{className:"hk-pg-body py-0",children:(0,r.jsxs)("div",{className:d()("todoapp-wrap",{"todoapp-sidebar-toggle":!1}),children:[(0,r.jsx)(s.GL,{}),(0,r.jsx)("div",{className:"todoapp-content",children:(0,r.jsxs)("div",{className:"todoapp-detail-wrap",children:[(0,r.jsx)(s.BP,{toggleSidebar:()=>null,showSidebar:!1,title:"Add RuleBook",withSearch:!1}),(0,r.jsx)("div",{className:d()("todo-body ld-over",{running:a}),children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"ld ld-ring ld-spin"}),(0,r.jsx)("p",{className:"ld-label",children:"Loading..."})]}):(0,r.jsx)(c.Z,{className:"nicescroll-bar",children:(0,r.jsx)(n.Z,{children:(0,r.jsx)(o.Z,{className:"justify-content-center",children:(0,r.jsx)(t.Z,{xxl:10,lg:10,md:10,children:(0,r.jsx)(M,{rulebook:null!=i?i:{}})})})})})})]})})]})})}}},function(e){e.O(0,[8218,9461,6990,1866,9571,2135,4562,9460,6349,461,1103,2639,4037,8093,6691,5704,5864,7176,5691,1281,6402,2749,6375,4102,7160,5152,5377,9704,2971,4938,1744],function(){return e(e.s=1474)}),_N_E=e.O()}]);