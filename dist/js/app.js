!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=24)}([function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},,,,function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(18),o=n(19),i=n(21),u=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(11),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(12),__esModule:!0}},function(t,e,n){n(13);var r=n(6).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(14);r(r.S+r.F*!n(0),"Object",{defineProperty:n(7).f})},function(t,e,n){var r=n(5),o=n(6),i=n(15),u=n(17),a=n(23),c=function(t,e,n){var f,s,l,p=t&c.F,d=t&c.G,h=t&c.S,y=t&c.P,v=t&c.B,b=t&c.W,w=d?o:o[e]||(o[e]={}),m=w.prototype,x=d?r:h?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(s=!p&&x&&void 0!==x[f])&&a(w,f)||(l=s?x[f]:n[f],w[f]=d&&"function"!=typeof x[f]?n[f]:v&&s?i(l,r):b&&x[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((w.virtual||(w.virtual={}))[f]=l,t&c.R&&m&&!m[f]&&u(m,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(7),o=n(22);t.exports=n(0)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(0)&&!n(8)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(4),o=n(5).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";n.r(e);var r,o=n(9),i=n.n(o),u=n(10),a=n.n(u),c=new(function(){function t(){i()(this,t),this.props={},this.renderCallbacks=[],this.updateCallbacks=[],this.frameRendered=!0;var e=this.updateProps.bind(this);e(),document.addEventListener("DOMContentLoaded",e),window.addEventListener("resize",e),window.addEventListener("scroll",e),window.requestAnimationFrame(this.renderLoop.bind(this))}return a()(t,[{key:"renderLoop",value:function(){this.frameRendered||(this.renderStuff(),this.frameRendered=!0),window.requestAnimationFrame(this.renderLoop.bind(this))}},{key:"registerRender",value:function(t){"function"==typeof t&&this.renderCallbacks.indexOf(t)<0&&this.renderCallbacks.push(t)}},{key:"renderStuff",value:function(){this.renderCallbacks.forEach(function(t){t()})}},{key:"registerUpdate",value:function(t){"function"==typeof t&&this.updateCallbacks.indexOf(t)<0&&this.updateCallbacks.push(t)}},{key:"updateStuff",value:function(){this.updateCallbacks.forEach(function(t){t()})}},{key:"updateProps",value:function(){this.props.windowWidth=window.innerWidth,this.props.windowHeight=window.innerHeight,this.props.scrollY=document.documentElement.scrollTop,this.props.scrollX=document.documentElement.scrollLeft,this.updateStuff(),this.frameRendered=!1}},{key:"getProps",value:function(){return this.props}},{key:"getProp",value:function(t){return this.props[t]}}]),t}()),f=function(){function t(e){i()(this,t),this.element=e,this.progress={x:0,y:0},this.update()}return a()(t,[{key:"update",value:function(){var t=c.getProps(),e=t.windowWidth,n=t.windowHeight;t.scrollX,t.scrollY;this.box=this.element.getBoundingClientRect();var r={x:(e-this.box.left)/(e+this.box.width),y:(n-this.box.top)/(n+this.box.height)};this.progress={x:Math.min(Math.max(0,r.x),1),y:Math.min(Math.max(0,r.y),1)}}}]),t}();(r=jQuery)(function(){var t=r(".nova-hero");t.each(function(t,e){var n=new f(e);r(e).data("hero",n),c.registerUpdate(n.update.bind(n))}),c.registerRender(function(){t.each(function(t,e){var n=r(e),o=n.data("hero"),i=n.find(".c-headline__primary"),u=n.find(".c-headline__secondary"),a=2*(o.progress.y-.5),c=-200*(a=Math.min(Math.max(0,a),1));i.css({transform:"translateY("+.5*c+"px)",opacity:1-a}),u.css({transform:"translateY("+c+"px)",opacity:1-a})})})})}]);