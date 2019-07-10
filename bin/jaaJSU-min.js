!function(e,t){"use strict";let n;"function"==typeof define&&define.amd?define([],function(){return t(window,document)}):"undefined"!=typeof exports?module.exports=t(window,document):(n=t(window,document),Object.keys(n).forEach(e=>window[e]=n[e]),window.jaaJSU_version="0.5.2")}(0,function(e,t){"use strict";var n={};function a(e,t){n[t]=e}function r(e){return(t,n,a)=>r=>e(r,t,n,a)}function i(e,t,n,a){const r=e.length;for(let i=0,o=r-1;i<r;i++,o--)a=t.call(n,{item:e[i],last:!o,key:i,share:a});return a}function o(e,t,n,a){for(let r=0;r<e.length;r++)a=t.call(n,{item:e[r],key:r,share:a});return a}function c(e){throw new Error("Missing parameter: "+e)}a({arrayIndex:function(e,t,n){return(n+e+t%n)%n},each:i,eachFun:r(i),eachDynamic:o,eachDynamicFun:r(o),getLast:function(e){return e[e.length-1]},partition:function(e){return{head:function(){const[t,...n]=e;return[t,n]},tail:function(){let t=[...e];const n=t.pop();return[t,n]},onIndex:function(t){let n=[...e];return[n.splice(0,t),n]},byCondition:function(t){let n=[[],[]];return i(e,({item:e,key:a})=>n[+!Boolean(t(e,a))].push(e)),n}}},removeItem:function(e,t){let n=[...e];for(var a=0;a<n.length;)n[a]===t?n.splice(a,1):a++;return n},sortRandom:function(){return Math.random()-.5}},"$array");var s={serialize:function(){const e=e=>t=>e().then((e=>Array.prototype.concat.bind(e))(t)),t=(t,n)=>t.then(e(n));return e=>e.reduce(t,Promise.resolve([]))}(),iterate_:function(e){return new Promise(function(t,n){let a=Promise.resolve();for(let t=0,n=e.length;t<n;t++)a=a.then(e[t]);a.then(t).catch(n)})},CANCEL:Symbol("$async.CANCEL"),iterateMixed_:function(...e){return new Promise(function(t,n){return function n(a){if(!e.length)return t(a);const r=e.shift(),i="function"==typeof r?r(a):r;if(null!==i){if(i===s.CANCEL)return;if(i.then)return i.then(n)}return Promise.resolve(n(i))}()})},sequention_:function(...e){return function(...t){return new Promise(function(n,a){let r=Promise.resolve(...t);for(let t=0,n=e.length;t<n;t++)r=r.then(e[t]);r.then(n).catch(a)})}},each_:function(...e){return function(...t){return Promise.all(e.map(e=>e(...t)))}}};a(s,"$async");var u={ready_:function(...e){return new Promise(function(n){"loading"!==t.readyState?n(...e):t.addEventListener("readystatechange",function a(){"loading"!==t.readyState&&(t.removeEventListener("readystatechange",a),n(...e))})})},elementReady_:function(e,n=t){const a=Object.keys(e)[0],r=e[a];return new Promise(function(e,t){requestAnimationFrame(function t(){const i=n[a](r);i?e(i):requestAnimationFrame(t)})})},empty:function(e){let t=e.childNodes.length;for(;t--;)e.removeChild(e.lastChild)},insertAfter:function(e,t){const{parentNode:n,nextSibling:a}=t;a?n.insertBefore(e,a):n.appendChild(e)},removeElements:function(e,t,n){t=t||0,n=n||e.length;let a=[],r=0;for(let i=t;i<n;i++)a[r++]=e[i];for(let e=0,t=a.length;e<t;e++)a[e].remove()},replace:function(e,t){u.insertAfter(t,e),e.remove()},toggleAttribute:function(e,t,n,a){const r=e.getAttribute(t)===n?a:n;return e.setAttribute(t,r),r},toggleDataset:function(e,t,n,a){return e.dataset[t]=e.dataset[t]===n?a:n},each:i,eachFun:r(i),eachDynamic:o,eachDynamicFun:r(o)};const l=function(){const e={add:function(){return e},component:function(){return e},mount:t,update:n,share:{mount:t,update:n,destroy:function(){return null},isStatic:function(){return!0}}};return e;function t(e,t="childLast"){switch(t){case"replace":e.remove();break;case"replaceContent":u.empty(e)}return null}function n(){return!0}}();function f(e,t,n,a){const r=Object.keys(e);for(let i,o=0,c=r.length;o<c;o++)i=r[o],a=t.call(n,{item:e[i],key:i,index:o,share:a});return a}function m(e,t,n){let a;for(let r in e)e.hasOwnProperty(r)&&(a=t.call(n,{item:e[r],key:r,target:e,share:a}));return a}u.component=function(e,n,{mapUpdate:a}={}){if(void 0===e||"EMPTY"===e.toUpperCase())return l;let r=null;const i=t.createDocumentFragment();let o,c=[],s=0,f=[];const m={add:d,addText:function(e,n=0){h(n);const a=t.createTextNode(e);let r=c[s]=g().appendChild(a);return s+=1,Object.assign({oninit:function(e){return e(r),m}},m)},component:function({mount:e,update:t,isStatic:n},a=0){h(a),c[s]=e(g()),n()||(r||(r=p()),r.registerComponent(t));return s+=1,m},setShift:function(e=0){let t;e?f.splice(f.length+1+e):(t=f.pop(),f.push(t,t))},mount:A,update:y,share:{mount:A,update:y,destroy:function(){return o.remove(),null},isStatic:function(){return!r}}};return d(e,n);function d(e,n,a=0){h(a),n=n||{};const l=t.createElement(e);s?c[s]=g().appendChild(l):o=c[0]=i.appendChild(l);let f=c[s];return s+=1,u.assign(f,n),Object.assign({getReference:()=>f,oninit:function(e){return e(f),m},onupdate:function(e,t){return e?(r||(r=p()),u.assign(f,r.register(f,e,t)),m):m}},m)}function A(e,t="childLast"){switch(t){case"replace":u.replace(e,i);break;case"replaceContent":u.empty(e),e.appendChild(i);break;case"before":e.parentNode.insertBefore(i,e);break;case"after":u.insertAfter(i,e);break;default:"childFirst"===t&&e.childNodes.length?e.insertBefore(i,e.childNodes[0]):e.appendChild(i)}return o}function h(e){e?(f.splice(f.length+1+e),f[f.length-1]=s):f.push(s)}function g(){return c[f[f.length-2]]||i}function p(){const e={},t=[],n=new Map,r=new Map,i=new Map;let o=0;return{register:function(t,a,c){Object.assign(e,a);const s=o++;n.set(s,t);const u=Object.keys(a);for(let e,t=0,n=u.length;t<n;t++)e=u[t],i.has(e)?i.set(e,[...i.get(e),s]):i.set(e,[s]);return r.set(s,c),c.call(t,a)||{}},registerComponent:function(e){-1===t.indexOf(e)&&t.push(e)},update:function(o){const s="function"==typeof a?a(o):o;let l=!1;for(let e=0,n=t.length;e<n;e++)t[e](s)&&!l&&(l=!0);if(!i.size)return l;const f=Object.keys(s).filter(t=>i.has(t)&&e[t]!==s[t]),m=f.length;if(!m)return l;Object.assign(e,s);const d=[];for(let e,t=0;t<m;t++)for(let n,a=0,r=(e=i.get(f[t])).length;a<r;a++)n=e[a],-1===d.indexOf(n)&&d.push(n);for(let e=0,t=d.length;e<t;e++)A(d[e]);return!0;function A(t){const a=r.get(t).call(n.get(t),e)||{},i=n.get(t);if(null===i.parentNode)return c(t,f);u.assign(i,a)}},getData:function(){return e},unregister:c};function c(e,t){r.delete(e),n.delete(e);for(let e,n,r=0,o=t.length;r<o;r++)e=t[r],1===(n=i.get(e)).length?i.delete(e):i.set(e,n.filter(a));function a(t){return t!==e}}}function y(e){return!!r&&r.update("function"==typeof e?e(r.getData()):e)}},u.add=function(e,n){let a=t.createDocumentFragment(),r=[],i=[];for(var o=0,c=n.length;o<c;o++)r[o]=t.createElement(n[o][0]),o?void 0!==n[o][1].$?(i[o]=i[n[o][1].$].appendChild(r[o]),delete n[o][1].$):i[o]=i[o-1].appendChild(r[o]):i[o]=a.appendChild(r[o]),u.assign(i[o],n[o][1]);if(e.appendChild(a),o)return i[0]},u.assign=function(e,t){const n=Object.keys(t);for(let a,r,i=0,o=n.length;i<o;i++)if(void 0!==(r=t[a=n[i]]))switch(a){case"style":if("string"==typeof r)e.setAttribute("style",r);else for(let t,n=0,a=Object.keys(r),i=a.length;n<i;n++)t=a[n],e.style.setProperty(t,r[t]);break;case"style_vars":for(let t,n=0,a=Object.keys(r),i=a.length;n<i;n++)t=a[n],e.style.setProperty(t,r[t]);break;case"classList":if(!e[a].toggle)break;for(let t,n,a=0,i=Object.keys(r),o=i.length;a<o;a++)-1===(n=r[t=i[a]])?e.classList.toggle(t):e.classList.toggle(t,Boolean(n));break;case"dataset":for(let t,n=0,a=Object.keys(r),i=a.length;n<i;n++)t=a[n],e.dataset[t]=r[t];break;case"href":e.setAttribute(a,r);break;default:e[a]=r}else Reflect.has(e,a)&&Reflect.deleteProperty(e,a)},u.forceRedraw=function(e=t.body){let n=e.style.display;e.style.display="none";e.offsetHeight;e.style.display=n},a(u,"$dom"),a({component:function(e){let t=[];const n={pipe:function(e){return t.push(e),n},run:function(n){return t.reduce((e,t)=>t(e),"function"==typeof e?e(n):n)}};return n},conditionalCall:function(e,t){return!!e&&("function"==typeof t?t(e):e)},constant:e=>()=>e,each:function(...e){return function(t){for(let n=0,a=e.length;n<a;n++)e[n](t)}},identity:e=>e,ifElse:function(e,t=(e=>e),n=Boolean){return function(...a){return n(...a)?e(...a):"function"==typeof t?t(...a):void 0}},partial:function(e,...t){return function(...n){return e.call(this,...t,...n)}},schedule:function(t,{context:n=e,delay:a=150}={}){d.timeoutAnimationFrame(function e(){t.shift().call(n),t.length>0&&d.timeoutAnimationFrame(e,a)},a)},sequention:function(...e){return function(t){let n=t;for(let t=0,a=e.length;t<a;t++)n=e[t](n);return n}}},"$function"),a({each:f,eachFun:r(f),eachDynamic:m,eachDynamicFun:r(m),fromArray:function(e,t=((e,t,n)=>e[""+n]=t),n={}){return e.reduce((e,n,a)=>(t(e,n,a),e),n)},hasProp:function(e=c("obj"),t=c("prop")){return Object.prototype.hasOwnProperty.call(e,t)},immutable_keys:function(e={}){return new Proxy(Object.keys(e).reduce(function(t,n){return t[n]=e[n],t},{}),{get(e,t){if(-1!==Object.keys(e).indexOf(t))return e[t];switch(t){case"set":return function(e){return function(t,n){return-1===Object.keys(e).indexOf(t)&&(e[t]=n,!0)}}(e);case"keys":return function(){return Object.keys(e)};default:return}},set:()=>!1})},method:(e,...t)=>n=>n[e](...t),methodFrom:e=>t=>(...n)=>e[t](...n),pluck:e=>t=>t[e],pluckFrom:e=>t=>e[t],setter:(e,t)=>n=>(n[e]=t,n),setterFrom:e=>t=>n=>(e[t]=n,e)},"$object");var d={debounce:function(e,t,n){var a,r,i,o;return t||(t=150),function(){i=this,r=[].slice.call(arguments,0),o=new Date;let c=function(){let s=new Date-o;s<t?a=setTimeout(c,t-s):(a=null,n||e.apply(i,r))};n&&!a&&e.apply(i,r),a||(a=setTimeout(c,t))}},trottle:function(e,t){t||(t=1);var n,a,r,i=0;function o(){i===t?(i=0,cancelAnimationFrame(r)):r=requestAnimationFrame(o)}return function(){a=this,n=[].slice.call(arguments,0),i||(i++,e.apply(a,n),r=requestAnimationFrame(o))}},poll_:function(e,t,n){var a=Number(new Date)+(t||2e3);n=n||100;var r=function(t,i){var o=e();o?t(o):Number(new Date)<a?setTimeout(r,n,t,i):i(new Error("timed out for "+e+": "+arguments))};return new Promise(r)},once:function(e,t){var n;return function(){return e&&(n=e.apply(t||this,arguments),e=null),n}},timeoutAnimationFrame:function(e,t=150){setTimeout(requestAnimationFrame.bind(null,e),t)}};return a(d,"$optimiziers"),a({clearSpaces:function(e){return"string"==typeof e&&e.replace(/\s+/g,"")},countChars:function(e){if("string"!=typeof e)return!1;const t=e.length;let n,a=0;for(let r=0;r<t;r++)a+=94==(n=e.charCodeAt(r))||n>127?2:1;return a},generateUnique:()=>(new Date).getTime()+"_"+(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,(""+Math.random()).charAt(0)).substr(0,10),getSubstring:function(e,t,n=0){return n<0&&(n=0),e.length>t+n&&(e=e.substring(n,t)),e},letterInc:function(e,t,n){void 0===n&&(n=e.length-1);let a,r,i=e.charCodeAt(n);return t||(t=1),i?i<65?i=65:i>90&&i<97?i=97:i>122&&(i=122):i=0,a=i+t,(r=!(0===i||a<65)&&(!(a>90&&a<97)&&(!(a>122)&&String.fromCharCode(a))))&&(e=e.substr(0,n)+r+e.substr(n+1)),e},escapeHTML:function(e){var t={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"};return e.replace(/[<>&"]/g,e=>t[e])},clearHTML:function(e){var n=t.createElement("div");return n.innerHTML=e,n.textContent},containsRepeatingChars:function(e,t=2){if("string"!=typeof e)return!1;let n=new RegExp("(\\S)(\\1{"+t+",})","g");return e=e.replace(/\s+/g,"_"),n.test(e)},containsSequential:function(e,t){if("string"!=typeof e)return!1;t=t||2;let n=!1,a=+e[0],r=1;for(let i=1,o=e.length;i<o;i++)+e[i]-r!==a||n?n||(a=+e[i],r=1):++r>t&&(n=!0);if(!n){a=String.fromCharCode(e.charCodeAt(0)),r=1;for(let i=1,o=e.length;i<o;i++)this.letterInc(String.fromCharCode(e.charCodeAt(i)),-r)!==a||n?n||(a=String.fromCharCode(e.charCodeAt(i)),r=1):++r>t&&(n=!0)}return n},isEmail:function(e){let t=e.split("@");if(2!==t.length)return!1;if(3!==(t=[t[0],...t[1].split(".")]).length)return!1;const n=!/(#|\?|!|\\|\/|\||\.\.)/i.test(t[0]);return n&&t.reduce((e,t)=>e&&t.length>1&&!/\s/.test(t),n)},isFilled:function(e){return"string"==typeof e&&(!!e.trim()&&e)},template:function(e,t=Object.keys){if("string"!=typeof e)throw Error("Type of 'str' is not string!");const n=/\$\{([\s]*[^;\s\{]+[\s]*)\}/g,a=Object.freeze({partial:function(t={}){return e=r(t),a},partialRest:function(...t){let r=0,i=t.length;return e=e.replace(n,function(e){return r++<i?t[r-1]:e}),a},setKeysFilter:function(e){return t=e,a},isSubstituted:function(){return!n.test(e)},execute:r});return a;function r(a={}){const r=t(a);return r.length?e.replace(n,function(e,t){return-1!==r.indexOf(t)?a[t]:e}):e}},toCamelCase:function(e){if("string"!=typeof e)throw Error("Type of 'str' is not string!");if(!e)return e;let[t,...n]=e.split("");return[t.toUpperCase(),...n].join("")}},"$string"),a(function(){const e=(({time:e,date:t,seconds:n})=>({time:e,date:t,time_seconds:Object.assign(n,e),date_time:Object.assign({},e,t),date_time_seconds:Object.assign({},Object.assign(n,e),t)}))({time:{hour:"2-digit",minute:"2-digit"},date:{year:"numeric",day:"2-digit",month:"2-digit"},seconds:{second:"2-digit"}}),t=(({dash:e,colon:t,space:n,two_dig:a})=>({YMDHmS_2d:[["year","numeric"],e,["month",a],e,["day",a],n,["hour",a,"h23"],t,["minute",a],t,["second",a]],YMD_2d:[["year","numeric"],e,["month",a],e,["day",a]],Hms_2d:[["hour",a,"h23"],t,["minute",a],t,["second",a]]}))({dash:["text","-"],colon:["text",":"],space:["text"," "],two_dig:"2-digit"}),n=["th","st","nd","rd"],a=e=>-1!==e.indexOf("-"),r=e=>-1!==e.indexOf("T");let i="en-GB",o="";const c=Object.freeze(["Europe/Andorra","Asia/Dubai","Asia/Kabul","Europe/Tirane","Asia/Yerevan","Antarctica/Casey","Antarctica/Davis","Antarctica/Mawson","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","America/Argentina/Buenos_Aires","America/Argentina/Cordoba","America/Argentina/Salta","America/Argentina/Jujuy","America/Argentina/Tucuman","America/Argentina/Catamarca","America/Argentina/La_Rioja","America/Argentina/San_Juan","America/Argentina/Mendoza","America/Argentina/San_Luis","America/Argentina/Rio_Gallegos","America/Argentina/Ushuaia","Pacific/Pago_Pago","Europe/Vienna","Australia/Lord_Howe","Antarctica/Macquarie","Australia/Hobart","Australia/Currie","Australia/Melbourne","Australia/Sydney","Australia/Broken_Hill","Australia/Brisbane","Australia/Lindeman","Australia/Adelaide","Australia/Darwin","Australia/Perth","Australia/Eucla","Asia/Baku","America/Barbados","Asia/Dhaka","Europe/Brussels","Europe/Sofia","Atlantic/Bermuda","Asia/Brunei","America/La_Paz","America/Noronha","America/Belem","America/Fortaleza","America/Recife","America/Araguaina","America/Maceio","America/Bahia","America/Sao_Paulo","America/Campo_Grande","America/Cuiaba","America/Santarem","America/Porto_Velho","America/Boa_Vista","America/Manaus","America/Eirunepe","America/Rio_Branco","America/Nassau","Asia/Thimphu","Europe/Minsk","America/Belize","America/St_Johns","America/Halifax","America/Glace_Bay","America/Moncton","America/Goose_Bay","America/Blanc-Sablon","America/Toronto","America/Nipigon","America/Thunder_Bay","America/Iqaluit","America/Pangnirtung","America/Atikokan","America/Winnipeg","America/Rainy_River","America/Resolute","America/Rankin_Inlet","America/Regina","America/Swift_Current","America/Edmonton","America/Cambridge_Bay","America/Yellowknife","America/Inuvik","America/Creston","America/Dawson_Creek","America/Fort_Nelson","America/Vancouver","America/Whitehorse","America/Dawson","Indian/Cocos","Europe/Zurich","Africa/Abidjan","Pacific/Rarotonga","America/Santiago","America/Punta_Arenas","Pacific/Easter","Asia/Shanghai","Asia/Urumqi","America/Bogota","America/Costa_Rica","America/Havana","Atlantic/Cape_Verde","America/Curacao","Indian/Christmas","Asia/Nicosia","Asia/Famagusta","Europe/Prague","Europe/Berlin","Europe/Copenhagen","America/Santo_Domingo","Africa/Algiers","America/Guayaquil","Pacific/Galapagos","Europe/Tallinn","Africa/Cairo","Africa/El_Aaiun","Europe/Madrid","Africa/Ceuta","Atlantic/Canary","Europe/Helsinki","Pacific/Fiji","Atlantic/Stanley","Pacific/Chuuk","Pacific/Pohnpei","Pacific/Kosrae","Atlantic/Faroe","Europe/Paris","Europe/London","Asia/Tbilisi","America/Cayenne","Africa/Accra","Europe/Gibraltar","America/Godthab","America/Danmarkshavn","America/Scoresbysund","America/Thule","Europe/Athens","Atlantic/South_Georgia","America/Guatemala","Pacific/Guam","Africa/Bissau","America/Guyana","Asia/Hong_Kong","America/Tegucigalpa","America/Port-au-Prince","Europe/Budapest","Asia/Jakarta","Asia/Pontianak","Asia/Makassar","Asia/Jayapura","Europe/Dublin","Asia/Jerusalem","Asia/Kolkata","Indian/Chagos","Asia/Baghdad","Asia/Tehran","Atlantic/Reykjavik","Europe/Rome","America/Jamaica","Asia/Amman","Asia/Tokyo","Africa/Nairobi","Asia/Bishkek","Pacific/Tarawa","Pacific/Enderbury","Pacific/Kiritimati","Asia/Pyongyang","Asia/Seoul","Asia/Almaty","Asia/Qyzylorda","Asia/Aqtobe","Asia/Aqtau","Asia/Atyrau","Asia/Oral","Asia/Beirut","Asia/Colombo","Africa/Monrovia","Europe/Vilnius","Europe/Luxembourg","Europe/Riga","Africa/Tripoli","Africa/Casablanca","Europe/Monaco","Europe/Chisinau","Pacific/Majuro","Pacific/Kwajalein","Asia/Yangon","Asia/Ulaanbaatar","Asia/Hovd","Asia/Choibalsan","Asia/Macau","America/Martinique","Europe/Malta","Indian/Mauritius","Indian/Maldives","America/Mexico_City","America/Cancun","America/Merida","America/Monterrey","America/Matamoros","America/Mazatlan","America/Chihuahua","America/Ojinaga","America/Hermosillo","America/Tijuana","America/Bahia_Banderas","Asia/Kuala_Lumpur","Asia/Kuching","Africa/Maputo","Africa/Windhoek","Pacific/Noumea","Pacific/Norfolk","Africa/Lagos","America/Managua","Europe/Amsterdam","Europe/Oslo","Asia/Kathmandu","Pacific/Nauru","Pacific/Niue","Pacific/Auckland","Pacific/Chatham","America/Panama","America/Lima","Pacific/Tahiti","Pacific/Marquesas","Pacific/Gambier","Pacific/Port_Moresby","Pacific/Bougainville","Asia/Manila","Asia/Karachi","Europe/Warsaw","America/Miquelon","Pacific/Pitcairn","America/Puerto_Rico","Asia/Gaza","Asia/Hebron","Europe/Lisbon","Atlantic/Madeira","Atlantic/Azores","Pacific/Palau","America/Asuncion","Asia/Qatar","Indian/Reunion","Europe/Bucharest","Europe/Belgrade","Europe/Kaliningrad","Europe/Moscow","Europe/Simferopol","Europe/Kirov","Europe/Astrakhan","Europe/Volgograd","Europe/Saratov","Europe/Ulyanovsk","Europe/Samara","Asia/Yekaterinburg","Asia/Omsk","Asia/Novosibirsk","Asia/Barnaul","Asia/Tomsk","Asia/Novokuznetsk","Asia/Krasnoyarsk","Asia/Irkutsk","Asia/Chita","Asia/Yakutsk","Asia/Khandyga","Asia/Vladivostok","Asia/Ust-Nera","Asia/Magadan","Asia/Sakhalin","Asia/Srednekolymsk","Asia/Kamchatka","Asia/Anadyr","Asia/Riyadh","Pacific/Guadalcanal","Indian/Mahe","Africa/Khartoum","Europe/Stockholm","Asia/Singapore","America/Paramaribo","Africa/Juba","Africa/Sao_Tome","America/El_Salvador","Asia/Damascus","America/Grand_Turk","Africa/Ndjamena","Indian/Kerguelen","Asia/Bangkok","Asia/Dushanbe","Pacific/Fakaofo","Asia/Dili","Asia/Ashgabat","Africa/Tunis","Pacific/Tongatapu","Europe/Istanbul","America/Port_of_Spain","Pacific/Funafuti","Asia/Taipei","Europe/Kiev","Europe/Uzhgorod","Europe/Zaporozhye","Pacific/Wake","America/New_York","America/Detroit","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Indiana/Indianapolis","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Chicago","America/Indiana/Tell_City","America/Indiana/Knox","America/Menominee","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/North_Dakota/Beulah","America/Denver","America/Boise","America/Phoenix","America/Los_Angeles","America/Anchorage","America/Juneau","America/Sitka","America/Metlakatla","America/Yakutat","America/Nome","America/Adak","Pacific/Honolulu","America/Montevideo","Asia/Samarkand","Asia/Tashkent","America/Caracas","Asia/Ho_Chi_Minh","Pacific/Efate","Pacific/Wallis","Pacific/Apia","Africa/Johannesburg"]),s=Object.freeze({"-01:00":108,"-02:00":144,"-03:00":337,"-04:00":340,"-05:00":229,"-06:00":288,"-07:00":327,"-08:00":239,"-09:00":232,"-09:30":231,"-10:00":336,"-11:00":225,"+01:00":291,"+02:00":345,"+03:00":300,"+04:00":281,"+04:30":2,"+05:00":339,"+05:30":182,"+05:45":223,"+06:00":262,"+06:30":193,"+07:00":341,"+08:00":303,"+08:30":173,"+08:45":39,"+09:00":296,"+09:30":37,"+10:00":273,"+11:00":342,"+12:00":343,"+13:00":295,"+14:00":172,BST:134,CET:113,EET:250,WET:243});function u(e){return f(e.toISOString())}function l(){return f((new Date).toISOString())}function f(e){let t,n,a=0,r="",i="",o="",c="";for(;e.length;)t=e[0],/\d/.test(t)?e.search(/\d\d\d\d-\d\d-\d\d/)?e.search(/\d\d\/\d\d\/\d\d\d\d/)?e.search(/\d\d:\d\d:\d\d/)?e.search(/\d\d:\d\d/)?e=e.substr(1):(o="T"+e.substr(0,5)+":00",e=e.substr(5)):(o="T"+e.substr(0,8),e=e.substr(8)):(i=e.substr(0,10).split("/").sort((e,t)=>t).join("-"),e=e.substr(10)):(i=e.substr(0,10),e=e.substr(10)):/[ ,\._]/.test(t)||/T\d/.test(t)?e=e.substr(1):e.search(/[\+\-]\d\d:\d\d/)?e.search(/[A-Z]{2,}/)?"Z"===t?(c="Z",e=e.substr(1)):e=e.substr(1):(r=-1===(n=e.search(/[^A-Z]/))?e:e.substr(0,n),e=e.substr(r.length),"CET"===r&&(c=r,r="")):(r=e.substr(0,6),e=e.substr(6),Reflect.has(s,r)&&(c=r,r="")),(a+=1)>5&&i&&o&&c&&(e="");return[i,o,c]}function m(e,{locale:t=i,declension:n=!0,timeZone:a=o}={}){return e?r=>e.map(function(e,t,n,a){const r=b.bind(null,n);return function([n,i,o]){let c=function(e,t,n,a,r,i,o){switch(!0){case"text"===t:return n;case"week"===t:return M(e);case"weekday"===t&&"numeric"===n:return P()(e);case"month"===t&&"long"===n&&r:return e.toLocaleString(i,o({[t]:n,day:"numeric"})).replace(/[\d \.\/\\]/g,"");case"hour"===t&&"a"===a.toLowerCase():return e.toLocaleString("A"===a?"en-US":"en-GB",o({[t]:n,hourCycle:"h12"})).replace(/[\d \.\/\\]/g,"");case"hour"===t:return e.toLocaleString(i,o({[t]:n,hourCycle:a})).replace(/[ \.\/\\pam]/gi,"");default:return e.toLocaleString(i,o({[t]:n}))}}(e,n,i,o,a,t,r);return"2-digit"===i&&1===c.length&&(c="0"+c),"two_letters"===o?c=c.substr(0,2):"ordinal_number"===o&&-1!==t.indexOf("en")&&(c=S(c)),c}}(d(r),t,a,n)).join(""):e=>e.join("")}function d([e,t,n]=[]){return e||(e=l()[0]),t||(t="T00:00:00"),n||(n=y(e)),"CET"===n&&(n=g([e,t])),new Date(e+t+n)}function A(e,t=1){const n=!!e&&d(e).getTime();return function(e){return(d(e).getTime()-(n||d(l()).getTime()))/t}}function h(e){const{abs:t,floor:n,round:a}=Math,r=e<0?"%s ago":"in %s";return(e=t(e))<1500?"now":(e=n(e/1e3))<10?r.replace("%s","a few seconds"):e<60?r.replace("%s",e+" seconds"):1===(e=n(e/60))?r.replace("%s","a minute"):e<60?r.replace("%s",e+" minutes"):1===(e=a(e/60))?r.replace("%s","an hour"):e<24?r.replace("%s",e+" hours"):1===a(e/=24)?r.replace("%s","a day"):e<29.5?r.replace("%s",a(e)+" days"):1===a(e/=30.41666)?r.replace("%s","a month"):e<12?r.replace("%s",a(e)+" months"):1===(e=a(e/12))?r.replace("%s","a year"):r.replace("%s",e+" years")}function g([e,t]=[]){if(!e||!t){let n=l();e||(e=n[0]),t||(t=n[1].replace(/\.\d+/,""))}const n=e+t,a=e.split("-").reverse().join("/")+", "+t.replace("T",""),[r,i]=["+01:00","+02:00"].map(e=>new Date(n+e).toLocaleString("en-GB",{timeZone:"Europe/Prague"}));return a===r?"+01:00":a===i?"+02:00":"Z"}function p(e){return k(e).getTimezoneOffset()}function y(e){return C(p(e))}function b(e,t){return e?-1!==c.indexOf(e)?Object.assign({timeZone:e},t):void 0!==s[e]?Object.assign({timeZone:c[s[e]]},t):t:t}function k(e){return e?(Array.isArray(e)||(e=f(e)),new Date(...e[0].split("-").map((e,t)=>1===t?+e-1:+e))):new Date}function C(e){const{floor:t,abs:n}=Math;let a=e>0?"-":"+";return a+=_(t((e=n(e))/60))+":"+_(e%60)}function w(e){return t=>(t.setDate(t.getDate()+e),t)}function E(e){return t=>(t.setMonth(t.getMonth()+e),t)}function P(e="numeric",{locale:t=i,timeZone:n=o}={}){return"numeric"===e?e=>e.getDay():n=>n.toLocaleString(t,{weekday:e})}function M(e){const t=new Date(e.valueOf());t.setDate(t.getDate()+3-(e.getDay()+6)%7);var n=t.valueOf();return t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7),1+Math.ceil((n-t)/6048e5)}function _(e){return 1===(e=String(e)).length?"0"+e:e}function S(e){const t="number"==typeof e?e:parseInt(e);if(isNaN(t))return e;let a=t%100;return e+(n[(a-20)%10]||n[a]||n[0])}return{_:void 0,fromNow:l,fromString:function(e,t=o){if(!e)return l();let n=f(e);return 3!==n.length?a(n[0])?r(n[1])?n[2]=t||"":(n[2]=t||n[1],n[1]=""):n.unshift(""):t&&(n[2]=t),n},fromDate:u,fromDateArguments:function(...e){return f((e.filter(e=>void 0!==e).length?new Date(...e):new Date).toISOString())},toDate:d,toString:function(e,t){return m(!!e&&function(e=""){let t=[];for(;e.length;)switch(e[0]){case"M":n();break;case"d":a();break;case"W":i("week","W");break;case"Y":r();break;case"D":i("day","D");break;case"H":o("hour","H","h23");break;case"k":o("hour","k","h24");break;case"h":o("hour","h","h12");break;case"A":c("A");break;case"a":c("a");break;case"m":s("minute","m");break;case"s":s("second","s");break;case"[":u();break;default:let l=e[0];"text"===t[t.length-1][0]?t[t.length-1][1]+=l:t.push(["text",l]),e=e.substring(1)}function n(){let n="numeric";if(e.search(/MMMM/))if(e.search(/MMM/))if(e.search(/MM/)){if(!e.search(/Mo/))return e=e.substring(2),t.push(["month",n,"ordinal_number"]);e=e.substring(1)}else n="2-digit",e=e.substring(2);else n="short",e=e.substring(3);else n="long",e=e.substring(4);t.push(["month",n])}function a(){let n="numeric";if(e.search(/dddd/))if(e.search(/ddd/)){if(!e.search(/dd/))return n="short",e=e.substring(2),t.push(["weekday",n,"two_letters"]);e=e.substring(1)}else n="short",e=e.substring(3);else n="long",e=e.substring(4);t.push(["weekday",n])}function r(){let n="2-digit";e.search(/YYYY/)?e=e.substring(2):(n="numeric",e=e.substring(4)),t.push(["year",n])}function i(n,a){let r="numeric";if(!e.search(new RegExp(a+"o")))return e=e.substring(2),t.push([n,r,"ordinal_number"]);e.search(new RegExp(a+a))?e=e.substring(1):(r="2-digit",e=e.substring(2)),t.push([n,r])}function o(n,a,r){let i="numeric";e.search(new RegExp(a+a))?e=e.substring(1):(i="2-digit",e=e.substring(2)),t.push([n,i,r])}function c(n){e=e.substring(1),t.push(["hour","numeric",n])}function s(n,a){let r="numeric";e.search(new RegExp(a+a))?e=e.substring(1):(r="2-digit",e=e.substring(2)),t.push([n,r])}function u(){const n=e.indexOf("]");if(-1===n)return e=e.substring(1),!1;t.push(["text",e.substr(1,n-1)]),e=e.substr(n+1)}return t}(e),t)},toStringPreDefined:function(e="YMDHms_2d",n={}){return m(t[e],n)},toLocaleString:function(t="date_time",{locale:n=i,timeZone:a=o}={}){return r=>d(r).toLocaleString(n,b(a,e[t]))},toRelative:function(e){return t=>h(A(e)(t))},getDiff:function(e,t="seconds",n=!1){const a=A(e,-{seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:24192e5,years:290304e5}[t]);return function(e){const t=a(e);return n?t:Math.floor(t)}},getRelative:h,getCETOffset:g,getTimeZoneOffset:p,getTimeZoneOffsetString:y,getTimeZone:function(e,{locale:t=i,description:n="long",offset:a=!1}={}){const r=k(e);let o="none"===n?"":r.toLocaleString(t,{timeZoneName:n}).replace(r.toLocaleString(t),"").trim();const c=a?"UTC"+C(r.getTimezoneOffset()):"";return o&&c&&(o=" ("+o+")"),c+o},Date:{getWeekDay:P,getWeekNumber:M,addDays:w,addMonths:E},setTimeZone:function(e=o){return([t="",n=""]=[])=>[t,n,e]},modify:function(e){const t=Object.keys(e);return function(n){const a=d(n);for(let n,r=0;n=t[r];r++)"addDays"===n?w(e[n])(a):"addMonths"===n?E(e[n])(a):"setMonth"===n?a.setMonth(e[n]-1):Reflect.has(a,n)?a[n](e[n]):"setDay"===n&&a.setDate(e[n]);return u(a)}},double:_,getOrdinalSuffix:S,getMonthName:function(e,t){if("number"!=typeof e&&(e=parseInt(e)),isNaN(e))return!1;let n=["December","January","February","March","April","May","June","July","August","September","October","November"][e%12];return t&&(-1===t&&(t=3,4===n.length&&(t=4)),n=n.substring(0,t)),n},getDaysInMonth:function(e,t=(new Date).getFullYear()){return new Date(t,+e,0).getDate()},getTimeZones:()=>c,isTimeZone:e=>-1!==c.indexOf(e),setInternalZone:e=>o=e,setInternalLocale:e=>i=e}}(),"$time"),n});