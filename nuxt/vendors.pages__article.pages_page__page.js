(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{586:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof o?new o(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var o,l,c=r.util.type(t);switch(n=n||{},c){case"Object":if(l=r.util.objId(t),n[l])return n[l];for(var d in o={},n[l]=o,t)t.hasOwnProperty(d)&&(o[d]=e(t[d],n));return o;case"Array":return l=r.util.objId(t),n[l]?n[l]:(o=[],n[l]=o,t.forEach(function(t,i){o[i]=e(t,n)}),o);default:return t}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var l=(o=o||r.languages)[e],c={};for(var d in l)if(l.hasOwnProperty(d)){if(d==t)for(var f in n)n.hasOwnProperty(f)&&(c[f]=n[f]);n.hasOwnProperty(d)||(c[d]=l[d])}var m=o[e];return o[e]=c,r.languages.DFS(r.languages,function(t,n){n===m&&t!=e&&(this[t]=c)}),c},DFS:function e(t,n,o,l){l=l||{};var c=r.util.objId;for(var i in t)if(t.hasOwnProperty(i)){n.call(t,i,t[i],o||i);var d=t[i],f=r.util.type(d);"Object"!==f||l[c(d)]?"Array"!==f||l[c(d)]||(l[c(d)]=!0,e(d,n,i,l)):(l[c(d)]=!0,e(d,n,null,l))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var o={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",o);for(var element,l=o.elements||e.querySelectorAll(o.selector),i=0;element=l[i++];)r.highlightElement(element,!0===t,o.callback)},highlightElement:function(element,n,o){for(var l,c,d=element;d&&!t.test(d.className);)d=d.parentNode;d&&(l=(d.className.match(t)||[,""])[1].toLowerCase(),c=r.languages[l]),element.className=element.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,element.parentNode&&(d=element.parentNode,/pre/i.test(d.nodeName)&&(d.className=d.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var f={element:element,language:l,grammar:c,code:element.textContent},m=function(e){f.highlightedCode=e,r.hooks.run("before-insert",f),f.element.innerHTML=f.highlightedCode,r.hooks.run("after-highlight",f),r.hooks.run("complete",f),o&&o.call(f.element)};if(r.hooks.run("before-sanity-check",f),f.code)if(r.hooks.run("before-highlight",f),f.grammar)if(n&&e.Worker){var h=new Worker(r.filename);h.onmessage=function(e){m(e.data)},h.postMessage(JSON.stringify({language:f.language,code:f.code,immediateClose:!0}))}else m(r.highlight(f.code,f.grammar,f.language));else m(r.util.encode(f.code));else r.hooks.run("complete",f)},highlight:function(text,e,t){var n={code:text,grammar:e,language:t};return r.hooks.run("before-tokenize",n),n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),o.stringify(r.util.encode(n.tokens),n.language)},matchGrammar:function(text,e,t,n,l,c,d){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){if(f==d)return;var m=t[f];m="Array"===r.util.type(m)?m:[m];for(var h=0;h<m.length;++h){var pattern=m[h],k=pattern.inside,y=!!pattern.lookbehind,w=!!pattern.greedy,v=0,F=pattern.alias;if(w&&!pattern.pattern.global){var x=pattern.pattern.toString().match(/[imuy]*$/)[0];pattern.pattern=RegExp(pattern.pattern.source,x+"g")}pattern=pattern.pattern||pattern;for(var i=n,A=l;i<e.length;A+=e[i].length,++i){var S=e[i];if(e.length>text.length)return;if(!(S instanceof o)){if(w&&i!=e.length-1){if(pattern.lastIndex=A,!(C=pattern.exec(text)))break;for(var $=C.index+(y?C[1].length:0),_=C.index+C[0].length,N=i,p=A,z=e.length;N<z&&(p<_||!e[N].type&&!e[N-1].greedy);++N)$>=(p+=e[N].length)&&(++i,A=p);if(e[i]instanceof o)continue;P=N-i,S=text.slice(A,p),C.index-=A}else{pattern.lastIndex=0;var C=pattern.exec(S),P=1}if(C){y&&(v=C[1]?C[1].length:0);_=($=C.index+v)+(C=C[0].slice(v)).length;var j=S.slice(0,$),E=S.slice(_),O=[i,P];j&&(++i,A+=j.length,O.push(j));var B=new o(f,k?r.tokenize(C,k):C,F,C,w);if(O.push(B),E&&O.push(E),Array.prototype.splice.apply(e,O),1!=P&&r.matchGrammar(text,e,t,i,A,!0,f),c)break}else if(c)break}}}}},tokenize:function(text,e){var t=[text],n=e.rest;if(n){for(var o in n)e[o]=n[o];delete e.rest}return r.matchGrammar(text,t,e,0,0,!1),t},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var o,i=0;o=n[i++];)o(t)}},Token:o};function o(e,content,t,n,r){this.type=e,this.content=content,this.alias=t,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=r,o.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(element){return o.stringify(element,t,e)}).join("");var l={type:e.type,content:o.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var c=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,c)}r.hooks.run("wrap",l);var d=Object.keys(l.attributes).map(function(e){return e+'="'+(l.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(d?" "+d:"")+">"+l.content+"</"+l.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),o=n.language,code=n.code,l=n.immediateClose;e.postMessage(r.highlight(code,r.languages[o],o)),l&&e.close()},!1),r):r;var script=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return script&&(r.filename=script.src,r.manual||script.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var l={};l[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(pre){if(!pre.hasAttribute("data-src-loaded")){for(var e,r=pre.getAttribute("data-src"),o=pre,l=/\blang(?:uage)?-([\w-]+)\b/i;o&&!l.test(o.className);)o=o.parentNode;if(o&&(e=(pre.className.match(l)||[,""])[1]),!e){var c=(r.match(/\.(\w+)$/)||[,""])[1];e=t[c]||c}var code=document.createElement("code");code.className="language-"+e,pre.textContent="",code.textContent="Loading…",pre.appendChild(code);var d=new XMLHttpRequest;d.open("GET",r,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(code.textContent=d.responseText,n.highlightElement(code),pre.setAttribute("data-src-loaded","")):d.status>=400?code.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:code.textContent="✖ Error: File does not exist or is empty")},d.send(null)}}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var pre=e.element.parentNode;if(pre&&/pre/i.test(pre.nodeName)&&pre.hasAttribute("data-src")&&pre.hasAttribute("data-download-link")){var t=pre.getAttribute("data-src"),a=document.createElement("a");return a.textContent=pre.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=t,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,n(28))},587:function(e,t,n){var content=n(594);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(5).default)("5f5da7db",content,!0,{sourceMap:!1})},588:function(e,t,n){var content=n(595);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(5).default)("26957bcb",content,!0,{sourceMap:!1})},589:function(e,t){!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",t=/\n(?!$)/g,n=function(e){var n=a(e)["white-space"];if("pre-wrap"===n||"pre-line"===n){var r=e.querySelector("code"),o=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),i=r.textContent.split(t);s||((s=document.createElement("span")).className="line-numbers-sizer",r.appendChild(s)),s.style.display="block",i.forEach(function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;o.children[t].style.height=n+"px"}),s.textContent="",s.style.display="none"}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),n)}),Prism.hooks.add("complete",function(e){if(e.code){var r=e.element,o=r.parentNode;if(o&&/pre/i.test(o.nodeName)&&!r.querySelector(".line-numbers-rows")){for(var l=!1,s=/(?:^|\s)line-numbers(?:\s|$)/,i=r;i;i=i.parentNode)if(s.test(i.className)){l=!0;break}if(l){r.className=r.className.replace(s," "),s.test(o.className)||(o.className+=" line-numbers");var c,a=e.code.match(t),d=a?a.length+1:1,u=new Array(d+1).join("<span></span>");(c=document.createElement("span")).setAttribute("aria-hidden","true"),c.className="line-numbers-rows",c.innerHTML=u,o.hasAttribute("data-start")&&(o.style.counterReset="linenumber "+(parseInt(o.getAttribute("data-start"),10)-1)),e.element.appendChild(c),n(o),Prism.hooks.run("line-numbers",e)}}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var r=t.querySelector(".line-numbers-rows"),o=parseInt(t.getAttribute("data-start"),10)||1,s=o+(r.children.length-1);n<o&&(n=o),s<n&&(n=s);var i=n-o;return r.children[i]}}}}}()},590:function(e,t){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,n,r,o){if(a.language===n){var l=a.tokenStack=[];a.code=a.code.replace(r,function(e){if("function"==typeof o&&!o(e))return e;for(var r,c=l.length;-1!==a.code.indexOf(r=t(n,c));)++c;return l[c]=e,r}),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(p,n){if(p.language===n&&p.tokenStack){p.grammar=e.languages[n];var r=0,o=Object.keys(p.tokenStack);!function l(c){for(var d=0;d<c.length&&!(r>=o.length);d++){var a=c[d];if("string"==typeof a||a.content&&"string"==typeof a.content){var f=o[r],m=p.tokenStack[f],h="string"==typeof a?a:a.content,i=t(n,f),u=h.indexOf(i);if(-1<u){++r;var g=h.substring(0,u),k=new e.Token(n,e.tokenize(m,p.grammar),"language-"+n,m),s=h.substring(u+i.length),y=[];g&&y.push.apply(y,l([g])),y.push(k),s&&y.push.apply(y,l([s])),"string"==typeof a?c.splice.apply(c,[d,1].concat(y)):a.content=y}}else a.content&&l(a.content)}return c}(p.tokens)}}}})}(Prism)},591:function(e,t){!function(e){e.languages.php=e.languages.extend("clike",{keyword:/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,boolean:{pattern:/\b(?:false|true)\b/i,alias:"constant"},constant:[/\b[A-Z_][A-Z0-9_]*\b/,/\b(?:null)\b/i],comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),e.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),e.languages.insertBefore("php","comment",{delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"}}),e.languages.insertBefore("php","keyword",{variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),e.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}});var t={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,lookbehind:!0,inside:{rest:e.languages.php}};e.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:t}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:t}}}),delete e.languages.php.string,e.hooks.add("before-tokenize",function(t){/<\?/.test(t.code)&&e.languages["markup-templating"].buildPlaceholders(t,"php",/<\?(?:[^"'\/#]|\/(?![*\/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"php")})}(Prism)},594:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}",""])},595:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}",""])}}]);