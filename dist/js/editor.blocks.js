!function(e){var r={};function t(o){if(r[o])return r[o].exports;var l=r[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var l in e)t.d(o,l,function(r){return e[r]}.bind(null,l));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=66)}({66:function(e,r,t){"use strict";t.r(r);t(67),t(68),t(69),t(70)},67:function(e,r){wp.domReady(function(){wp.blocks.unregisterBlockStyle("core/button","outline"),wp.blocks.unregisterBlockStyle("core/button","squared"),wp.blocks.unregisterBlockStyle("core/button","default"),wp.blocks.registerBlockStyle("core/button",{name:"primary",label:"Primary"}),wp.blocks.registerBlockStyle("core/button",{name:"secondary",label:"Secondary"}),wp.blocks.registerBlockStyle("core/button",{name:"text",label:"Text"})})},68:function(e,r){wp.domReady(function(){wp.blocks.registerBlockStyle("core/group",{name:"dark",label:"Dark"}),wp.blocks.registerBlockStyle("core/group",{name:"darker",label:"Darker"})})},69:function(e,r){wp.domReady(function(){wp.blocks.registerBlockStyle("core/paragraph",{name:"lead",label:"Lead"})})},70:function(e,r){wp.domReady(function(){wp.blocks.unregisterBlockStyle("core/separator","default"),wp.blocks.unregisterBlockStyle("core/separator","wide"),wp.blocks.unregisterBlockStyle("core/separator","dots"),wp.blocks.registerBlockStyle("core/separator",{name:"simple",label:"Simple"}),wp.blocks.registerBlockStyle("core/separator",{name:"decorative",label:"Decorative"}),wp.blocks.registerBlockStyle("core/separator",{name:"elaborate",label:"Elaborate"})})}});