import{S as X,i as Y,d as S,s as Z,bo as _,r as tt,T as et,v as nt,aJ as R,aN as B,a_ as E,bp as O,ao as ot,a8 as w,a6 as T,x as D,L as F,bi as st,ab as b,q as m,a9 as j,y as q,z,N as A,ac as rt,C as H,ae as v,l as x,ad as J,ai as it,p as y,t as k,aj as C,P as at,O as ct}from"../chunks/vendor.29fd6bc5.js";import{Q as M}from"../chunks/graphql.cb6ec208.js";import{T as L}from"../chunks/Toast.93f8a988.js";import{G as Q}from"../chunks/GuideForm.23df62f7.js";import{M as K}from"../chunks/MetaDescriptors.fb1d9f7c.js";const{console:ft}=ot,I="src/routes/new-guide/+page.svelte";function U(r){let t,s;t=new Q({props:{onSubmit:r[2]},$$inline:!0});const a={c:function(){w(t.$$.fragment)},l:function(e){b(t.$$.fragment,e)},m:function(e,o){v(t,e,o),s=!0},p:at,i:function(e){s||(y(t.$$.fragment,e),s=!0)},o:function(e){k(t.$$.fragment,e),s=!1},d:function(e){C(t,e)}};return S("SvelteRegisterBlock",{block:a,id:U.name,type:"slot",source:"(42:2) <Content>",ctx:r}),a}function V(r){let t,s;t=new O({props:{$$slots:{default:[U]},$$scope:{ctx:r}},$$inline:!0});const a={c:function(){w(t.$$.fragment)},l:function(e){b(t.$$.fragment,e)},m:function(e,o){v(t,e,o),s=!0},p:function(e,o){const $={};o&32&&($.$$scope={dirty:o,ctx:e}),t.$set($)},i:function(e){s||(y(t.$$.fragment,e),s=!0)},o:function(e){k(t.$$.fragment,e),s=!1},d:function(e){C(t,e)}};return S("SvelteRegisterBlock",{block:a,id:V.name,type:"slot",source:"(41:0) <Card>",ctx:r}),a}function W(r){let t,s;const a={c:function(){t=D("span"),s=F(r[1]),this.h()},l:function(e){t=q(e,"SPAN",{});var o=z(t);s=A(o,r[1]),o.forEach(m),this.h()},h:function(){H(t,I,47,2,1322)},m:function(e,o){x(e,t,o),J(t,s)},p:function(e,o){o&2&&ct(s,e[1])},d:function(e){e&&m(t)}};return S("SvelteRegisterBlock",{block:a,id:W.name,type:"slot",source:"(47:0) <Toast bind:running={errorToast}>",ctx:r}),a}function G(r){let t,s,a,i,e,o,$,u,d,p;t=new K({props:{description:"Creating a new guide",title:"New guide"},$$inline:!0}),o=new _({props:{$$slots:{default:[V]},$$scope:{ctx:r}},$$inline:!0});function c(l){r[3](l)}let g={$$slots:{default:[W]},$$scope:{ctx:r}};r[0]!==void 0&&(g.running=r[0]),u=new L({props:g,$$inline:!0}),tt.push(()=>et(u,"running",c));const P={c:function(){w(t.$$.fragment),s=T(),a=D("h1"),i=F("New Guide"),e=T(),w(o.$$.fragment),$=T(),w(u.$$.fragment),this.h()},l:function(n){const f=st("svelte-u6ds2",document.head);b(t.$$.fragment,f),f.forEach(m),s=j(n),a=q(n,"H1",{class:!0});var h=z(a);i=A(h,"New Guide"),h.forEach(m),e=j(n),b(o.$$.fragment,n),$=j(n),b(u.$$.fragment,n),this.h()},h:function(){rt(a,"class","text-4xl my-4 font-bold"),H(a,I,38,0,1164)},m:function(n,f){v(t,document.head,null),x(n,s,f),x(n,a,f),J(a,i),x(n,e,f),v(o,n,f),x(n,$,f),v(u,n,f),p=!0},p:function(n,[f]){const h={};f&32&&(h.$$scope={dirty:f,ctx:n}),o.$set(h);const N={};f&34&&(N.$$scope={dirty:f,ctx:n}),!d&&f&1&&(d=!0,N.running=n[0],it(()=>d=!1)),u.$set(N)},i:function(n){p||(y(t.$$.fragment,n),y(o.$$.fragment,n),y(u.$$.fragment,n),p=!0)},o:function(n){k(t.$$.fragment,n),k(o.$$.fragment,n),k(u.$$.fragment,n),p=!1},d:function(n){C(t),n&&m(s),n&&m(a),n&&m(e),C(o,n),n&&m($),C(u,n)}};return S("SvelteRegisterBlock",{block:P,id:G.name,type:"component",source:"",ctx:r}),P}function ut(r,t,s){let{$$slots:a={},$$scope:i}=t;nt("Page",a,[]);let e="",o=!1;const $=R(),u=c=>{$.mutation(M,{guide:c}).toPromise().then(g=>{g.error?(console.error(g.error.message),s(1,e="Error creating guide: "+g.error.message),s(0,o=!0)):B(E+"/guide/"+g.data.createGuide.id)})},d=[];Object.keys(t).forEach(c=>{!~d.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&ft.warn(`<Page> was created with unknown prop '${c}'`)});function p(c){o=c,s(0,o)}return r.$capture_state=()=>({getContextClient:R,NewGuideDocument:M,Toast:L,goto:B,GuideForm:Q,base:E,MetaDescriptors:K,Card:_,Content:O,errorMessage:e,errorToast:o,client:$,onSubmit:u}),r.$inject_state=c=>{"errorMessage"in c&&s(1,e=c.errorMessage),"errorToast"in c&&s(0,o=c.errorToast)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),r.$$.update=()=>{r.$$.dirty&1&&(o||s(1,e=""))},[o,e,u,p]}class dt extends X{constructor(t){super(t),Y(this,t,ut,G,Z,{}),S("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:G.name})}}export{dt as component};
//# sourceMappingURL=22.05dc75b0.js.map
