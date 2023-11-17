import{S as De,i as Fe,s as Te,d as D,P as de,y as Oe,I as Se,a1 as ae,aj as ce,a2 as Ge,v as je,F as xe,ak as Ne,G as _e,H as Le,$ as be,aw as ot,U as J,e as N,b as z,J as K,g as _,h as W,k as U,L as Q,j as v,N as M,m as b,n as T,Q as O,O as Y,T as Ee,p as Pe,t as V,q as ye,r as I,R as Z,u as ee,x as ke,ao as Ae,W as te,X as oe,Y as ne,M as st,am as Ce,a5 as X,an as le,Z as fe,V as Me,a6 as rt,az as nt,K as it}from"../chunks/vendor.86b49dff.js";import{O as We,M as re,y as Be}from"../chunks/graphql.80ff4abf.js";import{M as qe}from"../chunks/ModCard.9734fb1a.js";import{u as ue}from"../chunks/user.52eb556d.js";import{F as ze}from"../chunks/FicsitCard.fdfea907.js";import{M as Ue}from"../chunks/MetaDescriptors.6fb401e6.js";const E="src/lib/components/mods/ModGrid.svelte";function Ie(s,e,t){const r=s.slice();return r[33]=e[t],r}function Re(s,e,t){const r=s.slice();return r[30]=e[t],r}function Ve(s,e,t){const r=s.slice();return r[36]=e[t],r}function he(s){let e,t=s[8]("mods.new")+"",r;const u={c:function(){e=N("a"),r=te(t),this.h()},l:function(c){e=_(c,"A",{class:!0,href:!0});var n=W(e);r=oe(n,t),n.forEach(v),this.h()},h:function(){M(e,"class","btn variant-ghost-primary s-GP4mW4OhiNeA"),M(e,"href",Le+"/new-mod"),b(e,E,95,4,2914)},m:function(c,n){T(c,e,n),O(e,r)},p:function(c,n){n[0]&256&&t!==(t=c[8]("mods.new")+"")&&ne(r,t)},d:function(c){c&&v(e)}};return D("SvelteRegisterBlock",{block:u,id:he.name,type:"if",source:"(78:2) {#if newMod && $user !== null}",ctx:s}),u}function me(s){let e,t,r,u,o,c,n,i=s[8]("ascending")+"",h,d,a=s[8]("descending")+"",S,x,C,k,G,$,L="arrow_forward",F,q,w=J(s[11]),P=[];for(let y=0;y<w.length;y+=1)P[y]=ge(Ve(s,w,y));const A={c:function(){e=N("div"),t=N("div"),r=N("select");for(let p=0;p<P.length;p+=1)P[p].c();u=z(),o=N("div"),c=N("select"),n=N("option"),h=te(i),d=N("option"),S=te(a),x=z(),C=N("div"),k=N("input"),G=z(),$=N("button"),$.textContent=L,this.h()},l:function(p){e=_(p,"DIV",{class:!0});var m=W(e);t=_(m,"DIV",{class:!0});var l=W(t);r=_(l,"SELECT",{class:!0});var g=W(r);for(let se=0;se<P.length;se+=1)P[se].l(g);g.forEach(v),l.forEach(v),u=U(m),o=_(m,"DIV",{class:!0});var B=W(o);c=_(B,"SELECT",{class:!0});var R=W(c);n=_(R,"OPTION",{class:!0});var j=W(n);h=oe(j,i),j.forEach(v),d=_(R,"OPTION",{class:!0});var ie=W(d);S=oe(ie,a),ie.forEach(v),R.forEach(v),B.forEach(v),x=U(m),C=_(m,"DIV",{class:!0});var H=W(C);k=_(H,"INPUT",{class:!0,name:!0,placeholder:!0}),G=U(H),$=_(H,"BUTTON",{class:!0,"data-svelte-h":!0}),st($)!=="svelte-gs2gjz"&&($.textContent=L),H.forEach(v),m.forEach(v),this.h()},h:function(){M(r,"class","select s-GP4mW4OhiNeA"),s[4]===void 0&&Ce(()=>s[19].call(r)),b(r,E,101,8,3122),M(t,"class","mr-3 s-GP4mW4OhiNeA"),b(t,E,100,6,3095),n.__value="asc",X(n,n.__value),M(n,"class","s-GP4mW4OhiNeA"),b(n,E,109,10,3413),d.__value="desc",X(d,d.__value),M(d,"class","s-GP4mW4OhiNeA"),b(d,E,110,10,3470),M(c,"class","select s-GP4mW4OhiNeA"),s[3]===void 0&&Ce(()=>s[20].call(c)),b(c,E,108,8,3360),M(o,"class","mr-3 s-GP4mW4OhiNeA"),b(o,E,107,6,3333),M(k,"class","bg-transparent border-0 ring-0 p-1.5 s-GP4mW4OhiNeA"),M(k,"name","search"),M(k,"placeholder","Search"),b(k,E,115,8,3662),M($,"class","variant-filled-primary material-icons s-GP4mW4OhiNeA"),b($,E,120,8,3825),M(C,"class","input-group input-group-divider grid-cols-[1fr_auto] rounded-container-token w-fit s-GP4mW4OhiNeA"),b(C,E,114,6,3557),M(e,"class","search-container flex flex-wrap flex-row sm:px-4 s-GP4mW4OhiNeA"),b(e,E,99,4,3026)},m:function(p,m){T(p,e,m),O(e,t),O(t,r);for(let l=0;l<P.length;l+=1)P[l]&&P[l].m(r,null);le(r,s[4],!0),O(e,u),O(e,o),O(o,c),O(c,n),O(n,h),O(c,d),O(d,S),le(c,s[3],!0),O(e,x),O(e,C),O(C,k),X(k,s[7]),O(C,G),O(C,$),F||(q=[fe(r,"change",s[19]),fe(c,"change",s[20]),fe(k,"input",s[21])],F=!0)},p:function(p,m){if(m[0]&2048){w=J(p[11]);let l;for(l=0;l<w.length;l+=1){const g=Ve(p,w,l);P[l]?P[l].p(g,m):(P[l]=ge(g),P[l].c(),P[l].m(r,null))}for(;l<P.length;l+=1)P[l].d(1);P.length=w.length}m[0]&2064&&le(r,p[4]),m[0]&256&&i!==(i=p[8]("ascending")+"")&&ne(h,i),m[0]&256&&a!==(a=p[8]("descending")+"")&&ne(S,a),m[0]&8&&le(c,p[3]),m[0]&128&&k.value!==p[7]&&X(k,p[7])},d:function(p){p&&v(e),Me(P,p),F=!1,rt(q)}};return D("SvelteRegisterBlock",{block:A,id:me.name,type:"if",source:"(82:2) {#if showSearch}",ctx:s}),A}function ge(s){let e,t=s[36][0]+"",r,u;const o={c:function(){e=N("option"),r=te(t),this.h()},l:function(n){e=_(n,"OPTION",{class:!0});var i=W(e);r=oe(i,t),i.forEach(v),this.h()},h:function(){e.__value=u=s[36][1],X(e,e.__value),M(e,"class","s-GP4mW4OhiNeA"),b(e,E,103,12,3223)},m:function(n,i){T(n,e,i),O(e,r)},p:function(n,i){i[0]&2048&&t!==(t=n[36][0]+"")&&ne(r,t),i[0]&2048&&u!==(u=n[36][1])&&(nt(e,"__value",u),X(e,e.__value))},d:function(n){n&&v(e)}};return D("SvelteRegisterBlock",{block:o,id:ge.name,type:"each",source:"(86:10) {#each orderFields as orderField}",ctx:s}),o}function He(s){let e,t,r,u=J(s[9].data.getMods.mods),o=[];for(let i=0;i<u.length;i+=1)o[i]=pe(Ie(s,u,i));const c=i=>V(o[i],1,1,()=>{o[i]=null}),n={c:function(){e=N("div");for(let h=0;h<o.length;h+=1)o[h].c();this.h()},l:function(h){e=_(h,"DIV",{class:!0});var d=W(e);for(let a=0;a<o.length;a+=1)o[a].l(d);d.forEach(v),this.h()},h:function(){M(e,"class",t="grid "+s[12]+" gap-4 s-GP4mW4OhiNeA"),b(e,E,153,2,4904)},m:function(h,d){T(h,e,d);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null);r=!0},p:function(h,d){if(d[0]&512){u=J(h[9].data.getMods.mods);let a;for(a=0;a<u.length;a+=1){const S=Ie(h,u,a);o[a]?(o[a].p(S,d),I(o[a],1)):(o[a]=pe(S),o[a].c(),I(o[a],1),o[a].m(e,null))}for(Pe(),a=u.length;a<o.length;a+=1)c(a);ye()}(!r||d[0]&4096&&t!==(t="grid "+h[12]+" gap-4 s-GP4mW4OhiNeA"))&&M(e,"class",t)},i:function(h){if(!r){for(let d=0;d<u.length;d+=1)I(o[d]);r=!0}},o:function(h){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)V(o[d]);r=!1},d:function(h){h&&v(e),Me(o,h)}};return D("SvelteRegisterBlock",{block:n,id:He.name,type:"else",source:"(136:0) {:else}",ctx:s}),n}function Xe(s){let e,t,r=s[9].error.message+"",u;const o={c:function(){e=N("p"),t=te("Oh no... "),u=te(r),this.h()},l:function(n){e=_(n,"P",{class:!0});var i=W(e);t=oe(i,"Oh no... "),u=oe(i,r),i.forEach(v),this.h()},h:function(){M(e,"class","s-GP4mW4OhiNeA"),b(e,E,151,2,4856)},m:function(n,i){T(n,e,i),O(e,t),O(e,u)},p:function(n,i){i[0]&512&&r!==(r=n[9].error.message+"")&&ne(u,r)},i:ee,o:ee,d:function(n){n&&v(e)}};return D("SvelteRegisterBlock",{block:o,id:Xe.name,type:"if",source:"(134:22) ",ctx:s}),o}function Je(s){let e,t,r,u=J(Array(s[5])),o=[];for(let i=0;i<u.length;i+=1)o[i]=$e(Re(s,u,i));const c=i=>V(o[i],1,1,()=>{o[i]=null}),n={c:function(){e=N("div");for(let h=0;h<o.length;h+=1)o[h].c();this.h()},l:function(h){e=_(h,"DIV",{class:!0});var d=W(e);for(let a=0;a<o.length;a+=1)o[a].l(d);d.forEach(v),this.h()},h:function(){M(e,"class",t="grid "+s[12]+" gap-4 s-GP4mW4OhiNeA"),b(e,E,145,2,4713)},m:function(h,d){T(h,e,d);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null);r=!0},p:function(h,d){if(d[0]&32){u=J(Array(h[5]));let a;for(a=0;a<u.length;a+=1){const S=Re(h,u,a);o[a]?(o[a].p(S,d),I(o[a],1)):(o[a]=$e(S),o[a].c(),I(o[a],1),o[a].m(e,null))}for(Pe(),a=u.length;a<o.length;a+=1)c(a);ye()}(!r||d[0]&4096&&t!==(t="grid "+h[12]+" gap-4 s-GP4mW4OhiNeA"))&&M(e,"class",t)},i:function(h){if(!r){for(let d=0;d<u.length;d+=1)I(o[d]);r=!0}},o:function(h){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)V(o[d]);r=!1},d:function(h){h&&v(e),Me(o,h)}};return D("SvelteRegisterBlock",{block:n,id:Je.name,type:"if",source:"(128:0) {#if $mods.fetching}",ctx:s}),n}function pe(s){let e,t;e=new qe({props:{mod:s[33]},$$inline:!0});const r={c:function(){K(e.$$.fragment)},l:function(o){Q(e.$$.fragment,o)},m:function(o,c){Y(e,o,c),t=!0},p:function(o,c){const n={};c[0]&512&&(n.mod=o[33]),e.$set(n)},i:function(o){t||(I(e.$$.fragment,o),t=!0)},o:function(o){V(e.$$.fragment,o),t=!1},d:function(o){Z(e,o)}};return D("SvelteRegisterBlock",{block:r,id:pe.name,type:"each",source:"(138:4) {#each $mods.data.getMods.mods as mod}",ctx:s}),r}function $e(s){let e,t;e=new ze({props:{fake:!0},$$inline:!0});const r={c:function(){K(e.$$.fragment)},l:function(o){Q(e.$$.fragment,o)},m:function(o,c){Y(e,o,c),t=!0},p:ee,i:function(o){t||(I(e.$$.fragment,o),t=!0)},o:function(o){V(e.$$.fragment,o),t=!1},d:function(o){Z(e,o)}};return D("SvelteRegisterBlock",{block:r,id:$e.name,type:"each",source:"(130:4) {#each Array(perPage) as _}",ctx:s}),r}function we(s){let e,t,r,u,o,c,n,i,h,d,a,S,x,C,k,G=s[0]&&s[14]!==null&&he(s),$=s[1]&&me(s);function L(m){s[22](m)}let F={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};s[10]!==void 0&&(F.settings=s[10]),o=new de({props:F,$$inline:!0}),Oe.push(()=>Se(o,"settings",L)),o.$on("page",s[23]),o.$on("amount",s[24]);const q=[Je,Xe,He],w=[];function P(m,l){return m[9].fetching?0:m[9].error?1:2}i=P(s),h=w[i]=q[i](s);function A(m){s[25](m)}let y={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};s[10]!==void 0&&(y.settings=s[10]),x=new de({props:y,$$inline:!0}),Oe.push(()=>Se(x,"settings",A)),x.$on("page",s[26]),x.$on("amount",s[27]);const p={c:function(){e=N("div"),G&&G.c(),t=z(),$&&$.c(),r=z(),u=N("div"),K(o.$$.fragment),n=z(),h.c(),d=z(),a=N("div"),S=N("div"),K(x.$$.fragment),this.h()},l:function(l){e=_(l,"DIV",{class:!0});var g=W(e);G&&G.l(g),t=U(g),$&&$.l(g),r=U(g),u=_(g,"DIV",{class:!0});var B=W(u);Q(o.$$.fragment,B),B.forEach(v),g.forEach(v),n=U(l),h.l(l),d=U(l),a=_(l,"DIV",{class:!0});var R=W(a);S=_(R,"DIV",{class:!0});var j=W(S);Q(x.$$.fragment,j),j.forEach(v),R.forEach(v),this.h()},h:function(){M(u,"class","s-GP4mW4OhiNeA"),b(u,E,133,2,4404),M(e,"class","ml-auto flex flex-wrap justify-between items-center mb-5 s-GP4mW4OhiNeA"),b(e,E,93,0,2806),M(S,"class","s-GP4mW4OhiNeA"),b(S,E,161,2,5084),M(a,"class","mt-5 ml-auto flex justify-end s-GP4mW4OhiNeA"),b(a,E,160,0,5038)},m:function(l,g){T(l,e,g),G&&G.m(e,null),O(e,t),$&&$.m(e,null),O(e,r),O(e,u),Y(o,u,null),T(l,n,g),w[i].m(l,g),T(l,d,g),T(l,a,g),O(a,S),Y(x,S,null),k=!0},p:function(l,g){l[0]&&l[14]!==null?G?G.p(l,g):(G=he(l),G.c(),G.m(e,t)):G&&(G.d(1),G=null),l[1]?$?$.p(l,g):($=me(l),$.c(),$.m(e,r)):$&&($.d(1),$=null);const B={};!c&&g[0]&1024&&(c=!0,B.settings=l[10],Ee(()=>c=!1)),o.$set(B);let R=i;i=P(l),i===R?w[i].p(l,g):(Pe(),V(w[R],1,1,()=>{w[R]=null}),ye(),h=w[i],h?h.p(l,g):(h=w[i]=q[i](l),h.c()),I(h,1),h.m(d.parentNode,d));const j={};!C&&g[0]&1024&&(C=!0,j.settings=l[10],Ee(()=>C=!1)),x.$set(j)},i:function(l){k||(I(o.$$.fragment,l),I(h),I(x.$$.fragment,l),k=!0)},o:function(l){V(o.$$.fragment,l),V(h),V(x.$$.fragment,l),k=!1},d:function(l){l&&(v(e),v(n),v(d),v(a)),G&&G.d(),$&&$.d(),Z(o),w[i].d(l),Z(x)}};return D("SvelteRegisterBlock",{block:p,id:we.name,type:"component",source:"",ctx:s}),p}function lt(s,e,t){let r,u,o,c,n,i=ee,h=()=>(i(),i=ke(B,f=>t(8,n=f)),B),d,a=ee,S=()=>(a(),a=ke(r,f=>t(9,d=f)),r),x,C;ae(ce,"storePage"),Ge(s,ce,f=>t(28,x=f)),ae(ue,"user"),Ge(s,ue,f=>t(14,C=f)),s.$$.on_destroy.push(()=>i()),s.$$.on_destroy.push(()=>a());let{$$slots:k={},$$scope:G}=e;je("ModGrid",k,[]);let{colCount:$=4}=e,{newMod:L=!1}=e,{showSearch:F=!1}=e;const q=xe();let w=x.url.searchParams.get("q")||"",P=We.Desc,A=re.LastVersionDate,y=32,p=parseInt(x.url.searchParams.get("p")||"0",10)||0,m,l=w,g;const{t:B}=Ne();ae(B,"t"),h();const R=["colCount","newMod","showSearch"];Object.keys(e).forEach(f=>{!~R.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<ModGrid> was created with unknown prop '${f}'`)});function j(){A=Ae(this),t(4,A),t(18,g),t(7,l),t(16,w),t(11,o),t(8,n),t(16,w),t(18,g),t(7,l),t(4,A)}function ie(){P=Ae(this),t(3,P)}function H(){l=this.value,t(7,l)}function se(f){c=f,t(10,c),t(6,p),t(5,y),t(17,m),t(18,g),t(7,l),t(16,w),t(4,A),t(9,d)}const Qe=f=>t(6,p=f.detail),Ye=f=>t(5,y=f.detail);function Ze(f){c=f,t(10,c),t(6,p),t(5,y),t(17,m),t(18,g),t(7,l),t(16,w),t(4,A),t(9,d)}const et=f=>t(6,p=f.detail),tt=f=>t(5,y=f.detail);return s.$$set=f=>{"colCount"in f&&t(15,$=f.colCount),"newMod"in f&&t(0,L=f.newMod),"showSearch"in f&&t(1,F=f.showSearch)},s.$capture_state=()=>({queryStore:_e,getContextClient:xe,GetModsDocument:Be,ModFields:re,Order:We,ModCard:qe,base:Le,goto:be,storePage:ce,user:ue,FicsitCard:ze,browser:ot,getTranslate:Ne,Paginator:de,colCount:$,newMod:L,showSearch:F,client:q,search:w,order:P,orderBy:A,perPage:y,page:p,totalMods:m,searchField:l,timer:g,t:B,paginationSettings:c,orderFields:o,gridClasses:u,mods:r,$t:n,$mods:d,$storePage:x,$user:C}),s.$inject_state=f=>{"colCount"in f&&t(15,$=f.colCount),"newMod"in f&&t(0,L=f.newMod),"showSearch"in f&&t(1,F=f.showSearch),"search"in f&&t(16,w=f.search),"order"in f&&t(3,P=f.order),"orderBy"in f&&t(4,A=f.orderBy),"perPage"in f&&t(5,y=f.perPage),"page"in f&&t(6,p=f.page),"totalMods"in f&&t(17,m=f.totalMods),"searchField"in f&&t(7,l=f.searchField),"timer"in f&&t(18,g=f.timer),"paginationSettings"in f&&t(10,c=f.paginationSettings),"orderFields"in f&&t(11,o=f.orderFields),"gridClasses"in f&&t(12,u=f.gridClasses),"mods"in f&&S(t(13,r=f.mods))},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{if(s.$$.dirty[0]&327824&&(clearTimeout(g),t(18,g=setTimeout(()=>{l&&l.length>2?((w===""||w===null)&&l!==""&&l!==null&&(t(4,A=re.Search),t(6,p=1)),t(16,w=l)):(l===""||l===null)&&((A===re.Search||!A)&&t(4,A=re.LastVersionDate),t(16,w=null))},250))),s.$$.dirty[0]&65656&&S(t(13,r=_e({query:Be,client:q,variables:{offset:p*y,limit:y,search:w,order:P,orderBy:A}}))),s.$$.dirty[0]&192){const f=new URL(window.location.origin+window.location.pathname);f.searchParams.append("p",p.toString()),l!==""&&l!==null&&f.searchParams.append("q",l),be(f.toString(),{keepFocus:!0})}s.$$.dirty[0]&512&&t(17,m=d?.data?.getMods?.count||0),s.$$.dirty[0]&32768&&t(12,u=$==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1"),s.$$.dirty[0]&65792&&t(11,o=[[n("sort-order.name"),"name"],[n("sort-order.views"),"views"],[n("sort-order.downloads"),"downloads"],[n("sort-order.hotness"),"hotness"],[n("sort-order.popularity"),"popularity"],[n("sort-order.created_at"),"created_at"],[n("sort-order.last_version_date"),"last_version_date"],...w!==""&&w!==null?[[n("sort-order.search"),"search"]]:[]]),s.$$.dirty[0]&131168&&t(10,c={page:p,limit:y,size:m,amounts:[8,16,32,64,100]})},[L,F,B,P,A,y,p,l,n,d,c,o,u,r,C,$,w,m,g,j,ie,H,se,Qe,Ye,Ze,et,tt]}class Ke extends De{constructor(e){super(e),Fe(this,e,lt,we,Te,{colCount:15,newMod:0,showSearch:1,t:2},null,[-1,-1]),D("SvelteRegisterComponent",{component:this,tagName:"ModGrid",options:e,id:we.name})}get colCount(){throw new Error("<ModGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set colCount(e){throw new Error("<ModGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get newMod(){throw new Error("<ModGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set newMod(e){throw new Error("<ModGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get showSearch(){throw new Error("<ModGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set showSearch(e){throw new Error("<ModGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[2]}set t(e){throw new Error("<ModGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function ve(s){let e,t,r,u;e=new Ue({props:{description:"Mods available from the Satisfactory Mod Repository",title:"Mods"},$$inline:!0}),r=new Ke({props:{showSearch:!0,newMod:!0,colCount:4},$$inline:!0});const o={c:function(){K(e.$$.fragment),t=z(),K(r.$$.fragment)},l:function(n){const i=it("svelte-p791zc",document.head);Q(e.$$.fragment,i),i.forEach(v),t=U(n),Q(r.$$.fragment,n)},m:function(n,i){Y(e,document.head,null),T(n,t,i),Y(r,n,i),u=!0},p:ee,i:function(n){u||(I(e.$$.fragment,n),I(r.$$.fragment,n),u=!0)},o:function(n){V(e.$$.fragment,n),V(r.$$.fragment,n),u=!1},d:function(n){n&&v(t),Z(e),Z(r,n)}};return D("SvelteRegisterBlock",{block:o,id:ve.name,type:"component",source:"",ctx:s}),o}function at(s,e,t){let{$$slots:r={},$$scope:u}=e;je("Page",r,[]);const o=[];return Object.keys(e).forEach(c=>{!~o.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Page> was created with unknown prop '${c}'`)}),s.$capture_state=()=>({ModGrid:Ke,MetaDescriptors:Ue}),[]}class gt extends De{constructor(e){super(e),Fe(this,e,at,ve,Te,{}),D("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ve.name})}}export{gt as component};
//# sourceMappingURL=21.8d41c477.js.map
