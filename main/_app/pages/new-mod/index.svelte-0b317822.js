import{S as A,i as F,s as H,as as K,K as L,L as O,j as l,k as j,e as q,t as y,a1 as P,m as d,d as u,n as N,c as E,a as T,g as v,b as R,o as _,f as g,V as C,M as V,x as h,u as k,v as b,O as X,at as x,X as z,h as B}from"../../chunks/vendor-c631e359.js";import{f as G}from"../../chunks/graphql-5f517cf7.js";import{T as I}from"../../chunks/Toast-7fc7e7c7.js";import{g as J}from"../../chunks/navigation-51f4a605.js";import{M as Q}from"../../chunks/ModForm-5d422a5c.js";import{b as U}from"../../chunks/paths-6758d194.js";import{M as W}from"../../chunks/MetaDescriptors-1371ef7f.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/forms-8d025218.js";import"../../chunks/markdown-fd737277.js";import"../../chunks/stores-57c7b888.js";function Y(o){let e,n;return e=new Q({props:{onSubmit:o[2]}}),{c(){l(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){_(e,t,r),n=!0},p:z,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Z(o){let e,n;return e=new x({props:{$$slots:{default:[Y]},$$scope:{ctx:o}}}),{c(){l(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){_(e,t,r),n=!0},p(t,r){const i={};r&32&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function tt(o){let e,n;return{c(){e=q("span"),n=y(o[1])},l(t){e=E(t,"SPAN",{});var r=T(e);n=v(r,o[1]),r.forEach(u)},m(t,r){g(t,e,r),C(e,n)},p(t,r){r&2&&B(n,t[1])},d(t){t&&u(e)}}}function et(o){let e,n,t,r,i,m,p,f,c,M;e=new W({props:{description:"Adding a new mod in the Satisfactory Mod Repository",title:"New mod"}}),m=new K({props:{$$slots:{default:[Z]},$$scope:{ctx:o}}});function D(s){o[3](s)}let S={$$slots:{default:[tt]},$$scope:{ctx:o}};return o[0]!==void 0&&(S.running=o[0]),f=new I({props:S}),L.push(()=>O(f,"running",D)),{c(){l(e.$$.fragment),n=j(),t=q("h1"),r=y("New Mod"),i=j(),l(m.$$.fragment),p=j(),l(f.$$.fragment),this.h()},l(s){const a=P('[data-svelte="svelte-17bmqo"]',document.head);d(e.$$.fragment,a),a.forEach(u),n=N(s),t=E(s,"H1",{class:!0});var $=T(t);r=v($,"New Mod"),$.forEach(u),i=N(s),d(m.$$.fragment,s),p=N(s),d(f.$$.fragment,s),this.h()},h(){R(t,"class","text-4xl my-4 font-bold")},m(s,a){_(e,document.head,null),g(s,n,a),g(s,t,a),C(t,r),g(s,i,a),_(m,s,a),g(s,p,a),_(f,s,a),M=!0},p(s,[a]){const $={};a&32&&($.$$scope={dirty:a,ctx:s}),m.$set($);const w={};a&34&&(w.$$scope={dirty:a,ctx:s}),!c&&a&1&&(c=!0,w.running=s[0],V(()=>c=!1)),f.$set(w)},i(s){M||(h(e.$$.fragment,s),h(m.$$.fragment,s),h(f.$$.fragment,s),M=!0)},o(s){k(e.$$.fragment,s),k(m.$$.fragment,s),k(f.$$.fragment,s),M=!1},d(s){b(e),s&&u(n),s&&u(t),s&&u(i),b(m,s),s&&u(p),b(f,s)}}}function st(o,e,n){let t="",r=!1;const i=X({query:G}),m=f=>{i({mod:f}).then(c=>{c.error?(console.error(c.error.message),n(1,t="Error creating mod: "+c.error.message),n(0,r=!0)):J(U+"/mod/"+c.data.createMod.id)})};function p(f){r=f,n(0,r)}return o.$$.update=()=>{o.$$.dirty&1&&(r||n(1,t=""))},[r,t,m,p]}class lt extends A{constructor(e){super();F(this,e,st,et,H,{})}}export{lt as default};
//# sourceMappingURL=index.svelte-0b317822.js.map