!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=71)}([function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(57),o=(r=i)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},function(e,t,n){e.exports={default:n(34),__esModule:!0}},function(e,t,n){var r=n(28)("wks"),i=n(29),o=n(6).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},function(e,t){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(e,t,n){e.exports=!n(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(10),i=n(39),o=n(40),a=Object.defineProperty;t.f=n(5)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(6),i=n(4),o=n(21),a=n(9),u=n(11),s=function(e,t,n){var c,l,f,h=e&s.F,p=e&s.G,d=e&s.S,v=e&s.P,y=e&s.B,m=e&s.W,g=p?i:i[t]||(i[t]={}),b=g.prototype,x=p?r:d?r[t]:(r[t]||{}).prototype;for(c in p&&(n=t),n)(l=!h&&x&&void 0!==x[c])&&u(g,c)||(f=l?x[c]:n[c],g[c]=p&&"function"!=typeof x[c]?n[c]:y&&l?o(f,r):m&&x[c]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):v&&"function"==typeof f?o(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[c]=f,e&s.R&&b&&!b[c]&&a(b,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){var r=n(7),i=n(16);e.exports=n(5)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(14);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports={}},function(e,t,n){var r=n(28)("keys"),i=n(29);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,n){var r=n(13);e.exports=function(e){return Object(r(e))}},function(e,t){e.exports=!0},function(e,t,n){var r=n(38);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(14),i=n(6).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,n){var r=n(45),i=n(30);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,n){var r=n(25),i=n(13);e.exports=function(e){return r(i(e))}},function(e,t,n){var r=n(26);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(12),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(4),i=n(6),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(20)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(7).f,i=n(11),o=n(3)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){e.exports={default:n(60),__esModule:!0}},function(e,t,n){var r,i;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(o){if(void 0===(i="function"==typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=i),!0,e.exports=o(),!!0){var a=window.Cookies,u=window.Cookies=o();u.noConflict=function(){return window.Cookies=a,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function i(){}function o(t,n,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var s in o)o[s]&&(u+="; "+s,!0!==o[s]&&(u+="="+o[s].split(";")[0]));return document.cookie=t+"="+n+u}}function a(e,n){if("undefined"!=typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],a=0;a<o.length;a++){var u=o[a].split("="),s=u.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var c=t(u[0]);if(s=(r.read||r)(s,c)||t(s),n)try{s=JSON.parse(s)}catch(e){}if(i[c]=s,e===c)break}catch(e){}}return e?i[e]:i}}return i.set=o,i.get=function(e){return a(e,!1)},i.getJSON=function(e){return a(e,!0)},i.remove=function(t,n){o(t,"",e(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}(function(){})})},function(e,t,n){n(35),n(50),e.exports=n(4).Array.from},function(e,t,n){"use strict";var r=n(36)(!0);n(37)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var r=n(12),i=n(13);e.exports=function(e){return function(t,n){var o,a,u=String(i(t)),s=r(n),c=u.length;return s<0||s>=c?e?"":void 0:(o=u.charCodeAt(s))<55296||o>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?e?u.charAt(s):o:e?u.slice(s,s+2):a-56320+(o-55296<<10)+65536}}},function(e,t,n){"use strict";var r=n(20),i=n(8),o=n(41),a=n(9),u=n(17),s=n(42),c=n(31),l=n(49),f=n(3)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,d,v,y,m){s(n,t,d);var g,b,x,w=function(e){if(!h&&e in S)return S[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},O=t+" Iterator",k="values"==v,_=!1,S=e.prototype,j=S[f]||S["@@iterator"]||v&&S[v],T=j||w(v),M=v?k?w("entries"):T:void 0,E="Array"==t&&S.entries||j;if(E&&(x=l(E.call(new e)))!==Object.prototype&&x.next&&(c(x,O,!0),r||"function"==typeof x[f]||a(x,f,p)),k&&j&&"values"!==j.name&&(_=!0,T=function(){return j.call(this)}),r&&!m||!h&&!_&&S[f]||a(S,f,T),u[t]=T,u[O]=p,v)if(g={values:k?T:w("values"),keys:y?T:w("keys"),entries:M},m)for(b in g)b in S||o(S,b,g[b]);else i(i.P+i.F*(h||_),t,g);return g}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){e.exports=!n(5)&&!n(15)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(14);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";var r=n(43),i=n(16),o=n(31),a={};n(9)(a,n(3)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(a,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(10),i=n(44),o=n(30),a=n(18)("IE_PROTO"),u=function(){},s=function(){var e,t=n(22)("iframe"),r=o.length;for(t.style.display="none",n(48).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;r--;)delete s.prototype[o[r]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=r(e),n=new u,u.prototype=null,n[a]=e):n=s(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(7),i=n(10),o=n(23);e.exports=n(5)?Object.defineProperties:function(e,t){i(e);for(var n,a=o(t),u=a.length,s=0;u>s;)r.f(e,n=a[s++],t[n]);return e}},function(e,t,n){var r=n(11),i=n(24),o=n(46)(!1),a=n(18)("IE_PROTO");e.exports=function(e,t){var n,u=i(e),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;t.length>s;)r(u,n=t[s++])&&(~o(c,n)||c.push(n));return c}},function(e,t,n){var r=n(24),i=n(27),o=n(47);e.exports=function(e){return function(t,n,a){var u,s=r(t),c=i(s.length),l=o(a,c);if(e&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(12),i=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(6).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(11),i=n(19),o=n(18)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){"use strict";var r=n(21),i=n(8),o=n(19),a=n(51),u=n(52),s=n(27),c=n(53),l=n(54);i(i.S+i.F*!n(56)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,f,h=o(e),p="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,y=void 0!==v,m=0,g=l(h);if(y&&(v=r(v,d>2?arguments[2]:void 0,2)),null==g||p==Array&&u(g))for(n=new p(t=s(h.length));t>m;m++)c(n,m,y?v(h[m],m):h[m]);else for(f=g.call(h),n=new p;!(i=f.next()).done;m++)c(n,m,y?a(f,v,[i.value,m],!0):i.value);return n.length=m,n}})},function(e,t,n){var r=n(10);e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},function(e,t,n){var r=n(17),i=n(3)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[i]===e)}},function(e,t,n){"use strict";var r=n(7),i=n(16);e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},function(e,t,n){var r=n(55),i=n(3)("iterator"),o=n(17);e.exports=n(4).getIteratorMethod=function(e){if(null!=e)return e[i]||e["@@iterator"]||o[r(e)]}},function(e,t,n){var r=n(26),i=n(3)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),i))?n:o?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var r=n(3)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},e(o)}catch(e){}return n}},function(e,t,n){e.exports={default:n(58),__esModule:!0}},function(e,t,n){n(59);var r=n(4).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(8);r(r.S+r.F*!n(5),"Object",{defineProperty:n(7).f})},function(e,t,n){n(61),e.exports=n(4).Object.assign},function(e,t,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(62)})},function(e,t,n){"use strict";var r=n(5),i=n(23),o=n(63),a=n(64),u=n(19),s=n(25),c=Object.assign;e.exports=!c||n(15)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=r})?function(e,t){for(var n=u(e),c=arguments.length,l=1,f=o.f,h=a.f;c>l;)for(var p,d=s(arguments[l++]),v=f?i(d).concat(f(d)):i(d),y=v.length,m=0;y>m;)p=v[m++],r&&!h.call(d,p)||(n[p]=d[p]);return n}:c},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},,,,,,,function(e,t,n){"use strict";n.r(t);var r,i=n(2),o=n.n(i),a=n(0),u=n.n(a),s=n(1),c=n.n(s),l=new(function(){function e(){u()(this,e),this.props={},this.renderCallbacks=[],this.updateCallbacks=[],this.frameRendered=!0;var t=this.updateProps.bind(this),n=this.updateScroll.bind(this);document.addEventListener("DOMContentLoaded",t),window.addEventListener("resize load",t),window.addEventListener("scroll",n),window.requestAnimationFrame(this.renderLoop.bind(this))}return c()(e,[{key:"renderLoop",value:function(){this.frameRendered||(this.renderStuff(),this.frameRendered=!0),window.requestAnimationFrame(this.renderLoop.bind(this))}},{key:"registerRender",value:function(e){"function"==typeof e&&this.renderCallbacks.indexOf(e)<0&&this.renderCallbacks.push(e)}},{key:"renderStuff",value:function(){this.renderCallbacks.forEach(function(e){e()})}},{key:"registerUpdate",value:function(e){"function"==typeof e&&this.updateCallbacks.indexOf(e)<0&&this.updateCallbacks.push(e)}},{key:"updateStuff",value:function(){this.updateCallbacks.forEach(function(e){e()})}},{key:"updateScroll",value:function(){this.props.scrollY=window.scrollY,this.props.scrollX=window.scrollX,this.frameRendered=!1}},{key:"updateProps",value:function(){var e=document.body,t=document.documentElement,n=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight),r=Math.max(t.scrollHeight,t.offsetHeight);this.props.scrollHeight=Math.max(n,r),this.props.adminBarHeight=this.getAdminBarHeight(),this.props.windowWidth=window.innerWidth,this.props.windowHeight=window.innerHeight,this.updateScroll(),this.updateStuff()}},{key:"getAdminBarHeight",value:function(){var e=document.getElementById("wpadminbar");return e?e.getBoundingClientRect().height:0}},{key:"getProps",value:function(){return this.props}},{key:"getProp",value:function(e){return this.props[e]}}]),e}()),f=function(){function e(t){var n=this;u()(this,e),this.element=t,this.progress=0,this.timeline=new TimelineMax({paused:!0,onComplete:function(){n.paused=!0}}),this.pieces=this.getMarkupPieces(),this.paused=!1,this.offset=0,this.update(),this.updateOnScroll(),this.init()}return c()(e,[{key:"init",value:function(){var e=this;l.registerUpdate(function(){e.update()}),l.registerRender(function(){e.updateOnScroll()}),this.addIntroToTimeline(),this.timeline.addLabel("middle"),this.addOutroToTimeline(),this.timeline.addLabel("end"),this.pauseTimelineOnScroll(),this.timeline.play()}},{key:"update",value:function(){this.box=this.element.getBoundingClientRect()}},{key:"updateOnScroll",value:function(){var e=l.getProps(),t=e.scrollY,n=e.scrollHeight,r=e.windowHeight,i=.5*r,o=n-r-.5*i,a=this.box.y+.5*(this.box.height-r),u=Math.max(0,Math.min(a,o));this.start=u-.5*i,this.end=this.start+i,this.progress=(t-this.start)/(this.end-this.start),this.updateTimelineOnScroll()}},{key:"updateTimelineOnScroll",value:function(){if(this.paused){var e=this.timeline.progress(),t=this.timeline.getLabelTime("middle")/this.timeline.getLabelTime("end"),n=2*(this.progress-.5)*(1-t)+t;e!==(n=Math.min(Math.max(t,n),1))&&this.timeline.progress(n)}}},{key:"getMarkupPieces",value:function(){var e=jQuery(this.element).find(".novablocks-hero__inner-container").children().filter(".c-headline").first(),t=e.find(".c-headline__primary"),n=e.find(".c-headline__secondary"),r=e.next(".wp-block-separator"),i=r.find(".c-separator__flower"),o=r.find(".c-separator__line"),a=r.find(".c-separator__arrow"),u=e.prevAll(),s=e.nextAll().not(r);return{headline:e,title:t,subtitle:n,separator:r,sepFlower:i,sepLine:o,sepArrow:a,othersBefore:u,othersAfter:s}}},{key:"addIntroToTimeline",value:function(){var e=this.timeline,t=this.pieces,n=t.headline,r=t.title,i=t.subtitle,o=t.separator,a=t.sepFlower,u=t.sepLine,s=t.sepArrow,c=t.othersBefore,l=t.othersAfter;r.length&&r.text().trim().length&&(e.from(r,.72,{"letter-spacing":"1em","margin-right":"-0.9em",ease:Expo.easeOut},0),e.fromTo(r,.89,{opacity:0},{opacity:1,ease:Expo.easeOut},0),e.fromTo(n,1,{y:30},{y:0,ease:Expo.easeOut},0)),i.length&&(e.fromTo(i,.65,{opacity:0},{opacity:1,ease:Quint.easeOut},"-=0.65"),e.fromTo(i,.9,{y:30},{y:0,ease:Quint.easeOut},"-=0.65")),a.length&&(e.fromTo(a,.15,{opacity:0},{opacity:1,ease:Quint.easeOut},"-=0.6"),e.fromTo(a,.55,{rotation:-270},{rotation:0,ease:Back.easeOut},"-=0.5")),u.length&&(e.fromTo(u,.6,{width:0},{width:"42%",opacity:1,ease:Quint.easeOut},"-=0.55"),e.fromTo(o,.6,{width:0},{width:"100%",opacity:1,ease:Quint.easeOut},"-=0.6")),s.length&&e.fromTo(s,.2,{opacity:0},{opacity:1,ease:Quint.easeOut},"-=0.27"),l.length&&(e.fromTo(l,.5,{opacity:0},{opacity:1,ease:Quint.easeOut},"-=0.28"),e.fromTo(l,.75,{y:-20},{y:0},"-=0.5")),c.length&&(e.fromTo(c,.5,{opacity:0},{opacity:1,ease:Quint.easeOut},"-=0.75"),e.fromTo(c,.75,{y:20},{y:0},"-=0.75")),this.timeline=e}},{key:"addOutroToTimeline",value:function(){var e=this.pieces,t=e.title,n=e.subtitle,r=e.othersBefore,i=e.othersAfter,o=e.separator,a=e.sepLine,u=e.sepFlower,s=e.sepArrow,c=this.timeline;c.fromTo(t,1.08,{y:0},{opacity:0,y:-60,ease:Quad.easeIn},"middle"),c.to(n,1.08,{opacity:0,y:-90,ease:Quad.easeIn},"middle"),c.to(r,1.08,{y:60,opacity:0,ease:Quad.easeIn},"middle"),c.to(i,1.08,{y:60,opacity:0,ease:Quad.easeIn},"middle"),c.to(a,.86,{width:"0%",opacity:0,ease:Quad.easeIn},"-=0.94"),c.to(o,.86,{width:"0%",opacity:0,ease:Quad.easeIn},"-=0.86"),c.to(u,1,{rotation:180},"-=1.08"),c.to(u,.11,{opacity:0},"-=0.03"),c.to(s,.14,{opacity:0},"-=1.08"),this.timeline=c}},{key:"pauseTimelineOnScroll",value:function(){var e=this,t=this.timeline.getLabelTime("middle"),n=this.timeline.getLabelTime("end");this.timeline.eventCallback("onUpdate",function(r){var i=r.time(),o=i>t,a=.5*((i-t)/(n-t))+.5>=e.progress;o&&a&&(r.pause(),e.timeline.eventCallback("onUpdate",null),e.paused=!0)},["{self}"])}}]),e}(),h=n(32),p=n.n(h),d={offsetTargetElement:null},v=function(){function e(t,n){u()(this,e),this.element=t,this.inversed=!jQuery(this.element).hasClass("site-header--normal"),this.options=p()({},d,n),this.offset=0,this.scrollOffset=0,this.mobileMenuInitialized=!1,this.update(),this.registerUpdate()}return c()(e,[{key:"registerUpdate",value:function(){var e=this;l.registerUpdate(function(){e.update(),e.handleMobileMenuMarkup()})}},{key:"update",value:function(){this.box=this.element.getBoundingClientRect(),this.scrollOffset=this.getScrollOffset(),this.element.style.marginTop=this.offset+"px",this.updatePageOffset(),this.updateMenuToggleOffset(),jQuery(this.element).addClass("site-header--fixed site-header--ready")}},{key:"getScrollOffset",value:function(){var e=l.getProps(),t=e.adminBarHeight,n=e.scrollY,r=this.options.offsetTargetElement;if(r){var i=r.getBoundingClientRect();return i.top+n+i.height-(t+this.offset+this.box.height/2)}return 0}},{key:"updatePageOffset",value:function(){document.getElementById("page").style.paddingTop=this.box.height+this.offset+"px"}},{key:"updateMenuToggleOffset",value:function(){if(this.mobileMenuInitialized){var e=document.querySelector(".c-menu-toggle__wrap"),t=document.querySelector(".site-header--mobile");e.style.marginTop=this.offset+"px",t.style.marginTop=this.offset+"px"}}},{key:"handleMobileMenuMarkup",value:function(){var e=document.createElement("div");e.classList.add("site-header--mobile");var t=document.querySelector(".c-menu-toggle"),n=document.querySelector(".c-branding"),r=document.querySelector(".menu-item--cart"),i=jQuery(n).clone(),o=jQuery(r).clone();jQuery(e).append(jQuery(i)),jQuery(e).append(jQuery(o)),this.mobileMenuInitialized=!0,t.after(e)}},{key:"render",value:function(e){var t=l.getProps().scrollY;e!==this.inversed&&(jQuery(this.element).toggleClass("site-header--normal",!e),this.inversed=e),jQuery(this.element).toggleClass("site-header--scrolled",t>this.scrollOffset)}}]),e}(),y=n(33),m=n.n(y),g=function(){function e(t,n){u()(this,e),this.element=t,this.parent=n.parent||null,this.transitionDuration=n.transitionDuration||.5,this.transitionEasing=n.transitionEasing||Power4.easeOut,this.pieces=this.getPieces(),this.id=jQuery(t).data("id"),this.cookieName="novablocks-announcement-"+this.id+"-disabled",this.height=0;var r=m.a.get(this.cookieName),i=jQuery("body").hasClass("logged-in");!r||i?(this.timeline=this.getTimeline(),this.timeline.play(),this.bindEvents()):jQuery(t).remove()}return c()(e,[{key:"getPieces",value:function(){var e=jQuery(this.element);return{element:e,wrapper:e.find(".novablocks-announcement-bar__wrapper"),content:e.find(".novablocks-announcement-bar__content"),close:e.find(".novablocks-announcement-bar__close")}}},{key:"getTimeline",value:function(){var e=this.transitionDuration,t=this.transitionEasing,n=this.pieces,r=n.element,i=n.wrapper,o=(n.content,n.close,new TimelineMax({paused:!0})),a=i.outerHeight();return o.to(r,e,{height:a,ease:t},0),o.to({height:0},e,{height:a,onUpdate:this.onHeightUpdate.bind(this),onUpdateParams:["{self}"],ease:t},0),o}},{key:"bindEvents",value:function(){this.pieces.close.on("click",this.onClose.bind(this))}},{key:"onClose",value:function(){this.timeline.reverse()}},{key:"onHeightUpdate",value:function(e){this.height=e.target.height,this.parent&&this.parent.update()}}]),e}(),b=function(){function e(t,n){var r=this;u()(this,e);var i=o()(t);this.bars=i.map(function(e){return new g(e,{parent:r,transitionDuration:.5,transitionEasing:Power4.easeInOut})}),this.height=0,this.onUpdate=n.onUpdate,this.update()}return c()(e,[{key:"update",value:function(){var e=0;this.bars.forEach(function(t){e+=t.height}),this.height=e,"function"==typeof this.onUpdate&&this.onUpdate(this)}}]),e}(),x=function(){function e(t){u()(this,e),this.element=t,this.handleSubMenus(),this.handleHoverMenuItems()}return c()(e,[{key:"handleSubMenus",value:function(){var e=o()(document.querySelectorAll(".menu-item-has-children")),t=o()(document.querySelectorAll(".menu-item-has-children > a"));e.map(function(e){e.classList.remove("hover")}),t.map(function(e){e.classList.add("prevent-one")});var n=o()(document.querySelectorAll(".prevent-one")),r=function(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})};function i(e){(e.preventDefault(),this.classList.contains("active"))?window.location.href=this.getAttribute("href"):(this.classList.remove("active"),this.classList.add("active"),r(this.parentNode).map(function(e){e.classList.remove("hover")}),this.parentNode.classList.add("hover"))}n.forEach(function(e){e.addEventListener("click",i)})}},{key:"handleHoverMenuItems",value:function(){var e=jQuery(".menu-item");function t(){jQuery(this).toggleClass("hover")}window.matchMedia("(min-width: 1000px)").matches&&e.hoverIntent({out:t,over:t,timeout:200})}}]),e}();r=jQuery,window,r(function(){var e=document.getElementsByClassName("novablocks-hero"),t=o()(e),n=t.map(function(e){return new f(e)}),i=t[0],a=r(".site-header").get(0),u=new v(a,{offsetTargetElement:i||null}),s=(new x,new b(document.querySelectorAll(".promo-bar .novablocks-announcement-bar"),{onUpdate:function(e){u.offset=e.height,u.update(),n.forEach(function(t){t.offset=e.height,t.updateOnScroll(),r(t.element).find(".novablocks-hero__parallax").each(function(e,t){var n;(n=jQuery(t).data("rellax"))&&(n._reset(),n._cachePosition(),n._prepareElement(),n._updatePosition())})})}}));l.registerRender(function(){var e=l.getProps(),t=e.scrollY,r=(e.adminBarHeight,n.some(function(e){return n={x:u.box.x,y:u.box.y+t,width:u.box.width,height:u.box.height},r={x:e.box.x,y:e.box.y+s.height,width:e.box.width,height:e.box.height},i=n.x+n.width/2>=r.x&&r.x+r.width>=n.x+n.width/2,o=n.y+n.height/2>=r.y&&r.y+r.height>=n.y+n.height/2,i&&o;var n,r,i,o}));u.render(r)})})}]);