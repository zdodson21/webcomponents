!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("prism-es6/prism.js"),require("marked/lib/marked.esm.js"),require("lit"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","prism-es6/prism.js","marked/lib/marked.esm.js","lit","@lrnwebcomponents/simple-icon/lib/simple-icon-lite","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).GithubPreview={},e.Prism,e.Marked,e.lit,null,null,e.IntersectionObserverMixin_js)}(this,(function(e,n,t,r,i,o,a){"use strict";function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=c(n),l=c(t);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){v(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t,r,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){d(o,r,i,a,c,"next",e)}function c(e){d(o,r,i,a,c,"throw",e)}a(void 0)}))}}function f(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n,t){return n&&g(e.prototype,n),t&&g(e,t),e}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,n){return(w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function k(e,n,t){return(k=x()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(e,r));return t&&w(i,t.prototype),i}).apply(null,arguments)}function _(e){var n="function"==typeof Map?new Map:void 0;return(_=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return k(e,arguments,y(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),w(r,e)})(e)}function O(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function j(e){var n=x();return function(){var t,r=y(e);if(n){var i=y(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return O(this,t)}}function S(e,n,t){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=y(e)););return e}(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function M(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function T(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?P(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}self.Prism=s.default;var R,E,A,C,z=function(e){m(a,e);var n,t,r,i,o=j(a);function a(){var e;return f(this,a),(e=o.call(this)).__value="",e}return b(a,[{key:"attributeChangedCallback",value:function(e,n,t){n!==t&&(this[e]=t)}},{key:"src",get:function(){return this.getAttribute("src")},set:function(e){this.setAttribute("src",e),this.setSrc(e)}},{key:"value",get:function(){return this.__value},set:function(e){this.__value=e,this.setValue()}},{key:"connectedCallback",value:(i=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.style.display="block",e.next=3,this.renderSlotMD();case 3:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"renderSlotMD",value:(r=h(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=this.getElementsByTagName("script")[0])?"wc-content"===n.getAttribute("type")&&(t=(t=a.dedentText(n.innerHTML)).replace(/&lt;(\/?script)(.*?)&gt;/g,"<$1$2>"),this.value=t):this.textContent&&(this.__value=this.textContent,this.setValue());case 2:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"setSrc",value:(t=h(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSrc(n);case 2:this.__value=e.sent,this.setValue();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"fetchSrc",value:(n=h(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.abrupt("return",t.text());case 4:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"setValue",value:function(){var e=this.__value;e=a.prepare(e),e=a.toHtml(e),this.innerHTML=e,this.hasAttribute("highlight")&&a.highlight(this)}}],[{key:"observedAttributes",get:function(){return["src"]}},{key:"prepare",value:function(e){return e.split("\n").map((function(e){return(e=e.replace("&lt;","<")).replace("&gt;",">")})).join("\n")}},{key:"toHtml",value:function(e){return l.default(e)}},{key:"highlight",value:function(e){s.default.highlightAllUnder(e)}},{key:"dedentText",value:function(e){var n=e.split("\n");""===n[0]&&n.splice(0,1);for(var t=n[0],r=0,i="\t"===t[0]?"\t":" ";t[r]===i;)r+=1;var o,a=[],c=T(n);try{for(c.s();!(o=c.n()).done;){for(var s=o.value,l=0;l<r&&s[0]===i;l++)s=s.substring(1);a.push(s)}}catch(e){c.e(e)}finally{c.f()}return""===a[a.length-1]&&a.splice(a.length-1,1),a.join("\n")}}]),a}(_(HTMLElement));customElements.define("wc-markdown",z);var L=function(e){m(t,e);var n=j(t);function t(){var e;return f(this,t),(e=n.call(this)).url="https://github.com",e.apiUrl="https://api.github.com",e.rawUrl="https://raw.githubusercontent.com",e.extended=!1,e.readMe="README.md",e.branch="master",e.viewMoreText="View More",e.notFoundText="Asset not found",e.headers={cache:"force-cache"},e}return b(t,[{key:"haxAppDetails",get:function(){return{details:{title:"Github",icon:"mdi-social:github-circle",color:"grey",description:"Preview a github repository.",status:"available",tags:["developer","code","collaboration"]},connection:{protocol:"https",url:"api.github.com",data:{format:"json",origin:"*"},operations:{browse:{method:"GET",endPoint:"search/repositories",pagination:{style:"offset"},search:{q:{title:"Search",type:"string"}},data:{},resultMap:{image:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",defaultGizmoType:"github",items:"items",preview:{title:"name",details:"description",id:"id"},gizmo:{id:"id",repo:"name",org:"owner.login"}}}}}}}},{key:"render",value:function(){return this.__assetAvailable&&this.elementVisible?this.extended?r.html(R||(R=M(['\n            <div class="container">\n              <div class="header-container">\n                <simple-icon-lite icon="book"></simple-icon-lite>\n                <div>\n                  <a\n                    href="',"/",'"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    @click="','"\n                  >\n                    ','\n                  </a>\n                  /\n                  <a\n                    href="',"/","/",'"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    @click="','"\n                  >\n                    ',"\n                  </a>\n                </div>\n              </div>\n              <hr />\n              <div>",'</div>\n              <hr />\n              <div class="readme-container">\n                <wc-markdown>\n                  <script type="wc-content">\n                    ','\n                  <\/script>\n                </wc-markdown>\n              </div>\n              <div class="readme-btn-container">\n                <button @click=',' class="readme-btn">\n                  ','\n                </button>\n              </div>\n              <div class="stats-container">\n                <span\n                  class="lang-circle"\n                  part="github-preview-lang-circle"\n                ></span>\n                <div class="stats-text">','</div>\n                <simple-icon-lite icon="star"></simple-icon-lite>\n                <div class="stats-text">','</div>\n                <simple-icon-lite icon="social:share"></simple-icon-lite>\n                <div class="stats-text">',"</div>\n              </div>\n            </div>\n          "])),this.url,this.org,this._clickLink,this.org,this.url,this.org,this.repo,this._clickLink,this.repo,this.__description,this.__readmeText,this.readmeViewMoreHandler,this.viewMoreText,this.repoLang,this.__stars,this.__forks):r.html(E||(E=M(['\n            <a\n              href="',"/","/",'"\n              target="_blank"\n              rel="noopener noreferrer"\n              @click="','"\n            >\n              <div class="container">\n                <div class="header-container">\n                  <simple-icon-lite icon="book"></simple-icon-lite>\n                  <div>','</div>\n                </div>\n\n                <div class="description">','</div>\n\n                <div class="stats-container">\n                  <span class="lang-circle"></span>\n                  <div class="stats-text">','</div>\n                  <simple-icon-lite icon="star"></simple-icon-lite>\n                  <div class="stats-text">','</div>\n                  <simple-icon-lite icon="social:share"></simple-icon-lite>\n                  <div class="stats-text">',"</div>\n                </div>\n              </div>\n            </a>\n          "])),this.url,this.org,this.repo,this._clickLink,this.repo,this.__description,this.repoLang,this.__stars,this.__forks):r.html(A||(A=M(['\n          <div class="container">\n            <h1>',"</h1>\n          </div>\n        "])),this.notFoundText)}},{key:"fetchGithubData",value:function(e,n,t,r,i,o,a,c){var s=this;c&&fetch("".concat(i,"/").concat(n,"/").concat(e,"/").concat(r,"/").concat(a),t).then((function(e){if(e.ok)return e.text()})).then((function(e){s.__readmeText!==e&&(s.__readmeText=e,s.wcmarkdown&&(s.wcmarkdown.value=s.__readmeText))})).catch((function(e){console.error(e)})),fetch("".concat(o,"/repos/").concat(n,"/").concat(e)).then((function(e){if(e.ok)return e.json()})).then((function(e){s.handleResponse(e)})).catch((function(e){s.__assetAvailable=!1}))}},{key:"readmeViewMoreHandler",value:function(e){this.readmeExtended=!0,this.shadowRoot.querySelector(".readme-btn").remove()}},{key:"handleResponse",value:function(e){e&&(this.__assetAvailable=!0,this.__description=e.description,this.repoLang=e.language,this.__stars=e.stargazers_count,this.__forks=e.forks)}},{key:"haxHooks",value:function(){return{editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged",gizmoRegistration:"haxgizmoRegistration"}}},{key:"haxgizmoRegistration",value:function(e){e.validGizmoTypes.push("github"),0===e.appList.filter((function(e,n){return"api.github.com"===e.connection.url})).length&&window.dispatchEvent(new CustomEvent("hax-register-app",{bubbles:!1,composed:!1,cancelable:!1,detail:this.haxAppDetails}))}},{key:"haxactiveElementChanged",value:function(e,n){n&&(this._haxstate=n)}},{key:"haxeditModeChanged",value:function(e){this._haxstate=e}},{key:"_clickLink",value:function(e){this._haxstate&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())}},{key:"firstUpdated",value:function(e){S(y(t.prototype),"firstUpdated",this)&&S(y(t.prototype),"firstUpdated",this).call(this,e),this.repo&&this.org&&this.url||(this.__assetAvailable=!1)}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){["repo","org","headers","branch","rawUrl","apiUrl","readMe","extended"].includes(t)&&n[t]&&(clearTimeout(n.__debounce),n.__debounce=setTimeout((function(){n.fetchGithubData(n.repo,n.org,n.headers,n.branch,n.rawUrl,n.apiUrl,n.readMe,n.extended)}),0)),n.extended,n.elementVisible&&n.extended&&"elementVisible"===t&&(n.wcmarkdown=n.shadowRoot.querySelector("div > div.readme-container > wc-markdown"))}))}}],[{key:"properties",get:function(){var e={};return S(y(t),"properties",this)&&(e=S(y(t),"properties",this)),p(p({},e),{},{repo:{type:String},org:{type:String},__description:{type:String},repoLang:{type:String,attribute:"repo-lang",reflect:!0},__stars:{type:Number},__forks:{type:Number},__assetAvailable:{type:Boolean},extended:{type:Boolean,reflect:!0},readmeExtended:{type:Boolean,attribute:"readme-extended",reflect:!0},headers:{type:Object},viewMoreText:{type:String,attribute:"view-more-text"},notFoundText:{type:String,attribute:"not-found-text"},__readmeText:{type:String},branch:{type:String},url:{type:String},apiUrl:{type:String,attribute:"api-url"},rawUrl:{type:String,attribute:"raw-url"},readMe:{type:String,attribute:"read-me"}})}},{key:"styles",get:function(){return[r.css(C||(C=M(['\n        :host {\n          display: inline-flex;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        :host([repo-lang="JavaScript"]) .lang-circle {\n          background-color: #f1e05a;\n        }\n\n        :host([repo-lang="C"]) .lang-circle {\n          background-color: #555555;\n        }\n\n        :host([repo-lang="C#"]) .lang-circle {\n          background-color: #178600;\n        }\n\n        :host([repo-lang="C++"]) .lang-circle {\n          background-color: #f34b7d;\n        }\n\n        :host([repo-lang="CSS"]) .lang-circle {\n          background-color: #563d7c;\n        }\n\n        :host([repo-lang="Dart"]) .lang-circle {\n          background-color: #00b4ab;\n        }\n\n        :host([repo-lang="Go"]) .lang-circle {\n          background-color: #00add8;\n        }\n\n        :host([repo-lang="Java"]) .lang-circle {\n          background-color: #b07219;\n        }\n\n        :host([repo-lang="Kotlin"]) .lang-circle {\n          background-color: #f18e33;\n        }\n\n        :host([repo-lang="Markdown"]) .lang-circle {\n          background-color: #083fa1;\n        }\n\n        :host([repo-lang="Python"]) .lang-circle {\n          background-color: #3572a5;\n        }\n\n        :host([repo-lang="Sass"]) .lang-circle {\n          background-color: #a53b70;\n        }\n\n        :host([repo-lang="Scala"]) .lang-circle {\n          background-color: #c22d40;\n        }\n\n        :host([repo-lang="SCSS"]) .lang-circle {\n          background-color: #c6538c;\n        }\n\n        :host([repo-lang="Rust"]) .lang-circle {\n          background-color: #dea584;\n        }\n\n        :host([repo-lang="Swift"]) .lang-circle {\n          background-color: #ffac45;\n        }\n\n        :host([repo-lang="TypeScript"]) .lang-circle {\n          background-color: #2b7489;\n        }\n\n        :host([repo-lang="Vue"]) .lang-circle {\n          background-color: #2c3e50;\n        }\n\n        :host([repo-lang="PHP"]) .lang-circle {\n          background-color: #4f5d95;\n        }\n\n        :host([repo-lang="HTML"]) .lang-circle {\n          background-color: #e34c26;\n        }\n\n        :host([repo-lang="Lua"]) .lang-circle {\n          background-color: #000080;\n        }\n\n        a {\n          display: inline-flex;\n          text-decoration: none;\n          color: var(--github-preview-link-text-color, white);\n        }\n\n        :host([extended]) .container {\n          width: var(--github-preview-container-width, 800px);\n          padding: var(--github-preview-container-padding, 10px);\n        }\n\n        .container {\n          background-color: var(--github-preview-bg-color, black);\n          border-radius: var(--github-preview-container-border-radius, 10px);\n          width: var(--github-preview-container-width, 400px);\n          padding: var(--github-preview-container-padding, 5px);\n        }\n\n        @media screen and (max-width: 400px) {\n          .container {\n            width: var(--github-preview-container-width, 350px);\n          }\n        }\n\n        .header-container {\n          display: flex;\n          align-items: center;\n        }\n\n        .header-container div {\n          margin-left: 10px;\n          font-size: var(--github-preview-header-font-size, 22px);\n          font-weight: bold;\n        }\n\n        .header-container div a:hover {\n          font-size: var(--github-preview-header-hover-font-size, 24px);\n        }\n\n        .stats-container {\n          display: flex;\n          align-items: center;\n        }\n\n        .lang-circle {\n          height: 15px;\n          width: 15px;\n          background-color: grey;\n          border-radius: 50%;\n          margin: 0px 5px 0px 5px;\n        }\n\n        div {\n          color: var(--github-preview-div-text-color, white);\n        }\n\n        .description {\n          padding: 8px 0px 8px 0px;\n        }\n\n        .stats-text {\n          margin: 0px 5px 0px 5px;\n        }\n\n        :host([readme-extended]) .readme-container {\n          overflow-y: scroll;\n        }\n\n        .readme-container {\n          overflow-y: hidden;\n          overflow-x: hidden;\n          max-height: var(--github-preview-readme-container-max-height, 300px);\n        }\n\n        .readme-btn {\n          display: inline-block;\n          padding: 0.3em 2em;\n          border-radius: 2em;\n          box-sizing: border-box;\n          text-align: center;\n        }\n\n        .readme-btn-container {\n          display: flex;\n          justify-content: center;\n        }\n      '])))]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Github Preview",description:"Accessible figure with long description",icon:"mdi-social:github-circle",color:"grey",groups:["developer","code"],handles:[{type:"github",type_exclusive:!0,repo:"repo",org:"org"}],meta:{author:"collinkleest",owner:"ELMS:LN"}},settings:{configure:[{property:"org",title:"Organization",description:"Github organization machine name",inputMethod:"textfield"},{property:"repo",title:"Repository",description:"Repo machine name",inputMethod:"textfield"},{property:"extended",title:"Extended View",description:"Includes readme in element",inputMethod:"boolean"}],advanced:[]},demoSchema:[{tag:"github-preview",properties:{org:"elmsln",repo:"lrnwebcomponents"},content:""}]}}},{key:"tag",get:function(){return"github-preview"}}]),t}(a.IntersectionObserverMixin(r.LitElement));customElements.define(L.tag,L),e.GithubPreview=L,Object.defineProperty(e,"__esModule",{value:!0})}));
