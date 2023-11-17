import{S as _,i as j,s as P,d as C,H as w,v as S,ac as x,J as N,L as R,O,r as A,t as B,R as F,e as p,W as D,g as f,h as y,M as H,X as I,j as g,N as G,m,n as J,Q as $,Y as L}from"./vendor.86b49dff.js";import{F as k}from"./FicsitCard.fdfea907.js";import{a as v}from"./formatting.c598e8b5.js";const h="src/lib/components/guides/GuideCard.svelte";function E(s){let e,i,r,a="visibility",t=v(s[0].views)+"",n;const c={c:function(){e=p("div"),i=p("span"),r=p("span"),r.textContent=a,n=D(t),this.h()},l:function(l){e=f(l,"DIV",{slot:!0});var u=y(e);i=f(u,"SPAN",{});var d=y(i);r=f(d,"SPAN",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-139kimw"&&(r.textContent=a),n=I(d,t),d.forEach(g),u.forEach(g),this.h()},h:function(){G(r,"class","material-icons align-middle text-sm"),m(r,h,12,10,406),m(i,h,12,4,400),G(e,"slot","stats"),m(e,h,11,2,377)},m:function(l,u){J(l,e,u),$(e,i),$(i,r),$(i,n)},p:function(l,u){u&1&&t!==(t=v(l[0].views)+"")&&L(n,t)},d:function(l){l&&g(e)}};return C("SvelteRegisterBlock",{block:c,id:E.name,type:"slot",source:"(9:2) ",ctx:s}),c}function b(s){let e,i;e=new k({props:{name:s[0].name,logo:s[1],description:s[0].short_description,link:w+`/guide/${s[0].id}`,$$slots:{stats:[E]},$$scope:{ctx:s}},$$inline:!0});const r={c:function(){N(e.$$.fragment)},l:function(t){R(e.$$.fragment,t)},m:function(t,n){O(e,t,n),i=!0},p:function(t,[n]){const c={};n&1&&(c.name=t[0].name),n&2&&(c.logo=t[1]),n&1&&(c.description=t[0].short_description),n&1&&(c.link=w+`/guide/${t[0].id}`),n&5&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i:function(t){i||(A(e.$$.fragment,t),i=!0)},o:function(t){B(e.$$.fragment,t),i=!1},d:function(t){F(e,t)}};return C("SvelteRegisterBlock",{block:r,id:b.name,type:"component",source:"",ctx:s}),r}function M(s,e,i){let{$$slots:r={},$$scope:a}=e;S("GuideCard",r,[]);let{guide:t}=e,{logo:n=x+"/images/no_image.webp"}=e;s.$$.on_mount.push(function(){t===void 0&&!("guide"in e||s.$$.bound[s.$$.props.guide])&&console.warn("<GuideCard> was created without expected prop 'guide'")});const c=["guide","logo"];return Object.keys(e).forEach(o=>{!~c.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<GuideCard> was created with unknown prop '${o}'`)}),s.$$set=o=>{"guide"in o&&i(0,t=o.guide),"logo"in o&&i(1,n=o.logo)},s.$capture_state=()=>({assets:x,base:w,FicsitCard:k,prettyNumber:v,guide:t,logo:n}),s.$inject_state=o=>{"guide"in o&&i(0,t=o.guide),"logo"in o&&i(1,n=o.logo)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),[t,n]}class X extends _{constructor(e){super(e),j(this,e,M,b,P,{guide:0,logo:1}),C("SvelteRegisterComponent",{component:this,tagName:"GuideCard",options:e,id:b.name})}get guide(){throw new Error("<GuideCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set guide(e){throw new Error("<GuideCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<GuideCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(e){throw new Error("<GuideCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{X as G};
//# sourceMappingURL=GuideCard.50d11653.js.map
