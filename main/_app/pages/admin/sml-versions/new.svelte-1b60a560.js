import{S as s,i as r,s as a,I as n,J as t,k as o,e,t as c,j as m,Z as i,d as f,n as u,c as $,a as h,g as p,m as d,b as l,f as g,Q as k,o as j,K as v,x as S,u as b,v as x,P as w,h as M}from"../../../chunks/vendor-9ef56761.js";import{o as V}from"../../../chunks/graphql-7c12eb8b.js";import{T as y}from"../../../chunks/Toast-70852bff.js";import{g as E}from"../../../chunks/navigation-51f4a605.js";import{S as L}from"../../../chunks/SMLVersionForm-c0820ca9.js";import{b as N}from"../../../chunks/paths-6758d194.js";import"../../../chunks/singletons-12a22614.js";import"../../../chunks/forms-8d025218.js";import"../../../chunks/markdown-f46c64ca.js";function q(s){let r,a;return{c(){r=e("span"),a=c(s[1])},l(n){r=$(n,"SPAN",{});var t=h(r);a=p(t,s[1]),t.forEach(f)},m(s,n){g(s,r,n),k(r,a)},p(s,r){2&r&&M(a,s[1])},d(s){s&&f(r)}}}function A(s){let r,a,w,M,V,E,N,A,P;function T(r){s[3](r)}V=new L({props:{onSubmit:s[2]}});let F={$$slots:{default:[q]},$$scope:{ctx:s}};return void 0!==s[0]&&(F.running=s[0]),N=new y({props:F}),n.push((()=>t(N,"running",T))),{c(){r=o(),a=e("h1"),w=c("New SML Version"),M=o(),m(V.$$.fragment),E=o(),m(N.$$.fragment),this.h()},l(s){i('[data-svelte="svelte-k9sf05"]',document.head).forEach(f),r=u(s),a=$(s,"H1",{class:!0});var n=h(a);w=p(n,"New SML Version"),n.forEach(f),M=u(s),d(V.$$.fragment,s),E=u(s),d(N.$$.fragment,s),this.h()},h(){document.title="Admin: New SML Version - SMR",l(a,"class","text-4xl my-4 font-bold")},m(s,n){g(s,r,n),g(s,a,n),k(a,w),g(s,M,n),j(V,s,n),g(s,E,n),j(N,s,n),P=!0},p(s,[r]){const a={};34&r&&(a.$$scope={dirty:r,ctx:s}),!A&&1&r&&(A=!0,a.running=s[0],v((()=>A=!1))),N.$set(a)},i(s){P||(S(V.$$.fragment,s),S(N.$$.fragment,s),P=!0)},o(s){b(V.$$.fragment,s),b(N.$$.fragment,s),P=!1},d(s){s&&f(r),s&&f(a),s&&f(M),x(V,s),s&&f(E),x(N,s)}}}function P(s,r,a){let n="",t=!1;const o=w({query:V});return s.$$.update=()=>{1&s.$$.dirty&&(t||a(1,n=""))},[t,n,s=>{o({smlVersion:s}).then((s=>{s.error?(console.error(s.error.message),a(1,n="Error creating mod: "+s.error.message),a(0,t=!0)):E(N+"/admin/sml-versions")}))},function(s){t=s,a(0,t)}]}class T extends s{constructor(s){super(),r(this,s,P,A,a,{})}}export{T as default};
//# sourceMappingURL=new.svelte-1b60a560.js.map