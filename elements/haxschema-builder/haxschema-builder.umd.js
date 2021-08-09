!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/json-editor/json-editor.js"),require("@lrnwebcomponents/code-editor/code-editor.js"),require("@vaadin/vaadin-split-layout/vaadin-split-layout.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-picker.js"),require("@lrnwebcomponents/simple-icon-picker/simple-icon-picker.js"),require("@lrnwebcomponents/simple-picker/simple-picker.js"),require("@lrnwebcomponents/simple-fields/lib/simple-fields-field.js"),require("@lrnwebcomponents/simple-fields/lib/simple-fields-form.js"),require("@lrnwebcomponents/simple-fields/simple-fields.js"),require("@polymer/paper-tabs/paper-tab.js"),require("@polymer/paper-tabs/paper-tabs.js"),require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXFields.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/hax-body-behaviors/hax-body-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/json-editor/json-editor.js","@lrnwebcomponents/code-editor/code-editor.js","@vaadin/vaadin-split-layout/vaadin-split-layout.js","@lrnwebcomponents/simple-colors/lib/simple-colors-picker.js","@lrnwebcomponents/simple-icon-picker/simple-icon-picker.js","@lrnwebcomponents/simple-picker/simple-picker.js","@lrnwebcomponents/simple-fields/lib/simple-fields-field.js","@lrnwebcomponents/simple-fields/lib/simple-fields-form.js","@lrnwebcomponents/simple-fields/simple-fields.js","@polymer/paper-tabs/paper-tab.js","@polymer/paper-tabs/paper-tabs.js","@polymer/polymer/polymer-element.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXFields.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/hax-body-behaviors/hax-body-behaviors.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).HaxschemaBuilder={},e.lit,null,null,null,null,null,null,null,null,null,null,null,e.polymerElement_js,e.HAXFields_js,null,null,null,e.haxBodyBehaviors_js)}(this,(function(e,n,t,o,r,i,a,s,c,l,u,p,d,h,m,f,b,v,y){"use strict";function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){O(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function w(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,n,t){return n&&w(e.prototype,n),t&&w(e,t),e}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&P(e,n)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,n){return(P=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function q(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function C(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=_(e);if(n){var r=_(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return q(this,t)}}function H(e,n,t){return(H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=_(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function E(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var A,R,T,z=function(e){k(t,e);var n=C(t);function t(){return x(this,t),n.call(this)}return S(t,[{key:"_computedFormKey",value:function(e){return e?"advanced":"configure"}},{key:"_formKeyChanged",value:function(e,n){e&&("advanced"===e?this.set("schema",this.advancedSchema):this.set("schema",this.configureSchema),this.notifyPath("schema.*"))}},{key:"_valueChanged",value:function(e){if(e&&this.schema)for(var n in e)this.schema[n].value=e[n]}},{key:"_editorModeChanged",value:function(e){e&&(this.advancedForm="advanced"===e)}},{key:"addField",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"configure";"configure"===t?(this.configureSchema.properties[e]=n,this.set("schema",this.configureSchema)):this.set("schema",this.advancedSchema),this.notifyPath("schema.*")}},{key:"removeField",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"configure";"configure"===n?(delete this.configureSchema.properties[e],this.set("schema",this.configureSchema)):(delete this.advancedSchema.properties[e],this.set("schema",this.advancedSchema)),this.notifyPath("schema.*")}}],[{key:"template",get:function(){return h.html(A||(A=E(['\n      <style>\n        :host {\n          display: block;\n          background-color: #ffffff;\n          overflow: hidden;\n        }\n        div.card.form-wrapper {\n          margin: 0;\n          padding: 0 16px 80px 16px;\n          width: 100%;\n          min-height: 160px;\n          background-color: transparent;\n          overflow: auto;\n          height: 100%;\n          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\n        }\n\n        simple-fields {\n          width: 50%;\n        }\n\n        #modetabs {\n          height: 64px;\n          padding: 0px;\n          margin: 16px 0 0 0;\n          box-sizing: content-box;\n          color: var(--hax-color-text, #000000);\n          text-align: center;\n          background-color: transparent;\n          border-bottom: 1px solid var(--hax-color-border-outline);\n          display: block;\n          justify-content: space-evenly;\n          --paper-tabs-selection-bar-color: var(\n            --hax-color-accent1,\n            --simple-colors-default-theme-light-blue-7\n          );\n          --paper-tabs: {\n            background: transparent;\n          }\n        }\n\n        #modetabs paper-tab {\n          display: inline-flex;\n          height: 100%;\n          --paper-tab-ink: var(\n            --hax-color-accent1,\n            --simple-colors-default-theme-light-blue-7\n          );\n          --paper-tab: {\n            font-size: 16px;\n          }\n        }\n        #modetabs paper-tab button {\n          min-width: unset;\n          width: 100%;\n          background-color: var(--hax-color-menu-heading-bg, #eeeeee);\n          color: var(--hax-color-menu-heading-color, black);\n        }\n        simple-fields {\n          color: var(--hax-text-color);\n          --simple-colors-picker-preview-size: 20px;\n        }\n      </style>\n      <paper-tabs\n        id="modetabs"\n        selected="{{modeTab}}"\n        attr-for-selected="data-mode"\n      >\n        <paper-tab id="configurebutton" data-mode="configure"\n          ><button>Configure</button></paper-tab\n        >\n        <paper-tab id="advancedbutton" data-mode="advanced"\n          ><button>Advanced</button></paper-tab\n        >\n      </paper-tabs>\n      <div class="card form-wrapper">\n        <simple-fields\n          id="form"\n          schema="[[schema]]"\n          .schematizer="','"\n          .elementizer="','"\n          value="{{value}}"\n        ></simple-fields>\n      </div>\n    '])),m.HaxSchematizer,m.HaxElementizer)}},{key:"tag",get:function(){return"hax-schema-form"}},{key:"properties",get:function(){return{initialValue:{type:Object,notify:!0,value:{},observer:"_valueChanged"},value:{type:Object,notify:!0,value:{}},modeTab:{type:String,observer:"_editorModeChanged"},advancedForm:{type:Boolean,value:!1},canEditSource:{type:Boolean},formKey:{type:String,computed:"_computedFormKey(advancedForm)",observer:"_formKeyChanged"},schema:{type:Object,notify:!0},configureSchema:{type:Object,value:{schema:{}}},advancedSchema:{type:Object,value:{schema:{}}}}}}]),t}(h.PolymerElement);window.customElements.define(z.tag,z);var F=function(e){k(o,e);var t=C(o);function o(){var e;return x(this,o),(e=t.call(this)).HAXWiring=new y.HAXWiring,e.haxSchema="{}",e}return S(o,[{key:"render",value:function(){return n.html(R||(R=E(['\n\n<vaadin-split-layout>\n  <div>\n    <button @click="','">Add to configure</button>\n    <button @click="','">Add to advanced</button>\n    <code-editor id="code"  @value-changed="','" .value="{}" language="json"></code-editor>\n    <json-editor id="json" label="JSON" @value-changed="','" value="','"></json-editor>\n  </div>\n  <div>\n    <hax-schema-form id="form" value="','" @value-changed="','"></hax-schema-form>\n  </div>\n</vaadin-split-layout>'])),this.addConfigure,this.addAdvanced,this._editorDataChanged,this.__haxSchemaChanged,this.haxSchema,this.value,this.__valueChanged)}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){"haxSchema"==t&&(n.dispatchEvent(new CustomEvent("hax-schema-changed",{value:n[t]})),n._haxSchemaChanged(n[t],e))}))}},{key:"firstUpdated",value:function(){var e=this;setTimeout((function(){e.source||(e.haxSchema=JSON.stringify(e.HAXWiring.prototypeHaxProperties(),null,2))}),0),this.shadowRoot.querySelector("#form").modeTab="advanced",setTimeout((function(){e.shadowRoot.querySelector("#form").modeTab="configure"}),2e3)}},{key:"_haxSchemaChanged",value:function(e){e&&(this.shadowRoot.querySelector("#code").editorValue=e)}},{key:"_editorDataChanged",value:function(e){this.haxSchema=e.detail.value;var n=JSON.parse(this.haxSchema);for(var t in n.settings){var o=this.HAXWiring.getHaxJSONSchema(t,n);this.shadowRoot.querySelector("#form")[t+"Schema"]=Object.assign({},o)}}},{key:"addAdvanced",value:function(e){var n=JSON.parse(this.haxSchema);n.settings.advanced.push(this.__propPrototype()),this.__refreshSchemas(n)}},{key:"addConfigure",value:function(e){var n=JSON.parse(this.haxSchema);n.settings.configure.push(this.__propPrototype()),this.__refreshSchemas(n)}},{key:"__refreshSchemas",value:function(e){for(var n in e.settings){var t=this.HAXWiring.getHaxJSONSchema(n,e);this.shadowRoot.querySelector("#form")[n+"Schema"]=Object.assign({},t)}this.haxSchema=JSON.stringify(e)}},{key:"__propPrototype",value:function(){return{property:"title",title:"Title",description:"",inputMethod:"textfield",icon:"android",required:!0,validationType:"text"}}},{key:"__haxSchemaChanged",value:function(e){this.haxSchema=e.detail.value}},{key:"__valueChanged",value:function(e){this.value=e.detail.value}}],[{key:"styles",get:function(){return[n.css(T||(T=E(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\ncode-editor {\n  height: 500px;\n}\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Haxschema builder",description:"dynamically build and visualize HAXschema",icon:"icons:android",color:"green",groups:["Builder"],handles:[],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"}],advanced:[]}}}},{key:"properties",get:function(){return j(j({},H(_(o),"properties",this)),{},{haxSchema:{type:String,attribute:"hax-schema"},source:{type:String},value:{type:String}})}},{key:"tag",get:function(){return"haxschema-builder"}}]),o}(n.LitElement);window.customElements.define(F.tag,F),e.HaxschemaBuilder=F,Object.defineProperty(e,"__esModule",{value:!0})}));
