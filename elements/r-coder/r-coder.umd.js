!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).RCoder={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var c=e.apply(t,r);function u(e){n(c,o,i,u,a,"next",e)}function a(e){n(c,o,i,u,a,"throw",e)}u(void 0)})}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(){var e=d(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#editor {\n  height: var(--r-coder-editor-height, 300px);\n  width: var(--r-coder-editor-width, 100%);\n}\n\n#button {\n  margin: var(--r-code-button-margin, 10px 0);\n}\n      "]);return p=function(){return e},e}function l(){var e=d(['\n\n<code-editor id="editor" language="r"></code-editor>\n<paper-button id="button" ?disabled="','" @click="','" raised>Process</paper-button>\n<div id="output"></div>']);return l=function(){return e},e}var h=function(e){function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=s(this,u(n).call(this))).endpoint="/service/r-service",setTimeout(function(){import("@polymer/paper-button/paper-button.js"),import("@lrnwebcomponents/code-editor/code-editor.js")},0),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(n,t.LitElement),i(n,[{key:"render",value:function(){return t.html(l(),!this.__connected,this.process)}},{key:"firstUpdated",value:function(){this.ping(),this.shadowRoot.getElementById("editor").editorValue=this.textContent.trim()}}],[{key:"styles",get:function(){return[t.css(p())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"R coder",description:"R coder interface for the r-service backend.",icon:"icons:android",color:"green",groups:["Coder"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"heymp",owner:"PSU"}},settings:{quick:[],configure:[{property:"endpoint",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({},f(u(n),"properties",this),{endpoint:{type:String},__connected:{type:Boolean}})}},{key:"tag",get:function(){return"r-coder"}}]),i(n,[{key:"ping",value:function(){var e=r(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.endpoint,{method:"GET"}).then(function(e){return e.status});case 2:t=e.sent,this.__connected=200===t;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"process",value:function(){var e=r(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.shadowRoot.getElementById("editor").value,e.next=3,fetch(this.endpoint,{method:"POST",body:t}).then(function(e){return e.text()});case 3:n=e.sent,this.shadowRoot.getElementById("output").innerText=n;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),n}();window.customElements.define(h.tag,h),e.RCoder=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=r-coder.umd.js.map
