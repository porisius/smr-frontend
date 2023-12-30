import{G as Dt,S as nt,i as lt,s as ot,d as U,v as it,a1 as me,aD as Se,a2 as be,ae as J,w as ke,f as Ze,n as G,Z as Be,u as he,j as h,a6 as It,x as rt,aC as Ce,e as g,g as p,N as a,aE as et,at as ne,l as ie,m as b,ab as tt,J as De,b as C,W as H,K as Rt,L as Ie,k as A,h as w,X as Z,O as Re,Q as u,Y as ce,t as de,q as ct,r as ae,R as Me,U as Ae,p as at,V as ft}from"../chunks/vendor.sC5Dcwro.js";import{z as Mt,O as Pt,M as St}from"../chunks/graphql.fqwMiF4t.js";import{l as Bt}from"../chunks/gql.WZvlfNZ8.js";import{M as ut}from"../chunks/MetaDescriptors.m-kXAXKS.js";import{F as dt}from"../chunks/FicsitCard.tZ38s4GO.js";import{M as ht}from"../chunks/ModCard.VptX3Zed.js";const Ct=async({parent:n})=>({...await Bt({mods:Dt({query:Mt,client:(await n()).client,variables:{offset:0,limit:4,order:Pt.Desc,orderBy:St.LastVersionDate}})})}),Ut=Object.freeze(Object.defineProperty({__proto__:null,load:Ct},Symbol.toStringTag,{value:"Module"})),At="src/lib/components/general/Doggo.svelte";function je(n){let e,s,l;const t={c:function(){e=g("img"),this.h()},l:function(i){e=p(i,"IMG",{class:!0,src:!0,alt:!0,title:!0,style:!0}),this.h()},h:function(){a(e,"class",s=et("doggo-flipper h-full"+(n[1]?"-R":"-L"))+" s-7qWqUbRfAbQ4"),ne(e.src,l=n[4])||a(e,"src",l),a(e,"alt","Doggo!"),a(e,"title","Click to pat doggo!"),ie(e,"width","200px"),ie(e,"height","auto"),ie(e,"position","absolute"),ie(e,"top",n[2]+"px"),ie(e,"left",n[3]+"px"),ie(e,"z-index","69"),b(e,At,57,2,1531)},m:function(i,c){G(i,e,c)},p:function(i,c){c&2&&s!==(s=et("doggo-flipper h-full"+(i[1]?"-R":"-L"))+" s-7qWqUbRfAbQ4")&&a(e,"class",s),c&16&&!ne(e.src,l=i[4])&&a(e,"src",l),c&4&&ie(e,"top",i[2]+"px"),c&8&&ie(e,"left",i[3]+"px")},d:function(i){i&&h(e)}};return U("SvelteRegisterBlock",{block:t,id:je.name,type:"if",source:"(48:0) {#if $dogVisible}",ctx:n}),t}function Ye(n){let e,s,l,t=n[5]&&je(n);const o={c:function(){t&&t.c(),e=Ze()},l:function(c){t&&t.l(c),e=Ze()},m:function(c,r){t&&t.m(c,r),G(c,e,r),s||(l=[Be(window,"mousedown",n[9],!1,!1,!1,!1),Be(window,"mousemove",n[8],!1,!1,!1,!1),Be(window,"mouseup",n[10],!1,!1,!1,!1)],s=!0)},p:function(c,[r]){c[5]?t?t.p(c,r):(t=je(c),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:he,o:he,d:function(c){c&&h(e),t&&t.d(c),s=!1,It(l)}};return U("SvelteRegisterBlock",{block:o,id:Ye.name,type:"component",source:"",ctx:n}),o}function jt(n,e,s){let l,t,o,i,c,r,f,d,y,x,V=he,R=()=>(V(),V=rt(M,m=>s(5,x=m)),M);n.$$.on_destroy.push(()=>V());let{$$slots:N={},$$scope:v}=e;it("Doggo",N,[]);let{dogVisible:M=ke(!1)}=e;me(M,"dogVisible"),R();const S=Se(-2e3,{stiffness:.004,damping:.25,precision:1});me(S,"x"),be(n,S,m=>s(3,y=m));const j=Se(-1e3,{stiffness:.004,damping:.25,precision:1});me(j,"y"),be(n,j,m=>s(2,d=m));let O=J+"/images/dog_stand.gif",F={clientX:-1e3,clientY:0},D=!1;function _(m){!D&&M&&s(11,F=m)}function T(){s(4,O=J+"/images/dog_aw_yis_pats.gif"),D=!0}function B(){c&&T()}async function I(){D&&(s(4,O=J+"/images/dog_boing.gif"),s(12,l=3e3),setTimeout(()=>{Ce(M,x=!1,x),Ce(S,y=-2e3,y),Ce(j,d=-1e3,d),D=!1},700))}const W=["dogVisible"];return Object.keys(e).forEach(m=>{!~W.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<Doggo> was created with unknown prop '${m}'`)}),n.$$set=m=>{"dogVisible"in m&&R(s(0,M=m.dogVisible))},n.$capture_state=()=>({spring:Se,assets:J,writable:ke,dogVisible:M,x:S,y:j,sprite:O,last_mouse:F,patting:D,update_pos:_,pat:T,try_pat:B,end_pat:I,actual_mouse_x:l,isClose:c,actual_mouse_y:t,head_offset:f,isLookingRight:r,dy:i,dx:o,$y:d,$x:y,$dogVisible:x}),n.$inject_state=m=>{"dogVisible"in m&&R(s(0,M=m.dogVisible)),"sprite"in m&&s(4,O=m.sprite),"last_mouse"in m&&s(11,F=m.last_mouse),"patting"in m&&(D=m.patting),"actual_mouse_x"in m&&s(12,l=m.actual_mouse_x),"isClose"in m&&s(13,c=m.isClose),"actual_mouse_y"in m&&s(14,t=m.actual_mouse_y),"head_offset"in m&&s(15,f=m.head_offset),"isLookingRight"in m&&s(1,r=m.isLookingRight),"dy"in m&&s(16,i=m.dy),"dx"in m&&s(17,o=m.dx)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&2048&&s(12,l=F.clientX-350),n.$$.dirty&2048&&s(14,t=F.clientY-100),n.$$.dirty&4104&&s(17,o=Math.abs(y-l)),n.$$.dirty&16388&&s(16,i=Math.abs(d-t)),n.$$.dirty&196608&&s(13,c=o<80&&i<40),n.$$.dirty&4104&&s(1,r=y<l),n.$$.dirty&8192&&s(4,O=J+("/images/dog_"+(c?"stand.gif":"boing.gif"))),n.$$.dirty&2&&s(15,f=r?-70:50),n.$$.dirty&36864&&S.set(l+f),n.$$.dirty&16384&&j.set(t)},[M,r,d,y,O,x,S,j,_,B,I,F,l,c,t,f,i,o]}class mt extends nt{constructor(e){super(e),lt(this,e,jt,Ye,ot,{dogVisible:0}),U("SvelteRegisterComponent",{component:this,tagName:"Doggo",options:e,id:Ye.name})}get dogVisible(){throw new Error("<Doggo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set dogVisible(e){throw new Error("<Doggo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}let Pe;Pe=window.matchMedia("(min-width: 1280px)");const xe=ke(Pe&&!Pe.matches),_e=ke(!1),Ve=ke(!1);Pe.addEventListener("change",n=>{xe&&xe.set(!n.matches)});{const n=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA","Space"],e=[];window.onkeyup=s=>{if(e.push(s.code),e.length>n.length&&e.shift(),e.length==n.length){let l=!0;for(let t=0;t<n.length;t++)if(n[t]!==e[t]){l=!1;break}l&&Ve.set(!0)}s.code=="KeyD"&&_e.set(!0)}}const $="src/routes/+page.svelte";function st(n,e,s){const l=n.slice();return l[11]=e[s],l}function Yt(n,e,s){const l=n.slice();return l[8]=e[s],l}function gt(n){let e,s,l,t,o,i,c,r,f,d,y,x,V=n[3]("home.banner.we-have-over")+"",R,N,v,M,S=n[3]("home.banner.mods")+"",j,O,F,D,_=n[3]("home.banner.most-are-compatible")+"",T,B,I,W,m=n[3]("home.banner.take-a-look")+"",k;function te(L,Y){return L[5].fetching||L[5].error?$t:bt}let le=te(n),P=le(n);const Q={c:function(){e=g("a"),s=g("div"),l=g("div"),t=g("div"),o=C(),i=g("div"),c=g("img"),f=C(),d=g("div"),y=g("div"),x=g("div"),R=H(V),N=C(),v=g("span"),P.c(),M=C(),j=H(S),O=H("!"),F=C(),D=g("div"),T=H(_),B=C(),I=g("div"),W=g("button"),k=H(m),this.h()},l:function(Y){e=p(Y,"A",{href:!0,class:!0});var K=w(e);s=p(K,"DIV",{class:!0});var z=w(s);l=p(z,"DIV",{class:!0});var X=w(l);t=p(X,"DIV",{class:!0}),w(t).forEach(h),o=A(X),i=p(X,"DIV",{class:!0});var fe=w(i);c=p(fe,"IMG",{class:!0,src:!0,alt:!0}),fe.forEach(h),f=A(X),d=p(X,"DIV",{class:!0});var $e=w(d);y=p($e,"DIV",{});var ue=w(y);x=p(ue,"DIV",{class:!0});var q=w(x);R=Z(q,V),N=A(q),v=p(q,"SPAN",{class:!0});var ve=w(v);P.l(ve),ve.forEach(h),M=A(q),j=Z(q,S),O=Z(q,"!"),q.forEach(h),F=A(ue),D=p(ue,"DIV",{class:!0});var oe=w(D);T=Z(oe,_),oe.forEach(h),ue.forEach(h),$e.forEach(h),B=A(X),I=p(X,"DIV",{class:!0});var we=w(I);W=p(we,"BUTTON",{class:!0,style:!0});var ye=w(W);k=Z(ye,m),ye.forEach(h),we.forEach(h),X.forEach(h),z.forEach(h),K.forEach(h),this.h()},h:function(){a(t,"class","smm-banner banner s-y_bCXRrkrYfP"),b(t,$,63,12,2711),a(c,"class","h-full"),ne(c.src,r=J+"/images/mods_mobile.webp")||a(c,"src",r),a(c,"alt","Ficsit Minion"),b(c,$,65,14,2856),a(i,"class","absolute top-0 flex h-full w-full items-center justify-end text-center"),b(i,$,64,12,2757),a(v,"class","font-bold text-amber-600"),b(v,$,71,18,3164),a(x,"class","text-md"),b(x,$,69,16,3073),a(D,"class","text-md max-w-prose"),b(D,$,80,16,3498),b(y,$,68,14,3051),a(d,"class","absolute top-0 flex h-4/5 w-full items-center pl-8"),b(d,$,67,12,2972),a(W,"class","btn h-1/4 w-full px-14 py-3"),ie(W,"background","#5a7b78"),ie(W,"color","white"),b(W,$,84,14,3716),a(I,"class","absolute top-0 flex h-full w-full items-end justify-center"),b(I,$,83,12,3629),a(l,"class","relative h-full w-full"),b(l,$,62,10,2662),a(s,"class","card h-full"),b(s,$,61,8,2626),a(e,"href","/mods"),a(e,"class","overflow-hidden"),b(e,$,60,6,2577)},m:function(Y,K){G(Y,e,K),u(e,s),u(s,l),u(l,t),u(l,o),u(l,i),u(i,c),u(l,f),u(l,d),u(d,y),u(y,x),u(x,R),u(x,N),u(x,v),P.m(v,null),u(x,M),u(x,j),u(x,O),u(y,F),u(y,D),u(D,T),u(l,B),u(l,I),u(I,W),u(W,k)},p:function(Y,K){K&8&&V!==(V=Y[3]("home.banner.we-have-over")+"")&&ce(R,V),le===(le=te(Y))&&P?P.p(Y,K):(P.d(1),P=le(Y),P&&(P.c(),P.m(v,null))),K&8&&S!==(S=Y[3]("home.banner.mods")+"")&&ce(j,S),K&8&&_!==(_=Y[3]("home.banner.most-are-compatible")+"")&&ce(T,_),K&8&&m!==(m=Y[3]("home.banner.take-a-look")+"")&&ce(k,m)},d:function(Y){Y&&h(e),P.d()}};return U("SvelteRegisterBlock",{block:Q,id:gt.name,type:"else",source:"(54:4) {:else}",ctx:n}),Q}function pt(n){let e,s,l,t,o,i,c,r,f,d=n[3]("home.satisfactory-mod-manager")+"",y,x,V,R,N,v,M,S,j;function O(m,k){return m[2]?wt:vt}let F=O(n),D=F(n),_=(n[2]||n[4])&&Le(n);function T(m,k){return m[2]?xt:yt}let B=T(n),I=B(n);const W={c:function(){e=g("a"),s=g("div"),l=g("div"),t=g("div"),o=C(),i=g("div"),D.c(),c=C(),r=g("div"),f=g("div"),y=H(d),x=C(),V=g("div"),R=H(`Windows - Linux - Epic - Steam
                  `),_&&_.c(),N=C(),v=g("div"),M=g("img"),j=C(),I.c(),this.h()},l:function(k){e=p(k,"A",{href:!0,rel:!0,target:!0});var te=w(e);s=p(te,"DIV",{class:!0});var le=w(s);l=p(le,"DIV",{class:!0});var P=w(l);t=p(P,"DIV",{class:!0}),w(t).forEach(h),o=A(P),i=p(P,"DIV",{class:!0});var Q=w(i);D.l(Q),c=A(Q),r=p(Q,"DIV",{class:!0});var L=w(r);f=p(L,"DIV",{class:!0});var Y=w(f);y=Z(Y,d),Y.forEach(h),x=A(L),V=p(L,"DIV",{class:!0});var K=w(V);R=Z(K,`Windows - Linux - Epic - Steam
                  `),_&&_.l(K),K.forEach(h),N=A(L),v=p(L,"DIV",{class:!0});var z=w(v);M=p(z,"IMG",{class:!0,src:!0,alt:!0}),z.forEach(h),L.forEach(h),j=A(Q),I.l(Q),Q.forEach(h),P.forEach(h),le.forEach(h),te.forEach(h),this.h()},h:function(){a(t,"class","banner smm-banner s-y_bCXRrkrYfP"),b(t,$,31,12,1053),a(f,"class","mb-2 text-4xl"),b(f,$,40,16,1626),a(V,"class","mb-4 text-xl"),b(V,$,41,16,1713),a(M,"class","h-full"),ne(M.src,S=J+"/images/smm_icon_white.webp")||a(M,"src",S),a(M,"alt","Satisfactory Mod Manager"),b(M,$,46,18,1967),a(v,"class","flex h-1/3 justify-center 2xl:h-1/2"),b(v,$,45,16,1899),a(r,"class","text-center"),b(r,$,39,14,1584),a(i,"class","absolute top-0 flex h-full w-full items-center justify-center"),b(i,$,32,12,1099),a(l,"class","relative h-full w-full"),b(l,$,30,10,1004),a(s,"class","card h-full"),b(s,$,29,8,968),a(e,"href","https://smm.ficsit.app"),a(e,"rel","noopener"),a(e,"target","_blank"),b(e,$,28,6,895)},m:function(k,te){G(k,e,te),u(e,s),u(s,l),u(l,t),u(l,o),u(l,i),D.m(i,null),u(i,c),u(i,r),u(r,f),u(f,y),u(r,x),u(r,V),u(V,R),_&&_.m(V,null),u(r,N),u(r,v),u(v,M),u(i,j),I.m(i,null)},p:function(k,te){F!==(F=O(k))&&(D.d(1),D=F(k),D&&(D.c(),D.m(i,c))),te&8&&d!==(d=k[3]("home.satisfactory-mod-manager")+"")&&ce(y,d),k[2]||k[4]?_||(_=Le(k),_.c(),_.m(V,null)):_&&(_.d(1),_=null),B!==(B=T(k))&&(I.d(1),I=B(k),I&&(I.c(),I.m(i,null)))},d:function(k){k&&h(e),D.d(),_&&_.d(),I.d()}};return U("SvelteRegisterBlock",{block:W,id:pt.name,type:"if",source:"(22:4) {#if !$onMobile}",ctx:n}),W}function bt(n){let e=n[5].data.getMods.count+"",s;const l={c:function(){s=H(e)},l:function(o){s=Z(o,e)},m:function(o,i){G(o,s,i)},p:function(o,i){i&32&&e!==(e=o[5].data.getMods.count+"")&&ce(s,e)},d:function(o){o&&h(s)}};return U("SvelteRegisterBlock",{block:l,id:bt.name,type:"else",source:"(69:20) {:else}",ctx:n}),l}function $t(n){let e;const s={c:function(){e=H("...")},l:function(t){e=Z(t,"...")},m:function(t,o){G(t,e,o)},p:he,d:function(t){t&&h(e)}};return U("SvelteRegisterBlock",{block:s,id:$t.name,type:"if",source:"(67:20) {#if $mods.fetching || $mods.error}",ctx:n}),s}function vt(n){let e,s;const l={c:function(){e=g("img"),this.h()},l:function(o){e=p(o,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){a(e,"class","flipped h-full s-y_bCXRrkrYfP"),ne(e.src,s=J+"/images/smm_hand.webp")||a(e,"src",s),a(e,"alt","Ficsit Minion"),b(e,$,37,16,1460)},m:function(o,i){G(o,e,i)},d:function(o){o&&h(e)}};return U("SvelteRegisterBlock",{block:l,id:vt.name,type:"else",source:"(31:14) {:else}",ctx:n}),l}function wt(n){let e,s,l,t,o;const i={c:function(){e=g("img"),l=C(),t=g("img"),this.h()},l:function(r){e=p(r,"IMG",{class:!0,src:!0,alt:!0}),l=A(r),t=p(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){a(e,"class","flipper-1 h-full s-y_bCXRrkrYfP"),ne(e.src,s=J+"/images/smm_hand.webp")||a(e,"src",s),a(e,"alt","Ficsit Minion"),b(e,$,34,16,1222),a(t,"class","flipper-2 h-full s-y_bCXRrkrYfP"),ne(t.src,o=J+"/images/smm_hand.webp")||a(t,"src",o),a(t,"alt","Ficsit Minion"),b(t,$,35,16,1330)},m:function(r,f){G(r,e,f),G(r,l,f),G(r,t,f)},d:function(r){r&&(h(e),h(l),h(t))}};return U("SvelteRegisterBlock",{block:i,id:wt.name,type:"if",source:"(28:14) {#if $easterEgg}",ctx:n}),i}function Le(n){let e=" - Doggo",s;const l={c:function(){s=H(e)},l:function(o){s=Z(o,e)},m:function(o,i){G(o,s,i)},d:function(o){o&&h(s)}};return U("SvelteRegisterBlock",{block:l,id:Le.name,type:"if",source:"(38:18) {#if $easterEgg || $doggoNeedsPats}",ctx:n}),l}function yt(n){let e,s;const l={c:function(){e=g("img"),this.h()},l:function(o){e=p(o,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){a(e,"class","h-full"),ne(e.src,s=J+"/images/smm_hand.webp")||a(e,"src",s),a(e,"alt","Ficsit Minion"),b(e,$,53,16,2395)},m:function(o,i){G(o,e,i)},d:function(o){o&&h(e)}};return U("SvelteRegisterBlock",{block:l,id:yt.name,type:"else",source:"(47:14) {:else}",ctx:n}),l}function xt(n){let e,s,l,t,o;const i={c:function(){e=g("img"),l=C(),t=g("img"),this.h()},l:function(r){e=p(r,"IMG",{class:!0,src:!0,alt:!0}),l=A(r),t=p(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){a(e,"class","flipper-3 h-full s-y_bCXRrkrYfP"),ne(e.src,s=J+"/images/smm_hand.webp")||a(e,"src",s),a(e,"alt","Ficsit Minion"),b(e,$,50,16,2157),a(t,"class","flipper-4 h-full s-y_bCXRrkrYfP"),ne(t.src,o=J+"/images/smm_hand.webp")||a(t,"src",o),a(t,"alt","Ficsit Minion"),b(t,$,51,16,2265)},m:function(r,f){G(r,e,f),G(r,l,f),G(r,t,f)},d:function(r){r&&(h(e),h(l),h(t))}};return U("SvelteRegisterBlock",{block:i,id:xt.name,type:"if",source:"(44:14) {#if $easterEgg}",ctx:n}),i}function _t(n){let e,s,l=Ae(n[5].data.getMods.mods),t=[];for(let c=0;c<l.length;c+=1)t[c]=Xe(st(n,l,c));const o=c=>de(t[c],1,1,()=>{t[c]=null}),i={c:function(){e=g("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l:function(r){e=p(r,"DIV",{class:!0});var f=w(e);for(let d=0;d<t.length;d+=1)t[d].l(f);f.forEach(h),this.h()},h:function(){a(e,"class","grid "+Ne+" gap-4 s-y_bCXRrkrYfP"),b(e,$,135,4,5678)},m:function(r,f){G(r,e,f);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(e,null);s=!0},p:function(r,f){if(f&32){l=Ae(r[5].data.getMods.mods);let d;for(d=0;d<l.length;d+=1){const y=st(r,l,d);t[d]?(t[d].p(y,f),ae(t[d],1)):(t[d]=Xe(y),t[d].c(),ae(t[d],1),t[d].m(e,null))}for(at(),d=l.length;d<t.length;d+=1)o(d);ct()}},i:function(r){if(!s){for(let f=0;f<l.length;f+=1)ae(t[f]);s=!0}},o:function(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)de(t[f]);s=!1},d:function(r){r&&h(e),ft(t,r)}};return U("SvelteRegisterBlock",{block:i,id:_t.name,type:"else",source:"(129:2) {:else}",ctx:n}),i}function kt(n){let e,s=n[3]("error.oh-no")+"",l,t,o=n[5].error.message+"",i;const c={c:function(){e=g("p"),l=H(s),t=C(),i=H(o),this.h()},l:function(f){e=p(f,"P",{});var d=w(e);l=Z(d,s),t=A(d),i=Z(d,o),d.forEach(h),this.h()},h:function(){b(e,$,133,4,5615)},m:function(f,d){G(f,e,d),u(e,l),u(e,t),u(e,i)},p:function(f,d){d&8&&s!==(s=f[3]("error.oh-no")+"")&&ce(l,s),d&32&&o!==(o=f[5].error.message+"")&&ce(i,o)},i:he,o:he,d:function(f){f&&h(e)}};return U("SvelteRegisterBlock",{block:c,id:kt.name,type:"if",source:"(127:24) ",ctx:n}),c}function Et(n){let e,s,l=Ae(Array(4)),t=[];for(let i=0;i<l.length;i+=1)t[i]=Vt(Yt(n,l,i));const o={c:function(){e=g("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l:function(c){e=p(c,"DIV",{class:!0});var r=w(e);for(let f=0;f<t.length;f+=1)t[f].l(r);r.forEach(h),this.h()},h:function(){a(e,"class","grid "+Ne+" gap-4 s-y_bCXRrkrYfP"),b(e,$,127,4,5466)},m:function(c,r){G(c,e,r);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);s=!0},p:he,i:function(c){if(!s){for(let r=0;r<l.length;r+=1)ae(t[r]);s=!0}},o:function(c){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)de(t[r]);s=!1},d:function(c){c&&h(e),ft(t,c)}};return U("SvelteRegisterBlock",{block:o,id:Et.name,type:"if",source:"(121:2) {#if $mods.fetching}",ctx:n}),o}function Xe(n){let e,s;e=new ht({props:{mod:n[11]},$$inline:!0});const l={c:function(){De(e.$$.fragment)},l:function(o){Ie(e.$$.fragment,o)},m:function(o,i){Re(e,o,i),s=!0},p:function(o,i){const c={};i&32&&(c.mod=o[11]),e.$set(c)},i:function(o){s||(ae(e.$$.fragment,o),s=!0)},o:function(o){de(e.$$.fragment,o),s=!1},d:function(o){Me(e,o)}};return U("SvelteRegisterBlock",{block:l,id:Xe.name,type:"each",source:"(131:6) {#each $mods.data.getMods.mods as mod}",ctx:n}),l}function Vt(n){let e,s;e=new dt({props:{fake:!0},$$inline:!0});const l={c:function(){De(e.$$.fragment)},l:function(o){Ie(e.$$.fragment,o)},m:function(o,i){Re(e,o,i),s=!0},p:he,i:function(o){s||(ae(e.$$.fragment,o),s=!0)},o:function(o){de(e.$$.fragment,o),s=!1},d:function(o){Me(e,o)}};return U("SvelteRegisterBlock",{block:l,id:Vt.name,type:"each",source:"(123:6) {#each Array(4) as _}",ctx:n}),l}function Ge(n){let e,s,l,t,o,i,c,r,f,d,y,x,V,R,N,v,M,S,j,O=n[3]("home.banner.community-run-discord")+"",F,D,_,T,B,I,W,m,k,te,le,P,Q,L=n[3]("home.banner.official-website")+"",Y,K,z,X,fe;e=new ut({props:{description:"Satisfactory Mod Repository",title:"Home"},$$inline:!0}),l=new mt({props:{dogVisible:_e},$$inline:!0});function $e(se,E){return se[1]?gt:pt}let ue=$e(n),q=ue(n);const ve=[Et,kt,_t],oe=[];function we(se,E){return se[5].fetching?0:se[5].error?1:2}z=we(n),X=oe[z]=ve[z](n);const ye={c:function(){De(e.$$.fragment),s=C(),De(l.$$.fragment),t=C(),o=g("div"),i=g("div"),q.c(),c=C(),r=g("div"),f=g("a"),d=g("div"),y=g("div"),x=g("div"),V=C(),R=g("div"),N=g("img"),M=C(),S=g("div"),j=g("span"),F=H(O),D=C(),_=g("a"),T=g("div"),B=g("div"),I=g("div"),W=C(),m=g("div"),k=g("img"),le=C(),P=g("div"),Q=g("span"),Y=H(L),K=C(),X.c(),this.h()},l:function(E){const ee=Rt("svelte-uhqw2p",document.head);Ie(e.$$.fragment,ee),ee.forEach(h),s=A(E),Ie(l.$$.fragment,E),t=A(E),o=p(E,"DIV",{class:!0,style:!0});var re=w(o);i=p(re,"DIV",{class:!0});var Fe=w(i);q.l(Fe),Fe.forEach(h),c=A(re),r=p(re,"DIV",{class:!0});var Ee=w(r);f=p(Ee,"A",{href:!0,rel:!0,target:!0,class:!0});var Oe=w(f);d=p(Oe,"DIV",{class:!0});var qe=w(d);y=p(qe,"DIV",{class:!0});var ge=w(y);x=p(ge,"DIV",{class:!0}),w(x).forEach(h),V=A(ge),R=p(ge,"DIV",{class:!0});var Ue=w(R);N=p(Ue,"IMG",{class:!0,src:!0,alt:!0}),Ue.forEach(h),M=A(ge),S=p(ge,"DIV",{class:!0});var Te=w(S);j=p(Te,"SPAN",{});var We=w(j);F=Z(We,O),We.forEach(h),Te.forEach(h),ge.forEach(h),qe.forEach(h),Oe.forEach(h),D=A(Ee),_=p(Ee,"A",{href:!0,rel:!0,target:!0,class:!0});var Ke=w(_);T=p(Ke,"DIV",{class:!0});var ze=w(T);B=p(ze,"DIV",{class:!0});var pe=w(B);I=p(pe,"DIV",{class:!0}),w(I).forEach(h),W=A(pe),m=p(pe,"DIV",{class:!0});var Qe=w(m);k=p(Qe,"IMG",{class:!0,src:!0,alt:!0}),Qe.forEach(h),le=A(pe),P=p(pe,"DIV",{class:!0});var Je=w(P);Q=p(Je,"SPAN",{});var He=w(Q);Y=Z(He,L),He.forEach(h),Je.forEach(h),pe.forEach(h),ze.forEach(h),Ke.forEach(h),Ee.forEach(h),K=A(re),X.l(re),re.forEach(h),this.h()},h:function(){a(i,"class","mb-4 min-h-[25vh] overflow-hidden"),b(i,$,26,2,820),a(x,"class","modding-banner banner s-y_bCXRrkrYfP"),b(x,$,98,10,4220),a(N,"class","centered-logo s-y_bCXRrkrYfP"),ne(N.src,v=J+"/images/sf_modding_logo.webp")||a(N,"src",v),a(N,"alt","Satisfactory Modding Logo"),b(N,$,100,12,4356),a(R,"class","absolute top-0 flex h-full w-full items-center justify-center"),b(R,$,99,10,4268),b(j,$,103,12,4591),a(S,"class","absolute bottom-0 w-full px-4 pb-4 text-center text-gray-400 xl:text-left"),b(S,$,102,10,4491),a(y,"class","relative h-full w-full"),b(y,$,97,8,4173),a(d,"class","card h-full"),b(d,$,96,6,4139),a(f,"href","https://discord.gg/xkVJ73E"),a(f,"rel","noopener"),a(f,"target","_blank"),a(f,"class","min-h-[25vh] overflow-hidden"),b(f,$,95,4,4027),a(I,"class","css-banner banner s-y_bCXRrkrYfP"),b(I,$,111,10,4904),a(k,"class","centered-logo s-y_bCXRrkrYfP"),ne(k.src,te=J+"/images/satisfactory_logo_full_color_small.webp")||a(k,"src",te),a(k,"alt","Satisfactory Logo"),b(k,$,113,12,5036),a(m,"class","absolute top-0 flex h-full w-full items-center justify-center"),b(m,$,112,10,4948),b(Q,$,119,12,5325),a(P,"class","absolute bottom-0 w-full px-4 pb-4 text-center text-gray-300 xl:text-right"),b(P,$,118,10,5224),a(B,"class","relative h-full w-full"),b(B,$,110,8,4857),a(T,"class","card h-full"),b(T,$,109,6,4823),a(_,"href","https://www.satisfactorygame.com/"),a(_,"rel","noopener"),a(_,"target","_blank"),a(_,"class","min-h-[25vh] overflow-hidden"),b(_,$,108,4,4704),a(r,"class","mb-4 grid flex-1 grid-cols-1 gap-4 xl:grid-cols-2"),b(r,$,94,2,3959),a(o,"class","flex min-h-full flex-col"),ie(o,"height","calc(100vh - 64px - 3rem)"),b(o,$,25,0,737)},m:function(E,ee){Re(e,document.head,null),G(E,s,ee),Re(l,E,ee),G(E,t,ee),G(E,o,ee),u(o,i),q.m(i,null),u(o,c),u(o,r),u(r,f),u(f,d),u(d,y),u(y,x),u(y,V),u(y,R),u(R,N),u(y,M),u(y,S),u(S,j),u(j,F),u(r,D),u(r,_),u(_,T),u(T,B),u(B,I),u(B,W),u(B,m),u(m,k),u(B,le),u(B,P),u(P,Q),u(Q,Y),u(o,K),oe[z].m(o,null),fe=!0},p:function(E,[ee]){ue===(ue=$e(E))&&q?q.p(E,ee):(q.d(1),q=ue(E),q&&(q.c(),q.m(i,null))),(!fe||ee&8)&&O!==(O=E[3]("home.banner.community-run-discord")+"")&&ce(F,O),(!fe||ee&8)&&L!==(L=E[3]("home.banner.official-website")+"")&&ce(Y,L);let re=z;z=we(E),z===re?oe[z].p(E,ee):(at(),de(oe[re],1,1,()=>{oe[re]=null}),ct(),X=oe[z],X?X.p(E,ee):(X=oe[z]=ve[z](E),X.c()),ae(X,1),X.m(o,null))},i:function(E){fe||(ae(e.$$.fragment,E),ae(l.$$.fragment,E),ae(X),fe=!0)},o:function(E){de(e.$$.fragment,E),de(l.$$.fragment,E),de(X),fe=!1},d:function(E){E&&(h(s),h(t),h(o)),Me(e),Me(l,E),q.d(),oe[z].d()}};return U("SvelteRegisterBlock",{block:ye,id:Ge.name,type:"component",source:"",ctx:n}),ye}const Ne="3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1";function Lt(n,e,s){let l,t,o,i=he,c=()=>(i(),i=rt(R,v=>s(3,o=v)),R),r,f;me(xe,"onMobile"),be(n,xe,v=>s(1,l=v)),me(Ve,"easterEgg"),be(n,Ve,v=>s(2,t=v)),me(_e,"doggoNeedsPats"),be(n,_e,v=>s(4,r=v)),n.$$.on_destroy.push(()=>i());let{$$slots:d={},$$scope:y}=e;it("Page",d,[]);let{data:x}=e;const{mods:V}=x;me(V,"mods"),be(n,V,v=>s(5,f=v));const{t:R}=tt();me(R,"t"),c(),n.$$.on_mount.push(function(){x===void 0&&!("data"in e||n.$$.bound[n.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const N=["data"];return Object.keys(e).forEach(v=>{!~N.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&console.warn(`<Page> was created with unknown prop '${v}'`)}),n.$$set=v=>{"data"in v&&s(7,x=v.data)},n.$capture_state=()=>({MetaDescriptors:ut,FicsitCard:dt,ModCard:ht,Doggo:mt,assets:J,onMobile:xe,easterEgg:Ve,doggoNeedsPats:_e,getTranslate:tt,data:x,mods:V,t:R,gridClasses:Ne,$onMobile:l,$easterEgg:t,$t:o,$doggoNeedsPats:r,$mods:f}),n.$inject_state=v=>{"data"in v&&s(7,x=v.data)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[R,l,t,o,r,f,V,x]}class Tt extends nt{constructor(e){super(e),lt(this,e,Lt,Ge,ot,{data:7,t:0}),U("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Ge.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Tt as component,Ut as universal};
//# sourceMappingURL=2.T36QoR9y.js.map
