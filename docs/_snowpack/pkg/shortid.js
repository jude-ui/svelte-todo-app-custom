import{c as S}from"./common/_commonjsHelpers-4f56b6ba.js";var h=1;function V(){return h=(h*9301+49297)%233280,h/233280}function I(r){h=r}var d={nextValue:V,seed:I},u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",a,x,f;function g(){f=!1}function y(r){if(!r){a!==u&&(a=u,g());return}if(r!==a){if(r.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+r.length+" characters: "+r);var e=r.split("").filter(function(t,n,s){return n!==s.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));a=r,g()}}function j(r){return y(r),a}function k(r){d.seed(r),x!==r&&(g(),x=r)}function C(){a||y(u);for(var r=a.split(""),e=[],t=d.nextValue(),n;r.length>0;)t=d.nextValue(),n=Math.floor(t*r.length),e.push(r.splice(n,1)[0]);return e.join("")}function b(){return f||(f=C(),f)}function E(r){var e=b();return e[r]}function A(){return a||u}var c={get:A,characters:j,seed:k,lookup:E,shuffled:b},p=typeof window=="object"&&(window.crypto||window.msCrypto),w;!p||!p.getRandomValues?w=function(r){for(var e=[],t=0;t<r;t++)e.push(Math.floor(Math.random()*256));return e}:w=function(r){return p.getRandomValues(new Uint8Array(r))};var R=w,q=function(r,e,t){for(var n=(2<<Math.log(e.length-1)/Math.LN2)-1,s=-~(1.6*n*t/e.length),i="";;)for(var o=r(s),m=s;m--;)if(i+=e[o[m]&n]||"",i.length===+t)return i};function B(r){for(var e=0,t,n="";!t;)n=n+q(R,c.get(),1),t=r<Math.pow(16,e+1),e++;return n}var l=B,N=1567752802062,D=7,v,M;function L(r){var e="",t=Math.floor((Date.now()-N)*.001);return t===M?v++:(v=0,M=t),e=e+l(D),e=e+l(r),v>0&&(e=e+l(v)),e=e+l(t),e}var O=L;function T(r){if(!r||typeof r!="string"||r.length<6)return!1;var e=new RegExp("[^"+c.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!e.test(r)}var U=T,$=S(function(r){var e=0;function t(o){return c.seed(o),r.exports}function n(o){return e=o,r.exports}function s(o){return o!==void 0&&c.characters(o),c.shuffled()}function i(){return O(e)}r.exports=i,r.exports.generate=i,r.exports.seed=t,r.exports.worker=n,r.exports.characters=s,r.exports.isValid=U}),F=$;export default F;