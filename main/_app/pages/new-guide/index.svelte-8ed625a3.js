import{S as v,i as F,s as x,ax as A,M as B,N as H,w as l,k as G,e as M,t as S,a2 as O,x as d,d as c,m as N,c as y,a as C,h as E,b as P,y as g,g as _,X as T,O as Q,q as h,o as b,B as k,Q as X,ay as Z,Z as z,j as I}from"../../chunks/vendor-e33e4cb0.js";import{N as J}from"../../chunks/graphql-5fa025e0.js";import{T as K}from"../../chunks/Toast-3124cf14.js";import{g as L}from"../../chunks/navigation-b10cf5bf.js";import{G as R}from"../../chunks/GuideForm-7d05b071.js";import{b as U}from"../../chunks/paths-396f020f.js";import{M as V}from"../../chunks/MetaDescriptors-8d6aef04.js";import"../../chunks/singletons-4a680913.js";import"../../chunks/forms-66263e93.js";import"../../chunks/markdown-1bf888a8.js";import"../../chunks/stores-f79cfefa.js";function W(a){let t,n;return t=new R({props:{onSubmit:a[2]}}),{c(){l(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){g(t,e,r),n=!0},p:z,i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Y(a){let t,n;return t=new Z({props:{$$slots:{default:[W]},$$scope:{ctx:a}}}),{c(){l(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){g(t,e,r),n=!0},p(e,r){const u={};r&32&&(u.$$scope={dirty:r,ctx:e}),t.$set(u)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ee(a){let t,n;return{c(){t=M("span"),n=S(a[1])},l(e){t=y(e,"SPAN",{});var r=C(t);n=E(r,a[1]),r.forEach(c)},m(e,r){_(e,t,r),T(t,n)},p(e,r){r&2&&I(n,e[1])},d(e){e&&c(t)}}}function te(a){let t,n,e,r,u,f,p,i,m,w;t=new V({props:{description:"Creating a new guide",title:"New guide"}}),f=new A({props:{$$slots:{default:[Y]},$$scope:{ctx:a}}});function D(s){a[3](s)}let q={$$slots:{default:[ee]},$$scope:{ctx:a}};return a[0]!==void 0&&(q.running=a[0]),i=new K({props:q}),B.push(()=>H(i,"running",D)),{c(){l(t.$$.fragment),n=G(),e=M("h1"),r=S("New Guide"),u=G(),l(f.$$.fragment),p=G(),l(i.$$.fragment),this.h()},l(s){const o=O('[data-svelte="svelte-u6ds2"]',document.head);d(t.$$.fragment,o),o.forEach(c),n=N(s),e=y(s,"H1",{class:!0});var $=C(e);r=E($,"New Guide"),$.forEach(c),u=N(s),d(f.$$.fragment,s),p=N(s),d(i.$$.fragment,s),this.h()},h(){P(e,"class","text-4xl my-4 font-bold")},m(s,o){g(t,document.head,null),_(s,n,o),_(s,e,o),T(e,r),_(s,u,o),g(f,s,o),_(s,p,o),g(i,s,o),w=!0},p(s,[o]){const $={};o&32&&($.$$scope={dirty:o,ctx:s}),f.$set($);const j={};o&34&&(j.$$scope={dirty:o,ctx:s}),!m&&o&1&&(m=!0,j.running=s[0],Q(()=>m=!1)),i.$set(j)},i(s){w||(h(t.$$.fragment,s),h(f.$$.fragment,s),h(i.$$.fragment,s),w=!0)},o(s){b(t.$$.fragment,s),b(f.$$.fragment,s),b(i.$$.fragment,s),w=!1},d(s){k(t),s&&c(n),s&&c(e),s&&c(u),k(f,s),s&&c(p),k(i,s)}}}function se(a,t,n){let e="",r=!1;const u=X({query:J}),f=i=>{u({guide:i}).then(m=>{m.error?(console.error(m.error.message),n(1,e="Error creating guide: "+m.error.message),n(0,r=!0)):L(U+"/guide/"+m.data.createGuide.id)})};function p(i){r=i,n(0,r)}return a.$$.update=()=>{a.$$.dirty&1&&(r||n(1,e=""))},[r,e,f,p]}class le extends v{constructor(t){super();F(this,t,se,te,x,{})}}export{le as default};
//# sourceMappingURL=index.svelte-8ed625a3.js.map