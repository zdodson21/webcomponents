!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/hax-body/lib/hax-store.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/hax-body/lib/hax-store.js"],t):t((e=e||self).HAX={})}(this,function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&s(r,n.prototype),r}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return l(e,arguments,i(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),s(o,e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}var p=function(e){function n(){var e,t,o,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,(e=!(o=i(n).call(this))||"object"!=typeof o&&"function"!=typeof o?u(t):o).tag=n.tag,e.template=document.createElement("template"),e.attachShadow({mode:"open"}),r||e.render(),window.addEventListener("hax-store-ready",e.storeReady.bind(u(e))),window.addEventListener("hax-store-app-store-loaded",e.appStoreReady.bind(u(e))),import("@lrnwebcomponents/h-a-x/lib/h-a-x-dependencies.js"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,c(HTMLElement)),o(n,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: block;\n  font-size: var(--haxcms-base-styles-body-font-size, 16px);\n  font-family: var(--haxcms-base-styles-body-font-family, 'Noto Serif', serif);\n  line-height: var(--haxcms-base-styles-body-line-height, 1.8);\n  letter-spacing: var(--haxcms-base-styles-body-letter-spacing, .5px);\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nhax-body {\n  font-size: var(--haxcms-base-styles-body-font-size, 16px);\n  font-family: var(--haxcms-base-styles-body-font-family, 'Noto Serif', serif);\n  line-height: var(--haxcms-base-styles-body-line-height, 1.8);\n  letter-spacing: var(--haxcms-base-styles-body-letter-spacing, .5px);\n}\n\nh1 {\n  font-size: var(--hax-base-styles-h1-font-size, 2.5em);\n  line-height: var(--hax-base-styles-h1-line-height, 2.5em);\n}\n\nh2 {\n  font-size: var(--hax-base-styles-h2-font-size, 2em);\n}\n\nh3 {\n  font-size: var(--hax-base-styles-h3-font-size, 1.75em);\n}\n\nh4 {\n  font-size: var(--hax-base-styles-h4-font-size, 1.5em);\n}\n\nh5 {\n  font-size: var(--hax-base-styles-h5-font-size, 1.25em);  \n}\n\nh6 {\n  font-size: var(--hax-base-styles-h6-font-size, 1.25em);\n}\n\np {\n  min-height: var(--hax-base-styles-p-min-height, 43px);\n  font-size: var(--hax-base-styles-p-font-size, 24px);\n  line-height: var(--hax-base-styles-p-line-height, 1.8);\n  letter-spacing: var(--hax-base-styles-p-letter-spacing, .5px);\n}\n\na,\na:-webkit-any-link {\n  color: var(--hax-base-styles-a-color, #2196f3);\n  font-size: var(--hax-base-styles-a-font-size, 24px);\n  font-weight: var(--hax-base-styles-a-font-weight, normal);\n}\n\na:visited {\n  color: var(--hax-base-styles-a-color-visited, #2196f3);\n}\n\na:active,\na:focus,\na:hover {\n  color: var(--hax-base-styles-a-color-active, #2196f3);\n  font-weight: var(--hax-base-styles-a-font-weight-active, normal);\n}\n\nol,\nul\nol li,\nul li {\n  line-height: var(--hax-base-styles-list-line-height, 1.8);\n  font-size: var(--hax-base-styles-list-font-size, 24px);\n  max-width: var(--hax-base-styles-list-max-width, 28em);\n}\n\nul ul,\nul ol,\nol ul,\nol ol {\n  padding-bottom: unset;\n}\n\nul,\nol {\n  padding-left: var(--hax-base-styles-list-padding-left, 1em);\n  margin-left: var(--hax-base-styles-list-margin-left, 1em);\n}\n        </style>\n<hax-body>\n    <slot></slot>\n</hax-body>"}}],[{key:"properties",get:function(){return a({},h(i(n),"properties",this))}},{key:"tag",get:function(){return"h-a-x"}}]),o(n,[{key:"connectedCallback",value:function(){h(i(n.prototype),"connectedCallback",this)&&h(i(n.prototype),"connectedCallback",this).call(this),this.__HAXApplied||window.__HAXApplied||(window.__HAXApplied=this.__HAXApplied=this.applyHAX())}},{key:"storeReady",value:function(e){var n=this;e.detail&&setTimeout(function(){try{var e=a({},JSON.parse(n.getAttribute("app-store")));"object"===t(e)&&(window.HaxStore.instance.appStore=e)}catch(e){console.log(e)}"hide-panel-ops"===n.hidePanelOps&&(n.hidePanelOps=!0),window.HaxStore.instance.haxTray.hidePanelOps=n.hidePanelOps,window.HaxStore.instance.haxTray.offsetMargin=n.offsetMargin,window.HaxStore.instance.haxTray.elementAlign=n.elementAlign},0)}},{key:"appStoreReady",value:function(e){if(e.detail&&this.shadowRoot.querySelector("slot")){var n=this.shadowRoot.querySelector("slot").assignedNodes(),o="";for(var r in n)"undefined"!==t(n[r].outerHTML)&&(o+=n[r].outerHTML);window.HaxStore.instance.activeHaxBody.importContent(o)}}},{key:"render",value:function(){this.__rendered||(this.__rendered=!0,this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,this.shadowRoot.appendChild(this.template.content.cloneNode(!0)))}},{key:"applyHAX",value:function(){window.HaxStore.requestAvailability();var e=document.createElement("hax-tray");return e.hidePanelOps=this.hidePanelOps,e.elementAlign=this.elementAlign,document.body.appendChild(e),document.body.appendChild(document.createElement("hax-app-picker")),document.body.appendChild(document.createElement("hax-preferences-dialog")),document.body.appendChild(document.createElement("hax-export-dialog")),document.body.appendChild(document.createElement("hax-autoloader")),!0}},{key:"disconnectedCallback",value:function(){window.removeEventListener("hax-store-ready",this.storeReady.bind(this)),window.removeEventListener("hax-store-ready",this.appStoreReady.bind(this)),h(i(n.prototype),"disconnectedCallback",this)&&h(i(n.prototype),"disconnectedCallback",this).call(this)}},{key:"attributeChangedCallback",value:function(e,t,n){}},{key:"elementAlign",get:function(){return this.getAttribute("element-align")},set:function(e){this.__rendered&&(this.setAttribute("element-align",e),window.HaxStore.instance.haxTray.elementAlign=e)}},{key:"offsetMargin",get:function(){return this.getAttribute("offset-margin")},set:function(e){this.setAttribute("offset-margin",e),this.__rendered&&(window.HaxStore.instance.haxTray.offsetMargin=e)}},{key:"hidePanelOps",get:function(){return this.getAttribute("hide-panel-ops")},set:function(e){e&&(this.setAttribute("hide-panel-ops","hide-panel-ops"),this.__rendered&&(window.HaxStore.instance.haxTray.hidePanelOps=e))}},{key:"appStore",get:function(){return this.getAttribute("app-store")},set:function(e){console.log(e),this.setAttribute("app-store",e),this.__rendered&&(window.HaxStore.instance.appStore=a({},JSON.parse(this.getAttribute("app-store"))))}}],[{key:"observedAttributes",get:function(){return["element-align","offset-margin","app-store","hide-panel-ops"]}}]),n}();window.customElements.define("h-a-x",p),e.HAX=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=h-a-x.umd.js.map
