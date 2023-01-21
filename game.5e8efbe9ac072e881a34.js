!function(){"use strict";var t,e={646:function(t,e,n){var r,o,i=n(666),c=n.n(i),u=n(979);function a(t,e){if(r&&r.destroy(),o&&o.destroy(),"development"===process.env.mode){var n=t.padding.right+t.padding.right,i=t.padding.top+t.padding.bottom,c=r=new u.Graphics;c.beginFill(16777215),c.drawRect(0,0,t.width,t.height);var a=o=new u.Graphics;a.beginFill(16777215),a.drawRect(-t.padding.left,-t.padding.top,t.width+n,t.height+i),console.log(i),e.addChild(c,a),c.alpha=.1,a.alpha=.1}}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(r);if(o){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this)).specification=t,e}return e=c,(n=[{key:"sceneName",get:function(){return this.specification.name}}])&&s(e.prototype,n),c}(u.Container),y={name:"LOADING",layout:{loadingBar:{x:40,y:100,width:240,height:15,padding:1,background:{colour:4473924},bar:{colour:10066329}},loadingBarText:{x:160,y:120,anchor:{x:.5,y:0},text:"0%",style:{fill:"white"}}}};function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=b(e);if(n){var o=b(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return v(this,t)});function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this)).options=t,e.progress=0,e.x=t.x,e.y=t.y,e.background=new u.Graphics,e.background.beginFill(t.background.colour),e.background.drawRect(0,0,t.width+t.padding,t.height+t.padding),e.bar=new u.Graphics,e.drawBar(),e.addChild(e.background,e.bar),e}var i=o.prototype;return i.updateProgress=function(t){this.bar.clear(),this.progress=t,this.drawBar()},i.drawBar=function(){var t=this.options.padding,e=this.options.padding,n=Math.max(this.options.width*this.progress-this.options.padding,1),r=this.options.height-this.options.padding;this.bar.beginFill(this.options.bar.colour),this.bar.drawRect(t,e,n,r)},o}(u.Container);function m(t,e){t.x=e.x||0,t.y=e.y||0,e.anchor&&t.anchor&&(isNaN(e.anchor)?(t.anchor.x=e.anchor.x||0,t.anchor.y=e.anchor.y||0):t.anchor.set(e.anchor))}function _(t){var e=new u.Text(t.text,t.style);return m(e,t),e}function x(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function P(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){x(i,r,o,c,u,"next",t)}function u(t){x(i,r,o,c,u,"throw",t)}c(void 0)}))}}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=j(e);if(n){var o=j(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return R(this,t)});function o(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,y)).name="LOADING",u.Loader.shared.onProgress.add((function(e,n){return t.updateProgress(e,n)})),t.loadingBar=new O(y.layout.loadingBar),t.addChild(t.loadingBar),t.progressText=_(y.layout.loadingBarText),t.addChild(t.progressText),t}var i=o.prototype;return i.initialise=function(t){this.visible=!1,t.addChild(this)},i.hide=function(){var t=this;return P(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.visible=!1;case 1:case"end":return e.stop()}}),e)})))()},i.show=function(){var t=this;return P(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.visible=!0;case 1:case"end":return e.stop()}}),e)})))()},i.updateBarProgress=function(t){this.progressText.text=function(t){var e=0;return t<=1&&(e=100*t),"".concat(e,"%")}(t),this.loadingBar.updateProgress(t)},i.updateProgress=function(t,e){},o}(d),E=n(242);function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var M=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=B(e);if(n){var o=B(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return L(this,t)});function o(){return T(this,o),r.apply(this,arguments)}return o}(E.MZ);function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function G(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var z=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return G(this,t)});function c(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this)).spec=t,n.index=e,n.onPointerClick=new U,n.background=new u.Graphics,n.background.beginFill(16777215),n.background.drawRect(0,0,n.width+n.thickness,n.height+n.thickness),n.outline=new u.Graphics,n.outline.beginFill(t.graphic.color),n.outline.drawRect(0,0,n.width,n.thickness),n.outline.drawRect(n.width,0,n.thickness,n.height+n.thickness),n.outline.drawRect(0,n.height,n.width+n.thickness,n.thickness),n.outline.drawRect(0,0,n.thickness,n.height),n.alpha=t.alpha,n.addChild(n.background,n.outline),n.interactive=!0,n.buttonMode=!0,n.on("pointerover",(function(){return n.onPointerClick.emit(n.index)})),n}return e=c,(n=[{key:"tint",set:function(t){this.background.tint=t}},{key:"width",get:function(){return this.spec.padding+this.spec.margin}},{key:"height",get:function(){return this.spec.padding+this.spec.margin}},{key:"thickness",get:function(){return this.spec.graphic.thickness}}])&&H(e.prototype,n),c}(u.Container);function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function F(t,e){return!e||"object"!==Z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Z=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=D(e);if(n){var o=D(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return F(this,t)});function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this)).spec=t,e.cells=[];for(var n=0;n<e.spec.width;n++)for(var i=0;i<e.spec.height;i++){var c=new A(t.cell,e.cells.length);c.position.x=n*c.width,c.position.y=i*c.height,e.cells.push(c),e.addChild(c),c.onPointerClick.connect((function(t){console.log(t),e.cells[t].tint=255}))}return e}var i=o.prototype;return i.onCellMouseUp=function(){},i.onCellMouseDown=function(){},o}(u.Container),J={name:"SHOP",layout:{field:{width:10,height:5,x:10,y:25,cell:{padding:30,margin:1,alpha:.2,graphic:{color:8816262,thickness:1}}}}};function K(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function Q(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){K(i,r,o,c,u,"next",t)}function u(t){K(i,r,o,c,u,"throw",t)}c(void 0)}))}}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,e){return!e||"object"!==tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $(t,e){return($=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var tt=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var et=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=V(e);if(n){var o=V(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Y(this,t)});function o(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,J)).field=new q(J.layout.field),t.addChild(t.field),m(t.field,J.layout.field),t}var i=o.prototype;return i.initialise=function(t){this.visible=!1,t.addChild(this)},i.hide=function(){var t=this;return Q(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.visible=!1;case 1:case"end":return e.stop()}}),e)})))()},i.show=function(){var t=this;return Q(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.visible=!0;case 1:case"end":return e.stop()}}),e)})))()},o}(d);function nt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ot(t,e){return!e||"object"!==ct(e)&&"function"!=typeof e?nt(t):e}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ct=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var ut=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=rt(e);if(n){var o=rt(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return ot(this,t)});function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=r.call(this)).sprite=function(t){var e,n;if(t.sheet&&u.Loader.shared.resources[t.sheet].textures&&(e=u.Loader.shared.resources[t.sheet].textures),t.frame&&e){n=e[t.frame];var r=new u.Sprite(n);return m(r,t),r}var o=new u.Sprite;return m(o,t),o}(e.sprite),n.addChild(n.sprite),e.text&&(n.text=_(e.text),n.addChild(n.text)),n.on("pointerdown",t),n.buttonMode=!0,n.interactive=!0,m(nt(n),e),n}return o}(u.Container),at={name:"MENU",layout:{buttons:{start:{x:160,y:25,sprite:{anchor:.5,sheet:"assets/UI/UI_buttons.json",frame:"blue_button00.png"},text:{anchor:.5,text:"Start",style:{fill:"white"}}},load:{x:160,y:75,sprite:{anchor:.5,sheet:"assets/UI/UI_buttons.json",frame:"blue_button00.png"},text:{anchor:.5,text:"Load",style:{fill:"white"}}},multiplayer:{x:160,y:125,sprite:{anchor:.5,sheet:"assets/UI/UI_buttons.json",frame:"blue_button00.png"},text:{anchor:.5,text:"Multiplayer",style:{fill:"white"}}},settings:{x:160,y:175,sprite:{anchor:.5,sheet:"assets/UI/UI_buttons.json",frame:"blue_button00.png"},text:{anchor:.5,text:"Settings",style:{fill:"white"}}}}}};function st(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function ft(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){st(i,r,o,c,u,"next",t)}function u(t){st(i,r,o,c,u,"throw",t)}c(void 0)}))}}function lt(t){return(lt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function pt(t,e){return!e||"object"!==dt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ht(t,e){return(ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var dt=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var yt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ht(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=lt(e);if(n){var o=lt(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return pt(this,t)});function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,at)}var i=o.prototype;return i.initialise=function(t){this.visible=!1,t.addChild(this);var e=at.layout.buttons,n=e.start,r=e.load,o=e.multiplayer,i=e.settings;this.buttons={start:this.addChild(new ut((function(){return console.log("hello")}),n)),load:this.addChild(new ut((function(){return console.log("hello")}),r)),multiplayer:this.addChild(new ut((function(){return console.log("hello")}),o)),settings:this.addChild(new ut((function(){return console.log("hello")}),i))}},i.hide=function(){var t=this;return ft(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.visible=!1,t.interactiveChildren=!1;case 2:case"end":return e.stop()}}),e)})))()},i.show=function(){var t=this;return ft(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.visible=!0,t.interactiveChildren=!0;case 2:case"end":return e.stop()}}),e)})))()},o}(d);function bt(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}var vt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scenes={LOADING:new C,SHOP:new et,MENU:new yt}}var e=t.prototype;return e.preLoadInitialise=function(t){this.scenes.LOADING.initialise(t)},e.postLoadInitialise=function(t){this.scenes.SHOP.initialise(t),this.scenes.MENU.initialise(t)},e.switchScene=function(t){var e,n=this;return(e=c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.currentScene){e.next=8;break}if(t===(null===(r=n.currentScene)||void 0===r?void 0:r.sceneName)){e.next=6;break}return e.next=5,n.currentScene.hide();case 5:n.currentScene=n.scenes[t];case 6:e.next=9;break;case 8:n.currentScene=n.scenes[t];case 9:return e.next=11,n.currentScene.show();case 11:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(t){bt(i,r,o,c,u,"next",t)}function u(t){bt(i,r,o,c,u,"throw",t)}c(void 0)}))})()},t}();function wt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var gt=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onResize=new U,this.onReorient=new U,this.currentHeight=window.innerHeight,this.currentWidth=window.innerWidth,this.currentOrientation=this.orientation,this.currentScale=0,this.timeOut=setTimeout((function(){return e.resize()}),0),window.addEventListener("resize",(function(){var t=e;clearTimeout(e.timeOut),e.timeOut=setTimeout((function(){return t.resize()}),500)})),this.resize()}var e,n;return t.prototype.resize=function(){var t=window.innerWidth>window.innerHeight?"landscape":"portrait",e=t!==this.currentOrientation;this.currentOrientation=t;var n=window.innerWidth-this.horizontalPadding,r=window.innerHeight-this.verticalPadding;n/r>=this.ratio?(this.currentWidth=r*this.ratio,this.currentHeight=r,this.currentScale=this.currentHeight/Ot.height):(this.currentWidth=n,this.currentHeight=n/this.ratio,this.currentScale=this.currentWidth/Ot.width),this.onResize.emit(),e&&this.onReorient.emit()},e=t,(n=[{key:"orientation",get:function(){return this.layoutWidth>this.layoutHeight?"landscape":"portrait"}},{key:"layoutWidth",get:function(){return this.currentWidth}},{key:"layoutHeight",get:function(){return this.currentHeight}},{key:"ratio",get:function(){return Ot.width/Ot.height}},{key:"verticalPadding",get:function(){return Ot.padding[this.currentOrientation].top+Ot.padding[this.currentOrientation].bottom}},{key:"horizontalPadding",get:function(){return Ot.padding[this.currentOrientation].left+Ot.padding[this.currentOrientation].right}},{key:"padding",get:function(){return Ot.padding[this.currentOrientation]}},{key:"scale",get:function(){return this.currentScale}},{key:"width",get:function(){return Ot.width}},{key:"height",get:function(){return Ot.height}},{key:"position",get:function(){var t=window.innerWidth-this.currentWidth,e=window.innerHeight-this.currentHeight,n=Ot.padding[this.currentOrientation].top-Ot.padding[this.currentOrientation].bottom,r=Ot.padding[this.currentOrientation].left-Ot.padding[this.currentOrientation].right;return new u.Point(t/2+r,e/2+n)}}])&&wt(e.prototype,n),t}(),Ot={width:320,height:200,padding:{landscape:{bottom:25,top:25,left:25,right:25},portrait:{bottom:230,top:230,left:0,right:0}}},mt={preload:["assets/bunny_green.png"],menu:["assets/UI/UI_buttons.json"]},_t=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return t.load=function(t){var e=!0,n=!1,r=void 0;try{for(var o,i=mt[t][Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var c=o.value;console.log(c),u.Loader.shared.add(c,c)}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}return new Promise((function(t){return u.Loader.shared.load((function(){return t()}))}))},t}();function xt(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function Pt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){xt(i,r,o,c,u,"next",t)}function u(t){xt(i,r,o,c,u,"throw",t)}c(void 0)}))}}function jt(t){return(jt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Rt(t,e){return!e||"object"!==St(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function kt(t,e){return(kt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var St=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};u.settings.ROUND_PIXELS=!0,u.settings.SCALE_MODE=u.SCALE_MODES.NEAREST;var Ct,Et=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&kt(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=jt(e);if(n){var o=jt(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Rt(this,t)});function o(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,{resizeTo:window})).onLoadComplete=new U,t.sceneManager=new vt,t.baseLayout=new gt,t.initialise(),a(t.baseLayout,t.stage),t}var i=o.prototype;return i.initialise=function(){var t=this;return Pt(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.baseLayout.onResize.connect((function(){t.stage.scale.set(t.baseLayout.scale),t.stage.position.copyFrom(t.baseLayout.position),a(t.baseLayout,t.stage)})),t.sceneManager.preLoadInitialise(t.stage),e.next=4,t.loadGame();case 4:t.sceneManager.postLoadInitialise(t.stage),t.sceneManager.switchScene("MENU"),t.onLoadComplete.emit();case 7:case"end":return e.stop()}}),e)})))()},i.loadGame=function(){var t=this;return Pt(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.sceneManager.switchScene("LOADING");case 2:return e.next=4,_t.load("menu");case 4:return e.next=6,_t.load("preload");case 6:case"end":return e.stop()}}),e)})))()},o}(u.Application),Tt=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pixiApplication=new Et,document.body.appendChild(this.pixiApplication.view),"development"===process.env.mode&&(window.PIXI=u)};function Bt(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}window.onload=(Ct=c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:new Tt;case 1:case"end":return t.stop()}}),t)})),function(){var t=this,e=arguments;return new Promise((function(n,r){var o=Ct.apply(t,e);function i(t){Bt(o,n,r,i,c,"next",t)}function c(t){Bt(o,n,r,i,c,"throw",t)}i(void 0)}))})}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,t=[],r.O=function(e,n,o,i){if(!n){var c=1/0;for(f=0;f<t.length;f++){n=t[f][0],o=t[f][1],i=t[f][2];for(var u=!0,a=0;a<n.length;a++)(!1&i||c>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[a])}))?n.splice(a--,1):(u=!1,i<c&&(c=i));if(u){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[n,o,i]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t={179:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,c=n[0],u=n[1],a=n[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(a)var f=a(r)}for(e&&e(n);s<c.length;s++)i=c[s],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(f)},n=self.webpackChunkpixi_typescript_boilerplate=self.webpackChunkpixi_typescript_boilerplate||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=r.O(void 0,[558],(function(){return r(646)}));o=r.O(o)}();