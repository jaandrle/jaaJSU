!function(e,t){"use strict";let n;"function"==typeof define&&define.amd?define([],function(){return t(window,document)}):"undefined"!=typeof exports?module.exports=t(window,document):(n=t(window,document),Object.keys(n).forEach(e=>window[e]=n[e]),window.jaaJSU_version="0.8.5")}(0,function(e,t){"use strict";var n={};function r(e,t){n[t]=e}function i(e,t,n,r){const i=e.length;for(let a=0,o=i-1;a<i;a++,o--)r=t.call(n,{item:e[a],last:!o,key:a,share:r});return r}function a(e,t,n,r){for(let i=0;i<e.length;i++)r=t.call(n,{item:e[i],key:i,share:r});return r}function o(e){throw new Error("Missing parameter: "+e)}r({arrayIndex:function(e,t,n){return(n+e+t%n)%n},each:i,eachDynamic:a,getLast:function(e){return e[e.length-1]},partition:function(e){return{head:function(){const[t,...n]=e;return[t,n]},tail:function(){let t=[...e];const n=t.pop();return[t,n]},onIndex:function(t){let n=[...e];return[n.splice(0,t),n]},byCondition:function(t){let n=[[],[]];return i(e,({item:e,key:r})=>n[+!Boolean(t(e,r))].push(e)),n}}},removeItem:function(e,t){let n=[...e];for(var r=0;r<n.length;)n[r]===t?n.splice(r,1):r++;return n},sortRandom:function(){return Math.random()-.5}},"$array");var c={serialize:function(){const e=e=>t=>e().then((e=>Array.prototype.concat.bind(e))(t)),t=(t,n)=>t.then(e(n));return e=>e.reduce(t,Promise.resolve([]))}(),iterate_:function(e){return new Promise(function(t,n){let r=Promise.resolve();for(let t=0,n=e.length;t<n;t++)r=r.then(e[t]);r.then(t).catch(n)})},CANCEL:Symbol("$async.CANCEL"),iterateMixed_:function(...e){return new Promise(function(t,n){return function n(r){if(!e.length)return t(r);const i=e.shift(),a="function"==typeof i?i(r):i;if(null!==a){if(a===c.CANCEL)return;if(a.then)return a.then(n)}return Promise.resolve(n(a))}()})},sequention_:function(...e){return function(...t){return new Promise(function(n,r){let i=Promise.resolve(...t);for(let t=0,n=e.length;t<n;t++)i=i.then(e[t]);i.then(n).catch(r)})}},each_:function(...e){return function(...t){return Promise.all(e.map(e=>e(...t)))}}};r(c,"$async");var u={ready_:function(...e){return new Promise(function(n){"loading"!==t.readyState?n(...e):t.addEventListener("readystatechange",function r(){"loading"!==t.readyState&&(t.removeEventListener("readystatechange",r),n(...e))})})},elementReady_:function(e,n=t){const r=Object.keys(e)[0],i=e[r];return new Promise(function(e,t){requestAnimationFrame(function t(){const a=n[r](i);a?e(a):requestAnimationFrame(t)})})},empty:function(e){let t=e.childNodes.length;for(;t--;)e.removeChild(e.lastChild)},insertAfter:function(e,t){const{parentNode:n,nextSibling:r}=t;r?n.insertBefore(e,r):n.appendChild(e)},removeElements:function(e,t,n){t=t||0,n=n||e.length;let r=[],i=0;for(let a=t;a<n;a++)r[i++]=e[a];for(let e=0,t=r.length;e<t;e++)r[e].remove()},replace:function(e,t){u.insertAfter(t,e),e.remove()},toggleAttribute:function(e,t,n,r){const i=e.getAttribute(t)===n?r:n;return e.setAttribute(t,i),i},toggleDataset:function(e,t,n,r){return e.dataset[t]=e.dataset[t]===n?r:n},each:i,eachDynamic:a};const s=function(){let e={add:function(){return e},component:function(){return e},mount:t,update:n,ondestroy:r,share:{mount:t,update:n,destroy:function(){return e=null,null},ondestroy:r,isStatic:function(){return!0}}};return e;function t(e,t="childLast"){switch(t){case"replace":e.remove();break;case"replaceContent":u.empty(e)}return null}function n(){return!0}function r(){return!0}}();u.component=function(e,n,{mapUpdate:r,namespace_group:i}={}){if(!e||"EMPTY"===e||"empty"===e)return s;let a,o;"svg"===e&&(i="SVG"),"SVG"===i?(a=u.assignNS.bind(null,"SVG"),o=t.createElementNS.bind(t,"http://www.w3.org/2000/svg")):(a=u.assign,o=t.createElement.bind(t));let c=null,l=null,f=null,m=null;const d=t.createDocumentFragment();let h,A=[],g=0,p=[];let b={add:k,addText:function(e,n=0){E(n);const r=t.createTextNode(e);let i=A[g]=S().appendChild(r);return g+=1,Object.assign({oninit:function(e){return e(i),b}},b)},component:function({mount:e,update:t,isStatic:n},r=0){E(r),A[g]=e(S()),n()||(c||(c=C()),c.registerComponent(t));return g+=1,b},dynamicComponent:function(e,t,n=0){E(n);const r=S();let i=null,a=null,o=null;function c(e){a=e,o=o?a.mount(o,"replace"):a.mount(r)}return y.onupdate(b,r,e,function(e){i=t.call(r,c,a,e,i)})},setShift:function(e=0){let t;e?p.splice(p.length+1+e):(t=p.pop(),p.push(t,t));return b},mount:w,update:P,ondestroy:v,share:{mount:w,update:P,destroy:_,ondestroy:v,isStatic:function(){return!c}}},y={getReference:function(e,t){return t},on:function(e,t,...n){return n.forEach(([t,n])=>e[t].apply(this,n)),e},oninit:function(e,t,n){return n(t),e},onmount:function(e,t,n){return f||(f=new Map),f.set(t,n),e},onupdate:function(e,t,n,r){return n?(c||(c=C()),a(t,c.register(t,n,r)),e):e}};return k(e,n);function k(e,t,n=0){E(n),t=t||{};const r=o(e);g?A[g]=S().appendChild(r):h=A[0]=d.appendChild(r);let i=A[g];g+=1,a(i,t);const c=Object.assign({},b);return c.getReference=y.getReference.bind(null,c,i),c.on=y.on.bind(null,c,i),c.oninit=y.oninit.bind(null,c,i),c.onmount=y.onmount.bind(null,c,i),c.onupdate=y.onupdate.bind(null,c,i),c}function w(e,t="childLast"){m&&m.disconnect();const n=!d.firstChild&&h?h:d;let r;switch(t){case"replace":r=e.parentNode,u.replace(e,n);break;case"replaceContent":u.empty(e),e.appendChild(n),r=e;break;case"before":(r=e.parentNode).insertBefore(n,e);break;case"after":u.insertAfter(n,e),r=e.parentNode;break;default:"childFirst"===t&&e.childNodes.length?e.insertBefore(n,e.childNodes[0]):e.appendChild(n),r=e}return(m=new MutationObserver(e=>e.forEach(function(e){if(!e.removedNodes||-1===Array.prototype.indexOf.call(e.removedNodes,h))return!1;_()}))).observe(r,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),f&&(f.forEach(function(n,r){return a(r,n.call(r,e,t))}),f=void 0),h}function _(){return l&&l.forEach(e=>e.call(h)),h&&(h.remove(),A=[]),m&&m.disconnect(),m=void 0,l=void 0,a=void 0,o=void 0,h=void 0,c=void 0,b=void 0,y=void 0,null}function v(e){return l||(l=new Set),l.add(e),b}function E(e){e?(p.splice(p.length+1+e),p[p.length-1]=g):p.push(g)}function S(){return A[p[p.length-2]]||d}function C(){const e={},t=[],n=new Map,i=new Map,o=new Map;let c=0;return{register:function(t,r,a){Object.assign(e,r);const c=s(n,t)+"_"+s(i,a),u=Object.keys(r);for(let e,t=0,n=u.length;t<n;t++)e=u[t],o.has(e)?o.get(e).push(c):o.set(e,[c]);return a.call(t,r)||{}},registerComponent:function(e){-1===t.indexOf(e)&&t.push(e)},update:function(c){const s="function"==typeof r?r(c):c;let l=!1;for(let e=0,n=t.length;e<n;e++)t[e](s)&&!l&&(l=!0);if(!o.size)return l;const f=Object.keys(s).filter(t=>o.has(t)&&e[t]!==s[t]),m=f.length;if(!m)return l;Object.assign(e,s);const d=[];for(let e,t=0;t<m;t++)for(let n,r=0,i=(e=o.get(f[t])).length;r<i;r++)n=e[r],-1===d.indexOf(n)&&d.push(n);for(let e=0,t=d.length;e<t;e++)h(d[e]);return!0;function h(t){const[r,o]=t.split("_").map(Number),c=n.get(r),s=i.get(o).call(c,e)||{};if(null===c.parentNode)return u(r,o,f);a(c,s)}},getData:function(){return e},unregister:u};function u(e,t,r){let a=0;function c(t){return Number(t.split("_")[0])!==e}n.delete(e),o.forEach(function(e,n){if(-1===r.indexOf(n))return e.forEach(function(e){Number(e.split("_")[1])===t&&(a+=1)});1===e.length?o.delete(n):o.set(n,e.filter(c))}),a||i.delete(t)}function s(e,t){let n=-1;return e.forEach(function(e,r){-1===n&&e===t&&(n=r)}),-1!==n?n:(n=c++,e.set(n,t),n)}}function P(e){return!!c&&c.update("function"==typeof e?e(c.getData()):e)}},u.componentListener=function(e,...t){const n=["oninit","onmount","onupdate"],r=n.indexOf((/^on/g.test(e)?"":"on")+e);if(-1===r)throw new Error(`Unsupported event name '${e}'!`);return Object.freeze([n[r],t])},u.assign=function(e,...t){const n=Object.assign({},...t),r=Object.keys(n);for(let t,i,a=0,o=r.length;a<o;a++)if(void 0!==(i=n[t=r[a]]))switch(t){case"style":if("string"==typeof i)e.setAttribute("style",i);else for(let t,n=0,r=Object.keys(i),a=r.length;n<a;n++)t=r[n],e.style.setProperty(t,i[t]);break;case"style_vars":for(let t,n=0,r=Object.keys(i),a=r.length;n<a;n++)t=r[n],e.style.setProperty(t,i[t]);break;case"classList":if(!e[t].toggle)break;for(let t,n,r=0,a=Object.keys(i),o=a.length;r<o;r++)-1===(n=i[t=a[r]])?e.classList.toggle(t):e.classList.toggle(t,Boolean(n));break;case"dataset":for(let t,n=0,r=Object.keys(i),a=r.length;n<a;n++)t=r[n],e.dataset[t]=i[t];break;case"href":e.setAttribute(t,i);break;default:e[t]=i}else Reflect.has(e,t)&&Reflect.deleteProperty(e,t);return e},u.assignNS=function(e,n,...r){const i=/^on[a-z]+/,a=Object.assign({},...r),o=Object.keys(a);for(let e,r,c=0,u=o.length;c<u;c++)if(void 0!==(r=a[e=o[c]]))switch(e){case"textContent":n.appendChild(t.createTextNode(r));break;case"style":if("string"==typeof r)n.setAttributeNS(null,"style",r);else for(let e,t=0,i=Object.keys(r),a=i.length;t<a;t++)e=i[t],n.style.setProperty(e,r[e]);break;case"style_vars":for(let e,t=0,i=Object.keys(r),a=i.length;t<a;t++)e=i[t],n.style.setProperty(e,r[e]);break;case"className":n.setAttributeNS(null,"class",r);break;case"classList":if(!n[e].toggle)break;for(let e,t,i=0,a=Object.keys(r),o=a.length;i<o;i++)-1===(t=r[e=a[i]])?n.classList.toggle(e):n.classList.toggle(e,Boolean(t));break;case"xlink:href":n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;default:i.test(e)?n[e]=r:n.setAttributeNS(null,e,r)}else n.hasAttributeNS(null,e)&&n.removeAttributeNS(null,e);return n},u.add=function(e,n){let r=t.createDocumentFragment(),i=[],a=[];for(var o=0,c=n.length;o<c;o++)i[o]=t.createElement(n[o][0]),o?void 0!==n[o][1].$?(a[o]=a[n[o][1].$].appendChild(i[o]),delete n[o][1].$):a[o]=a[o-1].appendChild(i[o]):a[o]=r.appendChild(i[o]),u.assign(a[o],n[o][1]);if(e.appendChild(r),o)return a[0]},u.forceRedraw=function(e=t.body){let n=e.style.display;e.style.display="none";e.offsetHeight;e.style.display=n},r(u,"$dom");var l={arguments:function(e,...t){return t.length?function(...n){return e.apply(this,t.map(e=>n[e]))}:function(...t){return e.apply(this,t)}},branches:function(e=((e,t)=>(e.push(t),e)),t=(()=>[])){return function(...n){return function(...r){return n.reduce((t,n)=>e(t,n(...r)),"function"==typeof t?t():t)}}},call:function(...e){return function(t){return t.call(this,...e)}},conditionalCall:function(e,t){return!!e&&("function"==typeof t?t(e):e)},constant:e=>()=>e,each:function(...e){return function(t){for(let n=0,r=e.length;n<r;n++)e[n](t)}},exception:function(e){throw e},exceptionError:function(e){throw new Error(e)},gather:function(e,...t){return t.length?function(...n){return n.splice(...t),e.call(this,n)}:function(...t){return e.call(this,t)}},identity:e=>e,ifElse:function(e,t=(e=>e),n=Boolean){return function(...r){return n(...r)?e(...r):"function"==typeof t?t(...r):void 0}},partial:function(e,...t){return function(...n){return e.call(this,...t,...n)}},schedule:function(t,{context:n=e,delay:r=150}={}){h.timeoutAnimationFrame(function e(){t.shift().call(n),t.length>0&&h.timeoutAnimationFrame(e,r)},r)},self:function(){return this},spread:function(e,...t){return t.length?function(n=[]){return n.splice(...t),e.apply(this,n)}:function(t=[]){return e.apply(this,t)}},sequention:function(...e){return function(t){let n=t;for(let t=0,r=e.length;t<r;t++)n=e[t].call(this,n);return n}},sequentionCatch:function(e=l.identity){return function(t){return e(t)}},sequentionTry:function(...e){const t=e.length;return function(n){let r=n,i=!1;for(let n,a=0;a<t;a++)if(n="__sequentionCatchInner__"===e[a].name,i&&n)try{r=e[a](r),i=!1}catch(e){r=e}else if(!i&&!n)try{r=e[a](r)}catch(e){r=e,i=!0}if(i)throw r;return r}}};r(l,"$function"),r({each:function(e,t,n,r){const i=Object.keys(e);for(let a,o=0,c=i.length;o<c;o++)a=i[o],r=t.call(n,{item:e[a],key:a,index:o,share:r});return r},eachDynamic:function(e,t,n){let r;for(let i in e)e.hasOwnProperty(i)&&(r=t.call(n,{item:e[i],key:i,target:e,share:r}));return r},fromArray:function(e,t=((e,t,n)=>e[""+n]=t),n={}){return e.reduce((e,n,r)=>(t(e,n,r),e),n)},hasProp:function(e=o("obj"),t=o("prop")){return Object.prototype.hasOwnProperty.call(e,t)},immutable_keys:function(e={}){return new Proxy(Object.keys(e).reduce(function(t,n){return t[n]=e[n],t},{}),{get(e,t){if(-1!==Object.keys(e).indexOf(t))return e[t];switch(t){case"set":return function(e){return function(t,n){return-1===Object.keys(e).indexOf(t)&&(e[t]=n,!0)}}(e);case"keys":return function(){return Object.keys(e)};default:return}},set:()=>!1})},method:(e,...t)=>n=>n[e](...t),methodFrom:e=>t=>(...n)=>e[t](...n),pluck:e=>t=>t[e],pluckFrom:e=>t=>e[t],setter:(e,t)=>n=>(n[e]=t,n),setterFrom:e=>t=>n=>(e[t]=n,e)},"$object");const[f,m]=(e=>{if(typeof requestIdleCallback==="function")return[requestIdleCallback,cancelIdleCallback];class t{constructor(e){this._init_time=e}get didTimeout(){return!1}timeRemaining(){return Math.max(0,50-(n()-this._init_time))}}return[function(e){const r=new t(n());return setTimeout(()=>e(r),0)},function(e){clearTimeout(e)}];function n(){return+new Date}})();class d{constructor(e,t="IdleValue: `init` argument for class constructor must be a function!"){if("function"!=typeof e)throw new TypeError(t);this._init=e,this._value=void 0,this._idleHandle=f(this.initValue.bind(this))}initValue(){return this._init?(this._value=this._init(),this._init=void 0,this._value):this._value}value(){return void 0!==this._value?this._value:(this.cancel(),this.initValue())}cancel(){return this._idleHandle&&(m(this._idleHandle),this._idleHandle=void 0),this._value}}d.throwErrorIfNotIdleValue=function(e,t){if(e instanceof d)return!0;throw new Error(t)};var h={debounce:function(e,t,n){var r,i,a,o;return t||(t=150),function(){a=this,i=[].slice.call(arguments,0),o=new Date;let c=function(){let u=new Date-o;u<t?r=setTimeout(c,t-u):(r=null,n||e.apply(a,i))};n&&!r&&e.apply(a,i),r||(r=setTimeout(c,t))}},trottle:function(e,t){t||(t=1);var n,r,i,a=0;function o(){a===t?(a=0,cancelAnimationFrame(i)):i=requestAnimationFrame(o)}return function(){r=this,n=[].slice.call(arguments,0),a||(a++,e.apply(r,n),i=requestAnimationFrame(o))}},poll_:function(e,t,n){var r=Number(new Date)+(t||2e3);n=n||100;var i=function(t,a){var o=e();o?t(o):Number(new Date)<r?setTimeout(i,n,t,a):a(new Error("timed out for "+e+": "+arguments))};return new Promise(i)},once:function(e,t){var n;return function(){return e&&(n=e.apply(t||this,arguments),e=null),n}},timeoutAnimationFrame:function(e,t=150){setTimeout(requestAnimationFrame.bind(null,e),t)},requestAnimationFrame_:function(){return new Promise(function(e){requestAnimationFrame(e)})},setTimeout_:function(e=0){return(...t)=>new Promise(function(n){setTimeout(n,e,...t)})},setIdleValue:function(e){return new d(e,"`setIdleValue`: `initFunction` argument must be a function!")},getIdleValue:function(e){if(d.throwErrorIfNotIdleValue(e,"`getIdleValue`: Argument `idle_value` is not `IdleValue`!"))return e.value()},clearIdleValue:function(e){d.throwErrorIfNotIdleValue(e,"`clearIdleValue`: Argument `idle_value` is not `IdleValue`!")&&e.cancel()}};return r(h,"$optimiziers"),r({clearSpaces:function(e){return"string"==typeof e&&e.replace(/\s+/g,"")},countChars:function(e){if("string"!=typeof e)return!1;const t=e.length;let n,r=0;for(let i=0;i<t;i++)r+=94==(n=e.charCodeAt(i))||n>127?2:1;return r},generateUnique:()=>(new Date).getTime()+"_"+(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,(""+Math.random()).charAt(0)).substr(0,10),getSubstring:function(e,t,n=0){return n<0&&(n=0),e.length>t+n&&(e=e.substring(n,t)),e},letterInc:function(e,t,n){void 0===n&&(n=e.length-1);let r,i,a=e.charCodeAt(n);return t||(t=1),a?a<65?a=65:a>90&&a<97?a=97:a>122&&(a=122):a=0,r=a+t,(i=!(0===a||r<65)&&(!(r>90&&r<97)&&(!(r>122)&&String.fromCharCode(r))))&&(e=e.substr(0,n)+i+e.substr(n+1)),e},escapeHTML:function(e){var t={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"};return e.replace(/[<>&"]/g,e=>t[e])},clearHTML:function(e){var n=t.createElement("div");return n.innerHTML=e,n.textContent},concatLeft:function(e){return function(t){return String(t)+e}},concatRight:function(e){return function(t){return String(e)+t}},containsRepeatingChars:function(e,t=2){if("string"!=typeof e)return!1;let n=new RegExp("(\\S)(\\1{"+t+",})","g");return e=e.replace(/\s+/g,"_"),n.test(e)},containsSequential:function(e,t){if("string"!=typeof e)return!1;t=t||2;let n=!1,r=+e[0],i=1;for(let a=1,o=e.length;a<o;a++)+e[a]-i!==r||n?n||(r=+e[a],i=1):++i>t&&(n=!0);if(!n){r=String.fromCharCode(e.charCodeAt(0)),i=1;for(let a=1,o=e.length;a<o;a++)this.letterInc(String.fromCharCode(e.charCodeAt(a)),-i)!==r||n?n||(r=String.fromCharCode(e.charCodeAt(a)),i=1):++i>t&&(n=!0)}return n},isEmail:function(e){let t=e.split("@");if(2!==t.length)return!1;if((t=[t[0],...t[1].split(".")]).length<3)return!1;const n=!/(#|\?|!|\\|\/|\||\.\.)/i.test(t[0]);return n&&t.reduce((e,t)=>e&&t.length>1&&!/\s/.test(t),n)},isFilled:function(e){return"string"==typeof e&&(!!e.trim()&&e)},template:function(e,t=Object.keys){if("string"!=typeof e)throw Error("Type of 'str' is not string!");const n=/\$\{([\s]*[^;\s\{]+[\s]*)\}/g,r=Object.freeze({partial:function(t={}){return e=i(t),r},partialRest:function(...t){let i=0,a=t.length;return e=e.replace(n,function(e){return i++<a?t[i-1]:e}),r},setKeysFilter:function(e){return t=e,r},isSubstituted:function(){return!n.test(e)},execute:i});return r;function i(r={}){const i=t(r);return i.length?e.replace(n,function(e,t){return-1!==i.indexOf(t)?r[t]:e}):e}},toCamelCase:function(e){if("string"!=typeof e)throw Error("Type of 'str' is not string!");if(!e)return e;let[t,...n]=e.split("");return[t.toUpperCase(),...n].join("")}},"$string"),r(function(){const e=(({time:e,date:t,seconds:n})=>({time:e,date:t,time_seconds:Object.assign(n,e),date_time:Object.assign({},e,t),date_time_seconds:Object.assign({},Object.assign(n,e),t)}))({time:{hour:"2-digit",minute:"2-digit"},date:{year:"numeric",day:"2-digit",month:"2-digit"},seconds:{second:"2-digit"}}),t=(({dash:e,colon:t,space:n,two_dig:r})=>({SQL_DATE:[["year","numeric"],e,["month",r],e,["day",r]],SQL_TIME:[["hour",r,"h23"],t,["minute",r],t,["second",r]],SQL:[["year","numeric"],e,["month",r],e,["day",r],n,["hour",r,"h23"],t,["minute",r],t,["second",r]]}))({dash:["text","-"],colon:["text",":"],space:["text"," "],two_dig:"2-digit"}),n=["th","st","nd","rd"],r=e=>-1!==e.indexOf("-"),i=e=>-1!==e.indexOf("T");let a="en-GB",o="";const c=Object.freeze(["Africa/Abidjan","Africa/Accra","Africa/Algiers","Africa/Bissau","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/El_Aaiun","Africa/Johannesburg","Africa/Juba","Africa/Khartoum","Africa/Lagos","Africa/Maputo","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Asuncion","America/Atikokan","America/Bahia_Banderas","America/Bahia","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson_Creek","America/Dawson","America/Denver","America/Detroit","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Chicago","America/Chihuahua","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port_of_Spain","America/Port-au-Prince","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Chita","Asia/Choibalsan","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Budapest","Europe/Bucharest","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Helsinki","Europe/Chisinau","Europe/Istanbul","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Saratov","Europe/Simferopol","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zaporozhye","Europe/Zurich","Indian/Cocos","Indian/Chagos","Indian/Christmas","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Reunion","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Chatham","Pacific/Chuuk","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis"]),u=Object.freeze({"-01:00":238,"-02:00":242,"-03:00":107,"-04:00":49,"-05:00":92,"-06:00":62,"-07:00":120,"-08:00":337,"-09:00":320,"-09:30":330,"-10:00":323,"-11:00":332,"+01:00":15,"+02:00":8,"+03:00":270,"+04:00":306,"+04:30":191,"+05:00":221,"+05:30":173,"+05:45":194,"+06:00":207,"+06:30":232,"+07:00":182,"+08:00":220,"+08:30":210,"+08:45":249,"+09:00":176,"+09:30":248,"+10:00":229,"+11:00":314,"+12:00":345,"+13:00":316,"+14:00":326,BST:275,CET:284,CEST:284,EET:264,EEST:264,WET:274,WEST:274});function s(e){return f(e.toISOString())}function l(){return f((new Date).toISOString())}function f(e){let t,n,r="",i="",a="",o="";for(;e.length;)t=e[0],/\d/.test(t)?e.search(/\d\d\d\d-\d\d-\d\d/)?e.search(/\d\d\/\d\d\/\d\d\d\d/)?e.search(/\d\d:\d\d:\d\d/)?e.search(/\d\d:\d\d/)?e=e.substr(1):(i="T"+e.substr(0,5)+":00",e=e.substr(5)):(i="T"+e.substr(0,8),e=e.substr(8)):(r=e.substr(0,10).split("/").sort(()=>-1).join("-"),e=e.substr(10)):(r=e.substr(0,10),e=e.substr(10)):/[ ,\._]/.test(t)||/T\d/.test(t)?e=e.substr(1):e.search(/[\+\-]\d\d:\d\d/)?e.search(/[A-Z]{2,}/)?"Z"===t?(a="Z",e=e.substr(1)):e=e.substr(1):(o=-1===(n=e.search(/[^A-Z]/))?e:e.substr(0,n),e=e.substr(o.length),"CET"===o&&(a=o,o="")):(o=e.substr(0,6),e=e.substr(6),Reflect.has(u,o)?(a=o,o=""):"00:00"===o.substr(1,5)&&(a="Z",o="")),r&&i&&a&&(e="");return[r,i,a]}function m(e=t.SQL,{locale:n=a,declension:r=!0,timeZone:i=o}={}){return t=>e.map(function(e,t,n,r){const i=k.bind(null,n);return function([a,o,c]){let u=function(e,t,n,r,i,a,o,c){switch(!0){case"text"===t:return n;case"week"===t:return S(o?new Date(((e,t,n)=>e({timeZone:t,year:"numeric"})+"-"+P(e({timeZone:t,month:n}))+"-"+P(e({timeZone:t,day:n}))+"T"+P(e({timeZone:t,hour:n}))+":"+P(e({timeZone:t,minute:n}))+":"+P(e({timeZone:t,second:n})))(Date.prototype.toLocaleString.bind(e,"en-GB"),o,"2-digit")):e);case"weekday"===t&&"numeric"===n:return E()(e);case"month"===t&&"long"===n&&i:return e.toLocaleString(a,c({[t]:n,day:"numeric"})).replace(/[\d \.\/\\]/g,"");case"hour"===t&&"a"===r.toLowerCase():return e.toLocaleString("A"===r?"en-US":"en-GB",c({[t]:n,hourCycle:"h12"})).replace(/[\d \.\/\\]/g,"");case"hour"===t:return e.toLocaleString(a,c({[t]:n,hourCycle:r})).replace(/[ \.\/\\pam]/gi,"");default:return e.toLocaleString(a,c({[t]:n}))}}(e,a,o,c,r,t,n,i);return"2-digit"===o&&1===String(u).length&&(u="0"+u),"two_letters"===c?u=u.substr(0,2):"ordinal_number"===c&&-1!==t.indexOf("en")&&(u=T(u)),u}}(d(t),n,i,r)).join("")}function d([e,t,n]=[]){return e||(e=l()[0]),t||(t="T00:00:00"),n||(n=y(e)),"CET"===n&&(n=g([e,t])),new Date(e+t+n)}function h(e,t=1){const n=!!e&&d(e).getTime();return function(e){return(d(e).getTime()-(n||d(l()).getTime()))/t}}function A(e){const{abs:t,floor:n,round:r}=Math,i=e<0?"%s ago":"in %s";return(e=t(e))<1500?"now":(e=n(e/1e3))<10?i.replace("%s","a few seconds"):e<60?i.replace("%s",e+" seconds"):1===(e=n(e/60))?i.replace("%s","a minute"):e<60?i.replace("%s",e+" minutes"):1===(e=r(e/60))?i.replace("%s","an hour"):e<24?i.replace("%s",e+" hours"):1===r(e/=24)?i.replace("%s","a day"):e<29.5?i.replace("%s",r(e)+" days"):1===r(e/=30.41666)?i.replace("%s","a month"):e<12?i.replace("%s",r(e)+" months"):1===(e=r(e/12))?i.replace("%s","a year"):i.replace("%s",e+" years")}function g([e,t]=[]){if(!e||!t){let n=l();e||(e=n[0]),t||(t=n[1].replace(/\.\d+/,""))}const n=e+t,r=e.split("-").reverse().join("/")+", "+t.replace("T",""),[i,a]=["+01:00","+02:00"].map(e=>new Date(n+e).toLocaleString("en-GB",{timeZone:"Europe/Prague"}));return r===i?"+01:00":r===a?"+02:00":"Z"}function p(e,{locale:t=a,description:n="long",offset:r=!1}={}){n=n.toLocaleLowerCase();const[i,o,s]=w(e),l=new Date([i,o,s].join("")),f=-1!==Object.keys(u).indexOf(s)?{timeZone:c[u[s]]}:{};let m="none"===n?"":l.toLocaleString(t,Object.assign({timeZoneName:n},f)).replace(l.toLocaleString(t,f),"").trim();const d=r?"UTC"+("Z"===s?_(l.getTimezoneOffset()):l.toLocaleString(t,Object.assign({timeZoneName:"short"},f)).replace(l.toLocaleString(t,f),"").replace(/[^\d\+\-\:]/g,"").trim()):"";return m&&d&&(m=" ("+m+")"),d+m}function b(e,t=o){const n=new Date(w(e).join(""));return t?function(e,t=o){const[n="+",r=0,i=0]=e.toLocaleString("en-GB",{timeZone:t,weekday:"short",timeZoneName:"short"}).replace(/(\+|\-)/g,(e,t)=>t+":").replace(/[^\d:\+\-]/g,"").split(":");return("-"===n?-1:1)*(60*Number(r)+Number(i))+e.getTimezoneOffset()}(n,t):n.getTimezoneOffset()}function y(e){return _(b(e))}function k(e,t){return e?-1!==c.indexOf(e)?Object.assign({timeZone:e},t):void 0!==u[e]?Object.assign({timeZone:c[u[e]]},t):t:t}function w(e){return e?Array.isArray(e)?e:f(e):l()}function _(e){const{floor:t,abs:n}=Math;let r=e>0?"-":"+";return r+=P(t((e=n(e))/60))+":"+P(e%60)}function v(e){return t=>(t.setDate(t.getDate()+e),t)}function E(e="numeric",{locale:t=a,timeZone:n=o}={}){return"numeric"===e?e=>e.getDay():r=>r.toLocaleString(t,{timeZone:n,weekday:e})}function S(e){const t=new Date(e.valueOf());t.setDate(t.getDate()+3-(e.getDay()+6)%7);var n=t.valueOf();return t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7),1+Math.ceil((n-t)/6048e5)}function C(e,t,n){const r=e.substr(3);return n["set"+r](n["get"+r]()+t),n}function P(e){return 1===(e=String(e)).length?"0"+e:e}function M(e,t=(new Date).getFullYear()){return new Date(+t,+e,0).getDate()}function T(e){const t="number"==typeof e?e:parseInt(e);if(isNaN(t))return e;let r=t%100;return e+(n[(r-20)%10]||n[r]||n[0])}return{_:void 0,fromNow:l,fromString:function(e,t=o){if(!e)return l();let n=f(e);return 3!==n.length?r(n[0])?i(n[1])?n[2]=t:(n[2]=n[1]||t,n[1]=""):n.unshift(""):!n[2]&&t&&(n[2]=t),n},fromDate:s,fromDateArguments:function(...e){return f((e.filter(e=>void 0!==e).length?new Date(...e):new Date).toISOString())},toDate:d,toString:function(e,t){return m(Array.isArray(e)?e:e?function(e=""){let t,n,r=[];for(;e.length;)switch(e[0]){case"M":i();break;case"d":a();break;case"W":c("week","W");break;case"Y":o();break;case"D":c("day","D");break;case"H":u("hour","H","h23");break;case"k":u("hour","k","h24");break;case"h":u("hour","h","h12");break;case"A":s("A");break;case"a":s("a");break;case"m":l("minute","m");break;case"s":l("second","s");break;case"[":f();break;default:n=e[0],(t=r.length-1)>-1&&"text"===r[t][0]?r[t][1]+=n:r.push(["text",n]),e=e.substring(1)}function i(){let t="numeric";if(e.search(/MMMM/))if(e.search(/MMM/))if(e.search(/MM/)){if(!e.search(/Mo/))return e=e.substring(2),r.push(["month",t,"ordinal_number"]);e=e.substring(1)}else t="2-digit",e=e.substring(2);else t="short",e=e.substring(3);else t="long",e=e.substring(4);r.push(["month",t])}function a(){let t="numeric";if(e.search(/dddd/))if(e.search(/ddd/)){if(!e.search(/dd/))return t="short",e=e.substring(2),r.push(["weekday",t,"two_letters"]);e=e.substring(1)}else t="short",e=e.substring(3);else t="long",e=e.substring(4);r.push(["weekday",t])}function o(){let t="2-digit";e.search(/YYYY/)?e=e.substring(2):(t="numeric",e=e.substring(4)),r.push(["year",t])}function c(t,n){let i="numeric";if(!e.search(new RegExp(n+"o")))return e=e.substring(2),r.push([t,i,"ordinal_number"]);e.search(new RegExp(n+n))?e=e.substring(1):(i="2-digit",e=e.substring(2)),r.push([t,i])}function u(t,n,i){let a="numeric";e.search(new RegExp(n+n))?e=e.substring(1):(a="2-digit",e=e.substring(2)),r.push([t,a,i])}function s(t){e=e.substring(1),r.push(["hour","numeric",t])}function l(t,n){let i="numeric";e.search(new RegExp(n+n))?e=e.substring(1):(i="2-digit",e=e.substring(2)),r.push([t,i])}function f(){const t=e.indexOf("]");if(-1===t)return e=e.substring(1),!1;r.push(["text",e.substr(1,t-1)]),e=e.substr(t+1)}return r}(e):void 0,t)},toLocaleString:function(t="date_time",{locale:n=a,timeZone:r=o}={}){return i=>d(i).toLocaleString(n,k(r,e[t]))},toRelative:function(e){return t=>A(h(e)(t))},getDiff:function(e,t="seconds",n=!1){const r=h(e,-{seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:24192e5,years:290304e5}[t]);return function(e){const t=r(e);return n?t:Math.floor(t)}},getRelative:A,getCETOffset:g,getTimeZoneOffset:b,getTimeZoneOffsetString:y,getTimeZone:p,getCurrentTimeZone:function({locale:e=a,description:t="long",offset:n=!1}={}){if("ianna"!==(t=t.toLocaleLowerCase()))return p(void 0,{locale:e,description:t,offset:n});let r,i,o="";if("undefined"!=typeof Intl&&"function"==typeof Intl.DateTimeFormat){if("function"!=typeof(r=Intl.DateTimeFormat()||{}).resolvedOptions)return;i=r.resolvedOptions().timeZone,o=-1!==Object.keys(u).indexOf(i)?c[u[i]]:i}const s=n?p(void 0,{locale:e,description:"none",offset:!0}):"";return o&&s&&(o=" ("+o+")"),s+o},Date:{getWeekDay:E,getWeekNumber:S,addDays:v,addMonths:function(e){return t=>(t.setMonth(t.getMonth()+e),t)}},redefineTimeZone:function(e=o){return([t="",n=""]=[])=>[t,n,e]},modify:function(e){const t=Object.keys(e);return function(n){const r=d(n);for(let n,i=0;n=t[i];i++)"addDays"===n?v(e[n])(r):"add"===n.substr(0,3)?C(n,e[n],r):"setMonth"===n?r.setMonth(e[n]-1):Reflect.has(r,n)?r[n](e[n]):"setDay"===n&&r.setDate(e[n]);return s(r)}},double:P,getOrdinalSuffix:T,getMonthName:function(e,t){if("number"!=typeof e&&(e=parseInt(e)),isNaN(e))return!1;let n=["December","January","February","March","April","May","June","July","August","September","October","November"][e%12];return t&&(-1===t&&(t=3,4===n.length&&(t=4)),n=n.substring(0,t)),n},getDaysInMonth:function([e=l()[0]]=[]){const[t,n,r]=e.split("-").map(Number);return M(n,r)},daysInMonth:M,getTimeZones:()=>c,isTimeZone:e=>-1!==c.indexOf(e),setInternalZone:e=>o=e,setInternalLocale:e=>a=e,formats:t}}(),"$time"),n});