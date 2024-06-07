import{L as ht,S as tt,i as et,s as at,e as m,T as P,a as _,c as p,d as b,U as L,f,g as N,G as w,j as S,I as c,V as A,q as x,a6 as gt,r as rt,O as K,b as J,C as mt,m as M,t as j,l as st,Z as pt,K as vt,X as $t,ae as Et,A as W,D as X,H as Y,J as Z,k as lt,Y as it,a2 as nt,a3 as yt,F as Q,W as ot,a1 as bt,a4 as wt,a5 as xt}from"../chunks/vendor.qkHm75Lx.js";import{n as It,B as Gt}from"../chunks/graphql.XSrPrpK2.js";import{l as Dt}from"../chunks/gql.WZvlfNZ8.js";import{p as ct}from"../chunks/formatting.G9yDJMit.js";import{u as Vt}from"../chunks/user.DaLCXNg3.js";import{m as ut}from"../chunks/markdown.JOb1FNHv.js";import{M as kt}from"../chunks/MetaDescriptors.8buV-7cv.js";import{P as Tt}from"../chunks/Page404.YfTqNZA_.js";const Ot=!1,_t=async({params:r,parent:t})=>({...r,...await Dt({guide:ht({query:It,client:(await t()).client,variables:{guide:r.guideId}})})}),ee=Object.freeze(Object.defineProperty({__proto__:null,load:_t,prerender:Ot},Symbol.toStringTag,{value:"Module"}));function Nt(r){let t,s,e,a,l=r[2]("entry.info")+"",d,i,o,u,y=r[2]("entry.created-at")+"",n,h,I,D=ct(r[0].created_at)+"",G,T;return{c(){t=m("div"),s=m("section"),e=m("div"),a=m("h3"),d=P(l),i=_(),o=m("span"),u=m("strong"),n=P(y),h=P(":"),I=_(),G=P(D),T=m("br"),this.h()},l(k){t=p(k,"DIV",{class:!0});var g=b(t);s=p(g,"SECTION",{});var O=b(s);e=p(O,"DIV",{class:!0});var $=b(e);a=p($,"H3",{class:!0});var V=b(a);d=L(V,l),V.forEach(f),i=N($),o=p($,"SPAN",{});var v=b(o);u=p(v,"STRONG",{});var E=b(u);n=L(E,y),h=L(E,":"),E.forEach(f),I=N(v),G=L(v,D),v.forEach(f),T=p($,"BR",{}),$.forEach(f),O.forEach(f),g.forEach(f),this.h()},h(){w(a,"class","my-4 text-2xl font-bold"),w(e,"class","text-lg"),w(t,"class","card p-4")},m(k,g){S(k,t,g),c(t,s),c(s,e),c(e,a),c(a,d),c(e,i),c(e,o),c(o,u),c(u,n),c(u,h),c(o,I),c(o,G),c(e,T)},p(k,[g]){g&4&&l!==(l=k[2]("entry.info")+"")&&A(d,l),g&4&&y!==(y=k[2]("entry.created-at")+"")&&A(n,y),g&1&&D!==(D=ct(k[0].created_at)+"")&&A(G,D)},i:x,o:x,d(k){k&&f(t)}}}function St(r,t,s){let e,a=x,l=()=>(a(),a=rt(i,o=>s(2,e=o)),i);r.$$.on_destroy.push(()=>a());let{guide:d}=t;const{t:i}=gt();return l(),r.$$set=o=>{"guide"in o&&s(0,d=o.guide)},[d,i,e]}class Ct extends tt{constructor(t){super(),et(this,t,St,Nt,at,{guide:0,t:1})}get t(){return this.$$.ctx[1]}}function Ht(r){let t,s,e,a,l=r[2]("author")+"",d,i,o,u,y,n,h,I,D,G=r[0].username+"",T,k,g,O,$=r[2]("role.writer")+"",V;return{c(){t=m("div"),s=m("section"),e=m("div"),a=m("h3"),d=P(l),i=_(),o=m("div"),u=m("div"),y=m("div"),h=_(),I=m("div"),D=m("a"),T=P(G),g=_(),O=m("div"),V=P($),this.h()},l(v){t=p(v,"DIV",{class:!0});var E=b(t);s=p(E,"SECTION",{});var C=b(s);e=p(C,"DIV",{class:!0});var H=b(e);a=p(H,"H3",{class:!0});var R=b(a);d=L(R,l),R.forEach(f),i=N(H),o=p(H,"DIV",{class:!0});var q=b(o);u=p(q,"DIV",{class:!0});var B=b(u);y=p(B,"DIV",{class:!0,style:!0}),b(y).forEach(f),h=N(B),I=p(B,"DIV",{class:!0});var U=b(I);D=p(U,"A",{href:!0,class:!0});var F=b(D);T=L(F,G),F.forEach(f),g=N(U),O=p(U,"DIV",{});var z=b(O);V=L(z,$),z.forEach(f),U.forEach(f),B.forEach(f),q.forEach(f),H.forEach(f),C.forEach(f),E.forEach(f),this.h()},h(){w(a,"class","my-4 text-2xl font-bold"),w(y,"class","h-14 w-14 rounded-full bg-cover"),w(y,"style",n=`background-image: url("${r[0].avatar}")`),w(D,"href",k=K+"/user/"+r[0].id+"/"),w(D,"class","text-yellow-500 underline"),w(I,"class","grid grid-flow-row"),w(u,"class","grid auto-cols-min grid-flow-col gap-x-4"),w(o,"class","grid auto-rows-min gap-y-4 text-lg"),w(e,"class","grid grid-flow-row gap-y-2"),w(t,"class","card p-4")},m(v,E){S(v,t,E),c(t,s),c(s,e),c(e,a),c(a,d),c(e,i),c(e,o),c(o,u),c(u,y),c(u,h),c(u,I),c(I,D),c(D,T),c(I,g),c(I,O),c(O,V)},p(v,[E]){E&4&&l!==(l=v[2]("author")+"")&&A(d,l),E&1&&n!==(n=`background-image: url("${v[0].avatar}")`)&&w(y,"style",n),E&1&&G!==(G=v[0].username+"")&&A(T,G),E&1&&k!==(k=K+"/user/"+v[0].id+"/")&&w(D,"href",k),E&4&&$!==($=v[2]("role.writer")+"")&&A(V,$)},i:x,o:x,d(v){v&&f(t)}}}function Pt(r,t,s){let e,a=x,l=()=>(a(),a=rt(i,o=>s(2,e=o)),i);r.$$.on_destroy.push(()=>a());let{author:d}=t;const{t:i}=gt();return l(),r.$$set=o=>{"author"in o&&s(0,d=o.author)},[d,i,e]}class Lt extends tt{constructor(t){super(),et(this,t,Pt,Ht,at,{author:0,t:1})}get t(){return this.$$.ctx[1]}}function dt(r){let t,s;return t=new kt({props:{description:r[0].data.getGuide.short_description,title:r[0].data.getGuide.name}}),{c(){W(t.$$.fragment)},l(e){X(t.$$.fragment,e)},m(e,a){Y(t,e,a),s=!0},p(e,a){const l={};a&1&&(l.description=e[0].data.getGuide.short_description),a&1&&(l.title=e[0].data.getGuide.name),t.$set(l)},i(e){s||(M(t.$$.fragment,e),s=!0)},o(e){j(t.$$.fragment,e),s=!1},d(e){Z(t,e)}}}function Mt(r){let t,s;return t=new Tt({}),{c(){W(t.$$.fragment)},l(e){X(t.$$.fragment,e)},m(e,a){Y(t,e,a),s=!0},p:x,i(e){s||(M(t.$$.fragment,e),s=!0)},o(e){j(t.$$.fragment,e),s=!1},d(e){Z(t,e)}}}function jt(r){let t,s,e,a=r[0].data.getGuide.name+"",l,d,i,o,u,y,n,h,I,D,G,T,k,g,O,$=r[2]&&ft(r),V={ctx:r,current:null,token:null,hasCatch:!1,pending:zt,then:Ut,catch:Bt,value:13};return nt(I=ut(r[0].data.getGuide.guide),V),T=new Ct({props:{guide:r[0].data.getGuide}}),g=new Lt({props:{author:r[0].data.getGuide.user}}),{c(){t=m("div"),s=m("div"),e=m("h1"),l=P(a),d=_(),i=m("div"),$&&$.c(),o=_(),u=m("div"),y=m("div"),n=m("section"),h=m("div"),V.block.c(),D=_(),G=m("div"),W(T.$$.fragment),k=_(),W(g.$$.fragment),this.h()},l(v){t=p(v,"DIV",{class:!0});var E=b(t);s=p(E,"DIV",{class:!0});var C=b(s);e=p(C,"H1",{class:!0});var H=b(e);l=L(H,a),H.forEach(f),d=N(C),i=p(C,"DIV",{});var R=b(i);$&&$.l(R),R.forEach(f),C.forEach(f),o=N(E),u=p(E,"DIV",{class:!0});var q=b(u);y=p(q,"DIV",{class:!0});var B=b(y);n=p(B,"SECTION",{});var U=b(n);h=p(U,"DIV",{class:!0});var F=b(h);V.block.l(F),F.forEach(f),U.forEach(f),B.forEach(f),D=N(q),G=p(q,"DIV",{class:!0});var z=b(G);X(T.$$.fragment,z),k=N(z),X(g.$$.fragment,z),z.forEach(f),q.forEach(f),E.forEach(f),this.h()},h(){w(e,"class","text-4xl font-bold"),w(s,"class","flex h-auto flex-wrap items-center justify-between"),w(h,"class","markdown-content break-words"),w(y,"class","card h-fit p-4"),w(G,"class","grid auto-rows-min grid-cols-1 gap-8"),w(u,"class","grid-auto-max grid auto-cols-fr gap-4"),w(t,"class","grid gap-6 xlx:grid-flow-row")},m(v,E){S(v,t,E),c(t,s),c(s,e),c(e,l),c(s,d),c(s,i),$&&$.m(i,null),c(t,o),c(t,u),c(u,y),c(y,n),c(n,h),V.block.m(h,V.anchor=null),V.mount=()=>h,V.anchor=null,c(u,D),c(u,G),Y(T,G,null),c(G,k),Y(g,G,null),O=!0},p(v,E){r=v,(!O||E&1)&&a!==(a=r[0].data.getGuide.name+"")&&A(l,a),r[2]?$?$.p(r,E):($=ft(r),$.c(),$.m(i,null)):$&&($.d(1),$=null),V.ctx=r,E&1&&I!==(I=ut(r[0].data.getGuide.guide))&&nt(I,V)||yt(V,r,E);const C={};E&1&&(C.guide=r[0].data.getGuide),T.$set(C);const H={};E&1&&(H.author=r[0].data.getGuide.user),g.$set(H)},i(v){O||(M(T.$$.fragment,v),M(g.$$.fragment,v),O=!0)},o(v){j(T.$$.fragment,v),j(g.$$.fragment,v),O=!1},d(v){v&&f(t),$&&$.d(),V.block.d(),V.token=null,V=null,Z(T),Z(g)}}}function At(r){let t,s,e=r[0].error.message+"",a;return{c(){t=m("p"),s=P("Oh no... "),a=P(e)},l(l){t=p(l,"P",{});var d=b(t);s=L(d,"Oh no... "),a=L(d,e),d.forEach(f)},m(l,d){S(l,t,d),c(t,s),c(t,a)},p(l,d){d&1&&e!==(e=l[0].error.message+"")&&A(a,e)},i:x,o:x,d(l){l&&f(t)}}}function qt(r){let t,s="Loading...";return{c(){t=m("p"),t.textContent=s},l(e){t=p(e,"P",{"data-svelte-h":!0}),Q(t)!=="svelte-qdsr2u"&&(t.textContent=s)},m(e,a){S(e,t,a)},p:x,i:x,o:x,d(e){e&&f(t)}}}function ft(r){let t,s=`<span class="material-icons pr-2">edit</span>
            Edit`,e,a,l=`<span class="material-icons pr-2">delete</span>
            Delete`,d,i;return{c(){t=m("button"),t.innerHTML=s,e=_(),a=m("button"),a.innerHTML=l,this.h()},l(o){t=p(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-5sm84g"&&(t.innerHTML=s),e=N(o),a=p(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-1tg2z3n"&&(a.innerHTML=l),this.h()},h(){w(t,"class","variant-ghost-primary btn"),w(a,"class","variant-ghost-primary btn")},m(o,u){S(o,t,u),S(o,e,u),S(o,a,u),d||(i=[ot(t,"click",r[8]),ot(a,"click",r[9])],d=!0)},p:x,d(o){o&&(f(t),f(e),f(a)),d=!1,bt(i)}}}function Bt(r){return{c:x,l:x,m:x,p:x,d:x}}function Ut(r){let t,s,e=r[13]+"";return{c(){t=m("p"),s=new wt(!1),this.h()},l(a){t=p(a,"P",{});var l=b(t);s=xt(l,!1),l.forEach(f),this.h()},h(){s.a=null},m(a,l){S(a,t,l),s.m(e,t)},p(a,l){l&1&&e!==(e=a[13]+"")&&s.p(e)},d(a){a&&f(t)}}}function zt(r){return{c:x,l:x,m:x,p:x,d:x}}function Rt(r){let t,s,e,a,l,d,i=!r[0].fetching&&!r[0].error&&r[0].data.getGuide&&dt(r);const o=[qt,At,jt,Mt],u=[];function y(n,h){return n[0].fetching?0:n[0].error?1:n[0].data.getGuide?2:3}return e=y(r),a=u[e]=o[e](r),{c(){i&&i.c(),t=J(),s=_(),a.c(),l=J()},l(n){const h=mt("svelte-bhfvpi",document.head);i&&i.l(h),t=J(),h.forEach(f),s=N(n),a.l(n),l=J()},m(n,h){i&&i.m(document.head,null),c(document.head,t),S(n,s,h),u[e].m(n,h),S(n,l,h),d=!0},p(n,[h]){!n[0].fetching&&!n[0].error&&n[0].data.getGuide?i?(i.p(n,h),h&1&&M(i,1)):(i=dt(n),i.c(),M(i,1),i.m(t.parentNode,t)):i&&(lt(),j(i,1,1,()=>{i=null}),st());let I=e;e=y(n),e===I?u[e].p(n,h):(lt(),j(u[I],1,1,()=>{u[I]=null}),st(),a=u[e],a?a.p(n,h):(a=u[e]=o[e](n),a.c()),M(a,1),a.m(l.parentNode,l))},i(n){d||(M(i),M(a),d=!0)},o(n){j(i),j(a),d=!1},d(n){n&&(f(s),f(l)),i&&i.d(n),f(t),u[e].d(n)}}}function Ft(r,t,s){let e,a,l,d,i=x,o=()=>(i(),i=rt(a,g=>s(0,d=g)),a),u;pt(r,Vt,g=>s(7,u=g)),r.$$.on_destroy.push(()=>i());let{data:y}=t;const n=vt(),h=$t(),I=()=>{n.mutation(Gt,{guideId:e}).toPromise().then(g=>{g.error?(console.error(g.error.message),h.trigger({message:"Error deleting guide: "+g.error.message,background:"variant-filled-error",autohide:!1})):(h.trigger({message:"Guide deleted",background:"variant-filled-success",timeout:5e3}),it(K+"/guides"))})},D={type:"confirm",title:"Delete Guide?",body:"Are you sure you wish to delete this guide?",response:g=>{g&&I()}},G=Et(),T=()=>it(K+"/guide/"+e+"/edit"),k=()=>G.trigger(D);return r.$$set=g=>{"data"in g&&s(6,y=g.data)},r.$$.update=()=>{r.$$.dirty&64&&s(1,{guideId:e,guide:a}=y,e,o(s(3,a))),r.$$.dirty&129&&s(2,l=u?.roles?.deleteContent||u?.id===d?.data?.getGuide?.user?.id)},[d,e,l,a,D,G,y,u,T,k]}class ae extends tt{constructor(t){super(),et(this,t,Ft,Rt,at,{data:6})}}export{ae as component,ee as universal};
//# sourceMappingURL=12.h0MTbozs.js.map
