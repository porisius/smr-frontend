import{S as B,i as L,s as q,Z as d,_ as p,$ as g,m as $,t as m,a1 as h,aR as T,e as E,aa as D,a as F,c as _,d as I,ab as S,f as n,g as M,a7 as j,j as w,a5 as V,ac as O,k as z,l as G,b1 as H}from"./vendor-22698a15.js";import{b as R}from"./paths-1c47712a.js";import{F as J}from"./FicsitCard-fe347dff.js";import{i as K}from"./launcher-c348dc95.js";import{a as P}from"./formatting-9fd7b49b.js";import{C as Q,O as U}from"./CompatibilityButton-23eab7b7.js";import{T as W}from"./TagList-45681d2c.js";function X(r){let e;return{c(){e=D("visibility")},l(s){e=S(s,"visibility")},m(s,t){w(s,e,t)},d(s){s&&n(e)}}}function Y(r){let e;return{c(){e=D("download")},l(s){e=S(s,"download")},m(s,t){w(s,e,t)},d(s){s&&n(e)}}}function tt(r){let e,s,t,a=P(r[0].views)+"",i,f,y,c,k=P(r[0].downloads)+"",N,A,u,b;return t=new T({props:{class:"material-icons align-middle text-sm mr-1",$$slots:{default:[X]},$$scope:{ctx:r}}}),c=new T({props:{class:"material-icons align-middle text-sm mr-1",$$slots:{default:[Y]},$$scope:{ctx:r}}}),u=new Q({props:{compatibility:r[0].compatibility}}),{c(){e=E("div"),s=E("span"),d(t.$$.fragment),i=D(a),f=F(),y=E("span"),d(c.$$.fragment),N=D(k),A=F(),d(u.$$.fragment),this.h()},l(o){e=_(o,"DIV",{slot:!0});var l=I(e);s=_(l,"SPAN",{});var v=I(s);p(t.$$.fragment,v),i=S(v,a),v.forEach(n),f=M(l),y=_(l,"SPAN",{});var x=I(y);p(c.$$.fragment,x),N=S(x,k),x.forEach(n),A=M(l),p(u.$$.fragment,l),l.forEach(n),this.h()},h(){j(e,"slot","stats")},m(o,l){w(o,e,l),V(e,s),g(t,s,null),V(s,i),V(e,f),V(e,y),g(c,y,null),V(y,N),V(e,A),g(u,e,null),b=!0},p(o,l){const v={};l&8&&(v.$$scope={dirty:l,ctx:o}),t.$set(v),(!b||l&1)&&a!==(a=P(o[0].views)+"")&&O(i,a);const x={};l&8&&(x.$$scope={dirty:l,ctx:o}),c.$set(x),(!b||l&1)&&k!==(k=P(o[0].downloads)+"")&&O(N,k);const C={};l&1&&(C.compatibility=o[0].compatibility),u.$set(C)},i(o){b||($(t.$$.fragment,o),$(c.$$.fragment,o),$(u.$$.fragment,o),b=!0)},o(o){m(t.$$.fragment,o),m(c.$$.fragment,o),m(u.$$.fragment,o),b=!1},d(o){o&&n(e),h(t),h(c),h(u)}}}function et(r){let e,s,t;return s=new W({props:{tags:r[0].tags}}),{c(){e=E("div"),d(s.$$.fragment),this.h()},l(a){e=_(a,"DIV",{slot:!0});var i=I(e);p(s.$$.fragment,i),i.forEach(n),this.h()},h(){j(e,"slot","tags")},m(a,i){w(a,e,i),g(s,e,null),t=!0},p(a,i){const f={};i&1&&(f.tags=a[0].tags),s.$set(f)},i(a){t||($(s.$$.fragment,a),t=!0)},o(a){m(s.$$.fragment,a),t=!1},d(a){a&&n(e),h(s)}}}function Z(r){let e,s;return e=new H({props:{class:"material-icons",title:"Install",$$slots:{default:[at]},$$scope:{ctx:r}}}),e.$on("click",r[2]),{c(){d(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){g(e,t,a),s=!0},p(t,a){const i={};a&8&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function at(r){let e;return{c(){e=D("download")},l(s){e=S(s,"download")},m(s,t){w(s,e,t)},d(s){s&&n(e)}}}function st(r){let e,s,t=r[1]&&Z(r);return{c(){e=E("div"),t&&t.c(),this.h()},l(a){e=_(a,"DIV",{slot:!0});var i=I(e);t&&t.l(i),i.forEach(n),this.h()},h(){j(e,"slot","actions")},m(a,i){w(a,e,i),t&&t.m(e,null),s=!0},p(a,i){a[1]?t?(t.p(a,i),i&2&&$(t,1)):(t=Z(a),t.c(),$(t,1),t.m(e,null)):t&&(z(),m(t,1,1,()=>{t=null}),G())},i(a){s||($(t),s=!0)},o(a){m(t),s=!1},d(a){a&&n(e),t&&t.d()}}}function it(r){let e,s,t;return s=new U({props:{compatibility:r[0].compatibility}}),{c(){e=E("div"),d(s.$$.fragment),this.h()},l(a){e=_(a,"DIV",{slot:!0});var i=I(e);p(s.$$.fragment,i),i.forEach(n),this.h()},h(){j(e,"slot","outer")},m(a,i){w(a,e,i),g(s,e,null),t=!0},p(a,i){const f={};i&1&&(f.compatibility=a[0].compatibility),s.$set(f)},i(a){t||($(s.$$.fragment,a),t=!0)},o(a){m(s.$$.fragment,a),t=!1},d(a){a&&n(e),h(s)}}}function rt(r){let e,s;return e=new J({props:{name:r[0].name,link:R+"/mod/"+r[0].mod_reference,logo:r[0].logo,description:r[0].short_description,$$slots:{outer:[it],actions:[st],tags:[et],stats:[tt]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){g(e,t,a),s=!0},p(t,[a]){const i={};a&1&&(i.name=t[0].name),a&1&&(i.link=R+"/mod/"+t[0].mod_reference),a&1&&(i.logo=t[0].logo),a&1&&(i.description=t[0].short_description),a&11&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function ot(r,e,s){let t,{mod:a}=e;const i=()=>K(a.mod_reference);return r.$$set=f=>{"mod"in f&&s(0,a=f.mod)},r.$$.update=()=>{r.$$.dirty&1&&s(1,t="latestVersions"in a?a.latestVersions.alpha||a.latestVersions.beta||a.latestVersions.release:!1)},[a,t,i]}class dt extends B{constructor(e){super(),L(this,e,ot,rt,q,{mod:0})}}export{dt as M};
//# sourceMappingURL=ModCard-5ec95183.js.map
