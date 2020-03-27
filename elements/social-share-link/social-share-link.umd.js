!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@polymer/iron-icon/iron-icon.js"),require("@lrnwebcomponents/social-media-icons/social-media-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@polymer/iron-icon/iron-icon.js","@lrnwebcomponents/social-media-icons/social-media-icons.js"],n):n((e=e||self).SocialShareLink={},e.litElement_js)}(this,function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,n){return(a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e,n,t){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=i(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(){var e=c(["\n:host {\n  display: inline;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host a {\n  display: inline-flex;\n  align-items: center;\n  color: var(--social-share-link-color, inherit);\n  transition: all 0.5s;\n  margin: 5px;\n  padding: var(--social-share-button-padding, 0px);\n  border-radius: var(--social-share-button-border-radius, 0px);\n}\n\n:host a:visited {\n  color: var(--social-share-visited-link-color, inherit);\n}\n\n:host a:focus,\n:host a:hover {\n  color: var(--social-share-link-hover-color, inherit);\n}\n\n:host([disabled]) a,\n:host([disabled]) a:focus,\n:host([disabled]) a:hover,\n:host([disabled]) a:visited {\n  color: var(--social-share-disabled-link-color,#ddd);\n}\n\n:host([button-style]) a {\n  padding: var(--social-share-button-padding, 5px 10px);\n  border-radius: var(--social-share-button-border-radius, 3px);\n  color: var(--social-share-button-color, white);\n  background-color: var(--social-share-button-bg, #0066ff);\n  text-decoration: none;\n  transition: all 0.5s;\n}\n\n:host([button-style]) a:visited {\n  color: var(--social-share-visited-button-color, white);\n}\n\n:host([button-style]) a:focus,\n:host([button-style]) a:hover {\n  color: var(--social-share-button-hover-color, white);\n  background-color: var(--social-share-button-hover-bg, #0044ee);\n}\n\n:host([button-style][disabled]) a,\n:host([button-style][disabled]) a:focus,\n:host([button-style][disabled]) a:hover,\n:host([button-style][disabled]) a:visited {\n  color: var(--social-share-disabled-button-color,#ddd);\n  background-color: var(--social-share-disabled-button-bg, #666);\n}\n\n:host iron-icon {\n  margin-right: 5px;\n}\n\n:host a.text-only iron-icon {\n  display: none;\n}\n\n:host a.icon-only .linktext {\n  position: absolute;\n  left: -999999px;\n  top: 0;\n  height: 0;\n  width: 0;\n  overflow: hidden;\n}\n\n:host a.icon-only iron-icon {\n  margin-right: 0;\n}\n      "]);return u=function(){return e},e}function d(){var e=c(['\n\n<a href="','" ?disabled="','" class="','" rel="noopener noreferrer" target="_blank">\n  <iron-icon aria-hidden="true" icon="','" ?hidden="','"></iron-icon>\n  <span class="linktext">',"</span>\n</a>"]);return d=function(){return e},e}var h=function(e){function t(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),(e=l(this,i(t).call(this))).buttonStyle=!1,e.image="",e.message="",e.mode=null,e.text=null,e.type="Twitter",e.url=null,e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&a(e,n)}(t,n.LitElement),o(t,[{key:"render",value:function(){return n.html(d(),this.__href,!this.__href,this.mode,this.__icon,!this.__showIcon,this.__linkText)}}],[{key:"styles",get:function(){return[n.css(u())]}},{key:"properties",get:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}({},s(i(t),"properties",this),{buttonStyle:{type:Boolean,reflect:!0,attribute:"button-style"},image:{type:String},message:{type:String},mode:{type:String},text:{type:String},type:{type:String},url:{type:String},__href:{type:String},__icon:{type:String},__linkText:{type:String},__showIcon:{type:Boolean}})}},{key:"tag",get:function(){return"social-share-link"}}]),o(t,[{key:"updated",value:function(e){var n=this;e.forEach(function(e,t){"type"==t&&(n.__icon=n._getIcon(n.type)),["text","type"].includes(t)&&(n.__linkText=n._getLinkText(n.text,n.type)),["image","message","type","url"].includes(t)&&(n.__href=n._getHref(n.image,n.message,n.type,n.url)),"mode"==t&&(n.__showIcon="icon-only"==n.mode)})}},{key:"_getHref",value:function(e,n,t,o){var r;switch(t){case"Facebook":r=null!==o&&"https://www.facebook.com/sharer/sharer.php?u="+o;break;case"LinkedIn":r=null!==(r=null!==o?"&url="+o:"")&&"https://www.linkedin.com/shareArticle?mini=true"+r;break;case"Pinterest":r=null!==(r=(null!==o?"&url="+o:"")+(null!==n?"&description="+n:"")+(null!==e?"&media="+e:""))&&"http://pinterest.com/pin/create/button/?"+r.substring(1);break;case"Twitter":r=null!==(r=null!==n?"text="+n+" "+o:o)&&"http://twitter.com/intent/tweet?"+r}return encodeURI(r)}},{key:"_getLinkText",value:function(e,n){return null!==e?e:"Share via "+n}},{key:"_getIcon",value:function(e){return"social-media:"+e.toLowerCase()}}]),t}();window.customElements.define(h.tag,h),e.SocialShareLink=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=social-share-link.umd.js.map
