import{S as se,i as le,s as ie,bh as fe,U as P,X as S,_,b as v,t as E,a5 as F,bf as U,bi as te,bF as ae,q as G,u as V,R as A,v as k,w as j,d,V as C,Y as h,aX as L,a as b,Z as w,$ as re,A as T,C as X,D as q,aP as ne,aG as ce,I as H,J,K as W,e as K,g as oe,c as ue,b4 as Y,L as $e,bb as me,aW as de}from"./vendor.d823cc42.js";const pe=f=>({}),Z=f=>({}),he=f=>({}),z=f=>({}),ge=f=>({}),B=f=>({}),xe=f=>({}),O=f=>({});function we(f){let e,l,s;return{c(){e=V("img"),this.h()},l(t){e=k(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Y(e.src,l=f[4])||h(e,"src",l),h(e,"alt",s=f[3]+" Logo"),h(e,"class","logo max-w-full max-h-full svelte-7yjm6v")},m(t,r){b(t,e,r)},p(t,r){r&16&&!Y(e.src,l=t[4])&&h(e,"src",l),r&8&&s!==(s=t[3]+" Logo")&&h(e,"alt",s)},d(t){t&&d(e)}}}function ve(f){let e;return{c(){e=V("div"),this.h()},l(l){e=k(l,"DIV",{class:!0}),j(e).forEach(d),this.h()},h(){h(e,"class","bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full svelte-7yjm6v")},m(l,s){b(l,e,s)},p:$e,d(l){l&&d(e)}}}function Q(f){let e,l;return{c(){e=V("span"),l=H("Card stats"),this.h()},l(s){e=k(s,"SPAN",{class:!0});var t=j(e);l=J(t,"Card stats"),t.forEach(d),this.h()},h(){h(e,"class","font-flow")},m(s,t){b(s,e,t),w(e,l)},d(s){s&&d(e)}}}function be(f){let e,l=f[1]&&Q();return{c(){l&&l.c(),e=K()},l(s){l&&l.l(s),e=K()},m(s,t){l&&l.m(s,t),b(s,e,t)},p(s,t){s[1]?l||(l=Q(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(s){l&&l.d(s),s&&d(e)}}}function ye(f){let e,l,s,t,r,n,u,p,$,x,m;const y=f[10].stats,g=G(y,f,f[12],O),o=g||be(f),N=f[10].tags,c=G(N,f,f[12],B);return{c(){e=V("div"),l=V("a"),s=V("span"),t=H(f[3]),r=A(),n=V("h5"),o&&o.c(),u=A(),c&&c.c(),p=A(),$=V("div"),x=H(f[2]),this.h()},l(i){e=k(i,"DIV",{class:!0});var a=j(e);l=k(a,"A",{href:!0,class:!0});var D=j(l);s=k(D,"SPAN",{class:!0});var I=j(s);t=J(I,f[3]),I.forEach(d),D.forEach(d),r=C(a),n=k(a,"H5",{class:!0});var M=j(n);o&&o.l(M),M.forEach(d),u=C(a),c&&c.l(a),a.forEach(d),p=C(i),$=k(i,"DIV",{class:!0});var R=j($);x=J(R,f[2]),R.forEach(d),this.h()},h(){h(s,"class","text-xl break-words"),h(l,"href",f[0]),h(l,"class","text-white"),h(n,"class","text-sm m-0"),h(e,"class","mb-2"),h($,"class","break-words"),L($,"font-flow",f[1])},m(i,a){b(i,e,a),w(e,l),w(l,s),w(s,t),w(e,r),w(e,n),o&&o.m(n,null),w(e,u),c&&c.m(e,null),b(i,p,a),b(i,$,a),w($,x),m=!0},p(i,a){(!m||a&8)&&W(t,i[3]),(!m||a&1)&&h(l,"href",i[0]),g?g.p&&(!m||a&4096)&&T(g,y,i,i[12],m?q(y,i[12],a,xe):X(i[12]),O):o&&o.p&&(!m||a&2)&&o.p(i,m?a:-1),c&&c.p&&(!m||a&4096)&&T(c,N,i,i[12],m?q(N,i[12],a,ge):X(i[12]),B),(!m||a&4)&&W(x,i[2]),(!m||a&2)&&L($,"font-flow",i[1])},i(i){m||(v(o,i),v(c,i),m=!0)},o(i){E(o,i),E(c,i),m=!1},d(i){i&&d(e),o&&o.d(i),c&&c.d(i),i&&d(p),i&&d($)}}}function ee(f){let e,l,s;e=new me({props:{href:f[0],"aria-label":"View "+f[3],title:"View "+f[3],$$slots:{default:[ke]},$$scope:{ctx:f}}});const t=f[10].actions,r=G(t,f,f[12],z);return{c(){P(e.$$.fragment),l=A(),r&&r.c()},l(n){S(e.$$.fragment,n),l=C(n),r&&r.l(n)},m(n,u){_(e,n,u),b(n,l,u),r&&r.m(n,u),s=!0},p(n,u){const p={};u&1&&(p.href=n[0]),u&8&&(p["aria-label"]="View "+n[3]),u&8&&(p.title="View "+n[3]),u&4096&&(p.$$scope={dirty:u,ctx:n}),e.$set(p),r&&r.p&&(!s||u&4096)&&T(r,t,n,n[12],s?q(t,n[12],u,he):X(n[12]),z)},i(n){s||(v(e.$$.fragment,n),v(r,n),s=!0)},o(n){E(e.$$.fragment,n),E(r,n),s=!1},d(n){F(e,n),n&&d(l),r&&r.d(n)}}}function Ve(f){let e;return{c(){e=H("info")},l(l){e=J(l,"info")},m(l,s){b(l,e,s)},d(l){l&&d(e)}}}function ke(f){let e,l;return e=new de({props:{class:"material-icons",$$slots:{default:[Ve]},$$scope:{ctx:f}}}),{c(){P(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){_(e,s,t),l=!0},p(s,t){const r={};t&4096&&(r.$$scope={dirty:t,ctx:s}),e.$set(r)},i(s){l||(v(e.$$.fragment,s),l=!0)},o(s){E(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function Ee(f){let e,l,s=!f[1]&&ee(f);return{c(){s&&s.c(),e=K()},l(t){s&&s.l(t),e=K()},m(t,r){s&&s.m(t,r),b(t,e,r),l=!0},p(t,r){t[1]?s&&(oe(),E(s,1,1,()=>{s=null}),ue()):s?(s.p(t,r),r&2&&v(s,1)):(s=ee(t),s.c(),v(s,1),s.m(e.parentNode,e))},i(t){l||(v(s),l=!0)},o(t){E(s),l=!1},d(t){s&&s.d(t),t&&d(e)}}}function Ie(f){let e,l,s,t,r,n,u,p,$,x,m;function y(i,a){return i[1]?ve:we}let g=y(f),o=g(f);r=new te({props:{class:"flex flex-col pb-0",$$slots:{default:[ye]},$$scope:{ctx:f}}}),u=new ae({props:{class:"self-end",$$slots:{default:[Ee]},$$scope:{ctx:f}}});const N=f[10].outer,c=G(N,f,f[12],Z);return{c(){e=V("div"),l=V("div"),o.c(),s=A(),t=V("div"),P(r.$$.fragment),n=A(),P(u.$$.fragment),p=A(),c&&c.c(),this.h()},l(i){e=k(i,"DIV",{class:!0});var a=j(e);l=k(a,"DIV",{class:!0});var D=j(l);o.l(D),D.forEach(d),s=C(a),t=k(a,"DIV",{class:!0});var I=j(t);S(r.$$.fragment,I),n=C(I),S(u.$$.fragment,I),I.forEach(d),a.forEach(d),p=C(i),c&&c.l(i),this.h()},h(){h(l,"class","cursor-pointer card-image-container"),h(t,"class","w-full flex flex-col justify-between"),h(e,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center svelte-7yjm6v"),L(e,"text-gray-500",f[1]),L(e,"font-flow",f[1])},m(i,a){b(i,e,a),w(e,l),o.m(l,null),w(e,s),w(e,t),_(r,t,null),w(t,n),_(u,t,null),b(i,p,a),c&&c.m(i,a),$=!0,x||(m=re(l,"click",f[11]),x=!0)},p(i,a){g===(g=y(i))&&o?o.p(i,a):(o.d(1),o=g(i),o&&(o.c(),o.m(l,null)));const D={};a&4111&&(D.$$scope={dirty:a,ctx:i}),r.$set(D);const I={};a&4107&&(I.$$scope={dirty:a,ctx:i}),u.$set(I),(!$||a&2)&&L(e,"text-gray-500",i[1]),(!$||a&2)&&L(e,"font-flow",i[1]),c&&c.p&&(!$||a&4096)&&T(c,N,i,i[12],$?q(N,i[12],a,pe):X(i[12]),Z)},i(i){$||(v(r.$$.fragment,i),v(u.$$.fragment,i),v(c,i),$=!0)},o(i){E(r.$$.fragment,i),E(u.$$.fragment,i),E(c,i),$=!1},d(i){i&&d(e),o.d(),F(r),F(u),i&&d(p),c&&c.d(i),x=!1,m()}}}function je(f){let e,l;return e=new fe({props:{class:"h-full overflow-hidden",$$slots:{default:[Ie]},$$scope:{ctx:f}}}),e.$on("mouseover",f[5]),e.$on("mouseout",f[6]),{c(){P(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){_(e,s,t),l=!0},p(s,[t]){const r={};t&4127&&(r.$$scope={dirty:t,ctx:s}),e.$set(r)},i(s){l||(v(e.$$.fragment,s),l=!0)},o(s){E(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function Ne(f,e,l){let s,t,r,{$$slots:n={},$$scope:u}=e,{name:p=""}=e,{logo:$=U+"/images/no_image.webp"}=e,{description:x=""}=e,{link:m="/"}=e,{fake:y=!1}=e,g=!1,o;const N=()=>{g||(o=setTimeout(()=>{g=!0,ne(m)},250))},c=()=>{g||clearTimeout(o)},i=()=>ce(m);return f.$$set=a=>{"name"in a&&l(7,p=a.name),"logo"in a&&l(8,$=a.logo),"description"in a&&l(9,x=a.description),"link"in a&&l(0,m=a.link),"fake"in a&&l(1,y=a.fake),"$$scope"in a&&l(12,u=a.$$scope)},f.$$.update=()=>{f.$$.dirty&256&&l(4,s=$||U+"/images/no_image.webp"),f.$$.dirty&130&&l(3,t=p||y&&"Card Name"),f.$$.dirty&514&&l(2,r=x||y&&"Short card description")},[m,y,r,t,s,N,c,p,$,x,n,i,u]}class Ae extends se{constructor(e){super(),le(this,e,Ne,je,ie,{name:7,logo:8,description:9,link:0,fake:1})}}export{Ae as F};
//# sourceMappingURL=FicsitCard.d14de5fa.js.map
