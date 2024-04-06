exports.id=4819,exports.ids=[4819],exports.modules={74471:(e,t,n)=>{"use strict";Object.defineProperty(t,"U",{enumerable:!0,get:function(){return o}});let r=n(18195);function o(e,t){return(0,r.registerServerReference)(t,e,null)}},42053:(e,t)=>{"use strict";function n(e){for(let t=0;t<e.length;t++){let n=e[t];if("function"!=typeof n)throw Error(`A "use server" file can only export async functions, found ${typeof n}.`)}}Object.defineProperty(t,"h",{enumerable:!0,get:function(){return n}})},801:(e,t,n)=>{"use strict";var r=n(25091),o=n(40002),a={stream:!0},i=new Map;function u(e){var t=globalThis.__next_require__(e);return"function"!=typeof t.then||"fulfilled"===t.status?null:(t.then(function(e){t.status="fulfilled",t.value=e},function(e){t.status="rejected",t.reason=e}),t)}function s(){}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,c=Symbol.for("react.element"),f=Symbol.for("react.provider"),d=Symbol.for("react.server_context"),p=Symbol.for("react.lazy"),h=Symbol.for("react.default_value"),y=Symbol.iterator,m=Array.isArray,v=Object.getPrototypeOf,g=Object.prototype,b=new WeakMap;function w(e,t,n,r){var o=1,a=0,i=null;e=JSON.stringify(e,function e(u,s){if(null===s)return null;if("object"==typeof s){if("function"==typeof s.then){null===i&&(i=new FormData),a++;var l,c,f=o++;return s.then(function(r){r=JSON.stringify(r,e);var o=i;o.append(t+f,r),0==--a&&n(o)},function(e){r(e)}),"$@"+f.toString(16)}if(m(s))return s;if(s instanceof FormData){null===i&&(i=new FormData);var d=i,p=t+(u=o++)+"_";return s.forEach(function(e,t){d.append(p+t,e)}),"$K"+u.toString(16)}if(s instanceof Map)return s=JSON.stringify(Array.from(s),e),null===i&&(i=new FormData),u=o++,i.append(t+u,s),"$Q"+u.toString(16);if(s instanceof Set)return s=JSON.stringify(Array.from(s),e),null===i&&(i=new FormData),u=o++,i.append(t+u,s),"$W"+u.toString(16);if(null===(c=s)||"object"!=typeof c?null:"function"==typeof(c=y&&c[y]||c["@@iterator"])?c:null)return Array.from(s);if((u=v(s))!==g&&(null===u||null!==v(u)))throw Error("Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.");return s}if("string"==typeof s)return"Z"===s[s.length-1]&&this[u]instanceof Date?"$D"+s:s="$"===s[0]?"$"+s:s;if("boolean"==typeof s)return s;if("number"==typeof s)return Number.isFinite(l=s)?0===l&&-1/0==1/l?"$-0":l:1/0===l?"$Infinity":-1/0===l?"$-Infinity":"$NaN";if(void 0===s)return"$undefined";if("function"==typeof s){if(void 0!==(s=b.get(s)))return s=JSON.stringify(s,e),null===i&&(i=new FormData),u=o++,i.set(t+u,s),"$F"+u.toString(16);throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.")}if("symbol"==typeof s){if(Symbol.for(u=s.description)!==s)throw Error("Only global symbols received from Symbol.for(...) can be passed to Server Functions. The symbol Symbol.for("+s.description+") cannot be found among global symbols.");return"$S"+u}if("bigint"==typeof s)return"$n"+s.toString(10);throw Error("Type "+typeof s+" is not supported as an argument to a Server Function.")}),null===i?n(e):(i.set(t+"0",e),0===a&&n(i))}var S=new WeakMap;function _(e){var t=b.get(this);if(!t)throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");var n=null;if(null!==t.bound){if((n=S.get(t))||(r=t,i=new Promise(function(e,t){o=e,a=t}),w(r,"",function(e){if("string"==typeof e){var t=new FormData;t.append("0",e),e=t}i.status="fulfilled",i.value=e,o(e)},function(e){i.status="rejected",i.reason=e,a(e)}),n=i,S.set(t,n)),"rejected"===n.status)throw n.reason;if("fulfilled"!==n.status)throw n;t=n.value;var r,o,a,i,u=new FormData;t.forEach(function(t,n){u.append("$ACTION_"+e+":"+n,t)}),n=u,t="$ACTION_REF_"+e}else t="$ACTION_ID_"+t.id;return{name:t,method:"POST",encType:"multipart/form-data",data:n}}function T(e,t){var n=b.get(this);if(!n)throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");if(n.id!==e)return!1;var r=n.bound;if(null===r)return 0===t;switch(r.status){case"fulfilled":return r.value.length===t;case"pending":throw r;case"rejected":throw r.reason;default:throw"string"!=typeof r.status&&(r.status="pending",r.then(function(e){r.status="fulfilled",r.value=e},function(e){r.status="rejected",r.reason=e})),r}}function E(e,t){Object.defineProperties(e,{$$FORM_ACTION:{value:_},$$IS_SIGNATURE_EQUAL:{value:T},bind:{value:k}}),b.set(e,t)}var O=Function.prototype.bind,A=Array.prototype.slice;function k(){var e=O.apply(this,arguments),t=b.get(this);if(t){var n=A.call(arguments,1),r=null;r=null!==t.bound?Promise.resolve(t.bound).then(function(e){return e.concat(n)}):Promise.resolve(n),E(e,{id:t.id,bound:r})}return e}var R=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;function M(e,t,n,r){this.status=e,this.value=t,this.reason=n,this._response=r}function N(e){switch(e.status){case"resolved_model":C(e);break;case"resolved_module":F(e)}switch(e.status){case"fulfilled":return e.value;case"pending":case"blocked":case"cyclic":throw e;default:throw e.reason}}function x(e,t){for(var n=0;n<e.length;n++)(0,e[n])(t)}function P(e,t,n){switch(e.status){case"fulfilled":x(t,e.value);break;case"pending":case"blocked":case"cyclic":e.value=t,e.reason=n;break;case"rejected":n&&x(n,e.reason)}}function j(e,t){if("pending"===e.status||"blocked"===e.status){var n=e.reason;e.status="rejected",e.reason=t,null!==n&&x(n,t)}}function D(e,t){if("pending"===e.status||"blocked"===e.status){var n=e.value,r=e.reason;e.status="resolved_module",e.value=t,null!==n&&(F(e),P(e,n,r))}}M.prototype=Object.create(Promise.prototype),M.prototype.then=function(e,t){switch(this.status){case"resolved_model":C(this);break;case"resolved_module":F(this)}switch(this.status){case"fulfilled":e(this.value);break;case"pending":case"blocked":case"cyclic":e&&(null===this.value&&(this.value=[]),this.value.push(e)),t&&(null===this.reason&&(this.reason=[]),this.reason.push(t));break;default:t(this.reason)}};var I=null,$=null;function C(e){var t=I,n=$;I=e,$=null;var r=e.value;e.status="cyclic",e.value=null,e.reason=null;try{var o=JSON.parse(r,e._response._fromJSON);if(null!==$&&0<$.deps)$.value=o,e.status="blocked",e.value=null,e.reason=null;else{var a=e.value;e.status="fulfilled",e.value=o,null!==a&&x(a,o)}}catch(t){e.status="rejected",e.reason=t}finally{I=t,$=n}}function F(e){try{var t=e.value,n=globalThis.__next_require__(t[0]);if(4===t.length&&"function"==typeof n.then){if("fulfilled"===n.status)n=n.value;else throw n.reason}var r="*"===t[2]?n:""===t[2]?n.__esModule?n.default:n:n[t[2]];e.status="fulfilled",e.value=r}catch(t){e.status="rejected",e.reason=t}}function q(e,t){e._chunks.forEach(function(e){"pending"===e.status&&j(e,t)})}function L(e,t){var n=e._chunks,r=n.get(t);return r||(r=new M("pending",null,null,e),n.set(t,r)),r}function U(e,t){if("resolved_model"===(e=L(e,t)).status&&C(e),"fulfilled"===e.status)return e.value;throw e.reason}function J(){throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.')}function K(){throw Error("Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.")}function B(e){var t,n=e.ssrManifest.moduleMap;return(n={_bundlerConfig:n,_moduleLoading:e.ssrManifest.moduleLoading,_callServer:void 0!==K?K:J,_nonce:e="string"==typeof e.nonce?e.nonce:void 0,_chunks:new Map,_stringDecoder:new TextDecoder,_fromJSON:null,_rowState:0,_rowID:0,_rowTag:0,_rowLength:0,_buffer:[]})._fromJSON=(t=n,function(e,n){return"string"==typeof n?function(e,t,n,r){if("$"===r[0]){if("$"===r)return c;switch(r[1]){case"$":return r.slice(1);case"L":return{$$typeof:p,_payload:e=L(e,t=parseInt(r.slice(2),16)),_init:N};case"@":return L(e,t=parseInt(r.slice(2),16));case"S":return Symbol.for(r.slice(2));case"P":return R[e=r.slice(2)]||((t={$$typeof:d,_currentValue:h,_currentValue2:h,_defaultValue:h,_threadCount:0,Provider:null,Consumer:null,_globalName:e}).Provider={$$typeof:f,_context:t},R[e]=t),R[e].Provider;case"F":return t=U(e,t=parseInt(r.slice(2),16)),function(e,t){function n(){var e=Array.prototype.slice.call(arguments),n=t.bound;return n?"fulfilled"===n.status?r(t.id,n.value.concat(e)):Promise.resolve(n).then(function(n){return r(t.id,n.concat(e))}):r(t.id,e)}var r=e._callServer;return E(n,t),n}(e,t);case"Q":return e=U(e,t=parseInt(r.slice(2),16)),new Map(e);case"W":return e=U(e,t=parseInt(r.slice(2),16)),new Set(e);case"I":return 1/0;case"-":return"$-0"===r?-0:-1/0;case"N":return NaN;case"u":return;case"D":return new Date(Date.parse(r.slice(2)));case"n":return BigInt(r.slice(2));default:switch((e=L(e,r=parseInt(r.slice(1),16))).status){case"resolved_model":C(e);break;case"resolved_module":F(e)}switch(e.status){case"fulfilled":return e.value;case"pending":case"blocked":case"cyclic":var o;return r=I,e.then(function(e,t,n,r){if($){var o=$;r||o.deps++}else o=$={deps:r?0:1,value:null};return function(r){t[n]=r,o.deps--,0===o.deps&&"blocked"===e.status&&(r=e.value,e.status="fulfilled",e.value=o.value,null!==r&&x(r,o.value))}}(r,t,n,"cyclic"===e.status),(o=r,function(e){return j(o,e)})),null;default:throw e.reason}}}return r}(t,this,e,n):"object"==typeof n&&null!==n?e=n[0]===c?{$$typeof:c,type:n[1],key:n[2],ref:null,props:n[3],_owner:null}:n:n}),n}function W(e,t){function r(t){q(e,t)}var o=t.getReader();o.read().then(function t(c){var f=c.value;if(c.done)q(e,Error("Connection closed."));else{var d=0,p=e._rowState,h=e._rowID,y=e._rowTag,m=e._rowLength;c=e._buffer;for(var v=f.length;d<v;){var g=-1;switch(p){case 0:58===(g=f[d++])?p=1:h=h<<4|(96<g?g-87:g-48);continue;case 1:84===(p=f[d])?(y=p,p=2,d++):64<p&&91>p?(y=p,p=3,d++):(y=0,p=3);continue;case 2:44===(g=f[d++])?p=4:m=m<<4|(96<g?g-87:g-48);continue;case 3:g=f.indexOf(10,d);break;case 4:(g=d+m)>f.length&&(g=-1)}var b=f.byteOffset+d;if(-1<g){d=new Uint8Array(f.buffer,b,g-d),m=e,b=y;var w=m._stringDecoder;y="";for(var S=0;S<c.length;S++)y+=w.decode(c[S],a);switch(y+=w.decode(d),b){case 73:!function(e,t,r){var o=e._chunks,a=o.get(t);r=JSON.parse(r,e._fromJSON);var c=function(e,t){if(e){var n=e[t[0]];if(e=n[t[2]])n=e.name;else{if(!(e=n["*"]))throw Error('Could not find the module "'+t[0]+'" in the React SSR Manifest. This is probably a bug in the React Server Components bundler.');n=t[2]}return 4===t.length?[e.id,e.chunks,n,1]:[e.id,e.chunks,n]}return t}(e._bundlerConfig,r);if(function(e,t,n){if(null!==e)for(var r=1;r<t.length;r+=2){var o=l.current;if(o){var a=o.preinitScript,i=e.prefix+t[r],u=e.crossOrigin;u="string"==typeof u?"use-credentials"===u?u:"":void 0,a.call(o,i,{crossOrigin:u,nonce:n})}}}(e._moduleLoading,r[1],e._nonce),r=function(e){for(var t=e[1],r=[],o=0;o<t.length;){var a=t[o++];t[o++];var l=i.get(a);if(void 0===l){l=n.e(a),r.push(l);var c=i.set.bind(i,a,null);l.then(c,s),i.set(a,l)}else null!==l&&r.push(l)}return 4===e.length?0===r.length?u(e[0]):Promise.all(r).then(function(){return u(e[0])}):0<r.length?Promise.all(r):null}(c)){if(a){var f=a;f.status="blocked"}else f=new M("blocked",null,null,e),o.set(t,f);r.then(function(){return D(f,c)},function(e){return j(f,e)})}else a?D(a,c):o.set(t,new M("resolved_module",c,null,e))}(m,h,y);break;case 72:if(h=y[0],m=JSON.parse(y=y.slice(1),m._fromJSON),y=l.current)switch(h){case"D":y.prefetchDNS(m);break;case"C":"string"==typeof m?y.preconnect(m):y.preconnect(m[0],m[1]);break;case"L":h=m[0],d=m[1],3===m.length?y.preload(h,d,m[2]):y.preload(h,d);break;case"m":"string"==typeof m?y.preloadModule(m):y.preloadModule(m[0],m[1]);break;case"S":"string"==typeof m?y.preinitStyle(m):y.preinitStyle(m[0],0===m[1]?void 0:m[1],3===m.length?m[2]:void 0);break;case"X":"string"==typeof m?y.preinitScript(m):y.preinitScript(m[0],m[1]);break;case"M":"string"==typeof m?y.preinitModuleScript(m):y.preinitModuleScript(m[0],m[1])}break;case 69:d=(y=JSON.parse(y)).digest,(y=Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.")).stack="Error: "+y.message,y.digest=d,(b=(d=m._chunks).get(h))?j(b,y):d.set(h,new M("rejected",null,y,m));break;case 84:m._chunks.set(h,new M("fulfilled",y,null,m));break;default:(b=(d=m._chunks).get(h))?(m=b,h=y,"pending"===m.status&&(y=m.value,d=m.reason,m.status="resolved_model",m.value=h,null!==y&&(C(m),P(m,y,d)))):d.set(h,new M("resolved_model",y,null,m))}d=g,3===p&&d++,m=h=y=p=0,c.length=0}else{f=new Uint8Array(f.buffer,b,f.byteLength-d),c.push(f),m-=f.byteLength;break}}return e._rowState=p,e._rowID=h,e._rowTag=y,e._rowLength=m,o.read().then(t).catch(r)}}).catch(r)}t.createFromFetch=function(e,t){var n=B(t);return e.then(function(e){W(n,e.body)},function(e){q(n,e)}),L(n,0)},t.createFromReadableStream=function(e,t){return W(t=B(t),e),L(t,0)},t.createServerReference=function(e){return function(e,t){function n(){var n=Array.prototype.slice.call(arguments);return t(e,n)}return E(n,{id:e,bound:null}),n}(e,K)},t.encodeReply=function(e){return new Promise(function(t,n){w(e,"",t,n)})}},10687:(e,t,n)=>{"use strict";e.exports=n(801)},36356:()=>{},60730:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DetachedPromise",{enumerable:!0,get:function(){return n}});class n{constructor(){let e,t;this.promise=new Promise((n,r)=>{e=n,t=r}),this.resolve=e,this.reject=t}}},32225:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{scheduleOnNextTick:function(){return n},scheduleImmediate:function(){return r}});let n=e=>{Promise.resolve().then(()=>{process.nextTick(e)})},r=e=>{setImmediate(e)}},94944:(e,t)=>{"use strict";let n,r;function o(e){let t=new Uint8Array(e),n=t.byteLength;if(n<65535)return String.fromCharCode.apply(null,t);let r="";for(let e=0;e<n;e++)r+=String.fromCharCode(t[e]);return r}function a(e){let t=e.length,n=new Uint8Array(t);for(let r=0;r<t;r++)n[r]=e.charCodeAt(r);return n}function i(e,t,n){return crypto.subtle.encrypt({name:"AES-GCM",iv:t},e,n)}function u(e,t,n){return crypto.subtle.decrypt({name:"AES-GCM",iv:t},e,n)}async function s(e){if(e&&void 0!==r)return r;let t=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),a=btoa(o(await crypto.subtle.exportKey("raw",t)));return n=t,e&&(r=a),a}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{arrayBufferToString:function(){return o},stringToUint8Array:function(){return a},encrypt:function(){return i},decrypt:function(){return u},generateRandomActionKeyRaw:function(){return s},setReferenceManifestsSingleton:function(){return c},getServerModuleMap:function(){return f},getClientReferenceManifestSingleton:function(){return d},getActionEncryptionKey:function(){return p}});let l=Symbol.for("next.server.action-manifests");function c({clientReferenceManifest:e,serverActionsManifest:t,serverModuleMap:n}){globalThis[l]={clientReferenceManifest:e,serverActionsManifest:t,serverModuleMap:n}}function f(){let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");return e.serverModuleMap}function d(){let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");return e.clientReferenceManifest}async function p(){if(n)return n;let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");let t=process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY||e.serverActionsManifest.encryptionKey;if(void 0===t)throw Error("Missing encryption key for Server Actions");return n=await crypto.subtle.importKey("raw",a(atob(t)),"AES-GCM",!0,["encrypt","decrypt"])}},68616:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{encryptActionBoundArgs:function(){return f},decryptActionBoundArgs:function(){return d}}),n(36356);let r=n(18195),o=n(10687),a=n(31644),i=n(94944),u=new TextEncoder,s=new TextDecoder;async function l(e,t){let n=await (0,i.getActionEncryptionKey)();if(void 0===n)throw Error("Missing encryption key for Server Action. This is a bug in Next.js");let r=atob(t),o=r.slice(0,16),a=r.slice(16);if(void 0===a)throw Error("Invalid Server Action payload.");let u=s.decode(await (0,i.decrypt)(n,(0,i.stringToUint8Array)(o),(0,i.stringToUint8Array)(a)));if(!u.startsWith(e))throw Error("Invalid Server Action payload: failed to decrypt.");return u.slice(e.length)}async function c(e,t){let n=await (0,i.getActionEncryptionKey)();if(void 0===n)throw Error("Missing encryption key for Server Action. This is a bug in Next.js");let r=new Uint8Array(16);crypto.getRandomValues(r);let o=(0,i.arrayBufferToString)(r.buffer),a=await (0,i.encrypt)(n,r,u.encode(e+t));return btoa(o+(0,i.arrayBufferToString)(a))}async function f(e,t){let n=(0,i.getClientReferenceManifestSingleton)(),o=await (0,a.streamToString)((0,r.renderToReadableStream)(t,n.clientModules));return await c(e,o)}async function d(e,t){let n=await l(e,await t),a=await (0,o.createFromReadableStream)(new ReadableStream({start(e){e.enqueue(new TextEncoder().encode(n)),e.close()}}),{ssrManifest:{moduleLoading:{},moduleMap:{}}}),u=(0,i.getServerModuleMap)();return await (0,r.decodeReply)(await (0,o.encodeReply)(a),u)}},80071:(e,t)=>{"use strict";function n(e=new TextDecoder){return new TransformStream({transform:(t,n)=>n.enqueue(e.decode(t,{stream:!0})),flush:t=>t.enqueue(e.decode())})}function r(e=new TextEncoder){return new TransformStream({transform:(t,n)=>n.enqueue(e.encode(t))})}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{createDecodeTransformStream:function(){return n},createEncodeTransformStream:function(){return r}})},31644:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cloneTransformStream:function(){return s},chainStreams:function(){return l},streamFromString:function(){return c},streamToString:function(){return f},createBufferedTransformStream:function(){return d},renderToInitialFizzStream:function(){return h},createRootLayoutValidatorStream:function(){return v},continueFizzStream:function(){return b},continuePostponedFizzStream:function(){return w}});let r=n(57636),o=n(95237),a=n(80071),i=n(60730),u=n(32225);function s(e){let t=e.readable.getReader();return new TransformStream({async start(e){for(;;){let{done:n,value:r}=await t.read();if(n)break;e.enqueue(r)}},transform(){}})}function l(...e){let{readable:t,writable:n}=new TransformStream,r=Promise.resolve();for(let t=0;t<e.length;++t)r=r.then(()=>e[t].pipeTo(n,{preventClose:t+1<e.length}));return r.catch(()=>{}),t}function c(e){let t=new TextEncoder;return new ReadableStream({start(n){n.enqueue(t.encode(e)),n.close()}})}async function f(e){let t="";return await e.pipeThrough((0,a.createDecodeTransformStream)()).pipeTo(new WritableStream({write(e){t+=e}})),t}function d(){let e,t=new Uint8Array,n=n=>{if(e)return;let r=new i.DetachedPromise;e=r,(0,u.scheduleImmediate)(()=>{try{n.enqueue(t),t=new Uint8Array}catch{}finally{e=void 0,r.resolve()}})};return new TransformStream({transform(e,r){let o=new Uint8Array(t.length+e.byteLength);o.set(t),o.set(e,t.length),t=o,n(r)},flush(){if(e)return e.promise}})}function p(e){let t=new TextEncoder;return new TransformStream({transform:async(n,r)=>{let o=await e();o&&r.enqueue(t.encode(o)),r.enqueue(n)}})}function h({ReactDOMServer:e,element:t,streamOptions:n}){return(0,r.getTracer)().trace(o.AppRenderSpan.renderToReadableStream,async()=>e.renderToReadableStream(t,n))}function y(e){let t=!1,n=null,r=t=>{let r=e.getReader(),o=new i.DetachedPromise;n=o,(0,u.scheduleImmediate)(async()=>{try{for(;;){let{done:e,value:n}=await r.read();if(e)return;t.enqueue(n)}}catch(e){t.error(e)}finally{o.resolve()}})};return new TransformStream({transform(e,n){n.enqueue(e),t||(t=!0,r(n))},flush(){if(n&&t)return n.promise}})}function m(e){let t=!1,n=new TextEncoder,r=new TextDecoder;return new TransformStream({transform(o,a){if(t)return a.enqueue(o);let i=r.decode(o),u=i.indexOf(e);if(u>-1){if(t=!0,i.length===e.length)return;let r=i.slice(0,u);if(o=n.encode(r),a.enqueue(o),i.length>e.length+u){let t=i.slice(u+e.length);o=n.encode(t),a.enqueue(o)}}else a.enqueue(o)},flush(t){t.enqueue(n.encode(e))}})}function v(e="",t){let n=!1,r=!1,o=new TextEncoder,a=new TextDecoder,i="";return new TransformStream({async transform(e,t){(!n||!r)&&(i+=a.decode(e,{stream:!0}),!n&&i.includes("<html")&&(n=!0),!r&&i.includes("<body")&&(r=!0)),t.enqueue(e)},flush(u){(!n||!r)&&(i+=a.decode(),!n&&i.includes("<html")&&(n=!0),!r&&i.includes("<body")&&(r=!0));let s=[];n||s.push("html"),r||s.push("body"),s.length>0&&u.enqueue(o.encode(`<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({missingTags:s,assetPrefix:e??"",tree:t()})}</script>`))}})}function g(e,t){let n=e;for(let e of t)e&&(n=n.pipeThrough(e));return n}async function b(e,{suffix:t,inlinedDataStream:n,isStaticGeneration:r,getServerInsertedHTML:o,serverInsertedHTMLToHead:a,validateRootLayout:s}){let l="</body></html>",c=t?t.split(l,1)[0]:null;return r&&"allReady"in e&&await e.allReady,g(e,[d(),o&&!a?p(o):null,null!=c&&c.length>0?function(e){let t,n=!1,r=new TextEncoder,o=n=>{let o=new i.DetachedPromise;t=o,(0,u.scheduleImmediate)(()=>{try{n.enqueue(r.encode(e))}catch{}finally{t=void 0,o.resolve()}})};return new TransformStream({transform(e,t){t.enqueue(e),n||(n=!0,o(t))},flush(o){if(t)return t.promise;n||o.enqueue(r.encode(e))}})}(c):null,n?y(n):null,m(l),o&&a?function(e){let t=!1,n=!1,r=new TextEncoder,o=new TextDecoder;return new TransformStream({async transform(a,i){if(n){i.enqueue(a);return}let s=await e();if(t)i.enqueue(r.encode(s)),i.enqueue(a),n=!0;else{let e=o.decode(a),u=e.indexOf("</head>");if(-1!==u){let o=e.slice(0,u)+s+e.slice(u);i.enqueue(r.encode(o)),n=!0,t=!0}}t?(0,u.scheduleImmediate)(()=>{n=!1}):i.enqueue(a)},async flush(t){let n=await e();n&&t.enqueue(r.encode(n))}})}(o):null,s?v(s.assetPrefix,s.getTree):null])}async function w(e,{inlinedDataStream:t,isStaticGeneration:n,getServerInsertedHTML:r,serverInsertedHTMLToHead:o}){return n&&"allReady"in e&&await e.allReady,g(e,[d(),r&&!o?p(r):null,t?y(t):null,m("</body></html>")])}}};