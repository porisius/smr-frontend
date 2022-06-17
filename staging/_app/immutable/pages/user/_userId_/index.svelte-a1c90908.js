import{S as pe,i as $e,s as ge,d as w,bf as Re,v as he,bg as je,a7 as T,a8 as G,a9 as M,u as h,t as x,ab as H,e as y,af as j,f as V,h as B,j as E,ag as A,k as p,l as N,ac as R,n as S,p as I,ad as g,ah as ve,aZ as ke,x as C,aH as Ae,g as z,b0 as et,r as J,am as ye,an as tt,b as nt,aM as we,q as K,aV as te,aW as De}from"../../../chunks/vendor-71586dff.js";import{M as _e}from"../../../chunks/MetaDescriptors-51ef3627.js";import{l as Ce}from"../../../chunks/gql-8582f3de.js";import{r as Pe}from"../../../chunks/graphql-587ea9ba.js";import{p as Ve}from"../../../chunks/routing-689f9c1f.js";import{p as re}from"../../../chunks/formatting-f0380eae.js";import{a as Be,b as Ne}from"../../../chunks/paths-396f020f.js";import{M as Oe}from"../../../chunks/ModCard-b1760076.js";import{G as Te}from"../../../chunks/GuideCard-3a89458e.js";import{a as ne}from"../../../chunks/user-aa766597.js";import"../../../chunks/stores-b24fbbcb.js";import"../../../chunks/global-04fbeec3.js";import"../../../chunks/FicsitCard-7d9781f6.js";import"../../../chunks/navigation-fe373893.js";import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/launcher-83e1142f.js";import"../../../chunks/OutdatedBanner-0c079bfd.js";const Y="src/lib/components/users/UserInfo.svelte";function Ge(i){let e,o,s,n,t,c,r,m,a=re(i[0].created_at)+"",d,f;const l={c:function(){e=y("div"),o=y("h3"),s=j("Info"),n=V(),t=y("span"),c=y("strong"),r=j("Created:"),m=V(),d=j(a),f=y("br"),this.h()},l:function(v){e=B(v,"DIV",{class:!0});var U=E(e);o=B(U,"H3",{class:!0});var D=E(o);s=A(D,"Info"),D.forEach(p),n=N(U),t=B(U,"SPAN",{});var F=E(t);c=B(F,"STRONG",{});var _=E(c);r=A(_,"Created:"),_.forEach(p),m=N(F),d=A(F,a),F.forEach(p),f=B(U,"BR",{}),U.forEach(p),this.h()},h:function(){R(o,"class","text-2xl my-4 font-bold"),S(o,Y,8,6,193),S(c,Y,9,12,251),S(t,Y,9,6,245),S(f,Y,9,74,313),R(e,"class","text-lg"),S(e,Y,7,4,165)},m:function(v,U){I(v,e,U),g(e,o),g(o,s),g(e,n),g(e,t),g(t,c),g(c,r),g(t,m),g(t,d),g(e,f)},p:function(v,U){U&1&&a!==(a=re(v[0].created_at)+"")&&ve(d,a)},d:function(v){v&&p(e)}};return w("SvelteRegisterBlock",{block:l,id:Ge.name,type:"slot",source:"(7:2) <Content>",ctx:i}),l}function Me(i){let e,o;e=new je({props:{$$slots:{default:[Ge]},$$scope:{ctx:i}},$$inline:!0});const s={c:function(){T(e.$$.fragment)},l:function(t){G(e.$$.fragment,t)},m:function(t,c){M(e,t,c),o=!0},p:function(t,c){const r={};c&3&&(r.$$scope={dirty:c,ctx:t}),e.$set(r)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){x(e.$$.fragment,t),o=!1},d:function(t){H(e,t)}};return w("SvelteRegisterBlock",{block:s,id:Me.name,type:"slot",source:"(6:0) <Card>",ctx:i}),s}function oe(i){let e,o;e=new Re({props:{$$slots:{default:[Me]},$$scope:{ctx:i}},$$inline:!0});const s={c:function(){T(e.$$.fragment)},l:function(t){G(e.$$.fragment,t)},m:function(t,c){M(e,t,c),o=!0},p:function(t,[c]){const r={};c&3&&(r.$$scope={dirty:c,ctx:t}),e.$set(r)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){x(e.$$.fragment,t),o=!1},d:function(t){H(e,t)}};return w("SvelteRegisterBlock",{block:s,id:oe.name,type:"component",source:"",ctx:i}),s}function rt(i,e,o){let{$$slots:s={},$$scope:n}=e;he("UserInfo",s,[]);let{user:t}=e;const c=["user"];return Object.keys(e).forEach(r=>{!~c.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<UserInfo> was created with unknown prop '${r}'`)}),i.$$set=r=>{"user"in r&&o(0,t=r.user)},i.$capture_state=()=>({Card:Re,Content:je,prettyDate:re,user:t}),i.$inject_state=r=>{"user"in r&&o(0,t=r.user)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[t]}class He extends pe{constructor(e){super(e),$e(this,e,rt,oe,ge,{user:0}),w("SvelteRegisterComponent",{component:this,tagName:"UserInfo",options:e,id:oe.name});const{ctx:o}=this.$$,s=e.props||{};o[0]===void 0&&!("user"in s)&&console.warn("<UserInfo> was created without expected prop 'user'")}get user(){throw new Error("<UserInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set user(e){throw new Error("<UserInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Se="src/lib/components/users/UserAvatar.svelte";function se(i){let e,o,s,n;const t={c:function(){e=y("div"),o=y("img"),this.h()},l:function(r){e=B(r,"DIV",{});var m=E(e);o=B(m,"IMG",{class:!0,src:!0,alt:!0}),m.forEach(p),this.h()},h:function(){R(o,"class","rounded-lg sm:max-w-lg max-w-full w-full"),ke(o.src,s=i[1])||R(o,"src",s),R(o,"alt",n="Avatar for "+i[0]),S(o,Se,7,2,174),S(e,Se,6,0,166)},m:function(r,m){I(r,e,m),g(e,o)},p:function(r,[m]){m&2&&!ke(o.src,s=r[1])&&R(o,"src",s),m&1&&n!==(n="Avatar for "+r[0])&&R(o,"alt",n)},i:C,o:C,d:function(r){r&&p(e)}};return w("SvelteRegisterBlock",{block:t,id:se.name,type:"component",source:"",ctx:i}),t}function ot(i,e,o){let s,{$$slots:n={},$$scope:t}=e;he("UserAvatar",n,[]);let{avatar:c}=e,{username:r}=e;const m=["avatar","username"];return Object.keys(e).forEach(a=>{!~m.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<UserAvatar> was created with unknown prop '${a}'`)}),i.$$set=a=>{"avatar"in a&&o(2,c=a.avatar),"username"in a&&o(0,r=a.username)},i.$capture_state=()=>({assets:Be,avatar:c,username:r,userAvatar:s}),i.$inject_state=a=>{"avatar"in a&&o(2,c=a.avatar),"username"in a&&o(0,r=a.username),"userAvatar"in a&&o(1,s=a.userAvatar)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{i.$$.dirty&4&&o(1,s=c||Be+"/images/no_image.webp")},[r,s,c]}class Fe extends pe{constructor(e){super(e),$e(this,e,ot,se,ge,{avatar:2,username:0}),w("SvelteRegisterComponent",{component:this,tagName:"UserAvatar",options:e,id:se.name});const{ctx:o}=this.$$,s=e.props||{};o[2]===void 0&&!("avatar"in s)&&console.warn("<UserAvatar> was created without expected prop 'avatar'"),o[0]===void 0&&!("username"in s)&&console.warn("<UserAvatar> was created without expected prop 'username'")}get avatar(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set avatar(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get username(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set username(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const P="src/routes/user/[userId]/index.svelte";function Ie(i,e,o){const s=i.slice();return s[8]=e[o],s}function Ee(i,e,o){const s=i.slice();return s[5]=e[o],s}function ie(i){let e,o;e=new _e({props:{description:i[2].data.getUser.username+" profile",title:i[2].data.getUser.username+" profile"},$$inline:!0});const s={c:function(){T(e.$$.fragment)},l:function(t){G(e.$$.fragment,t)},m:function(t,c){M(e,t,c),o=!0},p:function(t,c){const r={};c&4&&(r.description=t[2].data.getUser.username+" profile"),c&4&&(r.title=t[2].data.getUser.username+" profile"),e.$set(r)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){x(e.$$.fragment,t),o=!1},d:function(t){H(e,t)}};return w("SvelteRegisterBlock",{block:s,id:ie.name,type:"if",source:"(27:2) {#if !$user.fetching && !$user.error && $user.data.getUser}",ctx:i}),s}function Le(i){let e;const o={c:function(){e=j("404")},l:function(n){e=A(n,"404")},m:function(n,t){I(n,e,t)},p:C,i:C,o:C,d:function(n){n&&p(e)}};return w("SvelteRegisterBlock",{block:o,id:Le.name,type:"else",source:"(88:0) {:else}",ctx:i}),o}function We(i){let e,o,s,n=i[2].data.getUser.username+"",t,c,r,m,a,d,f,l,u,v,U,D,F,_,X,b=i[3]&&i[2].data.getUser.id===i[3].id&&ce(i);a=new we({props:{variant:"outlined",$$slots:{default:[Ke]},$$scope:{ctx:i}},$$inline:!0}),a.$on("click",i[4]);const Ue=[Ye,Xe],L=[];function xe(O,$){return O[1]?1:0}l=xe(i),u=L[l]=Ue[l](i),D=new Fe({props:{avatar:i[2].data.getUser.avatar,username:i[2].data.getUser.username},$$inline:!0}),_=new He({props:{user:i[2].data.getUser},$$inline:!0});const be={c:function(){e=y("div"),o=y("div"),s=y("h1"),t=j(n),c=V(),r=y("div"),b&&b.c(),m=V(),T(a.$$.fragment),d=V(),f=y("div"),u.c(),v=V(),U=y("div"),T(D.$$.fragment),F=V(),T(_.$$.fragment),this.h()},l:function($){e=B($,"DIV",{class:!0});var k=E(e);o=B(k,"DIV",{class:!0});var q=E(o);s=B(q,"H1",{class:!0});var Z=E(s);t=A(Z,n),Z.forEach(p),c=N(q),r=B(q,"DIV",{});var W=E(r);b&&b.l(W),m=N(W),G(a.$$.fragment,W),W.forEach(p),q.forEach(p),d=N(k),f=B(k,"DIV",{class:!0});var Q=E(f);u.l(Q),v=N(Q),U=B(Q,"DIV",{class:!0});var ee=E(U);G(D.$$.fragment,ee),F=N(ee),G(_.$$.fragment,ee),ee.forEach(p),Q.forEach(p),k.forEach(p),this.h()},h:function(){R(s,"class","text-4xl font-bold"),S(s,P,41,6,1494),S(r,P,43,6,1567),R(o,"class","flex flex-wrap h-auto justify-between items-center"),S(o,P,40,4,1423),R(U,"class","grid grid-cols-1 auto-rows-min gap-8"),S(U,P,81,6,2759),R(f,"class","grid grid-auto-max auto-cols-fr gap-4"),S(f,P,57,4,1941),R(e,"class","grid gap-6 xlx:grid-flow-row"),S(e,P,39,2,1376)},m:function($,k){I($,e,k),g(e,o),g(o,s),g(s,t),g(o,c),g(o,r),b&&b.m(r,null),g(r,m),M(a,r,null),g(e,d),g(e,f),L[l].m(f,null),g(f,v),g(f,U),M(D,U,null),g(U,F),M(_,U,null),X=!0},p:function($,k){(!X||k&4)&&n!==(n=$[2].data.getUser.username+"")&&ve(t,n),$[3]&&$[2].data.getUser.id===$[3].id?b?(b.p($,k),k&12&&h(b,1)):(b=ce($),b.c(),h(b,1),b.m(r,m)):b&&(K(),x(b,1,1,()=>{b=null}),J());const q={};k&2050&&(q.$$scope={dirty:k,ctx:$}),a.$set(q);let Z=l;l=xe($),l===Z?L[l].p($,k):(K(),x(L[Z],1,1,()=>{L[Z]=null}),J(),u=L[l],u?u.p($,k):(u=L[l]=Ue[l]($),u.c()),h(u,1),u.m(f,v));const W={};k&4&&(W.avatar=$[2].data.getUser.avatar),k&4&&(W.username=$[2].data.getUser.username),D.$set(W);const Q={};k&4&&(Q.user=$[2].data.getUser),_.$set(Q)},i:function($){X||(h(b),h(a.$$.fragment,$),h(u),h(D.$$.fragment,$),h(_.$$.fragment,$),X=!0)},o:function($){x(b),x(a.$$.fragment,$),x(u),x(D.$$.fragment,$),x(_.$$.fragment,$),X=!1},d:function($){$&&p(e),b&&b.d(),H(a),L[l].d(),H(D),H(_)}};return w("SvelteRegisterBlock",{block:be,id:We.name,type:"if",source:"(39:29) ",ctx:i}),be}function qe(i){let e,o,s=i[2].error.message+"",n;const t={c:function(){e=y("p"),o=j("Oh no... "),n=j(s),this.h()},l:function(r){e=B(r,"P",{});var m=E(e);o=A(m,"Oh no... "),n=A(m,s),m.forEach(p),this.h()},h:function(){S(e,P,37,2,1306)},m:function(r,m){I(r,e,m),g(e,o),g(e,n)},p:function(r,m){m&4&&s!==(s=r[2].error.message+"")&&ve(n,s)},i:C,o:C,d:function(r){r&&p(e)}};return w("SvelteRegisterBlock",{block:t,id:qe.name,type:"if",source:"(37:22) ",ctx:i}),t}function Qe(i){let e,o;const s={c:function(){e=y("p"),o=j("Loading..."),this.h()},l:function(t){e=B(t,"P",{});var c=E(e);o=A(c,"Loading..."),c.forEach(p),this.h()},h:function(){S(e,P,35,2,1263)},m:function(t,c){I(t,e,c),g(e,o)},p:C,i:C,o:C,d:function(t){t&&p(e)}};return w("SvelteRegisterBlock",{block:s,id:Qe.name,type:"if",source:"(35:0) {#if $user.fetching}",ctx:i}),s}function ce(i){let e,o;e=new we({props:{variant:"outlined",href:Ne+"/settings",$$slots:{default:[Ze]},$$scope:{ctx:i}},$$inline:!0});const s={c:function(){T(e.$$.fragment)},l:function(t){G(e.$$.fragment,t)},m:function(t,c){M(e,t,c),o=!0},p:function(t,c){const r={};c&2048&&(r.$$scope={dirty:c,ctx:t}),e.$set(r)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){x(e.$$.fragment,t),o=!1},d:function(t){H(e,t)}};return w("SvelteRegisterBlock",{block:s,id:ce.name,type:"if",source:"(45:8) {#if $me && $user.data.getUser.id === $me.id}",ctx:i}),s}function Ze(i){let e;const o={c:function(){e=j("Settings")},l:function(n){e=A(n,"Settings")},m:function(n,t){I(n,e,t)},d:function(n){n&&p(e)}};return w("SvelteRegisterBlock",{block:o,id:Ze.name,type:"slot",source:'(46:10) <Button variant=\\"outlined\\" href=\\"{base}/settings\\">',ctx:i}),o}function ze(i){let e;const o={c:function(){e=j("Mods")},l:function(n){e=A(n,"Mods")},m:function(n,t){I(n,e,t)},d:function(n){n&&p(e)}};return w("SvelteRegisterBlock",{block:o,id:ze.name,type:"else",source:"(52:10) {:else}",ctx:i}),o}function Je(i){let e;const o={c:function(){e=j("Guides")},l:function(n){e=A(n,"Guides")},m:function(n,t){I(n,e,t)},d:function(n){n&&p(e)}};return w("SvelteRegisterBlock",{block:o,id:Je.name,type:"if",source:"(50:10) {#if !guidesTab}",ctx:i}),o}function Ke(i){let e;function o(c,r){return c[1]?ze:Je}let s=o(i),n=s(i);const t={c:function(){n.c(),e=z()},l:function(r){n.l(r),e=z()},m:function(r,m){n.m(r,m),I(r,e,m)},p:function(r,m){s!==(s=o(r))&&(n.d(1),n=s(r),n&&(n.c(),n.m(e.parentNode,e)))},d:function(r){n.d(r),r&&p(e)}};return w("SvelteRegisterBlock",{block:t,id:Ke.name,type:"slot",source:'(49:8) <Button variant=\\"outlined\\" on:click={() => (guidesTab = !guidesTab)}>',ctx:i}),t}function Xe(i){let e,o,s,n=i[2].data.getUser.guides;te(n);let t=[];for(let a=0;a<n.length;a+=1)t[a]=ae(Ie(i,n,a));const c=a=>x(t[a],1,1,()=>{t[a]=null});let r=i[2].data.getUser.guides.length===0&&le(i);const m={c:function(){e=y("div");for(let d=0;d<t.length;d+=1)t[d].c();o=V(),r&&r.c(),this.h()},l:function(d){e=B(d,"DIV",{class:!0});var f=E(e);for(let l=0;l<t.length;l+=1)t[l].l(f);o=N(f),r&&r.l(f),f.forEach(p),this.h()},h:function(){R(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit"),S(e,P,70,8,2375)},m:function(d,f){I(d,e,f);for(let l=0;l<t.length;l+=1)t[l].m(e,null);g(e,o),r&&r.m(e,null),s=!0},p:function(d,f){if(f&4){n=d[2].data.getUser.guides,te(n);let l;for(l=0;l<n.length;l+=1){const u=Ie(d,n,l);t[l]?(t[l].p(u,f),h(t[l],1)):(t[l]=ae(u),t[l].c(),h(t[l],1),t[l].m(e,o))}for(K(),l=n.length;l<t.length;l+=1)c(l);J()}d[2].data.getUser.guides.length===0?r||(r=le(d),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:function(d){if(!s){for(let f=0;f<n.length;f+=1)h(t[f]);s=!0}},o:function(d){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)x(t[f]);s=!1},d:function(d){d&&p(e),De(t,d),r&&r.d()}};return w("SvelteRegisterBlock",{block:m,id:Xe.name,type:"else",source:"(70:6) {:else}",ctx:i}),m}function Ye(i){let e,o,s,n=i[2].data.getUser.mods;te(n);let t=[];for(let a=0;a<n.length;a+=1)t[a]=ue(Ee(i,n,a));const c=a=>x(t[a],1,1,()=>{t[a]=null});let r=i[2].data.getUser.mods.length===0&&fe(i);const m={c:function(){e=y("div");for(let d=0;d<t.length;d+=1)t[d].c();o=V(),r&&r.c(),this.h()},l:function(d){e=B(d,"DIV",{class:!0});var f=E(e);for(let l=0;l<t.length;l+=1)t[l].l(f);o=N(f),r&&r.l(f),f.forEach(p),this.h()},h:function(){R(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit"),S(e,P,59,8,2024)},m:function(d,f){I(d,e,f);for(let l=0;l<t.length;l+=1)t[l].m(e,null);g(e,o),r&&r.m(e,null),s=!0},p:function(d,f){if(f&4){n=d[2].data.getUser.mods,te(n);let l;for(l=0;l<n.length;l+=1){const u=Ee(d,n,l);t[l]?(t[l].p(u,f),h(t[l],1)):(t[l]=ue(u),t[l].c(),h(t[l],1),t[l].m(e,o))}for(K(),l=n.length;l<t.length;l+=1)c(l);J()}d[2].data.getUser.mods.length===0?r||(r=fe(d),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:function(d){if(!s){for(let f=0;f<n.length;f+=1)h(t[f]);s=!0}},o:function(d){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)x(t[f]);s=!1},d:function(d){d&&p(e),De(t,d),r&&r.d()}};return w("SvelteRegisterBlock",{block:m,id:Ye.name,type:"if",source:"(59:6) {#if !guidesTab}",ctx:i}),m}function ae(i){let e,o;e=new Te({props:{guide:i[8],logo:i[2].data.getUser.avatar},$$inline:!0});const s={c:function(){T(e.$$.fragment)},l:function(t){G(e.$$.fragment,t)},m:function(t,c){M(e,t,c),o=!0},p:function(t,c){const r={};c&4&&(r.guide=t[8]),c&4&&(r.logo=t[2].data.getUser.avatar),e.$set(r)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){x(e.$$.fragment,t),o=!1},d:function(t){H(e,t)}};return w("SvelteRegisterBlock",{block:s,id:ae.name,type:"each",source:"(72:10) {#each $user.data.getUser.guides as guide}",ctx:i}),s}function le(i){let e;const o={c:function(){e=j("User has no guides")},l:function(n){e=A(n,"User has no guides")},m:function(n,t){I(n,e,t)},d:function(n){n&&p(e)}};return w("SvelteRegisterBlock",{block:o,id:le.name,type:"if",source:"(76:10) {#if $user.data.getUser.guides.length === 0}",ctx:i}),o}function ue(i){let e,o;e=new Oe({props:{mod:i[5].mod},$$inline:!0});const s={c:function(){T(e.$$.fragment)},l:function(t){G(e.$$.fragment,t)},m:function(t,c){M(e,t,c),o=!0},p:function(t,c){const r={};c&4&&(r.mod=t[5].mod),e.$set(r)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){x(e.$$.fragment,t),o=!1},d:function(t){H(e,t)}};return w("SvelteRegisterBlock",{block:s,id:ue.name,type:"each",source:"(61:10) {#each $user.data.getUser.mods as mod}",ctx:i}),s}function fe(i){let e;const o={c:function(){e=j("User has no mods")},l:function(n){e=A(n,"User has no mods")},m:function(n,t){I(n,e,t)},d:function(n){n&&p(e)}};return w("SvelteRegisterBlock",{block:o,id:fe.name,type:"if",source:"(65:10) {#if $user.data.getUser.mods.length === 0}",ctx:i}),o}function de(i){let e,o,s,n,t,c,r=!i[2].fetching&&!i[2].error&&i[2].data.getUser&&ie(i);const m=[Qe,qe,We,Le],a=[];function d(l,u){return l[2].fetching?0:l[2].error?1:l[2].data.getUser?2:3}s=d(i),n=a[s]=m[s](i);const f={c:function(){r&&r.c(),e=z(),o=V(),n.c(),t=z()},l:function(u){const v=et('[data-svelte="svelte-10jr2sa"]',document.head);r&&r.l(v),e=z(),v.forEach(p),o=N(u),n.l(u),t=z()},m:function(u,v){r&&r.m(document.head,null),g(document.head,e),I(u,o,v),a[s].m(u,v),I(u,t,v),c=!0},p:function(u,[v]){!u[2].fetching&&!u[2].error&&u[2].data.getUser?r?(r.p(u,v),v&4&&h(r,1)):(r=ie(u),r.c(),h(r,1),r.m(e.parentNode,e)):r&&(K(),x(r,1,1,()=>{r=null}),J());let U=s;s=d(u),s===U?a[s].p(u,v):(K(),x(a[U],1,1,()=>{a[U]=null}),J(),n=a[s],n?n.p(u,v):(n=a[s]=m[s](u),n.c()),h(n,1),n.m(t.parentNode,t))},i:function(u){c||(h(r),h(n),c=!0)},o:function(u){x(r),x(n),c=!1},d:function(u){r&&r.d(u),p(e),u&&p(o),a[s].d(u),u&&p(t)}};return w("SvelteRegisterBlock",{block:f,id:de.name,type:"component",source:"",ctx:i}),f}const me=Ae(Pe,{user:void 0}),st=Ve(async i=>(me.variables.user=i.params.userId,Ce({user:me})(i)));function it(i,e,o){let s,n=C,t=()=>(n(),n=nt(a,u=>o(2,s=u)),a),c;ye(ne,"me"),tt(i,ne,u=>o(3,c=u)),i.$$.on_destroy.push(()=>n());let{$$slots:r={},$$scope:m}=e;he("U5BuserIdu5D",r,[]);let{user:a}=e;ye(a,"user"),t();let d=!1;const f=["user"];Object.keys(e).forEach(u=>{!~f.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<U5BuserIdu5D> was created with unknown prop '${u}'`)});const l=()=>o(1,d=!d);return i.$$set=u=>{"user"in u&&t(o(0,a=u.user))},i.$capture_state=()=>({paramsToProps:Ve,operationStore:Ae,GetUserDocument:Pe,loadWaitForNoFetch:Ce,MetaDescriptors:_e,Button:we,userQ:me,load:st,UserInfo:He,UserAvatar:Fe,ModCard:Oe,GuideCard:Te,me:ne,base:Ne,user:a,guidesTab:d,$user:s,$me:c}),i.$inject_state=u=>{"user"in u&&t(o(0,a=u.user)),"guidesTab"in u&&o(1,d=u.guidesTab)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[a,d,s,c,l]}class yt extends pe{constructor(e){super(e),$e(this,e,it,de,ge,{user:0}),w("SvelteRegisterComponent",{component:this,tagName:"U5BuserIdu5D",options:e,id:de.name});const{ctx:o}=this.$$,s=e.props||{};o[0]===void 0&&!("user"in s)&&console.warn("<U5BuserIdu5D> was created without expected prop 'user'")}get user(){throw new Error("<U5BuserIdu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set user(e){throw new Error("<U5BuserIdu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{yt as default,st as load};
//# sourceMappingURL=index.svelte-a1c90908.js.map
