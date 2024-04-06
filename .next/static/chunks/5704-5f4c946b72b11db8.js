"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5704],{13369:function(e,t,n){n.d(t,{kZ:function(){return b}});var r=n(98142),o=n(9610),i=n(96601),a=n(12622),u=n(21815),s=n(51816),f=n(22127),c=n(31021),l=n(94854),d=n(95033),p=n(16925),m=n(44680),v=n(95655),h={placement:"bottom",modifiers:[],strategy:"absolute"};function g(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function b(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,b=void 0===n?[]:n,y=t.defaultOptions,Z=void 0===y?h:y;return function(e,t,n){void 0===n&&(n=Z);var y,w={placement:"bottom",orderedModifiers:[],options:Object.assign({},h,Z),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},x=[],O=!1,k={state:w,setOptions:function(n){var r,o,i,u,s,f="function"==typeof n?n(w.options):n;j(),w.options=Object.assign({},Z,w.options,f),w.scrollParents={reference:(0,a.kK)(e)?(0,p.Z)(e):e.contextElement?(0,p.Z)(e.contextElement):[],popper:(0,p.Z)(t)};var c=(o=Object.keys(r=[].concat(b,w.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),i=new Map,u=new Set,s=[],o.forEach(function(e){i.set(e.name,e)}),o.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var n=i.get(t);n&&e(n)}}),s.push(t)}(e)}),v.xs.reduce(function(e,t){return e.concat(s.filter(function(e){return e.phase===t}))},[]));return w.orderedModifiers=c.filter(function(e){return e.enabled}),w.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var o=r({state:w,name:t,instance:k,options:void 0===n?{}:n});x.push(o||function(){})}}),k.update()},forceUpdate:function(){if(!O){var e,t,n,p,v,h,b,y,Z,x,j,E,C=w.elements,D=C.reference,P=C.popper;if(g(D,P)){w.rects={reference:(t=(0,m.Z)(P),n="fixed"===w.options.strategy,p=(0,a.Re)(t),y=(0,a.Re)(t)&&(v=t.getBoundingClientRect(),h=(0,l.NM)(v.width)/t.offsetWidth||1,b=(0,l.NM)(v.height)/t.offsetHeight||1,1!==h||1!==b),Z=(0,f.Z)(t),x=(0,r.Z)(D,y,n),j={scrollLeft:0,scrollTop:0},E={x:0,y:0},(p||!p&&!n)&&(("body"!==(0,u.Z)(t)||(0,c.Z)(Z))&&(j=(e=t)!==(0,i.Z)(e)&&(0,a.Re)(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:(0,o.Z)(e)),(0,a.Re)(t)?(E=(0,r.Z)(t,!0),E.x+=t.clientLeft,E.y+=t.clientTop):Z&&(E.x=(0,s.Z)(Z))),{x:x.left+j.scrollLeft-E.x,y:x.top+j.scrollTop-E.y,width:x.width,height:x.height}),popper:(0,d.Z)(P)},w.reset=!1,w.placement=w.options.placement,w.orderedModifiers.forEach(function(e){return w.modifiersData[e.name]=Object.assign({},e.data)});for(var R=0;R<w.orderedModifiers.length;R++){if(!0===w.reset){w.reset=!1,R=-1;continue}var A=w.orderedModifiers[R],M=A.fn,S=A.options,L=void 0===S?{}:S,N=A.name;"function"==typeof M&&(w=M({state:w,options:L,name:N,instance:k})||w)}}}},update:function(){return y||(y=new Promise(function(e){Promise.resolve().then(function(){y=void 0,e(new Promise(function(e){k.forceUpdate(),e(w)}))})})),y},destroy:function(){j(),O=!0}};if(!g(e,t))return k;function j(){x.forEach(function(e){return e()}),x=[]}return k.setOptions(n).then(function(e){!O&&n.onFirstUpdate&&n.onFirstUpdate(e)}),k}}},16167:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(12622);function o(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,r.Zq)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},98142:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(12622),o=n(94854),i=n(96601),a=n(9604);function u(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var u=e.getBoundingClientRect(),s=1,f=1;t&&(0,r.Re)(e)&&(s=e.offsetWidth>0&&(0,o.NM)(u.width)/e.offsetWidth||1,f=e.offsetHeight>0&&(0,o.NM)(u.height)/e.offsetHeight||1);var c=((0,r.kK)(e)?(0,i.Z)(e):window).visualViewport,l=!(0,a.Z)()&&n,d=(u.left+(l&&c?c.offsetLeft:0))/s,p=(u.top+(l&&c?c.offsetTop:0))/f,m=u.width/s,v=u.height/f;return{width:m,height:v,top:p,right:d+m,bottom:p+v,left:d,x:d,y:p}}},44629:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(96601);function o(e){return(0,r.Z)(e).getComputedStyle(e)}},22127:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(12622);function o(e){return(((0,r.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}},95033:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(98142);function o(e){var t=(0,r.Z)(e),n=e.offsetWidth,o=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-o)&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}},21815:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return e?(e.nodeName||"").toLowerCase():null}},44680:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(96601),o=n(21815),i=n(44629),a=n(12622),u=n(99678),s=n(97891);function f(e){return(0,a.Re)(e)&&"fixed"!==(0,i.Z)(e).position?e.offsetParent:null}function c(e){for(var t,n=(0,r.Z)(e),c=f(e);c&&(t=c,["table","td","th"].indexOf((0,o.Z)(t))>=0)&&"static"===(0,i.Z)(c).position;)c=f(c);return c&&("html"===(0,o.Z)(c)||"body"===(0,o.Z)(c)&&"static"===(0,i.Z)(c).position)?n:c||function(e){var t=/firefox/i.test((0,s.Z)());if(/Trident/i.test((0,s.Z)())&&(0,a.Re)(e)&&"fixed"===(0,i.Z)(e).position)return null;var n=(0,u.Z)(e);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&0>["html","body"].indexOf((0,o.Z)(n));){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||n}},99678:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(21815),o=n(22127),i=n(12622);function a(e){return"html"===(0,r.Z)(e)?e:e.assignedSlot||e.parentNode||((0,i.Zq)(e)?e.host:null)||(0,o.Z)(e)}},96601:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}},9610:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(96601);function o(e){var t=(0,r.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}},51816:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(98142),o=n(22127),i=n(9610);function a(e){return(0,r.Z)((0,o.Z)(e)).left+(0,i.Z)(e).scrollLeft}},12622:function(e,t,n){n.d(t,{Re:function(){return i},Zq:function(){return a},kK:function(){return o}});var r=n(96601);function o(e){var t=(0,r.Z)(e).Element;return e instanceof t||e instanceof Element}function i(e){var t=(0,r.Z)(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function a(e){if("undefined"==typeof ShadowRoot)return!1;var t=(0,r.Z)(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}},9604:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(97891);function o(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},31021:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(44629);function o(e){var t=(0,r.Z)(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},16925:function(e,t,n){n.d(t,{Z:function(){return function e(t,n){void 0===n&&(n=[]);var s,f=function e(t){return["html","body","#document"].indexOf((0,i.Z)(t))>=0?t.ownerDocument.body:(0,a.Re)(t)&&(0,o.Z)(t)?t:e((0,r.Z)(t))}(t),c=f===(null==(s=t.ownerDocument)?void 0:s.body),l=(0,u.Z)(f),d=c?[l].concat(l.visualViewport||[],(0,o.Z)(f)?f:[]):f,p=n.concat(d);return c?p:p.concat(e((0,r.Z)(d)))}}});var r=n(99678),o=n(31021),i=n(21815),a=n(12622),u=n(96601)},95655:function(e,t,n){n.d(t,{BL:function(){return f},Ct:function(){return h},F2:function(){return i},I:function(){return o},Pj:function(){return d},YP:function(){return m},bw:function(){return v},d7:function(){return u},k5:function(){return p},mv:function(){return s},t$:function(){return a},ut:function(){return c},we:function(){return r},xs:function(){return g},zV:function(){return l}});var r="top",o="bottom",i="right",a="left",u="auto",s=[r,o,i,a],f="start",c="end",l="clippingParents",d="viewport",p="popper",m="reference",v=s.reduce(function(e,t){return e.concat([t+"-"+f,t+"-"+c])},[]),h=[].concat(s,[u]).reduce(function(e,t){return e.concat([t,t+"-"+f,t+"-"+c])},[]),g=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},91888:function(e,t,n){var r=n(74816),o=n(95033),i=n(16167),a=n(44680),u=n(92186),s=n(53260),f=n(97629),c=n(54061),l=n(95655);t.Z={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,i=e.state,d=e.name,p=e.options,m=i.elements.arrow,v=i.modifiersData.popperOffsets,h=(0,r.Z)(i.placement),g=(0,u.Z)(h),b=[l.t$,l.F2].indexOf(h)>=0?"height":"width";if(m&&v){var y=(t="function"==typeof(t=p.padding)?t(Object.assign({},i.rects,{placement:i.placement})):t,(0,f.Z)("number"!=typeof t?t:(0,c.Z)(t,l.mv))),Z=(0,o.Z)(m),w="y"===g?l.we:l.t$,x="y"===g?l.I:l.F2,O=i.rects.reference[b]+i.rects.reference[g]-v[g]-i.rects.popper[b],k=v[g]-i.rects.reference[g],j=(0,a.Z)(m),E=j?"y"===g?j.clientHeight||0:j.clientWidth||0:0,C=y[w],D=E-Z[b]-y[x],P=E/2-Z[b]/2+(O/2-k/2),R=(0,s.u)(C,P,D);i.modifiersData[d]=((n={})[g]=R,n.centerOffset=R-P,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&(0,i.Z)(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},70791:function(e,t,n){var r=n(95655),o=n(44680),i=n(96601),a=n(22127),u=n(44629),s=n(74816),f=n(1779),c=n(94854),l={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d(e){var t,n,s,f,d,p,m,v=e.popper,h=e.popperRect,g=e.placement,b=e.variation,y=e.offsets,Z=e.position,w=e.gpuAcceleration,x=e.adaptive,O=e.roundOffsets,k=e.isFixed,j=y.x,E=void 0===j?0:j,C=y.y,D=void 0===C?0:C,P="function"==typeof O?O({x:E,y:D}):{x:E,y:D};E=P.x,D=P.y;var R=y.hasOwnProperty("x"),A=y.hasOwnProperty("y"),M=r.t$,S=r.we,L=window;if(x){var N=(0,o.Z)(v),$="clientHeight",T="clientWidth";N===(0,i.Z)(v)&&(N=(0,a.Z)(v),"static"!==(0,u.Z)(N).position&&"absolute"===Z&&($="scrollHeight",T="scrollWidth")),(g===r.we||(g===r.t$||g===r.F2)&&b===r.ut)&&(S=r.I,D-=(k&&N===L&&L.visualViewport?L.visualViewport.height:N[$])-h.height,D*=w?1:-1),(g===r.t$||(g===r.we||g===r.I)&&b===r.ut)&&(M=r.F2,E-=(k&&N===L&&L.visualViewport?L.visualViewport.width:N[T])-h.width,E*=w?1:-1)}var I=Object.assign({position:Z},x&&l),B=!0===O?(t={x:E,y:D},n=(0,i.Z)(v),s=t.x,f=t.y,d=n.devicePixelRatio||1,{x:(0,c.NM)(s*d)/d||0,y:(0,c.NM)(f*d)/d||0}):{x:E,y:D};return(E=B.x,D=B.y,w)?Object.assign({},I,((m={})[S]=A?"0":"",m[M]=R?"0":"",m.transform=1>=(L.devicePixelRatio||1)?"translate("+E+"px, "+D+"px)":"translate3d("+E+"px, "+D+"px, 0)",m)):Object.assign({},I,((p={})[S]=A?D+"px":"",p[M]=R?E+"px":"",p.transform="",p))}t.Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,u={placement:(0,s.Z)(t.placement),variation:(0,f.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,d(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,d(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}},97533:function(e,t,n){var r=n(96601),o={passive:!0};t.Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,a=i.scroll,u=void 0===a||a,s=i.resize,f=void 0===s||s,c=(0,r.Z)(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return u&&l.forEach(function(e){e.addEventListener("scroll",n.update,o)}),f&&c.addEventListener("resize",n.update,o),function(){u&&l.forEach(function(e){e.removeEventListener("scroll",n.update,o)}),f&&c.removeEventListener("resize",n.update,o)}},data:{}}},41191:function(e,t,n){n.d(t,{Z:function(){return l}});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(e){return e.replace(/left|right|bottom|top/g,function(e){return r[e]})}var i=n(74816),a={start:"end",end:"start"};function u(e){return e.replace(/start|end/g,function(e){return a[e]})}var s=n(25552),f=n(1779),c=n(95655),l={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,l=void 0===a||a,d=n.altAxis,p=void 0===d||d,m=n.fallbackPlacements,v=n.padding,h=n.boundary,g=n.rootBoundary,b=n.altBoundary,y=n.flipVariations,Z=void 0===y||y,w=n.allowedAutoPlacements,x=t.options.placement,O=(0,i.Z)(x)===x,k=m||(O||!Z?[o(x)]:function(e){if((0,i.Z)(e)===c.d7)return[];var t=o(e);return[u(e),t,u(t)]}(x)),j=[x].concat(k).reduce(function(e,n){var r,o,a,u,l,d,p,m,b,y,x,O;return e.concat((0,i.Z)(n)===c.d7?(o=(r={placement:n,boundary:h,rootBoundary:g,padding:v,flipVariations:Z,allowedAutoPlacements:w}).placement,a=r.boundary,u=r.rootBoundary,l=r.padding,d=r.flipVariations,m=void 0===(p=r.allowedAutoPlacements)?c.Ct:p,0===(x=(y=(b=(0,f.Z)(o))?d?c.bw:c.bw.filter(function(e){return(0,f.Z)(e)===b}):c.mv).filter(function(e){return m.indexOf(e)>=0})).length&&(x=y),Object.keys(O=x.reduce(function(e,n){return e[n]=(0,s.Z)(t,{placement:n,boundary:a,rootBoundary:u,padding:l})[(0,i.Z)(n)],e},{})).sort(function(e,t){return O[e]-O[t]})):n)},[]),E=t.rects.reference,C=t.rects.popper,D=new Map,P=!0,R=j[0],A=0;A<j.length;A++){var M=j[A],S=(0,i.Z)(M),L=(0,f.Z)(M)===c.BL,N=[c.we,c.I].indexOf(S)>=0,$=N?"width":"height",T=(0,s.Z)(t,{placement:M,boundary:h,rootBoundary:g,altBoundary:b,padding:v}),I=N?L?c.F2:c.t$:L?c.I:c.we;E[$]>C[$]&&(I=o(I));var B=o(I),F=[];if(l&&F.push(T[S]<=0),p&&F.push(T[I]<=0,T[B]<=0),F.every(function(e){return e})){R=M,P=!1;break}D.set(M,F)}if(P)for(var V=Z?3:1,W=function(e){var t=j.find(function(t){var n=D.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return R=t,"break"},H=V;H>0&&"break"!==W(H);H--);t.placement!==R&&(t.modifiersData[r]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},36188:function(e,t,n){var r=n(95655),o=n(25552);function i(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function a(e){return[r.we,r.F2,r.I,r.t$].some(function(t){return e[t]>=0})}t.Z={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,u=t.rects.popper,s=t.modifiersData.preventOverflow,f=(0,o.Z)(t,{elementContext:"reference"}),c=(0,o.Z)(t,{altBoundary:!0}),l=i(f,r),d=i(c,u,s),p=a(l),m=a(d);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:d,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}}},79310:function(e,t,n){var r=n(74816),o=n(95655);t.Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,a=n.offset,u=void 0===a?[0,0]:a,s=o.Ct.reduce(function(e,n){var i,a,s,f,c,l;return e[n]=(i=t.rects,a=(0,r.Z)(n),s=[o.t$,o.we].indexOf(a)>=0?-1:1,c=(f="function"==typeof u?u(Object.assign({},i,{placement:n})):u)[0],l=f[1],c=c||0,l=(l||0)*s,[o.t$,o.F2].indexOf(a)>=0?{x:l,y:c}:{x:c,y:l}),e},{}),f=s[t.placement],c=f.x,l=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=s}}},38064:function(e,t,n){var r=n(49631);t.Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=(0,r.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}},19603:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(95655),o=n(74816),i=n(92186),a=n(53260),u=n(95033),s=n(44680),f=n(25552),c=n(1779),l=n(2739),d=n(94854),p={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,p=e.name,m=n.mainAxis,v=n.altAxis,h=n.boundary,g=n.rootBoundary,b=n.altBoundary,y=n.padding,Z=n.tether,w=void 0===Z||Z,x=n.tetherOffset,O=void 0===x?0:x,k=(0,f.Z)(t,{boundary:h,rootBoundary:g,padding:y,altBoundary:b}),j=(0,o.Z)(t.placement),E=(0,c.Z)(t.placement),C=!E,D=(0,i.Z)(j),P="x"===D?"y":"x",R=t.modifiersData.popperOffsets,A=t.rects.reference,M=t.rects.popper,S="function"==typeof O?O(Object.assign({},t.rects,{placement:t.placement})):O,L="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(R){if(void 0===m||m){var T,I="y"===D?r.we:r.t$,B="y"===D?r.I:r.F2,F="y"===D?"height":"width",V=R[D],W=V+k[I],H=V-k[B],_=w?-M[F]/2:0,q=E===r.BL?A[F]:M[F],K=E===r.BL?-M[F]:-A[F],z=t.elements.arrow,U=w&&z?(0,u.Z)(z):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,l.Z)(),X=Y[I],G=Y[B],J=(0,a.u)(0,A[F],U[F]),Q=C?A[F]/2-_-J-X-L.mainAxis:q-J-X-L.mainAxis,ee=C?-A[F]/2+_+J+G+L.mainAxis:K+J+G+L.mainAxis,et=t.elements.arrow&&(0,s.Z)(t.elements.arrow),en=et?"y"===D?et.clientTop||0:et.clientLeft||0:0,er=null!=(T=null==N?void 0:N[D])?T:0,eo=(0,a.u)(w?(0,d.VV)(W,V+Q-er-en):W,V,w?(0,d.Fp)(H,V+ee-er):H);R[D]=eo,$[D]=eo-V}if(void 0!==v&&v){var ei,ea="x"===D?r.we:r.t$,eu="x"===D?r.I:r.F2,es=R[P],ef="y"===P?"height":"width",ec=es+k[ea],el=es-k[eu],ed=-1!==[r.we,r.t$].indexOf(j),ep=null!=(ei=null==N?void 0:N[P])?ei:0,em=ed?ec:es-A[ef]-M[ef]-ep+L.altAxis,ev=ed?es+A[ef]+M[ef]-ep-L.altAxis:el,eh=w&&ed?(0,a.q)(em,es,ev):(0,a.u)(w?em:ec,es,w?ev:el);R[P]=eh,$[P]=eh-es}t.modifiersData[p]=$}},requiresIfExists:["offset"]}},49631:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(74816),o=n(1779),i=n(92186),a=n(95655);function u(e){var t,n=e.reference,u=e.element,s=e.placement,f=s?(0,r.Z)(s):null,c=s?(0,o.Z)(s):null,l=n.x+n.width/2-u.width/2,d=n.y+n.height/2-u.height/2;switch(f){case a.we:t={x:l,y:n.y-u.height};break;case a.I:t={x:l,y:n.y+n.height};break;case a.F2:t={x:n.x+n.width,y:d};break;case a.t$:t={x:n.x-u.width,y:d};break;default:t={x:n.x,y:n.y}}var p=f?(0,i.Z)(f):null;if(null!=p){var m="y"===p?"height":"width";switch(c){case a.BL:t[p]=t[p]-(n[m]/2-u[m]/2);break;case a.ut:t[p]=t[p]+(n[m]/2-u[m]/2)}}return t}},25552:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(95655),o=n(96601),i=n(22127),a=n(51816),u=n(9604),s=n(44629),f=n(9610),c=n(94854),l=n(16925),d=n(44680),p=n(12622),m=n(98142),v=n(99678),h=n(16167),g=n(21815);function b(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function y(e,t,n){var l,d,v,h,g,y,Z,w,x,O;return t===r.Pj?b(function(e,t){var n=(0,o.Z)(e),r=(0,i.Z)(e),s=n.visualViewport,f=r.clientWidth,c=r.clientHeight,l=0,d=0;if(s){f=s.width,c=s.height;var p=(0,u.Z)();(p||!p&&"fixed"===t)&&(l=s.offsetLeft,d=s.offsetTop)}return{width:f,height:c,x:l+(0,a.Z)(e),y:d}}(e,n)):(0,p.kK)(t)?((l=(0,m.Z)(t,!1,"fixed"===n)).top=l.top+t.clientTop,l.left=l.left+t.clientLeft,l.bottom=l.top+t.clientHeight,l.right=l.left+t.clientWidth,l.width=t.clientWidth,l.height=t.clientHeight,l.x=l.left,l.y=l.top,l):b((d=(0,i.Z)(e),h=(0,i.Z)(d),g=(0,f.Z)(d),y=null==(v=d.ownerDocument)?void 0:v.body,Z=(0,c.Fp)(h.scrollWidth,h.clientWidth,y?y.scrollWidth:0,y?y.clientWidth:0),w=(0,c.Fp)(h.scrollHeight,h.clientHeight,y?y.scrollHeight:0,y?y.clientHeight:0),x=-g.scrollLeft+(0,a.Z)(d),O=-g.scrollTop,"rtl"===(0,s.Z)(y||h).direction&&(x+=(0,c.Fp)(h.clientWidth,y?y.clientWidth:0)-Z),{width:Z,height:w,x:x,y:O}))}var Z=n(49631),w=n(97629),x=n(54061);function O(e,t){void 0===t&&(t={});var n,o,a,u,f,O,k=t,j=k.placement,E=void 0===j?e.placement:j,C=k.strategy,D=void 0===C?e.strategy:C,P=k.boundary,R=void 0===P?r.zV:P,A=k.rootBoundary,M=void 0===A?r.Pj:A,S=k.elementContext,L=void 0===S?r.k5:S,N=k.altBoundary,$=k.padding,T=void 0===$?0:$,I=(0,w.Z)("number"!=typeof T?T:(0,x.Z)(T,r.mv)),B=L===r.k5?r.YP:r.k5,F=e.rects.popper,V=e.elements[void 0!==N&&N?B:L],W=(n=(0,p.kK)(V)?V:V.contextElement||(0,i.Z)(e.elements.popper),f=(u=[].concat("clippingParents"===R?(o=(0,l.Z)((0,v.Z)(n)),a=["absolute","fixed"].indexOf((0,s.Z)(n).position)>=0&&(0,p.Re)(n)?(0,d.Z)(n):n,(0,p.kK)(a)?o.filter(function(e){return(0,p.kK)(e)&&(0,h.Z)(e,a)&&"body"!==(0,g.Z)(e)}):[]):[].concat(R),[M]))[0],(O=u.reduce(function(e,t){var r=y(n,t,D);return e.top=(0,c.Fp)(r.top,e.top),e.right=(0,c.VV)(r.right,e.right),e.bottom=(0,c.VV)(r.bottom,e.bottom),e.left=(0,c.Fp)(r.left,e.left),e},y(n,f,D))).width=O.right-O.left,O.height=O.bottom-O.top,O.x=O.left,O.y=O.top,O),H=(0,m.Z)(e.elements.reference),_=(0,Z.Z)({reference:H,element:F,strategy:"absolute",placement:E}),q=b(Object.assign({},F,_)),K=L===r.k5?q:H,z={top:W.top-K.top+I.top,bottom:K.bottom-W.bottom+I.bottom,left:W.left-K.left+I.left,right:K.right-W.right+I.right},U=e.modifiersData.offset;if(L===r.k5&&U){var Y=U[E];Object.keys(z).forEach(function(e){var t=[r.F2,r.I].indexOf(e)>=0?1:-1,n=[r.we,r.I].indexOf(e)>=0?"y":"x";z[e]+=Y[n]*t})}return z}},54061:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}},74816:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return e.split("-")[0]}},2739:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return{top:0,right:0,bottom:0,left:0}}},92186:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}},1779:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return e.split("-")[1]}},94854:function(e,t,n){n.d(t,{Fp:function(){return r},NM:function(){return i},VV:function(){return o}});var r=Math.max,o=Math.min,i=Math.round},97629:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2739);function o(e){return Object.assign({},(0,r.Z)(),e)}},97891:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}},53260:function(e,t,n){n.d(t,{q:function(){return i},u:function(){return o}});var r=n(94854);function o(e,t,n){return(0,r.Fp)(e,(0,r.VV)(t,n))}function i(e,t,n){var r=o(e,t,n);return r>n?n:r}},65754:function(e,t,n){n.d(t,{ZP:function(){return r}});function r({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:u,popperConfig:s={}}){var f,c,l,d,p;let m=function(e){let t={};return Array.isArray(e)?(null==e||e.forEach(e=>{t[e.name]=e}),t):e||t}(s.modifiers);return Object.assign({},s,{placement:n,enabled:e,strategy:i?"fixed":s.strategy,modifiers:function(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}(Object.assign({},m,{eventListeners:{enabled:t,options:null==(f=m.eventListeners)?void 0:f.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},null==(c=m.preventOverflow)?void 0:c.options):null==(l=m.preventOverflow)?void 0:l.options}),offset:{options:Object.assign({offset:o},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!u,options:Object.assign({},null==(p=m.arrow)?void 0:p.options,{element:u})}),flip:Object.assign({enabled:!!r},m.flip)}))})}},45703:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(41535),o=n(67966),i=n(93931),a=n(2265),u=n(25113),s=n(50267),f=n.n(s);let c=()=>{},l=e=>e&&("current"in e?e.current:e),d={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.Z=function(e,t=c,{disabled:n,clickTrigger:s="click"}={}){let p=(0,a.useRef)(!1),m=(0,a.useRef)(!1),v=(0,a.useCallback)(t=>{let n=l(e);f()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),p.current=!n||!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)||0!==t.button||!!(0,r.Z)(n,t.target)||m.current,m.current=!1},[e]),h=(0,u.Z)(t=>{let n=l(e);n&&(0,r.Z)(n,t.target)&&(m.current=!0)}),g=(0,u.Z)(e=>{p.current||t(e)});(0,a.useEffect)(()=>{var t,r;if(n||null==e)return;let a=(0,i.Z)(l(e)),u=a.defaultView||window,f=null!=(t=u.event)?t:null==(r=u.parent)?void 0:r.event,p=null;d[s]&&(p=(0,o.Z)(a,d[s],h,!0));let m=(0,o.Z)(a,s,v,!0),b=(0,o.Z)(a,s,e=>{if(e===f){f=void 0;return}g(e)}),y=[];return"ontouchstart"in a.documentElement&&(y=[].slice.call(a.body.children).map(e=>(0,o.Z)(e,"mousemove",c))),()=>{null==p||p(),m(),b(),y.forEach(e=>e())}},[e,n,s,v,h,g])}},77920:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(2265),o=Object.prototype.hasOwnProperty;function i(e,t,n){for(n of e.keys())if(a(n,t))return n}function a(e,t){var n,r,u;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&a(e[r],t[r]););return -1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if((u=r)&&"object"==typeof u&&!(u=i(t,u))||!t.has(u))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if((u=r[0])&&"object"==typeof u&&!(u=i(t,u))||!a(r[1],t.get(u)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return -1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return -1===r}if(!n||"object"==typeof e){for(n in r=0,e)if(o.call(e,n)&&++r&&!o.call(t,n)||!(n in t)||!a(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!=e&&t!=t}var u=n(31823),s=function(e){let t=(0,u.Z)();return[e[0],(0,r.useCallback)(n=>{if(t())return e[1](n)},[t,e[1]])]},f=n(91888),c=n(70791),l=n(97533),d=n(41191),p=n(36188),m=n(79310),v=n(38064),h=n(19603);let g=(0,n(13369).kZ)({defaultModifiers:[p.Z,v.Z,c.Z,l.Z,m.Z,d.Z,h.Z,f.Z]}),b=["enabled","placement","strategy","modifiers"],y={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>void 0},Z={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{let{reference:t,popper:n}=e.elements;if("removeAttribute"in t){let e=(t.getAttribute("aria-describedby")||"").split(",").filter(e=>e.trim()!==n.id);e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;let{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){let e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},w=[];var x=function(e,t,n={}){let{enabled:o=!0,placement:i="bottom",strategy:u="absolute",modifiers:f=w}=n,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,b),l=(0,r.useRef)(f),d=(0,r.useRef)(),p=(0,r.useCallback)(()=>{var e;null==(e=d.current)||e.update()},[]),m=(0,r.useCallback)(()=>{var e;null==(e=d.current)||e.forceUpdate()},[]),[v,h]=s((0,r.useState)({placement:i,update:p,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),x=(0,r.useMemo)(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{let t={},n={};Object.keys(e.elements).forEach(r=>{t[r]=e.styles[r],n[r]=e.attributes[r]}),h({state:e,styles:t,attributes:n,update:p,forceUpdate:m,placement:e.placement})}}),[p,m,h]),O=(0,r.useMemo)(()=>(a(l.current,f)||(l.current=f),l.current),[f]);return(0,r.useEffect)(()=>{d.current&&o&&d.current.setOptions({placement:i,strategy:u,modifiers:[...O,x,y]})},[u,i,x,o,O]),(0,r.useEffect)(()=>{if(o&&null!=e&&null!=t)return d.current=g(e,t,Object.assign({},c,{placement:i,strategy:u,modifiers:[...O,Z,x]})),()=>{null!=d.current&&(d.current.destroy(),d.current=void 0,h(e=>Object.assign({},e,{attributes:{},styles:{popper:{}}})))}},[o,e,t]),v}},34462:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2265),o=n(26857);let i=(0,r.createContext)(o.Z?window:void 0);function a(){return(0,r.useContext)(i)}i.Provider},45739:function(e,t,n){n.d(t,{$c:function(){return o}});var r=n(2265);function o(e,t,n){let o=(0,r.useRef)(void 0!==e),[i,a]=(0,r.useState)(t),u=void 0!==e,s=o.current;return o.current=u,!u&&s&&i!==t&&a(t),[u?e:i,(0,r.useCallback)((...e)=>{let[t,...r]=e,o=null==n?void 0:n(t,...r);return a(t),o},[n])]}},41535:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}},95704:function(e,t,n){n.d(t,{Z:function(){return en}});var r=n(54440),o=n.n(r),i=n(2265),a=n(51829),u=n(46537),s=n(45739),f=n(85856),c=n(60488),l=n(43278),d=n(25113);let p=i.createContext(null);var m=n(32375),v=n(77920),h=n(45703),g=n(65754),b=n(57437);let y=["children"],Z=()=>{};function w(e={}){let t=(0,i.useContext)(p),[n,r]=(0,m.Z)(),o=(0,i.useRef)(!1),{flip:a,offset:u,rootCloseEvent:s,fixed:f=!1,placement:c,popperConfig:l={},enableEventListeners:d=!0,usePopper:b=!!t}=e,y=(null==t?void 0:t.show)==null?!!e.show:t.show;y&&!o.current&&(o.current=!0);let{placement:w,setMenu:x,menuElement:O,toggleElement:k}=t||{},j=(0,v.Z)(k,O,(0,g.ZP)({placement:c||w||"bottom-start",enabled:b,enableEvents:null==d?y:d,offset:u,flip:a,fixed:f,arrowElement:n,popperConfig:l})),E=Object.assign({ref:x||Z,"aria-labelledby":null==k?void 0:k.id},j.attributes.popper,{style:j.styles.popper}),C={show:y,placement:w,hasShown:o.current,toggle:null==t?void 0:t.toggle,popper:b?j:null,arrowProps:b?Object.assign({ref:r},j.attributes.arrow,{style:j.styles.arrow}):{}};return(0,h.Z)(O,e=>{null==t||t.toggle(!1,e)},{clickTrigger:s,disabled:!y}),[E,C]}function x(e){let{children:t}=e,[n,r]=w(function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,y));return(0,b.jsx)(b.Fragment,{children:t(n,r)})}x.displayName="DropdownMenu",x.defaultProps={usePopper:!0};var O=n(94256);let k=e=>{var t;return(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())==="menu"},j=()=>{};function E(){let e=(0,O.gP)(),{show:t=!1,toggle:n=j,setToggle:r,menuElement:o}=(0,i.useContext)(p)||{},a={id:e,ref:r||j,onClick:(0,i.useCallback)(e=>{n(!t,e)},[t,n]),"aria-expanded":!!t};return o&&k(o)&&(a["aria-haspopup"]=!0),[a,{show:t,toggle:n}]}function C({children:e}){let[t,n]=E();return(0,b.jsx)(b.Fragment,{children:e(t,n)})}C.displayName="DropdownToggle";var D=n(51066),P=n(36123),R=n(98949),A=n(79861);let M=["eventKey","disabled","onClick","active","as"];function S({key:e,href:t,active:n,disabled:r,onClick:o}){let a=(0,i.useContext)(D.Z),{activeKey:u}=(0,i.useContext)(P.Z)||{},s=(0,D.h)(e,t),f=null==n&&null!=e?(0,D.h)(u)===s:n;return[{onClick:(0,d.Z)(e=>{r||(null==o||o(e),a&&!e.isPropagationStopped()&&a(s,e))}),"aria-disabled":r||void 0,"aria-selected":f,[(0,A.PB)("dropdown-item")]:""},{isActive:f}]}let L=i.forwardRef((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:i,as:a=R.ZP}=e,u=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,M),[s]=S({key:n,href:u.href,disabled:r,onClick:o,active:i});return(0,b.jsx)(a,Object.assign({},u,{ref:t},s))});L.displayName="DropdownItem";var N=n(34462);function $(){let e=(0,c.Z)(),t=(0,i.useRef)(null),n=(0,i.useCallback)(n=>{t.current=n,e()},[e]);return[t,n]}function T({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:o=`* [${(0,A.PB)("dropdown-item")}]`,focusFirstItemOnShow:c,placement:m="bottom-start",children:v}){let h=(0,N.Z)(),[g,y]=(0,s.$c)(t,e,r),[Z,w]=$(),x=Z.current,[O,j]=$(),E=O.current,C=(0,f.Z)(g),P=(0,i.useRef)(null),R=(0,i.useRef)(!1),M=(0,i.useContext)(D.Z),S=(0,i.useCallback)((e,t,n=null==t?void 0:t.type)=>{y(e,{originalEvent:t,source:n})},[y]),L=(0,d.Z)((e,t)=>{null==n||n(e,t),S(!1,t,"select"),t.isPropagationStopped()||null==M||M(e,t)}),T=(0,i.useMemo)(()=>({toggle:S,placement:m,show:g,menuElement:x,toggleElement:E,setMenu:w,setToggle:j}),[S,m,g,x,E,w,j]);x&&C&&!g&&(R.current=x.contains(x.ownerDocument.activeElement));let I=(0,d.Z)(()=>{E&&E.focus&&E.focus()}),B=(0,d.Z)(()=>{let e=P.current,t=c;if(null==t&&(t=!!(Z.current&&k(Z.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;let n=(0,a.Z)(Z.current,o)[0];n&&n.focus&&n.focus()});(0,i.useEffect)(()=>{g?B():R.current&&(R.current=!1,I())},[g,R,I,B]),(0,i.useEffect)(()=>{P.current=null});let F=(e,t)=>{if(!Z.current)return null;let n=(0,a.Z)(Z.current,o),r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,l.Z)((0,i.useCallback)(()=>h.document,[h]),"keydown",e=>{var t,n;let{key:r}=e,o=e.target,i=null==(t=Z.current)?void 0:t.contains(o),a=null==(n=O.current)?void 0:n.contains(o);if(/input|textarea/i.test(o.tagName)&&(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type)||!i&&!a||"Tab"===r&&(!Z.current||!g))return;P.current=e.type;let s={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{let t=F(o,-1);t&&t.focus&&t.focus(),e.preventDefault();return}case"ArrowDown":if(e.preventDefault(),g){let e=F(o,1);e&&e.focus&&e.focus()}else y(!0,s);return;case"Tab":(0,u.ZP)(o.ownerDocument,"keyup",e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=Z.current)&&t.contains(e.target)||y(!1,s)},{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),y(!1,s)}}),(0,b.jsx)(D.Z.Provider,{value:L,children:(0,b.jsx)(p.Provider,{value:T,children:v})})}T.displayName="Dropdown",T.Menu=x,T.Toggle=C,T.Item=L;var I=n(30538);let B=i.createContext({});B.displayName="DropdownContext";var F=n(95511),V=n(57127);let W=i.forwardRef(({bsPrefix:e,className:t,eventKey:n,disabled:r=!1,onClick:i,active:a,as:u=F.Z,...s},f)=>{let c=(0,V.vE)(e,"dropdown-item"),[l,d]=S({key:n,href:s.href,disabled:r,onClick:i,active:a});return(0,b.jsx)(u,{...s,...l,ref:f,className:o()(t,c,d.isActive&&"active",r&&"disabled")})});W.displayName="DropdownItem";var H=n(87880),_=n(21271);n(50267);var q=n(50521),K=n(69414);function z(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t?r=e?n?"right-end":"left-end":n?"right-start":"left-start":"down-centered"===t?r="bottom":"up-centered"===t&&(r="top"),r}n(65187);let U=i.forwardRef(({bsPrefix:e,className:t,align:n,rootCloseEvent:r,flip:a=!0,show:u,renderOnMount:s,as:f="div",popperConfig:c,variant:l,...d},p)=>{let m=!1,v=(0,i.useContext)(K.Z),h=(0,V.vE)(e,"dropdown-menu"),{align:g,drop:y,isRTL:Z}=(0,i.useContext)(B);n=n||g;let x=(0,i.useContext)(q.Z),O=[];if(n){if("object"==typeof n){let e=Object.keys(n);if(e.length){let t=e[0],r=n[t];m="start"===r,O.push(`${h}-${t}-${r}`)}}else"end"===n&&(m=!0)}let k=z(m,y,Z),[j,{hasShown:E,popper:C,show:D,toggle:P}]=w({flip:a,rootCloseEvent:r,show:u,usePopper:!v&&0===O.length,offset:[0,2],popperConfig:c,placement:k});if(j.ref=(0,_.Z)(p,j.ref),(0,H.Z)(()=>{D&&(null==C||C.update())},[D]),!E&&!s&&!x)return null;"string"!=typeof f&&(j.show=D,j.close=()=>null==P?void 0:P(!1),j.align=n);let R=d.style;return null!=C&&C.placement&&(R={...d.style,...j.style},d["x-placement"]=C.placement),(0,b.jsx)(f,{...d,...j,style:R,...(O.length||v)&&{"data-bs-popper":"static"},className:o()(t,h,D&&"show",m&&`${h}-end`,l&&`${h}-${l}`,...O)})});U.displayName="DropdownMenu";var Y=n(46716);let X=i.forwardRef(({bsPrefix:e,split:t,className:n,childBsPrefix:r,as:a=Y.Z,...u},s)=>{let f=(0,V.vE)(e,"dropdown-toggle"),c=(0,i.useContext)(p);void 0!==r&&(u.bsPrefix=r);let[l]=E();return l.ref=(0,_.Z)(l.ref,s),(0,b.jsx)(a,{className:o()(n,f,t&&`${f}-split`,(null==c?void 0:c.show)&&"show"),...l,...u})});X.displayName="DropdownToggle";var G=n(12510);let J=(0,G.Z)("dropdown-header",{defaultProps:{role:"heading"}}),Q=(0,G.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),ee=(0,G.Z)("dropdown-item-text",{Component:"span"}),et=i.forwardRef((e,t)=>{let{bsPrefix:n,drop:r="down",show:a,className:u,align:s="start",onSelect:f,onToggle:c,focusFirstItemOnShow:l,as:p="div",navbar:m,autoClose:v=!0,...h}=(0,I.Ch)(e,{show:"onToggle"}),g=(0,i.useContext)(q.Z),y=(0,V.vE)(n,"dropdown"),Z=(0,V.SC)(),w=e=>!1===v?"click"===e:"inside"===v?"rootClose"!==e:"outside"!==v||"select"!==e,x=(0,d.Z)((e,t)=>{t.originalEvent.currentTarget===document&&("keydown"!==t.source||"Escape"===t.originalEvent.key)&&(t.source="rootClose"),w(t.source)&&(null==c||c(e,t))}),O=z("end"===s,r,Z),k=(0,i.useMemo)(()=>({align:s,drop:r,isRTL:Z}),[s,r,Z]),j={down:y,"down-centered":`${y}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return(0,b.jsx)(B.Provider,{value:k,children:(0,b.jsx)(T,{placement:O,show:a,onSelect:f,onToggle:x,focusFirstItemOnShow:l,itemSelector:`.${y}-item:not(.disabled):not(:disabled)`,children:g?h.children:(0,b.jsx)(p,{...h,ref:t,className:o()(u,a&&"show",j[r])})})})});et.displayName="Dropdown";var en=Object.assign(et,{Toggle:X,Menu:U,Item:W,ItemText:ee,Divider:Q,Header:J})},50521:function(e,t,n){let r=n(2265).createContext(null);r.displayName="InputGroupContext",t.Z=r},94256:function(e,t,n){n.d(t,{gP:function(){return s}});var r=n(2265);let o={prefix:String(Math.round(1e10*Math.random())),current:0,isSSR:!1},i=r.createContext(o),a=!!("undefined"!=typeof window&&window.document&&window.document.createElement),u=new WeakMap,s="function"==typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)("function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(l,f,c):(0,r.useContext)(i).isSSR),a=n?"react-aria":`react-aria${o.prefix}`;return e||`${a}-${t}`}:function(e){let t=(0,r.useContext)(i);t!==o||a||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(e=!1){let t=(0,r.useContext)(i),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,a;let e=null===(o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===o?void 0:null===(a=o.ReactCurrentOwner)||void 0===a?void 0:a.current;if(e){let n=u.get(e);null==n?u.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,u.delete(e))}n.current=++t.current}return n.current}(!!e);return e||`react-aria${t.prefix}-${n}`};function f(){return!1}function c(){return!0}function l(e){return()=>{}}}}]);