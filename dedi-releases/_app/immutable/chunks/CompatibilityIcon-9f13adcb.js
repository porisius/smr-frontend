import{S as F,i as G,s as H,b as N,j as u,q as f,f as r,e as v,c as D,d as X,a7 as j,h as se,aS as w,aa as A,ab as I,a5 as x,a as W,g as U,k as fe,t as q,l as ue,m as J,Z as Q,_ as Y,$ as ee,ac as K,a1 as te,bd as Z,be as le,bl as re,bm as ce}from"./vendor-5faff0be.js";import{u as y}from"./graphql-1bd1fc10.js";import{m as z}from"./markdown-6a2ff7f0.js";function ie(o){let e;return{c(){e=v("div"),this.h()},l(n){e=D(n,"DIV",{class:!0,style:!0}),X(e).forEach(r),this.h()},h(){j(e,"class","mod-outdated-stripe"),se(e,"max-width","inherit"),w(e,"mod-damaged",o[1]===y.Damaged),w(e,"mod-broken",o[1]===y.Broken),w(e,"mod-logo-outdated",o[0])},m(n,i){u(n,e,i)},p(n,i){i&2&&w(e,"mod-damaged",n[1]===y.Damaged),i&2&&w(e,"mod-broken",n[1]===y.Broken),i&1&&w(e,"mod-logo-outdated",n[0])},d(n){n&&r(e)}}}function de(o){let e,n=!o[2]&&ie(o);return{c(){n&&n.c(),e=N()},l(i){n&&n.l(i),e=N()},m(i,t){n&&n.m(i,t),u(i,e,t)},p(i,[t]){i[2]?n&&(n.d(1),n=null):n?n.p(i,t):(n=ie(i),n.c(),n.m(e.parentNode,e))},i:f,o:f,d(i){n&&n.d(i),i&&r(e)}}}function me(o,e,n){let i,{compatibility:t}=e,{logo:s=!1}=e;function l(p){const m=p.EA.state;return m==y.Broken?m:m==y.Works||p.EXP.state!=y.Works?p.EXP.state:m}let $=y.Works;return o.$$set=p=>{"compatibility"in p&&n(3,t=p.compatibility),"logo"in p&&n(0,s=p.logo)},o.$$.update=()=>{o.$$.dirty&8&&(t?n(1,$=l(t)):n(1,$=y.Works)),o.$$.dirty&2&&n(2,i=$===y.Works)},[s,$,i,t]}class Ve extends F{constructor(e){super(),G(this,e,me,de,H,{compatibility:3,logo:0})}}function he(o){let e,n;return{c(){e=v("p"),n=A(o[0]),this.h()},l(i){e=D(i,"P",{class:!0});var t=X(e);n=I(t,o[0]),t.forEach(r),this.h()},h(){j(e,"class",o[1](o[0])+" mod-state")},m(i,t){u(i,e,t),x(e,n)},p:f,i:f,o:f,d(i){i&&r(e)}}}function pe(o,e,n){let{state:i=null}=e;const t=i??"Unknown",s=l=>`mod-state-${l.toString().toLowerCase()}`;return o.$$set=l=>{"state"in l&&n(2,i=l.state)},[t,s,i]}class ne extends F{constructor(e){super(),G(this,e,pe,he,H,{state:2})}}function be(o){let e,n=o[1].Unknown+"",i;return{c(){e=v("div"),i=A(n)},l(t){e=D(t,"DIV",{});var s=X(e);i=I(s,n),s.forEach(r)},m(t,s){u(t,e,s),x(e,i)},p:f,i:f,o:f,d(t){t&&r(e)}}}function ke(o){let e,n,i,t,s,l=o[1][o[0]?.EA?.state||"Unknown"]+"",$,p,m,b,B,P,S,k,C,c,h=o[1][o[0]?.EXP?.state||"Unknown"]+"",V,O,T,R;i=new ne({props:{state:o[0]?.EA?.state}});let g=o[0].EA.note&&oe(o);k=new ne({props:{state:o[0]?.EXP?.state}});let E=o[0].EXP.note&&ae(o);return{c(){e=v("div"),n=A("Early Access: "),Q(i.$$.fragment),t=W(),s=v("div"),$=A(l),p=W(),g&&g.c(),m=W(),b=v("br"),B=W(),P=v("div"),S=A("Experimental: "),Q(k.$$.fragment),C=W(),c=v("div"),V=A(h),O=W(),E&&E.c(),T=N(),this.h()},l(a){e=D(a,"DIV",{});var d=X(e);n=I(d,"Early Access: "),Y(i.$$.fragment,d),d.forEach(r),t=U(a),s=D(a,"DIV",{class:!0});var L=X(s);$=I(L,l),L.forEach(r),p=U(a),g&&g.l(a),m=U(a),b=D(a,"BR",{}),B=U(a),P=D(a,"DIV",{});var _=X(P);S=I(_,"Experimental: "),Y(k.$$.fragment,_),_.forEach(r),C=U(a),c=D(a,"DIV",{class:!0});var M=X(c);V=I(M,h),M.forEach(r),O=U(a),E&&E.l(a),T=N(),this.h()},h(){j(s,"class","compatibility-state-description"),j(c,"class","compatibility-state-description")},m(a,d){u(a,e,d),x(e,n),ee(i,e,null),u(a,t,d),u(a,s,d),x(s,$),u(a,p,d),g&&g.m(a,d),u(a,m,d),u(a,b,d),u(a,B,d),u(a,P,d),x(P,S),ee(k,P,null),u(a,C,d),u(a,c,d),x(c,V),u(a,O,d),E&&E.m(a,d),u(a,T,d),R=!0},p(a,d){const L={};d&1&&(L.state=a[0]?.EA?.state),i.$set(L),(!R||d&1)&&l!==(l=a[1][a[0]?.EA?.state||"Unknown"]+"")&&K($,l),a[0].EA.note?g?g.p(a,d):(g=oe(a),g.c(),g.m(m.parentNode,m)):g&&(g.d(1),g=null);const _={};d&1&&(_.state=a[0]?.EXP?.state),k.$set(_),(!R||d&1)&&h!==(h=a[1][a[0]?.EXP?.state||"Unknown"]+"")&&K(V,h),a[0].EXP.note?E?E.p(a,d):(E=ae(a),E.c(),E.m(T.parentNode,T)):E&&(E.d(1),E=null)},i(a){R||(J(i.$$.fragment,a),J(k.$$.fragment,a),R=!0)},o(a){q(i.$$.fragment,a),q(k.$$.fragment,a),R=!1},d(a){a&&r(e),te(i),a&&r(t),a&&r(s),a&&r(p),g&&g.d(a),a&&r(m),a&&r(b),a&&r(B),a&&r(P),te(k),a&&r(C),a&&r(c),a&&r(O),E&&E.d(a),a&&r(T)}}}function oe(o){let e,n,i,t={ctx:o,current:null,token:null,hasCatch:!1,pending:ye,then:Ee,catch:ge,value:2};return Z(i=z(o[0].EA.note),t),{c(){e=v("div"),n=A("Note: "),t.block.c()},l(s){e=D(s,"DIV",{});var l=X(e);n=I(l,"Note: "),t.block.l(l),l.forEach(r)},m(s,l){u(s,e,l),x(e,n),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(s,l){o=s,t.ctx=o,l&1&&i!==(i=z(o[0].EA.note))&&Z(i,t)||le(t,o,l)},d(s){s&&r(e),t.block.d(),t.token=null,t=null}}}function ge(o){return{c:f,l:f,m:f,p:f,d:f}}function Ee(o){let e,n=o[2]+"",i;return{c(){e=new re(!1),i=N(),this.h()},l(t){e=ce(t,!1),i=N(),this.h()},h(){e.a=i},m(t,s){e.m(n,t,s),u(t,i,s)},p(t,s){s&1&&n!==(n=t[2]+"")&&e.p(n)},d(t){t&&r(i),t&&e.d()}}}function ye(o){return{c:f,l:f,m:f,p:f,d:f}}function ae(o){let e,n,i,t={ctx:o,current:null,token:null,hasCatch:!1,pending:ve,then:we,catch:$e,value:2};return Z(i=z(o[0].EXP.note),t),{c(){e=v("div"),n=A("Note: "),t.block.c()},l(s){e=D(s,"DIV",{});var l=X(e);n=I(l,"Note: "),t.block.l(l),l.forEach(r)},m(s,l){u(s,e,l),x(e,n),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(s,l){o=s,t.ctx=o,l&1&&i!==(i=z(o[0].EXP.note))&&Z(i,t)||le(t,o,l)},d(s){s&&r(e),t.block.d(),t.token=null,t=null}}}function $e(o){return{c:f,l:f,m:f,p:f,d:f}}function we(o){let e,n=o[2]+"",i;return{c(){e=new re(!1),i=N(),this.h()},l(t){e=ce(t,!1),i=N(),this.h()},h(){e.a=i},m(t,s){e.m(n,t,s),u(t,i,s)},p(t,s){s&1&&n!==(n=t[2]+"")&&e.p(n)},d(t){t&&r(i),t&&e.d()}}}function ve(o){return{c:f,l:f,m:f,p:f,d:f}}function De(o){let e,n,i,t,s,l,$,p,m,b,B,P;const S=[ke,be],k=[];function C(c,h){return c[0]?0:1}return m=C(o),b=k[m]=S[m](o),{c(){e=v("div"),n=A("Compatibility information is maintained by the community. If you encounter issues with a mod, please report it on the "),i=v("a"),t=A("Discord"),s=A("!"),l=W(),$=v("br"),p=W(),b.c(),B=N(),this.h()},l(c){e=D(c,"DIV",{});var h=X(e);n=I(h,"Compatibility information is maintained by the community. If you encounter issues with a mod, please report it on the "),i=D(h,"A",{href:!0,style:!0});var V=X(i);t=I(V,"Discord"),V.forEach(r),s=I(h,"!"),h.forEach(r),l=U(c),$=D(c,"BR",{}),p=U(c),b.l(c),B=N(),this.h()},h(){j(i,"href","https://discord.gg/xkVJ73E"),se(i,"text-decoration","underline")},m(c,h){u(c,e,h),x(e,n),x(e,i),x(i,t),x(e,s),u(c,l,h),u(c,$,h),u(c,p,h),k[m].m(c,h),u(c,B,h),P=!0},p(c,[h]){let V=m;m=C(c),m===V?k[m].p(c,h):(fe(),q(k[V],1,1,()=>{k[V]=null}),ue(),b=k[m],b?b.p(c,h):(b=k[m]=S[m](c),b.c()),J(b,1),b.m(B.parentNode,B))},i(c){P||(J(b),P=!0)},o(c){q(b),P=!1},d(c){c&&r(e),c&&r(l),c&&r($),c&&r(p),k[m].d(c),c&&r(B)}}}function xe(o,e,n){let{compatibility:i}=e;const t={Works:"The mod should be functioning as intended.",Damaged:"Something is causing the mod to work improperly, but it is partially working. Be sure to read the note and see an explanation of what is going wrong!",Broken:"The mod is suffering from a critical problem and could do things like crash your game at launch if you were to install it. Be sure to read the note and see an explanation of what is going wrong!",Unknown:"No compatibility information has been reported for this mod yet. Try it out and contact us on the Discord so it can be updated!"};return o.$$set=s=>{"compatibility"in s&&n(0,i=s.compatibility)},[i,t]}class Ne extends F{constructor(e){super(),G(this,e,xe,De,H,{compatibility:0,compatibilityStateDescriptions:1})}get compatibilityStateDescriptions(){return this.$$.ctx[1]}}function Pe(o){let e,n;return{c(){e=v("p"),n=A(o[1]),this.h()},l(i){e=D(i,"P",{class:!0});var t=X(e);n=I(t,o[1]),t.forEach(r),this.h()},h(){j(e,"class","material-icons text-base"),w(e,"mod-state-works",o[0]?.state===y.Works),w(e,"mod-state-damaged",o[0]?.state===y.Damaged),w(e,"mod-state-broken",o[0]?.state===y.Broken),w(e,"mod-state-unknown",!o[0])},m(i,t){u(i,e,t),x(e,n)},p(i,[t]){t&2&&K(n,i[1]),t&1&&w(e,"mod-state-works",i[0]?.state===y.Works),t&1&&w(e,"mod-state-damaged",i[0]?.state===y.Damaged),t&1&&w(e,"mod-state-broken",i[0]?.state===y.Broken),t&1&&w(e,"mod-state-unknown",!i[0])},i:f,o:f,d(i){i&&r(e)}}}function Xe(o,e,n){let{compatibility:i=null}=e,{EXP:t=!1}=e,s="rocket_launch";return t&&(s="science"),o.$$set=l=>{"compatibility"in l&&n(0,i=l.compatibility),"EXP"in l&&n(2,t=l.EXP)},[i,s,t]}class We extends F{constructor(e){super(),G(this,e,Xe,Pe,H,{compatibility:0,EXP:2})}}export{We as C,Ve as O,Ne as a,ne as b};
//# sourceMappingURL=CompatibilityIcon-9f13adcb.js.map