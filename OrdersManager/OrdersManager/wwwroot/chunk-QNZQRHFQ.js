import{d as N}from"./chunk-N2QAKZXN.js";import{b as L,c as R,d as W}from"./chunk-YBUQXEXK.js";import{C as O,D as k,E as A,H as B,c as S,d as F,i as T,p as P,t as E,u as D}from"./chunk-QDSZNKKS.js";import{ba as V}from"./chunk-BEGFXWGT.js";import{Cb as r,Db as a,Ea as g,Eb as y,Ib as M,Lb as w,Nb as l,Xb as p,Yb as s,_a as o,bc as v,cc as h,ia as d,jb as x,lb as C,pb as b,sa as u,sb as _,ta as c,tb as I,wa as f,yb as m}from"./chunk-FVSJTNRY.js";function H(t,n){if(t&1){let e=M();r(0,"button",4),w("click",function(){u(e);let G=l();return c(G.onTogglePasswordVisibility())}),r(1,"mat-icon"),p(2),a()()}if(t&2){let e=l();_("aria-label","Hide password")("aria-pressed",e.hidePassword()),o(2),s(e.hidePassword()?"visibility_off":"visibility")}}function U(t,n){if(t&1&&(r(0,"mat-error",3),p(1),a()),t&2){let e=l();o(),s(e.getErrorMessage())}}var z=class t extends W{hidePassword=x(!0);type=g("text");onTogglePasswordVisibility(){this.hidePassword.update(n=>!n)}static \u0275fac=(()=>{let n;return function(i){return(n||(n=f(t)))(i||t)}})();static \u0275cmp=d({type:t,selectors:[["app-input-text"]],inputs:{type:[1,"type"]},standalone:!0,features:[v([{provide:S,multi:!0,useExisting:t}]),C,h],decls:6,vars:6,consts:[[1,"input-field"],["matInput","",3,"type","formControl","placeholder"],["mat-icon-button","","matSuffix","",1,"password-toggle-button"],[1,"error"],["mat-icon-button","","matSuffix","",1,"password-toggle-button",3,"click"]],template:function(e,i){e&1&&(r(0,"mat-form-field",0)(1,"mat-label"),p(2),a(),y(3,"input",1),b(4,H,3,3,"button",2)(5,U,2,1,"mat-error",3),a()),e&2&&(o(2),s(i.label()),o(),I("type",i.hidePassword()?i.type():"text")("formControl",i.control)("placeholder",i.placeholder()),o(),m(i.type()==="password"?4:-1),o(),m(i.control.invalid?5:-1))},dependencies:[E,F,T,D,P,R,L,B,O,k,A,N,V],styles:[".input-field[_ngcontent-%COMP%]{width:100%}.password-toggle-button[_ngcontent-%COMP%]{margin-right:8px}.error[_ngcontent-%COMP%]{font-size:.8rem}"],changeDetection:0})};export{z as a};
