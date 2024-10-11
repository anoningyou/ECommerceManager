import{c as Z}from"./chunk-O3SJPPXD.js";import{b as Nt,e as ut,g as jt}from"./chunk-BEGFXWGT.js";import{$a as u,Ac as O,Ca as et,Cb as g,D as Ct,Da as W,Db as C,Eb as U,Fa as it,Fb as nt,Fc as at,Gb as ot,H as Tt,Ib as rt,Kb as Rt,L as bt,Lb as B,Nb as h,Ob as xt,Pb as Ft,Pc as Ht,Q as yt,Qc as ct,Sc as q,Tc as G,Vc as lt,Wa as E,X as z,Xa as st,Xb as T,Zb as R,_ as S,_a as c,a as d,b as x,ba as N,cc as P,da as p,db as Et,e as vt,ea as w,ia as H,j as y,jb as A,lc as $,ma as St,mb as At,p as F,pb as j,q as _t,sa as X,sb as D,sc as Ot,t as I,ta as tt,tb as l,ub as L,vb as Dt,wb as f,wc as Mt,xa as wt,y as It,ya as V}from"./chunk-FVSJTNRY.js";var Ut=["toast-component",""];function te(s,o){if(s&1){let t=rt();g(0,"button",5),B("click",function(){X(t);let i=h();return tt(i.remove())}),g(1,"span",6),T(2,"\xD7"),C()()}}function ee(s,o){if(s&1&&(nt(0),T(1),ot()),s&2){let t=h(2);c(),R("[",t.duplicatesCount+1,"]")}}function ie(s,o){if(s&1&&(g(0,"div"),T(1),j(2,ee,2,1,"ng-container",4),C()),s&2){let t=h();f(t.options.titleClass),D("aria-label",t.title),c(),R(" ",t.title," "),c(),l("ngIf",t.duplicatesCount)}}function se(s,o){if(s&1&&U(0,"div",7),s&2){let t=h();f(t.options.messageClass),l("innerHTML",t.message,st)}}function ne(s,o){if(s&1&&(g(0,"div",8),T(1),C()),s&2){let t=h();f(t.options.messageClass),D("aria-label",t.message),c(),R(" ",t.message," ")}}function oe(s,o){if(s&1&&(g(0,"div"),U(1,"div",9),C()),s&2){let t=h();c(),L("width",t.width()+"%")}}function re(s,o){if(s&1){let t=rt();g(0,"button",5),B("click",function(){X(t);let i=h();return tt(i.remove())}),g(1,"span",6),T(2,"\xD7"),C()()}}function ae(s,o){if(s&1&&(nt(0),T(1),ot()),s&2){let t=h(2);c(),R("[",t.duplicatesCount+1,"]")}}function ce(s,o){if(s&1&&(g(0,"div"),T(1),j(2,ae,2,1,"ng-container",4),C()),s&2){let t=h();f(t.options.titleClass),D("aria-label",t.title),c(),R(" ",t.title," "),c(),l("ngIf",t.duplicatesCount)}}function le(s,o){if(s&1&&U(0,"div",7),s&2){let t=h();f(t.options.messageClass),l("innerHTML",t.message,st)}}function ue(s,o){if(s&1&&(g(0,"div",8),T(1),C()),s&2){let t=h();f(t.options.messageClass),D("aria-label",t.message),c(),R(" ",t.message," ")}}function he(s,o){if(s&1&&(g(0,"div"),U(1,"div",9),C()),s&2){let t=h();c(),L("width",t.width()+"%")}}var ht=class{_attachedHost;component;viewContainerRef;injector;constructor(o,t){this.component=o,this.injector=t}attach(o,t){return this._attachedHost=o,o.attach(this,t)}detach(){let o=this._attachedHost;if(o)return this._attachedHost=void 0,o.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}},dt=class{_attachedPortal;_disposeFn;attach(o,t){return this._attachedPortal=o,this.attachComponentPortal(o,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(o){this._disposeFn=o}},mt=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new y;_activate=new y;_manualClose=new y;_resetTimeout=new y;_countDuplicate=new y;constructor(o){this._overlayRef=o}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(o,t){o&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},M=class{toastId;config;message;title;toastType;toastRef;_onTap=new y;_onAction=new y;constructor(o,t,e,i,n,r){this.toastId=o,this.config=t,this.message=e,this.title=i,this.toastType=n,this.toastRef=r,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(o){this._onAction.next(o)}onAction(){return this._onAction.asObservable()}},Bt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},Pt=new N("ToastConfig"),pt=class extends dt{_hostDomElement;_componentFactoryResolver;_appRef;constructor(o,t,e){super(),this._hostDomElement=o,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(o,t){let e=this._componentFactoryResolver.resolveComponentFactory(o.component),i;return i=e.create(o.injector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}_getComponentRootNode(o){return o.hostView.rootNodes[0]}},de=(()=>{class s{_document=w(O);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||s)};static \u0275prov=S({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),ft=class{_portalHost;constructor(o){this._portalHost=o}attach(o,t=!0){return this._portalHost.attach(o,t)}detach(){return this._portalHost.detach()}},me=(()=>{class s{_overlayContainer=w(de);_componentFactoryResolver=w(Et);_appRef=w($);_document=w(O);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let i=this._document.createElement("div");return i.id="toast-container",i.classList.add(t),i.classList.add("toast-container"),e?e.getContainerElement().appendChild(i):this._overlayContainer.getContainerElement().appendChild(i),i}_createPortalHost(t){return new pt(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new ft(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=S({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),kt=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,i,n,r){this.overlay=e,this._injector=i,this.sanitizer=n,this.ngZone=r,this.toastrConfig=d(d({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=d(d({},t.default.iconClasses),t.config.iconClasses))}show(t,e,i={},n=""){return this._preBuildNotification(n,t,e,this.applyConfig(i))}success(t,e,i={}){let n=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}error(t,e,i={}){let n=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}info(t,e,i={}){let n=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}warning(t,e,i={}){let n=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let i=this.toasts[this.currentlyActive].toastRef;i.isInactive()||(this.currentlyActive=this.currentlyActive+1,i.activate())}return!0}findDuplicate(t="",e="",i,n){let{includeTitleDuplicates:r}=this.toastrConfig;for(let a of this.toasts){let m=r&&a.title===t;if((!r||m)&&a.message===e)return a.toastRef.onDuplicate(i,n),a}return null}applyConfig(t={}){return d(d({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,i,n){return n.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,i,n)):this._buildNotification(t,e,i,n)}_buildNotification(t,e,i,n){if(!n.toastComponent)throw new Error("toastComponent required");let r=this.findDuplicate(i,e,this.toastrConfig.resetTimeoutOnDuplicate&&n.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&i||e)&&this.toastrConfig.preventDuplicates&&r!==null)return r;this.previousToastMessage=e;let a=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(a=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let m=this.overlay.create(n.positionClass,this.overlayContainer);this.index=this.index+1;let _=e;e&&n.enableHtml&&(_=this.sanitizer.sanitize(E.HTML,e));let v=new mt(m),K=new M(this.index,n,_,i,t,v),Gt=[{provide:M,useValue:K}],Yt=V.create({providers:Gt,parent:this._injector}),Jt=new ht(n.toastComponent,Yt),gt=m.attach(Jt,n.newestOnTop);v.componentInstance=gt.instance;let Q={toastId:this.index,title:i||"",message:e||"",toastRef:v,onShown:v.afterActivate(),onHidden:v.afterClosed(),onTap:K.onTap(),onAction:K.onAction(),portal:gt};return a||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{Q.toastRef.activate()})),this.toasts.push(Q),Q}static \u0275fac=function(e){return new(e||s)(p(Pt),p(me),p(V),p(Z),p(et))};static \u0275prov=S({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),pe=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=A(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,i){this.toastrService=t,this.toastPackage=e,this.ngZone=i,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(n=>{this.duplicatesCount=n}),this.state=A({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>x(d({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>x(d({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>x(d({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||s)(u(kt),u(M),u(et))};static \u0275cmp=H({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,i){e&1&&B("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),e&2&&(Rt("@flyInOut",i._state),f(i.toastClasses),L("display",i.displayStyle))},standalone:!0,features:[P],attrs:Ut,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,i){e&1&&j(0,te,3,0,"button",0)(1,ie,3,5,"div",1)(2,se,1,3,"div",2)(3,ne,2,4,"div",3)(4,oe,2,2,"div",4),e&2&&(l("ngIf",i.options.closeButton),c(),l("ngIf",i.title),c(),l("ngIf",i.message&&i.options.enableHtml),c(),l("ngIf",i.message&&!i.options.enableHtml),c(),l("ngIf",i.options.progressBar))},dependencies:[at],encapsulation:2,data:{animation:[Ht("flyInOut",[G("inactive",q({opacity:0})),G("active",q({opacity:1})),G("removed",q({opacity:0})),lt("inactive => active",ct("{{ easeTime }}ms {{ easing }}")),lt("active => removed",ct("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return s})(),fe=x(d({},Bt),{toastComponent:pe}),Pe=(s={})=>St([{provide:Pt,useValue:{default:fe,config:s}}]);var ge=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=A(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=A("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,i){this.toastrService=t,this.toastPackage=e,this.appRef=i,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(n=>{this.duplicatesCount=n})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||s)(u(kt),u(M),u($))};static \u0275cmp=H({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,i){e&1&&B("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),e&2&&(f(i.toastClasses),L("display",i.displayStyle))},standalone:!0,features:[P],attrs:Ut,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,i){e&1&&j(0,re,3,0,"button",0)(1,ce,3,5,"div",1)(2,le,1,3,"div",2)(3,ue,2,4,"div",3)(4,he,2,2,"div",4),e&2&&(l("ngIf",i.options.closeButton),c(),l("ngIf",i.title),c(),l("ngIf",i.message&&i.options.enableHtml),c(),l("ngIf",i.message&&!i.options.enableHtml),c(),l("ngIf",i.options.progressBar))},dependencies:[at],encapsulation:2,changeDetection:0})}return s})(),ke=x(d({},Bt),{toastComponent:ge});var zt=class s extends jt{_currentUser=A(null);currentUser=this._currentUser.asReadonly();constructor(){super(),Mt(()=>{this.currentUser()?localStorage.setItem("user",JSON.stringify(this.currentUser())):localStorage.removeItem("user")}),this.loadUser()}register(o){return this.http.post(this.getUrl(ut.Account.Register),o).pipe(I(t=>{t&&this.setCurrentUser(t)}))}login(o){return this.http.post(this.getUrl(ut.Account.Login),o).pipe(I(t=>{t&&this.setCurrentUser(t)}))}logout(){this._currentUser.set(null)}userIsInAnyRole(o){return(this.currentUser()?.roles?.filter(t=>o.includes(t))?.length??0)>0}loadUser(){let o=localStorage.getItem("user");if(o){let t=JSON.parse(o);this._currentUser.set(t)}else this._currentUser.set(null)}setCurrentUser(o){o.roles=[];let t=this.getDecodedToken(o.token).role;Array.isArray(t)?o.roles=t:o.roles.push(t),this._currentUser.set(o)}getDecodedToken(o){return JSON.parse(atob(o.split(".")[1]))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=S({token:s,factory:s.\u0275fac,providedIn:"root"})};var ve=["*"],Y;function _e(){if(Y===void 0&&(Y=null,typeof window<"u")){let s=window;s.trustedTypes!==void 0&&(Y=s.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return Y}function k(s){return _e()?.createHTML(s)||s}function Vt(s){return Error(`Unable to find icon with the name "${s}"`)}function Ie(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Wt(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function $t(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}var b=class{constructor(o,t,e){this.url=o,this.svgText=t,this.options=e}},Ce=(()=>{class s{constructor(t,e,i,n){this._httpClient=t,this._sanitizer=e,this._errorHandler=n,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=i}addSvgIcon(t,e,i){return this.addSvgIconInNamespace("",t,e,i)}addSvgIconLiteral(t,e,i){return this.addSvgIconLiteralInNamespace("",t,e,i)}addSvgIconInNamespace(t,e,i,n){return this._addSvgIconConfig(t,e,new b(i,null,n))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,i,n){let r=this._sanitizer.sanitize(E.HTML,i);if(!r)throw $t(i);let a=k(r);return this._addSvgIconConfig(t,e,new b("",a,n))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,i){return this._addSvgIconSetConfig(t,new b(e,null,i))}addSvgIconSetLiteralInNamespace(t,e,i){let n=this._sanitizer.sanitize(E.HTML,e);if(!n)throw $t(e);let r=k(n);return this._addSvgIconSetConfig(t,new b("",r,i))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(E.RESOURCE_URL,t);if(!e)throw Wt(t);let i=this._cachedIconsByUrl.get(e);return i?F(J(i)):this._loadSvgIconFromConfig(new b(t,null)).pipe(z(n=>this._cachedIconsByUrl.set(e,n)),I(n=>J(n)))}getNamedSvgIcon(t,e=""){let i=Zt(e,t),n=this._svgIconConfigs.get(i);if(n)return this._getSvgFromConfig(n);if(n=this._getIconConfigFromResolvers(e,t),n)return this._svgIconConfigs.set(i,n),this._getSvgFromConfig(n);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):_t(Vt(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?F(J(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(I(e=>J(e)))}_getSvgFromIconSetConfigs(t,e){let i=this._extractIconWithNameFromAnySet(t,e);if(i)return F(i);let n=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Ct(a=>{let _=`Loading icon set URL: ${this._sanitizer.sanitize(E.RESOURCE_URL,r.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(_)),F(null)})));return It(n).pipe(I(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw Vt(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let i=e.length-1;i>=0;i--){let n=e[i];if(n.svgText&&n.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(n),a=this._extractSvgIconFromSet(r,t,n.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(z(e=>t.svgText=e),I(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?F(null):this._fetchIcon(t).pipe(z(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,i){let n=t.querySelector(`[id="${e}"]`);if(!n)return null;let r=n.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,i);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),i);let a=this._svgElementFromString(k("<svg></svg>"));return a.appendChild(r),this._setSvgAttributes(a,i)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let i=e.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let e=this._svgElementFromString(k("<svg></svg>")),i=t.attributes;for(let n=0;n<i.length;n++){let{name:r,value:a}=i[n];r!=="id"&&e.setAttribute(r,a)}for(let n=0;n<t.childNodes.length;n++)t.childNodes[n].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[n].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:i}=t,n=i?.withCredentials??!1;if(!this._httpClient)throw Ie();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(E.RESOURCE_URL,e);if(!r)throw Wt(e);let a=this._inProgressUrlFetches.get(r);if(a)return a;let m=this._httpClient.get(r,{responseType:"text",withCredentials:n}).pipe(I(_=>k(_)),bt(()=>this._inProgressUrlFetches.delete(r)),yt());return this._inProgressUrlFetches.set(r,m),m}_addSvgIconConfig(t,e,i){return this._svgIconConfigs.set(Zt(t,e),i),this}_addSvgIconSetConfig(t,e){let i=this._iconSetConfigs.get(t);return i?i.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let i=0;i<this._resolvers.length;i++){let n=this._resolvers[i](e,t);if(n)return Te(n)?new b(n.url,null,n.options):new b(n,null)}}static{this.\u0275fac=function(e){return new(e||s)(p(Nt,8),p(Z),p(O,8),p(W))}}static{this.\u0275prov=S({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function J(s){return s.cloneNode(!0)}function Zt(s,o){return s+":"+o}function Te(s){return!!(s.url&&s.options)}var be=new N("MAT_ICON_DEFAULT_OPTIONS"),ye=new N("mat-icon-location",{providedIn:"root",factory:Se});function Se(){let s=w(O),o=s?s.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}var qt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],we=qt.map(s=>`[${s}]`).join(", "),Ee=/^url\(['"]?#(.*?)['"]?\)$/,mi=(()=>{class s{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,i,n,r,a){this._elementRef=t,this._iconRegistry=e,this._location=n,this._errorHandler=r,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=vt.EMPTY,a&&(a.color&&(this.color=this._defaultColor=a.color),a.fontSet&&(this.fontSet=a.fontSet)),i||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let i=t.childNodes[e];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),e.forEach(i=>t.classList.add(i)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((i,n)=>{i.forEach(r=>{n.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(we),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let n=0;n<e.length;n++)qt.forEach(r=>{let a=e[n],m=a.getAttribute(r),_=m?m.match(Ee):null;if(_){let v=i.get(a);v||(v=[],i.set(a,v)),v.push({name:r,value:_[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,i]=this._splitIconName(t);e&&(this._svgNamespace=e),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,e).pipe(Tt(1)).subscribe(n=>this._setSvgElement(n),n=>{let r=`Error retrieving icon ${e}:${i}! ${n.message}`;this._errorHandler.handleError(new Error(r))})}}static{this.\u0275fac=function(e){return new(e||s)(u(it),u(Ce),wt("aria-hidden"),u(ye),u(W),u(be,8))}}static{this.\u0275cmp=H({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,i){e&2&&(D("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),f(i.color?"mat-"+i.color:""),Dt("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ot],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[At,P],ngContentSelectors:ve,decls:1,vars:0,template:function(e,i){e&1&&(xt(),Ft(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}}return s})();export{kt as a,Pe as b,zt as c,mi as d};
