import{S as ye,i as Ce,s as Ee,d as C,bo as fe,v as Se,bm as K,bp as ue,bS as de,b8 as me,b1 as pe,aN as U,aZ as ne,w as Q,a8 as A,ab as _,ae as H,p as x,t as B,aj as Z,x as E,a6 as j,y as S,z as V,q as $,a9 as L,ac as w,C as F,b2 as O,l as y,ad as v,af as se,E as G,F as T,G as q,J as Fe,L as z,N as J,O as ie,k as M,m as Ne,n as Be,bj as oe,P as Pe}from"./vendor.29fd6bc5.js";const N="src/lib/components/general/FicsitCard.svelte",Re=s=>({}),ce=s=>({}),Ve=s=>({}),re=s=>({}),De=s=>({}),ae=s=>({}),Ie=s=>({}),le=s=>({});function $e(s){let e,t,o;const r={c:function(){e=E("img"),this.h()},l:function(a){e=S(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){oe(e.src,t=s[4])||w(e,"src",t),w(e,"alt",o=s[3]+" Logo"),w(e,"class","logo max-w-full max-h-full s-ZL2maQw1Napu"),F(e,N,40,8,1341)},m:function(a,f){y(a,e,f)},p:function(a,f){f&16&&!oe(e.src,t=a[4])&&w(e,"src",t),f&8&&o!==(o=a[3]+" Logo")&&w(e,"alt",o)},d:function(a){a&&$(e)}};return C("SvelteRegisterBlock",{block:r,id:$e.name,type:"else",source:"(40:6) {:else}",ctx:s}),r}function he(s){let e;const t={c:function(){e=E("div"),this.h()},l:function(r){e=S(r,"DIV",{class:!0}),V(e).forEach($),this.h()},h:function(){w(e,"class","bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full s-ZL2maQw1Napu"),F(e,N,38,8,1242)},m:function(r,n){y(r,e,n)},p:Pe,d:function(r){r&&$(e)}};return C("SvelteRegisterBlock",{block:t,id:he.name,type:"if",source:"(38:6) {#if fake}",ctx:s}),t}function W(s){let e,t;const o={c:function(){e=E("span"),t=z("Card stats"),this.h()},l:function(n){e=S(n,"SPAN",{class:!0});var a=V(e);t=J(a,"Card stats"),a.forEach($),this.h()},h:function(){w(e,"class","font-flow"),F(e,N,53,16,1814)},m:function(n,a){y(n,e,a),v(e,t)},d:function(n){n&&$(e)}};return C("SvelteRegisterBlock",{block:o,id:W.name,type:"if",source:"(53:14) {#if fake}",ctx:s}),o}function ge(s){let e,t=s[1]&&W(s);const o={c:function(){t&&t.c(),e=M()},l:function(n){t&&t.l(n),e=M()},m:function(n,a){t&&t.m(n,a),y(n,e,a)},p:function(n,a){n[1]?t||(t=W(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d:function(n){t&&t.d(n),n&&$(e)}};return C("SvelteRegisterBlock",{block:o,id:ge.name,type:"fallback",source:"(52:31)                ",ctx:s}),o}function we(s){let e,t,o,r,n,a,f,l,u,h,p;const b=s[10].stats,k=Q(b,s,s[13],le),d=k||ge(s),P=s[10].tags,m=Q(P,s,s[13],ae),I={c:function(){e=E("div"),t=E("a"),o=E("span"),r=z(s[3]),n=j(),a=E("h5"),d&&d.c(),f=j(),m&&m.c(),l=j(),u=E("div"),h=z(s[2]),this.h()},l:function(c){e=S(c,"DIV",{class:!0});var i=V(e);t=S(i,"A",{href:!0,class:!0});var D=V(t);o=S(D,"SPAN",{class:!0});var R=V(o);r=J(R,s[3]),R.forEach($),D.forEach($),n=L(i),a=S(i,"H5",{class:!0});var ee=V(a);d&&d.l(ee),ee.forEach($),f=L(i),m&&m.l(i),i.forEach($),l=L(c),u=S(c,"DIV",{class:!0});var te=V(u);h=J(te,s[2]),te.forEach($),this.h()},h:function(){w(o,"class","text-xl break-words"),F(o,N,47,12,1634),w(t,"href",s[0]),w(t,"class","text-white"),F(t,N,46,10,1587),w(a,"class","text-sm m-0"),F(a,N,50,10,1716),w(e,"class","mb-2"),F(e,N,45,8,1558),w(u,"class","break-words"),O(u,"font-flow",s[1]),F(u,N,61,8,1968)},m:function(c,i){y(c,e,i),v(e,t),v(t,o),v(o,r),v(e,n),v(e,a),d&&d.m(a,null),v(e,f),m&&m.m(e,null),y(c,l,i),y(c,u,i),v(u,h),p=!0},p:function(c,i){(!p||i&8)&&ie(r,c[3]),(!p||i&1)&&w(t,"href",c[0]),k?k.p&&(!p||i&8192)&&G(k,b,c,c[13],p?q(b,c[13],i,Ie):T(c[13]),le):d&&d.p&&(!p||i&2)&&d.p(c,p?i:-1),m&&m.p&&(!p||i&8192)&&G(m,P,c,c[13],p?q(P,c[13],i,De):T(c[13]),ae),(!p||i&4)&&ie(h,c[2]),(!p||i&2)&&O(u,"font-flow",c[1])},i:function(c){p||(x(d,c),x(m,c),p=!0)},o:function(c){B(d,c),B(m,c),p=!1},d:function(c){c&&$(e),d&&d.d(c),m&&m.d(c),c&&$(l),c&&$(u)}};return C("SvelteRegisterBlock",{block:I,id:we.name,type:"slot",source:'(45:6) <Content class=\\"flex flex-col pb-0\\">',ctx:s}),I}function X(s){let e,t,o;e=new me({props:{href:s[0],"aria-label":"View "+s[3],title:"View "+s[3],$$slots:{default:[be]},$$scope:{ctx:s}},$$inline:!0});const r=s[10].actions,n=Q(r,s,s[13],re),a={c:function(){A(e.$$.fragment),t=j(),n&&n.c()},l:function(l){_(e.$$.fragment,l),t=L(l),n&&n.l(l)},m:function(l,u){H(e,l,u),y(l,t,u),n&&n.m(l,u),o=!0},p:function(l,u){const h={};u&1&&(h.href=l[0]),u&8&&(h["aria-label"]="View "+l[3]),u&8&&(h.title="View "+l[3]),u&8192&&(h.$$scope={dirty:u,ctx:l}),e.$set(h),n&&n.p&&(!o||u&8192)&&G(n,r,l,l[13],o?q(r,l[13],u,Ve):T(l[13]),re)},i:function(l){o||(x(e.$$.fragment,l),x(n,l),o=!0)},o:function(l){B(e.$$.fragment,l),B(n,l),o=!1},d:function(l){Z(e,l),l&&$(t),n&&n.d(l)}};return C("SvelteRegisterBlock",{block:a,id:X.name,type:"if",source:"(68:8) {#if !fake}",ctx:s}),a}function ke(s){let e;const t={c:function(){e=z("info")},l:function(r){e=J(r,"info")},m:function(r,n){y(r,e,n)},d:function(r){r&&$(e)}};return C("SvelteRegisterBlock",{block:t,id:ke.name,type:"slot",source:'(70:12) <Icon class=\\"material-icons\\">',ctx:s}),t}function be(s){let e,t;e=new pe({props:{class:"material-icons",$$slots:{default:[ke]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){A(e.$$.fragment)},l:function(n){_(e.$$.fragment,n)},m:function(n,a){H(e,n,a),t=!0},p:function(n,a){const f={};a&8192&&(f.$$scope={dirty:a,ctx:n}),e.$set(f)},i:function(n){t||(x(e.$$.fragment,n),t=!0)},o:function(n){B(e.$$.fragment,n),t=!1},d:function(n){Z(e,n)}};return C("SvelteRegisterBlock",{block:o,id:be.name,type:"slot",source:'(69:10) <IconButton href={link} aria-label=\\"View {renderedName}\\" title=\\"View {renderedName}\\">',ctx:s}),o}function ve(s){let e,t,o=!s[1]&&X(s);const r={c:function(){o&&o.c(),e=M()},l:function(a){o&&o.l(a),e=M()},m:function(a,f){o&&o.m(a,f),y(a,e,f),t=!0},p:function(a,f){a[1]?o&&(Ne(),B(o,1,1,()=>{o=null}),Be()):o?(o.p(a,f),f&2&&x(o,1)):(o=X(a),o.c(),x(o,1),o.m(e.parentNode,e))},i:function(a){t||(x(o),t=!0)},o:function(a){B(o),t=!1},d:function(a){o&&o.d(a),a&&$(e)}};return C("SvelteRegisterBlock",{block:r,id:ve.name,type:"slot",source:'(67:6) <Actions class=\\"self-end\\">',ctx:s}),r}function xe(s){let e,t,o,r,n,a,f,l,u,h,p;function b(g,c){return g[1]?he:$e}let k=b(s),d=k(s);n=new ue({props:{class:"flex flex-col pb-0",$$slots:{default:[we]},$$scope:{ctx:s}},$$inline:!0}),f=new de({props:{class:"self-end",$$slots:{default:[ve]},$$scope:{ctx:s}},$$inline:!0});const P=s[10].outer,m=Q(P,s,s[13],ce),I={c:function(){e=E("div"),t=E("div"),d.c(),o=j(),r=E("div"),A(n.$$.fragment),a=j(),A(f.$$.fragment),l=j(),m&&m.c(),this.h()},l:function(c){e=S(c,"DIV",{class:!0});var i=V(e);t=S(i,"DIV",{class:!0});var D=V(t);d.l(D),D.forEach($),o=L(i),r=S(i,"DIV",{class:!0});var R=V(r);_(n.$$.fragment,R),a=L(R),_(f.$$.fragment,R),R.forEach($),i.forEach($),l=L(c),m&&m.l(c),this.h()},h:function(){w(t,"class","cursor-pointer card-image-container"),F(t,N,36,4,1108),w(r,"class","w-full flex flex-col justify-between"),F(r,N,43,4,1456),w(e,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center s-ZL2maQw1Napu"),O(e,"text-gray-500",s[1]),O(e,"font-flow",s[1]),F(e,N,32,2,961)},m:function(c,i){y(c,e,i),v(e,t),d.m(t,null),v(e,o),v(e,r),H(n,r,null),v(r,a),H(f,r,null),y(c,l,i),m&&m.m(c,i),u=!0,h||(p=[se(t,"click",s[11],!1,!1,!1,!1),se(t,"keypress",s[12],!1,!1,!1,!1)],h=!0)},p:function(c,i){k===(k=b(c))&&d?d.p(c,i):(d.d(1),d=k(c),d&&(d.c(),d.m(t,null)));const D={};i&8207&&(D.$$scope={dirty:i,ctx:c}),n.$set(D);const R={};i&8203&&(R.$$scope={dirty:i,ctx:c}),f.$set(R),(!u||i&2)&&O(e,"text-gray-500",c[1]),(!u||i&2)&&O(e,"font-flow",c[1]),m&&m.p&&(!u||i&8192)&&G(m,P,c,c[13],u?q(P,c[13],i,Re):T(c[13]),ce)},i:function(c){u||(x(n.$$.fragment,c),x(f.$$.fragment,c),x(m,c),u=!0)},o:function(c){B(n.$$.fragment,c),B(f.$$.fragment,c),B(m,c),u=!1},d:function(c){c&&$(e),d.d(),Z(n),Z(f),c&&$(l),m&&m.d(c),h=!1,Fe(p)}};return C("SvelteRegisterBlock",{block:I,id:xe.name,type:"slot",source:'(32:0) <Card class=\\"h-full overflow-hidden\\" on:mouseover={onOver} on:mouseout={onOut}>',ctx:s}),I}function Y(s){let e,t;e=new fe({props:{class:"h-full overflow-hidden",$$slots:{default:[xe]},$$scope:{ctx:s}},$$inline:!0}),e.$on("mouseover",s[5]),e.$on("mouseout",s[6]);const o={c:function(){A(e.$$.fragment)},l:function(n){_(e.$$.fragment,n)},m:function(n,a){H(e,n,a),t=!0},p:function(n,[a]){const f={};a&8223&&(f.$$scope={dirty:a,ctx:n}),e.$set(f)},i:function(n){t||(x(e.$$.fragment,n),t=!0)},o:function(n){B(e.$$.fragment,n),t=!1},d:function(n){Z(e,n)}};return C("SvelteRegisterBlock",{block:o,id:Y.name,type:"component",source:"",ctx:s}),o}function je(s,e,t){let o,r,n,{$$slots:a={},$$scope:f}=e;Se("FicsitCard",a,["stats","tags","actions","outer"]);let{name:l=""}=e,{logo:u=K+"/images/no_image.webp"}=e,{description:h=""}=e,{link:p="/"}=e,{fake:b=!1}=e,k=!1,d;const P=()=>{k||(d=setTimeout(()=>{k=!0,ne(p)},250))},m=()=>{k||clearTimeout(d)},I=["name","logo","description","link","fake"];Object.keys(e).forEach(i=>{!~I.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<FicsitCard> was created with unknown prop '${i}'`)});const g=()=>U(p),c=()=>U(p);return s.$$set=i=>{"name"in i&&t(7,l=i.name),"logo"in i&&t(8,u=i.logo),"description"in i&&t(9,h=i.description),"link"in i&&t(0,p=i.link),"fake"in i&&t(1,b=i.fake),"$$scope"in i&&t(13,f=i.$$scope)},s.$capture_state=()=>({assets:K,Card:fe,Content:ue,Actions:de,IconButton:me,Icon:pe,goto:U,preloadData:ne,name:l,logo:u,description:h,link:p,fake:b,preloaded:k,timeoutHandle:d,onOver:P,onOut:m,renderedDescription:n,renderedName:r,renderedLogo:o}),s.$inject_state=i=>{"name"in i&&t(7,l=i.name),"logo"in i&&t(8,u=i.logo),"description"in i&&t(9,h=i.description),"link"in i&&t(0,p=i.link),"fake"in i&&t(1,b=i.fake),"preloaded"in i&&(k=i.preloaded),"timeoutHandle"in i&&(d=i.timeoutHandle),"renderedDescription"in i&&t(2,n=i.renderedDescription),"renderedName"in i&&t(3,r=i.renderedName),"renderedLogo"in i&&t(4,o=i.renderedLogo)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&256&&t(4,o=u||K+"/images/no_image.webp"),s.$$.dirty&130&&t(3,r=l||b&&"Card Name"),s.$$.dirty&514&&t(2,n=h||b&&"Short card description")},[p,b,n,r,o,P,m,l,u,h,a,g,c,f]}class Oe extends ye{constructor(e){super(e),Ce(this,e,je,Y,Ee,{name:7,logo:8,description:9,link:0,fake:1}),C("SvelteRegisterComponent",{component:this,tagName:"FicsitCard",options:e,id:Y.name})}get name(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get description(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set description(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get link(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set link(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fake(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fake(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Oe as F};
//# sourceMappingURL=FicsitCard.637d3e20.js.map
