import{S as ye,i as Ee,d as O,s as ke,a1 as we,a2 as Ce,v as Pe,_ as ne,F as re,$ as oe,H as ie,a0 as Ie,J as Q,b as B,e as x,K as Ne,L as W,j as g,k as D,g as b,M as T,h as I,N as p,m as S,O as X,n as R,Q as d,t as L,q as Ve,r as _,R as Y,u as H,x as je,p as Be,a5 as le,Z as De,ab as Re,a6 as Me,W as pe,X as ge,Y as $e}from"../chunks/vendor.86b49dff.js";import{j as ce}from"../chunks/graphql.80ff4abf.js";import{o as Ue,a as Ae,b as Oe,s as Te,c as ue,v as fe,r as me,V as Z,z as Le}from"../chunks/forms.98ead485.js";import{t as de}from"../chunks/forms.aa561a11.js";import{u as K}from"../chunks/user.52eb556d.js";import{M as he}from"../chunks/MetaDescriptors.6fb401e6.js";const{console:_e}=Ie,y="src/routes/settings/+page.svelte";function ve(l){let e,s,a,i,o="Avatar:",r,n,$,c,C,h,u,m,M="Username",k,t,v,f,U,A,N,ee="Save",z,J,te;c=new Z({props:{for:"avatar",$$slots:{default:[be,({messages:w})=>({8:w}),({messages:w})=>w?256:0]},$$scope:{ctx:l}},$$inline:!0}),f=new Z({props:{for:"username",$$slots:{default:[Se,({messages:w})=>({8:w}),({messages:w})=>w?256:0]},$$scope:{ctx:l}},$$inline:!0});const ae={c:function(){e=x("form"),s=x("div"),a=x("div"),i=x("label"),i.textContent=o,r=B(),n=x("input"),$=B(),Q(c.$$.fragment),C=B(),h=x("div"),u=x("label"),m=x("span"),m.textContent=M,k=B(),t=x("input"),v=B(),Q(f.$$.fragment),U=B(),A=x("div"),N=x("button"),N.textContent=ee,this.h()},l:function(E){e=b(E,"FORM",{});var P=I(e);s=b(P,"DIV",{class:!0});var V=I(s);a=b(V,"DIV",{class:!0});var j=I(a);i=b(j,"LABEL",{for:!0,"data-svelte-h":!0}),T(i)!=="svelte-1a2u3bg"&&(i.textContent=o),r=D(j),n=b(j,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),$=D(j),W(c.$$.fragment,j),j.forEach(g),C=D(V),h=b(V,"DIV",{class:!0});var F=I(h);u=b(F,"LABEL",{class:!0});var q=I(u);m=b(q,"SPAN",{"data-svelte-h":!0}),T(m)!=="svelte-9difb2"&&(m.textContent=M),k=D(q),t=b(q,"INPUT",{type:!0,class:!0}),q.forEach(g),v=D(F),W(f.$$.fragment,F),F.forEach(g),U=D(V),A=b(V,"DIV",{});var se=I(A);N=b(se,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),T(N)!=="svelte-mdlg4p"&&(N.textContent=ee),se.forEach(g),V.forEach(g),P.forEach(g),this.h()},h:function(){p(i,"for","avatar"),S(i,y,83,12,2729),p(n,"id","avatar"),p(n,"class","base-input"),p(n,"name","avatar"),p(n,"type","file"),p(n,"accept","image/png,image/jpeg,image/gif"),p(n,"placeholder","Avatar"),S(n,y,84,12,2777),p(a,"class","grid grid-flow-row gap-2"),S(a,y,82,10,2678),S(m,y,98,14,3275),p(t,"type","text"),t.required=!0,p(t,"class","input p-2"),S(t,y,99,14,3311),p(u,"class","label"),S(u,y,97,12,3239),p(h,"class","grid grid-flow-row gap-2"),S(h,y,96,10,3188),p(N,"class","btn variant-ghost-primary"),p(N,"type","submit"),S(N,y,107,12,3628),S(A,y,106,10,3610),p(s,"class","grid grid-flow-row gap-6"),S(s,y,81,8,2629),S(e,y,80,6,2605)},m:function(E,P){R(E,e,P),d(e,s),d(s,a),d(a,i),d(a,r),d(a,n),d(a,$),X(c,a,null),d(s,C),d(s,h),d(h,u),d(u,m),d(u,k),d(u,t),le(t,l[3].username),d(h,v),X(f,h,null),d(s,U),d(s,A),d(A,N),z=!0,J||(te=[De(t,"input",l[5]),Re(l[2].call(null,e))],J=!0)},p:function(E,P){const V={};P&768&&(V.$$scope={dirty:P,ctx:E}),c.$set(V),P&8&&t.value!==E[3].username&&le(t,E[3].username);const j={};P&768&&(j.$$scope={dirty:P,ctx:E}),f.$set(j)},i:function(E){z||(_(c.$$.fragment,E),_(f.$$.fragment,E),z=!0)},o:function(E){L(c.$$.fragment,E),L(f.$$.fragment,E),z=!1},d:function(E){E&&g(e),Y(c),Y(f),J=!1,Me(te)}};return O("SvelteRegisterBlock",{block:ae,id:ve.name,type:"else",source:"(72:4) {:else}",ctx:l}),ae}function xe(l){let e,s="Please log in";const a={c:function(){e=x("p"),e.textContent=s,this.h()},l:function(o){e=b(o,"P",{"data-svelte-h":!0}),T(e)!=="svelte-1njyisr"&&(e.textContent=s),this.h()},h:function(){S(e,y,78,6,2566)},m:function(o,r){R(o,e,r)},p:H,i:H,o:H,d:function(o){o&&g(e)}};return O("SvelteRegisterBlock",{block:a,id:xe.name,type:"if",source:"(70:4) {#if $user === null}",ctx:l}),a}function be(l){let e,s=(l[8]||"")+"",a;const i={c:function(){e=x("span"),a=pe(s),this.h()},l:function(r){e=b(r,"SPAN",{class:!0});var n=I(e);a=ge(n,s),n.forEach(g),this.h()},h:function(){p(e,"class","validation-message"),S(e,y,92,14,3071)},m:function(r,n){R(r,e,n),d(e,a)},p:function(r,n){n&256&&s!==(s=(r[8]||"")+"")&&$e(a,s)},d:function(r){r&&g(e)}};return O("SvelteRegisterBlock",{block:i,id:be.name,type:"slot",source:'(84:12) <ValidationMessage for=\\"avatar\\" let:messages={message}>',ctx:l}),i}function Se(l){let e,s=(l[8]||"")+"",a;const i={c:function(){e=x("span"),a=pe(s),this.h()},l:function(r){e=b(r,"SPAN",{class:!0});var n=I(e);a=ge(n,s),n.forEach(g),this.h()},h:function(){p(e,"class","validation-message"),S(e,y,102,14,3493)},m:function(r,n){R(r,e,n),d(e,a)},p:function(r,n){n&256&&s!==(s=(r[8]||"")+"")&&$e(a,s)},d:function(r){r&&g(e)}};return O("SvelteRegisterBlock",{block:i,id:Se.name,type:"slot",source:'(94:12) <ValidationMessage for=\\"username\\" let:messages={message}>',ctx:l}),i}function G(l){let e,s,a,i="Settings",o,r,n,$,c,C;e=new he({props:{description:"Change your user settings",title:"Settings"},$$inline:!0});const h=[xe,ve],u=[];function m(k,t){return k[1]===null?0:1}$=m(l),c=u[$]=h[$](l);const M={c:function(){Q(e.$$.fragment),s=B(),a=x("h1"),a.textContent=i,o=B(),r=x("div"),n=x("section"),c.c(),this.h()},l:function(t){const v=Ne("svelte-1ae5i2c",document.head);W(e.$$.fragment,v),v.forEach(g),s=D(t),a=b(t,"H1",{class:!0,"data-svelte-h":!0}),T(a)!=="svelte-1ozads0"&&(a.textContent=i),o=D(t),r=b(t,"DIV",{class:!0});var f=I(r);n=b(f,"SECTION",{});var U=I(n);c.l(U),U.forEach(g),f.forEach(g),this.h()},h:function(){p(a,"class","text-4xl my-4 font-bold"),S(a,y,73,0,2449),S(n,y,76,2,2525),p(r,"class","card p-4"),S(r,y,75,0,2500)},m:function(t,v){X(e,document.head,null),R(t,s,v),R(t,a,v),R(t,o,v),R(t,r,v),d(r,n),u[$].m(n,null),C=!0},p:function(t,[v]){let f=$;$=m(t),$===f?u[$].p(t,v):(Be(),L(u[f],1,1,()=>{u[f]=null}),Ve(),c=u[$],c?c.p(t,v):(c=u[$]=h[$](t),c.c()),_(c,1),c.m(n,null))},i:function(t){C||(_(e.$$.fragment,t),_(c),C=!0)},o:function(t){L(e.$$.fragment,t),L(c),C=!1},d:function(t){t&&(g(s),g(a),g(o),g(r)),Y(e),u[$].d()}};return O("SvelteRegisterBlock",{block:M,id:G.name,type:"component",source:"",ctx:l}),M}function ze(l,e,s){let a,i,o=H,r=()=>(o(),o=je(m,t=>s(3,i=t)),m);we(K,"user"),Ce(l,K,t=>s(1,a=t)),l.$$.on_destroy.push(()=>o());let{$$slots:n={},$$scope:$}=e;Pe("Page",n,[]);const c=ne(),C=re(),h=Ue({avatar:Ae(Oe().refine(t=>"name"in t&&"size"in t&&"type"in t)),username:Te().min(3).max(32)});let u,m;const M=[];Object.keys(e).forEach(t=>{!~M.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&_e.warn(`<Page> was created with unknown prop '${t}'`)});function k(){i.username=this.value,m.set(i)}return l.$capture_state=()=>({getContextClient:re,UpdateUserDocument:ce,goto:oe,createForm:ue,validator:fe,reporter:me,ValidationMessage:Z,trimNonSchema:de,user:K,zod:Le,base:ie,MetaDescriptors:he,getToastStore:ne,toastStore:c,client:C,userSchema:h,form:u,data:m,$user:a,$data:i}),l.$inject_state=t=>{"form"in t&&s(2,u=t.form),"data"in t&&r(s(0,m=t.data))},e&&"$$inject"in e&&l.$inject_state(e.$$inject),l.$$.update=()=>{if(l.$$.dirty&3&&a&&!m){const t=ue({initialValues:{username:a.username},extend:[fe({schema:h}),me],onSubmit:v=>{console.log("submitted",v),C.mutation(ce,{user:de(v,h),userId:a.id}).toPromise().then(f=>{f.error?(console.error(f.error.message),c.trigger({message:"Error editing user: "+f.error.message,background:"variant-filled-error",autohide:!1})):(c.trigger({message:"User updated",background:"variant-filled-success",timeout:5e3}),oe(ie+"/user/"+f.data.updateUser.id))})}});s(2,u=t.form),r(s(0,m=t.data))}},[m,a,u,i,h,k]}class We extends ye{constructor(e){super(e),Ee(this,e,ze,G,ke,{userSchema:4}),O("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:G.name})}get userSchema(){return this.$$.ctx[4]}set userSchema(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{We as component};
//# sourceMappingURL=25.64940274.js.map
