import{S as At,i as Pt,s as Rt,bb as ne,Z as N,_ as k,$ as A,m as d,t as g,a1 as P,bc as re,bd as zt,e as E,c as b,d as O,f as $,a7 as st,j as V,be as le,q as B,aa as v,a as I,ab as x,g as D,a5 as i,ac as tt,aC as ie,b as dt,aV as fe,l as mt,al as qt,aB as $e,k as pt,r as ce,w as ue,u as Mt,aH as at,ad as oe,ae as se,b2 as Ot,aR as ae,aA as de,ag as me,aF as pe,aG as ge,ao as he,aM as ve,ap as xe}from"../../../../../chunks/vendor-93f46a94.js";import{M as we}from"../../../../../chunks/MetaDescriptors-5ea9952a.js";import{l as Ve}from"../../../../../chunks/gql-d96f7ff1.js";import{H as ye,J as Ee}from"../../../../../chunks/graphql-663dc1a6.js";import{p as be}from"../../../../../chunks/routing-c6322149.js";import{m as jt}from"../../../../../chunks/markdown-6a2ff7f0.js";import{p as Ft,a as Jt,b as Zt,c as Kt}from"../../../../../chunks/formatting-d1753ec3.js";import{a as Dt}from"../../../../../chunks/api-bb6d5972.js";import{a as Ie}from"../../../../../chunks/user-bfea9258.js";import{T as De}from"../../../../../chunks/Toast-a853093a.js";import{g as Qt}from"../../../../../chunks/navigation-ce539261.js";import{b as gt}from"../../../../../chunks/paths-1c47712a.js";import{i as Se}from"../../../../../chunks/launcher-0869f499.js";import"../../../../../chunks/stores-84e1d086.js";import"../../../../../chunks/global-98137ee8.js";import"../../../../../chunks/extras-8984d02f.js";import"../../../../../chunks/singletons-cdeec3fd.js";function Ne(s){return{c:B,l:B,m:B,p:B,d:B}}function ke(s){let t,n=s[1]+"";return{c(){t=E("p")},l(e){t=b(e,"P",{});var o=O(t);o.forEach($)},m(e,o){V(e,t,o),t.innerHTML=n},p(e,o){o&1&&n!==(n=e[1]+"")&&(t.innerHTML=n)},d(e){e&&$(t)}}}function Ae(s){return{c:B,l:B,m:B,p:B,d:B}}function Pe(s){let t,n,e={ctx:s,current:null,token:null,hasCatch:!1,pending:Ae,then:ke,catch:Ne,value:1};return zt(n=jt(s[0]),e),{c(){t=E("div"),e.block.c(),this.h()},l(o){t=b(o,"DIV",{class:!0});var r=O(t);e.block.l(r),r.forEach($),this.h()},h(){st(t,"class","markdown-content")},m(o,r){V(o,t,r),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null},p(o,r){s=o,e.ctx=s,r&1&&n!==(n=jt(s[0]))&&zt(n,e)||le(e,s,r)},d(o){o&&$(t),e.block.d(),e.token=null,e=null}}}function Re(s){let t,n;return t=new re({props:{$$slots:{default:[Pe]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){A(t,e,o),n=!0},p(e,o){const r={};o&5&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Me(s){let t,n;return t=new ne({props:{class:"h-fit",$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){A(t,e,o),n=!0},p(e,[o]){const r={};o&5&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Oe(s,t,n){let{changelog:e}=t;return s.$$set=o=>{"changelog"in o&&n(0,e=o.changelog)},[e]}class Te extends At{constructor(t){super(),Pt(this,t,Oe,Me,Rt,{changelog:0})}}function Be(s){let t,n,e,o,r,a,l,f,m=Ft(s[0].created_at)+"",p,u,w,S,_,L,K,C=Jt(s[0].downloads)+"",et,z,q,Q,j,F,nt,J=s[0].sml_version+"",G,y,rt,R,lt,W,$t,T=s[0].stability+"",ct,ut,c,h,Z,Y,H,U=Zt(s[0].size)+"",ot,it,St,ft,ht,Nt,kt,vt=s[0].hash+"",xt;return{c(){t=E("div"),n=E("h3"),e=v("Info"),o=I(),r=E("span"),a=E("strong"),l=v("Created:"),f=I(),p=v(m),u=E("br"),w=I(),S=E("span"),_=E("strong"),L=v("Downloads:"),K=I(),et=v(C),z=E("br"),q=I(),Q=E("span"),j=E("strong"),F=v("SML Version:"),nt=I(),G=v(J),y=E("br"),rt=I(),R=E("span"),lt=E("strong"),W=v("Stability:"),$t=I(),ct=v(T),ut=E("br"),c=I(),h=E("span"),Z=E("strong"),Y=v("Size:"),H=I(),ot=v(U),it=E("br"),St=I(),ft=E("span"),ht=E("strong"),Nt=v("Hash:"),kt=I(),xt=v(vt),this.h()},l(X){t=b(X,"DIV",{class:!0});var M=O(t);n=b(M,"H3",{class:!0});var Tt=O(n);e=x(Tt,"Info"),Tt.forEach($),o=D(M),r=b(M,"SPAN",{});var wt=O(r);a=b(wt,"STRONG",{});var Bt=O(a);l=x(Bt,"Created:"),Bt.forEach($),f=D(wt),p=x(wt,m),wt.forEach($),u=b(M,"BR",{}),w=D(M),S=b(M,"SPAN",{});var Vt=O(S);_=b(Vt,"STRONG",{});var Ct=O(_);L=x(Ct,"Downloads:"),Ct.forEach($),K=D(Vt),et=x(Vt,C),Vt.forEach($),z=b(M,"BR",{}),q=D(M),Q=b(M,"SPAN",{});var yt=O(Q);j=b(yt,"STRONG",{});var Gt=O(j);F=x(Gt,"SML Version:"),Gt.forEach($),nt=D(yt),G=x(yt,J),yt.forEach($),y=b(M,"BR",{}),rt=D(M),R=b(M,"SPAN",{});var Et=O(R);lt=b(Et,"STRONG",{});var Ht=O(lt);W=x(Ht,"Stability:"),Ht.forEach($),$t=D(Et),ct=x(Et,T),Et.forEach($),ut=b(M,"BR",{}),c=D(M),h=b(M,"SPAN",{});var bt=O(h);Z=b(bt,"STRONG",{});var _t=O(Z);Y=x(_t,"Size:"),_t.forEach($),H=D(bt),ot=x(bt,U),bt.forEach($),it=b(M,"BR",{}),St=D(M),ft=b(M,"SPAN",{});var It=O(ft);ht=b(It,"STRONG",{});var Lt=O(ht);Nt=x(Lt,"Hash:"),Lt.forEach($),kt=D(It),xt=x(It,vt),It.forEach($),M.forEach($),this.h()},h(){st(n,"class","text-2xl my-4 font-bold"),st(t,"class","text-lg break-words")},m(X,M){V(X,t,M),i(t,n),i(n,e),i(t,o),i(t,r),i(r,a),i(a,l),i(r,f),i(r,p),i(t,u),i(t,w),i(t,S),i(S,_),i(_,L),i(S,K),i(S,et),i(t,z),i(t,q),i(t,Q),i(Q,j),i(j,F),i(Q,nt),i(Q,G),i(t,y),i(t,rt),i(t,R),i(R,lt),i(lt,W),i(R,$t),i(R,ct),i(t,ut),i(t,c),i(t,h),i(h,Z),i(Z,Y),i(h,H),i(h,ot),i(t,it),i(t,St),i(t,ft),i(ft,ht),i(ht,Nt),i(ft,kt),i(ft,xt)},p(X,M){M&1&&m!==(m=Ft(X[0].created_at)+"")&&tt(p,m),M&1&&C!==(C=Jt(X[0].downloads)+"")&&tt(et,C),M&1&&J!==(J=X[0].sml_version+"")&&tt(G,J),M&1&&T!==(T=X[0].stability+"")&&tt(ct,T),M&1&&U!==(U=Zt(X[0].size)+"")&&tt(ot,U),M&1&&vt!==(vt=X[0].hash+"")&&tt(xt,vt)},d(X){X&&$(t)}}}function Ce(s){let t,n;return t=new re({props:{$$slots:{default:[Be]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){A(t,e,o),n=!0},p(e,o){const r={};o&3&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Ge(s){let t,n;return t=new ne({props:{$$slots:{default:[Ce]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){A(t,e,o),n=!0},p(e,[o]){const r={};o&3&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function He(s,t,n){let{version:e}=t;return s.$$set=o=>{"version"in o&&n(0,e=o.version)},[e]}class _e extends At{constructor(t){super(),Pt(this,t,He,Ge,Rt,{version:0})}}function Ut(s,t,n){const e=s.slice();return e[22]=t[n],e}function Wt(s){let t,n;return t=new we({props:{description:"Information for mod version "+s[3].data.getVersion.mod.name+" "+s[3].data.getVersion.version,title:"Mod version "+s[3].data.getVersion.mod.name+" "+s[3].data.getVersion.version}}),{c(){N(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){A(t,e,o),n=!0},p(e,o){const r={};o&8&&(r.description="Information for mod version "+e[3].data.getVersion.mod.name+" "+e[3].data.getVersion.version),o&8&&(r.title="Mod version "+e[3].data.getVersion.mod.name+" "+e[3].data.getVersion.version),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Le(s){let t;return{c(){t=v("404")},l(n){t=x(n,"404")},m(n,e){V(n,t,e)},p:B,i:B,o:B,d(n){n&&$(t)}}}function ze(s){let t,n,e,o=s[3].data.getVersion.mod.name+"",r,a,l=s[3].data.getVersion.version+"",f,m,p,u,w,S,_,L,K,C,et,z,q,Q,j,F,nt,J,G,y,rt,R=s[7]&&Xt(s);const lt=[Ke,Ze],W=[];function $t(c,h){return c[3].data.getVersion.arch.length!=0?0:1}w=$t(s),S=W[w]=lt[w](s),L=new at({props:{variant:"outlined",$$slots:{default:[sn]},$$scope:{ctx:s}}}),L.$on("click",s[16]),C=new at({props:{variant:"outlined",href:gt+"/mod/"+s[0],$$slots:{default:[fn]},$$scope:{ctx:s}}}),q=new Te({props:{changelog:s[3].data.getVersion.changelog}}),F=new _e({props:{version:s[3].data.getVersion}});let T=s[7]&&te(s);function ct(c){s[20](c)}let ut={$$slots:{default:[pn]},$$scope:{ctx:s}};return s[5]!==void 0&&(ut.running=s[5]),G=new De({props:ut}),Mt.push(()=>oe(G,"running",ct)),{c(){t=E("div"),n=E("div"),e=E("h1"),r=v(o),a=v(`
        Version `),f=v(l),m=I(),p=E("div"),R&&R.c(),u=I(),S.c(),_=I(),N(L.$$.fragment),K=I(),N(C.$$.fragment),et=I(),z=E("div"),N(q.$$.fragment),Q=I(),j=E("div"),N(F.$$.fragment),nt=I(),T&&T.c(),J=I(),N(G.$$.fragment),this.h()},l(c){t=b(c,"DIV",{class:!0});var h=O(t);n=b(h,"DIV",{class:!0});var Z=O(n);e=b(Z,"H1",{class:!0});var Y=O(e);r=x(Y,o),a=x(Y,`
        Version `),f=x(Y,l),Y.forEach($),m=D(Z),p=b(Z,"DIV",{class:!0});var H=O(p);R&&R.l(H),u=D(H),S.l(H),_=D(H),k(L.$$.fragment,H),K=D(H),k(C.$$.fragment,H),H.forEach($),Z.forEach($),et=D(h),z=b(h,"DIV",{class:!0});var U=O(z);k(q.$$.fragment,U),Q=D(U),j=b(U,"DIV",{class:!0});var ot=O(j);k(F.$$.fragment,ot),ot.forEach($),U.forEach($),h.forEach($),nt=D(c),T&&T.l(c),J=D(c),k(G.$$.fragment,c),this.h()},h(){st(e,"class","text-4xl font-bold"),st(p,"class","grid grid-flow-col gap-4"),st(n,"class","flex flex-wrap h-auto justify-between items-center"),st(j,"class","grid grid-cols-1 auto-rows-min gap-8"),st(z,"class","grid grid-auto-max auto-cols-fr gap-4"),st(t,"class","grid gap-6 xlx:grid-flow-row")},m(c,h){V(c,t,h),i(t,n),i(n,e),i(e,r),i(e,a),i(e,f),i(n,m),i(n,p),R&&R.m(p,null),i(p,u),W[w].m(p,null),i(p,_),A(L,p,null),i(p,K),A(C,p,null),i(t,et),i(t,z),A(q,z,null),i(z,Q),i(z,j),A(F,j,null),V(c,nt,h),T&&T.m(c,h),V(c,J,h),A(G,c,h),rt=!0},p(c,h){(!rt||h&8)&&o!==(o=c[3].data.getVersion.mod.name+"")&&tt(r,o),(!rt||h&8)&&l!==(l=c[3].data.getVersion.version+"")&&tt(f,l),c[7]?R?(R.p(c,h),h&128&&d(R,1)):(R=Xt(c),R.c(),d(R,1),R.m(p,u)):R&&(pt(),g(R,1,1,()=>{R=null}),mt());let Z=w;w=$t(c),w===Z?W[w].p(c,h):(pt(),g(W[Z],1,1,()=>{W[Z]=null}),mt(),S=W[w],S?S.p(c,h):(S=W[w]=lt[w](c),S.c()),d(S,1),S.m(p,_));const Y={};h&33554432&&(Y.$$scope={dirty:h,ctx:c}),L.$set(Y);const H={};h&1&&(H.href=gt+"/mod/"+c[0]),h&33554432&&(H.$$scope={dirty:h,ctx:c}),C.$set(H);const U={};h&8&&(U.changelog=c[3].data.getVersion.changelog),q.$set(U);const ot={};h&8&&(ot.version=c[3].data.getVersion),F.$set(ot),c[7]?T?(T.p(c,h),h&128&&d(T,1)):(T=te(c),T.c(),d(T,1),T.m(J.parentNode,J)):T&&(pt(),g(T,1,1,()=>{T=null}),mt());const it={};h&33554448&&(it.$$scope={dirty:h,ctx:c}),!y&&h&32&&(y=!0,it.running=c[5],se(()=>y=!1)),G.$set(it)},i(c){rt||(d(R),d(S),d(L.$$.fragment,c),d(C.$$.fragment,c),d(q.$$.fragment,c),d(F.$$.fragment,c),d(T),d(G.$$.fragment,c),rt=!0)},o(c){g(R),g(S),g(L.$$.fragment,c),g(C.$$.fragment,c),g(q.$$.fragment,c),g(F.$$.fragment,c),g(T),g(G.$$.fragment,c),rt=!1},d(c){c&&$(t),R&&R.d(),W[w].d(),P(L),P(C),P(q),P(F),c&&$(nt),T&&T.d(c),c&&$(J),P(G,c)}}}function qe(s){let t,n,e=s[3].error.message+"",o;return{c(){t=E("p"),n=v("Oh no... "),o=v(e)},l(r){t=b(r,"P",{});var a=O(t);n=x(a,"Oh no... "),o=x(a,e),a.forEach($)},m(r,a){V(r,t,a),i(t,n),i(t,o)},p(r,a){a&8&&e!==(e=r[3].error.message+"")&&tt(o,e)},i:B,o:B,d(r){r&&$(t)}}}function je(s){let t,n;return{c(){t=E("p"),n=v("Loading...")},l(e){t=b(e,"P",{});var o=O(t);n=x(o,"Loading..."),o.forEach($)},m(e,o){V(e,t,o),i(t,n)},p:B,i:B,o:B,d(e){e&&$(t)}}}function Xt(s){let t,n,e,o;return t=new at({props:{variant:"outlined",$$slots:{default:[Fe]},$$scope:{ctx:s}}}),t.$on("click",s[12]),e=new at({props:{variant:"outlined",$$slots:{default:[Je]},$$scope:{ctx:s}}}),e.$on("click",s[13]),{c(){N(t.$$.fragment),n=I(),N(e.$$.fragment)},l(r){k(t.$$.fragment,r),n=D(r),k(e.$$.fragment,r)},m(r,a){A(t,r,a),V(r,n,a),A(e,r,a),o=!0},p(r,a){const l={};a&33554432&&(l.$$scope={dirty:a,ctx:r}),t.$set(l);const f={};a&33554432&&(f.$$scope={dirty:a,ctx:r}),e.$set(f)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){g(t.$$.fragment,r),g(e.$$.fragment,r),o=!1},d(r){P(t,r),r&&$(n),P(e,r)}}}function Fe(s){let t;return{c(){t=v("Edit")},l(n){t=x(n,"Edit")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function Je(s){let t;return{c(){t=v("Delete")},l(n){t=x(n,"Delete")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function Ze(s){let t,n,e,o;return t=new at({props:{variant:"outlined",href:gt+"/mod/"+s[0]+"/version/"+s[1],$$slots:{default:[Qe]},$$scope:{ctx:s}}}),e=new at({props:{variant:"outlined",href:Dt+"/mod/"+s[0]+"/versions/"+s[1]+"/download",$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment),n=I(),N(e.$$.fragment)},l(r){k(t.$$.fragment,r),n=D(r),k(e.$$.fragment,r)},m(r,a){A(t,r,a),V(r,n,a),A(e,r,a),o=!0},p(r,a){const l={};a&3&&(l.href=gt+"/mod/"+r[0]+"/version/"+r[1]),a&33554432&&(l.$$scope={dirty:a,ctx:r}),t.$set(l);const f={};a&3&&(f.href=Dt+"/mod/"+r[0]+"/versions/"+r[1]+"/download"),a&33554432&&(f.$$scope={dirty:a,ctx:r}),e.$set(f)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){g(t.$$.fragment,r),g(e.$$.fragment,r),o=!1},d(r){P(t,r),r&&$(n),P(e,r)}}}function Ke(s){let t,n,e,o;t=new at({props:{variant:"outlined",$$slots:{default:[Xe]},$$scope:{ctx:s}}}),t.$on("click",s[14]);let r={$$slots:{default:[nn]},$$scope:{ctx:s}};return e=new me({props:r}),s[15](e),{c(){N(t.$$.fragment),n=I(),N(e.$$.fragment)},l(a){k(t.$$.fragment,a),n=D(a),k(e.$$.fragment,a)},m(a,l){A(t,a,l),V(a,n,l),A(e,a,l),o=!0},p(a,l){const f={};l&33554432&&(f.$$scope={dirty:l,ctx:a}),t.$set(f);const m={};l&33554443&&(m.$$scope={dirty:l,ctx:a}),e.$set(m)},i(a){o||(d(t.$$.fragment,a),d(e.$$.fragment,a),o=!0)},o(a){g(t.$$.fragment,a),g(e.$$.fragment,a),o=!1},d(a){P(t,a),a&&$(n),s[15](null),P(e,a)}}}function Qe(s){let t;return{c(){t=v("View")},l(n){t=x(n,"View")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function Ue(s){let t;return{c(){t=v("Download")},l(n){t=x(n,"Download")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function We(s){let t;return{c(){t=v("Actions")},l(n){t=x(n,"Actions")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function Xe(s){let t,n;return t=new Ot({props:{$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){A(t,e,o),n=!0},p(e,o){const r={};o&33554432&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Ye(s){let t,n=Kt(s[22].platform)+"",e;return{c(){t=v("Download "),e=v(n)},l(o){t=x(o,"Download "),e=x(o,n)},m(o,r){V(o,t,r),V(o,e,r)},p(o,r){r&8&&n!==(n=Kt(o[22].platform)+"")&&tt(e,n)},d(o){o&&$(t),o&&$(e)}}}function tn(s){let t,n,e;return t=new at({props:{variant:"outlined",href:Dt+"/mod/"+s[0]+"/versions/"+s[1]+"/"+s[22].platform+"/download",$$slots:{default:[Ye]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment),n=I()},l(o){k(t.$$.fragment,o),n=D(o)},m(o,r){A(t,o,r),V(o,n,r),e=!0},p(o,r){const a={};r&11&&(a.href=Dt+"/mod/"+o[0]+"/versions/"+o[1]+"/"+o[22].platform+"/download"),r&33554440&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){e||(d(t.$$.fragment,o),e=!0)},o(o){g(t.$$.fragment,o),e=!1},d(o){P(t,o),o&&$(n)}}}function Yt(s){let t,n;return t=new xe({props:{$$slots:{default:[tn]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){A(t,e,o),n=!0},p(e,o){const r={};o&33554443&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function en(s){let t,n,e=s[3].data.getVersion.arch,o=[];for(let a=0;a<e.length;a+=1)o[a]=Yt(Ut(s,e,a));const r=a=>g(o[a],1,1,()=>{o[a]=null});return{c(){for(let a=0;a<o.length;a+=1)o[a].c();t=dt()},l(a){for(let l=0;l<o.length;l+=1)o[l].l(a);t=dt()},m(a,l){for(let f=0;f<o.length;f+=1)o[f].m(a,l);V(a,t,l),n=!0},p(a,l){if(l&11){e=a[3].data.getVersion.arch;let f;for(f=0;f<e.length;f+=1){const m=Ut(a,e,f);o[f]?(o[f].p(m,l),d(o[f],1)):(o[f]=Yt(m),o[f].c(),d(o[f],1),o[f].m(t.parentNode,t))}for(pt(),f=e.length;f<o.length;f+=1)r(f);mt()}},i(a){if(!n){for(let l=0;l<e.length;l+=1)d(o[l]);n=!0}},o(a){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)g(o[l]);n=!1},d(a){ve(o,a),a&&$(t)}}}function nn(s){let t,n;return t=new he({props:{$$slots:{default:[en]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){A(t,e,o),n=!0},p(e,o){const r={};o&33554443&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function rn(s){let t;return{c(){t=v("Install")},l(n){t=x(n,"Install")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function on(s){let t;return{c(){t=v("download")},l(n){t=x(n,"download")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function sn(s){let t,n,e,o;return t=new Ot({props:{$$slots:{default:[rn]},$$scope:{ctx:s}}}),e=new ae({props:{class:"material-icons",$$slots:{default:[on]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment),n=I(),N(e.$$.fragment)},l(r){k(t.$$.fragment,r),n=D(r),k(e.$$.fragment,r)},m(r,a){A(t,r,a),V(r,n,a),A(e,r,a),o=!0},p(r,a){const l={};a&33554432&&(l.$$scope={dirty:a,ctx:r}),t.$set(l);const f={};a&33554432&&(f.$$scope={dirty:a,ctx:r}),e.$set(f)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){g(t.$$.fragment,r),g(e.$$.fragment,r),o=!1},d(r){P(t,r),r&&$(n),P(e,r)}}}function an(s){let t;return{c(){t=v("Mod")},l(n){t=x(n,"Mod")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function ln(s){let t;return{c(){t=v("extension")},l(n){t=x(n,"extension")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function fn(s){let t,n,e,o;return t=new Ot({props:{$$slots:{default:[an]},$$scope:{ctx:s}}}),e=new ae({props:{class:"material-icons",$$slots:{default:[ln]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment),n=I(),N(e.$$.fragment)},l(r){k(t.$$.fragment,r),n=D(r),k(e.$$.fragment,r)},m(r,a){A(t,r,a),V(r,n,a),A(e,r,a),o=!0},p(r,a){const l={};a&33554432&&(l.$$scope={dirty:a,ctx:r}),t.$set(l);const f={};a&33554432&&(f.$$scope={dirty:a,ctx:r}),e.$set(f)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){g(t.$$.fragment,r),g(e.$$.fragment,r),o=!1},d(r){P(t,r),r&&$(n),P(e,r)}}}function te(s){let t,n,e;function o(a){s[19](a)}let r={$$slots:{default:[mn]},$$scope:{ctx:s}};return s[8]!==void 0&&(r.open=s[8]),t=new de({props:r}),Mt.push(()=>oe(t,"open",o)),{c(){N(t.$$.fragment)},l(a){k(t.$$.fragment,a)},m(a,l){A(t,a,l),e=!0},p(a,l){const f={};l&33554432&&(f.$$scope={dirty:l,ctx:a}),!n&&l&256&&(n=!0,f.open=a[8],se(()=>n=!1)),t.$set(f)},i(a){e||(d(t.$$.fragment,a),e=!0)},o(a){g(t.$$.fragment,a),e=!1},d(a){P(t,a)}}}function $n(s){let t;return{c(){t=v("Delete Version?")},l(n){t=x(n,"Delete Version?")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function cn(s){let t;return{c(){t=v("Cancel")},l(n){t=x(n,"Cancel")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function un(s){let t;return{c(){t=v("Delete")},l(n){t=x(n,"Delete")},m(n,e){V(n,t,e)},d(n){n&&$(t)}}}function dn(s){let t,n,e,o,r,a,l,f;return r=new at({props:{variant:"outlined",$$slots:{default:[cn]},$$scope:{ctx:s}}}),r.$on("click",s[17]),l=new at({props:{variant:"outlined",$$slots:{default:[un]},$$scope:{ctx:s}}}),l.$on("click",s[18]),{c(){t=E("div"),n=E("span"),e=v("Are you sure you wish to delete this version"),o=I(),N(r.$$.fragment),a=I(),N(l.$$.fragment),this.h()},l(m){t=b(m,"DIV",{class:!0});var p=O(t);n=b(p,"SPAN",{});var u=O(n);e=x(u,"Are you sure you wish to delete this version"),u.forEach($),o=D(p),k(r.$$.fragment,p),a=D(p),k(l.$$.fragment,p),p.forEach($),this.h()},h(){st(t,"class","grid grid-flow-row gap-4")},m(m,p){V(m,t,p),i(t,n),i(n,e),i(t,o),A(r,t,null),i(t,a),A(l,t,null),f=!0},p(m,p){const u={};p&33554432&&(u.$$scope={dirty:p,ctx:m}),r.$set(u);const w={};p&33554432&&(w.$$scope={dirty:p,ctx:m}),l.$set(w)},i(m){f||(d(r.$$.fragment,m),d(l.$$.fragment,m),f=!0)},o(m){g(r.$$.fragment,m),g(l.$$.fragment,m),f=!1},d(m){m&&$(t),P(r),P(l)}}}function mn(s){let t,n,e,o;return t=new pe({props:{id:"simple-title",$$slots:{default:[$n]},$$scope:{ctx:s}}}),e=new ge({props:{$$slots:{default:[dn]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment),n=I(),N(e.$$.fragment)},l(r){k(t.$$.fragment,r),n=D(r),k(e.$$.fragment,r)},m(r,a){A(t,r,a),V(r,n,a),A(e,r,a),o=!0},p(r,a){const l={};a&33554432&&(l.$$scope={dirty:a,ctx:r}),t.$set(l);const f={};a&33554432&&(f.$$scope={dirty:a,ctx:r}),e.$set(f)},i(r){o||(d(t.$$.fragment,r),d(e.$$.fragment,r),o=!0)},o(r){g(t.$$.fragment,r),g(e.$$.fragment,r),o=!1},d(r){P(t,r),r&&$(n),P(e,r)}}}function pn(s){let t,n;return{c(){t=E("span"),n=v(s[4])},l(e){t=b(e,"SPAN",{});var o=O(t);n=x(o,s[4]),o.forEach($)},m(e,o){V(e,t,o),i(t,n)},p(e,o){o&16&&tt(n,e[4])},d(e){e&&$(t)}}}function gn(s){let t,n,e,o,r,a,l=!s[3].fetching&&!s[3].error&&s[3].data.getVersion&&Wt(s);const f=[je,qe,ze,Le],m=[];function p(u,w){return u[3].fetching?0:u[3].error?1:u[3].data.getVersion?2:3}return e=p(s),o=m[e]=f[e](s),{c(){l&&l.c(),t=dt(),n=I(),o.c(),r=dt()},l(u){const w=fe('[data-svelte="svelte-7zfw29"]',document.head);l&&l.l(w),t=dt(),w.forEach($),n=D(u),o.l(u),r=dt()},m(u,w){l&&l.m(document.head,null),i(document.head,t),V(u,n,w),m[e].m(u,w),V(u,r,w),a=!0},p(u,[w]){!u[3].fetching&&!u[3].error&&u[3].data.getVersion?l?(l.p(u,w),w&8&&d(l,1)):(l=Wt(u),l.c(),d(l,1),l.m(t.parentNode,t)):l&&(pt(),g(l,1,1,()=>{l=null}),mt());let S=e;e=p(u),e===S?m[e].p(u,w):(pt(),g(m[S],1,1,()=>{m[S]=null}),mt(),o=m[e],o?o.p(u,w):(o=m[e]=f[e](u),o.c()),d(o,1),o.m(r.parentNode,r))},i(u){a||(d(l),d(o),a=!0)},o(u){g(l),g(o),a=!1},d(u){l&&l.d(u),$(t),u&&$(n),m[e].d(u),u&&$(r)}}}const ee=ie(ye,{version:void 0}),Tn=be(async s=>(ee.variables.version=s.params.versionId,Ve({version:ee})(s)));function hn(s,t,n){let e,o,r,a=B,l=()=>(a(),a=ce(u,y=>n(3,r=y)),u),f;qt(s,Ie,y=>n(11,o=y)),s.$$.on_destroy.push(()=>a());let{modId:m}=t,{versionId:p}=t,{version:u}=t;l();let w="",S=!1,_;const L=$e({query:Ee}),K=ue(!1);qt(s,K,y=>n(8,f=y));const C=()=>{L({versionId:p}).then(y=>{y.error?(console.error(y.error.message),n(4,w="Error deleting version: "+y.error.message),n(5,S=!0)):Qt(gt+"/mod/"+m)})},et=()=>Qt(gt+"/mod/"+m+"/version/"+p+"/edit"),z=()=>K.set(!0),q=()=>_.setOpen(!0);function Q(y){Mt[y?"unshift":"push"](()=>{_=y,n(6,_)})}const j=()=>Se(u.data.getVersion.mod.mod_reference),F=()=>K.set(!1),nt=()=>C();function J(y){f=y,K.set(f)}function G(y){S=y,n(5,S)}return s.$$set=y=>{"modId"in y&&n(0,m=y.modId),"versionId"in y&&n(1,p=y.versionId),"version"in y&&l(n(2,u=y.version))},s.$$.update=()=>{s.$$.dirty&2056&&n(7,e=o?.roles?.deleteContent||r?.data?.getVersion.mod?.authors?.findIndex(y=>y.user_id==o?.id)>=0)},[m,p,u,r,w,S,_,e,f,K,C,o,et,z,q,Q,j,F,nt,J,G]}class Bn extends At{constructor(t){super(),Pt(this,t,hn,gn,Rt,{modId:0,versionId:1,version:2})}}export{Bn as default,Tn as load};
//# sourceMappingURL=index.svelte-62013aad.js.map
