/*! For license information please see 2.3de4698c.chunk.js.LICENSE.txt */
(this["webpackJsonpdraw-on-image-and-save"]=this["webpackJsonpdraw-on-image-and-save"]||[]).push([[2],[function(t,e,r){"use strict";t.exports=r(8)},function(t,e,r){"use strict";t.exports=r(9)},function(t,e,r){t.exports=r(11)},,function(t,e,r){"use strict";function n(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(f){return void r(f)}a.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var u=t.apply(e,r);function a(t){n(u,o,i,a,c,"next",t)}function c(t){n(u,o,i,a,c,"throw",t)}a(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},,,function(t,e,r){"use strict";var n=r(1),o=60103;if(e.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),e.Fragment=i("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,r){var n,i={},f=null,l=null;for(n in void 0!==r&&(f=""+r),void 0!==e.key&&(f=""+e.key),void 0!==e.ref&&(l=e.ref),e)a.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:f,ref:l,props:i,_owner:u.current}}e.jsx=f,e.jsxs=f},function(t,e,r){"use strict";var n=r(10),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,d="function"===typeof Symbol&&Symbol.iterator;function m(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(t,e,r){this.props=t,this.context=e,this.refs=b,this.updater=r||g}function _(){}function S(t,e,r){this.props=t,this.context=e,this.refs=b,this.updater=r||g}w.prototype.isReactComponent={},w.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error(m(85));this.updater.enqueueSetState(this,t,e,"setState")},w.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},_.prototype=w.prototype;var x=S.prototype=new _;x.constructor=S,n(x,w.prototype),x.isPureReactComponent=!0;var E={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(t,e,r){var n,o={},u=null,a=null;if(null!=e)for(n in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(u=""+e.key),e)O.call(e,n)&&!j.hasOwnProperty(n)&&(o[n]=e[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];o.children=f}if(t&&t.defaultProps)for(n in c=t.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:i,type:t,key:u,ref:a,props:o,_owner:E.current}}function L(t){return"object"===typeof t&&null!==t&&t.$$typeof===i}var P=/\/+/g,R=[];function $(t,e,r,n){if(R.length){var o=R.pop();return o.result=t,o.keyPrefix=e,o.func=r,o.context=n,o.count=0,o}return{result:t,keyPrefix:e,func:r,context:n,count:0}}function C(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>R.length&&R.push(t)}function A(t,e,r,n){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var a=!1;if(null===t)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case i:case u:a=!0}}if(a)return r(n,t,""===e?"."+N(t,0):e),1;if(a=0,e=""===e?".":e+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=e+N(o=t[c],c);a+=A(o,f,r,n)}else if(null===t||"object"!==typeof t?f=null:f="function"===typeof(f=d&&t[d]||t["@@iterator"])?f:null,"function"===typeof f)for(t=f.call(t),c=0;!(o=t.next()).done;)a+=A(o=o.value,f=e+N(o,c++),r,n);else if("object"===o)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return a}function I(t,e,r){return null==t?0:A(t,"",e,r)}function N(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))}(t.key):e.toString(36)}function F(t,e){t.func.call(t.context,e,t.count++)}function T(t,e,r){var n=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?U(t,n,r,(function(t){return t})):null!=t&&(L(t)&&(t=function(t,e){return{$$typeof:i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(P,"$&/")+"/")+r)),n.push(t))}function U(t,e,r,n,o){var i="";null!=r&&(i=(""+r).replace(P,"$&/")+"/"),I(t,T,e=$(e,i,n,o)),C(e)}var G={current:null};function q(){var t=G.current;if(null===t)throw Error(m(321));return t}var D={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n};e.Children={map:function(t,e,r){if(null==t)return t;var n=[];return U(t,n,null,e,r),n},forEach:function(t,e,r){if(null==t)return t;I(t,F,e=$(null,null,e,r)),C(e)},count:function(t){return I(t,(function(){return null}),null)},toArray:function(t){var e=[];return U(t,e,null,(function(t){return t})),e},only:function(t){if(!L(t))throw Error(m(143));return t}},e.Component=w,e.Fragment=a,e.Profiler=f,e.PureComponent=S,e.StrictMode=c,e.Suspense=y,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,e.cloneElement=function(t,e,r){if(null===t||void 0===t)throw Error(m(267,t));var o=n({},t.props),u=t.key,a=t.ref,c=t._owner;if(null!=e){if(void 0!==e.ref&&(a=e.ref,c=E.current),void 0!==e.key&&(u=""+e.key),t.type&&t.type.defaultProps)var f=t.type.defaultProps;for(l in e)O.call(e,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===e[l]&&void 0!==f?f[l]:e[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:i,type:t.type,key:u,ref:a,props:o,_owner:c}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:s,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},e.createElement=k,e.createFactory=function(t){var e=k.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:p,render:t}},e.isValidElement=L,e.lazy=function(t){return{$$typeof:v,_ctor:t,_status:-1,_result:null}},e.memo=function(t,e){return{$$typeof:h,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return q().useCallback(t,e)},e.useContext=function(t,e){return q().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return q().useEffect(t,e)},e.useImperativeHandle=function(t,e,r){return q().useImperativeHandle(t,e,r)},e.useLayoutEffect=function(t,e){return q().useLayoutEffect(t,e)},e.useMemo=function(t,e){return q().useMemo(t,e)},e.useReducer=function(t,e,r){return q().useReducer(t,e,r)},e.useRef=function(t){return q().useRef(t)},e.useState=function(t){return q().useState(t)},e.version="16.14.0"},function(t,e,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function u(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(t,e){for(var r,a,c=u(t),f=1;f<arguments.length;f++){for(var l in r=Object(arguments[f]))o.call(r,l)&&(c[l]=r[l]);if(n){a=n(r);for(var s=0;s<a.length;s++)i.call(r,a[s])&&(c[a[s]]=r[a[s]])}}return c}},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch($){c=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),u=new L(n||[]);return i._invoke=function(t,e,r){var n=s;return function(o,i){if(n===y)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=O(u,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=y;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,u),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch($){return{type:"throw",arg:$}}}t.wrap=f;var s="suspendedStart",p="suspendedYield",y="executing",h="completed",v={};function d(){}function m(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(P([])));_&&_!==r&&n.call(_,i)&&(b=_);var S=g.prototype=d.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,u,a){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"===typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,u,a)}),(function(t){r("throw",t,u,a)})):e.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,a)}))}a(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,u=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return u.next=u}}return{next:R}}function R(){return{value:e,done:!0}}return m.prototype=S.constructor=g,g.constructor=m,m.displayName=c(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,a,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[u]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new E(f(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},x(S),c(S,a,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var c=n.call(u,"catchLoc"),f=n.call(u,"finallyLoc");if(c&&f){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}]]);
//# sourceMappingURL=2.3de4698c.chunk.js.map