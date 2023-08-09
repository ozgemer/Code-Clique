/*! For license information please see 637.js.LICENSE.txt */
"use strict";(self.webpackChunkmaster_client=self.webpackChunkmaster_client||[]).push([[637],{8637:function(e,t,r){r.r(t),r.d(t,{AuthContext:function(){return a},AuthProvider:function(){return l},useAuth:function(){return i}});var n=r(8416),o=r(5893);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=(0,n.createContext)();function l(e){var t,r,l=e.children,i=a.Provider,c=localStorage.getItem("token"),s=localStorage.getItem("userInfo"),f=localStorage.getItem("expiresAt"),p=(t=(0,n.useState)({token:c,expiresAt:f,userInfo:s?JSON.parse(s):{}}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=p[0],y=p[1];return(0,o.jsx)(i,{value:{authState:m,setAuthInfo:function(e){return function(e){var t=e.token,r=e.expiresAt,n=e.userInfo;localStorage.setItem("token",t),localStorage.setItem("expiresAt",r),localStorage.setItem("userInfo",JSON.stringify(n)),y({token:t,expiresAt:r,userInfo:n})}(e)},isAuthicated:function(){return!(!m.token||!m.expiresAt)&&m.expiresAt>(new Date).getTime()/1e3},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("expiresAt"),localStorage.removeItem("userInfo"),y({token:null,expiresAt:null,userInfo:{}})}},children:l})}var i=function(){return(0,n.useContext)(a)}},5251:function(e,t,r){var n=r(8416),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,u={},c=null,s=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:s,props:u,_owner:l.current}}t.Fragment=u,t.jsx=c,t.jsxs=c},5893:function(e,t,r){e.exports=r(5251)}}]);