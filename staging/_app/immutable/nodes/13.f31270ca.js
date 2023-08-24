import{S as ue,i as fe,s as de,d as v,Y as ie,Z as Pe,v as ge,aJ as oe,aK as se,aL as re,a_ as $e,aQ as me,x as P,a6 as L,a8 as j,y as E,z as S,a9 as z,ab as D,q as m,C as B,ac as O,l as b,ad as V,ae as _,p,m as Q,t as w,n as T,aj as I,P as N,aw as ce,L as Y,N as Z,O as H,a$ as U,b0 as pe,bi as Ee}from"../chunks/vendor.29fd6bc5.js";import{t as le}from"../chunks/graphql.cb6ec208.js";import{G as he}from"../chunks/GuideCard.a4a61275.js";import{P as W}from"../chunks/PageControls.8530f683.js";import{a as K}from"../chunks/user.9e2e6bde.js";import{F as we}from"../chunks/FicsitCard.637d3e20.js";import{M as Ge}from"../chunks/MetaDescriptors.fb1d9f7c.js";const R="src/lib/components/guides/GuideGrid.svelte";function ae(r,e,n){const o=r.slice();return o[13]=e[n],o}function Se(r,e,n){const o=r.slice();return o[10]=e[n],o}function X(r){let e,n;e=new me({props:{variant:"outlined",href:$e+"/new-guide",$$slots:{default:[ve]},$$scope:{ctx:r}},$$inline:!0});const o={c:function(){j(e.$$.fragment)},l:function(t){D(e.$$.fragment,t)},m:function(t,c){_(e,t,c),n=!0},p:function(t,c){const s={};c&65664&&(s.$$scope={dirty:c,ctx:t}),e.$set(s)},i:function(t){n||(p(e.$$.fragment,t),n=!0)},o:function(t){w(e.$$.fragment,t),n=!1},d:function(t){I(e,t)}};return v("SvelteRegisterBlock",{block:o,id:X.name,type:"if",source:"(31:2) {#if newGuide && $user !== null}",ctx:r}),o}function ve(r){let e=r[7]("guides.new")+"",n;const o={c:function(){n=Y(e)},l:function(t){n=Z(t,e)},m:function(t,c){b(t,n,c)},p:function(t,c){c&128&&e!==(e=t[7]("guides.new")+"")&&H(n,e)},d:function(t){t&&m(n)}};return v("SvelteRegisterBlock",{block:o,id:ve.name,type:"slot",source:'(32:4) <Button variant=\\"outlined\\" href=\\"{base}/new-guide\\">',ctx:r}),o}function ye(r){let e,n,o,i=r[2].data.getGuides.guides;U(i);let t=[];for(let l=0;l<i.length;l+=1)t[l]=ee(ae(r,i,l));const c=l=>w(t[l],1,1,()=>{t[l]=null}),s={c:function(){e=P("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l:function(a){e=E(a,"DIV",{class:!0});var u=S(e);for(let g=0;g<t.length;g+=1)t[g].l(u);u.forEach(m),this.h()},h:function(){O(e,"class",n="grid "+r[4]+" gap-4"),B(e,R,48,2,1550)},m:function(a,u){b(a,e,u);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(e,null);o=!0},p:function(a,u){if(u&4){i=a[2].data.getGuides.guides,U(i);let g;for(g=0;g<i.length;g+=1){const y=ae(a,i,g);t[g]?(t[g].p(y,u),p(t[g],1)):(t[g]=ee(y),t[g].c(),p(t[g],1),t[g].m(e,null))}for(Q(),g=i.length;g<t.length;g+=1)c(g);T()}(!o||u&16&&n!==(n="grid "+a[4]+" gap-4"))&&O(e,"class",n)},i:function(a){if(!o){for(let u=0;u<i.length;u+=1)p(t[u]);o=!0}},o:function(a){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)w(t[u]);o=!1},d:function(a){a&&m(e),pe(t,a)}};return v("SvelteRegisterBlock",{block:s,id:ye.name,type:"else",source:"(48:0) {:else}",ctx:r}),s}function be(r){let e,n=r[7]("error.oh-no")+"",o,i,t=r[2].error.message+"",c;const s={c:function(){e=P("p"),o=Y(n),i=L(),c=Y(t),this.h()},l:function(a){e=E(a,"P",{});var u=S(e);o=Z(u,n),i=z(u),c=Z(u,t),u.forEach(m),this.h()},h:function(){B(e,R,46,2,1489)},m:function(a,u){b(a,e,u),V(e,o),V(e,i),V(e,c)},p:function(a,u){u&128&&n!==(n=a[7]("error.oh-no")+"")&&H(o,n),u&4&&t!==(t=a[2].error.message+"")&&H(c,t)},i:N,o:N,d:function(a){a&&m(e)}};return v("SvelteRegisterBlock",{block:s,id:be.name,type:"if",source:"(46:24) ",ctx:r}),s}function xe(r){let e,n,o,i=Array(C);U(i);let t=[];for(let s=0;s<i.length;s+=1)t[s]=ke(Se(r,i,s));const c={c:function(){e=P("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l:function(l){e=E(l,"DIV",{class:!0});var a=S(e);for(let u=0;u<t.length;u+=1)t[u].l(a);a.forEach(m),this.h()},h:function(){O(e,"class",n="grid "+r[4]+" gap-4"),B(e,R,40,2,1344)},m:function(l,a){b(l,e,a);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);o=!0},p:function(l,a){(!o||a&16&&n!==(n="grid "+l[4]+" gap-4"))&&O(e,"class",n)},i:function(l){if(!o){for(let a=0;a<i.length;a+=1)p(t[a]);o=!0}},o:function(l){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)w(t[a]);o=!1},d:function(l){l&&m(e),pe(t,l)}};return v("SvelteRegisterBlock",{block:c,id:xe.name,type:"if",source:"(40:0) {#if $guides.fetching}",ctx:r}),c}function ee(r){let e,n;e=new he({props:{guide:r[13],logo:r[13].user.avatar},$$inline:!0});const o={c:function(){j(e.$$.fragment)},l:function(t){D(e.$$.fragment,t)},m:function(t,c){_(e,t,c),n=!0},p:function(t,c){const s={};c&4&&(s.guide=t[13]),c&4&&(s.logo=t[13].user.avatar),e.$set(s)},i:function(t){n||(p(e.$$.fragment,t),n=!0)},o:function(t){w(e.$$.fragment,t),n=!1},d:function(t){I(e,t)}};return v("SvelteRegisterBlock",{block:o,id:ee.name,type:"each",source:"(50:4) {#each $guides.data.getGuides.guides as guide}",ctx:r}),o}function ke(r){let e,n;e=new we({props:{fake:!0},$$inline:!0});const o={c:function(){j(e.$$.fragment)},l:function(t){D(e.$$.fragment,t)},m:function(t,c){_(e,t,c),n=!0},p:N,i:function(t){n||(p(e.$$.fragment,t),n=!0)},o:function(t){w(e.$$.fragment,t),n=!1},d:function(t){I(e,t)}};return v("SvelteRegisterBlock",{block:o,id:ke.name,type:"each",source:"(42:4) {#each Array(perPage) as _}",ctx:r}),o}function te(r){let e,n,o,i,t,c,s,l,a,u,g,y,$=r[0]&&r[6]!==null&&X(r);i=new W({props:{totalPages:Math.ceil(r[3]/C),currentPage:J},$$inline:!0});const x=[xe,be,ye],G=[];function q(h,d){return h[2].fetching?0:h[2].error?1:2}c=q(r),s=G[c]=x[c](r),g=new W({props:{totalPages:Math.ceil(r[3]/C),currentPage:J},$$inline:!0});const k={c:function(){e=P("div"),$&&$.c(),n=L(),o=P("div"),j(i.$$.fragment),t=L(),s.c(),l=L(),a=P("div"),u=P("div"),j(g.$$.fragment),this.h()},l:function(d){e=E(d,"DIV",{class:!0});var f=S(e);$&&$.l(f),n=z(f),o=E(f,"DIV",{});var A=S(o);D(i.$$.fragment,A),A.forEach(m),f.forEach(m),t=z(d),s.l(d),l=z(d),a=E(d,"DIV",{class:!0});var M=S(a);u=E(M,"DIV",{});var F=S(u);D(g.$$.fragment,F),F.forEach(m),M.forEach(m),this.h()},h:function(){B(o,R,34,2,1210),O(e,"class","mb-5 ml-auto flex justify-between"),B(e,R,29,0,1033),B(u,R,56,2,1767),O(a,"class","mt-5 ml-auto flex justify-end"),B(a,R,55,0,1721)},m:function(d,f){b(d,e,f),$&&$.m(e,null),V(e,n),V(e,o),_(i,o,null),b(d,t,f),G[c].m(d,f),b(d,l,f),b(d,a,f),V(a,u),_(g,u,null),y=!0},p:function(d,[f]){d[0]&&d[6]!==null?$?($.p(d,f),f&65&&p($,1)):($=X(d),$.c(),p($,1),$.m(e,n)):$&&(Q(),w($,1,1,()=>{$=null}),T());const A={};f&8&&(A.totalPages=Math.ceil(d[3]/C)),i.$set(A);let M=c;c=q(d),c===M?G[c].p(d,f):(Q(),w(G[M],1,1,()=>{G[M]=null}),T(),s=G[c],s?s.p(d,f):(s=G[c]=x[c](d),s.c()),p(s,1),s.m(l.parentNode,l));const F={};f&8&&(F.totalPages=Math.ceil(d[3]/C)),g.$set(F)},i:function(d){y||(p($),p(i.$$.fragment,d),p(s),p(g.$$.fragment,d),y=!0)},o:function(d){w($),w(i.$$.fragment,d),w(s),w(g.$$.fragment,d),y=!1},d:function(d){d&&m(e),$&&$.d(),I(i),d&&m(t),G[c].d(d),d&&m(l),d&&m(a),I(g)}};return v("SvelteRegisterBlock",{block:k,id:te.name,type:"component",source:"",ctx:r}),k}const C=40,J=1;function Be(r,e,n){let o,i,t,c=N,s=()=>(c(),c=ce(o,f=>n(2,t=f)),o),l,a,u=N,g=()=>(u(),u=ce(k,f=>n(7,a=f)),k);ie(K,"user"),Pe(r,K,f=>n(6,l=f)),r.$$.on_destroy.push(()=>c()),r.$$.on_destroy.push(()=>u());let{$$slots:y={},$$scope:$}=e;ge("GuideGrid",y,[]);let{colCount:x=4}=e,{newGuide:G=!1}=e;const q=oe(),{t:k}=se();ie(k,"t"),g();let h;const d=["colCount","newGuide"];return Object.keys(e).forEach(f=>{!~d.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<GuideGrid> was created with unknown prop '${f}'`)}),r.$$set=f=>{"colCount"in f&&n(8,x=f.colCount),"newGuide"in f&&n(0,G=f.newGuide)},r.$capture_state=()=>({queryStore:re,getContextClient:oe,GetGuidesDocument:le,GuideCard:he,PageControls:W,base:$e,Button:me,user:K,FicsitCard:we,getTranslate:se,colCount:x,newGuide:G,client:q,perPage:C,page:J,t:k,totalGuides:h,gridClasses:i,guides:o,$guides:t,$user:l,$t:a}),r.$inject_state=f=>{"colCount"in f&&n(8,x=f.colCount),"newGuide"in f&&n(0,G=f.newGuide),"totalGuides"in f&&n(3,h=f.totalGuides),"gridClasses"in f&&n(4,i=f.gridClasses),"guides"in f&&s(n(5,o=f.guides))},e&&"$$inject"in e&&r.$inject_state(e.$$inject),r.$$.update=()=>{r.$$.dirty&4&&n(3,h=t?.data?.getGuides?.count||0),r.$$.dirty&256&&n(4,i=x==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1")},s(n(5,o=re({query:le,client:q,variables:{offset:(J-1)*C,limit:C}}))),[G,k,t,h,i,o,l,a,x]}class Ce extends ue{constructor(e){super(e),fe(this,e,Be,te,de,{colCount:8,newGuide:0,t:1}),v("SvelteRegisterComponent",{component:this,tagName:"GuideGrid",options:e,id:te.name})}get colCount(){throw new Error("<GuideGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set colCount(e){throw new Error("<GuideGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get newGuide(){throw new Error("<GuideGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set newGuide(e){throw new Error("<GuideGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<GuideGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function ne(r){let e,n,o,i;e=new Ge({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"},$$inline:!0}),o=new Ce({props:{newGuide:!0,colCount:4},$$inline:!0});const t={c:function(){j(e.$$.fragment),n=L(),j(o.$$.fragment)},l:function(s){const l=Ee("svelte-gby4d8",document.head);D(e.$$.fragment,l),l.forEach(m),n=z(s),D(o.$$.fragment,s)},m:function(s,l){_(e,document.head,null),b(s,n,l),_(o,s,l),i=!0},p:N,i:function(s){i||(p(e.$$.fragment,s),p(o.$$.fragment,s),i=!0)},o:function(s){w(e.$$.fragment,s),w(o.$$.fragment,s),i=!1},d:function(s){I(e),s&&m(n),I(o,s)}};return v("SvelteRegisterBlock",{block:t,id:ne.name,type:"component",source:"",ctx:r}),t}function Re(r,e,n){let{$$slots:o={},$$scope:i}=e;ge("Page",o,[]);const t=[];return Object.keys(e).forEach(c=>{!~t.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Page> was created with unknown prop '${c}'`)}),r.$capture_state=()=>({GuideGrid:Ce,MetaDescriptors:Ge}),[]}class Ne extends ue{constructor(e){super(e),fe(this,e,Re,ne,de,{}),v("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ne.name})}}export{Ne as component};
//# sourceMappingURL=13.f31270ca.js.map
