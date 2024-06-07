import{S as ke,i as xe,d as q,s as ye,v as Ge,F as te,_ as ie,aj as ne,G as oe,$ as V,H as z,a0 as we,f as ae,b as F,e as y,W as H,K as Ee,j as m,k as A,g as G,h as j,M as K,X as L,N,m as w,Q as b,n as O,Z as Se,r as C,t as T,q as se,u as R,x as Pe,J as de,L as fe,O as ge,R as me,p as re,Y as _e}from"../chunks/vendor.b9mNqEEe.js";import{n as ce,o as ue}from"../chunks/graphql.NT0BIh3j.js";import{G as pe}from"../chunks/GuideForm.KE3_W0Zu.js";import{M as he}from"../chunks/MetaDescriptors.xNKcKwn7.js";const Be=async({params:n})=>({...n}),Re=Object.freeze(Object.defineProperty({__proto__:null,load:Be},Symbol.toStringTag,{value:"Module"})),{console:le}=we,E="src/routes/guide/[guideId]/edit/+page.svelte";function J(n){let e,a;e=new he({props:{description:"Editing guide '"+n[1].data.getGuide.short_description+"'",title:"Edit guide '"+n[1].data.getGuide.name+"'"},$$inline:!0});const o={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,c){ge(e,t,c),a=!0},p:function(t,c){const u={};c&2&&(u.description="Editing guide '"+t[1].data.getGuide.short_description+"'"),c&2&&(u.title="Edit guide '"+t[1].data.getGuide.name+"'"),e.$set(u)},i:function(t){a||(C(e.$$.fragment,t),a=!0)},o:function(t){T(e.$$.fragment,t),a=!1},d:function(t){me(e,t)}};return q("SvelteRegisterBlock",{block:o,id:J.name,type:"if",source:"(62:2) {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}",ctx:n}),o}function $e(n){let e,a;e=new pe({props:{onSubmit:n[2],initialValues:n[1].data.getGuide,submitText:"Save",submitIcon:"save"},$$inline:!0});const o={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,c){ge(e,t,c),a=!0},p:function(t,c){const u={};c&2&&(u.initialValues=t[1].data.getGuide),e.$set(u)},i:function(t){a||(C(e.$$.fragment,t),a=!0)},o:function(t){T(e.$$.fragment,t),a=!1},d:function(t){me(e,t)}};return q("SvelteRegisterBlock",{block:o,id:$e.name,type:"else",source:"(84:4) {:else}",ctx:n}),o}function ve(n){let e,a,o=n[1].error.message+"",i;const t={c:function(){e=y("p"),a=H("Oh no... "),i=H(o),this.h()},l:function(u){e=G(u,"P",{});var d=j(e);a=L(d,"Oh no... "),i=L(d,o),d.forEach(m),this.h()},h:function(){w(e,E,93,6,2536)},m:function(u,d){O(u,e,d),b(e,a),b(e,i)},p:function(u,d){d&2&&o!==(o=u[1].error.message+"")&&_e(i,o)},i:R,o:R,d:function(u){u&&m(e)}};return q("SvelteRegisterBlock",{block:t,id:ve.name,type:"if",source:"(82:27) ",ctx:n}),t}function be(n){let e,a="Loading...";const o={c:function(){e=y("p"),e.textContent=a,this.h()},l:function(t){e=G(t,"P",{"data-svelte-h":!0}),K(e)!=="svelte-qdsr2u"&&(e.textContent=a),this.h()},h:function(){w(e,E,91,6,2484)},m:function(t,c){O(t,e,c)},p:R,i:R,o:R,d:function(t){t&&m(e)}};return q("SvelteRegisterBlock",{block:o,id:be.name,type:"if",source:"(80:4) {#if $guide.fetching}",ctx:n}),o}function Q(n){let e,a,o,i,t="Edit Guide",c,u,d,k,x="arrow_back",B,S,h,$,f,g,I,D,l,s=!n[1].fetching&&!n[1].error&&n[1].data.getGuide&&J(n);const U=[be,ve,$e],P=[];function W(v,r){return v[1].fetching?0:v[1].error?1:2}f=W(n),g=P[f]=U[f](n);const X={c:function(){s&&s.c(),e=ae(),a=F(),o=y("div"),i=y("h1"),i.textContent=t,c=F(),u=y("div"),d=y("button"),k=y("span"),k.textContent=x,B=H(`
      Back to Guide`),S=F(),h=y("div"),$=y("section"),g.c(),this.h()},l:function(r){const p=Ee("svelte-2z35li",document.head);s&&s.l(p),e=ae(),p.forEach(m),a=A(r),o=G(r,"DIV",{class:!0});var _=j(o);i=G(_,"H1",{class:!0,"data-svelte-h":!0}),K(i)!=="svelte-1alq187"&&(i.textContent=t),c=A(_),u=G(_,"DIV",{});var Y=j(u);d=G(Y,"BUTTON",{class:!0});var M=j(d);k=G(M,"SPAN",{class:!0,"data-svelte-h":!0}),K(k)!=="svelte-qua3zr"&&(k.textContent=x),B=L(M,`
      Back to Guide`),M.forEach(m),Y.forEach(m),_.forEach(m),S=A(r),h=G(r,"DIV",{class:!0});var Z=j(h);$=G(Z,"SECTION",{});var ee=j($);g.l(ee),ee.forEach(m),Z.forEach(m),this.h()},h:function(){N(i,"class","my-4 text-4xl font-bold"),w(i,E,80,2,2159),N(k,"class","material-icons pr-2"),w(k,E,83,6,2319),N(d,"class","variant-ghost-primary btn"),w(d,E,82,4,2223),w(u,E,81,2,2213),N(o,"class","flex h-auto flex-wrap items-center justify-between"),w(o,E,79,0,2092),w($,E,89,2,2442),N(h,"class","card p-4"),w(h,E,88,0,2417)},m:function(r,p){s&&s.m(document.head,null),b(document.head,e),O(r,a,p),O(r,o,p),b(o,i),b(o,c),b(o,u),b(u,d),b(d,k),b(d,B),O(r,S,p),O(r,h,p),b(h,$),P[f].m($,null),I=!0,D||(l=Se(d,"click",n[7],!1,!1,!1,!1),D=!0)},p:function(r,[p]){!r[1].fetching&&!r[1].error&&r[1].data.getGuide?s?(s.p(r,p),p&2&&C(s,1)):(s=J(r),s.c(),C(s,1),s.m(e.parentNode,e)):s&&(re(),T(s,1,1,()=>{s=null}),se());let _=f;f=W(r),f===_?P[f].p(r,p):(re(),T(P[_],1,1,()=>{P[_]=null}),se(),g=P[f],g?g.p(r,p):(g=P[f]=U[f](r),g.c()),C(g,1),g.m($,null))},i:function(r){I||(C(s),C(g),I=!0)},o:function(r){T(s),T(g),I=!1},d:function(r){r&&(m(a),m(o),m(S),m(h)),s&&s.d(r),m(e),P[f].d(),D=!1,l()}};return q("SvelteRegisterBlock",{block:X,id:Q.name,type:"component",source:"",ctx:n}),X}function Ce(n,e,a){let o,i,t,c=R,u=()=>(c(),c=Pe(i,l=>a(1,t=l)),i);n.$$.on_destroy.push(()=>c());let{$$slots:d={},$$scope:k}=e;Ge("Page",d,[]);let{data:x}=e;const B=te(),S=ie(),h=l=>{B.mutation(ce,{guideId:o,guide:l}).toPromise().then(s=>{s.error?(console.error(s.error.message),S.trigger({message:"Error editing guide: "+s.error.message,background:"variant-filled-error",autohide:!1})):(S.trigger({message:"Guide updated",background:"variant-filled-success",timeout:5e3}),V(z+"/guide/"+s.data.updateGuide.id))})},$=()=>{V(z+"/guide/"+o)},f={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:l=>{l&&$()}},g=ne();n.$$.on_mount.push(function(){x===void 0&&!("data"in e||n.$$.bound[n.$$.props.data])&&le.warn("<Page> was created without expected prop 'data'")});const I=["data"];Object.keys(e).forEach(l=>{!~I.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&le.warn(`<Page> was created with unknown prop '${l}'`)});const D=()=>g.trigger(f);return n.$$set=l=>{"data"in l&&a(5,x=l.data)},n.$capture_state=()=>({getContextClient:te,queryStore:oe,EditGuideDocument:ce,GetGuideDocument:ue,goto:V,GuideForm:pe,base:z,MetaDescriptors:he,getModalStore:ne,getToastStore:ie,data:x,client:B,toastStore:S,onSubmit:h,goBackFn:$,backModal:f,modalStore:g,guideId:o,guide:i,$guide:t}),n.$inject_state=l=>{"data"in l&&a(5,x=l.data),"guideId"in l&&a(6,o=l.guideId),"guide"in l&&u(a(0,i=l.guide))},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&32&&a(6,{guideId:o}=x,o),n.$$.dirty&64&&u(a(0,i=oe({query:ue,client:B,variables:{guide:o}})))},[i,t,h,f,g,x,o,D]}class qe extends ke{constructor(e){super(e),xe(this,e,Ce,Q,ye,{data:5}),q("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Q.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{qe as component,Re as universal};
//# sourceMappingURL=13.aSizTu9m.js.map
