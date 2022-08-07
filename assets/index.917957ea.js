var no=Object.defineProperty;var ro=(s,e,t)=>e in s?no(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var J=(s,e,t)=>(ro(s,typeof e!="symbol"?e+"":e,t),t);const so=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};so();var Jn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ye={exports:{}};/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(s,e){(function(n,r){s.exports=r()})(Jn,function(){return function(t){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(i,o,a){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:a})},r.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(o&1&&(i=r(i)),o&8||o&4&&typeof i=="object"&&i&&i.__esModule)return i;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),o&2&&typeof i!="string")for(var c in i)r.d(a,c,function(f){return i[f]}.bind(null,c));return a},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=21)}([function(t,n){var r={};t.exports=r,function(){r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(o,a){var c,f;typeof a=="boolean"?(c=2,f=a):(c=1,f=!0);for(var u=c;u<arguments.length;u++){var p=arguments[u];if(p)for(var h in p)f&&p[h]&&p[h].constructor===Object&&(!o[h]||o[h].constructor===Object)?(o[h]=o[h]||{},r.extend(o[h],f,p[h])):o[h]=p[h]}return o},r.clone=function(o,a){return r.extend({},a,o)},r.keys=function(o){if(Object.keys)return Object.keys(o);var a=[];for(var c in o)a.push(c);return a},r.values=function(o){var a=[];if(Object.keys){for(var c=Object.keys(o),f=0;f<c.length;f++)a.push(o[c[f]]);return a}for(var u in o)a.push(o[u]);return a},r.get=function(o,a,c,f){a=a.split(".").slice(c,f);for(var u=0;u<a.length;u+=1)o=o[a[u]];return o},r.set=function(o,a,c,f,u){var p=a.split(".").slice(f,u);return r.get(o,a,0,-1)[p[p.length-1]]=c,c},r.shuffle=function(o){for(var a=o.length-1;a>0;a--){var c=Math.floor(r.random()*(a+1)),f=o[a];o[a]=o[c],o[c]=f}return o},r.choose=function(o){return o[Math.floor(r.random()*o.length)]},r.isElement=function(o){return typeof HTMLElement!="undefined"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},r.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},r.isFunction=function(o){return typeof o=="function"},r.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},r.isString=function(o){return toString.call(o)==="[object String]"},r.clamp=function(o,a,c){return o<a?a:o>c?c:o},r.sign=function(o){return o<0?-1:1},r.now=function(){if(typeof window!="undefined"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(o,a){return o=typeof o!="undefined"?o:0,a=typeof a!="undefined"?a:1,o+i()*(a-o)};var i=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[o]||(r.warn(o),r._warnedOnce[o]=!0)},r.deprecated=function(o,a,c){o[a]=r.chain(function(){r.warnOnce("\u{1F505} deprecated \u{1F505}",c)},o[a])},r.nextId=function(){return r._nextId++},r.indexOf=function(o,a){if(o.indexOf)return o.indexOf(a);for(var c=0;c<o.length;c++)if(o[c]===a)return c;return-1},r.map=function(o,a){if(o.map)return o.map(a);for(var c=[],f=0;f<o.length;f+=1)c.push(a(o[f]));return c},r.topologicalSort=function(o){var a=[],c=[],f=[];for(var u in o)!c[u]&&!f[u]&&r._topologicalSort(u,c,f,o,a);return a},r._topologicalSort=function(o,a,c,f,u){var p=f[o]||[];c[o]=!0;for(var h=0;h<p.length;h+=1){var l=p[h];c[l]||a[l]||r._topologicalSort(l,a,c,f,u)}c[o]=!1,a[o]=!0,u.push(o)},r.chain=function(){for(var o=[],a=0;a<arguments.length;a+=1){var c=arguments[a];c._chained?o.push.apply(o,c._chained):o.push(c)}var f=function(){for(var u,p=new Array(arguments.length),h=0,l=arguments.length;h<l;h++)p[h]=arguments[h];for(h=0;h<o.length;h+=1){var g=o[h].apply(u,p);typeof g!="undefined"&&(u=g)}return u};return f._chained=o,f},r.chainPathBefore=function(o,a,c){return r.set(o,a,r.chain(c,r.get(o,a)))},r.chainPathAfter=function(o,a,c){return r.set(o,a,r.chain(r.get(o,a),c))},r.setDecomp=function(o){r._decomp=o},r.getDecomp=function(){var o=r._decomp;try{!o&&typeof window!="undefined"&&(o=window.decomp),!o&&typeof Jn!="undefined"&&(o=Jn.decomp)}catch{o=null}return o}}()},function(t,n){var r={};t.exports=r,function(){r.create=function(i){var o={min:{x:0,y:0},max:{x:0,y:0}};return i&&r.update(o,i),o},r.update=function(i,o,a){i.min.x=1/0,i.max.x=-1/0,i.min.y=1/0,i.max.y=-1/0;for(var c=0;c<o.length;c++){var f=o[c];f.x>i.max.x&&(i.max.x=f.x),f.x<i.min.x&&(i.min.x=f.x),f.y>i.max.y&&(i.max.y=f.y),f.y<i.min.y&&(i.min.y=f.y)}a&&(a.x>0?i.max.x+=a.x:i.min.x+=a.x,a.y>0?i.max.y+=a.y:i.min.y+=a.y)},r.contains=function(i,o){return o.x>=i.min.x&&o.x<=i.max.x&&o.y>=i.min.y&&o.y<=i.max.y},r.overlaps=function(i,o){return i.min.x<=o.max.x&&i.max.x>=o.min.x&&i.max.y>=o.min.y&&i.min.y<=o.max.y},r.translate=function(i,o){i.min.x+=o.x,i.max.x+=o.x,i.min.y+=o.y,i.max.y+=o.y},r.shift=function(i,o){var a=i.max.x-i.min.x,c=i.max.y-i.min.y;i.min.x=o.x,i.max.x=o.x+a,i.min.y=o.y,i.max.y=o.y+c}}()},function(t,n){var r={};t.exports=r,function(){r.create=function(i,o){return{x:i||0,y:o||0}},r.clone=function(i){return{x:i.x,y:i.y}},r.magnitude=function(i){return Math.sqrt(i.x*i.x+i.y*i.y)},r.magnitudeSquared=function(i){return i.x*i.x+i.y*i.y},r.rotate=function(i,o,a){var c=Math.cos(o),f=Math.sin(o);a||(a={});var u=i.x*c-i.y*f;return a.y=i.x*f+i.y*c,a.x=u,a},r.rotateAbout=function(i,o,a,c){var f=Math.cos(o),u=Math.sin(o);c||(c={});var p=a.x+((i.x-a.x)*f-(i.y-a.y)*u);return c.y=a.y+((i.x-a.x)*u+(i.y-a.y)*f),c.x=p,c},r.normalise=function(i){var o=r.magnitude(i);return o===0?{x:0,y:0}:{x:i.x/o,y:i.y/o}},r.dot=function(i,o){return i.x*o.x+i.y*o.y},r.cross=function(i,o){return i.x*o.y-i.y*o.x},r.cross3=function(i,o,a){return(o.x-i.x)*(a.y-i.y)-(o.y-i.y)*(a.x-i.x)},r.add=function(i,o,a){return a||(a={}),a.x=i.x+o.x,a.y=i.y+o.y,a},r.sub=function(i,o,a){return a||(a={}),a.x=i.x-o.x,a.y=i.y-o.y,a},r.mult=function(i,o){return{x:i.x*o,y:i.y*o}},r.div=function(i,o){return{x:i.x/o,y:i.y/o}},r.perp=function(i,o){return o=o===!0?-1:1,{x:o*-i.y,y:o*i.x}},r.neg=function(i){return{x:-i.x,y:-i.y}},r.angle=function(i,o){return Math.atan2(o.y-i.y,o.x-i.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]}()},function(t,n,r){var i={};t.exports=i;var o=r(2),a=r(0);(function(){i.create=function(c,f){for(var u=[],p=0;p<c.length;p++){var h=c[p],l={x:h.x,y:h.y,index:p,body:f,isInternal:!1};u.push(l)}return u},i.fromPath=function(c,f){var u=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,p=[];return c.replace(u,function(h,l,g){p.push({x:parseFloat(l),y:parseFloat(g)})}),i.create(p,f)},i.centre=function(c){for(var f=i.area(c,!0),u={x:0,y:0},p,h,l,g=0;g<c.length;g++)l=(g+1)%c.length,p=o.cross(c[g],c[l]),h=o.mult(o.add(c[g],c[l]),p),u=o.add(u,h);return o.div(u,6*f)},i.mean=function(c){for(var f={x:0,y:0},u=0;u<c.length;u++)f.x+=c[u].x,f.y+=c[u].y;return o.div(f,c.length)},i.area=function(c,f){for(var u=0,p=c.length-1,h=0;h<c.length;h++)u+=(c[p].x-c[h].x)*(c[p].y+c[h].y),p=h;return f?u/2:Math.abs(u)/2},i.inertia=function(c,f){for(var u=0,p=0,h=c,l,g,d=0;d<h.length;d++)g=(d+1)%h.length,l=Math.abs(o.cross(h[g],h[d])),u+=l*(o.dot(h[g],h[g])+o.dot(h[g],h[d])+o.dot(h[d],h[d])),p+=l;return f/6*(u/p)},i.translate=function(c,f,u){u=typeof u!="undefined"?u:1;var p=c.length,h=f.x*u,l=f.y*u,g;for(g=0;g<p;g++)c[g].x+=h,c[g].y+=l;return c},i.rotate=function(c,f,u){if(f!==0){var p=Math.cos(f),h=Math.sin(f),l=u.x,g=u.y,d=c.length,m,v,E,b;for(b=0;b<d;b++)m=c[b],v=m.x-l,E=m.y-g,m.x=l+(v*p-E*h),m.y=g+(v*h+E*p);return c}},i.contains=function(c,f){for(var u=f.x,p=f.y,h=c.length,l=c[h-1],g,d=0;d<h;d++){if(g=c[d],(u-l.x)*(g.y-l.y)+(p-l.y)*(l.x-g.x)>0)return!1;l=g}return!0},i.scale=function(c,f,u,p){if(f===1&&u===1)return c;p=p||i.centre(c);for(var h,l,g=0;g<c.length;g++)h=c[g],l=o.sub(h,p),c[g].x=p.x+l.x*f,c[g].y=p.y+l.y*u;return c},i.chamfer=function(c,f,u,p,h){typeof f=="number"?f=[f]:f=f||[8],u=typeof u!="undefined"?u:-1,p=p||2,h=h||14;for(var l=[],g=0;g<c.length;g++){var d=c[g-1>=0?g-1:c.length-1],m=c[g],v=c[(g+1)%c.length],E=f[g<f.length?g:f.length-1];if(E===0){l.push(m);continue}var b=o.normalise({x:m.y-d.y,y:d.x-m.x}),x=o.normalise({x:v.y-m.y,y:m.x-v.x}),_=Math.sqrt(2*Math.pow(E,2)),S=o.mult(a.clone(b),E),M=o.normalise(o.mult(o.add(b,x),.5)),y=o.sub(m,o.mult(M,_)),w=u;u===-1&&(w=Math.pow(E,.32)*1.75),w=a.clamp(w,p,h),w%2===1&&(w+=1);for(var A=Math.acos(o.dot(b,x)),T=A/w,D=0;D<w;D++)l.push(o.add(o.rotate(S,T*D),y))}return l},i.clockwiseSort=function(c){var f=i.mean(c);return c.sort(function(u,p){return o.angle(f,u)-o.angle(f,p)}),c},i.isConvex=function(c){var f=0,u=c.length,p,h,l,g;if(u<3)return null;for(p=0;p<u;p++)if(h=(p+1)%u,l=(p+2)%u,g=(c[h].x-c[p].x)*(c[l].y-c[h].y),g-=(c[h].y-c[p].y)*(c[l].x-c[h].x),g<0?f|=1:g>0&&(f|=2),f===3)return!1;return f!==0?!0:null},i.hull=function(c){var f=[],u=[],p,h;for(c=c.slice(0),c.sort(function(l,g){var d=l.x-g.x;return d!==0?d:l.y-g.y}),h=0;h<c.length;h+=1){for(p=c[h];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],p)<=0;)u.pop();u.push(p)}for(h=c.length-1;h>=0;h-=1){for(p=c[h];f.length>=2&&o.cross3(f[f.length-2],f[f.length-1],p)<=0;)f.pop();f.push(p)}return f.pop(),u.pop(),f.concat(u)}})()},function(t,n,r){var i={};t.exports=i;var o=r(0);(function(){i.on=function(a,c,f){for(var u=c.split(" "),p,h=0;h<u.length;h++)p=u[h],a.events=a.events||{},a.events[p]=a.events[p]||[],a.events[p].push(f);return f},i.off=function(a,c,f){if(!c){a.events={};return}typeof c=="function"&&(f=c,c=o.keys(a.events).join(" "));for(var u=c.split(" "),p=0;p<u.length;p++){var h=a.events[u[p]],l=[];if(f&&h)for(var g=0;g<h.length;g++)h[g]!==f&&l.push(h[g]);a.events[u[p]]=l}},i.trigger=function(a,c,f){var u,p,h,l,g=a.events;if(g&&o.keys(g).length>0){f||(f={}),u=c.split(" ");for(var d=0;d<u.length;d++)if(p=u[d],h=g[p],h){l=o.clone(f,!1),l.name=p,l.source=a;for(var m=0;m<h.length;m++)h[m].apply(a,[l])}}}})()},function(t,n,r){var i={};t.exports=i;var o=r(4),a=r(0),c=r(1),f=r(6);(function(){i.create=function(u){return a.extend({id:a.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},u)},i.setModified=function(u,p,h,l){if(u.isModified=p,p&&u.cache&&(u.cache.allBodies=null,u.cache.allConstraints=null,u.cache.allComposites=null),h&&u.parent&&i.setModified(u.parent,p,h,l),l)for(var g=0;g<u.composites.length;g++){var d=u.composites[g];i.setModified(d,p,h,l)}},i.add=function(u,p){var h=[].concat(p);o.trigger(u,"beforeAdd",{object:p});for(var l=0;l<h.length;l++){var g=h[l];switch(g.type){case"body":if(g.parent!==g){a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(u,g);break;case"constraint":i.addConstraint(u,g);break;case"composite":i.addComposite(u,g);break;case"mouseConstraint":i.addConstraint(u,g.constraint);break}}return o.trigger(u,"afterAdd",{object:p}),u},i.remove=function(u,p,h){var l=[].concat(p);o.trigger(u,"beforeRemove",{object:p});for(var g=0;g<l.length;g++){var d=l[g];switch(d.type){case"body":i.removeBody(u,d,h);break;case"constraint":i.removeConstraint(u,d,h);break;case"composite":i.removeComposite(u,d,h);break;case"mouseConstraint":i.removeConstraint(u,d.constraint);break}}return o.trigger(u,"afterRemove",{object:p}),u},i.addComposite=function(u,p){return u.composites.push(p),p.parent=u,i.setModified(u,!0,!0,!1),u},i.removeComposite=function(u,p,h){var l=a.indexOf(u.composites,p);if(l!==-1&&i.removeCompositeAt(u,l),h)for(var g=0;g<u.composites.length;g++)i.removeComposite(u.composites[g],p,!0);return u},i.removeCompositeAt=function(u,p){return u.composites.splice(p,1),i.setModified(u,!0,!0,!1),u},i.addBody=function(u,p){return u.bodies.push(p),i.setModified(u,!0,!0,!1),u},i.removeBody=function(u,p,h){var l=a.indexOf(u.bodies,p);if(l!==-1&&i.removeBodyAt(u,l),h)for(var g=0;g<u.composites.length;g++)i.removeBody(u.composites[g],p,!0);return u},i.removeBodyAt=function(u,p){return u.bodies.splice(p,1),i.setModified(u,!0,!0,!1),u},i.addConstraint=function(u,p){return u.constraints.push(p),i.setModified(u,!0,!0,!1),u},i.removeConstraint=function(u,p,h){var l=a.indexOf(u.constraints,p);if(l!==-1&&i.removeConstraintAt(u,l),h)for(var g=0;g<u.composites.length;g++)i.removeConstraint(u.composites[g],p,!0);return u},i.removeConstraintAt=function(u,p){return u.constraints.splice(p,1),i.setModified(u,!0,!0,!1),u},i.clear=function(u,p,h){if(h)for(var l=0;l<u.composites.length;l++)i.clear(u.composites[l],p,!0);return p?u.bodies=u.bodies.filter(function(g){return g.isStatic}):u.bodies.length=0,u.constraints.length=0,u.composites.length=0,i.setModified(u,!0,!0,!1),u},i.allBodies=function(u){if(u.cache&&u.cache.allBodies)return u.cache.allBodies;for(var p=[].concat(u.bodies),h=0;h<u.composites.length;h++)p=p.concat(i.allBodies(u.composites[h]));return u.cache&&(u.cache.allBodies=p),p},i.allConstraints=function(u){if(u.cache&&u.cache.allConstraints)return u.cache.allConstraints;for(var p=[].concat(u.constraints),h=0;h<u.composites.length;h++)p=p.concat(i.allConstraints(u.composites[h]));return u.cache&&(u.cache.allConstraints=p),p},i.allComposites=function(u){if(u.cache&&u.cache.allComposites)return u.cache.allComposites;for(var p=[].concat(u.composites),h=0;h<u.composites.length;h++)p=p.concat(i.allComposites(u.composites[h]));return u.cache&&(u.cache.allComposites=p),p},i.get=function(u,p,h){var l,g;switch(h){case"body":l=i.allBodies(u);break;case"constraint":l=i.allConstraints(u);break;case"composite":l=i.allComposites(u).concat(u);break}return l?(g=l.filter(function(d){return d.id.toString()===p.toString()}),g.length===0?null:g[0]):null},i.move=function(u,p,h){return i.remove(u,p),i.add(h,p),u},i.rebase=function(u){for(var p=i.allBodies(u).concat(i.allConstraints(u)).concat(i.allComposites(u)),h=0;h<p.length;h++)p[h].id=a.nextId();return u},i.translate=function(u,p,h){for(var l=h?i.allBodies(u):u.bodies,g=0;g<l.length;g++)f.translate(l[g],p);return u},i.rotate=function(u,p,h,l){for(var g=Math.cos(p),d=Math.sin(p),m=l?i.allBodies(u):u.bodies,v=0;v<m.length;v++){var E=m[v],b=E.position.x-h.x,x=E.position.y-h.y;f.setPosition(E,{x:h.x+(b*g-x*d),y:h.y+(b*d+x*g)}),f.rotate(E,p)}return u},i.scale=function(u,p,h,l,g){for(var d=g?i.allBodies(u):u.bodies,m=0;m<d.length;m++){var v=d[m],E=v.position.x-l.x,b=v.position.y-l.y;f.setPosition(v,{x:l.x+E*p,y:l.y+b*h}),f.scale(v,p,h)}return u},i.bounds=function(u){for(var p=i.allBodies(u),h=[],l=0;l<p.length;l+=1){var g=p[l];h.push(g.bounds.min,g.bounds.max)}return c.create(h)}})()},function(t,n,r){var i={};t.exports=i;var o=r(3),a=r(2),c=r(7);r(16);var f=r(0),u=r(1),p=r(11);(function(){i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i.create=function(l){var g={id:f.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},d=f.extend(g,l);return h(d,l),d},i.nextGroup=function(l){return l?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var h=function(l,g){g=g||{},i.set(l,{bounds:l.bounds||u.create(l.vertices),positionPrev:l.positionPrev||a.clone(l.position),anglePrev:l.anglePrev||l.angle,vertices:l.vertices,parts:l.parts||[l],isStatic:l.isStatic,isSleeping:l.isSleeping,parent:l.parent||l}),o.rotate(l.vertices,l.angle,l.position),p.rotate(l.axes,l.angle),u.update(l.bounds,l.vertices,l.velocity),i.set(l,{axes:g.axes||l.axes,area:g.area||l.area,mass:g.mass||l.mass,inertia:g.inertia||l.inertia});var d=l.isStatic?"#14151f":f.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=l.isStatic?"#555":"#ccc",v=l.isStatic&&l.render.fillStyle===null?1:0;l.render.fillStyle=l.render.fillStyle||d,l.render.strokeStyle=l.render.strokeStyle||m,l.render.lineWidth=l.render.lineWidth||v,l.render.sprite.xOffset+=-(l.bounds.min.x-l.position.x)/(l.bounds.max.x-l.bounds.min.x),l.render.sprite.yOffset+=-(l.bounds.min.y-l.position.y)/(l.bounds.max.y-l.bounds.min.y)};i.set=function(l,g,d){var m;typeof g=="string"&&(m=g,g={},g[m]=d);for(m in g)if(!!Object.prototype.hasOwnProperty.call(g,m))switch(d=g[m],m){case"isStatic":i.setStatic(l,d);break;case"isSleeping":c.set(l,d);break;case"mass":i.setMass(l,d);break;case"density":i.setDensity(l,d);break;case"inertia":i.setInertia(l,d);break;case"vertices":i.setVertices(l,d);break;case"position":i.setPosition(l,d);break;case"angle":i.setAngle(l,d);break;case"velocity":i.setVelocity(l,d);break;case"angularVelocity":i.setAngularVelocity(l,d);break;case"parts":i.setParts(l,d);break;case"centre":i.setCentre(l,d);break;default:l[m]=d}},i.setStatic=function(l,g){for(var d=0;d<l.parts.length;d++){var m=l.parts[d];m.isStatic=g,g?(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia},m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null)}},i.setMass=function(l,g){var d=l.inertia/(l.mass/6);l.inertia=d*(g/6),l.inverseInertia=1/l.inertia,l.mass=g,l.inverseMass=1/l.mass,l.density=l.mass/l.area},i.setDensity=function(l,g){i.setMass(l,g*l.area),l.density=g},i.setInertia=function(l,g){l.inertia=g,l.inverseInertia=1/l.inertia},i.setVertices=function(l,g){g[0].body===l?l.vertices=g:l.vertices=o.create(g,l),l.axes=p.fromVertices(l.vertices),l.area=o.area(l.vertices),i.setMass(l,l.density*l.area);var d=o.centre(l.vertices);o.translate(l.vertices,d,-1),i.setInertia(l,i._inertiaScale*o.inertia(l.vertices,l.mass)),o.translate(l.vertices,l.position),u.update(l.bounds,l.vertices,l.velocity)},i.setParts=function(l,g,d){var m;for(g=g.slice(0),l.parts.length=0,l.parts.push(l),l.parent=l,m=0;m<g.length;m++){var v=g[m];v!==l&&(v.parent=l,l.parts.push(v))}if(l.parts.length!==1){if(d=typeof d!="undefined"?d:!0,d){var E=[];for(m=0;m<g.length;m++)E=E.concat(g[m].vertices);o.clockwiseSort(E);var b=o.hull(E),x=o.centre(b);i.setVertices(l,b),o.translate(l.vertices,x)}var _=i._totalProperties(l);l.area=_.area,l.parent=l,l.position.x=_.centre.x,l.position.y=_.centre.y,l.positionPrev.x=_.centre.x,l.positionPrev.y=_.centre.y,i.setMass(l,_.mass),i.setInertia(l,_.inertia),i.setPosition(l,_.centre)}},i.setCentre=function(l,g,d){d?(l.positionPrev.x+=g.x,l.positionPrev.y+=g.y,l.position.x+=g.x,l.position.y+=g.y):(l.positionPrev.x=g.x-(l.position.x-l.positionPrev.x),l.positionPrev.y=g.y-(l.position.y-l.positionPrev.y),l.position.x=g.x,l.position.y=g.y)},i.setPosition=function(l,g){var d=a.sub(g,l.position);l.positionPrev.x+=d.x,l.positionPrev.y+=d.y;for(var m=0;m<l.parts.length;m++){var v=l.parts[m];v.position.x+=d.x,v.position.y+=d.y,o.translate(v.vertices,d),u.update(v.bounds,v.vertices,l.velocity)}},i.setAngle=function(l,g){var d=g-l.angle;l.anglePrev+=d;for(var m=0;m<l.parts.length;m++){var v=l.parts[m];v.angle+=d,o.rotate(v.vertices,d,l.position),p.rotate(v.axes,d),u.update(v.bounds,v.vertices,l.velocity),m>0&&a.rotateAbout(v.position,d,l.position,v.position)}},i.setVelocity=function(l,g){l.positionPrev.x=l.position.x-g.x,l.positionPrev.y=l.position.y-g.y,l.velocity.x=g.x,l.velocity.y=g.y,l.speed=a.magnitude(l.velocity)},i.setAngularVelocity=function(l,g){l.anglePrev=l.angle-g,l.angularVelocity=g,l.angularSpeed=Math.abs(l.angularVelocity)},i.translate=function(l,g){i.setPosition(l,a.add(l.position,g))},i.rotate=function(l,g,d){if(!d)i.setAngle(l,l.angle+g);else{var m=Math.cos(g),v=Math.sin(g),E=l.position.x-d.x,b=l.position.y-d.y;i.setPosition(l,{x:d.x+(E*m-b*v),y:d.y+(E*v+b*m)}),i.setAngle(l,l.angle+g)}},i.scale=function(l,g,d,m){var v=0,E=0;m=m||l.position;for(var b=0;b<l.parts.length;b++){var x=l.parts[b];o.scale(x.vertices,g,d,m),x.axes=p.fromVertices(x.vertices),x.area=o.area(x.vertices),i.setMass(x,l.density*x.area),o.translate(x.vertices,{x:-x.position.x,y:-x.position.y}),i.setInertia(x,i._inertiaScale*o.inertia(x.vertices,x.mass)),o.translate(x.vertices,{x:x.position.x,y:x.position.y}),b>0&&(v+=x.area,E+=x.inertia),x.position.x=m.x+(x.position.x-m.x)*g,x.position.y=m.y+(x.position.y-m.y)*d,u.update(x.bounds,x.vertices,l.velocity)}l.parts.length>1&&(l.area=v,l.isStatic||(i.setMass(l,l.density*v),i.setInertia(l,E))),l.circleRadius&&(g===d?l.circleRadius*=g:l.circleRadius=null)},i.update=function(l,g,d,m){var v=Math.pow(g*d*l.timeScale,2),E=1-l.frictionAir*d*l.timeScale,b=l.position.x-l.positionPrev.x,x=l.position.y-l.positionPrev.y;l.velocity.x=b*E*m+l.force.x/l.mass*v,l.velocity.y=x*E*m+l.force.y/l.mass*v,l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.position.x+=l.velocity.x,l.position.y+=l.velocity.y,l.angularVelocity=(l.angle-l.anglePrev)*E*m+l.torque/l.inertia*v,l.anglePrev=l.angle,l.angle+=l.angularVelocity,l.speed=a.magnitude(l.velocity),l.angularSpeed=Math.abs(l.angularVelocity);for(var _=0;_<l.parts.length;_++){var S=l.parts[_];o.translate(S.vertices,l.velocity),_>0&&(S.position.x+=l.velocity.x,S.position.y+=l.velocity.y),l.angularVelocity!==0&&(o.rotate(S.vertices,l.angularVelocity,l.position),p.rotate(S.axes,l.angularVelocity),_>0&&a.rotateAbout(S.position,l.angularVelocity,l.position,S.position)),u.update(S.bounds,S.vertices,l.velocity)}},i.applyForce=function(l,g,d){l.force.x+=d.x,l.force.y+=d.y;var m={x:g.x-l.position.x,y:g.y-l.position.y};l.torque+=m.x*d.y-m.y*d.x},i._totalProperties=function(l){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},d=l.parts.length===1?0:1;d<l.parts.length;d++){var m=l.parts[d],v=m.mass!==1/0?m.mass:1;g.mass+=v,g.area+=m.area,g.inertia+=m.inertia,g.centre=a.add(g.centre,a.mult(m.position,v))}return g.centre=a.div(g.centre,g.mass),g}})()},function(t,n,r){var i={};t.exports=i;var o=r(4);(function(){i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(a,c){for(var f=c*c*c,u=0;u<a.length;u++){var p=a[u],h=p.speed*p.speed+p.angularSpeed*p.angularSpeed;if(p.force.x!==0||p.force.y!==0){i.set(p,!1);continue}var l=Math.min(p.motion,h),g=Math.max(p.motion,h);p.motion=i._minBias*l+(1-i._minBias)*g,p.sleepThreshold>0&&p.motion<i._motionSleepThreshold*f?(p.sleepCounter+=1,p.sleepCounter>=p.sleepThreshold&&i.set(p,!0)):p.sleepCounter>0&&(p.sleepCounter-=1)}},i.afterCollisions=function(a,c){for(var f=c*c*c,u=0;u<a.length;u++){var p=a[u];if(!!p.isActive){var h=p.collision,l=h.bodyA.parent,g=h.bodyB.parent;if(!(l.isSleeping&&g.isSleeping||l.isStatic||g.isStatic)&&(l.isSleeping||g.isSleeping)){var d=l.isSleeping&&!l.isStatic?l:g,m=d===l?g:l;!d.isStatic&&m.motion>i._motionWakeThreshold*f&&i.set(d,!1)}}}},i.set=function(a,c){var f=a.isSleeping;c?(a.isSleeping=!0,a.sleepCounter=a.sleepThreshold,a.positionImpulse.x=0,a.positionImpulse.y=0,a.positionPrev.x=a.position.x,a.positionPrev.y=a.position.y,a.anglePrev=a.angle,a.speed=0,a.angularSpeed=0,a.motion=0,f||o.trigger(a,"sleepStart")):(a.isSleeping=!1,a.sleepCounter=0,f&&o.trigger(a,"sleepEnd"))}})()},function(t,n,r){var i={};t.exports=i;var o=r(3),a=r(9);(function(){var c=[],f={overlap:0,axis:null},u={overlap:0,axis:null};i.create=function(p,h){return{pair:null,collided:!1,bodyA:p,bodyB:h,parentA:p.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},i.collides=function(p,h,l){if(i._overlapAxes(f,p.vertices,h.vertices,p.axes),f.overlap<=0||(i._overlapAxes(u,h.vertices,p.vertices,h.axes),u.overlap<=0))return null;var g=l&&l.table[a.id(p,h)],d;g?d=g.collision:(d=i.create(p,h),d.collided=!0,d.bodyA=p.id<h.id?p:h,d.bodyB=p.id<h.id?h:p,d.parentA=d.bodyA.parent,d.parentB=d.bodyB.parent),p=d.bodyA,h=d.bodyB;var m;f.overlap<u.overlap?m=f:m=u;var v=d.normal,E=d.supports,b=m.axis,x=b.x,_=b.y;x*(h.position.x-p.position.x)+_*(h.position.y-p.position.y)<0?(v.x=x,v.y=_):(v.x=-x,v.y=-_),d.tangent.x=-v.y,d.tangent.y=v.x,d.depth=m.overlap,d.penetration.x=v.x*d.depth,d.penetration.y=v.y*d.depth;var S=i._findSupports(p,h,v,1),M=0;if(o.contains(p.vertices,S[0])&&(E[M++]=S[0]),o.contains(p.vertices,S[1])&&(E[M++]=S[1]),M<2){var y=i._findSupports(h,p,v,-1);o.contains(h.vertices,y[0])&&(E[M++]=y[0]),M<2&&o.contains(h.vertices,y[1])&&(E[M++]=y[1])}return M===0&&(E[M++]=S[0]),E.length=M,d},i._overlapAxes=function(p,h,l,g){var d=h.length,m=l.length,v=h[0].x,E=h[0].y,b=l[0].x,x=l[0].y,_=g.length,S=Number.MAX_VALUE,M=0,y,w,A,T,D,F;for(D=0;D<_;D++){var P=g[D],O=P.x,N=P.y,H=v*O+E*N,k=b*O+x*N,B=H,W=k;for(F=1;F<d;F+=1)T=h[F].x*O+h[F].y*N,T>B?B=T:T<H&&(H=T);for(F=1;F<m;F+=1)T=l[F].x*O+l[F].y*N,T>W?W=T:T<k&&(k=T);if(w=B-k,A=W-H,y=w<A?w:A,y<S&&(S=y,M=D,y<=0))break}p.axis=g[M],p.overlap=S},i._projectToAxis=function(p,h,l){for(var g=h[0].x*l.x+h[0].y*l.y,d=g,m=1;m<h.length;m+=1){var v=h[m].x*l.x+h[m].y*l.y;v>d?d=v:v<g&&(g=v)}p.min=g,p.max=d},i._findSupports=function(p,h,l,g){var d=h.vertices,m=d.length,v=p.position.x,E=p.position.y,b=l.x*g,x=l.y*g,_=Number.MAX_VALUE,S,M,y,w,A;for(A=0;A<m;A+=1)M=d[A],w=b*(v-M.x)+x*(E-M.y),w<_&&(_=w,S=M);return y=d[(m+S.index-1)%m],_=b*(v-y.x)+x*(E-y.y),M=d[(S.index+1)%m],b*(v-M.x)+x*(E-M.y)<_?(c[0]=S,c[1]=M,c):(c[0]=S,c[1]=y,c)}})()},function(t,n,r){var i={};t.exports=i;var o=r(17);(function(){i.create=function(a,c){var f=a.bodyA,u=a.bodyB,p={id:i.id(f,u),bodyA:f,bodyB:u,collision:a,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:f.isSensor||u.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return i.update(p,a,c),p},i.update=function(a,c,f){var u=a.contacts,p=c.supports,h=a.activeContacts,l=c.parentA,g=c.parentB,d=l.vertices.length;a.isActive=!0,a.timeUpdated=f,a.collision=c,a.separation=c.depth,a.inverseMass=l.inverseMass+g.inverseMass,a.friction=l.friction<g.friction?l.friction:g.friction,a.frictionStatic=l.frictionStatic>g.frictionStatic?l.frictionStatic:g.frictionStatic,a.restitution=l.restitution>g.restitution?l.restitution:g.restitution,a.slop=l.slop>g.slop?l.slop:g.slop,c.pair=a,h.length=0;for(var m=0;m<p.length;m++){var v=p[m],E=v.body===l?v.index:d+v.index,b=u[E];b?h.push(b):h.push(u[E]=o.create(v))}},i.setActive=function(a,c,f){c?(a.isActive=!0,a.timeUpdated=f):(a.isActive=!1,a.activeContacts.length=0)},i.id=function(a,c){return a.id<c.id?"A"+a.id+"B"+c.id:"A"+c.id+"B"+a.id}})()},function(t,n,r){var i={};t.exports=i;var o=r(3),a=r(2),c=r(7),f=r(1),u=r(11),p=r(0);(function(){i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(h){var l=h;l.bodyA&&!l.pointA&&(l.pointA={x:0,y:0}),l.bodyB&&!l.pointB&&(l.pointB={x:0,y:0});var g=l.bodyA?a.add(l.bodyA.position,l.pointA):l.pointA,d=l.bodyB?a.add(l.bodyB.position,l.pointB):l.pointB,m=a.magnitude(a.sub(g,d));l.length=typeof l.length!="undefined"?l.length:m,l.id=l.id||p.nextId(),l.label=l.label||"Constraint",l.type="constraint",l.stiffness=l.stiffness||(l.length>0?1:.7),l.damping=l.damping||0,l.angularStiffness=l.angularStiffness||0,l.angleA=l.bodyA?l.bodyA.angle:l.angleA,l.angleB=l.bodyB?l.bodyB.angle:l.angleB,l.plugin={};var v={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return l.length===0&&l.stiffness>.1?(v.type="pin",v.anchors=!1):l.stiffness<.9&&(v.type="spring"),l.render=p.extend(v,l.render),l},i.preSolveAll=function(h){for(var l=0;l<h.length;l+=1){var g=h[l],d=g.constraintImpulse;g.isStatic||d.x===0&&d.y===0&&d.angle===0||(g.position.x+=d.x,g.position.y+=d.y,g.angle+=d.angle)}},i.solveAll=function(h,l){for(var g=0;g<h.length;g+=1){var d=h[g],m=!d.bodyA||d.bodyA&&d.bodyA.isStatic,v=!d.bodyB||d.bodyB&&d.bodyB.isStatic;(m||v)&&i.solve(h[g],l)}for(g=0;g<h.length;g+=1)d=h[g],m=!d.bodyA||d.bodyA&&d.bodyA.isStatic,v=!d.bodyB||d.bodyB&&d.bodyB.isStatic,!m&&!v&&i.solve(h[g],l)},i.solve=function(h,l){var g=h.bodyA,d=h.bodyB,m=h.pointA,v=h.pointB;if(!(!g&&!d)){g&&!g.isStatic&&(a.rotate(m,g.angle-h.angleA,m),h.angleA=g.angle),d&&!d.isStatic&&(a.rotate(v,d.angle-h.angleB,v),h.angleB=d.angle);var E=m,b=v;if(g&&(E=a.add(g.position,m)),d&&(b=a.add(d.position,v)),!(!E||!b)){var x=a.sub(E,b),_=a.magnitude(x);_<i._minLength&&(_=i._minLength);var S=(_-h.length)/_,M=h.stiffness<1?h.stiffness*l:h.stiffness,y=a.mult(x,S*M),w=(g?g.inverseMass:0)+(d?d.inverseMass:0),A=(g?g.inverseInertia:0)+(d?d.inverseInertia:0),T=w+A,D,F,P,O,N;if(h.damping){var H=a.create();P=a.div(x,_),N=a.sub(d&&a.sub(d.position,d.positionPrev)||H,g&&a.sub(g.position,g.positionPrev)||H),O=a.dot(P,N)}g&&!g.isStatic&&(F=g.inverseMass/w,g.constraintImpulse.x-=y.x*F,g.constraintImpulse.y-=y.y*F,g.position.x-=y.x*F,g.position.y-=y.y*F,h.damping&&(g.positionPrev.x-=h.damping*P.x*O*F,g.positionPrev.y-=h.damping*P.y*O*F),D=a.cross(m,y)/T*i._torqueDampen*g.inverseInertia*(1-h.angularStiffness),g.constraintImpulse.angle-=D,g.angle-=D),d&&!d.isStatic&&(F=d.inverseMass/w,d.constraintImpulse.x+=y.x*F,d.constraintImpulse.y+=y.y*F,d.position.x+=y.x*F,d.position.y+=y.y*F,h.damping&&(d.positionPrev.x+=h.damping*P.x*O*F,d.positionPrev.y+=h.damping*P.y*O*F),D=a.cross(v,y)/T*i._torqueDampen*d.inverseInertia*(1-h.angularStiffness),d.constraintImpulse.angle+=D,d.angle+=D)}}},i.postSolveAll=function(h){for(var l=0;l<h.length;l++){var g=h[l],d=g.constraintImpulse;if(!(g.isStatic||d.x===0&&d.y===0&&d.angle===0)){c.set(g,!1);for(var m=0;m<g.parts.length;m++){var v=g.parts[m];o.translate(v.vertices,d),m>0&&(v.position.x+=d.x,v.position.y+=d.y),d.angle!==0&&(o.rotate(v.vertices,d.angle,g.position),u.rotate(v.axes,d.angle),m>0&&a.rotateAbout(v.position,d.angle,g.position,v.position)),f.update(v.bounds,v.vertices,g.velocity)}d.angle*=i._warming,d.x*=i._warming,d.y*=i._warming}}},i.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+h.pointA.x,y:(h.bodyA?h.bodyA.position.y:0)+h.pointA.y}},i.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+h.pointB.x,y:(h.bodyB?h.bodyB.position.y:0)+h.pointB.y}}})()},function(t,n,r){var i={};t.exports=i;var o=r(2),a=r(0);(function(){i.fromVertices=function(c){for(var f={},u=0;u<c.length;u++){var p=(u+1)%c.length,h=o.normalise({x:c[p].y-c[u].y,y:c[u].x-c[p].x}),l=h.y===0?1/0:h.x/h.y;l=l.toFixed(3).toString(),f[l]=h}return a.values(f)},i.rotate=function(c,f){if(f!==0)for(var u=Math.cos(f),p=Math.sin(f),h=0;h<c.length;h++){var l=c[h],g;g=l.x*u-l.y*p,l.y=l.x*p+l.y*u,l.x=g}}})()},function(t,n,r){var i={};t.exports=i;var o=r(3),a=r(0),c=r(6),f=r(1),u=r(2);(function(){i.rectangle=function(p,h,l,g,d){d=d||{};var m={label:"Rectangle Body",position:{x:p,y:h},vertices:o.fromPath("L 0 0 L "+l+" 0 L "+l+" "+g+" L 0 "+g)};if(d.chamfer){var v=d.chamfer;m.vertices=o.chamfer(m.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete d.chamfer}return c.create(a.extend({},m,d))},i.trapezoid=function(p,h,l,g,d,m){m=m||{},d*=.5;var v=(1-d*2)*l,E=l*d,b=E+v,x=b+E,_;d<.5?_="L 0 0 L "+E+" "+-g+" L "+b+" "+-g+" L "+x+" 0":_="L 0 0 L "+b+" "+-g+" L "+x+" 0";var S={label:"Trapezoid Body",position:{x:p,y:h},vertices:o.fromPath(_)};if(m.chamfer){var M=m.chamfer;S.vertices=o.chamfer(S.vertices,M.radius,M.quality,M.qualityMin,M.qualityMax),delete m.chamfer}return c.create(a.extend({},S,m))},i.circle=function(p,h,l,g,d){g=g||{};var m={label:"Circle Body",circleRadius:l};d=d||25;var v=Math.ceil(Math.max(10,Math.min(d,l)));return v%2===1&&(v+=1),i.polygon(p,h,v,l,a.extend({},m,g))},i.polygon=function(p,h,l,g,d){if(d=d||{},l<3)return i.circle(p,h,g,d);for(var m=2*Math.PI/l,v="",E=m*.5,b=0;b<l;b+=1){var x=E+b*m,_=Math.cos(x)*g,S=Math.sin(x)*g;v+="L "+_.toFixed(3)+" "+S.toFixed(3)+" "}var M={label:"Polygon Body",position:{x:p,y:h},vertices:o.fromPath(v)};if(d.chamfer){var y=d.chamfer;M.vertices=o.chamfer(M.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete d.chamfer}return c.create(a.extend({},M,d))},i.fromVertices=function(p,h,l,g,d,m,v,E){var b=a.getDecomp(),x,_,S,M,y,w,A,T,D,F,P;for(x=Boolean(b&&b.quickDecomp),g=g||{},S=[],d=typeof d!="undefined"?d:!1,m=typeof m!="undefined"?m:.01,v=typeof v!="undefined"?v:10,E=typeof E!="undefined"?E:.01,a.isArray(l[0])||(l=[l]),F=0;F<l.length;F+=1)if(w=l[F],M=o.isConvex(w),y=!M,y&&!x&&a.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),M||!x)M?w=o.clockwiseSort(w):w=o.hull(w),S.push({position:{x:p,y:h},vertices:w});else{var O=w.map(function(U){return[U.x,U.y]});b.makeCCW(O),m!==!1&&b.removeCollinearPoints(O,m),E!==!1&&b.removeDuplicatePoints&&b.removeDuplicatePoints(O,E);var N=b.quickDecomp(O);for(A=0;A<N.length;A++){var H=N[A],k=H.map(function(U){return{x:U[0],y:U[1]}});v>0&&o.area(k)<v||S.push({position:o.centre(k),vertices:k})}}for(A=0;A<S.length;A++)S[A]=c.create(a.extend(S[A],g));if(d){var B=5;for(A=0;A<S.length;A++){var W=S[A];for(T=A+1;T<S.length;T++){var j=S[T];if(f.overlaps(W.bounds,j.bounds)){var Z=W.vertices,K=j.vertices;for(D=0;D<W.vertices.length;D++)for(P=0;P<j.vertices.length;P++){var ae=u.magnitudeSquared(u.sub(Z[(D+1)%Z.length],K[P])),ue=u.magnitudeSquared(u.sub(Z[D],K[(P+1)%K.length]));ae<B&&ue<B&&(Z[D].isInternal=!0,K[P].isInternal=!0)}}}}}return S.length>1?(_=c.create(a.extend({parts:S.slice(0)},g)),c.setPosition(_,{x:p,y:h}),_):S[0]}})()},function(t,n,r){var i={};t.exports=i;var o=r(0);(function(){i.create=function(a){var c={};return a||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=a||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(f){var u=i._getRelativeMousePosition(f,c.element,c.pixelRatio),p=f.changedTouches;p&&(c.button=0,f.preventDefault()),c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=f},c.mousedown=function(f){var u=i._getRelativeMousePosition(f,c.element,c.pixelRatio),p=f.changedTouches;p?(c.button=0,f.preventDefault()):c.button=f.button,c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=f},c.mouseup=function(f){var u=i._getRelativeMousePosition(f,c.element,c.pixelRatio),p=f.changedTouches;p&&f.preventDefault(),c.button=-1,c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=f},c.mousewheel=function(f){c.wheelDelta=Math.max(-1,Math.min(1,f.wheelDelta||-f.detail)),f.preventDefault()},i.setElement(c,c.element),c},i.setElement=function(a,c){a.element=c,c.addEventListener("mousemove",a.mousemove),c.addEventListener("mousedown",a.mousedown),c.addEventListener("mouseup",a.mouseup),c.addEventListener("mousewheel",a.mousewheel),c.addEventListener("DOMMouseScroll",a.mousewheel),c.addEventListener("touchmove",a.mousemove),c.addEventListener("touchstart",a.mousedown),c.addEventListener("touchend",a.mouseup)},i.clearSourceEvents=function(a){a.sourceEvents.mousemove=null,a.sourceEvents.mousedown=null,a.sourceEvents.mouseup=null,a.sourceEvents.mousewheel=null,a.wheelDelta=0},i.setOffset=function(a,c){a.offset.x=c.x,a.offset.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},i.setScale=function(a,c){a.scale.x=c.x,a.scale.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},i._getRelativeMousePosition=function(a,c,f){var u=c.getBoundingClientRect(),p=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:p.scrollLeft,l=window.pageYOffset!==void 0?window.pageYOffset:p.scrollTop,g=a.changedTouches,d,m;return g?(d=g[0].pageX-u.left-h,m=g[0].pageY-u.top-l):(d=a.pageX-u.left-h,m=a.pageY-u.top-l),{x:d/(c.clientWidth/(c.width||c.clientWidth)*f),y:m/(c.clientHeight/(c.height||c.clientHeight)*f)}}})()},function(t,n,r){var i={};t.exports=i;var o=r(0),a=r(8);(function(){i.create=function(c){var f={bodies:[],pairs:null};return o.extend(f,c)},i.setBodies=function(c,f){c.bodies=f.slice(0)},i.clear=function(c){c.bodies=[]},i.collisions=function(c){var f=[],u=c.pairs,p=c.bodies,h=p.length,l=i.canCollide,g=a.collides,d,m;for(p.sort(i._compareBoundsX),d=0;d<h;d++){var v=p[d],E=v.bounds,b=v.bounds.max.x,x=v.bounds.max.y,_=v.bounds.min.y,S=v.isStatic||v.isSleeping,M=v.parts.length,y=M===1;for(m=d+1;m<h;m++){var w=p[m],A=w.bounds;if(A.min.x>b)break;if(!(x<A.min.y||_>A.max.y)&&!(S&&(w.isStatic||w.isSleeping))&&!!l(v.collisionFilter,w.collisionFilter)){var T=w.parts.length;if(y&&T===1){var D=g(v,w,u);D&&f.push(D)}else for(var F=M>1?1:0,P=T>1?1:0,O=F;O<M;O++)for(var N=v.parts[O],E=N.bounds,H=P;H<T;H++){var k=w.parts[H],A=k.bounds;if(!(E.min.x>A.max.x||E.max.x<A.min.x||E.max.y<A.min.y||E.min.y>A.max.y)){var D=g(N,k,u);D&&f.push(D)}}}}}return f},i.canCollide=function(c,f){return c.group===f.group&&c.group!==0?c.group>0:(c.mask&f.category)!==0&&(f.mask&c.category)!==0},i._compareBoundsX=function(c,f){return c.bounds.min.x-f.bounds.min.x}})()},function(t,n,r){var i={};t.exports=i;var o=r(0);(function(){i._registry={},i.register=function(a){if(i.isPlugin(a)||o.warn("Plugin.register:",i.toString(a),"does not implement all required fields."),a.name in i._registry){var c=i._registry[a.name],f=i.versionParse(a.version).number,u=i.versionParse(c.version).number;f>u?(o.warn("Plugin.register:",i.toString(c),"was upgraded to",i.toString(a)),i._registry[a.name]=a):f<u?o.warn("Plugin.register:",i.toString(c),"can not be downgraded to",i.toString(a)):a!==c&&o.warn("Plugin.register:",i.toString(a),"is already registered to different plugin object")}else i._registry[a.name]=a;return a},i.resolve=function(a){return i._registry[i.dependencyParse(a).name]},i.toString=function(a){return typeof a=="string"?a:(a.name||"anonymous")+"@"+(a.version||a.range||"0.0.0")},i.isPlugin=function(a){return a&&a.name&&a.version&&a.install},i.isUsed=function(a,c){return a.used.indexOf(c)>-1},i.isFor=function(a,c){var f=a.for&&i.dependencyParse(a.for);return!a.for||c.name===f.name&&i.versionSatisfies(c.version,f.range)},i.use=function(a,c){if(a.uses=(a.uses||[]).concat(c||[]),a.uses.length===0){o.warn("Plugin.use:",i.toString(a),"does not specify any dependencies to install.");return}for(var f=i.dependencies(a),u=o.topologicalSort(f),p=[],h=0;h<u.length;h+=1)if(u[h]!==a.name){var l=i.resolve(u[h]);if(!l){p.push("\u274C "+u[h]);continue}i.isUsed(a,l.name)||(i.isFor(l,a)||(o.warn("Plugin.use:",i.toString(l),"is for",l.for,"but installed on",i.toString(a)+"."),l._warned=!0),l.install?l.install(a):(o.warn("Plugin.use:",i.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(p.push("\u{1F536} "+i.toString(l)),delete l._warned):p.push("\u2705 "+i.toString(l)),a.used.push(l.name))}p.length>0&&o.info(p.join("  "))},i.dependencies=function(a,c){var f=i.dependencyParse(a),u=f.name;if(c=c||{},!(u in c)){a=i.resolve(a)||a,c[u]=o.map(a.uses||[],function(h){i.isPlugin(h)&&i.register(h);var l=i.dependencyParse(h),g=i.resolve(h);return g&&!i.versionSatisfies(g.version,l.range)?(o.warn("Plugin.dependencies:",i.toString(g),"does not satisfy",i.toString(l),"used by",i.toString(f)+"."),g._warned=!0,a._warned=!0):g||(o.warn("Plugin.dependencies:",i.toString(h),"used by",i.toString(f),"could not be resolved."),a._warned=!0),l.name});for(var p=0;p<c[u].length;p+=1)i.dependencies(c[u][p],c);return c}},i.dependencyParse=function(a){if(o.isString(a)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(a)||o.warn("Plugin.dependencyParse:",a,"is not a valid dependency string."),{name:a.split("@")[0],range:a.split("@")[1]||"*"}}return{name:a.name,range:a.range||a.version}},i.versionParse=function(a){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(a)||o.warn("Plugin.versionParse:",a,"is not a valid version or range.");var f=c.exec(a),u=Number(f[4]),p=Number(f[5]),h=Number(f[6]);return{isRange:Boolean(f[1]||f[2]),version:f[3],range:a,operator:f[1]||f[2]||"",major:u,minor:p,patch:h,parts:[u,p,h],prerelease:f[7],number:u*1e8+p*1e4+h}},i.versionSatisfies=function(a,c){c=c||"*";var f=i.versionParse(c),u=i.versionParse(a);if(f.isRange){if(f.operator==="*"||a==="*")return!0;if(f.operator===">")return u.number>f.number;if(f.operator===">=")return u.number>=f.number;if(f.operator==="~")return u.major===f.major&&u.minor===f.minor&&u.patch>=f.patch;if(f.operator==="^")return f.major>0?u.major===f.major&&u.number>=f.number:f.minor>0?u.minor===f.minor&&u.patch>=f.patch:u.patch===f.patch}return a===c||a==="*"}})()},function(t,n,r){var i={};t.exports=i;var o=r(0),a=r(5),c=r(1),f=r(4),u=r(2),p=r(13);(function(){var h,l;typeof window!="undefined"&&(h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(o.now())},1e3/60)},l=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i._goodFps=30,i._goodDelta=1e3/60,i.create=function(x){var _={controller:i,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},S=o.extend(_,x);return S.canvas&&(S.canvas.width=S.options.width||S.canvas.width,S.canvas.height=S.options.height||S.canvas.height),S.mouse=x.mouse,S.engine=x.engine,S.canvas=S.canvas||m(S.options.width,S.options.height),S.context=S.canvas.getContext("2d"),S.textures={},S.bounds=S.bounds||{min:{x:0,y:0},max:{x:S.canvas.width,y:S.canvas.height}},S.options.showBroadphase=!1,S.options.pixelRatio!==1&&i.setPixelRatio(S,S.options.pixelRatio),o.isElement(S.element)?S.element.appendChild(S.canvas):S.canvas.parentNode||o.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),S},i.run=function(x){(function _(S){x.frameRequestId=h(_),g(x,S),i.world(x,S),(x.options.showStats||x.options.showDebug)&&i.stats(x,x.context,S),(x.options.showPerformance||x.options.showDebug)&&i.performance(x,x.context,S)})()},i.stop=function(x){l(x.frameRequestId)},i.setPixelRatio=function(x,_){var S=x.options,M=x.canvas;_==="auto"&&(_=v(M)),S.pixelRatio=_,M.setAttribute("data-pixel-ratio",_),M.width=S.width*_,M.height=S.height*_,M.style.width=S.width+"px",M.style.height=S.height+"px"},i.lookAt=function(x,_,S,M){M=typeof M!="undefined"?M:!0,_=o.isArray(_)?_:[_],S=S||{x:0,y:0};for(var y={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},w=0;w<_.length;w+=1){var A=_[w],T=A.bounds?A.bounds.min:A.min||A.position||A,D=A.bounds?A.bounds.max:A.max||A.position||A;T&&D&&(T.x<y.min.x&&(y.min.x=T.x),D.x>y.max.x&&(y.max.x=D.x),T.y<y.min.y&&(y.min.y=T.y),D.y>y.max.y&&(y.max.y=D.y))}var F=y.max.x-y.min.x+2*S.x,P=y.max.y-y.min.y+2*S.y,O=x.canvas.height,N=x.canvas.width,H=N/O,k=F/P,B=1,W=1;k>H?W=k/H:B=H/k,x.options.hasBounds=!0,x.bounds.min.x=y.min.x,x.bounds.max.x=y.min.x+F*B,x.bounds.min.y=y.min.y,x.bounds.max.y=y.min.y+P*W,M&&(x.bounds.min.x+=F*.5-F*B*.5,x.bounds.max.x+=F*.5-F*B*.5,x.bounds.min.y+=P*.5-P*W*.5,x.bounds.max.y+=P*.5-P*W*.5),x.bounds.min.x-=S.x,x.bounds.max.x-=S.x,x.bounds.min.y-=S.y,x.bounds.max.y-=S.y,x.mouse&&(p.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),p.setOffset(x.mouse,x.bounds.min))},i.startViewTransform=function(x){var _=x.bounds.max.x-x.bounds.min.x,S=x.bounds.max.y-x.bounds.min.y,M=_/x.options.width,y=S/x.options.height;x.context.setTransform(x.options.pixelRatio/M,0,0,x.options.pixelRatio/y,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},i.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},i.world=function(x,_){var S=o.now(),M=x.engine,y=M.world,w=x.canvas,A=x.context,T=x.options,D=x.timing,F=a.allBodies(y),P=a.allConstraints(y),O=T.wireframes?T.wireframeBackground:T.background,N=[],H=[],k,B={timestamp:M.timing.timestamp};if(f.trigger(x,"beforeRender",B),x.currentBackground!==O&&b(x,O),A.globalCompositeOperation="source-in",A.fillStyle="transparent",A.fillRect(0,0,w.width,w.height),A.globalCompositeOperation="source-over",T.hasBounds){for(k=0;k<F.length;k++){var W=F[k];c.overlaps(W.bounds,x.bounds)&&N.push(W)}for(k=0;k<P.length;k++){var j=P[k],Z=j.bodyA,K=j.bodyB,ae=j.pointA,ue=j.pointB;Z&&(ae=u.add(Z.position,j.pointA)),K&&(ue=u.add(K.position,j.pointB)),!(!ae||!ue)&&(c.contains(x.bounds,ae)||c.contains(x.bounds,ue))&&H.push(j)}i.startViewTransform(x),x.mouse&&(p.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),p.setOffset(x.mouse,x.bounds.min))}else H=P,N=F,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!T.wireframes||M.enableSleeping&&T.showSleeping?i.bodies(x,N,A):(T.showConvexHulls&&i.bodyConvexHulls(x,N,A),i.bodyWireframes(x,N,A)),T.showBounds&&i.bodyBounds(x,N,A),(T.showAxes||T.showAngleIndicator)&&i.bodyAxes(x,N,A),T.showPositions&&i.bodyPositions(x,N,A),T.showVelocity&&i.bodyVelocity(x,N,A),T.showIds&&i.bodyIds(x,N,A),T.showSeparations&&i.separations(x,M.pairs.list,A),T.showCollisions&&i.collisions(x,M.pairs.list,A),T.showVertexNumbers&&i.vertexNumbers(x,N,A),T.showMousePosition&&i.mousePosition(x,x.mouse,A),i.constraints(H,A),T.hasBounds&&i.endViewTransform(x),f.trigger(x,"afterRender",B),D.lastElapsed=o.now()-S},i.stats=function(x,_,S){for(var M=x.engine,y=M.world,w=a.allBodies(y),A=0,T=55,D=44,F=0,P=0,O=0;O<w.length;O+=1)A+=w[O].parts.length;var N={Part:A,Body:w.length,Cons:a.allConstraints(y).length,Comp:a.allComposites(y).length,Pair:M.pairs.list.length};_.fillStyle="#0e0f19",_.fillRect(F,P,T*5.5,D),_.font="12px Arial",_.textBaseline="top",_.textAlign="right";for(var H in N){var k=N[H];_.fillStyle="#aaa",_.fillText(H,F+T,P+8),_.fillStyle="#eee",_.fillText(k,F+T,P+26),F+=T}},i.performance=function(x,_){var S=x.engine,M=x.timing,y=M.deltaHistory,w=M.elapsedHistory,A=M.timestampElapsedHistory,T=M.engineDeltaHistory,D=M.engineElapsedHistory,F=S.timing.lastDelta,P=d(y),O=d(w),N=d(T),H=d(D),k=d(A),B=k/P||0,W=1e3/P||0,j=4,Z=12,K=60,ae=34,ue=10,U=69;_.fillStyle="#0e0f19",_.fillRect(0,50,Z*4+K*5+22,ae),i.status(_,ue,U,K,j,y.length,Math.round(W)+" fps",W/i._goodFps,function(be){return y[be]/P-1}),i.status(_,ue+Z+K,U,K,j,T.length,F.toFixed(2)+" dt",i._goodDelta/F,function(be){return T[be]/N-1}),i.status(_,ue+(Z+K)*2,U,K,j,D.length,H.toFixed(2)+" ut",1-H/i._goodFps,function(be){return D[be]/H-1}),i.status(_,ue+(Z+K)*3,U,K,j,w.length,O.toFixed(2)+" rt",1-O/i._goodFps,function(be){return w[be]/O-1}),i.status(_,ue+(Z+K)*4,U,K,j,A.length,B.toFixed(2)+" x",B*B*B,function(be){return(A[be]/y[be]/B||0)-1})},i.status=function(x,_,S,M,y,w,A,T,D){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(_,S+7,M,1),x.beginPath(),x.moveTo(_,S+7-y*o.clamp(.4*D(0),-2,2));for(var F=0;F<M;F+=1)x.lineTo(_+F,S+7-(F<w?y*o.clamp(.4*D(F),-2,2):0));x.stroke(),x.fillStyle="hsl("+o.clamp(25+95*T,0,120)+",100%,60%)",x.fillRect(_,S-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(A,_+M,S-5)},i.constraints=function(x,_){for(var S=_,M=0;M<x.length;M++){var y=x[M];if(!(!y.render.visible||!y.pointA||!y.pointB)){var w=y.bodyA,A=y.bodyB,T,D;if(w?T=u.add(w.position,y.pointA):T=y.pointA,y.render.type==="pin")S.beginPath(),S.arc(T.x,T.y,3,0,2*Math.PI),S.closePath();else{if(A?D=u.add(A.position,y.pointB):D=y.pointB,S.beginPath(),S.moveTo(T.x,T.y),y.render.type==="spring")for(var F=u.sub(D,T),P=u.perp(u.normalise(F)),O=Math.ceil(o.clamp(y.length/5,12,20)),N,H=1;H<O;H+=1)N=H%2===0?1:-1,S.lineTo(T.x+F.x*(H/O)+P.x*N*4,T.y+F.y*(H/O)+P.y*N*4);S.lineTo(D.x,D.y)}y.render.lineWidth&&(S.lineWidth=y.render.lineWidth,S.strokeStyle=y.render.strokeStyle,S.stroke()),y.render.anchors&&(S.fillStyle=y.render.strokeStyle,S.beginPath(),S.arc(T.x,T.y,3,0,2*Math.PI),S.arc(D.x,D.y,3,0,2*Math.PI),S.closePath(),S.fill())}}},i.bodies=function(x,_,S){var M=S;x.engine;var y=x.options,w=y.showInternalEdges||!y.wireframes,A,T,D,F;for(D=0;D<_.length;D++)if(A=_[D],!!A.render.visible){for(F=A.parts.length>1?1:0;F<A.parts.length;F++)if(T=A.parts[F],!!T.render.visible){if(y.showSleeping&&A.isSleeping?M.globalAlpha=.5*T.render.opacity:T.render.opacity!==1&&(M.globalAlpha=T.render.opacity),T.render.sprite&&T.render.sprite.texture&&!y.wireframes){var P=T.render.sprite,O=E(x,P.texture);M.translate(T.position.x,T.position.y),M.rotate(T.angle),M.drawImage(O,O.width*-P.xOffset*P.xScale,O.height*-P.yOffset*P.yScale,O.width*P.xScale,O.height*P.yScale),M.rotate(-T.angle),M.translate(-T.position.x,-T.position.y)}else{if(T.circleRadius)M.beginPath(),M.arc(T.position.x,T.position.y,T.circleRadius,0,2*Math.PI);else{M.beginPath(),M.moveTo(T.vertices[0].x,T.vertices[0].y);for(var N=1;N<T.vertices.length;N++)!T.vertices[N-1].isInternal||w?M.lineTo(T.vertices[N].x,T.vertices[N].y):M.moveTo(T.vertices[N].x,T.vertices[N].y),T.vertices[N].isInternal&&!w&&M.moveTo(T.vertices[(N+1)%T.vertices.length].x,T.vertices[(N+1)%T.vertices.length].y);M.lineTo(T.vertices[0].x,T.vertices[0].y),M.closePath()}y.wireframes?(M.lineWidth=1,M.strokeStyle="#bbb",M.stroke()):(M.fillStyle=T.render.fillStyle,T.render.lineWidth&&(M.lineWidth=T.render.lineWidth,M.strokeStyle=T.render.strokeStyle,M.stroke()),M.fill())}M.globalAlpha=1}}},i.bodyWireframes=function(x,_,S){var M=S,y=x.options.showInternalEdges,w,A,T,D,F;for(M.beginPath(),T=0;T<_.length;T++)if(w=_[T],!!w.render.visible)for(F=w.parts.length>1?1:0;F<w.parts.length;F++){for(A=w.parts[F],M.moveTo(A.vertices[0].x,A.vertices[0].y),D=1;D<A.vertices.length;D++)!A.vertices[D-1].isInternal||y?M.lineTo(A.vertices[D].x,A.vertices[D].y):M.moveTo(A.vertices[D].x,A.vertices[D].y),A.vertices[D].isInternal&&!y&&M.moveTo(A.vertices[(D+1)%A.vertices.length].x,A.vertices[(D+1)%A.vertices.length].y);M.lineTo(A.vertices[0].x,A.vertices[0].y)}M.lineWidth=1,M.strokeStyle="#bbb",M.stroke()},i.bodyConvexHulls=function(x,_,S){var M=S,y,w,A;for(M.beginPath(),w=0;w<_.length;w++)if(y=_[w],!(!y.render.visible||y.parts.length===1)){for(M.moveTo(y.vertices[0].x,y.vertices[0].y),A=1;A<y.vertices.length;A++)M.lineTo(y.vertices[A].x,y.vertices[A].y);M.lineTo(y.vertices[0].x,y.vertices[0].y)}M.lineWidth=1,M.strokeStyle="rgba(255,255,255,0.2)",M.stroke()},i.vertexNumbers=function(x,_,S){var M=S,y,w,A;for(y=0;y<_.length;y++){var T=_[y].parts;for(A=T.length>1?1:0;A<T.length;A++){var D=T[A];for(w=0;w<D.vertices.length;w++)M.fillStyle="rgba(255,255,255,0.2)",M.fillText(y+"_"+w,D.position.x+(D.vertices[w].x-D.position.x)*.8,D.position.y+(D.vertices[w].y-D.position.y)*.8)}}},i.mousePosition=function(x,_,S){var M=S;M.fillStyle="rgba(255,255,255,0.8)",M.fillText(_.position.x+"  "+_.position.y,_.position.x+5,_.position.y-5)},i.bodyBounds=function(x,_,S){var M=S;x.engine;var y=x.options;M.beginPath();for(var w=0;w<_.length;w++){var A=_[w];if(A.render.visible)for(var T=_[w].parts,D=T.length>1?1:0;D<T.length;D++){var F=T[D];M.rect(F.bounds.min.x,F.bounds.min.y,F.bounds.max.x-F.bounds.min.x,F.bounds.max.y-F.bounds.min.y)}}y.wireframes?M.strokeStyle="rgba(255,255,255,0.08)":M.strokeStyle="rgba(0,0,0,0.1)",M.lineWidth=1,M.stroke()},i.bodyAxes=function(x,_,S){var M=S;x.engine;var y=x.options,w,A,T,D;for(M.beginPath(),A=0;A<_.length;A++){var F=_[A],P=F.parts;if(!!F.render.visible)if(y.showAxes)for(T=P.length>1?1:0;T<P.length;T++)for(w=P[T],D=0;D<w.axes.length;D++){var O=w.axes[D];M.moveTo(w.position.x,w.position.y),M.lineTo(w.position.x+O.x*20,w.position.y+O.y*20)}else for(T=P.length>1?1:0;T<P.length;T++)for(w=P[T],D=0;D<w.axes.length;D++)M.moveTo(w.position.x,w.position.y),M.lineTo((w.vertices[0].x+w.vertices[w.vertices.length-1].x)/2,(w.vertices[0].y+w.vertices[w.vertices.length-1].y)/2)}y.wireframes?(M.strokeStyle="indianred",M.lineWidth=1):(M.strokeStyle="rgba(255, 255, 255, 0.4)",M.globalCompositeOperation="overlay",M.lineWidth=2),M.stroke(),M.globalCompositeOperation="source-over"},i.bodyPositions=function(x,_,S){var M=S;x.engine;var y=x.options,w,A,T,D;for(M.beginPath(),T=0;T<_.length;T++)if(w=_[T],!!w.render.visible)for(D=0;D<w.parts.length;D++)A=w.parts[D],M.arc(A.position.x,A.position.y,3,0,2*Math.PI,!1),M.closePath();for(y.wireframes?M.fillStyle="indianred":M.fillStyle="rgba(0,0,0,0.5)",M.fill(),M.beginPath(),T=0;T<_.length;T++)w=_[T],w.render.visible&&(M.arc(w.positionPrev.x,w.positionPrev.y,2,0,2*Math.PI,!1),M.closePath());M.fillStyle="rgba(255,165,0,0.8)",M.fill()},i.bodyVelocity=function(x,_,S){var M=S;M.beginPath();for(var y=0;y<_.length;y++){var w=_[y];!w.render.visible||(M.moveTo(w.position.x,w.position.y),M.lineTo(w.position.x+(w.position.x-w.positionPrev.x)*2,w.position.y+(w.position.y-w.positionPrev.y)*2))}M.lineWidth=3,M.strokeStyle="cornflowerblue",M.stroke()},i.bodyIds=function(x,_,S){var M=S,y,w;for(y=0;y<_.length;y++)if(!!_[y].render.visible){var A=_[y].parts;for(w=A.length>1?1:0;w<A.length;w++){var T=A[w];M.font="12px Arial",M.fillStyle="rgba(255,255,255,0.5)",M.fillText(T.id,T.position.x+10,T.position.y-10)}}},i.collisions=function(x,_,S){var M=S,y=x.options,w,A,T,D;for(M.beginPath(),T=0;T<_.length;T++)if(w=_[T],!!w.isActive)for(A=w.collision,D=0;D<w.activeContacts.length;D++){var F=w.activeContacts[D],P=F.vertex;M.rect(P.x-1.5,P.y-1.5,3.5,3.5)}for(y.wireframes?M.fillStyle="rgba(255,255,255,0.7)":M.fillStyle="orange",M.fill(),M.beginPath(),T=0;T<_.length;T++)if(w=_[T],!!w.isActive&&(A=w.collision,w.activeContacts.length>0)){var O=w.activeContacts[0].vertex.x,N=w.activeContacts[0].vertex.y;w.activeContacts.length===2&&(O=(w.activeContacts[0].vertex.x+w.activeContacts[1].vertex.x)/2,N=(w.activeContacts[0].vertex.y+w.activeContacts[1].vertex.y)/2),A.bodyB===A.supports[0].body||A.bodyA.isStatic===!0?M.moveTo(O-A.normal.x*8,N-A.normal.y*8):M.moveTo(O+A.normal.x*8,N+A.normal.y*8),M.lineTo(O,N)}y.wireframes?M.strokeStyle="rgba(255,165,0,0.7)":M.strokeStyle="orange",M.lineWidth=1,M.stroke()},i.separations=function(x,_,S){var M=S,y=x.options,w,A,T,D,F;for(M.beginPath(),F=0;F<_.length;F++)if(w=_[F],!!w.isActive){A=w.collision,T=A.bodyA,D=A.bodyB;var P=1;!D.isStatic&&!T.isStatic&&(P=.5),D.isStatic&&(P=0),M.moveTo(D.position.x,D.position.y),M.lineTo(D.position.x-A.penetration.x*P,D.position.y-A.penetration.y*P),P=1,!D.isStatic&&!T.isStatic&&(P=.5),T.isStatic&&(P=0),M.moveTo(T.position.x,T.position.y),M.lineTo(T.position.x+A.penetration.x*P,T.position.y+A.penetration.y*P)}y.wireframes?M.strokeStyle="rgba(255,165,0,0.5)":M.strokeStyle="orange",M.stroke()},i.inspector=function(x,_){x.engine;var S=x.selected,M=x.render,y=M.options,w;if(y.hasBounds){var A=M.bounds.max.x-M.bounds.min.x,T=M.bounds.max.y-M.bounds.min.y,D=A/M.options.width,F=T/M.options.height;_.scale(1/D,1/F),_.translate(-M.bounds.min.x,-M.bounds.min.y)}for(var P=0;P<S.length;P++){var O=S[P].data;switch(_.translate(.5,.5),_.lineWidth=1,_.strokeStyle="rgba(255,165,0,0.9)",_.setLineDash([1,2]),O.type){case"body":w=O.bounds,_.beginPath(),_.rect(Math.floor(w.min.x-3),Math.floor(w.min.y-3),Math.floor(w.max.x-w.min.x+6),Math.floor(w.max.y-w.min.y+6)),_.closePath(),_.stroke();break;case"constraint":var N=O.pointA;O.bodyA&&(N=O.pointB),_.beginPath(),_.arc(N.x,N.y,10,0,2*Math.PI),_.closePath(),_.stroke();break}_.setLineDash([]),_.translate(-.5,-.5)}x.selectStart!==null&&(_.translate(.5,.5),_.lineWidth=1,_.strokeStyle="rgba(255,165,0,0.6)",_.fillStyle="rgba(255,165,0,0.1)",w=x.selectBounds,_.beginPath(),_.rect(Math.floor(w.min.x),Math.floor(w.min.y),Math.floor(w.max.x-w.min.x),Math.floor(w.max.y-w.min.y)),_.closePath(),_.stroke(),_.fill(),_.translate(-.5,-.5)),y.hasBounds&&_.setTransform(1,0,0,1,0,0)};var g=function(x,_){var S=x.engine,M=x.timing,y=M.historySize,w=S.timing.timestamp;M.delta=_-M.lastTime||i._goodDelta,M.lastTime=_,M.timestampElapsed=w-M.lastTimestamp||0,M.lastTimestamp=w,M.deltaHistory.unshift(M.delta),M.deltaHistory.length=Math.min(M.deltaHistory.length,y),M.engineDeltaHistory.unshift(S.timing.lastDelta),M.engineDeltaHistory.length=Math.min(M.engineDeltaHistory.length,y),M.timestampElapsedHistory.unshift(M.timestampElapsed),M.timestampElapsedHistory.length=Math.min(M.timestampElapsedHistory.length,y),M.engineElapsedHistory.unshift(S.timing.lastElapsed),M.engineElapsedHistory.length=Math.min(M.engineElapsedHistory.length,y),M.elapsedHistory.unshift(M.lastElapsed),M.elapsedHistory.length=Math.min(M.elapsedHistory.length,y)},d=function(x){for(var _=0,S=0;S<x.length;S+=1)_+=x[S];return _/x.length||0},m=function(x,_){var S=document.createElement("canvas");return S.width=x,S.height=_,S.oncontextmenu=function(){return!1},S.onselectstart=function(){return!1},S},v=function(x){var _=x.getContext("2d"),S=window.devicePixelRatio||1,M=_.webkitBackingStorePixelRatio||_.mozBackingStorePixelRatio||_.msBackingStorePixelRatio||_.oBackingStorePixelRatio||_.backingStorePixelRatio||1;return S/M},E=function(x,_){var S=x.textures[_];return S||(S=x.textures[_]=new Image,S.src=_,S)},b=function(x,_){var S=_;/(jpg|gif|png)$/.test(_)&&(S="url("+_+")"),x.canvas.style.background=S,x.canvas.style.backgroundSize="contain",x.currentBackground=_}})()},function(t,n){var r={};t.exports=r,function(){r.create=function(i){return{vertex:i,normalImpulse:0,tangentImpulse:0}}}()},function(t,n,r){var i={};t.exports=i;var o=r(7),a=r(19),c=r(14),f=r(20),u=r(4),p=r(5),h=r(10),l=r(0),g=r(6);(function(){i.create=function(d){d=d||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},v=l.extend(m,d);return v.world=d.world||p.create({label:"World"}),v.pairs=d.pairs||f.create(),v.detector=d.detector||c.create(),v.grid={buckets:[]},v.world.gravity=v.gravity,v.broadphase=v.grid,v.metrics={},v},i.update=function(d,m,v){var E=l.now();m=m||1e3/60,v=v||1;var b=d.world,x=d.detector,_=d.pairs,S=d.timing,M=S.timestamp,y;S.timestamp+=m*S.timeScale,S.lastDelta=m*S.timeScale;var w={timestamp:S.timestamp};u.trigger(d,"beforeUpdate",w);var A=p.allBodies(b),T=p.allConstraints(b);for(b.isModified&&c.setBodies(x,A),b.isModified&&p.setModified(b,!1,!1,!0),d.enableSleeping&&o.update(A,S.timeScale),i._bodiesApplyGravity(A,d.gravity),i._bodiesUpdate(A,m,S.timeScale,v,b.bounds),h.preSolveAll(A),y=0;y<d.constraintIterations;y++)h.solveAll(T,S.timeScale);h.postSolveAll(A),x.pairs=d.pairs;var D=c.collisions(x);for(f.update(_,D,M),d.enableSleeping&&o.afterCollisions(_.list,S.timeScale),_.collisionStart.length>0&&u.trigger(d,"collisionStart",{pairs:_.collisionStart}),a.preSolvePosition(_.list),y=0;y<d.positionIterations;y++)a.solvePosition(_.list,S.timeScale);for(a.postSolvePosition(A),h.preSolveAll(A),y=0;y<d.constraintIterations;y++)h.solveAll(T,S.timeScale);for(h.postSolveAll(A),a.preSolveVelocity(_.list),y=0;y<d.velocityIterations;y++)a.solveVelocity(_.list,S.timeScale);return _.collisionActive.length>0&&u.trigger(d,"collisionActive",{pairs:_.collisionActive}),_.collisionEnd.length>0&&u.trigger(d,"collisionEnd",{pairs:_.collisionEnd}),i._bodiesClearForces(A),u.trigger(d,"afterUpdate",w),d.timing.lastElapsed=l.now()-E,d},i.merge=function(d,m){if(l.extend(d,m),m.world){d.world=m.world,i.clear(d);for(var v=p.allBodies(d.world),E=0;E<v.length;E++){var b=v[E];o.set(b,!1),b.id=l.nextId()}}},i.clear=function(d){f.clear(d.pairs),c.clear(d.detector)},i._bodiesClearForces=function(d){for(var m=0;m<d.length;m++){var v=d[m];v.force.x=0,v.force.y=0,v.torque=0}},i._bodiesApplyGravity=function(d,m){var v=typeof m.scale!="undefined"?m.scale:.001;if(!(m.x===0&&m.y===0||v===0))for(var E=0;E<d.length;E++){var b=d[E];b.isStatic||b.isSleeping||(b.force.y+=b.mass*m.y*v,b.force.x+=b.mass*m.x*v)}},i._bodiesUpdate=function(d,m,v,E,b){for(var x=0;x<d.length;x++){var _=d[x];_.isStatic||_.isSleeping||g.update(_,m,v,E)}}})()},function(t,n,r){var i={};t.exports=i;var o=r(3),a=r(1);(function(){i._restingThresh=4,i._restingThreshTangent=6,i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i.preSolvePosition=function(c){var f,u,p,h=c.length;for(f=0;f<h;f++)u=c[f],u.isActive&&(p=u.activeContacts.length,u.collision.parentA.totalContacts+=p,u.collision.parentB.totalContacts+=p)},i.solvePosition=function(c,f){var u,p,h,l,g,d,m,v,E=i._positionDampen,b=c.length;for(u=0;u<b;u++)p=c[u],!(!p.isActive||p.isSensor)&&(h=p.collision,l=h.parentA,g=h.parentB,d=h.normal,p.separation=d.x*(g.positionImpulse.x+h.penetration.x-l.positionImpulse.x)+d.y*(g.positionImpulse.y+h.penetration.y-l.positionImpulse.y));for(u=0;u<b;u++)p=c[u],!(!p.isActive||p.isSensor)&&(h=p.collision,l=h.parentA,g=h.parentB,d=h.normal,v=(p.separation-p.slop)*f,(l.isStatic||g.isStatic)&&(v*=2),l.isStatic||l.isSleeping||(m=E/l.totalContacts,l.positionImpulse.x+=d.x*v*m,l.positionImpulse.y+=d.y*v*m),g.isStatic||g.isSleeping||(m=E/g.totalContacts,g.positionImpulse.x-=d.x*v*m,g.positionImpulse.y-=d.y*v*m))},i.postSolvePosition=function(c){for(var f=i._positionWarming,u=c.length,p=o.translate,h=a.update,l=0;l<u;l++){var g=c[l],d=g.positionImpulse,m=d.x,v=d.y,E=g.velocity;if(g.totalContacts=0,m!==0||v!==0){for(var b=0;b<g.parts.length;b++){var x=g.parts[b];p(x.vertices,d),h(x.bounds,x.vertices,E),x.position.x+=m,x.position.y+=v}g.positionPrev.x+=m,g.positionPrev.y+=v,m*E.x+v*E.y<0?(d.x=0,d.y=0):(d.x*=f,d.y*=f)}}},i.preSolveVelocity=function(c){var f=c.length,u,p;for(u=0;u<f;u++){var h=c[u];if(!(!h.isActive||h.isSensor)){var l=h.activeContacts,g=l.length,d=h.collision,m=d.parentA,v=d.parentB,E=d.normal,b=d.tangent;for(p=0;p<g;p++){var x=l[p],_=x.vertex,S=x.normalImpulse,M=x.tangentImpulse;if(S!==0||M!==0){var y=E.x*S+b.x*M,w=E.y*S+b.y*M;m.isStatic||m.isSleeping||(m.positionPrev.x+=y*m.inverseMass,m.positionPrev.y+=w*m.inverseMass,m.anglePrev+=m.inverseInertia*((_.x-m.position.x)*w-(_.y-m.position.y)*y)),v.isStatic||v.isSleeping||(v.positionPrev.x-=y*v.inverseMass,v.positionPrev.y-=w*v.inverseMass,v.anglePrev-=v.inverseInertia*((_.x-v.position.x)*w-(_.y-v.position.y)*y))}}}}},i.solveVelocity=function(c,f){var u=f*f,p=i._restingThresh*u,h=i._frictionNormalMultiplier,l=i._restingThreshTangent*u,g=Number.MAX_VALUE,d=c.length,m,v,E,b;for(E=0;E<d;E++){var x=c[E];if(!(!x.isActive||x.isSensor)){var _=x.collision,S=_.parentA,M=_.parentB,y=S.velocity,w=M.velocity,A=_.normal.x,T=_.normal.y,D=_.tangent.x,F=_.tangent.y,P=x.activeContacts,O=P.length,N=1/O,H=S.inverseMass+M.inverseMass,k=x.friction*x.frictionStatic*h*u;for(y.x=S.position.x-S.positionPrev.x,y.y=S.position.y-S.positionPrev.y,w.x=M.position.x-M.positionPrev.x,w.y=M.position.y-M.positionPrev.y,S.angularVelocity=S.angle-S.anglePrev,M.angularVelocity=M.angle-M.anglePrev,b=0;b<O;b++){var B=P[b],W=B.vertex,j=W.x-S.position.x,Z=W.y-S.position.y,K=W.x-M.position.x,ae=W.y-M.position.y,ue=y.x-Z*S.angularVelocity,U=y.y+j*S.angularVelocity,be=w.x-ae*M.angularVelocity,Se=w.y+K*M.angularVelocity,ye=ue-be,oe=U-Se,Ce=A*ye+T*oe,me=D*ye+F*oe,ge=x.separation+Ce,He=Math.min(ge,1);He=ge<0?0:He;var Ke=He*k;me>Ke||-me>Ke?(v=me>0?me:-me,m=x.friction*(me>0?1:-1)*u,m<-v?m=-v:m>v&&(m=v)):(m=me,v=g);var Je=j*T-Z*A,lt=K*T-ae*A,Ve=N/(H+S.inverseInertia*Je*Je+M.inverseInertia*lt*lt),Le=(1+x.restitution)*Ce*Ve;if(m*=Ve,Ce*Ce>p&&Ce<0)B.normalImpulse=0;else{var vt=B.normalImpulse;B.normalImpulse+=Le,B.normalImpulse=Math.min(B.normalImpulse,0),Le=B.normalImpulse-vt}if(me*me>l)B.tangentImpulse=0;else{var xt=B.tangentImpulse;B.tangentImpulse+=m,B.tangentImpulse<-v&&(B.tangentImpulse=-v),B.tangentImpulse>v&&(B.tangentImpulse=v),m=B.tangentImpulse-xt}var L=A*Le+D*m,C=T*Le+F*m;S.isStatic||S.isSleeping||(S.positionPrev.x+=L*S.inverseMass,S.positionPrev.y+=C*S.inverseMass,S.anglePrev+=(j*C-Z*L)*S.inverseInertia),M.isStatic||M.isSleeping||(M.positionPrev.x-=L*M.inverseMass,M.positionPrev.y-=C*M.inverseMass,M.anglePrev-=(K*C-ae*L)*M.inverseInertia)}}}}})()},function(t,n,r){var i={};t.exports=i;var o=r(9),a=r(0);(function(){i.create=function(c){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},i.update=function(c,f,u){var p=c.list,h=p.length,l=c.table,g=f.length,d=c.collisionStart,m=c.collisionEnd,v=c.collisionActive,E,b,x,_;for(d.length=0,m.length=0,v.length=0,_=0;_<h;_++)p[_].confirmedActive=!1;for(_=0;_<g;_++)E=f[_],x=E.pair,x?(x.isActive?v.push(x):d.push(x),o.update(x,E,u),x.confirmedActive=!0):(x=o.create(E,u),l[x.id]=x,d.push(x),p.push(x));var S=[];for(h=p.length,_=0;_<h;_++)x=p[_],x.confirmedActive||(o.setActive(x,!1,u),m.push(x),!x.collision.bodyA.isSleeping&&!x.collision.bodyB.isSleeping&&S.push(_));for(_=0;_<S.length;_++)b=S[_]-_,x=p[b],p.splice(b,1),delete l[x.id]},i.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()},function(t,n,r){var i=t.exports=r(22);i.Axes=r(11),i.Bodies=r(12),i.Body=r(6),i.Bounds=r(1),i.Collision=r(8),i.Common=r(0),i.Composite=r(5),i.Composites=r(23),i.Constraint=r(10),i.Contact=r(17),i.Detector=r(14),i.Engine=r(18),i.Events=r(4),i.Grid=r(24),i.Mouse=r(13),i.MouseConstraint=r(25),i.Pair=r(9),i.Pairs=r(20),i.Plugin=r(15),i.Query=r(26),i.Render=r(16),i.Resolver=r(19),i.Runner=r(27),i.SAT=r(28),i.Sleeping=r(7),i.Svg=r(29),i.Vector=r(2),i.Vertices=r(3),i.World=r(30),i.Engine.run=i.Runner.run,i.Common.deprecated(i.Engine,"run","Engine.run \u27A4 use Matter.Runner.run(engine) instead")},function(t,n,r){var i={};t.exports=i;var o=r(15),a=r(0);(function(){i.name="matter-js",i.version="0.18.0",i.uses=[],i.used=[],i.use=function(){o.use(i,Array.prototype.slice.call(arguments))},i.before=function(c,f){return c=c.replace(/^Matter./,""),a.chainPathBefore(i,c,f)},i.after=function(c,f){return c=c.replace(/^Matter./,""),a.chainPathAfter(i,c,f)}})()},function(t,n,r){var i={};t.exports=i;var o=r(5),a=r(10),c=r(0),f=r(6),u=r(12),p=c.deprecated;(function(){i.stack=function(h,l,g,d,m,v,E){for(var b=o.create({label:"Stack"}),x=h,_=l,S,M=0,y=0;y<d;y++){for(var w=0,A=0;A<g;A++){var T=E(x,_,A,y,S,M);if(T){var D=T.bounds.max.y-T.bounds.min.y,F=T.bounds.max.x-T.bounds.min.x;D>w&&(w=D),f.translate(T,{x:F*.5,y:D*.5}),x=T.bounds.max.x+m,o.addBody(b,T),S=T,M+=1}else x+=m}_+=w+v,x=h}return b},i.chain=function(h,l,g,d,m,v){for(var E=h.bodies,b=1;b<E.length;b++){var x=E[b-1],_=E[b],S=x.bounds.max.y-x.bounds.min.y,M=x.bounds.max.x-x.bounds.min.x,y=_.bounds.max.y-_.bounds.min.y,w=_.bounds.max.x-_.bounds.min.x,A={bodyA:x,pointA:{x:M*l,y:S*g},bodyB:_,pointB:{x:w*d,y:y*m}},T=c.extend(A,v);o.addConstraint(h,a.create(T))}return h.label+=" Chain",h},i.mesh=function(h,l,g,d,m){var v=h.bodies,E,b,x,_,S;for(E=0;E<g;E++){for(b=1;b<l;b++)x=v[b-1+E*l],_=v[b+E*l],o.addConstraint(h,a.create(c.extend({bodyA:x,bodyB:_},m)));if(E>0)for(b=0;b<l;b++)x=v[b+(E-1)*l],_=v[b+E*l],o.addConstraint(h,a.create(c.extend({bodyA:x,bodyB:_},m))),d&&b>0&&(S=v[b-1+(E-1)*l],o.addConstraint(h,a.create(c.extend({bodyA:S,bodyB:_},m)))),d&&b<l-1&&(S=v[b+1+(E-1)*l],o.addConstraint(h,a.create(c.extend({bodyA:S,bodyB:_},m))))}return h.label+=" Mesh",h},i.pyramid=function(h,l,g,d,m,v,E){return i.stack(h,l,g,d,m,v,function(b,x,_,S,M,y){var w=Math.min(d,Math.ceil(g/2)),A=M?M.bounds.max.x-M.bounds.min.x:0;if(!(S>w)){S=w-S;var T=S,D=g-1-S;if(!(_<T||_>D)){y===1&&f.translate(M,{x:(_+(g%2===1?1:-1))*A,y:0});var F=M?_*A:0;return E(h+F+_*m,x,_,S,M,y)}}})},i.newtonsCradle=function(h,l,g,d,m){for(var v=o.create({label:"Newtons Cradle"}),E=0;E<g;E++){var b=1.9,x=u.circle(h+E*(d*b),l+m,d,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),_=a.create({pointA:{x:h+E*(d*b),y:l},bodyB:x});o.addBody(v,x),o.addConstraint(v,_)}return v},p(i,"newtonsCradle","Composites.newtonsCradle \u27A4 moved to newtonsCradle example"),i.car=function(h,l,g,d,m){var v=f.nextGroup(!0),E=20,b=-g*.5+E,x=g*.5-E,_=0,S=o.create({label:"Car"}),M=u.rectangle(h,l,g,d,{collisionFilter:{group:v},chamfer:{radius:d*.5},density:2e-4}),y=u.circle(h+b,l+_,m,{collisionFilter:{group:v},friction:.8}),w=u.circle(h+x,l+_,m,{collisionFilter:{group:v},friction:.8}),A=a.create({bodyB:M,pointB:{x:b,y:_},bodyA:y,stiffness:1,length:0}),T=a.create({bodyB:M,pointB:{x,y:_},bodyA:w,stiffness:1,length:0});return o.addBody(S,M),o.addBody(S,y),o.addBody(S,w),o.addConstraint(S,A),o.addConstraint(S,T),S},p(i,"car","Composites.car \u27A4 moved to car example"),i.softBody=function(h,l,g,d,m,v,E,b,x,_){x=c.extend({inertia:1/0},x),_=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},_);var S=i.stack(h,l,g,d,m,v,function(M,y){return u.circle(M,y,b,x)});return i.mesh(S,g,d,E,_),S.label="Soft Body",S},p(i,"softBody","Composites.softBody \u27A4 moved to softBody and cloth examples")})()},function(t,n,r){var i={};t.exports=i;var o=r(9),a=r(0),c=a.deprecated;(function(){i.create=function(f){var u={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return a.extend(u,f)},i.update=function(f,u,p,h){var l,g,d,m=p.world,v=f.buckets,E,b,x=!1;for(l=0;l<u.length;l++){var _=u[l];if(!(_.isSleeping&&!h)&&!(m.bounds&&(_.bounds.max.x<m.bounds.min.x||_.bounds.min.x>m.bounds.max.x||_.bounds.max.y<m.bounds.min.y||_.bounds.min.y>m.bounds.max.y))){var S=i._getRegion(f,_);if(!_.region||S.id!==_.region.id||h){(!_.region||h)&&(_.region=S);var M=i._regionUnion(S,_.region);for(g=M.startCol;g<=M.endCol;g++)for(d=M.startRow;d<=M.endRow;d++){b=i._getBucketId(g,d),E=v[b];var y=g>=S.startCol&&g<=S.endCol&&d>=S.startRow&&d<=S.endRow,w=g>=_.region.startCol&&g<=_.region.endCol&&d>=_.region.startRow&&d<=_.region.endRow;!y&&w&&w&&E&&i._bucketRemoveBody(f,E,_),(_.region===S||y&&!w||h)&&(E||(E=i._createBucket(v,b)),i._bucketAddBody(f,E,_))}_.region=S,x=!0}}}x&&(f.pairsList=i._createActivePairsList(f))},c(i,"update","Grid.update \u27A4 replaced by Matter.Detector"),i.clear=function(f){f.buckets={},f.pairs={},f.pairsList=[]},c(i,"clear","Grid.clear \u27A4 replaced by Matter.Detector"),i._regionUnion=function(f,u){var p=Math.min(f.startCol,u.startCol),h=Math.max(f.endCol,u.endCol),l=Math.min(f.startRow,u.startRow),g=Math.max(f.endRow,u.endRow);return i._createRegion(p,h,l,g)},i._getRegion=function(f,u){var p=u.bounds,h=Math.floor(p.min.x/f.bucketWidth),l=Math.floor(p.max.x/f.bucketWidth),g=Math.floor(p.min.y/f.bucketHeight),d=Math.floor(p.max.y/f.bucketHeight);return i._createRegion(h,l,g,d)},i._createRegion=function(f,u,p,h){return{id:f+","+u+","+p+","+h,startCol:f,endCol:u,startRow:p,endRow:h}},i._getBucketId=function(f,u){return"C"+f+"R"+u},i._createBucket=function(f,u){var p=f[u]=[];return p},i._bucketAddBody=function(f,u,p){var h=f.pairs,l=o.id,g=u.length,d;for(d=0;d<g;d++){var m=u[d];if(!(p.id===m.id||p.isStatic&&m.isStatic)){var v=l(p,m),E=h[v];E?E[2]+=1:h[v]=[p,m,1]}}u.push(p)},i._bucketRemoveBody=function(f,u,p){var h=f.pairs,l=o.id,g;u.splice(a.indexOf(u,p),1);var d=u.length;for(g=0;g<d;g++){var m=h[l(p,u[g])];m&&(m[2]-=1)}},i._createActivePairsList=function(f){var u,p=f.pairs,h=a.keys(p),l=h.length,g=[],d;for(d=0;d<l;d++)u=p[h[d]],u[2]>0?g.push(u):delete p[h[d]];return g}})()},function(t,n,r){var i={};t.exports=i;var o=r(3),a=r(7),c=r(13),f=r(4),u=r(14),p=r(10),h=r(5),l=r(0),g=r(1);(function(){i.create=function(d,m){var v=(d?d.mouse:null)||(m?m.mouse:null);v||(d&&d.render&&d.render.canvas?v=c.create(d.render.canvas):m&&m.element?v=c.create(m.element):(v=c.create(),l.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var E=p.create({label:"Mouse Constraint",pointA:v.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),b={type:"mouseConstraint",mouse:v,element:null,body:null,constraint:E,collisionFilter:{category:1,mask:4294967295,group:0}},x=l.extend(b,m);return f.on(d,"beforeUpdate",function(){var _=h.allBodies(d.world);i.update(x,_),i._triggerEvents(x)}),x},i.update=function(d,m){var v=d.mouse,E=d.constraint,b=d.body;if(v.button===0){if(E.bodyB)a.set(E.bodyB,!1),E.pointA=v.position;else for(var x=0;x<m.length;x++)if(b=m[x],g.contains(b.bounds,v.position)&&u.canCollide(b.collisionFilter,d.collisionFilter))for(var _=b.parts.length>1?1:0;_<b.parts.length;_++){var S=b.parts[_];if(o.contains(S.vertices,v.position)){E.pointA=v.position,E.bodyB=d.body=b,E.pointB={x:v.position.x-b.position.x,y:v.position.y-b.position.y},E.angleB=b.angle,a.set(b,!1),f.trigger(d,"startdrag",{mouse:v,body:b});break}}}else E.bodyB=d.body=null,E.pointB=null,b&&f.trigger(d,"enddrag",{mouse:v,body:b})},i._triggerEvents=function(d){var m=d.mouse,v=m.sourceEvents;v.mousemove&&f.trigger(d,"mousemove",{mouse:m}),v.mousedown&&f.trigger(d,"mousedown",{mouse:m}),v.mouseup&&f.trigger(d,"mouseup",{mouse:m}),c.clearSourceEvents(m)}})()},function(t,n,r){var i={};t.exports=i;var o=r(2),a=r(8),c=r(1),f=r(12),u=r(3);(function(){i.collides=function(p,h){for(var l=[],g=h.length,d=p.bounds,m=a.collides,v=c.overlaps,E=0;E<g;E++){var b=h[E],x=b.parts.length,_=x===1?0:1;if(v(b.bounds,d))for(var S=_;S<x;S++){var M=b.parts[S];if(v(M.bounds,d)){var y=m(M,p);if(y){l.push(y);break}}}}return l},i.ray=function(p,h,l,g){g=g||1e-100;for(var d=o.angle(h,l),m=o.magnitude(o.sub(h,l)),v=(l.x+h.x)*.5,E=(l.y+h.y)*.5,b=f.rectangle(v,E,m,g,{angle:d}),x=i.collides(b,p),_=0;_<x.length;_+=1){var S=x[_];S.body=S.bodyB=S.bodyA}return x},i.region=function(p,h,l){for(var g=[],d=0;d<p.length;d++){var m=p[d],v=c.overlaps(m.bounds,h);(v&&!l||!v&&l)&&g.push(m)}return g},i.point=function(p,h){for(var l=[],g=0;g<p.length;g++){var d=p[g];if(c.contains(d.bounds,h))for(var m=d.parts.length===1?0:1;m<d.parts.length;m++){var v=d.parts[m];if(c.contains(v.bounds,h)&&u.contains(v.vertices,h)){l.push(d);break}}}return l}})()},function(t,n,r){var i={};t.exports=i;var o=r(4),a=r(18),c=r(0);(function(){var f,u;if(typeof window!="undefined"&&(f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,u=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!f){var p;f=function(h){p=setTimeout(function(){h(c.now())},1e3/60)},u=function(){clearTimeout(p)}}i.create=function(h){var l={fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},g=c.extend(l,h);return g.delta=g.delta||1e3/g.fps,g.deltaMin=g.deltaMin||1e3/g.fps,g.deltaMax=g.deltaMax||1e3/(g.fps*.5),g.fps=1e3/g.delta,g},i.run=function(h,l){return typeof h.positionIterations!="undefined"&&(l=h,h=i.create()),function g(d){h.frameRequestId=f(g),d&&h.enabled&&i.tick(h,l,d)}(),h},i.tick=function(h,l,g){var d=l.timing,m=1,v,E={timestamp:d.timestamp};o.trigger(h,"beforeTick",E),h.isFixed?v=h.delta:(v=g-h.timePrev||h.delta,h.timePrev=g,h.deltaHistory.push(v),h.deltaHistory=h.deltaHistory.slice(-h.deltaSampleSize),v=Math.min.apply(null,h.deltaHistory),v=v<h.deltaMin?h.deltaMin:v,v=v>h.deltaMax?h.deltaMax:v,m=v/h.delta,h.delta=v),h.timeScalePrev!==0&&(m*=d.timeScale/h.timeScalePrev),d.timeScale===0&&(m=0),h.timeScalePrev=d.timeScale,h.correction=m,h.frameCounter+=1,g-h.counterTimestamp>=1e3&&(h.fps=h.frameCounter*((g-h.counterTimestamp)/1e3),h.counterTimestamp=g,h.frameCounter=0),o.trigger(h,"tick",E),o.trigger(h,"beforeUpdate",E),a.update(l,v,m),o.trigger(h,"afterUpdate",E),o.trigger(h,"afterTick",E)},i.stop=function(h){u(h.frameRequestId)},i.start=function(h,l){i.run(h,l)}})()},function(t,n,r){var i={};t.exports=i;var o=r(8),a=r(0),c=a.deprecated;(function(){i.collides=function(f,u){return o.collides(f,u)},c(i,"collides","SAT.collides \u27A4 replaced by Collision.collides")})()},function(t,n,r){var i={};t.exports=i,r(1);var o=r(0);(function(){i.pathToVertices=function(a,c){typeof window!="undefined"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var f,u,p,h,l,g,d,m,v,E,b=[],x,_,S=0,M=0,y=0;c=c||15;var w=function(T,D,F){var P=F%2===1&&F>1;if(!v||T!=v.x||D!=v.y){v&&P?(x=v.x,_=v.y):(x=0,_=0);var O={x:x+T,y:_+D};(P||!v)&&(v=O),b.push(O),M=x+T,y=_+D}},A=function(T){var D=T.pathSegTypeAsLetter.toUpperCase();if(D!=="Z"){switch(D){case"M":case"L":case"T":case"C":case"S":case"Q":M=T.x,y=T.y;break;case"H":M=T.x;break;case"V":y=T.y;break}w(M,y,T.pathSegType)}};for(i._svgPathToAbsolute(a),p=a.getTotalLength(),g=[],f=0;f<a.pathSegList.numberOfItems;f+=1)g.push(a.pathSegList.getItem(f));for(d=g.concat();S<p;){if(E=a.getPathSegAtLength(S),l=g[E],l!=m){for(;d.length&&d[0]!=l;)A(d.shift());m=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=a.getPointAtLength(S),w(h.x,h.y,0);break}S+=c}for(f=0,u=d.length;f<u;++f)A(d[f]);return b},i._svgPathToAbsolute=function(a){for(var c,f,u,p,h,l,g=a.pathSegList,d=0,m=0,v=g.numberOfItems,E=0;E<v;++E){var b=g.getItem(E),x=b.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(x))"x"in b&&(d=b.x),"y"in b&&(m=b.y);else switch("x1"in b&&(u=d+b.x1),"x2"in b&&(h=d+b.x2),"y1"in b&&(p=m+b.y1),"y2"in b&&(l=m+b.y2),"x"in b&&(d+=b.x),"y"in b&&(m+=b.y),x){case"m":g.replaceItem(a.createSVGPathSegMovetoAbs(d,m),E);break;case"l":g.replaceItem(a.createSVGPathSegLinetoAbs(d,m),E);break;case"h":g.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(d),E);break;case"v":g.replaceItem(a.createSVGPathSegLinetoVerticalAbs(m),E);break;case"c":g.replaceItem(a.createSVGPathSegCurvetoCubicAbs(d,m,u,p,h,l),E);break;case"s":g.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(d,m,h,l),E);break;case"q":g.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(d,m,u,p),E);break;case"t":g.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(d,m),E);break;case"a":g.replaceItem(a.createSVGPathSegArcAbs(d,m,b.r1,b.r2,b.angle,b.largeArcFlag,b.sweepFlag),E);break;case"z":case"Z":d=c,m=f;break}(x=="M"||x=="m")&&(c=d,f=m)}}})()},function(t,n,r){var i={};t.exports=i;var o=r(5);r(0),function(){i.create=o.create,i.add=o.add,i.remove=o.remove,i.clear=o.clear,i.addComposite=o.addComposite,i.addBody=o.addBody,i.addConstraint=o.addConstraint}()}])})})(Ye);var ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},oo=window.device,Q={},Ir=[];window.device=Q;var sn=window.document.documentElement,lo=window.navigator.userAgent.toLowerCase(),as=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];Q.macos=function(){return Ge("mac")};Q.ios=function(){return Q.iphone()||Q.ipod()||Q.ipad()};Q.iphone=function(){return!Q.windows()&&Ge("iphone")};Q.ipod=function(){return Ge("ipod")};Q.ipad=function(){var s=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return Ge("ipad")||s};Q.android=function(){return!Q.windows()&&Ge("android")};Q.androidPhone=function(){return Q.android()&&Ge("mobile")};Q.androidTablet=function(){return Q.android()&&!Ge("mobile")};Q.blackberry=function(){return Ge("blackberry")||Ge("bb10")};Q.blackberryPhone=function(){return Q.blackberry()&&!Ge("tablet")};Q.blackberryTablet=function(){return Q.blackberry()&&Ge("tablet")};Q.windows=function(){return Ge("windows")};Q.windowsPhone=function(){return Q.windows()&&Ge("phone")};Q.windowsTablet=function(){return Q.windows()&&Ge("touch")&&!Q.windowsPhone()};Q.fxos=function(){return(Ge("(mobile")||Ge("(tablet"))&&Ge(" rv:")};Q.fxosPhone=function(){return Q.fxos()&&Ge("mobile")};Q.fxosTablet=function(){return Q.fxos()&&Ge("tablet")};Q.meego=function(){return Ge("meego")};Q.cordova=function(){return window.cordova&&location.protocol==="file:"};Q.nodeWebkit=function(){return ao(window.process)==="object"};Q.mobile=function(){return Q.androidPhone()||Q.iphone()||Q.ipod()||Q.windowsPhone()||Q.blackberryPhone()||Q.fxosPhone()||Q.meego()};Q.tablet=function(){return Q.ipad()||Q.androidTablet()||Q.blackberryTablet()||Q.windowsTablet()||Q.fxosTablet()};Q.desktop=function(){return!Q.tablet()&&!Q.mobile()};Q.television=function(){for(var s=0;s<as.length;){if(Ge(as[s]))return!0;s++}return!1};Q.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?Wr(screen.orientation.type,"portrait"):Q.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)!==90:window.innerHeight/window.innerWidth>1};Q.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?Wr(screen.orientation.type,"landscape"):Q.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)===90:window.innerHeight/window.innerWidth<1};Q.noConflict=function(){return window.device=oo,this};function Wr(s,e){return s.indexOf(e)!==-1}function Ge(s){return Wr(lo,s)}function ba(s){return sn.className.match(new RegExp(s,"i"))}function Xe(s){var e=null;ba(s)||(e=sn.className.replace(/^\s+|\s+$/g,""),sn.className=e+" "+s)}function os(s){ba(s)&&(sn.className=sn.className.replace(" "+s,""))}Q.ios()?Q.ipad()?Xe("ios ipad tablet"):Q.iphone()?Xe("ios iphone mobile"):Q.ipod()&&Xe("ios ipod mobile"):Q.macos()?Xe("macos desktop"):Q.android()?Q.androidTablet()?Xe("android tablet"):Xe("android mobile"):Q.blackberry()?Q.blackberryTablet()?Xe("blackberry tablet"):Xe("blackberry mobile"):Q.windows()?Q.windowsTablet()?Xe("windows tablet"):Q.windowsPhone()?Xe("windows mobile"):Xe("windows desktop"):Q.fxos()?Q.fxosTablet()?Xe("fxos tablet"):Xe("fxos mobile"):Q.meego()?Xe("meego mobile"):Q.nodeWebkit()?Xe("node-webkit"):Q.television()?Xe("television"):Q.desktop()&&Xe("desktop");Q.cordova()&&Xe("cordova");function Bn(){Q.landscape()?(os("portrait"),Xe("landscape"),ls("landscape")):(os("landscape"),Xe("portrait"),ls("portrait")),Ta()}function ls(s){for(var e=0;e<Ir.length;e++)Ir[e](s)}Q.onChangeOrientation=function(s){typeof s=="function"&&Ir.push(s)};var zn="resize";Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(zn="orientationchange");window.addEventListener?window.addEventListener(zn,Bn,!1):window.attachEvent?window.attachEvent(zn,Bn):window[zn]=Bn;Bn();function Xr(s){for(var e=0;e<s.length;e++)if(Q[s[e]]())return s[e];return"unknown"}Q.type=Xr(["mobile","tablet","desktop"]);Q.os=Xr(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]);function Ta(){Q.orientation=Xr(["portrait","landscape"])}Ta();const Kr=class{constructor(){}static get instance(){return this._instance||(this._instance=new Kr),this._instance}random(e,t){return Math.random()*(t-e)+e}random2(e,t){let n=Math.random()*(t-e)+e;return this.hit(2)&&(n*=-1),n}randomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}hit(e=0){return e<2&&(e=2),this.randomInt(0,e-1)==0}randomArr(e){return e[this.randomInt(0,e.length-1)]}range(e){return this.random(-e,e)}clamp(e,t,n){return Math.min(n,Math.max(e,t))}map(e,t,n,r,i){if(e<=r)return t;if(e>=i)return n;const o=(n-t)/(i-r);return(e-r)*o+t}mix(e,t,n){return e*(1-n)+t*n}radian(e){return e*Math.PI/180}degree(e){return e*180/Math.PI}shuffle(e){let t=e.length;for(;--t;){let n=Math.floor(Math.random()*(t+1));if(t==n)continue;let r=e[t];e[t]=e[n],e[n]=r}}replaceAll(e,t,n){return e.split(t).join(n)}sort(e,t,n=!0){n?e.sort((r,i)=>i[t]-r[t]):e.sort((r,i)=>r[t]-i[t])}distance(e,t,n,r){const i=e-n,o=t-r;return Math.sqrt(i*i+o*o)}numStr(e,t){let n=String(e);if(n.length>=t)return n;const r=t-n.length;let i=0;for(;i<r;)n="0"+n,i++;return n}isIE(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1||e.indexOf("edge")!=-1}isIE2(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1}isWin(){return window.navigator.platform.indexOf("Win")!=-1}isChrome(){return window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1}isFF(){return window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1}isSafari(){return window.navigator.userAgent.toLowerCase().indexOf("safari")!=-1&&!this.isChrome()}useWebGL(){try{const e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(window.WebGLRenderingContext&&t&&t.getShaderPrecisionFormat)}catch{return!1}}getQuery(e){e=e.replace(/[€[]/,"\u20AC\u20AC\u20AC[").replace(/[€]]/,"\u20AC\u20AC\u20AC]");const n=new RegExp("[\u20AC\u20AC?&]"+e+"=([^&//]*)").exec(window.location.href);return n==null?"":n[1]}isTouchDevice(){return"ontouchstart"in window||navigator!=null&&navigator.maxTouchPoints>0}isPc(){return Q.mobile()==!1}isSp(){return Q.mobile()}isAod(){return Q.android()}isIPhone(){return Q.iphone()}isIPad(){return Q.tablet()}};let Ze=Kr;J(Ze,"_instance");const jr=class{constructor(){J(this,"FLG_PARAM",location.href.includes("p=yes"));J(this,"FLG_STATS",location.href.includes("p=yes"));J(this,"PATH_IMG","./assets/img/");J(this,"USE_TOUCH",Ze.instance.isTouchDevice());J(this,"BREAKPOINT",768);J(this,"LG_PSD_WIDTH",1600);J(this,"XS_PSD_WIDTH",750);J(this,"IS_SIMPLE",Ze.instance.isPc()&&Ze.instance.isSafari());J(this,"IS_PC",Ze.instance.isPc());J(this,"IS_SP",Ze.instance.isSp());J(this,"IS_AND",Ze.instance.isAod());J(this,"IS_TAB",Ze.instance.isIPad());J(this,"USE_ROLLOVER",Ze.instance.isPc()&&!Ze.instance.isIPad());J(this,"ITEM_NUM",50);J(this,"STACK_NUM",1);J(this,"ITEM_SIZE",3);J(this,"COLOR_LIST",[332161,16464956,16692810,1215374])}static get instance(){return this._instance||(this._instance=new jr),this._instance}};let et=jr;J(et,"_instance");class Oi{constructor(){}}J(Oi,"LG",0),J(Oi,"XS",1);const Jr=class{constructor(){J(this,"_useFullScreen",!1)}static get instance(){return this._instance||(this._instance=new Jr),this._instance}ratio(){return window.devicePixelRatio||1}px(e){return e+"px"}useScreen(){return screen!=null}sw(){return window.innerWidth}sh(){return this._useFullScreen?screen.height:window.innerHeight}screenOffsetY(){return(window.innerHeight-this.sh())*.5}screen(){return window.innerWidth<=et.instance.BREAKPOINT?Oi.XS:Oi.LG}isXS(){return this.screen()==Oi.XS}isLG(){return this.screen()==Oi.LG}val(e,t){return this.isXS()?e:t}r(e){const t=this.val(et.instance.XS_PSD_WIDTH,et.instance.LG_PSD_WIDTH);return e/t*this.sw()}sin1(e){return Math.sin(e)+Math.sin(2*e)}sin2(e){return(Math.sin(e)+Math.sin(2.2*e+5.52)+Math.sin(2.9*e+.93)+Math.sin(4.6*e+8.94))/4}};let Ht=Jr;J(Ht,"_instance");class ri{constructor(e=0,t=0){J(this,"x",0);J(this,"y",0);this.x=e,this.y=t}set(e=0,t=0){this.x=e,this.y=t}copy(e){this.x=e.x,this.y=e.y}}const Qr=class{constructor(){J(this,"cnt",0);J(this,"_updateList",[]);J(this,"play",!0);J(this,"_update",()=>{if(this.play){this.cnt++;for(var e of this._updateList)e!=null&&e();window.requestAnimationFrame(this._update)}});window.requestAnimationFrame(this._update)}static get instance(){return this._instance||(this._instance=new Qr),this._instance}add(e){this._updateList.push(e)}remove(e){const t=[];this._updateList.forEach(n=>{n!=e&&t.push(n)}),this._updateList=t}};let hi=Qr;J(hi,"_instance");const es=class{constructor(){J(this,"x",window.innerWidth*.5);J(this,"y",window.innerHeight*.5);J(this,"old",new ri);J(this,"normal",new ri);J(this,"easeNormal",new ri);J(this,"start",new ri);J(this,"moveDist",new ri);J(this,"dist",0);J(this,"isDown",!1);J(this,"usePreventDefault",!0);J(this,"onSwipe");J(this,"_updateHandler");if(Ze.instance.isTouchDevice()){const e=document.querySelector(".matter")||window;e.addEventListener("touchstart",(t={})=>{this._eTouchStart(t)},{passive:!1}),e.addEventListener("touchend",()=>{this._eTouchEnd()},{passive:!1}),e.addEventListener("touchmove",(t={})=>{this._eTouchMove(t)},{passive:!1})}else window.addEventListener("mousedown",(e={})=>{this._eDown(e)}),window.addEventListener("mouseup",()=>{this._eUp()}),window.addEventListener("mousemove",(e={})=>{this._eMove(e)});this._updateHandler=this._update.bind(this),hi.instance.add(this._updateHandler)}static get instance(){return this._instance||(this._instance=new es),this._instance}_eTouchStart(e={}){this.isDown=!0,this._eTouchMove(e);const t=this._getTouchPoint(e);this.start.x=t.x,this.start.y=t.y}_eTouchEnd(){this.isDown=!1;const e=this.old.x-this.x,t=this.old.y-this.y;(Math.abs(t)>0||Math.abs(e)>0)&&this.onSwipe!=null&&this.onSwipe({move:t}),this.dist=0}_eTouchMove(e={}){const t=this._getTouchPoint(e);this.old.x=this.x,this.old.y=this.y,this.x=t.x,this.y=t.y;const n=this.old.x-this.x,r=this.old.y-this.y;this.dist=Math.sqrt(n*n+r*r),this.usePreventDefault&&e.preventDefault()}_eDown(e={}){this.isDown=!0,this._eMove(e),this.start.x=this.x,this.start.y=this.y}_eUp(){this.isDown=!1}_eMove(e={}){this.old.x=this.x,this.old.y=this.y,this.x=e.clientX,this.y=e.clientY;const t=this.old.x-this.x,n=this.old.y-this.y;this.dist=Math.sqrt(t*t+n*n)}_getTouchPoint(e){const t=new ri,n=e.touches;return n!=null&&n.length>0&&(t.x=n[0].pageX,t.y=n[0].pageY),t}_update(){this.isDown?(this.moveDist.x=this.start.x-this.x,this.moveDist.y=this.start.y-this.y):(this.moveDist.x+=(0-this.moveDist.x)*.25,this.moveDist.y+=(0-this.moveDist.y)*.25),this.normal.x=Ze.instance.map(this.x,-1,1,0,window.innerWidth),this.normal.y=Ze.instance.map(this.y,-1,1,0,window.innerHeight);const e=.1;this.easeNormal.x+=(this.normal.x-this.easeNormal.x)*e,this.easeNormal.y+=(this.normal.y-this.easeNormal.y)*e}};let zi=es;J(zi,"_instance");class co{constructor(e={}){J(this,"opt");J(this,"el");this.opt=e,this.el=this.opt.el}init(){}dispose(){this.opt=null,this.el=null}getEl(){return this.el}hasData(e){return this.getEl().getAttribute(e)!=null}getData(e,t){const n=this.getEl().getAttribute(e);return n==null?t:n}qs(e){return this.el.querySelector(e)}qsAll(e){return this.el.querySelectorAll(e)}hasClass(e){return this.el.classList.contains(e)}addClass(e){this.el.classList.add(e)}attachClass(e,t){e!=null&&e.classList.add(t)}detachClass(e,t){e!=null&&e.classList.remove(t)}removeClass(e){this.el.classList.remove(e)}getWidth(e){var n;let t=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,null).width;return Number(t==null?void 0:t.replace("px",""))}getHeight(e){var t;if(e==null)return 0;{let n=(t=document.defaultView)==null?void 0:t.getComputedStyle(e,null).height;return Number(n==null?void 0:n.replace("px",""))}}getRect(e){var n;const t=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,null);return t!=null?{width:Number(t.width.replace("px","")),height:Number(t.height.replace("px",""))}:{}}getDataNumber(e){const t=this.getEl().getAttribute(e);return t==null?0:Number(t)}getOffsetTop(e){const t=e.getBoundingClientRect();var n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n}getOffset(e){const t=e.getBoundingClientRect();var n=window.pageYOffset||document.documentElement.scrollTop;return{y:t.top+n,x:t.left}}_call(e,t=null){e!=null&&(t!=null?e(t):e())}}class Fr{constructor(e=0,t=0,n=0,r=0){J(this,"x",0);J(this,"y",0);J(this,"width",0);J(this,"height",0);this.x=e,this.y=t,this.width=n,this.height=r}}const ts=class{constructor(){J(this,"_list",[]);J(this,"_timer",null);J(this,"size",new Fr);J(this,"oldSize",new Fr);J(this,"_call",()=>{for(var e of this._list)e!=null&&e()});window.addEventListener("resize",()=>{this._eResize()},!1)}static get instance(){return this._instance||(this._instance=new ts),this._instance}_eResize(){this._setStageSize(),this._timer===null&&(clearInterval(this._timer),this._timer=null),this._timer=setTimeout(()=>{this._call(),this.oldSize.width=this.size.width,this.oldSize.height=this.size.height},300)}_setStageSize(){this.size.width=window.innerWidth,this.size.height=window.innerHeight}add(e){this._list.push(e)}remove(e){const t=[];this._list.forEach(n=>{n!=e&&t.push(n)}),this._list=t}};let nn=ts;J(nn,"_instance");class Aa extends co{constructor(t={}){super(t);J(this,"_updateHandler");J(this,"_resizeHandler");J(this,"_c",0);J(this,"_isEnter",!1);J(this,"_isOneEnter",!1);J(this,"_observer");J(this,"_elPos",new ri(0,9999));J(this,"_eRollOverHandler");J(this,"_eRollOutHandler");(t.isDefEvent==null||t.isDefEvent)&&(this._updateHandler=this._update.bind(this),hi.instance.add(this._updateHandler),this._resizeHandler=this._resize.bind(this),nn.instance.add(this._resizeHandler))}init(){super.init()}_setHover(){this._eRollOverHandler=this._eRollOver.bind(this),this._eRollOutHandler=this._eRollOut.bind(this),this.getEl().addEventListener("mouseenter",this._eRollOverHandler),this.getEl().addEventListener("mouseleave",this._eRollOutHandler)}_disposeHover(){this._eRollOverHandler!=null&&(this.getEl().removeEventListener("mouseenter",this._eRollOverHandler),this.getEl().removeEventListener("mouseleave",this._eRollOutHandler),this._eRollOverHandler=null,this._eRollOutHandler=null)}_eRollOver(){}_eRollOut(){}_setObserver(){this._observer=new IntersectionObserver(t=>{t!=null&&t.forEach(n=>{n!=null&&n.intersectionRatio>0?this._eEnter():this._eLeave()})},{root:null}),setTimeout(()=>{if(this._observer!=null&&this._observer!=null){const t=this.getEl();t!=null&&this._observer.observe(t)}},100)}_eEnter(){this._isEnter=!0}_eLeave(){this._isEnter=!1}_disposeObserver(){(this._observer!=null||this._observer!=null)&&(this._observer.unobserve(this.getEl()),this._observer=null)}dispose(){this._updateHandler!=null&&(hi.instance.remove(this._updateHandler),this._updateHandler=null),this._resizeHandler!=null&&(nn.instance.remove(this._resizeHandler),this._resizeHandler=null),this._disposeHover(),this._disposeObserver(),super.dispose()}css(t,n){const r=t.style;for(var i in n)r[i]=n[i]}_update(){this._c++}_resize(){}}const uo="141",ho=0,cs=1,fo=2,Ca=1,po=2,en=3,an=0,bt=1,Vi=2,mo=1,Jt=0,Gi=1,us=2,hs=3,ds=4,go=5,Ui=100,vo=101,xo=102,fs=103,ps=104,_o=200,yo=201,So=202,Mo=203,Ra=204,La=205,Eo=206,wo=207,bo=208,To=209,Ao=210,Co=0,Ro=1,Lo=2,Nr=3,Po=4,Do=5,Io=6,Fo=7,Pa=0,No=1,Uo=2,kt=0,Oo=1,Bo=2,zo=3,Go=4,Ho=5,Da=300,ki=301,Wi=302,Ur=303,Or=304,Xn=306,Br=1e3,Et=1001,zr=1002,ot=1003,ms=1004,gs=1005,pt=1006,Vo=1007,qn=1008,mi=1009,ko=1010,Wo=1011,Ia=1012,Xo=1013,li=1014,ci=1015,on=1016,qo=1017,$o=1018,Hi=1020,Yo=1021,Zo=1022,wt=1023,Ko=1024,jo=1025,di=1026,Xi=1027,Jo=1028,Qo=1029,el=1030,tl=1031,il=1033,Qn=33776,er=33777,tr=33778,ir=33779,vs=35840,xs=35841,_s=35842,ys=35843,nl=36196,Ss=37492,Ms=37496,Es=37808,ws=37809,bs=37810,Ts=37811,As=37812,Cs=37813,Rs=37814,Ls=37815,Ps=37816,Ds=37817,Is=37818,Fs=37819,Ns=37820,Us=37821,Os=36492,gi=3e3,Be=3001,rl=3200,sl=3201,al=0,ol=1,zt="srgb",ui="srgb-linear",nr=7680,ll=519,Bs=35044,zs="300 es",Gr=1035,je=[];for(let s=0;s<256;s++)je[s]=(s<16?"0":"")+s.toString(16);const rr=Math.PI/180,Gs=180/Math.PI;function un(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[e&255]+je[e>>8&255]+"-"+je[e>>16&15|64]+je[e>>24&255]+"-"+je[t&63|128]+je[t>>8&255]+"-"+je[t>>16&255]+je[t>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function cl(s,e){return(s%e+e)%e}function sr(s,e,t){return(1-t)*s+t*e}function Hs(s){return(s&s-1)===0&&s!==0}function Hr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class hn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,i,o,a){let c=n[r+0],f=n[r+1],u=n[r+2],p=n[r+3];const h=i[o+0],l=i[o+1],g=i[o+2],d=i[o+3];if(a===0){e[t+0]=c,e[t+1]=f,e[t+2]=u,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=l,e[t+2]=g,e[t+3]=d;return}if(p!==d||c!==h||f!==l||u!==g){let m=1-a;const v=c*h+f*l+u*g+p*d,E=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const _=Math.sqrt(b),S=Math.atan2(_,v*E);m=Math.sin(m*S)/_,a=Math.sin(a*S)/_}const x=a*E;if(c=c*m+h*x,f=f*m+l*x,u=u*m+g*x,p=p*m+d*x,m===1-a){const _=1/Math.sqrt(c*c+f*f+u*u+p*p);c*=_,f*=_,u*=_,p*=_}}e[t]=c,e[t+1]=f,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,i,o){const a=n[r],c=n[r+1],f=n[r+2],u=n[r+3],p=i[o],h=i[o+1],l=i[o+2],g=i[o+3];return e[t]=a*g+u*p+c*l-f*h,e[t+1]=c*g+u*h+f*p-a*l,e[t+2]=f*g+u*l+a*h-c*p,e[t+3]=u*g-a*p-c*h-f*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,i=e._z,o=e._order,a=Math.cos,c=Math.sin,f=a(n/2),u=a(r/2),p=a(i/2),h=c(n/2),l=c(r/2),g=c(i/2);switch(o){case"XYZ":this._x=h*u*p+f*l*g,this._y=f*l*p-h*u*g,this._z=f*u*g+h*l*p,this._w=f*u*p-h*l*g;break;case"YXZ":this._x=h*u*p+f*l*g,this._y=f*l*p-h*u*g,this._z=f*u*g-h*l*p,this._w=f*u*p+h*l*g;break;case"ZXY":this._x=h*u*p-f*l*g,this._y=f*l*p+h*u*g,this._z=f*u*g+h*l*p,this._w=f*u*p-h*l*g;break;case"ZYX":this._x=h*u*p-f*l*g,this._y=f*l*p+h*u*g,this._z=f*u*g-h*l*p,this._w=f*u*p+h*l*g;break;case"YZX":this._x=h*u*p+f*l*g,this._y=f*l*p+h*u*g,this._z=f*u*g-h*l*p,this._w=f*u*p-h*l*g;break;case"XZY":this._x=h*u*p-f*l*g,this._y=f*l*p-h*u*g,this._z=f*u*g+h*l*p,this._w=f*u*p+h*l*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],o=t[1],a=t[5],c=t[9],f=t[2],u=t[6],p=t[10],h=n+a+p;if(h>0){const l=.5/Math.sqrt(h+1);this._w=.25/l,this._x=(u-c)*l,this._y=(i-f)*l,this._z=(o-r)*l}else if(n>a&&n>p){const l=2*Math.sqrt(1+n-a-p);this._w=(u-c)/l,this._x=.25*l,this._y=(r+o)/l,this._z=(i+f)/l}else if(a>p){const l=2*Math.sqrt(1+a-n-p);this._w=(i-f)/l,this._x=(r+o)/l,this._y=.25*l,this._z=(c+u)/l}else{const l=2*Math.sqrt(1+p-n-a);this._w=(o-r)/l,this._x=(i+f)/l,this._y=(c+u)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,i=e._z,o=e._w,a=t._x,c=t._y,f=t._z,u=t._w;return this._x=n*u+o*a+r*f-i*c,this._y=r*u+o*c+i*a-n*f,this._z=i*u+o*f+n*c-r*a,this._w=o*u-n*a-r*c-i*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=i,this;const c=1-a*a;if(c<=Number.EPSILON){const l=1-t;return this._w=l*o+t*this._w,this._x=l*n+t*this._x,this._y=l*r+t*this._y,this._z=l*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(c),u=Math.atan2(f,a),p=Math.sin((1-t)*u)/f,h=Math.sin(t*u)/f;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=r*p+this._y*h,this._z=i*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Vs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=e.elements,o=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*o,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*o,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,i=e.x,o=e.y,a=e.z,c=e.w,f=c*t+o*r-a*n,u=c*n+a*t-i*r,p=c*r+i*n-o*t,h=-i*t-o*n-a*r;return this.x=f*c+h*-i+u*-a-p*-o,this.y=u*c+h*-o+p*-i-f*-a,this.z=p*c+h*-a+f*-o-u*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,i=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-i*a,this.y=i*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new G,Vs=new hn;class dn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,i=-1/0,o=-1/0,a=-1/0;for(let c=0,f=e.length;c<f;c+=3){const u=e[c],p=e[c+1],h=e[c+2];u<t&&(t=u),p<n&&(n=p),h<r&&(r=h),u>i&&(i=u),p>o&&(o=p),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(i,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,i=-1/0,o=-1/0,a=-1/0;for(let c=0,f=e.count;c<f;c++){const u=e.getX(c),p=e.getY(c),h=e.getZ(c);u<t&&(t=u),p<n&&(n=p),h<r&&(r=h),u>i&&(i=u),p>o&&(o=p),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(i,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const i=n.attributes.position;for(let o=0,a=i.count;o<a;o++)ti.fromBufferAttribute(i,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ti)}else n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox),or.applyMatrix4(e.matrixWorld),this.union(or);const r=e.children;for(let i=0,o=r.length;i<o;i++)this.expandByObject(r[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),vn.subVectors(this.max,ji),Mi.subVectors(e.a,ji),Ei.subVectors(e.b,ji),wi.subVectors(e.c,ji),Xt.subVectors(Ei,Mi),qt.subVectors(wi,Ei),ii.subVectors(Mi,wi);let t=[0,-Xt.z,Xt.y,0,-qt.z,qt.y,0,-ii.z,ii.y,Xt.z,0,-Xt.x,qt.z,0,-qt.x,ii.z,0,-ii.x,-Xt.y,Xt.x,0,-qt.y,qt.x,0,-ii.y,ii.x,0];return!lr(t,Mi,Ei,wi,vn)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,Mi,Ei,wi,vn))?!1:(xn.crossVectors(Xt,qt),t=[xn.x,xn.y,xn.z],lr(t,Mi,Ei,wi,vn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ti.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ft[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ft[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ft[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ft[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ft[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ft[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ft[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ft[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ft),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ft=[new G,new G,new G,new G,new G,new G,new G,new G],ti=new G,or=new dn,Mi=new G,Ei=new G,wi=new G,Xt=new G,qt=new G,ii=new G,ji=new G,vn=new G,xn=new G,ni=new G;function lr(s,e,t,n,r){for(let i=0,o=s.length-3;i<=o;i+=3){ni.fromArray(s,i);const a=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),c=e.dot(ni),f=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(c,f,u),Math.min(c,f,u))>a)return!1}return!0}const ul=new dn,ks=new G,_n=new G,cr=new G;class qr{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ul.setFromPoints(e).getCenter(n);let r=0;for(let i=0,o=e.length;i<o;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(cr.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?_n.set(0,0,1).multiplyScalar(e.radius):_n.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ks.copy(e.center).add(_n)),this.expandByPoint(ks.copy(e.center).sub(_n)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}class Dt{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,i,o,a,c,f){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=i,u[5]=c,u[6]=n,u[7]=o,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,o=n[0],a=n[3],c=n[6],f=n[1],u=n[4],p=n[7],h=n[2],l=n[5],g=n[8],d=r[0],m=r[3],v=r[6],E=r[1],b=r[4],x=r[7],_=r[2],S=r[5],M=r[8];return i[0]=o*d+a*E+c*_,i[3]=o*m+a*b+c*S,i[6]=o*v+a*x+c*M,i[1]=f*d+u*E+p*_,i[4]=f*m+u*b+p*S,i[7]=f*v+u*x+p*M,i[2]=h*d+l*E+g*_,i[5]=h*m+l*b+g*S,i[8]=h*v+l*x+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],c=e[6],f=e[7],u=e[8];return t*o*u-t*a*f-n*i*u+n*a*c+r*i*f-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],c=e[6],f=e[7],u=e[8],p=u*o-a*f,h=a*c-u*i,l=f*i-o*c,g=t*p+n*h+r*l;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=p*d,e[1]=(r*f-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=h*d,e[4]=(u*t-r*c)*d,e[5]=(r*i-a*t)*d,e[6]=l*d,e[7]=(n*c-f*t)*d,e[8]=(o*t-n*i)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,o,a){const c=Math.cos(i),f=Math.sin(i);return this.set(n*c,n*f,-n*(c*o+f*a)+o+e,-r*f,r*c,-r*(-f*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,i=r[0],o=r[3],a=r[6],c=r[1],f=r[4],u=r[7];return r[0]=t*i+n*c,r[3]=t*o+n*f,r[6]=t*a+n*u,r[1]=-n*i+t*c,r[4]=-n*o+t*f,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new G,hl=new G,dl=new Dt;class si{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ur.subVectors(n,t).cross(hl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ur),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(n).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dl.getNormalMatrix(e),r=this.coplanarPoint(ur).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new qr,yn=new G;class Fa{constructor(e=new si,t=new si,n=new si,r=new si,i=new si,o=new si){this.planes=[e,t,n,r,i,o]}set(e,t,n,r,i,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(i),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],i=n[1],o=n[2],a=n[3],c=n[4],f=n[5],u=n[6],p=n[7],h=n[8],l=n[9],g=n[10],d=n[11],m=n[12],v=n[13],E=n[14],b=n[15];return t[0].setComponents(a-r,p-c,d-h,b-m).normalize(),t[1].setComponents(a+r,p+c,d+h,b+m).normalize(),t[2].setComponents(a+i,p+f,d+l,b+v).normalize(),t[3].setComponents(a-i,p-f,d-l,b-v).normalize(),t[4].setComponents(a-o,p-u,d-g,b-E).normalize(),t[5].setComponents(a+o,p+u,d+g,b+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yn.x=r.normal.x>0?e.max.x:e.min.x,yn.y=r.normal.y>0?e.max.y:e.min.y,yn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class it{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,i,o,a,c,f,u,p,h,l,g,d,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=i,v[5]=o,v[9]=a,v[13]=c,v[2]=f,v[6]=u,v[10]=p,v[14]=h,v[3]=l,v[7]=g,v[11]=d,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),i=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,i=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),f=Math.sin(r),u=Math.cos(i),p=Math.sin(i);if(e.order==="XYZ"){const h=o*u,l=o*p,g=a*u,d=a*p;t[0]=c*u,t[4]=-c*p,t[8]=f,t[1]=l+g*f,t[5]=h-d*f,t[9]=-a*c,t[2]=d-h*f,t[6]=g+l*f,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,l=c*p,g=f*u,d=f*p;t[0]=h+d*a,t[4]=g*a-l,t[8]=o*f,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=l*a-g,t[6]=d+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,l=c*p,g=f*u,d=f*p;t[0]=h-d*a,t[4]=-o*p,t[8]=g+l*a,t[1]=l+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*f,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,l=o*p,g=a*u,d=a*p;t[0]=c*u,t[4]=g*f-l,t[8]=h*f+d,t[1]=c*p,t[5]=d*f+h,t[9]=l*f-g,t[2]=-f,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,l=o*f,g=a*c,d=a*f;t[0]=c*u,t[4]=d-h*p,t[8]=g*p+l,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-f*u,t[6]=l*p+g,t[10]=h-d*p}else if(e.order==="XZY"){const h=o*c,l=o*f,g=a*c,d=a*f;t[0]=c*u,t[4]=-p,t[8]=f*u,t[1]=h*p+d,t[5]=o*u,t[9]=l*p-g,t[2]=g*p-l,t[6]=a*u,t[10]=d*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fl,e,pl)}lookAt(e,t,n){const r=this.elements;return ct.subVectors(e,t),ct.lengthSq()===0&&(ct.z=1),ct.normalize(),$t.crossVectors(n,ct),$t.lengthSq()===0&&(Math.abs(n.z)===1?ct.x+=1e-4:ct.z+=1e-4,ct.normalize(),$t.crossVectors(n,ct)),$t.normalize(),Sn.crossVectors(ct,$t),r[0]=$t.x,r[4]=Sn.x,r[8]=ct.x,r[1]=$t.y,r[5]=Sn.y,r[9]=ct.y,r[2]=$t.z,r[6]=Sn.z,r[10]=ct.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,o=n[0],a=n[4],c=n[8],f=n[12],u=n[1],p=n[5],h=n[9],l=n[13],g=n[2],d=n[6],m=n[10],v=n[14],E=n[3],b=n[7],x=n[11],_=n[15],S=r[0],M=r[4],y=r[8],w=r[12],A=r[1],T=r[5],D=r[9],F=r[13],P=r[2],O=r[6],N=r[10],H=r[14],k=r[3],B=r[7],W=r[11],j=r[15];return i[0]=o*S+a*A+c*P+f*k,i[4]=o*M+a*T+c*O+f*B,i[8]=o*y+a*D+c*N+f*W,i[12]=o*w+a*F+c*H+f*j,i[1]=u*S+p*A+h*P+l*k,i[5]=u*M+p*T+h*O+l*B,i[9]=u*y+p*D+h*N+l*W,i[13]=u*w+p*F+h*H+l*j,i[2]=g*S+d*A+m*P+v*k,i[6]=g*M+d*T+m*O+v*B,i[10]=g*y+d*D+m*N+v*W,i[14]=g*w+d*F+m*H+v*j,i[3]=E*S+b*A+x*P+_*k,i[7]=E*M+b*T+x*O+_*B,i[11]=E*y+b*D+x*N+_*W,i[15]=E*w+b*F+x*H+_*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],o=e[1],a=e[5],c=e[9],f=e[13],u=e[2],p=e[6],h=e[10],l=e[14],g=e[3],d=e[7],m=e[11],v=e[15];return g*(+i*c*p-r*f*p-i*a*h+n*f*h+r*a*l-n*c*l)+d*(+t*c*l-t*f*h+i*o*h-r*o*l+r*f*u-i*c*u)+m*(+t*f*p-t*a*l-i*o*p+n*o*l+i*a*u-n*f*u)+v*(-r*a*u-t*c*p+t*a*h+r*o*p-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],c=e[6],f=e[7],u=e[8],p=e[9],h=e[10],l=e[11],g=e[12],d=e[13],m=e[14],v=e[15],E=p*m*f-d*h*f+d*c*l-a*m*l-p*c*v+a*h*v,b=g*h*f-u*m*f-g*c*l+o*m*l+u*c*v-o*h*v,x=u*d*f-g*p*f+g*a*l-o*d*l-u*a*v+o*p*v,_=g*p*c-u*d*c-g*a*h+o*d*h+u*a*m-o*p*m,S=t*E+n*b+r*x+i*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=E*M,e[1]=(d*h*i-p*m*i-d*r*l+n*m*l+p*r*v-n*h*v)*M,e[2]=(a*m*i-d*c*i+d*r*f-n*m*f-a*r*v+n*c*v)*M,e[3]=(p*c*i-a*h*i-p*r*f+n*h*f+a*r*l-n*c*l)*M,e[4]=b*M,e[5]=(u*m*i-g*h*i+g*r*l-t*m*l-u*r*v+t*h*v)*M,e[6]=(g*c*i-o*m*i-g*r*f+t*m*f+o*r*v-t*c*v)*M,e[7]=(o*h*i-u*c*i+u*r*f-t*h*f-o*r*l+t*c*l)*M,e[8]=x*M,e[9]=(g*p*i-u*d*i-g*n*l+t*d*l+u*n*v-t*p*v)*M,e[10]=(o*d*i-g*a*i+g*n*f-t*d*f-o*n*v+t*a*v)*M,e[11]=(u*a*i-o*p*i-u*n*f+t*p*f+o*n*l-t*a*l)*M,e[12]=_*M,e[13]=(u*d*r-g*p*r+g*n*h-t*d*h-u*n*m+t*p*m)*M,e[14]=(g*a*r-o*d*r-g*n*c+t*d*c+o*n*m-t*a*m)*M,e[15]=(o*p*r-u*a*r+u*n*c-t*p*c-o*n*h+t*a*h)*M,this}scale(e){const t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),i=1-n,o=e.x,a=e.y,c=e.z,f=i*o,u=i*a;return this.set(f*o+n,f*a-r*c,f*c+r*a,0,f*a+r*c,u*a+n,u*c-r*o,0,f*c-r*a,u*c+r*o,i*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,o){return this.set(1,n,i,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,i=t._x,o=t._y,a=t._z,c=t._w,f=i+i,u=o+o,p=a+a,h=i*f,l=i*u,g=i*p,d=o*u,m=o*p,v=a*p,E=c*f,b=c*u,x=c*p,_=n.x,S=n.y,M=n.z;return r[0]=(1-(d+v))*_,r[1]=(l+x)*_,r[2]=(g-b)*_,r[3]=0,r[4]=(l-x)*S,r[5]=(1-(h+v))*S,r[6]=(m+E)*S,r[7]=0,r[8]=(g+b)*M,r[9]=(m-E)*M,r[10]=(1-(h+d))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let i=Ti.set(r[0],r[1],r[2]).length();const o=Ti.set(r[4],r[5],r[6]).length(),a=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],_t.copy(this);const f=1/i,u=1/o,p=1/a;return _t.elements[0]*=f,_t.elements[1]*=f,_t.elements[2]*=f,_t.elements[4]*=u,_t.elements[5]*=u,_t.elements[6]*=u,_t.elements[8]*=p,_t.elements[9]*=p,_t.elements[10]*=p,t.setFromRotationMatrix(_t),n.x=i,n.y=o,n.z=a,this}makePerspective(e,t,n,r,i,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*i/(t-e),f=2*i/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r),h=-(o+i)/(o-i),l=-2*o*i/(o-i);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=f,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=l,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,i,o){const a=this.elements,c=1/(t-e),f=1/(n-r),u=1/(o-i),p=(t+e)*c,h=(n+r)*f,l=(o+i)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*f,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-l,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new G,_t=new it,fl=new G(0,0,0),pl=new G(1,1,1),$t=new G,Sn=new G,ct=new G;class Oe{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*n-o*r+e.x,this.y=i*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e=0,t=0,n=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*i,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*i,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*i,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i;const c=e.elements,f=c[0],u=c[4],p=c[8],h=c[1],l=c[5],g=c[9],d=c[2],m=c[6],v=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+d)<.1&&Math.abs(g+m)<.1&&Math.abs(f+l+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(f+1)/2,x=(l+1)/2,_=(v+1)/2,S=(u+h)/4,M=(p+d)/4,y=(g+m)/4;return b>x&&b>_?b<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(b),r=S/n,i=M/n):x>_?x<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(x),n=S/r,i=y/r):_<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=M/i,r=y/i),this.set(n,r,i,t),this}let E=Math.sqrt((m-g)*(m-g)+(p-d)*(p-d)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(p-d)/E,this.z=(h-u)/E,this.w=Math.acos((f+l+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}function Na(){let s=null,e=!1,t=null,n=null;function r(i,o){t(i,o),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function ml(s,e){const t=e.isWebGL2,n=new WeakMap;function r(f,u){const p=f.array,h=f.usage,l=s.createBuffer();s.bindBuffer(u,l),s.bufferData(u,p,h),f.onUploadCallback();let g;if(p instanceof Float32Array)g=s.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=s.SHORT;else if(p instanceof Uint32Array)g=s.UNSIGNED_INT;else if(p instanceof Int32Array)g=s.INT;else if(p instanceof Int8Array)g=s.BYTE;else if(p instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:l,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version}}function i(f,u,p){const h=u.array,l=u.updateRange;s.bindBuffer(p,f),l.count===-1?s.bufferSubData(p,0,h):(t?s.bufferSubData(p,l.offset*h.BYTES_PER_ELEMENT,h,l.offset,l.count):s.bufferSubData(p,l.offset*h.BYTES_PER_ELEMENT,h.subarray(l.offset,l.offset+l.count)),l.count=-1)}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const u=n.get(f);u&&(s.deleteBuffer(u.buffer),n.delete(f))}function c(f,u){if(f.isGLBufferAttribute){const h=n.get(f);(!h||h.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);p===void 0?n.set(f,r(f,u)):p.version<f.version&&(i(p.buffer,f,u),p.version=f.version)}return{get:o,remove:a,update:c}}class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let i=0,o=r.length;i<o;i++)r[i].call(this,e);e.target=null}}}function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const hr={[zt]:{[ui]:fi},[ui]:{[zt]:Gn}},yt={legacyMode:!0,get workingColorSpace(){return ui},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(hr[e]&&hr[e][t]!==void 0){const n=hr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qe={r:0,g:0,b:0},St={h:0,s:0,l:0},Mn={h:0,s:0,l:0};function dr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function En(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ui){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ui){if(e=cl(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,o=2*n-i;this.r=dr(o,i,e+1/3),this.g=dr(o,i,e),this.b=dr(o,i,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,yt.toWorkingColorSpace(this,t),n(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,yt.toWorkingColorSpace(this,t),n(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(i[1])/360,f=parseInt(i[2],10)/100,u=parseInt(i[3],10)/100;return n(i[4]),this.setHSL(c,f,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],o=i.length;if(o===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,yt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zt){const n=Ua[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return yt.fromWorkingColorSpace(En(this,qe),e),ht(qe.r*255,0,255)<<16^ht(qe.g*255,0,255)<<8^ht(qe.b*255,0,255)<<0}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ui){yt.fromWorkingColorSpace(En(this,qe),t);const n=qe.r,r=qe.g,i=qe.b,o=Math.max(n,r,i),a=Math.min(n,r,i);let c,f;const u=(a+o)/2;if(a===o)c=0,f=0;else{const p=o-a;switch(f=u<=.5?p/(o+a):p/(2-o-a),o){case n:c=(r-i)/p+(r<i?6:0);break;case r:c=(i-n)/p+2;break;case i:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=f,e.l=u,e}getRGB(e,t=ui){return yt.fromWorkingColorSpace(En(this,qe),t),e.r=qe.r,e.g=qe.g,e.b=qe.b,e}getStyle(e=zt){return yt.fromWorkingColorSpace(En(this,qe),e),e!==zt?`color(${e} ${qe.r} ${qe.g} ${qe.b})`:`rgb(${qe.r*255|0},${qe.g*255|0},${qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(St),St.h+=e,St.s+=t,St.l+=n,this.setHSL(St.h,St.s,St.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(St),e.getHSL(Mn);const n=sr(St.h,Mn.h,t),r=sr(St.s,Mn.s,t),i=sr(St.l,Mn.l,t);return this.setHSL(n,r,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ue.NAMES=Ua;const We=new G,wn=new Oe;class Tt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Bs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,i=e.length;r<i;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ue),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,i=e.length;r<i;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Oe),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,i=e.length;r<i;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new G),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,i=e.length;r<i;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new tt),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXY(t,wn.x,wn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix3(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Oa extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ba extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pi extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ws=new it,Xs=new hn;class fn{constructor(e=0,t=0,n=0,r=fn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,i=r[0],o=r[4],a=r[8],c=r[1],f=r[5],u=r[9],p=r[2],h=r[6],l=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,l),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,l),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-p,i),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,l),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,l),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-p,i)):(this._x=0,this._y=Math.atan2(a,l));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-u,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ws.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ws,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xs.setFromEuler(this),this.setFromQuaternion(Xs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}fn.DefaultOrder="XYZ";fn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class za{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gl=0;const qs=new G,Ai=new hn,Nt=new it,bn=new G,Ji=new G,vl=new G,xl=new hn,$s=new G(1,0,0),Ys=new G(0,1,0),Zs=new G(0,0,1),_l={type:"added"},Ks={type:"removed"};class gt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DefaultUp.clone();const e=new G,t=new fn,n=new hn,r=new G(1,1,1);function i(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Dt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis($s,e)}rotateY(e){return this.rotateOnAxis(Ys,e)}rotateZ(e){return this.rotateOnAxis(Zs,e)}translateOnAxis(e,t){return qs.copy(e).applyQuaternion(this.quaternion),this.position.add(qs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($s,e)}translateY(e){return this.translateOnAxis(Ys,e)}translateZ(e){return this.translateOnAxis(Zs,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Nt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bn.copy(e):bn.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nt.lookAt(Ji,bn,this.up):Nt.lookAt(bn,Ji,this.up),this.quaternion.setFromRotationMatrix(Nt),r&&(Nt.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(Nt),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_l)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ks)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ks)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Nt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,vl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let f=0,u=c.length;f<u;f++){const p=c[f];i(e.shapes,p)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,f=this.material.length;c<f;c++)a.push(i(e.materials,this.material[c]));r.material=a}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(i(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),f=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),l=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),f.length>0&&(n.textures=f),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),l.length>0&&(n.animations=l),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const f in a){const u=a[f];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DefaultUp=new G(0,1,0);gt.DefaultMatrixAutoUpdate=!0;function Ga(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function ln(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}let yl=0;const ft=new it,fr=new gt,Ci=new G,ut=new dn,Qi=new dn,$e=new G;class xi extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ga(e)?Ba:Oa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Dt().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ft.makeRotationFromQuaternion(e),this.applyMatrix4(ft),this}rotateX(e){return ft.makeRotationX(e),this.applyMatrix4(ft),this}rotateY(e){return ft.makeRotationY(e),this.applyMatrix4(ft),this}rotateZ(e){return ft.makeRotationZ(e),this.applyMatrix4(ft),this}translate(e,t,n){return ft.makeTranslation(e,t,n),this.applyMatrix4(ft),this}scale(e,t,n){return ft.makeScale(e,t,n),this.applyMatrix4(ft),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const i=t[n];ut.setFromBufferAttribute(i),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,ut.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,ut.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(ut.min),this.boundingBox.expandByPoint(ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(ut.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(ut.min,Qi.min),ut.expandByPoint($e),$e.addVectors(ut.max,Qi.max),ut.expandByPoint($e)):(ut.expandByPoint(Qi.min),ut.expandByPoint(Qi.max))}ut.getCenter(n);let r=0;for(let i=0,o=e.count;i<o;i++)$e.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared($e));if(t)for(let i=0,o=t.length;i<o;i++){const a=t[i],c=this.morphTargetsRelative;for(let f=0,u=a.count;f<u;f++)$e.fromBufferAttribute(a,f),c&&(Ci.fromBufferAttribute(e,f),$e.add(Ci)),r=Math.max(r,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,i=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,f=[],u=[];for(let A=0;A<a;A++)f[A]=new G,u[A]=new G;const p=new G,h=new G,l=new G,g=new Oe,d=new Oe,m=new Oe,v=new G,E=new G;function b(A,T,D){p.fromArray(r,A*3),h.fromArray(r,T*3),l.fromArray(r,D*3),g.fromArray(o,A*2),d.fromArray(o,T*2),m.fromArray(o,D*2),h.sub(p),l.sub(p),d.sub(g),m.sub(g);const F=1/(d.x*m.y-m.x*d.y);!isFinite(F)||(v.copy(h).multiplyScalar(m.y).addScaledVector(l,-d.y).multiplyScalar(F),E.copy(l).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(F),f[A].add(v),f[T].add(v),f[D].add(v),u[A].add(E),u[T].add(E),u[D].add(E))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let A=0,T=x.length;A<T;++A){const D=x[A],F=D.start,P=D.count;for(let O=F,N=F+P;O<N;O+=3)b(n[O+0],n[O+1],n[O+2])}const _=new G,S=new G,M=new G,y=new G;function w(A){M.fromArray(i,A*3),y.copy(M);const T=f[A];_.copy(T),_.sub(M.multiplyScalar(M.dot(T))).normalize(),S.crossVectors(y,T);const F=S.dot(u[A])<0?-1:1;c[A*4]=_.x,c[A*4+1]=_.y,c[A*4+2]=_.z,c[A*4+3]=F}for(let A=0,T=x.length;A<T;++A){const D=x[A],F=D.start,P=D.count;for(let O=F,N=F+P;O<N;O+=3)w(n[O+0]),w(n[O+1]),w(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,l=n.count;h<l;h++)n.setXYZ(h,0,0,0);const r=new G,i=new G,o=new G,a=new G,c=new G,f=new G,u=new G,p=new G;if(e)for(let h=0,l=e.count;h<l;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),i.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,i),p.subVectors(r,i),u.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),f.fromBufferAttribute(n,m),a.add(u),c.add(u),f.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(m,f.x,f.y,f.z)}else for(let h=0,l=t.count;h<l;h+=3)r.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,i),p.subVectors(r,i),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],c=a.array,f=a.itemSize*t,u=Math.min(c.length,o.length-f);for(let p=0,h=f;p<u;p++,h++)o[h]=c[p]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$e.fromBufferAttribute(e,t),$e.normalize(),e.setXYZ(t,$e.x,$e.y,$e.z)}toNonIndexed(){function e(a,c){const f=a.array,u=a.itemSize,p=a.normalized,h=new f.constructor(c.length*u);let l=0,g=0;for(let d=0,m=c.length;d<m;d++){a.isInterleavedBufferAttribute?l=c[d]*a.data.stride+a.offset:l=c[d]*u;for(let v=0;v<u;v++)h[g++]=f[l++]}return new Tt(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],f=e(c,n);t.setAttribute(a,f)}const i=this.morphAttributes;for(const a in i){const c=[],f=i[a];for(let u=0,p=f.length;u<p;u++){const h=f[u],l=e(h,n);c.push(l)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const f=o[a];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const f=n[c];e.data.attributes[c]=f.toJSON(e.data)}const r={};let i=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],u=[];for(let p=0,h=f.length;p<h;p++){const l=f[p];u.push(l.toJSON(e.data))}u.length>0&&(r[c]=u,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const u=r[f];this.setAttribute(f,u.clone(t))}const i=e.morphAttributes;for(const f in i){const u=[],p=i[f];for(let h=0,l=p.length;h<l;h++)u.push(p[h].clone(t));this.morphAttributes[f]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,u=o.length;f<u;f++){const p=o[f];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends xi{constructor(e=1,t=1,n=1,r=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:o};const a=this;r=Math.floor(r),i=Math.floor(i),o=Math.floor(o);const c=[],f=[],u=[],p=[];let h=0,l=0;g("z","y","x",-1,-1,n,t,e,o,i,0),g("z","y","x",1,-1,n,t,-e,o,i,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,i,4),g("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(c),this.setAttribute("position",new pi(f,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(p,2));function g(d,m,v,E,b,x,_,S,M,y,w){const A=x/M,T=_/y,D=x/2,F=_/2,P=S/2,O=M+1,N=y+1;let H=0,k=0;const B=new G;for(let W=0;W<N;W++){const j=W*T-F;for(let Z=0;Z<O;Z++){const K=Z*A-D;B[d]=K*E,B[m]=j*b,B[v]=P,f.push(B.x,B.y,B.z),B[d]=0,B[m]=0,B[v]=S>0?1:-1,u.push(B.x,B.y,B.z),p.push(Z/M),p.push(1-W/y),H+=1}}for(let W=0;W<y;W++)for(let j=0;j<M;j++){const Z=h+j+O*W,K=h+j+O*(W+1),ae=h+(j+1)+O*(W+1),ue=h+(j+1)+O*W;c.push(Z,K,ue),c.push(K,ae,ue),k+=6}a.addGroup(l,k,w),l+=k,h+=H}}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $n extends xi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const i=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),f=a+1,u=c+1,p=e/a,h=t/c,l=[],g=[],d=[],m=[];for(let v=0;v<u;v++){const E=v*h-o;for(let b=0;b<f;b++){const x=b*p-i;g.push(x,-E,0),d.push(0,0,1),m.push(b/a),m.push(1-v/c)}}for(let v=0;v<c;v++)for(let E=0;E<a;E++){const b=E+f*v,x=E+f*(v+1),_=E+1+f*(v+1),S=E+1+f*v;l.push(b,x,S),l.push(x,_,S)}this.setIndex(l),this.setAttribute("position",new pi(g,3)),this.setAttribute("normal",new pi(d,3)),this.setAttribute("uv",new pi(m,2))}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}let Sl=0;class mn extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=un(),this.name="",this.type="Material",this.blending=Gi,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ra,this.blendDst=La,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===mo;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(i){const o=[];for(const a in i){const c=i[a];delete c.metadata,o.push(c)}return o}if(t){const i=r(e.textures),o=r(e.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}mn.fromType=function(){return null};function qi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qe(s){const e={};for(let t=0;t<s.length;t++){const n=qi(s[t]);for(const r in n)e[r]=n[r]}return e}const Ml={clone:qi,merge:Qe};var El=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,wl=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class vi extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=El,this.fragmentShader=wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}const Ut=new G,pr=new G,Tn=new G,Yt=new G,mr=new G,An=new G,gr=new G;class bl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ut)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ut.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ut.copy(this.direction).multiplyScalar(t).add(this.origin),Ut.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pr.copy(e).add(t).multiplyScalar(.5),Tn.copy(t).sub(e).normalize(),Yt.copy(this.origin).sub(pr);const i=e.distanceTo(t)*.5,o=-this.direction.dot(Tn),a=Yt.dot(this.direction),c=-Yt.dot(Tn),f=Yt.lengthSq(),u=Math.abs(1-o*o);let p,h,l,g;if(u>0)if(p=o*c-a,h=o*a-c,g=i*u,p>=0)if(h>=-g)if(h<=g){const d=1/u;p*=d,h*=d,l=p*(p+o*h+2*a)+h*(o*p+h+2*c)+f}else h=i,p=Math.max(0,-(o*h+a)),l=-p*p+h*(h+2*c)+f;else h=-i,p=Math.max(0,-(o*h+a)),l=-p*p+h*(h+2*c)+f;else h<=-g?(p=Math.max(0,-(-o*i+a)),h=p>0?-i:Math.min(Math.max(-i,-c),i),l=-p*p+h*(h+2*c)+f):h<=g?(p=0,h=Math.min(Math.max(-i,-c),i),l=h*(h+2*c)+f):(p=Math.max(0,-(o*i+a)),h=p>0?i:Math.min(Math.max(-i,-c),i),l=-p*p+h*(h+2*c)+f);else h=o>0?-i:i,p=Math.max(0,-(o*h+a)),l=-p*p+h*(h+2*c)+f;return n&&n.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(Tn).multiplyScalar(h).add(pr),l}intersectSphere(e,t){Ut.subVectors(e.center,this.origin);const n=Ut.dot(this.direction),r=Ut.dot(Ut)-n*n,i=e.radius*e.radius;if(r>i)return null;const o=Math.sqrt(i-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,o,a,c;const f=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return f>=0?(n=(e.min.x-h.x)*f,r=(e.max.x-h.x)*f):(n=(e.max.x-h.x)*f,r=(e.min.x-h.x)*f),u>=0?(i=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||i>r||((i>n||n!==n)&&(n=i),(o<r||r!==r)&&(r=o),p>=0?(a=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ut)!==null}intersectTriangle(e,t,n,r,i){mr.subVectors(t,e),An.subVectors(n,e),gr.crossVectors(mr,An);let o=this.direction.dot(gr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yt.subVectors(this.origin,e);const c=a*this.direction.dot(An.crossVectors(Yt,An));if(c<0)return null;const f=a*this.direction.dot(mr.cross(Yt));if(f<0||c+f>o)return null;const u=-a*Yt.dot(gr);return u<0?null:this.at(u/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const Mt=new G,Ot=new G,vr=new G,Bt=new G,Ri=new G,Li=new G,js=new G,xr=new G,_r=new G,yr=new G;class Gt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mt.subVectors(e,t),r.cross(Mt);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Mt.subVectors(r,t),Ot.subVectors(n,t),vr.subVectors(e,t);const o=Mt.dot(Mt),a=Mt.dot(Ot),c=Mt.dot(vr),f=Ot.dot(Ot),u=Ot.dot(vr),p=o*f-a*a;if(p===0)return i.set(-2,-1,-1);const h=1/p,l=(f*c-a*u)*h,g=(o*u-a*c)*h;return i.set(1-l-g,g,l)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bt),Bt.x>=0&&Bt.y>=0&&Bt.x+Bt.y<=1}static getUV(e,t,n,r,i,o,a,c){return this.getBarycoord(e,t,n,r,Bt),c.set(0,0),c.addScaledVector(i,Bt.x),c.addScaledVector(o,Bt.y),c.addScaledVector(a,Bt.z),c}static isFrontFacing(e,t,n,r){return Mt.subVectors(n,t),Ot.subVectors(e,t),Mt.cross(Ot).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mt.subVectors(this.c,this.b),Ot.subVectors(this.a,this.b),Mt.cross(Ot).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return Gt.getUV(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,i=this.c;let o,a;Ri.subVectors(r,n),Li.subVectors(i,n),xr.subVectors(e,n);const c=Ri.dot(xr),f=Li.dot(xr);if(c<=0&&f<=0)return t.copy(n);_r.subVectors(e,r);const u=Ri.dot(_r),p=Li.dot(_r);if(u>=0&&p<=u)return t.copy(r);const h=c*p-u*f;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ri,o);yr.subVectors(e,i);const l=Ri.dot(yr),g=Li.dot(yr);if(g>=0&&l<=g)return t.copy(i);const d=l*f-c*g;if(d<=0&&f>=0&&g<=0)return a=f/(f-g),t.copy(n).addScaledVector(Li,a);const m=u*g-l*p;if(m<=0&&p-u>=0&&l-g>=0)return js.subVectors(i,r),a=(p-u)/(p-u+(l-g)),t.copy(r).addScaledVector(js,a);const v=1/(m+d+h);return o=d*v,a=h*v,t.copy(n).addScaledVector(Ri,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $r extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Js=new it,Pi=new bl,Sr=new qr,Zt=new G,Kt=new G,jt=new G,Mr=new G,Er=new G,wr=new G,Cn=new G,Rn=new G,Ln=new G,Pn=new Oe,Dn=new Oe,In=new Oe,br=new G,Fn=new G;class Vt extends gt{constructor(e=new xi,t=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const a=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}raycast(e,t){const n=this.geometry,r=this.material,i=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),e.ray.intersectsSphere(Sr)===!1)||(Js.copy(i).invert(),Pi.copy(e.ray).applyMatrix4(Js),n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,f=n.morphAttributes.position,u=n.morphTargetsRelative,p=n.attributes.uv,h=n.attributes.uv2,l=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,m=l.length;d<m;d++){const v=l[d],E=r[v.materialIndex],b=Math.max(v.start,g.start),x=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let _=b,S=x;_<S;_+=3){const M=a.getX(_),y=a.getX(_+1),w=a.getX(_+2);o=Nn(this,E,e,Pi,c,f,u,p,h,M,y,w),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let v=d,E=m;v<E;v+=3){const b=a.getX(v),x=a.getX(v+1),_=a.getX(v+2);o=Nn(this,r,e,Pi,c,f,u,p,h,b,x,_),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let d=0,m=l.length;d<m;d++){const v=l[d],E=r[v.materialIndex],b=Math.max(v.start,g.start),x=Math.min(c.count,Math.min(v.start+v.count,g.start+g.count));for(let _=b,S=x;_<S;_+=3){const M=_,y=_+1,w=_+2;o=Nn(this,E,e,Pi,c,f,u,p,h,M,y,w),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),m=Math.min(c.count,g.start+g.count);for(let v=d,E=m;v<E;v+=3){const b=v,x=v+1,_=v+2;o=Nn(this,r,e,Pi,c,f,u,p,h,b,x,_),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Tl(s,e,t,n,r,i,o,a){let c;if(e.side===bt?c=n.intersectTriangle(o,i,r,!0,a):c=n.intersectTriangle(r,i,o,e.side!==Vi,a),c===null)return null;Fn.copy(a),Fn.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Fn);return f<t.near||f>t.far?null:{distance:f,point:Fn.clone(),object:s}}function Nn(s,e,t,n,r,i,o,a,c,f,u,p){Zt.fromBufferAttribute(r,f),Kt.fromBufferAttribute(r,u),jt.fromBufferAttribute(r,p);const h=s.morphTargetInfluences;if(i&&h){Cn.set(0,0,0),Rn.set(0,0,0),Ln.set(0,0,0);for(let g=0,d=i.length;g<d;g++){const m=h[g],v=i[g];m!==0&&(Mr.fromBufferAttribute(v,f),Er.fromBufferAttribute(v,u),wr.fromBufferAttribute(v,p),o?(Cn.addScaledVector(Mr,m),Rn.addScaledVector(Er,m),Ln.addScaledVector(wr,m)):(Cn.addScaledVector(Mr.sub(Zt),m),Rn.addScaledVector(Er.sub(Kt),m),Ln.addScaledVector(wr.sub(jt),m)))}Zt.add(Cn),Kt.add(Rn),jt.add(Ln)}s.isSkinnedMesh&&(s.boneTransform(f,Zt),s.boneTransform(u,Kt),s.boneTransform(p,jt));const l=Tl(s,e,t,n,Zt,Kt,jt,br);if(l){a&&(Pn.fromBufferAttribute(a,f),Dn.fromBufferAttribute(a,u),In.fromBufferAttribute(a,p),l.uv=Gt.getUV(br,Zt,Kt,jt,Pn,Dn,In,new Oe)),c&&(Pn.fromBufferAttribute(c,f),Dn.fromBufferAttribute(c,u),In.fromBufferAttribute(c,p),l.uv2=Gt.getUV(br,Zt,Kt,jt,Pn,Dn,In,new Oe));const g={a:f,b:u,c:p,normal:new G,materialIndex:0};Gt.getNormal(Zt,Kt,jt,g.normal),l.face=g}return l}var Al=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,Cl=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Rl=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,Ll=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Pl=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,Dl=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Il=`
vec3 transformed = vec3( position );
`,Fl=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Nl=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

#ifdef USE_IRIDESCENCE

vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

#endif

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`,Ul=`

#ifdef USE_IRIDESCENCE

// XYZ to sRGB color space
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);

// Assume air interface for top
// Note: We don't handle the case fresnel0 == 1
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}

// Conversion FO/IOR
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}

// ior is a value between 1.0 and 3.0. 1.0 is air interface
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}

// Fresnel equations for dielectric/dielectric interfaces.
// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
// Evaluation XYZ sensitivity curves in Fourier space
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;

   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}

vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;

   // Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   // Evaluate the cosTheta on the base layer (Snell law)
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

   // Handle TIR:
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }

   float cosTheta2 = sqrt( cosTheta2Sq );

   // First interface
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;

   // Second interface
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;

   // Phase shift
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;

   // Compound terms
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

   // Reflectance term for m = 0 (DC term amplitude)
   vec3 C0 = R12 + Rs;
   I = C0;

   // Reflectance term for m > 0 (pairs of diracs)
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }

   // Since out of gamut colors might be produced, negative color values are clamped to 0.
   return max( I, vec3( 0.0 ) );
}

#endif

`,Ol=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,Bl=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,zl=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Gl=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Hl=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Vl=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,kl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Wl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,Xl=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,ql=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,$l=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,Yl=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Zl=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Kl=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,jl=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Jl=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Ql=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,ec=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,tc=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,ic=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,nc=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,rc=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,sc=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,ac=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,oc=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,lc=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,cc=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,uc=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`,hc=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,dc=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,fc=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointLightInfo( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotLightInfo( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );

		#endif

	}
	#pragma unroll_loop_end

#endif
`,pc=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,mc=`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,gc=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,vc=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`,xc=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,_c=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,yc=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,Sc=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	#ifdef USE_IRIDESCENCE

		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );

	#else

		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,Mc=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

float dotNVi = saturate( dot( normal, geometry.viewDir ) );

if ( material.iridescenceThickness == 0.0 ) {

	material.iridescence = 0.0;

} else {

	material.iridescence = saturate( material.iridescence );

}

if ( material.iridescence > 0.0 ) {

	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

	// Iridescence F0 approximation
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,Ec=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,wc=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,bc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Tc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,Ac=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Cc=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,Rc=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,Lc=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Pc=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,Dc=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Ic=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Fc=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Nc=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,Uc=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,Oc=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,Bc=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,zc=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,Gc=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Hc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Vc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,kc=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Wc=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,Xc=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,qc=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,$c=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,Yc=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Zc=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Kc=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,jc=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Jc=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Qc=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,eu=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,tu=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,iu=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,nu=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,ru=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,su=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,au=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,ou=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,lu=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;

	mat4 getBoneMatrix( const in float i ) {

		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );

		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );

		y = dy * ( y + 0.5 );

		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

		mat4 bone = mat4( v1, v2, v3, v4 );

		return bone;

	}

#endif
`,cu=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,uu=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,hu=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,du=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,fu=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,pu=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,mu=`
#ifdef USE_TRANSMISSION

	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;

	#ifdef USE_TRANSMISSIONMAP

		transmissionFactor *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		thicknessFactor *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif
`,gu=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef texture2DLodEXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( attenuationDistance == 0.0 ) {

			// Attenuation distance is +\u221E (which we indicate by zero), i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,vu=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,xu=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,_u=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,yu=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,Su=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,Mu=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,Eu=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;const wu=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,bu=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	gl_FragColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );

	#endif

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Tu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Au=`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Cu=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,Ru=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,Lu=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,Pu=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,Du=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Iu=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Fu=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Nu=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Uu=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Ou=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Bu=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`,zu=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`,Gu=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Hu=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Vu=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,ku=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Wu=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Xu=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,qu=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,$u=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Yu=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Zu=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Ku=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,ju=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Ju=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Qu=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,eh=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,th=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Ae={alphamap_fragment:Al,alphamap_pars_fragment:Cl,alphatest_fragment:Rl,alphatest_pars_fragment:Ll,aomap_fragment:Pl,aomap_pars_fragment:Dl,begin_vertex:Il,beginnormal_vertex:Fl,bsdfs:Nl,iridescence_fragment:Ul,bumpmap_pars_fragment:Ol,clipping_planes_fragment:Bl,clipping_planes_pars_fragment:zl,clipping_planes_pars_vertex:Gl,clipping_planes_vertex:Hl,color_fragment:Vl,color_pars_fragment:kl,color_pars_vertex:Wl,color_vertex:Xl,common:ql,cube_uv_reflection_fragment:$l,defaultnormal_vertex:Yl,displacementmap_pars_vertex:Zl,displacementmap_vertex:Kl,emissivemap_fragment:jl,emissivemap_pars_fragment:Jl,encodings_fragment:Ql,encodings_pars_fragment:ec,envmap_fragment:tc,envmap_common_pars_fragment:ic,envmap_pars_fragment:nc,envmap_pars_vertex:rc,envmap_physical_pars_fragment:mc,envmap_vertex:sc,fog_vertex:ac,fog_pars_vertex:oc,fog_fragment:lc,fog_pars_fragment:cc,gradientmap_pars_fragment:uc,lightmap_fragment:hc,lightmap_pars_fragment:dc,lights_lambert_vertex:fc,lights_pars_begin:pc,lights_toon_fragment:gc,lights_toon_pars_fragment:vc,lights_phong_fragment:xc,lights_phong_pars_fragment:_c,lights_physical_fragment:yc,lights_physical_pars_fragment:Sc,lights_fragment_begin:Mc,lights_fragment_maps:Ec,lights_fragment_end:wc,logdepthbuf_fragment:bc,logdepthbuf_pars_fragment:Tc,logdepthbuf_pars_vertex:Ac,logdepthbuf_vertex:Cc,map_fragment:Rc,map_pars_fragment:Lc,map_particle_fragment:Pc,map_particle_pars_fragment:Dc,metalnessmap_fragment:Ic,metalnessmap_pars_fragment:Fc,morphcolor_vertex:Nc,morphnormal_vertex:Uc,morphtarget_pars_vertex:Oc,morphtarget_vertex:Bc,normal_fragment_begin:zc,normal_fragment_maps:Gc,normal_pars_fragment:Hc,normal_pars_vertex:Vc,normal_vertex:kc,normalmap_pars_fragment:Wc,clearcoat_normal_fragment_begin:Xc,clearcoat_normal_fragment_maps:qc,clearcoat_pars_fragment:$c,iridescence_pars_fragment:Yc,output_fragment:Zc,packing:Kc,premultiplied_alpha_fragment:jc,project_vertex:Jc,dithering_fragment:Qc,dithering_pars_fragment:eu,roughnessmap_fragment:tu,roughnessmap_pars_fragment:iu,shadowmap_pars_fragment:nu,shadowmap_pars_vertex:ru,shadowmap_vertex:su,shadowmask_pars_fragment:au,skinbase_vertex:ou,skinning_pars_vertex:lu,skinning_vertex:cu,skinnormal_vertex:uu,specularmap_fragment:hu,specularmap_pars_fragment:du,tonemapping_fragment:fu,tonemapping_pars_fragment:pu,transmission_fragment:mu,transmission_pars_fragment:gu,uv_pars_fragment:vu,uv_pars_vertex:xu,uv_vertex:_u,uv2_pars_fragment:yu,uv2_pars_vertex:Su,uv2_vertex:Mu,worldpos_vertex:Eu,background_vert:wu,background_frag:bu,cube_vert:Tu,cube_frag:Au,depth_vert:Cu,depth_frag:Ru,distanceRGBA_vert:Lu,distanceRGBA_frag:Pu,equirect_vert:Du,equirect_frag:Iu,linedashed_vert:Fu,linedashed_frag:Nu,meshbasic_vert:Uu,meshbasic_frag:Ou,meshlambert_vert:Bu,meshlambert_frag:zu,meshmatcap_vert:Gu,meshmatcap_frag:Hu,meshnormal_vert:Vu,meshnormal_frag:ku,meshphong_vert:Wu,meshphong_frag:Xu,meshphysical_vert:qu,meshphysical_frag:$u,meshtoon_vert:Yu,meshtoon_frag:Zu,points_vert:Ku,points_frag:ju,shadow_vert:Ju,shadow_frag:Qu,sprite_vert:eh,sprite_frag:th},se={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},Pt={basic:{uniforms:Qe([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Qe([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Qe([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Qe([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Qe([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Qe([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Qe([se.points,se.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Qe([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Qe([se.common,se.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Qe([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Qe([se.sprite,se.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:Qe([se.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:Qe([se.common,se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:Qe([se.lights,se.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Pt.physical={uniforms:Qe([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function ih(s,e,t,n,r,i){const o=new Ue(0);let a=r===!0?0:1,c,f,u=null,p=0,h=null;function l(d,m){let v=!1,E=m.isScene===!0?m.background:null;E&&E.isTexture&&(E=e.get(E));const b=s.xr,x=b.getSession&&b.getSession();x&&x.environmentBlendMode==="additive"&&(E=null),E===null?g(o,a):E&&E.isColor&&(g(E,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Xn)?(f===void 0&&(f=new Vt(new pn(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:qi(Pt.cube.uniforms),vertexShader:Pt.cube.vertexShader,fragmentShader:Pt.cube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(_,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,(u!==E||p!==E.version||h!==s.toneMapping)&&(f.material.needsUpdate=!0,u=E,p=E.version,h=s.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Vt(new $n(2,2),new vi({name:"BackgroundMaterial",uniforms:qi(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,p=E.version,h=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,m){t.buffers.color.setClear(d.r,d.g,d.b,m,i)}return{getClearColor:function(){return o},setClearColor:function(d,m=1){o.set(d),a=m,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,g(o,a)},render:l}}function nh(s,e,t,n){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||i!==null,a={},c=m(null);let f=c,u=!1;function p(P,O,N,H,k){let B=!1;if(o){const W=d(H,N,O);f!==W&&(f=W,l(f.object)),B=v(P,H,N,k),B&&E(P,H,N,k)}else{const W=O.wireframe===!0;(f.geometry!==H.id||f.program!==N.id||f.wireframe!==W)&&(f.geometry=H.id,f.program=N.id,f.wireframe=W,B=!0)}k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,y(P,O,N,H),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return n.isWebGL2?s.createVertexArray():i.createVertexArrayOES()}function l(P){return n.isWebGL2?s.bindVertexArray(P):i.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):i.deleteVertexArrayOES(P)}function d(P,O,N){const H=N.wireframe===!0;let k=a[P.id];k===void 0&&(k={},a[P.id]=k);let B=k[O.id];B===void 0&&(B={},k[O.id]=B);let W=B[H];return W===void 0&&(W=m(h()),B[H]=W),W}function m(P){const O=[],N=[],H=[];for(let k=0;k<r;k++)O[k]=0,N[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:H,object:P,attributes:{},index:null}}function v(P,O,N,H){const k=f.attributes,B=O.attributes;let W=0;const j=N.getAttributes();for(const Z in j)if(j[Z].location>=0){const ae=k[Z];let ue=B[Z];if(ue===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ae===void 0||ae.attribute!==ue||ue&&ae.data!==ue.data)return!0;W++}return f.attributesNum!==W||f.index!==H}function E(P,O,N,H){const k={},B=O.attributes;let W=0;const j=N.getAttributes();for(const Z in j)if(j[Z].location>=0){let ae=B[Z];ae===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const ue={};ue.attribute=ae,ae&&ae.data&&(ue.data=ae.data),k[Z]=ue,W++}f.attributes=k,f.attributesNum=W,f.index=H}function b(){const P=f.newAttributes;for(let O=0,N=P.length;O<N;O++)P[O]=0}function x(P){_(P,0)}function _(P,O){const N=f.newAttributes,H=f.enabledAttributes,k=f.attributeDivisors;N[P]=1,H[P]===0&&(s.enableVertexAttribArray(P),H[P]=1),k[P]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),k[P]=O)}function S(){const P=f.newAttributes,O=f.enabledAttributes;for(let N=0,H=O.length;N<H;N++)O[N]!==P[N]&&(s.disableVertexAttribArray(N),O[N]=0)}function M(P,O,N,H,k,B){n.isWebGL2===!0&&(N===s.INT||N===s.UNSIGNED_INT)?s.vertexAttribIPointer(P,O,N,k,B):s.vertexAttribPointer(P,O,N,H,k,B)}function y(P,O,N,H){if(n.isWebGL2===!1&&(P.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const k=H.attributes,B=N.getAttributes(),W=O.defaultAttributeValues;for(const j in B){const Z=B[j];if(Z.location>=0){let K=k[j];if(K===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){const ae=K.normalized,ue=K.itemSize,U=t.get(K);if(U===void 0)continue;const be=U.buffer,Se=U.type,ye=U.bytesPerElement;if(K.isInterleavedBufferAttribute){const oe=K.data,Ce=oe.stride,me=K.offset;if(oe.isInstancedInterleavedBuffer){for(let ge=0;ge<Z.locationSize;ge++)_(Z.location+ge,oe.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<Z.locationSize;ge++)x(Z.location+ge);s.bindBuffer(s.ARRAY_BUFFER,be);for(let ge=0;ge<Z.locationSize;ge++)M(Z.location+ge,ue/Z.locationSize,Se,ae,Ce*ye,(me+ue/Z.locationSize*ge)*ye)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)_(Z.location+oe,K.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<Z.locationSize;oe++)x(Z.location+oe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let oe=0;oe<Z.locationSize;oe++)M(Z.location+oe,ue/Z.locationSize,Se,ae,ue*ye,ue/Z.locationSize*oe*ye)}}else if(W!==void 0){const ae=W[j];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(Z.location,ae);break;case 3:s.vertexAttrib3fv(Z.location,ae);break;case 4:s.vertexAttrib4fv(Z.location,ae);break;default:s.vertexAttrib1fv(Z.location,ae)}}}}S()}function w(){D();for(const P in a){const O=a[P];for(const N in O){const H=O[N];for(const k in H)g(H[k].object),delete H[k];delete O[N]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const N in O){const H=O[N];for(const k in H)g(H[k].object),delete H[k];delete O[N]}delete a[P.id]}function T(P){for(const O in a){const N=a[O];if(N[P.id]===void 0)continue;const H=N[P.id];for(const k in H)g(H[k].object),delete H[k];delete N[P.id]}}function D(){F(),u=!0,f!==c&&(f=c,l(f.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:D,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:x,disableUnusedAttributes:S}}function rh(s,e,t,n){const r=n.isWebGL2;let i;function o(f){i=f}function a(f,u){s.drawArrays(i,f,u),t.update(u,i,1)}function c(f,u,p){if(p===0)return;let h,l;if(r)h=s,l="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),l="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[l](i,f,u,p),t.update(u,i,p)}this.setMode=o,this.render=a,this.renderInstances=c}function sh(s,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=i(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const f=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=h>0,x=o||e.has("OES_texture_float"),_=b&&x,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:i,precision:a,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:l,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:x,floatVertexTextures:_,maxSamples:S}}function ah(s){const e=this;let t=null,n=0,r=!1,i=!1;const o=new si,a=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,l){const g=p.length!==0||h||n!==0||r;return r=h,t=u(p,l,0),n=p.length,g},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1,f()},this.setState=function(p,h,l){const g=p.clippingPlanes,d=p.clipIntersection,m=p.clipShadows,v=s.get(p);if(!r||g===null||g.length===0||i&&!m)i?u(null):f();else{const E=i?0:n,b=E*4;let x=v.clippingState||null;c.value=x,x=u(g,h,b,l);for(let _=0;_!==b;++_)x[_]=t[_];v.clippingState=x,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=E}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,l,g){const d=p!==null?p.length:0;let m=null;if(d!==0){if(m=c.value,g!==!0||m===null){const v=l+d*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<v)&&(m=new Float32Array(v));for(let b=0,x=l;b!==d;++b,x+=4)o.copy(p[b]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}let Di;class Ha{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=ln("canvas")),Di.width=e.width,Di.height=e.height;const n=Di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ln("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let o=0;o<i.length;o++)i[o]=fi(i[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Va{constructor(e=null){this.isSource=!0,this.uuid=un(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?i.push(Tr(r[o].image)):i.push(Tr(r[o]))}else i=Tr(r);n.url=i}return t||(e.images[this.uuid]=n),n}}function Tr(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Ha.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oh=0;class dt extends $i{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=Et,r=Et,i=pt,o=qn,a=wt,c=mi,f=1,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=un(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Da)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case Et:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case Et:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=Da;class Qt extends $i{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new dt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ka extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mt extends ka{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,f=o.fullHeight;i+=o.offsetX*r/c,t-=o.offsetY*n/f,r*=o.width/c,n*=o.height/f}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=90,Fi=1;class lh extends gt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new mt(Ii,Fi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new G(1,0,0)),this.add(r);const i=new mt(Ii,Fi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new G(-1,0,0)),this.add(i);const o=new mt(Ii,Fi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new G(0,1,0)),this.add(o);const a=new mt(Ii,Fi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new G(0,-1,0)),this.add(a);const c=new mt(Ii,Fi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new G(0,0,1)),this.add(c);const f=new mt(Ii,Fi,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new G(0,0,-1)),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,i,o,a,c,f]=this.children,u=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=kt,e.xr.enabled=!1;const l=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=l,e.setRenderTarget(n,5),e.render(t,f),e.setRenderTarget(u),e.toneMapping=p,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Wa extends dt{constructor(e,t,n,r,i,o,a,c,f,u){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,r,i,o,a,c,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ch extends Qt{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Wa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pn(5,5,5),i=new vi({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:Jt});i.uniforms.tEquirect.value=t;const o=new Vt(r,i),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=pt),new lh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(i)}}function uh(s){let e=new WeakMap;function t(o,a){return a===Ur?o.mapping=ki:a===Or&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ur||a===Or)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const f=new ch(c.height/2);return f.fromEquirectangularTexture(s,o),e.set(o,f),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class hh extends ka{constructor(e=-1,t=1,n=1,r=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=f*this.view.offsetX,o=i+f*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(i,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,Qs=[.125,.215,.35,.446,.526,.582],oi=20,Ar=new hh,ea=new Ue;let Cr=null;const ai=(1+Math.sqrt(5))/2,Ni=1/ai,ta=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,ai,Ni),new G(0,ai,-Ni),new G(Ni,0,ai),new G(-Ni,0,ai),new G(ai,Ni,0),new G(-ai,Ni,0)];class ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Cr=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ra(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr),e.scissorTest=!1,Un(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:on,format:wt,encoding:gi,depthBuffer:!1},r=na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dh(i)),this._blurMaterial=fh(i,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,n,r){const a=new mt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(ea),u.toneMapping=kt,u.autoClear=!1;const l=new $r({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),g=new Vt(new pn,l);let d=!1;const m=e.background;m?m.isColor&&(l.color.copy(m),e.background=null,d=!0):(l.color.copy(ea),d=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(a.up.set(0,c[v],0),a.lookAt(f[v],0,0)):E===1?(a.up.set(0,0,c[v]),a.lookAt(0,f[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,f[v]));const b=this._cubeSize;Un(r,E*b,v>2?b:0,b,b),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ki||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ra());const i=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const c=this._cubeSize;Un(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ar)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ta[(r-1)%ta.length];this._blur(e,r-1,r,i,o)}t.autoClear=n}_blur(e,t,n,r,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",i),this._halfBlur(o,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,o,a){const c=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Vt(this._lodPlanes[r],f),h=f.uniforms,l=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*l):2*Math.PI/(2*oi-1),d=i/g,m=isFinite(i)?1+Math.floor(u*d):oi;m>oi&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const v=[];let E=0;for(let M=0;M<oi;++M){const y=M/d,w=Math.exp(-y*y/2);v.push(w),M===0?E+=w:M<m&&(E+=2*w)}for(let M=0;M<v.length;M++)v[M]=v[M]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const x=this._sizeLods[r],_=3*x*(r>b-Bi?r-b+Bi:0),S=4*(this._cubeSize-x);Un(t,_,S,3*x,2*x),c.setRenderTarget(t),c.render(p,Ar)}}function dh(s){const e=[],t=[],n=[];let r=s;const i=s-Bi+1+Qs.length;for(let o=0;o<i;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>s-Bi?c=Qs[o-s+Bi-1]:o===0&&(c=0),n.push(c);const f=1/(a-2),u=-f,p=1+f,h=[u,u,p,u,p,p,u,u,p,p,u,p],l=6,g=6,d=3,m=2,v=1,E=new Float32Array(d*g*l),b=new Float32Array(m*g*l),x=new Float32Array(v*g*l);for(let S=0;S<l;S++){const M=S%3*2/3-1,y=S>2?0:-1,w=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];E.set(w,d*g*S),b.set(h,m*g*S);const A=[S,S,S,S,S,S];x.set(A,v*g*S)}const _=new xi;_.setAttribute("position",new Tt(E,d)),_.setAttribute("uv",new Tt(b,m)),_.setAttribute("faceIndex",new Tt(x,v)),e.push(_),r>Bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function na(s,e,t){const n=new Qt(s,e,t);return n.texture.mapping=Xn,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Un(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function fh(s,e,t){const n=new Float32Array(oi),r=new G(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function ra(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function sa(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Yr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ph(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,f=c===Ur||c===Or,u=c===ki||c===Wi;if(f||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new ia(s)),p=f?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(f&&p&&p.height>0||u&&p&&r(p)){t===null&&(t=new ia(s));const h=f?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",i),h.texture}else return null}}}return a}function r(a){let c=0;const f=6;for(let u=0;u<f;u++)a[u]!==void 0&&c++;return c===f}function i(a){const c=a.target;c.removeEventListener("dispose",i);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gh(s,e,t,n){const r={},i=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const l=i.get(h);l&&(e.remove(l),i.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const l=p.morphAttributes;for(const g in l){const d=l[g];for(let m=0,v=d.length;m<v;m++)e.update(d[m],s.ARRAY_BUFFER)}}function f(p){const h=[],l=p.index,g=p.attributes.position;let d=0;if(l!==null){const E=l.array;d=l.version;for(let b=0,x=E.length;b<x;b+=3){const _=E[b+0],S=E[b+1],M=E[b+2];h.push(_,S,S,M,M,_)}}else{const E=g.array;d=g.version;for(let b=0,x=E.length/3-1;b<x;b+=3){const _=b+0,S=b+1,M=b+2;h.push(_,S,S,M,M,_)}}const m=new(Ga(h)?Ba:Oa)(h,1);m.version=d;const v=i.get(p);v&&e.remove(v),i.set(p,m)}function u(p){const h=i.get(p);if(h){const l=p.index;l!==null&&h.version<l.version&&f(p)}else f(p);return i.get(p)}return{get:a,update:c,getWireframeAttribute:u}}function vh(s,e,t,n){const r=n.isWebGL2;let i;function o(h){i=h}let a,c;function f(h){a=h.type,c=h.bytesPerElement}function u(h,l){s.drawElements(i,l,a,h*c),t.update(l,i,1)}function p(h,l,g){if(g===0)return;let d,m;if(r)d=s,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](i,l,a,h*c,g),t.update(l,i,g)}this.setMode=o,this.setIndex=f,this.render=u,this.renderInstances=p}function xh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(i/3);break;case s.LINES:t.lines+=a*(i/2);break;case s.LINE_STRIP:t.lines+=a*(i-1);break;case s.LINE_LOOP:t.lines+=a*i;break;case s.POINTS:t.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}class Xa extends dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ot,this.minFilter=ot,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function _h(s,e){return s[0]-e[0]}function yh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Rr(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Sh(s,e,t){const n={},r=new Float32Array(8),i=new WeakMap,o=new tt,a=[];for(let f=0;f<8;f++)a[f]=[f,0];function c(f,u,p,h){const l=f.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let v=i.get(u);if(v===void 0||v.count!==m){let N=function(){P.dispose(),i.delete(u),u.removeEventListener("dispose",N)};var g=N;v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let A=0;x===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let T=u.attributes.position.count*A,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const F=new Float32Array(T*D*4*m),P=new Xa(F,T,D,m);P.type=ci,P.needsUpdate=!0;const O=A*4;for(let H=0;H<m;H++){const k=M[H],B=y[H],W=w[H],j=T*D*4*H;for(let Z=0;Z<k.count;Z++){const K=Z*O;x===!0&&(o.fromBufferAttribute(k,Z),k.normalized===!0&&Rr(o,k),F[j+K+0]=o.x,F[j+K+1]=o.y,F[j+K+2]=o.z,F[j+K+3]=0),_===!0&&(o.fromBufferAttribute(B,Z),B.normalized===!0&&Rr(o,B),F[j+K+4]=o.x,F[j+K+5]=o.y,F[j+K+6]=o.z,F[j+K+7]=0),S===!0&&(o.fromBufferAttribute(W,Z),W.normalized===!0&&Rr(o,W),F[j+K+8]=o.x,F[j+K+9]=o.y,F[j+K+10]=o.z,F[j+K+11]=W.itemSize===4?o.w:1)}}v={count:m,texture:P,size:new Oe(T,D)},i.set(u,v),u.addEventListener("dispose",N)}let E=0;for(let x=0;x<l.length;x++)E+=l[x];const b=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",l),h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const d=l===void 0?0:l.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let _=0;_<d;_++)m[_]=[_,0];n[u.id]=m}for(let _=0;_<d;_++){const S=m[_];S[0]=_,S[1]=l[_]}m.sort(yh);for(let _=0;_<8;_++)_<d&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(_h);const v=u.morphAttributes.position,E=u.morphAttributes.normal;let b=0;for(let _=0;_<8;_++){const S=a[_],M=S[0],y=S[1];M!==Number.MAX_SAFE_INTEGER&&y?(v&&u.getAttribute("morphTarget"+_)!==v[M]&&u.setAttribute("morphTarget"+_,v[M]),E&&u.getAttribute("morphNormal"+_)!==E[M]&&u.setAttribute("morphNormal"+_,E[M]),r[_]=y,b+=y):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),E&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const x=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:c}}function Mh(s,e,t,n){let r=new WeakMap;function i(c){const f=n.render.frame,u=c.geometry,p=e.get(c,u);return r.get(p)!==f&&(e.update(p),r.set(p,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),p}function o(){r=new WeakMap}function a(c){const f=c.target;f.removeEventListener("dispose",a),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:i,dispose:o}}class Eh extends dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ot,this.minFilter=ot,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qa=new dt,$a=new Xa,Ya=new Eh,Za=new Wa,aa=[],oa=[],la=new Float32Array(16),ca=new Float32Array(9),ua=new Float32Array(4);function Yi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let i=aa[r];if(i===void 0&&(i=new Float32Array(r),aa[r]=i),e!==0){n.toArray(i,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(i,a)}return i}function st(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function at(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yn(s,e){let t=oa[e];t===void 0&&(t=new Int32Array(e),oa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function wh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2fv(this.addr,e),at(t,e)}}function Th(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;s.uniform3fv(this.addr,e),at(t,e)}}function Ah(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4fv(this.addr,e),at(t,e)}}function Ch(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;ua.set(n),s.uniformMatrix2fv(this.addr,!1,ua),at(t,n)}}function Rh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;ca.set(n),s.uniformMatrix3fv(this.addr,!1,ca),at(t,n)}}function Lh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;la.set(n),s.uniformMatrix4fv(this.addr,!1,la),at(t,n)}}function Ph(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Dh(s,e){const t=this.cache;st(t,e)||(s.uniform2iv(this.addr,e),at(t,e))}function Ih(s,e){const t=this.cache;st(t,e)||(s.uniform3iv(this.addr,e),at(t,e))}function Fh(s,e){const t=this.cache;st(t,e)||(s.uniform4iv(this.addr,e),at(t,e))}function Nh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Uh(s,e){const t=this.cache;st(t,e)||(s.uniform2uiv(this.addr,e),at(t,e))}function Oh(s,e){const t=this.cache;st(t,e)||(s.uniform3uiv(this.addr,e),at(t,e))}function Bh(s,e){const t=this.cache;st(t,e)||(s.uniform4uiv(this.addr,e),at(t,e))}function zh(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||qa,r)}function Gh(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ya,r)}function Hh(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Za,r)}function Vh(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||$a,r)}function kh(s){switch(s){case 5126:return wh;case 35664:return bh;case 35665:return Th;case 35666:return Ah;case 35674:return Ch;case 35675:return Rh;case 35676:return Lh;case 5124:case 35670:return Ph;case 35667:case 35671:return Dh;case 35668:case 35672:return Ih;case 35669:case 35673:return Fh;case 5125:return Nh;case 36294:return Uh;case 36295:return Oh;case 36296:return Bh;case 35678:case 36198:case 36298:case 36306:case 35682:return zh;case 35679:case 36299:case 36307:return Gh;case 35680:case 36300:case 36308:case 36293:return Hh;case 36289:case 36303:case 36311:case 36292:return Vh}}function Wh(s,e){s.uniform1fv(this.addr,e)}function Xh(s,e){const t=Yi(e,this.size,2);s.uniform2fv(this.addr,t)}function qh(s,e){const t=Yi(e,this.size,3);s.uniform3fv(this.addr,t)}function $h(s,e){const t=Yi(e,this.size,4);s.uniform4fv(this.addr,t)}function Yh(s,e){const t=Yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zh(s,e){const t=Yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Kh(s,e){const t=Yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jh(s,e){s.uniform1iv(this.addr,e)}function Jh(s,e){s.uniform2iv(this.addr,e)}function Qh(s,e){s.uniform3iv(this.addr,e)}function ed(s,e){s.uniform4iv(this.addr,e)}function td(s,e){s.uniform1uiv(this.addr,e)}function id(s,e){s.uniform2uiv(this.addr,e)}function nd(s,e){s.uniform3uiv(this.addr,e)}function rd(s,e){s.uniform4uiv(this.addr,e)}function sd(s,e,t){const n=e.length,r=Yn(t,n);s.uniform1iv(this.addr,r);for(let i=0;i!==n;++i)t.setTexture2D(e[i]||qa,r[i])}function ad(s,e,t){const n=e.length,r=Yn(t,n);s.uniform1iv(this.addr,r);for(let i=0;i!==n;++i)t.setTexture3D(e[i]||Ya,r[i])}function od(s,e,t){const n=e.length,r=Yn(t,n);s.uniform1iv(this.addr,r);for(let i=0;i!==n;++i)t.setTextureCube(e[i]||Za,r[i])}function ld(s,e,t){const n=e.length,r=Yn(t,n);s.uniform1iv(this.addr,r);for(let i=0;i!==n;++i)t.setTexture2DArray(e[i]||$a,r[i])}function cd(s){switch(s){case 5126:return Wh;case 35664:return Xh;case 35665:return qh;case 35666:return $h;case 35674:return Yh;case 35675:return Zh;case 35676:return Kh;case 5124:case 35670:return jh;case 35667:case 35671:return Jh;case 35668:case 35672:return Qh;case 35669:case 35673:return ed;case 5125:return td;case 36294:return id;case 36295:return nd;case 36296:return rd;case 35678:case 36198:case 36298:case 36306:case 35682:return sd;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return od;case 36289:case 36303:case 36311:case 36292:return ld}}class ud{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=kh(t.type)}}class hd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cd(t.type)}}class dd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let i=0,o=r.length;i!==o;++i){const a=r[i];a.setValue(e,t[a.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function ha(s,e){s.seq.push(e),s.map[e.id]=e}function fd(s,e,t){const n=s.name,r=n.length;for(Lr.lastIndex=0;;){const i=Lr.exec(n),o=Lr.lastIndex;let a=i[1];const c=i[2]==="]",f=i[3];if(c&&(a=a|0),f===void 0||f==="["&&o+2===r){ha(t,f===void 0?new ud(a,s,e):new hd(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new dd(a),ha(t,p)),t=p}}}class Hn{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=e.getActiveUniform(t,r),o=e.getUniformLocation(t,i.name);fd(i,o,this)}}setValue(e,t,n,r){const i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,o=t.length;i!==o;++i){const a=t[i],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,i=e.length;r!==i;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function da(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let pd=0;function md(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=r;o<i;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function gd(s){switch(s){case gi:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function fa(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+md(s.getShaderSource(e),o)}else return r}function vd(s,e){const t=gd(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xd(s,e){let t;switch(e){case Oo:t="Linear";break;case Bo:t="Reinhard";break;case zo:t="OptimizedCineon";break;case Go:t="ACESFilmic";break;case Ho:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _d(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tn).join(`
`)}function yd(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sd(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=s.getActiveAttrib(e,r),o=i.name;let a=1;i.type===s.FLOAT_MAT2&&(a=2),i.type===s.FLOAT_MAT3&&(a=3),i.type===s.FLOAT_MAT4&&(a=4),t[o]={type:i.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function tn(s){return s!==""}function pa(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ma(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Md=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(s){return s.replace(Md,Ed)}function Ed(s,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Vr(t)}const wd=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ga(s){return s.replace(bd,Ka).replace(wd,Td)}function Td(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ka(s,e,t,n)}function Ka(s,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function va(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ad(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ca?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===po?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function Cd(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case Wi:e="ENVMAP_TYPE_CUBE";break;case Xn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rd(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ld(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pa:e="ENVMAP_BLENDING_MULTIPLY";break;case No:e="ENVMAP_BLENDING_MIX";break;case Uo:e="ENVMAP_BLENDING_ADD";break}return e}function Pd(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dd(s,e,t,n){const r=s.getContext(),i=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Ad(t),f=Cd(t),u=Rd(t),p=Ld(t),h=Pd(t),l=t.isWebGL2?"":_d(t),g=yd(i),d=r.createProgram();let m,v,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(tn).join(`
`),m.length>0&&(m+=`
`),v=[l,g].filter(tn).join(`
`),v.length>0&&(v+=`
`)):(m=[va(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tn).join(`
`),v=[l,va(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kt?"#define TONE_MAPPING":"",t.toneMapping!==kt?Ae.tonemapping_pars_fragment:"",t.toneMapping!==kt?xd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,vd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tn).join(`
`)),o=Vr(o),o=pa(o,t),o=ma(o,t),a=Vr(a),a=pa(a,t),a=ma(a,t),o=ga(o),a=ga(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===zs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=E+m+o,x=E+v+a,_=da(r,r.VERTEX_SHADER,b),S=da(r,r.FRAGMENT_SHADER,x);if(r.attachShader(d,_),r.attachShader(d,S),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),s.debug.checkShaderErrors){const w=r.getProgramInfoLog(d).trim(),A=r.getShaderInfoLog(_).trim(),T=r.getShaderInfoLog(S).trim();let D=!0,F=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1){D=!1;const P=fa(r,_,"vertex"),O=fa(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+P+`
`+O)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(A===""||T==="")&&(F=!1);F&&(this.diagnostics={runnable:D,programLog:w,vertexShader:{log:A,prefix:m},fragmentShader:{log:T,prefix:v}})}r.deleteShader(_),r.deleteShader(S);let M;this.getUniforms=function(){return M===void 0&&(M=new Hn(r,d)),M};let y;return this.getAttributes=function(){return y===void 0&&(y=Sd(r,d)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=pd++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=_,this.fragmentShader=S,this}let Id=0;class Fd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Nd(e);t.set(e,n)}return t.get(e)}}class Nd{constructor(e){this.id=Id++,this.code=e,this.usedTimes=0}}function Ud(s,e,t,n,r,i,o){const a=new za,c=new Fd,f=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let l=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,w,A,T,D){const F=T.fog,P=D.geometry,O=y.isMeshStandardMaterial?T.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),H=!!N&&N.mapping===Xn?N.image.height:null,k=g[y.type];y.precision!==null&&(l=r.getMaxPrecision(y.precision),l!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",l,"instead."));const B=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=B!==void 0?B.length:0;let j=0;P.morphAttributes.position!==void 0&&(j=1),P.morphAttributes.normal!==void 0&&(j=2),P.morphAttributes.color!==void 0&&(j=3);let Z,K,ae,ue;if(k){const Ce=Pt[k];Z=Ce.vertexShader,K=Ce.fragmentShader}else Z=y.vertexShader,K=y.fragmentShader,c.update(y),ae=c.getVertexShaderID(y),ue=c.getFragmentShaderID(y);const U=s.getRenderTarget(),be=y.alphaTest>0,Se=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:y.type,vertexShader:Z,fragmentShader:K,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:l,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:h,outputEncoding:U===null?s.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:gi,map:!!y.map,matcap:!!y.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:H,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===ol,tangentSpaceNormalMap:y.normalMapType===al,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Be,clearcoat:Se,clearcoatMap:Se&&!!y.clearcoatMap,clearcoatRoughnessMap:Se&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Gi,alphaMap:!!y.alphaMap,alphaTest:be,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!P.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:p,skinning:D.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:kt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vi,flipSided:y.side===bt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(v(w,y),E(w,y),w.push(s.outputEncoding)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputEncoding),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.combine),y.push(w.vertexUvs),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function E(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),w.fog&&a.enable(33),y.push(a.mask),a.disableAll(),w.useFog&&a.enable(0),w.flatShading&&a.enable(1),w.logarithmicDepthBuffer&&a.enable(2),w.skinning&&a.enable(3),w.morphTargets&&a.enable(4),w.morphNormals&&a.enable(5),w.morphColors&&a.enable(6),w.premultipliedAlpha&&a.enable(7),w.shadowMapEnabled&&a.enable(8),w.physicallyCorrectLights&&a.enable(9),w.doubleSided&&a.enable(10),w.flipSided&&a.enable(11),w.useDepthPacking&&a.enable(12),w.dithering&&a.enable(13),w.specularIntensityMap&&a.enable(14),w.specularColorMap&&a.enable(15),w.transmission&&a.enable(16),w.transmissionMap&&a.enable(17),w.thicknessMap&&a.enable(18),w.sheen&&a.enable(19),w.sheenColorMap&&a.enable(20),w.sheenRoughnessMap&&a.enable(21),w.decodeVideoTexture&&a.enable(22),w.opaque&&a.enable(23),y.push(a.mask)}function b(y){const w=g[y.type];let A;if(w){const T=Pt[w];A=Ml.clone(T.uniforms)}else A=y.uniforms;return A}function x(y,w){let A;for(let T=0,D=f.length;T<D;T++){const F=f[T];if(F.cacheKey===w){A=F,++A.usedTimes;break}}return A===void 0&&(A=new Dd(s,w,y,i),f.push(A)),A}function _(y){if(--y.usedTimes===0){const w=f.indexOf(y);f[w]=f[f.length-1],f.pop(),y.destroy()}}function S(y){c.remove(y)}function M(){c.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:b,acquireProgram:x,releaseProgram:_,releaseShaderCache:S,programs:f,dispose:M}}function Od(){let s=new WeakMap;function e(i){let o=s.get(i);return o===void 0&&(o={},s.set(i,o)),o}function t(i){s.delete(i)}function n(i,o,a){s.get(i)[o]=a}function r(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Bd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xa(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _a(){const s=[];let e=0;const t=[],n=[],r=[];function i(){e=0,t.length=0,n.length=0,r.length=0}function o(p,h,l,g,d,m){let v=s[e];return v===void 0?(v={id:p.id,object:p,geometry:h,material:l,groupOrder:g,renderOrder:p.renderOrder,z:d,group:m},s[e]=v):(v.id=p.id,v.object=p,v.geometry=h,v.material=l,v.groupOrder=g,v.renderOrder=p.renderOrder,v.z=d,v.group=m),e++,v}function a(p,h,l,g,d,m){const v=o(p,h,l,g,d,m);l.transmission>0?n.push(v):l.transparent===!0?r.push(v):t.push(v)}function c(p,h,l,g,d,m){const v=o(p,h,l,g,d,m);l.transmission>0?n.unshift(v):l.transparent===!0?r.unshift(v):t.unshift(v)}function f(p,h){t.length>1&&t.sort(p||Bd),n.length>1&&n.sort(h||xa),r.length>1&&r.sort(h||xa)}function u(){for(let p=e,h=s.length;p<h;p++){const l=s[p];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:t,transmissive:n,transparent:r,init:i,push:a,unshift:c,finish:u,sort:f}}function zd(){let s=new WeakMap;function e(n,r){let i;return s.has(n)===!1?(i=new _a,s.set(n,[i])):r>=s.get(n).length?(i=new _a,s.get(n).push(i)):i=s.get(n)[r],i}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ue};break;case"SpotLight":t={position:new G,direction:new G,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function Hd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Vd=0;function kd(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Wd(s,e){const t=new Gd,n=Hd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new G);const i=new G,o=new it,a=new it;function c(u,p){let h=0,l=0,g=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let d=0,m=0,v=0,E=0,b=0,x=0,_=0,S=0;u.sort(kd);const M=p!==!0?Math.PI:1;for(let w=0,A=u.length;w<A;w++){const T=u[w],D=T.color,F=T.intensity,P=T.distance,O=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*F*M,l+=D.g*F*M,g+=D.b*F*M;else if(T.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(T.sh.coefficients[N],F);else if(T.isDirectionalLight){const N=t.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity*M),T.castShadow){const H=T.shadow,k=n.get(T);k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,r.directionalShadow[d]=k,r.directionalShadowMap[d]=O,r.directionalShadowMatrix[d]=T.shadow.matrix,x++}r.directional[d]=N,d++}else if(T.isSpotLight){const N=t.get(T);if(N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(D).multiplyScalar(F*M),N.distance=P,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,T.castShadow){const H=T.shadow,k=n.get(T);k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,r.spotShadow[v]=k,r.spotShadowMap[v]=O,r.spotShadowMatrix[v]=T.shadow.matrix,S++}r.spot[v]=N,v++}else if(T.isRectAreaLight){const N=t.get(T);N.color.copy(D).multiplyScalar(F),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),r.rectArea[E]=N,E++}else if(T.isPointLight){const N=t.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity*M),N.distance=T.distance,N.decay=T.decay,T.castShadow){const H=T.shadow,k=n.get(T);k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,r.pointShadow[m]=k,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=T.shadow.matrix,_++}r.point[m]=N,m++}else if(T.isHemisphereLight){const N=t.get(T);N.skyColor.copy(T.color).multiplyScalar(F*M),N.groundColor.copy(T.groundColor).multiplyScalar(F*M),r.hemi[b]=N,b++}}E>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=l,r.ambient[2]=g;const y=r.hash;(y.directionalLength!==d||y.pointLength!==m||y.spotLength!==v||y.rectAreaLength!==E||y.hemiLength!==b||y.numDirectionalShadows!==x||y.numPointShadows!==_||y.numSpotShadows!==S)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=E,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=_,r.spotShadowMatrix.length=S,y.directionalLength=d,y.pointLength=m,y.spotLength=v,y.rectAreaLength=E,y.hemiLength=b,y.numDirectionalShadows=x,y.numPointShadows=_,y.numSpotShadows=S,r.version=Vd++)}function f(u,p){let h=0,l=0,g=0,d=0,m=0;const v=p.matrixWorldInverse;for(let E=0,b=u.length;E<b;E++){const x=u[E];if(x.isDirectionalLight){const _=r.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(v),h++}else if(x.isSpotLight){const _=r.spot[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(v),g++}else if(x.isRectAreaLight){const _=r.rectArea[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(v),a.identity(),o.copy(x.matrixWorld),o.premultiply(v),a.extractRotation(o),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(x.isPointLight){const _=r.point[l];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(v),l++}else if(x.isHemisphereLight){const _=r.hemi[m];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(v),m++}}}return{setup:c,setupView:f,state:r}}function ya(s,e){const t=new Wd(s,e),n=[],r=[];function i(){n.length=0,r.length=0}function o(p){n.push(p)}function a(p){r.push(p)}function c(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a}}function Xd(s,e){let t=new WeakMap;function n(i,o=0){let a;return t.has(i)===!1?(a=new ya(s,e),t.set(i,[a])):o>=t.get(i).length?(a=new ya(s,e),t.get(i).push(a)):a=t.get(i)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class qd extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $d extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Zd=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Kd(s,e,t){let n=new Fa;const r=new Oe,i=new Oe,o=new tt,a=new qd({depthPacking:sl}),c=new $d,f={},u=t.maxTextureSize,p={0:bt,1:an,2:Vi},h=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Yd,fragmentShader:Zd}),l=h.clone();l.defines.HORIZONTAL_PASS=1;const g=new xi;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Vt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca,this.render=function(x,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),A=s.state;A.setBlending(Jt),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let T=0,D=x.length;T<D;T++){const F=x[T],P=F.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const O=P.getFrameExtents();if(r.multiply(O),i.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(i.x=Math.floor(u/O.x),r.x=i.x*O.x,P.mapSize.x=i.x),r.y>u&&(i.y=Math.floor(u/O.y),r.y=i.y*O.y,P.mapSize.y=i.y)),P.map===null&&!P.isPointLightShadow&&this.type===en&&(P.map=new Qt(r.x,r.y),P.map.texture.name=F.name+".shadowMap",P.mapPass=new Qt(r.x,r.y),P.camera.updateProjectionMatrix()),P.map===null){const H={minFilter:ot,magFilter:ot,format:wt};P.map=new Qt(r.x,r.y,H),P.map.texture.name=F.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const N=P.getViewportCount();for(let H=0;H<N;H++){const k=P.getViewport(H);o.set(i.x*k.x,i.y*k.y,i.x*k.z,i.y*k.w),A.viewport(o),P.updateMatrices(F,H),n=P.getFrustum(),b(_,S,P.camera,F,this.type)}!P.isPointLightShadow&&this.type===en&&v(P,S),P.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(M,y,w)};function v(x,_){const S=e.update(d);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,l.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,l.needsUpdate=!0),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(_,null,S,h,d,null),l.uniforms.shadow_pass.value=x.mapPass.texture,l.uniforms.resolution.value=x.mapSize,l.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(_,null,S,l,d,null)}function E(x,_,S,M,y,w){let A=null;const T=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(T!==void 0?A=T:A=S.isPointLight===!0?c:a,s.localClippingEnabled&&_.clipShadows===!0&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0){const D=A.uuid,F=_.uuid;let P=f[D];P===void 0&&(P={},f[D]=P);let O=P[F];O===void 0&&(O=A.clone(),P[F]=O),A=O}return A.visible=_.visible,A.wireframe=_.wireframe,w===en?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:p[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaTest,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(S.matrixWorld),A.nearDistance=M,A.farDistance=y),A}function b(x,_,S,M,y){if(x.visible===!1)return;if(x.layers.test(_.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===en)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);const T=e.update(x),D=x.material;if(Array.isArray(D)){const F=T.groups;for(let P=0,O=F.length;P<O;P++){const N=F[P],H=D[N.materialIndex];if(H&&H.visible){const k=E(x,H,M,S.near,S.far,y);s.renderBufferDirect(S,null,T,k,x,N)}}}else if(D.visible){const F=E(x,D,M,S.near,S.far,y);s.renderBufferDirect(S,null,T,F,x,null)}}const A=x.children;for(let T=0,D=A.length;T<D;T++)b(A[T],_,S,M,y)}}function jd(s,e,t){const n=t.isWebGL2;function r(){let I=!1;const re=new tt;let ne=null;const pe=new tt(0,0,0,0);return{setMask:function(he){ne!==he&&!I&&(s.colorMask(he,he,he,he),ne=he)},setLocked:function(he){I=he},setClear:function(he,xe,te,_e,Ie){Ie===!0&&(he*=_e,xe*=_e,te*=_e),re.set(he,xe,te,_e),pe.equals(re)===!1&&(s.clearColor(he,xe,te,_e),pe.copy(re))},reset:function(){I=!1,ne=null,pe.set(-1,0,0,0)}}}function i(){let I=!1,re=null,ne=null,pe=null;return{setTest:function(he){he?ue(s.DEPTH_TEST):U(s.DEPTH_TEST)},setMask:function(he){re!==he&&!I&&(s.depthMask(he),re=he)},setFunc:function(he){if(ne!==he){if(he)switch(he){case Co:s.depthFunc(s.NEVER);break;case Ro:s.depthFunc(s.ALWAYS);break;case Lo:s.depthFunc(s.LESS);break;case Nr:s.depthFunc(s.LEQUAL);break;case Po:s.depthFunc(s.EQUAL);break;case Do:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Fo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}else s.depthFunc(s.LEQUAL);ne=he}},setLocked:function(he){I=he},setClear:function(he){pe!==he&&(s.clearDepth(he),pe=he)},reset:function(){I=!1,re=null,ne=null,pe=null}}}function o(){let I=!1,re=null,ne=null,pe=null,he=null,xe=null,te=null,_e=null,Ie=null;return{setTest:function(Fe){I||(Fe?ue(s.STENCIL_TEST):U(s.STENCIL_TEST))},setMask:function(Fe){re!==Fe&&!I&&(s.stencilMask(Fe),re=Fe)},setFunc:function(Fe,nt,At){(ne!==Fe||pe!==nt||he!==At)&&(s.stencilFunc(Fe,nt,At),ne=Fe,pe=nt,he=At)},setOp:function(Fe,nt,At){(xe!==Fe||te!==nt||_e!==At)&&(s.stencilOp(Fe,nt,At),xe=Fe,te=nt,_e=At)},setLocked:function(Fe){I=Fe},setClear:function(Fe){Ie!==Fe&&(s.clearStencil(Fe),Ie=Fe)},reset:function(){I=!1,re=null,ne=null,pe=null,he=null,xe=null,te=null,_e=null,Ie=null}}}const a=new r,c=new i,f=new o;let u={},p={},h=new WeakMap,l=[],g=null,d=!1,m=null,v=null,E=null,b=null,x=null,_=null,S=null,M=!1,y=null,w=null,A=null,T=null,D=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,O=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(N)[1]),P=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),P=O>=2);let H=null,k={};const B=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),j=new tt().fromArray(B),Z=new tt().fromArray(W);function K(I,re,ne){const pe=new Uint8Array(4),he=s.createTexture();s.bindTexture(I,he),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<ne;xe++)s.texImage2D(re+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return he}const ae={};ae[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ue(s.DEPTH_TEST),c.setFunc(Nr),He(!1),Ke(cs),ue(s.CULL_FACE),me(Jt);function ue(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function U(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function be(I,re){return p[I]!==re?(s.bindFramebuffer(I,re),p[I]=re,n&&(I===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=re),I===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=re)),!0):!1}function Se(I,re){let ne=l,pe=!1;if(I)if(ne=h.get(re),ne===void 0&&(ne=[],h.set(re,ne)),I.isWebGLMultipleRenderTargets){const he=I.texture;if(ne.length!==he.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,te=he.length;xe<te;xe++)ne[xe]=s.COLOR_ATTACHMENT0+xe;ne.length=he.length,pe=!0}}else ne[0]!==s.COLOR_ATTACHMENT0&&(ne[0]=s.COLOR_ATTACHMENT0,pe=!0);else ne[0]!==s.BACK&&(ne[0]=s.BACK,pe=!0);pe&&(t.isWebGL2?s.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function ye(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const oe={[Ui]:s.FUNC_ADD,[vo]:s.FUNC_SUBTRACT,[xo]:s.FUNC_REVERSE_SUBTRACT};if(n)oe[fs]=s.MIN,oe[ps]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(oe[fs]=I.MIN_EXT,oe[ps]=I.MAX_EXT)}const Ce={[_o]:s.ZERO,[yo]:s.ONE,[So]:s.SRC_COLOR,[Ra]:s.SRC_ALPHA,[Ao]:s.SRC_ALPHA_SATURATE,[bo]:s.DST_COLOR,[Eo]:s.DST_ALPHA,[Mo]:s.ONE_MINUS_SRC_COLOR,[La]:s.ONE_MINUS_SRC_ALPHA,[To]:s.ONE_MINUS_DST_COLOR,[wo]:s.ONE_MINUS_DST_ALPHA};function me(I,re,ne,pe,he,xe,te,_e){if(I===Jt){d===!0&&(U(s.BLEND),d=!1);return}if(d===!1&&(ue(s.BLEND),d=!0),I!==go){if(I!==m||_e!==M){if((v!==Ui||x!==Ui)&&(s.blendEquation(s.FUNC_ADD),v=Ui,x=Ui),_e)switch(I){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case us:s.blendFunc(s.ONE,s.ONE);break;case hs:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ds:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case us:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hs:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ds:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,_=null,S=null,m=I,M=_e}return}he=he||re,xe=xe||ne,te=te||pe,(re!==v||he!==x)&&(s.blendEquationSeparate(oe[re],oe[he]),v=re,x=he),(ne!==E||pe!==b||xe!==_||te!==S)&&(s.blendFuncSeparate(Ce[ne],Ce[pe],Ce[xe],Ce[te]),E=ne,b=pe,_=xe,S=te),m=I,M=null}function ge(I,re){I.side===Vi?U(s.CULL_FACE):ue(s.CULL_FACE);let ne=I.side===bt;re&&(ne=!ne),He(ne),I.blending===Gi&&I.transparent===!1?me(Jt):me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const pe=I.stencilWrite;f.setTest(pe),pe&&(f.setMask(I.stencilWriteMask),f.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),f.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):U(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function Ke(I){I!==ho?(ue(s.CULL_FACE),I!==w&&(I===cs?s.cullFace(s.BACK):I===fo?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):U(s.CULL_FACE),w=I}function Je(I){I!==A&&(P&&s.lineWidth(I),A=I)}function lt(I,re,ne){I?(ue(s.POLYGON_OFFSET_FILL),(T!==re||D!==ne)&&(s.polygonOffset(re,ne),T=re,D=ne)):U(s.POLYGON_OFFSET_FILL)}function Ve(I){I?ue(s.SCISSOR_TEST):U(s.SCISSOR_TEST)}function Le(I){I===void 0&&(I=s.TEXTURE0+F-1),H!==I&&(s.activeTexture(I),H=I)}function vt(I,re){H===null&&Le();let ne=k[H];ne===void 0&&(ne={type:void 0,texture:void 0},k[H]=ne),(ne.type!==I||ne.texture!==re)&&(s.bindTexture(I,re||ae[I]),ne.type=I,ne.texture=re)}function xt(){const I=k[H];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function L(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(I){j.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),j.copy(I))}function de(I){Z.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},H=null,k={},p={},h=new WeakMap,l=[],g=null,d=!1,m=null,v=null,E=null,b=null,x=null,_=null,S=null,M=!1,y=null,w=null,A=null,T=null,D=null,j.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:ue,disable:U,bindFramebuffer:be,drawBuffers:Se,useProgram:ye,setBlending:me,setMaterial:ge,setFlipSided:He,setCullFace:Ke,setLineWidth:Je,setPolygonOffset:lt,setScissorTest:Ve,activeTexture:Le,bindTexture:vt,unbindTexture:xt,compressedTexImage2D:L,texImage2D:Me,texImage3D:q,texStorage2D:ie,texStorage3D:le,texSubImage2D:C,texSubImage3D:$,compressedTexSubImage2D:ee,scissor:fe,viewport:de,reset:ce}}function Jd(s,e,t,n,r,i,o){const a=r.isWebGL2,c=r.maxTextures,f=r.maxCubemapSize,u=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,C){return v?new OffscreenCanvas(L,C):ln("canvas")}function b(L,C,$,ee){let ie=1;if((L.width>ee||L.height>ee)&&(ie=ee/Math.max(L.width,L.height)),ie<1||C===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const le=C?Hr:Math.floor,Me=le(ie*L.width),q=le(ie*L.height);d===void 0&&(d=E(Me,q));const fe=$?E(Me,q):d;return fe.width=Me,fe.height=q,fe.getContext("2d").drawImage(L,0,0,Me,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Me+"x"+q+")."),fe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return Hs(L.width)&&Hs(L.height)}function _(L){return a?!1:L.wrapS!==Et||L.wrapT!==Et||L.minFilter!==ot&&L.minFilter!==pt}function S(L,C){return L.generateMipmaps&&C&&L.minFilter!==ot&&L.minFilter!==pt}function M(L){s.generateMipmap(L)}function y(L,C,$,ee,ie=!1){if(a===!1)return C;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=C;return C===s.RED&&($===s.FLOAT&&(le=s.R32F),$===s.HALF_FLOAT&&(le=s.R16F),$===s.UNSIGNED_BYTE&&(le=s.R8)),C===s.RG&&($===s.FLOAT&&(le=s.RG32F),$===s.HALF_FLOAT&&(le=s.RG16F),$===s.UNSIGNED_BYTE&&(le=s.RG8)),C===s.RGBA&&($===s.FLOAT&&(le=s.RGBA32F),$===s.HALF_FLOAT&&(le=s.RGBA16F),$===s.UNSIGNED_BYTE&&(le=ee===Be&&ie===!1?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)),(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function w(L,C,$){return S(L,$)===!0||L.isFramebufferTexture&&L.minFilter!==ot&&L.minFilter!==pt?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function A(L){return L===ot||L===ms||L===gs?s.NEAREST:s.LINEAR}function T(L){const C=L.target;C.removeEventListener("dispose",T),F(C),C.isVideoTexture&&g.delete(C)}function D(L){const C=L.target;C.removeEventListener("dispose",D),O(C)}function F(L){const C=n.get(L);if(C.__webglInit===void 0)return;const $=L.source,ee=m.get($);if(ee){const ie=ee[C.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(L),Object.keys(ee).length===0&&m.delete($)}n.remove(L)}function P(L){const C=n.get(L);s.deleteTexture(C.__webglTexture);const $=L.source,ee=m.get($);delete ee[C.__cacheKey],o.memory.textures--}function O(L){const C=L.texture,$=n.get(L),ee=n.get(C);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer($.__webglFramebuffer[ie]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ie=0;ie<$.__webglColorRenderbuffer.length;ie++)$.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[ie]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ie=0,le=C.length;ie<le;ie++){const Me=n.get(C[ie]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(C[ie])}n.remove(C),n.remove(L)}let N=0;function H(){N=0}function k(){const L=N;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),N+=1,L}function B(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.encoding),C.join()}function W(L,C){const $=n.get(L);if(L.isVideoTexture&&vt(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se($,L,C);return}}t.activeTexture(s.TEXTURE0+C),t.bindTexture(s.TEXTURE_2D,$.__webglTexture)}function j(L,C){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Se($,L,C);return}t.activeTexture(s.TEXTURE0+C),t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture)}function Z(L,C){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Se($,L,C);return}t.activeTexture(s.TEXTURE0+C),t.bindTexture(s.TEXTURE_3D,$.__webglTexture)}function K(L,C){const $=n.get(L);if(L.version>0&&$.__version!==L.version){ye($,L,C);return}t.activeTexture(s.TEXTURE0+C),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture)}const ae={[Br]:s.REPEAT,[Et]:s.CLAMP_TO_EDGE,[zr]:s.MIRRORED_REPEAT},ue={[ot]:s.NEAREST,[ms]:s.NEAREST_MIPMAP_NEAREST,[gs]:s.NEAREST_MIPMAP_LINEAR,[pt]:s.LINEAR,[Vo]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR};function U(L,C,$){if($?(s.texParameteri(L,s.TEXTURE_WRAP_S,ae[C.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ae[C.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ae[C.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ue[C.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ue[C.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==Et||C.wrapT!==Et)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,A(C.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,A(C.minFilter)),C.minFilter!==ot&&C.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(C.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===on&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(s.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function be(L,C){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",T));const ee=C.source;let ie=m.get(ee);ie===void 0&&(ie={},m.set(ee,ie));const le=B(C);if(le!==L.__cacheKey){ie[le]===void 0&&(ie[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ie[le].usedTimes++;const Me=ie[L.__cacheKey];Me!==void 0&&(ie[L.__cacheKey].usedTimes--,Me.usedTimes===0&&P(C)),L.__cacheKey=le,L.__webglTexture=ie[le].texture}return $}function Se(L,C,$){let ee=s.TEXTURE_2D;C.isDataArrayTexture&&(ee=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ee=s.TEXTURE_3D);const ie=be(L,C),le=C.source;if(t.activeTexture(s.TEXTURE0+$),t.bindTexture(ee,L.__webglTexture),le.version!==le.__currentVersion||ie===!0){s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Me=_(C)&&x(C.image)===!1;let q=b(C.image,Me,!1,u);q=xt(C,q);const fe=x(q)||a,de=i.convert(C.format,C.encoding);let ce=i.convert(C.type),I=y(C.internalFormat,de,ce,C.encoding,C.isVideoTexture);U(ee,C,fe);let re;const ne=C.mipmaps,pe=a&&C.isVideoTexture!==!0,he=le.__currentVersion===void 0||ie===!0,xe=w(C,q,fe);if(C.isDepthTexture)I=s.DEPTH_COMPONENT,a?C.type===ci?I=s.DEPTH_COMPONENT32F:C.type===li?I=s.DEPTH_COMPONENT24:C.type===Hi?I=s.DEPTH24_STENCIL8:I=s.DEPTH_COMPONENT16:C.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===di&&I===s.DEPTH_COMPONENT&&C.type!==Ia&&C.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=li,ce=i.convert(C.type)),C.format===Xi&&I===s.DEPTH_COMPONENT&&(I=s.DEPTH_STENCIL,C.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Hi,ce=i.convert(C.type))),he&&(pe?t.texStorage2D(s.TEXTURE_2D,1,I,q.width,q.height):t.texImage2D(s.TEXTURE_2D,0,I,q.width,q.height,0,de,ce,null));else if(C.isDataTexture)if(ne.length>0&&fe){pe&&he&&t.texStorage2D(s.TEXTURE_2D,xe,I,ne[0].width,ne[0].height);for(let te=0,_e=ne.length;te<_e;te++)re=ne[te],pe?t.texSubImage2D(s.TEXTURE_2D,te,0,0,re.width,re.height,de,ce,re.data):t.texImage2D(s.TEXTURE_2D,te,I,re.width,re.height,0,de,ce,re.data);C.generateMipmaps=!1}else pe?(he&&t.texStorage2D(s.TEXTURE_2D,xe,I,q.width,q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,q.width,q.height,de,ce,q.data)):t.texImage2D(s.TEXTURE_2D,0,I,q.width,q.height,0,de,ce,q.data);else if(C.isCompressedTexture){pe&&he&&t.texStorage2D(s.TEXTURE_2D,xe,I,ne[0].width,ne[0].height);for(let te=0,_e=ne.length;te<_e;te++)re=ne[te],C.format!==wt?de!==null?pe?t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,re.width,re.height,de,re.data):t.compressedTexImage2D(s.TEXTURE_2D,te,I,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(s.TEXTURE_2D,te,0,0,re.width,re.height,de,ce,re.data):t.texImage2D(s.TEXTURE_2D,te,I,re.width,re.height,0,de,ce,re.data)}else if(C.isDataArrayTexture)pe?(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,I,q.width,q.height,q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,de,ce,q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,I,q.width,q.height,q.depth,0,de,ce,q.data);else if(C.isData3DTexture)pe?(he&&t.texStorage3D(s.TEXTURE_3D,xe,I,q.width,q.height,q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,de,ce,q.data)):t.texImage3D(s.TEXTURE_3D,0,I,q.width,q.height,q.depth,0,de,ce,q.data);else if(C.isFramebufferTexture){if(he)if(pe)t.texStorage2D(s.TEXTURE_2D,xe,I,q.width,q.height);else{let te=q.width,_e=q.height;for(let Ie=0;Ie<xe;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,I,te,_e,0,de,ce,null),te>>=1,_e>>=1}}else if(ne.length>0&&fe){pe&&he&&t.texStorage2D(s.TEXTURE_2D,xe,I,ne[0].width,ne[0].height);for(let te=0,_e=ne.length;te<_e;te++)re=ne[te],pe?t.texSubImage2D(s.TEXTURE_2D,te,0,0,de,ce,re):t.texImage2D(s.TEXTURE_2D,te,I,de,ce,re);C.generateMipmaps=!1}else pe?(he&&t.texStorage2D(s.TEXTURE_2D,xe,I,q.width,q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,ce,q)):t.texImage2D(s.TEXTURE_2D,0,I,de,ce,q);S(C,fe)&&M(ee),le.__currentVersion=le.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function ye(L,C,$){if(C.image.length!==6)return;const ee=be(L,C),ie=C.source;if(t.activeTexture(s.TEXTURE0+$),t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture),ie.version!==ie.__currentVersion||ee===!0){s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const le=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,q=[];for(let te=0;te<6;te++)!le&&!Me?q[te]=b(C.image[te],!1,!0,f):q[te]=Me?C.image[te].image:C.image[te],q[te]=xt(C,q[te]);const fe=q[0],de=x(fe)||a,ce=i.convert(C.format,C.encoding),I=i.convert(C.type),re=y(C.internalFormat,ce,I,C.encoding),ne=a&&C.isVideoTexture!==!0,pe=ie.__currentVersion===void 0||ee===!0;let he=w(C,fe,de);U(s.TEXTURE_CUBE_MAP,C,de);let xe;if(le){ne&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,re,fe.width,fe.height);for(let te=0;te<6;te++){xe=q[te].mipmaps;for(let _e=0;_e<xe.length;_e++){const Ie=xe[_e];C.format!==wt?ce!==null?ne?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,Ie.width,Ie.height,ce,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,re,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,Ie.width,Ie.height,ce,I,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,re,Ie.width,Ie.height,0,ce,I,Ie.data)}}}else{xe=C.mipmaps,ne&&pe&&(xe.length>0&&he++,t.texStorage2D(s.TEXTURE_CUBE_MAP,he,re,q[0].width,q[0].height));for(let te=0;te<6;te++)if(Me){ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,q[te].width,q[te].height,ce,I,q[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,re,q[te].width,q[te].height,0,ce,I,q[te].data);for(let _e=0;_e<xe.length;_e++){const Fe=xe[_e].image[te].image;ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,Fe.width,Fe.height,ce,I,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,re,Fe.width,Fe.height,0,ce,I,Fe.data)}}else{ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce,I,q[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,re,ce,I,q[te]);for(let _e=0;_e<xe.length;_e++){const Ie=xe[_e];ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,ce,I,Ie.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,re,ce,I,Ie.image[te])}}}S(C,de)&&M(s.TEXTURE_CUBE_MAP),ie.__currentVersion=ie.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function oe(L,C,$,ee,ie){const le=i.convert($.format,$.encoding),Me=i.convert($.type),q=y($.internalFormat,le,Me,$.encoding);n.get(C).__hasExternalTextures||(ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,q,C.width,C.height,C.depth,0,le,Me,null):t.texImage2D(ie,0,q,C.width,C.height,0,le,Me,null)),t.bindFramebuffer(s.FRAMEBUFFER,L),Le(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ie,n.get($).__webglTexture,0,Ve(C)):s.framebufferTexture2D(s.FRAMEBUFFER,ee,ie,n.get($).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(L,C,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),C.depthBuffer&&!C.stencilBuffer){let ee=s.DEPTH_COMPONENT16;if($||Le(C)){const ie=C.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ci?ee=s.DEPTH_COMPONENT32F:ie.type===li&&(ee=s.DEPTH_COMPONENT24));const le=Ve(C);Le(C)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,ee,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,le,ee,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(C.depthBuffer&&C.stencilBuffer){const ee=Ve(C);$&&Le(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,C.width,C.height):Le(C)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const ee=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0;ie<ee.length;ie++){const le=ee[ie],Me=i.convert(le.format,le.encoding),q=i.convert(le.type),fe=y(le.internalFormat,Me,q,le.encoding),de=Ve(C);$&&Le(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,fe,C.width,C.height):Le(C)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,fe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,fe,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),W(C.depthTexture,0);const ee=n.get(C.depthTexture).__webglTexture,ie=Ve(C);if(C.depthTexture.format===di)Le(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(C.depthTexture.format===Xi)Le(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ge(L){const C=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");me(C.__webglFramebuffer,L)}else if($){C.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ee]),C.__webglDepthbuffer[ee]=s.createRenderbuffer(),Ce(C.__webglDepthbuffer[ee],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Ce(C.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(L,C,$){const ee=n.get(L);C!==void 0&&oe(ee.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),$!==void 0&&ge(L)}function Ke(L){const C=L.texture,$=n.get(L),ee=n.get(C);L.addEventListener("dispose",D),L.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=C.version,o.memory.textures++);const ie=L.isWebGLCubeRenderTarget===!0,le=L.isWebGLMultipleRenderTargets===!0,Me=x(L)||a;if(ie){$.__webglFramebuffer=[];for(let q=0;q<6;q++)$.__webglFramebuffer[q]=s.createFramebuffer()}else{if($.__webglFramebuffer=s.createFramebuffer(),le)if(r.drawBuffers){const q=L.texture;for(let fe=0,de=q.length;fe<de;fe++){const ce=n.get(q[fe]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Le(L)===!1){const q=le?C:[C];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<q.length;fe++){const de=q[fe];$.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const ce=i.convert(de.format,de.encoding),I=i.convert(de.type),re=y(de.internalFormat,ce,I,de.encoding),ne=Ve(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,re,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),U(s.TEXTURE_CUBE_MAP,C,Me);for(let q=0;q<6;q++)oe($.__webglFramebuffer[q],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q);S(C,Me)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const q=L.texture;for(let fe=0,de=q.length;fe<de;fe++){const ce=q[fe],I=n.get(ce);t.bindTexture(s.TEXTURE_2D,I.__webglTexture),U(s.TEXTURE_2D,ce,Me),oe($.__webglFramebuffer,L,ce,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D),S(ce,Me)&&M(s.TEXTURE_2D)}t.unbindTexture()}else{let q=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?q=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(q,ee.__webglTexture),U(q,C,Me),oe($.__webglFramebuffer,L,C,s.COLOR_ATTACHMENT0,q),S(C,Me)&&M(q),t.unbindTexture()}L.depthBuffer&&ge(L)}function Je(L){const C=x(L)||a,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ee=0,ie=$.length;ee<ie;ee++){const le=$[ee];if(S(le,C)){const Me=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,q=n.get(le).__webglTexture;t.bindTexture(Me,q),M(Me),t.unbindTexture()}}}function lt(L){if(a&&L.samples>0&&Le(L)===!1){const C=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],$=L.width,ee=L.height;let ie=s.COLOR_BUFFER_BIT;const le=[],Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=n.get(L),fe=L.isWebGLMultipleRenderTargets===!0;if(fe)for(let de=0;de<C.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let de=0;de<C.length;de++){le.push(s.COLOR_ATTACHMENT0+de),L.depthBuffer&&le.push(Me);const ce=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(ce===!1&&(L.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,q.__webglColorRenderbuffer[de]),ce===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Me])),fe){const I=n.get(C[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,$,ee,0,0,$,ee,ie,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let de=0;de<C.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,q.__webglColorRenderbuffer[de]);const ce=n.get(C[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,ce,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}}function Ve(L){return Math.min(p,L.samples)}function Le(L){const C=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function vt(L){const C=o.render.frame;g.get(L)!==C&&(g.set(L,C),L.update())}function xt(L,C){const $=L.encoding,ee=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Gr||$!==gi&&($===Be?a===!1?e.has("EXT_sRGB")===!0&&ee===wt?(L.format=Gr,L.minFilter=pt,L.generateMipmaps=!1):C=Ha.sRGBToLinear(C):(ee!==wt||ie!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),C}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=K,this.rebindTextures=He,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Le}function Qd(s,e,t){const n=t.isWebGL2;function r(i,o=null){let a;if(i===mi)return s.UNSIGNED_BYTE;if(i===qo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return s.UNSIGNED_SHORT_5_5_5_1;if(i===ko)return s.BYTE;if(i===Wo)return s.SHORT;if(i===Ia)return s.UNSIGNED_SHORT;if(i===Xo)return s.INT;if(i===li)return s.UNSIGNED_INT;if(i===ci)return s.FLOAT;if(i===on)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===Yo)return s.ALPHA;if(i===wt)return s.RGBA;if(i===Ko)return s.LUMINANCE;if(i===jo)return s.LUMINANCE_ALPHA;if(i===di)return s.DEPTH_COMPONENT;if(i===Xi)return s.DEPTH_STENCIL;if(i===Jo)return s.RED;if(i===Zo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),s.RGBA;if(i===Gr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===Qo)return s.RED_INTEGER;if(i===el)return s.RG;if(i===tl)return s.RG_INTEGER;if(i===il)return s.RGBA_INTEGER;if(i===Qn||i===er||i===tr||i===ir)if(o===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Qn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Qn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===er)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ir)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vs||i===xs||i===_s||i===ys)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===vs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_s)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ys)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Ss||i===Ms)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ss)return o===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ms)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Es||i===ws||i===bs||i===Ts||i===As||i===Cs||i===Rs||i===Ls||i===Ps||i===Ds||i===Is||i===Fs||i===Ns||i===Us)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Es)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ws)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ts)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===As)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ls)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ps)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ds)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Is)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ns)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Us)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Os)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Os)return o===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return i===Hi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}return{convert:r}}class ef extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class On extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tf={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,o=null;const a=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tf))),f&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n);if(f.joints[d.jointName]===void 0){const E=new On;E.matrixAutoUpdate=!1,E.visible=!1,f.joints[d.jointName]=E,f.add(E)}const v=f.joints[d.jointName];m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const u=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],h=u.position.distanceTo(p.position),l=.02,g=.005;f.inputState.pinching&&h>l+g?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&h<=l-g&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=i!==null),f!==null&&(f.visible=o!==null),this}}class nf extends dt{constructor(e,t,n,r,i,o,a,c,f,u){if(u=u!==void 0?u:di,u!==di&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===di&&(n=li),n===void 0&&u===Xi&&(n=Hi),super(null,r,i,o,a,c,u,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ot,this.minFilter=c!==void 0?c:ot,this.flipY=!1,this.generateMipmaps=!1}}class rf extends $i{constructor(e,t){super();const n=this;let r=null,i=1,o=null,a="local-floor",c=null,f=null,u=null,p=null,h=null,l=null;const g=t.getContextAttributes();let d=null,m=null;const v=[],E=new Map,b=new mt;b.layers.enable(1),b.viewport=new tt;const x=new mt;x.layers.enable(2),x.viewport=new tt;const _=[b,x],S=new ef;S.layers.enable(1),S.layers.enable(2);let M=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=v[B];return W===void 0&&(W=new Pr,v[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=v[B];return W===void 0&&(W=new Pr,v[B]=W),W.getGripSpace()},this.getHand=function(B){let W=v[B];return W===void 0&&(W=new Pr,v[B]=W),W.getHandSpace()};function w(B){const W=E.get(B.inputSource);W!==void 0&&W.dispatchEvent({type:B.type,data:B.inputSource})}function A(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",T),E.forEach(function(B,W){B!==void 0&&B.disconnect(W)}),E.clear(),M=null,y=null,e.setRenderTarget(d),h=null,p=null,u=null,r=null,m=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){i=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return u},this.getFrame=function(){return l},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",A),r.addEventListener("inputsourceschange",T),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:i};h=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:h}),m=new Qt(h.framebufferWidth,h.framebufferHeight,{format:wt,type:mi,encoding:e.outputEncoding})}else{let W=null,j=null,Z=null;g.depth&&(Z=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=g.stencil?Xi:di,j=g.stencil?Hi:li);const K={colorFormat:e.outputEncoding===Be?t.SRGB8_ALPHA8:t.RGBA8,depthFormat:Z,scaleFactor:i};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(K),r.updateRenderState({layers:[p]}),m=new Qt(p.textureWidth,p.textureHeight,{format:wt,type:mi,depthTexture:new nf(p.textureWidth,p.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ae=e.properties.get(m);ae.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),k.setContext(r),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function T(B){const W=r.inputSources;for(let j=0;j<W.length;j++){const Z=W[j].handedness==="right"?1:0;E.set(W[j],v[Z])}for(let j=0;j<B.removed.length;j++){const Z=B.removed[j],K=E.get(Z);K&&(K.dispatchEvent({type:"disconnected",data:Z}),E.delete(Z))}for(let j=0;j<B.added.length;j++){const Z=B.added[j],K=E.get(Z);K&&K.dispatchEvent({type:"connected",data:Z})}}const D=new G,F=new G;function P(B,W,j){D.setFromMatrixPosition(W.matrixWorld),F.setFromMatrixPosition(j.matrixWorld);const Z=D.distanceTo(F),K=W.projectionMatrix.elements,ae=j.projectionMatrix.elements,ue=K[14]/(K[10]-1),U=K[14]/(K[10]+1),be=(K[9]+1)/K[5],Se=(K[9]-1)/K[5],ye=(K[8]-1)/K[0],oe=(ae[8]+1)/ae[0],Ce=ue*ye,me=ue*oe,ge=Z/(-ye+oe),He=ge*-ye;W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(He),B.translateZ(ge),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ke=ue+ge,Je=U+ge,lt=Ce-He,Ve=me+(Z-He),Le=be*U/Je*Ke,vt=Se*U/Je*Ke;B.projectionMatrix.makePerspective(lt,Ve,Le,vt,Ke,Je)}function O(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;S.near=x.near=b.near=B.near,S.far=x.far=b.far=B.far,(M!==S.near||y!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,y=S.far);const W=B.parent,j=S.cameras;O(S,W);for(let K=0;K<j.length;K++)O(j[K],W);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),B.position.copy(S.position),B.quaternion.copy(S.quaternion),B.scale.copy(S.scale),B.matrix.copy(S.matrix),B.matrixWorld.copy(S.matrixWorld);const Z=B.children;for(let K=0,ae=Z.length;K<ae;K++)Z[K].updateMatrixWorld(!0);j.length===2?P(S,b,x):S.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){p!==null&&(p.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let N=null;function H(B,W){if(f=W.getViewerPose(c||o),l=W,f!==null){const Z=f.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let K=!1;Z.length!==S.cameras.length&&(S.cameras.length=0,K=!0);for(let ae=0;ae<Z.length;ae++){const ue=Z[ae];let U=null;if(h!==null)U=h.getViewport(ue);else{const Se=u.getViewSubImage(p,ue);U=Se.viewport,ae===0&&(e.setRenderTargetTextures(m,Se.colorTexture,p.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(m))}let be=_[ae];be===void 0&&(be=new mt,be.layers.enable(ae),be.viewport=new tt,_[ae]=be),be.matrix.fromArray(ue.transform.matrix),be.projectionMatrix.fromArray(ue.projectionMatrix),be.viewport.set(U.x,U.y,U.width,U.height),ae===0&&S.matrix.copy(be.matrix),K===!0&&S.cameras.push(be)}}const j=r.inputSources;for(let Z=0;Z<v.length;Z++){const K=j[Z],ae=E.get(K);ae!==void 0&&ae.update(K,W,c||o)}N&&N(B,W),l=null}const k=new Na;k.setAnimationLoop(H),this.setAnimationLoop=function(B){N=B},this.dispose=function(){}}}function sf(s,e){function t(d,m){d.fogColor.value.copy(m.color),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,v,E,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),f(d,m)):m.isMeshStandardMaterial?(r(d,m),p(d,m),m.isMeshPhysicalMaterial&&h(d,m,b)):m.isMeshMatcapMaterial?(r(d,m),l(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(i(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,v,E):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===bt&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===bt&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const x=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let E;m.map?E=m.map:m.specularMap?E=m.specularMap:m.displacementMap?E=m.displacementMap:m.normalMap?E=m.normalMap:m.bumpMap?E=m.bumpMap:m.roughnessMap?E=m.roughnessMap:m.metalnessMap?E=m.metalnessMap:m.alphaMap?E=m.alphaMap:m.emissiveMap?E=m.emissiveMap:m.clearcoatMap?E=m.clearcoatMap:m.clearcoatNormalMap?E=m.clearcoatNormalMap:m.clearcoatRoughnessMap?E=m.clearcoatRoughnessMap:m.iridescenceMap?E=m.iridescenceMap:m.iridescenceThicknessMap?E=m.iridescenceThicknessMap:m.specularIntensityMap?E=m.specularIntensityMap:m.specularColorMap?E=m.specularColorMap:m.transmissionMap?E=m.transmissionMap:m.thicknessMap?E=m.thicknessMap:m.sheenColorMap?E=m.sheenColorMap:m.sheenRoughnessMap&&(E=m.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uvTransform.value.copy(E.matrix));let b;m.aoMap?b=m.aoMap:m.lightMap&&(b=m.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uv2Transform.value.copy(b.matrix))}function i(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,v,E){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=E*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix))}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function f(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function p(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,v){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===bt&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function l(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function af(){const s=ln("canvas");return s.style.display="block",s}function of(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:af(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,i=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",f=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let p=null,h=null;const l=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gi,this.physicallyCorrectLights=!1,this.toneMapping=kt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let m=!1,v=0,E=0,b=null,x=-1,_=null;const S=new tt,M=new tt;let y=null,w=e.width,A=e.height,T=1,D=null,F=null;const P=new tt(0,0,w,A),O=new tt(0,0,w,A);let N=!1;const H=new Fa;let k=!1,B=!1,W=null;const j=new it,Z=new Oe,K=new G,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return b===null?T:1}let U=t;function be(R,z){for(let X=0;X<R.length;X++){const V=R[X],Y=e.getContext(V,z);if(Y!==null)return Y}return null}try{const R={alpha:!0,depth:n,stencil:r,antialias:i,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uo}`),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",ne,!1),U===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),U=be(z,R),U===null)throw be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Se,ye,oe,Ce,me,ge,He,Ke,Je,lt,Ve,Le,vt,xt,L,C,$,ee,ie,le,Me,q,fe;function de(){Se=new mh(U),ye=new sh(U,Se,s),Se.init(ye),q=new Qd(U,Se,ye),oe=new jd(U,Se,ye),Ce=new xh(U),me=new Od,ge=new Jd(U,Se,oe,me,ye,q,Ce),He=new uh(d),Ke=new ph(d),Je=new ml(U,ye),fe=new nh(U,Se,Je,ye),lt=new gh(U,Je,Ce,fe),Ve=new Mh(U,lt,Je,Ce),ie=new Sh(U,ye,ge),C=new ah(me),Le=new Ud(d,He,Ke,Se,ye,fe,C),vt=new sf(d,me),xt=new zd,L=new Xd(Se,ye),ee=new ih(d,He,oe,Ve,u,o),$=new Kd(d,Ve,ye),le=new rh(U,Se,Ce,ye),Me=new vh(U,Se,Ce,ye),Ce.programs=Le.programs,d.capabilities=ye,d.extensions=Se,d.properties=me,d.renderLists=xt,d.shadowMap=$,d.state=oe,d.info=Ce}de();const ce=new rf(d,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(R){R!==void 0&&(T=R,this.setSize(w,A,!1))},this.getSize=function(R){return R.set(w,A)},this.setSize=function(R,z,X){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=R,A=z,e.width=Math.floor(R*T),e.height=Math.floor(z*T),X!==!1&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(w*T,A*T).floor()},this.setDrawingBufferSize=function(R,z,X){w=R,A=z,T=X,e.width=Math.floor(R*X),e.height=Math.floor(z*X),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,z,X,V){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,z,X,V),oe.viewport(S.copy(P).multiplyScalar(T).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,z,X,V){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,z,X,V),oe.scissor(M.copy(O).multiplyScalar(T).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(R){oe.setScissorTest(N=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){F=R},this.getClearColor=function(R){return R.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(R=!0,z=!0,X=!0){let V=0;R&&(V|=U.COLOR_BUFFER_BIT),z&&(V|=U.DEPTH_BUFFER_BIT),X&&(V|=U.STENCIL_BUFFER_BIT),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),xt.dispose(),L.dispose(),me.dispose(),He.dispose(),Ke.dispose(),Ve.dispose(),fe.dispose(),Le.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ie),ce.removeEventListener("sessionend",Fe),W&&(W.dispose(),W=null),nt.stop()};function I(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=Ce.autoReset,z=$.enabled,X=$.autoUpdate,V=$.needsUpdate,Y=$.type;de(),Ce.autoReset=R,$.enabled=z,$.autoUpdate=X,$.needsUpdate=V,$.type=Y}function ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const z=R.target;z.removeEventListener("dispose",pe),he(z)}function he(R){xe(R),me.remove(R)}function xe(R){const z=me.get(R).programs;z!==void 0&&(z.forEach(function(X){Le.releaseProgram(X)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,X,V,Y,ve){z===null&&(z=ae);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=eo(R,z,X,V,Y);oe.setMaterial(V,Ee);let we=X.index;const Ne=X.attributes.position;if(we===null){if(Ne===void 0||Ne.count===0)return}else if(we.count===0)return;let Re=1;V.wireframe===!0&&(we=lt.getWireframeAttribute(X),Re=2),fe.setup(Y,V,Te,X,we);let Pe,ze=le;we!==null&&(Pe=Je.get(we),ze=Me,ze.setIndex(Pe));const ei=we!==null?we.count:Ne.count,_i=X.drawRange.start*Re,yi=X.drawRange.count*Re,Ct=ve!==null?ve.start*Re:0,De=ve!==null?ve.count*Re:1/0,Si=Math.max(_i,Ct),ke=Math.min(ei,_i+yi,Ct+De)-1,Rt=Math.max(0,ke-Si+1);if(Rt!==0){if(Y.isMesh)V.wireframe===!0?(oe.setLineWidth(V.wireframeLinewidth*ue()),ze.setMode(U.LINES)):ze.setMode(U.TRIANGLES);else if(Y.isLine){let Wt=V.linewidth;Wt===void 0&&(Wt=1),oe.setLineWidth(Wt*ue()),Y.isLineSegments?ze.setMode(U.LINES):Y.isLineLoop?ze.setMode(U.LINE_LOOP):ze.setMode(U.LINE_STRIP)}else Y.isPoints?ze.setMode(U.POINTS):Y.isSprite&&ze.setMode(U.TRIANGLES);if(Y.isInstancedMesh)ze.renderInstances(Si,Rt,Y.count);else if(X.isInstancedBufferGeometry){const Wt=Math.min(X.instanceCount,X._maxInstanceCount);ze.renderInstances(Si,Rt,Wt)}else ze.render(Si,Rt)}},this.compile=function(R,z){h=L.get(R),h.init(),g.push(h),R.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights(d.physicallyCorrectLights),R.traverse(function(X){const V=X.material;if(V)if(Array.isArray(V))for(let Y=0;Y<V.length;Y++){const ve=V[Y];Zn(ve,R,X)}else Zn(V,R,X)}),g.pop(),h=null};let te=null;function _e(R){te&&te(R)}function Ie(){nt.stop()}function Fe(){nt.start()}const nt=new Na;nt.setAnimationLoop(_e),typeof self!="undefined"&&nt.setContext(self),this.setAnimationLoop=function(R){te=R,ce.setAnimationLoop(R),R===null?nt.stop():nt.start()},ce.addEventListener("sessionstart",Ie),ce.addEventListener("sessionend",Fe),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(d,R,z,b),h=L.get(R,g.length),h.init(),g.push(h),j.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),H.setFromProjectionMatrix(j),B=this.localClippingEnabled,k=C.init(this.clippingPlanes,B,z),p=xt.get(R,l.length),p.init(),l.push(p),At(R,z,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(D,F),k===!0&&C.beginShadows();const X=h.state.shadowsArray;if($.render(X,R,z),k===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(p,R),h.setupLights(d.physicallyCorrectLights),z.isArrayCamera){const V=z.cameras;for(let Y=0,ve=V.length;Y<ve;Y++){const Ee=V[Y];rs(p,R,Ee,Ee.viewport)}}else rs(p,R,z);b!==null&&(ge.updateMultisampleRenderTarget(b),ge.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(d,R,z),fe.resetDefaultState(),x=-1,_=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,l.pop(),l.length>0?p=l[l.length-1]:p=null};function At(R,z,X,V){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){V&&K.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);const Ee=Ve.update(R),Te=R.material;Te.visible&&p.push(R,Ee,Te,X,K.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Ce.render.frame&&(R.skeleton.update(),R.skeleton.frame=Ce.render.frame),!R.frustumCulled||H.intersectsObject(R))){V&&K.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);const Ee=Ve.update(R),Te=R.material;if(Array.isArray(Te)){const we=Ee.groups;for(let Ne=0,Re=we.length;Ne<Re;Ne++){const Pe=we[Ne],ze=Te[Pe.materialIndex];ze&&ze.visible&&p.push(R,Ee,ze,X,K.z,Pe)}}else Te.visible&&p.push(R,Ee,Te,X,K.z,null)}}const ve=R.children;for(let Ee=0,Te=ve.length;Ee<Te;Ee++)At(ve[Ee],z,X,V)}function rs(R,z,X,V){const Y=R.opaque,ve=R.transmissive,Ee=R.transparent;h.setupLightsView(X),ve.length>0&&Ja(Y,z,X),V&&oe.viewport(S.copy(V)),Y.length>0&&gn(Y,z,X),ve.length>0&&gn(ve,z,X),Ee.length>0&&gn(Ee,z,X),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ja(R,z,X){const V=ye.isWebGL2;W===null&&(W=new Qt(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?on:mi,minFilter:qn,samples:V&&i===!0?4:0})),d.getDrawingBufferSize(Z),V?W.setSize(Z.x,Z.y):W.setSize(Hr(Z.x),Hr(Z.y));const Y=d.getRenderTarget();d.setRenderTarget(W),d.clear();const ve=d.toneMapping;d.toneMapping=kt,gn(R,z,X),d.toneMapping=ve,ge.updateMultisampleRenderTarget(W),ge.updateRenderTargetMipmap(W),d.setRenderTarget(Y)}function gn(R,z,X){const V=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ve=R.length;Y<ve;Y++){const Ee=R[Y],Te=Ee.object,we=Ee.geometry,Ne=V===null?Ee.material:V,Re=Ee.group;Te.layers.test(X.layers)&&Qa(Te,z,X,we,Ne,Re)}}function Qa(R,z,X,V,Y,ve){R.onBeforeRender(d,z,X,V,Y,ve),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(d,z,X,V,R,ve),Y.transparent===!0&&Y.side===Vi?(Y.side=bt,Y.needsUpdate=!0,d.renderBufferDirect(X,z,V,Y,R,ve),Y.side=an,Y.needsUpdate=!0,d.renderBufferDirect(X,z,V,Y,R,ve),Y.side=Vi):d.renderBufferDirect(X,z,V,Y,R,ve),R.onAfterRender(d,z,X,V,Y,ve)}function Zn(R,z,X){z.isScene!==!0&&(z=ae);const V=me.get(R),Y=h.state.lights,ve=h.state.shadowsArray,Ee=Y.state.version,Te=Le.getParameters(R,Y.state,ve,z,X),we=Le.getProgramCacheKey(Te);let Ne=V.programs;V.environment=R.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(R.isMeshStandardMaterial?Ke:He).get(R.envMap||V.environment),Ne===void 0&&(R.addEventListener("dispose",pe),Ne=new Map,V.programs=Ne);let Re=Ne.get(we);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===Ee)return ss(R,Te),Re}else Te.uniforms=Le.getUniforms(R),R.onBuild(X,Te,d),R.onBeforeCompile(Te,d),Re=Le.acquireProgram(Te,we),Ne.set(we,Re),V.uniforms=Te.uniforms;const Pe=V.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=C.uniform),ss(R,Te),V.needsLights=io(R),V.lightsStateVersion=Ee,V.needsLights&&(Pe.ambientLightColor.value=Y.state.ambient,Pe.lightProbe.value=Y.state.probe,Pe.directionalLights.value=Y.state.directional,Pe.directionalLightShadows.value=Y.state.directionalShadow,Pe.spotLights.value=Y.state.spot,Pe.spotLightShadows.value=Y.state.spotShadow,Pe.rectAreaLights.value=Y.state.rectArea,Pe.ltc_1.value=Y.state.rectAreaLTC1,Pe.ltc_2.value=Y.state.rectAreaLTC2,Pe.pointLights.value=Y.state.point,Pe.pointLightShadows.value=Y.state.pointShadow,Pe.hemisphereLights.value=Y.state.hemi,Pe.directionalShadowMap.value=Y.state.directionalShadowMap,Pe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pe.spotShadowMap.value=Y.state.spotShadowMap,Pe.spotShadowMatrix.value=Y.state.spotShadowMatrix,Pe.pointShadowMap.value=Y.state.pointShadowMap,Pe.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ze=Re.getUniforms(),ei=Hn.seqWithValue(ze.seq,Pe);return V.currentProgram=Re,V.uniformsList=ei,Re}function ss(R,z){const X=me.get(R);X.outputEncoding=z.outputEncoding,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function eo(R,z,X,V,Y){z.isScene!==!0&&(z=ae),ge.resetTextureUnits();const ve=z.fog,Ee=V.isMeshStandardMaterial?z.environment:null,Te=b===null?d.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:gi,we=(V.isMeshStandardMaterial?Ke:He).get(V.envMap||Ee),Ne=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!V.normalMap&&!!X.attributes.tangent,Pe=!!X.morphAttributes.position,ze=!!X.morphAttributes.normal,ei=!!X.morphAttributes.color,_i=V.toneMapped?d.toneMapping:kt,yi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ct=yi!==void 0?yi.length:0,De=me.get(V),Si=h.state.lights;if(k===!0&&(B===!0||R!==_)){const Lt=R===_&&V.id===x;C.setState(V,R,Lt)}let ke=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Si.state.version||De.outputEncoding!==Te||Y.isInstancedMesh&&De.instancing===!1||!Y.isInstancedMesh&&De.instancing===!0||Y.isSkinnedMesh&&De.skinning===!1||!Y.isSkinnedMesh&&De.skinning===!0||De.envMap!==we||V.fog===!0&&De.fog!==ve||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==C.numPlanes||De.numIntersection!==C.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Re||De.morphTargets!==Pe||De.morphNormals!==ze||De.morphColors!==ei||De.toneMapping!==_i||ye.isWebGL2===!0&&De.morphTargetsCount!==Ct)&&(ke=!0):(ke=!0,De.__version=V.version);let Rt=De.currentProgram;ke===!0&&(Rt=Zn(V,z,Y));let Wt=!1,Zi=!1,Kn=!1;const rt=Rt.getUniforms(),Ki=De.uniforms;if(oe.useProgram(Rt.program)&&(Wt=!0,Zi=!0,Kn=!0),V.id!==x&&(x=V.id,Zi=!0),Wt||_!==R){if(rt.setValue(U,"projectionMatrix",R.projectionMatrix),ye.logarithmicDepthBuffer&&rt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),_!==R&&(_=R,Zi=!0,Kn=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Lt=rt.map.cameraPosition;Lt!==void 0&&Lt.setValue(U,K.setFromMatrixPosition(R.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&rt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||Y.isSkinnedMesh)&&rt.setValue(U,"viewMatrix",R.matrixWorldInverse)}if(Y.isSkinnedMesh){rt.setOptional(U,Y,"bindMatrix"),rt.setOptional(U,Y,"bindMatrixInverse");const Lt=Y.skeleton;Lt&&(ye.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),rt.setValue(U,"boneTexture",Lt.boneTexture,ge),rt.setValue(U,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const jn=X.morphAttributes;return(jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0&&ye.isWebGL2===!0)&&ie.update(Y,X,V,Rt),(Zi||De.receiveShadow!==Y.receiveShadow)&&(De.receiveShadow=Y.receiveShadow,rt.setValue(U,"receiveShadow",Y.receiveShadow)),Zi&&(rt.setValue(U,"toneMappingExposure",d.toneMappingExposure),De.needsLights&&to(Ki,Kn),ve&&V.fog===!0&&vt.refreshFogUniforms(Ki,ve),vt.refreshMaterialUniforms(Ki,V,T,A,W),Hn.upload(U,De.uniformsList,Ki,ge)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Hn.upload(U,De.uniformsList,Ki,ge),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&rt.setValue(U,"center",Y.center),rt.setValue(U,"modelViewMatrix",Y.modelViewMatrix),rt.setValue(U,"normalMatrix",Y.normalMatrix),rt.setValue(U,"modelMatrix",Y.matrixWorld),Rt}function to(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function io(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,z,X){me.get(R.texture).__webglTexture=z,me.get(R.depthTexture).__webglTexture=X;const V=me.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=X===void 0,V.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,z){const X=me.get(R);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,X=0){b=R,v=z,E=X;let V=!0;if(R){const we=me.get(R);we.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):we.__webglFramebuffer===void 0?ge.setupRenderTarget(R):we.__hasExternalTextures&&ge.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture)}let Y=null,ve=!1,Ee=!1;if(R){const we=R.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(Ee=!0);const Ne=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Y=Ne[z],ve=!0):ye.isWebGL2&&R.samples>0&&ge.useMultisampledRTT(R)===!1?Y=me.get(R).__webglMultisampledFramebuffer:Y=Ne,S.copy(R.viewport),M.copy(R.scissor),y=R.scissorTest}else S.copy(P).multiplyScalar(T).floor(),M.copy(O).multiplyScalar(T).floor(),y=N;if(oe.bindFramebuffer(U.FRAMEBUFFER,Y)&&ye.drawBuffers&&V&&oe.drawBuffers(R,Y),oe.viewport(S),oe.scissor(M),oe.setScissorTest(y),ve){const we=me.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,X)}else if(Ee){const we=me.get(R.texture),Ne=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.__webglTexture,X||0,Ne)}x=-1},this.readRenderTargetPixels=function(R,z,X,V,Y,ve,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){oe.bindFramebuffer(U.FRAMEBUFFER,Te);try{const we=R.texture,Ne=we.format,Re=we.type;if(Ne!==wt&&q.convert(Ne)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===on&&(Se.has("EXT_color_buffer_half_float")||ye.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Re!==mi&&q.convert(Re)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===ci&&(ye.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-V&&X>=0&&X<=R.height-Y&&U.readPixels(z,X,V,Y,q.convert(Ne),q.convert(Re),ve)}finally{const we=b!==null?me.get(b).__webglFramebuffer:null;oe.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(R,z,X=0){const V=Math.pow(2,-X),Y=Math.floor(z.image.width*V),ve=Math.floor(z.image.height*V);ge.setTexture2D(z,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,R.x,R.y,Y,ve),oe.unbindTexture()},this.copyTextureToTexture=function(R,z,X,V=0){const Y=z.image.width,ve=z.image.height,Ee=q.convert(X.format),Te=q.convert(X.type);ge.setTexture2D(X,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,R.x,R.y,Y,ve,Ee,Te,z.image.data):z.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,R.x,R.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,R.x,R.y,Ee,Te,z.image),V===0&&X.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(R,z,X,V,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=R.max.x-R.min.x+1,Ee=R.max.y-R.min.y+1,Te=R.max.z-R.min.z+1,we=q.convert(V.format),Ne=q.convert(V.type);let Re;if(V.isData3DTexture)ge.setTexture3D(V,0),Re=U.TEXTURE_3D;else if(V.isDataArrayTexture)ge.setTexture2DArray(V,0),Re=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Pe=U.getParameter(U.UNPACK_ROW_LENGTH),ze=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ei=U.getParameter(U.UNPACK_SKIP_PIXELS),_i=U.getParameter(U.UNPACK_SKIP_ROWS),yi=U.getParameter(U.UNPACK_SKIP_IMAGES),Ct=X.isCompressedTexture?X.mipmaps[0]:X.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),X.isDataTexture||X.isData3DTexture?U.texSubImage3D(Re,Y,z.x,z.y,z.z,ve,Ee,Te,we,Ne,Ct.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Re,Y,z.x,z.y,z.z,ve,Ee,Te,we,Ct.data)):U.texSubImage3D(Re,Y,z.x,z.y,z.z,ve,Ee,Te,we,Ne,Ct),U.pixelStorei(U.UNPACK_ROW_LENGTH,Pe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ze),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ei),U.pixelStorei(U.UNPACK_SKIP_ROWS,_i),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yi),Y===0&&V.generateMipmaps&&U.generateMipmap(Re),oe.unbindTexture()},this.initTexture=function(R){ge.setTexture2D(R,0),oe.unbindTexture()},this.resetState=function(){v=0,E=0,b=null,oe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lf extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class cf extends Aa{constructor(t={}){super(t);J(this,"camera");J(this,"renderer");J(this,"mainScene");J(this,"isRender",!0);J(this,"renderSize",new Fr);let n={canvas:this.el,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"};this.renderer=new of(n),this.renderer.autoClear=!0,this.renderer.setClearColor(16777215,1),this.mainScene=new lf,this.camera=this._makeCamera(),this.updateCamera(this.camera,10,10)}init(){super.init()}_makeCamera(){return new mt(50,1,1e-7,5e4)}updateCamera(t,n=10,r=10){this._updateOrthCamera(t,n,r)}_updateOrthCamera(t,n=10,r=10){t.aspect=n/r,t.updateProjectionMatrix(),t.position.z=r/Math.tan(t.fov*Math.PI/360)/2}_update(){super._update()}_setUni(t,n,r){const i=this._getUni(t);i[n].value=r}_getUni(t){return t.material.uniforms}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.1
 * @author George Michael Brower
 * @license MIT
 */class It{constructor(e,t,n,r,i="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),It.nextNameID=It.nextNameID||0,this.$name.id=`lil-gui-name-${++It.nextNameID}`,this.$widget=document.createElement(i),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class uf extends It{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function kr(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const hf={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:kr,toHexString:kr},cn={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},df={isPrimitive:!1,match:Array.isArray,fromHexString(s,e,t=1){const n=cn.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const r=s*n<<16^e*n<<8^t*n<<0;return cn.toHexString(r)}},ff={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=cn.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const r=s*n<<16^e*n<<8^t*n<<0;return cn.toHexString(r)}},pf=[hf,cn,df,ff];function mf(s){return pf.find(e=>e.match(s))}class gf extends It{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=mf(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const i=kr(this.$text.value);i&&this._setValueFromHexString(i)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Dr extends It{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class vf extends It{constructor(e,t,n,r,i,o){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(i);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{const v=parseFloat(this.$input.value);isNaN(v)||this.setValue(this._clamp(v))},t=v=>{const E=parseFloat(this.$input.value);isNaN(E)||(this._snapClampSetValue(E+v),this.$input.value=this.getValue())},n=v=>{v.code==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),t(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),t(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),t(this._step*this._normalizeMouseWheel(v)))};let i=!1,o,a,c,f,u;const p=5,h=v=>{o=v.clientX,a=c=v.clientY,i=!0,f=this.getValue(),u=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",g)},l=v=>{if(i){const E=v.clientX-o,b=v.clientY-a;Math.abs(b)>p?(v.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(E)>p&&g()}i||(u-=(v.clientY-c)*this._step*this._arrowKeyMultiplier(v),f+u>this._max?u=this._max-f:f+u<this._min&&(u=this._min-f),this._snapClampSetValue(f+u)),c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",g)},d=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",d),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(v,E,b,x,_)=>(v-E)/(b-E)*(_-x)+x,t=v=>{const E=this.$slider.getBoundingClientRect();let b=e(v,E.left,E.right,this._min,this._max);this._snapClampSetValue(b)},n=v=>{this._setDraggingStyle(!0),t(v.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",i)},r=v=>{t(v.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",i)};let o=!1,a,c;const f=v=>{v.preventDefault(),this._setDraggingStyle(!0),t(v.touches[0].clientX),o=!1},u=v=>{v.touches.length>1||(this._hasScrollBar?(a=v.touches[0].clientX,c=v.touches[0].clientY,o=!0):f(v),window.addEventListener("touchmove",p),window.addEventListener("touchend",h))},p=v=>{if(o){const E=v.touches[0].clientX-a,b=v.touches[0].clientY-c;Math.abs(E)>Math.abs(b)?f(v):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",h))}else v.preventDefault(),t(v.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",h)},l=this._callOnFinishChange.bind(this),g=400;let d;const m=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const b=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(l,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class xf extends It{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(i=>{const o=document.createElement("option");o.innerHTML=i,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class _f extends It{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const yf=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Sf(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Sa=!1;class Zr{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Sa&&o&&(Sf(yf),Sa=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,n,r,i){if(Object(n)===n)return new xf(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new vf(this,e,t,n,r,i);case"boolean":return new uf(this,e,t);case"string":return new _f(this,e,t);case"function":return new Dr(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new gf(this,e,t,n)}addFolder(e){return new Zr({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Dr||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Dr)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=i=>{i.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var rn=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++s%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var p=0;p<e.children.length;p++)e.children[p].style.display=p===u?"block":"none";s=u}var r=(performance||Date).now(),i=r,o=0,a=t(new rn.Panel("FPS","#0ff","#002")),c=t(new rn.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new rn.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(c.update(u-r,200),u>=i+1e3&&(a.update(o*1e3/(u-i),100),i=u,o=0,f)){var p=performance.memory;f.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:n}};rn.Panel=function(s,e,t){var n=1/0,r=0,i=Math.round,o=i(window.devicePixelRatio||1),a=80*o,c=48*o,f=3*o,u=2*o,p=3*o,h=15*o,l=74*o,g=30*o,d=document.createElement("canvas");d.width=a,d.height=c,d.style.cssText="width:80px;height:48px";var m=d.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,c),m.fillStyle=e,m.fillText(s,f,u),m.fillRect(p,h,l,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(p,h,l,g),{dom:d,update:function(v,E){n=Math.min(n,v),r=Math.max(r,v),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,h),m.fillStyle=e,m.fillText(i(v)+" "+s+" ("+i(n)+"-"+i(r)+")",f,u),m.drawImage(d,p+o,h,l-o,g,p,h,l-o,g),m.fillRect(p+l-o,h,o,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(p+l-o,h,o,i((1-v/E)*g))}}};class Vn{constructor(){}}J(Vn,"HIGH",0),J(Vn,"MIDDLE",1),J(Vn,"LOW",2);const is=class{constructor(){J(this,"fps",Vn.MIDDLE);J(this,"colors",[]);J(this,"debug",document.querySelector(".l-debug"));J(this,"selectedNo",[0,0]);J(this,"_dat");J(this,"_stats");J(this,"main",{bg:{value:2043575,type:"color"}});et.instance.FLG_PARAM&&this.makeParamGUI(),et.instance.FLG_STATS&&(this._stats=rn(),document.body.appendChild(this._stats.domElement)),hi.instance.add(()=>{this._update()})}_update(){this._stats!=null&&this._stats.update()}static get instance(){return this._instance||(this._instance=new is),this._instance}makeParamGUI(){this._dat==null&&(this._dat=new Zr,this._add(this.main,"main"))}_add(e,t){const n=this._dat.addFolder(t);for(var r in e){const i=e[r];i.use==null&&(i.type=="color"?n.addColor(i,"value").name(r):i.list!=null?n.add(i,"value",i.list).name(r):n.add(i,"value",i.min,i.max).name(r))}}};let kn=is;J(kn,"_instance");const Ma={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Mf{constructor(e,t,n){const r=this;let i=!1,o=0,a=0,c;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,i===!1&&r.onStart!==void 0&&r.onStart(u,o,a),i=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return f.push(u,p),this},this.removeHandler=function(u){const p=f.indexOf(u);return p!==-1&&f.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=f.length;p<h;p+=2){const l=f[p],g=f[p+1];if(l.global&&(l.lastIndex=0),l.test(u))return g}return null}}}const Ef=new Mf;class ja{constructor(e){this.manager=e!==void 0?e:Ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class wf extends ja{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,o=Ma.get(e);if(o!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(o),i.manager.itemEnd(e)},0),o;const a=ln("img");function c(){u(),Ma.add(e,this),t&&t(this),i.manager.itemEnd(e)}function f(p){u(),r&&r(p),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",f,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),i.manager.itemStart(e),a.src=e,a}}class Ea extends ja{constructor(e){super(e)}load(e,t,n,r){const i=new dt,o=new wf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){i.image=a,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}}class wa{constructor(){}load(e,t){const n=new dt,r=new Image;return r.onload=()=>{n.image=r,n.needsUpdate=!0,t!=null&&t()},r.src=e,n}}const ns=class{constructor(){J(this,"_list",[]);J(this,"_tex",[]);J(this,"_loadedNum",0);J(this,"_isIE",Ze.instance.isIE());J(this,"onComplete");J(this,"onProgress")}static get instance(){return this._instance||(this._instance=new ns),this._instance}load(e){if(this.onComplete=e.onComplete,this.onProgress=e.onProgress,e.list.length==0){this.onComplete!=null&&this.onComplete();return}this._list=e.list,this._loadedNum=0,this._load()}_load(){const e=this._list[this._loadedNum];if(this.check(e.src)){this._loadedImg();return}let t,n;this._isIE?(t=new wa,n=t.load(e.src,()=>{this._loadedImg()})):(t=new Ea,t.crossOrigin="*",n=t.load(e.src,()=>{this._loadedImg()})),this._tex.push({tex:n,src:e.src})}_loadedImg(){if(this._loadedNum++,this.onProgress!=null&&this.onProgress(this._loadedNum/this._list.length),this._loadedNum>=this._list.length){this.onComplete!=null&&this.onComplete();return}this._load()}get(e){let t=null;if(this._tex.forEach(i=>{i.src==e&&(t=i.tex)}),t!=null)return t;let n;this._isIE?n=new wa:(n=new Ea,n.crossOrigin="anonymous");const r=n.load(e);return this._tex.push({tex:r,src:e}),r}check(e){let t=!1;return this._tex.forEach(n=>{n.src==e&&(t=!0)}),t}};let Wn=ns;J(Wn,"_instance");class bf extends cf{constructor(t){super(t);J(this,"_con");J(this,"_img");J(this,"_posBuffer",[]);J(this,"_seg",et.instance.ITEM_NUM);this._con=new gt,this.mainScene.add(this._con),this._img=new Vt(new $n(1,1,this._seg-1,this._seg-1),new $r({transparent:!0,map:Wn.instance.get(et.instance.PATH_IMG+"tex-sample.png")})),this._con.add(this._img);const n=this._img.geometry.attributes.position.array,r=n.length;for(let i=0;i<r;i++)this._posBuffer.push(n[i]);this._resize()}updatePos(t){const n=-this.renderSize.width*.5,r=this.renderSize.height*.5;t.forEach(i=>{const o=this._img;let a=[];i.bodies.forEach(p=>{const h=p.position;a.push(new G(h.x+n,h.y*-1+r,0))});const c=Math.abs(i.bodies[0].position.x-i.bodies[i.bodies.length-1].position.x);o.scale.set(c,c,1);const f=o.geometry.attributes.position.count,u=new Float32Array(f*3);for(let p=0;p<f;p++){const h=p*3,l=p%this._seg,g=Ze.instance.map(a[l].x,-1,1,-this.renderSize.width,this.renderSize.width)*.25,d=Ze.instance.map(a[l].y,-1,1,-this.renderSize.height,this.renderSize.height);u[h+0]=this._posBuffer[h+0]+g,u[h+1]=this._posBuffer[h+1]+d,u[h+2]=0}o.geometry.setAttribute("position",new Tt(u,3))})}_update(){super._update(),this.isNowRenderFrame()&&this._render()}_render(){const t=new Ue(kn.instance.main.bg.value);this.renderer.setClearColor(t,1),this.renderer.render(this.mainScene,this.camera)}isNowRenderFrame(){return this.isRender}_resize(t=!0){super._resize();const n=Ht.instance.sw(),r=Ht.instance.sh();this.renderSize.width=n,this.renderSize.height=r,this.updateCamera(this.camera,n,r);let i=window.devicePixelRatio||1;this.renderer.setPixelRatio(i),this.renderer.setSize(n,r),this.renderer.clear(),t&&this._render()}}class Tf extends Aa{constructor(t){super(t);J(this,"engine");J(this,"render");J(this,"_mouse");J(this,"_stack",[]);J(this,"_v");const n=Ht.instance.sw(),r=Ht.instance.sh();this.engine=Ye.exports.Engine.create(),this.engine.gravity.x=0,this.engine.gravity.y=0,this.render=Ye.exports.Render.create({element:document.body,engine:this.engine,options:{width:n,height:r,showAngleIndicator:!1,showCollisions:!1,showVelocity:!1,pixelRatio:.1}}),this.render.canvas.classList.add("matter");for(let a=0;a<et.instance.STACK_NUM;a++){const c=n*.8,f=(n-c)*.5,u=n-(n-c)*.5,p=70,h=p*(et.instance.STACK_NUM-1),l=r*.5-h*.5+p*a,g=l,d=.95;let m=Ye.exports.Body.nextGroup(!0);const v=Ye.exports.Composites.stack(f,l,et.instance.ITEM_NUM,1,0,0,function(E,b){return Ye.exports.Bodies.rectangle(E,b,et.instance.ITEM_SIZE*3,et.instance.ITEM_SIZE,{collisionFilter:{group:m},density:.005,frictionAir:.05,render:{fillStyle:"#060a19",visible:!1}})});Ye.exports.Composites.chain(v,.3,0,-.3,0,{stiffness:d,length:0,render:{visible:!1}}),Ye.exports.Composite.add(this.engine.world,[v,Ye.exports.Constraint.create({pointA:{x:f,y:l},bodyB:v.bodies[0],pointB:{x:0,y:0},length:2,stiffness:d}),Ye.exports.Constraint.create({pointA:{x:u,y:g},bodyB:v.bodies[v.bodies.length-1],pointB:{x:0,y:0},length:2,stiffness:d})]),this._stack.push(v)}const i=Math.max(n,r)*.1;this._mouse=Ye.exports.Bodies.circle(0,0,i,{isStatic:!0,render:{visible:!1}}),Ye.exports.Composite.add(this.engine.world,[this._mouse]),Ye.exports.Body.setPosition(this._mouse,{x:9999,y:9999}),this._v=new bf({el:this.getEl()}),Ye.exports.Render.run(this.render);const o=Ye.exports.Runner.create();Ye.exports.Runner.run(o,this.engine),Ye.exports.Events.on(this.render,"afterRender",()=>{this._eAfterRender()}),this._resize()}_eAfterRender(){this._v.updatePos(this._stack)}_update(){super._update();let t=zi.instance.x,n=zi.instance.y;et.instance.USE_TOUCH&&zi.instance.isDown==!1&&(t=9999,n=9999),Ye.exports.Body.setPosition(this._mouse,{x:t,y:n})}_resize(){super._resize();const t=Ht.instance.sw(),n=Ht.instance.sh();this.render.canvas.width=t,this.render.canvas.height=n}}new Tf({el:document.querySelector(".l-main")});
