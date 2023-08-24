import{S as qt,i as Mt,s as zt,p as ht,P as $t,bj as vt,aJ as Ft,u as $,U as C,R as A,I as E,v,w as y,X as U,V as R,d as m,J as V,Y as I,a as x,Z as c,_ as J,y as Gt,a4 as bt,b as z,g as Lt,t as L,c as Ct,bk as Ut,a5 as Y,a8 as Jt,a9 as yt,K as G,e as St,aR as Dt,L as F}from"./vendor.d823cc42.js";import{o as Yt,b as _t,d as Ht,Z as wt,s as Et,S as Wt,V as ft,T as Kt,c as Xt,v as Zt,r as Qt,O as ot}from"./forms.524f0aa9.js";import{J as te}from"./jszip.854423fa.js";import{v as ee}from"./uplugin.7e0738e4.js";import{t as le}from"./forms.d8a5da8b.js";import{m as Vt}from"./markdown.f8775f9d.js";import{V as ne}from"./graphql.22d32a05.js";import{b as xt}from"./formatting.6003925c.js";const ie=async(s,t,e)=>t.async("string").then(async l=>{const i=await ee(l);if(i.length!=0)return{message:`invalid ${e}.uplugin`,extended:i};const r=JSON.parse(l);let f=!1;for(const n of r.Plugins)if(n.Name==="SML"){f=!0;break}return f?{uplugin:r,objects:Object.keys(s.files).filter(n=>n.endsWith(".dll")||n.endsWith(".pak"))}:{message:"mod must depend on SML"}}).catch(l=>({message:`invalid ${e}.uplugin: ${l}`})),se=async(s,t)=>new te().loadAsync(s).then(l=>{const i=l.file(t+".uplugin");return i?ie(l,i,t):{message:t+".uplugin missing from mod"}}).catch(l=>({message:"invalid zip/smod file: "+l})),re=(s,t)=>Yt({file:_t(Ht().superRefine(async(e,l)=>{if(!("name"in e&&"size"in e&&"type"in e)){l.addIssue({message:"Unknown file error",code:wt.custom});return}const i=await se(e,s);if("message"in i){l.addIssue({message:i.message,code:wt.custom});return}t.set(i)})),changelog:Et(),stability:Et()});function Nt(s,t,e){const l=s.slice();return l[17]=t[e],l}function Pt(s,t,e){const l=s.slice();return l[20]=t[e],l}function ae(s){let t;return{c(){t=E("Alpha")},l(e){t=V(e,"Alpha")},m(e,l){x(e,t,l)},d(e){e&&m(t)}}}function oe(s){let t;return{c(){t=E("Beta")},l(e){t=V(e,"Beta")},m(e,l){x(e,t,l)},d(e){e&&m(t)}}}function fe(s){let t;return{c(){t=E("Release")},l(e){t=V(e,"Release")},m(e,l){x(e,t,l)},d(e){e&&m(t)}}}function ce(s){let t,e,l,i,r,f;return t=new ot({props:{value:"alpha",$$slots:{default:[ae]},$$scope:{ctx:s}}}),l=new ot({props:{value:"beta",$$slots:{default:[oe]},$$scope:{ctx:s}}}),r=new ot({props:{value:"release",$$slots:{default:[fe]},$$scope:{ctx:s}}}),{c(){C(t.$$.fragment),e=A(),C(l.$$.fragment),i=A(),C(r.$$.fragment)},l(n){U(t.$$.fragment,n),e=R(n),U(l.$$.fragment,n),i=R(n),U(r.$$.fragment,n)},m(n,o){J(t,n,o),x(n,e,o),J(l,n,o),x(n,i,o),J(r,n,o),f=!0},p(n,o){const p={};o&8388608&&(p.$$scope={dirty:o,ctx:n}),t.$set(p);const a={};o&8388608&&(a.$$scope={dirty:o,ctx:n}),l.$set(a);const u={};o&8388608&&(u.$$scope={dirty:o,ctx:n}),r.$set(u)},i(n){f||(z(t.$$.fragment,n),z(l.$$.fragment,n),z(r.$$.fragment,n),f=!0)},o(n){L(t.$$.fragment,n),L(l.$$.fragment,n),L(r.$$.fragment,n),f=!1},d(n){Y(t,n),n&&m(e),Y(l,n),n&&m(i),Y(r,n)}}}function ue(s){let t,e=(s[16]||"")+"",l;return{c(){t=$("span"),l=E(e),this.h()},l(i){t=v(i,"SPAN",{class:!0});var r=y(t);l=V(r,e),r.forEach(m),this.h()},h(){I(t,"class","validation-message")},m(i,r){x(i,t,r),c(t,l)},p(i,r){r&65536&&e!==(e=(i[16]||"")+"")&&G(l,e)},d(i){i&&m(t)}}}function At(s){let t,e,l,i,r,f,n,o,p,a,u;n=new ft({props:{for:"file",$$slots:{default:[me,({messages:g})=>({16:g}),({messages:g})=>g?65536:0]},$$scope:{ctx:s}}});let d=s[2].file&&Rt(s),N=s[5]&&kt(s);return{c(){t=$("div"),e=$("label"),l=E("File:"),i=A(),r=$("input"),f=A(),C(n.$$.fragment),o=A(),d&&d.c(),p=A(),N&&N.c(),a=St(),this.h()},l(g){t=v(g,"DIV",{class:!0});var h=y(t);e=v(h,"LABEL",{for:!0});var S=y(e);l=V(S,"File:"),S.forEach(m),i=R(h),r=v(h,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),f=R(h),U(n.$$.fragment,h),h.forEach(m),o=R(g),d&&d.l(g),p=R(g),N&&N.l(g),a=St(),this.h()},h(){I(e,"for","file"),I(r,"id","file"),I(r,"class","base-input"),I(r,"name","file"),I(r,"type","file"),I(r,"accept",".zip,.smod"),I(r,"placeholder","File"),I(t,"class","grid grid-flow-row gap-2")},m(g,h){x(g,t,h),c(t,e),c(e,l),c(t,i),c(t,r),c(t,f),J(n,t,null),x(g,o,h),d&&d.m(g,h),x(g,p,h),N&&N.m(g,h),x(g,a,h),u=!0},p(g,h){const S={};h&8454144&&(S.$$scope={dirty:h,ctx:g}),n.$set(S),g[2].file?d?d.p(g,h):(d=Rt(g),d.c(),d.m(p.parentNode,p)):d&&(d.d(1),d=null),g[5]?N?N.p(g,h):(N=kt(g),N.c(),N.m(a.parentNode,a)):N&&(N.d(1),N=null)},i(g){u||(z(n.$$.fragment,g),u=!0)},o(g){L(n.$$.fragment,g),u=!1},d(g){g&&m(t),Y(n),g&&m(o),d&&d.d(g),g&&m(p),N&&N.d(g),g&&m(a)}}}function me(s){let t,e=(s[16]||"")+"",l;return{c(){t=$("span"),l=E(e),this.h()},l(i){t=v(i,"SPAN",{class:!0});var r=y(t);l=V(r,e),r.forEach(m),this.h()},h(){I(t,"class","validation-message")},m(i,r){x(i,t,r),c(t,l)},p(i,r){r&65536&&e!==(e=(i[16]||"")+"")&&G(l,e)},d(i){i&&m(t)}}}function Rt(s){let t,e,l,i,r,f=(s[2].file.type||"Unknown")+"",n,o,p,a,u,d,N,g=xt(s[2].file.size)+"",h;return{c(){t=$("div"),e=$("span"),l=$("strong"),i=E("File Type:"),r=A(),n=E(f),o=$("br"),p=A(),a=$("span"),u=$("strong"),d=E("File Size:"),N=A(),h=E(g)},l(S){t=v(S,"DIV",{});var k=y(t);e=v(k,"SPAN",{});var b=y(e);l=v(b,"STRONG",{});var O=y(l);i=V(O,"File Type:"),O.forEach(m),r=R(b),n=V(b,f),b.forEach(m),o=v(k,"BR",{}),p=R(k),a=v(k,"SPAN",{});var P=y(a);u=v(P,"STRONG",{});var T=y(u);d=V(T,"File Size:"),T.forEach(m),N=R(P),h=V(P,g),P.forEach(m),k.forEach(m)},m(S,k){x(S,t,k),c(t,e),c(e,l),c(l,i),c(e,r),c(e,n),c(t,o),c(t,p),c(t,a),c(a,u),c(u,d),c(a,N),c(a,h)},p(S,k){k&4&&f!==(f=(S[2].file.type||"Unknown")+"")&&G(n,f),k&4&&g!==(g=xt(S[2].file.size)+"")&&G(h,g)},d(S){S&&m(t)}}}function kt(s){let t,e,l,i,r,f,n=s[5].uplugin.Version+"",o,p,a,u,d;function N(P,T){return P[5].uplugin.SemVersion!==void 0?de:pe}let g=N(s),h=g(s),S=s[5].uplugin.Plugins!==void 0&&Tt(s);function k(P,T){return P[5].objects&&P[5].objects.length>0?ve:$e}let b=k(s),O=b(s);return{c(){t=$("div"),e=$("p"),l=$("span"),i=$("strong"),r=E("Version:"),f=A(),o=E(n),p=$("br"),a=A(),h.c(),u=A(),S&&S.c(),d=A(),O.c(),this.h()},l(P){t=v(P,"DIV",{});var T=y(t);e=v(T,"P",{class:!0});var _=y(e);l=v(_,"SPAN",{});var B=y(l);i=v(B,"STRONG",{});var tt=y(i);r=V(tt,"Version:"),tt.forEach(m),f=R(B),o=V(B,n),p=v(B,"BR",{}),B.forEach(m),a=R(_),h.l(_),_.forEach(m),u=R(T),S&&S.l(T),d=R(T),O.l(T),T.forEach(m),this.h()},h(){I(e,"class","mb-4")},m(P,T){x(P,t,T),c(t,e),c(e,l),c(l,i),c(i,r),c(l,f),c(l,o),c(l,p),c(e,a),h.m(e,null),c(t,u),S&&S.m(t,null),c(t,d),O.m(t,null)},p(P,T){T&32&&n!==(n=P[5].uplugin.Version+"")&&G(o,n),g===(g=N(P))&&h?h.p(P,T):(h.d(1),h=g(P),h&&(h.c(),h.m(e,null))),P[5].uplugin.Plugins!==void 0?S?S.p(P,T):(S=Tt(P),S.c(),S.m(t,d)):S&&(S.d(1),S=null),b===(b=k(P))&&O?O.p(P,T):(O.d(1),O=b(P),O&&(O.c(),O.m(t,null)))},d(P){P&&m(t),h.d(),S&&S.d(),O.d()}}}function pe(s){let t,e,l=s[5].uplugin.Version+"",i,r;return{c(){t=$("span"),e=E("Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),i=E(l),r=E(".0.0"),this.h()},l(f){t=v(f,"SPAN",{class:!0});var n=y(t);e=V(n,"Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),i=V(n,l),r=V(n,".0.0"),n.forEach(m),this.h()},h(){I(t,"class","text-yellow-600")},m(f,n){x(f,t,n),c(t,e),c(t,i),c(t,r)},p(f,n){n&32&&l!==(l=f[5].uplugin.Version+"")&&G(i,l)},d(f){f&&m(t)}}}function de(s){let t,e,l,i,r=s[5].uplugin.SemVersion+"",f,n;return{c(){t=$("span"),e=$("strong"),l=E("SemVersion:"),i=A(),f=E(r),n=$("br")},l(o){t=v(o,"SPAN",{});var p=y(t);e=v(p,"STRONG",{});var a=y(e);l=V(a,"SemVersion:"),a.forEach(m),i=R(p),f=V(p,r),n=v(p,"BR",{}),p.forEach(m)},m(o,p){x(o,t,p),c(t,e),c(e,l),c(t,i),c(t,f),c(t,n)},p(o,p){p&32&&r!==(r=o[5].uplugin.SemVersion+"")&&G(f,r)},d(o){o&&m(t)}}}function Tt(s){let t,e,l,i,r,f=s[5].uplugin.Plugins,n=[];for(let o=0;o<f.length;o+=1)n[o]=It(Pt(s,f,o));return{c(){t=$("p"),e=$("strong"),l=E("Dependencies:"),i=$("br"),r=A();for(let o=0;o<n.length;o+=1)n[o].c()},l(o){t=v(o,"P",{});var p=y(t);e=v(p,"STRONG",{});var a=y(e);l=V(a,"Dependencies:"),a.forEach(m),i=v(p,"BR",{}),r=R(p);for(let u=0;u<n.length;u+=1)n[u].l(p);p.forEach(m)},m(o,p){x(o,t,p),c(t,e),c(e,l),c(t,i),c(t,r);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,null)},p(o,p){if(p&32){f=o[5].uplugin.Plugins;let a;for(a=0;a<f.length;a+=1){const u=Pt(o,f,a);n[a]?n[a].p(u,p):(n[a]=It(u),n[a].c(),n[a].m(t,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=f.length}},d(o){o&&m(t),Dt(n,o)}}}function ge(s){let t,e;return{c(){t=$("span"),e=E("*")},l(l){t=v(l,"SPAN",{});var i=y(t);e=V(i,"*"),i.forEach(m)},m(l,i){x(l,t,i),c(t,e)},p:F,d(l){l&&m(t)}}}function he(s){let t,e=s[20].SemVersion+"",l;return{c(){t=$("span"),l=E(e)},l(i){t=v(i,"SPAN",{});var r=y(t);l=V(r,e),r.forEach(m)},m(i,r){x(i,t,r),c(t,l)},p(i,r){r&32&&e!==(e=i[20].SemVersion+"")&&G(l,e)},d(i){i&&m(t)}}}function It(s){let t,e=s[20].Name+"",l,i,r,f,n;function o(u,d){return u[20].SemVersion?he:ge}let p=o(s),a=p(s);return{c(){t=$("strong"),l=E(e),i=E(":"),r=A(),a.c(),f=A(),n=$("br")},l(u){t=v(u,"STRONG",{});var d=y(t);l=V(d,e),i=V(d,":"),d.forEach(m),r=R(u),a.l(u),f=R(u),n=v(u,"BR",{})},m(u,d){x(u,t,d),c(t,l),c(t,i),x(u,r,d),a.m(u,d),x(u,f,d),x(u,n,d)},p(u,d){d&32&&e!==(e=u[20].Name+"")&&G(l,e),p===(p=o(u))&&a?a.p(u,d):(a.d(1),a=p(u),a&&(a.c(),a.m(f.parentNode,f)))},d(u){u&&m(t),u&&m(r),a.d(u),u&&m(f),u&&m(n)}}}function $e(s){let t,e,l;return{c(){t=$("p"),e=$("span"),l=E("Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),this.h()},l(i){t=v(i,"P",{});var r=y(t);e=v(r,"SPAN",{class:!0});var f=y(e);l=V(f,"Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),f.forEach(m),r.forEach(m),this.h()},h(){I(e,"class","text-yellow-600")},m(i,r){x(i,t,r),c(t,e),c(e,l)},p:F,d(i){i&&m(t)}}}function ve(s){let t,e,l,i,r,f=s[5].objects,n=[];for(let o=0;o<f.length;o+=1)n[o]=jt(Nt(s,f,o));return{c(){t=$("p"),e=$("strong"),l=E("Objects:"),i=$("br"),r=A();for(let o=0;o<n.length;o+=1)n[o].c()},l(o){t=v(o,"P",{});var p=y(t);e=v(p,"STRONG",{});var a=y(e);l=V(a,"Objects:"),a.forEach(m),i=v(p,"BR",{}),r=R(p);for(let u=0;u<n.length;u+=1)n[u].l(p);p.forEach(m)},m(o,p){x(o,t,p),c(t,e),c(e,l),c(t,i),c(t,r);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,null)},p(o,p){if(p&32){f=o[5].objects;let a;for(a=0;a<f.length;a+=1){const u=Nt(o,f,a);n[a]?n[a].p(u,p):(n[a]=jt(u),n[a].c(),n[a].m(t,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=f.length}},d(o){o&&m(t),Dt(n,o)}}}function jt(s){let t,e=s[17]+"",l,i,r;return{c(){t=$("span"),l=E(e),i=A(),r=$("br")},l(f){t=v(f,"SPAN",{});var n=y(t);l=V(n,e),n.forEach(m),i=R(f),r=v(f,"BR",{})},m(f,n){x(f,t,n),c(t,l),x(f,i,n),x(f,r,n)},p(f,n){n&32&&e!==(e=f[17]+"")&&G(l,e)},d(f){f&&m(t),f&&m(i),f&&m(r)}}}function be(s){let t,e=(s[16]||"")+"",l;return{c(){t=$("span"),l=E(e),this.h()},l(i){t=v(i,"SPAN",{class:!0});var r=y(t);l=V(r,e),r.forEach(m),this.h()},h(){I(t,"class","validation-message")},m(i,r){x(i,t,r),c(t,l)},p(i,r){r&65536&&e!==(e=(i[16]||"")+"")&&G(l,e)},d(i){i&&m(t)}}}function ye(s){return{c:F,l:F,m:F,p:F,d:F}}function Se(s){let t,e=s[15]+"";return{c(){t=$("div"),this.h()},l(l){t=v(l,"DIV",{class:!0});var i=y(t);i.forEach(m),this.h()},h(){I(t,"class","markdown-content right svelte-1q5q8ki")},m(l,i){x(l,t,i),t.innerHTML=e},p(l,i){i&16&&e!==(e=l[15]+"")&&(t.innerHTML=e)},d(l){l&&m(t)}}}function we(s){return{c:F,l:F,m:F,p:F,d:F}}function Ee(s){let t;return{c(){t=E(s[0])},l(e){t=V(e,s[0])},m(e,l){x(e,t,l)},p(e,l){l&1&&G(t,e[0])},d(e){e&&m(t)}}}function Ve(s){let t,e,l,i,r,f,n,o,p,a,u,d,N,g,h,S,k,b,O,P,T,_,B,tt,K,it,st,rt,et,H,lt,at,ct;function Ot(w){s[12](w)}let ut={label:"Stability",$$slots:{default:[ce]},$$scope:{ctx:s}};s[2].stability!==void 0&&(ut.value=s[2].stability),i=new Wt({props:ut}),ht.push(()=>$t(i,"value",Ot)),n=new ft({props:{for:"stability",$$slots:{default:[ue,({messages:w})=>({16:w}),({messages:w})=>w?65536:0]},$$scope:{ctx:s}}});let j=!s[1]&&At(s);function Bt(w){s[13](w)}let mt={textarea:!0,class:"vertical-textarea",label:"Changelog",required:!0,input$rows:10};s[2].changelog!==void 0&&(mt.value=s[2].changelog),d=new Kt({props:mt}),ht.push(()=>$t(d,"value",Bt)),h=new ft({props:{for:"changelog",$$slots:{default:[be,({messages:w})=>({16:w}),({messages:w})=>w?65536:0]},$$scope:{ctx:s}}});let M={ctx:s,current:null,token:null,hasCatch:!1,pending:we,then:Se,catch:ye,value:15};return vt(T=Vt(s[4]),M),H=new Ft({props:{variant:"outlined",type:"submit",disabled:s[3],$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){t=$("form"),e=$("div"),l=$("div"),C(i.$$.fragment),f=A(),C(n.$$.fragment),o=A(),j&&j.c(),p=A(),a=$("div"),u=$("div"),C(d.$$.fragment),g=A(),C(h.$$.fragment),S=A(),k=$("div"),b=$("span"),O=E("Preview:"),P=A(),M.block.c(),_=A(),B=$("div"),tt=E("By uploading this version you agree to the "),K=$("a"),it=E("Content Policy"),st=E("."),rt=A(),et=$("div"),C(H.$$.fragment),this.h()},l(w){t=v(w,"FORM",{});var D=y(t);e=v(D,"DIV",{class:!0});var q=y(e);l=v(q,"DIV",{class:!0});var X=y(l);U(i.$$.fragment,X),f=R(X),U(n.$$.fragment,X),X.forEach(m),o=R(q),j&&j.l(q),p=R(q),a=v(q,"DIV",{class:!0});var Z=y(a);u=v(Z,"DIV",{class:!0});var Q=y(u);U(d.$$.fragment,Q),g=R(Q),U(h.$$.fragment,Q),Q.forEach(m),S=R(Z),k=v(Z,"DIV",{class:!0});var W=y(k);b=v(W,"SPAN",{});var pt=y(b);O=V(pt,"Preview:"),pt.forEach(m),P=R(W),M.block.l(W),W.forEach(m),Z.forEach(m),_=R(q),B=v(q,"DIV",{class:!0});var nt=y(B);tt=V(nt,"By uploading this version you agree to the "),K=v(nt,"A",{href:!0,class:!0});var dt=y(K);it=V(dt,"Content Policy"),dt.forEach(m),st=V(nt,"."),nt.forEach(m),rt=R(q),et=v(q,"DIV",{});var gt=y(et);U(H.$$.fragment,gt),gt.forEach(m),q.forEach(m),D.forEach(m),this.h()},h(){I(l,"class","grid grid-flow-row gap-2"),I(u,"class","grid grid-flow-row gap-2 auto-rows-max"),I(k,"class","grid grid-flow-row gap-2 auto-rows-max"),I(a,"class","grid gap-6 split svelte-1q5q8ki"),I(K,"href","/content-policy"),I(K,"class","svelte-1q5q8ki"),I(B,"class","text-muted"),I(e,"class","grid grid-flow-row gap-6")},m(w,D){x(w,t,D),c(t,e),c(e,l),J(i,l,null),c(l,f),J(n,l,null),c(e,o),j&&j.m(e,null),c(e,p),c(e,a),c(a,u),J(d,u,null),c(u,g),J(h,u,null),c(a,S),c(a,k),c(k,b),c(b,O),c(k,P),M.block.m(k,M.anchor=null),M.mount=()=>k,M.anchor=null,c(e,_),c(e,B),c(B,tt),c(B,K),c(K,it),c(B,st),c(e,rt),c(e,et),J(H,et,null),lt=!0,at||(ct=Gt(s[7].call(null,t)),at=!0)},p(w,[D]){s=w;const q={};D&8388608&&(q.$$scope={dirty:D,ctx:s}),!r&&D&4&&(r=!0,q.value=s[2].stability,bt(()=>r=!1)),i.$set(q);const X={};D&8454144&&(X.$$scope={dirty:D,ctx:s}),n.$set(X),s[1]?j&&(Lt(),L(j,1,1,()=>{j=null}),Ct()):j?(j.p(s,D),D&2&&z(j,1)):(j=At(s),j.c(),z(j,1),j.m(e,p));const Z={};!N&&D&4&&(N=!0,Z.value=s[2].changelog,bt(()=>N=!1)),d.$set(Z);const Q={};D&8454144&&(Q.$$scope={dirty:D,ctx:s}),h.$set(Q),M.ctx=s,D&16&&T!==(T=Vt(s[4]))&&vt(T,M)||Ut(M,s,D);const W={};D&8&&(W.disabled=s[3]),D&8388609&&(W.$$scope={dirty:D,ctx:s}),H.$set(W)},i(w){lt||(z(i.$$.fragment,w),z(n.$$.fragment,w),z(j),z(d.$$.fragment,w),z(h.$$.fragment,w),z(H.$$.fragment,w),lt=!0)},o(w){L(i.$$.fragment,w),L(n.$$.fragment,w),L(j),L(d.$$.fragment,w),L(h.$$.fragment,w),L(H.$$.fragment,w),lt=!1},d(w){w&&m(t),Y(i),Y(n),j&&j.d(),Y(d),Y(h),M.block.d(),M.token=null,M=null,Y(H),at=!1,ct()}}}function xe(s,t,e){let l,i,r,{modReference:f}=t,{onSubmit:n}=t,{initialValues:o={changelog:"",stability:ne.Alpha}}=t,{submitText:p="Create"}=t,{editing:a=!1}=t;const u=Jt();yt(s,u,b=>e(5,r=b));let d=!1;const N=re(f,u),{form:g,data:h}=Xt({initialValues:o,extend:[Zt({schema:N}),Qt],onSubmit:b=>{e(3,d=!0),n(le(b,N)).then(()=>e(3,d=!1))}});yt(s,h,b=>e(2,i=b));function S(b){s.$$.not_equal(i.stability,b)&&(i.stability=b,h.set(i))}function k(b){s.$$.not_equal(i.changelog,b)&&(i.changelog=b,h.set(i))}return s.$$set=b=>{"modReference"in b&&e(9,f=b.modReference),"onSubmit"in b&&e(10,n=b.onSubmit),"initialValues"in b&&e(11,o=b.initialValues),"submitText"in b&&e(0,p=b.submitText),"editing"in b&&e(1,a=b.editing)},s.$$.update=()=>{s.$$.dirty&4&&e(4,l=i.changelog||"")},[p,a,i,d,l,r,u,g,h,f,n,o,S,k]}class De extends qt{constructor(t){super(),Mt(this,t,xe,Ve,zt,{modReference:9,onSubmit:10,initialValues:11,submitText:0,editing:1})}}export{De as V};
//# sourceMappingURL=VersionForm.edf8706b.js.map
