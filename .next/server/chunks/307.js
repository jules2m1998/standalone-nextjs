exports.id=307,exports.ids=[307],exports.modules={41372:(A,e,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},91954:(A,e,t)=>{Promise.resolve().then(t.bind(t,22709)),Promise.resolve().then(t.bind(t,88239)),Promise.resolve().then(t.bind(t,85096)),Promise.resolve().then(t.bind(t,64190))},90006:(A,e,t)=>{Promise.resolve().then(t.bind(t,45646))},68671:(A,e,t)=>{Promise.resolve().then(t.bind(t,30781))},45646:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var s=t(95344),a=t(3729),r=t(60646),o=t(21204),i=t(95209),l=t(78154),n=t(41223),c=t.n(n);let d={src:"/_next/static/media/internal-server-error.66cd9e5c.svg",height:418,width:525,blurWidth:0,blurHeight:0},g=({error:A,reset:e})=>{let t=(0,a.useCallback)(()=>e(),[e]);return s.jsx("div",{className:"hk-wrapper hk-pg-auth",children:s.jsx("div",{className:"hk-pg-wrapper",children:s.jsx(r.Z,{children:s.jsx("div",{className:"hk-pg-body",children:(0,s.jsxs)(o.Z,{children:[s.jsx(i.Z,{xl:7,lg:6,className:"d-lg-block d-none",children:s.jsx("div",{className:"auth-content py-md-0 py-8",children:s.jsx(o.Z,{children:s.jsx(i.Z,{xl:12,className:"text-center",children:s.jsx(c(),{src:d,className:"img-fluid w-sm-80 w-50",alt:"login"})})})})}),s.jsx(i.Z,{xl:5,lg:6,md:7,sm:10,children:s.jsx("div",{className:"auth-content py-8",children:s.jsx("div",{className:"w-100",children:s.jsx(o.Z,{children:(0,s.jsxs)(i.Z,{xxl:9,xl:8,lg:11,children:[s.jsx("h1",{className:"display-6 fw-bold mb-2",children:"Sorry, something is not right on our end."}),s.jsx("p",{className:"p-lg",children:"The issue may be temporary, so please don't hesitate to check back in a few moments."}),s.jsx(l.Z,{variant:"primary",className:"mt-4",onClick:t,children:"Try Again"})]})})})})})]})})})})})}},30781:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var s=t(95344),a=t(41223),r=t.n(a),o=t(20783),i=t.n(o),l=t(60646),n=t(21204),c=t(95209),d=t(78154);let g={src:"/_next/static/media/not-found.23d51e11.svg",height:659,width:586,blurWidth:0,blurHeight:0},m=()=>s.jsx("div",{className:"hk-wrapper hk-pg-auth",children:s.jsx("div",{className:"hk-pg-wrapper",children:s.jsx(l.Z,{children:s.jsx("div",{className:"hk-pg-body",children:(0,s.jsxs)(n.Z,{children:[s.jsx(c.Z,{xl:7,lg:6,className:"d-lg-block d-none",children:s.jsx("div",{className:"auth-content py-md-0 py-8",children:s.jsx(n.Z,{children:s.jsx(c.Z,{xl:12,className:"text-center",children:s.jsx(r(),{src:g,className:"img-fluid w-sm-80 w-50",alt:"login"})})})})}),s.jsx(c.Z,{xl:5,lg:6,md:7,sm:10,children:s.jsx("div",{className:"auth-content py-8",children:s.jsx("div",{className:"w-100",children:s.jsx(n.Z,{children:(0,s.jsxs)(c.Z,{xxl:9,xl:8,lg:11,children:[s.jsx("h1",{className:"display-4 fw-bold mb-2",children:"404"}),s.jsx("p",{className:"p-lg",children:"Sorry, the requested page cannot be found. Try finding with another name."}),s.jsx(d.Z,{variant:"primary",as:i(),href:"/",className:"mt-4",children:"Return to app"})]})})})})})]})})})})})},88239:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>l});var s=t(95344);t(3729);var a=t(3952),r=t(26274),o=t(55849);let i=new a.S({defaultOptions:{queries:{staleTime:6e4}}}),l=({children:A,isDevMode:e=!1})=>(0,s.jsxs)(r.aH,{client:i,children:[A,e&&s.jsx(o.t,{})]})},85096:(A,e,t)=>{"use strict";t.r(e),t.d(e,{GlobalStateProvider:()=>E,useGlobalStateContext:()=>j});var s=t(95344),a=t(3729);let r={popupMsgs:[{text:"I have a plan regarding pricing",types:"sent"},{text:"Welcome back! Are you looking to upgrade your existing plan?",types:"received"}],directMsgs:[]},o=(A=r,e)=>{switch(e.type){case"send_popup_msg":return{...A,popupMsgs:[...A.popupMsgs,e.popupMsgs]};case"send_direct_msg":return{...A,directMsgs:[...A.directMsgs,e.directMsgs]};default:return A}};var i=t(34397);let l={startChat:!1,avatar:{type:"img",src:t(24187).Z},userId:2,userName:"Huma Therman",msg:[],contactMsg:[],rplyMsg:[],status:"Typing",grpId:12,grpAvatar:{type:"img",src:i.Z},groupName:"Developers Stage",grpStatus:"Active 5min ago",grpMsg:[]},n=(A=l,e)=>{switch(e.type){case"start_chat":return{...A,startChat:!A.startChat};case"send_msg":return{...A,msg:[...A.msg,e.msg]};case"set_user":return{...A,userId:e.userId,avatar:e.avatar,userName:e.userName,status:e.status};case"contact_msg":return{...A,contactMsg:[...A.contactMsg,e.contactMsg]};case"reply_msg":return{...A,rplyMsg:[...A.rplyMsg,e.rplyMsg]};case"grp_msg":return{...A,grpMsg:[...A.grpMsg,e.grpMsg]};case"select_group":return{...A,grpId:e.grpId,grpAvatar:e.grpAvatar,groupName:e.groupName,grpStatus:e.grpStatus};default:return A}},c={openEmail:!1,composeEmail:!1,maximize:!1,minimize:!1},d=(A=c,e)=>{switch(e.type){case"open_email":return{...A,openEmail:!A.openEmail};case"compose_email":return{...A,composeEmail:e.composeEmail};case"maximize_modal":return{...A,maximize:e.maximize};case"minimize_modal":return{...A,minimize:e.minimize};default:return A}},g={isSidebarCollapsed:!1,topNavCollapse:!1,dataHover:!1},m=(A=g,e)=>{switch(e.type){case"sidebar_toggle":return{...A,isSidebarCollapsed:!A.isSidebarCollapsed};case"collapse_sidebar":return{...A,isSidebarCollapsed:!0};case"expand_sidebar":return{...A,isSidebarCollapsed:!1};case"top_nav_toggle":return{...A,topNavCollapse:!A.topNavCollapse};case"data_hover":return{...A,dataHover:e.dataHover};default:return A}},p={vm:"Week"},u=(A=p,e)=>"change_vm"===e.type?{...A,vm:e.vm}:A,h={layoutState:g,chatState:l,chatPopupState:r,emailState:c,todoState:p},x=(A,e)=>({layoutState:m(A.layoutState,e),chatState:n(A.chatState,e),chatPopupState:o(A.chatPopupState,e),emailState:d(A.emailState,e),todoState:u(A.todoState,e)}),v=(0,a.createContext)(),E=({children:A})=>{let[e,t]=(0,a.useReducer)(x,h),r=(0,a.useMemo)(()=>({states:e,dispatch:t}),[e,t]);return s.jsx(v.Provider,{value:r,children:A})},j=()=>(0,a.useContext)(v)},64190:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});var s=t(95344),a=t(47674);let r=({children:A})=>s.jsx(a.SessionProvider,{children:A})},24117:(A,e,t)=>{"use strict";t.r(e),t.d(e,{$$typeof:()=>r,__esModule:()=>a,default:()=>o});let s=(0,t(86843).createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\app\error.tsx`),{__esModule:a,$$typeof:r}=s,o=s.default},28563:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>Q,metadata:()=>j});var s=t(25036),a=t(91907),r=t.n(a);t(47453),t(96935),t(34617),t(65537),t(3531);var o=t(86843);let i=(0,o.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\context\GolobalStateProvider.js`),{__esModule:l,$$typeof:n}=i;i.default;let c=(0,o.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\context\GolobalStateProvider.js#GlobalStateProvider`);(0,o.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\context\GolobalStateProvider.js#useGlobalStateContext`);let d=(0,o.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\context\session\SessionProvider.tsx`),{__esModule:g,$$typeof:m}=d,p=d.default;var u=t(23222);let h=(0,o.createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\components\ReactQuery\ReactQuery.tsx`),{__esModule:x,$$typeof:v}=h,E=h.default,j={title:{default:"RegBook | A Modern SaaS for regulators",template:"RegBook | %s"},description:"RegBook",keywords:["RegBook","Reg-Room","Rulebook","Reagulator","finance"]};function Q({children:A}){return s.jsx("html",{lang:"en",className:`${r().variable}`,children:s.jsx("body",{children:s.jsx(p,{children:s.jsx(c,{children:(0,s.jsxs)(E,{isDevMode:!1,children:[A,s.jsx(u.Ix,{})]})})})})})}},10870:(A,e,t)=>{"use strict";t.r(e),t.d(e,{$$typeof:()=>r,__esModule:()=>a,default:()=>o});let s=(0,t(86843).createProxy)(String.raw`C:\Users\mevaa\Desktop\WORK\RegBook\RegbookFront\src\app\not-found.jsx`),{__esModule:a,$$typeof:r}=s,o=s.default},34397:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/avatar1.842c8c4a.jpg",height:180,width:180,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGuD//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAQADAAAAAAAAAAAAAAAAABEAIUH/2gAIAQEAAT8htwn/2gAMAwEAAgADAAAAEAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAXEAADAQAAAAAAAAAAAAAAAAAAARHw/9oACAEBAAE/ENjp/9k=",blurWidth:8,blurHeight:8}},24187:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/avatar8.842c8c4a.jpg",height:180,width:180,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGuD//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAQADAAAAAAAAAAAAAAAAABEAIUH/2gAIAQEAAT8htwn/2gAMAwEAAgADAAAAEAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAXEAADAQAAAAAAAAAAAAAAAAAAARHw/9oACAEBAAE/ENjp/9k=",blurWidth:8,blurHeight:8}},73881:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});var s=t(70337);let a=A=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",A.params,"favicon.ico")+""}]},3531:()=>{},65537:()=>{}};