import{S as s,i as n,s as r,W as t,X as o,e,t as a,k as i,j as c,c as u,a as d,g as m,d as f,n as p,m as h,b as l,f as $,a1 as g,o as v,u as j,w as k,x as b,Y as x,v as I,$ as w,Z as y,_ as E,a0 as V,r as O,h as P,a7 as S}from"../../../../../chunks/vendor-83c23bd8.js";import{p as T}from"../../../../../chunks/routing-405c8d47.js";import{I as _,H as q}from"../../../../../chunks/graphql-71bf8d51.js";import{T as H}from"../../../../../chunks/Toast-11f90e22.js";import{g as L}from"../../../../../chunks/navigation-2ffed81e.js";import{V as N}from"../../../../../chunks/VersionForm-81182729.js";import{b as A}from"../../../../../chunks/paths-6758d194.js";import"../../../../../chunks/singletons-12a22614.js";import"../../../../../chunks/uplugin-3ba5ee19.js";import"../../../../../chunks/sha256-88abbcfe.js";import"../../../../../chunks/user-bb53616c.js";import"../../../../../chunks/forms-8d025218.js";import"../../../../../chunks/markdown-ac91d65c.js";function F(s){let n,r;return n=new N({props:{onSubmit:s[5],initialValues:s[3],editing:!0,submitText:"Save"}}),{c(){c(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,t){v(n,s,t),r=!0},p(s,r){const t={};8&r&&(t.initialValues=s[3]),n.$set(t)},i(s){r||(b(n.$$.fragment,s),r=!0)},o(s){j(n.$$.fragment,s),r=!1},d(s){I(n,s)}}}function W(s){let n,r,t,o=s[1].error.message+"";return{c(){n=e("p"),r=a("Oh no... "),t=a(o)},l(s){n=u(s,"P",{});var e=d(n);r=m(e,"Oh no... "),t=m(e,o),e.forEach(f)},m(s,o){$(s,n,o),g(n,r),g(n,t)},p(s,n){2&n&&o!==(o=s[1].error.message+"")&&P(t,o)},i:S,o:S,d(s){s&&f(n)}}}function X(s){let n,r;return{c(){n=e("p"),r=a("Loading...")},l(s){n=u(s,"P",{});var t=d(n);r=m(t,"Loading..."),t.forEach(f)},m(s,t){$(s,n,t),g(n,r)},p:S,i:S,o:S,d(s){s&&f(n)}}}function Y(s){let n,r;return{c(){n=e("span"),r=a(s[2])},l(t){n=u(t,"SPAN",{});var o=d(n);r=m(o,s[2]),o.forEach(f)},m(s,t){$(s,n,t),g(n,r)},p(s,n){4&n&&P(r,s[2])},d(s){s&&f(n)}}}function Z(s){let n,r,w,y,E,V,P,S,T;const _=[X,W,F],q=[];function L(s,n){return s[1].fetching?0:s[1].error?1:2}function N(n){s[8](n)}y=L(s),E=q[y]=_[y](s);let A={$$slots:{default:[Y]},$$scope:{ctx:s}};return void 0!==s[0]&&(A.running=s[0]),P=new H({props:A}),t.push((()=>o(P,"running",N))),{c(){n=e("h1"),r=a("Edit Version"),w=i(),E.c(),V=i(),c(P.$$.fragment),this.h()},l(s){n=u(s,"H1",{class:!0});var t=d(n);r=m(t,"Edit Version"),t.forEach(f),w=p(s),E.l(s),V=p(s),h(P.$$.fragment,s),this.h()},h(){l(n,"class","text-4xl my-4 font-bold")},m(s,t){$(s,n,t),g(n,r),$(s,w,t),q[y].m(s,t),$(s,V,t),v(P,s,t),T=!0},p(s,[n]){let r=y;y=L(s),y===r?q[y].p(s,n):(O(),j(q[r],1,1,(()=>{q[r]=null})),k(),E=q[y],E?E.p(s,n):(E=q[y]=_[y](s),E.c()),b(E,1),E.m(V.parentNode,V));const t={};2052&n&&(t.$$scope={dirty:n,ctx:s}),!S&&1&n&&(S=!0,t.running=s[0],x((()=>S=!1))),P.$set(t)},i(s){T||(b(E),b(P.$$.fragment,s),T=!0)},o(s){j(E),j(P.$$.fragment,s),T=!1},d(s){s&&f(n),s&&f(w),q[y].d(s),s&&f(V),I(P,s)}}}const z=T();function B(s,n,r){let t,o;var e=this&&this.__awaiter||function(s,n,r,t){return new(r||(r=Promise))((function(o,e){function a(s){try{c(t.next(s))}catch(n){e(n)}}function i(s){try{c(t.throw(s))}catch(n){e(n)}}function c(s){var n;s.done?o(s.value):(n=s.value,n instanceof r?n:new r((function(s){s(n)}))).then(a,i)}c((t=t.apply(s,n||[])).next())}))};let{modId:a}=n,{versionId:i}=n,c="",u=!1;const d=w(q,{version:i});y(s,d,(s=>r(1,o=s)));const m=E({query:_});return V(d),s.$$set=s=>{"modId"in s&&r(6,a=s.modId),"versionId"in s&&r(7,i=s.versionId)},s.$$.update=()=>{1&s.$$.dirty&&(u||r(2,c="")),2&s.$$.dirty&&r(3,t=o.data?Object.assign(Object.assign({},o.data.getVersion),{logo:void 0}):void 0)},[u,o,c,t,d,s=>e(void 0,void 0,void 0,(function*(){return m({versionId:i,version:s}).then((s=>{if(!s.error)return L(A+"/mod/"+a+"/version/"+i);console.error(s.error.message),r(2,c="Error editing version: "+s.error.message),r(0,u=!0)}))})),a,i,function(s){u=s,r(0,u)}]}class C extends s{constructor(s){super(),n(this,s,B,Z,r,{modId:6,versionId:7})}}export{C as default,z as load};
