(function(){/*
 clipy v1.0.0
 https://ktfth.github.io/clipy

 Licensed MIT
*/
'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,f){a.raw=f;return a};
window.clipy=function(){function a(d){if(g[d])return g[d].exports;var b=g[d]={exports:{}};f[d](b,b.exports,a);return b.exports}var f={522:function(d,b,e){e.d(b,{"default":function(){return h}});var h=function(){return{copy:function(k){var l="rtl"===document.documentElement.getAttribute("dir"),c=document.createElement("textarea");c.style.fontSize="12pt";c.style.border="0";c.style.padding="0";c.style.margin="0";c.style.position="absolute";c.style[l?"right":"left"]="-9999px";c.style.top=(window.pageYOffset||
document.documentElement.scrollTop)+"px";c.setAttribute("readonly","");c.value=k;document.body.append(c);c.select();return document.execCommand("copy")}}}()}},g={};(function(){a.d=function(d,b){for(var e in b)a.o(b,e)&&!a.o(d,e)&&Object.defineProperty(d,e,{enumerable:!0,get:b[e]})}})();(function(){a.o=function(d,b){return Object.prototype.hasOwnProperty.call(d,b)}})();return a(522)}().default;}).call(this || window)
