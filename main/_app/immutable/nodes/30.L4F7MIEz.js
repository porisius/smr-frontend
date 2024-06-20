import{L as Et,S as rt,i as at,s as st,e as $,a as G,T,c as v,d as E,F as lt,g as N,U as A,f as d,G as x,j as D,I as h,V as tt,q as _,a6 as It,r as xt,al as ut,ad as yt,b as Y,C as bt,m as U,t as I,l as Q,Z as Dt,A as L,D as z,H as F,J,k as Z,W as Vt,O as _t,Q as et,R as wt}from"../chunks/vendor.qkHm75Lx.js";import{I as Ct}from"../chunks/graphql.XSrPrpK2.js";import{l as Ot}from"../chunks/gql.WZvlfNZ8.js";import{p as ct}from"../chunks/formatting.G9yDJMit.js";import{M as St}from"../chunks/ModCard.65cIEoM5.js";import{G as Gt}from"../chunks/GuideCard.0KYDKJ23.js";import{M as Nt}from"../chunks/MetaDescriptors.8buV-7cv.js";import{u as Tt}from"../chunks/user.DaLCXNg3.js";import{P as At}from"../chunks/Page404.YfTqNZA_.js";const Mt=!1,Pt=async({params:n,parent:t})=>({...n,...await Ot({user:Et({query:Ct,client:(await t()).client,variables:{user:n.userId}})})}),oe=Object.freeze(Object.defineProperty({__proto__:null,load:Pt,prerender:Mt},Symbol.toStringTag,{value:"Module"}));function jt(n){let t,r,e,s,a="Info",c,l,i,f=n[2]("entry.created-at")+"",o,u,g,p=ct(n[0].created_at)+"",M,V;return{c(){t=$("div"),r=$("section"),e=$("div"),s=$("h3"),s.textContent=a,c=G(),l=$("span"),i=$("strong"),o=T(f),u=T(":"),g=G(),M=T(p),V=$("br"),this.h()},l(w){t=v(w,"DIV",{class:!0});var C=E(t);r=v(C,"SECTION",{});var O=E(r);e=v(O,"DIV",{class:!0});var S=E(e);s=v(S,"H3",{class:!0,"data-svelte-h":!0}),lt(s)!=="svelte-1p1x4o5"&&(s.textContent=a),c=N(S),l=v(S,"SPAN",{});var j=E(l);i=v(j,"STRONG",{});var R=E(i);o=A(R,f),u=A(R,":"),R.forEach(d),g=N(j),M=A(j,p),j.forEach(d),V=v(S,"BR",{}),S.forEach(d),O.forEach(d),C.forEach(d),this.h()},h(){x(s,"class","my-4 text-2xl font-bold"),x(e,"class","text-lg"),x(t,"class","card p-4")},m(w,C){D(w,t,C),h(t,r),h(r,e),h(e,s),h(e,c),h(e,l),h(l,i),h(i,o),h(i,u),h(l,g),h(l,M),h(e,V)},p(w,[C]){C&4&&f!==(f=w[2]("entry.created-at")+"")&&tt(o,f),C&1&&p!==(p=ct(w[0].created_at)+"")&&tt(M,p)},i:_,o:_,d(w){w&&d(t)}}}function Bt(n,t,r){let e,s=_,a=()=>(s(),s=xt(l,i=>r(2,e=i)),l);n.$$.on_destroy.push(()=>s());let{user:c}=t;const{t:l}=It();return a(),n.$$set=i=>{"user"in i&&r(0,c=i.user)},[c,l,e]}class qt extends rt{constructor(t){super(),at(this,t,Bt,jt,st,{user:0,t:1})}get t(){return this.$$.ctx[1]}}function Ht(n){let t,r,e,s;return{c(){t=$("div"),r=$("img"),this.h()},l(a){t=v(a,"DIV",{});var c=E(t);r=v(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(d),this.h()},h(){x(r,"class","w-full max-w-full rounded-lg sm:max-w-lg"),ut(r.src,e=n[1])||x(r,"src",e),x(r,"alt",s="Avatar for "+n[0])},m(a,c){D(a,t,c),h(t,r)},p(a,[c]){c&2&&!ut(r.src,e=a[1])&&x(r,"src",e),c&1&&s!==(s="Avatar for "+a[0])&&x(r,"alt",s)},i:_,o:_,d(a){a&&d(t)}}}function Rt(n,t,r){let e,{avatar:s}=t,{username:a}=t;return n.$$set=c=>{"avatar"in c&&r(2,s=c.avatar),"username"in c&&r(0,a=c.username)},n.$$.update=()=>{n.$$.dirty&4&&r(1,e=s||yt+"/images/no_image.webp")},[a,e,s]}class kt extends rt{constructor(t){super(),at(this,t,Rt,Ht,st,{avatar:2,username:0})}}function dt(n,t,r){const e=n.slice();return e[9]=t[r],e}function gt(n,t,r){const e=n.slice();return e[6]=t[r],e}function mt(n){let t,r;return t=new Nt({props:{description:n[2].data.getUser.username+" profile",title:n[2].data.getUser.username+" profile"}}),{c(){L(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,s){F(t,e,s),r=!0},p(e,s){const a={};s&4&&(a.description=e[2].data.getUser.username+" profile"),s&4&&(a.title=e[2].data.getUser.username+" profile"),t.$set(a)},i(e){r||(U(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){J(t,e)}}}function Lt(n){let t,r;return t=new At({}),{c(){L(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,s){F(t,e,s),r=!0},p:_,i(e){r||(U(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){J(t,e)}}}function zt(n){let t,r,e,s=n[2].data.getUser.username+"",a,c,l,i,f,o,u,g,p,M,V,w,C,O,S,j,R,y=n[3]&&n[2].data.getUser.id===n[3].id&&ht();function nt(m,b){return m[0]?Qt:Zt}let W=nt(n),P=W(n);const it=[Kt,Wt],B=[];function ft(m,b){return m[0]?1:0}return g=ft(n),p=B[g]=it[g](n),w=new kt({props:{avatar:n[2].data.getUser.avatar,username:n[2].data.getUser.username}}),O=new qt({props:{user:n[2].data.getUser}}),{c(){t=$("div"),r=$("div"),e=$("h1"),a=T(s),c=G(),l=$("div"),y&&y.c(),i=G(),f=$("button"),P.c(),o=G(),u=$("div"),p.c(),M=G(),V=$("div"),L(w.$$.fragment),C=G(),L(O.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0});var b=E(t);r=v(b,"DIV",{class:!0});var q=E(r);e=v(q,"H1",{class:!0});var k=E(e);a=A(k,s),k.forEach(d),c=N(q),l=v(q,"DIV",{});var H=E(l);y&&y.l(H),i=N(H),f=v(H,"BUTTON",{class:!0});var ot=E(f);P.l(ot),ot.forEach(d),H.forEach(d),q.forEach(d),o=N(b),u=v(b,"DIV",{class:!0});var K=E(u);p.l(K),M=N(K),V=v(K,"DIV",{class:!0});var X=E(V);z(w.$$.fragment,X),C=N(X),z(O.$$.fragment,X),X.forEach(d),K.forEach(d),b.forEach(d),this.h()},h(){x(e,"class","text-4xl font-bold"),x(f,"class","variant-ghost-primary btn"),x(r,"class","flex h-auto flex-wrap items-center justify-between"),x(V,"class","grid auto-rows-min grid-cols-1 gap-8"),x(u,"class","grid-auto-max grid auto-cols-fr gap-4"),x(t,"class","grid gap-6 xlx:grid-flow-row")},m(m,b){D(m,t,b),h(t,r),h(r,e),h(e,a),h(r,c),h(r,l),y&&y.m(l,null),h(l,i),h(l,f),P.m(f,null),h(t,o),h(t,u),B[g].m(u,null),h(u,M),h(u,V),F(w,V,null),h(V,C),F(O,V,null),S=!0,j||(R=Vt(f,"click",n[5]),j=!0)},p(m,b){(!S||b&4)&&s!==(s=m[2].data.getUser.username+"")&&tt(a,s),m[3]&&m[2].data.getUser.id===m[3].id?y||(y=ht(),y.c(),y.m(l,i)):y&&(y.d(1),y=null),W!==(W=nt(m))&&(P.d(1),P=W(m),P&&(P.c(),P.m(f,null)));let q=g;g=ft(m),g===q?B[g].p(m,b):(Z(),I(B[q],1,1,()=>{B[q]=null}),Q(),p=B[g],p?p.p(m,b):(p=B[g]=it[g](m),p.c()),U(p,1),p.m(u,M));const k={};b&4&&(k.avatar=m[2].data.getUser.avatar),b&4&&(k.username=m[2].data.getUser.username),w.$set(k);const H={};b&4&&(H.user=m[2].data.getUser),O.$set(H)},i(m){S||(U(p),U(w.$$.fragment,m),U(O.$$.fragment,m),S=!0)},o(m){I(p),I(w.$$.fragment,m),I(O.$$.fragment,m),S=!1},d(m){m&&d(t),y&&y.d(),P.d(),B[g].d(),J(w),J(O),j=!1,R()}}}function Ft(n){let t,r,e=n[2].error.message+"",s;return{c(){t=$("p"),r=T("Oh no... "),s=T(e)},l(a){t=v(a,"P",{});var c=E(t);r=A(c,"Oh no... "),s=A(c,e),c.forEach(d)},m(a,c){D(a,t,c),h(t,r),h(t,s)},p(a,c){c&4&&e!==(e=a[2].error.message+"")&&tt(s,e)},i:_,o:_,d(a){a&&d(t)}}}function Jt(n){let t,r="Loading...";return{c(){t=$("p"),t.textContent=r},l(e){t=v(e,"P",{"data-svelte-h":!0}),lt(t)!=="svelte-qdsr2u"&&(t.textContent=r)},m(e,s){D(e,t,s)},p:_,i:_,o:_,d(e){e&&d(t)}}}function ht(n){let t,r="Settings";return{c(){t=$("a"),t.textContent=r,this.h()},l(e){t=v(e,"A",{class:!0,href:!0,"data-svelte-h":!0}),lt(t)!=="svelte-25wfcr"&&(t.textContent=r),this.h()},h(){x(t,"class","variant-ghost-primary btn"),x(t,"href",_t+"/settings")},m(e,s){D(e,t,s)},d(e){e&&d(t)}}}function Qt(n){let t;return{c(){t=T("Mods")},l(r){t=A(r,"Mods")},m(r,e){D(r,t,e)},d(r){r&&d(t)}}}function Zt(n){let t;return{c(){t=T("Guides")},l(r){t=A(r,"Guides")},m(r,e){D(r,t,e)},d(r){r&&d(t)}}}function Wt(n){let t,r,e,s=et(n[2].data.getUser.guides),a=[];for(let i=0;i<s.length;i+=1)a[i]=pt(dt(n,s,i));const c=i=>I(a[i],1,1,()=>{a[i]=null});let l=n[2].data.getUser.guides.length===0&&$t();return{c(){t=$("div");for(let i=0;i<a.length;i+=1)a[i].c();r=G(),l&&l.c(),this.h()},l(i){t=v(i,"DIV",{class:!0});var f=E(t);for(let o=0;o<a.length;o+=1)a[o].l(f);r=N(f),l&&l.l(f),f.forEach(d),this.h()},h(){x(t,"class","grid h-fit grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3")},m(i,f){D(i,t,f);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(t,null);h(t,r),l&&l.m(t,null),e=!0},p(i,f){if(f&4){s=et(i[2].data.getUser.guides);let o;for(o=0;o<s.length;o+=1){const u=dt(i,s,o);a[o]?(a[o].p(u,f),U(a[o],1)):(a[o]=pt(u),a[o].c(),U(a[o],1),a[o].m(t,r))}for(Z(),o=s.length;o<a.length;o+=1)c(o);Q()}i[2].data.getUser.guides.length===0?l||(l=$t(),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},i(i){if(!e){for(let f=0;f<s.length;f+=1)U(a[f]);e=!0}},o(i){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)I(a[f]);e=!1},d(i){i&&d(t),wt(a,i),l&&l.d()}}}function Kt(n){let t,r,e,s=et(n[2].data.getUser.mods),a=[];for(let i=0;i<s.length;i+=1)a[i]=vt(gt(n,s,i));const c=i=>I(a[i],1,1,()=>{a[i]=null});let l=n[2].data.getUser.mods.length===0&&Ut();return{c(){t=$("div");for(let i=0;i<a.length;i+=1)a[i].c();r=G(),l&&l.c(),this.h()},l(i){t=v(i,"DIV",{class:!0});var f=E(t);for(let o=0;o<a.length;o+=1)a[o].l(f);r=N(f),l&&l.l(f),f.forEach(d),this.h()},h(){x(t,"class","grid h-fit grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3")},m(i,f){D(i,t,f);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(t,null);h(t,r),l&&l.m(t,null),e=!0},p(i,f){if(f&4){s=et(i[2].data.getUser.mods);let o;for(o=0;o<s.length;o+=1){const u=gt(i,s,o);a[o]?(a[o].p(u,f),U(a[o],1)):(a[o]=vt(u),a[o].c(),U(a[o],1),a[o].m(t,r))}for(Z(),o=s.length;o<a.length;o+=1)c(o);Q()}i[2].data.getUser.mods.length===0?l||(l=Ut(),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},i(i){if(!e){for(let f=0;f<s.length;f+=1)U(a[f]);e=!0}},o(i){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)I(a[f]);e=!1},d(i){i&&d(t),wt(a,i),l&&l.d()}}}function pt(n){let t,r;return t=new Gt({props:{guide:n[9],logo:n[2].data.getUser.avatar}}),{c(){L(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,s){F(t,e,s),r=!0},p(e,s){const a={};s&4&&(a.guide=e[9]),s&4&&(a.logo=e[2].data.getUser.avatar),t.$set(a)},i(e){r||(U(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){J(t,e)}}}function $t(n){let t;return{c(){t=T("User has no guides")},l(r){t=A(r,"User has no guides")},m(r,e){D(r,t,e)},d(r){r&&d(t)}}}function vt(n){let t,r;return t=new St({props:{mod:n[6].mod}}),{c(){L(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,s){F(t,e,s),r=!0},p(e,s){const a={};s&4&&(a.mod=e[6].mod),t.$set(a)},i(e){r||(U(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){J(t,e)}}}function Ut(n){let t;return{c(){t=T("User has no mods")},l(r){t=A(r,"User has no mods")},m(r,e){D(r,t,e)},d(r){r&&d(t)}}}function Xt(n){let t,r,e,s,a,c,l=!n[2].fetching&&!n[2].error&&n[2].data.getUser&&mt(n);const i=[Jt,Ft,zt,Lt],f=[];function o(u,g){return u[2].fetching?0:u[2].error?1:u[2].data.getUser?2:3}return e=o(n),s=f[e]=i[e](n),{c(){l&&l.c(),t=Y(),r=G(),s.c(),a=Y()},l(u){const g=bt("svelte-sx4i20",document.head);l&&l.l(g),t=Y(),g.forEach(d),r=N(u),s.l(u),a=Y()},m(u,g){l&&l.m(document.head,null),h(document.head,t),D(u,r,g),f[e].m(u,g),D(u,a,g),c=!0},p(u,[g]){!u[2].fetching&&!u[2].error&&u[2].data.getUser?l?(l.p(u,g),g&4&&U(l,1)):(l=mt(u),l.c(),U(l,1),l.m(t.parentNode,t)):l&&(Z(),I(l,1,1,()=>{l=null}),Q());let p=e;e=o(u),e===p?f[e].p(u,g):(Z(),I(f[p],1,1,()=>{f[p]=null}),Q(),s=f[e],s?s.p(u,g):(s=f[e]=i[e](u),s.c()),U(s,1),s.m(a.parentNode,a))},i(u){c||(U(l),U(s),c=!0)},o(u){I(l),I(s),c=!1},d(u){u&&(d(r),d(a)),l&&l.d(u),d(t),f[e].d(u)}}}function Yt(n,t,r){let e,s,a=_,c=()=>(a(),a=xt(e,u=>r(2,s=u)),e),l;Dt(n,Tt,u=>r(3,l=u)),n.$$.on_destroy.push(()=>a());let{data:i}=t,f=!1;const o=()=>r(0,f=!f);return n.$$set=u=>{"data"in u&&r(4,i=u.data)},n.$$.update=()=>{n.$$.dirty&16&&c(r(1,{user:e}=i,e))},[f,e,s,l,i,o]}class ue extends rt{constructor(t){super(),at(this,t,Yt,Xt,st,{data:4})}}export{ue as component,oe as universal};
//# sourceMappingURL=30.L4F7MIEz.js.map