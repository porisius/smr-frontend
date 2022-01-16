import{S as q,i as B,s as K,w as S,x as j,y as A,q as v,o as V,B as O,am as C,e as m,t as g,k as T,c as _,a as $,h as b,d as c,m as U,b as h,g as p,X as u,j as N,n as P,p as W,ah as Y}from"./vendor-f8cbd986.js";import{b as R}from"./paths-396f020f.js";import{F as X}from"./FicsitCard-cd6c342d.js";import{i as z}from"./launcher-0fe4f087.js";import{m as F}from"./mod-3e2dcd02.js";function G(l){let e;return{c(){e=g("visibility")},l(s){e=b(s,"visibility")},m(s,t){p(s,e,t)},d(s){s&&c(e)}}}function H(l){let e;return{c(){e=g("download")},l(s){e=b(s,"download")},m(s,t){p(s,e,t)},d(s){s&&c(e)}}}function J(l){let e,s,t,o=l[0].views+"",n,a,i,r,I=l[0].downloads+"",D,w;return t=new C({props:{class:"material-icons align-middle text-sm",$$slots:{default:[G]},$$scope:{ctx:l}}}),r=new C({props:{class:"material-icons align-middle text-sm",$$slots:{default:[H]},$$scope:{ctx:l}}}),{c(){e=m("div"),s=m("span"),S(t.$$.fragment),n=g(o),a=T(),i=m("span"),S(r.$$.fragment),D=g(I),this.h()},l(f){e=_(f,"DIV",{slot:!0});var d=$(e);s=_(d,"SPAN",{});var k=$(s);j(t.$$.fragment,k),n=b(k,o),k.forEach(c),a=U(d),i=_(d,"SPAN",{});var E=$(i);j(r.$$.fragment,E),D=b(E,I),E.forEach(c),d.forEach(c),this.h()},h(){h(e,"slot","stats")},m(f,d){p(f,e,d),u(e,s),A(t,s,null),u(s,n),u(e,a),u(e,i),A(r,i,null),u(i,D),w=!0},p(f,d){const k={};d&8&&(k.$$scope={dirty:d,ctx:f}),t.$set(k),(!w||d&1)&&o!==(o=f[0].views+"")&&N(n,o);const E={};d&8&&(E.$$scope={dirty:d,ctx:f}),r.$set(E),(!w||d&1)&&I!==(I=f[0].downloads+"")&&N(D,I)},i(f){w||(v(t.$$.fragment,f),v(r.$$.fragment,f),w=!0)},o(f){V(t.$$.fragment,f),V(r.$$.fragment,f),w=!1},d(f){f&&c(e),O(t),O(r)}}}function M(l){let e,s;return e=new Y({props:{class:"material-icons",title:"Install",$$slots:{default:[L]},$$scope:{ctx:l}}}),e.$on("click",l[2]),{c(){S(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){A(e,t,o),s=!0},p(t,o){const n={};o&8&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){O(e,t)}}}function L(l){let e;return{c(){e=g("download")},l(s){e=b(s,"download")},m(s,t){p(s,e,t)},d(s){s&&c(e)}}}function Q(l){let e,s,t=l[1]&&M(l);return{c(){e=m("div"),t&&t.c(),this.h()},l(o){e=_(o,"DIV",{slot:!0});var n=$(e);t&&t.l(n),n.forEach(c),this.h()},h(){h(e,"slot","actions")},m(o,n){p(o,e,n),t&&t.m(e,null),s=!0},p(o,n){o[1]?t?(t.p(o,n),n&2&&v(t,1)):(t=M(o),t.c(),v(t,1),t.m(e,null)):t&&(P(),V(t,1,1,()=>{t=null}),W())},i(o){s||(v(t),s=!0)},o(o){V(t),s=!1},d(o){o&&c(e),t&&t.d()}}}function Z(l){let e,s,t,o,n;return{c(){e=m("div"),s=m("div"),t=T(),o=m("div"),n=g("OUTDATED"),this.h()},l(a){e=_(a,"DIV",{class:!0});var i=$(e);s=_(i,"DIV",{class:!0}),$(s).forEach(c),t=U(i),o=_(i,"DIV",{class:!0});var r=$(o);n=b(r,"OUTDATED"),r.forEach(c),i.forEach(c),this.h()},h(){h(s,"class","mod-inset"),h(o,"class","mod-stripe"),h(e,"class","mod-outdated")},m(a,i){p(a,e,i),u(e,s),u(e,t),u(e,o),u(o,n)},d(a){a&&c(e)}}}function y(l){let e,s,t,o,n;return{c(){e=m("div"),s=m("div"),t=T(),o=m("div"),n=g("USE AT YOUR OWN RISK"),this.h()},l(a){e=_(a,"DIV",{class:!0});var i=$(e);s=_(i,"DIV",{class:!0}),$(s).forEach(c),t=U(i),o=_(i,"DIV",{class:!0});var r=$(o);n=b(r,"USE AT YOUR OWN RISK"),r.forEach(c),i.forEach(c),this.h()},h(){h(s,"class","mod-inset"),h(o,"class","mod-stripe"),h(e,"class","mod-own-risk")},m(a,i){p(a,e,i),u(e,s),u(e,t),u(e,o),u(o,n)},d(a){a&&c(e)}}}function x(l){let e,s,t;function o(i,r){if(r&1&&(s=null),r&1&&(t=null),s==null&&(s=F(i[0].latestVersions)==="own-risk"),s)return y;if(t==null&&(t=F(i[0].latestVersions)==="outdated"),t)return Z}let n=o(l,-1),a=n&&n(l);return{c(){e=m("div"),a&&a.c(),this.h()},l(i){e=_(i,"DIV",{slot:!0});var r=$(e);a&&a.l(r),r.forEach(c),this.h()},h(){h(e,"slot","outer")},m(i,r){p(i,e,r),a&&a.m(e,null)},p(i,r){n!==(n=o(i,r))&&(a&&a.d(1),a=n&&n(i),a&&(a.c(),a.m(e,null)))},d(i){i&&c(e),a&&a.d()}}}function ee(l){let e,s;return e=new X({props:{name:l[0].name,link:R+"/mod/"+l[0].mod_reference,logo:l[0].logo,description:l[0].short_description,$$slots:{outer:[x],actions:[Q],stats:[J]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){A(e,t,o),s=!0},p(t,[o]){const n={};o&1&&(n.name=t[0].name),o&1&&(n.link=R+"/mod/"+t[0].mod_reference),o&1&&(n.logo=t[0].logo),o&1&&(n.description=t[0].short_description),o&11&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){O(e,t)}}}function te(l,e,s){let t,{mod:o}=e;const n=()=>z(o.mod_reference);return l.$$set=a=>{"mod"in a&&s(0,o=a.mod)},l.$$.update=()=>{l.$$.dirty&1&&s(1,t="latestVersions"in o?o.latestVersions.alpha||o.latestVersions.beta||o.latestVersions.release:!1)},[o,t,n]}class le extends q{constructor(e){super();B(this,e,te,ee,K,{mod:0})}}export{le as M};
//# sourceMappingURL=ModCard-f911e6a8.js.map