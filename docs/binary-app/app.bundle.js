/*! For license information please see app.bundle.js.LICENSE.txt */
(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[143],{74:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(n);const{cssManager:s}=t.__,{DOM_COMPONENT_INSTANCE_PROPERTY:i}=t.__.globals;function a(e){const{name:n}=e;return n?o.default(`${n}, [is=${n}]`).map((r=>{const o=r[i];if(!o)return;o.unmount(!0),s.remove(n);const a=t.component(e)(r,o.props);return a.update(o.state),a})):(console.warn("Anonymous components can not be reloaded"),[])}e.default=a,e.reload=a,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(69),n(562))},432:e=>{!function(t,n){const r="*",o=Object.defineProperties,s=Object.entries,i=(e,t)=>(n,r)=>(e.has(n)?e.get(n).add(r):e.set(n,(new Set).add(r)),t),a=(e,t)=>(n,o)=>(n!==r||o?((e,t,n,r)=>{if(r){const t=e.get(n);t&&(t.delete(r),0===t.size&&e.delete(n))}else e.delete(n)})(e,0,n,o):e.clear(),t),u=(e,t)=>(e,n)=>t.on(e,(function r(...o){t.off(e,r),n.apply(t,o)})),c=(e,t)=>(n,...o)=>{const s=e.get(n);return s&&s.forEach((e=>e.apply(t,o))),e.get(r)&&n!==r&&t.trigger(r,n,...o),t};e.exports=function(e){const t=new Map;return o(e=e||{},s({on:i,off:a,one:u,trigger:c}).reduce(((n,[r,o])=>(n[r]={value:o(t,e),enumerable:!1,writable:!1,configurable:!1},n)),{})),e}}("undefined"!=typeof window&&window)},651:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(853),o=n(790),s=n.n(o);const i={css:null,exports:{state:{bitlist:[]},onBeforeMount(e,t){const n=new r.Z;s().addStore(n),s().on("binary_changed",(e=>{console.log(e),this.update({bitlist:e})})),s().on("hex_forced_change",(e=>{this.input.value=e.toUpperCase(),s().trigger("hex_changed",this.input.value)}))},hexChanged(e){e.target.value=e.target.value.toUpperCase(),s().trigger("hex_changed",e.target.value)},toggle(e){console.log(e),s().trigger("bit_changed",e.item.pos)}},template:(e,t,n,r)=>e('<h3>Binary Calculator</h3><span>Enter hex:</span><br/><span>0x</span><input expr0="expr0" name="input"/><span expr1="expr1"></span><br/><div><div expr2="expr2" class="bit"></div></div>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:t.EVENT,name:"onkeyup",evaluate:e=>e.hexChanged}]},{type:n.EACH,getKey:null,condition:null,template:e(" ",[{expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:e=>[e.bit.value].join("")}]}]),redundantAttribute:"expr1",selector:"[expr1]",itemName:"bit",indexName:null,evaluate:e=>e.state.bitlist},{type:n.EACH,getKey:null,condition:null,template:e('<span expr3="expr3"> </span><input expr4="expr4" type="checkbox"/>',[{expressions:[{type:t.EVENT,name:"onclick",evaluate:e=>e.toggle}]},{redundantAttribute:"expr3",selector:"[expr3]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:e=>e.bit.pos}]},{redundantAttribute:"expr4",selector:"[expr4]",expressions:[{type:t.ATTRIBUTE,name:"checked",evaluate:e=>!!e.bit.value}]}]),redundantAttribute:"expr2",selector:"[expr2]",itemName:"bit",indexName:null,evaluate:e=>e.state.bitlist}]),name:"binary-app"};(()=>{{const t=n(74).default;e.hot.accept(),e.hot.data&&t(n(651).default)}})()},562:(e,t,n)=>{"use strict";function r(e,t){return n="string"==typeof e?(t||document).querySelectorAll(e):e,Array.isArray(n)?n:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(n))&&"number"==typeof n.length?Array.from(n):[n];var n}n.r(t),n.d(t,{default:()=>r})},783:(e,t,n)=>{"use strict";var r=n(618),o=Object.create(null),s="undefined"==typeof document,i=Array.prototype.forEach;function a(){}function u(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(l(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var n=e.cloneNode();n.isLoaded=!1,n.addEventListener("load",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.addEventListener("error",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)}}function c(){var e=document.querySelectorAll("link");i.call(e,(function(e){!0!==e.visited&&u(e)}))}function l(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,t){if(s)return console.log("no window.document found, will not HMR CSS"),a;var n,p,d=function(e){var t=o[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var n=document.getElementsByTagName("script"),s=n[n.length-1];s&&(t=s.src)}o[e]=t}return function(e){if(!t)return null;var n=t.split(/([^\\/]+)\.js$/),o=n&&n[1];return o&&e?e.split(",").map((function(e){var n=new RegExp("".concat(o,"\\.js$"),"g");return r(t.replace(n,"".concat(e.replace(/{fileName}/g,o),".css")))})):[t.replace(".js",".css")]}}(e);return n=function(){var e=d(t.filename),n=function(e){if(!e)return!1;var t=document.querySelectorAll("link"),n=!1;return i.call(t,(function(t){if(t.href){var o=function(e,t){var n;return e=r(e),t.some((function(r){e.indexOf(t)>-1&&(n=r)})),n}(t.href,e);l(o)&&!0!==t.visited&&o&&(u(t,o),n=!0)}})),n}(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void c();n?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),c())},50,p=0,function(){var e=this,t=arguments,r=function(){return n.apply(e,t)};clearTimeout(p),p=setTimeout(r,50)}}},618:e=>{"use strict";e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",n=e.replace(new RegExp(t,"i"),"").split("/"),r=n[0].toLowerCase().replace(/\.$/,"");return n[0]="",t+r+n.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},307:(e,t,n)=>{"use strict";var r=n(783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},69:(e,t,n)=>{"use strict";function r(e){return e.replace(/-(\w)/g,((e,t)=>t.toUpperCase()))}function o(e,t){e.firstChild&&(t.appendChild(e.firstChild),o(e,t))}function s(e){i(e.childNodes)}function i(e){Array.from(e).forEach(a)}n.r(t),n.d(t,{__:()=>nt,component:()=>Je,install:()=>Xe,mount:()=>Ge,pure:()=>Qe,register:()=>Ve,uninstall:()=>We,unmount:()=>Ze,unregister:()=>qe,version:()=>tt,withTypes:()=>et});const a=e=>e&&e.parentNode&&e.parentNode.removeChild(e),u=(e,t)=>t&&t.parentNode&&t.parentNode.insertBefore(e,t),c=new Map,l=Symbol("riot-component"),p=new Set,d="is",h="mount",f="update",m="unmount",g="shouldUpdate",b="onBeforeMount",v="onMounted",O="onBeforeUpdate",E="onUpdated",y="onBeforeUnmount",N="onUnmounted",x="props",T="state",_="slots",M="root",j=Symbol("pure"),A=Symbol("is_updating"),w=Symbol("parent"),S=Symbol("attributes"),C=Symbol("template");var P=Object.freeze({__proto__:null,COMPONENTS_IMPLEMENTATION_MAP:c,DOM_COMPONENT_INSTANCE_PROPERTY:l,PLUGINS_SET:p,IS_DIRECTIVE:d,VALUE_ATTRIBUTE:"value",MOUNT_METHOD_KEY:h,UPDATE_METHOD_KEY:f,UNMOUNT_METHOD_KEY:m,SHOULD_UPDATE_KEY:g,ON_BEFORE_MOUNT_KEY:b,ON_MOUNTED_KEY:v,ON_BEFORE_UPDATE_KEY:O,ON_UPDATED_KEY:E,ON_BEFORE_UNMOUNT_KEY:y,ON_UNMOUNTED_KEY:N,PROPS_KEY:x,STATE_KEY:T,SLOTS_KEY:_,ROOT_KEY:M,IS_PURE_SYMBOL:j,IS_COMPONENT_UPDATING:A,PARENT_KEY_SYMBOL:w,ATTRIBUTES_KEY_SYMBOL:S,TEMPLATE_KEY_SYMBOL:C}),U={EACH:0,IF:1,SIMPLE:2,TAG:3,SLOT:4},D={ATTRIBUTE:0,EVENT:1,TEXT:2,VALUE:3};const L=Symbol("head"),I=Symbol("tail");function k(e,t,n,r){return void 0===r&&(r={}),Object.defineProperty(e,t,Object.assign({value:n,enumerable:!1,writable:!1,configurable:!0},r)),e}function R(e,t,n){return Object.entries(t).forEach((t=>{let[r,o]=t;k(e,r,o,n)})),e}function B(e,t){return Object.entries(t).forEach((t=>{let[n,r]=t;e[n]||(e[n]=r)})),e}function Y(e,t){return typeof e===t}function K(e){const t=e.ownerSVGElement;return!!t||null===t}function $(e){return"template"===e.tagName.toLowerCase()}function H(e){return Y(e,"function")}function z(e){return!F(e)&&e.constructor===Object}function F(e){return null==e}const V=Symbol("unmount"),q={nodes:[],mount(e,t){return this.update(e,t)},update(e,t){const{placeholder:n,nodes:r,childrenMap:o}=this,s=e===V?null:this.evaluate(e),i=s?Array.from(s):[],{newChildrenMap:c,batches:l,futureNodes:p}=function(e,t,n,r){const{condition:o,template:s,childrenMap:i,itemName:a,getKey:u,indexName:c,root:l,isTemplateTag:p}=r,d=new Map,h=[],f=[];return e.forEach(((e,r)=>{const m=function(e,t){let{itemName:n,indexName:r,index:o,item:s}=t;return k(e,n,s),r&&k(e,r,o),e}(Object.create(t),{itemName:a,indexName:c,index:r,item:e}),g=u?u(m):r,b=i.get(g),v=[];if(function(e,t){return!!e&&!e(t)}(o,m))return;const O=!b,E=b?b.template:s.clone(),y=E.el||l.cloneNode(),N=p&&O?function(e){const t=e.dom.cloneNode(!0),{head:n,tail:r}=function(){const e=document.createTextNode(""),t=document.createTextNode("");return e[L]=!0,t[I]=!0,{head:e,tail:t}}();return{avoidDOMInjection:!0,fragment:t,head:n,tail:r,children:[n,...Array.from(t.childNodes),r]}}(E):E.meta;O?h.push((()=>E.mount(y,m,n,N))):h.push((()=>E.update(m,n))),p?v.push(...N.children):v.push(y),i.delete(g),f.push(...v),d.set(g,{nodes:v,template:E,context:m,index:r})})),{newChildrenMap:d,batches:h,futureNodes:f}}(i,e,t,this);return((e,t,n,r)=>{const o=t.length;let s=e.length,i=o,c=0,l=0,p=null;for(;c<s||l<i;)if(s===c){const e=i<o?l?n(t[l-1],-0).nextSibling:n(t[i-l],0):r;for(;l<i;)u(n(t[l++],1),e)}else if(i===l)for(;c<s;)p&&p.has(e[c])||a(n(e[c],-1)),c++;else if(e[c]===t[l])c++,l++;else if(e[s-1]===t[i-1])s--,i--;else if(e[c]===t[i-1]&&t[l]===e[s-1]){const r=n(e[--s],-1).nextSibling;u(n(t[l++],1),n(e[c++],-1).nextSibling),u(n(t[--i],1),r),e[s]=t[i]}else{if(!p){p=new Map;let e=l;for(;e<i;)p.set(t[e],e++)}if(p.has(e[c])){const r=p.get(e[c]);if(l<r&&r<i){let o=c,a=1;for(;++o<s&&o<i&&p.get(e[o])===r+a;)a++;if(a>r-l){const o=n(e[c],0);for(;l<r;)u(n(t[l++],1),o)}else d=n(t[l++],1),(h=n(e[c++],-1))&&h.parentNode&&h.parentNode.replaceChild(d,h)}else c++}else a(n(e[c++],-1))}var d,h})(r,p,function(e,t){return(n,r)=>{if(r<0){const n=e[e.length-1];if(n){const{template:r,nodes:o,context:s}=n;o.pop(),o.length||(e.pop(),r.unmount(s,t,null))}}return n}}(Array.from(o.values()),t),n),l.forEach((e=>e())),this.childrenMap=c,this.nodes=p,this},unmount(e,t){return this.update(V,t),this}},G={mount(e,t){return this.update(e,t)},update(e,t){const n=!!this.evaluate(e),r=!this.value&&n,o=this.value&&!n,s=()=>{const n=this.node.cloneNode();u(n,this.placeholder),this.template=this.template.clone(),this.template.mount(n,e,t)};switch(!0){case r:s();break;case o:this.unmount(e);break;default:n&&this.template.update(e,t)}return this.value=n,this},unmount(e,t){return this.template.unmount(e,t,!0),this}};function Z(e){throw new Error(e)}function X(e){const t=new Map,n=n=>(t.has(n)||t.set(n,e.call(this,n)))&&t.get(n);return n.cache=t,n}function W(e){return e.reduce(((e,t)=>{const{value:n,type:o}=t;switch(!0){case!t.name&&0===o:return Object.assign({},e,n);case 3===o:e.value=t.value;break;default:e[r(t.name)]=t.value}return e}),{})}const J="undefined"==typeof Element?{}:Element.prototype,Q=X((e=>J.hasOwnProperty(e)));const ee=/^on/,te={handleEvent(e){this[e.type](e)}},ne=new WeakMap;function re(e){return F(e)?"":e}const oe=(e,t)=>{const n=e.childNodes[t];if(n.nodeType===Node.COMMENT_NODE){const t=document.createTextNode("");return e.replaceChild(t,n),t}return n};var se={0:function e(t,n,r,o){let{name:s}=n;if(!s)return o&&function(e,t,n){const r=t?Object.keys(t):[];Object.keys(n).filter((e=>!r.includes(e))).forEach((t=>e.removeAttribute(t)))}(t,r,o),void(r&&function(t,n){Object.entries(n).forEach((n=>{let[r,o]=n;return e(t,{name:r},o)}))}(t,r));!Q(s)&&(function(e){return Y(e,"boolean")}(r)||z(r)||H(r))&&(t[s]=r),function(e){return!e&&0!==e}(r)?t.removeAttribute(s):function(e){return!0===e||["string","number"].includes(typeof e)}(r)&&t.setAttribute(s,function(e,t){return!0===t?e:t}(s,r))},1:function(e,t,n){let{name:r}=t;const o=r.replace(ee,""),s=ne.get(e)||(e=>{const t=Object.create(te);return ne.set(e,t),t})(e),[i,a]=(e=>Array.isArray(e)?e:[e,!1])(n),u=s[o],c=i&&!u;u&&!i&&e.removeEventListener(o,s),c&&e.addEventListener(o,s,a),s[o]=i},2:function(e,t,n){e.data=re(n)},3:function(e,t,n){e.value=re(n)}};const ie={mount(e){return this.value=this.evaluate(e),ae(this,this.value),this},update(e){const t=this.evaluate(e);return this.value!==t&&(ae(this,t),this.value=t),this},unmount(){return 1===this.type&&ae(this,null),this}};function ae(e,t){return se[e.type](e.node,e,t,e.value)}function ue(e,t){return Object.assign({},ie,t,{node:2===t.type?oe(e,t.childNodeIndex):e})}const ce=(e,t)=>e[w]||t,le={attributes:[],getTemplateScope(e,t){return function(e,t,n){if(!e||!e.length)return n;const r=e.map((e=>Object.assign({},e,{value:e.evaluate(t)})));return Object.assign(Object.create(n||null),W(r))}(this.attributes,e,t)},mount(e,t){const n=!!e.slots&&e.slots.find((e=>{let{id:t}=e;return t===this.name})),{parentNode:r}=this.node,o=ce(e,t);return this.template=n&&Oe(n.html,n.bindings).createDOM(r),this.template&&(s(this.node),this.template.mount(this.node,this.getTemplateScope(e,o),o),this.template.children=Array.from(this.node.childNodes)),pe(this.node),a(this.node),this},update(e,t){if(this.template){const n=ce(e,t);this.template.update(this.getTemplateScope(e,n),n)}return this},unmount(e,t,n){return this.template&&this.template.unmount(this.getTemplateScope(e,t),null,n),this}};function pe(e){const t=e&&e.firstChild;t&&(u(t,e),pe(e))}function de(e){return e.reduce(((e,t)=>{let{bindings:n}=t;return e.concat(n)}),[])}const he={mount(e){return this.update(e)},update(e,t){const n=this.evaluate(e);return n&&n===this.name?this.tag.update(e):(this.unmount(e,t,!0),this.name=n,this.tag=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=[]),e?e({slots:t,attributes:n}):Oe(function(e){return e.reduce(((e,t)=>e+t.html),"")}(t),[...de(t),{expressions:n.map((e=>Object.assign({type:0},e)))}])}(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,e)),this},unmount(e,t,n){return this.tag&&this.tag.unmount(n),this}};var fe={1:function(e,t){let{evaluate:n,template:r}=t;const o=document.createTextNode("");return u(o,e),a(e),Object.assign({},G,{node:e,evaluate:n,placeholder:o,template:r.createDOM(e)})},2:function(e,t){let{expressions:n}=t;return Object.assign({},(r=n.map((t=>ue(e,t))),["mount","update","unmount"].reduce(((e,t)=>Object.assign({},e,{[t]:e=>r.map((n=>n[t](e)))&&undefined})),{})));var r},0:function(e,t){let{evaluate:n,condition:r,itemName:o,indexName:s,getKey:i,template:c}=t;const l=document.createTextNode(""),p=e.cloneNode();return u(l,e),a(e),Object.assign({},q,{childrenMap:new Map,node:e,root:p,condition:r,evaluate:n,isTemplateTag:$(p),template:c.createDOM(e),getKey:i,indexName:s,itemName:o,placeholder:l})},3:function(e,t){let{evaluate:n,getComponent:r,slots:o,attributes:s}=t;return Object.assign({},he,{node:e,evaluate:n,slots:o,attributes:s,getComponent:r})},4:function(e,t){let{name:n,attributes:r}=t;return Object.assign({},le,{attributes:r,node:e,name:n})}};function me(e,t){return e.map((e=>2===e.type?Object.assign({},e,{childNodeIndex:e.childNodeIndex+t}):e))}function ge(e,t,n){const{selector:r,type:o,redundantAttribute:s,expressions:i}=t,a=r?e.querySelector(r):e;s&&a.removeAttribute(s);const u=i||[];return(fe[o]||fe[2])(a,Object.assign({},t,{expressions:n&&!r?me(u,n):u}))}function be(e,t){switch(!0){case K(e):o(t,e);break;case $(e):e.parentNode.replaceChild(t,e);break;default:e.appendChild(t)}}const ve=Object.freeze({createDOM(e){return this.dom=this.dom||function(e,t){return t&&("string"==typeof t?function(e,t){return K(e)?function(e,t){return t.ownerDocument.importNode((new window.DOMParser).parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${e}</svg>`,"application/xml").documentElement,!0)}(t,e):function(e,t){const n=$(t)?t:document.createElement("template");return n.innerHTML=e,n.content}(t,e)}(e,t):t)}(e,this.html)||document.createDocumentFragment(),this},mount(e,t,n,r){if(void 0===r&&(r={}),!e)throw new Error("Please provide DOM node to mount properly your template");this.el&&this.unmount(t);const{fragment:o,children:s,avoidDOMInjection:i}=r,{parentNode:a}=s?s[0]:e,u=$(e),c=u?function(e,t,n){const r=Array.from(e.childNodes);return Math.max(r.indexOf(t),r.indexOf(n.head)+1,0)}(a,e,r):null;this.createDOM(e);const l=o||this.dom.cloneNode(!0);return this.el=u?a:e,this.children=u?s||Array.from(l.childNodes):null,!i&&l&&be(e,l),this.bindings=this.bindingsData.map((e=>ge(this.el,e,c))),this.bindings.forEach((e=>e.mount(t,n))),this.meta=r,this},update(e,t){return this.bindings.forEach((n=>n.update(e,t))),this},unmount(e,t,n){void 0===n&&(n=!1);const r=this.el;if(!r)return this;switch(this.bindings.forEach((r=>r.unmount(e,t,n))),!0){case r[j]||null===n:break;case Array.isArray(this.children):i(this.children);break;case!n:s(r);break;case!!n:a(r)}return this.el=null,this},clone(){return Object.assign({},this,{meta:{},el:null})}});function Oe(e,t){return void 0===t&&(t=[]),Object.assign({},ve,{html:e,bindingsData:t})}var Ee=Object.freeze({__proto__:null,template:Oe,createBinding:ge,createExpression:ue,bindingTypes:U,expressionTypes:D});function ye(){return this}function Ne(e){return H(e)?e.prototype&&e.prototype.constructor?new e:e():e}function xe(e){return Array.isArray(e)?e:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&"number"==typeof e.length?Array.from(e):[e]}function Te(e,t){return xe("string"==typeof e?(t||document).querySelectorAll(e):e)}const _e=e=>1===e.length?e[0]:e;function Me(e,t,n){const r="object"==typeof t?t:{[t]:n},o=Object.keys(r);return xe(e).forEach((e=>{o.forEach((t=>e.setAttribute(t,r[t])))})),e}const je=new Map;var Ae,we={CSS_BY_NAME:je,add(e,t){return je.has(e)||(je.set(e,t),this.inject()),this},inject(){return(Ae||(Me(Ae=Te("style[riot]")[0]||document.createElement("style"),"type","text/css"),Ae.parentNode||document.head.appendChild(Ae),Ae)).innerHTML=[...je.values()].join("\n"),this},remove(e){return je.has(e)&&(je.delete(e),this.inject()),this}};function Se(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(r=[...n,...r]).length<e.length?Se(e,...r):e(...r)}}function Ce(e){return function(e,t,n){const r="string"==typeof t?[t]:t;return _e(xe(e).map((e=>_e(r.map((t=>e.getAttribute(t)))))))}(e,d)||e.tagName.toLowerCase()}const Pe=Object.freeze({$(e){return Te(e,this.root)[0]},$$(e){return Te(e,this.root)}}),Ue=Object.freeze({[h]:ye,[f]:ye,[m]:ye}),De=Object.freeze({[g]:ye,[b]:ye,[v]:ye,[O]:ye,[E]:ye,[y]:ye,[N]:ye}),Le=Object.assign({},Ue,{clone:ye,createDOM:ye}),Ie=X(Be);const ke=(e,t)=>e[l]=t;function Re(e){return[h,f,m].reduce(((t,n)=>(t[n]=e(n),t)),{})}function Be(e){const{css:t,template:n,exports:r,name:o}=e,s=n?function(e,t){const n=function(e){return void 0===e&&(e={}),Object.entries(Ne(e)).reduce(((e,t)=>{let[n,r]=t;var o;return e[(o=n,o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())]=Be(r),e}),{})}(t.exports?t.exports.components:{});return e(Oe,D,U,(e=>e===t.name?Ie(t):n[e]||c.get(e)))}(n,e):Le;return e=>{let{slots:i,attributes:a,props:u}=e;if(r&&r[j])return function(e,t){let{slots:n,attributes:r,props:o,css:s,template:i}=t;i&&Z("Pure components can not have html"),s&&Z("Pure components do not have css");const a=B(e({slots:n,attributes:r,props:o}),Ue);return Re((e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(e===h){const[e]=n;k(e,j,!0),ke(e,a)}return a[e](...n),a}))}(r,{slots:i,attributes:a,props:u,css:t,template:n});const c=Ne(r)||{},l=Ye({css:t,template:s,componentAPI:c,name:o})({slots:i,attributes:a,props:u});return{mount:(e,t,n)=>l.mount(e,n,t),update:(e,t)=>l.update(t,e),unmount:e=>l.unmount(e)}}}function Ye(e){let{css:t,template:n,componentAPI:r,name:o}=e;return t&&o&&we.add(o,t),Se($e)(R(B(r,Object.assign({},De,{[x]:{},[T]:{}})),Object.assign({[_]:null,[M]:null},Pe,{name:o,css:t,template:n})))}function Ke(e,t){return Object.assign({},e,Ne(t))}function $e(e,t){let{slots:n,attributes:o,props:s}=t;return i=function(e){return[...p].reduce(((e,t)=>t(e)||e),e)}(R(z(e)?Object.create(e):e,{mount(t,i,a){return void 0===i&&(i={}),k(t,j,!1),this[w]=a,this[S]=function(e,t){void 0===t&&(t=[]);const n=t.map((t=>ue(e,t))),r={};return Object.assign(r,Object.assign({expressions:n},Re((e=>t=>(n.forEach((n=>n[e](t))),r)))))}(t,o).mount(a),k(this,x,Object.freeze(Object.assign({},function(e,t){return void 0===t&&(t={}),Object.assign({},function(e){return Array.from(e.attributes).reduce(((e,t)=>(e[r(t.name)]=t.value,e)),{})}(e),Ne(t))}(t,s),W(this[S].expressions)))),this.state=Ke(this.state,i),this[C]=this.template.createDOM(t).clone(),ke(t,this),e.name&&function(e,t){Ce(e)!==t&&Me(e,d,t)}(t,e.name),k(this,M,t),k(this,_,n),this.onBeforeMount(this.props,this.state),this[C].mount(t,this,a),this.onMounted(this.props,this.state),this},update(e,t){void 0===e&&(e={}),t&&(this[w]=t,this[S].update(t));const n=W(this[S].expressions);if(!1!==this.shouldUpdate(n,this.props))return k(this,x,Object.freeze(Object.assign({},this.props,n))),this.state=Ke(this.state,e),this.onBeforeUpdate(this.props,this.state),this[A]||(this[A]=!0,this[C].update(this,this[w])),this.onUpdated(this.props,this.state),this[A]=!1,this},unmount(e){return this.onBeforeUnmount(this.props,this.state),this[S].unmount(),this[C].unmount(this,this[w],null===e?null:!e),this.onUnmounted(this.props,this.state),this}})),Object.keys(e).filter((t=>H(e[t]))).forEach((e=>{i[e]=i[e].bind(i)})),i;var i}const{DOM_COMPONENT_INSTANCE_PROPERTY:He,COMPONENTS_IMPLEMENTATION_MAP:ze,PLUGINS_SET:Fe}=P;function Ve(e,t){let{css:n,template:r,exports:o}=t;return ze.has(e)&&Z(`The component "${e}" was already registered`),ze.set(e,Be({name:e,css:n,template:r,exports:o})),ze}function qe(e){return ze.has(e)||Z(`The component "${e}" was never registered`),ze.delete(e),we.remove(e),ze}function Ge(e,t,n){return Te(e).map((e=>function(e,t,n){const r=n||Ce(e);return c.has(r)||Z(`The component named "${r}" was never registered`),c.get(r)({props:t}).mount(e)}(e,t,n)))}function Ze(e,t){return Te(e).map((e=>(e[He]&&e[He].unmount(t),e)))}function Xe(e){return H(e)||Z("Plugins must be of type function"),Fe.has(e)&&Z("This plugin was already installed"),Fe.add(e),Fe}function We(e){return Fe.has(e)||Z("This plugin was never installed"),Fe.delete(e),Fe}function Je(e){return function(t,n,r){let{slots:o,attributes:s,parentScope:i}=void 0===r?{}:r;return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>function(){return e(t(...arguments))}))}((e=>e.mount(t,i)),(e=>e({props:n,slots:o,attributes:s})),Be)(e)}}function Qe(e){return H(e)||Z('riot.pure accepts only arguments of type "function"'),e[j]=!0,e}const et=e=>e,tt="v6.1.2",nt={cssManager:we,DOMBindings:Ee,createComponent:Be,defineComponent:Ye,globals:P}},790:e=>{var t={_stores:[],addStore:function(e){this._stores.push(e)},reset:function(){this._stores=[]}};["on","one","off","trigger"].forEach((function(e){t[e]=function(){var t=[].slice.call(arguments);this._stores.forEach((function(n){n[e].apply(n,t)}))}})),e.exports=t},191:(e,t,n)=>{var r={"./binary-app/binary-app.riot":651};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=191},471:(e,t,n)=>{"use strict";n(307),n(74);var r=n(69);const o=n(191);n(853),o.keys().map((e=>{const t=((e,t="")=>e.split("/").reverse()[0].replace(t,""))(e,".riot"),n=o(e);return(0,r.register)(t,n.default||n),{name:t,component:n}})),(0,r.mount)("[data-riot-component]")},853:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(432),o=n.n(r);const s=function(){o()(this);const e=this;e.hex="",e.max=7,e.bitlist=[],e.convert=(e,t,n)=>parseInt(e,t).toString(n),e.on("hex_changed",(t=>{e.hex=t;const n=parseInt(t,16);e.bitlist=[];for(let t=0;t<=e.max;t++)e.bitlist.push({pos:e.max-t,value:(1<<e.max-t&n)>0?1:0});e.trigger("binary_changed",e.bitlist)})),e.on("bit_changed",(t=>{const n=1<<t,r=parseInt(e.hex,16)^n;e.trigger("hex_forced_change",e.convert(r,10,16))}))}}},e=>{e(e.s=471)}]);
//# sourceMappingURL=app.bundle.js.map