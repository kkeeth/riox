(()=>{"use strict";var e,r,n,t,o,i,d,a,c={},l={};function u(e){var r=l[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=l[e]={id:e,exports:{}};try{var t={id:e,module:n,factory:c[e],require:u};u.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}u.m=c,u.c=l,u.i=[],e=[],u.O=(r,n,t,o)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,t,o]=e[l],d=!0,a=0;a<n.length;a++)(!1&o||i>=o)&&Object.keys(u.O).every((e=>u.O[e](n[a])))?n.splice(a--,1):(d=!1,o<i&&(i=o));if(d){e.splice(l--,1);var c=t();void 0!==c&&(r=c)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,t,o]},u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},u.d=(e,r)=>{for(var n in r)u.o(r,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},u.hu=e=>e+"."+u.h()+".hot-update.js",u.miniCssF=e=>{},u.hmrF=()=>"runtime."+u.h()+".hot-update.json",u.h=()=>"ac69c28319ff7b67d0d1",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="demo:",u.l=(e,t,o,i)=>{if(r[e])r[e].push(t);else{var d,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){d=s;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.setAttribute("data-webpack",n+o),d.src=e),r[e]=[t];var f=(n,t)=>{d.onerror=d.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),a&&document.head.appendChild(d)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t={},o=u.c,i=[],d=[],a="idle",c=0,l=[];function s(e){a=e;for(var r=[],n=0;n<d.length;n++)r[n]=d[n].call(null,e);return Promise.all(r)}function f(){0==--c&&s("ready").then((function(){if(0===c){var e=l;l=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==a)throw new Error("check() is only allowed in idle status");return s("check").then(u.hmrM).then((function(n){return n?s("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(u.hmrC).reduce((function(e,o){return u.hmrC[o](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):s("ready").then((function(){return t}))},0===c?r():new Promise((function(e){l.push((function(){e(r())}))}));var r}))})):s(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==a?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+a+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return s("abort").then((function(){throw o[0]}));var i=s("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var d,a=s("apply"),c=function(e){d||(d=e)},l=[];return t.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var n=0;n<r.length;n++)l.push(r[n])}})),Promise.all([i,a]).then((function(){return d?s("fail").then((function(){throw d})):n?v(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):s("idle").then((function(){return l}))}))}function m(){if(n)return r||(r=[]),Object.keys(u.hmrI).forEach((function(e){n.forEach((function(n){u.hmrI[e](n,r)}))})),n=void 0,!0}u.hmrD=t,u.i.push((function(l){var v,m,y,g,b=l.module,E=function(r,n){var t=o[n];if(!t)return r;var d=function(d){if(t.hot.active){if(o[d]){var a=o[d].parents;-1===a.indexOf(n)&&a.push(n)}else i=[n],e=d;-1===t.children.indexOf(d)&&t.children.push(d)}else console.warn("[HMR] unexpected require("+d+") from disposed module "+n),i=[];return r(d)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(d,u,l(u));return d.e=function(e){return function(e){switch(a){case"ready":s("prepare");case"prepare":return c++,e.then(f,f),e;default:return e}}(r.e(e))},d}(l.require,l.id);b.hot=(v=l.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){i=m.parents.slice(),e=y?void 0:v,u(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,a){case"idle":r=[],Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](v,r)})),s("ready");break;case"ready":Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return a;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:t[v]},e=void 0,g),b.parents=i,b.children=[],i=[],l.require=E})),u.hmrC={},u.hmrI={}})(),(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var r=u.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),t=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var d=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=d,c.request=a,o.parentNode.removeChild(o),t(c)}},o.href=r,document.head.appendChild(o),o},o=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(d=n[t]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===r))return d}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var d;if((o=(d=i[t]).getAttribute("data-href"))===e||o===r)return d}},i=[],d=[],a=e=>({dispose:()=>{for(var e=0;e<i.length;e++){var r=i[e];r.parentNode&&r.parentNode.removeChild(r)}i.length=0},apply:()=>{for(var e=0;e<d.length;e++)d[e].rel="stylesheet";d.length=0}}),u.hmrC.miniCss=(e,r,n,c,l,s)=>{l.push(a),e.forEach((e=>{var r=u.miniCssF(e),n=u.p+r,a=o(r,n);a&&c.push(new Promise(((r,o)=>{var c=t(e,n,(()=>{c.as="style",c.rel="preload",r()}),o);i.push(a),d.push(c)})))}))},(()=>{var e,r,n,t,o,i=u.hmrS_jsonp=u.hmrS_jsonp||{666:0},d={};function a(r,n){return e=n,new Promise(((e,n)=>{d[r]=e;var t=u.p+u.hu(r),o=new Error;u.l(t,(e=>{if(d[r]){d[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function c(e){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,d=o.chain,c=u.c[i];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var l=0;l<c.parents.length;l++){var s=c.parents[l],f=u.c[s];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};-1===r.indexOf(s)&&(f.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),a(n[s],[i])):(delete n[s],r.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}u.f&&delete u.f.jsonpHmr,r=void 0;var c={},l=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(u.o(n,p)){var h,v=n[p],m=!1,y=!1,g=!1,b="";switch((h=v?d(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in s[p]=v,a(l,h.outdatedModules),h.outdatedDependencies)u.o(h.outdatedDependencies,p)&&(c[p]||(c[p]=[]),a(c[p],h.outdatedDependencies[p]));g&&(a(l,[h.moduleId]),s[p]=f)}n=void 0;for(var E,_=[],w=0;w<l.length;w++){var I=l[w],k=u.c[I];k&&(k.hot._selfAccepted||k.hot._main)&&s[I]!==f&&!k.hot._selfInvalidated&&_.push({module:I,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,n=l.slice();n.length>0;){var o=n.pop(),d=u.c[o];if(d){var a={},s=d.hot._disposeHandlers;for(w=0;w<s.length;w++)s[w].call(null,a);for(u.hmrD[o]=a,d.hot.active=!1,delete u.c[o],delete c[o],w=0;w<d.children.length;w++){var f=u.c[d.children[w]];f&&(e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1)}}}for(var p in c)if(u.o(c,p)&&(d=u.c[p]))for(E=c[p],w=0;w<E.length;w++)r=E[w],(e=d.children.indexOf(r))>=0&&d.children.splice(e,1)},apply:function(r){for(var n in s)u.o(s,n)&&(u.m[n]=s[n]);for(var t=0;t<o.length;t++)o[t](u);for(var i in c)if(u.o(c,i)){var d=u.c[i];if(d){E=c[i];for(var a=[],f=[],p=[],h=0;h<E.length;h++){var v=E[h],m=d.hot._acceptedDependencies[v],y=d.hot._acceptedErrorHandlers[v];if(m){if(-1!==a.indexOf(m))continue;a.push(m),f.push(y),p.push(v)}}for(var g=0;g<a.length;g++)try{a[g].call(null,E)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:i,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<_.length;b++){var w=_[b],I=w.module;try{w.require(I)}catch(n){if("function"==typeof w.errorHandler)try{w.errorHandler(n,{moduleId:I,module:u.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return l}}}self.webpackHotUpdatedemo=(r,t,i)=>{for(var a in t)u.o(t,a)&&(n[a]=t[a],e&&e.push(a));i&&o.push(i),d[r]&&(d[r](),d[r]=void 0)},u.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(c)),u.o(n,e)||(n[e]=u.m[e])},u.hmrC.jsonp=function(e,d,l,s,f,p){f.push(c),r={},t=d,n=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){u.o(i,e)&&void 0!==i[e]?(s.push(a(e,p)),r[e]=!0):r[e]=!1})),u.f&&(u.f.jsonpHmr=function(e,n){r&&u.o(r,e)&&!r[e]&&(n.push(a(e)),r[e]=!0)})},u.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(u.p+u.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},u.O.j=e=>0===i[e];var l=(e,r)=>{var n,t,[o,d,a]=r,c=0;if(o.some((e=>0!==i[e]))){for(n in d)u.o(d,n)&&(u.m[n]=d[n]);if(a)var l=a(u)}for(e&&e(r);c<o.length;c++)t=o[c],u.o(i,t)&&i[t]&&i[t][0](),i[t]=0;return u.O(l)},s=self.webpackChunkdemo=self.webpackChunkdemo||[];s.forEach(l.bind(null,0)),s.push=l.bind(null,s.push.bind(s))})()})();
//# sourceMappingURL=runtime.bundle.js.map