import{S as j,i as q,s as F,b as x,j as u,q as m,f,e as A,c as D,d as I,a7 as G,aS as k,aa as C,ab as V,a5 as _,ac as T,m as E,k as U,t as y,l as Y,Z as P,a as B,_ as X,g as S,$ as v,a1 as w,bd as H,be as ee,bl as te,bm as ie,aH as ne,aA as ae,u as se,ad as le,h as z,ae as oe,aF as re,aG as fe}from"./vendor-22698a15.js";import{u as b}from"./graphql-43a8ad25.js";import{m as L}from"./markdown-6a2ff7f0.js";function ce(s){let t;return{c(){t=A("div"),this.h()},l(a){t=D(a,"DIV",{class:!0}),I(t).forEach(f),this.h()},h(){G(t,"class","mod-outdated-stripe"),k(t,"mod-damaged",s[1]===b.Damaged),k(t,"mod-broken",s[1]===b.Broken),k(t,"mod-logo-outdated",s[0])},m(a,e){u(a,t,e)},p(a,e){e&2&&k(t,"mod-damaged",a[1]===b.Damaged),e&2&&k(t,"mod-broken",a[1]===b.Broken),e&1&&k(t,"mod-logo-outdated",a[0])},d(a){a&&f(t)}}}function me(s){let t,a=!s[2]&&ce(s);return{c(){a&&a.c(),t=x()},l(e){a&&a.l(e),t=x()},m(e,i){a&&a.m(e,i),u(e,t,i)},p(e,[i]){e[2]||a.p(e,i)},i:m,o:m,d(e){a&&a.d(e),e&&f(t)}}}function ue(s,t,a){let{compatibility:e}=t,{logo:i=!1}=t;function n(c){const r=c.EA.state;return r==b.Broken?r:r==b.Works||c.EXP.state!=b.Works?c.EXP.state:r}let l=b.Works;e&&(l=n(e));const p=l===b.Works;return s.$$set=c=>{"compatibility"in c&&a(3,e=c.compatibility),"logo"in c&&a(0,i=c.logo)},[i,l,p,e]}class Se extends j{constructor(t){super(),q(this,t,ue,me,F,{compatibility:3,logo:0})}}function $e(s){let t,a,e;return{c(){t=A("p"),a=C(s[0]),this.h()},l(i){t=D(i,"P",{class:!0});var n=I(t);a=V(n,s[0]),n.forEach(f),this.h()},h(){G(t,"class",e=s[1](s[0])+" mod-state")},m(i,n){u(i,t,n),_(t,a)},p(i,[n]){n&1&&T(a,i[0]),n&1&&e!==(e=i[1](i[0])+" mod-state")&&G(t,"class",e)},i:m,o:m,d(i){i&&f(t)}}}function pe(s,t,a){let{state:e}=t;const i=n=>`mod-state-${n.toString().toLowerCase()}`;return s.$$set=n=>{"state"in n&&a(0,e=n.state)},[e,i]}class J extends j{constructor(t){super(),q(this,t,pe,$e,F,{state:0})}}function K(s){let t,a,e,i,n,l,p,c,r,d,N;e=new J({props:{state:s[0].EA.state}});let $=s[0].EA.note&&M(s);c=new J({props:{state:s[0].EXP.state}});let g=s[0].EXP.note&&O(s);return{c(){t=A("div"),a=C("Early Access: "),P(e.$$.fragment),i=B(),$&&$.c(),n=B(),l=A("div"),p=C("Experimental: "),P(c.$$.fragment),r=B(),g&&g.c(),d=x()},l(o){t=D(o,"DIV",{});var h=I(t);a=V(h,"Early Access: "),X(e.$$.fragment,h),h.forEach(f),i=S(o),$&&$.l(o),n=S(o),l=D(o,"DIV",{});var W=I(l);p=V(W,"Experimental: "),X(c.$$.fragment,W),W.forEach(f),r=S(o),g&&g.l(o),d=x()},m(o,h){u(o,t,h),_(t,a),v(e,t,null),u(o,i,h),$&&$.m(o,h),u(o,n,h),u(o,l,h),_(l,p),v(c,l,null),u(o,r,h),g&&g.m(o,h),u(o,d,h),N=!0},p(o,h){const W={};h&1&&(W.state=o[0].EA.state),e.$set(W),o[0].EA.note?$?$.p(o,h):($=M(o),$.c(),$.m(n.parentNode,n)):$&&($.d(1),$=null);const Z={};h&1&&(Z.state=o[0].EXP.state),c.$set(Z),o[0].EXP.note?g?g.p(o,h):(g=O(o),g.c(),g.m(d.parentNode,d)):g&&(g.d(1),g=null)},i(o){N||(E(e.$$.fragment,o),E(c.$$.fragment,o),N=!0)},o(o){y(e.$$.fragment,o),y(c.$$.fragment,o),N=!1},d(o){o&&f(t),w(e),o&&f(i),$&&$.d(o),o&&f(n),o&&f(l),w(c),o&&f(r),g&&g.d(o),o&&f(d)}}}function M(s){let t,a,e,i={ctx:s,current:null,token:null,hasCatch:!1,pending:ge,then:he,catch:de,value:1};return H(e=L(s[0].EA.note),i),{c(){t=A("div"),a=C("Note: "),i.block.c()},l(n){t=D(n,"DIV",{});var l=I(t);a=V(l,"Note: "),i.block.l(l),l.forEach(f)},m(n,l){u(n,t,l),_(t,a),i.block.m(t,i.anchor=null),i.mount=()=>t,i.anchor=null},p(n,l){s=n,i.ctx=s,l&1&&e!==(e=L(s[0].EA.note))&&H(e,i)||ee(i,s,l)},d(n){n&&f(t),i.block.d(),i.token=null,i=null}}}function de(s){return{c:m,l:m,m,p:m,d:m}}function he(s){let t,a=s[1]+"",e;return{c(){t=new te(!1),e=x(),this.h()},l(i){t=ie(i,!1),e=x(),this.h()},h(){t.a=e},m(i,n){t.m(a,i,n),u(i,e,n)},p(i,n){n&1&&a!==(a=i[1]+"")&&t.p(a)},d(i){i&&f(e),i&&t.d()}}}function ge(s){return{c:m,l:m,m,p:m,d:m}}function O(s){let t,a,e,i={ctx:s,current:null,token:null,hasCatch:!1,pending:ye,then:Ee,catch:be,value:1};return H(e=L(s[0].EXP.note),i),{c(){t=A("div"),a=C("Note: "),i.block.c()},l(n){t=D(n,"DIV",{});var l=I(t);a=V(l,"Note: "),i.block.l(l),l.forEach(f)},m(n,l){u(n,t,l),_(t,a),i.block.m(t,i.anchor=null),i.mount=()=>t,i.anchor=null},p(n,l){s=n,i.ctx=s,l&1&&e!==(e=L(s[0].EXP.note))&&H(e,i)||ee(i,s,l)},d(n){n&&f(t),i.block.d(),i.token=null,i=null}}}function be(s){return{c:m,l:m,m,p:m,d:m}}function Ee(s){let t,a=s[1]+"",e;return{c(){t=new te(!1),e=x(),this.h()},l(i){t=ie(i,!1),e=x(),this.h()},h(){t.a=e},m(i,n){t.m(a,i,n),u(i,e,n)},p(i,n){n&1&&a!==(a=i[1]+"")&&t.p(a)},d(i){i&&f(e),i&&t.d()}}}function ye(s){return{c:m,l:m,m,p:m,d:m}}function ke(s){let t,a,e=s[0]&&K(s);return{c(){e&&e.c(),t=x()},l(i){e&&e.l(i),t=x()},m(i,n){e&&e.m(i,n),u(i,t,n),a=!0},p(i,[n]){i[0]?e?(e.p(i,n),n&1&&E(e,1)):(e=K(i),e.c(),E(e,1),e.m(t.parentNode,t)):e&&(U(),y(e,1,1,()=>{e=null}),Y())},i(i){a||(E(e),a=!0)},o(i){y(e),a=!1},d(i){e&&e.d(i),i&&f(t)}}}function xe(s,t,a){let{compatibility:e}=t;return s.$$set=i=>{"compatibility"in i&&a(0,e=i.compatibility)},[e]}class Pe extends j{constructor(t){super(),q(this,t,xe,ke,F,{compatibility:0})}}function Xe(s){let t,a;return{c(){t=A("p"),a=C(s[1]),this.h()},l(e){t=D(e,"P",{class:!0});var i=I(t);a=V(i,s[1]),i.forEach(f),this.h()},h(){G(t,"class","material-icons text-base"),k(t,"mod-state-works",s[0].state===b.Works),k(t,"mod-state-damaged",s[0].state===b.Damaged),k(t,"mod-state-broken",s[0].state===b.Broken)},m(e,i){u(e,t,i),_(t,a)},p(e,[i]){i&2&&T(a,e[1]),i&1&&k(t,"mod-state-works",e[0].state===b.Works),i&1&&k(t,"mod-state-damaged",e[0].state===b.Damaged),i&1&&k(t,"mod-state-broken",e[0].state===b.Broken)},i:m,o:m,d(e){e&&f(t)}}}function ve(s,t,a){let{compatibility:e}=t,{EXP:i=!1}=t,n="rocket_launch";return i&&(n="science"),s.$$set=l=>{"compatibility"in l&&a(0,e=l.compatibility),"EXP"in l&&a(2,i=l.EXP)},[e,n,i]}class Q extends j{constructor(t){super(),q(this,t,ve,Xe,F,{compatibility:0,EXP:2})}}function R(s){let t,a,e,i,n,l;t=new ne({props:{class:"min-w-0 m-0",title:"Compatibility information",$$slots:{default:[we]},$$scope:{ctx:s}}}),t.$on("click",s[2]);function p(r){s[3](r)}let c={$$slots:{default:[Ie]},$$scope:{ctx:s}};return s[1]!==void 0&&(c.open=s[1]),i=new ae({props:c}),se.push(()=>le(i,"open",p)),{c(){a=A("div"),P(t.$$.fragment),e=B(),P(i.$$.fragment),this.h()},l(r){a=D(r,"DIV",{style:!0});var d=I(a);X(t.$$.fragment,d),e=S(r),X(i.$$.fragment,r),this.h()},h(){z(a,"display","contents"),z(a,"--mdc-text-button-container-height","20px")},m(r,d){u(r,a,d),v(t,a,null),u(r,e,d),v(i,r,d),l=!0},p(r,d){const N={};d&17&&(N.$$scope={dirty:d,ctx:r}),t.$set(N);const $={};d&17&&($.$$scope={dirty:d,ctx:r}),!n&&d&2&&(n=!0,$.open=r[1],oe(()=>n=!1)),i.$set($)},i(r){l||(E(t.$$.fragment,r),E(i.$$.fragment,r),l=!0)},o(r){y(t.$$.fragment,r),y(i.$$.fragment,r),l=!1},d(r){r&&f(a),w(t,r),r&&f(e),w(i,r)}}}function we(s){let t,a,e,i;return t=new Q({props:{compatibility:s[0].EA}}),e=new Q({props:{compatibility:s[0].EXP,EXP:!0}}),{c(){P(t.$$.fragment),a=B(),P(e.$$.fragment)},l(n){X(t.$$.fragment,n),a=S(n),X(e.$$.fragment,n)},m(n,l){v(t,n,l),u(n,a,l),v(e,n,l),i=!0},p(n,l){const p={};l&1&&(p.compatibility=n[0].EA),t.$set(p);const c={};l&1&&(c.compatibility=n[0].EXP),e.$set(c)},i(n){i||(E(t.$$.fragment,n),E(e.$$.fragment,n),i=!0)},o(n){y(t.$$.fragment,n),y(e.$$.fragment,n),i=!1},d(n){w(t,n),n&&f(a),w(e,n)}}}function Ae(s){let t;return{c(){t=C("Compatibility Information")},l(a){t=V(a,"Compatibility Information")},m(a,e){u(a,t,e)},d(a){a&&f(t)}}}function De(s){let t,a;return t=new Pe({props:{compatibility:s[0]}}),{c(){P(t.$$.fragment)},l(e){X(t.$$.fragment,e)},m(e,i){v(t,e,i),a=!0},p(e,i){const n={};i&1&&(n.compatibility=e[0]),t.$set(n)},i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}function Ie(s){let t,a,e,i;return t=new re({props:{$$slots:{default:[Ae]},$$scope:{ctx:s}}}),e=new fe({props:{$$slots:{default:[De]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment),a=B(),P(e.$$.fragment)},l(n){X(t.$$.fragment,n),a=S(n),X(e.$$.fragment,n)},m(n,l){v(t,n,l),u(n,a,l),v(e,n,l),i=!0},p(n,l){const p={};l&16&&(p.$$scope={dirty:l,ctx:n}),t.$set(p);const c={};l&17&&(c.$$scope={dirty:l,ctx:n}),e.$set(c)},i(n){i||(E(t.$$.fragment,n),E(e.$$.fragment,n),i=!0)},o(n){y(t.$$.fragment,n),y(e.$$.fragment,n),i=!1},d(n){w(t,n),n&&f(a),w(e,n)}}}function Ne(s){let t,a,e=s[0]&&R(s);return{c(){e&&e.c(),t=x()},l(i){e&&e.l(i),t=x()},m(i,n){e&&e.m(i,n),u(i,t,n),a=!0},p(i,[n]){i[0]?e?(e.p(i,n),n&1&&E(e,1)):(e=R(i),e.c(),E(e,1),e.m(t.parentNode,t)):e&&(U(),y(e,1,1,()=>{e=null}),Y())},i(i){a||(E(e),a=!0)},o(i){y(e),a=!1},d(i){e&&e.d(i),i&&f(t)}}}function Ce(s,t,a){let e=!1,{compatibility:i}=t;const n=()=>{a(1,e=!0)};function l(p){e=p,a(1,e)}return s.$$set=p=>{"compatibility"in p&&a(0,i=p.compatibility)},[i,e,n,l]}class _e extends j{constructor(t){super(),q(this,t,Ce,Ne,F,{compatibility:0})}}export{_e as C,Se as O};
//# sourceMappingURL=CompatibilityButton-23eab7b7.js.map
