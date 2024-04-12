function t(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}t("code[class*=language-],pre[class*=language-]{word-wrap:normal;background:none;color:#ccc;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal}pre[class*=language-]{margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{border-radius:.3em;padding:.1em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}");t("body,html{background:#000;color:#fff;font-size:12px;height:100%;margin:0;overflow-x:hidden;padding:0}pre{border-radius:12px;overflow:hidden}pre code{tab-size:1!important}.error{color:#f2a971}.red-unit-pages-root{gap:10px;padding:12px}.red-unit-pages-root,.red-unit-root{display:flex;flex-direction:column}.red-unit-total-title{font-size:16px}.red-unit-total-state-wrap{background:#212121;display:flex;flex-direction:column;gap:3px;padding:16px 10px;position:sticky;top:0;z-index:1}.red-unit-total-state-box{align-items:center;display:flex;font-size:11px;gap:6px;justify-content:flex-start;white-space:nowrap}.red-unit-iframe-wrap{border:1px solid hsla(0,0%,100%,.1);border-radius:8px;cursor:pointer;line-height:1;overflow:hidden}.red-unit-iframe-title{align-items:center;background:#302d4d;color:#fff;display:flex;justify-content:space-between;line-height:1;padding:6px 6px 6px 14px;text-decoration:none}.red-unit-iframe-title-href{align-items:center;background:rgba(73,11,11,.1);border:1px solid hsla(0,0%,100%,.1);border-radius:6px;display:flex;font-size:11px;justify-content:center;line-height:1;padding:6px}.red-unit-iframe{border:0;height:90px;width:100%}.red-unit-test-runner-root,.red-unit-test-runner-title-wrap{display:flex;flex-direction:column;gap:6px;padding:12px}.red-unit-test-runner-title-wrap{align-items:stretch;background:#212121;white-space:nowrap}.red-unit-test-runner-title{color:#f2a971;font-size:16px}.red-unit-test-runner-state-box,.red-unit-test-runner-title{align-items:center;display:flex;gap:6px;justify-content:flex-start;white-space:nowrap}.red-unit-test-runner-state-box{background:hsla(0,0%,100%,.1);border-radius:8px;font-size:11px;padding:10px;transition:all .3s}.red-unit-test-runner-test-container-title{color:#f2a971}.red-unit-test-runner-test-container{display:flex;flex-direction:column;gap:6px}.red-unit-test-container-state-box{align-items:center;background:hsla(0,0%,100%,.1);border-radius:12px 12px 0 0;display:flex;font-size:11px;gap:6px;justify-content:flex-start;padding:10px;transition:all .2s;white-space:nowrap}.red-unit-test-wrap{background:#1d1c24;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;color:#a7a4b4;display:flex;flex-direction:column;gap:8px;line-height:1;padding:6px}.red-unit-test-title-wrap{align-items:center;cursor:pointer;display:flex;justify-content:space-between;user-select:none}.red-unit-test-title{font-size:12px;line-height:1.6;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.red-unit-test-title-open-close{align-items:center;background:rgba(0,0,0,.5);border:1px solid hsla(0,0%,100%,.1);border-radius:6px;display:flex;font-size:11px;justify-content:center;line-height:1;padding:3px 4px 5px}.red-unit-test-code-wrap{line-height:1.3}.red-unit-test-result-wrap{align-items:center;color:#bebebe;display:flex;font-size:11px;gap:6px;line-height:1}.red-unit-test-result-wrap>.pass-fail{align-items:center;background:hsla(0,0%,100%,.1);border-radius:3px;color:#ababab;display:flex;gap:6px;justify-content:center;line-height:1;padding:5px 6px}.red-unit-test-result-wrap>.pass-fail.pass{background:green;color:#fff}.red-unit-test-result-wrap>.pass-fail.fail{background:red;color:#fff}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#000}::-webkit-scrollbar-thumb{background:#333}::-webkit-scrollbar-thumb:hover{background:#444}");const e=(t="",e="div")=>{let n=document.createElement(e);return n.setAttribute("class",t),n},n={ADD_UNIT_NUM:"ADD_UNIT_NUM",PASS_UNIT_NUM:"PASS_UNIT_NUM",FAIL_UNIT_NUM:"FAIL_UNIT_NUM"};Object.freeze(n);class a{#t;get wrap(){return this.#t}#e=0;#n=0;#a=0;#s;#i;constructor(t,e,n){this.createAndAppendElements(t,e),requestAnimationFrame((()=>this.addListeners(n)))}createAndAppendElements(t,n){this.#t=e("red-unit-iframe-wrap"),this.#s=this.#r(t,n),this.#i=this.#o("red-unit-iframe",n),this.#t.appendChild(this.#s),this.#t.appendChild(this.#i)}addListeners(t){const{contentWindow:e}=this.#i;e.addEventListener(n.ADD_UNIT_NUM,(()=>{t.increaseTotalUnitNum(),this.#e++})),e.addEventListener(n.PASS_UNIT_NUM,(()=>{t.increaseTotalPassUnitNum(),this.#n++,this.#n===this.#e&&t.increaseTotalPassPageNum()})),e.addEventListener(n.FAIL_UNIT_NUM,(()=>{t.increaseTotalFailUnitNum(),0==this.#a&&t.increaseTotalFailPageNum(),this.#a++}))}#r(t,n){const a=e("red-unit-iframe-title","a");return a.innerHTML=`${t}<span class="red-unit-iframe-title-href">${n}</span>`,a.href=n,a}#o(t,e){const n=document.createElement("iframe");return n.src=e,n.setAttribute("class",t),n}}Object.freeze(a);class s{#l;#u=0;#d=0;#c=0;#p=0;#g=0;#h=0;#s;constructor(t,n){this.#s=t,this.#h=n.length,this.#l=e("red-unit-total-state-wrap"),this.#f(),document.body.appendChild(this.#l)}increaseTotalUnitNum(){this.#c++,this.#f()}increaseTotalPassUnitNum(){this.#u++,this.#f()}increaseTotalFailUnitNum(){this.#d++,this.#f()}increaseTotalPassPageNum(){this.#p++,this.#f()}increaseTotalFailPageNum(){this.#g++,this.#f()}#f(){const t=this.#c!==this.#u+this.#d;this.#l.innerHTML=`\n        <div class="red-unit-total-title">\n        \t${this.#s} - <span style="color:${t?"white":this.#d?"red":"#f2a971"}">${t?"ing...":this.#d?"Fail!":"All Pass!!!"}</span>\n\t\t\t\t</div>\n        <div class="red-unit-total-state-box">\n          <div>Pass: ${this.#u.toLocaleString()}</div>\n          /<div style="color:${this.#d?"red":""}">Fail: ${this.#d.toLocaleString()}</div>\n          /<div>Total: ${this.#c.toLocaleString()}</div>\n        </div>\n        <div class="red-unit-total-state-box">\n          <div>PASS page: ${this.#p.toLocaleString()}</div>\n          /<div style="color:${this.#d?"red":""}">FAIL page: ${this.#g.toLocaleString()}</div>\n          / <div>TOTAL page: <span class="unit-total-count">${this.#h.toLocaleString()}</span></div>\n        </div>\n    `}}Object.freeze(s);var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var o={exports:{}};!function(t){var e=function(t){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},s={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof i?new i(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++n}),t.__id},clone:function t(e,n){var a,i;switch(n=n||{},s.util.type(e)){case"Object":if(i=s.util.objId(e),n[i])return n[i];for(var r in a={},n[i]=a,e)e.hasOwnProperty(r)&&(a[r]=t(e[r],n));return a;case"Array":return i=s.util.objId(e),n[i]?n[i]:(a=[],n[i]=a,e.forEach((function(e,s){a[s]=t(e,n)})),a);default:return e}},getLanguage:function(t){for(;t;){var n=e.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,n){t.className=t.className.replace(RegExp(e,"gi"),""),t.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var a="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(a))return!1;t=t.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(t,e){var n=s.util.clone(s.languages[t]);for(var a in e)n[a]=e[a];return n},insertBefore:function(t,e,n,a){var i=(a=a||s.languages)[t],r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==e)for(var l in n)n.hasOwnProperty(l)&&(r[l]=n[l]);n.hasOwnProperty(o)||(r[o]=i[o])}var u=a[t];return a[t]=r,s.languages.DFS(s.languages,(function(e,n){n===u&&e!=t&&(this[e]=r)})),r},DFS:function t(e,n,a,i){i=i||{};var r=s.util.objId;for(var o in e)if(e.hasOwnProperty(o)){n.call(e,o,e[o],a||o);var l=e[o],u=s.util.type(l);"Object"!==u||i[r(l)]?"Array"!==u||i[r(l)]||(i[r(l)]=!0,t(l,n,o,i)):(i[r(l)]=!0,t(l,n,null,i))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var a={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),s.hooks.run("before-all-elements-highlight",a);for(var i,r=0;i=a.elements[r++];)s.highlightElement(i,!0===e,a.callback)},highlightElement:function(e,n,a){var i=s.util.getLanguage(e),r=s.languages[i];s.util.setLanguage(e,i);var o=e.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&s.util.setLanguage(o,i);var l={element:e,language:i,grammar:r,code:e.textContent};function u(t){l.highlightedCode=t,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),a&&a.call(l.element)}if(s.hooks.run("before-sanity-check",l),(o=l.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code)return s.hooks.run("complete",l),void(a&&a.call(l.element));if(s.hooks.run("before-highlight",l),l.grammar)if(n&&t.Worker){var d=new Worker(s.filename);d.onmessage=function(t){u(t.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(s.highlight(l.code,l.grammar,l.language));else u(s.util.encode(l.code))},highlight:function(t,e,n){var a={code:t,grammar:e,language:n};if(s.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),i.stringify(s.util.encode(a.tokens),a.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var a in n)e[a]=n[a];delete e.rest}var s=new l;return u(s,s.head,t),o(t,s,e,s.head,0),function(t){var e=[],n=t.head.next;for(;n!==t.tail;)e.push(n.value),n=n.next;return e}(s)},hooks:{all:{},add:function(t,e){var n=s.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=s.hooks.all[t];if(n&&n.length)for(var a,i=0;a=n[i++];)a(e)}},Token:i};function i(t,e,n,a){this.type=t,this.content=e,this.alias=n,this.length=0|(a||"").length}function r(t,e,n,a){t.lastIndex=e;var s=t.exec(n);if(s&&a&&s[1]){var i=s[1].length;s.index+=i,s[0]=s[0].slice(i)}return s}function o(t,e,n,a,l,c){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var g=n[p];g=Array.isArray(g)?g:[g];for(var h=0;h<g.length;++h){if(c&&c.cause==p+","+h)return;var f=g[h],m=f.inside,b=!!f.lookbehind,x=!!f.greedy,y=f.alias;if(x&&!f.pattern.global){var v=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,v+"g")}for(var F=f.pattern||f,w=a.next,k=l;w!==e.tail&&!(c&&k>=c.reach);k+=w.value.length,w=w.next){var A=w.value;if(e.length>t.length)return;if(!(A instanceof i)){var $,C=1;if(x){if(!($=r(F,k,t,b))||$.index>=t.length)break;var S=$.index,P=$.index+$[0].length,T=k;for(T+=w.value.length;S>=T;)T+=(w=w.next).value.length;if(k=T-=w.value.length,w.value instanceof i)continue;for(var D=w;D!==e.tail&&(T<P||"string"==typeof D.value);D=D.next)C++,T+=D.value.length;C--,A=t.slice(k,T),$.index-=k}else if(!($=r(F,0,A,b)))continue;S=$.index;var _=$[0],E=A.slice(0,S),L=A.slice(S+_.length),j=k+A.length;c&&j>c.reach&&(c.reach=j);var z=w.prev;if(E&&(z=u(e,z,E),k+=E.length),d(e,z,C),w=u(e,z,new i(p,m?s.tokenize(_,m):_,y,_)),L&&u(e,w,L),C>1){var N={cause:p+","+h,reach:j};o(t,e,n,w.prev,k,N),c&&N.reach>c.reach&&(c.reach=N.reach)}}}}}}function l(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function u(t,e,n){var a=e.next,s={value:n,prev:e,next:a};return e.next=s,a.prev=s,t.length++,s}function d(t,e,n){for(var a=e.next,s=0;s<n&&a!==t.tail;s++)a=a.next;e.next=a,a.prev=e,t.length-=s}if(t.Prism=s,i.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var a="";return e.forEach((function(e){a+=t(e,n)})),a}var i={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},r=e.alias;r&&(Array.isArray(r)?Array.prototype.push.apply(i.classes,r):i.classes.push(r)),s.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(s.disableWorkerMessageHandler||t.addEventListener("message",(function(e){var n=JSON.parse(e.data),a=n.language,i=n.code,r=n.immediateClose;t.postMessage(s.highlight(i,s.languages[a],a)),r&&t.close()}),!1),s):s;var c=s.util.currentScript();function p(){s.manual||s.highlightAll()}if(c&&(s.filename=c.src,c.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var g=document.readyState;"loading"===g||"interactive"===g&&c&&c.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 *
	 * @license MIT <https://opensource.org/licenses/MIT>
	 * @author Lea Verou <https://lea.verou.me>
	 * @namespace
	 * @public
	 */t.exports&&(t.exports=e),void 0!==i&&(i.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",(function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))})),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+n]={pattern:/[\s\S]+/,inside:e.languages[n]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return t})),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(void 0!==e&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",a="loading",s="loaded",i="pre[data-src]:not(["+n+'="'+s+'"]):not(['+n+'="'+a+'"])';e.hooks.add("before-highlightall",(function(t){t.selector+=", "+i})),e.hooks.add("before-sanity-check",(function(r){var o=r.element;if(o.matches(i)){r.code="",o.setAttribute(n,a);var l=o.appendChild(document.createElement("CODE"));l.textContent="Loading…";var u=o.getAttribute("data-src"),d=r.language;if("none"===d){var c=(/\.(\w+)$/.exec(u)||[,"none"])[1];d=t[c]||c}e.util.setLanguage(l,d),e.util.setLanguage(o,d);var p=e.plugins.autoloader;p&&p.loadLanguages(d),function(t,e,n){var a=new XMLHttpRequest;a.open("GET",t,!0),a.onreadystatechange=function(){4==a.readyState&&(a.status<400&&a.responseText?e(a.responseText):a.status>=400?n("✖ Error "+a.status+" while fetching file: "+a.statusText):n("✖ Error: File does not exist or is empty"))},a.send(null)}(u,(function(t){o.setAttribute(n,s);var a=function(t){var e=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t||"");if(e){var n=Number(e[1]),a=e[2],s=e[3];return a?s?[n,Number(s)]:[n,void 0]:[n,n]}}(o.getAttribute("data-range"));if(a){var i=t.split(/\r\n?|\n/g),r=a[0],u=null==a[1]?i.length:a[1];r<0&&(r+=i.length),r=Math.max(0,Math.min(r-1,i.length)),u<0&&(u+=i.length),u=Math.max(0,Math.min(u,i.length)),t=i.slice(r,u).join("\n"),o.hasAttribute("data-start")||o.setAttribute("data-start",String(r+1))}l.textContent=t,e.highlightElement(l)}),(function(t){o.setAttribute(n,"failed"),l.textContent=t}))}})),e.plugins.fileHighlight={highlight:function(t){for(var n,a=(t||document).querySelectorAll(i),s=0;n=a[s++];)e.highlightElement(n)}};var r=!1;e.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}(o);var l=r(o.exports);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript;class u{#m;#b;#x;#y;#v;get expectValue(){return this.#x}constructor(t,e,a){this.#b=e,this.#x=a,this.#F(t),dispatchEvent(new CustomEvent(n.ADD_UNIT_NUM))}get dom(){return this.#m}execute(t){try{this.#b(((e,n)=>{Array.isArray(this.#x)&&Array.isArray(e)?this.#y=this.#x.every(((t,n)=>t===e[n])):this.#y=this.#x===e,this.#v=!this.#y,this.determinePassFailAndDispatchEvent(this.#y),this.#m.querySelector(".result").textContent=JSON.stringify(e),this.#m.querySelector(".pass-fail").textContent=""+(this.#y?"PASS":"FAIL"),this.#m.querySelector(".pass-fail").className="pass-fail "+(this.#y?"pass":"fail"),this.#m.querySelector(".error").textContent=n,this.#w(),t.run(this.#y),l.highlightAll()}))}catch(e){this.#v=!0,this.determinePassFailAndDispatchEvent(this.#y),this.#m.querySelector(".pass-fail").textContent=""+(this.#y?"PASS":"FAIL"),this.#m.querySelector(".pass-fail").className="pass-fail "+(this.#y?"pass":"fail"),this.#m.querySelector(".error").textContent=e,this.#w(),t.run(!1,e),l.highlightAll()}}#w(){this.#m.querySelector(".red-unit-test-code-wrap").style.display=this.#v?"":"none",this.#m.querySelector(".red-unit-test-wrap").style.background=""+(this.#y?"":"#2d0000"),this.#m.querySelector(".red-unit-test-title-open-close").innerHTML=""+(this.#v?"close":"open")}determinePassFailAndDispatchEvent(t){dispatchEvent(new CustomEvent(t?n.PASS_UNIT_NUM:n.FAIL_UNIT_NUM))}#F(t){var n;this.#m=e(),this.#m.innerHTML=` \n\t\t\t<div class="red-unit-test-wrap">\n\t\t\t\t<div class="red-unit-test-title-wrap">\n\t\t\t\t\t<div class="red-unit-test-title">${t}</div>\n\t\t\t\t\t<div class="red-unit-test-title-open-close"></div>\n\t\t\t\t</div>\n\t\t\t\t<pre class="red-unit-test-code-wrap" style="display: none">${n=`${this.#b}`,`<code class="language-javascript">${n}</code>`}</pre>\n\t\t\t\t<div class="red-unit-test-result-wrap">\n\t\t\t\t\t<span class="pass-fail"></span>\n\t\t\t\t\t<div class="pass-fail"><span>expect</span> : ${JSON.stringify(this.#x)}</div>\n\t\t\t\t\t<div class="pass-fail"><span>result</span> : <span class="result"></span></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="error"></div>\n\t\t\t\t\n\t\t\t</div> \n\t\t`,document.body.appendChild(this.#m),this.#m.querySelector(".red-unit-test-title-wrap").addEventListener("click",(()=>{this.#v=!this.#v,this.#w()}))}}class d{#n=0;#a=0;#k=0;#A=[];#l;#$;#C;#S;#P;#T;constructor(t,n,a){this.#P=t,this.#T=n,this.#l=e("red-unit-test-runner-root"),this.#$=e("red-unit-test-runner-test-container-title"),this.#$.innerHTML=this.#T,this.#C=e(),this.#S=e("red-unit-test-runner-test-container"),window.self!==window.top&&(this.#l.style.display="none"),this.#l.appendChild(this.#$),this.#l.appendChild(this.#C),this.#l.appendChild(this.#S),document.body.appendChild(this.#l),a(this),this.#D()}defineTest=(t,e,n)=>{const a=new u(t,e,n);this.#A.push(a),this.#S.appendChild(a.dom),this.#_(),this.#P.increaseTotalCount()};run(t){t?this.#n++:this.#a++,this.#_(),this.#k++,this.#P.updateState(t),this.#k<this.#A.length&&requestAnimationFrame((()=>{this.#D()}))}#D(){this.#A[this.#k].execute(this)}#_(){const t=this.#A.length!==this.#n+this.#a;this.#$.innerHTML=`${this.#T} - <span style="color:${this.#a?"red":""}">${t?"ing...":this.#a?"Fail!":"All Pass!"}</span>`,this.#C.innerHTML=`\n\t\t\t<div class="red-unit-test-container-state-box" style="background:${this.#a?"red":""}">\n\t\t\t\t<div>PASS : <span class="unit-pass-count">${this.#n.toLocaleString()}</span></div>\n\t\t\t\t/<div>FAIL : <span class="unit-fail-count">${this.#a.toLocaleString()}</span></div>\n\t\t\t\t/<div>TOTAL : <span class="unit-total-count">${this.#A.length.toLocaleString()}</span></div>\n\t\t\t</div>\n\t\t`}}Object.freeze(d);class c{#n=0;#a=0;#e=0;#E=0;#s;#l;#L;#$;#C;constructor(t){this.#s=t}static pageLoader(t,n,i){const r=new s(t,n);i||(i=e("red-unit-pages-root"),document.body.appendChild(i)),n.forEach((t=>{const e=new a(t.title,t.src,r);i.appendChild(e.wrap)}))}testGroup=(t,e)=>{this.#j(),this.#E++,new d(this,t,e)};increaseTotalCount(){this.#e++}updateState(t){t?this.#n++:this.#a++;const e=this.#e!==this.#n+this.#a;this.#$.innerHTML=`${this.#s} - <span style="color:${e?"white":this.#a?"red":""}">${e?"ing...":this.#a?"Fail!":"All Pass!!"}</span>`,this.#C.style.background=this.#a?"red":"",this.#C.innerHTML=`\n\t\t\t\t<div>pass : <span class="unit-pass-count">${this.#n.toLocaleString()}</span></div>\n\t\t\t\t/<div>fail : <span class="unit-fail-count">${this.#a.toLocaleString()}</span></div>\n\t\t\t  /<div>total : <span class="unit-total-count">${this.#e.toLocaleString()}</span></div>\t\n\t\t\t  ${this.#E>1?`/<div>group : <span class="unit-group-count">${this.#E.toLocaleString()}</span></div>`:""}\t\n\t\t`}#j(){this.#l||(this.#l=e("red-unit-root"),this.#L=e("red-unit-test-runner-title-wrap"),this.#$=e("red-unit-test-runner-title"),this.#$.innerHTML=this.#s,this.#C=e("red-unit-test-runner-state-box"),this.#L.appendChild(this.#$),this.#L.appendChild(this.#C),this.#l.appendChild(this.#L),document.body.appendChild(this.#l))}}Object.freeze(c);export{c as default};
