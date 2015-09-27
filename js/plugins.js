// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * Accessifyhtml5.js
 *
 * Source: https://github.com/yatil/accessifyhtml5.js
 */

var AccessifyHTML5=function(e,f){var c={article:{role:"article"},aside:{role:"complementary"},nav:{role:"navigation"},main:{role:"main"},output:{"aria-live":"polite"},section:{role:"region"},"[required]":{"aria-required":"true"}},g={ok:[],warn:[],fail:[]},k=g.fail,b,h,a,d,n,p,l,r,m,s=RegExp("aria-[a-z]+|role|tabindex|title|alt|data-[\\w-]+|lang|style|maxlength|placeholder|pattern|required|type|target|accesskey|longdesc"),t=0,q=document;if(q.querySelectorAll){e&&(e.header&&(c[e.header]={role:"banner"}),
e.footer&&(c[e.footer]={role:"contentinfo"}),e.main&&(c[e.main]={role:"main"},c.main={role:""}));if(f&&f._CONFIG_&&f._CONFIG_.ignore_defaults)c=f;else for(a in f)c[a]=f[a];for(b in c)if(!b.match(/^_(CONFIG|[A-Z]+)_/)&&c.hasOwnProperty(b)){try{h=q.querySelectorAll(b)}catch(u){k.push({sel:b,attr:null,val:null,msg:"Invalid syntax for `document.querySelectorAll` function",ex:u})}p=c[b];(!h||1>h.length)&&g.warn.push({sel:b,attr:null,val:null,msg:"Not found"});for(l=0;l<h.length;l++)for(n in p)if(p.hasOwnProperty(n)&&
(a=n,d=p[n],!a.match(/_?note/)))if(a.match(s))if((typeof d).match(/string|number|boolean/)){if(r=a.match(/(describ|label)l?edby/)){try{m=q.querySelector(d)}catch(v){k.push({sel:b,attr:a,val:d,msg:"Invalid selector syntax (2) - see 'val'",ex:v})}if(!m){k.push({sel:b,attr:a,val:d,msg:"Labelledby ref not found - see 'val'"});continue}m.id||(m.id="acfy-id-"+t);d=m.id;a="aria-"+("label"===r[1]?"labelledby":"describedby");t++}h[l].hasAttribute(a)?g.warn.push({sel:b,attr:a,val:d,msg:"Already present, skipped"}):
(h[l].setAttribute(a,d),g.ok.push({sel:b,attr:a,val:d,msg:"Added"}))}else k.push({sel:b,attr:a,val:d,msg:"Value-type not allowed"});else k.push({sel:b,attr:a,val:null,msg:"Attribute not allowed",re:s})}}g.input=c;return g};

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function(){var d=document.querySelector(".md-overlay");[].slice.call(document.querySelectorAll(".md-trigger")).forEach(function(a){function b(){var b=classie.has(a,"md-setperspective");classie.remove(c,"md-show");b&&classie.remove(document.documentElement,"md-perspective")}var c=document.querySelector("#"+a.getAttribute("data-modal")),e=c.querySelector(".md-close");a.addEventListener("click",function(){classie.add(c,"md-show");d.removeEventListener("click",b);d.addEventListener("click",b);classie.has(a,
"md-setperspective")&&setTimeout(function(){classie.add(document.documentElement,"md-perspective")},25)});e.addEventListener("click",function(a){a.stopPropagation();b()})})})();

/*
 Copyright 2014 Google Inc. All rights reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

(function(f){if(f.a)return f.a;var c=f.document,g="textContent"in c.body,m=function(){function f(a){var b=c.createElement("span");g?b.textContent=a:b.innerText=a;return b}function n(a){var b=c.createElement("a");g?b.textContent=a:b.innerText=a;b.id="cookieChoiceDismiss";b.href="#";b.style.marginLeft="24px";return b}function p(a,b){var d=c.createElement("a");g?d.textContent=a:d.innerText=a;d.href=b;d.target="_blank";d.style.marginLeft="8px";return d}function m(){var a=new Date;a.setFullYear(a.getFullYear()+
1);c.cookie="displayCookieConsent=y; expires="+a.toGMTString();q();return!1}function r(a,b,d,k,e){if(!c.cookie.match(/displayCookieConsent=([^;]+)/)){q();if(e){e=c.createElement("div");e.id="cookieChoiceInfo";var g=c.createElement("div");g.style.cssText="position:fixed;width:100%;height:100%;z-index:999;top:0;left:0;opacity:0.5;filter:alpha(opacity=50);background-color:#ccc;";var h=c.createElement("div");h.style.cssText="position:relative;left:-50%;margin-top:-25%;background-color:#fff;padding:20px;box-shadow:4px 4px 25px #888;";
var l=c.createElement("div");l.style.cssText="z-index:1000;position:fixed;left:50%;top:50%";b=n(b);b.style.display="block";b.style.textAlign="right";b.style.marginTop="8px";h.appendChild(f(a));d&&k&&h.appendChild(p(d,k));h.appendChild(b);l.appendChild(h);e.appendChild(g);e.appendChild(l)}else e=c.createElement("div"),e.id="cookieChoiceInfo",e.style.cssText="position:fixed;width:100%;background-color:rgba(226,226,226,.7);margin:0; left:0; top:0;padding:4px;z-index:1000;text-align:center;",e.appendChild(f(a)),
d&&k&&e.appendChild(p(d,k)),e.appendChild(n(b));a=e;d=c.createDocumentFragment();d.appendChild(a);c.body.appendChild(d.cloneNode(!0));c.getElementById("cookieChoiceDismiss").onclick=m}}function q(){var a=c.getElementById("cookieChoiceInfo");null!=a&&a.parentNode.removeChild(a)}return{b:function(a,b,d,c){r(a,b,d,c,!1)},c:function(a,b,d,c){r(a,b,d,c,!0)}}}();return f.a=m})(this);
