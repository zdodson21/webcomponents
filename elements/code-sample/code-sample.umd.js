!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@polymer/polymer/polymer-element.js"],n):n((e=e||self).CodeSample={},e.litElement_js,e.polymerElement_js)}(this,function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e,n,t){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}(e,n);if(r){var a=Object.getOwnPropertyDescriptor(r,n);return a.get?a.get.call(t):a.value}})(e,n,t||e)}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function d(){var e=u(["\n  <style>\n    /*\n\n  Atom One Dark by Daniel Gamage\n  Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\n  base:    #282c34\n  mono-1:  #abb2bf\n  mono-2:  #818896\n  mono-3:  #5c6370\n  hue-1:   #56b6c2\n  hue-2:   #61aeee\n  hue-3:   #c678dd\n  hue-4:   #98c379\n  hue-5:   #e06c75\n  hue-5-2: #be5046\n  hue-6:   #d19a66\n  hue-6-2: #e6c07b\n\n  */\n\n    .hljs {\n      display: block;\n      overflow-x: auto;\n      color: var(--code-sample-color, #abb2bf);\n      background: var(--code-sample-background, #282c34);\n    }\n\n    .hljs-comment,\n    .hljs-quote {\n      color: #5c6370;\n      font-style: italic;\n    }\n\n    .hljs-doctag,\n    .hljs-keyword,\n    .hljs-formula {\n      color: #c678dd;\n    }\n\n    .hljs-section,\n    .hljs-name,\n    .hljs-selector-tag,\n    .hljs-deletion,\n    .hljs-subst,\n    .hljs-tag {\n      color: #e06c75;\n    }\n\n    .hljs-literal {\n      color: #56b6c2;\n    }\n\n    .hljs-string,\n    .hljs-regexp,\n    .hljs-addition,\n    .hljs-attribute,\n    .hljs-meta-string {\n      color: #98c379;\n    }\n\n    .hljs-built_in,\n    .hljs-class .hljs-title {\n      color: #e6c07b;\n    }\n\n    .hljs-attr,\n    .hljs-variable,\n    .hljs-template-variable,\n    .hljs-type,\n    .hljs-selector-class,\n    .hljs-selector-attr,\n    .hljs-selector-pseudo,\n    .hljs-number {\n      color: #d19a66;\n    }\n\n    .hljs-symbol,\n    .hljs-bullet,\n    .hljs-link,\n    .hljs-meta,\n    .hljs-selector-id,\n    .hljs-title {\n      color: #61aeee;\n    }\n\n    .hljs-emphasis {\n      font-style: italic;\n    }\n\n    .hljs-strong {\n      font-weight: bold;\n    }\n\n    .hljs-link {\n      text-decoration: underline;\n    }\n\n    .hljs-params {\n      color: #e6c07b;\n    }\n  </style>\n"]);return d=function(){return e},e}var g=t.html(d()),p={},h=[],b=Object.keys,m={},f={},E=/^(no-?highlight|plain|text)$/i,v=/\blang(?:uage)?-([\w-]+)\b/i,y=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,_="</span>",N={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function R(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O(e){return e.nodeName.toLowerCase()}function C(e,n){var t=e&&e.exec(n);return t&&0===t.index}function w(e){return E.test(e)}function M(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function S(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),O(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n}function x(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}!function r(a,i){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords){var o={},s=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?s("keyword",a.keywords):b(a.keywords).forEach(function(e){s(e,a.keywords[e])}),a.keywords=o}a.lexemesRe=t(a.lexemes||/\w+/,!0),i&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=t(a.begin),a.endSameAsBegin&&(a.end=a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=t(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&i.terminator_end&&(a.terminator_end+=(a.end?"|":"")+i.terminator_end)),a.illegal&&(a.illegalRe=t(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=Array.prototype.concat.apply([],a.contains.map(function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return M(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[M(e)]||[e]}("self"===e?a:e)})),a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.contains.map(function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=l.length?t(function(e,t){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,i="",o=0;o<e.length;o++){var s=a,l=n(e[o]);for(o>0&&(i+=t);l.length>0;){var c=r.exec(l);if(null==c){i+=l;break}i+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?i+="\\"+String(Number(c[1])+s):(i+=c[0],"("==c[0]&&a++)}}return i}(l,"|"),!0):{exec:function(){return null}}}}(e)}function k(e,n,t,r){function a(e,n){var t=c.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function i(e,n,t,r){var a='<span class="'+(r?"":N.classPrefix);return(a+=e+'">')+n+(t?"":_)}function o(){p+=null!=d.subLanguage?function(){var e="string"==typeof d.subLanguage;if(e&&!m[d.subLanguage])return R(h);var n=e?k(d.subLanguage,h,!0,g[d.subLanguage]):j(h,d.subLanguage.length?d.subLanguage:void 0);return d.relevance>0&&(b+=n.relevance),e&&(g[d.subLanguage]=n.top),i(n.language,n.value,!1,!0)}():function(){var e,n,t,r;if(!d.keywords)return R(h);for(r="",n=0,d.lexemesRe.lastIndex=0,t=d.lexemesRe.exec(h);t;)r+=R(h.substring(n,t.index)),(e=a(d,t))?(b+=e[1],r+=i(e[0],R(t[0]))):r+=R(t[0]),n=d.lexemesRe.lastIndex,t=d.lexemesRe.exec(h);return r+R(h.substr(n))}(),h=""}function s(e){p+=e.className?i(e.className,"",!0):"",d=Object.create(e,{parent:{value:d}})}function l(e,n){if(h+=e,null==n)return o(),0;var r=function(e,n){var t,r,a;for(t=0,r=n.contains.length;t<r;t++)if(C(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=(a=n.contains[t].beginRe.exec(e)[0],new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.contains[t]}(n,d);if(r)return r.skip?h+=n:(r.excludeBegin&&(h+=n),o(),r.returnBegin||r.excludeBegin||(h=n)),s(r),r.returnBegin?0:n.length;var a=function e(n,t){if(C(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(d,n);if(a){var i=d;i.skip?h+=n:(i.returnEnd||i.excludeEnd||(h+=n),o(),i.excludeEnd&&(h=n));do{d.className&&(p+=_),d.skip||d.subLanguage||(b+=d.relevance),d=d.parent}while(d!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),s(a.starts)),i.returnEnd?0:n.length}if(function(e,n){return!t&&C(n.illegalRe,e)}(n,d))throw new Error('Illegal lexeme "'+n+'" for mode "'+(d.className||"<unnamed>")+'"');return h+=n,n.length||1}var c=L(e);if(!c)throw new Error('Unknown language: "'+e+'"');x(c);var u,d=r||c,g={},p="";for(u=d;u!==c;u=u.parent)u.className&&(p=i(u.className,"",!0)+p);var h="",b=0;try{for(var f,E,v=0;d.terminators.lastIndex=v,f=d.terminators.exec(n);)E=l(n.substring(v,f.index),f[0]),v=f.index+E;for(l(n.substr(v)),u=d;u.parent;u=u.parent)u.className&&(p+=_);return{relevance:b,value:p,language:e,top:d}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:R(n)};throw e}}function j(e,n){n=n||N.languages||b(m);var t={relevance:0,value:R(e)},r=t;return n.filter(L).filter(B).forEach(function(n){var a=k(n,e,!1);a.language=n,a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)}),r.language&&(t.second_best=r),t}function T(e){return N.tabReplace||N.useBR?e.replace(y,function(e,n){return N.useBR&&"\n"===e?"<br>":N.tabReplace?n.replace(/\t/g,N.tabReplace):""}):e}function A(e){var n,t,r,a,i,o=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=v.exec(i))return L(t[1])?t[1]:"no-highlight";for(n=0,r=(i=i.split(/\s+/)).length;n<r;n++)if(w(a=i[n])||L(a))return a}(e);w(o)||(N.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,r=o?k(o,i,!0):j(i),(t=S(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,n,t){var r=0,a="",i=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function s(e){a+="<"+O(e)+h.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+R(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function l(e){a+="</"+O(e)+">"}function c(e){("start"===e.event?s:l)(e.node)}for(;e.length||n.length;){var u=o();if(a+=R(t.substring(r,u[0].offset)),r=u[0].offset,u===e){i.reverse().forEach(l);do{c(u.splice(0,1)[0]),u=o()}while(u===e&&u.length&&u[0].offset===r);i.reverse().forEach(s)}else"start"===u[0].event?i.push(u[0].node):i.pop(),c(u.splice(0,1)[0])}return a+R(t.substr(r))}(t,S(a),i)),r.value=T(r.value),e.innerHTML=r.value,e.className=function(e,n,t){var r=n?f[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}(e.className,o,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function D(){if(!D.called){D.called=!0;var e=document.querySelectorAll("pre code");h.forEach.call(e,A)}}function L(e){return e=(e||"").toLowerCase(),m[e]||m[f[e]]}function B(e){var n=L(e);return n&&!n.disableAutodetect}p.highlight=k,p.highlightAuto=j,p.fixMarkup=T,p.highlightBlock=A,p.configure=function(e){N=M(N,e)},p.initHighlighting=D,p.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",D,!1),addEventListener("load",D,!1)},p.registerLanguage=function(e,n){var t=m[e]=n(p);t.aliases&&t.aliases.forEach(function(n){f[n]=e})},p.listLanguages=function(){return b(m)},p.getLanguage=L,p.autoDetection=B,p.inherit=M,p.IDENT_RE="[a-zA-Z]\\w*",p.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",p.NUMBER_RE="\\b\\d+(\\.\\d+)?",p.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p.BINARY_NUMBER_RE="\\b(0b[01]+)",p.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",p.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},p.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[p.BACKSLASH_ESCAPE]},p.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[p.BACKSLASH_ESCAPE]},p.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},p.COMMENT=function(e,n,t){var r=p.inherit({className:"comment",begin:e,end:n,contains:[]},t||{});return r.contains.push(p.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},p.C_LINE_COMMENT_MODE=p.COMMENT("//","$"),p.C_BLOCK_COMMENT_MODE=p.COMMENT("/\\*","\\*/"),p.HASH_COMMENT_MODE=p.COMMENT("#","$"),p.NUMBER_MODE={className:"number",begin:p.NUMBER_RE,relevance:0},p.C_NUMBER_MODE={className:"number",begin:p.C_NUMBER_RE,relevance:0},p.BINARY_NUMBER_MODE={className:"number",begin:p.BINARY_NUMBER_RE,relevance:0},p.CSS_NUMBER_MODE={className:"number",begin:p.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},p.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[p.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[p.BACKSLASH_ESCAPE]}]},p.TITLE_MODE={className:"title",begin:p.IDENT_RE,relevance:0},p.UNDERSCORE_TITLE_MODE={className:"title",begin:p.UNDERSCORE_IDENT_RE,relevance:0},p.METHOD_GUARD={begin:"\\.\\s*"+p.UNDERSCORE_IDENT_RE,relevance:0};function I(){var e=u(["\n:host {\n    display: block;\n}\n\n:host([hidden]),\n[hidden] {\n    display: none;\n}\n\npre {\n    margin: 0;\n}\n\npre, code {\n    font-family: var(--code-sample-font-family, Operator Mono, Inconsolata, Roboto Mono, monaco, consolas, monospace);\n    font-size: var(--code-sample-font-size, 0.875rem);\n}\n\n.hljs {\n    padding: 0 1.25rem;\n    line-height: var(--code-sample-line-height, 1.3);\n}\n\n.demo:not(:empty) {\n    padding: var(--code-sample-demo-padding, 0 0 1.25rem);\n}\n\n#code-container {\n    position: relative;\n}\n\nbutton {\n    background: var(--code-sample-copy-button-bg-color, #e0e0e0);\n    border: none;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 0;\n    text-transform: uppercase;\n}\n      "]);return I=function(){return e},e}function P(){var e=u(['\n\n<div id="theme"></div>\n<div id="demo" class="demo"></div>\n<slot></slot>\n<div id="code-container">\n  <button type="button" ?hidden="','" id="copyButton" title="Copy to clipboard" @click="','">Copy</button>\n  <pre id="code"></pre>\n</div>']);return P=function(){return e},e}p.registerLanguage("javascript",function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,a]};a.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,r,e.REGEXP_MODE];var o=a.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:o}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}),p.registerLanguage("json",function(e){var n={literal:"true false null"},t=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],r={end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:n},a={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(r,{begin:/:/})],illegal:"\\S"},i={begin:"\\[",end:"\\]",contains:[e.inherit(r)],illegal:"\\S"};return t.splice(t.length,0,a,i),{contains:t,keywords:n,illegal:"\\S"}}),p.registerLanguage("yaml",function(e){var n="[a-zA-Z_][\\w\\-]*",t={className:"attr",variants:[{begin:"^[ \\-]*"+n+":"},{begin:'^[ \\-]*"'+n+'":'},{begin:"^[ \\-]*'"+n+"':"}]},r={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[t,{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>] *$",returnEnd:!0,contains:r.contains,end:t.variants[0].begin},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!"+e.UNDERSCORE_IDENT_RE},{className:"type",begin:"!!"+e.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"^ *-",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:"true false yes no null",keywords:{literal:"true false yes no null"}},e.C_NUMBER_MODE,r]}}),p.registerLanguage("xml",function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}),window.hljs=p;var U=function(e){function t(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),(e=l(this,o(t).call(this)))._observer=null,e.theme=g,e.copyClipboardButton=!1,e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(t,n.LitElement),a(t,[{key:"render",value:function(){return n.html(P(),!this.copyClipboardButton,this._copyToClipboard)}}],[{key:"styles",get:function(){return[n.css(I())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Code sample",description:"A sample of code highlighted in the page",icon:"icons:code",color:"blue",groups:["Code","Development"],meta:{author:"kuscamara"}},settings:{quick:[],configure:[{slot:"",slotWrapper:"template",slotAttributes:{"preserve-content":"preserve-content"},title:"Source",description:"The URL for this video.",inputMethod:"code-editor"},{property:"copyClipboardButton",title:"Copy to clipboard button",description:"button in top right that says copy to clipboard",inputMethod:"boolean"}],advanced:[]},saveOptions:{unsetAttributes:["theme"]}}}},{key:"properties",get:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){i(e,n,t[n])})}return e}({},c(o(t),"properties",this),{copyClipboardButton:{type:Boolean,attribute:"copy-clipboard-button"},theme:{type:String},type:{type:String}})}},{key:"tag",get:function(){return"code-sample"}}]),a(t,[{key:"firstUpdated",value:function(){this._updateContent()}},{key:"connectedCallback",value:function(){var e=this;c(o(t.prototype),"connectedCallback",this).call(this),this.querySelector("template")?(this._observer=new MutationObserver(function(n){e.shadowRoot&&e._updateContent()}),this._observer.observe(this,{attributes:!0,childList:!0,subtree:!0})):this.childNodes.length&&console.error("<code-sample>:","content must be provided inside a <template> tag")}},{key:"disconnectedCallback",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null),c(o(t.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(e){var n=this;e.forEach(function(e,t){"theme"==t&&n._themeChanged(n[t])})}},{key:"_themeChanged",value:function(e){if(e&&this._themeCanBeChanged(e)){for(;this.shadowRoot.querySelector("#theme").childNodes>0;)this.shadowRoot.querySelector("#theme").removeChild(this.shadowRoot.querySelector("#theme").firstChild);this.shadowRoot.querySelector("#theme").appendChild(document.importNode(e.content,!0))}}},{key:"_themeCanBeChanged",value:function(e){if("TEMPLATE"===e.tagName)return!0;console.error("<code-sample>:","theme must be a template")}},{key:"_updateContent",value:function(){this._code&&this._code.parentNode.removeChild(this._code);var e=this._getCodeTemplate();e||((e=document.createElement("template")).setAttribute("preserve-content","preserve-content"),this.appendChild(e)),this._highlight(e.innerHTML)}},{key:"_getCodeTemplate",value:function(){var e=this.children;return[].filter.call(e,function(e){return e.nodeType===Node.ELEMENT_NODE})[0]}},{key:"_highlight",value:function(e){this._code=document.createElement("code"),this.type&&this._code.classList.add(this.type),this._code.innerHTML=this._entitize(this._cleanIndentation(e)),this.shadowRoot.querySelector("#code").appendChild(this._code),p.highlightBlock(this._code)}},{key:"_cleanIndentation",value:function(e){var n=e.match(/\s*\n[\t\s]*/);return e.replace(new RegExp(n,"g"),"\n")}},{key:"_entitize",value:function(e){return String(e).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}},{key:"_copyToClipboard",value:function(e){var n=e.target,t=this._textAreaWithClonedContent();t.select();try{document.execCommand("copy",!1),n.textContent="Done"}catch(e){console.error(e),n.textContent="Error"}t.remove(),setTimeout(function(){n.textContent="Copy"},1e3)}},{key:"_textAreaWithClonedContent",value:function(){var e=document.createElement("textarea");return document.body.appendChild(e),e.value=this._cleanIndentation(this._getCodeTemplate().innerHTML),e}}]),t}();window.customElements.define(U.tag,U),e.CodeSample=U,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=code-sample.umd.js.map
