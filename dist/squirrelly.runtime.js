!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Sqrl=e():n.Sqrl=e()}(window,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)t.d(r,u,function(e){return n[e]}.bind(null,u));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"d",function(){return c}),t.d(r,"e",function(){return d}),t.d(r,"escape",function(){return d});var u={};t.r(u),t.d(u,"__express",function(){return o}),t.d(u,"H",function(){return i}),t.d(u,"Precompile",function(){return f}),t.d(u,"defineFilter",function(){return l}),t.d(u,"defineHelper",function(){return a}),t.d(u,"Render",function(){return p}),t.d(u,"defaultFilters",function(){return s}),t.d(u,"autoEscape",function(){return y}),t.d(u,"F",function(){return r});var o=function(n,e,t){fs.readFile(n,function(n,r){if(n)return t(n);var u=r.toString(),o=Sqrl.Precompile(u),i=Sqrl.Render(o,e);return t(null,i)})},i={};var f={};function c(n){return n}function d(n){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var t=String(n);return/[&<>"'`=\/]/.test(t)?t.replace(/[&<>"'`=\/]/g,function(n){return e[n]}):t}function l(n,e){r[n]=e}function a(n,e){i[n]=e}function p(n,e){return"function"==typeof n?n(e,u):"string"==typeof n?f(n)(e,u):void 0}var s={e:!1};function y(n){s.e=!!n}t.d(e,"__express",function(){return o}),t.d(e,"H",function(){return i}),t.d(e,"Precompile",function(){return f}),t.d(e,"defineFilter",function(){return l}),t.d(e,"defineHelper",function(){return a}),t.d(e,"Render",function(){return p}),t.d(e,"defaultFilters",function(){return s}),t.d(e,"autoEscape",function(){return y}),t.d(e,"F",function(){return r})}])});