import{S as kt,i as Vt,s as Rt,d as O,r as Ie,T as De,bq as ze,aQ as tt,v as Et,aK as Ge,Y as ye,X as Le,Z as _e,a$ as he,x as w,a8 as X,a6 as F,L as R,y,z as V,ab as Y,a9 as j,q as v,N as E,ac as I,C as S,l as P,ad as f,ae as ee,D as Bt,ai as qe,p as C,m as Pt,t as Z,n as Nt,O as D,br as Tt,aj as te,P as J,aw as Ft,k as He,b0 as nt}from"./vendor.29fd6bc5.js";import{o as jt,d as At,e as Mt,Z as Qe,s as Ue,S as it,V as ge,T as st,c as We,v as Ke,r as Ce,O as de}from"./forms.349b4af3.js";import{J as Ot}from"./jszip.f8e61780.js";import{v as It}from"./uplugin.76c42629.js";import{t as Je}from"./forms.b82f1089.js";import{m as Se}from"./markdown.66dedf33.js";import{V as Ze}from"./graphql.cb6ec208.js";import{b as xe}from"./formatting.6f84ef8f.js";const Dt=async(n,e,t)=>e.async("string").then(async i=>{const s=await It(i);if(s.length!=0)return{message:`invalid ${t}.uplugin`,extended:s};const l=JSON.parse(i);let c=!1;for(const r of l.Plugins)if(r.Name==="SML"){c=!0;break}return c?{uplugin:l,objects:Object.keys(n.files).filter(r=>r.endsWith(".so")||r.endsWith(".dll")||r.endsWith(".pak"))}:{message:"mod must depend on SML"}}).catch(i=>({message:`invalid ${t}.uplugin: ${i}`})),zt=async(n,e)=>new Ot().loadAsync(n).then(i=>{const s=i.file("WindowsNoEditor/"+e+".uplugin");return s?Dt(i,s,e):{message:"WindowsNoEditor/"+e+".uplugin missing from mod"}}).catch(i=>({message:"invalid zip/smod file: "+i})),Xe=(n,e)=>jt({file:At(Mt().superRefine(async(t,i)=>{if(!("name"in t&&"size"in t&&"type"in t)){i.addIssue({message:"Unknown file error",code:Qe.custom});return}const s=await zt(t,n);if("message"in s){i.addIssue({message:s.message,code:Qe.custom});return}e.set(s)})),changelog:Ue(),stability:Ue()});const x="src/lib/components/versions/VersionForm.svelte";function Ye(n,e,t){const i=n.slice();return i[19]=e[t],i}function et(n,e,t){const i=n.slice();return i[22]=e[t],i}function ot(n){let e;const t={c:function(){e=R("Alpha")},l:function(s){e=E(s,"Alpha")},m:function(s,l){P(s,e,l)},d:function(s){s&&v(e)}};return O("SvelteRegisterBlock",{block:t,id:ot.name,type:"slot",source:'(42:8) <Option value=\\"alpha\\">',ctx:n}),t}function lt(n){let e;const t={c:function(){e=R("Beta")},l:function(s){e=E(s,"Beta")},m:function(s,l){P(s,e,l)},d:function(s){s&&v(e)}};return O("SvelteRegisterBlock",{block:t,id:lt.name,type:"slot",source:'(43:8) <Option value=\\"beta\\">',ctx:n}),t}function ct(n){let e;const t={c:function(){e=R("Release")},l:function(s){e=E(s,"Release")},m:function(s,l){P(s,e,l)},d:function(s){s&&v(e)}};return O("SvelteRegisterBlock",{block:t,id:ct.name,type:"slot",source:'(44:8) <Option value=\\"release\\">',ctx:n}),t}function rt(n){let e,t,i,s,l,c;e=new de({props:{value:"alpha",$$slots:{default:[ot]},$$scope:{ctx:n}},$$inline:!0}),i=new de({props:{value:"beta",$$slots:{default:[lt]},$$scope:{ctx:n}},$$inline:!0}),l=new de({props:{value:"release",$$slots:{default:[ct]},$$scope:{ctx:n}},$$inline:!0});const r={c:function(){X(e.$$.fragment),t=F(),X(i.$$.fragment),s=F(),X(l.$$.fragment)},l:function(o){Y(e.$$.fragment,o),t=j(o),Y(i.$$.fragment,o),s=j(o),Y(l.$$.fragment,o)},m:function(o,g){ee(e,o,g),P(o,t,g),ee(i,o,g),P(o,s,g),ee(l,o,g),c=!0},p:function(o,g){const u={};g&33554432&&(u.$$scope={dirty:g,ctx:o}),e.$set(u);const m={};g&33554432&&(m.$$scope={dirty:g,ctx:o}),i.$set(m);const p={};g&33554432&&(p.$$scope={dirty:g,ctx:o}),l.$set(p)},i:function(o){c||(C(e.$$.fragment,o),C(i.$$.fragment,o),C(l.$$.fragment,o),c=!0)},o:function(o){Z(e.$$.fragment,o),Z(i.$$.fragment,o),Z(l.$$.fragment,o),c=!1},d:function(o){te(e,o),o&&v(t),te(i,o),o&&v(s),te(l,o)}};return O("SvelteRegisterBlock",{block:r,id:rt.name,type:"slot",source:"(41:6) <Select bind:value={$data.stability} label={$t('stability')}>",ctx:n}),r}function at(n){let e,t=(n[18]||"")+"",i;const s={c:function(){e=w("span"),i=R(t),this.h()},l:function(c){e=y(c,"SPAN",{class:!0});var r=V(e);i=E(r,t),r.forEach(v),this.h()},h:function(){I(e,"class","validation-message"),S(e,x,46,8,1824)},m:function(c,r){P(c,e,r),f(e,i)},p:function(c,r){r&262144&&t!==(t=(c[18]||"")+"")&&D(i,t)},d:function(c){c&&v(e)}};return O("SvelteRegisterBlock",{block:s,id:at.name,type:"slot",source:'(46:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:n}),s}function ke(n){let e,t,i=n[6]("file")+"",s,l,c,r,d,o,g,u,m,p;o=new ge({props:{for:"file",$$slots:{default:[ft,({messages:k})=>({18:k}),({messages:k})=>k?262144:0]},$$scope:{ctx:n}},$$inline:!0});let a=n[3].file&&Ve(n),b=n[7]&&Re(n);const G={c:function(){e=w("div"),t=w("label"),s=R(i),l=R(":"),c=F(),r=w("input"),d=F(),X(o.$$.fragment),g=F(),a&&a.c(),u=F(),b&&b.c(),m=He(),this.h()},l:function($){e=y($,"DIV",{class:!0});var B=V(e);t=y(B,"LABEL",{for:!0});var z=V(t);s=E(z,i),l=E(z,":"),z.forEach(v),c=j(B),r=y(B,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),d=j(B),Y(o.$$.fragment,B),B.forEach(v),g=j($),a&&a.l($),u=j($),b&&b.l($),m=He(),this.h()},h:function(){I(t,"for","file"),S(t,x,52,8,1991),I(r,"id","file"),I(r,"class","base-input"),I(r,"name","file"),I(r,"type","file"),I(r,"accept",".zip,.smod"),I(r,"placeholder","File"),S(r,x,53,8,2039),I(e,"class","grid grid-flow-row gap-2"),S(e,x,51,6,1944)},m:function($,B){P($,e,B),f(e,t),f(t,s),f(t,l),f(e,c),f(e,r),f(e,d),ee(o,e,null),P($,g,B),a&&a.m($,B),P($,u,B),b&&b.m($,B),P($,m,B),p=!0},p:function($,B){(!p||B&64)&&i!==(i=$[6]("file")+"")&&D(s,i);const z={};B&33816576&&(z.$$scope={dirty:B,ctx:$}),o.$set(z),$[3].file?a?a.p($,B):(a=Ve($),a.c(),a.m(u.parentNode,u)):a&&(a.d(1),a=null),$[7]?b?b.p($,B):(b=Re($),b.c(),b.m(m.parentNode,m)):b&&(b.d(1),b=null)},i:function($){p||(C(o.$$.fragment,$),p=!0)},o:function($){Z(o.$$.fragment,$),p=!1},d:function($){$&&v(e),te(o),$&&v(g),a&&a.d($),$&&v(u),b&&b.d($),$&&v(m)}};return O("SvelteRegisterBlock",{block:G,id:ke.name,type:"if",source:"(51:4) {#if !editing}",ctx:n}),G}function ft(n){let e,t=(n[18]||"")+"",i;const s={c:function(){e=w("span"),i=R(t),this.h()},l:function(c){e=y(c,"SPAN",{class:!0});var r=V(e);i=E(r,t),r.forEach(v),this.h()},h:function(){I(e,"class","validation-message"),S(e,x,55,10,2213)},m:function(c,r){P(c,e,r),f(e,i)},p:function(c,r){r&262144&&t!==(t=(c[18]||"")+"")&&D(i,t)},d:function(c){c&&v(e)}};return O("SvelteRegisterBlock",{block:s,id:ft.name,type:"slot",source:'(55:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:n}),s}function Ve(n){let e,t,i,s=n[6]("file-type")+"",l,c,r,d=(n[3].file.type||"Unknown")+"",o,g,u,m,p,a=n[6]("file-size")+"",b,G,k,$=xe(n[3].file.size)+"",B;const z={c:function(){e=w("div"),t=w("span"),i=w("strong"),l=R(s),c=R(":"),r=F(),o=R(d),g=w("br"),u=F(),m=w("span"),p=w("strong"),b=R(a),G=R(":"),k=F(),B=R($),this.h()},l:function(_){e=y(_,"DIV",{});var N=V(e);t=y(N,"SPAN",{});var T=V(t);i=y(T,"STRONG",{});var h=V(i);l=E(h,s),c=E(h,":"),h.forEach(v),r=j(T),o=E(T,d),T.forEach(v),g=y(N,"BR",{}),u=j(N),m=y(N,"SPAN",{});var Q=V(m);p=y(Q,"STRONG",{});var W=V(p);b=E(W,a),G=E(W,":"),W.forEach(v),k=j(Q),B=E(Q,$),Q.forEach(v),N.forEach(v),this.h()},h:function(){S(i,x,61,16,2365),S(t,x,61,10,2359),S(g,x,61,89,2438),S(p,x,62,16,2461),S(m,x,62,10,2455),S(e,x,60,8,2343)},m:function(_,N){P(_,e,N),f(e,t),f(t,i),f(i,l),f(i,c),f(t,r),f(t,o),f(e,g),f(e,u),f(e,m),f(m,p),f(p,b),f(p,G),f(m,k),f(m,B)},p:function(_,N){N&64&&s!==(s=_[6]("file-type")+"")&&D(l,s),N&8&&d!==(d=(_[3].file.type||"Unknown")+"")&&D(o,d),N&64&&a!==(a=_[6]("file-size")+"")&&D(b,a),N&8&&$!==($=xe(_[3].file.size)+"")&&D(B,$)},d:function(_){_&&v(e)}};return O("SvelteRegisterBlock",{block:z,id:Ve.name,type:"if",source:"(60:6) {#if $data.file}",ctx:n}),z}function Re(n){let e,t,i,s,l=n[6]("version")+"",c,r,d,o=n[7].uplugin.Version+"",g,u,m,p,a;function b(N,T){return N[7].uplugin.SemVersion!==void 0?mt:ut}let G=b(n),k=G(n),$=n[7].uplugin.Plugins!==void 0&&Ee(n);function B(N,T){return N[7].objects&&N[7].objects.length>0?gt:ht}let z=B(n),A=z(n);const _={c:function(){e=w("div"),t=w("p"),i=w("span"),s=w("strong"),c=R(l),r=R(":"),d=F(),g=R(o),u=w("br"),m=F(),k.c(),p=F(),$&&$.c(),a=F(),A.c(),this.h()},l:function(T){e=y(T,"DIV",{});var h=V(e);t=y(h,"P",{class:!0});var Q=V(t);i=y(Q,"SPAN",{});var W=V(i);s=y(W,"STRONG",{});var le=V(s);c=E(le,l),r=E(le,":"),le.forEach(v),d=j(W),g=E(W,o),u=y(W,"BR",{}),W.forEach(v),m=j(Q),k.l(Q),Q.forEach(v),p=j(h),$&&$.l(h),a=j(h),A.l(h),h.forEach(v),this.h()},h:function(){S(s,x,69,18,2643),S(u,x,69,78,2703),S(i,x,69,12,2637),I(t,"class","mb-4"),S(t,x,68,10,2608),S(e,x,67,8,2592)},m:function(T,h){P(T,e,h),f(e,t),f(t,i),f(i,s),f(s,c),f(s,r),f(i,d),f(i,g),f(i,u),f(t,m),k.m(t,null),f(e,p),$&&$.m(e,null),f(e,a),A.m(e,null)},p:function(T,h){h&64&&l!==(l=T[6]("version")+"")&&D(c,l),h&128&&o!==(o=T[7].uplugin.Version+"")&&D(g,o),G===(G=b(T))&&k?k.p(T,h):(k.d(1),k=G(T),k&&(k.c(),k.m(t,null))),T[7].uplugin.Plugins!==void 0?$?$.p(T,h):($=Ee(T),$.c(),$.m(e,a)):$&&($.d(1),$=null),z===(z=B(T))&&A?A.p(T,h):(A.d(1),A=z(T),A&&(A.c(),A.m(e,null)))},d:function(T){T&&v(e),k.d(),$&&$.d(),A.d()}};return O("SvelteRegisterBlock",{block:_,id:Re.name,type:"if",source:"(67:6) {#if $modMeta}",ctx:n}),_}function ut(n){let e,t=n[6]("version-form.missing-sem-version")+"",i,s,l=n[7].uplugin.Version+"",c,r;const d={c:function(){e=w("span"),i=R(t),s=F(),c=R(l),r=R(".0.0"),this.h()},l:function(g){e=y(g,"SPAN",{class:!0});var u=V(e);i=E(u,t),s=j(u),c=E(u,l),r=E(u,".0.0"),u.forEach(v),this.h()},h:function(){I(e,"class","text-yellow-600"),S(e,x,74,14,2904)},m:function(g,u){P(g,e,u),f(e,i),f(e,s),f(e,c),f(e,r)},p:function(g,u){u&64&&t!==(t=g[6]("version-form.missing-sem-version")+"")&&D(i,t),u&128&&l!==(l=g[7].uplugin.Version+"")&&D(c,l)},d:function(g){g&&v(e)}};return O("SvelteRegisterBlock",{block:d,id:ut.name,type:"else",source:"(74:12) {:else}",ctx:n}),d}function mt(n){let e,t,i,s,l=n[7].uplugin.SemVersion+"",c,r;const d={c:function(){e=w("span"),t=w("strong"),i=R("SemVersion:"),s=F(),c=R(l),r=w("br"),this.h()},l:function(g){e=y(g,"SPAN",{});var u=V(e);t=y(u,"STRONG",{});var m=V(t);i=E(m,"SemVersion:"),m.forEach(v),s=j(u),c=E(u,l),r=y(u,"BR",{}),u.forEach(v),this.h()},h:function(){S(t,x,72,20,2798),S(r,x,72,78,2856),S(e,x,72,14,2792)},m:function(g,u){P(g,e,u),f(e,t),f(t,i),f(e,s),f(e,c),f(e,r)},p:function(g,u){u&128&&l!==(l=g[7].uplugin.SemVersion+"")&&D(c,l)},d:function(g){g&&v(e)}};return O("SvelteRegisterBlock",{block:d,id:mt.name,type:"if",source:"(72:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:n}),d}function Ee(n){let e,t,i=n[6]("dependencies")+"",s,l,c,r,d=n[7].uplugin.Plugins;he(d);let o=[];for(let u=0;u<d.length;u+=1)o[u]=Be(et(n,d,u));const g={c:function(){e=w("p"),t=w("strong"),s=R(i),l=R(":"),c=w("br"),r=F();for(let m=0;m<o.length;m+=1)o[m].c();this.h()},l:function(m){e=y(m,"P",{});var p=V(e);t=y(p,"STRONG",{});var a=V(t);s=E(a,i),l=E(a,":"),a.forEach(v),c=y(p,"BR",{}),r=j(p);for(let b=0;b<o.length;b+=1)o[b].l(p);p.forEach(v),this.h()},h:function(){S(t,x,83,14,3180),S(c,x,83,52,3218),S(e,x,82,12,3162)},m:function(m,p){P(m,e,p),f(e,t),f(t,s),f(t,l),f(e,c),f(e,r);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null)},p:function(m,p){if(p&64&&i!==(i=m[6]("dependencies")+"")&&D(s,i),p&128){d=m[7].uplugin.Plugins,he(d);let a;for(a=0;a<d.length;a+=1){const b=et(m,d,a);o[a]?o[a].p(b,p):(o[a]=Be(b),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=d.length}},d:function(m){m&&v(e),nt(o,m)}};return O("SvelteRegisterBlock",{block:g,id:Ee.name,type:"if",source:"(82:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:n}),g}function pt(n){let e,t;const i={c:function(){e=w("span"),t=R("*"),this.h()},l:function(l){e=y(l,"SPAN",{});var c=V(e);t=E(c,"*"),c.forEach(v),this.h()},h:function(){S(e,x,89,18,3480)},m:function(l,c){P(l,e,c),f(e,t)},p:J,d:function(l){l&&v(e)}};return O("SvelteRegisterBlock",{block:i,id:pt.name,type:"else",source:"(89:16) {:else}",ctx:n}),i}function dt(n){let e,t=n[22].SemVersion+"",i;const s={c:function(){e=w("span"),i=R(t),this.h()},l:function(c){e=y(c,"SPAN",{});var r=V(e);i=E(r,t),r.forEach(v),this.h()},h:function(){S(e,x,87,18,3401)},m:function(c,r){P(c,e,r),f(e,i)},p:function(c,r){r&128&&t!==(t=c[22].SemVersion+"")&&D(i,t)},d:function(c){c&&v(e)}};return O("SvelteRegisterBlock",{block:s,id:dt.name,type:"if",source:"(87:16) {#if dependency.SemVersion}",ctx:n}),s}function Be(n){let e,t=n[22].Name+"",i,s,l,c,r;function d(m,p){return m[22].SemVersion?dt:pt}let o=d(n),g=o(n);const u={c:function(){e=w("strong"),i=R(t),s=R(":"),l=F(),g.c(),c=F(),r=w("br"),this.h()},l:function(p){e=y(p,"STRONG",{});var a=V(e);i=E(a,t),s=E(a,":"),a.forEach(v),l=j(p),g.l(p),c=j(p),r=y(p,"BR",{}),this.h()},h:function(){S(e,x,85,16,3302),S(r,x,91,16,3533)},m:function(p,a){P(p,e,a),f(e,i),f(e,s),P(p,l,a),g.m(p,a),P(p,c,a),P(p,r,a)},p:function(p,a){a&128&&t!==(t=p[22].Name+"")&&D(i,t),o===(o=d(p))&&g?g.p(p,a):(g.d(1),g=o(p),g&&(g.c(),g.m(c.parentNode,c)))},d:function(p){p&&v(e),p&&v(l),g.d(p),p&&v(c),p&&v(r)}};return O("SvelteRegisterBlock",{block:u,id:Be.name,type:"each",source:"(85:14) {#each $modMeta.uplugin.Plugins as dependency}",ctx:n}),u}function ht(n){let e,t,i=n[6]("version-form.missing-sem-version")+"",s;const l={c:function(){e=w("p"),t=w("span"),s=R(i),this.h()},l:function(r){e=y(r,"P",{});var d=V(e);t=y(d,"SPAN",{class:!0});var o=V(t);s=E(o,i),o.forEach(v),d.forEach(v),this.h()},h:function(){I(t,"class","text-yellow-600"),S(t,x,106,14,3927),S(e,x,105,12,3909)},m:function(r,d){P(r,e,d),f(e,t),f(t,s)},p:function(r,d){d&64&&i!==(i=r[6]("version-form.missing-sem-version")+"")&&D(s,i)},d:function(r){r&&v(e)}};return O("SvelteRegisterBlock",{block:l,id:ht.name,type:"else",source:"(105:10) {:else}",ctx:n}),l}function gt(n){let e,t,i=n[6]("objects")+"",s,l,c,r,d=n[7].objects;he(d);let o=[];for(let u=0;u<d.length;u+=1)o[u]=Pe(Ye(n,d,u));const g={c:function(){e=w("p"),t=w("strong"),s=R(i),l=R(":"),c=w("br"),r=F();for(let m=0;m<o.length;m+=1)o[m].c();this.h()},l:function(m){e=y(m,"P",{});var p=V(e);t=y(p,"STRONG",{});var a=V(t);s=E(a,i),l=E(a,":"),a.forEach(v),c=y(p,"BR",{}),r=j(p);for(let b=0;b<o.length;b+=1)o[b].l(p);p.forEach(v),this.h()},h:function(){S(t,x,98,14,3690),S(c,x,98,47,3723),S(e,x,97,12,3672)},m:function(m,p){P(m,e,p),f(e,t),f(t,s),f(t,l),f(e,c),f(e,r);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null)},p:function(m,p){if(p&64&&i!==(i=m[6]("objects")+"")&&D(s,i),p&128){d=m[7].objects,he(d);let a;for(a=0;a<d.length;a+=1){const b=Ye(m,d,a);o[a]?o[a].p(b,p):(o[a]=Pe(b),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=d.length}},d:function(m){m&&v(e),nt(o,m)}};return O("SvelteRegisterBlock",{block:g,id:gt.name,type:"if",source:"(97:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:n}),g}function Pe(n){let e,t=n[19]+"",i,s,l;const c={c:function(){e=w("span"),i=R(t),s=F(),l=w("br"),this.h()},l:function(d){e=y(d,"SPAN",{});var o=V(e);i=E(o,t),o.forEach(v),s=j(d),l=y(d,"BR",{}),this.h()},h:function(){S(e,x,100,16,3795),S(l,x,101,16,3833)},m:function(d,o){P(d,e,o),f(e,i),P(d,s,o),P(d,l,o)},p:function(d,o){o&128&&t!==(t=d[19]+"")&&D(i,t)},d:function(d){d&&v(e),d&&v(s),d&&v(l)}};return O("SvelteRegisterBlock",{block:c,id:Pe.name,type:"each",source:"(100:14) {#each $modMeta.objects as object}",ctx:n}),c}function $t(n){let e,t=(n[18]||"")+"",i;const s={c:function(){e=w("span"),i=R(t),this.h()},l:function(c){e=y(c,"SPAN",{class:!0});var r=V(e);i=E(r,t),r.forEach(v),this.h()},h:function(){I(e,"class","validation-message"),S(e,x,125,10,4474)},m:function(c,r){P(c,e,r),f(e,i)},p:function(c,r){r&262144&&t!==(t=(c[18]||"")+"")&&D(i,t)},d:function(c){c&&v(e)}};return O("SvelteRegisterBlock",{block:s,id:$t.name,type:"slot",source:'(125:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:n}),s}function vt(n){const e={c:J,l:J,m:J,p:J,d:J};return O("SvelteRegisterBlock",{block:e,id:vt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function bt(n){let e,t=n[17]+"";const i={c:function(){e=w("div"),this.h()},l:function(l){e=y(l,"DIV",{class:!0});var c=V(e);c.forEach(v),this.h()},h:function(){I(e,"class","markdown-content right s-Aj89xH93RQKp"),S(e,x,131,10,4735)},m:function(l,c){P(l,e,c),e.innerHTML=t},p:function(l,c){c&32&&t!==(t=l[17]+"")&&(e.innerHTML=t)},d:function(l){l&&v(e)}};return O("SvelteRegisterBlock",{block:i,id:bt.name,type:"then",source:'(131:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:n}),i}function wt(n){const e={c:J,l:J,m:J,p:J,d:J};return O("SvelteRegisterBlock",{block:e,id:wt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function yt(n){let e;const t={c:function(){e=R(n[1])},l:function(s){e=E(s,n[1])},m:function(s,l){P(s,e,l)},p:function(s,l){l&2&&D(e,s[1])},d:function(s){s&&v(e)}};return O("SvelteRegisterBlock",{block:t,id:yt.name,type:"slot",source:'(142:6) <Button variant=\\"outlined\\" type=\\"submit\\" {disabled}>',ctx:n}),t}function Ne(n){let e,t,i,s,l,c,r,d,o,g,u,m,p,a,b,G,k,$,B=n[6]("preview")+"",z,A,_,N,T,h,Q=n[6]("version-form.agreement-to")+"",W,le,ne,ue=n[6]("content-policy")+"",pe,$e,ve,fe,ie,ce,be,Te;function St(q){n[14](q)}let Fe={label:n[6]("stability"),$$slots:{default:[rt]},$$scope:{ctx:n}};n[3].stability!==void 0&&(Fe.value=n[3].stability),s=new it({props:Fe,$$inline:!0}),Ie.push(()=>De(s,"value",St)),r=new ge({props:{for:"stability",$$slots:{default:[at,({messages:q})=>({18:q}),({messages:q})=>q?262144:0]},$$scope:{ctx:n}},$$inline:!0});let L=!n[2]&&ke(n);function xt(q){n[15](q)}let je={textarea:!0,class:"vertical-textarea",label:n[6]("changelog"),required:!0,input$rows:10};n[3].changelog!==void 0&&(je.value=n[3].changelog),m=new st({props:je,$$inline:!0}),Ie.push(()=>De(m,"value",xt)),b=new ge({props:{for:"changelog",$$slots:{default:[$t,({messages:q})=>({18:q}),({messages:q})=>q?262144:0]},$$scope:{ctx:n}},$$inline:!0});let K={ctx:n,current:null,token:null,hasCatch:!1,pending:wt,then:bt,catch:vt,value:17};ze(N=Se(n[5]),K),ie=new tt({props:{variant:"outlined",type:"submit",disabled:n[4],$$slots:{default:[yt]},$$scope:{ctx:n}},$$inline:!0});const Ae={c:function(){e=w("form"),t=w("div"),i=w("div"),X(s.$$.fragment),c=F(),X(r.$$.fragment),d=F(),L&&L.c(),o=F(),g=w("div"),u=w("div"),X(m.$$.fragment),a=F(),X(b.$$.fragment),G=F(),k=w("div"),$=w("span"),z=R(B),A=R(":"),_=F(),K.block.c(),T=F(),h=w("div"),W=R(Q),le=F(),ne=w("a"),pe=R(ue),$e=R("."),ve=F(),fe=w("div"),X(ie.$$.fragment),this.h()},l:function(H){e=y(H,"FORM",{});var M=V(e);t=y(M,"DIV",{class:!0});var U=V(t);i=y(U,"DIV",{class:!0});var re=V(i);Y(s.$$.fragment,re),c=j(re),Y(r.$$.fragment,re),re.forEach(v),d=j(U),L&&L.l(U),o=j(U),g=y(U,"DIV",{class:!0});var se=V(g);u=y(se,"DIV",{class:!0});var ae=V(u);Y(m.$$.fragment,ae),a=j(ae),Y(b.$$.fragment,ae),ae.forEach(v),G=j(se),k=y(se,"DIV",{class:!0});var oe=V(k);$=y(oe,"SPAN",{});var we=V($);z=E(we,B),A=E(we,":"),we.forEach(v),_=j(oe),K.block.l(oe),oe.forEach(v),se.forEach(v),T=j(U),h=y(U,"DIV",{class:!0});var me=V(h);W=E(me,Q),le=j(me),ne=y(me,"A",{href:!0,class:!0});var Me=V(ne);pe=E(Me,ue),Me.forEach(v),$e=E(me,"."),me.forEach(v),ve=j(U),fe=y(U,"DIV",{});var Oe=V(fe);Y(ie.$$.fragment,Oe),Oe.forEach(v),U.forEach(v),M.forEach(v),this.h()},h:function(){I(i,"class","grid grid-flow-row gap-2"),S(i,x,39,4,1491),I(u,"class","grid grid-flow-row gap-2 auto-rows-max"),S(u,x,116,6,4149),S($,x,129,8,4639),I(k,"class","grid grid-flow-row gap-2 auto-rows-max"),S(k,x,128,6,4578),I(g,"class","grid gap-6 split s-Aj89xH93RQKp"),S(g,x,115,4,4112),I(ne,"href","/content-policy"),I(ne,"class","s-Aj89xH93RQKp"),S(ne,x,137,40,4912),I(h,"class","text-muted"),S(h,x,136,4,4847),S(fe,x,140,4,4982),I(t,"class","grid grid-flow-row gap-6"),S(t,x,38,2,1448),S(e,x,37,0,1430)},m:function(H,M){P(H,e,M),f(e,t),f(t,i),ee(s,i,null),f(i,c),ee(r,i,null),f(t,d),L&&L.m(t,null),f(t,o),f(t,g),f(g,u),ee(m,u,null),f(u,a),ee(b,u,null),f(g,G),f(g,k),f(k,$),f($,z),f($,A),f(k,_),K.block.m(k,K.anchor=null),K.mount=()=>k,K.anchor=null,f(t,T),f(t,h),f(h,W),f(h,le),f(h,ne),f(ne,pe),f(h,$e),f(t,ve),f(t,fe),ee(ie,fe,null),ce=!0,be||(Te=Bt(n[9].call(null,e)),be=!0)},p:function(H,[M]){n=H;const U={};M&64&&(U.label=n[6]("stability")),M&33554432&&(U.$$scope={dirty:M,ctx:n}),!l&&M&8&&(l=!0,U.value=n[3].stability,qe(()=>l=!1)),s.$set(U);const re={};M&33816576&&(re.$$scope={dirty:M,ctx:n}),r.$set(re),n[2]?L&&(Pt(),Z(L,1,1,()=>{L=null}),Nt()):L?(L.p(n,M),M&4&&C(L,1)):(L=ke(n),L.c(),C(L,1),L.m(t,o));const se={};M&64&&(se.label=n[6]("changelog")),!p&&M&8&&(p=!0,se.value=n[3].changelog,qe(()=>p=!1)),m.$set(se);const ae={};M&33816576&&(ae.$$scope={dirty:M,ctx:n}),b.$set(ae),(!ce||M&64)&&B!==(B=n[6]("preview")+"")&&D(z,B),K.ctx=n,M&32&&N!==(N=Se(n[5]))&&ze(N,K)||Tt(K,n,M),(!ce||M&64)&&Q!==(Q=n[6]("version-form.agreement-to")+"")&&D(W,Q),(!ce||M&64)&&ue!==(ue=n[6]("content-policy")+"")&&D(pe,ue);const oe={};M&16&&(oe.disabled=n[4]),M&33554434&&(oe.$$scope={dirty:M,ctx:n}),ie.$set(oe)},i:function(H){ce||(C(s.$$.fragment,H),C(r.$$.fragment,H),C(L),C(m.$$.fragment,H),C(b.$$.fragment,H),C(ie.$$.fragment,H),ce=!0)},o:function(H){Z(s.$$.fragment,H),Z(r.$$.fragment,H),Z(L),Z(m.$$.fragment,H),Z(b.$$.fragment,H),Z(ie.$$.fragment,H),ce=!1},d:function(H){H&&v(e),te(s),te(r),L&&L.d(),te(m),te(b),K.block.d(),K.token=null,K=null,te(ie),be=!1,Te()}};return O("SvelteRegisterBlock",{block:Ae,id:Ne.name,type:"component",source:"",ctx:n}),Ae}function Gt(n,e,t){let i,s,l,c=J,r=()=>(c(),c=Ft(u,h=>t(6,l=h)),u),d;n.$$.on_destroy.push(()=>c());let{$$slots:o={},$$scope:g}=e;Et("VersionForm",o,[]);const{t:u}=Ge();ye(u,"t"),r();let{modReference:m}=e,{onSubmit:p}=e,{initialValues:a={arch:[{ModVersionID:"",platform:"",asset:"",hash:"",size:0}],changelog:"",stability:Ze.Alpha}}=e,{submitText:b=l("entry.create")}=e,{editing:G=!1}=e;const k=Le();ye(k,"modMeta"),_e(n,k,h=>t(7,d=h));let $=!1;const B=Xe(m,k),{form:z,data:A}=We({initialValues:a,extend:[Ke({schema:B}),Ce],onSubmit:h=>{t(4,$=!0),p(Je(h,B)).then(()=>t(4,$=!1))}});ye(A,"data"),_e(n,A,h=>t(3,s=h)),n.$$.on_mount.push(function(){m===void 0&&!("modReference"in e||n.$$.bound[n.$$.props.modReference])&&console.warn("<VersionForm> was created without expected prop 'modReference'"),p===void 0&&!("onSubmit"in e||n.$$.bound[n.$$.props.onSubmit])&&console.warn("<VersionForm> was created without expected prop 'onSubmit'")});const _=["modReference","onSubmit","initialValues","submitText","editing"];Object.keys(e).forEach(h=>{!~_.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${h}'`)});function N(h){n.$$.not_equal(s.stability,h)&&(s.stability=h,A.set(s))}function T(h){n.$$.not_equal(s.changelog,h)&&(s.changelog=h,A.set(s))}return n.$$set=h=>{"modReference"in h&&t(11,m=h.modReference),"onSubmit"in h&&t(12,p=h.onSubmit),"initialValues"in h&&t(13,a=h.initialValues),"submitText"in h&&t(1,b=h.submitText),"editing"in h&&t(2,G=h.editing)},n.$capture_state=()=>({createForm:We,validator:Ke,reporter:Ce,ValidationMessage:ge,constructVersionSchema:Xe,trimNonSchema:Je,markdown:Se,writable:Le,Textfield:st,Button:tt,VersionStabilities:Ze,Select:it,Option:de,prettyBytes:xe,getTranslate:Ge,t:u,modReference:m,onSubmit:p,initialValues:a,submitText:b,editing:G,modMeta:k,disabled:$,versionSchema:B,form:z,data:A,preview:i,$data:s,$t:l,$modMeta:d}),n.$inject_state=h=>{"modReference"in h&&t(11,m=h.modReference),"onSubmit"in h&&t(12,p=h.onSubmit),"initialValues"in h&&t(13,a=h.initialValues),"submitText"in h&&t(1,b=h.submitText),"editing"in h&&t(2,G=h.editing),"disabled"in h&&t(4,$=h.disabled),"preview"in h&&t(5,i=h.preview)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&8&&t(5,i=s.changelog||"")},[u,b,G,s,$,i,l,d,k,z,A,m,p,a,N,T]}class Ct extends kt{constructor(e){super(e),Vt(this,e,Gt,Ne,Rt,{t:0,modReference:11,onSubmit:12,initialValues:13,submitText:1,editing:2}),O("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:Ne.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ct as V};
//# sourceMappingURL=VersionForm.babed95d.js.map
