(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{BIfM:function(t,e,n){"use strict";n.r(e),n.d(e,"IonMenu",function(){return a}),n.d(e,"IonMenuButton",function(){return d}),n.d(e,"IonMenuToggle",function(){return p});var i=n("cBjU"),o=n("/Sew"),r=function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})},s=function(t,e){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},a=function(){function t(){this.lastOnEnd=0,this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&e&&(n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(o.f)(this.win,this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.componentWillLoad=function(){return r(this,void 0,void 0,function(){var t;return s(this,function(e){switch(e.label){case 0:return null==this.type&&(this.type=this.config.get("menuType","ios"===this.mode?"reveal":"overlay")),this.isServer?(this.disabled=!0,[3,3]):[3,1];case 1:return t=this,[4,this.lazyMenuCtrl.componentOnReady()];case 2:t.menuCtrl=e.sent(),e.label=3;case 3:return[2]}})})},t.prototype.componentDidLoad=function(){return r(this,void 0,void 0,function(){var t,e,i,o,r,a=this;return s(this,function(s){switch(s.label){case 0:return this.isServer?[2]:(t=this.el.parentNode,(e=this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]"))&&e.tagName?(this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,null),this.sideChanged(),1!=(i=!this.disabled)&&void 0!==i?[3,2]:[4,this.menuCtrl.getMenus()]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]));case 1:o=s.sent(),i=!o.some(function(t){return t.side===a.side&&!t.disabled}),s.label=2;case 2:return this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!i,open:this._isOpen}),r=this,[4,n.e(125).then(n.bind(null,"uSsP"))];case 3:return r.gesture=s.sent().createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:40,threshold:10,canStart:this.canStart.bind(this),onWillStart:this.onWillStart.bind(this),onStart:this.onStart.bind(this),onMove:this.onMove.bind(this),onEnd:this.onEnd.bind(this)}),this.disabled=!i,this.updateState(),[2]}})})},t.prototype.componentDidUnload=function(){this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),this.menuCtrl._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),r(this,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,this._isOpen]:(this.beforeAnimation(),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,t]}})})},t.prototype.loadAnimation=function(){return r(this,void 0,void 0,function(){var t,e;return s(this,function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,this.menuCtrl.createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),[2]}})})},t.prototype.startAnimation=function(t,e){return r(this,void 0,void 0,function(){var n;return s(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!t),e?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpen()&&function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i}(this.win,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation&&this.animation.reverse(this._isOpen).progressStart()},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=u(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(e)}},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=u(t.deltaX,n,i),r=this.width,s=o/r,a=t.velocityX,c=r/2,l=a>=0&&(a>.2||t.deltaX>c),h=a<=0&&(a<-.2||t.deltaX<-c),d=n?i?l:h:i?h:l,p=!n&&d;n&&!d&&(p=!0);var m=(d?1-s:s)*r,b=0;if(m>5){var f=m/Math.abs(a);b=Math.min(f,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(function(){return e.afterAnimation(p)},{clearExistingCallacks:!0}).progressEnd(d,s,b)}},t.prototype.beforeAnimation=function(){this.el.classList.add(c),this.backdropEl&&this.backdropEl.classList.add(l),this.isAnimating=!0},t.prototype.afterAnimation=function(t){this._isOpen=t,this.isAnimating=!1,this.enableListener(this,"body:click",t),t?(this.contentEl&&this.contentEl.classList.add(h),this.ionOpen.emit()):(this.el.classList.remove(c),this.contentEl&&this.contentEl.classList.remove(h),this.backdropEl&&this.backdropEl.classList.remove(l),this.ionClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this)},t.prototype.forceClosing=function(){this.isAnimating=!0,this.startAnimation(!1,!1),this.afterAnimation(!1)},t.prototype.hostData=function(){var t,e=this.isEndSide,n=this.disabled,i=this.isPaneVisible;return{role:"complementary",class:(t={},t["menu-type-"+this.type]=!0,t["menu-enabled"]=!n,t["menu-side-end"]=e,t["menu-side-start"]=!e,t["menu-pane-visible"]=i,t)}},t.prototype.render=function(){var t=this;return[Object(i.b)("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},Object(i.b)("slot",null)),Object(i.b)("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(t,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--width-small:264px;left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);height:100%;contain:strict;background:var(--ion-background-color,#fff)}:host(.menu-side-start) .menu-inner{right:auto;left:0}:host(.menu-side-end) .menu-inner{right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}.menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}@media (max-width:340px){.menu-inner{width:var(--width-small)}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function u(t,e,n){return Math.max(0,e!==n?-t:t)}var c="show-menu",l="show-backdrop",h="menu-content-open",d=function(){function t(){this.autoHide=!0}return t.prototype.hostData=function(){return{class:{button:!0}}},t.prototype.render=function(){var t=this.config.get("menuIcon","menu");return Object(i.b)("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},Object(i.b)("button",{type:"button"},Object(i.b)("slot",null,Object(i.b)("ion-icon",{icon:t,mode:this.mode,color:this.color,lazy:!1}))))},Object.defineProperty(t,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;color:var(--ion-color-primary,#3880ff)}button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 5px}ion-icon{margin:0;padding:0;pointer-events:none;font-size:31px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){this.visible=!1,this.autoHide=!0}return t.prototype.componentDidLoad=function(){this.updateVisibility()},t.prototype.onClick=function(){return r(this,void 0,void 0,function(){var t;return s(this,function(e){switch(e.label){case 0:return[4,m(this.doc)];case 1:return(t=e.sent())?[4,t.get(this.menu)]:[3,3];case 2:if(e.sent())return[2,t.toggle(this.menu)];e.label=3;case 3:return[2,!1]}})})},t.prototype.updateVisibility=function(){return r(this,void 0,void 0,function(){var t,e,n;return s(this,function(i){switch(i.label){case 0:return[4,m(this.doc)];case 1:return(t=i.sent())?[4,t.get(this.menu)]:[3,5];case 2:return e=i.sent(),(n=e)?[4,e.isActive()]:[3,4];case 3:n=i.sent(),i.label=4;case 4:if(n)return this.visible=!0,[2];i.label=5;case 5:return this.visible=!1,[2]}})})},t.prototype.hostData=function(){var t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}}},t.prototype.render=function(){return Object(i.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}();function m(t){var e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}}}]);