import{S as R,i as T,s as U,e as G,a as S,Z as E,c as x,d as y,g as B,_ as P,f as $,a7 as I,j as v,a5 as N,$ as D,m as d,k as q,t as p,l as A,a1 as V,al as F,aC as X,an as Y,aD as tt,aH as et,aa as H,ab as Z,w as rt,aM as W,ac as lt,q as O,aV as at}from"../../chunks/vendor-93f46a94.js";import{o as nt}from"../../chunks/graphql-663dc1a6.js";import{G as st}from"../../chunks/GuideCard-fe28ef91.js";import{P as J}from"../../chunks/PageControls-1c8f4bc9.js";import{b as it}from"../../chunks/paths-1c47712a.js";import{a as ot}from"../../chunks/user-bfea9258.js";import{F as ft}from"../../chunks/FicsitCard-e155e469.js";import{M as ut}from"../../chunks/MetaDescriptors-5ea9952a.js";import"../../chunks/formatting-d1753ec3.js";import"../../chunks/navigation-ce539261.js";import"../../chunks/singletons-cdeec3fd.js";import"../../chunks/stores-84e1d086.js";function K(i,t,l){const e=i.slice();return e[11]=t[l],e}function ct(i,t,l){const e=i.slice();return e[8]=t[l],e}function L(i){let t,l;return t=new et({props:{variant:"outlined",href:it+"/new-guide",$$slots:{default:[gt]},$$scope:{ctx:i}}}),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){D(t,e,s),l=!0},p(e,s){const r={};s&16384&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){V(t,e)}}}function gt(i){let t;return{c(){t=H("New Guide")},l(l){t=Z(l,"New Guide")},m(l,e){v(l,t,e)},d(l){l&&$(t)}}}function mt(i){let t,l,e,s=i[1].data.getGuides.guides,r=[];for(let a=0;a<s.length;a+=1)r[a]=Q(K(i,s,a));const n=a=>p(r[a],1,1,()=>{r[a]=null});return{c(){t=G("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){t=x(a,"DIV",{class:!0});var f=y(t);for(let u=0;u<r.length;u+=1)r[u].l(f);f.forEach($),this.h()},h(){I(t,"class",l="grid "+i[3]+" gap-4")},m(a,f){v(a,t,f);for(let u=0;u<r.length;u+=1)r[u].m(t,null);e=!0},p(a,f){if(f&2){s=a[1].data.getGuides.guides;let u;for(u=0;u<s.length;u+=1){const h=K(a,s,u);r[u]?(r[u].p(h,f),d(r[u],1)):(r[u]=Q(h),r[u].c(),d(r[u],1),r[u].m(t,null))}for(q(),u=s.length;u<r.length;u+=1)n(u);A()}(!e||f&8&&l!==(l="grid "+a[3]+" gap-4"))&&I(t,"class",l)},i(a){if(!e){for(let f=0;f<s.length;f+=1)d(r[f]);e=!0}},o(a){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)p(r[f]);e=!1},d(a){a&&$(t),W(r,a)}}}function $t(i){let t,l,e=i[1].error.message+"",s;return{c(){t=G("p"),l=H("Oh no... "),s=H(e)},l(r){t=x(r,"P",{});var n=y(t);l=Z(n,"Oh no... "),s=Z(n,e),n.forEach($)},m(r,n){v(r,t,n),N(t,l),N(t,s)},p(r,n){n&2&&e!==(e=r[1].error.message+"")&&lt(s,e)},i:O,o:O,d(r){r&&$(t)}}}function dt(i){let t,l,e,s=Array(b),r=[];for(let n=0;n<s.length;n+=1)r[n]=pt(ct(i,s,n));return{c(){t=G("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){t=x(n,"DIV",{class:!0});var a=y(t);for(let f=0;f<r.length;f+=1)r[f].l(a);a.forEach($),this.h()},h(){I(t,"class",l="grid "+i[3]+" gap-4")},m(n,a){v(n,t,a);for(let f=0;f<r.length;f+=1)r[f].m(t,null);e=!0},p(n,a){(!e||a&8&&l!==(l="grid "+n[3]+" gap-4"))&&I(t,"class",l)},i(n){if(!e){for(let a=0;a<s.length;a+=1)d(r[a]);e=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)p(r[a]);e=!1},d(n){n&&$(t),W(r,n)}}}function Q(i){let t,l;return t=new st({props:{guide:i[11],logo:i[11].user.avatar}}),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){D(t,e,s),l=!0},p(e,s){const r={};s&2&&(r.guide=e[11]),s&2&&(r.logo=e[11].user.avatar),t.$set(r)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){V(t,e)}}}function pt(i){let t,l;return t=new ft({props:{fake:!0}}),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){D(t,e,s),l=!0},p:O,i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){V(t,e)}}}function ht(i){let t,l,e,s,r,n,a,f,u,h,g,k,c=i[0]&&i[4]!==null&&L(i);s=new J({props:{totalPages:Math.ceil(i[2]/b),currentPage:i[6]}});const _=[dt,$t,mt],w=[];function z(o,m){return o[1].fetching?0:o[1].error?1:2}return n=z(i),a=w[n]=_[n](i),g=new J({props:{totalPages:Math.ceil(i[2]/b),currentPage:i[6]}}),{c(){t=G("div"),c&&c.c(),l=S(),e=G("div"),E(s.$$.fragment),r=S(),a.c(),f=S(),u=G("div"),h=G("div"),E(g.$$.fragment),this.h()},l(o){t=x(o,"DIV",{class:!0});var m=y(t);c&&c.l(m),l=B(m),e=x(m,"DIV",{});var M=y(e);P(s.$$.fragment,M),M.forEach($),m.forEach($),r=B(o),a.l(o),f=B(o),u=x(o,"DIV",{class:!0});var C=y(u);h=x(C,"DIV",{});var j=y(h);P(g.$$.fragment,j),j.forEach($),C.forEach($),this.h()},h(){I(t,"class","mb-5 ml-auto flex justify-between"),I(u,"class","mt-5 ml-auto flex justify-end")},m(o,m){v(o,t,m),c&&c.m(t,null),N(t,l),N(t,e),D(s,e,null),v(o,r,m),w[n].m(o,m),v(o,f,m),v(o,u,m),N(u,h),D(g,h,null),k=!0},p(o,[m]){o[0]&&o[4]!==null?c?(c.p(o,m),m&17&&d(c,1)):(c=L(o),c.c(),d(c,1),c.m(t,l)):c&&(q(),p(c,1,1,()=>{c=null}),A());const M={};m&4&&(M.totalPages=Math.ceil(o[2]/b)),s.$set(M);let C=n;n=z(o),n===C?w[n].p(o,m):(q(),p(w[C],1,1,()=>{w[C]=null}),A(),a=w[n],a?a.p(o,m):(a=w[n]=_[n](o),a.c()),d(a,1),a.m(f.parentNode,f));const j={};m&4&&(j.totalPages=Math.ceil(o[2]/b)),g.$set(j)},i(o){k||(d(c),d(s.$$.fragment,o),d(a),d(g.$$.fragment,o),k=!0)},o(o){p(c),p(s.$$.fragment,o),p(a),p(g.$$.fragment,o),k=!1},d(o){o&&$(t),c&&c.d(),V(s),o&&$(r),w[n].d(o),o&&$(f),o&&$(u),V(g)}}}const b=40;function vt(i,t,l){let e,s,r;F(i,ot,g=>l(4,r=g));let{colCount:n=4}=t,{newGuide:a=!1}=t;const f=X(nt,{offset:0,limit:b});F(i,f,g=>l(1,s=g));const u=rt(1);let h;return u.subscribe(g=>{Y(f,s.variables.offset=(g-1)*b,s),s.reexecute()}),tt(f),i.$$set=g=>{"colCount"in g&&l(7,n=g.colCount),"newGuide"in g&&l(0,a=g.newGuide)},i.$$.update=()=>{i.$$.dirty&2&&l(2,h=s?.data?.getGuides?.count||0),i.$$.dirty&128&&l(3,e=n==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1")},[a,s,h,e,r,f,u,n]}class wt extends R{constructor(t){super(),T(this,t,vt,ht,U,{colCount:7,newGuide:0})}}function Gt(i){let t,l,e,s;return t=new ut({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"}}),e=new wt({props:{newGuide:!0,colCount:4}}),{c(){E(t.$$.fragment),l=S(),E(e.$$.fragment)},l(r){const n=at('[data-svelte="svelte-gby4d8"]',document.head);P(t.$$.fragment,n),n.forEach($),l=B(r),P(e.$$.fragment,r)},m(r,n){D(t,document.head,null),v(r,l,n),D(e,r,n),s=!0},p:O,i(r){s||(d(t.$$.fragment,r),d(e.$$.fragment,r),s=!0)},o(r){p(t.$$.fragment,r),p(e.$$.fragment,r),s=!1},d(r){V(t),r&&$(l),V(e,r)}}}class kt extends R{constructor(t){super(),T(this,t,null,Gt,U,{})}}export{kt as default};
//# sourceMappingURL=index.svelte-7b507041.js.map
