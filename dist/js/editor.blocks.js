!function(e){var t={};function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){wp.domReady(function(){wp.blocks.unregisterBlockStyle("core/button","outline"),wp.blocks.unregisterBlockStyle("core/button","squared"),wp.blocks.registerBlockStyle("core/button",{name:"text",label:"Text"})})},function(e,t){wp.domReady(function(){wp.blocks.registerBlockStyle("core/heading",{name:"default",label:"Default"}),wp.blocks.registerBlockStyle("core/heading",{name:"alternate",label:"Alternate"})})},function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0),r(1),r(2);wp.domReady(function(){wp.blocks.unregisterBlockStyle("core/separator","wide"),wp.blocks.unregisterBlockStyle("core/separator","dots"),wp.blocks.registerBlockStyle("core/separator",{name:"line-flower",label:"Line with Flower"}),wp.blocks.registerBlockStyle("core/separator",{name:"flower",label:"Flower"})});var a=function(e){var t="c-separator";return t=e.className?t+" "+e.className:t,wp.element.createElement("div",{className:t},wp.element.createElement("div",{className:"c-separator__arrow c-separator__arrow--left"}),wp.element.createElement("div",{className:"c-separator__line c-separator__line--left"}),wp.element.createElement("div",{className:"c-separator__flower"},"✻"),wp.element.createElement("div",{className:"c-separator__line c-separator__line--right"}),wp.element.createElement("div",{className:"c-separator__arrow c-separator__arrow--right"}))},o=wp.compose.createHigherOrderComponent(function(e){return function(t){return"core/separator"===t.name?wp.element.createElement(a,{className:t.attributes.className}):wp.element.createElement(e,t)}},"replaceSeparatorEdit");wp.hooks.addFilter("editor.BlockEdit","nova-theme/separator",o);wp.hooks.addFilter("blocks.getSaveElement","nova-theme/separator",function(e,t,r){return"core/separator"===t.name?wp.element.createElement(a,{className:r.className}):e})}]);