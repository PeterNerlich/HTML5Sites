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
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();

})();

/*! signet.js 0.4.7 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l;null!=(null!=(l=window.console)?l.log:void 0)&&(e=function(a){var b,c,d,e;return d=document.head||document.getElementsByTagName("head")[0],b=null!=(e=d.querySelector("meta[name='"+a+"']"))?e.content:void 0,b?function(){var a,d,e,f;for(e=b.split(","),f=[],a=0,d=e.length;d>a;a++)c=e[a],f.push("function"==typeof c.trim?c.trim():void 0);return f}():void 0},a=e("signet:authors"),f=e("signet:links"),i='400 12px "Helvetica Neue", Helvetica, Arial, sans-serif',j=12,k=16,h=function(){var a,b,c,d,e,f;return b=function(){return/MSIE/.test(navigator.userAgent)},a=function(){return/Firefox/.test(navigator.userAgent)},c=function(){return/OPR/.test(navigator.userAgent)&&/Opera/.test(navigator.vendor)},d=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},f=function(){var a;return a=navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/),a?537.38<=parseInt(a[1],10)+parseInt(a[2],10)/100:!1},e=function(){var a;return a=navigator.userAgent.match(/OPR\/(\d+)\./),a?15<=parseInt(a[1],10):!1},!(b()||a()||c()&&!e()||d()&&!f())}(),b=function(a){var b,c,d,e,f,g,h,i,j;for(g=["log","debug","warn","error"],e={},b={},d=[],c=g.length,h=function(a){return e[a]=console[a],b[a]=function(){return e[a].apply(console,arguments)},console[a]=function(){return d.push([a,arguments]),void 0}},c=i=0,j=g.length;j>i;c=++i)f=g[c],h(f);return setTimeout(function(){var b,c,h,i,j;for(h=0,i=g.length;i>h;h++)f=g[h],console[f]=e[f];for(a(),j=[];d.length;)b=d.shift(),f=b[0],c=b[1],j.push(console[f].apply(console,c));return j},0)},d=function(){var b,c,d,e,f,g,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G;if(null!=a?a.length:void 0){if(h){for(j=480,k=(null!=(G=document.body)?G.clientWidth:void 0)||480,c=20,d=c/2,f=60,p=a.length*c+25,z=14,y=-35,w=-24,g=document.createElement("canvas"),g.height=1e3,g.width=k,m=g.getContext("2d"),m.font=i,n=function(a,b,c,d,e){return m.fillStyle=e,m.fillRect(a,b+z,c,d)},o=function(a,b){return m.fillStyle="#444",m.fillText(a,f+10,b+z)},n(0,-z,k,p,"white"),r=B=0,E=a.length;E>B;r=++B)for(b=a[r],o(b,c*r+14),l=b.replace(/\s/g,""),e=c*r+(c-d)/2,v=C=0,F=l.length;F>C;v=++C)x=l[v],t=Math.floor(f*v/l.length),u=Math.ceil(f*(v+1)/l.length-t),q=(2*x.toLowerCase().charCodeAt(0)+5*l.toLowerCase().charCodeAt(0))%256,n(t,e,u,d,"hsl("+q+", 80%, 80%)");return s="font-size: 0; line-height: "+(p+y)+"px; padding: "+Math.floor(p/2)+"px "+k+"px "+Math.ceil(p/2)+'px 0; background-image: url("'+g.toDataURL()+'"); margin-left: '+w+"px",console.log("%c ",s)}for(console.log("Author"+(1===a.length?"":"s")+":"),A=0,D=a.length;D>A;A++)b=a[A],console.log(b)}},c=function(){var a,b,c,d,e,j,l,m,n,o,p,q,r,s,t,u,v;if(null!=f?f.length:void 0){if(h){for(a={"twitter.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGFBMVEWEu/Tf7fxirPK41vg3nPABj+4omO/+//+b16fMAAAAVklEQVR42lXNQRJEUQRDUSRh/ztu8QZd/46cokrMpz/zMR+CBSwrzFBLlbFDYYbdlLegxFq2crzlTu3MrH6p7hF0onDM4inGtJs+PaK0EdYdA8iD+ekHsEgEIt/uHNUAAAAASUVORK5CYII=","github.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGFBMVEVCQUIsKyu8u7ugn6B7envc29wSERH+/v6nd/awAAAAWklEQVQIHT3BiQ0CQBDEsNkv6b9jEDphR70tqD01Ojyjcfgbc9C9M9sNl4Xz52BTxCdUYH0WAuuzkILz54rKUpnT68Dm2GV0+Lo4TJ820EanqrWhNert6c2pH7EtBBOlbNv9AAAAAElFTkSuQmCC","plus.google.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAFVBMVEXic2r88vHLOCDzzMnpoJvVDQDdSzg1eZqZAAAAWklEQVR42lXPORIDQAgDQV3o/082a5x4qhR0QADaajb1hRWy4bhyTEbHMb/rHzHJPIau3bdlG9MDksZSConCRlHFfr7bCTNTerodC+fYmrbTHtUk0I/SfXB9AElwAxEwF7nBAAAAAElFTkSuQmCC"},o=["%c\n","line-height: 0; font-size: 0"],e=t=0,v=f.length;v>t;e=++t){n=f[e],c=n.replace(/(https?:\/\/[^\/]+(\/|$))(.*)/,"$1"),p=n.substr(c.length),d=g(c),q=g(p),j=null;for(b in a)if(l=a[b],new RegExp("^(https?://)?(www.)?"+b+"/","i").test(n)){j=l;break}j?(o[0]+="%c"+n+"%c %c %c\n",m=-d):(o[0]+="%c"+n+"\n",m=0),o.push("-webkit-font-smoothing: antialiased; font: "+i+"; margin-left: "+m+"px"),j&&(r=42,m=-q-r,o.push("background: #fff; line-height: "+k+"px; padding: "+(k/2+2)+"px "+r/2+"px "+(k/2+2)+"px "+r/2+"px; font-size: 0; margin-left: "+m+"px"),m=-(r/2)+2,o.push("background: #fff url("+j+"); line-height: "+k+"px; padding: 11px 14px 3px 0; font-size: 0; margin-left: "+m+"px"),o.push(""))}return console.log.apply(console,o)}for(s=0,u=f.length;u>s;s++)n=f[s],console.log(n)}},g=function(a){var b,c;return b=document.createElement("canvas"),c=b.getContext("2d"),c.font=i,c.measureText(a).width},b(function(){return d(),c()}))}).call(this);

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

(function(window) {

  if (!!window.cookieChoices) {
    return window.cookieChoices;
  }

  var document = window.document;
  // IE8 does not support textContent, so we should fallback to innerText.
  var supportsTextContent = 'textContent' in document.body;

  var cookieChoices = (function() {

    var cookieName = 'displayCookieConsent';
    var cookieConsentId = 'cookieChoiceInfo';
    var dismissLinkId = 'cookieChoiceDismiss';

    function _createHeaderElement(cookieText, dismissText, linkText, linkHref) {
      var butterBarStyles = 'position:fixed;width:100%;background-color:rgba(226,226,226,.7);' +
          'margin:0; left:0; top:0;padding:4px;z-index:1000;text-align:center;';

      var cookieConsentElement = document.createElement('div');
      cookieConsentElement.id = cookieConsentId;
      cookieConsentElement.style.cssText = butterBarStyles;
      cookieConsentElement.appendChild(_createConsentText(cookieText));

      if (!!linkText && !!linkHref) {
        cookieConsentElement.appendChild(_createInformationLink(linkText, linkHref));
      }
      cookieConsentElement.appendChild(_createDismissLink(dismissText));
      return cookieConsentElement;
    }

    function _createDialogElement(cookieText, dismissText, linkText, linkHref) {
      var glassStyle = 'position:fixed;width:100%;height:100%;z-index:999;' +
          'top:0;left:0;opacity:0.5;filter:alpha(opacity=50);' +
          'background-color:#ccc;';
      var dialogStyle = 'z-index:1000;position:fixed;left:50%;top:50%';
      var contentStyle = 'position:relative;left:-50%;margin-top:-25%;' +
          'background-color:#fff;padding:20px;box-shadow:4px 4px 25px #888;';

      var cookieConsentElement = document.createElement('div');
      cookieConsentElement.id = cookieConsentId;

      var glassPanel = document.createElement('div');
      glassPanel.style.cssText = glassStyle;

      var content = document.createElement('div');
      content.style.cssText = contentStyle;

      var dialog = document.createElement('div');
      dialog.style.cssText = dialogStyle;

      var dismissLink = _createDismissLink(dismissText);
      dismissLink.style.display = 'block';
      dismissLink.style.textAlign = 'right';
      dismissLink.style.marginTop = '8px';

      content.appendChild(_createConsentText(cookieText));
      if (!!linkText && !!linkHref) {
        content.appendChild(_createInformationLink(linkText, linkHref));
      }
      content.appendChild(dismissLink);
      dialog.appendChild(content);
      cookieConsentElement.appendChild(glassPanel);
      cookieConsentElement.appendChild(dialog);
      return cookieConsentElement;
    }

    function _setElementText(element, text) {
      if (supportsTextContent) {
        element.textContent = text;
      } else {
        element.innerText = text;
      }
    }

    function _createConsentText(cookieText) {
      var consentText = document.createElement('span');
      _setElementText(consentText, cookieText);
      return consentText;
    }

    function _createDismissLink(dismissText) {
      var dismissLink = document.createElement('a');
      _setElementText(dismissLink, dismissText);
      dismissLink.id = dismissLinkId;
      dismissLink.href = '#';
      dismissLink.style.marginLeft = '24px';
      return dismissLink;
    }

    function _createInformationLink(linkText, linkHref) {
      var infoLink = document.createElement('a');
      _setElementText(infoLink, linkText);
      infoLink.href = linkHref;
      infoLink.target = '_blank';
      infoLink.style.marginLeft = '8px';
      return infoLink;
    }

    function _dismissLinkClick() {
      _saveUserPreference();
      _removeCookieConsent();
      return false;
    }

    function _showCookieConsent(cookieText, dismissText, linkText, linkHref, isDialog) {
      if (_shouldDisplayConsent()) {
        _removeCookieConsent();
        var consentElement = (isDialog) ?
            _createDialogElement(cookieText, dismissText, linkText, linkHref) :
            _createHeaderElement(cookieText, dismissText, linkText, linkHref);
        var fragment = document.createDocumentFragment();
        fragment.appendChild(consentElement);
        document.body.appendChild(fragment.cloneNode(true));
        document.getElementById(dismissLinkId).onclick = _dismissLinkClick;
      }
    }

    function showCookieConsentBar(cookieText, dismissText, linkText, linkHref) {
      _showCookieConsent(cookieText, dismissText, linkText, linkHref, false);
    }

    function showCookieConsentDialog(cookieText, dismissText, linkText, linkHref) {
      _showCookieConsent(cookieText, dismissText, linkText, linkHref, true);
    }

    function _removeCookieConsent() {
      var cookieChoiceElement = document.getElementById(cookieConsentId);
      if (cookieChoiceElement != null) {
        cookieChoiceElement.parentNode.removeChild(cookieChoiceElement);
      }
    }

    function _saveUserPreference() {
      // Set the cookie expiry to one year after today.
      var expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = cookieName + '=y; expires=' + expiryDate.toGMTString();
    }

    function _shouldDisplayConsent() {
      // Display the header only if the cookie has not been set.
      return !document.cookie.match(new RegExp(cookieName + '=([^;]+)'));
    }

    var exports = {};
    exports.showCookieConsentBar = showCookieConsentBar;
    exports.showCookieConsentDialog = showCookieConsentDialog;
    return exports;
  })();

  window.cookieChoices = cookieChoices;
  return cookieChoices;
})(this);
