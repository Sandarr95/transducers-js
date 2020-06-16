// transducers-js 0.4.194
// http://github.com/cognitect-labs/transducers-js
// 
// Copyright 2014-2015 Cognitect. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License..
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var n="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ba(this);function t(a,b){if(b){var c=r;a=a.split(".");for(var e=0;e<a.length-1;e++){var h=a[e];h in c||(c[h]={});c=c[h]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&n(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+e++,h)}function c(h,k){this.a=h;n(this,"description",{configurable:!0,writable:!0,value:k})}if(a)return a;c.prototype.toString=function(){return this.a};var e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var e=r[b[c]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&n(e.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});t("Symbol.asyncIterator",function(a){return a?a:Symbol("Symbol.asyncIterator")});
function ca(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}function da(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
t("Promise",function(a){function b(d){this.c=0;this.i=void 0;this.a=[];var f=this.g();try{d(f.resolve,f.reject)}catch(g){f.reject(g)}}function c(){this.a=null}function e(d){return d instanceof b?d:new b(function(f){f(d)})}if(a)return a;c.prototype.c=function(d){if(null==this.a){this.a=[];var f=this;this.g(function(){f.i()})}this.a.push(d)};var h=r.setTimeout;c.prototype.g=function(d){h(d,0)};c.prototype.i=function(){for(;this.a&&this.a.length;){var d=this.a;this.a=[];for(var f=0;f<d.length;++f){var g=
d[f];d[f]=null;try{g()}catch(l){this.h(l)}}}this.a=null};c.prototype.h=function(d){this.g(function(){throw d;})};b.prototype.g=function(){function d(l){return function(m){g||(g=!0,l.call(f,m))}}var f=this,g=!1;return{resolve:d(this.F),reject:d(this.h)}};b.prototype.F=function(d){if(d===this)this.h(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof b)this.G(d);else{a:switch(typeof d){case "object":var f=null!=d;break a;case "function":f=!0;break a;default:f=!1}f?this.C(d):this.l(d)}};
b.prototype.C=function(d){var f=void 0;try{f=d.then}catch(g){this.h(g);return}"function"==typeof f?this.H(f,d):this.l(d)};b.prototype.h=function(d){this.o(2,d)};b.prototype.l=function(d){this.o(1,d)};b.prototype.o=function(d,f){if(0!=this.c)throw Error("Cannot settle("+d+", "+f+"): Promise already settled in state"+this.c);this.c=d;this.i=f;this.B()};b.prototype.B=function(){if(null!=this.a){for(var d=0;d<this.a.length;++d)k.c(this.a[d]);this.a=null}};var k=new c;b.prototype.G=function(d){var f=this.g();
d.u(f.resolve,f.reject)};b.prototype.H=function(d,f){var g=this.g();try{d.call(f,g.resolve,g.reject)}catch(l){g.reject(l)}};b.prototype.then=function(d,f){function g(p,q){return"function"==typeof p?function(P){try{l(p(P))}catch(Q){m(Q)}}:q}var l,m,R=new b(function(p,q){l=p;m=q});this.u(g(d,l),g(f,m));return R};b.prototype.catch=function(d){return this.then(void 0,d)};b.prototype.u=function(d,f){function g(){switch(l.c){case 1:d(l.i);break;case 2:f(l.i);break;default:throw Error("Unexpected state: "+
l.c);}}var l=this;null==this.a?k.c(g):this.a.push(g)};b.resolve=e;b.reject=function(d){return new b(function(f,g){g(d)})};b.race=function(d){return new b(function(f,g){for(var l=da(d),m=l.next();!m.done;m=l.next())e(m.value).u(f,g)})};b.all=function(d){var f=da(d),g=f.next();return g.done?e([]):new b(function(l,m){function R(P){return function(Q){p[P]=Q;q--;0==q&&l(p)}}var p=[],q=0;do p.push(void 0),q++,e(g.value).u(R(p.length-1),m),g=f.next();while(!g.done)})};return b});
function u(){this.i=!1;this.c=null;this.g=void 0;this.a=1;this.o=0;this.h=null}function v(a){if(a.i)throw new TypeError("Generator is already running");a.i=!0}u.prototype.l=function(a){this.g=a};function w(a,b){a.h={w:b,A:!0};a.a=a.o}u.prototype.return=function(a){this.h={return:a};this.a=this.o};function x(a,b,c){a.a=c;return{value:b}}function ea(a){this.a=new u;this.c=a}
function fa(a,b){v(a.a);var c=a.a.c;if(c)return y(a,"return"in c?c["return"]:function(e){return{value:e,done:!0}},b,a.a.return);a.a.return(b);return z(a)}function y(a,b,c,e){try{var h=b.call(a.a.c,c);if(!(h instanceof Object))throw new TypeError("Iterator result "+h+" is not an object");if(!h.done)return a.a.i=!1,h;var k=h.value}catch(d){return a.a.c=null,w(a.a,d),z(a)}a.a.c=null;e.call(a.a,k);return z(a)}
function z(a){for(;a.a.a;)try{var b=a.c(a.a);if(b)return a.a.i=!1,{value:b.value,done:!1}}catch(c){a.a.g=void 0,w(a.a,c)}a.a.i=!1;if(a.a.h){b=a.a.h;a.a.h=null;if(b.A)throw b.w;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ha(a){this.next=function(b){v(a.a);a.a.c?b=y(a,a.a.c.next,b,a.a.l):(a.a.l(b),b=z(a));return b};this.throw=function(b){v(a.a);a.a.c?b=y(a,a.a.c["throw"],b,a.a.l):(w(a.a,b),b=z(a));return b};this.return=function(b){return fa(a,b)};this[Symbol.iterator]=function(){return this}}function ia(a){function b(e){return a.next(e)}function c(e){return a.throw(e)}return new Promise(function(e,h){function k(d){d.done?e(d.value):Promise.resolve(d.value).then(b,c).then(k,h)}k(a.next())})}
function A(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};var B="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator",C="undefined"!=typeof Symbol?Symbol.asyncIterator:"@@asyncIterator",ja="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"==A(a)};function ka(a){return function(b){return!a.apply(null,Array.prototype.slice.call(arguments,0))}}function D(a){this.D=a}D.prototype["@@transducer/init"]=function(){throw Error("init not implemented");};D.prototype["@@transducer/result"]=function(a){return a};
D.prototype["@@transducer/step"]=function(a,b){return this.D(a,b)};function E(a){return"function"==typeof a?new D(a):a}function la(a){this["@@transducer/reduced"]=!0;this["@@transducer/value"]=a}function F(a){return new la(a)}function G(a){return a instanceof la||a&&a["@@transducer/reduced"]}function ma(a){return G(a)?a:F(a)}function H(a){return a["@@transducer/value"]}function I(a){return G(a)?H(a):a}function na(a){return a}
function oa(a){var b=arguments.length;if(2==b){var c=arguments[0],e=arguments[1];return function(h){return c(e.apply(null,Array.prototype.slice.call(arguments,0)))}}if(2<b)return J(oa,arguments[0],Array.prototype.slice.call(arguments,1))}function K(a,b){this.j=a;this.b=b}K.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};K.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};
K.prototype["@@transducer/step"]=function(a,b){return this.b["@@transducer/step"](a,this.j(b))};function pa(a){return function(b){return new K(a,b)}}function L(a,b){this.s=a;this.b=b}L.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};L.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};L.prototype["@@transducer/step"]=function(a,b){return this.s(b)?this.b["@@transducer/step"](a,b):a};
function qa(a){return function(b){return new L(a,b)}}function M(a,b){this.n=a;this.b=b}M.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};M.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};M.prototype["@@transducer/step"]=function(a,b){0<this.n?a=this.b["@@transducer/step"](a,b):a=ma(a);this.n--;return a};function N(a,b){this.s=a;this.b=b}N.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};
N.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};N.prototype["@@transducer/step"]=function(a,b){return this.s(b)?this.b["@@transducer/step"](a,b):F(a)};function O(a,b){this.m=-1;this.n=a;this.b=b}O.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};O.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};
O.prototype["@@transducer/step"]=function(a,b){this.m++;return 0==this.m%this.n?this.b["@@transducer/step"](a,b):a};function S(a,b){this.n=a;this.b=b}S.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};S.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};S.prototype["@@transducer/step"]=function(a,b){return 0<this.n?(this.n--,a):this.b["@@transducer/step"](a,b)};function T(a,b){this.drop=!0;this.s=a;this.b=b}
T.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};T.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};T.prototype["@@transducer/step"]=function(a,b){if(this.drop&&this.s(b))return a;this.drop&&(this.drop=!1);return this.b["@@transducer/step"](a,b)};var ra={};function U(a,b){this.j=a;this.b=b;this.f=[];this.v=ra}U.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};
U.prototype["@@transducer/result"]=function(a){0<this.f.length&&(a=I(this.b["@@transducer/step"](a,this.f)),this.f=[]);return this.b["@@transducer/result"](a)};U.prototype["@@transducer/step"]=function(a,b){var c=this.v,e=this.j(b);this.v=e;if(c==ra||c==e)return this.f.push(b),a;a=this.b["@@transducer/step"](a,this.f);this.f=[];G(a)||this.f.push(b);return a};function V(a,b){this.n=a;this.b=b;this.f=[]}V.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};
V.prototype["@@transducer/result"]=function(a){0<this.f.length&&(a=I(this.b["@@transducer/step"](a,this.f)),this.f=[]);return this.b["@@transducer/result"](a)};V.prototype["@@transducer/step"]=function(a,b){this.f.push(b);return this.n==this.f.length?(b=this.f,this.f=[],this.b["@@transducer/step"](a,b)):a};function W(a,b){this.j=a;this.b=b}W.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};W.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};
W.prototype["@@transducer/step"]=function(a,b){return null==this.j(b)?a:this.b["@@transducer/step"](a,b)};function X(a,b){this.m=-1;this.j=a;this.b=b}X.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};X.prototype["@@transducer/result"]=function(a){return this.b["@@transducer/result"](a)};X.prototype["@@transducer/step"]=function(a,b){this.m++;return null==this.j(this.m,b)?a:this.b["@@transducer/step"](a,b)};
function sa(a){return{"@@transducer/init":function(){return a["@@transducer/init"]()},"@@transducer/result":function(b){return b},"@@transducer/step":function(b,c){b=a["@@transducer/step"](b,c);return G(b)?F(b):b}}}function ta(a){var b=sa(a);return{"@@transducer/init":function(){return a["@@transducer/init"]()},"@@transducer/result":function(c){return a["@@transducer/result"](c)},"@@transducer/step":function(c,e){return J(b,c,e)}}}
function ua(a,b,c){var e,h;return ia(new ha(new ea(function(k){switch(k.a){case 1:return c[C]&&(c=c[C]()),e=b,x(k,c.next(),2);case 2:h=k.g;case 3:if(h.done){k.a=4;break}return x(k,a["@@transducer/step"](e,h.value),5);case 5:e=k.g;if(G(e)){e=H(e);k.a=4;break}return x(k,c.next(),6);case 6:h=k.g;k.a=3;break;case 4:return x(k,a["@@transducer/result"](e),7);case 7:return k.return(k.g)}})))}
function J(a,b,c){if(c){a="function"==typeof a?E(a):a;if("string"==typeof c){var e=a;for(a=0;a<c.length;a++)if(b=e["@@transducer/step"](b,c.charAt(a)),G(b)){b=H(b);break}return e["@@transducer/result"](b)}if(ja(c)){e=a;for(a=0;a<c.length;a++)if(b=e["@@transducer/step"](b,c[a]),G(b)){b=H(b);break}return e["@@transducer/result"](b)}if(c[C]||c.next)return ua(a,b,c);if(c[B]||c.next){e=a;c[B]&&(c=c[B]());for(a=c.next();!a.done;){b=e["@@transducer/step"](b,a.value);if(G(b)){b=H(b);break}a=c.next()}return e["@@transducer/result"](b)}if("object"==
A(c)){for(e in c)if(c.hasOwnProperty(e)&&(b=a["@@transducer/step"](b,[e,c[e]]),G(b))){b=H(b);break}return a["@@transducer/result"](b)}throw Error("Cannot reduce instance of "+c.constructor.name);}}function Y(a,b,c,e){if(3==arguments.length){e=c;if("function"==typeof b)throw Error("If given only three arguments f must satisfy the ITransformer interface.");c=b["@@transducer/init"]()}b="function"==typeof b?E(b):b;a=a(b);return J(a,c,e)}function va(a,b){return a+b}
function wa(a,b){a.push(b);return a}function xa(a,b){a[b[0]]=b[1];return a}function Z(a,b){this.a=a;this.b=b}Z.prototype["@@transducer/init"]=function(){return this.b["@@transducer/init"]()};Z.prototype["@@transducer/result"]=function(a){return this.a(a)};Z.prototype["@@transducer/step"]=function(a,b){return this.b["@@transducer/step"](a,b)};
module.exports={reduced:F,isReduced:G,comp:oa,complement:ka,identity:na,map:pa,Map:K,filter:qa,Filter:L,remove:function(a){return qa(ka(a))},Remove:{}.Remove,keep:function(a){return function(b){return new W(a,b)}},Keep:W,keepIndexed:function(a){return function(b){return new X(a,b)}},KeepIndexed:X,take:function(a){return function(b){return new M(a,b)}},Take:M,takeWhile:function(a){return function(b){return new N(a,b)}},TakeWhile:N,takeNth:function(a){return function(b){return new O(a,b)}},TakeNth:O,
drop:function(a){return function(b){return new S(a,b)}},Drop:S,dropWhile:function(a){return function(b){return new T(a,b)}},DropWhile:T,partitionBy:function(a){return function(b){return new U(a,b)}},PartitionBy:U,partitionAll:function(a){return function(b){return new V(a,b)}},PartitionAll:V,completing:function(a,b){a="function"==typeof a?E(a):a;b=b||na;return new Z(b,a)},Completing:Z,wrap:E,Wrap:D,cat:ta,mapcat:function(a){return oa(pa(a),ta)},transduce:Y,reduce:J,into:function(a,b,c){if("string"==
typeof a)return Y(b,va,a,c);if(ja(a))return Y(b,wa,a,c);if("object"==A(a))return Y(b,xa,a,c)},toFn:function(a,b){"function"==typeof b&&(b=E(b));a=a(b);return a["@@transducer/step"].bind(a)},first:E(function(a,b){return F(b)}),ensureReduced:ma,unreduced:I,deref:H};
