import{S as z,i as K,s as M,b as j,j as h,q as m,f,e as w,c as D,d as A,G as J,h as mt,af as B,T as v,U as x,I as k,V as N,a6 as at,r as ot,a as _,g as L,k as $t,t as F,l as bt,m as T,A as et,D as it,H as lt,J as nt,a2 as Z,a3 as dt,a4 as pt,a5 as ht}from"./vendor.qkHm75Lx.js";import{v as I}from"./graphql.XSrPrpK2.js";import{m as tt}from"./markdown.JOb1FNHv.js";function rt(n){let t;return{c(){t=w("div"),this.h()},l(e){t=D(e,"DIV",{class:!0,style:!0}),A(t).forEach(f),this.h()},h(){J(t,"class","mod-outdated-stripe"),mt(t,"max-width","inherit"),B(t,"mod-damaged",n[1]===I.Damaged),B(t,"mod-broken",n[1]===I.Broken),B(t,"mod-logo-outdated",n[0])},m(e,i){h(e,t,i)},p(e,i){i&2&&B(t,"mod-damaged",e[1]===I.Damaged),i&2&&B(t,"mod-broken",e[1]===I.Broken),i&1&&B(t,"mod-logo-outdated",e[0])},d(e){e&&f(t)}}}function kt(n){let t,e=!n[2]&&rt(n);return{c(){e&&e.c(),t=j()},l(i){e&&e.l(i),t=j()},m(i,l){e&&e.m(i,l),h(i,t,l)},p(i,[l]){i[2]?e&&(e.d(1),e=null):e?e.p(i,l):(e=rt(i),e.c(),e.m(t.parentNode,t))},i:m,o:m,d(i){i&&f(t),e&&e.d(i)}}}function yt(n,t,e){let i,{compatibility:l}=t,{logo:a=!1}=t;function o(s){const u=s.EA.state;return u==I.Broken?u:u==I.Works||s.EXP.state!=I.Works?s.EXP.state:u}let r=I.Works;return n.$$set=s=>{"compatibility"in s&&e(3,l=s.compatibility),"logo"in s&&e(0,a=s.logo)},n.$$.update=()=>{n.$$.dirty&8&&(l?e(1,r=o(l)):e(1,r=I.Works)),n.$$.dirty&2&&e(2,i=r===I.Works)},[a,r,i,l]}class Ht extends z{constructor(t){super(),K(this,t,yt,kt,M,{compatibility:3,logo:0})}}function Et(n){let t,e;return{c(){t=w("p"),e=v(n[1]),this.h()},l(i){t=D(i,"P",{class:!0});var l=A(t);e=x(l,n[1]),l.forEach(f),this.h()},h(){J(t,"class","material-icons text-sm"),B(t,"mod-state-works",n[0]?.state===I.Works),B(t,"mod-state-damaged",n[0]?.state===I.Damaged),B(t,"mod-state-broken",n[0]?.state===I.Broken),B(t,"mod-state-unknown",!n[0])},m(i,l){h(i,t,l),k(t,e)},p(i,[l]){l&2&&N(e,i[1]),l&1&&B(t,"mod-state-works",i[0]?.state===I.Works),l&1&&B(t,"mod-state-damaged",i[0]?.state===I.Damaged),l&1&&B(t,"mod-state-broken",i[0]?.state===I.Broken),l&1&&B(t,"mod-state-unknown",!i[0])},i:m,o:m,d(i){i&&f(t)}}}function gt(n,t,e){let{compatibility:i=null}=t,{EXP:l=!1}=t,a="rocket_launch";return l&&(a="science"),n.$$set=o=>{"compatibility"in o&&e(0,i=o.compatibility),"EXP"in o&&e(2,l=o.EXP)},[i,a,l]}class Jt extends z{constructor(t){super(),K(this,t,gt,Et,M,{compatibility:0,EXP:2})}}function vt(n){let t,e=n[1](`compatibility-info.state.${n[2].toString().toLowerCase()}`)+"",i;return{c(){t=w("p"),i=v(e),this.h()},l(l){t=D(l,"P",{class:!0});var a=A(t);i=x(a,e),a.forEach(f),this.h()},h(){J(t,"class",n[3](n[2])+" mod-state")},m(l,a){h(l,t,a),k(t,i)},p(l,[a]){a&2&&e!==(e=l[1](`compatibility-info.state.${l[2].toString().toLowerCase()}`)+"")&&N(i,e)},i:m,o:m,d(l){l&&f(t)}}}function xt(n,t,e){let i,l=m,a=()=>(l(),l=ot(r,$=>e(1,i=$)),r);n.$$.on_destroy.push(()=>l());let{state:o=null}=t;const{t:r}=at();a();const s=o??"Unknown",u=$=>`mod-state-${$.toString().toLowerCase()}`;return n.$$set=$=>{"state"in $&&e(4,o=$.state)},[r,i,s,u,o]}class ct extends z{constructor(t){super(),K(this,t,xt,vt,M,{state:4,t:0})}get t(){return this.$$.ctx[0]}}function wt(n){let t,e=n[2].Unknown+"",i;return{c(){t=w("div"),i=v(e)},l(l){t=D(l,"DIV",{});var a=A(t);i=x(a,e),a.forEach(f)},m(l,a){h(l,t,a),k(t,i)},p:m,i:m,o:m,d(l){l&&f(t)}}}function Dt(n){let t,e=n[3]("early-access")+"",i,l,a,o,r,s=n[2][n[0]?.EA?.state||"Unknown"]+"",u,$,E,y,g,V,U=n[3]("experimental")+"",R,W,S,d,b,C=n[2][n[0]?.EXP?.state||"Unknown"]+"",Q,Y,G,H;a=new ct({props:{state:n[0]?.EA?.state}});let P=n[0].EA.note&&ft(n);S=new ct({props:{state:n[0]?.EXP?.state}});let X=n[0].EXP.note&&ut(n);return{c(){t=w("div"),i=v(e),l=v(": "),et(a.$$.fragment),o=_(),r=w("div"),u=v(s),$=_(),P&&P.c(),E=_(),y=w("br"),g=_(),V=w("div"),R=v(U),W=v(": "),et(S.$$.fragment),d=_(),b=w("div"),Q=v(C),Y=_(),X&&X.c(),G=j(),this.h()},l(c){t=D(c,"DIV",{});var p=A(t);i=x(p,e),l=x(p,": "),it(a.$$.fragment,p),p.forEach(f),o=L(c),r=D(c,"DIV",{class:!0});var O=A(r);u=x(O,s),O.forEach(f),$=L(c),P&&P.l(c),E=L(c),y=D(c,"BR",{}),g=L(c),V=D(c,"DIV",{});var q=A(V);R=x(q,U),W=x(q,": "),it(S.$$.fragment,q),q.forEach(f),d=L(c),b=D(c,"DIV",{class:!0});var st=A(b);Q=x(st,C),st.forEach(f),Y=L(c),X&&X.l(c),G=j(),this.h()},h(){J(r,"class","compatibility-state-description"),J(b,"class","compatibility-state-description")},m(c,p){h(c,t,p),k(t,i),k(t,l),lt(a,t,null),h(c,o,p),h(c,r,p),k(r,u),h(c,$,p),P&&P.m(c,p),h(c,E,p),h(c,y,p),h(c,g,p),h(c,V,p),k(V,R),k(V,W),lt(S,V,null),h(c,d,p),h(c,b,p),k(b,Q),h(c,Y,p),X&&X.m(c,p),h(c,G,p),H=!0},p(c,p){(!H||p&8)&&e!==(e=c[3]("early-access")+"")&&N(i,e);const O={};p&1&&(O.state=c[0]?.EA?.state),a.$set(O),(!H||p&1)&&s!==(s=c[2][c[0]?.EA?.state||"Unknown"]+"")&&N(u,s),c[0].EA.note?P?P.p(c,p):(P=ft(c),P.c(),P.m(E.parentNode,E)):P&&(P.d(1),P=null),(!H||p&8)&&U!==(U=c[3]("experimental")+"")&&N(R,U);const q={};p&1&&(q.state=c[0]?.EXP?.state),S.$set(q),(!H||p&1)&&C!==(C=c[2][c[0]?.EXP?.state||"Unknown"]+"")&&N(Q,C),c[0].EXP.note?X?X.p(c,p):(X=ut(c),X.c(),X.m(G.parentNode,G)):X&&(X.d(1),X=null)},i(c){H||(T(a.$$.fragment,c),T(S.$$.fragment,c),H=!0)},o(c){F(a.$$.fragment,c),F(S.$$.fragment,c),H=!1},d(c){c&&(f(t),f(o),f(r),f($),f(E),f(y),f(g),f(V),f(d),f(b),f(Y),f(G)),nt(a),P&&P.d(c),nt(S),X&&X.d(c)}}}function ft(n){let t,e=n[3]("compatibility-info.note")+"",i,l,a,o={ctx:n,current:null,token:null,hasCatch:!1,pending:It,then:Xt,catch:Pt,value:4};return Z(a=tt(n[0].EA.note),o),{c(){t=w("div"),i=v(e),l=v(": "),o.block.c()},l(r){t=D(r,"DIV",{});var s=A(t);i=x(s,e),l=x(s,": "),o.block.l(s),s.forEach(f)},m(r,s){h(r,t,s),k(t,i),k(t,l),o.block.m(t,o.anchor=null),o.mount=()=>t,o.anchor=null},p(r,s){n=r,s&8&&e!==(e=n[3]("compatibility-info.note")+"")&&N(i,e),o.ctx=n,s&1&&a!==(a=tt(n[0].EA.note))&&Z(a,o)||dt(o,n,s)},d(r){r&&f(t),o.block.d(),o.token=null,o=null}}}function Pt(n){return{c:m,l:m,m,p:m,d:m}}function Xt(n){let t,e=n[4]+"",i;return{c(){t=new pt(!1),i=j(),this.h()},l(l){t=ht(l,!1),i=j(),this.h()},h(){t.a=i},m(l,a){t.m(e,l,a),h(l,i,a)},p(l,a){a&1&&e!==(e=l[4]+"")&&t.p(e)},d(l){l&&(f(i),t.d())}}}function It(n){return{c:m,l:m,m,p:m,d:m}}function ut(n){let t,e=n[3]("compatibility-info.note")+"",i,l,a,o={ctx:n,current:null,token:null,hasCatch:!1,pending:Bt,then:At,catch:Vt,value:4};return Z(a=tt(n[0].EXP.note),o),{c(){t=w("div"),i=v(e),l=v(": "),o.block.c()},l(r){t=D(r,"DIV",{});var s=A(t);i=x(s,e),l=x(s,": "),o.block.l(s),s.forEach(f)},m(r,s){h(r,t,s),k(t,i),k(t,l),o.block.m(t,o.anchor=null),o.mount=()=>t,o.anchor=null},p(r,s){n=r,s&8&&e!==(e=n[3]("compatibility-info.note")+"")&&N(i,e),o.ctx=n,s&1&&a!==(a=tt(n[0].EXP.note))&&Z(a,o)||dt(o,n,s)},d(r){r&&f(t),o.block.d(),o.token=null,o=null}}}function Vt(n){return{c:m,l:m,m,p:m,d:m}}function At(n){let t,e=n[4]+"",i;return{c(){t=new pt(!1),i=j(),this.h()},l(l){t=ht(l,!1),i=j(),this.h()},h(){t.a=i},m(l,a){t.m(e,l,a),h(l,i,a)},p(l,a){a&1&&e!==(e=l[4]+"")&&t.p(e)},d(l){l&&(f(i),t.d())}}}function Bt(n){return{c:m,l:m,m,p:m,d:m}}function Ut(n){let t,e=n[3]("compatibility-info.maintained-by")+"",i,l,a,o=n[3]("discord")+"",r,s,u,$,E,y,g,V,U;const R=[Dt,wt],W=[];function S(d,b){return d[0]?0:1}return y=S(n),g=W[y]=R[y](n),{c(){t=w("div"),i=v(e),l=_(),a=w("a"),r=v(o),s=v("!"),u=_(),$=w("br"),E=_(),g.c(),V=j(),this.h()},l(d){t=D(d,"DIV",{});var b=A(t);i=x(b,e),l=L(b),a=D(b,"A",{href:!0,style:!0});var C=A(a);r=x(C,o),C.forEach(f),s=x(b,"!"),b.forEach(f),u=L(d),$=D(d,"BR",{}),E=L(d),g.l(d),V=j(),this.h()},h(){J(a,"href","https://discord.gg/xkVJ73E"),mt(a,"text-decoration","underline")},m(d,b){h(d,t,b),k(t,i),k(t,l),k(t,a),k(a,r),k(t,s),h(d,u,b),h(d,$,b),h(d,E,b),W[y].m(d,b),h(d,V,b),U=!0},p(d,[b]){(!U||b&8)&&e!==(e=d[3]("compatibility-info.maintained-by")+"")&&N(i,e),(!U||b&8)&&o!==(o=d[3]("discord")+"")&&N(r,o);let C=y;y=S(d),y===C?W[y].p(d,b):($t(),F(W[C],1,1,()=>{W[C]=null}),bt(),g=W[y],g?g.p(d,b):(g=W[y]=R[y](d),g.c()),T(g,1),g.m(V.parentNode,V))},i(d){U||(T(g),U=!0)},o(d){F(g),U=!1},d(d){d&&(f(t),f(u),f($),f(E),f(V)),W[y].d(d)}}}function Wt(n,t,e){let i,l=m,a=()=>(l(),l=ot(r,u=>e(3,i=u)),r);n.$$.on_destroy.push(()=>l());let{compatibility:o}=t;const{t:r}=at();a();const s={Works:i("compatibility-info.state.works.description"),Damaged:i("compatibility-info.state.damaged.description"),Broken:i("compatibility-info.state.broken.description"),Unknown:i("compatibility-info.state.unknown.description")};return n.$$set=u=>{"compatibility"in u&&e(0,o=u.compatibility)},[o,r,s,i]}class Ct extends z{constructor(t){super(),K(this,t,Wt,Ut,M,{compatibility:0,t:1,compatibilityStateDescriptions:2})}get t(){return this.$$.ctx[1]}get compatibilityStateDescriptions(){return this.$$.ctx[2]}}function St(n){let t,e,i=n[2]("compatibility-info")+"",l,a,o,r,s;return r=new Ct({props:{compatibility:n[0]}}),{c(){t=w("div"),e=w("h2"),l=v(i),a=_(),o=w("div"),et(r.$$.fragment),this.h()},l(u){t=D(u,"DIV",{class:!0});var $=A(t);e=D($,"H2",{class:!0});var E=A(e);l=x(E,i),E.forEach(f),a=L($),o=D($,"DIV",{});var y=A(o);it(r.$$.fragment,y),y.forEach(f),$.forEach(f),this.h()},h(){J(e,"class","text-2xl"),J(t,"class","card flex flex-col gap-2 p-4")},m(u,$){h(u,t,$),k(t,e),k(e,l),k(t,a),k(t,o),lt(r,o,null),s=!0},p(u,[$]){(!s||$&4)&&i!==(i=u[2]("compatibility-info")+"")&&N(l,i);const E={};$&1&&(E.compatibility=u[0]),r.$set(E)},i(u){s||(T(r.$$.fragment,u),s=!0)},o(u){F(r.$$.fragment,u),s=!1},d(u){u&&f(t),nt(r)}}}function Nt(n,t,e){let i,l=m,a=()=>(l(),l=ot(r,s=>e(2,i=s)),r);n.$$.on_destroy.push(()=>l());let{compatibility:o}=t;const{t:r}=at();return a(),n.$$set=s=>{"compatibility"in s&&e(0,o=s.compatibility)},[o,r,i]}class Rt extends z{constructor(t){super(),K(this,t,Nt,St,M,{compatibility:0,t:1})}get t(){return this.$$.ctx[1]}}export{Jt as C,Ht as O,Rt as a,ct as b};
//# sourceMappingURL=CompatibilityModal.YREropeK.js.map
