import{S,i as k,s as E,K as m,L as u,N as d,v as g,w as p,Q as _,b3 as G,e as $,a8 as h,g as v,h as b,a9 as j,j as c,Y as I,l as w,Z as C,aa as q}from"./vendor-ec5ada1e.js";import{b as F,a as A}from"./paths-396f020f.js";import{F as D}from"./FicsitCard-35bfdea6.js";import{p as N}from"./formatting-24701f16.js";function K(i){let t;return{c(){t=h("visibility")},l(s){t=j(s,"visibility")},m(s,e){w(s,t,e)},d(s){s&&c(t)}}}function L(i){let t,s,e,a=N(i[0].views)+"",n,f;return e=new G({props:{class:"material-icons align-middle text-sm",$$slots:{default:[K]},$$scope:{ctx:i}}}),{c(){t=$("div"),s=$("span"),m(e.$$.fragment),n=h(a),this.h()},l(o){t=v(o,"DIV",{slot:!0});var r=b(t);s=v(r,"SPAN",{});var l=b(s);u(e.$$.fragment,l),n=j(l,a),l.forEach(c),r.forEach(c),this.h()},h(){I(t,"slot","stats")},m(o,r){w(o,t,r),C(t,s),d(e,s,null),C(s,n),f=!0},p(o,r){const l={};r&4&&(l.$$scope={dirty:r,ctx:o}),e.$set(l),(!f||r&1)&&a!==(a=N(o[0].views)+"")&&q(n,a)},i(o){f||(g(e.$$.fragment,o),f=!0)},o(o){p(e.$$.fragment,o),f=!1},d(o){o&&c(t),_(e)}}}function P(i){let t,s;return t=new D({props:{name:i[0].name,logo:i[1],description:i[0].short_description,link:F+`/guide/${i[0].id}`,$$slots:{stats:[L]},$$scope:{ctx:i}}}),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,a){d(t,e,a),s=!0},p(e,[a]){const n={};a&1&&(n.name=e[0].name),a&2&&(n.logo=e[1]),a&1&&(n.description=e[0].short_description),a&1&&(n.link=F+`/guide/${e[0].id}`),a&5&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){p(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Q(i,t,s){let{guide:e}=t,{logo:a=A+"/images/no_image.png"}=t;return i.$$set=n=>{"guide"in n&&s(0,e=n.guide),"logo"in n&&s(1,a=n.logo)},[e,a]}class B extends S{constructor(t){super();k(this,t,Q,P,E,{guide:0,logo:1})}}export{B as G};
//# sourceMappingURL=GuideCard-b15482f6.js.map