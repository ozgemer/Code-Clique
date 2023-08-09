var masterClient;!function(){"use strict";var n,e,t,r,i,o,u={2962:function(n,e,t){var r={"./PageLayout":function(){return Promise.all([t.e(324),t.e(788),t.e(416),t.e(141),t.e(836),t.e(886),t.e(849)]).then((function(){return function(){return t(2849)}}))},"./authContext":function(){return Promise.all([t.e(416),t.e(637)]).then((function(){return function(){return t(8637)}}))}},i=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",i=t.S[r];if(i&&i!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return i},init:function(){return o}})},3341:function(n,e,t){var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!=typeof boardClient)return n();t.l("https://codeclique.s3.amazonaws.com/boardClient/build/static/remoteEntry.js",(function(t){if("undefined"!=typeof boardClient)return n();var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+i+": "+o+")",r.name="ScriptExternalLoadError",r.type=i,r.request=o,e(r)}),"boardClient")})).then((function(){return boardClient}))},5139:function(n,e,t){var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!=typeof calenderClient)return n();t.l("https://codeclique.s3.amazonaws.com/calenderClient/build/static/remoteEntry.js",(function(t){if("undefined"!=typeof calenderClient)return n();var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+i+": "+o+")",r.name="ScriptExternalLoadError",r.type=i,r.request=o,e(r)}),"calenderClient")})).then((function(){return calenderClient}))},6753:function(n,e,t){var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!=typeof dashboardClient)return n();t.l("https://codeclique.s3.amazonaws.com/dashboardClient/build/static/remoteEntry.js",(function(t){if("undefined"!=typeof dashboardClient)return n();var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+i+": "+o+")",r.name="ScriptExternalLoadError",r.type=i,r.request=o,e(r)}),"dashboardClient")})).then((function(){return dashboardClient}))},8974:function(n,e,t){var r=new Error;n.exports=new Promise((function(n,e){if(void 0!==masterClient)return n();t.l("https://codeclique.s3.amazonaws.com/masterClient/build/static/remoteEntry.js",(function(t){if(void 0!==masterClient)return n();var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+i+": "+o+")",r.name="ScriptExternalLoadError",r.type=i,r.request=o,e(r)}),"masterClient")})).then((function(){return masterClient}))},4796:function(n,e,t){var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!=typeof membersClient)return n();t.l("https://codeclique.s3.amazonaws.com/membersClient/build/static/remoteEntry.js",(function(t){if("undefined"!=typeof membersClient)return n();var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+i+": "+o+")",r.name="ScriptExternalLoadError",r.type=i,r.request=o,e(r)}),"membersClient")})).then((function(){return membersClient}))},4847:function(n,e,t){var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!=typeof settingsClient)return n();t.l("https://codeclique.s3.amazonaws.com/settingsClient/build/static/remoteEntry.js",(function(t){if("undefined"!=typeof settingsClient)return n();var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+i+": "+o+")",r.name="ScriptExternalLoadError",r.type=i,r.request=o,e(r)}),"settingsClient")})).then((function(){return settingsClient}))},719:function(n,e,t){var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!=typeof specsClient)return n();t.l("https://codeclique.s3.amazonaws.com/specsClient/build/static/remoteEntry.js",(function(t){if("undefined"!=typeof specsClient)return n();var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+i+": "+o+")",r.name="ScriptExternalLoadError",r.type=i,r.request=o,e(r)}),"specsClient")})).then((function(){return specsClient}))}},a={};function f(n){var e=a[n];if(void 0!==e)return e.exports;var t=a[n]={exports:{}};return u[n](t,t.exports,f),t.exports}f.m=u,f.c=a,f.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return f.d(e,{a:e}),e},e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},f.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var i=Object.create(null);f.r(i);var o={};n=n||[null,e({}),e([]),e(e)];for(var u=2&r&&t;"object"==typeof u&&!~n.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((function(n){o[n]=function(){return t[n]}}));return o.default=function(){return t},f.d(i,o),i},f.d=function(n,e){for(var t in e)f.o(e,t)&&!f.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},f.f={},f.e=function(n){return Promise.all(Object.keys(f.f).reduce((function(e,t){return f.f[t](n,e),e}),[]))},f.u=function(n){return n+".js"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),f.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t={},r="master-client:",f.l=function(n,e,i,o){if(t[n])t[n].push(e);else{var u,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var l=c[s];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+i){u=l;break}}u||(a=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,f.nc&&u.setAttribute("nonce",f.nc),u.setAttribute("data-webpack",r+i),u.src=n),t[n]=[e];var d=function(e,r){u.onerror=u.onload=null,clearTimeout(p);var i=t[n];if(delete t[n],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(n){return n(r)})),e)return e(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),a&&document.head.appendChild(u)}},f.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i={44:[3044],186:[6186],221:[8221],581:[2581],626:[1192],659:[4659],886:[1290]},o={1192:["default","./SpecsContent",719],1290:["default","./authContext",8974],2581:["default","./DashboardContent",6753],3044:["default","./SettingsContent",4847],4659:["default","./CalenderContent",5139],6186:["default","./BoardContent",3341],8221:["default","./MembersContent",4796]},f.f.remotes=function(n,e){f.o(i,n)&&i[n].forEach((function(n){var t=f.R;t||(t=[]);var r=o[n];if(!(t.indexOf(r)>=0)){if(t.push(r),r.p)return e.push(r.p);var i=function(e){e||(e=new Error("Container missing")),"string"==typeof e.message&&(e.message+='\nwhile loading "'+r[1]+'" from '+r[2]),f.m[n]=function(){throw e},r.p=0},u=function(n,t,o,u,a,f){try{var c=n(t,o);if(!c||!c.then)return a(c,u,f);var s=c.then((function(n){return a(n,u)}),i);if(!f)return s;e.push(r.p=s)}catch(n){i(n)}},a=function(n,e,i){return u(e.get,r[1],t,0,c,i)},c=function(e){r.p=1,f.m[n]=function(n){n.exports=e()}};u(f,r[2],0,0,(function(n,e,t){return n?u(f.I,r[0],0,n,a,t):i()}),1)}}))},function(){f.S={};var n={},e={};f.I=function(t,r){r||(r=[]);var i=e[t];if(i||(i=e[t]={}),!(r.indexOf(i)>=0)){if(r.push(i),n[t])return n[t];f.o(f.S,t)||(f.S[t]={});var o=f.S[t],u="master-client",a=function(n,e,t,r){var i=o[n]=o[n]||{},a=i[e];(!a||!a.loaded&&(!r!=!a.eager?r:u>a.from))&&(i[e]={get:t,from:u,eager:!!r})},c=function(n){var e=function(n){var e;e="Initialization of sharing external failed: "+n,"undefined"!=typeof console&&console.warn&&console.warn(e)};try{var i=f(n);if(!i)return;var o=function(n){return n&&n.init&&n.init(f.S[t],r)};if(i.then)return s.push(i.then(o,e));var u=o(i);if(u&&u.then)return s.push(u.catch(e))}catch(n){e(n)}},s=[];return"default"===t&&(a("@emotion/react","11.10.0",(function(){return Promise.all([f.e(898),f.e(416),f.e(190)]).then((function(){return function(){return f(1190)}}))})),a("@emotion/styled","11.9.3",(function(){return Promise.all([f.e(416),f.e(141),f.e(867)]).then((function(){return function(){return f(3867)}}))})),a("@mui/lab","5.0.0-alpha.99",(function(){return Promise.all([f.e(766),f.e(324),f.e(971),f.e(416),f.e(141),f.e(836)]).then((function(){return function(){return f(2971)}}))})),a("@mui/material","5.8.7",(function(){return Promise.all([f.e(766),f.e(324),f.e(898),f.e(788),f.e(657),f.e(416),f.e(141),f.e(836)]).then((function(){return function(){return f(4657)}}))})),a("axios","0.27.2",(function(){return f.e(669).then((function(){return function(){return f(9669)}}))})),a("react-dom","18.2.0",(function(){return Promise.all([f.e(935),f.e(416)]).then((function(){return function(){return f(3935)}}))})),a("react-router-dom","6.3.0",(function(){return Promise.all([f.e(68),f.e(416),f.e(462)]).then((function(){return function(){return f(6068)}}))})),a("react","18.2.0",(function(){return f.e(294).then((function(){return function(){return f(7294)}}))})),a("styled-components","5.3.5",(function(){return Promise.all([f.e(117),f.e(416),f.e(864)]).then((function(){return function(){return f(8117)}}))})),a("uuid","8.3.2",(function(){return f.e(614).then((function(){return function(){return f(1614)}}))})),a("validator","13.7.0",(function(){return f.e(966).then((function(){return function(){return f(8966)}}))})),c(8974),c(719),c(3341),c(4796),c(6753),c(5139),c(4847)),s.length?n[t]=Promise.all(s).then((function(){return n[t]=1})):n[t]=1}}}(),function(){var n;f.g.importScripts&&(n=f.g.location+"");var e=f.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=n}(),function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var i=e[r],o=(typeof i)[0];if(r>=t.length)return"u"==o;var u=t[r],a=(typeof u)[0];if(o!=a)return"o"==o&&"n"==a||"s"==a||"u"==o;if("o"!=o&&"u"!=o&&i!=u)return i<u;r++}},t=function(n){var e=n[0],r="";if(1===n.length)return"*";if(e+.5){r+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var i=1,o=1;o<n.length;o++)i--,r+="u"==(typeof(a=n[o]))[0]?"-":(i>0?".":"")+(i=2,a);return r}var u=[];for(o=1;o<n.length;o++){var a=n[o];u.push(0===a?"not("+f()+")":1===a?"("+f()+" || "+f()+")":2===a?u.pop()+" "+u.pop():t(a))}return f();function f(){return u.pop().replace(/^\((.+)\)$/,"$1")}},r=function(e,t){if(0 in e){t=n(t);var i=e[0],o=i<0;o&&(i=-i-1);for(var u=0,a=1,f=!0;;a++,u++){var c,s,l=a<e.length?(typeof e[a])[0]:"";if(u>=t.length||"o"==(s=(typeof(c=t[u]))[0]))return!f||("u"==l?a>i&&!o:""==l!=o);if("u"==s){if(!f||"u"!=l)return!1}else if(f)if(l==s)if(a<=i){if(c!=e[a])return!1}else{if(o?c>e[a]:c<e[a])return!1;c!=e[a]&&(f=!1)}else if("s"!=l&&"n"!=l){if(o||a<=i)return!1;f=!1,a--}else{if(a<=i||s<l!=o)return!1;f=!1}else"s"!=l&&"n"!=l&&(f=!1,a--)}}var d=[],p=d.pop.bind(d);for(u=1;u<e.length;u++){var m=e[u];d.push(1==m?p()|p():2==m?p()&p():m?r(m,t):!p())}return!!p()},i=function(n,i,u,a){var f=function(n,t){var r=n[t];return Object.keys(r).reduce((function(n,t){return!n||!r[n].loaded&&e(n,t)?t:n}),0)}(n,u);return r(a,f)||"undefined"!=typeof console&&console.warn&&console.warn(function(n,e,r,i){return"Unsatisfied version "+r+" from "+(r&&n[e][r].from)+" of shared singleton module "+e+" (required "+t(i)+")"}(n,u,f,a)),o(n[u][f])},o=function(n){return n.loaded=1,n.get()},u=function(n){return function(e,t,r,i){var o=f.I(e);return o&&o.then?o.then(n.bind(n,e,f.S[e],t,r,i)):n(e,f.S[e],t,r,i)}},a=u((function(n,e,t,r,o){return e&&f.o(e,t)?i(e,0,t,r):o()})),c=u((function(n,t,i,u,a){var c=t&&f.o(t,i)&&function(n,t,i){var o=n[t];return(t=Object.keys(o).reduce((function(n,t){return!r(i,t)||n&&!e(n,t)?n:t}),0))&&o[t]}(t,i,u);return c?o(c):a()})),s={},l={8416:function(){return a("default","react",[1,18,2,0],(function(){return f.e(294).then((function(){return function(){return f(7294)}}))}))},1141:function(){return c("default","@emotion/react",[1,11,10,0],(function(){return Promise.all([f.e(898),f.e(656)]).then((function(){return function(){return f(1190)}}))}))},1051:function(){return a("default","react-dom",[1,18,2,0],(function(){return f.e(935).then((function(){return function(){return f(3935)}}))}))},2884:function(){return c("default","@emotion/styled",[1,11,9,3],(function(){return f.e(103).then((function(){return function(){return f(3867)}}))}))},2231:function(){return c("default","uuid",[1,8,3,2],(function(){return f.e(614).then((function(){return function(){return f(1614)}}))}))},5049:function(){return c("default","@mui/material",[1,5,8,7],(function(){return Promise.all([f.e(766),f.e(898),f.e(657)]).then((function(){return function(){return f(4657)}}))}))},5159:function(){return c("default","react-router-dom",[1,6,3,0],(function(){return f.e(68).then((function(){return function(){return f(6068)}}))}))},5564:function(){return c("default","axios",[2,0,27,2],(function(){return f.e(669).then((function(){return function(){return f(9669)}}))}))}},d={141:[1141],416:[8416],836:[1051,2884],886:[2231,5049,5159,5564]};f.f.consumes=function(n,e){f.o(d,n)&&d[n].forEach((function(n){if(f.o(s,n))return e.push(s[n]);var t=function(e){s[n]=0,f.m[n]=function(t){delete f.c[n],t.exports=e()}},r=function(e){delete s[n],f.m[n]=function(t){throw delete f.c[n],e}};try{var i=l[n]();i.then?e.push(s[n]=i.then(t).catch(r)):t(i)}catch(n){r(n)}}))}}(),function(){var n={599:0};f.f.j=function(e,t){var r=f.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^((14|22|58)1|(18|41|62|83)6|44|659)$/.test(e))n[e]=0;else{var i=new Promise((function(t,i){r=n[e]=[t,i]}));t.push(r[2]=i);var o=f.p+f.u(e),u=new Error;f.l(o,(function(t){if(f.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,r[1](u)}}),"chunk-"+e,e)}};var e=function(e,t){var r,i,o=t[0],u=t[1],a=t[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(r in u)f.o(u,r)&&(f.m[r]=u[r]);a&&a(f)}for(e&&e(t);c<o.length;c++)i=o[c],f.o(n,i)&&n[i]&&n[i][0](),n[i]=0},t=self.webpackChunkmaster_client=self.webpackChunkmaster_client||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var c=f(2962);masterClient=c}();