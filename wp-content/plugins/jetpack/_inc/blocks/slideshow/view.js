!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){function t(t){for(var n,r,o=t[0],s=t[1],a=0,c=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);c.length;)c.shift()()}var n={},r={13:0},i={13:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{16:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="rtl"===document.dir?({16:"vendors~swiper"}[e]||e)+"."+{16:"648dcdc1486c52ce55b3"}[e]+".rtl.css":({16:"vendors~swiper"}[e]||e)+"."+{16:"648dcdc1486c52ce55b3"}[e]+".css",s=o.p+i,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=(d=a[c]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===i||u===s))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var d;if((u=(d=l[c]).getAttribute("data-href"))===i||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.setAttribute("data-webpack",!0),f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=s,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=s);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({16:"vendors~swiper"}[e]||e)+"."+{16:"648dcdc1486c52ce55b3"}[e]+".js"}(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=a;return o(o.s=294)}({133:function(e,t,n){},18:function(e,t,n){var r=n(64),i=n(65),o=n(66);e.exports=function(e,t){return r(e)||i(e,t)||o()}},294:function(e,t,n){n(42),e.exports=n(295)},295:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n(74),o=n.n(i),s=n(38),a=n(72),c=n(37);"undefined"!=typeof window&&o()((function(){var e=document.getElementsByClassName("wp-block-jetpack-slideshow");Object(r.forEach)(e,(function(e){var t=e.dataset,n=t.autoplay,r=t.delay,i=t.effect,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u=n&&!o,l=e.getElementsByClassName("swiper-container")[0],d=null;Object(a.a)(l,{autoplay:!!u&&{delay:1e3*r,disableOnInteraction:!1},effect:i,init:!0,initialSlide:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0}},{init:c.b,imagesReady:c.d,paginationRender:c.c,transitionEnd:c.a}).then((function(e){new s.a((function(){d&&(cancelAnimationFrame(d),d=null),d=requestAnimationFrame((function(){Object(c.d)(e),e.update()}))})).observe(e.el)})).catch((function(){e.querySelector(".wp-block-jetpack-slideshow_container").classList.add("wp-swiper-initialized")}))}))}))},35:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return a}));var r=n(73),i=n(5),o="wp-block-jetpack-slideshow_autoplay-paused";function s(e){a(e),c(e),e.el.querySelector(".wp-block-jetpack-slideshow_button-pause").addEventListener("click",(function(){e.el&&(e.el.classList.contains(o)?(e.el.classList.remove(o),e.autoplay.start(),this.setAttribute("aria-label","Pause Slideshow")):(e.el.classList.add(o),e.autoplay.stop(),this.setAttribute("aria-label","Play Slideshow")))}))}function a(e){if(e&&e.el){var t=e.el.querySelector('.swiper-slide[data-swiper-slide-index="0"] img');if(t){var n=t.clientWidth/t.clientHeight,r=Math.max(Math.min(n,16/9),1),i="undefined"!=typeof window?.8*window.innerHeight:600,o=Math.min(e.width/r,i),s="".concat(Math.floor(o),"px"),a="".concat(Math.floor(o/2),"px");e.el.classList.add("wp-swiper-initialized"),e.wrapperEl.style.height=s,e.el.querySelector(".wp-block-jetpack-slideshow_button-prev").style.top=a,e.el.querySelector(".wp-block-jetpack-slideshow_button-next").style.top=a}}}function c(e){Object(i.forEach)(e.slides,(function(t,n){t.setAttribute("aria-hidden",n===e.activeIndex?"false":"true"),n===e.activeIndex?t.setAttribute("tabindex","-1"):t.removeAttribute("tabindex")})),function(e){var t=e.slides[e.activeIndex];if(t){var n=t.getElementsByTagName("FIGCAPTION")[0],i=t.getElementsByTagName("IMG")[0];e.a11y.liveRegion&&(e.a11y.liveRegion[0].innerHTML=n?n.innerHTML:Object(r.escapeHTML)(i.alt))}}(e)}function u(e){Object(i.forEach)(e.pagination.bullets,(function(t){t.addEventListener("click",(function(){var t=e.slides[e.realIndex];setTimeout((function(){t.focus()}),500)}))}))}},38:function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return(function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}())}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&c()}function a(){s(o)}function c(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=e}return c}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;a.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),l=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},f=w(0,0,0,0);function h(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+h(e["border-"+n+"-width"])}),0)}function v(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return f;var r=d(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=h(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,a=h(r.width),c=h(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==t&&(a-=p(r,"left","right")+o),Math.round(c+s)!==n&&(c-=p(r,"top","bottom")+s)),!function(e){return e===d(e).document.documentElement}(e)){var u=Math.round(a+o)-t,l=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(l)&&(c-=l)}return w(i.left,i.top,a,c)}var b="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"==typeof e.getBBox};function m(e){return i?b(e)?function(e){var t=e.getBBox();return w(0,0,t.width,t.height)}(e):v(e):f}function w(e,t,n,r){return{x:e,y:t,width:n,height:r}}var y=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=m(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),_=function(e,t){var n,r,i,o,s,a,c,u=(r=(n=t).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),l(c,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),c);l(this,{target:e,contentRect:u})},g=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new y(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new _(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),E="undefined"!=typeof WeakMap?new WeakMap:new r,O=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new g(t,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){O.prototype[e]=function(){var t;return(t=E.get(this))[e].apply(t,arguments)}}));var x=void 0!==o.ResizeObserver?o.ResizeObserver:O;t.a=x},42:function(e,t,n){"use strict";n.r(t);n(35)},5:function(e,t){!function(){e.exports=this.lodash}()},64:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},65:function(e,t){e.exports=function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}},66:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(18),i=n.n(r),o=n(5);n(133);function s(){var e,t,r,s,a,c,u,l=arguments;return regeneratorRuntime.async((function(d){for(;;)switch(d.prev=d.next){case 0:return e=l.length>0&&void 0!==l[0]?l[0]:".swiper-container",t=l.length>1&&void 0!==l[1]?l[1]:{},r=l.length>2&&void 0!==l[2]?l[2]:{},s={effect:"slide",grabCursor:!0,init:!0,initialSlide:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{bulletElement:"button",clickable:!0,el:".swiper-pagination",type:"bullets"},preventClicksPropagation:!1,releaseFormElements:!1,setWrapperSize:!0,touchStartPreventDefault:!1,on:Object(o.mapValues)(r,(function(e){return function(){e(this)}}))},d.next=6,regeneratorRuntime.awrap(Promise.all([n.e(16).then(n.t.bind(null,264,7)),n.e(16).then(n.t.bind(null,265,7))]));case 6:return a=d.sent,c=i()(a,1),u=c[0].default,d.abrupt("return",new u(e,Object(o.merge)({},s,t)));case 10:case"end":return d.stop()}}))}},73:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},74:function(e,t){!function(){e.exports=this.wp.domReady}()}}));