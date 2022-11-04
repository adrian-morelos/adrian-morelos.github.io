(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),o=r(26),i=r(372),s=r(327),a=r(97),u=r(109),c=r(985),f=r(61),l=r(874),p=r(263);e.exports=function(e){return new Promise((function(t,r){var d,h=e.data,v=e.headers,m=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}n.isFormData(h)&&delete v["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+w)}var x=a(e.baseURL,e.url);function j(){if(g){var n="getAllResponseHeaders"in g?u(g.getAllResponseHeaders()):null,i={data:m&&"text"!==m&&"json"!==m?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:n,config:e,request:g};o((function(e){t(e),y()}),(function(e){r(e),y()}),i),g=null}}if(g.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=j:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(j)},g.onabort=function(){g&&(r(f("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){r(f("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},n.isStandardBrowserEnv()){var C=(e.withCredentials||c(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;C&&(v[e.xsrfHeaderName]=C)}"setRequestHeader"in g&&n.forEach(v,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete v[t]:g.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),m&&"json"!==m&&(g.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){g&&(r(!e||e&&e.type?new p("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),h||(h=null),g.send(h)}))}},609:(e,t,r)=>{"use strict";var n=r(867),o=r(849),i=r(321),s=r(185),a=function e(t){var r=new i(t),a=o(i.prototype.request,r);return n.extend(a,i.prototype,r),n.extend(a,r),a.create=function(r){return e(s(t,r))},a}(r(546));a.Axios=i,a.Cancel=r(263),a.CancelToken=r(972),a.isCancel=r(502),a.VERSION=r(288).version,a.all=function(e){return Promise.all(e)},a.spread=r(713),a.isAxiosError=r(268),e.exports=a,e.exports.default=a},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),o=r(327),i=r(782),s=r(572),a=r(185),u=r(875),c=u.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&u.assertOptions(r,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,f=[];if(this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)})),!o){var l=[s,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(f),i=Promise.resolve(t);l.length;)i=i.then(l.shift(),l.shift());return i}for(var p=t;n.length;){var d=n.shift(),h=n.shift();try{p=d(p)}catch(e){h(e);break}}try{i=s(p)}catch(e){return Promise.reject(e)}for(;f.length;)i=i.then(f.shift(),f.shift());return i},f.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=f},782:(e,t,r)=>{"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,r)=>{"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},572:(e,t,r)=>{"use strict";var n=r(867),o=r(527),i=r(502),s=r(546),a=r(263);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function u(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);n.isUndefined(o)&&t!==u||(r[e]=o)})),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867),o=r(546);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},546:(e,t,r)=>{"use strict";var n=r(867),o=r(16),i=r(481),s=r(874),a={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,f={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=r(448)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(0,JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){f.headers[e]=n.merge(a)})),e.exports=f},874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:e=>{e.exports={version:"0.26.1"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,r)=>{"use strict";var n=r(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,s){if(!1===e)throw new Error(o(n," has been removed"+(t?" in "+t:"")));return t&&!i[n]&&(i[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,s)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:o}},867:(e,t,r)=>{"use strict";var n=r(849),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function s(e){return void 0===e}function a(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:f,isStream:function(e){return u(e)&&f(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(()=>{"use strict";var e,t=r(669),n=new Uint8Array(16);function o(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(n)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,s=function(e){return"string"==typeof e&&i.test(e)};for(var a=[],u=0;u<256;++u)a.push((u+256).toString(16).substr(1));const c=function(e,t,r){var n=(e=e||{}).random||(e.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=n[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!s(r))throw TypeError("Stringified UUID is invalid");return r}(n)};var f,l;function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,y(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function b(e,t,r){return b=g()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&y(o,r.prototype),o},b.apply(null,arguments)}function w(e){var t="function"==typeof Map?new Map:void 0;return w=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return b(e,arguments,m(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,e)},w(e)}(l=f||(f={})).Accept="accept",l.Reject="reject",l.Unselected="unselected";var x=function(e){function t(t){var r;return(r=e.call(this)||this).status=void 0,r.message=t?"Unauthorized: "+t:"Unauthorized.",r.status=401,r}return v(t,e),t}(w(Error)),j=function(e){function t(t){var r;return(r=e.call(this)||this).status=void 0,r.message=t?"Bad Request: "+t:"Bad Request.",r.status=400,r}return v(t,e),t}(w(Error)),C=function(e){function t(t){var r;return(r=e.call(this)||this).status=void 0,r.message=t?"Not found: "+t:"Not found.",r.status=404,r}return v(t,e),t}(w(Error)),P=function(e){function t(t){var r;return(r=e.call(this)||this).status=void 0,r.message=t?"Unexpected Error: "+t:"Unexpected Error.",r.status=500,r}return v(t,e),t}(w(Error)),E=new Map([[401,x],[400,j],[404,C],[500,P]]),O=function(){function e(e,r,n){this.apiUrl=void 0,this.token=void 0,this.apiKey=void 0,this._client=void 0,this.apiUrl=e,this.token=r,this.apiKey=n;var o=new URL(this.apiUrl).href.replace(/\/$/,"");this._client=t.create({baseURL:o,headers:h({},r&&{authorization:"Bearer "+this.token},n&&{"x-api-key":n})}),this._client.interceptors.response.use(void 0,this.errorHandler)}e.create=function(t){return new e(t.apiUrl,t.token,t.apiKey)};var r=e.prototype;return r.get=function(e,t){try{return Promise.resolve(this._client.get(e,t)).then((function(e){return null==e?void 0:e.data}))}catch(e){return Promise.reject(e)}},r.post=function(e,t,r){try{return Promise.resolve(this._client.post(e,t,r)).then((function(e){return null==e?void 0:e.data}))}catch(e){return Promise.reject(e)}},r.errorHandler=function(e){var t,r,n,o=null==(t=e.response)?void 0:t.status,i=null==(r=e.response)||null==(n=r.data)?void 0:n.message,s=E.has(o)?E.get(o):void 0;if(s)throw new s(i);throw e},e}(),S=function(){function e(e,t){this.verifiedId=void 0,this.anonymousId=void 0,this.verifiedId=e,this.anonymousId=t}return e.verified=function(t){return new e(t,void 0)},e.anonymous=function(t){return new e(void 0,t||c())},d(e,[{key:"id",get:function(){return this.verifiedId||this.anonymousId}}]),e}(),R=function(e){function t(t){return e.call(this,t)||this}return v(t,e),t}(w(Error)),k="undefined"!=typeof window&&void 0!==window.document;function _(){if(!k)throw new Error("localstorage can only be used from a browser environment");var e=T()||S.anonymous();return N(e),e}function N(e){if(!k)throw new Error("localstorage can only be used from a browser environment");localStorage.setItem("cmp:subject",JSON.stringify(e))}function T(){if(k&&localStorage.getItem("cmp:subject")){var e=JSON.parse(localStorage["cmp:subject"]),t=e.verifiedId,r=e.anonymousId;return t?S.verified(t):S.anonymous(r)}}var U,A=function(){function e(e){this.config=void 0,this._httpClient=void 0,this.config=e,this._httpClient=O.create({apiUrl:e.apiUrl,token:e.token})}e.new=function(t){return k&&_(),new e(t)};var t=e.prototype;return t.login=function(e){if(!e)throw new R("verifiedId must be provided");N(S.verified(e))},t.logout=function(){N(S.anonymous())},t.createConsent=function(e){try{var t=this,r={subject:e.subject||t.subject,actions:e.actions,tags:e.tags||[],attributes:e.attributes,compliance:e.compliance},n=h({},e.overrideCountryCode&&{"x-country-code-override":e.overrideCountryCode},e.overrideRegionCode&&{"x-region-code-override":e.overrideRegionCode}),o=h({},t._getRegionHeaders,n);return Promise.resolve(t._httpClient.post("/consents",r,{headers:o})).then((function(e){return e.statusText}))}catch(e){return Promise.reject(e)}},t.getUnifiedConsent=function(e){try{var t,r=this,n=e||(null==(t=r.subject)?void 0:t.id);return Promise.resolve(r._httpClient.get("/consents/unified/"+n,{headers:r._getRegionHeaders}))}catch(e){return Promise.reject(e)}},t.saveProfile=function(e){var t=e.email,r=e.profile;try{return Promise.resolve(this._httpClient.post("/subjects/profile",{email:t,profile:r})).then((function(e){return e.verifiedId}))}catch(e){return Promise.reject(e)}},t.verifySubjectProfile=function(e){var t=e.email,r=e.verificationCode;try{return Promise.resolve(this._httpClient.post("/subjects/profile/verify",{email:t,code:r})).then((function(e){return e.verifiedId}))}catch(e){return Promise.reject(e)}},t.hasConsents=function(e){void 0===e&&(e={});try{var t,r=this,n=e.subjectId||(null==(t=r.subject)?void 0:t.id);if(!n)throw new R("Missing subjectId");return Promise.resolve(r._httpClient.get("/consents/check/"+n,{headers:r._getRegionHeaders})).then((function(e){return e.exists}))}catch(e){return Promise.reject(e)}},t.getProfileVerificationCode=function(e){try{return Promise.resolve(this._httpClient.post("/subjects/profile/verification-code",{email:e})).then((function(e){return e.code}))}catch(e){return Promise.reject(e)}},t.getChannelConfig=function(e){try{if(!e)throw new Error("The channelId is required");return Promise.resolve(this._httpClient.get("/channels/"+e))}catch(e){return Promise.reject(e)}},d(e,[{key:"subject",get:function(){return T()}},{key:"_getRegionHeaders",get:function(){return h({},this.config.overrideCountryCode&&{"x-country-code-override":this.config.overrideCountryCode},this.config.overrideRegionCode&&{"x-region-code-override":this.config.overrideRegionCode})}}]),e}(),B=function(){function e(e){this._httpClient=void 0,this.attributes=void 0,this._httpClient=O.create(e),this.attributes=e.attributes||{}}return e.prototype.registerPrivacyProtocols=function(){try{if(!k)throw new Error("Operation only available for the browser");var e=_();return!e.id||(t=localStorage.getItem(e.id))&&JSON.parse(t)?Promise.resolve():Promise.resolve(this._httpClient.post("/consents/gpc",{subject:e,attributes:this.attributes})).then((function(){localStorage.setItem(e.id,JSON.stringify([{gpc:1}]))}))}catch(e){return Promise.reject(e)}var t},e}();!function(e){e.ConsentWrite="consent-insert-api",e.ConsentRead="consent-get-api",e.SubjectProfileManage="subject-profile-manage"}(U||(U={}));var I=function(e,t){this.accessToken=void 0,this.expiresAt=void 0,this.accessToken=e,this.expiresAt=t},L=function(){function e(){}return e.getToken=function(e,r){try{var n=this;if(0==r.length)throw new R("Must provide at least one scope type.");r.sort();var o=r.join(" ");if(n.tokenCache.has(o)&&n.tokenCache.get(o).expiresAt>new Date)return Promise.resolve(n.tokenCache.get(o).accessToken);var i=e.issuer,s=(a=e.clientId+":"+e.clientSecret,k?window.btoa(a):Buffer.from(a).toString("base64"));return Promise.resolve(t({method:"post",url:i,headers:{authorization:"Basic "+s,"Content-Type":"application/x-www-form-urlencoded"},data:"grant_type=client_credentials&scope="+o})).then((function(e){var t=e.data,r=new Date;r.setSeconds(r.getSeconds()+t.expires_in);var i=new I(t.access_token,r);return n.tokenCache.set(o,i),t.access_token}))}catch(e){return Promise.reject(e)}var a},e.createClient=function(e){return A.new(e)},e.registerPrivacyProtocols=function(e){try{return Promise.resolve(new B(e).registerPrivacyProtocols()).then((function(){}))}catch(e){return Promise.reject(e)}},e}();L.tokenCache=new Map;class M{static async detectGlobalPrivacyControl(){await L.registerPrivacyProtocols({apiUrl:"https://api.demo.cmp.wirewheel.io",apiKey:"eyJicmFuZElkIjoiMkJNQWt3ZzhEMHM0bXBKSUpMWGxzc3ptdFNLIiwiY2hhbm5lbElkIjoiMkNBemw3d0puSDNpWXhmakxwZFBiQkFydGFRIiwidGVuYW50SWQiOiI2MmJmNTJiZTc5YjM5ZGIzOGYxMzJhZDMifQ==",attributes:""})}}window.WWCMP=M,function(e){var t;t=function(){e.detectGlobalPrivacyControl()},"loading"!==document.readyState?setTimeout(t,0):document.addEventListener("DOMContentLoaded",(function e(){t(),document.removeEventListener("DOMContentLoaded",e)}))}(M)})()})();