!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=138)}({12:function(e,t){e.exports=window.novablocks.utils},138:function(e,t,n){"use strict";var r=n(12),o=n(60);!function(e,t,n){var i=e(".site-header--main"),l=e(".site-header--secondary"),a=e(".site-header--main .site-header__row[data-sticky=true]"),u=!1,s=!1,c=e(".site-header--main[data-sticky]").length&&!l.length,d=e("#wpadminbar"),f=d.length?d.outerHeight():"0";e(t).on("scroll",(function(){if(!a.length||!l.length)return;if((0,r.below)("lap"))return;var n=a.offset().top,o=t.scrollY,c=o>i.outerHeight(),d=o>n-f,p=e(".js-promo-bar");p.length&&(d=o>n-f-p.outerHeight());c!==s&&(l.toggleClass("primary-menu--is-visible"),s=c);d!==u&&(l.toggleClass("is-visible"),u=d)})),e(t).on("scroll",(function(){if((0,r.below)("lap"))return;var e=t.scrollY>1;c&&e!==u&&(i.toggleClass("site-header--sticky"),u=e)})),(0,o.addSocialMenuClass)()}(jQuery,window)},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addSocialMenuClass=void 0;t.addSocialMenuClass=function(){var e=document.querySelectorAll(".site-header__menu .menu-item a"),t=window.getComputedStyle(document.documentElement).getPropertyValue("--enable-social-icons");!!parseInt(t,10)&&e.forEach((function(e,t){var n=window.getComputedStyle(e).getPropertyValue("--is-social");!!parseInt(n,10)&&e.parentElement.classList.add("social-menu-item")}))}}});