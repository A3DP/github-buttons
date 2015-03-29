(function(){var t,e,n,r,o,a,i,c,s,u,l,h,d,f,p,g,m,y,b,w,v,_,k=[].slice,C=function(t,e){function n(){this.constructor=t}for(var r in e)x.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},x={}.hasOwnProperty;for(_=this,m=_.document,a={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]},(a.script=m.getElementById(a.scriptId))&&(a.url=a.script.src.replace(/buttons\.js([?#].*)?$/,"")),s=function(){function t(){}var e;return t.flatten=function(t){var e,n;return e=function(t,r){var o,a,i,c,s,u;switch(Object.prototype.toString.call(t)){case"[object Object]":for(c in t)u=t[c],e(u,r?r+"."+c:c);break;case"[object Array]":for(o=i=0,s=t.length;s>i;o=++i)a=t[o],e(a,r+"["+o+"]");break;default:n[r]=t}},n={},e(t,""),n},t.expand=function(t){var n,r,o,a,i,c;a=[];for(n in t){for(c=t[n],o=n.match(/((?!\[\d+\])[^.])+|\[\d+\]/g),i=a,r=0;o.length;)null==i[r]&&(i[r]=o[0]===e(o[0])?{}:[]),i=i[r],r=e(o.shift());i[r]=c}return a[0]},e=function(t){var e;return(e=t.match(/^\[(\d+)\]$/))?Number(e[1]):t},t}(),g=function(){function t(){}return t.stringify=function(t){var e,n,r;n=[];for(e in t)r=t[e],n.push(e+"="+(null!=r?r:""));return n.join("&")},t.parse=function(t){var e,n,r,o,a,i,c,s;for(o={},i=t.split("&"),e=0,r=i.length;r>e;e++)a=i[e],""!==a&&(c=a.split("="),n=c[0],s=2<=c.length?k.call(c,1):[],""!==n&&(o[n]=s.join("=")));return o},t}(),d=function(){function t(){}return t.encode=function(t){return"#"+encodeURIComponent(g.stringify(s.flatten(t)))},t.decode=function(t){return null==t&&(t=m.location.hash),s.expand(g.parse(decodeURIComponent(t.replace(/^#/,""))))||{}},t}(),c=function(){function t(t,e){this.$=t&&1===t.nodeType?t:m.createElement(t),e&&e.call(this,this.$)}var e,n,r,o,a,i;return t.prototype.get=function(){return this.$},t.prototype.on=function(){var t,e,r,o,a,i,c;for(r=2<=arguments.length?k.call(arguments,0,a=arguments.length-1):(a=0,[]),o=arguments[a++],t=function(t){return function(e){return o.call(t,e||_.event)}}(this),i=0,c=r.length;c>i;i++)e=r[i],n(this.$,e,t)},t.prototype.once=function(){var t,e,r,o,a,c,s;for(r=2<=arguments.length?k.call(arguments,0,a=arguments.length-1):(a=0,[]),o=arguments[a++],t=function(e){return function(n){var a,c,s;for(c=0,s=r.length;s>c;c++)a=r[c],i(e.$,a,t);return o.call(e,n||_.event)}}(this),c=0,s=r.length;s>c;c++)e=r[c],n(this.$,e,t)},t.prototype.addClass=function(t){r(this.$,t)||e(this.$,t)},t.prototype.removeClass=function(t){r(this.$,t)&&a(this.$,t)},t.prototype.hasClass=function(t){return r(this.$,t)},n=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},i=function(t,e,n){t.removeEventListener?t.removeEventListener(""+e,n):t.detachEvent("on"+e,n)},o=/[ \t\n\f\r]+/g,e=function(t,e){t.className+=" "+e},a=function(t,e){t.className=(" "+t.className+" ").replace(o," ").replace(" "+e+" ","").replace(/^ | $/,"")},r=function(t,e){return(" "+t.className+" ").replace(o," ").indexOf(" "+e+" ")>=0},t}(),l=function(t){function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,r,o,a;r={allowtransparency:!0,scrolling:"no",frameBorder:0};for(n in r)a=r[n],e.setAttribute(n,a);o={border:"none",height:"0",width:"1px"};for(n in o)a=o[n],e.style[n]=a;t&&t.call(this,e)})}var n,r;return C(e,t),e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document,e.open(),e.write(t),e.close()}catch(n){}},e.prototype.load=function(t){return this.$.src=t},e.prototype.size=function(){var t,e,o,a,i,c;try{return o=this.$.contentWindow.document,i=o.documentElement,t=o.body,i.style.overflow=t.style.overflow=_.opera?"scroll":"visible",c=t.scrollWidth,a=t.scrollHeight,1!==n&&(t.style.display="inline-block",e=t.getBoundingClientRect(),c=Math.max(c,r(e.width)),a=Math.max(a,r(e.height)),t.style.display=""),i.style.overflow=t.style.overflow="",{width:c+"px",height:a+"px"}}catch(s){return{}}},e.prototype.resize=function(t){var e,n,r;return n=null!=t?t:this.size(),r=n.width,e=n.height,r&&(this.$.style.width=r),e?this.$.style.height=e:void 0},n=_.devicePixelRatio||1,r=function(t){return Math.ceil(Math.round(t*n)/n*2)/2||0},e}(c),t=function(){function t(){}var e;return t.parse=function(t){var n,r,o;return{href:e(t.href),text:t.getAttribute("data-text")||t.textContent||t.innerText,data:{count:{api:(n=t.getAttribute("data-count-api"))&&~n.indexOf("#")?n.replace(/^(?!\/)/,"/"):void 0,href:e(t.getAttribute("data-count-href"))||e(t.href)},style:(o=t.getAttribute("data-style"))?o:void 0,icon:(r=t.getAttribute("data-icon"))?r:void 0}}},e=function(t){return/^\s*javascript:/i.test(t)?"":t},t}(),n=function(t){function e(t,n,r){var o;e.__super__.constructor.call(this,n),o=function(e){return function(){var n;n=e.size(),e.once("load",function(){this.resize(n),r&&r.call(this,this.$)}),e.load(a.url+"buttons.html"+t)}}(this),this.once("load",function(){var t;(n=this.$.contentWindow.callback)?(t=n.script,t.readyState?new c(t).on("readystatechange",function(){/loaded|complete/.test(t.readyState)&&o()}):new c(t).on("load","error",function(){o()})):o()}),this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+a.url+'assets/css/buttons.css">\n<script>document.location.hash = "'+t+'";</script>\n</head>\n<body>\n<script src="'+a.script.src+'"></script>\n</body>\n</html>')}return C(e,t),e}(l),r=function(){function t(t){t&&t.data&&(m.body.className=function(){var e,n,r,o;for(r=a.styles,e=0,n=r.length;n>e;e++)if(o=r[e],o===t.data.style)return o}()||a.styles[0],t.href&&(m.getElementsByTagName("base")[0].href=t.href),new e(t,function(t){m.body.appendChild(t)}),new n(t,function(t){m.body.appendChild(t)}))}var e,n;return e=function(t){function e(t,n){e.__super__.constructor.call(this,"a",function(e){e.className="button",t.href&&(e.href=t.href),new c("i",function(n){n=m.createElement("i"),n.className=(t.data.icon||a.icon)+(a.iconClass?" "+a.iconClass:""),e.appendChild(n)}),new c("span",function(t){t.appendChild(m.createTextNode(" ")),e.appendChild(t)}),new c("span",function(n){t.text&&n.appendChild(m.createTextNode(t.text)),e.appendChild(n)}),n&&n(e)})}return C(e,t),e}(c),n=function(t){function e(t,n){t.data.count&&t.data.count.api&&e.__super__.constructor.call(this,"a",function(e){e.className="count",t.data.count.href&&(e.href=t.data.count.href),new c("b",function(t){e.appendChild(t)}),new c("i",function(t){e.appendChild(t)}),new c("span",function(r){var o;e.appendChild(r),o=function(){var e,n;return n=t.data.count.api.split("#")[0],e=g.parse(n.split("?").slice(1).join("?")),e.callback="callback",n.split("?")[0]+"?"+g.stringify(e)}(),new c("script",function(i){var c;i.async=!0,i.src=""+a.api+o,_.callback=function(o){var a;_.callback=null,200===o.meta.status&&(a=s.flatten(o.data)[t.data.count.api.split("#").slice(1).join("#")],"[object Number]"===Object.prototype.toString.call(a)&&(a=(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.appendChild(m.createTextNode(" "+a+" ")),n&&n(e))},_.callback.script=i,this.on("error",function(){_.callback=null}),i.readyState&&this.on("readystatechange",function(){"loaded"===i.readyState&&i.children&&"loading"===i.readyState&&(_.callback=null)}),c=m.getElementsByTagName("head")[0],c.insertBefore(i,c.firstChild)})})})}return C(e,t),e}(c),t}(),h=function(){function t(){}return t.low_rate_limit=!1,_.callback=function(e){t.rate_limit=e.data,t.low_rate_limit=t.rate_limit.resources.core.remaining<16},t.update=function(){_.callback.script||new c("script",function(t){var e;t.async=!0,t.src="https://api.github.com/rate_limit?callback=callback",_.callback.script=t,this.on("readystatechange","load","error",function(){(!t.readyState||/loaded|complete/.test(t.readyState))&&(t.parentNode.removeChild(t),_.callback.script=null)}),e=m.getElementsByTagName("head")[0],e.insertBefore(t,e.firstChild)})},t.update(),t}(),u=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return C(e,t),e.prototype.on=function(){var t,n,r,o,a,i,s,u;if(r=2<=arguments.length?k.call(arguments,0,a=arguments.length-1):(a=0,[]),o=arguments[a++],r.indexOf("change")>=0)for(t=function(t){return function(e){return o.call(t,e||_.event)}}(this),u=this.get().elements,i=0,s=u.length;s>i;i++)n=u[i],new c(n).on("change","input",t);return e.__super__.on.apply(this,arguments)},e.prototype.serialize=function(){var t,e,n,r,o;for(t={},o=this.get().elements,e=0,n=o.length;n>e;e++)if(r=o[e],r.name)switch(r.type){case"radio":case"checkbox":r.checked&&(t[r.name]=r.value);break;default:t[r.name]=r.value}return t},e}(c),i=function(t){function e(){e.__super__.constructor.apply(this,arguments),this.on("load",function(){var t,e,n,r;for(r=this.get().contentWindow.document.getElementsByTagName("a"),e=0,n=r.length;n>e;e++)t=r[e],new c(t).on("click",function(t){return t.preventDefault(),!1});new c(this.get().contentWindow.document.body).on("click",function(t){return function(){t.get().parentNode.click()}}(this))})}return C(e,t),e}(c),f=function(t){function e(t,n){var r,o,i;o=t.href,i=t.text,r=t.data,e.__super__.constructor.call(this,"a",function(t){var e,c;t.className=a.anchorClass,t.href=o,t.appendChild(m.createTextNode(""+i));for(e in r)c=r[e],t.setAttribute("data-"+e,c);n&&n(t)})}return C(e,t),e}(c),p=function(t){function e(t){this.$=t,this.on("load",function(){var t,e;(t=this.get().contentWindow.callback)?(e=t.script,e.readyState?new c(e).on("readystatechange",function(){/loaded|complete/.test(e.readyState)&&this.resize()}):new c(e).on("load","error",function(){this.resize()})):this.resize()})}return C(e,t),e.prototype.load=function(t){this.get().parentNode.style.height=("mega"===t.data.style?28:20)+2+"px",this.get().style.width="1px",this.get().style.height="0",this.get().src="buttons.html"+d.encode(t),this.get().contentWindow.document.location.reload()},e}(l),o=function(t){function e(){e.__super__.constructor.apply(this,arguments),this.on("focus",function(){this.get().select()}),this.on("click",function(){this.get().select()}),this.on("mouseup",function(t){return t.preventDefault(),!1})}return C(e,t),e}(c),e=function(e){function n(e,n){var r,o,a,i,c,s,u,l,p;this.$=e,i=n.content,s=n.preview,r=s.button,c=s.frame,a=s.code,p=s.warning,u=n.snippet,l=n.user_repo,u.get().value='<!-- Place this tag right after the last button or just before your close body tag. -->\n<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>',o=function(e){return function(n){var o,s,u,g,m,y,b,w,v,_;if(s=n.force,w=e.serialize(),w.type){for(i.removeClass("hidden"),v=["repo","standard-icon"],u=0,m=v.length;m>u;u++)b=v[u],e.get().elements[b].disabled="follow"===w.type;for(_=["show-count"],g=0,y=_.length;y>g;g++)b=_[g],e.get().elements[b].disabled="download"===w.type;w.user&&!/^[a-z0-9][a-z0-9-]*$/i.test(w.user)||"follow"!==w.type&&w.repo&&(!/^[\w.-]+$/.test(w.repo)||/^\.\.?$/.test(w.repo))?l.addClass("has-error"):(l.removeClass("has-error"),""===w.user||"follow"!==w.type&&""===w.repo?l.addClass("has-warning"):l.removeClass("has-warning")),(l.hasClass("has-error")||l.hasClass("has-warning"))&&(w.user="ntkme",w.repo="github-buttons"),(e.cache!==(o=d.encode(w))||s)&&(e.cache=o,new f(e.parse(w),function(n){var o;a.get().value="<!-- Place this tag where you want the button to render. -->\n"+n.outerHTML,r.addClass("hidden"),null!=w["show-count"]&&"download"!==w.type&&(h.update(),h.low_rate_limit&&(r.removeClass("hidden"),o=new Date(1e3*h.rate_limit.resources.core.reset),(!e.reset||o>e.reset)&&(e.reset=o,p.removeClass("hidden")),s?p.addClass("hidden"):n.removeAttribute("data-count-api"))),c.load(t.parse(n)),n=null}))}}}(this),r.on("click",function(t){return t.preventDefault(),o({force:!0}),!1}),this.on("change",o)}return C(n,e),n.prototype.parse=function(t){var e,n,r,o;if(null==t&&(t=this.serialize()),r=t.type,o=t.user,n=t.repo,e={className:"github-button",href:function(){switch(r){case"follow":return"https://github.com/"+o;case"watch":case"star":return"https://github.com/"+o+"/"+n;case"fork":return"https://github.com/"+o+"/"+n+"/fork";case"issue":return"https://github.com/"+o+"/"+n+"/issues";case"download":return"https://github.com/"+o+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(r){case"follow":return"Follow @"+o;default:return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}}(),data:{icon:function(){switch(r){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-git-branch";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()}},null!=t["large-button"]&&(e.data.style="mega"),null!=t["show-count"])switch(r){case"follow":e.data["count-href"]="/"+o+"/followers",e.data["count-api"]="/users/"+o+"#followers";break;case"watch":e.data["count-href"]="/"+o+"/"+n+"/watchers",e.data["count-api"]="/repos/"+o+"/"+n+"#subscribers_count";break;case"star":e.data["count-href"]="/"+o+"/"+n+"/stargazers",e.data["count-api"]="/repos/"+o+"/"+n+"#stargazers_count";break;case"fork":e.data["count-href"]="/"+o+"/"+n+"/network",e.data["count-api"]="/repos/"+o+"/"+n+"#forks_count";break;case"issue":e.data["count-api"]="/repos/"+o+"/"+n+"#open_issues_count"}return(null!=t["standard-icon"]||"octicon-mark-github"===e.data.icon)&&delete e.data.icon,e},n}(u),v=m.getElementsByTagName("iframe"),b=0,w=v.length;w>b;b++)y=v[b],"preview"!==y.parentNode.id&&new i(y);new e(m.getElementById("button-config"),{content:new c(m.getElementById("content")),user_repo:new c(m.getElementById("user-repo")),preview:{button:new c(m.getElementById("preview-button")),frame:new p(m.getElementById("preview").getElementsByTagName("iframe")[0]),code:new o(m.getElementById("code")),warning:new c(m.getElementById("preview-warning"))},snippet:new o(m.getElementById("snippet"))}),this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map