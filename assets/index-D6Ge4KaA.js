(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function wS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bh={exports:{}},Wl={},Ph={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1;function AS(){if(e1)return _t;e1=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function x(N,ie,De){this.props=N,this.context=ie,this.refs=R,this.updater=De||S}x.prototype.isReactComponent={},x.prototype.setState=function(N,ie){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ie,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=x.prototype;function U(N,ie,De){this.props=N,this.context=ie,this.refs=R,this.updater=De||S}var D=U.prototype=new y;D.constructor=U,M(D,x.prototype),D.isPureReactComponent=!0;var b=Array.isArray,G=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(N,ie,De){var Q,ce={},xe=null,ge=null;if(ie!=null)for(Q in ie.ref!==void 0&&(ge=ie.ref),ie.key!==void 0&&(xe=""+ie.key),ie)G.call(ie,Q)&&!F.hasOwnProperty(Q)&&(ce[Q]=ie[Q]);var we=arguments.length-2;if(we===1)ce.children=De;else if(1<we){for(var Ue=Array(we),it=0;it<we;it++)Ue[it]=arguments[it+2];ce.children=Ue}if(N&&N.defaultProps)for(Q in we=N.defaultProps,we)ce[Q]===void 0&&(ce[Q]=we[Q]);return{$$typeof:t,type:N,key:xe,ref:ge,props:ce,_owner:z.current}}function C(N,ie){return{$$typeof:t,type:N.type,key:ie,ref:N.ref,props:N.props,_owner:N._owner}}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function I(N){var ie={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(De){return ie[De]})}var Z=/\/+/g;function Y(N,ie){return typeof N=="object"&&N!==null&&N.key!=null?I(""+N.key):ie.toString(36)}function ue(N,ie,De,Q,ce){var xe=typeof N;(xe==="undefined"||xe==="boolean")&&(N=null);var ge=!1;if(N===null)ge=!0;else switch(xe){case"string":case"number":ge=!0;break;case"object":switch(N.$$typeof){case t:case e:ge=!0}}if(ge)return ge=N,ce=ce(ge),N=Q===""?"."+Y(ge,0):Q,b(ce)?(De="",N!=null&&(De=N.replace(Z,"$&/")+"/"),ue(ce,ie,De,"",function(it){return it})):ce!=null&&(w(ce)&&(ce=C(ce,De+(!ce.key||ge&&ge.key===ce.key?"":(""+ce.key).replace(Z,"$&/")+"/")+N)),ie.push(ce)),1;if(ge=0,Q=Q===""?".":Q+":",b(N))for(var we=0;we<N.length;we++){xe=N[we];var Ue=Q+Y(xe,we);ge+=ue(xe,ie,De,Ue,ce)}else if(Ue=v(N),typeof Ue=="function")for(N=Ue.call(N),we=0;!(xe=N.next()).done;)xe=xe.value,Ue=Q+Y(xe,we++),ge+=ue(xe,ie,De,Ue,ce);else if(xe==="object")throw ie=String(N),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ge}function fe(N,ie,De){if(N==null)return N;var Q=[],ce=0;return ue(N,Q,"","",function(xe){return ie.call(De,xe,ce++)}),Q}function ae(N){if(N._status===-1){var ie=N._result;ie=ie(),ie.then(function(De){(N._status===0||N._status===-1)&&(N._status=1,N._result=De)},function(De){(N._status===0||N._status===-1)&&(N._status=2,N._result=De)}),N._status===-1&&(N._status=0,N._result=ie)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},k={transition:null},te={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:k,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:fe,forEach:function(N,ie,De){fe(N,function(){ie.apply(this,arguments)},De)},count:function(N){var ie=0;return fe(N,function(){ie++}),ie},toArray:function(N){return fe(N,function(ie){return ie})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},_t.Component=x,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=U,_t.StrictMode=r,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,_t.act=se,_t.cloneElement=function(N,ie,De){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=M({},N.props),ce=N.key,xe=N.ref,ge=N._owner;if(ie!=null){if(ie.ref!==void 0&&(xe=ie.ref,ge=z.current),ie.key!==void 0&&(ce=""+ie.key),N.type&&N.type.defaultProps)var we=N.type.defaultProps;for(Ue in ie)G.call(ie,Ue)&&!F.hasOwnProperty(Ue)&&(Q[Ue]=ie[Ue]===void 0&&we!==void 0?we[Ue]:ie[Ue])}var Ue=arguments.length-2;if(Ue===1)Q.children=De;else if(1<Ue){we=Array(Ue);for(var it=0;it<Ue;it++)we[it]=arguments[it+2];Q.children=we}return{$$typeof:t,type:N.type,key:ce,ref:xe,props:Q,_owner:ge}},_t.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},_t.createElement=j,_t.createFactory=function(N){var ie=j.bind(null,N);return ie.type=N,ie},_t.createRef=function(){return{current:null}},_t.forwardRef=function(N){return{$$typeof:f,render:N}},_t.isValidElement=w,_t.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ae}},_t.memo=function(N,ie){return{$$typeof:p,type:N,compare:ie===void 0?null:ie}},_t.startTransition=function(N){var ie=k.transition;k.transition={};try{N()}finally{k.transition=ie}},_t.unstable_act=se,_t.useCallback=function(N,ie){return le.current.useCallback(N,ie)},_t.useContext=function(N){return le.current.useContext(N)},_t.useDebugValue=function(){},_t.useDeferredValue=function(N){return le.current.useDeferredValue(N)},_t.useEffect=function(N,ie){return le.current.useEffect(N,ie)},_t.useId=function(){return le.current.useId()},_t.useImperativeHandle=function(N,ie,De){return le.current.useImperativeHandle(N,ie,De)},_t.useInsertionEffect=function(N,ie){return le.current.useInsertionEffect(N,ie)},_t.useLayoutEffect=function(N,ie){return le.current.useLayoutEffect(N,ie)},_t.useMemo=function(N,ie){return le.current.useMemo(N,ie)},_t.useReducer=function(N,ie,De){return le.current.useReducer(N,ie,De)},_t.useRef=function(N){return le.current.useRef(N)},_t.useState=function(N){return le.current.useState(N)},_t.useSyncExternalStore=function(N,ie,De){return le.current.useSyncExternalStore(N,ie,De)},_t.useTransition=function(){return le.current.useTransition()},_t.version="18.3.1",_t}var t1;function bm(){return t1||(t1=1,Ph.exports=AS()),Ph.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1;function RS(){if(n1)return Wl;n1=1;var t=bm(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,p){var g,_={},v=null,S=null;p!==void 0&&(v=""+p),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(_[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)_[g]===void 0&&(_[g]=d[g]);return{$$typeof:e,type:f,key:v,ref:S,props:_,_owner:o.current}}return Wl.Fragment=n,Wl.jsx=u,Wl.jsxs=u,Wl}var i1;function CS(){return i1||(i1=1,bh.exports=RS()),bh.exports}var Ee=CS(),Tt=bm();const bS=wS(Tt);var bc={},Lh={exports:{}},fi={},Dh={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function PS(){return r1||(r1=1,(function(t){function e(k,te){var se=k.length;k.push(te);e:for(;0<se;){var N=se-1>>>1,ie=k[N];if(0<o(ie,te))k[N]=te,k[se]=ie,se=N;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var te=k[0],se=k.pop();if(se!==te){k[0]=se;e:for(var N=0,ie=k.length,De=ie>>>1;N<De;){var Q=2*(N+1)-1,ce=k[Q],xe=Q+1,ge=k[xe];if(0>o(ce,se))xe<ie&&0>o(ge,ce)?(k[N]=ge,k[xe]=se,N=xe):(k[N]=ce,k[Q]=se,N=Q);else if(xe<ie&&0>o(ge,se))k[N]=ge,k[xe]=se,N=xe;else break e}}return te}function o(k,te){var se=k.sortIndex-te.sortIndex;return se!==0?se:k.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var d=[],p=[],g=1,_=null,v=3,S=!1,M=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var te=n(p);te!==null;){if(te.callback===null)r(p);else if(te.startTime<=k)r(p),te.sortIndex=te.expirationTime,e(d,te);else break;te=n(p)}}function b(k){if(R=!1,D(k),!M)if(n(d)!==null)M=!0,ae(G);else{var te=n(p);te!==null&&le(b,te.startTime-k)}}function G(k,te){M=!1,R&&(R=!1,y(j),j=-1),S=!0;var se=v;try{for(D(te),_=n(d);_!==null&&(!(_.expirationTime>te)||k&&!I());){var N=_.callback;if(typeof N=="function"){_.callback=null,v=_.priorityLevel;var ie=N(_.expirationTime<=te);te=t.unstable_now(),typeof ie=="function"?_.callback=ie:_===n(d)&&r(d),D(te)}else r(d);_=n(d)}if(_!==null)var De=!0;else{var Q=n(p);Q!==null&&le(b,Q.startTime-te),De=!1}return De}finally{_=null,v=se,S=!1}}var z=!1,F=null,j=-1,C=5,w=-1;function I(){return!(t.unstable_now()-w<C)}function Z(){if(F!==null){var k=t.unstable_now();w=k;var te=!0;try{te=F(!0,k)}finally{te?Y():(z=!1,F=null)}}else z=!1}var Y;if(typeof U=="function")Y=function(){U(Z)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=Z,Y=function(){fe.postMessage(null)}}else Y=function(){x(Z,0)};function ae(k){F=k,z||(z=!0,Y())}function le(k,te){j=x(function(){k(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){M||S||(M=!0,ae(G))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(k){switch(v){case 1:case 2:case 3:var te=3;break;default:te=v}var se=v;v=te;try{return k()}finally{v=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,te){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=v;v=k;try{return te()}finally{v=se}},t.unstable_scheduleCallback=function(k,te,se){var N=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?N+se:N):se=N,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,k={id:g++,callback:te,priorityLevel:k,startTime:se,expirationTime:ie,sortIndex:-1},se>N?(k.sortIndex=se,e(p,k),n(d)===null&&k===n(p)&&(R?(y(j),j=-1):R=!0,le(b,se-N))):(k.sortIndex=ie,e(d,k),M||S||(M=!0,ae(G))),k},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(k){var te=v;return function(){var se=v;v=te;try{return k.apply(this,arguments)}finally{v=se}}}})(Ih)),Ih}var s1;function LS(){return s1||(s1=1,Dh.exports=PS()),Dh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function DS(){if(o1)return fi;o1=1;var t=bm(),e=LS();function n(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function v(i){return d.call(_,i)?!0:d.call(g,i)?!1:p.test(i)?_[i]=!0:(g[i]=!0,!1)}function S(i,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,c){if(s===null||typeof s>"u"||S(i,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function R(i,s,a,c,h,m,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=m,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new R(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new R(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new R(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new R(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new R(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new R(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new R(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new R(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new R(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function U(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,U);x[s]=new R(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,U);x[s]=new R(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,U);x[s]=new R(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new R(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new R(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,s,a,c){var h=x.hasOwnProperty(s)?x[s]:null;(h!==null?h.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,h,c)&&(a=null),c||h===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):h.mustUseProperty?i[h.propertyName]=a===null?h.type===3?!1:"":a:(s=h.attributeName,c=h.attributeNamespace,a===null?i.removeAttribute(s):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?i.setAttributeNS(c,s,a):i.setAttribute(s,a))))}var b=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),I=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),k=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,N;function ie(i){if(N===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);N=s&&s[1]||""}return`
`+N+i}var De=!1;function Q(i,s){if(!i||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ne){var c=ne}Reflect.construct(i,[],s)}else{try{s.call()}catch(ne){c=ne}i.call(s.prototype)}else{try{throw Error()}catch(ne){c=ne}i()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var h=ne.stack.split(`
`),m=c.stack.split(`
`),E=h.length-1,L=m.length-1;1<=E&&0<=L&&h[E]!==m[L];)L--;for(;1<=E&&0<=L;E--,L--)if(h[E]!==m[L]){if(E!==1||L!==1)do if(E--,L--,0>L||h[E]!==m[L]){var O=`
`+h[E].replace(" at new "," at ");return i.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",i.displayName)),O}while(1<=E&&0<=L);break}}}finally{De=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?ie(i):""}function ce(i){switch(i.tag){case 5:return ie(i.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function xe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case z:return"Portal";case C:return"Profiler";case j:return"StrictMode";case Y:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case I:return(i.displayName||"Context")+".Consumer";case w:return(i._context.displayName||"Context")+".Provider";case Z:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case fe:return s=i.displayName||null,s!==null?s:xe(i.type)||"Memo";case ae:s=i._payload,i=i._init;try{return xe(i(s))}catch{}}return null}function ge(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(s);case 8:return s===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function we(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function it(i){var s=Ue(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ot(i){i._valueTracker||(i._valueTracker=it(i))}function yt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return i&&(c=Ue(i)?i.checked?"true":"false":i.value),i=c,i!==a?(s.setValue(i),!0):!1}function Gt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function B(i,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Jn(i,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=we(s.value!=null?s.value:a),i._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function vt(i,s){s=s.checked,s!=null&&D(i,"checked",s,!1)}function mt(i,s){vt(i,s);var a=we(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ft(i,s.type,a):s.hasOwnProperty("defaultValue")&&Ft(i,s.type,we(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ze(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Ft(i,s,a){(s!=="number"||Gt(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var Xe=Array.isArray;function P(i,s,a,c){if(i=i.options,s){s={};for(var h=0;h<a.length;h++)s["$"+a[h]]=!0;for(a=0;a<i.length;a++)h=s.hasOwnProperty("$"+i[a].value),i[a].selected!==h&&(i[a].selected=h),h&&c&&(i[a].defaultSelected=!0)}else{for(a=""+we(a),s=null,h=0;h<i.length;h++){if(i[h].value===a){i[h].selected=!0,c&&(i[h].defaultSelected=!0);return}s!==null||i[h].disabled||(s=i[h])}s!==null&&(s.selected=!0)}}function T(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function J(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(n(92));if(Xe(a)){if(1<a.length)throw Error(n(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:we(a)}}function pe(i,s){var a=we(s.value),c=we(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),c!=null&&(i.defaultValue=""+c)}function _e(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?de(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ae,Fe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,h){MSApp.execUnsafeLocalFunction(function(){return i(s,a,c,h)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function pt(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){ke.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function et(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function ot(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=et(a,s[a],c);a==="float"&&(a="cssFloat"),c?i.setProperty(a,h):i[a]=h}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(i,s){if(s){if(Be[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function ut(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function H(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,oe=null,he=null;function Le(i){if(i=bl(i)){if(typeof Re!="function")throw Error(n(280));var s=i.stateNode;s&&(s=Wu(s),Re(i.stateNode,i.type,s))}}function Pe(i){oe?he?he.push(i):he=[i]:oe=i}function ct(){if(oe){var i=oe,s=he;if(he=oe=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Xt(i,s){return i(s)}function xn(){}var At=!1;function si(i,s,a){if(At)return i(s,a);At=!0;try{return Xt(i,s,a)}finally{At=!1,(oe!==null||he!==null)&&(xn(),ct())}}function ei(i,s){var a=i.stateNode;if(a===null)return null;var c=Wu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(n(231,s,typeof a));return a}var Bo=!1;if(f)try{var us={};Object.defineProperty(us,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{Bo=!1}function Dr(i,s,a,c,h,m,E,L,O){var ne=Array.prototype.slice.call(arguments,3);try{s.apply(a,ne)}catch(ve){this.onError(ve)}}var Ir=!1,$s=null,Ks=!1,cs=null,Eu={onError:function(i){Ir=!0,$s=i}};function zo(i,s,a,c,h,m,E,L,O){Ir=!1,$s=null,Dr.apply(Eu,arguments)}function Mu(i,s,a,c,h,m,E,L,O){if(zo.apply(this,arguments),Ir){if(Ir){var ne=$s;Ir=!1,$s=null}else throw Error(n(198));Ks||(Ks=!0,cs=ne)}}function pr(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Tu(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function wu(i){if(pr(i)!==i)throw Error(n(188))}function Qf(i){var s=i.alternate;if(!s){if(s=pr(i),s===null)throw Error(n(188));return s!==i?null:i}for(var a=i,c=s;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return wu(h),i;if(m===c)return wu(h),s;m=m.sibling}throw Error(n(188))}if(a.return!==c.return)a=h,c=m;else{for(var E=!1,L=h.child;L;){if(L===a){E=!0,a=h,c=m;break}if(L===c){E=!0,c=h,a=m;break}L=L.sibling}if(!E){for(L=m.child;L;){if(L===a){E=!0,a=m,c=h;break}if(L===c){E=!0,c=m,a=h;break}L=L.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?i:s}function Au(i){return i=Qf(i),i!==null?Ru(i):null}function Ru(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Ru(i);if(s!==null)return s;i=i.sibling}return null}var Cu=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,ee=e.unstable_requestPaint,$=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,ze=e.unstable_LowPriority,at=e.unstable_IdlePriority,st=null,Ge=null;function St(i){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(st,i,void 0,(i.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Mt,on=Math.log,qt=Math.LN2;function Mt(i){return i>>>=0,i===0?32:31-(on(i)/qt|0)|0}var Qe=64,an=4194304;function xt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Vn(i,s){var a=i.pendingLanes;if(a===0)return 0;var c=0,h=i.suspendedLanes,m=i.pingedLanes,E=a&268435455;if(E!==0){var L=E&~h;L!==0?c=xt(L):(m&=E,m!==0&&(c=xt(m)))}else E=a&~h,E!==0?c=xt(E):m!==0&&(c=xt(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&h)===0&&(h=c&-c,m=s&-s,h>=m||h===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)a=31-ft(s),h=1<<a,c|=i[a],s&=~h;return c}function fs(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ti(i,s){for(var a=i.suspendedLanes,c=i.pingedLanes,h=i.expirationTimes,m=i.pendingLanes;0<m;){var E=31-ft(m),L=1<<E,O=h[E];O===-1?((L&a)===0||(L&c)!==0)&&(h[E]=fs(L,s)):O<=s&&(i.expiredLanes|=L),m&=~L}}function Nr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function zt(){var i=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),i}function Hn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function bn(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-ft(s),i[s]=a}function On(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<a;){var h=31-ft(a),m=1<<h;s[h]=0,c[h]=-1,i[h]=-1,a&=~m}}function Pn(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var c=31-ft(a),h=1<<c;h&s|i[c]&s&&(i[c]|=s),a&=~h}}var Rt=0;function mr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var I0,Jf,N0,U0,F0,ed=!1,bu=[],ds=null,hs=null,ps=null,hl=new Map,pl=new Map,ms=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function O0(i,s){switch(i){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":hl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(s.pointerId)}}function ml(i,s,a,c,h,m){return i===null||i.nativeEvent!==m?(i={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},s!==null&&(s=bl(s),s!==null&&Jf(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),i)}function qx(i,s,a,c,h){switch(s){case"focusin":return ds=ml(ds,i,s,a,c,h),!0;case"dragenter":return hs=ml(hs,i,s,a,c,h),!0;case"mouseover":return ps=ml(ps,i,s,a,c,h),!0;case"pointerover":var m=h.pointerId;return hl.set(m,ml(hl.get(m)||null,i,s,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,pl.set(m,ml(pl.get(m)||null,i,s,a,c,h)),!0}return!1}function k0(i){var s=Zs(i.target);if(s!==null){var a=pr(s);if(a!==null){if(s=a.tag,s===13){if(s=Tu(a),s!==null){i.blockedOn=s,F0(i.priority,function(){N0(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Pu(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=nd(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var c=new a.constructor(a.type,a);Nt=c,a.target.dispatchEvent(c),Nt=null}else return s=bl(a),s!==null&&Jf(s),i.blockedOn=a,!1;s.shift()}return!0}function B0(i,s,a){Pu(i)&&a.delete(s)}function $x(){ed=!1,ds!==null&&Pu(ds)&&(ds=null),hs!==null&&Pu(hs)&&(hs=null),ps!==null&&Pu(ps)&&(ps=null),hl.forEach(B0),pl.forEach(B0)}function gl(i,s){i.blockedOn===s&&(i.blockedOn=null,ed||(ed=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$x)))}function _l(i){function s(h){return gl(h,i)}if(0<bu.length){gl(bu[0],i);for(var a=1;a<bu.length;a++){var c=bu[a];c.blockedOn===i&&(c.blockedOn=null)}}for(ds!==null&&gl(ds,i),hs!==null&&gl(hs,i),ps!==null&&gl(ps,i),hl.forEach(s),pl.forEach(s),a=0;a<ms.length;a++)c=ms[a],c.blockedOn===i&&(c.blockedOn=null);for(;0<ms.length&&(a=ms[0],a.blockedOn===null);)k0(a),a.blockedOn===null&&ms.shift()}var Vo=b.ReactCurrentBatchConfig,Lu=!0;function Kx(i,s,a,c){var h=Rt,m=Vo.transition;Vo.transition=null;try{Rt=1,td(i,s,a,c)}finally{Rt=h,Vo.transition=m}}function Zx(i,s,a,c){var h=Rt,m=Vo.transition;Vo.transition=null;try{Rt=4,td(i,s,a,c)}finally{Rt=h,Vo.transition=m}}function td(i,s,a,c){if(Lu){var h=nd(i,s,a,c);if(h===null)yd(i,s,c,Du,a),O0(i,c);else if(qx(h,i,s,a,c))c.stopPropagation();else if(O0(i,c),s&4&&-1<Yx.indexOf(i)){for(;h!==null;){var m=bl(h);if(m!==null&&I0(m),m=nd(i,s,a,c),m===null&&yd(i,s,c,Du,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else yd(i,s,c,null,a)}}var Du=null;function nd(i,s,a,c){if(Du=null,i=H(c),i=Zs(i),i!==null)if(s=pr(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Tu(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Du=i,null}function z0(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Se:return 1;case Ce:return 4;case Ie:case ze:return 16;case at:return 536870912;default:return 16}default:return 16}}var gs=null,id=null,Iu=null;function V0(){if(Iu)return Iu;var i,s=id,a=s.length,c,h="value"in gs?gs.value:gs.textContent,m=h.length;for(i=0;i<a&&s[i]===h[i];i++);var E=a-i;for(c=1;c<=E&&s[a-c]===h[m-c];c++);return Iu=h.slice(i,1<c?1-c:void 0)}function Nu(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Uu(){return!0}function H0(){return!1}function xi(i){function s(a,c,h,m,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var L in i)i.hasOwnProperty(L)&&(a=i[L],this[L]=a?a(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Uu:H0,this.isPropagationStopped=H0,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Uu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Uu)},persist:function(){},isPersistent:Uu}),s}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=xi(Ho),vl=se({},Ho,{view:0,detail:0}),Qx=xi(vl),sd,od,yl,Fu=se({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==yl&&(yl&&i.type==="mousemove"?(sd=i.screenX-yl.screenX,od=i.screenY-yl.screenY):od=sd=0,yl=i),sd)},movementY:function(i){return"movementY"in i?i.movementY:od}}),G0=xi(Fu),Jx=se({},Fu,{dataTransfer:0}),e3=xi(Jx),t3=se({},vl,{relatedTarget:0}),ad=xi(t3),n3=se({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),i3=xi(n3),r3=se({},Ho,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),s3=xi(r3),o3=se({},Ho,{data:0}),W0=xi(o3),a3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c3(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=u3[i])?!!s[i]:!1}function ld(){return c3}var f3=se({},vl,{key:function(i){if(i.key){var s=a3[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Nu(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?l3[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(i){return i.type==="keypress"?Nu(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Nu(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),d3=xi(f3),h3=se({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X0=xi(h3),p3=se({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),m3=xi(p3),g3=se({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),_3=xi(g3),v3=se({},Fu,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),y3=xi(v3),x3=[9,13,27,32],ud=f&&"CompositionEvent"in window,xl=null;f&&"documentMode"in document&&(xl=document.documentMode);var S3=f&&"TextEvent"in window&&!xl,j0=f&&(!ud||xl&&8<xl&&11>=xl),Y0=" ",q0=!1;function $0(i,s){switch(i){case"keyup":return x3.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K0(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Go=!1;function E3(i,s){switch(i){case"compositionend":return K0(s);case"keypress":return s.which!==32?null:(q0=!0,Y0);case"textInput":return i=s.data,i===Y0&&q0?null:i;default:return null}}function M3(i,s){if(Go)return i==="compositionend"||!ud&&$0(i,s)?(i=V0(),Iu=id=gs=null,Go=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return j0&&s.locale!=="ko"?null:s.data;default:return null}}var T3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Z0(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!T3[i.type]:s==="textarea"}function Q0(i,s,a,c){Pe(c),s=Vu(s,"onChange"),0<s.length&&(a=new rd("onChange","change",null,a,c),i.push({event:a,listeners:s}))}var Sl=null,El=null;function w3(i){gg(i,0)}function Ou(i){var s=qo(i);if(yt(s))return i}function A3(i,s){if(i==="change")return s}var J0=!1;if(f){var cd;if(f){var fd="oninput"in document;if(!fd){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),fd=typeof eg.oninput=="function"}cd=fd}else cd=!1;J0=cd&&(!document.documentMode||9<document.documentMode)}function tg(){Sl&&(Sl.detachEvent("onpropertychange",ng),El=Sl=null)}function ng(i){if(i.propertyName==="value"&&Ou(El)){var s=[];Q0(s,El,i,H(i)),si(w3,s)}}function R3(i,s,a){i==="focusin"?(tg(),Sl=s,El=a,Sl.attachEvent("onpropertychange",ng)):i==="focusout"&&tg()}function C3(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ou(El)}function b3(i,s){if(i==="click")return Ou(s)}function P3(i,s){if(i==="input"||i==="change")return Ou(s)}function L3(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Qi=typeof Object.is=="function"?Object.is:L3;function Ml(i,s){if(Qi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!d.call(s,h)||!Qi(i[h],s[h]))return!1}return!0}function ig(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function rg(i,s){var a=ig(i);i=0;for(var c;a;){if(a.nodeType===3){if(c=i+a.textContent.length,i<=s&&c>=s)return{node:a,offset:s-i};i=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ig(a)}}function sg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?sg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function og(){for(var i=window,s=Gt();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=Gt(i.document)}return s}function dd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function D3(i){var s=og(),a=i.focusedElem,c=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&sg(a.ownerDocument.documentElement,a)){if(c!==null&&dd(a)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!i.extend&&m>c&&(h=c,c=m,m=h),h=rg(a,m);var E=rg(a,c);h&&E&&(i.rangeCount!==1||i.anchorNode!==h.node||i.anchorOffset!==h.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),i.removeAllRanges(),m>c?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var I3=f&&"documentMode"in document&&11>=document.documentMode,Wo=null,hd=null,Tl=null,pd=!1;function ag(i,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pd||Wo==null||Wo!==Gt(c)||(c=Wo,"selectionStart"in c&&dd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Tl&&Ml(Tl,c)||(Tl=c,c=Vu(hd,"onSelect"),0<c.length&&(s=new rd("onSelect","select",null,s,a),i.push({event:s,listeners:c}),s.target=Wo)))}function ku(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Xo={animationend:ku("Animation","AnimationEnd"),animationiteration:ku("Animation","AnimationIteration"),animationstart:ku("Animation","AnimationStart"),transitionend:ku("Transition","TransitionEnd")},md={},lg={};f&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function Bu(i){if(md[i])return md[i];if(!Xo[i])return i;var s=Xo[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in lg)return md[i]=s[a];return i}var ug=Bu("animationend"),cg=Bu("animationiteration"),fg=Bu("animationstart"),dg=Bu("transitionend"),hg=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _s(i,s){hg.set(i,s),l(s,[i])}for(var gd=0;gd<pg.length;gd++){var _d=pg[gd],N3=_d.toLowerCase(),U3=_d[0].toUpperCase()+_d.slice(1);_s(N3,"on"+U3)}_s(ug,"onAnimationEnd"),_s(cg,"onAnimationIteration"),_s(fg,"onAnimationStart"),_s("dblclick","onDoubleClick"),_s("focusin","onFocus"),_s("focusout","onBlur"),_s(dg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F3=new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));function mg(i,s,a){var c=i.type||"unknown-event";i.currentTarget=a,Mu(c,s,void 0,i),i.currentTarget=null}function gg(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var c=i[a],h=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var E=c.length-1;0<=E;E--){var L=c[E],O=L.instance,ne=L.currentTarget;if(L=L.listener,O!==m&&h.isPropagationStopped())break e;mg(h,L,ne),m=O}else for(E=0;E<c.length;E++){if(L=c[E],O=L.instance,ne=L.currentTarget,L=L.listener,O!==m&&h.isPropagationStopped())break e;mg(h,L,ne),m=O}}}if(Ks)throw i=cs,Ks=!1,cs=null,i}function jt(i,s){var a=s[wd];a===void 0&&(a=s[wd]=new Set);var c=i+"__bubble";a.has(c)||(_g(s,i,2,!1),a.add(c))}function vd(i,s,a){var c=0;s&&(c|=4),_g(a,i,c,s)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Al(i){if(!i[zu]){i[zu]=!0,r.forEach(function(a){a!=="selectionchange"&&(F3.has(a)||vd(a,!1,i),vd(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[zu]||(s[zu]=!0,vd("selectionchange",!1,s))}}function _g(i,s,a,c){switch(z0(s)){case 1:var h=Kx;break;case 4:h=Zx;break;default:h=td}a=h.bind(null,s,a,i),h=void 0,!Bo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),c?h!==void 0?i.addEventListener(s,a,{capture:!0,passive:h}):i.addEventListener(s,a,!0):h!==void 0?i.addEventListener(s,a,{passive:h}):i.addEventListener(s,a,!1)}function yd(i,s,a,c,h){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var L=c.stateNode.containerInfo;if(L===h||L.nodeType===8&&L.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===h||O.nodeType===8&&O.parentNode===h))return;E=E.return}for(;L!==null;){if(E=Zs(L),E===null)return;if(O=E.tag,O===5||O===6){c=m=E;continue e}L=L.parentNode}}c=c.return}si(function(){var ne=m,ve=H(a),ye=[];e:{var me=hg.get(i);if(me!==void 0){var Ne=rd,Ve=i;switch(i){case"keypress":if(Nu(a)===0)break e;case"keydown":case"keyup":Ne=d3;break;case"focusin":Ve="focus",Ne=ad;break;case"focusout":Ve="blur",Ne=ad;break;case"beforeblur":case"afterblur":Ne=ad;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=G0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=e3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=m3;break;case ug:case cg:case fg:Ne=i3;break;case dg:Ne=_3;break;case"scroll":Ne=Qx;break;case"wheel":Ne=y3;break;case"copy":case"cut":case"paste":Ne=s3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=X0}var We=(s&4)!==0,fn=!We&&i==="scroll",q=We?me!==null?me+"Capture":null:me;We=[];for(var V=ne,K;V!==null;){K=V;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,q!==null&&(Te=ei(V,q),Te!=null&&We.push(Rl(V,Te,K)))),fn)break;V=V.return}0<We.length&&(me=new Ne(me,Ve,null,a,ve),ye.push({event:me,listeners:We}))}}if((s&7)===0){e:{if(me=i==="mouseover"||i==="pointerover",Ne=i==="mouseout"||i==="pointerout",me&&a!==Nt&&(Ve=a.relatedTarget||a.fromElement)&&(Zs(Ve)||Ve[Ur]))break e;if((Ne||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Ne?(Ve=a.relatedTarget||a.toElement,Ne=ne,Ve=Ve?Zs(Ve):null,Ve!==null&&(fn=pr(Ve),Ve!==fn||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ne=null,Ve=ne),Ne!==Ve)){if(We=G0,Te="onMouseLeave",q="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(We=X0,Te="onPointerLeave",q="onPointerEnter",V="pointer"),fn=Ne==null?me:qo(Ne),K=Ve==null?me:qo(Ve),me=new We(Te,V+"leave",Ne,a,ve),me.target=fn,me.relatedTarget=K,Te=null,Zs(ve)===ne&&(We=new We(q,V+"enter",Ve,a,ve),We.target=K,We.relatedTarget=fn,Te=We),fn=Te,Ne&&Ve)t:{for(We=Ne,q=Ve,V=0,K=We;K;K=jo(K))V++;for(K=0,Te=q;Te;Te=jo(Te))K++;for(;0<V-K;)We=jo(We),V--;for(;0<K-V;)q=jo(q),K--;for(;V--;){if(We===q||q!==null&&We===q.alternate)break t;We=jo(We),q=jo(q)}We=null}else We=null;Ne!==null&&vg(ye,me,Ne,We,!1),Ve!==null&&fn!==null&&vg(ye,fn,Ve,We,!0)}}e:{if(me=ne?qo(ne):window,Ne=me.nodeName&&me.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&me.type==="file")var Ye=A3;else if(Z0(me))if(J0)Ye=P3;else{Ye=C3;var tt=R3}else(Ne=me.nodeName)&&Ne.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ye=b3);if(Ye&&(Ye=Ye(i,ne))){Q0(ye,Ye,a,ve);break e}tt&&tt(i,me,ne),i==="focusout"&&(tt=me._wrapperState)&&tt.controlled&&me.type==="number"&&Ft(me,"number",me.value)}switch(tt=ne?qo(ne):window,i){case"focusin":(Z0(tt)||tt.contentEditable==="true")&&(Wo=tt,hd=ne,Tl=null);break;case"focusout":Tl=hd=Wo=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,ag(ye,a,ve);break;case"selectionchange":if(I3)break;case"keydown":case"keyup":ag(ye,a,ve)}var nt;if(ud)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Go?$0(i,a)&&(lt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(j0&&a.locale!=="ko"&&(Go||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Go&&(nt=V0()):(gs=ve,id="value"in gs?gs.value:gs.textContent,Go=!0)),tt=Vu(ne,lt),0<tt.length&&(lt=new W0(lt,i,null,a,ve),ye.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=K0(a),nt!==null&&(lt.data=nt)))),(nt=S3?E3(i,a):M3(i,a))&&(ne=Vu(ne,"onBeforeInput"),0<ne.length&&(ve=new W0("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:ne}),ve.data=nt))}gg(ye,s)})}function Rl(i,s,a){return{instance:i,listener:s,currentTarget:a}}function Vu(i,s){for(var a=s+"Capture",c=[];i!==null;){var h=i,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=ei(i,a),m!=null&&c.unshift(Rl(i,m,h)),m=ei(i,s),m!=null&&c.push(Rl(i,m,h))),i=i.return}return c}function jo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function vg(i,s,a,c,h){for(var m=s._reactName,E=[];a!==null&&a!==c;){var L=a,O=L.alternate,ne=L.stateNode;if(O!==null&&O===c)break;L.tag===5&&ne!==null&&(L=ne,h?(O=ei(a,m),O!=null&&E.unshift(Rl(a,O,L))):h||(O=ei(a,m),O!=null&&E.push(Rl(a,O,L)))),a=a.return}E.length!==0&&i.push({event:s,listeners:E})}var O3=/\r\n?/g,k3=/\u0000|\uFFFD/g;function yg(i){return(typeof i=="string"?i:""+i).replace(O3,`
`).replace(k3,"")}function Hu(i,s,a){if(s=yg(s),yg(i)!==s&&a)throw Error(n(425))}function Gu(){}var xd=null,Sd=null;function Ed(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,B3=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,z3=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(i){return xg.resolve(null).then(i).catch(V3)}:Md;function V3(i){setTimeout(function(){throw i})}function Td(i,s){var a=s,c=0;do{var h=a.nextSibling;if(i.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){i.removeChild(h),_l(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);_l(s)}function vs(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Sg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),gr="__reactFiber$"+Yo,Cl="__reactProps$"+Yo,Ur="__reactContainer$"+Yo,wd="__reactEvents$"+Yo,H3="__reactListeners$"+Yo,G3="__reactHandles$"+Yo;function Zs(i){var s=i[gr];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Ur]||a[gr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Sg(i);i!==null;){if(a=i[gr])return a;i=Sg(i)}return s}i=a,a=i.parentNode}return null}function bl(i){return i=i[gr]||i[Ur],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function qo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function Wu(i){return i[Cl]||null}var Ad=[],$o=-1;function ys(i){return{current:i}}function Yt(i){0>$o||(i.current=Ad[$o],Ad[$o]=null,$o--)}function Wt(i,s){$o++,Ad[$o]=i.current,i.current=s}var xs={},Gn=ys(xs),oi=ys(!1),Qs=xs;function Ko(i,s){var a=i.type.contextTypes;if(!a)return xs;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=s[m];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=h),h}function ai(i){return i=i.childContextTypes,i!=null}function Xu(){Yt(oi),Yt(Gn)}function Eg(i,s,a){if(Gn.current!==xs)throw Error(n(168));Wt(Gn,s),Wt(oi,a)}function Mg(i,s,a){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in s))throw Error(n(108,ge(i)||"Unknown",h));return se({},a,c)}function ju(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||xs,Qs=Gn.current,Wt(Gn,i),Wt(oi,oi.current),!0}function Tg(i,s,a){var c=i.stateNode;if(!c)throw Error(n(169));a?(i=Mg(i,s,Qs),c.__reactInternalMemoizedMergedChildContext=i,Yt(oi),Yt(Gn),Wt(Gn,i)):Yt(oi),Wt(oi,a)}var Fr=null,Yu=!1,Rd=!1;function wg(i){Fr===null?Fr=[i]:Fr.push(i)}function W3(i){Yu=!0,wg(i)}function Ss(){if(!Rd&&Fr!==null){Rd=!0;var i=0,s=Rt;try{var a=Fr;for(Rt=1;i<a.length;i++){var c=a[i];do c=c(!0);while(c!==null)}Fr=null,Yu=!1}catch(h){throw Fr!==null&&(Fr=Fr.slice(i+1)),Cu(Se,Ss),h}finally{Rt=s,Rd=!1}}return null}var Zo=[],Qo=0,qu=null,$u=0,Oi=[],ki=0,Js=null,Or=1,kr="";function eo(i,s){Zo[Qo++]=$u,Zo[Qo++]=qu,qu=i,$u=s}function Ag(i,s,a){Oi[ki++]=Or,Oi[ki++]=kr,Oi[ki++]=Js,Js=i;var c=Or;i=kr;var h=32-ft(c)-1;c&=~(1<<h),a+=1;var m=32-ft(s)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Or=1<<32-ft(s)+h|a<<h|c,kr=m+i}else Or=1<<m|a<<h|c,kr=i}function Cd(i){i.return!==null&&(eo(i,1),Ag(i,1,0))}function bd(i){for(;i===qu;)qu=Zo[--Qo],Zo[Qo]=null,$u=Zo[--Qo],Zo[Qo]=null;for(;i===Js;)Js=Oi[--ki],Oi[ki]=null,kr=Oi[--ki],Oi[ki]=null,Or=Oi[--ki],Oi[ki]=null}var Si=null,Ei=null,$t=!1,Ji=null;function Rg(i,s){var a=Hi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Cg(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Si=i,Ei=vs(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Si=i,Ei=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Js!==null?{id:Or,overflow:kr}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Hi(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Si=i,Ei=null,!0):!1;default:return!1}}function Pd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ld(i){if($t){var s=Ei;if(s){var a=s;if(!Cg(i,s)){if(Pd(i))throw Error(n(418));s=vs(a.nextSibling);var c=Si;s&&Cg(i,s)?Rg(c,a):(i.flags=i.flags&-4097|2,$t=!1,Si=i)}}else{if(Pd(i))throw Error(n(418));i.flags=i.flags&-4097|2,$t=!1,Si=i}}}function bg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Si=i}function Ku(i){if(i!==Si)return!1;if(!$t)return bg(i),$t=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Ed(i.type,i.memoizedProps)),s&&(s=Ei)){if(Pd(i))throw Pg(),Error(n(418));for(;s;)Rg(i,s),s=vs(s.nextSibling)}if(bg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Ei=vs(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Ei=null}}else Ei=Si?vs(i.stateNode.nextSibling):null;return!0}function Pg(){for(var i=Ei;i;)i=vs(i.nextSibling)}function Jo(){Ei=Si=null,$t=!1}function Dd(i){Ji===null?Ji=[i]:Ji.push(i)}var X3=b.ReactCurrentBatchConfig;function Pl(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,i));var h=c,m=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(E){var L=h.refs;E===null?delete L[m]:L[m]=E},s._stringRef=m,s)}if(typeof i!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,i))}return i}function Zu(i,s){throw i=Object.prototype.toString.call(s),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lg(i){var s=i._init;return s(i._payload)}function Dg(i){function s(q,V){if(i){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function a(q,V){if(!i)return null;for(;V!==null;)s(q,V),V=V.sibling;return null}function c(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function h(q,V){return q=bs(q,V),q.index=0,q.sibling=null,q}function m(q,V,K){return q.index=K,i?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return i&&q.alternate===null&&(q.flags|=2),q}function L(q,V,K,Te){return V===null||V.tag!==6?(V=Mh(K,q.mode,Te),V.return=q,V):(V=h(V,K),V.return=q,V)}function O(q,V,K,Te){var Ye=K.type;return Ye===F?ve(q,V,K.props.children,Te,K.key):V!==null&&(V.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&Lg(Ye)===V.type)?(Te=h(V,K.props),Te.ref=Pl(q,V,K),Te.return=q,Te):(Te=Sc(K.type,K.key,K.props,null,q.mode,Te),Te.ref=Pl(q,V,K),Te.return=q,Te)}function ne(q,V,K,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Th(K,q.mode,Te),V.return=q,V):(V=h(V,K.children||[]),V.return=q,V)}function ve(q,V,K,Te,Ye){return V===null||V.tag!==7?(V=lo(K,q.mode,Te,Ye),V.return=q,V):(V=h(V,K),V.return=q,V)}function ye(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Mh(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return K=Sc(V.type,V.key,V.props,null,q.mode,K),K.ref=Pl(q,null,V),K.return=q,K;case z:return V=Th(V,q.mode,K),V.return=q,V;case ae:var Te=V._init;return ye(q,Te(V._payload),K)}if(Xe(V)||te(V))return V=lo(V,q.mode,K,null),V.return=q,V;Zu(q,V)}return null}function me(q,V,K,Te){var Ye=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ye!==null?null:L(q,V,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===Ye?O(q,V,K,Te):null;case z:return K.key===Ye?ne(q,V,K,Te):null;case ae:return Ye=K._init,me(q,V,Ye(K._payload),Te)}if(Xe(K)||te(K))return Ye!==null?null:ve(q,V,K,Te,null);Zu(q,K)}return null}function Ne(q,V,K,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(K)||null,L(V,q,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case G:return q=q.get(Te.key===null?K:Te.key)||null,O(V,q,Te,Ye);case z:return q=q.get(Te.key===null?K:Te.key)||null,ne(V,q,Te,Ye);case ae:var tt=Te._init;return Ne(q,V,K,tt(Te._payload),Ye)}if(Xe(Te)||te(Te))return q=q.get(K)||null,ve(V,q,Te,Ye,null);Zu(V,Te)}return null}function Ve(q,V,K,Te){for(var Ye=null,tt=null,nt=V,lt=V=0,In=null;nt!==null&&lt<K.length;lt++){nt.index>lt?(In=nt,nt=null):In=nt.sibling;var Pt=me(q,nt,K[lt],Te);if(Pt===null){nt===null&&(nt=In);break}i&&nt&&Pt.alternate===null&&s(q,nt),V=m(Pt,V,lt),tt===null?Ye=Pt:tt.sibling=Pt,tt=Pt,nt=In}if(lt===K.length)return a(q,nt),$t&&eo(q,lt),Ye;if(nt===null){for(;lt<K.length;lt++)nt=ye(q,K[lt],Te),nt!==null&&(V=m(nt,V,lt),tt===null?Ye=nt:tt.sibling=nt,tt=nt);return $t&&eo(q,lt),Ye}for(nt=c(q,nt);lt<K.length;lt++)In=Ne(nt,q,lt,K[lt],Te),In!==null&&(i&&In.alternate!==null&&nt.delete(In.key===null?lt:In.key),V=m(In,V,lt),tt===null?Ye=In:tt.sibling=In,tt=In);return i&&nt.forEach(function(Ps){return s(q,Ps)}),$t&&eo(q,lt),Ye}function We(q,V,K,Te){var Ye=te(K);if(typeof Ye!="function")throw Error(n(150));if(K=Ye.call(K),K==null)throw Error(n(151));for(var tt=Ye=null,nt=V,lt=V=0,In=null,Pt=K.next();nt!==null&&!Pt.done;lt++,Pt=K.next()){nt.index>lt?(In=nt,nt=null):In=nt.sibling;var Ps=me(q,nt,Pt.value,Te);if(Ps===null){nt===null&&(nt=In);break}i&&nt&&Ps.alternate===null&&s(q,nt),V=m(Ps,V,lt),tt===null?Ye=Ps:tt.sibling=Ps,tt=Ps,nt=In}if(Pt.done)return a(q,nt),$t&&eo(q,lt),Ye;if(nt===null){for(;!Pt.done;lt++,Pt=K.next())Pt=ye(q,Pt.value,Te),Pt!==null&&(V=m(Pt,V,lt),tt===null?Ye=Pt:tt.sibling=Pt,tt=Pt);return $t&&eo(q,lt),Ye}for(nt=c(q,nt);!Pt.done;lt++,Pt=K.next())Pt=Ne(nt,q,lt,Pt.value,Te),Pt!==null&&(i&&Pt.alternate!==null&&nt.delete(Pt.key===null?lt:Pt.key),V=m(Pt,V,lt),tt===null?Ye=Pt:tt.sibling=Pt,tt=Pt);return i&&nt.forEach(function(TS){return s(q,TS)}),$t&&eo(q,lt),Ye}function fn(q,V,K,Te){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var Ye=K.key,tt=V;tt!==null;){if(tt.key===Ye){if(Ye=K.type,Ye===F){if(tt.tag===7){a(q,tt.sibling),V=h(tt,K.props.children),V.return=q,q=V;break e}}else if(tt.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&Lg(Ye)===tt.type){a(q,tt.sibling),V=h(tt,K.props),V.ref=Pl(q,tt,K),V.return=q,q=V;break e}a(q,tt);break}else s(q,tt);tt=tt.sibling}K.type===F?(V=lo(K.props.children,q.mode,Te,K.key),V.return=q,q=V):(Te=Sc(K.type,K.key,K.props,null,q.mode,Te),Te.ref=Pl(q,V,K),Te.return=q,q=Te)}return E(q);case z:e:{for(tt=K.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(q,V.sibling),V=h(V,K.children||[]),V.return=q,q=V;break e}else{a(q,V);break}else s(q,V);V=V.sibling}V=Th(K,q.mode,Te),V.return=q,q=V}return E(q);case ae:return tt=K._init,fn(q,V,tt(K._payload),Te)}if(Xe(K))return Ve(q,V,K,Te);if(te(K))return We(q,V,K,Te);Zu(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(a(q,V.sibling),V=h(V,K),V.return=q,q=V):(a(q,V),V=Mh(K,q.mode,Te),V.return=q,q=V),E(q)):a(q,V)}return fn}var ea=Dg(!0),Ig=Dg(!1),Qu=ys(null),Ju=null,ta=null,Id=null;function Nd(){Id=ta=Ju=null}function Ud(i){var s=Qu.current;Yt(Qu),i._currentValue=s}function Fd(i,s,a){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===a)break;i=i.return}}function na(i,s){Ju=i,Id=ta=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(li=!0),i.firstContext=null)}function Bi(i){var s=i._currentValue;if(Id!==i)if(i={context:i,memoizedValue:s,next:null},ta===null){if(Ju===null)throw Error(n(308));ta=i,Ju.dependencies={lanes:0,firstContext:i}}else ta=ta.next=i;return s}var to=null;function Od(i){to===null?to=[i]:to.push(i)}function Ng(i,s,a,c){var h=s.interleaved;return h===null?(a.next=a,Od(s)):(a.next=h.next,h.next=a),s.interleaved=a,Br(i,c)}function Br(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Es=!1;function kd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ms(i,s,a){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Ct&2)!==0){var h=c.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s,Br(i,a)}return h=c.interleaved,h===null?(s.next=s,Od(c)):(s.next=h.next,h.next=s),c.interleaved=s,Br(i,a)}function ec(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Pn(i,a)}}function Fg(i,s){var a=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?h=m=s:m=m.next=s}else h=m=s;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function tc(i,s,a,c){var h=i.updateQueue;Es=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var O=L,ne=O.next;O.next=null,E===null?m=ne:E.next=ne,E=O;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==E&&(L===null?ve.firstBaseUpdate=ne:L.next=ne,ve.lastBaseUpdate=O))}if(m!==null){var ye=h.baseState;E=0,ve=ne=O=null,L=m;do{var me=L.lane,Ne=L.eventTime;if((c&me)===me){ve!==null&&(ve=ve.next={eventTime:Ne,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Ve=i,We=L;switch(me=s,Ne=a,We.tag){case 1:if(Ve=We.payload,typeof Ve=="function"){ye=Ve.call(Ne,ye,me);break e}ye=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=We.payload,me=typeof Ve=="function"?Ve.call(Ne,ye,me):Ve,me==null)break e;ye=se({},ye,me);break e;case 2:Es=!0}}L.callback!==null&&L.lane!==0&&(i.flags|=64,me=h.effects,me===null?h.effects=[L]:me.push(L))}else Ne={eventTime:Ne,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(ne=ve=Ne,O=ye):ve=ve.next=Ne,E|=me;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;me=L,L=me.next,me.next=null,h.lastBaseUpdate=me,h.shared.pending=null}}while(!0);if(ve===null&&(O=ye),h.baseState=O,h.firstBaseUpdate=ne,h.lastBaseUpdate=ve,s=h.shared.interleaved,s!==null){h=s;do E|=h.lane,h=h.next;while(h!==s)}else m===null&&(h.shared.lanes=0);ro|=E,i.lanes=E,i.memoizedState=ye}}function Og(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(n(191,h));h.call(c)}}}var Ll={},_r=ys(Ll),Dl=ys(Ll),Il=ys(Ll);function no(i){if(i===Ll)throw Error(n(174));return i}function Bd(i,s){switch(Wt(Il,s),Wt(Dl,i),Wt(_r,Ll),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:je(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=je(s,i)}Yt(_r),Wt(_r,s)}function ia(){Yt(_r),Yt(Dl),Yt(Il)}function kg(i){no(Il.current);var s=no(_r.current),a=je(s,i.type);s!==a&&(Wt(Dl,i),Wt(_r,a))}function zd(i){Dl.current===i&&(Yt(_r),Yt(Dl))}var Jt=ys(0);function nc(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Vd=[];function Hd(){for(var i=0;i<Vd.length;i++)Vd[i]._workInProgressVersionPrimary=null;Vd.length=0}var ic=b.ReactCurrentDispatcher,Gd=b.ReactCurrentBatchConfig,io=0,en=null,Sn=null,Ln=null,rc=!1,Nl=!1,Ul=0,j3=0;function Wn(){throw Error(n(321))}function Wd(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!Qi(i[a],s[a]))return!1;return!0}function Xd(i,s,a,c,h,m){if(io=m,en=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ic.current=i===null||i.memoizedState===null?K3:Z3,i=a(c,h),Nl){m=0;do{if(Nl=!1,Ul=0,25<=m)throw Error(n(301));m+=1,Ln=Sn=null,s.updateQueue=null,ic.current=Q3,i=a(c,h)}while(Nl)}if(ic.current=ac,s=Sn!==null&&Sn.next!==null,io=0,Ln=Sn=en=null,rc=!1,s)throw Error(n(300));return i}function jd(){var i=Ul!==0;return Ul=0,i}function vr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?en.memoizedState=Ln=i:Ln=Ln.next=i,Ln}function zi(){if(Sn===null){var i=en.alternate;i=i!==null?i.memoizedState:null}else i=Sn.next;var s=Ln===null?en.memoizedState:Ln.next;if(s!==null)Ln=s,Sn=i;else{if(i===null)throw Error(n(310));Sn=i,i={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},Ln===null?en.memoizedState=Ln=i:Ln=Ln.next=i}return Ln}function Fl(i,s){return typeof s=="function"?s(i):s}function Yd(i){var s=zi(),a=s.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=i;var c=Sn,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var L=E=null,O=null,ne=m;do{var ve=ne.lane;if((io&ve)===ve)O!==null&&(O=O.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:i(c,ne.action);else{var ye={lane:ve,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};O===null?(L=O=ye,E=c):O=O.next=ye,en.lanes|=ve,ro|=ve}ne=ne.next}while(ne!==null&&ne!==m);O===null?E=c:O.next=L,Qi(c,s.memoizedState)||(li=!0),s.memoizedState=c,s.baseState=E,s.baseQueue=O,a.lastRenderedState=c}if(i=a.interleaved,i!==null){h=i;do m=h.lane,en.lanes|=m,ro|=m,h=h.next;while(h!==i)}else h===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function qd(i){var s=zi(),a=s.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=i;var c=a.dispatch,h=a.pending,m=s.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do m=i(m,E.action),E=E.next;while(E!==h);Qi(m,s.memoizedState)||(li=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function Bg(){}function zg(i,s){var a=en,c=zi(),h=s(),m=!Qi(c.memoizedState,h);if(m&&(c.memoizedState=h,li=!0),c=c.queue,$d(Gg.bind(null,a,c,i),[i]),c.getSnapshot!==s||m||Ln!==null&&Ln.memoizedState.tag&1){if(a.flags|=2048,Ol(9,Hg.bind(null,a,c,h,s),void 0,null),Dn===null)throw Error(n(349));(io&30)!==0||Vg(a,s,h)}return h}function Vg(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Hg(i,s,a,c){s.value=a,s.getSnapshot=c,Wg(s)&&Xg(i)}function Gg(i,s,a){return a(function(){Wg(s)&&Xg(i)})}function Wg(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!Qi(i,a)}catch{return!0}}function Xg(i){var s=Br(i,1);s!==null&&ir(s,i,1,-1)}function jg(i){var s=vr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fl,lastRenderedState:i},s.queue=i,i=i.dispatch=$3.bind(null,en,i),[s.memoizedState,i]}function Ol(i,s,a,c){return i={tag:i,create:s,destroy:a,deps:c,next:null},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(c=a.next,a.next=i,i.next=c,s.lastEffect=i)),i}function Yg(){return zi().memoizedState}function sc(i,s,a,c){var h=vr();en.flags|=i,h.memoizedState=Ol(1|s,a,void 0,c===void 0?null:c)}function oc(i,s,a,c){var h=zi();c=c===void 0?null:c;var m=void 0;if(Sn!==null){var E=Sn.memoizedState;if(m=E.destroy,c!==null&&Wd(c,E.deps)){h.memoizedState=Ol(s,a,m,c);return}}en.flags|=i,h.memoizedState=Ol(1|s,a,m,c)}function qg(i,s){return sc(8390656,8,i,s)}function $d(i,s){return oc(2048,8,i,s)}function $g(i,s){return oc(4,2,i,s)}function Kg(i,s){return oc(4,4,i,s)}function Zg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Qg(i,s,a){return a=a!=null?a.concat([i]):null,oc(4,4,Zg.bind(null,s,i),a)}function Kd(){}function Jg(i,s){var a=zi();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Wd(s,c[1])?c[0]:(a.memoizedState=[i,s],i)}function e_(i,s){var a=zi();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Wd(s,c[1])?c[0]:(i=i(),a.memoizedState=[i,s],i)}function t_(i,s,a){return(io&21)===0?(i.baseState&&(i.baseState=!1,li=!0),i.memoizedState=a):(Qi(a,s)||(a=zt(),en.lanes|=a,ro|=a,i.baseState=!0),s)}function Y3(i,s){var a=Rt;Rt=a!==0&&4>a?a:4,i(!0);var c=Gd.transition;Gd.transition={};try{i(!1),s()}finally{Rt=a,Gd.transition=c}}function n_(){return zi().memoizedState}function q3(i,s,a){var c=Rs(i);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},i_(i))r_(s,a);else if(a=Ng(i,s,a,c),a!==null){var h=ii();ir(a,i,c,h),s_(a,s,c)}}function $3(i,s,a){var c=Rs(i),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(i_(i))r_(s,h);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var E=s.lastRenderedState,L=m(E,a);if(h.hasEagerState=!0,h.eagerState=L,Qi(L,E)){var O=s.interleaved;O===null?(h.next=h,Od(s)):(h.next=O.next,O.next=h),s.interleaved=h;return}}catch{}finally{}a=Ng(i,s,h,c),a!==null&&(h=ii(),ir(a,i,c,h),s_(a,s,c))}}function i_(i){var s=i.alternate;return i===en||s!==null&&s===en}function r_(i,s){Nl=rc=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function s_(i,s,a){if((a&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Pn(i,a)}}var ac={readContext:Bi,useCallback:Wn,useContext:Wn,useEffect:Wn,useImperativeHandle:Wn,useInsertionEffect:Wn,useLayoutEffect:Wn,useMemo:Wn,useReducer:Wn,useRef:Wn,useState:Wn,useDebugValue:Wn,useDeferredValue:Wn,useTransition:Wn,useMutableSource:Wn,useSyncExternalStore:Wn,useId:Wn,unstable_isNewReconciler:!1},K3={readContext:Bi,useCallback:function(i,s){return vr().memoizedState=[i,s===void 0?null:s],i},useContext:Bi,useEffect:qg,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,sc(4194308,4,Zg.bind(null,s,i),a)},useLayoutEffect:function(i,s){return sc(4194308,4,i,s)},useInsertionEffect:function(i,s){return sc(4,2,i,s)},useMemo:function(i,s){var a=vr();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var c=vr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=q3.bind(null,en,i),[c.memoizedState,i]},useRef:function(i){var s=vr();return i={current:i},s.memoizedState=i},useState:jg,useDebugValue:Kd,useDeferredValue:function(i){return vr().memoizedState=i},useTransition:function(){var i=jg(!1),s=i[0];return i=Y3.bind(null,i[1]),vr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var c=en,h=vr();if($t){if(a===void 0)throw Error(n(407));a=a()}else{if(a=s(),Dn===null)throw Error(n(349));(io&30)!==0||Vg(c,s,a)}h.memoizedState=a;var m={value:a,getSnapshot:s};return h.queue=m,qg(Gg.bind(null,c,m,i),[i]),c.flags|=2048,Ol(9,Hg.bind(null,c,m,a,s),void 0,null),a},useId:function(){var i=vr(),s=Dn.identifierPrefix;if($t){var a=kr,c=Or;a=(c&~(1<<32-ft(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ul++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=j3++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},Z3={readContext:Bi,useCallback:Jg,useContext:Bi,useEffect:$d,useImperativeHandle:Qg,useInsertionEffect:$g,useLayoutEffect:Kg,useMemo:e_,useReducer:Yd,useRef:Yg,useState:function(){return Yd(Fl)},useDebugValue:Kd,useDeferredValue:function(i){var s=zi();return t_(s,Sn.memoizedState,i)},useTransition:function(){var i=Yd(Fl)[0],s=zi().memoizedState;return[i,s]},useMutableSource:Bg,useSyncExternalStore:zg,useId:n_,unstable_isNewReconciler:!1},Q3={readContext:Bi,useCallback:Jg,useContext:Bi,useEffect:$d,useImperativeHandle:Qg,useInsertionEffect:$g,useLayoutEffect:Kg,useMemo:e_,useReducer:qd,useRef:Yg,useState:function(){return qd(Fl)},useDebugValue:Kd,useDeferredValue:function(i){var s=zi();return Sn===null?s.memoizedState=i:t_(s,Sn.memoizedState,i)},useTransition:function(){var i=qd(Fl)[0],s=zi().memoizedState;return[i,s]},useMutableSource:Bg,useSyncExternalStore:zg,useId:n_,unstable_isNewReconciler:!1};function er(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function Zd(i,s,a,c){s=i.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var lc={isMounted:function(i){return(i=i._reactInternals)?pr(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var c=ii(),h=Rs(i),m=zr(c,h);m.payload=s,a!=null&&(m.callback=a),s=Ms(i,m,h),s!==null&&(ir(s,i,h,c),ec(s,i,h))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var c=ii(),h=Rs(i),m=zr(c,h);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=Ms(i,m,h),s!==null&&(ir(s,i,h,c),ec(s,i,h))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=ii(),c=Rs(i),h=zr(a,c);h.tag=2,s!=null&&(h.callback=s),s=Ms(i,h,c),s!==null&&(ir(s,i,c,a),ec(s,i,c))}};function o_(i,s,a,c,h,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,m,E):s.prototype&&s.prototype.isPureReactComponent?!Ml(a,c)||!Ml(h,m):!0}function a_(i,s,a){var c=!1,h=xs,m=s.contextType;return typeof m=="object"&&m!==null?m=Bi(m):(h=ai(s)?Qs:Gn.current,c=s.contextTypes,m=(c=c!=null)?Ko(i,h):xs),s=new s(a,m),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=lc,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=h,i.__reactInternalMemoizedMaskedChildContext=m),s}function l_(i,s,a,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==i&&lc.enqueueReplaceState(s,s.state,null)}function Qd(i,s,a,c){var h=i.stateNode;h.props=a,h.state=i.memoizedState,h.refs={},kd(i);var m=s.contextType;typeof m=="object"&&m!==null?h.context=Bi(m):(m=ai(s)?Qs:Gn.current,h.context=Ko(i,m)),h.state=i.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Zd(i,s,m,a),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&lc.enqueueReplaceState(h,h.state,null),tc(i,a,h,c),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308)}function ra(i,s){try{var a="",c=s;do a+=ce(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:i,source:s,stack:h,digest:null}}function Jd(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function eh(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var J3=typeof WeakMap=="function"?WeakMap:Map;function u_(i,s,a){a=zr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){mc||(mc=!0,mh=c),eh(i,s)},a}function c_(i,s,a){a=zr(-1,a),a.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var h=s.value;a.payload=function(){return c(h)},a.callback=function(){eh(i,s)}}var m=i.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){eh(i,s),typeof c!="function"&&(ws===null?ws=new Set([this]):ws.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function f_(i,s,a){var c=i.pingCache;if(c===null){c=i.pingCache=new J3;var h=new Set;c.set(s,h)}else h=c.get(s),h===void 0&&(h=new Set,c.set(s,h));h.has(a)||(h.add(a),i=hS.bind(null,i,s,a),s.then(i,i))}function d_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function h_(i,s,a,c,h){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=zr(-1,1),s.tag=2,Ms(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=h,i)}var eS=b.ReactCurrentOwner,li=!1;function ni(i,s,a,c){s.child=i===null?Ig(s,null,a,c):ea(s,i.child,a,c)}function p_(i,s,a,c,h){a=a.render;var m=s.ref;return na(s,h),c=Xd(i,s,a,c,m,h),a=jd(),i!==null&&!li?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~h,Vr(i,s,h)):($t&&a&&Cd(s),s.flags|=1,ni(i,s,c,h),s.child)}function m_(i,s,a,c,h){if(i===null){var m=a.type;return typeof m=="function"&&!Eh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,g_(i,s,m,c,h)):(i=Sc(a.type,null,c,s,s.mode,h),i.ref=s.ref,i.return=s,s.child=i)}if(m=i.child,(i.lanes&h)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ml,a(E,c)&&i.ref===s.ref)return Vr(i,s,h)}return s.flags|=1,i=bs(m,c),i.ref=s.ref,i.return=s,s.child=i}function g_(i,s,a,c,h){if(i!==null){var m=i.memoizedProps;if(Ml(m,c)&&i.ref===s.ref)if(li=!1,s.pendingProps=c=m,(i.lanes&h)!==0)(i.flags&131072)!==0&&(li=!0);else return s.lanes=i.lanes,Vr(i,s,h)}return th(i,s,a,c,h)}function __(i,s,a){var c=s.pendingProps,h=c.children,m=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(oa,Mi),Mi|=a;else{if((a&1073741824)===0)return i=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Wt(oa,Mi),Mi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Wt(oa,Mi),Mi|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Wt(oa,Mi),Mi|=c;return ni(i,s,h,a),s.child}function v_(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function th(i,s,a,c,h){var m=ai(a)?Qs:Gn.current;return m=Ko(s,m),na(s,h),a=Xd(i,s,a,c,m,h),c=jd(),i!==null&&!li?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~h,Vr(i,s,h)):($t&&c&&Cd(s),s.flags|=1,ni(i,s,a,h),s.child)}function y_(i,s,a,c,h){if(ai(a)){var m=!0;ju(s)}else m=!1;if(na(s,h),s.stateNode===null)cc(i,s),a_(s,a,c),Qd(s,a,c,h),c=!0;else if(i===null){var E=s.stateNode,L=s.memoizedProps;E.props=L;var O=E.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Bi(ne):(ne=ai(a)?Qs:Gn.current,ne=Ko(s,ne));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==c||O!==ne)&&l_(s,E,c,ne),Es=!1;var me=s.memoizedState;E.state=me,tc(s,c,E,h),O=s.memoizedState,L!==c||me!==O||oi.current||Es?(typeof ve=="function"&&(Zd(s,a,ve,c),O=s.memoizedState),(L=Es||o_(s,a,L,c,me,O,ne))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=O),E.props=c,E.state=O,E.context=ne,c=L):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{E=s.stateNode,Ug(i,s),L=s.memoizedProps,ne=s.type===s.elementType?L:er(s.type,L),E.props=ne,ye=s.pendingProps,me=E.context,O=a.contextType,typeof O=="object"&&O!==null?O=Bi(O):(O=ai(a)?Qs:Gn.current,O=Ko(s,O));var Ne=a.getDerivedStateFromProps;(ve=typeof Ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==ye||me!==O)&&l_(s,E,c,O),Es=!1,me=s.memoizedState,E.state=me,tc(s,c,E,h);var Ve=s.memoizedState;L!==ye||me!==Ve||oi.current||Es?(typeof Ne=="function"&&(Zd(s,a,Ne,c),Ve=s.memoizedState),(ne=Es||o_(s,a,ne,c,me,Ve,O)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Ve,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Ve,O)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||L===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Ve),E.props=c,E.state=Ve,E.context=O,c=ne):(typeof E.componentDidUpdate!="function"||L===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),c=!1)}return nh(i,s,a,c,m,h)}function nh(i,s,a,c,h,m){v_(i,s);var E=(s.flags&128)!==0;if(!c&&!E)return h&&Tg(s,a,!1),Vr(i,s,m);c=s.stateNode,eS.current=s;var L=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&E?(s.child=ea(s,i.child,null,m),s.child=ea(s,null,L,m)):ni(i,s,L,m),s.memoizedState=c.state,h&&Tg(s,a,!0),s.child}function x_(i){var s=i.stateNode;s.pendingContext?Eg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Eg(i,s.context,!1),Bd(i,s.containerInfo)}function S_(i,s,a,c,h){return Jo(),Dd(h),s.flags|=256,ni(i,s,a,c),s.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function rh(i){return{baseLanes:i,cachePool:null,transitions:null}}function E_(i,s,a){var c=s.pendingProps,h=Jt.current,m=!1,E=(s.flags&128)!==0,L;if((L=E)||(L=i!==null&&i.memoizedState===null?!1:(h&2)!==0),L?(m=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(h|=1),Wt(Jt,h&1),i===null)return Ld(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=c.children,i=c.fallback,m?(c=s.mode,m=s.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Ec(E,c,0,null),i=lo(i,c,a,null),m.return=s,i.return=s,m.sibling=i,s.child=m,s.child.memoizedState=rh(a),s.memoizedState=ih,i):sh(s,E));if(h=i.memoizedState,h!==null&&(L=h.dehydrated,L!==null))return tS(i,s,E,c,L,h,a);if(m){m=c.fallback,E=s.mode,h=i.child,L=h.sibling;var O={mode:"hidden",children:c.children};return(E&1)===0&&s.child!==h?(c=s.child,c.childLanes=0,c.pendingProps=O,s.deletions=null):(c=bs(h,O),c.subtreeFlags=h.subtreeFlags&14680064),L!==null?m=bs(L,m):(m=lo(m,E,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,E=i.child.memoizedState,E=E===null?rh(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=i.childLanes&~a,s.memoizedState=ih,c}return m=i.child,i=m.sibling,c=bs(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=c,s.memoizedState=null,c}function sh(i,s){return s=Ec({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function uc(i,s,a,c){return c!==null&&Dd(c),ea(s,i.child,null,a),i=sh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function tS(i,s,a,c,h,m,E){if(a)return s.flags&256?(s.flags&=-257,c=Jd(Error(n(422))),uc(i,s,E,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(m=c.fallback,h=s.mode,c=Ec({mode:"visible",children:c.children},h,0,null),m=lo(m,h,E,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&ea(s,i.child,null,E),s.child.memoizedState=rh(E),s.memoizedState=ih,m);if((s.mode&1)===0)return uc(i,s,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var L=c.dgst;return c=L,m=Error(n(419)),c=Jd(m,c,void 0),uc(i,s,E,c)}if(L=(E&i.childLanes)!==0,li||L){if(c=Dn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Br(i,h),ir(c,i,h,-1))}return Sh(),c=Jd(Error(n(421))),uc(i,s,E,c)}return h.data==="$?"?(s.flags|=128,s.child=i.child,s=pS.bind(null,i),h._reactRetry=s,null):(i=m.treeContext,Ei=vs(h.nextSibling),Si=s,$t=!0,Ji=null,i!==null&&(Oi[ki++]=Or,Oi[ki++]=kr,Oi[ki++]=Js,Or=i.id,kr=i.overflow,Js=s),s=sh(s,c.children),s.flags|=4096,s)}function M_(i,s,a){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Fd(i.return,s,a)}function oh(i,s,a,c,h){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function T_(i,s,a){var c=s.pendingProps,h=c.revealOrder,m=c.tail;if(ni(i,s,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&M_(i,a,s);else if(i.tag===19)M_(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Wt(Jt,c),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(a=s.child,h=null;a!==null;)i=a.alternate,i!==null&&nc(i)===null&&(h=a),a=a.sibling;a=h,a===null?(h=s.child,s.child=null):(h=a.sibling,a.sibling=null),oh(s,!1,h,a,m);break;case"backwards":for(a=null,h=s.child,s.child=null;h!==null;){if(i=h.alternate,i!==null&&nc(i)===null){s.child=h;break}i=h.sibling,h.sibling=a,a=h,h=i}oh(s,!0,a,null,m);break;case"together":oh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function cc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Vr(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),ro|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(n(153));if(s.child!==null){for(i=s.child,a=bs(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=bs(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function nS(i,s,a){switch(s.tag){case 3:x_(s),Jo();break;case 5:kg(s);break;case 1:ai(s.type)&&ju(s);break;case 4:Bd(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,h=s.memoizedProps.value;Wt(Qu,c._currentValue),c._currentValue=h;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Wt(Jt,Jt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?E_(i,s,a):(Wt(Jt,Jt.current&1),i=Vr(i,s,a),i!==null?i.sibling:null);Wt(Jt,Jt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(i.flags&128)!==0){if(c)return T_(i,s,a);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Wt(Jt,Jt.current),c)break;return null;case 22:case 23:return s.lanes=0,__(i,s,a)}return Vr(i,s,a)}var w_,ah,A_,R_;w_=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ah=function(){},A_=function(i,s,a,c){var h=i.memoizedProps;if(h!==c){i=s.stateNode,no(_r.current);var m=null;switch(a){case"input":h=B(i,h),c=B(i,c),m=[];break;case"select":h=se({},h,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":h=T(i,h),c=T(i,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=Gu)}gt(a,c);var E;a=null;for(ne in h)if(!c.hasOwnProperty(ne)&&h.hasOwnProperty(ne)&&h[ne]!=null)if(ne==="style"){var L=h[ne];for(E in L)L.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in c){var O=c[ne];if(L=h!=null?h[ne]:void 0,c.hasOwnProperty(ne)&&O!==L&&(O!=null||L!=null))if(ne==="style")if(L){for(E in L)!L.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in O)O.hasOwnProperty(E)&&L[E]!==O[E]&&(a||(a={}),a[E]=O[E])}else a||(m||(m=[]),m.push(ne,a)),a=O;else ne==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(m=m||[]).push(ne,O)):ne==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(ne,""+O):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(O!=null&&ne==="onScroll"&&jt("scroll",i),m||L===O||(m=[])):(m=m||[]).push(ne,O))}a&&(m=m||[]).push("style",a);var ne=m;(s.updateQueue=ne)&&(s.flags|=4)}},R_=function(i,s,a,c){a!==c&&(s.flags|=4)};function kl(i,s){if(!$t)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Xn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,c=0;if(s)for(var h=i.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=i,h=h.sibling;else for(h=i.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=i,h=h.sibling;return i.subtreeFlags|=c,i.childLanes=a,s}function iS(i,s,a){var c=s.pendingProps;switch(bd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(s),null;case 1:return ai(s.type)&&Xu(),Xn(s),null;case 3:return c=s.stateNode,ia(),Yt(oi),Yt(Gn),Hd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(Ku(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ji!==null&&(vh(Ji),Ji=null))),ah(i,s),Xn(s),null;case 5:zd(s);var h=no(Il.current);if(a=s.type,i!==null&&s.stateNode!=null)A_(i,s,a,c,h),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(n(166));return Xn(s),null}if(i=no(_r.current),Ku(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[gr]=s,c[Cl]=m,i=(s.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(h=0;h<wl.length;h++)jt(wl[h],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":Jn(c,m),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},jt("invalid",c);break;case"textarea":J(c,m),jt("invalid",c)}gt(a,m),h=null;for(var E in m)if(m.hasOwnProperty(E)){var L=m[E];E==="children"?typeof L=="string"?c.textContent!==L&&(m.suppressHydrationWarning!==!0&&Hu(c.textContent,L,i),h=["children",L]):typeof L=="number"&&c.textContent!==""+L&&(m.suppressHydrationWarning!==!0&&Hu(c.textContent,L,i),h=["children",""+L]):o.hasOwnProperty(E)&&L!=null&&E==="onScroll"&&jt("scroll",c)}switch(a){case"input":Ot(c),Ze(c,m,!0);break;case"textarea":Ot(c),_e(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Gu)}c=h,s.updateQueue=c,c!==null&&(s.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=E.createElement(a,{is:c.is}):(i=E.createElement(a),a==="select"&&(E=i,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):i=E.createElementNS(i,a),i[gr]=s,i[Cl]=c,w_(i,s,!1,!1),s.stateNode=i;e:{switch(E=ut(a,c),a){case"dialog":jt("cancel",i),jt("close",i),h=c;break;case"iframe":case"object":case"embed":jt("load",i),h=c;break;case"video":case"audio":for(h=0;h<wl.length;h++)jt(wl[h],i);h=c;break;case"source":jt("error",i),h=c;break;case"img":case"image":case"link":jt("error",i),jt("load",i),h=c;break;case"details":jt("toggle",i),h=c;break;case"input":Jn(i,c),h=B(i,c),jt("invalid",i);break;case"option":h=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},h=se({},c,{value:void 0}),jt("invalid",i);break;case"textarea":J(i,c),h=T(i,c),jt("invalid",i);break;default:h=c}gt(a,h),L=h;for(m in L)if(L.hasOwnProperty(m)){var O=L[m];m==="style"?ot(i,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(i,O)):m==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&pt(i,O):typeof O=="number"&&pt(i,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?O!=null&&m==="onScroll"&&jt("scroll",i):O!=null&&D(i,m,O,E))}switch(a){case"input":Ot(i),Ze(i,c,!1);break;case"textarea":Ot(i),_e(i);break;case"option":c.value!=null&&i.setAttribute("value",""+we(c.value));break;case"select":i.multiple=!!c.multiple,m=c.value,m!=null?P(i,!!c.multiple,m,!1):c.defaultValue!=null&&P(i,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(i.onclick=Gu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Xn(s),null;case 6:if(i&&s.stateNode!=null)R_(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(n(166));if(a=no(Il.current),no(_r.current),Ku(s)){if(c=s.stateNode,a=s.memoizedProps,c[gr]=s,(m=c.nodeValue!==a)&&(i=Si,i!==null))switch(i.tag){case 3:Hu(c.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Hu(c.nodeValue,a,(i.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[gr]=s,s.stateNode=c}return Xn(s),null;case 13:if(Yt(Jt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if($t&&Ei!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Pg(),Jo(),s.flags|=98560,m=!1;else if(m=Ku(s),c!==null&&c.dehydrated!==null){if(i===null){if(!m)throw Error(n(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[gr]=s}else Jo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Xn(s),m=!1}else Ji!==null&&(vh(Ji),Ji=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Jt.current&1)!==0?En===0&&(En=3):Sh())),s.updateQueue!==null&&(s.flags|=4),Xn(s),null);case 4:return ia(),ah(i,s),i===null&&Al(s.stateNode.containerInfo),Xn(s),null;case 10:return Ud(s.type._context),Xn(s),null;case 17:return ai(s.type)&&Xu(),Xn(s),null;case 19:if(Yt(Jt),m=s.memoizedState,m===null)return Xn(s),null;if(c=(s.flags&128)!==0,E=m.rendering,E===null)if(c)kl(m,!1);else{if(En!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=nc(i),E!==null){for(s.flags|=128,kl(m,!1),c=E.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,i=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=i,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,i=E.dependencies,m.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Wt(Jt,Jt.current&1|2),s.child}i=i.sibling}m.tail!==null&&$()>aa&&(s.flags|=128,c=!0,kl(m,!1),s.lanes=4194304)}else{if(!c)if(i=nc(E),i!==null){if(s.flags|=128,c=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),kl(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!$t)return Xn(s),null}else 2*$()-m.renderingStartTime>aa&&a!==1073741824&&(s.flags|=128,c=!0,kl(m,!1),s.lanes=4194304);m.isBackwards?(E.sibling=s.child,s.child=E):(a=m.last,a!==null?a.sibling=E:s.child=E,m.last=E)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=$(),s.sibling=null,a=Jt.current,Wt(Jt,c?a&1|2:a&1),s):(Xn(s),null);case 22:case 23:return xh(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(Mi&1073741824)!==0&&(Xn(s),s.subtreeFlags&6&&(s.flags|=8192)):Xn(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function rS(i,s){switch(bd(s),s.tag){case 1:return ai(s.type)&&Xu(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ia(),Yt(oi),Yt(Gn),Hd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return zd(s),null;case 13:if(Yt(Jt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(n(340));Jo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Yt(Jt),null;case 4:return ia(),null;case 10:return Ud(s.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var fc=!1,jn=!1,sS=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function sa(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ln(i,s,c)}else a.current=null}function lh(i,s,a){try{a()}catch(c){ln(i,s,c)}}var C_=!1;function oS(i,s){if(xd=Lu,i=og(),dd(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,L=-1,O=-1,ne=0,ve=0,ye=i,me=null;t:for(;;){for(var Ne;ye!==a||h!==0&&ye.nodeType!==3||(L=E+h),ye!==m||c!==0&&ye.nodeType!==3||(O=E+c),ye.nodeType===3&&(E+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)me=ye,ye=Ne;for(;;){if(ye===i)break t;if(me===a&&++ne===h&&(L=E),me===m&&++ve===c&&(O=E),(Ne=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ne}a=L===-1||O===-1?null:{start:L,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sd={focusedElem:i,selectionRange:a},Lu=!1,Oe=s;Oe!==null;)if(s=Oe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Oe=i;else for(;Oe!==null;){s=Oe;try{var Ve=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var We=Ve.memoizedProps,fn=Ve.memoizedState,q=s.stateNode,V=q.getSnapshotBeforeUpdate(s.elementType===s.type?We:er(s.type,We),fn);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){ln(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,Oe=i;break}Oe=s.return}return Ve=C_,C_=!1,Ve}function Bl(i,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&i)===i){var m=h.destroy;h.destroy=void 0,m!==void 0&&lh(s,a,m)}h=h.next}while(h!==c)}}function dc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function uh(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function b_(i){var s=i.alternate;s!==null&&(i.alternate=null,b_(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[gr],delete s[Cl],delete s[wd],delete s[H3],delete s[G3])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function P_(i){return i.tag===5||i.tag===3||i.tag===4}function L_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||P_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ch(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Gu));else if(c!==4&&(i=i.child,i!==null))for(ch(i,s,a),i=i.sibling;i!==null;)ch(i,s,a),i=i.sibling}function fh(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(fh(i,s,a),i=i.sibling;i!==null;)fh(i,s,a),i=i.sibling}var kn=null,tr=!1;function Ts(i,s,a){for(a=a.child;a!==null;)D_(i,s,a),a=a.sibling}function D_(i,s,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 5:jn||sa(a,s);case 6:var c=kn,h=tr;kn=null,Ts(i,s,a),kn=c,tr=h,kn!==null&&(tr?(i=kn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):kn.removeChild(a.stateNode));break;case 18:kn!==null&&(tr?(i=kn,a=a.stateNode,i.nodeType===8?Td(i.parentNode,a):i.nodeType===1&&Td(i,a),_l(i)):Td(kn,a.stateNode));break;case 4:c=kn,h=tr,kn=a.stateNode.containerInfo,tr=!0,Ts(i,s,a),kn=c,tr=h;break;case 0:case 11:case 14:case 15:if(!jn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&lh(a,s,E),h=h.next}while(h!==c)}Ts(i,s,a);break;case 1:if(!jn&&(sa(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(L){ln(a,s,L)}Ts(i,s,a);break;case 21:Ts(i,s,a);break;case 22:a.mode&1?(jn=(c=jn)||a.memoizedState!==null,Ts(i,s,a),jn=c):Ts(i,s,a);break;default:Ts(i,s,a)}}function I_(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new sS),s.forEach(function(c){var h=mS.bind(null,i,c);a.has(c)||(a.add(c),c.then(h,h))})}}function nr(i,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=i,E=s,L=E;e:for(;L!==null;){switch(L.tag){case 5:kn=L.stateNode,tr=!1;break e;case 3:kn=L.stateNode.containerInfo,tr=!0;break e;case 4:kn=L.stateNode.containerInfo,tr=!0;break e}L=L.return}if(kn===null)throw Error(n(160));D_(m,E,h),kn=null,tr=!1;var O=h.alternate;O!==null&&(O.return=null),h.return=null}catch(ne){ln(h,s,ne)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)N_(s,i),s=s.sibling}function N_(i,s){var a=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(nr(s,i),yr(i),c&4){try{Bl(3,i,i.return),dc(3,i)}catch(We){ln(i,i.return,We)}try{Bl(5,i,i.return)}catch(We){ln(i,i.return,We)}}break;case 1:nr(s,i),yr(i),c&512&&a!==null&&sa(a,a.return);break;case 5:if(nr(s,i),yr(i),c&512&&a!==null&&sa(a,a.return),i.flags&32){var h=i.stateNode;try{pt(h,"")}catch(We){ln(i,i.return,We)}}if(c&4&&(h=i.stateNode,h!=null)){var m=i.memoizedProps,E=a!==null?a.memoizedProps:m,L=i.type,O=i.updateQueue;if(i.updateQueue=null,O!==null)try{L==="input"&&m.type==="radio"&&m.name!=null&&vt(h,m),ut(L,E);var ne=ut(L,m);for(E=0;E<O.length;E+=2){var ve=O[E],ye=O[E+1];ve==="style"?ot(h,ye):ve==="dangerouslySetInnerHTML"?Fe(h,ye):ve==="children"?pt(h,ye):D(h,ve,ye,ne)}switch(L){case"input":mt(h,m);break;case"textarea":pe(h,m);break;case"select":var me=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Ne=m.value;Ne!=null?P(h,!!m.multiple,Ne,!1):me!==!!m.multiple&&(m.defaultValue!=null?P(h,!!m.multiple,m.defaultValue,!0):P(h,!!m.multiple,m.multiple?[]:"",!1))}h[Cl]=m}catch(We){ln(i,i.return,We)}}break;case 6:if(nr(s,i),yr(i),c&4){if(i.stateNode===null)throw Error(n(162));h=i.stateNode,m=i.memoizedProps;try{h.nodeValue=m}catch(We){ln(i,i.return,We)}}break;case 3:if(nr(s,i),yr(i),c&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(s.containerInfo)}catch(We){ln(i,i.return,We)}break;case 4:nr(s,i),yr(i);break;case 13:nr(s,i),yr(i),h=i.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(ph=$())),c&4&&I_(i);break;case 22:if(ve=a!==null&&a.memoizedState!==null,i.mode&1?(jn=(ne=jn)||ve,nr(s,i),jn=ne):nr(s,i),yr(i),c&8192){if(ne=i.memoizedState!==null,(i.stateNode.isHidden=ne)&&!ve&&(i.mode&1)!==0)for(Oe=i,ve=i.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(me=Oe,Ne=me.child,me.tag){case 0:case 11:case 14:case 15:Bl(4,me,me.return);break;case 1:sa(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=me,a=me.return;try{s=c,Ve.props=s.memoizedProps,Ve.state=s.memoizedState,Ve.componentWillUnmount()}catch(We){ln(c,a,We)}}break;case 5:sa(me,me.return);break;case 22:if(me.memoizedState!==null){O_(ye);continue}}Ne!==null?(Ne.return=me,Oe=Ne):O_(ye)}ve=ve.sibling}e:for(ve=null,ye=i;;){if(ye.tag===5){if(ve===null){ve=ye;try{h=ye.stateNode,ne?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(L=ye.stateNode,O=ye.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=et("display",E))}catch(We){ln(i,i.return,We)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ne?"":ye.memoizedProps}catch(We){ln(i,i.return,We)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:nr(s,i),yr(i),c&4&&I_(i);break;case 21:break;default:nr(s,i),yr(i)}}function yr(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(P_(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(pt(h,""),c.flags&=-33);var m=L_(i);fh(i,m,h);break;case 3:case 4:var E=c.stateNode.containerInfo,L=L_(i);ch(i,L,E);break;default:throw Error(n(161))}}catch(O){ln(i,i.return,O)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function aS(i,s,a){Oe=i,U_(i)}function U_(i,s,a){for(var c=(i.mode&1)!==0;Oe!==null;){var h=Oe,m=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||fc;if(!E){var L=h.alternate,O=L!==null&&L.memoizedState!==null||jn;L=fc;var ne=jn;if(fc=E,(jn=O)&&!ne)for(Oe=h;Oe!==null;)E=Oe,O=E.child,E.tag===22&&E.memoizedState!==null?k_(h):O!==null?(O.return=E,Oe=O):k_(h);for(;m!==null;)Oe=m,U_(m),m=m.sibling;Oe=h,fc=L,jn=ne}F_(i)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Oe=m):F_(i)}}function F_(i){for(;Oe!==null;){var s=Oe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jn||dc(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!jn)if(a===null)c.componentDidMount();else{var h=s.elementType===s.type?a.memoizedProps:er(s.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Og(s,m,c);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Og(s,E,a)}break;case 5:var L=s.stateNode;if(a===null&&s.flags&4){a=L;var O=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ne=s.alternate;if(ne!==null){var ve=ne.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&_l(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}jn||s.flags&512&&uh(s)}catch(me){ln(s,s.return,me)}}if(s===i){Oe=null;break}if(a=s.sibling,a!==null){a.return=s.return,Oe=a;break}Oe=s.return}}function O_(i){for(;Oe!==null;){var s=Oe;if(s===i){Oe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Oe=a;break}Oe=s.return}}function k_(i){for(;Oe!==null;){var s=Oe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{dc(4,s)}catch(O){ln(s,a,O)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var h=s.return;try{c.componentDidMount()}catch(O){ln(s,h,O)}}var m=s.return;try{uh(s)}catch(O){ln(s,m,O)}break;case 5:var E=s.return;try{uh(s)}catch(O){ln(s,E,O)}}}catch(O){ln(s,s.return,O)}if(s===i){Oe=null;break}var L=s.sibling;if(L!==null){L.return=s.return,Oe=L;break}Oe=s.return}}var lS=Math.ceil,hc=b.ReactCurrentDispatcher,dh=b.ReactCurrentOwner,Vi=b.ReactCurrentBatchConfig,Ct=0,Dn=null,mn=null,Bn=0,Mi=0,oa=ys(0),En=0,zl=null,ro=0,pc=0,hh=0,Vl=null,ui=null,ph=0,aa=1/0,Hr=null,mc=!1,mh=null,ws=null,gc=!1,As=null,_c=0,Hl=0,gh=null,vc=-1,yc=0;function ii(){return(Ct&6)!==0?$():vc!==-1?vc:vc=$()}function Rs(i){return(i.mode&1)===0?1:(Ct&2)!==0&&Bn!==0?Bn&-Bn:X3.transition!==null?(yc===0&&(yc=zt()),yc):(i=Rt,i!==0||(i=window.event,i=i===void 0?16:z0(i.type)),i)}function ir(i,s,a,c){if(50<Hl)throw Hl=0,gh=null,Error(n(185));bn(i,a,c),((Ct&2)===0||i!==Dn)&&(i===Dn&&((Ct&2)===0&&(pc|=a),En===4&&Cs(i,Bn)),ci(i,c),a===1&&Ct===0&&(s.mode&1)===0&&(aa=$()+500,Yu&&Ss()))}function ci(i,s){var a=i.callbackNode;ti(i,s);var c=Vn(i,i===Dn?Bn:0);if(c===0)a!==null&&A(a),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(a!=null&&A(a),s===1)i.tag===0?W3(z_.bind(null,i)):wg(z_.bind(null,i)),z3(function(){(Ct&6)===0&&Ss()}),a=null;else{switch(mr(c)){case 1:a=Se;break;case 4:a=Ce;break;case 16:a=Ie;break;case 536870912:a=at;break;default:a=Ie}a=q_(a,B_.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function B_(i,s){if(vc=-1,yc=0,(Ct&6)!==0)throw Error(n(327));var a=i.callbackNode;if(la()&&i.callbackNode!==a)return null;var c=Vn(i,i===Dn?Bn:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=xc(i,c);else{s=c;var h=Ct;Ct|=2;var m=H_();(Dn!==i||Bn!==s)&&(Hr=null,aa=$()+500,oo(i,s));do try{fS();break}catch(L){V_(i,L)}while(!0);Nd(),hc.current=m,Ct=h,mn!==null?s=0:(Dn=null,Bn=0,s=En)}if(s!==0){if(s===2&&(h=Nr(i),h!==0&&(c=h,s=_h(i,h))),s===1)throw a=zl,oo(i,0),Cs(i,c),ci(i,$()),a;if(s===6)Cs(i,c);else{if(h=i.current.alternate,(c&30)===0&&!uS(h)&&(s=xc(i,c),s===2&&(m=Nr(i),m!==0&&(c=m,s=_h(i,m))),s===1))throw a=zl,oo(i,0),Cs(i,c),ci(i,$()),a;switch(i.finishedWork=h,i.finishedLanes=c,s){case 0:case 1:throw Error(n(345));case 2:ao(i,ui,Hr);break;case 3:if(Cs(i,c),(c&130023424)===c&&(s=ph+500-$(),10<s)){if(Vn(i,0)!==0)break;if(h=i.suspendedLanes,(h&c)!==c){ii(),i.pingedLanes|=i.suspendedLanes&h;break}i.timeoutHandle=Md(ao.bind(null,i,ui,Hr),s);break}ao(i,ui,Hr);break;case 4:if(Cs(i,c),(c&4194240)===c)break;for(s=i.eventTimes,h=-1;0<c;){var E=31-ft(c);m=1<<E,E=s[E],E>h&&(h=E),c&=~m}if(c=h,c=$()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*lS(c/1960))-c,10<c){i.timeoutHandle=Md(ao.bind(null,i,ui,Hr),c);break}ao(i,ui,Hr);break;case 5:ao(i,ui,Hr);break;default:throw Error(n(329))}}}return ci(i,$()),i.callbackNode===a?B_.bind(null,i):null}function _h(i,s){var a=Vl;return i.current.memoizedState.isDehydrated&&(oo(i,s).flags|=256),i=xc(i,s),i!==2&&(s=ui,ui=a,s!==null&&vh(s)),i}function vh(i){ui===null?ui=i:ui.push.apply(ui,i)}function uS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!Qi(m(),h))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Cs(i,s){for(s&=~hh,s&=~pc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-ft(s),c=1<<a;i[a]=-1,s&=~c}}function z_(i){if((Ct&6)!==0)throw Error(n(327));la();var s=Vn(i,0);if((s&1)===0)return ci(i,$()),null;var a=xc(i,s);if(i.tag!==0&&a===2){var c=Nr(i);c!==0&&(s=c,a=_h(i,c))}if(a===1)throw a=zl,oo(i,0),Cs(i,s),ci(i,$()),a;if(a===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ao(i,ui,Hr),ci(i,$()),null}function yh(i,s){var a=Ct;Ct|=1;try{return i(s)}finally{Ct=a,Ct===0&&(aa=$()+500,Yu&&Ss())}}function so(i){As!==null&&As.tag===0&&(Ct&6)===0&&la();var s=Ct;Ct|=1;var a=Vi.transition,c=Rt;try{if(Vi.transition=null,Rt=1,i)return i()}finally{Rt=c,Vi.transition=a,Ct=s,(Ct&6)===0&&Ss()}}function xh(){Mi=oa.current,Yt(oa)}function oo(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,B3(a)),mn!==null)for(a=mn.return;a!==null;){var c=a;switch(bd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Xu();break;case 3:ia(),Yt(oi),Yt(Gn),Hd();break;case 5:zd(c);break;case 4:ia();break;case 13:Yt(Jt);break;case 19:Yt(Jt);break;case 10:Ud(c.type._context);break;case 22:case 23:xh()}a=a.return}if(Dn=i,mn=i=bs(i.current,null),Bn=Mi=s,En=0,zl=null,hh=pc=ro=0,ui=Vl=null,to!==null){for(s=0;s<to.length;s++)if(a=to[s],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=h,c.next=E}a.pending=c}to=null}return i}function V_(i,s){do{var a=mn;try{if(Nd(),ic.current=ac,rc){for(var c=en.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}rc=!1}if(io=0,Ln=Sn=en=null,Nl=!1,Ul=0,dh.current=null,a===null||a.return===null){En=1,zl=s,mn=null;break}e:{var m=i,E=a.return,L=a,O=s;if(s=Bn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ne=O,ve=L,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ne=d_(E);if(Ne!==null){Ne.flags&=-257,h_(Ne,E,L,m,s),Ne.mode&1&&f_(m,ne,s),s=Ne,O=ne;var Ve=s.updateQueue;if(Ve===null){var We=new Set;We.add(O),s.updateQueue=We}else Ve.add(O);break e}else{if((s&1)===0){f_(m,ne,s),Sh();break e}O=Error(n(426))}}else if($t&&L.mode&1){var fn=d_(E);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),h_(fn,E,L,m,s),Dd(ra(O,L));break e}}m=O=ra(O,L),En!==4&&(En=2),Vl===null?Vl=[m]:Vl.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var q=u_(m,O,s);Fg(m,q);break e;case 1:L=O;var V=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ws===null||!ws.has(K)))){m.flags|=65536,s&=-s,m.lanes|=s;var Te=c_(m,L,s);Fg(m,Te);break e}}m=m.return}while(m!==null)}W_(a)}catch(Ye){s=Ye,mn===a&&a!==null&&(mn=a=a.return);continue}break}while(!0)}function H_(){var i=hc.current;return hc.current=ac,i===null?ac:i}function Sh(){(En===0||En===3||En===2)&&(En=4),Dn===null||(ro&268435455)===0&&(pc&268435455)===0||Cs(Dn,Bn)}function xc(i,s){var a=Ct;Ct|=2;var c=H_();(Dn!==i||Bn!==s)&&(Hr=null,oo(i,s));do try{cS();break}catch(h){V_(i,h)}while(!0);if(Nd(),Ct=a,hc.current=c,mn!==null)throw Error(n(261));return Dn=null,Bn=0,En}function cS(){for(;mn!==null;)G_(mn)}function fS(){for(;mn!==null&&!W();)G_(mn)}function G_(i){var s=Y_(i.alternate,i,Mi);i.memoizedProps=i.pendingProps,s===null?W_(i):mn=s,dh.current=null}function W_(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=iS(a,s,Mi),a!==null){mn=a;return}}else{if(a=rS(a,s),a!==null){a.flags&=32767,mn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{En=6,mn=null;return}}if(s=s.sibling,s!==null){mn=s;return}mn=s=i}while(s!==null);En===0&&(En=5)}function ao(i,s,a){var c=Rt,h=Vi.transition;try{Vi.transition=null,Rt=1,dS(i,s,a,c)}finally{Vi.transition=h,Rt=c}return null}function dS(i,s,a,c){do la();while(As!==null);if((Ct&6)!==0)throw Error(n(327));a=i.finishedWork;var h=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var m=a.lanes|a.childLanes;if(On(i,m),i===Dn&&(mn=Dn=null,Bn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||gc||(gc=!0,q_(Ie,function(){return la(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Vi.transition,Vi.transition=null;var E=Rt;Rt=1;var L=Ct;Ct|=4,dh.current=null,oS(i,a),N_(a,i),D3(Sd),Lu=!!xd,Sd=xd=null,i.current=a,aS(a),ee(),Ct=L,Rt=E,Vi.transition=m}else i.current=a;if(gc&&(gc=!1,As=i,_c=h),m=i.pendingLanes,m===0&&(ws=null),St(a.stateNode),ci(i,$()),s!==null)for(c=i.onRecoverableError,a=0;a<s.length;a++)h=s[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(mc)throw mc=!1,i=mh,mh=null,i;return(_c&1)!==0&&i.tag!==0&&la(),m=i.pendingLanes,(m&1)!==0?i===gh?Hl++:(Hl=0,gh=i):Hl=0,Ss(),null}function la(){if(As!==null){var i=mr(_c),s=Vi.transition,a=Rt;try{if(Vi.transition=null,Rt=16>i?16:i,As===null)var c=!1;else{if(i=As,As=null,_c=0,(Ct&6)!==0)throw Error(n(331));var h=Ct;for(Ct|=4,Oe=i.current;Oe!==null;){var m=Oe,E=m.child;if((Oe.flags&16)!==0){var L=m.deletions;if(L!==null){for(var O=0;O<L.length;O++){var ne=L[O];for(Oe=ne;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Bl(8,ve,m)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var me=ve.sibling,Ne=ve.return;if(b_(ve),ve===ne){Oe=null;break}if(me!==null){me.return=Ne,Oe=me;break}Oe=Ne}}}var Ve=m.alternate;if(Ve!==null){var We=Ve.child;if(We!==null){Ve.child=null;do{var fn=We.sibling;We.sibling=null,We=fn}while(We!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Oe=E;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Bl(9,m,m.return)}var q=m.sibling;if(q!==null){q.return=m.return,Oe=q;break e}Oe=m.return}}var V=i.current;for(Oe=V;Oe!==null;){E=Oe;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Oe=K;else e:for(E=V;Oe!==null;){if(L=Oe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:dc(9,L)}}catch(Ye){ln(L,L.return,Ye)}if(L===E){Oe=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,Oe=Te;break e}Oe=L.return}}if(Ct=h,Ss(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(st,i)}catch{}c=!0}return c}finally{Rt=a,Vi.transition=s}}return!1}function X_(i,s,a){s=ra(a,s),s=u_(i,s,1),i=Ms(i,s,1),s=ii(),i!==null&&(bn(i,1,s),ci(i,s))}function ln(i,s,a){if(i.tag===3)X_(i,i,a);else for(;s!==null;){if(s.tag===3){X_(s,i,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ws===null||!ws.has(c))){i=ra(a,i),i=c_(s,i,1),s=Ms(s,i,1),i=ii(),s!==null&&(bn(s,1,i),ci(s,i));break}}s=s.return}}function hS(i,s,a){var c=i.pingCache;c!==null&&c.delete(s),s=ii(),i.pingedLanes|=i.suspendedLanes&a,Dn===i&&(Bn&a)===a&&(En===4||En===3&&(Bn&130023424)===Bn&&500>$()-ph?oo(i,0):hh|=a),ci(i,s)}function j_(i,s){s===0&&((i.mode&1)===0?s=1:(s=an,an<<=1,(an&130023424)===0&&(an=4194304)));var a=ii();i=Br(i,s),i!==null&&(bn(i,s,a),ci(i,a))}function pS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),j_(i,a)}function mS(i,s){var a=0;switch(i.tag){case 13:var c=i.stateNode,h=i.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(s),j_(i,a)}var Y_;Y_=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||oi.current)li=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return li=!1,nS(i,s,a);li=(i.flags&131072)!==0}else li=!1,$t&&(s.flags&1048576)!==0&&Ag(s,$u,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;cc(i,s),i=s.pendingProps;var h=Ko(s,Gn.current);na(s,a),h=Xd(null,s,c,i,h,a);var m=jd();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ai(c)?(m=!0,ju(s)):m=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,kd(s),h.updater=lc,s.stateNode=h,h._reactInternals=s,Qd(s,c,i,a),s=nh(null,s,c,!0,m,a)):(s.tag=0,$t&&m&&Cd(s),ni(null,s,h,a),s=s.child),s;case 16:c=s.elementType;e:{switch(cc(i,s),i=s.pendingProps,h=c._init,c=h(c._payload),s.type=c,h=s.tag=_S(c),i=er(c,i),h){case 0:s=th(null,s,c,i,a);break e;case 1:s=y_(null,s,c,i,a);break e;case 11:s=p_(null,s,c,i,a);break e;case 14:s=m_(null,s,c,er(c.type,i),a);break e}throw Error(n(306,c,""))}return s;case 0:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:er(c,h),th(i,s,c,h,a);case 1:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:er(c,h),y_(i,s,c,h,a);case 3:e:{if(x_(s),i===null)throw Error(n(387));c=s.pendingProps,m=s.memoizedState,h=m.element,Ug(i,s),tc(s,c,null,a);var E=s.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){h=ra(Error(n(423)),s),s=S_(i,s,c,a,h);break e}else if(c!==h){h=ra(Error(n(424)),s),s=S_(i,s,c,a,h);break e}else for(Ei=vs(s.stateNode.containerInfo.firstChild),Si=s,$t=!0,Ji=null,a=Ig(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Jo(),c===h){s=Vr(i,s,a);break e}ni(i,s,c,a)}s=s.child}return s;case 5:return kg(s),i===null&&Ld(s),c=s.type,h=s.pendingProps,m=i!==null?i.memoizedProps:null,E=h.children,Ed(c,h)?E=null:m!==null&&Ed(c,m)&&(s.flags|=32),v_(i,s),ni(i,s,E,a),s.child;case 6:return i===null&&Ld(s),null;case 13:return E_(i,s,a);case 4:return Bd(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=ea(s,null,c,a):ni(i,s,c,a),s.child;case 11:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:er(c,h),p_(i,s,c,h,a);case 7:return ni(i,s,s.pendingProps,a),s.child;case 8:return ni(i,s,s.pendingProps.children,a),s.child;case 12:return ni(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,h=s.pendingProps,m=s.memoizedProps,E=h.value,Wt(Qu,c._currentValue),c._currentValue=E,m!==null)if(Qi(m.value,E)){if(m.children===h.children&&!oi.current){s=Vr(i,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var L=m.dependencies;if(L!==null){E=m.child;for(var O=L.firstContext;O!==null;){if(O.context===c){if(m.tag===1){O=zr(-1,a&-a),O.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var ve=ne.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),ne.pending=O}}m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),Fd(m.return,a,s),L.lanes|=a;break}O=O.next}}else if(m.tag===10)E=m.type===s.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(n(341));E.lanes|=a,L=E.alternate,L!==null&&(L.lanes|=a),Fd(E,a,s),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===s){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}ni(i,s,h.children,a),s=s.child}return s;case 9:return h=s.type,c=s.pendingProps.children,na(s,a),h=Bi(h),c=c(h),s.flags|=1,ni(i,s,c,a),s.child;case 14:return c=s.type,h=er(c,s.pendingProps),h=er(c.type,h),m_(i,s,c,h,a);case 15:return g_(i,s,s.type,s.pendingProps,a);case 17:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:er(c,h),cc(i,s),s.tag=1,ai(c)?(i=!0,ju(s)):i=!1,na(s,a),a_(s,c,h),Qd(s,c,h,a),nh(null,s,c,!0,i,a);case 19:return T_(i,s,a);case 22:return __(i,s,a)}throw Error(n(156,s.tag))};function q_(i,s){return Cu(i,s)}function gS(i,s,a,c){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(i,s,a,c){return new gS(i,s,a,c)}function Eh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function _S(i){if(typeof i=="function")return Eh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Z)return 11;if(i===fe)return 14}return 2}function bs(i,s){var a=i.alternate;return a===null?(a=Hi(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Sc(i,s,a,c,h,m){var E=2;if(c=i,typeof i=="function")Eh(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case F:return lo(a.children,h,m,s);case j:E=8,h|=8;break;case C:return i=Hi(12,a,s,h|2),i.elementType=C,i.lanes=m,i;case Y:return i=Hi(13,a,s,h),i.elementType=Y,i.lanes=m,i;case ue:return i=Hi(19,a,s,h),i.elementType=ue,i.lanes=m,i;case le:return Ec(a,h,m,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case w:E=10;break e;case I:E=9;break e;case Z:E=11;break e;case fe:E=14;break e;case ae:E=16,c=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return s=Hi(E,a,s,h),s.elementType=i,s.type=c,s.lanes=m,s}function lo(i,s,a,c){return i=Hi(7,i,c,s),i.lanes=a,i}function Ec(i,s,a,c){return i=Hi(22,i,c,s),i.elementType=le,i.lanes=a,i.stateNode={isHidden:!1},i}function Mh(i,s,a){return i=Hi(6,i,null,s),i.lanes=a,i}function Th(i,s,a){return s=Hi(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function vS(i,s,a,c,h){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function wh(i,s,a,c,h,m,E,L,O){return i=new vS(i,s,a,L,O),s===1?(s=1,m===!0&&(s|=8)):s=0,m=Hi(3,null,null,s),i.current=m,m.stateNode=i,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(m),i}function yS(i,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:i,containerInfo:s,implementation:a}}function $_(i){if(!i)return xs;i=i._reactInternals;e:{if(pr(i)!==i||i.tag!==1)throw Error(n(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ai(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(i.tag===1){var a=i.type;if(ai(a))return Mg(i,a,s)}return s}function K_(i,s,a,c,h,m,E,L,O){return i=wh(a,c,!0,i,h,m,E,L,O),i.context=$_(null),a=i.current,c=ii(),h=Rs(a),m=zr(c,h),m.callback=s??null,Ms(a,m,h),i.current.lanes=h,bn(i,h,c),ci(i,c),i}function Mc(i,s,a,c){var h=s.current,m=ii(),E=Rs(h);return a=$_(a),s.context===null?s.context=a:s.pendingContext=a,s=zr(m,E),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Ms(h,s,E),i!==null&&(ir(i,h,E,m),ec(i,h,E)),E}function Tc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Z_(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Ah(i,s){Z_(i,s),(i=i.alternate)&&Z_(i,s)}function xS(){return null}var Q_=typeof reportError=="function"?reportError:function(i){console.error(i)};function Rh(i){this._internalRoot=i}wc.prototype.render=Rh.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(n(409));Mc(i,s,null,null)},wc.prototype.unmount=Rh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;so(function(){Mc(null,i,null,null)}),s[Ur]=null}};function wc(i){this._internalRoot=i}wc.prototype.unstable_scheduleHydration=function(i){if(i){var s=U0();i={blockedOn:null,target:i,priority:s};for(var a=0;a<ms.length&&s!==0&&s<ms[a].priority;a++);ms.splice(a,0,i),a===0&&k0(i)}};function Ch(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ac(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function J_(){}function SS(i,s,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var ne=Tc(E);m.call(ne)}}var E=K_(s,c,i,0,null,!1,!1,"",J_);return i._reactRootContainer=E,i[Ur]=E.current,Al(i.nodeType===8?i.parentNode:i),so(),E}for(;h=i.lastChild;)i.removeChild(h);if(typeof c=="function"){var L=c;c=function(){var ne=Tc(O);L.call(ne)}}var O=wh(i,0,!1,null,null,!1,!1,"",J_);return i._reactRootContainer=O,i[Ur]=O.current,Al(i.nodeType===8?i.parentNode:i),so(function(){Mc(s,O,a,c)}),O}function Rc(i,s,a,c,h){var m=a._reactRootContainer;if(m){var E=m;if(typeof h=="function"){var L=h;h=function(){var O=Tc(E);L.call(O)}}Mc(s,E,i,h)}else E=SS(a,s,i,h,c);return Tc(E)}I0=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=xt(s.pendingLanes);a!==0&&(Pn(s,a|1),ci(s,$()),(Ct&6)===0&&(aa=$()+500,Ss()))}break;case 13:so(function(){var c=Br(i,1);if(c!==null){var h=ii();ir(c,i,1,h)}}),Ah(i,1)}},Jf=function(i){if(i.tag===13){var s=Br(i,134217728);if(s!==null){var a=ii();ir(s,i,134217728,a)}Ah(i,134217728)}},N0=function(i){if(i.tag===13){var s=Rs(i),a=Br(i,s);if(a!==null){var c=ii();ir(a,i,s,c)}Ah(i,s)}},U0=function(){return Rt},F0=function(i,s){var a=Rt;try{return Rt=i,s()}finally{Rt=a}},Re=function(i,s,a){switch(s){case"input":if(mt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==i&&c.form===i.form){var h=Wu(c);if(!h)throw Error(n(90));yt(c),mt(c,h)}}}break;case"textarea":pe(i,a);break;case"select":s=a.value,s!=null&&P(i,!!a.multiple,s,!1)}},Xt=yh,xn=so;var ES={usingClientEntryPoint:!1,Events:[bl,qo,Wu,Pe,ct,yh]},Gl={findFiberByHostInstance:Zs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MS={bundleType:Gl.bundleType,version:Gl.version,rendererPackageName:Gl.rendererPackageName,rendererConfig:Gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Au(i),i===null?null:i.stateNode},findFiberByHostInstance:Gl.findFiberByHostInstance||xS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{st=Cc.inject(MS),Ge=Cc}catch{}}return fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES,fi.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(s))throw Error(n(200));return yS(i,s,null,a)},fi.createRoot=function(i,s){if(!Ch(i))throw Error(n(299));var a=!1,c="",h=Q_;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=wh(i,1,!1,null,null,a,!1,c,h),i[Ur]=s.current,Al(i.nodeType===8?i.parentNode:i),new Rh(s)},fi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=Au(s),i=i===null?null:i.stateNode,i},fi.flushSync=function(i){return so(i)},fi.hydrate=function(i,s,a){if(!Ac(s))throw Error(n(200));return Rc(null,i,s,!0,a)},fi.hydrateRoot=function(i,s,a){if(!Ch(i))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",E=Q_;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=K_(s,null,i,1,a??null,h,!1,m,E),i[Ur]=s.current,Al(i),c)for(i=0;i<c.length;i++)a=c[i],h=a._getVersion,h=h(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,h]:s.mutableSourceEagerHydrationData.push(a,h);return new wc(s)},fi.render=function(i,s,a){if(!Ac(s))throw Error(n(200));return Rc(null,i,s,!1,a)},fi.unmountComponentAtNode=function(i){if(!Ac(i))throw Error(n(40));return i._reactRootContainer?(so(function(){Rc(null,null,i,!1,function(){i._reactRootContainer=null,i[Ur]=null})}),!0):!1},fi.unstable_batchedUpdates=yh,fi.unstable_renderSubtreeIntoContainer=function(i,s,a,c){if(!Ac(a))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return Rc(i,s,a,!1,c)},fi.version="18.3.1-next-f1338f8080-20240426",fi}var a1;function IS(){if(a1)return Lh.exports;a1=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Lh.exports=DS(),Lh.exports}var l1;function NS(){if(l1)return bc;l1=1;var t=IS();return bc.createRoot=t.createRoot,bc.hydrateRoot=t.hydrateRoot,bc}var US=NS();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pm="172",FS=0,u1=1,OS=2,f2=1,kS=2,qr=3,Xs=0,gi=1,$r=2,Hs=0,ba=1,Ep=2,c1=3,f1=4,BS=5,yo=100,zS=101,VS=102,HS=103,GS=104,WS=200,XS=201,jS=202,YS=203,Mp=204,Tp=205,qS=206,$S=207,KS=208,ZS=209,QS=210,JS=211,eE=212,tE=213,nE=214,wp=0,Ap=1,Rp=2,Na=3,Cp=4,bp=5,Pp=6,Lp=7,d2=0,iE=1,rE=2,Gs=0,sE=1,oE=2,aE=3,lE=4,uE=5,cE=6,fE=7,h2=300,Ua=301,Fa=302,Dp=303,Ip=304,wf=306,Np=1e3,So=1001,Up=1002,ur=1003,dE=1004,Pc=1005,Mr=1006,Nh=1007,Eo=1008,ts=1009,p2=1010,m2=1011,iu=1012,Lm=1013,Lo=1014,Zr=1015,lu=1016,Dm=1017,Im=1018,Oa=1020,g2=35902,_2=1021,v2=1022,lr=1023,y2=1024,x2=1025,Pa=1026,ka=1027,S2=1028,Nm=1029,E2=1030,Um=1031,Fm=1033,af=33776,lf=33777,uf=33778,cf=33779,Fp=35840,Op=35841,kp=35842,Bp=35843,zp=36196,Vp=37492,Hp=37496,Gp=37808,Wp=37809,Xp=37810,jp=37811,Yp=37812,qp=37813,$p=37814,Kp=37815,Zp=37816,Qp=37817,Jp=37818,em=37819,tm=37820,nm=37821,ff=36492,im=36494,rm=36495,M2=36283,sm=36284,om=36285,am=36286,hE=3200,pE=3201,mE=0,gE=1,zs="",Yi="srgb",Ba="srgb-linear",mf="linear",kt="srgb",ua=7680,d1=519,_E=512,vE=513,yE=514,T2=515,xE=516,SE=517,EE=518,ME=519,h1=35044,p1="300 es",Qr=2e3,gf=2001;class Qa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=Math.PI/180,lm=180/Math.PI;function uu(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[t&255]+Yn[t>>8&255]+Yn[t>>16&255]+Yn[t>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Et(t,e,n){return Math.max(e,Math.min(n,t))}function TE(t,e){return(t%e+e)%e}function Fh(t,e,n){return(1-n)*t+n*e}function Xl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function di(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(e=0,n=0){Ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,n,r,o,l,u,f,d,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,d,p)}set(e,n,r,o,l,u,f,d,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],d=r[6],p=r[1],g=r[4],_=r[7],v=r[2],S=r[5],M=r[8],R=o[0],x=o[3],y=o[6],U=o[1],D=o[4],b=o[7],G=o[2],z=o[5],F=o[8];return l[0]=u*R+f*U+d*G,l[3]=u*x+f*D+d*z,l[6]=u*y+f*b+d*F,l[1]=p*R+g*U+_*G,l[4]=p*x+g*D+_*z,l[7]=p*y+g*b+_*F,l[2]=v*R+S*U+M*G,l[5]=v*x+S*D+M*z,l[8]=v*y+S*b+M*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8];return n*u*g-n*f*p-r*l*g+r*f*d+o*l*p-o*u*d}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8],_=g*u-f*p,v=f*d-g*l,S=p*l-u*d,M=n*_+r*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=_*R,e[1]=(o*p-g*r)*R,e[2]=(f*r-o*u)*R,e[3]=v*R,e[4]=(g*n-o*d)*R,e[5]=(o*l-f*n)*R,e[6]=S*R,e[7]=(r*d-p*n)*R,e[8]=(u*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*f)+u+e,-o*p,o*d,-o*(-p*u+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Oh.makeScale(e,n)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new dt;function w2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _f(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function wE(){const t=_f("canvas");return t.style.display="block",t}const m1={};function wa(t){t in m1||(m1[t]=!0,console.warn(t))}function AE(t,e,n){return new Promise(function(r,o){function l(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:o();break;case t.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function RE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function CE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const g1=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_1=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bE(){const t={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=es(o.r),o.g=es(o.g),o.b=es(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=La(o.r),o.g=La(o.g),o.b=La(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===zs?mf:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[Ba]:{primaries:e,whitePoint:r,transfer:mf,toXYZ:g1,fromXYZ:_1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yi},outputColorSpaceConfig:{drawingBufferColorSpace:Yi}},[Yi]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:g1,fromXYZ:_1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yi}}}),t}const Lt=bE();function es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function La(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ca;class PE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ca===void 0&&(ca=_f("canvas")),ca.width=e.width,ca.height=e.height;const r=ca.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ca}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_f("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=es(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(es(n[r]/255)*255):n[r]=es(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LE=0;class A2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=uu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(kh(o[u].image)):l.push(kh(o[u]))}else l=kh(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function kh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?PE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DE=0;class _i extends Qa{constructor(e=_i.DEFAULT_IMAGE,n=_i.DEFAULT_MAPPING,r=So,o=So,l=Mr,u=Eo,f=lr,d=ts,p=_i.DEFAULT_ANISOTROPY,g=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=uu(),this.name="",this.source=new A2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Np:e.x=e.x-Math.floor(e.x);break;case So:e.x=e.x<0?0:1;break;case Up:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Np:e.y=e.y-Math.floor(e.y);break;case So:e.y=e.y<0?0:1;break;case Up:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=h2;_i.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,n=0,r=0,o=1){hn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const d=e.elements,p=d[0],g=d[4],_=d[8],v=d[1],S=d[5],M=d[9],R=d[2],x=d[6],y=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,b=(S+1)/2,G=(y+1)/2,z=(g+v)/4,F=(_+R)/4,j=(M+x)/4;return D>b&&D>G?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=z/r,l=F/r):b>G?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=z/o,l=j/o):G<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(G),r=F/l,o=j/l),this.set(r,o,l,n),this}let U=Math.sqrt((x-M)*(x-M)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(x-M)/U,this.y=(_-R)/U,this.z=(v-g)/U,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IE extends Qa{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new hn(0,0,e,n),this.scissorTest=!1,this.viewport=new hn(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new _i(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new A2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do extends IE{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class R2 extends _i{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ur,this.minFilter=ur,this.wrapR=So,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NE extends _i{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ur,this.minFilter=ur,this.wrapR=So,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cu{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];const v=l[u+0],S=l[u+1],M=l[u+2],R=l[u+3];if(f===0){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f===1){e[n+0]=v,e[n+1]=S,e[n+2]=M,e[n+3]=R;return}if(_!==R||d!==v||p!==S||g!==M){let x=1-f;const y=d*v+p*S+g*M+_*R,U=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const G=Math.sqrt(D),z=Math.atan2(G,y*U);x=Math.sin(x*z)/G,f=Math.sin(f*z)/G}const b=f*U;if(d=d*x+v*b,p=p*x+S*b,g=g*x+M*b,_=_*x+R*b,x===1-f){const G=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=G,p*=G,g*=G,_*=G}}e[n]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],d=r[o+1],p=r[o+2],g=r[o+3],_=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return e[n]=f*M+g*_+d*S-p*v,e[n+1]=d*M+g*v+p*_-f*S,e[n+2]=p*M+g*S+f*v-d*_,e[n+3]=g*M-f*_-d*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,p=f(r/2),g=f(o/2),_=f(l/2),v=d(r/2),S=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"YXZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"ZXY":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"ZYX":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"YZX":this._x=v*g*_+p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_-v*S*M;break;case"XZY":this._x=v*g*_-p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=r+f+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,d=n._y,p=n._z,g=n._w;return this._x=r*g+u*f+o*p-l*d,this._y=o*g+u*d+l*f-r*p,this._z=l*g+u*p+r*d-o*f,this._w=u*g-r*f-o*d-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,f),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=u*_+this._w*v,this._x=r*_+this._x*v,this._y=o*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,n=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(v1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(v1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,p=2*(u*o-f*r),g=2*(f*n-l*o),_=2*(l*r-u*n);return this.x=n+d*p+u*_-f*g,this.y=r+d*g+f*p-l*_,this.z=o+d*_+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,d=n.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new re,v1=new cu;class fu{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(rr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(rr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=rr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,rr):rr.fromBufferAttribute(l,u),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Lc.copy(r.boundingBox)),Lc.applyMatrix4(e.matrixWorld),this.union(Lc)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jl),Dc.subVectors(this.max,jl),fa.subVectors(e.a,jl),da.subVectors(e.b,jl),ha.subVectors(e.c,jl),Ls.subVectors(da,fa),Ds.subVectors(ha,da),uo.subVectors(fa,ha);let n=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-uo.z,uo.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,uo.z,0,-uo.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-uo.y,uo.x,0];return!zh(n,fa,da,ha,Dc)||(n=[1,0,0,0,1,0,0,0,1],!zh(n,fa,da,ha,Dc))?!1:(Ic.crossVectors(Ls,Ds),n=[Ic.x,Ic.y,Ic.z],zh(n,fa,da,ha,Dc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gr=[new re,new re,new re,new re,new re,new re,new re,new re],rr=new re,Lc=new fu,fa=new re,da=new re,ha=new re,Ls=new re,Ds=new re,uo=new re,jl=new re,Dc=new re,Ic=new re,co=new re;function zh(t,e,n,r,o){for(let l=0,u=t.length-3;l<=u;l+=3){co.fromArray(t,l);const f=o.x*Math.abs(co.x)+o.y*Math.abs(co.y)+o.z*Math.abs(co.z),d=e.dot(co),p=n.dot(co),g=r.dot(co);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const UE=new fu,Yl=new re,Vh=new re;class Af{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):UE.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yl.subVectors(e,this.center);const n=Yl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Yl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yl.copy(e.center).add(Vh)),this.expandByPoint(Yl.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wr=new re,Hh=new re,Nc=new re,Is=new re,Gh=new re,Uc=new re,Wh=new re;class C2{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wr.copy(this.origin).addScaledVector(this.direction,n),Wr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Hh.copy(e).add(n).multiplyScalar(.5),Nc.copy(n).sub(e).normalize(),Is.copy(this.origin).sub(Hh);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Nc),f=Is.dot(this.direction),d=-Is.dot(Nc),p=Is.lengthSq(),g=Math.abs(1-u*u);let _,v,S,M;if(g>0)if(_=u*d-f,v=u*f-d,M=l*g,_>=0)if(v>=-M)if(v<=M){const R=1/g;_*=R,v*=R,S=_*(_+u*v+2*f)+v*(u*_+v+2*d)+p}else v=l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*d)+p;else v=-l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*d)+p;else v<=-M?(_=Math.max(0,-(-u*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),S=-_*_+v*(v+2*d)+p):v<=M?(_=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+p):(_=Math.max(0,-(u*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),S=-_*_+v*(v+2*d)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Hh).addScaledVector(Nc,v),S}intersectSphere(e,n){Wr.subVectors(e.center,this.origin);const r=Wr.dot(this.direction),o=Wr.dot(Wr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Wr)!==null}intersectTriangle(e,n,r,o,l){Gh.subVectors(n,e),Uc.subVectors(r,e),Wh.crossVectors(Gh,Uc);let u=this.direction.dot(Wh),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Is.subVectors(this.origin,e);const d=f*this.direction.dot(Uc.crossVectors(Is,Uc));if(d<0)return null;const p=f*this.direction.dot(Gh.cross(Is));if(p<0||d+p>u)return null;const g=-f*Is.dot(Wh);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,n,r,o,l,u,f,d,p,g,_,v,S,M,R,x){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,d,p,g,_,v,S,M,R,x)}set(e,n,r,o,l,u,f,d,p,g,_,v,S,M,R,x){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=M,y[11]=R,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/pa.setFromMatrixColumn(e,0).length(),l=1/pa.setFromMatrixColumn(e,1).length(),u=1/pa.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*g,S=u*_,M=f*g,R=f*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=S+M*p,n[5]=v-R*p,n[9]=-f*d,n[2]=R-v*p,n[6]=M+S*p,n[10]=u*d}else if(e.order==="YXZ"){const v=d*g,S=d*_,M=p*g,R=p*_;n[0]=v+R*f,n[4]=M*f-S,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=S*f-M,n[6]=R+v*f,n[10]=u*d}else if(e.order==="ZXY"){const v=d*g,S=d*_,M=p*g,R=p*_;n[0]=v-R*f,n[4]=-u*_,n[8]=M+S*f,n[1]=S+M*f,n[5]=u*g,n[9]=R-v*f,n[2]=-u*p,n[6]=f,n[10]=u*d}else if(e.order==="ZYX"){const v=u*g,S=u*_,M=f*g,R=f*_;n[0]=d*g,n[4]=M*p-S,n[8]=v*p+R,n[1]=d*_,n[5]=R*p+v,n[9]=S*p-M,n[2]=-p,n[6]=f*d,n[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*p,M=f*d,R=f*p;n[0]=d*g,n[4]=R-v*_,n[8]=M*_+S,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-p*g,n[6]=S*_+M,n[10]=v-R*_}else if(e.order==="XZY"){const v=u*d,S=u*p,M=f*d,R=f*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+R,n[5]=u*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=f*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,OE)}lookAt(e,n,r){const o=this.elements;return Ti.subVectors(e,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ns.crossVectors(r,Ti),Ns.lengthSq()===0&&(Math.abs(r.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ns.crossVectors(r,Ti)),Ns.normalize(),Fc.crossVectors(Ti,Ns),o[0]=Ns.x,o[4]=Fc.x,o[8]=Ti.x,o[1]=Ns.y,o[5]=Fc.y,o[9]=Ti.y,o[2]=Ns.z,o[6]=Fc.z,o[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],d=r[8],p=r[12],g=r[1],_=r[5],v=r[9],S=r[13],M=r[2],R=r[6],x=r[10],y=r[14],U=r[3],D=r[7],b=r[11],G=r[15],z=o[0],F=o[4],j=o[8],C=o[12],w=o[1],I=o[5],Z=o[9],Y=o[13],ue=o[2],fe=o[6],ae=o[10],le=o[14],k=o[3],te=o[7],se=o[11],N=o[15];return l[0]=u*z+f*w+d*ue+p*k,l[4]=u*F+f*I+d*fe+p*te,l[8]=u*j+f*Z+d*ae+p*se,l[12]=u*C+f*Y+d*le+p*N,l[1]=g*z+_*w+v*ue+S*k,l[5]=g*F+_*I+v*fe+S*te,l[9]=g*j+_*Z+v*ae+S*se,l[13]=g*C+_*Y+v*le+S*N,l[2]=M*z+R*w+x*ue+y*k,l[6]=M*F+R*I+x*fe+y*te,l[10]=M*j+R*Z+x*ae+y*se,l[14]=M*C+R*Y+x*le+y*N,l[3]=U*z+D*w+b*ue+G*k,l[7]=U*F+D*I+b*fe+G*te,l[11]=U*j+D*Z+b*ae+G*se,l[15]=U*C+D*Y+b*le+G*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],p=e[13],g=e[2],_=e[6],v=e[10],S=e[14],M=e[3],R=e[7],x=e[11],y=e[15];return M*(+l*d*_-o*p*_-l*f*v+r*p*v+o*f*S-r*d*S)+R*(+n*d*S-n*p*v+l*u*v-o*u*S+o*p*g-l*d*g)+x*(+n*p*_-n*f*S-l*u*_+r*u*S+l*f*g-r*p*g)+y*(-o*f*g-n*d*_+n*f*v+o*u*_-r*u*v+r*d*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8],_=e[9],v=e[10],S=e[11],M=e[12],R=e[13],x=e[14],y=e[15],U=_*x*p-R*v*p+R*d*S-f*x*S-_*d*y+f*v*y,D=M*v*p-g*x*p-M*d*S+u*x*S+g*d*y-u*v*y,b=g*R*p-M*_*p+M*f*S-u*R*S-g*f*y+u*_*y,G=M*_*d-g*R*d-M*f*v+u*R*v+g*f*x-u*_*x,z=n*U+r*D+o*b+l*G;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=U*F,e[1]=(R*v*l-_*x*l-R*o*S+r*x*S+_*o*y-r*v*y)*F,e[2]=(f*x*l-R*d*l+R*o*p-r*x*p-f*o*y+r*d*y)*F,e[3]=(_*d*l-f*v*l-_*o*p+r*v*p+f*o*S-r*d*S)*F,e[4]=D*F,e[5]=(g*x*l-M*v*l+M*o*S-n*x*S-g*o*y+n*v*y)*F,e[6]=(M*d*l-u*x*l-M*o*p+n*x*p+u*o*y-n*d*y)*F,e[7]=(u*v*l-g*d*l+g*o*p-n*v*p-u*o*S+n*d*S)*F,e[8]=b*F,e[9]=(M*_*l-g*R*l-M*r*S+n*R*S+g*r*y-n*_*y)*F,e[10]=(u*R*l-M*f*l+M*r*p-n*R*p-u*r*y+n*f*y)*F,e[11]=(g*f*l-u*_*l-g*r*p+n*_*p+u*r*S-n*f*S)*F,e[12]=G*F,e[13]=(g*R*o-M*_*o+M*r*v-n*R*v-g*r*x+n*_*x)*F,e[14]=(M*f*o-u*R*o-M*r*d+n*R*d+u*r*x-n*f*x)*F,e[15]=(u*_*o-g*f*o+g*r*d-n*_*d-u*r*v+n*f*v)*F,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,d=e.z,p=l*u,g=l*f;return this.set(p*u+r,p*f-o*d,p*d+o*f,0,p*f+o*d,g*f+r,g*d-o*u,0,p*d-o*f,g*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,d=n._w,p=l+l,g=u+u,_=f+f,v=l*p,S=l*g,M=l*_,R=u*g,x=u*_,y=f*_,U=d*p,D=d*g,b=d*_,G=r.x,z=r.y,F=r.z;return o[0]=(1-(R+y))*G,o[1]=(S+b)*G,o[2]=(M-D)*G,o[3]=0,o[4]=(S-b)*z,o[5]=(1-(v+y))*z,o[6]=(x+U)*z,o[7]=0,o[8]=(M+D)*F,o[9]=(x-U)*F,o[10]=(1-(v+R))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let l=pa.set(o[0],o[1],o[2]).length();const u=pa.set(o[4],o[5],o[6]).length(),f=pa.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],sr.copy(this);const p=1/l,g=1/u,_=1/f;return sr.elements[0]*=p,sr.elements[1]*=p,sr.elements[2]*=p,sr.elements[4]*=g,sr.elements[5]*=g,sr.elements[6]*=g,sr.elements[8]*=_,sr.elements[9]*=_,sr.elements[10]*=_,n.setFromRotationMatrix(sr),r.x=l,r.y=u,r.z=f,this}makePerspective(e,n,r,o,l,u,f=Qr){const d=this.elements,p=2*l/(n-e),g=2*l/(r-o),_=(n+e)/(n-e),v=(r+o)/(r-o);let S,M;if(f===Qr)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===gf)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Qr){const d=this.elements,p=1/(n-e),g=1/(r-o),_=1/(u-l),v=(n+e)*p,S=(r+o)*g;let M,R;if(f===Qr)M=(u+l)*_,R=-2*_;else if(f===gf)M=l*_,R=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=R,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const pa=new re,sr=new pn,FE=new re(0,0,0),OE=new re(1,1,1),Ns=new re,Fc=new re,Ti=new re,y1=new pn,x1=new cu;class ns{constructor(e=0,n=0,r=0,o=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],p=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return y1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y1,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return x1.setFromEuler(this),this.setFromQuaternion(x1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class b2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kE=0;const S1=new re,ma=new cu,Xr=new pn,Oc=new re,ql=new re,BE=new re,zE=new cu,E1=new re(1,0,0),M1=new re(0,1,0),T1=new re(0,0,1),w1={type:"added"},VE={type:"removed"},ga={type:"childadded",child:null},Xh={type:"childremoved",child:null};class vi extends Qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=uu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const e=new re,n=new ns,r=new cu,o=new re(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new dt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ma.setFromAxisAngle(e,n),this.quaternion.multiply(ma),this}rotateOnWorldAxis(e,n){return ma.setFromAxisAngle(e,n),this.quaternion.premultiply(ma),this}rotateX(e){return this.rotateOnAxis(E1,e)}rotateY(e){return this.rotateOnAxis(M1,e)}rotateZ(e){return this.rotateOnAxis(T1,e)}translateOnAxis(e,n){return S1.copy(e).applyQuaternion(this.quaternion),this.position.add(S1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(E1,e)}translateY(e){return this.translateOnAxis(M1,e)}translateZ(e){return this.translateOnAxis(T1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Oc.copy(e):Oc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xr.lookAt(ql,Oc,this.up):Xr.lookAt(Oc,ql,this.up),this.quaternion.setFromRotationMatrix(Xr),o&&(Xr.extractRotation(o.matrixWorld),ma.setFromRotationMatrix(Xr),this.quaternion.premultiply(ma.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w1),ga.child=e,this.dispatchEvent(ga),ga.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(VE),Xh.child=e,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w1),ga.child=e,this.dispatchEvent(ga),ga.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,zE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(n){const f=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}vi.DEFAULT_UP=new re(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const or=new re,jr=new re,jh=new re,Yr=new re,_a=new re,va=new re,A1=new re,Yh=new re,qh=new re,$h=new re,Kh=new hn,Zh=new hn,Qh=new hn;class ar{constructor(e=new re,n=new re,r=new re){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),or.subVectors(e,n),o.cross(or);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){or.subVectors(o,n),jr.subVectors(r,n),jh.subVectors(e,n);const u=or.dot(or),f=or.dot(jr),d=or.dot(jh),p=jr.dot(jr),g=jr.dot(jh),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*d-f*g)*v,M=(u*g-f*d)*v;return l.set(1-S-M,M,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Yr)===null?!1:Yr.x>=0&&Yr.y>=0&&Yr.x+Yr.y<=1}static getInterpolation(e,n,r,o,l,u,f,d){return this.getBarycoord(e,n,r,o,Yr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Yr.x),d.addScaledVector(u,Yr.y),d.addScaledVector(f,Yr.z),d)}static getInterpolatedAttribute(e,n,r,o,l,u){return Kh.setScalar(0),Zh.setScalar(0),Qh.setScalar(0),Kh.fromBufferAttribute(e,n),Zh.fromBufferAttribute(e,r),Qh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Kh,l.x),u.addScaledVector(Zh,l.y),u.addScaledVector(Qh,l.z),u}static isFrontFacing(e,n,r,o){return or.subVectors(r,n),jr.subVectors(e,n),or.cross(jr).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return or.subVectors(this.c,this.b),jr.subVectors(this.a,this.b),or.cross(jr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ar.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return ar.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;_a.subVectors(o,r),va.subVectors(l,r),Yh.subVectors(e,r);const d=_a.dot(Yh),p=va.dot(Yh);if(d<=0&&p<=0)return n.copy(r);qh.subVectors(e,o);const g=_a.dot(qh),_=va.dot(qh);if(g>=0&&_<=g)return n.copy(o);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(r).addScaledVector(_a,u);$h.subVectors(e,l);const S=_a.dot($h),M=va.dot($h);if(M>=0&&S<=M)return n.copy(l);const R=S*p-d*M;if(R<=0&&p>=0&&M<=0)return f=p/(p-M),n.copy(r).addScaledVector(va,f);const x=g*M-S*_;if(x<=0&&_-g>=0&&S-M>=0)return A1.subVectors(l,o),f=(_-g)/(_-g+(S-M)),n.copy(o).addScaledVector(A1,f);const y=1/(x+R+v);return u=R*y,f=v*y,n.copy(r).addScaledVector(_a,u).addScaledVector(va,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const P2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},kc={h:0,s:0,l:0};function Jh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ut{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Lt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Lt.workingColorSpace){if(e=TE(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Jh(u,l,e+1/3),this.g=Jh(u,l,e),this.b=Jh(u,l,e-1/3)}return Lt.toWorkingColorSpace(this,o),this}setStyle(e,n=Yi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yi){const r=P2[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yi){return Lt.fromWorkingColorSpace(qn.copy(this),e),Math.round(Et(qn.r*255,0,255))*65536+Math.round(Et(qn.g*255,0,255))*256+Math.round(Et(qn.b*255,0,255))}getHexString(e=Yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.fromWorkingColorSpace(qn.copy(this),n);const r=qn.r,o=qn.g,l=qn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,p;const g=(f+u)/2;if(f===u)d=0,p=0;else{const _=u-f;switch(p=g<=.5?_/(u+f):_/(2-u-f),u){case r:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-r)/_+2;break;case l:d=(r-o)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,n=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Yi){Lt.fromWorkingColorSpace(qn.copy(this),e);const n=qn.r,r=qn.g,o=qn.b;return e!==Yi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+n,Us.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Us),e.getHSL(kc);const r=Fh(Us.h,kc.h,n),o=Fh(Us.s,kc.s,n),l=Fh(Us.l,kc.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Ut;Ut.NAMES=P2;let HE=0;class du extends Qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=uu(),this.name="",this.type="Material",this.blending=ba,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mp,this.blendDst=Tp,this.blendEquation=yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(r.blending=this.blending),this.side!==Xs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Mp&&(r.blendSrc=this.blendSrc),this.blendDst!==Tp&&(r.blendDst=this.blendDst),this.blendEquation!==yo&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Na&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d1&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class L2 extends du{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=d2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new re,Bc=new Ht;class bi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=h1,this.updateRanges=[],this.gpuType=Zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Bc.fromBufferAttribute(this,n),Bc.applyMatrix3(e),this.setXY(n,Bc.x,Bc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Xl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=di(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xl(n,this.array)),n}setX(e,n){return this.normalized&&(n=di(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xl(n,this.array)),n}setY(e,n){return this.normalized&&(n=di(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=di(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xl(n,this.array)),n}setW(e,n){return this.normalized&&(n=di(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=di(n,this.array),r=di(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=di(n,this.array),r=di(r,this.array),o=di(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=di(n,this.array),r=di(r,this.array),o=di(o,this.array),l=di(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h1&&(e.usage=this.usage),e}}class D2 extends bi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class I2 extends bi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class wo extends bi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let GE=0;const Gi=new pn,ep=new vi,ya=new re,wi=new fu,$l=new fu,Nn=new re;class ls extends Qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=uu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w2(e)?I2:D2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,n,r){return Gi.makeTranslation(e,n,r),this.applyMatrix4(Gi),this}scale(e,n,r){return Gi.makeScale(e,n,r),this.applyMatrix4(Gi),this}lookAt(e){return ep.lookAt(e),ep.updateMatrix(),this.applyMatrix4(ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new wo(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];wi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Af);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];$l.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(wi.min,$l.min),wi.expandByPoint(Nn),Nn.addVectors(wi.max,$l.max),wi.expandByPoint(Nn)):(wi.expandByPoint($l.min),wi.expandByPoint($l.max))}wi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Nn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Nn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)Nn.fromBufferAttribute(f,p),d&&(ya.fromBufferAttribute(e,p),Nn.add(ya)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let j=0;j<r.count;j++)f[j]=new re,d[j]=new re;const p=new re,g=new re,_=new re,v=new Ht,S=new Ht,M=new Ht,R=new re,x=new re;function y(j,C,w){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,w),v.fromBufferAttribute(l,j),S.fromBufferAttribute(l,C),M.fromBufferAttribute(l,w),g.sub(p),_.sub(p),S.sub(v),M.sub(v);const I=1/(S.x*M.y-M.x*S.y);isFinite(I)&&(R.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(I),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(I),f[j].add(R),f[C].add(R),f[w].add(R),d[j].add(x),d[C].add(x),d[w].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,C=U.length;j<C;++j){const w=U[j],I=w.start,Z=w.count;for(let Y=I,ue=I+Z;Y<ue;Y+=3)y(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const D=new re,b=new re,G=new re,z=new re;function F(j){G.fromBufferAttribute(o,j),z.copy(G);const C=f[j];D.copy(C),D.sub(G.multiplyScalar(G.dot(C))).normalize(),b.crossVectors(z,C);const I=b.dot(d[j])<0?-1:1;u.setXYZW(j,D.x,D.y,D.z,I)}for(let j=0,C=U.length;j<C;++j){const w=U[j],I=w.start,Z=w.count;for(let Y=I,ue=I+Z;Y<ue;Y+=3)F(e.getX(Y+0)),F(e.getX(Y+1)),F(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new re,l=new re,u=new re,f=new re,d=new re,p=new re,g=new re,_=new re;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),R=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(n,M),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,x),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),f.add(g),d.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Nn.fromBufferAttribute(e,n),Nn.normalize(),e.setXYZ(n,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,d){const p=f.array,g=f.itemSize,_=f.normalized,v=new p.constructor(d.length*g);let S=0,M=0;for(let R=0,x=d.length;R<x;R++){f.isInterleavedBufferAttribute?S=d[R]*f.data.stride+f.offset:S=d[R]*g;for(let y=0;y<g;y++)v[M++]=p[S++]}return new bi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ls,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=e(d,r);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=e(v,r);d.push(S)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const R1=new pn,fo=new C2,zc=new Af,C1=new re,Vc=new re,Hc=new re,Gc=new re,tp=new re,Wc=new re,b1=new re,Xc=new re;class Jr extends vi{constructor(e=new ls,n=new L2){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Wc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],_=l[d];g!==0&&(tp.fromBufferAttribute(_,e),u?Wc.addScaledVector(tp,g):Wc.addScaledVector(tp.sub(n),g))}n.add(Wc)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),fo.copy(e.ray).recast(e.near),!(zc.containsPoint(fo.origin)===!1&&(fo.intersectSphere(zc,C1)===null||fo.origin.distanceToSquared(C1)>(e.far-e.near)**2))&&(R1.copy(l).invert(),fo.copy(e.ray).applyMatrix4(R1),!(r.boundingBox!==null&&fo.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,fo)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,R=v.length;M<R;M++){const x=v[M],y=u[x.materialIndex],U=Math.max(x.start,S.start),D=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let b=U,G=D;b<G;b+=3){const z=f.getX(b),F=f.getX(b+1),j=f.getX(b+2);o=jc(this,y,e,r,p,g,_,z,F,j),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let x=M,y=R;x<y;x+=3){const U=f.getX(x),D=f.getX(x+1),b=f.getX(x+2);o=jc(this,u,e,r,p,g,_,U,D,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,R=v.length;M<R;M++){const x=v[M],y=u[x.materialIndex],U=Math.max(x.start,S.start),D=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let b=U,G=D;b<G;b+=3){const z=b,F=b+1,j=b+2;o=jc(this,y,e,r,p,g,_,z,F,j),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let x=M,y=R;x<y;x+=3){const U=x,D=x+1,b=x+2;o=jc(this,u,e,r,p,g,_,U,D,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function WE(t,e,n,r,o,l,u,f){let d;if(e.side===gi?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===Xs,f),d===null)return null;Xc.copy(f),Xc.applyMatrix4(t.matrixWorld);const p=n.ray.origin.distanceTo(Xc);return p<n.near||p>n.far?null:{distance:p,point:Xc.clone(),object:t}}function jc(t,e,n,r,o,l,u,f,d,p){t.getVertexPosition(f,Vc),t.getVertexPosition(d,Hc),t.getVertexPosition(p,Gc);const g=WE(t,e,n,r,Vc,Hc,Gc,b1);if(g){const _=new re;ar.getBarycoord(b1,Vc,Hc,Gc,_),o&&(g.uv=ar.getInterpolatedAttribute(o,f,d,p,_,new Ht)),l&&(g.uv1=ar.getInterpolatedAttribute(l,f,d,p,_,new Ht)),u&&(g.normal=ar.getInterpolatedAttribute(u,f,d,p,_,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new re,materialIndex:0};ar.getNormal(Vc,Hc,Gc,v.normal),g.face=v,g.barycoord=_}return g}class hu extends ls{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,S=0;M("z","y","x",-1,-1,r,n,e,u,l,0),M("z","y","x",1,-1,r,n,-e,u,l,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,l,4),M("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new wo(p,3)),this.setAttribute("normal",new wo(g,3)),this.setAttribute("uv",new wo(_,2));function M(R,x,y,U,D,b,G,z,F,j,C){const w=b/F,I=G/j,Z=b/2,Y=G/2,ue=z/2,fe=F+1,ae=j+1;let le=0,k=0;const te=new re;for(let se=0;se<ae;se++){const N=se*I-Y;for(let ie=0;ie<fe;ie++){const De=ie*w-Z;te[R]=De*U,te[x]=N*D,te[y]=ue,p.push(te.x,te.y,te.z),te[R]=0,te[x]=0,te[y]=z>0?1:-1,g.push(te.x,te.y,te.z),_.push(ie/F),_.push(1-se/j),le+=1}}for(let se=0;se<j;se++)for(let N=0;N<F;N++){const ie=v+N+fe*se,De=v+N+fe*(se+1),Q=v+(N+1)+fe*(se+1),ce=v+(N+1)+fe*se;d.push(ie,De,ce),d.push(De,Q,ce),k+=6}f.addGroup(S,k,C),S+=k,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function za(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const o=t[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function ri(t){const e={};for(let n=0;n<t.length;n++){const r=za(t[n]);for(const o in r)e[o]=r[o]}return e}function XE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function N2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const jE={clone:za,merge:ri};var YE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class is extends du{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=XE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}let U2=class extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Qr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Fs=new re,P1=new Ht,L1=new Ht;class qi extends U2{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lm*2*Math.atan(Math.tan(Uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,n){return this.getViewBounds(e,P1,L1),n.subVectors(L1,P1)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/d,n-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xa=-90,Sa=1;class $E extends vi{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qi(xa,Sa,e,n);o.layers=this.layers,this.add(o);const l=new qi(xa,Sa,e,n);l.layers=this.layers,this.add(l);const u=new qi(xa,Sa,e,n);u.layers=this.layers,this.add(u);const f=new qi(xa,Sa,e,n);f.layers=this.layers,this.add(f);const d=new qi(xa,Sa,e,n);d.layers=this.layers,this.add(d);const p=new qi(xa,Sa,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,d]=n;for(const p of n)this.remove(p);if(e===Qr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===gf)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,d),e.setRenderTarget(r,4,o),e.render(n,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,v,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class F2 extends _i{constructor(e,n,r,o,l,u,f,d,p,g){e=e!==void 0?e:[],n=n!==void 0?n:Ua,super(e,n,r,o,l,u,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KE extends Do{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new F2(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new hu(5,5,5),l=new is({name:"CubemapFromEquirect",uniforms:za(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gi,blending:Hs});l.uniforms.tEquirect.value=n;const u=new Jr(o,l),f=n.minFilter;return n.minFilter===Eo&&(n.minFilter=Mr),new $E(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}class ZE extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const np=new re,QE=new re,JE=new dt;class _o{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=np.subVectors(r,n).cross(QE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(np),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||JE.getNormalMatrix(e),o=this.coplanarPoint(np).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ho=new Af,Yc=new re;class O2{constructor(e=new _o,n=new _o,r=new _o,o=new _o,l=new _o,u=new _o){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Qr){const r=this.planes,o=e.elements,l=o[0],u=o[1],f=o[2],d=o[3],p=o[4],g=o[5],_=o[6],v=o[7],S=o[8],M=o[9],R=o[10],x=o[11],y=o[12],U=o[13],D=o[14],b=o[15];if(r[0].setComponents(d-l,v-p,x-S,b-y).normalize(),r[1].setComponents(d+l,v+p,x+S,b+y).normalize(),r[2].setComponents(d+u,v+g,x+M,b+U).normalize(),r[3].setComponents(d-u,v-g,x-M,b-U).normalize(),r[4].setComponents(d-f,v-_,x-R,b-D).normalize(),n===Qr)r[5].setComponents(d+f,v+_,x+R,b+D).normalize();else if(n===gf)r[5].setComponents(f,_,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ho.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ho)}intersectsSprite(e){return ho.center.set(0,0,0),ho.radius=.7071067811865476,ho.applyMatrix4(e.matrixWorld),this.intersectsSphere(ho)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Yc.x=o.normal.x>0?e.max.x:e.min.x,Yc.y=o.normal.y>0?e.max.y:e.min.y,Yc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eM extends du{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D1=new pn,um=new C2,qc=new Af,$c=new re;class tM extends vi{constructor(e=new ls,n=new eM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),qc.copy(r.boundingSphere),qc.applyMatrix4(o),qc.radius+=l,e.ray.intersectsSphere(qc)===!1)return;D1.copy(o).invert(),um.copy(e.ray).applyMatrix4(D1);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=r.index,_=r.attributes.position;if(p!==null){const v=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let M=v,R=S;M<R;M++){const x=p.getX(M);$c.fromBufferAttribute(_,x),I1($c,x,d,o,e,n,this)}}else{const v=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let M=v,R=S;M<R;M++)$c.fromBufferAttribute(_,M),I1($c,M,d,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function I1(t,e,n,r,o,l,u){const f=um.distanceSqToPoint(t);if(f<n){const d=new re;um.closestPointToPoint(t,d),d.applyMatrix4(r);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Kc extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}class k2 extends _i{constructor(e,n,r,o,l,u,f,d,p,g=Pa){if(g!==Pa&&g!==ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Pa&&(r=Lo),r===void 0&&g===ka&&(r=Oa),super(null,o,l,u,f,d,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ur,this.minFilter=d!==void 0?d:ur,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Rf extends ls{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),d=Math.floor(o),p=f+1,g=d+1,_=e/f,v=n/d,S=[],M=[],R=[],x=[];for(let y=0;y<g;y++){const U=y*v-u;for(let D=0;D<p;D++){const b=D*_-l;M.push(b,-U,0),R.push(0,0,1),x.push(D/f),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let U=0;U<f;U++){const D=U+p*y,b=U+p*(y+1),G=U+1+p*(y+1),z=U+1+p*y;S.push(D,b,z),S.push(b,G,z)}this.setIndex(S),this.setAttribute("position",new wo(M,3)),this.setAttribute("normal",new wo(R,3)),this.setAttribute("uv",new wo(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rf(e.width,e.height,e.widthSegments,e.heightSegments)}}class nM extends du{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends du{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rM extends U2{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sM extends qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=N1(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=N1();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function N1(){return performance.now()}function U1(t,e,n,r){const o=aM(r);switch(n){case _2:return t*e;case y2:return t*e;case x2:return t*e*2;case S2:return t*e/o.components*o.byteLength;case Nm:return t*e/o.components*o.byteLength;case E2:return t*e*2/o.components*o.byteLength;case Um:return t*e*2/o.components*o.byteLength;case v2:return t*e*3/o.components*o.byteLength;case lr:return t*e*4/o.components*o.byteLength;case Fm:return t*e*4/o.components*o.byteLength;case af:case lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uf:case cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Op:case Bp:return Math.max(t,16)*Math.max(e,8)/4;case Fp:case kp:return Math.max(t,8)*Math.max(e,8)/2;case zp:case Vp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $p:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case em:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ff:case im:case rm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case M2:case sm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case om:case am:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aM(t){switch(t){case ts:case p2:return{byteLength:1,components:1};case iu:case m2:case lu:return{byteLength:2,components:1};case Dm:case Im:return{byteLength:2,components:4};case Lo:case Lm:case Zr:return{byteLength:4,components:1};case g2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pm);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function B2(){let t=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=t.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(o),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){t=l}}}function lM(t){const e=new WeakMap;function n(f,d){const p=f.array,g=f.usage,_=p.byteLength,v=t.createBuffer();t.bindBuffer(d,v),t.bufferData(d,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=t.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=t.HALF_FLOAT:S=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=t.SHORT;else if(p instanceof Uint32Array)S=t.UNSIGNED_INT;else if(p instanceof Int32Array)S=t.INT;else if(p instanceof Int8Array)S=t.BYTE;else if(p instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,d,p){const g=d.array,_=d.updateRanges;if(t.bindBuffer(p,f),_.length===0)t.bufferSubData(p,0,g);else{_.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<_.length;S++){const M=_[v],R=_[S];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++v,_[v]=R)}_.length=v+1;for(let S=0,M=_.length;S<M;S++){const R=_[S];t.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(t.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:u}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ST=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ET=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,v4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:uM,alphahash_pars_fragment:cM,alphamap_fragment:fM,alphamap_pars_fragment:dM,alphatest_fragment:hM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:_M,batching_vertex:vM,begin_vertex:yM,beginnormal_vertex:xM,bsdfs:SM,iridescence_fragment:EM,bumpmap_pars_fragment:MM,clipping_planes_fragment:TM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:bM,color_pars_vertex:PM,color_vertex:LM,common:DM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:NM,displacementmap_pars_vertex:UM,displacementmap_vertex:FM,emissivemap_fragment:OM,emissivemap_pars_fragment:kM,colorspace_fragment:BM,colorspace_pars_fragment:zM,envmap_fragment:VM,envmap_common_pars_fragment:HM,envmap_pars_fragment:GM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:tT,envmap_vertex:XM,fog_vertex:jM,fog_pars_vertex:YM,fog_fragment:qM,fog_pars_fragment:$M,gradientmap_pars_fragment:KM,lightmap_pars_fragment:ZM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:eT,lights_toon_fragment:nT,lights_toon_pars_fragment:iT,lights_phong_fragment:rT,lights_phong_pars_fragment:sT,lights_physical_fragment:oT,lights_physical_pars_fragment:aT,lights_fragment_begin:lT,lights_fragment_maps:uT,lights_fragment_end:cT,logdepthbuf_fragment:fT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:pT,map_fragment:mT,map_pars_fragment:gT,map_particle_fragment:_T,map_particle_pars_fragment:vT,metalnessmap_fragment:yT,metalnessmap_pars_fragment:xT,morphinstance_vertex:ST,morphcolor_vertex:ET,morphnormal_vertex:MT,morphtarget_pars_vertex:TT,morphtarget_vertex:wT,normal_fragment_begin:AT,normal_fragment_maps:RT,normal_pars_fragment:CT,normal_pars_vertex:bT,normal_vertex:PT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:DT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:UT,opaque_fragment:FT,packing:OT,premultiplied_alpha_fragment:kT,project_vertex:BT,dithering_fragment:zT,dithering_pars_fragment:VT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:GT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:XT,shadowmap_vertex:jT,shadowmask_pars_fragment:YT,skinbase_vertex:qT,skinning_pars_vertex:$T,skinning_vertex:KT,skinnormal_vertex:ZT,specularmap_fragment:QT,specularmap_pars_fragment:JT,tonemapping_fragment:e4,tonemapping_pars_fragment:t4,transmission_fragment:n4,transmission_pars_fragment:i4,uv_pars_fragment:r4,uv_pars_vertex:s4,uv_vertex:o4,worldpos_vertex:a4,background_vert:l4,background_frag:u4,backgroundCube_vert:c4,backgroundCube_frag:f4,cube_vert:d4,cube_frag:h4,depth_vert:p4,depth_frag:m4,distanceRGBA_vert:g4,distanceRGBA_frag:_4,equirect_vert:v4,equirect_frag:y4,linedashed_vert:x4,linedashed_frag:S4,meshbasic_vert:E4,meshbasic_frag:M4,meshlambert_vert:T4,meshlambert_frag:w4,meshmatcap_vert:A4,meshmatcap_frag:R4,meshnormal_vert:C4,meshnormal_frag:b4,meshphong_vert:P4,meshphong_frag:L4,meshphysical_vert:D4,meshphysical_frag:I4,meshtoon_vert:N4,meshtoon_frag:U4,points_vert:F4,points_frag:O4,shadow_vert:k4,shadow_frag:B4,sprite_vert:z4,sprite_frag:V4},be={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Er={basic:{uniforms:ri([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:ri([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:ri([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:ri([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:ri([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:ri([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:ri([be.points,be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:ri([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:ri([be.common,be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:ri([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:ri([be.sprite,be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:ri([be.common,be.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:ri([be.lights,be.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Er.physical={uniforms:ri([Er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Zc={r:0,b:0,g:0},po=new ns,H4=new pn;function G4(t,e,n,r,o,l,u){const f=new Ut(0);let d=l===!0?0:1,p,g,_=null,v=0,S=null;function M(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?n:e).get(b)),b}function R(D){let b=!1;const G=M(D);G===null?y(f,d):G&&G.isColor&&(y(G,1),b=!0);const z=t.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(t.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(D,b){const G=M(b);G&&(G.isCubeTexture||G.mapping===wf)?(g===void 0&&(g=new Jr(new hu(1,1,1),new is({name:"BackgroundCubeMaterial",uniforms:za(Er.backgroundCube.uniforms),vertexShader:Er.backgroundCube.vertexShader,fragmentShader:Er.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),po.copy(b.backgroundRotation),po.x*=-1,po.y*=-1,po.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(H4.makeRotationFromEuler(po)),g.material.toneMapped=Lt.getTransfer(G.colorSpace)!==kt,(_!==G||v!==G.version||S!==t.toneMapping)&&(g.material.needsUpdate=!0,_=G,v=G.version,S=t.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Jr(new Rf(2,2),new is({name:"BackgroundMaterial",uniforms:za(Er.background.uniforms),vertexShader:Er.background.vertexShader,fragmentShader:Er.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(G.colorSpace)!==kt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||v!==G.version||S!==t.toneMapping)&&(p.material.needsUpdate=!0,_=G,v=G.version,S=t.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function y(D,b){D.getRGB(Zc,N2(t)),r.buffers.color.setClear(Zc.r,Zc.g,Zc.b,b,u)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(D,b=1){f.set(D),d=b,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,y(f,d)},render:R,addToRenderList:x,dispose:U}}function W4(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function f(w,I,Z,Y,ue){let fe=!1;const ae=_(Y,Z,I);l!==ae&&(l=ae,p(l.object)),fe=S(w,Y,Z,ue),fe&&M(w,Y,Z,ue),ue!==null&&e.update(ue,t.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,b(w,I,Z,Y),ue!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return t.createVertexArray()}function p(w){return t.bindVertexArray(w)}function g(w){return t.deleteVertexArray(w)}function _(w,I,Z){const Y=Z.wireframe===!0;let ue=r[w.id];ue===void 0&&(ue={},r[w.id]=ue);let fe=ue[I.id];fe===void 0&&(fe={},ue[I.id]=fe);let ae=fe[Y];return ae===void 0&&(ae=v(d()),fe[Y]=ae),ae}function v(w){const I=[],Z=[],Y=[];for(let ue=0;ue<n;ue++)I[ue]=0,Z[ue]=0,Y[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Z,attributeDivisors:Y,object:w,attributes:{},index:null}}function S(w,I,Z,Y){const ue=l.attributes,fe=I.attributes;let ae=0;const le=Z.getAttributes();for(const k in le)if(le[k].location>=0){const se=ue[k];let N=fe[k];if(N===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),se===void 0||se.attribute!==N||N&&se.data!==N.data)return!0;ae++}return l.attributesNum!==ae||l.index!==Y}function M(w,I,Z,Y){const ue={},fe=I.attributes;let ae=0;const le=Z.getAttributes();for(const k in le)if(le[k].location>=0){let se=fe[k];se===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(se=w.instanceColor));const N={};N.attribute=se,se&&se.data&&(N.data=se.data),ue[k]=N,ae++}l.attributes=ue,l.attributesNum=ae,l.index=Y}function R(){const w=l.newAttributes;for(let I=0,Z=w.length;I<Z;I++)w[I]=0}function x(w){y(w,0)}function y(w,I){const Z=l.newAttributes,Y=l.enabledAttributes,ue=l.attributeDivisors;Z[w]=1,Y[w]===0&&(t.enableVertexAttribArray(w),Y[w]=1),ue[w]!==I&&(t.vertexAttribDivisor(w,I),ue[w]=I)}function U(){const w=l.newAttributes,I=l.enabledAttributes;for(let Z=0,Y=I.length;Z<Y;Z++)I[Z]!==w[Z]&&(t.disableVertexAttribArray(Z),I[Z]=0)}function D(w,I,Z,Y,ue,fe,ae){ae===!0?t.vertexAttribIPointer(w,I,Z,ue,fe):t.vertexAttribPointer(w,I,Z,Y,ue,fe)}function b(w,I,Z,Y){R();const ue=Y.attributes,fe=Z.getAttributes(),ae=I.defaultAttributeValues;for(const le in fe){const k=fe[le];if(k.location>=0){let te=ue[le];if(te===void 0&&(le==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),le==="instanceColor"&&w.instanceColor&&(te=w.instanceColor)),te!==void 0){const se=te.normalized,N=te.itemSize,ie=e.get(te);if(ie===void 0)continue;const De=ie.buffer,Q=ie.type,ce=ie.bytesPerElement,xe=Q===t.INT||Q===t.UNSIGNED_INT||te.gpuType===Lm;if(te.isInterleavedBufferAttribute){const ge=te.data,we=ge.stride,Ue=te.offset;if(ge.isInstancedInterleavedBuffer){for(let it=0;it<k.locationSize;it++)y(k.location+it,ge.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let it=0;it<k.locationSize;it++)x(k.location+it);t.bindBuffer(t.ARRAY_BUFFER,De);for(let it=0;it<k.locationSize;it++)D(k.location+it,N/k.locationSize,Q,se,we*ce,(Ue+N/k.locationSize*it)*ce,xe)}else{if(te.isInstancedBufferAttribute){for(let ge=0;ge<k.locationSize;ge++)y(k.location+ge,te.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<k.locationSize;ge++)x(k.location+ge);t.bindBuffer(t.ARRAY_BUFFER,De);for(let ge=0;ge<k.locationSize;ge++)D(k.location+ge,N/k.locationSize,Q,se,N*ce,N/k.locationSize*ge*ce,xe)}}else if(ae!==void 0){const se=ae[le];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(k.location,se);break;case 3:t.vertexAttrib3fv(k.location,se);break;case 4:t.vertexAttrib4fv(k.location,se);break;default:t.vertexAttrib1fv(k.location,se)}}}}U()}function G(){j();for(const w in r){const I=r[w];for(const Z in I){const Y=I[Z];for(const ue in Y)g(Y[ue].object),delete Y[ue];delete I[Z]}delete r[w]}}function z(w){if(r[w.id]===void 0)return;const I=r[w.id];for(const Z in I){const Y=I[Z];for(const ue in Y)g(Y[ue].object),delete Y[ue];delete I[Z]}delete r[w.id]}function F(w){for(const I in r){const Z=r[I];if(Z[w.id]===void 0)continue;const Y=Z[w.id];for(const ue in Y)g(Y[ue].object),delete Y[ue];delete Z[w.id]}}function j(){C(),u=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:x,disableUnusedAttributes:U}}function X4(t,e,n){let r;function o(p){r=p}function l(p,g){t.drawArrays(r,p,g),n.update(g,r,1)}function u(p,g,_){_!==0&&(t.drawArraysInstanced(r,p,g,_),n.update(g,r,_))}function f(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];n.update(S,r,1)}function d(p,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],g[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,_);let M=0;for(let R=0;R<_;R++)M+=g[R]*v[R];n.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function j4(t,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=t.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==lr&&r.convert(F)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const j=F===lu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ts&&r.convert(F)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Zr&&!j)}function d(F){if(F==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),U=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),D=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,z=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:G,maxSamples:z}}function Y4(t){const e=this;let n=null,r=0,o=!1,l=!1;const u=new _o,f=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const M=_.clippingPlanes,R=_.clipIntersection,x=_.clipShadows,y=t.get(_);if(!o||M===null||M.length===0||l&&!x)l?g(null):p();else{const U=l?0:r,D=U*4;let b=y.clippingState||null;d.value=b,b=g(M,v,D,S);for(let G=0;G!==D;++G)b[G]=n[G];y.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,M){const R=_!==null?_.length:0;let x=null;if(R!==0){if(x=d.value,M!==!0||x===null){const y=S+R*4,U=v.matrixWorldInverse;f.getNormalMatrix(U),(x===null||x.length<y)&&(x=new Float32Array(y));for(let D=0,b=S;D!==R;++D,b+=4)u.copy(_[D]).applyMatrix4(U,f),u.normal.toArray(x,b),x[b+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}function q4(t){let e=new WeakMap;function n(u,f){return f===Dp?u.mapping=Ua:f===Ip&&(u.mapping=Fa),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Dp||f===Ip)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new KE(d.height);return p.fromEquirectangularTexture(t,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ra=4,F1=[.125,.215,.35,.446,.526,.582],xo=20,ip=new rM,O1=new Ut;let rp=null,sp=0,op=0,ap=!1;const vo=(1+Math.sqrt(5))/2,Ea=1/vo,k1=[new re(-vo,Ea,0),new re(vo,Ea,0),new re(-Ea,0,vo),new re(Ea,0,vo),new re(0,vo,-Ea),new re(0,vo,Ea),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class B1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){rp=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rp,sp,op),this._renderer.xr.enabled=ap,e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ua||e.mapping===Fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rp=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mr,minFilter:Mr,generateMipmaps:!1,type:lu,format:lr,colorSpace:Ba,depthBuffer:!1},o=z1(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z1(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$4(l)),this._blurMaterial=K4(l,e,n)}return o}_compileMaterial(e){const n=new Jr(this._lodPlanes[0],e);this._renderer.compile(n,ip)}_sceneToCubeUV(e,n,r,o){const f=new qi(90,1,n,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(O1),g.toneMapping=Gs,g.autoClear=!1;const S=new L2({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),M=new Jr(new hu,S);let R=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,R=!0):(S.color.copy(O1),R=!0);for(let y=0;y<6;y++){const U=y%3;U===0?(f.up.set(0,d[y],0),f.lookAt(p[y],0,0)):U===1?(f.up.set(0,0,d[y]),f.lookAt(0,p[y],0)):(f.up.set(0,d[y],0),f.lookAt(0,0,p[y]));const D=this._cubeSize;Qc(o,U*D,y>2?D:0,D,D),g.setRenderTarget(o),R&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=v,g.autoClear=_,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Ua||e.mapping===Fa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=H1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V1());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Jr(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Qc(n,0,0,3*d,2*d),r.setRenderTarget(n),r.render(u,ip)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=k1[(o-l-1)%k1.length];this._blur(e,l-1,l,u,f)}n.autoClear=r}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Jr(this._lodPlanes[o],p),v=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*xo-1),R=l/M,x=isFinite(l)?1+Math.floor(g*R):xo;x>xo&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xo}`);const y=[];let U=0;for(let F=0;F<xo;++F){const j=F/R,C=Math.exp(-j*j/2);y.push(C),F===0?U+=C:F<x&&(U+=2*C)}for(let F=0;F<y.length;F++)y[F]=y[F]/U;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=M,v.mipInt.value=D-r;const b=this._sizeLods[o],G=3*b*(o>D-Ra?o-D+Ra:0),z=4*(this._cubeSize-b);Qc(n,G,z,3*b,2*b),d.setRenderTarget(n),d.render(_,ip)}}function $4(t){const e=[],n=[],r=[];let o=t;const l=t-Ra+1+F1.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);n.push(f);let d=1/f;u>t-Ra?d=F1[u-t+Ra-1]:u===0&&(d=0),r.push(d);const p=1/(f-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,R=3,x=2,y=1,U=new Float32Array(R*M*S),D=new Float32Array(x*M*S),b=new Float32Array(y*M*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,j=z>2?0:-1,C=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];U.set(C,R*M*z),D.set(v,x*M*z);const w=[z,z,z,z,z,z];b.set(w,y*M*z)}const G=new ls;G.setAttribute("position",new bi(U,R)),G.setAttribute("uv",new bi(D,x)),G.setAttribute("faceIndex",new bi(b,y)),e.push(G),o>Ra&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function z1(t,e,n){const r=new Do(t,e,n);return r.texture.mapping=wf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Qc(t,e,n,r,o){t.viewport.set(e,n,r,o),t.scissor.set(e,n,r,o)}function K4(t,e,n){const r=new Float32Array(xo),o=new re(0,1,0);return new is({name:"SphericalGaussianBlur",defines:{n:xo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function V1(){return new is({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function H1(){return new is({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Om(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z4(t){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===Dp||d===Ip,g=d===Ua||d===Fa;if(p||g){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new B1(t)),_=p?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new B1(t)),_=p?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Q4(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=t.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&wa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function J4(t,e,n,r){const o={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const S in v)e.update(v[S],t.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,M=_.attributes.position;let R=0;if(S!==null){const U=S.array;R=S.version;for(let D=0,b=U.length;D<b;D+=3){const G=U[D+0],z=U[D+1],F=U[D+2];v.push(G,z,z,F,F,G)}}else if(M!==void 0){const U=M.array;R=M.version;for(let D=0,b=U.length/3-1;D<b;D+=3){const G=D+0,z=D+1,F=D+2;v.push(G,z,z,F,F,G)}}else return;const x=new(w2(v)?I2:D2)(v,1);x.version=R;const y=l.get(_);y&&e.remove(y),l.set(_,x)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:g}}function ew(t,e,n){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,S){t.drawElements(r,S,l,v*u),n.update(S,r,1)}function p(v,S,M){M!==0&&(t.drawElementsInstanced(r,S,l,v*u,M),n.update(S,r,M))}function g(v,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];n.update(x,r,1)}function _(v,S,M,R){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)p(v[y]/u,S[y],R[y]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,R,0,M);let y=0;for(let U=0;U<M;U++)y+=S[U]*R[U];n.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function tw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case t.TRIANGLES:n.triangles+=f*(l/3);break;case t.LINES:n.lines+=f*(l/2);break;case t.LINE_STRIP:n.lines+=f*(l-1);break;case t.LINE_LOOP:n.lines+=f*l;break;case t.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function nw(t,e,n){const r=new WeakMap,o=new hn;function l(u,f,d){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==_){let w=function(){j.dispose(),r.delete(f),f.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let b=0;M===!0&&(b=1),R===!0&&(b=2),x===!0&&(b=3);let G=f.attributes.position.count*b,z=1;G>e.maxTextureSize&&(z=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*z*4*_),j=new R2(F,G,z,_);j.type=Zr,j.needsUpdate=!0;const C=b*4;for(let I=0;I<_;I++){const Z=y[I],Y=U[I],ue=D[I],fe=G*z*4*I;for(let ae=0;ae<Z.count;ae++){const le=ae*C;M===!0&&(o.fromBufferAttribute(Z,ae),F[fe+le+0]=o.x,F[fe+le+1]=o.y,F[fe+le+2]=o.z,F[fe+le+3]=0),R===!0&&(o.fromBufferAttribute(Y,ae),F[fe+le+4]=o.x,F[fe+le+5]=o.y,F[fe+le+6]=o.z,F[fe+le+7]=0),x===!0&&(o.fromBufferAttribute(ue,ae),F[fe+le+8]=o.x,F[fe+le+9]=o.y,F[fe+le+10]=o.z,F[fe+le+11]=ue.itemSize===4?o.w:1)}}v={count:_,texture:j,size:new Ht(G,z)},r.set(f,v),f.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const R=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(t,"morphTargetBaseInfluence",R),d.getUniforms().setValue(t,"morphTargetInfluences",p)}d.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}return{update:l}}function iw(t,e,n,r){let o=new WeakMap;function l(d){const p=r.render.frame,g=d.geometry,_=e.get(d,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return _}function u(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}const z2=new _i,G1=new k2(1,1),V2=new R2,H2=new NE,G2=new F2,W1=[],X1=[],j1=new Float32Array(16),Y1=new Float32Array(9),q1=new Float32Array(4);function Ja(t,e,n){const r=t[0];if(r<=0||r>0)return t;const o=e*n;let l=W1[o];if(l===void 0&&(l=new Float32Array(o),W1[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,t[u].toArray(l,f)}return l}function An(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Rn(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Cf(t,e){let n=X1[e];n===void 0&&(n=new Int32Array(e),X1[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2fv(this.addr,e),Rn(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;t.uniform3fv(this.addr,e),Rn(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4fv(this.addr,e),Rn(n,e)}}function lw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rn(n,e)}else{if(An(n,r))return;q1.set(r),t.uniformMatrix2fv(this.addr,!1,q1),Rn(n,r)}}function uw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rn(n,e)}else{if(An(n,r))return;Y1.set(r),t.uniformMatrix3fv(this.addr,!1,Y1),Rn(n,r)}}function cw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rn(n,e)}else{if(An(n,r))return;j1.set(r),t.uniformMatrix4fv(this.addr,!1,j1),Rn(n,r)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2iv(this.addr,e),Rn(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3iv(this.addr,e),Rn(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4iv(this.addr,e),Rn(n,e)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2uiv(this.addr,e),Rn(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3uiv(this.addr,e),Rn(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4uiv(this.addr,e),Rn(n,e)}}function yw(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o);let l;this.type===t.SAMPLER_2D_SHADOW?(G1.compareFunction=T2,l=G1):l=z2,n.setTexture2D(e||l,o)}function xw(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||H2,o)}function Sw(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||G2,o)}function Ew(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||V2,o)}function Mw(t){switch(t){case 5126:return rw;case 35664:return sw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return uw;case 35676:return cw;case 5124:case 35670:return fw;case 35667:case 35671:return dw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Ew}}function Tw(t,e){t.uniform1fv(this.addr,e)}function ww(t,e){const n=Ja(e,this.size,2);t.uniform2fv(this.addr,n)}function Aw(t,e){const n=Ja(e,this.size,3);t.uniform3fv(this.addr,n)}function Rw(t,e){const n=Ja(e,this.size,4);t.uniform4fv(this.addr,n)}function Cw(t,e){const n=Ja(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bw(t,e){const n=Ja(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pw(t,e){const n=Ja(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Lw(t,e){t.uniform1iv(this.addr,e)}function Dw(t,e){t.uniform2iv(this.addr,e)}function Iw(t,e){t.uniform3iv(this.addr,e)}function Nw(t,e){t.uniform4iv(this.addr,e)}function Uw(t,e){t.uniform1uiv(this.addr,e)}function Fw(t,e){t.uniform2uiv(this.addr,e)}function Ow(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function Bw(t,e,n){const r=this.cache,o=e.length,l=Cf(n,o);An(r,l)||(t.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||z2,l[u])}function zw(t,e,n){const r=this.cache,o=e.length,l=Cf(n,o);An(r,l)||(t.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||H2,l[u])}function Vw(t,e,n){const r=this.cache,o=e.length,l=Cf(n,o);An(r,l)||(t.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||G2,l[u])}function Hw(t,e,n){const r=this.cache,o=e.length,l=Cf(n,o);An(r,l)||(t.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||V2,l[u])}function Gw(t){switch(t){case 5126:return Tw;case 35664:return ww;case 35665:return Aw;case 35666:return Rw;case 35674:return Cw;case 35675:return bw;case 35676:return Pw;case 5124:case 35670:return Lw;case 35667:case 35671:return Dw;case 35668:case 35672:return Iw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return Fw;case 36295:return Ow;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Ww{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Mw(n.type)}}class Xw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gw(n.type)}}class jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const lp=/(\w+)(\])?(\[|\.)?/g;function $1(t,e){t.seq.push(e),t.map[e.id]=e}function Yw(t,e,n){const r=t.name,o=r.length;for(lp.lastIndex=0;;){const l=lp.exec(r),u=lp.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===o){$1(n,p===void 0?new Ww(f,t,e):new Xw(f,t,e));break}else{let _=n.map[f];_===void 0&&(_=new jw(f),$1(n,_)),n=_}}}class df{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(n,o),u=e.getUniformLocation(n,l.name);Yw(l,u,this)}}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function K1(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const qw=37297;let $w=0;function Kw(t,e){const n=t.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Z1=new dt;function Zw(t){Lt._getMatrix(Z1,Lt.workingColorSpace,t);const e=`mat3( ${Z1.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(t)){case mf:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Q1(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),o=t.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+Kw(t.getShaderSource(e),u)}else return o}function Qw(t,e){const n=Zw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Jw(t,e){let n;switch(e){case sE:n="Linear";break;case oE:n="Reinhard";break;case aE:n="Cineon";break;case lE:n="ACESFilmic";break;case cE:n="AgX";break;case fE:n="Neutral";break;case uE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jc=new re;function eA(){Lt.getLuminanceCoefficients(Jc);const t=Jc.x.toFixed(4),e=Jc.y.toFixed(4),n=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function nA(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function iA(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=t.getActiveAttrib(e,o),u=l.name;let f=1;l.type===t.FLOAT_MAT2&&(f=2),l.type===t.FLOAT_MAT3&&(f=3),l.type===t.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:t.getAttribLocation(e,u),locationSize:f}}return n}function Zl(t){return t!==""}function J1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ev(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function cm(t){return t.replace(rA,oA)}const sA=new Map;function oA(t,e){let n=ht[e];if(n===void 0){const r=sA.get(e);if(r!==void 0)n=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return cm(n)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(t){return t.replace(aA,lA)}function lA(t,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function nv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===f2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===kS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===qr&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ua:case Fa:e="ENVMAP_TYPE_CUBE";break;case wf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fa:e="ENVMAP_MODE_REFRACTION";break}return e}function dA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case d2:e="ENVMAP_BLENDING_MULTIPLY";break;case iE:e="ENVMAP_BLENDING_MIX";break;case rE:e="ENVMAP_BLENDING_ADD";break}return e}function hA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function pA(t,e,n,r){const o=t.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=uA(n),p=cA(n),g=fA(n),_=dA(n),v=hA(n),S=tA(n),M=nA(l),R=o.createProgram();let x,y,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Zl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Zl).join(`
`),y.length>0&&(y+=`
`)):(x=[nv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),y=[nv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gs?"#define TONE_MAPPING":"",n.toneMapping!==Gs?ht.tonemapping_pars_fragment:"",n.toneMapping!==Gs?Jw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Qw("linearToOutputTexel",n.outputColorSpace),eA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zl).join(`
`)),u=cm(u),u=J1(u,n),u=ev(u,n),f=cm(f),f=J1(f,n),f=ev(f,n),u=tv(u),f=tv(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===p1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===p1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=U+x+u,b=U+y+f,G=K1(o,o.VERTEX_SHADER,D),z=K1(o,o.FRAGMENT_SHADER,b);o.attachShader(R,G),o.attachShader(R,z),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function F(I){if(t.debug.checkShaderErrors){const Z=o.getProgramInfoLog(R).trim(),Y=o.getShaderInfoLog(G).trim(),ue=o.getShaderInfoLog(z).trim();let fe=!0,ae=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(fe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,R,G,z);else{const le=Q1(o,G,"vertex"),k=Q1(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Z+`
`+le+`
`+k)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||ue==="")&&(ae=!1);ae&&(I.diagnostics={runnable:fe,programLog:Z,vertexShader:{log:Y,prefix:x},fragmentShader:{log:ue,prefix:y}})}o.deleteShader(G),o.deleteShader(z),j=new df(o,R),C=iA(o,R)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(R,qw)),w},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$w++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=z,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new _A(e),n.set(e,r)),r}}class _A{constructor(e){this.id=mA++,this.code=e,this.usedTimes=0}}function vA(t,e,n,r,o,l,u){const f=new b2,d=new gA,p=new Set,g=[],_=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function x(C,w,I,Z,Y){const ue=Z.fog,fe=Y.geometry,ae=C.isMeshStandardMaterial?Z.environment:null,le=(C.isMeshStandardMaterial?n:e).get(C.envMap||ae),k=le&&le.mapping===wf?le.image.height:null,te=M[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,N=se!==void 0?se.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let De,Q,ce,xe;if(te){const At=Er[te];De=At.vertexShader,Q=At.fragmentShader}else De=C.vertexShader,Q=C.fragmentShader,d.update(C),ce=d.getVertexShaderID(C),xe=d.getFragmentShaderID(C);const ge=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),Ue=Y.isInstancedMesh===!0,it=Y.isBatchedMesh===!0,Ot=!!C.map,yt=!!C.matcap,Gt=!!le,B=!!C.aoMap,Jn=!!C.lightMap,vt=!!C.bumpMap,mt=!!C.normalMap,Ze=!!C.displacementMap,Ft=!!C.emissiveMap,Xe=!!C.metalnessMap,P=!!C.roughnessMap,T=C.anisotropy>0,J=C.clearcoat>0,pe=C.dispersion>0,_e=C.iridescence>0,de=C.sheen>0,je=C.transmission>0,Ae=T&&!!C.anisotropyMap,Fe=J&&!!C.clearcoatMap,pt=J&&!!C.clearcoatNormalMap,Me=J&&!!C.clearcoatRoughnessMap,ke=_e&&!!C.iridescenceMap,et=_e&&!!C.iridescenceThicknessMap,ot=de&&!!C.sheenColorMap,Be=de&&!!C.sheenRoughnessMap,gt=!!C.specularMap,ut=!!C.specularColorMap,Nt=!!C.specularIntensityMap,H=je&&!!C.transmissionMap,Re=je&&!!C.thicknessMap,oe=!!C.gradientMap,he=!!C.alphaMap,Le=C.alphaTest>0,Pe=!!C.alphaHash,ct=!!C.extensions;let Xt=Gs;C.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const xn={shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:De,fragmentShader:Q,defines:C.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:it,batchingColor:it&&Y._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Y.instanceColor!==null,instancingMorph:Ue&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ba,alphaToCoverage:!!C.alphaToCoverage,map:Ot,matcap:yt,envMap:Gt,envMapMode:Gt&&le.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:Jn,bumpMap:vt,normalMap:mt,displacementMap:v&&Ze,emissiveMap:Ft,normalMapObjectSpace:mt&&C.normalMapType===gE,normalMapTangentSpace:mt&&C.normalMapType===mE,metalnessMap:Xe,roughnessMap:P,anisotropy:T,anisotropyMap:Ae,clearcoat:J,clearcoatMap:Fe,clearcoatNormalMap:pt,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:et,sheen:de,sheenColorMap:ot,sheenRoughnessMap:Be,specularMap:gt,specularColorMap:ut,specularIntensityMap:Nt,transmission:je,transmissionMap:H,thicknessMap:Re,gradientMap:oe,opaque:C.transparent===!1&&C.blending===ba&&C.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Pe,combine:C.combine,mapUv:Ot&&R(C.map.channel),aoMapUv:B&&R(C.aoMap.channel),lightMapUv:Jn&&R(C.lightMap.channel),bumpMapUv:vt&&R(C.bumpMap.channel),normalMapUv:mt&&R(C.normalMap.channel),displacementMapUv:Ze&&R(C.displacementMap.channel),emissiveMapUv:Ft&&R(C.emissiveMap.channel),metalnessMapUv:Xe&&R(C.metalnessMap.channel),roughnessMapUv:P&&R(C.roughnessMap.channel),anisotropyMapUv:Ae&&R(C.anisotropyMap.channel),clearcoatMapUv:Fe&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:pt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:et&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&R(C.sheenRoughnessMap.channel),specularMapUv:gt&&R(C.specularMap.channel),specularColorMapUv:ut&&R(C.specularColorMap.channel),specularIntensityMapUv:Nt&&R(C.specularIntensityMap.channel),transmissionMapUv:H&&R(C.transmissionMap.channel),thicknessMapUv:Re&&R(C.thicknessMap.channel),alphaMapUv:he&&R(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(mt||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!fe.attributes.uv&&(Ot||he),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:Y.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ot&&C.map.isVideoTexture===!0&&Lt.getTransfer(C.map.colorSpace)===kt,decodeVideoTextureEmissive:Ft&&C.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(C.emissiveMap.colorSpace)===kt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===$r,flipSided:C.side===gi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ct&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&C.extensions.multiDraw===!0||it)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return xn.vertexUv1s=p.has(1),xn.vertexUv2s=p.has(2),xn.vertexUv3s=p.has(3),p.clear(),xn}function y(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)w.push(I),w.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(U(w,C),D(w,C),w.push(t.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function U(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function D(C,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),C.push(f.mask)}function b(C){const w=M[C.type];let I;if(w){const Z=Er[w];I=jE.clone(Z.uniforms)}else I=C.uniforms;return I}function G(C,w){let I;for(let Z=0,Y=g.length;Z<Y;Z++){const ue=g[Z];if(ue.cacheKey===w){I=ue,++I.usedTimes;break}}return I===void 0&&(I=new pA(t,w,C,l),g.push(I)),I}function z(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function F(C){d.remove(C)}function j(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:b,acquireProgram:G,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:j}}function yA(){let t=new WeakMap;function e(u){return t.has(u)}function n(u){let f=t.get(u);return f===void 0&&(f={},t.set(u,f)),f}function r(u){t.delete(u)}function o(u,f,d){t.get(u)[f]=d}function l(){t=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function xA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function iv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rv(){const t=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(_,v,S,M,R,x){let y=t[e];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:M,renderOrder:_.renderOrder,z:R,group:x},t[e]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=M,y.renderOrder=_.renderOrder,y.z=R,y.group=x),e++,y}function f(_,v,S,M,R,x){const y=u(_,v,S,M,R,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):n.push(y)}function d(_,v,S,M,R,x){const y=u(_,v,S,M,R,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):n.unshift(y)}function p(_,v){n.length>1&&n.sort(_||xA),r.length>1&&r.sort(v||iv),o.length>1&&o.sort(v||iv)}function g(){for(let _=e,v=t.length;_<v;_++){const S=t[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:g,sort:p}}function SA(){let t=new WeakMap;function e(r,o){const l=t.get(r);let u;return l===void 0?(u=new rv,t.set(r,[u])):o>=l.length?(u=new rv,l.push(u)):u=l[o],u}function n(){t=new WeakMap}return{get:e,dispose:n}}function EA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new Ut};break;case"SpotLight":n={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":n={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return t[e.id]=n,n}}}function MA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let TA=0;function wA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AA(t){const e=new EA,n=MA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const o=new re,l=new pn,u=new pn;function f(p){let g=0,_=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,M=0,R=0,x=0,y=0,U=0,D=0,b=0,G=0,z=0,F=0;p.sort(wA);for(let C=0,w=p.length;C<w;C++){const I=p[C],Z=I.color,Y=I.intensity,ue=I.distance,fe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=Z.r*Y,_+=Z.g*Y,v+=Z.b*Y;else if(I.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(I.sh.coefficients[ae],Y);F++}else if(I.isDirectionalLight){const ae=e.get(I);if(ae.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const le=I.shadow,k=n.get(I);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=I.shadow.matrix,U++}r.directional[S]=ae,S++}else if(I.isSpotLight){const ae=e.get(I);ae.position.setFromMatrixPosition(I.matrixWorld),ae.color.copy(Z).multiplyScalar(Y),ae.distance=ue,ae.coneCos=Math.cos(I.angle),ae.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ae.decay=I.decay,r.spot[R]=ae;const le=I.shadow;if(I.map&&(r.spotLightMap[G]=I.map,G++,le.updateMatrices(I),I.castShadow&&z++),r.spotLightMatrix[R]=le.matrix,I.castShadow){const k=n.get(I);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.spotShadow[R]=k,r.spotShadowMap[R]=fe,b++}R++}else if(I.isRectAreaLight){const ae=e.get(I);ae.color.copy(Z).multiplyScalar(Y),ae.halfWidth.set(I.width*.5,0,0),ae.halfHeight.set(0,I.height*.5,0),r.rectArea[x]=ae,x++}else if(I.isPointLight){const ae=e.get(I);if(ae.color.copy(I.color).multiplyScalar(I.intensity),ae.distance=I.distance,ae.decay=I.decay,I.castShadow){const le=I.shadow,k=n.get(I);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,k.shadowCameraNear=le.camera.near,k.shadowCameraFar=le.camera.far,r.pointShadow[M]=k,r.pointShadowMap[M]=fe,r.pointShadowMatrix[M]=I.shadow.matrix,D++}r.point[M]=ae,M++}else if(I.isHemisphereLight){const ae=e.get(I);ae.skyColor.copy(I.color).multiplyScalar(Y),ae.groundColor.copy(I.groundColor).multiplyScalar(Y),r.hemi[y]=ae,y++}}x>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const j=r.hash;(j.directionalLength!==S||j.pointLength!==M||j.spotLength!==R||j.rectAreaLength!==x||j.hemiLength!==y||j.numDirectionalShadows!==U||j.numPointShadows!==D||j.numSpotShadows!==b||j.numSpotMaps!==G||j.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=b+G-z,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,j.directionalLength=S,j.pointLength=M,j.spotLength=R,j.rectAreaLength=x,j.hemiLength=y,j.numDirectionalShadows=U,j.numPointShadows=D,j.numSpotShadows=b,j.numSpotMaps=G,j.numLightProbes=F,r.version=TA++)}function d(p,g){let _=0,v=0,S=0,M=0,R=0;const x=g.matrixWorldInverse;for(let y=0,U=p.length;y<U;y++){const D=p[y];if(D.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),_++}else if(D.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),S++}else if(D.isRectAreaLight){const b=r.rectArea[M];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(x),u.identity(),l.copy(D.matrixWorld),l.premultiply(x),u.extractRotation(l),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const b=r.point[v];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(x),v++}else if(D.isHemisphereLight){const b=r.hemi[R];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(x),R++}}}return{setup:f,setupView:d,state:r}}function sv(t){const e=new AA(t),n=[],r=[];function o(g){p.camera=g,n.length=0,r.length=0}function l(g){n.push(g)}function u(g){r.push(g)}function f(){e.setup(n)}function d(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function RA(t){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new sv(t),e.set(o,[f])):l>=u.length?(f=new sv(t),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PA(t,e,n){let r=new O2;const o=new Ht,l=new Ht,u=new hn,f=new nM({depthPacking:pE}),d=new iM,p={},g=n.maxTextureSize,_={[Xs]:gi,[gi]:Xs,[$r]:$r},v=new is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:CA,fragmentShader:bA}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new ls;M.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Jr(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f2;let y=this.type;this.render=function(z,F,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const C=t.getRenderTarget(),w=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(Hs),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const Y=y!==qr&&this.type===qr,ue=y===qr&&this.type!==qr;for(let fe=0,ae=z.length;fe<ae;fe++){const le=z[fe],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const te=k.getFrameExtents();if(o.multiply(te),l.copy(k.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/te.x),o.x=l.x*te.x,k.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/te.y),o.y=l.y*te.y,k.mapSize.y=l.y)),k.map===null||Y===!0||ue===!0){const N=this.type!==qr?{minFilter:ur,magFilter:ur}:{};k.map!==null&&k.map.dispose(),k.map=new Do(o.x,o.y,N),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const se=k.getViewportCount();for(let N=0;N<se;N++){const ie=k.getViewport(N);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),Z.viewport(u),k.updateMatrices(le,N),r=k.getFrustum(),b(F,j,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===qr&&U(k,j),k.needsUpdate=!1}y=this.type,x.needsUpdate=!1,t.setRenderTarget(C,w,I)};function U(z,F){const j=e.update(R);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Do(o.x,o.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,t.setRenderTarget(z.mapPass),t.clear(),t.renderBufferDirect(F,null,j,v,R,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,t.setRenderTarget(z.map),t.clear(),t.renderBufferDirect(F,null,j,S,R,null)}function D(z,F,j,C){let w=null;const I=j.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)w=I;else if(w=j.isPointLight===!0?d:f,t.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Z=w.uuid,Y=F.uuid;let ue=p[Z];ue===void 0&&(ue={},p[Z]=ue);let fe=ue[Y];fe===void 0&&(fe=w.clone(),ue[Y]=fe,F.addEventListener("dispose",G)),w=fe}if(w.visible=F.visible,w.wireframe=F.wireframe,C===qr?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=t.properties.get(w);Z.light=j}return w}function b(z,F,j,C,w){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===qr)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,z.matrixWorld);const Y=e.update(z),ue=z.material;if(Array.isArray(ue)){const fe=Y.groups;for(let ae=0,le=fe.length;ae<le;ae++){const k=fe[ae],te=ue[k.materialIndex];if(te&&te.visible){const se=D(z,te,C,w);z.onBeforeShadow(t,z,F,j,Y,se,k),t.renderBufferDirect(j,null,Y,se,z,k),z.onAfterShadow(t,z,F,j,Y,se,k)}}}else if(ue.visible){const fe=D(z,ue,C,w);z.onBeforeShadow(t,z,F,j,Y,fe,null),t.renderBufferDirect(j,null,Y,fe,z,null),z.onAfterShadow(t,z,F,j,Y,fe,null)}}const Z=z.children;for(let Y=0,ue=Z.length;Y<ue;Y++)b(Z[Y],F,j,C,w)}function G(z){z.target.removeEventListener("dispose",G);for(const j in p){const C=p[j],w=z.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const LA={[wp]:Ap,[Rp]:Pp,[Cp]:Lp,[Na]:bp,[Ap]:wp,[Pp]:Rp,[Lp]:Cp,[bp]:Na};function DA(t,e){function n(){let H=!1;const Re=new hn;let oe=null;const he=new hn(0,0,0,0);return{setMask:function(Le){oe!==Le&&!H&&(t.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){H=Le},setClear:function(Le,Pe,ct,Xt,xn){xn===!0&&(Le*=Xt,Pe*=Xt,ct*=Xt),Re.set(Le,Pe,ct,Xt),he.equals(Re)===!1&&(t.clearColor(Le,Pe,ct,Xt),he.copy(Re))},reset:function(){H=!1,oe=null,he.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,oe=null,he=null,Le=null;return{setReversed:function(Pe){if(Re!==Pe){const ct=e.get("EXT_clip_control");Re?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Xt=Le;Le=null,this.setClear(Xt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?ge(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!H&&(t.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(Re&&(Pe=LA[Pe]),he!==Pe){switch(Pe){case wp:t.depthFunc(t.NEVER);break;case Ap:t.depthFunc(t.ALWAYS);break;case Rp:t.depthFunc(t.LESS);break;case Na:t.depthFunc(t.LEQUAL);break;case Cp:t.depthFunc(t.EQUAL);break;case bp:t.depthFunc(t.GEQUAL);break;case Pp:t.depthFunc(t.GREATER);break;case Lp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Pe}},setLocked:function(Pe){H=Pe},setClear:function(Pe){Le!==Pe&&(Re&&(Pe=1-Pe),t.clearDepth(Pe),Le=Pe)},reset:function(){H=!1,oe=null,he=null,Le=null,Re=!1}}}function o(){let H=!1,Re=null,oe=null,he=null,Le=null,Pe=null,ct=null,Xt=null,xn=null;return{setTest:function(At){H||(At?ge(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(At){Re!==At&&!H&&(t.stencilMask(At),Re=At)},setFunc:function(At,si,ei){(oe!==At||he!==si||Le!==ei)&&(t.stencilFunc(At,si,ei),oe=At,he=si,Le=ei)},setOp:function(At,si,ei){(Pe!==At||ct!==si||Xt!==ei)&&(t.stencilOp(At,si,ei),Pe=At,ct=si,Xt=ei)},setLocked:function(At){H=At},setClear:function(At){xn!==At&&(t.clearStencil(At),xn=At)},reset:function(){H=!1,Re=null,oe=null,he=null,Le=null,Pe=null,ct=null,Xt=null,xn=null}}}const l=new n,u=new r,f=new o,d=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,S=[],M=null,R=!1,x=null,y=null,U=null,D=null,b=null,G=null,z=null,F=new Ut(0,0,0),j=0,C=!1,w=null,I=null,Z=null,Y=null,ue=null;const fe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,le=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(k)[1]),ae=le>=1):k.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ae=le>=2);let te=null,se={};const N=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),De=new hn().fromArray(N),Q=new hn().fromArray(ie);function ce(H,Re,oe,he){const Le=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(H,Pe),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<oe;ct++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(Re+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return Pe}const xe={};xe[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(t.DEPTH_TEST),u.setFunc(Na),vt(!1),mt(u1),ge(t.CULL_FACE),B(Hs);function ge(H){g[H]!==!0&&(t.enable(H),g[H]=!0)}function we(H){g[H]!==!1&&(t.disable(H),g[H]=!1)}function Ue(H,Re){return _[H]!==Re?(t.bindFramebuffer(H,Re),_[H]=Re,H===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=Re),H===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function it(H,Re){let oe=S,he=!1;if(H){oe=v.get(Re),oe===void 0&&(oe=[],v.set(Re,oe));const Le=H.textures;if(oe.length!==Le.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,ct=Le.length;Pe<ct;Pe++)oe[Pe]=t.COLOR_ATTACHMENT0+Pe;oe.length=Le.length,he=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,he=!0);he&&t.drawBuffers(oe)}function Ot(H){return M!==H?(t.useProgram(H),M=H,!0):!1}const yt={[yo]:t.FUNC_ADD,[zS]:t.FUNC_SUBTRACT,[VS]:t.FUNC_REVERSE_SUBTRACT};yt[HS]=t.MIN,yt[GS]=t.MAX;const Gt={[WS]:t.ZERO,[XS]:t.ONE,[jS]:t.SRC_COLOR,[Mp]:t.SRC_ALPHA,[QS]:t.SRC_ALPHA_SATURATE,[KS]:t.DST_COLOR,[qS]:t.DST_ALPHA,[YS]:t.ONE_MINUS_SRC_COLOR,[Tp]:t.ONE_MINUS_SRC_ALPHA,[ZS]:t.ONE_MINUS_DST_COLOR,[$S]:t.ONE_MINUS_DST_ALPHA,[JS]:t.CONSTANT_COLOR,[eE]:t.ONE_MINUS_CONSTANT_COLOR,[tE]:t.CONSTANT_ALPHA,[nE]:t.ONE_MINUS_CONSTANT_ALPHA};function B(H,Re,oe,he,Le,Pe,ct,Xt,xn,At){if(H===Hs){R===!0&&(we(t.BLEND),R=!1);return}if(R===!1&&(ge(t.BLEND),R=!0),H!==BS){if(H!==x||At!==C){if((y!==yo||b!==yo)&&(t.blendEquation(t.FUNC_ADD),y=yo,b=yo),At)switch(H){case ba:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ep:t.blendFunc(t.ONE,t.ONE);break;case c1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f1:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ba:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ep:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case c1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f1:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}U=null,D=null,G=null,z=null,F.set(0,0,0),j=0,x=H,C=At}return}Le=Le||Re,Pe=Pe||oe,ct=ct||he,(Re!==y||Le!==b)&&(t.blendEquationSeparate(yt[Re],yt[Le]),y=Re,b=Le),(oe!==U||he!==D||Pe!==G||ct!==z)&&(t.blendFuncSeparate(Gt[oe],Gt[he],Gt[Pe],Gt[ct]),U=oe,D=he,G=Pe,z=ct),(Xt.equals(F)===!1||xn!==j)&&(t.blendColor(Xt.r,Xt.g,Xt.b,xn),F.copy(Xt),j=xn),x=H,C=!1}function Jn(H,Re){H.side===$r?we(t.CULL_FACE):ge(t.CULL_FACE);let oe=H.side===gi;Re&&(oe=!oe),vt(oe),H.blending===ba&&H.transparent===!1?B(Hs):B(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const he=H.stencilWrite;f.setTest(he),he&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ft(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(H){w!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),w=H)}function mt(H){H!==FS?(ge(t.CULL_FACE),H!==I&&(H===u1?t.cullFace(t.BACK):H===OS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),I=H}function Ze(H){H!==Z&&(ae&&t.lineWidth(H),Z=H)}function Ft(H,Re,oe){H?(ge(t.POLYGON_OFFSET_FILL),(Y!==Re||ue!==oe)&&(t.polygonOffset(Re,oe),Y=Re,ue=oe)):we(t.POLYGON_OFFSET_FILL)}function Xe(H){H?ge(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function P(H){H===void 0&&(H=t.TEXTURE0+fe-1),te!==H&&(t.activeTexture(H),te=H)}function T(H,Re,oe){oe===void 0&&(te===null?oe=t.TEXTURE0+fe-1:oe=te);let he=se[oe];he===void 0&&(he={type:void 0,texture:void 0},se[oe]=he),(he.type!==H||he.texture!==Re)&&(te!==oe&&(t.activeTexture(oe),te=oe),t.bindTexture(H,Re||xe[H]),he.type=H,he.texture=Re)}function J(){const H=se[te];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(H){De.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),De.copy(H))}function Be(H){Q.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function gt(H,Re){let oe=p.get(Re);oe===void 0&&(oe=new WeakMap,p.set(Re,oe));let he=oe.get(H);he===void 0&&(he=t.getUniformBlockIndex(Re,H.name),oe.set(H,he))}function ut(H,Re){const he=p.get(Re).get(H);d.get(Re)!==he&&(t.uniformBlockBinding(Re,he,H.__bindingPointIndex),d.set(Re,he))}function Nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),u.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),g={},te=null,se={},_={},v=new WeakMap,S=[],M=null,R=!1,x=null,y=null,U=null,D=null,b=null,G=null,z=null,F=new Ut(0,0,0),j=0,C=!1,w=null,I=null,Z=null,Y=null,ue=null,De.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:we,bindFramebuffer:Ue,drawBuffers:it,useProgram:Ot,setBlending:B,setMaterial:Jn,setFlipSided:vt,setCullFace:mt,setLineWidth:Ze,setPolygonOffset:Ft,setScissorTest:Xe,activeTexture:P,bindTexture:T,unbindTexture:J,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:ke,texImage3D:et,updateUBOMapping:gt,uniformBlockBinding:ut,texStorage2D:pt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:je,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:ot,viewport:Be,reset:Nt}}function IA(t,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ht,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,T){return S?new OffscreenCanvas(P,T):_f("canvas")}function R(P,T,J){let pe=1;const _e=Xe(P);if((_e.width>J||_e.height>J)&&(pe=J/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(pe*_e.width),je=Math.floor(pe*_e.height);_===void 0&&(_=M(de,je));const Ae=T?M(de,je):_;return Ae.width=de,Ae.height=je,Ae.getContext("2d").drawImage(P,0,0,de,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+je+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function x(P){return P.generateMipmaps}function y(P){t.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function D(P,T,J,pe,_e=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=T;if(T===t.RED&&(J===t.FLOAT&&(de=t.R32F),J===t.HALF_FLOAT&&(de=t.R16F),J===t.UNSIGNED_BYTE&&(de=t.R8)),T===t.RED_INTEGER&&(J===t.UNSIGNED_BYTE&&(de=t.R8UI),J===t.UNSIGNED_SHORT&&(de=t.R16UI),J===t.UNSIGNED_INT&&(de=t.R32UI),J===t.BYTE&&(de=t.R8I),J===t.SHORT&&(de=t.R16I),J===t.INT&&(de=t.R32I)),T===t.RG&&(J===t.FLOAT&&(de=t.RG32F),J===t.HALF_FLOAT&&(de=t.RG16F),J===t.UNSIGNED_BYTE&&(de=t.RG8)),T===t.RG_INTEGER&&(J===t.UNSIGNED_BYTE&&(de=t.RG8UI),J===t.UNSIGNED_SHORT&&(de=t.RG16UI),J===t.UNSIGNED_INT&&(de=t.RG32UI),J===t.BYTE&&(de=t.RG8I),J===t.SHORT&&(de=t.RG16I),J===t.INT&&(de=t.RG32I)),T===t.RGB_INTEGER&&(J===t.UNSIGNED_BYTE&&(de=t.RGB8UI),J===t.UNSIGNED_SHORT&&(de=t.RGB16UI),J===t.UNSIGNED_INT&&(de=t.RGB32UI),J===t.BYTE&&(de=t.RGB8I),J===t.SHORT&&(de=t.RGB16I),J===t.INT&&(de=t.RGB32I)),T===t.RGBA_INTEGER&&(J===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),J===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),J===t.UNSIGNED_INT&&(de=t.RGBA32UI),J===t.BYTE&&(de=t.RGBA8I),J===t.SHORT&&(de=t.RGBA16I),J===t.INT&&(de=t.RGBA32I)),T===t.RGB&&J===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),T===t.RGBA){const je=_e?mf:Lt.getTransfer(pe);J===t.FLOAT&&(de=t.RGBA32F),J===t.HALF_FLOAT&&(de=t.RGBA16F),J===t.UNSIGNED_BYTE&&(de=je===kt?t.SRGB8_ALPHA8:t.RGBA8),J===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),J===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(P,T){let J;return P?T===null||T===Lo||T===Oa?J=t.DEPTH24_STENCIL8:T===Zr?J=t.DEPTH32F_STENCIL8:T===iu&&(J=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Lo||T===Oa?J=t.DEPTH_COMPONENT24:T===Zr?J=t.DEPTH_COMPONENT32F:T===iu&&(J=t.DEPTH_COMPONENT16),J}function G(P,T){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==ur&&P.minFilter!==Mr?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function z(P){const T=P.target;T.removeEventListener("dispose",z),j(T),T.isVideoTexture&&g.delete(T)}function F(P){const T=P.target;T.removeEventListener("dispose",F),w(T)}function j(P){const T=r.get(P);if(T.__webglInit===void 0)return;const J=P.source,pe=v.get(J);if(pe){const _e=pe[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(P),Object.keys(pe).length===0&&v.delete(J)}r.remove(P)}function C(P){const T=r.get(P);t.deleteTexture(T.__webglTexture);const J=P.source,pe=v.get(J);delete pe[T.__cacheKey],u.memory.textures--}function w(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let _e=0;_e<T.__webglFramebuffer[pe].length;_e++)t.deleteFramebuffer(T.__webglFramebuffer[pe][_e]);else t.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)t.deleteFramebuffer(T.__webglFramebuffer[pe]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=P.textures;for(let pe=0,_e=J.length;pe<_e;pe++){const de=r.get(J[pe]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(J[pe])}r.remove(P)}let I=0;function Z(){I=0}function Y(){const P=I;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),I+=1,P}function ue(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function fe(P,T){const J=r.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,P,T);return}}n.bindTexture(t.TEXTURE_2D,J.__webglTexture,t.TEXTURE0+T)}function ae(P,T){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Q(J,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,J.__webglTexture,t.TEXTURE0+T)}function le(P,T){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Q(J,P,T);return}n.bindTexture(t.TEXTURE_3D,J.__webglTexture,t.TEXTURE0+T)}function k(P,T){const J=r.get(P);if(P.version>0&&J.__version!==P.version){ce(J,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture,t.TEXTURE0+T)}const te={[Np]:t.REPEAT,[So]:t.CLAMP_TO_EDGE,[Up]:t.MIRRORED_REPEAT},se={[ur]:t.NEAREST,[dE]:t.NEAREST_MIPMAP_NEAREST,[Pc]:t.NEAREST_MIPMAP_LINEAR,[Mr]:t.LINEAR,[Nh]:t.LINEAR_MIPMAP_NEAREST,[Eo]:t.LINEAR_MIPMAP_LINEAR},N={[_E]:t.NEVER,[ME]:t.ALWAYS,[vE]:t.LESS,[T2]:t.LEQUAL,[yE]:t.EQUAL,[EE]:t.GEQUAL,[xE]:t.GREATER,[SE]:t.NOTEQUAL};function ie(P,T){if(T.type===Zr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mr||T.magFilter===Nh||T.magFilter===Pc||T.magFilter===Eo||T.minFilter===Mr||T.minFilter===Nh||T.minFilter===Pc||T.minFilter===Eo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,te[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,te[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,te[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,se[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ur||T.minFilter!==Pc&&T.minFilter!==Eo||T.type===Zr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function De(P,T){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const pe=T.source;let _e=v.get(pe);_e===void 0&&(_e={},v.set(pe,_e));const de=ue(T);if(de!==P.__cacheKey){_e[de]===void 0&&(_e[de]={texture:t.createTexture(),usedTimes:0},u.memory.textures++,J=!0),_e[de].usedTimes++;const je=_e[P.__cacheKey];je!==void 0&&(_e[P.__cacheKey].usedTimes--,je.usedTimes===0&&C(T)),P.__cacheKey=de,P.__webglTexture=_e[de].texture}return J}function Q(P,T,J){let pe=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=t.TEXTURE_3D);const _e=De(P,T),de=T.source;n.bindTexture(pe,P.__webglTexture,t.TEXTURE0+J);const je=r.get(de);if(de.version!==je.__version||_e===!0){n.activeTexture(t.TEXTURE0+J);const Ae=Lt.getPrimaries(Lt.workingColorSpace),Fe=T.colorSpace===zs?null:Lt.getPrimaries(T.colorSpace),pt=T.colorSpace===zs||Ae===Fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Me=R(T.image,!1,o.maxTextureSize);Me=Ft(T,Me);const ke=l.convert(T.format,T.colorSpace),et=l.convert(T.type);let ot=D(T.internalFormat,ke,et,T.colorSpace,T.isVideoTexture);ie(pe,T);let Be;const gt=T.mipmaps,ut=T.isVideoTexture!==!0,Nt=je.__version===void 0||_e===!0,H=de.dataReady,Re=G(T,Me);if(T.isDepthTexture)ot=b(T.format===ka,T.type),Nt&&(ut?n.texStorage2D(t.TEXTURE_2D,1,ot,Me.width,Me.height):n.texImage2D(t.TEXTURE_2D,0,ot,Me.width,Me.height,0,ke,et,null));else if(T.isDataTexture)if(gt.length>0){ut&&Nt&&n.texStorage2D(t.TEXTURE_2D,Re,ot,gt[0].width,gt[0].height);for(let oe=0,he=gt.length;oe<he;oe++)Be=gt[oe],ut?H&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,et,Be.data):n.texImage2D(t.TEXTURE_2D,oe,ot,Be.width,Be.height,0,ke,et,Be.data);T.generateMipmaps=!1}else ut?(Nt&&n.texStorage2D(t.TEXTURE_2D,Re,ot,Me.width,Me.height),H&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,et,Me.data)):n.texImage2D(t.TEXTURE_2D,0,ot,Me.width,Me.height,0,ke,et,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ut&&Nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,ot,gt[0].width,gt[0].height,Me.depth);for(let oe=0,he=gt.length;oe<he;oe++)if(Be=gt[oe],T.format!==lr)if(ke!==null)if(ut){if(H)if(T.layerUpdates.size>0){const Le=U1(Be.width,Be.height,T.format,T.type);for(const Pe of T.layerUpdates){const ct=Be.data.subarray(Pe*Le/Be.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Pe,Be.width,Be.height,1,ke,ct)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Me.depth,ke,Be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,ot,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?H&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Me.depth,ke,et,Be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,ot,Be.width,Be.height,Me.depth,0,ke,et,Be.data)}else{ut&&Nt&&n.texStorage2D(t.TEXTURE_2D,Re,ot,gt[0].width,gt[0].height);for(let oe=0,he=gt.length;oe<he;oe++)Be=gt[oe],T.format!==lr?ke!==null?ut?H&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,Be.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,ot,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?H&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,et,Be.data):n.texImage2D(t.TEXTURE_2D,oe,ot,Be.width,Be.height,0,ke,et,Be.data)}else if(T.isDataArrayTexture)if(ut){if(Nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,ot,Me.width,Me.height,Me.depth),H)if(T.layerUpdates.size>0){const oe=U1(Me.width,Me.height,T.format,T.type);for(const he of T.layerUpdates){const Le=Me.data.subarray(he*oe/Me.data.BYTES_PER_ELEMENT,(he+1)*oe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,ke,et,Le)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,et,Me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ot,Me.width,Me.height,Me.depth,0,ke,et,Me.data);else if(T.isData3DTexture)ut?(Nt&&n.texStorage3D(t.TEXTURE_3D,Re,ot,Me.width,Me.height,Me.depth),H&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,et,Me.data)):n.texImage3D(t.TEXTURE_3D,0,ot,Me.width,Me.height,Me.depth,0,ke,et,Me.data);else if(T.isFramebufferTexture){if(Nt)if(ut)n.texStorage2D(t.TEXTURE_2D,Re,ot,Me.width,Me.height);else{let oe=Me.width,he=Me.height;for(let Le=0;Le<Re;Le++)n.texImage2D(t.TEXTURE_2D,Le,ot,oe,he,0,ke,et,null),oe>>=1,he>>=1}}else if(gt.length>0){if(ut&&Nt){const oe=Xe(gt[0]);n.texStorage2D(t.TEXTURE_2D,Re,ot,oe.width,oe.height)}for(let oe=0,he=gt.length;oe<he;oe++)Be=gt[oe],ut?H&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ke,et,Be):n.texImage2D(t.TEXTURE_2D,oe,ot,ke,et,Be);T.generateMipmaps=!1}else if(ut){if(Nt){const oe=Xe(Me);n.texStorage2D(t.TEXTURE_2D,Re,ot,oe.width,oe.height)}H&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,et,Me)}else n.texImage2D(t.TEXTURE_2D,0,ot,ke,et,Me);x(T)&&y(pe),je.__version=de.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ce(P,T,J){if(T.image.length!==6)return;const pe=De(P,T),_e=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+J);const de=r.get(_e);if(_e.version!==de.__version||pe===!0){n.activeTexture(t.TEXTURE0+J);const je=Lt.getPrimaries(Lt.workingColorSpace),Ae=T.colorSpace===zs?null:Lt.getPrimaries(T.colorSpace),Fe=T.colorSpace===zs||je===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let he=0;he<6;he++)!pt&&!Me?ke[he]=R(T.image[he],!0,o.maxCubemapSize):ke[he]=Me?T.image[he].image:T.image[he],ke[he]=Ft(T,ke[he]);const et=ke[0],ot=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),gt=D(T.internalFormat,ot,Be,T.colorSpace),ut=T.isVideoTexture!==!0,Nt=de.__version===void 0||pe===!0,H=_e.dataReady;let Re=G(T,et);ie(t.TEXTURE_CUBE_MAP,T);let oe;if(pt){ut&&Nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,gt,et.width,et.height);for(let he=0;he<6;he++){oe=ke[he].mipmaps;for(let Le=0;Le<oe.length;Le++){const Pe=oe[Le];T.format!==lr?ot!==null?ut?H&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,ot,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,gt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,ot,Be,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,gt,Pe.width,Pe.height,0,ot,Be,Pe.data)}}}else{if(oe=T.mipmaps,ut&&Nt){oe.length>0&&Re++;const he=Xe(ke[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,gt,he.width,he.height)}for(let he=0;he<6;he++)if(Me){ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke[he].width,ke[he].height,ot,Be,ke[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,gt,ke[he].width,ke[he].height,0,ot,Be,ke[he].data);for(let Le=0;Le<oe.length;Le++){const ct=oe[Le].image[he].image;ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,ct.width,ct.height,ot,Be,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,gt,ct.width,ct.height,0,ot,Be,ct.data)}}else{ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ot,Be,ke[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,gt,ot,Be,ke[he]);for(let Le=0;Le<oe.length;Le++){const Pe=oe[Le];ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,ot,Be,Pe.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,gt,ot,Be,Pe.image[he])}}}x(T)&&y(t.TEXTURE_CUBE_MAP),de.__version=_e.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function xe(P,T,J,pe,_e,de){const je=l.convert(J.format,J.colorSpace),Ae=l.convert(J.type),Fe=D(J.internalFormat,je,Ae,J.colorSpace),pt=r.get(T),Me=r.get(J);if(Me.__renderTarget=T,!pt.__hasExternalTextures){const ke=Math.max(1,T.width>>de),et=Math.max(1,T.height>>de);_e===t.TEXTURE_3D||_e===t.TEXTURE_2D_ARRAY?n.texImage3D(_e,de,Fe,ke,et,T.depth,0,je,Ae,null):n.texImage2D(_e,de,Fe,ke,et,0,je,Ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),mt(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,_e,Me.__webglTexture,0,vt(T)):(_e===t.TEXTURE_2D||_e>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,pe,_e,Me.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(P,T,J){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer){const pe=T.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,de=b(T.stencilBuffer,_e),je=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=vt(T);mt(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,de,T.width,T.height):J?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,de,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,de,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,je,t.RENDERBUFFER,P)}else{const pe=T.textures;for(let _e=0;_e<pe.length;_e++){const de=pe[_e],je=l.convert(de.format,de.colorSpace),Ae=l.convert(de.type),Fe=D(de.internalFormat,je,Ae,de.colorSpace),pt=vt(T);J&&mt(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt,Fe,T.width,T.height):mt(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt,Fe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Fe,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const _e=pe.__webglTexture,de=vt(T);if(T.depthTexture.format===Pa)mt(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(T.depthTexture.format===ka)mt(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ue(P){const T=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=pe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");we(T.__webglFramebuffer,P)}else if(J){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=t.createRenderbuffer(),ge(T.__webglDepthbuffer[pe],P,!1);else{const _e=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[pe];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,de)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),ge(T.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,_e),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,_e)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function it(P,T,J){const pe=r.get(P);T!==void 0&&xe(pe.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),J!==void 0&&Ue(P)}function Ot(P){const T=P.texture,J=r.get(P),pe=r.get(T);P.addEventListener("dispose",F);const _e=P.textures,de=P.isWebGLCubeRenderTarget===!0,je=_e.length>1;if(je||(pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture()),pe.__version=T.version,u.memory.textures++),de){J.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)J.__webglFramebuffer[Ae][Fe]=t.createFramebuffer()}else J.__webglFramebuffer[Ae]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)J.__webglFramebuffer[Ae]=t.createFramebuffer()}else J.__webglFramebuffer=t.createFramebuffer();if(je)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const pt=r.get(_e[Ae]);pt.__webglTexture===void 0&&(pt.__webglTexture=t.createTexture(),u.memory.textures++)}if(P.samples>0&&mt(P)===!1){J.__webglMultisampledFramebuffer=t.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];J.__webglColorRenderbuffer[Ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,J.__webglColorRenderbuffer[Ae]);const pt=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),ke=D(Fe.internalFormat,pt,Me,Fe.colorSpace,P.isXRRenderTarget===!0),et=vt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,et,ke,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,J.__webglColorRenderbuffer[Ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(J.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(t.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)xe(J.__webglFramebuffer[Ae][Fe],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else xe(J.__webglFramebuffer[Ae],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(T)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const pt=_e[Ae],Me=r.get(pt);n.bindTexture(t.TEXTURE_2D,Me.__webglTexture),ie(t.TEXTURE_2D,pt),xe(J.__webglFramebuffer,P,pt,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,0),x(pt)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let Ae=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ae,pe.__webglTexture),ie(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)xe(J.__webglFramebuffer[Fe],P,T,t.COLOR_ATTACHMENT0,Ae,Fe);else xe(J.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,Ae,0);x(T)&&y(Ae),n.unbindTexture()}P.depthBuffer&&Ue(P)}function yt(P){const T=P.textures;for(let J=0,pe=T.length;J<pe;J++){const _e=T[J];if(x(_e)){const de=U(P),je=r.get(_e).__webglTexture;n.bindTexture(de,je),y(de),n.unbindTexture()}}}const Gt=[],B=[];function Jn(P){if(P.samples>0){if(mt(P)===!1){const T=P.textures,J=P.width,pe=P.height;let _e=t.COLOR_BUFFER_BIT;const de=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,je=r.get(P),Ae=T.length>1;if(Ae)for(let Fe=0;Fe<T.length;Fe++)n.bindFramebuffer(t.FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,je.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=t.STENCIL_BUFFER_BIT)),Ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const pt=r.get(T[Fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pt,0)}t.blitFramebuffer(0,0,J,pe,0,0,J,pe,_e,t.NEAREST),d===!0&&(Gt.length=0,B.length=0,Gt.push(t.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Gt.push(de),B.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,B)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<T.length;Fe++){n.bindFramebuffer(t.FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const pt=r.get(T[Fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,je.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,pt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const T=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function vt(P){return Math.min(o.maxSamples,P.samples)}function mt(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(P){const T=u.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Ft(P,T){const J=P.colorSpace,pe=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==Ba&&J!==zs&&(Lt.getTransfer(J)===kt?(pe!==lr||_e!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=Z,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=le,this.setTextureCube=k,this.rebindTextures=it,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Jn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=mt}function NA(t,e){function n(r,o=zs){let l;const u=Lt.getTransfer(o);if(r===ts)return t.UNSIGNED_BYTE;if(r===Dm)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Im)return t.UNSIGNED_SHORT_5_5_5_1;if(r===g2)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===p2)return t.BYTE;if(r===m2)return t.SHORT;if(r===iu)return t.UNSIGNED_SHORT;if(r===Lm)return t.INT;if(r===Lo)return t.UNSIGNED_INT;if(r===Zr)return t.FLOAT;if(r===lu)return t.HALF_FLOAT;if(r===_2)return t.ALPHA;if(r===v2)return t.RGB;if(r===lr)return t.RGBA;if(r===y2)return t.LUMINANCE;if(r===x2)return t.LUMINANCE_ALPHA;if(r===Pa)return t.DEPTH_COMPONENT;if(r===ka)return t.DEPTH_STENCIL;if(r===S2)return t.RED;if(r===Nm)return t.RED_INTEGER;if(r===E2)return t.RG;if(r===Um)return t.RG_INTEGER;if(r===Fm)return t.RGBA_INTEGER;if(r===af||r===lf||r===uf||r===cf)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===af)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===af)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===uf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fp||r===Op||r===kp||r===Bp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Fp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Op)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zp||r===Vp||r===Hp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===zp||r===Vp)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Hp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gp||r===Wp||r===Xp||r===jp||r===Yp||r===qp||r===$p||r===Kp||r===Zp||r===Qp||r===Jp||r===em||r===tm||r===nm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Gp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$p)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===em)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tm)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nm)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ff||r===im||r===rm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===ff)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===im)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===M2||r===sm||r===om||r===am)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ff)return l.COMPRESSED_RED_RGTC1_EXT;if(r===sm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===om)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===am)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oa?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}const UA={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const x=n.getJointPose(R,r),y=this._getHandJoint(p,R);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&v>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(UA)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Kc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new _i,l=e.properties.get(o);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new is({vertexShader:FA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jr(new Rf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends Qa{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,p=null,g=null,_=null,v=null,S=null,M=null;const R=new kA,x=n.getContextAttributes();let y=null,U=null;const D=[],b=[],G=new Ht;let z=null;const F=new qi;F.viewport=new hn;const j=new qi;j.viewport=new hn;const C=[F,j],w=new sM;let I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=D[Q];return ce===void 0&&(ce=new up,D[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=D[Q];return ce===void 0&&(ce=new up,D[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=D[Q];return ce===void 0&&(ce=new up,D[Q]=ce),ce.getHandSpace()};function Y(Q){const ce=b.indexOf(Q.inputSource);if(ce===-1)return;const xe=D[ce];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,p||u),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",fe);for(let Q=0;Q<D.length;Q++){const ce=b[Q];ce!==null&&(b[Q]=null,D[Q].disconnect(ce))}I=null,Z=null,R.reset(),e.setRenderTarget(y),S=null,v=null,_=null,o=null,U=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(G),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let xe=null,ge=null,we=null;x.depth&&(we=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=x.stencil?ka:Pa,ge=x.stencil?Oa:Lo);const Ue={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:l};_=new XRWebGLBinding(o,n),v=_.createProjectionLayer(Ue),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Do(v.textureWidth,v.textureHeight,{format:lr,type:ts,depthTexture:new k2(v.textureWidth,v.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const xe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,xe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Do(S.framebufferWidth,S.framebufferHeight,{format:lr,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}U.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function fe(Q){for(let ce=0;ce<Q.removed.length;ce++){const xe=Q.removed[ce],ge=b.indexOf(xe);ge>=0&&(b[ge]=null,D[ge].disconnect(xe))}for(let ce=0;ce<Q.added.length;ce++){const xe=Q.added[ce];let ge=b.indexOf(xe);if(ge===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=b.length){b.push(xe),ge=Ue;break}else if(b[Ue]===null){b[Ue]=xe,ge=Ue;break}if(ge===-1)break}const we=D[ge];we&&we.connect(xe)}}const ae=new re,le=new re;function k(Q,ce,xe){ae.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);const ge=ae.distanceTo(le),we=ce.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,it=we[14]/(we[10]-1),Ot=we[14]/(we[10]+1),yt=(we[9]+1)/we[5],Gt=(we[9]-1)/we[5],B=(we[8]-1)/we[0],Jn=(Ue[8]+1)/Ue[0],vt=it*B,mt=it*Jn,Ze=ge/(-B+Jn),Ft=Ze*-B;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ft),Q.translateZ(Ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Xe=it+Ze,P=Ot+Ze,T=vt-Ft,J=mt+(ge-Ft),pe=yt*Ot/P*Xe,_e=Gt*Ot/P*Xe;Q.projectionMatrix.makePerspective(T,J,pe,_e,Xe,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function te(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ce=Q.near,xe=Q.far;R.texture!==null&&(R.depthNear>0&&(ce=R.depthNear),R.depthFar>0&&(xe=R.depthFar)),w.near=j.near=F.near=ce,w.far=j.far=F.far=xe,(I!==w.near||Z!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,Z=w.far),F.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,w.layers.mask=F.layers.mask|j.layers.mask;const ge=Q.parent,we=w.cameras;te(w,ge);for(let Ue=0;Ue<we.length;Ue++)te(we[Ue],ge);we.length===2?k(w,F,j):w.projectionMatrix.copy(F.projectionMatrix),se(Q,w,ge)};function se(Q,ce,xe){xe===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=lm*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let N=null;function ie(Q,ce){if(g=ce.getViewerPose(p||u),M=ce,g!==null){const xe=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ge=!1;xe.length!==w.cameras.length&&(w.cameras.length=0,ge=!0);for(let Ue=0;Ue<xe.length;Ue++){const it=xe[Ue];let Ot=null;if(S!==null)Ot=S.getViewport(it);else{const Gt=_.getViewSubImage(v,it);Ot=Gt.viewport,Ue===0&&(e.setRenderTargetTextures(U,Gt.colorTexture,v.ignoreDepthValues?void 0:Gt.depthStencilTexture),e.setRenderTarget(U))}let yt=C[Ue];yt===void 0&&(yt=new qi,yt.layers.enable(Ue),yt.viewport=new hn,C[Ue]=yt),yt.matrix.fromArray(it.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(it.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Ue===0&&(w.matrix.copy(yt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ge===!0&&w.cameras.push(yt)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=_.getDepthInformation(xe[0]);Ue&&Ue.isValid&&Ue.texture&&R.init(e,Ue,o.renderState)}}for(let xe=0;xe<D.length;xe++){const ge=b[xe],we=D[xe];ge!==null&&we!==void 0&&we.update(ge,ce,p||u)}N&&N(Q,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),M=null}const De=new B2;De.setAnimationLoop(ie),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const mo=new ns,zA=new pn;function VA(t,e){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,N2(t)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,U,D,b){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),g(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,b)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),R(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?d(x,y,U,D):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===gi&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===gi&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const U=e.get(y),D=U.envMap,b=U.envMapRotation;D&&(x.envMap.value=D,mo.copy(b),mo.x*=-1,mo.y*=-1,mo.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),x.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(mo)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,U,D){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*U,x.scale.value=D*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,U){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===gi&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function R(x,y){const U=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function HA(t,e,n,r){let o={},l={},u=[];const f=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function d(U,D){const b=D.program;r.uniformBlockBinding(U,b)}function p(U,D){let b=o[U.id];b===void 0&&(M(U),b=g(U),o[U.id]=b,U.addEventListener("dispose",x));const G=D.program;r.updateUBOMapping(U,G);const z=e.render.frame;l[U.id]!==z&&(v(U),l[U.id]=z)}function g(U){const D=_();U.__bindingPointIndex=D;const b=t.createBuffer(),G=U.__size,z=U.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,G,z),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,D,b),b}function _(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const D=o[U.id],b=U.uniforms,G=U.__cache;t.bindBuffer(t.UNIFORM_BUFFER,D);for(let z=0,F=b.length;z<F;z++){const j=Array.isArray(b[z])?b[z]:[b[z]];for(let C=0,w=j.length;C<w;C++){const I=j[C];if(S(I,z,C,G)===!0){const Z=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value];let ue=0;for(let fe=0;fe<Y.length;fe++){const ae=Y[fe],le=R(ae);typeof ae=="number"||typeof ae=="boolean"?(I.__data[0]=ae,t.bufferSubData(t.UNIFORM_BUFFER,Z+ue,I.__data)):ae.isMatrix3?(I.__data[0]=ae.elements[0],I.__data[1]=ae.elements[1],I.__data[2]=ae.elements[2],I.__data[3]=0,I.__data[4]=ae.elements[3],I.__data[5]=ae.elements[4],I.__data[6]=ae.elements[5],I.__data[7]=0,I.__data[8]=ae.elements[6],I.__data[9]=ae.elements[7],I.__data[10]=ae.elements[8],I.__data[11]=0):(ae.toArray(I.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function S(U,D,b,G){const z=U.value,F=D+"_"+b;if(G[F]===void 0)return typeof z=="number"||typeof z=="boolean"?G[F]=z:G[F]=z.clone(),!0;{const j=G[F];if(typeof z=="number"||typeof z=="boolean"){if(j!==z)return G[F]=z,!0}else if(j.equals(z)===!1)return j.copy(z),!0}return!1}function M(U){const D=U.uniforms;let b=0;const G=16;for(let F=0,j=D.length;F<j;F++){const C=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,I=C.length;w<I;w++){const Z=C[w],Y=Array.isArray(Z.value)?Z.value:[Z.value];for(let ue=0,fe=Y.length;ue<fe;ue++){const ae=Y[ue],le=R(ae),k=b%G,te=k%le.boundary,se=k+te;b+=te,se!==0&&G-se<le.storage&&(b+=G-se),Z.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=le.storage}}}const z=b%G;return z>0&&(b+=G-z),U.__size=b,U.__cache={},this}function R(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function x(U){const D=U.target;D.removeEventListener("dispose",x);const b=u.indexOf(D.__bindingPointIndex);u.splice(b,1),t.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function y(){for(const U in o)t.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:d,update:p,dispose:y}}class GA{constructor(e={}){const{canvas:n=wE(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),R=new Int32Array(4);let x=null,y=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yi,this.toneMapping=Gs,this.toneMappingExposure=1;const b=this;let G=!1,z=0,F=0,j=null,C=-1,w=null;const I=new hn,Z=new hn;let Y=null;const ue=new Ut(0);let fe=0,ae=n.width,le=n.height,k=1,te=null,se=null;const N=new hn(0,0,ae,le),ie=new hn(0,0,ae,le);let De=!1;const Q=new O2;let ce=!1,xe=!1;this.transmissionResolutionScale=1;const ge=new pn,we=new pn,Ue=new re,it=new hn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Gt(){return j===null?k:1}let B=r;function Jn(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pm}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),B===null){const W="webgl2";if(B=Jn(W,A),B===null)throw Jn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let vt,mt,Ze,Ft,Xe,P,T,J,pe,_e,de,je,Ae,Fe,pt,Me,ke,et,ot,Be,gt,ut,Nt,H;function Re(){vt=new Q4(B),vt.init(),ut=new NA(B,vt),mt=new j4(B,vt,e,ut),Ze=new DA(B,vt),mt.reverseDepthBuffer&&v&&Ze.buffers.depth.setReversed(!0),Ft=new tw(B),Xe=new yA,P=new IA(B,vt,Ze,Xe,mt,ut,Ft),T=new q4(b),J=new Z4(b),pe=new lM(B),Nt=new W4(B,pe),_e=new J4(B,pe,Ft,Nt),de=new iw(B,_e,pe,Ft),ot=new nw(B,mt,P),Me=new Y4(Xe),je=new vA(b,T,J,vt,mt,Nt,Me),Ae=new VA(b,Xe),Fe=new SA,pt=new RA(vt),et=new G4(b,T,J,Ze,de,S,d),ke=new PA(b,de,mt),H=new HA(B,Ft,mt,Ze),Be=new X4(B,vt,Ft),gt=new ew(B,vt,Ft),Ft.programs=je.programs,b.capabilities=mt,b.extensions=vt,b.properties=Xe,b.renderLists=Fe,b.shadowMap=ke,b.state=Ze,b.info=Ft}Re();const oe=new BA(b,B);this.xr=oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(ae,le,!1))},this.getSize=function(A){return A.set(ae,le)},this.setSize=function(A,W,ee=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,le=W,n.width=Math.floor(A*k),n.height=Math.floor(W*k),ee===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ae*k,le*k).floor()},this.setDrawingBufferSize=function(A,W,ee){ae=A,le=W,k=ee,n.width=Math.floor(A*ee),n.height=Math.floor(W*ee),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,W,ee,$){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,W,ee,$),Ze.viewport(I.copy(N).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,W,ee,$){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,W,ee,$),Ze.scissor(Z.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){Ze.setScissorTest(De=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,W=!0,ee=!0){let $=0;if(A){let X=!1;if(j!==null){const Se=j.texture.format;X=Se===Fm||Se===Um||Se===Nm}if(X){const Se=j.texture.type,Ce=Se===ts||Se===Lo||Se===iu||Se===Oa||Se===Dm||Se===Im,Ie=et.getClearColor(),ze=et.getClearAlpha(),at=Ie.r,st=Ie.g,Ge=Ie.b;Ce?(M[0]=at,M[1]=st,M[2]=Ge,M[3]=ze,B.clearBufferuiv(B.COLOR,0,M)):(R[0]=at,R[1]=st,R[2]=Ge,R[3]=ze,B.clearBufferiv(B.COLOR,0,R))}else $|=B.COLOR_BUFFER_BIT}W&&($|=B.DEPTH_BUFFER_BIT),ee&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),et.dispose(),Fe.dispose(),pt.dispose(),Xe.dispose(),T.dispose(),J.dispose(),de.dispose(),Nt.dispose(),H.dispose(),je.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Bo),oe.removeEventListener("sessionend",us),Dr.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Ft.autoReset,W=ke.enabled,ee=ke.autoUpdate,$=ke.needsUpdate,X=ke.type;Re(),Ft.autoReset=A,ke.enabled=W,ke.autoUpdate=ee,ke.needsUpdate=$,ke.type=X}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const W=A.target;W.removeEventListener("dispose",ct),Xt(W)}function Xt(A){xn(A),Xe.remove(A)}function xn(A){const W=Xe.get(A).programs;W!==void 0&&(W.forEach(function(ee){je.releaseProgram(ee)}),A.isShaderMaterial&&je.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ee,$,X,Se){W===null&&(W=Ot);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Ie=Tu(A,W,ee,$,X);Ze.setMaterial($,Ce);let ze=ee.index,at=1;if($.wireframe===!0){if(ze=_e.getWireframeAttribute(ee),ze===void 0)return;at=2}const st=ee.drawRange,Ge=ee.attributes.position;let St=st.start*at,ft=(st.start+st.count)*at;Se!==null&&(St=Math.max(St,Se.start*at),ft=Math.min(ft,(Se.start+Se.count)*at)),ze!==null?(St=Math.max(St,0),ft=Math.min(ft,ze.count)):Ge!=null&&(St=Math.max(St,0),ft=Math.min(ft,Ge.count));const on=ft-St;if(on<0||on===1/0)return;Nt.setup(X,$,Ie,ee,ze);let qt,Mt=Be;if(ze!==null&&(qt=pe.get(ze),Mt=gt,Mt.setIndex(qt)),X.isMesh)$.wireframe===!0?(Ze.setLineWidth($.wireframeLinewidth*Gt()),Mt.setMode(B.LINES)):Mt.setMode(B.TRIANGLES);else if(X.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),Ze.setLineWidth(Qe*Gt()),X.isLineSegments?Mt.setMode(B.LINES):X.isLineLoop?Mt.setMode(B.LINE_LOOP):Mt.setMode(B.LINE_STRIP)}else X.isPoints?Mt.setMode(B.POINTS):X.isSprite&&Mt.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Mt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qe=X._multiDrawStarts,an=X._multiDrawCounts,xt=X._multiDrawCount,Vn=ze?pe.get(ze).bytesPerElement:1,fs=Xe.get($).currentProgram.getUniforms();for(let ti=0;ti<xt;ti++)fs.setValue(B,"_gl_DrawID",ti),Mt.render(Qe[ti]/Vn,an[ti])}else if(X.isInstancedMesh)Mt.renderInstances(St,on,X.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,an=Math.min(ee.instanceCount,Qe);Mt.renderInstances(St,on,an)}else Mt.render(St,on)};function At(A,W,ee){A.transparent===!0&&A.side===$r&&A.forceSinglePass===!1?(A.side=gi,A.needsUpdate=!0,zo(A,W,ee),A.side=Xs,A.needsUpdate=!0,zo(A,W,ee),A.side=$r):zo(A,W,ee)}this.compile=function(A,W,ee=null){ee===null&&(ee=A),y=pt.get(ee),y.init(W),D.push(y),ee.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),A!==ee&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const $=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Ie=Se[Ce];At(Ie,ee,X),$.add(Ie)}else At(Se,ee,X),$.add(Se)}),D.pop(),y=null,$},this.compileAsync=function(A,W,ee=null){const $=this.compile(A,W,ee);return new Promise(X=>{function Se(){if($.forEach(function(Ce){Xe.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){X(A);return}setTimeout(Se,10)}vt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let si=null;function ei(A){si&&si(A)}function Bo(){Dr.stop()}function us(){Dr.start()}const Dr=new B2;Dr.setAnimationLoop(ei),typeof self<"u"&&Dr.setContext(self),this.setAnimationLoop=function(A){si=A,oe.setAnimationLoop(A),A===null?Dr.stop():Dr.start()},oe.addEventListener("sessionstart",Bo),oe.addEventListener("sessionend",us),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,W,j),y=pt.get(A,D.length),y.init(W),D.push(y),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(we),xe=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,xe),x=Fe.get(A,U.length),x.init(),U.push(x),oe.enabled===!0&&oe.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&Ir(Se,W,-1/0,b.sortObjects)}Ir(A,W,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(te,se),yt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,yt&&et.addToRenderList(x,A),this.info.render.frame++,ce===!0&&Me.beginShadows();const ee=y.state.shadowsArray;ke.render(ee,A,W),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,X=x.transmissive;if(y.setupLights(),W.isArrayCamera){const Se=W.cameras;if(X.length>0)for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const ze=Se[Ce];Ks($,X,A,ze)}yt&&et.render(A);for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const ze=Se[Ce];$s(x,A,ze,ze.viewport)}}else X.length>0&&Ks($,X,A,W),yt&&et.render(A),$s(x,A,W);j!==null&&F===0&&(P.updateMultisampleRenderTarget(j),P.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(b,A,W),Nt.resetDefaultState(),C=-1,w=null,D.pop(),D.length>0?(y=D[D.length-1],ce===!0&&Me.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function Ir(A,W,ee,$){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){$&&it.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Ce=de.update(A),Ie=A.material;Ie.visible&&x.push(A,Ce,Ie,ee,it.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Ce=de.update(A),Ie=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),it.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),it.copy(Ce.boundingSphere.center)),it.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const ze=Ce.groups;for(let at=0,st=ze.length;at<st;at++){const Ge=ze[at],St=Ie[Ge.materialIndex];St&&St.visible&&x.push(A,Ce,St,ee,it.z,Ge)}}else Ie.visible&&x.push(A,Ce,Ie,ee,it.z,null)}}const Se=A.children;for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++)Ir(Se[Ce],W,ee,$)}function $s(A,W,ee,$){const X=A.opaque,Se=A.transmissive,Ce=A.transparent;y.setupLightsView(ee),ce===!0&&Me.setGlobalState(b.clippingPlanes,ee),$&&Ze.viewport(I.copy($)),X.length>0&&cs(X,W,ee),Se.length>0&&cs(Se,W,ee),Ce.length>0&&cs(Ce,W,ee),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Ks(A,W,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[$.id]===void 0&&(y.state.transmissionRenderTarget[$.id]=new Do(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?lu:ts,minFilter:Eo,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Se=y.state.transmissionRenderTarget[$.id],Ce=$.viewport||I;Se.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);const Ie=b.getRenderTarget();b.setRenderTarget(Se),b.getClearColor(ue),fe=b.getClearAlpha(),fe<1&&b.setClearColor(16777215,.5),b.clear(),yt&&et.render(ee);const ze=b.toneMapping;b.toneMapping=Gs;const at=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),y.setupLightsView($),ce===!0&&Me.setGlobalState(b.clippingPlanes,$),cs(A,ee,$),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),vt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ge=0,St=W.length;Ge<St;Ge++){const ft=W[Ge],on=ft.object,qt=ft.geometry,Mt=ft.material,Qe=ft.group;if(Mt.side===$r&&on.layers.test($.layers)){const an=Mt.side;Mt.side=gi,Mt.needsUpdate=!0,Eu(on,ee,$,qt,Mt,Qe),Mt.side=an,Mt.needsUpdate=!0,st=!0}}st===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}b.setRenderTarget(Ie),b.setClearColor(ue,fe),at!==void 0&&($.viewport=at),b.toneMapping=ze}function cs(A,W,ee){const $=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Se=A.length;X<Se;X++){const Ce=A[X],Ie=Ce.object,ze=Ce.geometry,at=$===null?Ce.material:$,st=Ce.group;Ie.layers.test(ee.layers)&&Eu(Ie,W,ee,ze,at,st)}}function Eu(A,W,ee,$,X,Se){A.onBeforeRender(b,W,ee,$,X,Se),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(b,W,ee,$,A,Se),X.transparent===!0&&X.side===$r&&X.forceSinglePass===!1?(X.side=gi,X.needsUpdate=!0,b.renderBufferDirect(ee,W,$,X,A,Se),X.side=Xs,X.needsUpdate=!0,b.renderBufferDirect(ee,W,$,X,A,Se),X.side=$r):b.renderBufferDirect(ee,W,$,X,A,Se),A.onAfterRender(b,W,ee,$,X,Se)}function zo(A,W,ee){W.isScene!==!0&&(W=Ot);const $=Xe.get(A),X=y.state.lights,Se=y.state.shadowsArray,Ce=X.state.version,Ie=je.getParameters(A,X.state,Se,W,ee),ze=je.getProgramCacheKey(Ie);let at=$.programs;$.environment=A.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(A.isMeshStandardMaterial?J:T).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,at===void 0&&(A.addEventListener("dispose",ct),at=new Map,$.programs=at);let st=at.get(ze);if(st!==void 0){if($.currentProgram===st&&$.lightsStateVersion===Ce)return pr(A,Ie),st}else Ie.uniforms=je.getUniforms(A),A.onBeforeCompile(Ie,b),st=je.acquireProgram(Ie,ze),at.set(ze,st),$.uniforms=Ie.uniforms;const Ge=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),pr(A,Ie),$.needsLights=Qf(A),$.lightsStateVersion=Ce,$.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=st,$.uniformsList=null,st}function Mu(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=df.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function pr(A,W){const ee=Xe.get(A);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Tu(A,W,ee,$,X){W.isScene!==!0&&(W=Ot),P.resetTextureUnits();const Se=W.fog,Ce=$.isMeshStandardMaterial?W.environment:null,Ie=j===null?b.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ba,ze=($.isMeshStandardMaterial?J:T).get($.envMap||Ce),at=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,st=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!ee.morphAttributes.position,St=!!ee.morphAttributes.normal,ft=!!ee.morphAttributes.color;let on=Gs;$.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(on=b.toneMapping);const qt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Mt=qt!==void 0?qt.length:0,Qe=Xe.get($),an=y.state.lights;if(ce===!0&&(xe===!0||A!==w)){const On=A===w&&$.id===C;Me.setState($,A,On)}let xt=!1;$.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==an.state.version||Qe.outputColorSpace!==Ie||X.isBatchedMesh&&Qe.batching===!1||!X.isBatchedMesh&&Qe.batching===!0||X.isBatchedMesh&&Qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||X.isInstancedMesh&&Qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Qe.instancingMorph===!1&&X.morphTexture!==null||Qe.envMap!==ze||$.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Me.numPlanes||Qe.numIntersection!==Me.numIntersection)||Qe.vertexAlphas!==at||Qe.vertexTangents!==st||Qe.morphTargets!==Ge||Qe.morphNormals!==St||Qe.morphColors!==ft||Qe.toneMapping!==on||Qe.morphTargetsCount!==Mt)&&(xt=!0):(xt=!0,Qe.__version=$.version);let Vn=Qe.currentProgram;xt===!0&&(Vn=zo($,W,X));let fs=!1,ti=!1,Nr=!1;const zt=Vn.getUniforms(),Hn=Qe.uniforms;if(Ze.useProgram(Vn.program)&&(fs=!0,ti=!0,Nr=!0),$.id!==C&&(C=$.id,ti=!0),fs||w!==A){Ze.buffers.depth.getReversed()?(ge.copy(A.projectionMatrix),RE(ge),CE(ge),zt.setValue(B,"projectionMatrix",ge)):zt.setValue(B,"projectionMatrix",A.projectionMatrix),zt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Pn=zt.map.cameraPosition;Pn!==void 0&&Pn.setValue(B,Ue.setFromMatrixPosition(A.matrixWorld)),mt.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&zt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,ti=!0,Nr=!0)}if(X.isSkinnedMesh){zt.setOptional(B,X,"bindMatrix"),zt.setOptional(B,X,"bindMatrixInverse");const On=X.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),zt.setValue(B,"boneTexture",On.boneTexture,P))}X.isBatchedMesh&&(zt.setOptional(B,X,"batchingTexture"),zt.setValue(B,"batchingTexture",X._matricesTexture,P),zt.setOptional(B,X,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",X._indirectTexture,P),zt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",X._colorsTexture,P));const bn=ee.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&ot.update(X,ee,Vn),(ti||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,zt.setValue(B,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Hn.envMap.value=ze,Hn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(Hn.envMapIntensity.value=W.environmentIntensity),ti&&(zt.setValue(B,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&wu(Hn,Nr),Se&&$.fog===!0&&Ae.refreshFogUniforms(Hn,Se),Ae.refreshMaterialUniforms(Hn,$,k,le,y.state.transmissionRenderTarget[A.id]),df.upload(B,Mu(Qe),Hn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(df.upload(B,Mu(Qe),Hn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&zt.setValue(B,"center",X.center),zt.setValue(B,"modelViewMatrix",X.modelViewMatrix),zt.setValue(B,"normalMatrix",X.normalMatrix),zt.setValue(B,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const On=$.uniformsGroups;for(let Pn=0,Rt=On.length;Pn<Rt;Pn++){const mr=On[Pn];H.update(mr,Vn),H.bind(mr,Vn)}}return Vn}function wu(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Qf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,W,ee){Xe.get(A.texture).__webglTexture=W,Xe.get(A.depthTexture).__webglTexture=ee;const $=Xe.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=ee===void 0,$.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const ee=Xe.get(A);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const Au=B.createFramebuffer();this.setRenderTarget=function(A,W=0,ee=0){j=A,z=W,F=ee;let $=!0,X=null,Se=!1,Ce=!1;if(A){const ze=Xe.get(A);if(ze.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(B.FRAMEBUFFER,null),$=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(ze.__hasExternalTextures)P.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(ze.__boundDepthTexture!==Ge){if(Ge!==null&&Xe.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const at=A.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ce=!0);const st=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[W])?X=st[W][ee]:X=st[W],Se=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?X=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?X=st[ee]:X=st,I.copy(A.viewport),Z.copy(A.scissor),Y=A.scissorTest}else I.copy(N).multiplyScalar(k).floor(),Z.copy(ie).multiplyScalar(k).floor(),Y=De;if(ee!==0&&(X=Au),Ze.bindFramebuffer(B.FRAMEBUFFER,X)&&$&&Ze.drawBuffers(A,X),Ze.viewport(I),Ze.scissor(Z),Ze.setScissorTest(Y),Se){const ze=Xe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ee)}else if(Ce){const ze=Xe.get(A.texture),at=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,ee,at)}else if(A!==null&&ee!==0){const ze=Xe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,ee)}C=-1},this.readRenderTargetPixels=function(A,W,ee,$,X,Se,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){Ze.bindFramebuffer(B.FRAMEBUFFER,Ie);try{const ze=A.texture,at=ze.format,st=ze.type;if(!mt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-$&&ee>=0&&ee<=A.height-X&&B.readPixels(W,ee,$,X,ut.convert(at),ut.convert(st),Se)}finally{const ze=j!==null?Xe.get(j).__webglFramebuffer:null;Ze.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,ee,$,X,Se,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const ze=A.texture,at=ze.format,st=ze.type;if(!mt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-$&&ee>=0&&ee<=A.height-X){Ze.bindFramebuffer(B.FRAMEBUFFER,Ie);const Ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ge),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(W,ee,$,X,ut.convert(at),ut.convert(st),0);const St=j!==null?Xe.get(j).__webglFramebuffer:null;Ze.bindFramebuffer(B.FRAMEBUFFER,St);const ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await AE(B,ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(Ge),B.deleteSync(ft),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,ee=0){A.isTexture!==!0&&(wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-ee),X=Math.floor(A.image.width*$),Se=Math.floor(A.image.height*$),Ce=W!==null?W.x:0,Ie=W!==null?W.y:0;P.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Ce,Ie,X,Se),Ze.unbindTexture()};const Ru=B.createFramebuffer(),Cu=B.createFramebuffer();this.copyTextureToTexture=function(A,W,ee=null,$=null,X=0,Se=null){A.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],W=arguments[2],Se=arguments[3]||0,ee=null),Se===null&&(X!==0?(wa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=X,X=0):Se=0);let Ce,Ie,ze,at,st,Ge,St,ft,on;const qt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ee!==null)Ce=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,ze=ee.isBox3?ee.max.z-ee.min.z:1,at=ee.min.x,st=ee.min.y,Ge=ee.isBox3?ee.min.z:0;else{const bn=Math.pow(2,-X);Ce=Math.floor(qt.width*bn),Ie=Math.floor(qt.height*bn),A.isDataArrayTexture?ze=qt.depth:A.isData3DTexture?ze=Math.floor(qt.depth*bn):ze=1,at=0,st=0,Ge=0}$!==null?(St=$.x,ft=$.y,on=$.z):(St=0,ft=0,on=0);const Mt=ut.convert(W.format),Qe=ut.convert(W.type);let an;W.isData3DTexture?(P.setTexture3D(W,0),an=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),an=B.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),an=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const xt=B.getParameter(B.UNPACK_ROW_LENGTH),Vn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fs=B.getParameter(B.UNPACK_SKIP_PIXELS),ti=B.getParameter(B.UNPACK_SKIP_ROWS),Nr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,qt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,at),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);const zt=A.isDataArrayTexture||A.isData3DTexture,Hn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const bn=Xe.get(A),On=Xe.get(W),Pn=Xe.get(bn.__renderTarget),Rt=Xe.get(On.__renderTarget);Ze.bindFramebuffer(B.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let mr=0;mr<ze;mr++)zt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,X,Ge+mr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(W).__webglTexture,Se,on+mr)),B.blitFramebuffer(at,st,Ce,Ie,St,ft,Ce,Ie,B.DEPTH_BUFFER_BIT,B.NEAREST);Ze.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Xe.has(A)){const bn=Xe.get(A),On=Xe.get(W);Ze.bindFramebuffer(B.READ_FRAMEBUFFER,Ru),Ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cu);for(let Pn=0;Pn<ze;Pn++)zt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bn.__webglTexture,X,Ge+Pn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bn.__webglTexture,X),Hn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,On.__webglTexture,Se,on+Pn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,On.__webglTexture,Se),X!==0?B.blitFramebuffer(at,st,Ce,Ie,St,ft,Ce,Ie,B.COLOR_BUFFER_BIT,B.NEAREST):Hn?B.copyTexSubImage3D(an,Se,St,ft,on+Pn,at,st,Ce,Ie):B.copyTexSubImage2D(an,Se,St,ft,at,st,Ce,Ie);Ze.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Hn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(an,Se,St,ft,on,Ce,Ie,ze,Mt,Qe,qt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(an,Se,St,ft,on,Ce,Ie,ze,Mt,qt.data):B.texSubImage3D(an,Se,St,ft,on,Ce,Ie,ze,Mt,Qe,qt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,St,ft,Ce,Ie,Mt,Qe,qt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,St,ft,qt.width,qt.height,Mt,qt.data):B.texSubImage2D(B.TEXTURE_2D,Se,St,ft,Ce,Ie,Mt,Qe,qt);B.pixelStorei(B.UNPACK_ROW_LENGTH,xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fs),B.pixelStorei(B.UNPACK_SKIP_ROWS,ti),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Nr),Se===0&&W.generateMipmaps&&B.generateMipmap(an),Ze.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ee=null,$=null,X=0){return A.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,$=arguments[1]||null,A=arguments[2],W=arguments[3],X=arguments[4]||0),wa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ee,$,X)},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ze.unbindTexture()},this.resetState=function(){z=0,F=0,j=null,Ze.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}var Va=typeof self<"u"?self:{};function W2(t,e){e:{for(var n=["CLOSURE_FLAGS"],r=Va,o=0;o<n.length;o++)if((r=r[n[o]])==null){n=null;break e}n=r}return(t=n&&n[t])!=null?t:e}function go(){throw Error("Invalid UTF8")}function ov(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let ef,cp;const WA=typeof TextDecoder<"u";let XA;const jA=typeof TextEncoder<"u";function X2(t){if(jA)t=(XA||(XA=new TextEncoder)).encode(t);else{let n=0;const r=new Uint8Array(3*t.length);for(let o=0;o<t.length;o++){var e=t.charCodeAt(o);if(e<128)r[n++]=e;else{if(e<2048)r[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&o<t.length){const l=t.charCodeAt(++o);if(l>=56320&&l<=57343){e=1024*(e-55296)+l-56320+65536,r[n++]=e>>18|240,r[n++]=e>>12&63|128,r[n++]=e>>6&63|128,r[n++]=63&e|128;continue}o--}e=65533}r[n++]=e>>12|224,r[n++]=e>>6&63|128}r[n++]=63&e|128}}t=n===r.length?r:r.subarray(0,n)}return t}function j2(t){Va.setTimeout((()=>{throw t}),0)}var fm,YA=W2(610401301,!1),av=W2(748402147,!0);function lv(){var t=Va.navigator;return t&&(t=t.userAgent)?t:""}const uv=Va.navigator;function bf(t){return bf[" "](t),t}fm=uv&&uv.userAgentData||null,bf[" "]=function(){};const Y2={};let Ql=null;function qA(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const r=new Uint8Array(n);let o=0;return(function(l,u){function f(p){for(;d<l.length;){const g=l.charAt(d++),_=Ql[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return p}q2();let d=0;for(;;){const p=f(-1),g=f(0),_=f(64),v=f(64);if(v===64&&p===-1)break;u(p<<2|g>>4),_!=64&&(u(g<<4&240|_>>2),v!=64&&u(_<<6&192|v))}})(t,(function(l){r[o++]=l})),o!==n?r.subarray(0,o):r}function q2(){if(!Ql){Ql={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const r=t.concat(e[n].split(""));Y2[n]=r;for(let o=0;o<r.length;o++){const l=r[o];Ql[l]===void 0&&(Ql[l]=o)}}}}var $A=typeof Uint8Array<"u",$2=!(!(YA&&fm&&fm.brands.length>0)&&(lv().indexOf("Trident")!=-1||lv().indexOf("MSIE")!=-1))&&typeof btoa=="function";const cv=/[-_.]/g,KA={"-":"+",_:"/",".":"="};function ZA(t){return KA[t]||""}function K2(t){if(!$2)return qA(t);t=cv.test(t)?t.replace(cv,ZA):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function km(t){return $A&&t!=null&&t instanceof Uint8Array}var Ha={};function Io(){return QA||(QA=new wr(null,Ha))}function Bm(t){Z2(Ha);var e=t.g;return(e=e==null||km(e)?e:typeof e=="string"?K2(e):null)==null?e:t.g=e}var wr=class{h(){return new Uint8Array(Bm(this)||0)}constructor(t,e){if(Z2(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let QA,JA;function Z2(t){if(t!==Ha)throw Error("illegal external caller")}function Q2(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function dm(t){return Q2(t=Error(t),"warning"),t}function Ga(t,e){if(t!=null){var n=JA??(JA={}),r=n[t]||0;r>=e||(n[t]=r+1,Q2(t=Error(),"incident"),j2(t))}}function el(){return typeof BigInt=="function"}var tl=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Rr(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var eR=Rr("jas",void 0,!0),fv=Rr(void 0,"0di"),Kl=Rr(void 0,"1oa"),Pi=Rr(void 0,Symbol()),tR=Rr(void 0,"0ub"),nR=Rr(void 0,"0ubs"),hm=Rr(void 0,"0ubsb"),iR=Rr(void 0,"0actk"),Wa=Rr("m_m","Pa",!0),dv=Rr();const J2={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},ey=Object.defineProperties,qe=tl?eR:"Ga";var Fo;const hv=[];function pu(t,e){tl||qe in t||ey(t,J2),t[qe]|=e}function Cn(t,e){tl||qe in t||ey(t,J2),t[qe]=e}function mu(t){return pu(t,34),t}function ru(t){return pu(t,8192),t}Cn(hv,7),Fo=Object.freeze(hv);var Xa={};function Di(t,e){return e===void 0?t.h!==No&&!!(2&(0|t.v[qe])):!!(2&e)&&t.h!==No}const No={};function zm(t,e){if(t!=null){if(typeof t=="string")t=t?new wr(t,Ha):Io();else if(t.constructor!==wr)if(km(t))t=t.length?new wr(new Uint8Array(t),Ha):Io();else{if(!e)throw Error();t=void 0}}return t}class pv{constructor(e,n,r){this.g=e,this.h=n,this.l=r}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var rR=Object.freeze({});function ty(t,e,n){const r=128&e?0:-1,o=t.length;var l;(l=!!o)&&(l=(l=t[o-1])!=null&&typeof l=="object"&&l.constructor===Object);const u=o+(l?-1:0);for(e=128&e?1:0;e<u;e++)n(e-r,t[e]);if(l){t=t[o-1];for(const f in t)!isNaN(f)&&n(+f,t[f])}}var ny={};function nl(t){return 128&t?ny:void 0}function Pf(t){return t.Na=!0,t}var sR=Pf((t=>typeof t=="number")),mv=Pf((t=>typeof t=="string")),oR=Pf((t=>typeof t=="boolean")),Lf=typeof Va.BigInt=="function"&&typeof Va.BigInt(0)=="bigint";function Li(t){var e=t;if(mv(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(sR(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Lf?BigInt(t):t=oR(t)?t?"1":"0":mv(t)?t.trim()||"0":String(t)}var pm=Pf((t=>Lf?t>=lR&&t<=cR:t[0]==="-"?gv(t,aR):gv(t,uR)));const aR=Number.MIN_SAFE_INTEGER.toString(),lR=Lf?BigInt(Number.MIN_SAFE_INTEGER):void 0,uR=Number.MAX_SAFE_INTEGER.toString(),cR=Lf?BigInt(Number.MAX_SAFE_INTEGER):void 0;function gv(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const r=t[n],o=e[n];if(r>o)return!1;if(r<o)return!0}}const fR=typeof Uint8Array.prototype.slice=="function";let dR,tn=0,_n=0;function _v(t){const e=t>>>0;tn=e,_n=(t-e)/4294967296>>>0}function ja(t){if(t<0){_v(-t);const[e,n]=Gm(tn,_n);tn=e>>>0,_n=n>>>0}else _v(t)}function Vm(t){const e=dR||(dR=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),_n=0,tn=e.getUint32(0,!0)}function iy(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:su(t,e)}function hR(t,e){return Li(el()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):su(t,e))}function ry(t,e){return el()?Li(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Li(Hm(t,e))}function su(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else el()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+vv(n)+vv(t));return n}function vv(t){return t=String(t),"0000000".slice(t.length)+t}function Hm(t,e){if(2147483648&e)if(el())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,r]=Gm(t,e);t="-"+su(n,r)}else t=su(t,e);return t}function Df(t){if(t.length<16)ja(Number(t));else if(el())t=BigInt(t),tn=Number(t&BigInt(4294967295))>>>0,_n=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");_n=tn=0;const n=t.length;for(let r=e,o=(n-e)%6+e;o<=n;r=o,o+=6){const l=Number(t.slice(r,o));_n*=1e6,tn=1e6*tn+l,tn>=4294967296&&(_n+=Math.trunc(tn/4294967296),_n>>>=0,tn>>>=0)}if(e){const[r,o]=Gm(tn,_n);tn=r,_n=o}}}function Gm(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function cr(t){return Array.prototype.slice.call(t)}const gu=typeof BigInt=="function"?BigInt.asIntN:void 0,pR=typeof BigInt=="function"?BigInt.asUintN:void 0,Uo=Number.isSafeInteger,If=Number.isFinite,Ya=Math.trunc,mR=Li(0);function Jl(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function Tr(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function ou(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function sy(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const gR=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function _u(t){switch(typeof t){case"bigint":return!0;case"number":return If(t);case"string":return gR.test(t);default:return!1}}function il(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return If(t)?0|t:void 0}function oy(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return If(t)?t>>>0:void 0}function ay(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Df(t),Hm(tn,_n))}function Wm(t){if(t=Ya(t),!Uo(t)){ja(t);var e=tn,n=_n;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=iy(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function ly(t){var e=Ya(Number(t));return Uo(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),ay(t))}function uy(t){var e=Ya(Number(t));return Uo(e)?Li(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),el()?Li(gu(64,BigInt(t))):Li(ay(t)))}function cy(t){return Uo(t)?t=Li(Wm(t)):(t=Ya(t),Uo(t)?t=String(t):(ja(t),t=Hm(tn,_n)),t=Li(t)),t}function vf(t){const e=typeof t;return t==null?t:e==="bigint"?Li(gu(64,t)):_u(t)?e==="string"?uy(t):cy(t):void 0}function fy(t){if(typeof t!="string")throw Error();return t}function vu(t){if(t!=null&&typeof t!="string")throw Error();return t}function zn(t){return t==null||typeof t=="string"?t:void 0}function Xm(t,e,n,r){return t!=null&&t[Wa]===Xa?t:Array.isArray(t)?((r=(n=0|t[qe])|32&r|2&r)!==n&&Cn(t,r),new e(t)):(n?2&r?((t=e[fv])||(mu((t=new e).v),t=e[fv]=t),e=t):e=new e:e=void 0,e)}function _R(t,e,n){if(e)e:{if(!_u(e=t))throw dm("int64");switch(typeof e){case"string":e=uy(e);break e;case"bigint":e=Li(gu(64,e));break e;default:e=cy(e)}}else e=vf(t);return(t=e)==null?n?mR:void 0:t}const vR={};let yR=(function(){try{return bf(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class fp{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const xR=yR?(Object.setPrototypeOf(fp.prototype,Map.prototype),Object.defineProperties(fp.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),fp):class extends Map{constructor(){super()}};function yv(t){return t}function dp(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var rs=class extends xR{constructor(t,e,n=yv,r=yv){super(),this.J=0|t[qe],this.K=e,this.S=n,this.fa=this.K?SR:r;for(let o=0;o<t.length;o++){const l=t[o],u=n(l[0],!1,!0);let f=l[1];e?f===void 0&&(f=null):f=r(l[1],!1,!0,void 0,void 0,this.J),super.set(u,f)}}V(t){return ru(Array.from(super.entries(),t))}clear(){dp(this),super.clear()}delete(t){return dp(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new pv(t,ER,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new pv(t,rs.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,r,o)=>{t.call(e,o.get(r),r,o)})):super.forEach(t,e)}set(t,e){return dp(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function SR(t,e,n,r,o,l){return t=Xm(t,r,n,l),o&&(t=Ym(t)),t}function ER(t){return[t,this.get(t)]}let MR;function xv(){return MR||(MR=new rs(mu([]),void 0,void 0,void 0,vR))}function Nf(t){return Pi?t[Pi]:void 0}function yf(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}rs.prototype.toJSON=void 0;var mm=class{};const TR={Ka:!0};function wR(t,e){e<100||Ga(nR,1)}function Uf(t,e,n,r){const o=r!==void 0;r=!!r;var l,u=Pi;!o&&tl&&u&&(l=t[u])&&yf(l,wR),u=[];var f=t.length;let d;l=4294967295;let p=!1;const g=!!(64&e),_=g?128&e?0:-1:void 0;1&e||(d=f&&t[f-1],d!=null&&typeof d=="object"&&d.constructor===Object?l=--f:d=void 0,!g||128&e||o||(p=!0,l=l-_+_)),e=void 0;for(var v=0;v<f;v++){let S=t[v];if(S!=null&&(S=n(S,r))!=null)if(g&&v>=l){const M=v-_;(e??(e={}))[M]=S}else u[v]=S}if(d)for(let S in d){if((f=d[S])==null||(f=n(f,r))==null)continue;let M;v=+S,g&&!Number.isNaN(v)&&(M=v+_)<l?u[M]=f:(e??(e={}))[S]=f}return e&&(p?u.push(e):u[l]=e),o&&Pi&&(t=Nf(t))&&t instanceof mm&&(u[Pi]=(function(S){const M=new mm;return yf(S,((R,x,y)=>{M[x]=cr(y)})),M.da=S.da,M})(t)),u}function AR(t){return t[0]=au(t[0]),t[1]=au(t[1]),t}function au(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return pm(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[qe];return t.length===0&&1&e?void 0:Uf(t,e,au)}if(t!=null&&t[Wa]===Xa)return dy(t);if(t instanceof wr){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if($2){for(var n="",r=0,o=e.length-10240;r<o;)n+=String.fromCharCode.apply(null,e.subarray(r,r+=10240));n+=String.fromCharCode.apply(null,r?e.subarray(r):e),e=btoa(n)}else{n===void 0&&(n=0),q2(),n=Y2[n],r=Array(Math.floor(e.length/3)),o=n[64]||"";let p=0,g=0;for(;p<e.length-2;p+=3){var l=e[p],u=e[p+1],f=e[p+2],d=n[l>>2];l=n[(3&l)<<4|u>>4],u=n[(15&u)<<2|f>>6],f=n[63&f],r[g++]=d+l+u+f}switch(d=0,f=o,e.length-p){case 2:f=n[(15&(d=e[p+1]))<<2]||o;case 1:e=e[p],r[g]=n[e>>2]+n[(3&e)<<4|d>>4]+f+o}e=r.join("")}t=t.g=e}return t}return t instanceof rs?t=t.size!==0?t.V(AR):void 0:void 0}return t}let RR,CR;function dy(t){return Uf(t=t.v,0|t[qe],au)}function Ao(t,e){return hy(t,e[0],e[1])}function hy(t,e,n,r=0){if(t==null){var o=32;n?(t=[n],o|=128):t=[],e&&(o=-16760833&o|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(o=0|t[qe],av&&1&o)throw Error("rfarr");if(2048&o&&!(2&o)&&(function(){if(av)throw Error("carr");Ga(iR,5)})(),256&o)throw Error("farr");if(64&o)return(o|r)!==o&&Cn(t,o|r),t;if(n&&(o|=128,n!==t[0]))throw Error("mid");e:{o|=64;var l=(n=t).length;if(l){var u=l-1;const d=n[u];if(d!=null&&typeof d=="object"&&d.constructor===Object){if((u-=e=128&o?0:-1)>=1024)throw Error("pvtlmt");for(var f in d)(l=+f)<u&&(n[l+e]=d[f],delete d[f]);o=-16760833&o|(1023&u)<<14;break e}}if(e){if((f=Math.max(e,l-(128&o?0:-1)))>1024)throw Error("spvt");o=-16760833&o|(1023&f)<<14}}}return Cn(t,64|o|r),t}function bR(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[qe];return t.length===0&&1&n?void 0:Sv(t,n,e)}if(t!=null&&t[Wa]===Xa)return Ev(t);if(t instanceof rs){if(2&(e=t.J))return t;if(!t.size)return;if(n=mu(t.V()),t.K)for(t=0;t<n.length;t++){const r=n[t];let o=r[1];o=o==null||typeof o!="object"?void 0:o!=null&&o[Wa]===Xa?Ev(o):Array.isArray(o)?Sv(o,0|o[qe],!!(32&e)):void 0,r[1]=o}return n}return t instanceof wr?t:void 0}function Sv(t,e,n){return 2&e||(!n||4096&e||16&e?t=rl(t,e,!1,n&&!(16&e)):(pu(t,34),4&e&&Object.freeze(t))),t}function jm(t,e,n){return t=new t.constructor(e),n&&(t.h=No),t.m=No,t}function Ev(t){const e=t.v,n=0|e[qe];return Di(t,n)?t:qm(t,e,n)?jm(t,e):rl(e,n)}function rl(t,e,n,r){return r??(r=!!(34&e)),t=Uf(t,e,bR,r),r=32,n&&(r|=2),Cn(t,e=16769217&e|r),t}function Ym(t){const e=t.v,n=0|e[qe];return Di(t,n)?qm(t,e,n)?jm(t,e,!0):new t.constructor(rl(e,n,!1)):t}function sl(t){if(t.h!==No)return!1;var e=t.v;return pu(e=rl(e,0|e[qe]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function ol(t){if(!sl(t)&&Di(t,0|t.v[qe]))throw Error()}function Oo(t,e){e===void 0&&(e=0|t[qe]),32&e&&!(4096&e)&&Cn(t,4096|e)}function qm(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Cn(e,2|n),t.h=No,!0)}const py=Li(0),Os={};function nn(t,e,n,r,o){if((e=ss(t.v,e,n,o))!==null||r&&t.m!==No)return e}function ss(t,e,n,r){if(e===-1)return null;const o=e+(n?0:-1),l=t.length-1;let u,f;if(!(l<1+(n?0:-1))){if(o>=l)if(u=t[l],u!=null&&typeof u=="object"&&u.constructor===Object)n=u[e],f=!0;else{if(o!==l)return;n=u}else n=t[o];if(r&&n!=null){if((r=r(n))==null)return r;if(!Object.is(r,n))return f?u[e]=r:t[o]=r,r}return n}}function Bt(t,e,n,r){ol(t),Tn(t=t.v,0|t[qe],e,n,r)}function Tn(t,e,n,r,o){const l=n+(o?0:-1);var u=t.length-1;if(u>=1+(o?0:-1)&&l>=u){const f=t[u];if(f!=null&&typeof f=="object"&&f.constructor===Object)return f[n]=r,e}return l<=u?(t[l]=r,e):(r!==void 0&&(n>=(u=(e??(e=0|t[qe]))>>14&1023||536870912)?r!=null&&(t[u+(o?0:-1)]={[n]:r}):t[l]=r),e)}function Mo(){return rR===void 0?2:4}function To(t,e,n,r,o){let l=t.v,u=0|l[qe];r=Di(t,u)?1:r,o=!!o||r===3,r===2&&sl(t)&&(l=t.v,u=0|l[qe]);let f=(t=$m(l,e))===Fo?7:0|t[qe],d=Km(f,u);var p=!(4&d);if(p){4&d&&(t=cr(t),f=0,d=Co(d,u),u=Tn(l,u,e,t));let g=0,_=0;for(;g<t.length;g++){const v=n(t[g]);v!=null&&(t[_++]=v)}_<g&&(t.length=_),n=-513&(4|d),d=n&=-1025,d&=-4097}return d!==f&&(Cn(t,d),2&d&&Object.freeze(t)),my(t,d,l,u,e,r,p,o)}function my(t,e,n,r,o,l,u,f){let d=e;return l===1||l===4&&(2&e||!(16&e)&&32&r)?Ro(e)||((e|=!t.length||u&&!(4096&e)||32&r&&!(4096&e||16&e)?2:256)!==d&&Cn(t,e),Object.freeze(t)):(l===2&&Ro(e)&&(t=cr(t),d=0,e=Co(e,r),r=Tn(n,r,o,t)),Ro(e)||(f||(e|=16),e!==d&&Cn(t,e))),2&e||!(4096&e||16&e)||Oo(n,r),t}function $m(t,e,n){return t=ss(t,e,n),Array.isArray(t)?t:Fo}function Km(t,e){return 2&e&&(t|=2),1|t}function Ro(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function gy(t){return zm(t,!0)}function _y(t){t=cr(t);for(let e=0;e<t.length;e++){const n=t[e]=cr(t[e]);Array.isArray(n[1])&&(n[1]=mu(n[1]))}return ru(t)}function Bs(t,e,n,r){ol(t),Tn(t=t.v,0|t[qe],e,(r==="0"?Number(n)===0:n===r)?void 0:n)}function al(t,e,n){if(2&e)throw Error();const r=nl(e);let o=$m(t,n,r),l=o===Fo?7:0|o[qe],u=Km(l,e);return(2&u||Ro(u)||16&u)&&(u===l||Ro(u)||Cn(o,u),o=cr(o),l=0,u=Co(u,e),Tn(t,e,n,o,r)),u&=-13,u!==l&&Cn(o,u),o}function hp(t,e){var n=lx;return Qm(Zm(t=t.v),t,void 0,n)===e?e:-1}function Zm(t){if(tl)return t[Kl]??(t[Kl]=new Map);if(Kl in t)return t[Kl];const e=new Map;return Object.defineProperty(t,Kl,{value:e}),e}function vy(t,e,n,r,o){const l=Zm(t),u=Qm(l,t,e,n,o);return u!==r&&(u&&(e=Tn(t,e,u,void 0,o)),l.set(n,r)),e}function Qm(t,e,n,r,o){let l=t.get(r);if(l!=null)return l;l=0;for(let u=0;u<r.length;u++){const f=r[u];ss(e,f,o)!=null&&(l!==0&&(n=Tn(e,n,l,void 0,o)),l=f)}return t.set(r,l),l}function Jm(t,e,n){let r=0|t[qe];const o=nl(r),l=ss(t,n,o);let u;if(l!=null&&l[Wa]===Xa){if(!Di(l))return sl(l),l.v;u=l.v}else Array.isArray(l)&&(u=l);if(u){const f=0|u[qe];2&f&&(u=rl(u,f))}return u=Ao(u,e),u!==l&&Tn(t,r,n,u,o),u}function yy(t,e,n,r,o){let l=!1;if((r=ss(t,r,o,(u=>{const f=Xm(u,n,!1,e);return l=f!==u&&f!=null,f})))!=null)return l&&!Di(r)&&Oo(t,e),r}function Dt(t,e,n,r){let o=t.v,l=0|o[qe];if((e=yy(o,l,e,n,r))==null)return e;if(l=0|o[qe],!Di(t,l)){const u=Ym(e);u!==e&&(sl(t)&&(o=t.v,l=0|o[qe]),l=Tn(o,l,n,e=u,r),Oo(o,l))}return e}function xy(t,e,n,r,o,l,u,f){var d=Di(t,n);l=d?1:l,u=!!u||l===3,d=f&&!d,(l===2||d)&&sl(t)&&(n=0|(e=t.v)[qe]);var p=(t=$m(e,o))===Fo?7:0|t[qe],g=Km(p,n);if(f=!(4&g)){var _=t,v=n;const S=!!(2&g);S&&(v|=2);let M=!S,R=!0,x=0,y=0;for(;x<_.length;x++){const U=Xm(_[x],r,!1,v);if(U instanceof r){if(!S){const D=Di(U);M&&(M=!D),R&&(R=D)}_[y++]=U}}y<x&&(_.length=y),g|=4,g=R?-4097&g:4096|g,g=M?8|g:-9&g}if(g!==p&&(Cn(t,g),2&g&&Object.freeze(t)),d&&!(8&g||!t.length&&(l===1||l===4&&(2&g||!(16&g)&&32&n)))){for(Ro(g)&&(t=cr(t),g=Co(g,n),n=Tn(e,n,o,t)),r=t,d=g,p=0;p<r.length;p++)(_=r[p])!==(g=Ym(_))&&(r[p]=g);d|=8,Cn(t,g=d=r.length?4096|d:-4097&d)}return my(t,g,e,n,o,l,f,u)}function os(t,e,n){const r=t.v;return xy(t,r,0|r[qe],e,n,Mo(),!1,!0)}function Sy(t){return t==null&&(t=void 0),t}function rt(t,e,n,r,o){return Bt(t,n,r=Sy(r),o),r&&!Di(r)&&Oo(t.v),t}function eu(t,e,n,r){e:{var o=r=Sy(r);ol(t);const l=t.v;let u=0|l[qe];if(o==null){const f=Zm(l);if(Qm(f,l,u,n)!==e)break e;f.set(n,0)}else u=vy(l,u,n,e);Tn(l,u,e,o)}r&&!Di(r)&&Oo(t.v)}function Co(t,e){return-273&(2&e?2|t:-3&t)}function e0(t,e,n,r){var o=r;ol(t),t=xy(t,r=t.v,0|r[qe],n,e,2,!0),o=o??new n,t.push(o),e=n=t===Fo?7:0|t[qe],(o=Di(o))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Cn(t,n),o||Oo(r)}function $i(t,e,n){return il(nn(t,e,void 0,n))}function dn(t,e){return nn(t,e,void 0,void 0,Tr)??0}function as(t,e,n){if(n!=null){if(typeof n!="number"||!If(n))throw dm("int32");n|=0}Bt(t,e,n)}function Je(t,e,n){Bt(t,e,Jl(n))}function Ii(t,e,n){Bs(t,e,vu(n),"")}function xf(t,e,n){{ol(t);const u=t.v;let f=0|u[qe];if(n==null)Tn(u,f,e);else{var r=t=n===Fo?7:0|n[qe],o=Ro(t),l=o||Object.isFrozen(n);for(o||(t=0),l||(n=cr(n),r=0,t=Co(t,f),l=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,o=0;o<n.length;o++){const d=n[o],p=fy(d);Object.is(d,p)||(l&&(n=cr(n),r=0,t=Co(t,f),l=!1),n[o]=p)}t!==r&&(l&&(n=cr(n),t=Co(t,f)),Cn(n,t)),Tn(u,f,e,n)}}}function Ff(t,e,n){ol(t),To(t,e,zn,2,!0).push(fy(n))}var Ma=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function t0(t,e){if(typeof t=="string")return new Ma(K2(t),e);if(Array.isArray(t))return new Ma(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Ma(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Ma(t,!1);if(t.constructor===wr)return e=Bm(t)||new Uint8Array(0),new Ma(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Ma(t,!1);throw Error()}function n0(t,e){let n,r=0,o=0,l=0;const u=t.h;let f=t.g;do n=u[f++],r|=(127&n)<<l,l+=7;while(l<32&&128&n);if(l>32)for(o|=(127&n)>>4,l=3;l<32&&128&n;l+=7)n=u[f++],o|=(127&n)<<l;if(bo(t,f),!(128&n))return e(r>>>0,o>>>0);throw Error()}function i0(t){let e=0,n=t.g;const r=n+10,o=t.h;for(;n<r;){const l=o[n++];if(e|=l,(128&l)==0)return bo(t,n),!!(127&e)}throw Error()}function js(t){const e=t.h;let n=t.g,r=e[n++],o=127&r;if(128&r&&(r=e[n++],o|=(127&r)<<7,128&r&&(r=e[n++],o|=(127&r)<<14,128&r&&(r=e[n++],o|=(127&r)<<21,128&r&&(r=e[n++],o|=r<<28,128&r&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return bo(t,n),o}function Ar(t){return js(t)>>>0}function Sf(t){var e=t.h;const n=t.g;var r=e[n],o=e[n+1];const l=e[n+2];return e=e[n+3],bo(t,t.g+4),t=2*((o=(r<<0|o<<8|l<<16|e<<24)>>>0)>>31)+1,r=o>>>23&255,o&=8388607,r==255?o?NaN:t*(1/0):r==0?1401298464324817e-60*t*o:t*Math.pow(2,r-150)*(o+8388608)}function PR(t){return js(t)}function bo(t,e){if(t.g=e,e>t.l)throw Error()}function Ey(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function My(t,e){if(e==0)return Io();var n=Ey(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):fR?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Io():new wr(n,Ha)}var Mv=[];function Ty(t,e,n,r){if(Ef.length){const o=Ef.pop();return o.o(r),o.g.init(t,e,n,r),o}return new LR(t,e,n,r)}function wy(t){t.g.clear(),t.l=-1,t.h=-1,Ef.length<100&&Ef.push(t)}function Ay(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=Ar(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function hf(t){switch(t.h){case 0:t.h!=0?hf(t):i0(t.g);break;case 1:bo(t=t.g,t.g+8);break;case 2:if(t.h!=2)hf(t);else{var e=Ar(t.g);bo(t=t.g,t.g+e)}break;case 5:bo(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Ay(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}hf(t)}break;default:throw Error()}}function yu(t,e,n){const r=t.g.l;var o=Ar(t.g);let l=(o=t.g.g+o)-r;if(l<=0&&(t.g.l=o,n(e,t,void 0,void 0,void 0),l=o-t.g.g),l)throw Error();return t.g.g=o,t.g.l=r,e}function r0(t){var e=Ar(t.g),n=Ey(t=t.g,e);if(t=t.h,WA){var r,o=t;(r=cp)||(r=cp=new TextDecoder("utf-8",{fatal:!0})),e=n+e,o=n===0&&e===o.length?o:o.subarray(n,e);try{var l=r.decode(o)}catch(f){if(ef===void 0){try{r.decode(new Uint8Array([128]))}catch{}try{r.decode(new Uint8Array([97])),ef=!0}catch{ef=!1}}throw!ef&&(cp=void 0),f}}else{e=(l=n)+e,n=[];let f,d=null;for(;l<e;){var u=t[l++];u<128?n.push(u):u<224?l>=e?go():(f=t[l++],u<194||(192&f)!=128?(l--,go()):n.push((31&u)<<6|63&f)):u<240?l>=e-1?go():(f=t[l++],(192&f)!=128||u===224&&f<160||u===237&&f>=160||(192&(r=t[l++]))!=128?(l--,go()):n.push((15&u)<<12|(63&f)<<6|63&r)):u<=244?l>=e-2?go():(f=t[l++],(192&f)!=128||f-144+(u<<28)>>30!=0||(192&(r=t[l++]))!=128||(192&(o=t[l++]))!=128?(l--,go()):(u=(7&u)<<18|(63&f)<<12|(63&r)<<6|63&o,u-=65536,n.push(55296+(u>>10&1023),56320+(1023&u)))):go(),n.length>=8192&&(d=ov(d,n),n.length=0)}l=ov(d,n)}return l}function Ry(t){const e=Ar(t.g);return My(t.g,e)}function Of(t,e,n){var r=Ar(t.g);for(r=t.g.g+r;t.g.g<r;)n.push(e(t.g))}var LR=class{constructor(t,e,n,r){if(Mv.length){const o=Mv.pop();o.init(t,e,n,r),t=o}else t=new class{constructor(o,l,u,f){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(o,l,u,f)}init(o,l,u,{Y:f=!1,ea:d=!1}={}){this.Y=f,this.ea=d,o&&(o=t0(o,this.ea),this.h=o.buffer,this.j=o.g,this.m=l||0,this.l=u!==void 0?this.m+u:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,r);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(r)}o({ha:t=!1}={}){this.ha=t}},Ef=[];function Tv(t){return t?/^\d+$/.test(t)?(Df(t),new gm(tn,_n)):null:DR||(DR=new gm(0,0))}var gm=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let DR;function wv(t){return t?/^-?\d+$/.test(t)?(Df(t),new _m(tn,_n)):null:IR||(IR=new _m(0,0))}var _m=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let IR;function Da(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function ll(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function kf(t,e){if(e>=0)ll(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function s0(t){var e=tn;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function qa(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Ki(t,e,n){ll(t.g,8*e+n)}function o0(t,e){return Ki(t,e,2),e=t.g.end(),qa(t,e),e.push(t.h),e}function a0(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Bf(t,e,n){Ki(t,e,2),ll(t.g,n.length),qa(t,t.g.end()),qa(t,n)}function Mf(t,e,n,r){n!=null&&(e=o0(t,e),r(n,t),a0(t,e))}function Cr(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var l0=Cr(),Cy=Cr(),u0=Cr(),c0=Cr(),f0=Cr(),by=Cr(),NR=Cr(),zf=Cr(),Py=Cr(),Ly=Cr();function br(t,e,n){var r=t.v;Pi&&Pi in r&&(r=r[Pi])&&delete r[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var $e=class{constructor(t,e){this.v=hy(t,e,void 0,2048)}toJSON(){return dy(this)}j(){var o;var t=mC,e=this.v,n=t.g,r=Pi;if(tl&&r&&((o=e[r])==null?void 0:o[n])!=null&&Ga(tR,3),e=t.g,dv&&Pi&&dv===void 0&&(r=(n=this.v)[Pi])&&(r=r.da))try{r(n,e,TR)}catch(l){j2(l)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[qe];return qm(this,t,e)?jm(this,t,!0):new this.constructor(rl(t,e,!1))}};$e.prototype[Wa]=Xa,$e.prototype.toString=function(){return this.v.toString()};var ul=class{constructor(t,e,n){this.g=t,this.h=e,t=l0,this.l=!!t&&n===t||!1}};function Vf(t,e){return new ul(t,e,l0)}function Dy(t,e,n,r,o){Mf(t,n,Fy(e,r),o)}const UR=Vf((function(t,e,n,r,o){return t.h===2&&(yu(t,Jm(e,r,n),o),!0)}),Dy),FR=Vf((function(t,e,n,r,o){return t.h===2&&(yu(t,Jm(e,r,n),o),!0)}),Dy);var Hf=Symbol(),Gf=Symbol(),vm=Symbol(),Av=Symbol(),Rv=Symbol();let Iy,Ny;function ko(t,e,n,r){var o=r[t];if(o)return o;(o={}).qa=r,o.T=(function(_){switch(typeof _){case"boolean":return RR||(RR=[0,void 0,!0]);case"number":return _>0?void 0:_===0?CR||(CR=[0,void 0]):[-_,void 0];case"string":return[0,_];case"object":return _}})(r[0]);var l=r[1];let u=1;l&&l.constructor===Object&&(o.ba=l,typeof(l=r[++u])=="function"&&(o.ma=!0,Iy??(Iy=l),Ny??(Ny=r[u+1]),l=r[u+=2]));const f={};for(;l&&Array.isArray(l)&&l.length&&typeof l[0]=="number"&&l[0]>0;){for(var d=0;d<l.length;d++)f[l[d]]=l;l=r[++u]}for(d=1;l!==void 0;){let _;typeof l=="number"&&(d+=l,l=r[++u]);var p=void 0;if(l instanceof ul?_=l:(_=UR,u--),_==null?void 0:_.l){l=r[++u],p=r;var g=u;typeof l=="function"&&(l=l(),p[g]=l),p=l}for(g=d+1,typeof(l=r[++u])=="number"&&l<0&&(g-=l,l=r[++u]);d<g;d++){const v=f[d];p?n(o,d,_,p,v):e(o,d,_,v)}}return r[t]=o}function Uy(t){return Array.isArray(t)?t[0]instanceof ul?t:[FR,t]:[t,void 0]}function Fy(t,e){return t instanceof $e?t.v:Array.isArray(t)?Ao(t,e):void 0}function d0(t,e,n,r){const o=n.g;t[e]=r?(l,u,f)=>o(l,u,f,r):o}function h0(t,e,n,r,o){const l=n.g;let u,f;t[e]=(d,p,g)=>l(d,p,g,f||(f=ko(Gf,d0,h0,r).T),u||(u=p0(r)),o)}function p0(t){let e=t[vm];if(e!=null)return e;const n=ko(Gf,d0,h0,t);return e=n.ma?(r,o)=>Iy(r,o,n):(r,o)=>{for(;Ay(o)&&o.h!=4;){var l=o.l,u=n[l];if(u==null){var f=n.ba;f&&(f=f[l])&&(f=kR(f))!=null&&(u=n[l]=f)}if(u==null||!u(o,r,l)){if(u=(f=o).m,hf(f),f.ha)var d=void 0;else d=f.g.g-u,f.g.g=u,d=My(f.g,d);u=void 0,f=r,d&&((u=f[Pi]??(f[Pi]=new mm))[l]??(u[l]=[])).push(d)}}return(r=Nf(r))&&(r.da=n.qa[Rv]),!0},t[vm]=e,t[Rv]=OR.bind(t),e}function OR(t,e,n,r){var o=this[Gf];const l=this[vm],u=Ao(void 0,o.T),f=Nf(t);if(f){var d=!1,p=o.ba;if(p){if(o=(g,_,v)=>{if(v.length!==0)if(p[_])for(const S of v){g=Ty(S);try{d=!0,l(u,g)}finally{wy(g)}}else r==null||r(t,_,v)},e==null)yf(f,o);else if(f!=null){const g=f[e];g&&o(f,e,g)}if(d){let g=0|t[qe];if(2&g&&2048&g&&!(n!=null&&n.Ka))throw Error();const _=nl(g),v=(S,M)=>{if(ss(t,S,_)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}M!=null&&(g=Tn(t,g,S,M,_)),delete f[S]};e==null?ty(u,0|u[qe],((S,M)=>{v(S,M)})):v(e,ss(u,e,_))}}}}function kR(t){const e=(t=Uy(t))[0].g;if(t=t[1]){const n=p0(t),r=ko(Gf,d0,h0,t).T;return(o,l,u)=>e(o,l,u,r,n)}return e}function Wf(t,e,n){t[e]=n.h}function Xf(t,e,n,r){let o,l;const u=n.h;t[e]=(f,d,p)=>u(f,d,p,l||(l=ko(Hf,Wf,Xf,r).T),o||(o=Oy(r)))}function Oy(t){let e=t[Av];if(!e){const n=ko(Hf,Wf,Xf,t);e=(r,o)=>ky(r,o,n),t[Av]=e}return e}function ky(t,e,n){ty(t,0|t[qe],((r,o)=>{if(o!=null){var l=(function(u,f){var d=u[f];if(d)return d;if((d=u.ba)&&(d=d[f])){var p=(d=Uy(d))[0].h;if(d=d[1]){const g=Oy(d),_=ko(Hf,Wf,Xf,d).T;d=u.ma?Ny(_,g):(v,S,M)=>p(v,S,M,_,g)}else d=p;return u[f]=d}})(n,r);l?l(e,o,r):r<500||Ga(hm,3)}})),(t=Nf(t))&&yf(t,((r,o,l)=>{for(qa(e,e.g.end()),r=0;r<l.length;r++)qa(e,Bm(l[r])||new Uint8Array(0))}))}const BR=Li(0);function cl(t,e){if(Array.isArray(e)){var n=0|e[qe];if(4&n)return e;for(var r=0,o=0;r<e.length;r++){const l=t(e[r]);l!=null&&(e[o++]=l)}return o<r&&(e.length=o),(t=-1537&(5|n))!==n&&Cn(e,t),2&t&&Object.freeze(e),e}}function Zn(t,e,n){return new ul(t,e,n)}function fl(t,e,n){return new ul(t,e,n)}function Qn(t,e,n){Tn(t,0|t[qe],e,n,nl(0|t[qe]))}var zR=Vf((function(t,e,n,r,o){if(t.h!==2)return!1;if(t=cr(t=yu(t,Ao([void 0,void 0],r),o)),o=nl(r=0|e[qe]),2&r)throw Error();let l=ss(e,n,o);if(l instanceof rs)(2&l.J)!=0?(l=l.V(),l.push(t),Tn(e,r,n,l,o)):l.Ma(t);else if(Array.isArray(l)){var u=0|l[qe];8192&u||Cn(l,u|=8192),2&u&&(l=_y(l),Tn(e,r,n,l,o)),l.push(t)}else Tn(e,r,n,ru([t]),o);return!0}),(function(t,e,n,r,o){if(e instanceof rs)e.forEach(((l,u)=>{Mf(t,n,Ao([u,l],r),o)}));else if(Array.isArray(e)){for(let l=0;l<e.length;l++){const u=e[l];Array.isArray(u)&&Mf(t,n,Ao(u,r),o)}ru(e)}}));function By(t,e,n){(e=Tr(e))!=null&&(Ki(t,n,5),t=t.g,Vm(e),s0(t))}function zy(t,e,n){if(e=(function(r){if(r==null)return r;const o=typeof r;if(o==="bigint")return String(gu(64,r));if(_u(r)){if(o==="string")return ly(r);if(o==="number")return Wm(r)}})(e),e!=null&&(typeof e=="string"&&wv(e),e!=null))switch(Ki(t,n,0),typeof e){case"number":t=t.g,ja(e),Da(t,tn,_n);break;case"bigint":n=BigInt.asUintN(64,e),n=new _m(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Da(t.g,n.h,n.g);break;default:n=wv(e),Da(t.g,n.h,n.g)}}function Vy(t,e,n){(e=il(e))!=null&&e!=null&&(Ki(t,n,0),kf(t.g,e))}function Hy(t,e,n){(e=sy(e))!=null&&(Ki(t,n,0),t.g.g.push(e?1:0))}function Gy(t,e,n){(e=zn(e))!=null&&Bf(t,n,X2(e))}function Wy(t,e,n,r,o){Mf(t,n,Fy(e,r),o)}function Xy(t,e,n){(e=e==null||typeof e=="string"||e instanceof wr?e:void 0)!=null&&Bf(t,n,t0(e,!0).buffer)}function jy(t,e,n){(e=oy(e))!=null&&e!=null&&(Ki(t,n,0),ll(t.g,e))}function Yy(t,e,n){return(t.h===5||t.h===2)&&(e=al(e,0|e[qe],n),t.h==2?Of(t,Sf,e):e.push(Sf(t.g)),!0)}var vn=Zn((function(t,e,n){return t.h===5&&(Qn(e,n,Sf(t.g)),!0)}),By,zf),VR=fl(Yy,(function(t,e,n){if((e=cl(Tr,e))!=null)for(let u=0;u<e.length;u++){var r=t,o=n,l=e[u];l!=null&&(Ki(r,o,5),r=r.g,Vm(l),s0(r))}}),zf),m0=fl(Yy,(function(t,e,n){if((e=cl(Tr,e))!=null&&e.length){Ki(t,n,2),ll(t.g,4*e.length);for(let r=0;r<e.length;r++)n=t.g,Vm(e[r]),s0(n)}}),zf),HR=Zn((function(t,e,n){return t.h===5&&(Qn(e,n,(t=Sf(t.g))===0?void 0:t),!0)}),By,zf),Ys=Zn((function(t,e,n){return t.h!==0?t=!1:(Qn(e,n,n0(t.g,ry)),t=!0),t}),zy,by),pp=Zn((function(t,e,n){return t.h!==0?e=!1:(Qn(e,n,(t=n0(t.g,ry))===BR?void 0:t),e=!0),e}),zy,by),GR=Zn((function(t,e,n){return t.h!==0?t=!1:(Qn(e,n,n0(t.g,hR)),t=!0),t}),(function(t,e,n){if(e=(function(r){if(r==null)return r;var o=typeof r;if(o==="bigint")return String(pR(64,r));if(_u(r)){if(o==="string")return o=Ya(Number(r)),Uo(o)&&o>=0?r=String(o):((o=r.indexOf("."))!==-1&&(r=r.substring(0,o)),(o=r[0]!=="-"&&((o=r.length)<20||o===20&&r<="18446744073709551615"))||(Df(r),r=su(tn,_n))),r;if(o==="number")return(r=Ya(r))>=0&&Uo(r)||(ja(r),r=iy(tn,_n)),r}})(e),e!=null&&(typeof e=="string"&&Tv(e),e!=null))switch(Ki(t,n,0),typeof e){case"number":t=t.g,ja(e),Da(t,tn,_n);break;case"bigint":n=BigInt.asUintN(64,e),n=new gm(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Da(t.g,n.h,n.g);break;default:n=Tv(e),Da(t.g,n.h,n.g)}}),NR),Mn=Zn((function(t,e,n){return t.h===0&&(Qn(e,n,js(t.g)),!0)}),Vy,c0),xu=fl((function(t,e,n){return(t.h===0||t.h===2)&&(e=al(e,0|e[qe],n),t.h==2?Of(t,js,e):e.push(js(t.g)),!0)}),(function(t,e,n){if((e=cl(il,e))!=null&&e.length){n=o0(t,n);for(let r=0;r<e.length;r++)kf(t.g,e[r]);a0(t,n)}}),c0),Ca=Zn((function(t,e,n){return t.h===0&&(Qn(e,n,(t=js(t.g))===0?void 0:t),!0)}),Vy,c0),rn=Zn((function(t,e,n){return t.h===0&&(Qn(e,n,i0(t.g)),!0)}),Hy,Cy),Po=Zn((function(t,e,n){return t.h===0&&(Qn(e,n,(t=i0(t.g))===!1?void 0:t),!0)}),Hy,Cy),$n=fl((function(t,e,n){return t.h===2&&(t=r0(t),al(e,0|e[qe],n).push(t),!0)}),(function(t,e,n){if((e=cl(zn,e))!=null)for(let u=0;u<e.length;u++){var r=t,o=n,l=e[u];l!=null&&Bf(r,o,X2(l))}}),u0),Vs=Zn((function(t,e,n){return t.h===2&&(Qn(e,n,(t=r0(t))===""?void 0:t),!0)}),Gy,u0),Vt=Zn((function(t,e,n){return t.h===2&&(Qn(e,n,r0(t)),!0)}),Gy,u0),Fn=(function(t,e,n=l0){return new ul(t,e,n)})((function(t,e,n,r,o){return t.h===2&&(r=Ao(void 0,r),al(e,0|e[qe],n).push(r),yu(t,r,o),!0)}),(function(t,e,n,r,o){if(Array.isArray(e)){for(let l=0;l<e.length;l++)Wy(t,e[l],n,r,o);1&(t=0|e[qe])||Cn(e,1|t)}})),Zt=Vf((function(t,e,n,r,o,l){if(t.h!==2)return!1;let u=0|e[qe];return vy(e,u,l,n,nl(u)),yu(t,e=Jm(e,r,n),o),!0}),Wy),qy=Zn((function(t,e,n){return t.h===2&&(Qn(e,n,Ry(t)),!0)}),Xy,Py),WR=fl((function(t,e,n){return(t.h===0||t.h===2)&&(e=al(e,0|e[qe],n),t.h==2?Of(t,Ar,e):e.push(Ar(t.g)),!0)}),(function(t,e,n){if((e=cl(oy,e))!=null)for(let u=0;u<e.length;u++){var r=t,o=n,l=e[u];l!=null&&(Ki(r,o,0),ll(r.g,l))}}),f0),XR=Zn((function(t,e,n){return t.h===0&&(Qn(e,n,(t=Ar(t.g))===0?void 0:t),!0)}),jy,f0),Kn=Zn((function(t,e,n){return t.h===0&&(Qn(e,n,js(t.g)),!0)}),(function(t,e,n){(e=il(e))!=null&&(e=parseInt(e,10),Ki(t,n,0),kf(t.g,e))}),Ly);class jR{constructor(e,n){var r=Ui;this.g=e,this.h=n,this.m=Dt,this.j=rt,this.defaultValue=void 0,this.l=r.Oa!=null?ny:void 0}register(){bf(this)}}function Pr(t,e){return new jR(t,e)}function qs(t,e){return(n,r)=>{{const l={ea:!0};r&&Object.assign(l,r),n=Ty(n,void 0,void 0,l);try{const u=new t,f=u.v;p0(e)(f,n);var o=u}finally{wy(n)}}return o}}function jf(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const u=this.g;return this.g=[],u}}}};ky(this.v,e,ko(Hf,Wf,Xf,t)),qa(e,e.g.end());const n=new Uint8Array(e.h),r=e.l,o=r.length;let l=0;for(let u=0;u<o;u++){const f=r[u];n.set(f,l),l+=f.length}return e.l=[n],n}}var Cv=class extends $e{constructor(t){super(t)}},bv=[0,Vs,Zn((function(t,e,n){return t.h===2&&(Qn(e,n,(t=Ry(t))===Io()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof $e){const r=e.Ra;return void(r?(e=r(e),e!=null&&Bf(t,n,t0(e,!0).buffer)):Ga(hm,3))}if(Array.isArray(e))return void Ga(hm,3)}Xy(t,e,n)}),Py)];let mp,Pv=globalThis.trustedTypes;function Lv(t){var e;return mp===void 0&&(mp=(function(){let n=null;if(!Pv)return n;try{const r=o=>o;n=Pv.createPolicy("goog#html",{createHTML:r,createScript:r,createScriptURL:r})}catch{}return n})()),t=(e=mp)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function tf(t,...e){if(e.length===0)return Lv(t[0]);let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return Lv(n)}var $y=[0,Mn,Kn,rn,-1,xu,Kn,-1,rn],YR=class extends $e{constructor(t){super(t)}},Ky=[0,rn,Vt,rn,Kn,-1,fl((function(t,e,n){return(t.h===0||t.h===2)&&(e=al(e,0|e[qe],n),t.h==2?Of(t,PR,e):e.push(js(t.g)),!0)}),(function(t,e,n){if((e=cl(il,e))!=null&&e.length){n=o0(t,n);for(let r=0;r<e.length;r++)kf(t.g,e[r]);a0(t,n)}}),Ly),Vt,-1,[0,rn,-1],Kn,rn,-1],Zy=[0,3,rn,-1,2,[0,[2],Mn,Zt,[0,Zn((function(t,e,n){return t.h===0&&(Qn(e,n,Ar(t.g)),!0)}),jy,f0)]],[0,Kn,rn,Kn,rn,Kn,rn,Vt,-1],[0,[3,4],Vt,-1,Zt,[0,Mn],Zt,[0,Kn]],[0]],Qy=[0,Vt,-2],Dv=class extends $e{constructor(t){super(t)}},Jy=[0],ex=[0,Mn,rn,1,rn,-4],Ui=class extends $e{constructor(t){super(t,2)}},wn={};wn[336783863]=[0,Vt,rn,-1,Mn,[0,[1,2,3,4,5,6,7,8,9],Zt,Jy,Zt,Ky,Zt,Qy,Zt,ex,Zt,$y,Zt,[0,Vt,-2],Zt,[0,Vt,Kn],Zt,Zy,Zt,[0,Kn,-1,rn]],[0,Vt],rn,[0,[1,3],[2,4],Zt,[0,xu],-1,Zt,[0,$n],-1,Fn,[0,Vt,-1]],Vt];var Iv=[0,pp,-1,Po,-3,pp,xu,Vs,Ca,pp,-1,Po,Ca,Po,-2,Vs];function Qt(t,e){Ff(t,3,e)}function wt(t,e){Ff(t,4,e)}var yi=class extends $e{constructor(t){super(t,500)}o(t){return rt(this,0,7,t)}},tu=[-1,{}],Nv=[0,Vt,1,tu],Uv=[0,Vt,$n,tu];function Zi(t,e){e0(t,1,yi,e)}function sn(t,e){Ff(t,10,e)}function It(t,e){Ff(t,15,e)}var Fi=class extends $e{constructor(t){super(t,500)}o(t){return rt(this,0,1001,t)}},tx=[-500,Fn,[-500,Vs,-1,$n,-3,[-2,wn,rn],Fn,bv,Ca,-1,Nv,Uv,Fn,[0,Vs,Po],Vs,Iv,Ca,$n,987,$n],4,Fn,[-500,Vt,-1,[-1,{}],998,Vt],Fn,[-500,Vt,$n,-1,[-2,{},rn],997,$n,-1],Ca,Fn,[-500,Vt,$n,tu,998,$n],$n,Ca,Nv,Uv,Fn,[0,Vs,-1,tu],$n,-2,Iv,Vs,-1,Po,[0,Po,XR],978,tu,Fn,bv];Fi.prototype.g=jf(tx);var qR=qs(Fi,tx),$R=class extends $e{constructor(t){super(t)}},nx=class extends $e{constructor(t){super(t)}g(){return os(this,$R,1)}},ix=[0,Fn,[0,Mn,vn,Vt,-1]],Yf=qs(nx,ix),KR=class extends $e{constructor(t){super(t)}},ZR=class extends $e{constructor(t){super(t)}},gp=class extends $e{constructor(t){super(t)}l(){return Dt(this,KR,2)}g(){return os(this,ZR,5)}},rx=qs(class extends $e{constructor(t){super(t)}},[0,$n,xu,m0,[0,Kn,[0,Mn,-3],[0,vn,-3],[0,Mn,-1,[0,Fn,[0,Mn,-2]]],Fn,[0,vn,-1,Vt,vn]],Vt,-1,Ys,Fn,[0,Mn,vn],$n,Ys]),sx=class extends $e{constructor(t){super(t)}},Ia=qs(class extends $e{constructor(t){super(t)}},[0,Fn,[0,vn,-4]]),ox=class extends $e{constructor(t){super(t)}},Su=qs(class extends $e{constructor(t){super(t)}},[0,Fn,[0,vn,-4]]),QR=class extends $e{constructor(t){super(t)}},JR=[0,Mn,-1,m0,Kn],ax=class extends $e{constructor(t){super(t)}};ax.prototype.g=jf([0,vn,-4,Ys]);var eC=class extends $e{constructor(t){super(t)}},tC=qs(class extends $e{constructor(t){super(t)}},[0,Fn,[0,1,Mn,Vt,ix],Ys]),Fv=class extends $e{constructor(t){super(t)}},nC=class extends $e{constructor(t){super(t)}na(){const t=nn(this,1,void 0,void 0,gy);return t??Io()}},iC=class extends $e{constructor(t){super(t)}},lx=[1,2],rC=qs(class extends $e{constructor(t){super(t)}},[0,Fn,[0,lx,Zt,[0,m0],Zt,[0,qy],Mn,Vt],Ys]),g0=class extends $e{constructor(t){super(t)}},ux=[0,Vt,Mn,vn,$n,-1],Ov=class extends $e{constructor(t){super(t)}},sC=[0,rn,-1],kv=class extends $e{constructor(t){super(t)}},pf=[1,2,3,4,5,6],Tf=class extends $e{constructor(t){super(t)}g(){return nn(this,1,void 0,void 0,gy)!=null}l(){return zn(nn(this,2))!=null}},cn=class extends $e{constructor(t){super(t)}g(){return sy(nn(this,2))??!1}},cx=[0,qy,Vt,[0,Mn,Ys,-1],[0,GR,Ys]],yn=[0,cx,rn,[0,pf,Zt,ex,Zt,Ky,Zt,$y,Zt,Jy,Zt,Qy,Zt,Zy],Kn],qf=class extends $e{constructor(t){super(t)}},_0=[0,yn,vn,-1,Mn],oC=Pr(502141897,qf);wn[502141897]=_0;var aC=qs(class extends $e{constructor(t){super(t)}},[0,[0,Kn,-1,VR,WR],JR]),fx=class extends $e{constructor(t){super(t)}},dx=class extends $e{constructor(t){super(t)}},ym=[0,yn,vn,[0,yn],rn],lC=Pr(508968150,dx);wn[508968150]=[0,yn,_0,ym,vn,[0,[0,cx]]],wn[508968149]=ym;var Ta=class extends $e{constructor(t){super(t)}l(){return Dt(this,g0,2)}g(){Bt(this,2)}},hx=[0,yn,ux];wn[478825465]=hx;var uC=class extends $e{constructor(t){super(t)}},px=class extends $e{constructor(t){super(t)}},v0=class extends $e{constructor(t){super(t)}},y0=class extends $e{constructor(t){super(t)}},mx=class extends $e{constructor(t){super(t)}},Bv=[0,yn,[0,yn],hx,-1],gx=[0,yn,vn,Mn],x0=[0,yn,vn],_x=[0,yn,gx,x0,vn],cC=Pr(479097054,mx);wn[479097054]=[0,yn,_x,Bv],wn[463370452]=Bv,wn[464864288]=gx;var fC=Pr(462713202,y0);wn[462713202]=_x,wn[474472470]=x0;var dC=class extends $e{constructor(t){super(t)}},vx=class extends $e{constructor(t){super(t)}},yx=class extends $e{constructor(t){super(t)}},xx=class extends $e{constructor(t){super(t)}},S0=[0,yn,vn,-1,Mn],xm=[0,yn,vn,rn];xx.prototype.g=jf([0,yn,x0,[0,yn],_0,ym,S0,xm]);var Sx=class extends $e{constructor(t){super(t)}},hC=Pr(456383383,Sx);wn[456383383]=[0,yn,ux];var Ex=class extends $e{constructor(t){super(t)}},pC=Pr(476348187,Ex);wn[476348187]=[0,yn,sC];var Mx=class extends $e{constructor(t){super(t)}},zv=class extends $e{constructor(t){super(t)}},Tx=[0,Kn,-1],mC=Pr(458105876,class extends $e{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[qe];return t=Di(this,n),e=(function(r,o,l,u){var f=zv;!u&&sl(r)&&(l=0|(o=r.v)[qe]);var d=ss(o,2);if(r=!1,d==null){if(u)return xv();d=[]}else if(d.constructor===rs){if(!(2&d.J)||u)return d;d=d.V()}else Array.isArray(d)?r=!!(2&(0|d[qe])):d=[];if(u){if(!d.length)return xv();r||(r=!0,mu(d))}else r&&(r=!1,ru(d),d=_y(d));return!r&&32&l&&pu(d,32),l=Tn(o,l,2,u=new rs(d,f,_R,void 0)),r||Oo(o,l),u})(this,e,n,t),!t&&zv&&(e.ra=!0),e}});wn[458105876]=[0,Tx,zR,[!0,Ys,[0,Vt,-1,$n]],[0,xu,rn,Kn]];var E0=class extends $e{constructor(t){super(t)}},wx=Pr(458105758,E0);wn[458105758]=[0,yn,Vt,Tx];var _p=class extends $e{constructor(t){super(t)}},Vv=[0,HR,-1,Po],gC=class extends $e{constructor(t){super(t)}},Ax=class extends $e{constructor(t){super(t)}},Sm=[1,2];Ax.prototype.g=jf([0,Sm,Zt,Vv,Zt,[0,Fn,Vv]]);var Rx=class extends $e{constructor(t){super(t)}},_C=Pr(443442058,Rx);wn[443442058]=[0,yn,Vt,Mn,vn,$n,-1,rn,vn],wn[514774813]=S0;var Cx=class extends $e{constructor(t){super(t)}},vC=Pr(516587230,Cx);function Em(t,e){return e=e?e.clone():new g0,t.displayNamesLocale!==void 0?Bt(e,1,vu(t.displayNamesLocale)):t.displayNamesLocale===void 0&&Bt(e,1),t.maxResults!==void 0?as(e,2,t.maxResults):"maxResults"in t&&Bt(e,2),t.scoreThreshold!==void 0?Je(e,3,t.scoreThreshold):"scoreThreshold"in t&&Bt(e,3),t.categoryAllowlist!==void 0?xf(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&Bt(e,4),t.categoryDenylist!==void 0?xf(e,5,t.categoryDenylist):"categoryDenylist"in t&&Bt(e,5),e}function bx(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function M0(t,e=-1,n=""){return{categories:t.map((r=>({index:$i(r,1)??0??-1,score:dn(r,2)??0,categoryName:zn(nn(r,3))??""??"",displayName:zn(nn(r,4))??""??""}))),headIndex:e,headName:n}}function yC(t){const e={classifications:os(t,eC,1).map((n=>{var r;return M0(((r=Dt(n,nx,4))==null?void 0:r.g())??[],$i(n,2)??0,zn(nn(n,3))??"")}))};return(function(n){return n==null?n:typeof n=="bigint"?(pm(n)?n=Number(n):(n=gu(64,n),n=pm(n)?Number(n):String(n)),n):_u(n)?typeof n=="number"?Wm(n):ly(n):void 0})(nn(t,2,void 0,void 0,vf))!=null&&(e.timestampMs=bx(nn(t,2,void 0,void 0,vf)??py)),e}function Px(t){var u,f;var e=To(t,3,Tr,Mo()),n=To(t,2,il,Mo()),r=To(t,1,zn,Mo()),o=To(t,9,zn,Mo());const l={categories:[],keypoints:[]};for(let d=0;d<e.length;d++)l.categories.push({score:e[d],index:n[d]??-1,categoryName:r[d]??"",displayName:o[d]??""});if((e=(u=Dt(t,gp,4))==null?void 0:u.l())&&(l.boundingBox={originX:$i(e,1,Os)??0,originY:$i(e,2,Os)??0,width:$i(e,3,Os)??0,height:$i(e,4,Os)??0,angle:0}),(f=Dt(t,gp,4))==null?void 0:f.g().length)for(const d of Dt(t,gp,4).g())l.keypoints.push({x:nn(d,1,void 0,Os,Tr)??0,y:nn(d,2,void 0,Os,Tr)??0,score:nn(d,4,void 0,Os,Tr)??0,label:zn(nn(d,3,void 0,Os))??""});return l}function $f(t){const e=[];for(const n of os(t,ox,1))e.push({x:dn(n,1)??0,y:dn(n,2)??0,z:dn(n,3)??0,visibility:dn(n,4)??0});return e}function nu(t){const e=[];for(const n of os(t,sx,1))e.push({x:dn(n,1)??0,y:dn(n,2)??0,z:dn(n,3)??0,visibility:dn(n,4)??0});return e}function Hv(t){return Array.from(t,(e=>e>127?e-256:e))}function Gv(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,r=0,o=0;for(let l=0;l<t.length;l++)n+=t[l]*e[l],r+=t[l]*t[l],o+=e[l]*e[l];if(r<=0||o<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(r*o)}let nf;wn[516587230]=[0,yn,S0,xm,vn],wn[518928384]=xm;const xC=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Lx(t){if(t)return!0;if(nf===void 0)try{await WebAssembly.instantiate(xC),nf=!0}catch{nf=!1}return nf}async function rf(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await Lx(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Aa=class{};function Dx(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Wv(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,r)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(o=>{r(o)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function Ix(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ke(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Xv(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[r,o]=Ix(e);return!t.l||r===t.i.canvas.width&&o===t.i.canvas.height||(t.i.canvas.width=r,t.i.canvas.height=o),[r,o]}function jv(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const r=new Uint32Array(e.length);for(let o=0;o<e.length;o++)r[o]=t.i.stringToNewUTF8(e[o]);e=t.i._malloc(4*r.length),t.i.HEAPU32.set(r,e>>2),n(e);for(const o of r)t.i._free(o);t.i._free(e)}function xr(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ks(t,e,n){let r=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(o,l,u)=>{l?(n(r,u),r=[]):r.push(o)}}Aa.forVisionTasks=function(t,e=!1){return rf("vision",t??tf``,e)},Aa.forTextTasks=function(t,e=!1){return rf("text",t??tf``,e)},Aa.forGenAiTasks=function(t,e=!1){return rf("genai",t??tf``,e)},Aa.forAudioTasks=function(t,e=!1){return rf("audio",t??tf``,e)},Aa.isSimdSupported=function(t=!1){return Lx(t)};async function SC(t,e,n,r){return t=await(async(o,l,u,f,d)=>{if(l&&await Wv(l),!self.ModuleFactory||u&&(await Wv(u),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&d&&((l=self.Module).locateFile=d.locateFile,d.mainScriptUrlOrBlob&&(l.mainScriptUrlOrBlob=d.mainScriptUrlOrBlob)),d=await self.ModuleFactory(self.Module||d),self.ModuleFactory=self.Module=void 0,new o(d,f)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:o=>o.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&o.endsWith(".data")?n.assetBinaryPath.toString():o}),await t.o(r),t}function vp(t,e){const n=Dt(t.baseOptions,Tf,1)||new Tf;typeof e=="string"?(Bt(n,2,vu(e)),Bt(n,1)):e instanceof Uint8Array&&(Bt(n,1,zm(e,!1)),Bt(n,2)),rt(t.baseOptions,0,1,n)}function Yv(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function He(t,e){t.C=Math.max(t.C,e)}function Kf(t,e){t.B=new yi,Ii(t.B,2,"PassThroughCalculator"),Qt(t.B,"free_memory"),wt(t.B,"free_memory_unused_out"),sn(e,"free_memory"),Zi(e,t.B)}function $a(t,e){Qt(t.B,e),wt(t.B,e+"_unused_out")}function Zf(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Mm=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,r,o,l,u,f;if(e){const d=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((r=t.baseOptions)!=null&&r.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((o=Dt(this.baseOptions,Tf,1))!=null&&o.g()||(l=Dt(this.baseOptions,Tf,1))!=null&&l.l()||(u=t.baseOptions)!=null&&u.modelAssetBuffer||(f=t.baseOptions)!=null&&f.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(p,g){let _=Dt(p.baseOptions,kv,3);if(!_){var v=_=new kv,S=new Dv;eu(v,4,pf,S)}"delegate"in g&&(g.delegate==="GPU"?(g=_,v=new YR,eu(g,2,pf,v)):(g=_,v=new Dv,eu(g,4,pf,v))),rt(p.baseOptions,0,3,_)})(this,d),d.modelAssetPath)return fetch(d.modelAssetPath.toString()).then((p=>{if(p.ok)return p.arrayBuffer();throw Error(`Failed to fetch model: ${d.modelAssetPath} (${p.status})`)})).then((p=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(p),!0,!1,!1),vp(this,"/model.dat"),this.m(),this.L()}));if(d.modelAssetBuffer instanceof Uint8Array)vp(this,d.modelAssetBuffer);else if(d.modelAssetBuffer)return(async function(p){const g=[];for(var _=0;;){const{done:v,value:S}=await p.read();if(v)break;g.push(S),_+=S.length}if(g.length===0)return new Uint8Array(0);if(g.length===1)return g[0];p=new Uint8Array(_),_=0;for(const v of g)p.set(v,_),_+=v.length;return p})(d.modelAssetBuffer).then((p=>{vp(this,p),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=qR(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,r)=>{this.H.push(Error(r))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,Yv(this)}finishProcessing(){this.g.finishProcessing(),Yv(this)}close(){this.B=void 0,this.g.closeGraph()}};function Ws(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Mm.prototype.close=Mm.prototype.close;class EC{constructor(e,n,r,o){this.g=e,this.h=n,this.m=r,this.l=o}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function qv(t,e,n){const r=t.g;if(n=Ws(r.createShader(n),"Failed to create WebGL shader"),r.shaderSource(n,e),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(t.h,n),n}function $v(t,e){const n=t.g,r=Ws(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(r);const o=Ws(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const l=Ws(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,l),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new EC(n,r,o,l)}function T0(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function MC(t,e,n,r){return T0(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=$v(t,!0)),n=t.u):(t.A||(t.A=$v(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=r(),n.g.bindVertexArray(null),t}function Nx(t,e,n){return T0(t,e),t=Ws(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Ux(t,e,n){T0(t,e),t.B||(t.B=Ws(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function TC(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Fx=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Ws(t.createProgram(),"Failed to create WebGL program"),this.X=qv(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=qv(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Kr(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Tm(t){var e=Kr(t,1);if(!e){if(e=Kr(t,0))e=new Float32Array(e).map((r=>r/255));else{e=new Float32Array(t.width*t.height);const r=Ka(t);var n=w0(t);if(Ux(n,r,Ox(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),r.readPixels(0,0,t.width,t.height,r.RGBA,r.FLOAT,n);for(let o=0,l=0;o<e.length;++o,l+=4)e[o]=n[l]}else r.readPixels(0,0,t.width,t.height,r.RED,r.FLOAT,e)}t.g.push(e)}return e}function Ox(t){let e=Kr(t,2);if(!e){const n=Ka(t);e=Bx(t);const r=Tm(t),o=kx(t);n.texImage2D(n.TEXTURE_2D,0,o,t.width,t.height,0,n.RED,n.FLOAT,r),wm(t)}return e}function Ka(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Ws(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function kx(t){if(t=Ka(t),!sf)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))sf=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");sf=t.R16F}return sf}function w0(t){return t.l||(t.l=new Fx),t.l}function Bx(t){const e=Ka(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Kr(t,2);return n||(n=Nx(w0(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function wm(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var sf,Un=class{constructor(t,e,n,r,o,l,u){this.g=t,this.m=e,this.j=n,this.canvas=r,this.l=o,this.width=l,this.height=u,this.j&&--Kv===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Kr(this,0)}ka(){return!!Kr(this,1)}R(){return!!Kr(this,2)}ja(){return(e=Kr(t=this,0))||(e=Tm(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Tm(this)}N(){return Ox(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const r=Ka(this),o=w0(this);r.activeTexture(r.TEXTURE1),n=Nx(o,r,this.m?r.LINEAR:r.NEAREST),r.bindTexture(r.TEXTURE_2D,n);const l=kx(this);r.texImage2D(r.TEXTURE_2D,0,l,this.width,this.height,0,r.RED,r.FLOAT,null),r.bindTexture(r.TEXTURE_2D,null),Ux(o,r,n),MC(o,r,!1,(()=>{Bx(this),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),wm(this)})),TC(o),wm(this)}}t.push(n)}return new Un(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ka(this).deleteTexture(Kr(this,2)),Kv=-1}};Un.prototype.close=Un.prototype.close,Un.prototype.clone=Un.prototype.clone,Un.prototype.getAsWebGLTexture=Un.prototype.N,Un.prototype.getAsFloat32Array=Un.prototype.ia,Un.prototype.getAsUint8Array=Un.prototype.ja,Un.prototype.hasWebGLTexture=Un.prototype.R,Un.prototype.hasFloat32Array=Un.prototype.ka,Un.prototype.hasUint8Array=Un.prototype.Fa;var Kv=250;function fr(...t){return t.map((([e,n])=>({start:e,end:n})))}const wC=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Zv=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Dx()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,r=this.i._malloc(n);this.i.HEAPU8.set(t,r),e?this.i._changeBinaryGraph(n,r):this.i._changeTextGraph(n,r),this.i._free(r)}configureAudio(t,e,n,r,o){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ke(this,r||"input_audio",(l=>{Ke(this,o=o||"audio_header",(u=>{this.i._configureAudio(l,u,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){xr(this,"__graph_config__",(e=>{t(e)})),Ke(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,r,o){const l=4*t.length;this.h!==l&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(l),this.h=l),this.i.HEAPF32.set(t,this.g/4),Ke(this,r,(u=>{this.i._addAudioToInputStream(this.g,e,n,u,o)}))}addGpuBufferToStream(t,e,n){Ke(this,e,(r=>{const[o,l]=Xv(this,t,r);this.i._addBoundTextureToStream(r,o,l,n)}))}addBoolToStream(t,e,n){Ke(this,e,(r=>{this.i._addBoolToInputStream(t,r,n)}))}addDoubleToStream(t,e,n){Ke(this,e,(r=>{this.i._addDoubleToInputStream(t,r,n)}))}addFloatToStream(t,e,n){Ke(this,e,(r=>{this.i._addFloatToInputStream(t,r,n)}))}addIntToStream(t,e,n){Ke(this,e,(r=>{this.i._addIntToInputStream(t,r,n)}))}addUintToStream(t,e,n){Ke(this,e,(r=>{this.i._addUintToInputStream(t,r,n)}))}addStringToStream(t,e,n){Ke(this,e,(r=>{Ke(this,t,(o=>{this.i._addStringToInputStream(o,r,n)}))}))}addStringRecordToStream(t,e,n){Ke(this,e,(r=>{jv(this,Object.keys(t),(o=>{jv(this,Object.values(t),(l=>{this.i._addFlatHashMapToInputStream(o,l,Object.keys(t).length,r,n)}))}))}))}addProtoToStream(t,e,n,r){Ke(this,n,(o=>{Ke(this,e,(l=>{const u=this.i._malloc(t.length);this.i.HEAPU8.set(t,u),this.i._addProtoToInputStream(u,t.length,l,o,r),this.i._free(u)}))}))}addEmptyPacketToStream(t,e){Ke(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateBoolVector(t.length);if(!o)throw Error("Unable to allocate new bool vector on heap.");for(const l of t)this.i._addBoolVectorEntry(o,l);this.i._addBoolVectorToInputStream(o,r,n)}))}addDoubleVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateDoubleVector(t.length);if(!o)throw Error("Unable to allocate new double vector on heap.");for(const l of t)this.i._addDoubleVectorEntry(o,l);this.i._addDoubleVectorToInputStream(o,r,n)}))}addFloatVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateFloatVector(t.length);if(!o)throw Error("Unable to allocate new float vector on heap.");for(const l of t)this.i._addFloatVectorEntry(o,l);this.i._addFloatVectorToInputStream(o,r,n)}))}addIntVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateIntVector(t.length);if(!o)throw Error("Unable to allocate new int vector on heap.");for(const l of t)this.i._addIntVectorEntry(o,l);this.i._addIntVectorToInputStream(o,r,n)}))}addUintVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateUintVector(t.length);if(!o)throw Error("Unable to allocate new unsigned int vector on heap.");for(const l of t)this.i._addUintVectorEntry(o,l);this.i._addUintVectorToInputStream(o,r,n)}))}addStringVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateStringVector(t.length);if(!o)throw Error("Unable to allocate new string vector on heap.");for(const l of t)Ke(this,l,(u=>{this.i._addStringVectorEntry(o,u)}));this.i._addStringVectorToInputStream(o,r,n)}))}addBoolToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Ke(this,e,(n=>{Ke(this,t,(r=>{this.i._addStringToInputSidePacket(r,n)}))}))}addProtoToInputSidePacket(t,e,n){Ke(this,n,(r=>{Ke(this,e,(o=>{const l=this.i._malloc(t.length);this.i.HEAPU8.set(t,l),this.i._addProtoToInputSidePacket(l,t.length,o,r),this.i._free(l)}))}))}addBoolVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const o of t)this.i._addBoolVectorEntry(r,o);this.i._addBoolVectorToInputSidePacket(r,n)}))}addDoubleVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const o of t)this.i._addDoubleVectorEntry(r,o);this.i._addDoubleVectorToInputSidePacket(r,n)}))}addFloatVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const o of t)this.i._addFloatVectorEntry(r,o);this.i._addFloatVectorToInputSidePacket(r,n)}))}addIntVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const o of t)this.i._addIntVectorEntry(r,o);this.i._addIntVectorToInputSidePacket(r,n)}))}addUintVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const o of t)this.i._addUintVectorEntry(r,o);this.i._addUintVectorToInputSidePacket(r,n)}))}addStringVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const o of t)Ke(this,o,(l=>{this.i._addStringVectorEntry(r,l)}));this.i._addStringVectorToInputSidePacket(r,n)}))}attachBoolListener(t,e){xr(this,t,e),Ke(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){ks(this,t,e),Ke(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){xr(this,t,e),Ke(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){ks(this,t,e),Ke(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){xr(this,t,e),Ke(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){ks(this,t,e),Ke(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){xr(this,t,e),Ke(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){ks(this,t,e),Ke(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){xr(this,t,e),Ke(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){ks(this,t,e),Ke(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){xr(this,t,e),Ke(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){ks(this,t,e),Ke(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){xr(this,t,e),Ke(this,t,(r=>{this.i._attachProtoListener(r,n||!1)}))}attachProtoVectorListener(t,e,n){ks(this,t,e),Ke(this,t,(r=>{this.i._attachProtoVectorListener(r,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),xr(this,t,((r,o)=>{r=new Float32Array(r.buffer,r.byteOffset,r.length/4),e(r,o)})),Ke(this,t,(r=>{this.i._attachAudioListener(r,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Zv{get ga(){return this.i}pa(t,e,n){Ke(this,e,(r=>{const[o,l]=Xv(this,t,r);this.ga._addBoundTextureAsImageToStream(r,o,l,n)}))}Z(t,e){xr(this,t,e),Ke(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){ks(this,t,e),Ke(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Zv,dr=class extends wC{};async function bt(t,e,n){return(async function(r,o,l,u){return SC(r,o,l,u)})(t,n.canvas??(Dx()?void 0:document.createElement("canvas")),e,n)}function zx(t,e,n,r){if(t.U){const l=new ax;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var o=n.regionOfInterest;if(o.left>=o.right||o.top>=o.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(o.left<0||o.top<0||o.right>1||o.bottom>1)throw Error("Expected RectF values to be in [0,1].");Je(l,1,(o.left+o.right)/2),Je(l,2,(o.top+o.bottom)/2),Je(l,4,o.right-o.left),Je(l,3,o.bottom-o.top)}else Je(l,1,.5),Je(l,2,.5),Je(l,4,1),Je(l,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Je(l,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[u,f]=Ix(e);n=dn(l,3)*f/u,o=dn(l,4)*u/f,Je(l,4,n),Je(l,3,o)}}t.g.addProtoToStream(l.g(),"mediapipe.NormalizedRect",t.U,r)}t.g.pa(e,t.X,r??performance.now()),t.finishProcessing()}function hr(t,e,n){var r;if((r=t.baseOptions)!=null&&r.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");zx(t,e,n,t.C+1)}function Lr(t,e,n,r){var o;if(!((o=t.baseOptions)!=null&&o.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");zx(t,e,n,r)}function Za(t,e,n,r){var o=e.data;const l=e.width,u=l*(e=e.height);if((o instanceof Uint8Array||o instanceof Float32Array)&&o.length!==u)throw Error("Unsupported channel count: "+o.length/u);return t=new Un([o],n,!1,t.g.i.canvas,t.P,l,e),r?t.clone():t}var Ni=class extends Mm{constructor(t,e,n,r){super(t),this.g=t,this.X=e,this.U=n,this.oa=r,this.P=new Fx}l(t,e=!0){if("runningMode"in t&&Bt(this.baseOptions,2,ou(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Ni.prototype.close=Ni.prototype.close;var Wi=class extends Ni{constructor(t,e){super(new dr(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},rt(t=this.h=new qf,0,1,e=new cn),Je(this.h,2,.5),Je(this.h,3,.3)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Je(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Je(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},hr(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Lr(this,t,n,e),this.j}m(){var t=new Fi;sn(t,"image_in"),sn(t,"norm_rect_in"),It(t,"detections");const e=new Ui;br(e,oC,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect_in"),wt(n,"DETECTIONS:detections"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const l of r)r=rx(l),this.j.detections.push(Px(r));He(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{He(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Wi.prototype.detectForVideo=Wi.prototype.G,Wi.prototype.detect=Wi.prototype.F,Wi.prototype.setOptions=Wi.prototype.o,Wi.createFromModelPath=async function(t,e){return bt(Wi,t,{baseOptions:{modelAssetPath:e}})},Wi.createFromModelBuffer=function(t,e){return bt(Wi,t,{baseOptions:{modelAssetBuffer:e}})},Wi.createFromOptions=function(t,e){return bt(Wi,t,e)};var A0=fr([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),R0=fr([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),C0=fr([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Vx=fr([474,475],[475,476],[476,477],[477,474]),b0=fr([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),P0=fr([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Hx=fr([469,470],[470,471],[471,472],[472,469]),L0=fr([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Gx=[...A0,...R0,...C0,...b0,...P0,...L0],Wx=fr([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Qv(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var un=class extends Ni{constructor(t,e){super(new dr(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,rt(t=this.h=new dx,0,1,e=new cn),this.A=new fx,rt(this.h,0,3,this.A),this.u=new qf,rt(this.h,0,2,this.u),as(this.u,4,1),Je(this.u,2,.5),Je(this.A,2,.5),Je(this.h,4,.5)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"numFaces"in t&&as(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Je(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Je(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Je(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Qv(this),hr(this,t,e),this.j}G(t,e,n){return Qv(this),Lr(this,t,n,e),this.j}m(){var t=new Fi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"face_landmarks");const e=new Ui;br(e,lC,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("face_landmarks",((r,o)=>{for(const l of r)r=Su(l),this.j.faceLandmarks.push($f(r));He(this,o)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{He(this,r)})),this.outputFaceBlendshapes&&(It(t,"blendshapes"),wt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((r,o)=>{if(this.outputFaceBlendshapes)for(const l of r)r=Yf(l),this.j.faceBlendshapes.push(M0(r.g()??[]));He(this,o)})),this.g.attachEmptyPacketListener("blendshapes",(r=>{He(this,r)}))),this.outputFacialTransformationMatrixes&&(It(t,"face_geometry"),wt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((r,o)=>{if(this.outputFacialTransformationMatrixes)for(const l of r)(r=Dt(r=aC(l),QR,2))&&this.j.facialTransformationMatrixes.push({rows:$i(r,1)??0??0,columns:$i(r,2)??0??0,data:To(r,3,Tr,Mo()).slice()??[]});He(this,o)})),this.g.attachEmptyPacketListener("face_geometry",(r=>{He(this,r)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};un.prototype.detectForVideo=un.prototype.G,un.prototype.detect=un.prototype.F,un.prototype.setOptions=un.prototype.o,un.createFromModelPath=function(t,e){return bt(un,t,{baseOptions:{modelAssetPath:e}})},un.createFromModelBuffer=function(t,e){return bt(un,t,{baseOptions:{modelAssetBuffer:e}})},un.createFromOptions=function(t,e){return bt(un,t,e)},un.FACE_LANDMARKS_LIPS=A0,un.FACE_LANDMARKS_LEFT_EYE=R0,un.FACE_LANDMARKS_LEFT_EYEBROW=C0,un.FACE_LANDMARKS_LEFT_IRIS=Vx,un.FACE_LANDMARKS_RIGHT_EYE=b0,un.FACE_LANDMARKS_RIGHT_EYEBROW=P0,un.FACE_LANDMARKS_RIGHT_IRIS=Hx,un.FACE_LANDMARKS_FACE_OVAL=L0,un.FACE_LANDMARKS_CONTOURS=Gx,un.FACE_LANDMARKS_TESSELATION=Wx;var D0=fr([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Jv(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function e2(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function t2(t,e=!0){const n=[];for(const o of t){var r=Yf(o);t=[];for(const l of r.g())r=e&&$i(l,1)!=null?$i(l,1)??0:-1,t.push({score:dn(l,2)??0,index:r,categoryName:zn(nn(l,3))??""??"",displayName:zn(nn(l,4))??""??""});n.push(t)}return n}var Ai=class extends Ni{constructor(t,e){super(new dr(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],rt(t=this.j=new mx,0,1,e=new cn),this.u=new y0,rt(this.j,0,2,this.u),this.D=new v0,rt(this.u,0,3,this.D),this.A=new px,rt(this.u,0,2,this.A),this.h=new uC,rt(this.j,0,3,this.h),Je(this.A,2,.5),Je(this.u,4,.5),Je(this.D,2,.5)}get baseOptions(){return Dt(this.j,cn,1)}set baseOptions(t){rt(this.j,0,1,t)}o(t){var o,l,u,f;if(as(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Je(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Je(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Je(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Ta,n=e,r=Em(t.cannedGesturesClassifierOptions,(o=Dt(this.h,Ta,3))==null?void 0:o.l());rt(n,0,2,r),rt(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((l=Dt(this.h,Ta,3))==null||l.g());return t.customGesturesClassifierOptions?(rt(n=e=new Ta,0,2,r=Em(t.customGesturesClassifierOptions,(u=Dt(this.h,Ta,4))==null?void 0:u.l())),rt(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((f=Dt(this.h,Ta,4))==null||f.g()),this.l(t)}Ha(t,e){return Jv(this),hr(this,t,e),e2(this)}Ia(t,e,n){return Jv(this),Lr(this,t,n,e),e2(this)}m(){var t=new Fi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"hand_gestures"),It(t,"hand_landmarks"),It(t,"world_hand_landmarks"),It(t,"handedness");const e=new Ui;br(e,cC,this.j);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"HAND_GESTURES:hand_gestures"),wt(n,"LANDMARKS:hand_landmarks"),wt(n,"WORLD_LANDMARKS:world_hand_landmarks"),wt(n,"HANDEDNESS:handedness"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const l of r){r=Su(l);const u=[];for(const f of os(r,ox,1))u.push({x:dn(f,1)??0,y:dn(f,2)??0,z:dn(f,3)??0,visibility:dn(f,4)??0});this.landmarks.push(u)}He(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{He(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const l of r){r=Ia(l);const u=[];for(const f of os(r,sx,1))u.push({x:dn(f,1)??0,y:dn(f,2)??0,z:dn(f,3)??0,visibility:dn(f,4)??0});this.worldLandmarks.push(u)}He(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{He(this,r)})),this.g.attachProtoVectorListener("hand_gestures",((r,o)=>{this.gestures.push(...t2(r,!1)),He(this,o)})),this.g.attachEmptyPacketListener("hand_gestures",(r=>{He(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{this.handedness.push(...t2(r)),He(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{He(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function n2(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Ai.prototype.recognizeForVideo=Ai.prototype.Ia,Ai.prototype.recognize=Ai.prototype.Ha,Ai.prototype.setOptions=Ai.prototype.o,Ai.createFromModelPath=function(t,e){return bt(Ai,t,{baseOptions:{modelAssetPath:e}})},Ai.createFromModelBuffer=function(t,e){return bt(Ai,t,{baseOptions:{modelAssetBuffer:e}})},Ai.createFromOptions=function(t,e){return bt(Ai,t,e)},Ai.HAND_CONNECTIONS=D0;var pi=class extends Ni{constructor(t,e){super(new dr(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],rt(t=this.h=new y0,0,1,e=new cn),this.u=new v0,rt(this.h,0,3,this.u),this.j=new px,rt(this.h,0,2,this.j),as(this.j,3,1),Je(this.j,2,.5),Je(this.u,2,.5),Je(this.h,4,.5)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"numHands"in t&&as(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Je(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Je(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Je(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],hr(this,t,e),n2(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Lr(this,t,n,e),n2(this)}m(){var t=new Fi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"hand_landmarks"),It(t,"world_hand_landmarks"),It(t,"handedness");const e=new Ui;br(e,fC,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"LANDMARKS:hand_landmarks"),wt(n,"WORLD_LANDMARKS:world_hand_landmarks"),wt(n,"HANDEDNESS:handedness"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const l of r)r=Su(l),this.landmarks.push($f(r));He(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{He(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const l of r)r=Ia(l),this.worldLandmarks.push(nu(r));He(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{He(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{var l=this.handedness,u=l.push;const f=[];for(const d of r){r=Yf(d);const p=[];for(const g of r.g())p.push({score:dn(g,2)??0,index:$i(g,1)??0??-1,categoryName:zn(nn(g,3))??""??"",displayName:zn(nn(g,4))??""??""});f.push(p)}u.call(l,...f),He(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{He(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};pi.prototype.detectForVideo=pi.prototype.G,pi.prototype.detect=pi.prototype.F,pi.prototype.setOptions=pi.prototype.o,pi.createFromModelPath=function(t,e){return bt(pi,t,{baseOptions:{modelAssetPath:e}})},pi.createFromModelBuffer=function(t,e){return bt(pi,t,{baseOptions:{modelAssetBuffer:e}})},pi.createFromOptions=function(t,e){return bt(pi,t,e)},pi.HAND_CONNECTIONS=D0;var Xx=fr([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function i2(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function r2(t){try{if(!t.D)return t.h;t.D(t.h)}finally{Zf(t)}}function of(t,e){t=Su(t),e.push($f(t))}var Kt=class extends Ni{constructor(t,e){super(new dr(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,rt(t=this.j=new xx,0,1,e=new cn),this.I=new v0,rt(this.j,0,2,this.I),this.W=new dC,rt(this.j,0,3,this.W),this.u=new qf,rt(this.j,0,4,this.u),this.O=new fx,rt(this.j,0,5,this.O),this.A=new vx,rt(this.j,0,6,this.A),this.M=new yx,rt(this.j,0,7,this.M),Je(this.u,2,.5),Je(this.u,3,.3),Je(this.O,2,.5),Je(this.A,2,.5),Je(this.A,3,.3),Je(this.M,2,.5),Je(this.I,2,.5)}get baseOptions(){return Dt(this.j,cn,1)}set baseOptions(t){rt(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Je(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Je(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Je(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Je(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Je(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Je(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Je(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const r=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,i2(this),hr(this,t,r),r2(this)}G(t,e,n,r){const o=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:r,i2(this),Lr(this,t,o,e),r2(this)}m(){var t=new Fi;sn(t,"input_frames_image"),It(t,"pose_landmarks"),It(t,"pose_world_landmarks"),It(t,"face_landmarks"),It(t,"left_hand_landmarks"),It(t,"left_hand_world_landmarks"),It(t,"right_hand_landmarks"),It(t,"right_hand_world_landmarks");const e=new Ui,n=new Cv;Ii(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(o,l){if(l!=null)if(Array.isArray(l))Bt(o,2,Uf(l,0,au));else{if(!(typeof l=="string"||l instanceof wr||km(l)))throw Error("invalid value in Any.value field: "+l+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Bs(o,2,zm(l,!1),Io())}})(n,this.j.g());const r=new yi;Ii(r,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),e0(r,8,Cv,n),Qt(r,"IMAGE:input_frames_image"),wt(r,"POSE_LANDMARKS:pose_landmarks"),wt(r,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),wt(r,"FACE_LANDMARKS:face_landmarks"),wt(r,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),wt(r,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),wt(r,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),wt(r,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),r.o(e),Zi(t,r),Kf(this,t),this.g.attachProtoListener("pose_landmarks",((o,l)=>{of(o,this.h.poseLandmarks),He(this,l)})),this.g.attachEmptyPacketListener("pose_landmarks",(o=>{He(this,o)})),this.g.attachProtoListener("pose_world_landmarks",((o,l)=>{var u=this.h.poseWorldLandmarks;o=Ia(o),u.push(nu(o)),He(this,l)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(o=>{He(this,o)})),this.outputPoseSegmentationMasks&&(wt(r,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),$a(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((o,l)=>{this.h.poseSegmentationMasks=[Za(this,o,!0,!this.D)],He(this,l)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(o=>{this.h.poseSegmentationMasks=[],He(this,o)}))),this.g.attachProtoListener("face_landmarks",((o,l)=>{of(o,this.h.faceLandmarks),He(this,l)})),this.g.attachEmptyPacketListener("face_landmarks",(o=>{He(this,o)})),this.outputFaceBlendshapes&&(It(t,"extra_blendshapes"),wt(r,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((o,l)=>{var u=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(o=Yf(o),u.push(M0(o.g()??[]))),He(this,l)})),this.g.attachEmptyPacketListener("extra_blendshapes",(o=>{He(this,o)}))),this.g.attachProtoListener("left_hand_landmarks",((o,l)=>{of(o,this.h.leftHandLandmarks),He(this,l)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(o=>{He(this,o)})),this.g.attachProtoListener("left_hand_world_landmarks",((o,l)=>{var u=this.h.leftHandWorldLandmarks;o=Ia(o),u.push(nu(o)),He(this,l)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(o=>{He(this,o)})),this.g.attachProtoListener("right_hand_landmarks",((o,l)=>{of(o,this.h.rightHandLandmarks),He(this,l)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(o=>{He(this,o)})),this.g.attachProtoListener("right_hand_world_landmarks",((o,l)=>{var u=this.h.rightHandWorldLandmarks;o=Ia(o),u.push(nu(o)),He(this,l)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(o=>{He(this,o)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Kt.prototype.detectForVideo=Kt.prototype.G,Kt.prototype.detect=Kt.prototype.F,Kt.prototype.setOptions=Kt.prototype.o,Kt.createFromModelPath=function(t,e){return bt(Kt,t,{baseOptions:{modelAssetPath:e}})},Kt.createFromModelBuffer=function(t,e){return bt(Kt,t,{baseOptions:{modelAssetBuffer:e}})},Kt.createFromOptions=function(t,e){return bt(Kt,t,e)},Kt.HAND_CONNECTIONS=D0,Kt.POSE_CONNECTIONS=Xx,Kt.FACE_LANDMARKS_LIPS=A0,Kt.FACE_LANDMARKS_LEFT_EYE=R0,Kt.FACE_LANDMARKS_LEFT_EYEBROW=C0,Kt.FACE_LANDMARKS_LEFT_IRIS=Vx,Kt.FACE_LANDMARKS_RIGHT_EYE=b0,Kt.FACE_LANDMARKS_RIGHT_EYEBROW=P0,Kt.FACE_LANDMARKS_RIGHT_IRIS=Hx,Kt.FACE_LANDMARKS_FACE_OVAL=L0,Kt.FACE_LANDMARKS_CONTOURS=Gx,Kt.FACE_LANDMARKS_TESSELATION=Wx;var Xi=class extends Ni{constructor(t,e){super(new dr(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},rt(t=this.h=new Sx,0,1,e=new cn)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return rt(this.h,0,2,Em(t,Dt(this.h,g0,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},hr(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Lr(this,t,n,e),this.j}m(){var t=new Fi;sn(t,"input_image"),sn(t,"norm_rect"),It(t,"classifications");const e=new Ui;br(e,hC,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Qt(n,"IMAGE:input_image"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"CLASSIFICATIONS:classifications"),n.o(e),Zi(t,n),this.g.attachProtoListener("classifications",((r,o)=>{this.j=yC(tC(r)),He(this,o)})),this.g.attachEmptyPacketListener("classifications",(r=>{He(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Xi.prototype.classifyForVideo=Xi.prototype.ta,Xi.prototype.classify=Xi.prototype.sa,Xi.prototype.setOptions=Xi.prototype.o,Xi.createFromModelPath=function(t,e){return bt(Xi,t,{baseOptions:{modelAssetPath:e}})},Xi.createFromModelBuffer=function(t,e){return bt(Xi,t,{baseOptions:{modelAssetBuffer:e}})},Xi.createFromOptions=function(t,e){return bt(Xi,t,e)};var Ri=class extends Ni{constructor(t,e){super(new dr(t,e),"image_in","norm_rect",!0),this.h=new Ex,this.embeddings={embeddings:[]},rt(t=this.h,0,1,e=new cn)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){var e=this.h,n=Dt(this.h,Ov,2);return n=n?n.clone():new Ov,t.l2Normalize!==void 0?Bt(n,1,ou(t.l2Normalize)):"l2Normalize"in t&&Bt(n,1),t.quantize!==void 0?Bt(n,2,ou(t.quantize)):"quantize"in t&&Bt(n,2),rt(e,0,2,n),this.l(t)}za(t,e){return hr(this,t,e),this.embeddings}Aa(t,e,n){return Lr(this,t,n,e),this.embeddings}m(){var t=new Fi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"embeddings_out");const e=new Ui;br(e,pC,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"EMBEDDINGS:embeddings_out"),n.o(e),Zi(t,n),this.g.attachProtoListener("embeddings_out",((r,o)=>{r=rC(r),this.embeddings=(function(l){return{embeddings:os(l,iC,1).map((u=>{var p,g;const f={headIndex:$i(u,3)??0??-1,headName:zn(nn(u,4))??""??""};var d=u.v;return yy(d,0|d[qe],Fv,hp(u,1))!==void 0?(u=To(u=Dt(u,Fv,hp(u,1),void 0),1,Tr,Mo()),f.floatEmbedding=u.slice()):(d=new Uint8Array(0),f.quantizedEmbedding=((g=(p=Dt(u,nC,hp(u,2),void 0))==null?void 0:p.na())==null?void 0:g.h())??d),f})),timestampMs:bx(nn(l,2,void 0,void 0,vf)??py)}})(r),He(this,o)})),this.g.attachEmptyPacketListener("embeddings_out",(r=>{He(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ri.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Gv(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Gv(Hv(t.quantizedEmbedding),Hv(e.quantizedEmbedding))}return t},Ri.prototype.embedForVideo=Ri.prototype.Aa,Ri.prototype.embed=Ri.prototype.za,Ri.prototype.setOptions=Ri.prototype.o,Ri.createFromModelPath=function(t,e){return bt(Ri,t,{baseOptions:{modelAssetPath:e}})},Ri.createFromModelBuffer=function(t,e){return bt(Ri,t,{baseOptions:{modelAssetBuffer:e}})},Ri.createFromOptions=function(t,e){return bt(Ri,t,e)};var Am=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};function AC(t){var n,r;const e=(function(o){return os(o,yi,1)})(t.ca()).filter((o=>(zn(nn(o,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((r=(n=Dt(e[0],Ui,7))==null?void 0:n.j())==null?void 0:r.g())??new Map).forEach(((o,l)=>{t.u[Number(l)]=zn(nn(o,1))??""}))}function s2(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function o2(t){try{const e=new Am(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Zf(t)}}Am.prototype.close=Am.prototype.close;var hi=class extends Ni{constructor(t,e){super(new dr(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new E0,this.A=new Mx,rt(this.h,0,3,this.A),rt(t=this.h,0,1,e=new cn)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Bt(this.h,2,vu(t.displayNamesLocale)):"displayNamesLocale"in t&&Bt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){AC(this)}segment(t,e,n){const r=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,s2(this),hr(this,t,r),o2(this)}La(t,e,n,r){const o=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:r,s2(this),Lr(this,t,o,e),o2(this)}Da(){return this.u}m(){var t=new Fi;sn(t,"image_in"),sn(t,"norm_rect");const e=new Ui;br(e,wx,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),n.o(e),Zi(t,n),Kf(this,t),this.outputConfidenceMasks&&(It(t,"confidence_masks"),wt(n,"CONFIDENCE_MASKS:confidence_masks"),$a(this,"confidence_masks"),this.g.aa("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((l=>Za(this,l,!0,!this.j))),He(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],He(this,r)}))),this.outputCategoryMask&&(It(t,"category_mask"),wt(n,"CATEGORY_MASK:category_mask"),$a(this,"category_mask"),this.g.Z("category_mask",((r,o)=>{this.categoryMask=Za(this,r,!1,!this.j),He(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,He(this,r)}))),It(t,"quality_scores"),wt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,He(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,He(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};hi.prototype.getLabels=hi.prototype.Da,hi.prototype.segmentForVideo=hi.prototype.La,hi.prototype.segment=hi.prototype.segment,hi.prototype.setOptions=hi.prototype.o,hi.createFromModelPath=function(t,e){return bt(hi,t,{baseOptions:{modelAssetPath:e}})},hi.createFromModelBuffer=function(t,e){return bt(hi,t,{baseOptions:{modelAssetBuffer:e}})},hi.createFromOptions=function(t,e){return bt(hi,t,e)};var Rm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};Rm.prototype.close=Rm.prototype.close;var Sr=class extends Ni{constructor(t,e){super(new dr(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new E0,this.u=new Mx,rt(this.h,0,3,this.u),rt(t=this.h,0,1,e=new cn)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,r){const o=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,r=new Ax,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var l=new _p;Bs(l,3,ou(!0),!1),Bs(l,1,Jl(e.keypoint.x),0),Bs(l,2,Jl(e.keypoint.y),0),eu(r,1,Sm,l)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const f=new gC;for(l of e.scribble)Bs(e=new _p,3,ou(!0),!1),Bs(e,1,Jl(l.x),0),Bs(e,2,Jl(l.y),0),e0(f,1,_p,e);eu(r,2,Sm,f)}}this.g.addProtoToStream(r.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),hr(this,t,o);e:{try{const f=new Rm(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var u=f;break e}this.j(f)}finally{Zf(this)}u=void 0}return u}m(){var t=new Fi;sn(t,"image_in"),sn(t,"roi_in"),sn(t,"norm_rect_in");const e=new Ui;br(e,wx,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Qt(n,"IMAGE:image_in"),Qt(n,"ROI:roi_in"),Qt(n,"NORM_RECT:norm_rect_in"),n.o(e),Zi(t,n),Kf(this,t),this.outputConfidenceMasks&&(It(t,"confidence_masks"),wt(n,"CONFIDENCE_MASKS:confidence_masks"),$a(this,"confidence_masks"),this.g.aa("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((l=>Za(this,l,!0,!this.j))),He(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],He(this,r)}))),this.outputCategoryMask&&(It(t,"category_mask"),wt(n,"CATEGORY_MASK:category_mask"),$a(this,"category_mask"),this.g.Z("category_mask",((r,o)=>{this.categoryMask=Za(this,r,!1,!this.j),He(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,He(this,r)}))),It(t,"quality_scores"),wt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,He(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,He(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Sr.prototype.segment=Sr.prototype.segment,Sr.prototype.setOptions=Sr.prototype.o,Sr.createFromModelPath=function(t,e){return bt(Sr,t,{baseOptions:{modelAssetPath:e}})},Sr.createFromModelBuffer=function(t,e){return bt(Sr,t,{baseOptions:{modelAssetBuffer:e}})},Sr.createFromOptions=function(t,e){return bt(Sr,t,e)};var ji=class extends Ni{constructor(t,e){super(new dr(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},rt(t=this.h=new Rx,0,1,e=new cn)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Bt(this.h,2,vu(t.displayNamesLocale)):"displayNamesLocale"in t&&Bt(this.h,2),t.maxResults!==void 0?as(this.h,3,t.maxResults):"maxResults"in t&&Bt(this.h,3),t.scoreThreshold!==void 0?Je(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&Bt(this.h,4),t.categoryAllowlist!==void 0?xf(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&Bt(this.h,5),t.categoryDenylist!==void 0?xf(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&Bt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},hr(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Lr(this,t,n,e),this.j}m(){var t=new Fi;sn(t,"input_frame_gpu"),sn(t,"norm_rect"),It(t,"detections");const e=new Ui;br(e,_C,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Qt(n,"IMAGE:input_frame_gpu"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"DETECTIONS:detections"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const l of r)r=rx(l),this.j.detections.push(Px(r));He(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{He(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ji.prototype.detectForVideo=ji.prototype.G,ji.prototype.detect=ji.prototype.F,ji.prototype.setOptions=ji.prototype.o,ji.createFromModelPath=async function(t,e){return bt(ji,t,{baseOptions:{modelAssetPath:e}})},ji.createFromModelBuffer=function(t,e){return bt(ji,t,{baseOptions:{modelAssetBuffer:e}})},ji.createFromOptions=function(t,e){return bt(ji,t,e)};var Cm=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach((e=>{e.close()}))}};function a2(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function l2(t){try{const e=new Cm(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Zf(t)}}Cm.prototype.close=Cm.prototype.close;var Ci=class extends Ni{constructor(t,e){super(new dr(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,rt(t=this.h=new Cx,0,1,e=new cn),this.A=new yx,rt(this.h,0,3,this.A),this.j=new vx,rt(this.h,0,2,this.j),as(this.j,4,1),Je(this.j,2,.5),Je(this.A,2,.5),Je(this.h,4,.5)}get baseOptions(){return Dt(this.h,cn,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"numPoses"in t&&as(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Je(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Je(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Je(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const r=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,a2(this),hr(this,t,r),l2(this)}G(t,e,n,r){const o=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:r,a2(this),Lr(this,t,o,e),l2(this)}m(){var t=new Fi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"normalized_landmarks"),It(t,"world_landmarks"),It(t,"segmentation_masks");const e=new Ui;br(e,vC,this.h);const n=new yi;Ii(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"NORM_LANDMARKS:normalized_landmarks"),wt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Zi(t,n),Kf(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((r,o)=>{this.landmarks=[];for(const l of r)r=Su(l),this.landmarks.push($f(r));He(this,o)})),this.g.attachEmptyPacketListener("normalized_landmarks",(r=>{this.landmarks=[],He(this,r)})),this.g.attachProtoVectorListener("world_landmarks",((r,o)=>{this.worldLandmarks=[];for(const l of r)r=Ia(l),this.worldLandmarks.push(nu(r));He(this,o)})),this.g.attachEmptyPacketListener("world_landmarks",(r=>{this.worldLandmarks=[],He(this,r)})),this.outputSegmentationMasks&&(wt(n,"SEGMENTATION_MASK:segmentation_masks"),$a(this,"segmentation_masks"),this.g.aa("segmentation_masks",((r,o)=>{this.segmentationMasks=r.map((l=>Za(this,l,!0,!this.u))),He(this,o)})),this.g.attachEmptyPacketListener("segmentation_masks",(r=>{this.segmentationMasks=[],He(this,r)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ci.prototype.detectForVideo=Ci.prototype.G,Ci.prototype.detect=Ci.prototype.F,Ci.prototype.setOptions=Ci.prototype.o,Ci.createFromModelPath=function(t,e){return bt(Ci,t,{baseOptions:{modelAssetPath:e}})},Ci.createFromModelBuffer=function(t,e){return bt(Ci,t,{baseOptions:{modelAssetBuffer:e}})},Ci.createFromOptions=function(t,e){return bt(Ci,t,e)},Ci.POSE_CONNECTIONS=Xx;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jx=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=Tt.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},d)=>Tt.createElement("svg",{ref:d,...CC,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:jx("lucide",o),...f},[...u.map(([p,g])=>Tt.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=(t,e)=>{const n=Tt.forwardRef(({className:r,...o},l)=>Tt.createElement(bC,{ref:l,iconNode:e,className:jx(`lucide-${RC(t)}`,r),...o}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=dl("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=dl("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=dl("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=dl("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=dl("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=dl("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),mi=6200,NC="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",c2=["#a78bfa","#54e7d4","#ff83c8","#ffd080","#d9e8ff"],xp=new Map;function UC(t){const e=(t||"YOUR NAME").toUpperCase().slice(0,14);if(xp.has(e))return xp.get(e);const n=document.createElement("canvas");n.width=700,n.height=220;const r=n.getContext("2d",{willReadFrequently:!0});r.fillStyle="#fff",r.textAlign="center",r.textBaseline="middle";let o=130;for(r.font=`800 ${o}px Manrope, Arial, sans-serif`;r.measureText(e).width>650&&o>45;)o-=5,r.font=`800 ${o}px Manrope, Arial, sans-serif`;r.fillText(e,350,110);const l=r.getImageData(0,0,700,220).data,u=[];for(let d=0;d<220;d+=3)for(let p=0;p<700;p+=3)l[(d*700+p)*4+3]>100&&u.push([(p-350)/82,(110-d)/82,Math.sin(p*.08+d*.04)*.12]);const f=u.length?u:[[0,0,0]];return xp.set(e,f),f}function Sp(t,e,n="YOUR NAME"){const r=t/mi*Math.PI*2,o=Math.acos(1-2*(t*.61803398875%1)),l=()=>[2.65*Math.sin(o)*Math.cos(r),2.65*Math.cos(o),2.65*Math.sin(o)*Math.sin(r)];if(e==="Heart"){const u=r,f=16*Math.pow(Math.sin(u),3),d=13*Math.cos(u)-5*Math.cos(2*u)-2*Math.cos(3*u)-Math.cos(4*u);return[f*.105,d*.105,Math.sin(t*12.989)*.36]}if(e==="Galaxy"){const u=t%5,f=.16+t/mi*4.45,d=f*1.58+u*Math.PI*2/5,p=Math.sin(t*17.17)*.13;return[Math.cos(d)*(f+p),Math.sin(d)*(f+p)*.63,Math.sin(t*8.31)*.2]}if(e==="Wave"){const u=(t%100/99-.5)*8,f=(Math.floor(t/100)/62-.5)*5;return[u,Math.sin(u*1.45+f*1.7)*.65,f]}if(e==="Star"){const u=r,d=(Math.floor(u/(Math.PI*2)*10)%2===0?2.9:1.25)*(.55+.45*(t*37%101/100));return[Math.cos(u)*d,Math.sin(u)*d,Math.sin(t*2.17)*.42]}if(e==="Saturn"){if(t%3===0)return l();const u=r*2.1,f=3+t*17%100/100*1.35;return[Math.cos(u)*f,Math.sin(u)*f*.48+Math.sin(u)*.25,Math.sin(u)*f*.72]}if(e==="Butterfly"){const u=r,f=t%2?1:-1,d=.35+2.65*Math.abs(Math.sin(u*2))*(.65+.35*Math.cos(u*4));return[f*(.25+d*Math.abs(Math.cos(u))),Math.sin(u*2)*1.75,Math.cos(u*2)*.55+Math.sin(t*.7)*.12]}if(e==="Flower"){const u=r,f=1+1.75*Math.abs(Math.cos(5*u));return[Math.cos(u)*f,Math.sin(u)*f,Math.sin(5*u)*.32+Math.sin(t*.3)*.12]}if(e==="DNA"){const u=t/mi*Math.PI*12,f=t%2?0:Math.PI,d=u+f;return[Math.cos(d)*1.35,(t/mi-.5)*6.2,Math.sin(d)*1.35]}if(e==="Tornado"){const u=t/mi,f=u*Math.PI*24,d=.25+u*2.8;return[Math.cos(f)*d,(u-.5)*5.8,Math.sin(f)*d]}if(e==="Firework"){const u=t%32,f=u/32*Math.PI*2,d=.25+Math.floor(t/32)*37%100/100*3.4,p=Math.sin(t*12.7)*.16;return[Math.cos(f+p)*d,Math.sin(f+p)*d,Math.sin(u*4.1)*d*.28]}if(e==="Infinity"){const u=r,f=1+Math.cos(u)**2;return[3.6*Math.sin(u)/f,2.15*Math.sin(u)*Math.cos(u)/f,Math.sin(t*8.7)*.32]}if(e==="Text"){const u=UC(n),f=u[t*97%u.length];return[f[0],f[1],f[2]+Math.sin(t*.17)*.08]}return l()}function FC({hand:t,mode:e,color:n,cameraOn:r,text:o}){const l=Tt.useRef(null),u=Tt.useRef(null),f=Tt.useRef(t),d=Tt.useRef(e),p=Tt.useRef(n),g=Tt.useRef(o),_=Tt.useRef(r);return Tt.useEffect(()=>{f.current=t},[t]),Tt.useEffect(()=>{d.current=e},[e]),Tt.useEffect(()=>{p.current=n},[n]),Tt.useEffect(()=>{g.current=o},[o]),Tt.useEffect(()=>{_.current=r},[r]),Tt.useEffect(()=>{const v=l.current;if(!v)return;const S=new ZE,M=new qi(52,v.clientWidth/v.clientHeight,.1,100);M.position.z=10;const R=new GA({antialias:!1,alpha:!0,powerPreference:"high-performance"});R.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),R.setSize(v.clientWidth,v.clientHeight),R.setClearColor(0,0),v.appendChild(R.domElement);const x=new Float32Array(mi*3),y=new Float32Array(mi*3),U=new Float32Array(mi*3),D=new Float32Array(mi),b=new Float32Array(mi);for(let I=0;I<mi;I++){const Z=Sp(I,"Sphere",g.current),Y=I*3;x[Y]=Z[0]+Math.sin(I*3.1)*.22,x[Y+1]=Z[1]+Math.cos(I*2.7)*.22,x[Y+2]=Z[2],y.set(Z,Y),D[I]=.65+I*37%100/100*1.8,b[I]=I%997/997}const G=new ls;G.setAttribute("position",new bi(x,3)),G.setAttribute("aSize",new bi(D,1)),G.setAttribute("aPhase",new bi(b,1));const z=new is({uniforms:{uColor:{value:new Ut(p.current)},uTime:{value:0},uPixelRatio:{value:R.getPixelRatio()}},vertexShader:`
        attribute float aSize;
        attribute float aPhase;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vPhase;
        void main() {
          vPhase = aPhase;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float twinkle = 0.78 + 0.22 * sin(uTime * 1.7 + aPhase * 38.0);
          gl_PointSize = aSize * uPixelRatio * twinkle * (34.0 / -mvPosition.z);
          gl_PointSize = clamp(gl_PointSize, 1.0, 9.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vPhase;
        void main() {
          vec2 p = gl_PointCoord - vec2(0.5);
          float d = length(p);
          float core = smoothstep(0.20, 0.0, d);
          float glow = exp(-d * 10.0) * 0.62;
          float alpha = core + glow;
          vec3 tint = mix(uColor, vec3(0.42, 0.88, 1.0), vPhase * 0.28);
          gl_FragColor = vec4(tint, alpha);
          if (gl_FragColor.a < 0.015) discard;
        }
      `,transparent:!0,depthWrite:!1,blending:Ep}),F=new tM(G,z);S.add(F),u.current={destinations:y,geometry:G,positions:x,velocities:U,material:z,renderer:R,points:F},(I=>{for(let Z=0;Z<mi;Z++)y.set(Sp(Z,I,g.current),Z*3)})(d.current);const C=new oM;R.setAnimationLoop(()=>{const I=C.getElapsedTime(),Z=f.current,Y=_.current&&(Z==null?void 0:Z.detected),ue=(Z.x-.5)*8.4,fe=(.5-Z.y)*5.2,ae=Z.open,le=Z.pinch;for(let k=0;k<mi;k++){const te=k*3;let se=y[te],N=y[te+1],ie=y[te+2];if(se+=Math.sin(I*.75+k*.013)*.025,N+=Math.cos(I*.7+k*.011)*.025,Y){const De=x[te]-ue,Q=x[te+1]-fe,ce=Math.sqrt(De*De+Q*Q)+.001,xe=ae?2.25:1.65;if(ce<xe){const ge=(1-ce/xe)*(ae?1.45:-1.35);se+=De/ce*ge,N+=Q/ce*ge,ie+=Math.sin(k*.08+I*2)*ge*.15}le&&ce<2.6&&(se+=(ue-x[te])*.075,N+=(fe-x[te+1])*.075)}U[te]=(U[te]+(se-x[te])*.022)*.885,U[te+1]=(U[te+1]+(N-x[te+1])*.022)*.885,U[te+2]=(U[te+2]+(ie-x[te+2])*.022)*.885,x[te]+=U[te],x[te+1]+=U[te+1],x[te+2]+=U[te+2]}G.attributes.position.needsUpdate=!0,F.rotation.y=Math.sin(I*.12)*.13,F.rotation.x=Math.cos(I*.1)*.06,z.uniforms.uTime.value=I,z.uniforms.uColor.value.set(p.current),R.render(S,M)});const w=()=>{const I=v.clientWidth,Z=v.clientHeight;M.aspect=I/Z,M.updateProjectionMatrix(),R.setSize(I,Z),z.uniforms.uPixelRatio.value=R.getPixelRatio()};return window.addEventListener("resize",w),()=>{R.setAnimationLoop(null),window.removeEventListener("resize",w),G.dispose(),z.dispose(),R.dispose(),R.domElement.parentNode===v&&v.removeChild(R.domElement),u.current=null}},[]),Tt.useEffect(()=>{const v=u.current;if(v)for(let S=0;S<mi;S++)v.destinations.set(Sp(S,e,g.current),S*3)},[e,o]),Ee.jsx("div",{className:"particle-stage",ref:l})}function OC(){const t=Tt.useRef(null),e=Tt.useRef(null),n=Tt.useRef(null),r=Tt.useRef(-1),o=Tt.useRef({x:.5,y:.5}),[l,u]=Tt.useState(!1),[f,d]=Tt.useState(!1),[p,g]=Tt.useState(""),[_,v]=Tt.useState({detected:!1,x:.5,y:.5,open:!1,pinch:!1}),[S,M]=Tt.useState("Sphere"),[R,x]=Tt.useState("YOUR NAME"),[y,U]=Tt.useState(c2[0]),[D,b]=Tt.useState(!0);async function G(){g(""),d(!0);try{const w=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480},frameRate:{ideal:30,max:30}},audio:!1});if(t.current.srcObject=w,await t.current.play(),!e.current){const I=await Aa.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm");e.current=await pi.createFromOptions(I,{baseOptions:{modelAssetPath:NC,delegate:"GPU"},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.58,minTrackingConfidence:.58,minHandPresenceConfidence:.55})}u(!0),d(!1),z()}catch(w){d(!1),g((w==null?void 0:w.name)==="NotAllowedError"?"Camera permission was blocked. Allow camera access in your browser settings.":"Could not start hand tracking. Check your webcam and internet connection, then try again."),F()}}function z(){var I;if(!t.current||!e.current)return;const w=t.current;if(w.readyState>=2&&w.currentTime!==r.current){const Z=e.current.detectForVideo(w,performance.now());if(r.current=w.currentTime,(I=Z.landmarks)!=null&&I.length){const Y=Z.landmarks[0],ue=Y[0],fe=[Y[8],Y[12],Y[16],Y[20]],ae=fe.reduce((N,ie)=>N+Math.hypot(ie.x-ue.x,ie.y-ue.y),0)/fe.length,le=Math.hypot(Y[4].x-Y[8].x,Y[4].y-Y[8].y)<.065,k=1-Y[9].x,te=Y[9].y,se=.34;o.current.x+=(k-o.current.x)*se,o.current.y+=(te-o.current.y)*se,v({detected:!0,x:o.current.x,y:o.current.y,open:ae>.34,pinch:le})}else v(Y=>({...Y,detected:!1}))}n.current=requestAnimationFrame(z)}function F(){var I;n.current&&cancelAnimationFrame(n.current);const w=(I=t.current)==null?void 0:I.srcObject;w==null||w.getTracks().forEach(Z=>Z.stop()),t.current&&(t.current.srcObject=null),u(!1),v({detected:!1,x:.5,y:.5,open:!1,pinch:!1})}Tt.useEffect(()=>()=>{var w,I,Z;n.current&&cancelAnimationFrame(n.current),(I=(w=t.current)==null?void 0:w.srcObject)==null||I.getTracks().forEach(Y=>Y.stop()),(Z=e.current)==null||Z.close()},[]);async function j(){var w,I,Z;document.fullscreenElement?await((Z=document.exitFullscreen)==null?void 0:Z.call(document)):await((I=(w=document.documentElement).requestFullscreen)==null?void 0:I.call(w))}const C=["Sphere","Galaxy","Heart","Wave","Star","Saturn","Butterfly","Flower","DNA","Tornado","Firework","Infinity","Text"];return Ee.jsxs("main",{className:"app-shell",children:[Ee.jsx("div",{className:"ambient ambient-one"}),Ee.jsx("div",{className:"ambient ambient-two"}),Ee.jsxs("header",{className:"topbar",children:[Ee.jsxs("a",{className:"brand",href:"#",children:[Ee.jsx("span",{className:"brand-mark",children:Ee.jsx(IC,{size:17})})," PARTICLEX",Ee.jsx("span",{className:"brand-muted",children:"STUDIO"})]}),Ee.jsxs("div",{className:"live-pill",children:[Ee.jsx("span",{className:l?"live-dot active":"live-dot"}),l?"HAND TRACKING LIVE":"CAMERA STANDBY"]}),Ee.jsx("button",{className:"icon-button",onClick:j,title:"Fullscreen",children:Ee.jsx(PC,{size:17})})]}),Ee.jsxs("section",{className:"hero",children:[Ee.jsxs("div",{className:"eyebrow",children:[Ee.jsx("span",{})," VIRAL HAND-TRACKING EXPERIENCE"]}),Ee.jsxs("h1",{children:["Your hands.",Ee.jsx("br",{}),Ee.jsx("span",{children:"Your universe."})]}),Ee.jsx("p",{className:"subtitle",children:"Move, pinch and play — watch light follow your every gesture."})]}),Ee.jsxs("section",{className:"workspace",children:[Ee.jsxs("div",{className:"visual-card",children:[Ee.jsxs("div",{className:"visual-top",children:[Ee.jsxs("div",{children:[Ee.jsx("span",{className:"tiny-label",children:"LIVE VISUALIZER"}),Ee.jsxs("div",{className:"visual-title",children:["Cosmic particle field ",Ee.jsx("span",{className:"status-dot"})]})]}),Ee.jsxs("div",{className:"particle-count",children:["6.2K ",Ee.jsx("span",{children:"GLOWING PARTICLES"})]})]}),Ee.jsx(FC,{hand:_,mode:S,color:y,cameraOn:l,text:R}),l&&_.detected&&Ee.jsx("div",{className:"tracking-reticle",style:{left:`${_.x*100}%`,top:`${_.y*100}%`},children:Ee.jsx("span",{})}),Ee.jsxs("div",{className:"visual-hint",children:[Ee.jsx(DC,{size:14})," ",_.detected?_.pinch?"PINCH · FOCUS":_.open?"OPEN PALM · PUSH OUT":"HAND DETECTED · PULL IN":"ENABLE WEBCAM TO CONTROL THE PARTICLES"]}),Ee.jsxs("div",{className:"visual-bottom",children:[Ee.jsx("div",{className:"mode-switch",children:C.map(w=>Ee.jsx("button",{onClick:()=>M(w),className:S===w?"mode active":"mode",children:w},w))}),Ee.jsx("div",{className:"color-picks",children:c2.map(w=>Ee.jsx("button",{"aria-label":`Set particle color ${w}`,onClick:()=>U(w),className:y===w?"swatch selected":"swatch",style:{"--swatch":w}},w))})]}),S==="Text"&&Ee.jsx("input",{className:"shape-text-input",value:R,maxLength:14,onChange:w=>x(w.target.value.toUpperCase()),"aria-label":"Particle text",placeholder:"Type your name"})]}),Ee.jsxs("aside",{className:"side-panel",children:[Ee.jsxs("div",{className:"panel-heading",children:[Ee.jsxs("div",{children:[Ee.jsx("span",{className:"tiny-label",children:"YOUR CAMERA"}),Ee.jsx("h2",{children:"Hand tracking"})]}),Ee.jsx("span",{className:"camera-icon",children:Ee.jsx(yp,{size:18})})]}),Ee.jsxs("div",{className:"camera-frame",children:[Ee.jsx("video",{ref:t,className:l&&D?"webcam visible":"webcam",autoPlay:!0,playsInline:!0,muted:!0}),!l&&Ee.jsxs("div",{className:"camera-placeholder",children:[Ee.jsx("div",{className:"camera-orbit",children:Ee.jsx(yp,{size:25})}),Ee.jsx("strong",{children:"Your camera preview"}),Ee.jsx("span",{children:"Camera stays off until you enable it."})]}),l&&!D&&Ee.jsxs("div",{className:"camera-hidden",children:[Ee.jsx(u2,{size:22}),Ee.jsx("span",{children:"Preview hidden"})]}),l&&Ee.jsxs("div",{className:"camera-tag",children:[Ee.jsx("span",{className:"live-dot active"})," LIVE"]})]}),Ee.jsxs("button",{className:l?"camera-button stop":"camera-button",onClick:l?F:G,disabled:f,children:[f?Ee.jsx("span",{className:"spinner"}):l?Ee.jsx(u2,{size:17}):Ee.jsx(yp,{size:17}),f?"LOADING HAND TRACKER…":l?"STOP CAMERA":"ENABLE WEBCAM"]}),p&&Ee.jsx("p",{className:"error-message",children:p}),l&&Ee.jsx("button",{className:"text-button",onClick:()=>b(w=>!w),children:D?"Hide camera preview":"Show camera preview"}),Ee.jsx("div",{className:"divider"}),Ee.jsxs("div",{className:"gesture-heading",children:[Ee.jsx(LC,{size:17}),Ee.jsx("span",{children:"GESTURE CONTROLS"})]}),Ee.jsxs("div",{className:"gesture-row",children:[Ee.jsx("span",{className:"gesture-symbol",children:"✋"}),Ee.jsxs("div",{children:[Ee.jsx("strong",{children:"Open palm"}),Ee.jsx("small",{children:"Send particles flying outward"})]}),Ee.jsx("span",{className:"gesture-state",children:_.detected&&_.open?"ACTIVE":"—"})]}),Ee.jsxs("div",{className:"gesture-row",children:[Ee.jsx("span",{className:"gesture-symbol",children:"✊"}),Ee.jsxs("div",{children:[Ee.jsx("strong",{children:"Close your hand"}),Ee.jsx("small",{children:"Pull particles toward your hand"})]}),Ee.jsx("span",{className:"gesture-state",children:_.detected&&!_.open?"ACTIVE":"—"})]}),Ee.jsxs("div",{className:"gesture-row",children:[Ee.jsx("span",{className:"gesture-symbol",children:"🤏"}),Ee.jsxs("div",{children:[Ee.jsx("strong",{children:"Pinch thumb + finger"}),Ee.jsx("small",{children:"Focus particles near your hand"})]}),Ee.jsx("span",{className:"gesture-state",children:_.detected&&_.pinch?"ACTIVE":"—"})]}),Ee.jsx("p",{className:"privacy-note",children:"🔒 Camera processing stays in your browser. Video is not uploaded by this website."})]})]}),Ee.jsxs("footer",{children:[Ee.jsx("span",{children:"BUILT FOR CURIOUS HANDS"}),Ee.jsx("span",{children:"MOVE · CREATE · PLAY"}),Ee.jsx("span",{children:"MEDIAPIPE + THREE.JS"})]})]})}US.createRoot(document.getElementById("root")).render(Ee.jsx(bS.StrictMode,{children:Ee.jsx(OC,{})}));
