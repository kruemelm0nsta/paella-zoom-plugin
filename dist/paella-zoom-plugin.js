!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("paella-core")):"function"==typeof define&&define.amd?define(["paella-core"],e):"object"==typeof exports?exports["paella-zoom-plugin"]=e(require("paella-core")):t["paella-zoom-plugin"]=e(t[void 0])}(self,(t=>(()=>{var e={194:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>m});var r=n(995);const o=JSON.parse('{"u2":"paella-zoom-plugin","i8":"1.27.0"}');var i={},u=n(456);u.keys().forEach((function(t){var e=/([a-z-]+[A-Z_]+)\.json/.exec(t),n=e&&e[1];if(n){var r=u(t);i[n]=r;var o=n.substring(0,2);o in i||(i[o]=r)}}));const a=i;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function y(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(v,t);var e,n,r,i,u,c,m=(u=v,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(u);if(c){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return y(this,t)});function v(){return l(this,v),m.apply(this,arguments)}return e=v,n=[{key:"moduleName",get:function(){return o.u2}},{key:"moduleVersion",get:function(){return o.i8}},{key:"getDictionaries",value:(r=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a);case 1:case"end":return t.stop()}}),t)})),i=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function u(t){s(i,n,o,u,a,"next",t)}function a(t){s(i,n,o,u,a,"throw",t)}u(void 0)}))},function(){return i.apply(this,arguments)})}],n&&f(e.prototype,n),v}(r.PluginModule)},392:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>v});var r=n(995),o=n(629),i=n(288),u=n.n(i);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){c(i,r,o,u,a,"next",t)}function a(t){c(i,r,o,u,a,"throw",t)}u(void 0)}))}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},p(t,e,n||t)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function h(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(b,t);var e,n,r,i,a,c,v,d=(c=b,v=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(c);if(v){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function b(){return l(this,b),d.apply(this,arguments)}return e=b,n=[{key:"getAriaLabel",value:function(){return"Zoom in"}},{key:"getDescription",value:function(){return this.getAriaLabel()}},{key:"isEnabled",value:(a=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(m(b.prototype),"isEnabled",this).call(this);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",!1);case 4:return this.target=this.config.target,this._canvas=this.player.videoContainer.streamProvider.streams[this.target].canvas,t.abrupt("return",this._canvas instanceof o.ZoomCanvas);case 7:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"load",value:(i=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.icon=this.player.getCustomPluginIcon(this.name,"zoomInIcon")||u();case 1:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"action",value:(r=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this._canvas.zoomIn();case 1:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}],n&&f(e.prototype,n),b}(r.ButtonPlugin)},410:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var r=n(995),o=n(629),i=n(288),u=n.n(i),a=n(716),c=n.n(a);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){l(i,r,o,u,a,"next",t)}function a(t){l(i,r,o,u,a,"throw",t)}u(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},h(t,e,n||t)}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function v(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(g,t);var e,n,r,i,a,s,l,b=(s=g,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(s);if(l){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return v(this,t)});function g(){return p(this,g),b.apply(this,arguments)}return e=g,n=[{key:"getAriaLabel",value:function(){return"Show video zoom options"}},{key:"getDescription",value:function(){return this.getAriaLabel()}},{key:"isEnabled",value:(a=f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(d(g.prototype),"isEnabled",this).call(this);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",!1);case 4:return this._target=this.config.target||"presenter",this._canvas=this.player.videoContainer.streamProvider.streams[this._target].canvas,t.abrupt("return",this._canvas instanceof o.ZoomCanvas);case 7:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"load",value:(i=f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.icon=this.player.getCustomPluginIcon(this.name,"zoomInIcon")||u();case 1:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"getMenu",value:(r=f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[{id:"in",title:"Zoom in",icon:this.player.getCustomPluginIcon(this.name,"zoomInIcon")||u()},{id:"out",title:"Zoom out",icon:this.player.getCustomPluginIcon(this.name,"zoomOutIcon")||c()}]);case 1:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"buttonType",get:function(){return"button"}},{key:"showTitles",get:function(){return!1}},{key:"itemSelected",value:function(t){switch(t.id){case"in":this._canvas.zoomIn();break;case"out":this._canvas.zoomOut()}}}],n&&y(e.prototype,n),g}(r.MenuButtonPlugin)},426:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>v});var r=n(995),o=n(629),i=n(716),u=n.n(i);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){c(i,r,o,u,a,"next",t)}function a(t){c(i,r,o,u,a,"throw",t)}u(void 0)}))}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},p(t,e,n||t)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function h(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(b,t);var e,n,r,i,a,c,v,d=(c=b,v=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(c);if(v){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function b(){return l(this,b),d.apply(this,arguments)}return e=b,n=[{key:"getAriaLabel",value:function(){return"Zoom out"}},{key:"getDescription",value:function(){return this.getAriaLabel()}},{key:"isEnabled",value:(a=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(m(b.prototype),"isEnabled",this).call(this);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",!1);case 4:return this.target=this.config.target,this._canvas=this.player.videoContainer.streamProvider.streams[this.target].canvas,t.abrupt("return",this._canvas instanceof o.ZoomCanvas);case 7:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"load",value:(i=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.icon=this.player.getCustomPluginIcon(this.name,"zoomOutIcon")||u();case 1:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"action",value:(r=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this._canvas.zoomOut();case 1:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}],n&&f(e.prototype,n),b}(r.ButtonPlugin)},629:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ZoomCanvas:()=>w,default:()=>A});var r=n(995),o=n(379),i=n.n(o),u=n(547);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e,n){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},c(t,e,n||t)}function s(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function b(t,e,n){var r={left:t.offsetWidth/2,top:t.offsetHeight/2};e.style.width="".concat(100*n,"%"),e.style.height="".concat(100*n,"%"),e.offsetLeft,e.offsetTop;var o=e.offsetWidth,i=e.offsetHeight,u={left:o/2-r.left,top:i/2-r.top};return 1==n?(e.style.left="0px",e.style.top="0px",u.left=r.left,u.top=r.top):(e.style.left="-".concat(u.left,"px"),e.style.top="-".concat(u.top,"px")),u}function g(t,e,n){var r={left:e.left+n.left,top:e.top+n.top},o=t.parentElement;return t.style.top="-".concat(r.top,"px"),t.offsetHeight+t.offsetTop-o.offsetHeight<0&&(r.top=e.top),t.style.left="-".concat(r.left,"px"),t.offsetWidth+t.offsetLeft-o.offsetWidth<0&&(r.left=e.left),r}i()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;var w=function(t){y(i,t);var e,n,o=m(i);function i(t,e,n){var r;return l(this,i),(r=o.call(this,"div",t,e)).config=n,r._maxZoom=r.config.maxZoom||4,r._showButtons=void 0===r.config.showButtons||r.config.showButtons,r}return p(i,[{key:"loadCanvas",value:(e=regeneratorRuntime.mark((function t(e){var n,o,i,u,a,c,s,l,f=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.currentZoom=1,this._videoPlayer=e,e.element.style.width="100%",e.element.style.height="100%",e.element.style.position="absolute",e.element.style.top="0",e.element.style.left="0",this.element.style.overflow="hidden",this.element.style.position="relative",n=function(t){if(t.stopPropagation(),t.altKey){f.hideAltKeyMessage();var e=void 0!==t.deltaY?.1*t.deltaY:4*t.detail,n=f.currentZoom+-.01*e;n>1&&n<=f._maxZoom?(f.currentZoom=n,f._playerCenter=b(f.element,f._videoPlayer.element,f.currentZoom)):n<=1&&(f.currentZoom=1,f._playerCenter=b(f.element,f._videoPlayer.element,f.currentZoom)),t.preventDefault()}else f.showAltKeyMessage()},this.element.addEventListener("DOMMouseScroll",n),this.element.addEventListener("mousewheel",n),o=!1,i=!1,u=null,a=function(){return o=!0},c=function(){return o=!1},s=function(t){i&&(t.stopPropagation(),t.preventDefault())},this.element.addEventListener("mousedown",a),this.element.addEventListener("mouseleave",c),this.element.addEventListener("mouseup",c),this.element.addEventListener("click",s),this.element.addEventListener("mouseup",s),this.element.addEventListener("mousemove",(function(t){if(o&&f._playerCenter){null===u&&(u={left:t.clientX,top:t.clientY}),i=!0;var e={left:u.left-t.clientX,top:u.top-t.clientY};1==f.currentZoom?f._playerCenter={left:0,top:0}:f._playerCenter=g(f._videoPlayer.element,f._playerCenter,e),u={left:t.clientX,top:t.clientY}}else i=!1,u=null})),l=this.player.translate("Press ALT to zoom"),this._zoomMessage=(0,r.createElementWithHtmlText)('\n            <div class="zoom-message">'.concat(l,"</div>\n        "),this.element),this._zoomMessage.style.display="none";case 27:case"end":return t.stop()}}),t,this)})),n=function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(t){s(i,r,o,u,a,"next",t)}function a(t){s(i,r,o,u,a,"throw",t)}u(void 0)}))},function(t){return n.apply(this,arguments)})},{key:"showAltKeyMessage",value:function(){var t=this;this._hideTimeout&&clearTimeout(this._hideTimeout),this._zoomMessage.style.display="",this._hideTimeout=setTimeout((function(){t.hideAltKeyMessage()}),2e3)}},{key:"hideAltKeyMessage",value:function(){this._zoomMessage.style.display="none",this._hideTimeout=null}},{key:"zoomIn",value:function(){var t=1.1*this.currentZoom;t<this._maxZoom&&(this.currentZoom=t,this._playerCenter=b(this.element,this._videoPlayer.element,this.currentZoom))}},{key:"zoomOut",value:function(){var t=.9*this.currentZoom;t>=1&&(this.currentZoom=t,this._playerCenter=b(this.element,this._videoPlayer.element,this.currentZoom))}}]),i}(r.Canvas),A=function(t){y(n,t);var e=m(n);function n(){return l(this,n),e.apply(this,arguments)}return p(n,[{key:"canvasType",get:function(){return"video"}},{key:"isCompatible",value:function(t){return!Array.isArray(t.canvas)||0===t.canvas.length||c(d(n.prototype),"isCompatible",this).call(this,t)}},{key:"getCanvasInstance",value:function(t){return new w(this.player,t,this.config)}}]),n}(r.CanvasPlugin)},547:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(15),o=n.n(r),i=n(645),u=n.n(i)()(o());u.push([t.id,".zoom-message {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    background-color: rgba(0, 0, 0, 0.5);\n    pointer-events: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n}\n\n.zoom-buttons {\n    position: absolute;\n    top: 2px;\n    left: 0px;\n    right: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.zoom-buttons button {\n    margin: 2px;\n    opacity: 0.4;\n    padding: 0;\n    width: 20px;\n    height: 20px;\n    display: block;\n}\n\n.zoom-buttons button:hover {\n    opacity: 1;\n}","",{version:3,sources:["webpack://./src/styles/zoom.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,WAAW;IACX,oCAAoC;IACpC,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;IACV,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,UAAU;AACd",sourcesContent:[".zoom-message {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    background-color: rgba(0, 0, 0, 0.5);\n    pointer-events: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n}\n\n.zoom-buttons {\n    position: absolute;\n    top: 2px;\n    left: 0px;\n    right: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.zoom-buttons button {\n    margin: 2px;\n    opacity: 0.4;\n    padding: 0;\n    width: 20px;\n    height: 20px;\n    display: block;\n}\n\n.zoom-buttons button:hover {\n    opacity: 1;\n}"],sourceRoot:""}]);const a=u},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},15:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n,r,o=(r=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(n,r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],u=o[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),s="/*# ".concat(c," */"),l=u.sources.map((function(t){return"/*# sourceURL=".concat(u.sourceRoot||"").concat(t," */")}));return[i].concat(l).concat([s]).join("\n")}return[i].join("\n")}},379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function u(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var f=u(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:m(p,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var u=o(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(e)}return e}var s,l=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var y=null,h=0;function m(t,e){var n,r,o;if(e.singleton){var i=h++;n=y||(y=c(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=u(n[r]);i[o].references--}for(var c=a(t,e),s=0;s<n.length;s++){var l=u(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}},288:t=>{t.exports='<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M17.094,18.048C15.976,18.956 14.551,19.5 13,19.5C9.413,19.5 6.5,16.587 6.5,13C6.5,9.413 9.413,6.5 13,6.5C16.587,6.5 19.5,9.413 19.5,13C19.5,14.522 18.976,15.923 18.098,17.031L19.553,18.487C20.094,17.958 20.962,17.962 21.498,18.498L25.522,22.522C26.062,23.062 26.062,23.938 25.522,24.478L24.519,25.481C23.98,26.02 23.103,26.02 22.563,25.481L18.539,21.457C18,20.917 18,20.041 18.539,19.501L18.543,19.497L17.094,18.048ZM13,8C15.76,8 18,10.24 18,13C18,15.76 15.76,18 13,18C10.24,18 8,15.76 8,13C8,10.24 10.24,8 13,8ZM13.927,11.886L15.927,11.886L15.927,13.886L13.927,13.886L13.927,15.886L11.927,15.886L11.927,13.886L9.927,13.886L9.927,11.886L11.927,11.886L11.927,9.886L13.927,9.886L13.927,11.886Z"></path></svg>'},716:t=>{t.exports='<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M17.094,18.048C15.976,18.956 14.551,19.5 13,19.5C9.413,19.5 6.5,16.587 6.5,13C6.5,9.413 9.413,6.5 13,6.5C16.587,6.5 19.5,9.413 19.5,13C19.5,14.522 18.976,15.923 18.098,17.031L19.553,18.487C20.094,17.958 20.962,17.962 21.498,18.498L25.522,22.522C26.062,23.062 26.062,23.938 25.522,24.478L24.519,25.481C23.98,26.02 23.103,26.02 22.563,25.481L18.539,21.457C18,20.917 18,20.041 18.539,19.501L18.543,19.497L17.094,18.048ZM13,8C15.76,8 18,10.24 18,13C18,15.76 15.76,18 13,18C10.24,18 8,15.76 8,13C8,10.24 10.24,8 13,8ZM9.927,11.886L15.927,11.886L15.927,13.886L9.927,13.886L9.927,11.886Z"></path></svg>'},456:(t,e,n)=>{var r={"./en-US.json":263,"./es-ES.json":992};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=456},757:(t,e,n)=>{var r={"./ZoomPluginsModule.js":194,"./es.upv.paella.zoomInButtonPlugin.js":392,"./es.upv.paella.zoomMenuButtonPlugin.js":410,"./es.upv.paella.zoomOutButtonPlugin.js":426,"./es.upv.paella.zoomPlugin.js":629};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=757},995:e=>{"use strict";e.exports=t},263:t=>{"use strict";t.exports=JSON.parse('{"Zoom in":"Zoom in","Zoom out":"Zoom out","Show video zoom options":"Show video zoom options"}')},992:t=>{"use strict";t.exports=JSON.parse('{"Zoom in":"Ampliar zoom del vídeo","Zoom out":"Reducir zoom de vídeo","Show video zoom options":"Mostrar opciones de zoom de vídeo"}')}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nc=void 0;var o={};return(()=>{"use strict";r.r(o),r.d(o,{ZoomCanvasPlugin:()=>a,ZoomInButtonPlugin:()=>c,ZoomMenuButtonPlugin:()=>l,ZoomOutButtonPlugin:()=>s,default:()=>u});var t=r(629),e=r(392),n=r(426),i=r(410);function u(){return r(757)}var a=t.default,c=e.default,s=n.default,l=i.default})(),o})()));
//# sourceMappingURL=paella-zoom-plugin.js.map