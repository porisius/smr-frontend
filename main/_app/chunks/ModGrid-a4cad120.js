import{S as t,i as e,s,e as a,j as r,k as l,c as o,a as n,m as c,d as i,n as f,b as g,f as d,o as m,r as u,u as h,w as $,x as p,v,$ as x,Z as M,at as P,a0 as b,C as j,an as C,t as w,g as y,a1 as E,h as D,a7 as I}from"./vendor-83c23bd8.js";import{d as V}from"./graphql-71bf8d51.js";import{M as k}from"./ModCard-53ece89f.js";import{P as B}from"./PageControls-c6eadfa6.js";import{F}from"./FakeCard-dbfdd365.js";function O(t,e,s){const a=t.slice();return a[11]=e[s],a}function q(t,e,s){const a=t.slice();return a[8]=e[s],a}function A(t){let e,s,r,l=t[0].data.getMods.mods,c=[];for(let a=0;a<l.length;a+=1)c[a]=Z(O(t,l,a));const f=t=>h(c[t],1,1,(()=>{c[t]=null}));return{c(){e=a("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=o(t,"DIV",{class:!0});var s=n(e);for(let e=0;e<c.length;e+=1)c[e].l(s);s.forEach(i),this.h()},h(){g(e,"class",s="grid "+t[2]+" gap-4")},m(t,s){d(t,e,s);for(let a=0;a<c.length;a+=1)c[a].m(e,null);r=!0},p(t,a){if(1&a){let s;for(l=t[0].data.getMods.mods,s=0;s<l.length;s+=1){const r=O(t,l,s);c[s]?(c[s].p(r,a),p(c[s],1)):(c[s]=Z(r),c[s].c(),p(c[s],1),c[s].m(e,null))}for(u(),s=l.length;s<c.length;s+=1)f(s);$()}(!r||4&a&&s!==(s="grid "+t[2]+" gap-4"))&&g(e,"class",s)},i(t){if(!r){for(let t=0;t<l.length;t+=1)p(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)h(c[e]);r=!1},d(t){t&&i(e),C(c,t)}}}function N(t){let e,s,r,l=t[0].error.message+"";return{c(){e=a("p"),s=w("Oh no... "),r=w(l)},l(t){e=o(t,"P",{});var a=n(e);s=y(a,"Oh no... "),r=y(a,l),a.forEach(i)},m(t,a){d(t,e,a),E(e,s),E(e,r)},p(t,e){1&e&&l!==(l=t[0].error.message+"")&&D(r,l)},i:I,o:I,d(t){t&&i(e)}}}function S(t){let e,s,r,l=Array(H),c=[];for(let a=0;a<l.length;a+=1)c[a]=z(q(t,l,a));return{c(){e=a("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=o(t,"DIV",{class:!0});var s=n(e);for(let e=0;e<c.length;e+=1)c[e].l(s);s.forEach(i),this.h()},h(){g(e,"class",s="grid "+t[2]+" gap-4")},m(t,s){d(t,e,s);for(let a=0;a<c.length;a+=1)c[a].m(e,null);r=!0},p(t,a){(!r||4&a&&s!==(s="grid "+t[2]+" gap-4"))&&g(e,"class",s)},i(t){if(!r){for(let t=0;t<l.length;t+=1)p(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)h(c[e]);r=!1},d(t){t&&i(e),C(c,t)}}}function Z(t){let e,s;return e=new k({props:{mod:t[11]}}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){m(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.mod=t[11]),e.$set(a)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function z(t){let e,s;return e=new F({}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){m(e,t,a),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function G(t){let e,s,x,M,P,b,j,C,w;s=new B({props:{totalPages:Math.ceil(t[1]/H),currentPage:t[4]}});const y=[S,N,A],E=[];function D(t,e){return t[0].fetching?0:t[0].error?1:2}return M=D(t),P=E[M]=y[M](t),C=new B({props:{totalPages:Math.ceil(t[1]/H),currentPage:t[4]}}),{c(){e=a("div"),r(s.$$.fragment),x=l(),P.c(),b=l(),j=a("div"),r(C.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=n(e);c(s.$$.fragment,a),a.forEach(i),x=f(t),P.l(t),b=f(t),j=o(t,"DIV",{class:!0});var r=n(j);c(C.$$.fragment,r),r.forEach(i),this.h()},h(){g(e,"class","mb-5 ml-auto flex justify-end"),g(j,"class","mt-5 ml-auto flex justify-end")},m(t,a){d(t,e,a),m(s,e,null),d(t,x,a),E[M].m(t,a),d(t,b,a),d(t,j,a),m(C,j,null),w=!0},p(t,[e]){const a={};2&e&&(a.totalPages=Math.ceil(t[1]/H)),s.$set(a);let r=M;M=D(t),M===r?E[M].p(t,e):(u(),h(E[r],1,1,(()=>{E[r]=null})),$(),P=E[M],P?P.p(t,e):(P=E[M]=y[M](t),P.c()),p(P,1),P.m(b.parentNode,b));const l={};2&e&&(l.totalPages=Math.ceil(t[1]/H)),C.$set(l)},i(t){w||(p(s.$$.fragment,t),p(P),p(C.$$.fragment,t),w=!0)},o(t){h(s.$$.fragment,t),h(P),h(C.$$.fragment,t),w=!1},d(t){t&&i(e),v(s),t&&i(x),E[M].d(t),t&&i(b),t&&i(j),v(C)}}}const H=40;function J(t,e,s){let a,r;var l,o;let{colCount:n=4}=e;const c=x(V,{offset:0,limit:H});M(t,c,(t=>s(0,r=t)));const i=j(1);let f;return i.subscribe((t=>{P(c,r.variables.offset=(t-1)*H,r),r.reexecute()})),b(c),t.$$set=t=>{"colCount"in t&&s(5,n=t.colCount)},t.$$.update=()=>{193&t.$$.dirty&&s(1,f=(null===s(7,o=null===s(6,l=null==r?void 0:r.data)||void 0===l?void 0:l.getMods)||void 0===o?void 0:o.count)||0),32&t.$$.dirty&&s(2,a=4==n?"2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1")},[r,f,a,c,i,n,l,o]}class K extends t{constructor(t){super(),e(this,t,J,G,s,{colCount:5})}}export{K as M};
