import{S as At,i as kt,s as Tt,u as ot,ad as ft,bd as ct,aH as It,e as h,Z as U,a as R,aa as N,c as v,d as y,_ as q,g as A,f as m,ab as P,a7 as O,j as E,a5 as u,$ as H,J as Dt,ae as ut,m as z,k as Ot,t as C,l as jt,be as Mt,a1 as _,al as mt,ac as G,b as dt,aM as Nt,w as Bt,q as F}from"./vendor-22698a15.js";import{o as zt,d as Ft,e as Gt,h as pt,s as gt,S as Lt,V as lt,T as Wt,c as Ct,v as Ut,r as qt,O as et}from"./forms-e7a1b133.js";import{J as Ht}from"./jszip-0721729d.js";import{v as _t}from"./uplugin-74e51756.js";import{t as Jt}from"./forms-874c16ac.js";import{m as $t}from"./markdown-6a2ff7f0.js";import{V as Yt}from"./graphql-43a8ad25.js";import{c as ht}from"./formatting-9fd7b49b.js";const Kt=async(i,t,e)=>t.async("string").then(async l=>{const s=await _t(l);if(s.length!=0)return{message:`invalid ${e}.uplugin`,extended:s};const a=JSON.parse(l);let r=!1;for(const n of a.Plugins)if(n.Name==="SML"){r=!0;break}return r?{uplugin:a,objects:Object.keys(i.files).filter(n=>n.endsWith(".so")||n.endsWith(".dll")||n.endsWith(".pak"))}:{message:"mod must depend on SML"}}).catch(l=>({message:`invalid ${e}.uplugin: ${l}`})),Qt=async(i,t)=>new Ht().loadAsync(i).then(async l=>{const s=["WindowsNoClient","WindowsServer","LinuxServer"],a=[];for(const r of s)a.push(l.file(r+"/"+t+".uplugin"));for(const r of a)if(!!r)for(const n of a){if(!n)continue;const f=await r.async("string"),d=await n.async("string");if(f!==d)return{message:r.name.split("/",1)+" uPlugin does not match "+n.name.split("/",1)+" uPlugin"}}for(const r of a)if(r)return Kt(l,r,t);return{message:t+".uplugin missing from mod"}}).catch(l=>({message:"invalid zip/smod file: "+l})),Xt=(i,t)=>zt({file:Ft(Gt().superRefine(async(e,l)=>{if(!("name"in e&&"size"in e&&"type"in e)){l.addIssue({message:"Unknown file error",code:pt.custom});return}const s=await Qt(e,i);if("message"in s){l.addIssue({message:s.message,code:pt.custom});return}t.set(s)})),changelog:gt(),stability:gt()});function vt(i,t,e){const l=i.slice();return l[17]=t[e],l}function bt(i,t,e){const l=i.slice();return l[20]=t[e],l}function Zt(i){let t;return{c(){t=N("Alpha")},l(e){t=P(e,"Alpha")},m(e,l){E(e,t,l)},d(e){e&&m(t)}}}function te(i){let t;return{c(){t=N("Beta")},l(e){t=P(e,"Beta")},m(e,l){E(e,t,l)},d(e){e&&m(t)}}}function ee(i){let t;return{c(){t=N("Release")},l(e){t=P(e,"Release")},m(e,l){E(e,t,l)},d(e){e&&m(t)}}}function le(i){let t,e,l,s,a,r;return t=new et({props:{value:"alpha",$$slots:{default:[Zt]},$$scope:{ctx:i}}}),l=new et({props:{value:"beta",$$slots:{default:[te]},$$scope:{ctx:i}}}),a=new et({props:{value:"release",$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){U(t.$$.fragment),e=R(),U(l.$$.fragment),s=R(),U(a.$$.fragment)},l(n){q(t.$$.fragment,n),e=A(n),q(l.$$.fragment,n),s=A(n),q(a.$$.fragment,n)},m(n,f){H(t,n,f),E(n,e,f),H(l,n,f),E(n,s,f),H(a,n,f),r=!0},p(n,f){const d={};f&8388608&&(d.$$scope={dirty:f,ctx:n}),t.$set(d);const o={};f&8388608&&(o.$$scope={dirty:f,ctx:n}),l.$set(o);const c={};f&8388608&&(c.$$scope={dirty:f,ctx:n}),a.$set(c)},i(n){r||(z(t.$$.fragment,n),z(l.$$.fragment,n),z(a.$$.fragment,n),r=!0)},o(n){C(t.$$.fragment,n),C(l.$$.fragment,n),C(a.$$.fragment,n),r=!1},d(n){_(t,n),n&&m(e),_(l,n),n&&m(s),_(a,n)}}}function ne(i){let t,e=(i[16]||"")+"",l;return{c(){t=h("span"),l=N(e),this.h()},l(s){t=v(s,"SPAN",{class:!0});var a=y(t);l=P(a,e),a.forEach(m),this.h()},h(){O(t,"class","validation-message")},m(s,a){E(s,t,a),u(t,l)},p(s,a){a&65536&&e!==(e=(s[16]||"")+"")&&G(l,e)},d(s){s&&m(t)}}}function wt(i){let t,e,l,s,a,r,n,f,d,o,c;n=new lt({props:{for:"file",$$slots:{default:[se,({messages:g})=>({16:g}),({messages:g})=>g?65536:0]},$$scope:{ctx:i}}});let p=i[2].file&&yt(i),V=i[5]&&St(i);return{c(){t=h("div"),e=h("label"),l=N("File:"),s=R(),a=h("input"),r=R(),U(n.$$.fragment),f=R(),p&&p.c(),d=R(),V&&V.c(),o=dt(),this.h()},l(g){t=v(g,"DIV",{class:!0});var $=y(t);e=v($,"LABEL",{for:!0});var w=y(e);l=P(w,"File:"),w.forEach(m),s=A($),a=v($,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),r=A($),q(n.$$.fragment,$),$.forEach(m),f=A(g),p&&p.l(g),d=A(g),V&&V.l(g),o=dt(),this.h()},h(){O(e,"for","file"),O(a,"id","file"),O(a,"class","base-input"),O(a,"name","file"),O(a,"type","file"),O(a,"accept",".zip,.smod"),O(a,"placeholder","File"),O(t,"class","grid grid-flow-row gap-2")},m(g,$){E(g,t,$),u(t,e),u(e,l),u(t,s),u(t,a),u(t,r),H(n,t,null),E(g,f,$),p&&p.m(g,$),E(g,d,$),V&&V.m(g,$),E(g,o,$),c=!0},p(g,$){const w={};$&8454144&&(w.$$scope={dirty:$,ctx:g}),n.$set(w),g[2].file?p?p.p(g,$):(p=yt(g),p.c(),p.m(d.parentNode,d)):p&&(p.d(1),p=null),g[5]?V?V.p(g,$):(V=St(g),V.c(),V.m(o.parentNode,o)):V&&(V.d(1),V=null)},i(g){c||(z(n.$$.fragment,g),c=!0)},o(g){C(n.$$.fragment,g),c=!1},d(g){g&&m(t),_(n),g&&m(f),p&&p.d(g),g&&m(d),V&&V.d(g),g&&m(o)}}}function se(i){let t,e=(i[16]||"")+"",l;return{c(){t=h("span"),l=N(e),this.h()},l(s){t=v(s,"SPAN",{class:!0});var a=y(t);l=P(a,e),a.forEach(m),this.h()},h(){O(t,"class","validation-message")},m(s,a){E(s,t,a),u(t,l)},p(s,a){a&65536&&e!==(e=(s[16]||"")+"")&&G(l,e)},d(s){s&&m(t)}}}function yt(i){let t,e,l,s,a,r=(i[2].file.type||"Unknown")+"",n,f,d,o,c,p,V,g=ht(i[2].file.size)+"",$;return{c(){t=h("div"),e=h("span"),l=h("strong"),s=N("File Type:"),a=R(),n=N(r),f=h("br"),d=R(),o=h("span"),c=h("strong"),p=N("File Size:"),V=R(),$=N(g)},l(w){t=v(w,"DIV",{});var k=y(t);e=v(k,"SPAN",{});var b=y(e);l=v(b,"STRONG",{});var j=y(l);s=P(j,"File Type:"),j.forEach(m),a=A(b),n=P(b,r),b.forEach(m),f=v(k,"BR",{}),d=A(k),o=v(k,"SPAN",{});var x=y(o);c=v(x,"STRONG",{});var T=y(c);p=P(T,"File Size:"),T.forEach(m),V=A(x),$=P(x,g),x.forEach(m),k.forEach(m)},m(w,k){E(w,t,k),u(t,e),u(e,l),u(l,s),u(e,a),u(e,n),u(t,f),u(t,d),u(t,o),u(o,c),u(c,p),u(o,V),u(o,$)},p(w,k){k&4&&r!==(r=(w[2].file.type||"Unknown")+"")&&G(n,r),k&4&&g!==(g=ht(w[2].file.size)+"")&&G($,g)},d(w){w&&m(t)}}}function St(i){let t,e,l,s,a,r,n=i[5].uplugin.Version+"",f,d,o,c,p;function V(x,T){return x[5].uplugin.SemVersion!==void 0?ae:ie}let g=V(i),$=g(i),w=i[5].uplugin.Plugins!==void 0&&Et(i);function k(x,T){return x[5].objects&&x[5].objects.length>0?ce:fe}let b=k(i),j=b(i);return{c(){t=h("div"),e=h("p"),l=h("span"),s=h("strong"),a=N("Version:"),r=R(),f=N(n),d=h("br"),o=R(),$.c(),c=R(),w&&w.c(),p=R(),j.c(),this.h()},l(x){t=v(x,"DIV",{});var T=y(t);e=v(T,"P",{class:!0});var J=y(e);l=v(J,"SPAN",{});var L=y(l);s=v(L,"STRONG",{});var W=y(s);a=P(W,"Version:"),W.forEach(m),r=A(L),f=P(L,n),d=v(L,"BR",{}),L.forEach(m),o=A(J),$.l(J),J.forEach(m),c=A(T),w&&w.l(T),p=A(T),j.l(T),T.forEach(m),this.h()},h(){O(e,"class","mb-4")},m(x,T){E(x,t,T),u(t,e),u(e,l),u(l,s),u(s,a),u(l,r),u(l,f),u(l,d),u(e,o),$.m(e,null),u(t,c),w&&w.m(t,null),u(t,p),j.m(t,null)},p(x,T){T&32&&n!==(n=x[5].uplugin.Version+"")&&G(f,n),g===(g=V(x))&&$?$.p(x,T):($.d(1),$=g(x),$&&($.c(),$.m(e,null))),x[5].uplugin.Plugins!==void 0?w?w.p(x,T):(w=Et(x),w.c(),w.m(t,p)):w&&(w.d(1),w=null),b===(b=k(x))&&j?j.p(x,T):(j.d(1),j=b(x),j&&(j.c(),j.m(t,null)))},d(x){x&&m(t),$.d(),w&&w.d(),j.d()}}}function ie(i){let t,e,l=i[5].uplugin.Version+"",s,a;return{c(){t=h("span"),e=N("Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),s=N(l),a=N(".0.0"),this.h()},l(r){t=v(r,"SPAN",{class:!0});var n=y(t);e=P(n,"Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),s=P(n,l),a=P(n,".0.0"),n.forEach(m),this.h()},h(){O(t,"class","text-yellow-600")},m(r,n){E(r,t,n),u(t,e),u(t,s),u(t,a)},p(r,n){n&32&&l!==(l=r[5].uplugin.Version+"")&&G(s,l)},d(r){r&&m(t)}}}function ae(i){let t,e,l,s,a=i[5].uplugin.SemVersion+"",r,n;return{c(){t=h("span"),e=h("strong"),l=N("SemVersion:"),s=R(),r=N(a),n=h("br")},l(f){t=v(f,"SPAN",{});var d=y(t);e=v(d,"STRONG",{});var o=y(e);l=P(o,"SemVersion:"),o.forEach(m),s=A(d),r=P(d,a),n=v(d,"BR",{}),d.forEach(m)},m(f,d){E(f,t,d),u(t,e),u(e,l),u(t,s),u(t,r),u(t,n)},p(f,d){d&32&&a!==(a=f[5].uplugin.SemVersion+"")&&G(r,a)},d(f){f&&m(t)}}}function Et(i){let t,e,l,s,a,r=i[5].uplugin.Plugins,n=[];for(let f=0;f<r.length;f+=1)n[f]=Vt(bt(i,r,f));return{c(){t=h("p"),e=h("strong"),l=N("Dependencies:"),s=h("br"),a=R();for(let f=0;f<n.length;f+=1)n[f].c()},l(f){t=v(f,"P",{});var d=y(t);e=v(d,"STRONG",{});var o=y(e);l=P(o,"Dependencies:"),o.forEach(m),s=v(d,"BR",{}),a=A(d);for(let c=0;c<n.length;c+=1)n[c].l(d);d.forEach(m)},m(f,d){E(f,t,d),u(t,e),u(e,l),u(t,s),u(t,a);for(let o=0;o<n.length;o+=1)n[o].m(t,null)},p(f,d){if(d&32){r=f[5].uplugin.Plugins;let o;for(o=0;o<r.length;o+=1){const c=bt(f,r,o);n[o]?n[o].p(c,d):(n[o]=Vt(c),n[o].c(),n[o].m(t,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},d(f){f&&m(t),Nt(n,f)}}}function re(i){let t,e;return{c(){t=h("span"),e=N("*")},l(l){t=v(l,"SPAN",{});var s=y(t);e=P(s,"*"),s.forEach(m)},m(l,s){E(l,t,s),u(t,e)},p:F,d(l){l&&m(t)}}}function oe(i){let t,e=i[20].SemVersion+"",l;return{c(){t=h("span"),l=N(e)},l(s){t=v(s,"SPAN",{});var a=y(t);l=P(a,e),a.forEach(m)},m(s,a){E(s,t,a),u(t,l)},p(s,a){a&32&&e!==(e=s[20].SemVersion+"")&&G(l,e)},d(s){s&&m(t)}}}function Vt(i){let t,e=i[20].Name+"",l,s,a,r,n;function f(c,p){return c[20].SemVersion?oe:re}let d=f(i),o=d(i);return{c(){t=h("strong"),l=N(e),s=N(":"),a=R(),o.c(),r=R(),n=h("br")},l(c){t=v(c,"STRONG",{});var p=y(t);l=P(p,e),s=P(p,":"),p.forEach(m),a=A(c),o.l(c),r=A(c),n=v(c,"BR",{})},m(c,p){E(c,t,p),u(t,l),u(t,s),E(c,a,p),o.m(c,p),E(c,r,p),E(c,n,p)},p(c,p){p&32&&e!==(e=c[20].Name+"")&&G(l,e),d===(d=f(c))&&o?o.p(c,p):(o.d(1),o=d(c),o&&(o.c(),o.m(r.parentNode,r)))},d(c){c&&m(t),c&&m(a),o.d(c),c&&m(r),c&&m(n)}}}function fe(i){let t,e,l;return{c(){t=h("p"),e=h("span"),l=N("Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),this.h()},l(s){t=v(s,"P",{});var a=y(t);e=v(a,"SPAN",{class:!0});var r=y(e);l=P(r,"Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),r.forEach(m),a.forEach(m),this.h()},h(){O(e,"class","text-yellow-600")},m(s,a){E(s,t,a),u(t,e),u(e,l)},p:F,d(s){s&&m(t)}}}function ce(i){let t,e,l,s,a,r=i[5].objects,n=[];for(let f=0;f<r.length;f+=1)n[f]=xt(vt(i,r,f));return{c(){t=h("p"),e=h("strong"),l=N("Objects:"),s=h("br"),a=R();for(let f=0;f<n.length;f+=1)n[f].c()},l(f){t=v(f,"P",{});var d=y(t);e=v(d,"STRONG",{});var o=y(e);l=P(o,"Objects:"),o.forEach(m),s=v(d,"BR",{}),a=A(d);for(let c=0;c<n.length;c+=1)n[c].l(d);d.forEach(m)},m(f,d){E(f,t,d),u(t,e),u(e,l),u(t,s),u(t,a);for(let o=0;o<n.length;o+=1)n[o].m(t,null)},p(f,d){if(d&32){r=f[5].objects;let o;for(o=0;o<r.length;o+=1){const c=vt(f,r,o);n[o]?n[o].p(c,d):(n[o]=xt(c),n[o].c(),n[o].m(t,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},d(f){f&&m(t),Nt(n,f)}}}function xt(i){let t,e=i[17]+"",l,s,a;return{c(){t=h("span"),l=N(e),s=R(),a=h("br")},l(r){t=v(r,"SPAN",{});var n=y(t);l=P(n,e),n.forEach(m),s=A(r),a=v(r,"BR",{})},m(r,n){E(r,t,n),u(t,l),E(r,s,n),E(r,a,n)},p(r,n){n&32&&e!==(e=r[17]+"")&&G(l,e)},d(r){r&&m(t),r&&m(s),r&&m(a)}}}function ue(i){let t,e=(i[16]||"")+"",l;return{c(){t=h("span"),l=N(e),this.h()},l(s){t=v(s,"SPAN",{class:!0});var a=y(t);l=P(a,e),a.forEach(m),this.h()},h(){O(t,"class","validation-message")},m(s,a){E(s,t,a),u(t,l)},p(s,a){a&65536&&e!==(e=(s[16]||"")+"")&&G(l,e)},d(s){s&&m(t)}}}function me(i){return{c:F,l:F,m:F,p:F,d:F}}function de(i){let t,e=i[15]+"";return{c(){t=h("div"),this.h()},l(l){t=v(l,"DIV",{class:!0});var s=y(t);s.forEach(m),this.h()},h(){O(t,"class","markdown-content right svelte-k92wki")},m(l,s){E(l,t,s),t.innerHTML=e},p(l,s){s&16&&e!==(e=l[15]+"")&&(t.innerHTML=e)},d(l){l&&m(t)}}}function pe(i){return{c:F,l:F,m:F,p:F,d:F}}function ge(i){let t;return{c(){t=N(i[0])},l(e){t=P(e,i[0])},m(e,l){E(e,t,l)},p(e,l){l&1&&G(t,e[0])},d(e){e&&m(t)}}}function $e(i){let t,e,l,s,a,r,n,f,d,o,c,p,V,g,$,w,k,b,j,x,T,J,L,W,Z,tt,nt;function Pt(S){i[12](S)}let st={label:"Stability",$$slots:{default:[le]},$$scope:{ctx:i}};i[2].stability!==void 0&&(st.value=i[2].stability),s=new Lt({props:st}),ot.push(()=>ft(s,"value",Pt)),n=new lt({props:{for:"stability",$$slots:{default:[ne,({messages:S})=>({16:S}),({messages:S})=>S?65536:0]},$$scope:{ctx:i}}});let I=!i[1]&&wt(i);function Rt(S){i[13](S)}let it={textarea:!0,class:"vertical-textarea",label:"Changelog",required:!0,input$rows:10};i[2].changelog!==void 0&&(it.value=i[2].changelog),p=new Wt({props:it}),ot.push(()=>ft(p,"value",Rt)),$=new lt({props:{for:"changelog",$$slots:{default:[ue,({messages:S})=>({16:S}),({messages:S})=>S?65536:0]},$$scope:{ctx:i}}});let M={ctx:i,current:null,token:null,hasCatch:!1,pending:pe,then:de,catch:me,value:15};return ct(T=$t(i[4]),M),W=new It({props:{variant:"outlined",type:"submit",disabled:i[3],$$slots:{default:[ge]},$$scope:{ctx:i}}}),{c(){t=h("form"),e=h("div"),l=h("div"),U(s.$$.fragment),r=R(),U(n.$$.fragment),f=R(),I&&I.c(),d=R(),o=h("div"),c=h("div"),U(p.$$.fragment),g=R(),U($.$$.fragment),w=R(),k=h("div"),b=h("span"),j=N("Preview:"),x=R(),M.block.c(),J=R(),L=h("div"),U(W.$$.fragment),this.h()},l(S){t=v(S,"FORM",{});var D=y(t);e=v(D,"DIV",{class:!0});var B=y(e);l=v(B,"DIV",{class:!0});var K=y(l);q(s.$$.fragment,K),r=A(K),q(n.$$.fragment,K),K.forEach(m),f=A(B),I&&I.l(B),d=A(B),o=v(B,"DIV",{class:!0});var Q=y(o);c=v(Q,"DIV",{class:!0});var X=y(c);q(p.$$.fragment,X),g=A(X),q($.$$.fragment,X),X.forEach(m),w=A(Q),k=v(Q,"DIV",{class:!0});var Y=y(k);b=v(Y,"SPAN",{});var at=y(b);j=P(at,"Preview:"),at.forEach(m),x=A(Y),M.block.l(Y),Y.forEach(m),Q.forEach(m),J=A(B),L=v(B,"DIV",{});var rt=y(L);q(W.$$.fragment,rt),rt.forEach(m),B.forEach(m),D.forEach(m),this.h()},h(){O(l,"class","grid grid-flow-row gap-2"),O(c,"class","grid grid-flow-row gap-2 auto-rows-max"),O(k,"class","grid grid-flow-row gap-2 auto-rows-max"),O(o,"class","grid gap-6 split svelte-k92wki"),O(e,"class","grid grid-flow-row gap-6")},m(S,D){E(S,t,D),u(t,e),u(e,l),H(s,l,null),u(l,r),H(n,l,null),u(e,f),I&&I.m(e,null),u(e,d),u(e,o),u(o,c),H(p,c,null),u(c,g),H($,c,null),u(o,w),u(o,k),u(k,b),u(b,j),u(k,x),M.block.m(k,M.anchor=null),M.mount=()=>k,M.anchor=null,u(e,J),u(e,L),H(W,L,null),Z=!0,tt||(nt=Dt(i[7].call(null,t)),tt=!0)},p(S,[D]){i=S;const B={};D&8388608&&(B.$$scope={dirty:D,ctx:i}),!a&&D&4&&(a=!0,B.value=i[2].stability,ut(()=>a=!1)),s.$set(B);const K={};D&8454144&&(K.$$scope={dirty:D,ctx:i}),n.$set(K),i[1]?I&&(Ot(),C(I,1,1,()=>{I=null}),jt()):I?(I.p(i,D),D&2&&z(I,1)):(I=wt(i),I.c(),z(I,1),I.m(e,d));const Q={};!V&&D&4&&(V=!0,Q.value=i[2].changelog,ut(()=>V=!1)),p.$set(Q);const X={};D&8454144&&(X.$$scope={dirty:D,ctx:i}),$.$set(X),M.ctx=i,D&16&&T!==(T=$t(i[4]))&&ct(T,M)||Mt(M,i,D);const Y={};D&8&&(Y.disabled=i[3]),D&8388609&&(Y.$$scope={dirty:D,ctx:i}),W.$set(Y)},i(S){Z||(z(s.$$.fragment,S),z(n.$$.fragment,S),z(I),z(p.$$.fragment,S),z($.$$.fragment,S),z(W.$$.fragment,S),Z=!0)},o(S){C(s.$$.fragment,S),C(n.$$.fragment,S),C(I),C(p.$$.fragment,S),C($.$$.fragment,S),C(W.$$.fragment,S),Z=!1},d(S){S&&m(t),_(s),_(n),I&&I.d(),_(p),_($),M.block.d(),M.token=null,M=null,_(W),tt=!1,nt()}}}function he(i,t,e){let l,s,a,{modReference:r}=t,{onSubmit:n}=t,{initialValues:f={arch:[{ModVersionID:"",platform:"",asset:"",hash:"",size:0}],changelog:"",stability:Yt.Alpha}}=t,{submitText:d="Create"}=t,{editing:o=!1}=t;const c=Bt();mt(i,c,b=>e(5,a=b));let p=!1;const V=Xt(r,c),{form:g,data:$}=Ct({initialValues:f,extend:[Ut({schema:V}),qt],onSubmit:b=>{e(3,p=!0),n(Jt(b,V)).then(()=>e(3,p=!1))}});mt(i,$,b=>e(2,s=b));function w(b){i.$$.not_equal(s.stability,b)&&(s.stability=b,$.set(s))}function k(b){i.$$.not_equal(s.changelog,b)&&(s.changelog=b,$.set(s))}return i.$$set=b=>{"modReference"in b&&e(9,r=b.modReference),"onSubmit"in b&&e(10,n=b.onSubmit),"initialValues"in b&&e(11,f=b.initialValues),"submitText"in b&&e(0,d=b.submitText),"editing"in b&&e(1,o=b.editing)},i.$$.update=()=>{i.$$.dirty&4&&e(4,l=s.changelog||"")},[d,o,s,p,l,a,c,g,$,r,n,f,w,k]}class Ne extends At{constructor(t){super(),kt(this,t,he,$e,Tt,{modReference:9,onSubmit:10,initialValues:11,submitText:0,editing:1})}}export{Ne as V};
//# sourceMappingURL=VersionForm-2c867161.js.map
