import{S as z,i as A,d as j,Z as D,s as F,e as $,af as k,h as v,j as g,ag as x,k as h,n as b,p as m,ad as y,ah as P,f as S,g as Z,l as B,x as q,v as G}from"./chunks/vendor-71586dff.js";const{Error:E}=D,R=".svelte-kit/runtime/components/error.svelte";function N(r){let t,o=r[1].frame+"",a;const p={c:function(){t=$("pre"),a=k(o),this.h()},l:function(s){t=v(s,"PRE",{});var c=g(t);a=x(c,o),c.forEach(h),this.h()},h:function(){b(t,R,24,1,537)},m:function(s,c){m(s,t,c),y(t,a)},p:function(s,c){c&2&&o!==(o=s[1].frame+"")&&P(a,o)},d:function(s){s&&h(t)}};return j("SvelteRegisterBlock",{block:p,id:N.name,type:"if",source:"(24:0) {#if error.frame}",ctx:r}),p}function _(r){let t,o=r[1].stack+"",a;const p={c:function(){t=$("pre"),a=k(o),this.h()},l:function(s){t=v(s,"PRE",{});var c=g(t);a=x(c,o),c.forEach(h),this.h()},h:function(){b(t,R,27,1,587)},m:function(s,c){m(s,t,c),y(t,a)},p:function(s,c){c&2&&o!==(o=s[1].stack+"")&&P(a,o)},d:function(s){s&&h(t)}};return j("SvelteRegisterBlock",{block:p,id:_.name,type:"if",source:"(27:0) {#if error.stack}",ctx:r}),p}function O(r){let t,o,a,p,n=r[1].message+"",s,c,i,d,f=r[1].frame&&N(r),l=r[1].stack&&_(r);const C={c:function(){t=$("h1"),o=k(r[0]),a=S(),p=$("pre"),s=k(n),c=S(),f&&f.c(),i=S(),l&&l.c(),d=Z(),this.h()},l:function(e){t=v(e,"H1",{});var u=g(t);o=x(u,r[0]),u.forEach(h),a=B(e),p=v(e,"PRE",{});var H=g(p);s=x(H,n),H.forEach(h),c=B(e),f&&f.l(e),i=B(e),l&&l.l(e),d=Z(),this.h()},h:function(){b(t,R,17,0,313),b(p,R,19,0,332)},m:function(e,u){m(e,t,u),y(t,o),m(e,a,u),m(e,p,u),y(p,s),m(e,c,u),f&&f.m(e,u),m(e,i,u),l&&l.m(e,u),m(e,d,u)},p:function(e,[u]){u&1&&P(o,e[0]),u&2&&n!==(n=e[1].message+"")&&P(s,n),e[1].frame?f?f.p(e,u):(f=N(e),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),e[1].stack?l?l.p(e,u):(l=_(e),l.c(),l.m(d.parentNode,d)):l&&(l.d(1),l=null)},i:q,o:q,d:function(e){e&&h(t),e&&h(a),e&&h(p),e&&h(c),f&&f.d(e),e&&h(i),l&&l.d(e),e&&h(d)}};return j("SvelteRegisterBlock",{block:C,id:O.name,type:"component",source:"",ctx:r}),C}function I({error:r,status:t}){return{props:{error:r,status:t}}}function J(r,t,o){let{$$slots:a={},$$scope:p}=t;G("Error",a,[]);let{status:n}=t,{error:s}=t;const c=["status","error"];return Object.keys(t).forEach(i=>{!~c.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Error> was created with unknown prop '${i}'`)}),r.$$set=i=>{"status"in i&&o(0,n=i.status),"error"in i&&o(1,s=i.error)},r.$capture_state=()=>({load:I,status:n,error:s}),r.$inject_state=i=>{"status"in i&&o(0,n=i.status),"error"in i&&o(1,s=i.error)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),[n,s]}class L extends z{constructor(t){super(t),A(this,t,J,O,F,{status:0,error:1}),j("SvelteRegisterComponent",{component:this,tagName:"Error",options:t,id:O.name});const{ctx:o}=this.$$,a=t.props||{};o[0]===void 0&&!("status"in a)&&console.warn("<Error> was created without expected prop 'status'"),o[1]===void 0&&!("error"in a)&&console.warn("<Error> was created without expected prop 'error'")}get status(){throw new E("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set status(t){throw new E("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get error(){throw new E("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set error(t){throw new E("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{L as default,I as load};
//# sourceMappingURL=error.svelte-39ea9615.js.map
