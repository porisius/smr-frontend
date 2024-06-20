import{S as R,i as Z,s as z,b as U,j as u,q as d,f as c,e as v,c as D,d as A,a7 as H,aS as x,aa as I,ab as V,a5 as B,ac as K,a as W,g as S,h as Y,k as ce,t as C,l as fe,m as N,Z as T,_,$ as j,a1 as q,bd as M,be as se,bl as re,bm as le,aH as me,aA as ue,u as de,ad as pe,ae as $e,aF as he,aG as ge}from"./vendor-5faff0be.js";import{u as w}from"./graphql-39b507e4.js";import{m as Q}from"./markdown-6a2ff7f0.js";function te(o){let e;return{c(){e=v("div"),this.h()},l(n){e=D(n,"DIV",{class:!0}),A(e).forEach(c),this.h()},h(){H(e,"class","mod-outdated-stripe"),x(e,"mod-damaged",o[1]===w.Damaged),x(e,"mod-broken",o[1]===w.Broken),x(e,"mod-logo-outdated",o[0])},m(n,t){u(n,e,t)},p(n,t){t&2&&x(e,"mod-damaged",n[1]===w.Damaged),t&2&&x(e,"mod-broken",n[1]===w.Broken),t&1&&x(e,"mod-logo-outdated",n[0])},d(n){n&&c(e)}}}function be(o){let e,n=!o[2]&&te(o);return{c(){n&&n.c(),e=U()},l(t){n&&n.l(t),e=U()},m(t,i){n&&n.m(t,i),u(t,e,i)},p(t,[i]){t[2]?n&&(n.d(1),n=null):n?n.p(t,i):(n=te(t),n.c(),n.m(e.parentNode,e))},i:d,o:d,d(t){n&&n.d(t),t&&c(e)}}}function ye(o,e,n){let t,{compatibility:i}=e,{logo:a=!1}=e;function s(p){const l=p.EA.state;return l==w.Broken?l:l==w.Works||p.EXP.state!=w.Works?p.EXP.state:l}let $=w.Works;return o.$$set=p=>{"compatibility"in p&&n(3,i=p.compatibility),"logo"in p&&n(0,a=p.logo)},o.$$.update=()=>{o.$$.dirty&8&&(i?n(1,$=s(i)):n(1,$=w.Works)),o.$$.dirty&2&&n(2,t=$===w.Works)},[a,$,t,i]}class Je extends R{constructor(e){super(),Z(this,e,ye,be,z,{compatibility:3,logo:0})}}function ke(o){let e,n,t;return{c(){e=v("p"),n=I(o[0]),this.h()},l(i){e=D(i,"P",{class:!0});var a=A(e);n=V(a,o[0]),a.forEach(c),this.h()},h(){H(e,"class",t=o[1](o[0])+" mod-state")},m(i,a){u(i,e,a),B(e,n)},p(i,[a]){a&1&&K(n,i[0]),a&1&&t!==(t=i[1](i[0])+" mod-state")&&H(e,"class",t)},i:d,o:d,d(i){i&&c(e)}}}function Ee(o,e,n){let{state:t}=e;const i=a=>`mod-state-${a.toString().toLowerCase()}`;return o.$$set=a=>{"state"in a&&n(0,t=a.state)},[t,i]}class ie extends R{constructor(e){super(),Z(this,e,Ee,ke,z,{state:0})}}function we(o){let e,n=o[1].Unknown+"",t;return{c(){e=v("div"),t=I(n)},l(i){e=D(i,"DIV",{});var a=A(e);t=V(a,n),a.forEach(c)},m(i,a){u(i,e,a),B(e,t)},p:d,i:d,o:d,d(i){i&&c(e)}}}function xe(o){let e,n,t,i,a,s=o[1][o[0]?.EA?.state||"Unknown"]+"",$,p,l,m,P,b,G,y,F=o[1][o[0]?.EXP?.state||"Unknown"]+"",f,g,X,J;t=new ie({props:{state:o[0]?.EA?.state}});let k=o[0].EA.note&&ae(o);b=new ie({props:{state:o[0]?.EXP?.state}});let E=o[0].EXP.note&&ne(o);return{c(){e=v("div"),n=I("Early Access: "),T(t.$$.fragment),i=W(),a=v("div"),$=I(s),p=W(),k&&k.c(),l=W(),m=v("div"),P=I("Experimental: "),T(b.$$.fragment),G=W(),y=v("div"),f=I(F),g=W(),E&&E.c(),X=U(),this.h()},l(r){e=D(r,"DIV",{});var h=A(e);n=V(h,"Early Access: "),_(t.$$.fragment,h),h.forEach(c),i=S(r),a=D(r,"DIV",{class:!0});var O=A(a);$=V(O,s),O.forEach(c),p=S(r),k&&k.l(r),l=S(r),m=D(r,"DIV",{});var L=A(m);P=V(L,"Experimental: "),_(b.$$.fragment,L),L.forEach(c),G=S(r),y=D(r,"DIV",{class:!0});var ee=A(y);f=V(ee,F),ee.forEach(c),g=S(r),E&&E.l(r),X=U(),this.h()},h(){H(a,"class","compatibility-state-description"),H(y,"class","compatibility-state-description")},m(r,h){u(r,e,h),B(e,n),j(t,e,null),u(r,i,h),u(r,a,h),B(a,$),u(r,p,h),k&&k.m(r,h),u(r,l,h),u(r,m,h),B(m,P),j(b,m,null),u(r,G,h),u(r,y,h),B(y,f),u(r,g,h),E&&E.m(r,h),u(r,X,h),J=!0},p(r,h){const O={};h&1&&(O.state=r[0]?.EA?.state),t.$set(O),(!J||h&1)&&s!==(s=r[1][r[0]?.EA?.state||"Unknown"]+"")&&K($,s),r[0].EA.note?k?k.p(r,h):(k=ae(r),k.c(),k.m(l.parentNode,l)):k&&(k.d(1),k=null);const L={};h&1&&(L.state=r[0]?.EXP?.state),b.$set(L),(!J||h&1)&&F!==(F=r[1][r[0]?.EXP?.state||"Unknown"]+"")&&K(f,F),r[0].EXP.note?E?E.p(r,h):(E=ne(r),E.c(),E.m(X.parentNode,X)):E&&(E.d(1),E=null)},i(r){J||(N(t.$$.fragment,r),N(b.$$.fragment,r),J=!0)},o(r){C(t.$$.fragment,r),C(b.$$.fragment,r),J=!1},d(r){r&&c(e),q(t),r&&c(i),r&&c(a),r&&c(p),k&&k.d(r),r&&c(l),r&&c(m),q(b),r&&c(G),r&&c(y),r&&c(g),E&&E.d(r),r&&c(X)}}}function ae(o){let e,n,t,i={ctx:o,current:null,token:null,hasCatch:!1,pending:Pe,then:De,catch:ve,value:2};return M(t=Q(o[0].EA.note),i),{c(){e=v("div"),n=I("Note: "),i.block.c()},l(a){e=D(a,"DIV",{});var s=A(e);n=V(s,"Note: "),i.block.l(s),s.forEach(c)},m(a,s){u(a,e,s),B(e,n),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=null},p(a,s){o=a,i.ctx=o,s&1&&t!==(t=Q(o[0].EA.note))&&M(t,i)||se(i,o,s)},d(a){a&&c(e),i.block.d(),i.token=null,i=null}}}function ve(o){return{c:d,l:d,m:d,p:d,d}}function De(o){let e,n=o[2]+"",t;return{c(){e=new re(!1),t=U(),this.h()},l(i){e=le(i,!1),t=U(),this.h()},h(){e.a=t},m(i,a){e.m(n,i,a),u(i,t,a)},p(i,a){a&1&&n!==(n=i[2]+"")&&e.p(n)},d(i){i&&c(t),i&&e.d()}}}function Pe(o){return{c:d,l:d,m:d,p:d,d}}function ne(o){let e,n,t,i={ctx:o,current:null,token:null,hasCatch:!1,pending:Ie,then:Ae,catch:Xe,value:2};return M(t=Q(o[0].EXP.note),i),{c(){e=v("div"),n=I("Note: "),i.block.c()},l(a){e=D(a,"DIV",{});var s=A(e);n=V(s,"Note: "),i.block.l(s),s.forEach(c)},m(a,s){u(a,e,s),B(e,n),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=null},p(a,s){o=a,i.ctx=o,s&1&&t!==(t=Q(o[0].EXP.note))&&M(t,i)||se(i,o,s)},d(a){a&&c(e),i.block.d(),i.token=null,i=null}}}function Xe(o){return{c:d,l:d,m:d,p:d,d}}function Ae(o){let e,n=o[2]+"",t;return{c(){e=new re(!1),t=U(),this.h()},l(i){e=le(i,!1),t=U(),this.h()},h(){e.a=t},m(i,a){e.m(n,i,a),u(i,t,a)},p(i,a){a&1&&n!==(n=i[2]+"")&&e.p(n)},d(i){i&&c(t),i&&e.d()}}}function Ie(o){return{c:d,l:d,m:d,p:d,d}}function Ve(o){let e,n,t,i,a,s,$,p,l,m,P,b;const G=[xe,we],y=[];function F(f,g){return f[0]?0:1}return l=F(o),m=y[l]=G[l](o),{c(){e=v("div"),n=I("Compatibility information is maintained by the community. If you encounter issues with a mod, please report it on the "),t=v("a"),i=I("Discord"),a=I("!"),s=W(),$=v("br"),p=W(),m.c(),P=U(),this.h()},l(f){e=D(f,"DIV",{});var g=A(e);n=V(g,"Compatibility information is maintained by the community. If you encounter issues with a mod, please report it on the "),t=D(g,"A",{href:!0,style:!0});var X=A(t);i=V(X,"Discord"),X.forEach(c),a=V(g,"!"),g.forEach(c),s=S(f),$=D(f,"BR",{}),p=S(f),m.l(f),P=U(),this.h()},h(){H(t,"href","https://discord.gg/xkVJ73E"),Y(t,"text-decoration","underline")},m(f,g){u(f,e,g),B(e,n),B(e,t),B(t,i),B(e,a),u(f,s,g),u(f,$,g),u(f,p,g),y[l].m(f,g),u(f,P,g),b=!0},p(f,[g]){let X=l;l=F(f),l===X?y[l].p(f,g):(ce(),C(y[X],1,1,()=>{y[X]=null}),fe(),m=y[l],m?m.p(f,g):(m=y[l]=G[l](f),m.c()),N(m,1),m.m(P.parentNode,P))},i(f){b||(N(m),b=!0)},o(f){C(m),b=!1},d(f){f&&c(e),f&&c(s),f&&c($),f&&c(p),y[l].d(f),f&&c(P)}}}function Be(o,e,n){let{compatibility:t}=e;const i={Works:"The mod should be functioning as intended.",Damaged:"Something is causing the mod to work improperly, but it is partially working. Be sure to read the note and see an explanation of what is going wrong!",Broken:"The mod is suffering from a critical problem and could do things like crash your game at launch if you were to install it. Be sure to read the note and see an explanation of what is going wrong!",Unknown:"No compatibility information has been reported for this mod yet. Try it out and contact us on the Discord so it can be updated!"};return o.$$set=a=>{"compatibility"in a&&n(0,t=a.compatibility)},[t,i]}class Ce extends R{constructor(e){super(),Z(this,e,Be,Ve,z,{compatibility:0,compatibilityStateDescriptions:1})}get compatibilityStateDescriptions(){return this.$$.ctx[1]}}function Ne(o){let e,n;return{c(){e=v("p"),n=I(o[1]),this.h()},l(t){e=D(t,"P",{class:!0});var i=A(e);n=V(i,o[1]),i.forEach(c),this.h()},h(){H(e,"class","material-icons text-base"),x(e,"mod-state-works",o[0]?.state===w.Works),x(e,"mod-state-damaged",o[0]?.state===w.Damaged),x(e,"mod-state-broken",o[0]?.state===w.Broken),x(e,"mod-state-unknown",!o[0])},m(t,i){u(t,e,i),B(e,n)},p(t,[i]){i&2&&K(n,t[1]),i&1&&x(e,"mod-state-works",t[0]?.state===w.Works),i&1&&x(e,"mod-state-damaged",t[0]?.state===w.Damaged),i&1&&x(e,"mod-state-broken",t[0]?.state===w.Broken),i&1&&x(e,"mod-state-unknown",!t[0])},i:d,o:d,d(t){t&&c(e)}}}function We(o,e,n){let{compatibility:t}=e,{EXP:i=!1}=e,a="rocket_launch";return i&&(a="science"),o.$$set=s=>{"compatibility"in s&&n(0,t=s.compatibility),"EXP"in s&&n(2,i=s.EXP)},[t,a,i]}class oe extends R{constructor(e){super(),Z(this,e,We,Ne,z,{compatibility:0,EXP:2})}}function Se(o){let e,n,t,i;return e=new oe({props:{compatibility:o[0]?.EA}}),t=new oe({props:{compatibility:o[0]?.EXP,EXP:!0}}),{c(){T(e.$$.fragment),n=W(),T(t.$$.fragment)},l(a){_(e.$$.fragment,a),n=S(a),_(t.$$.fragment,a)},m(a,s){j(e,a,s),u(a,n,s),j(t,a,s),i=!0},p(a,s){const $={};s&1&&($.compatibility=a[0]?.EA),e.$set($);const p={};s&1&&(p.compatibility=a[0]?.EXP),t.$set(p)},i(a){i||(N(e.$$.fragment,a),N(t.$$.fragment,a),i=!0)},o(a){C(e.$$.fragment,a),C(t.$$.fragment,a),i=!1},d(a){q(e,a),a&&c(n),q(t,a)}}}function Ue(o){let e;return{c(){e=I("Compatibility Information")},l(n){e=V(n,"Compatibility Information")},m(n,t){u(n,e,t)},d(n){n&&c(e)}}}function Te(o){let e,n;return e=new Ce({props:{compatibility:o[0]}}),{c(){T(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,i){j(e,t,i),n=!0},p(t,i){const a={};i&1&&(a.compatibility=t[0]),e.$set(a)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function _e(o){let e,n,t,i;return e=new he({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),t=new ge({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment),n=W(),T(t.$$.fragment)},l(a){_(e.$$.fragment,a),n=S(a),_(t.$$.fragment,a)},m(a,s){j(e,a,s),u(a,n,s),j(t,a,s),i=!0},p(a,s){const $={};s&16&&($.$$scope={dirty:s,ctx:a}),e.$set($);const p={};s&17&&(p.$$scope={dirty:s,ctx:a}),t.$set(p)},i(a){i||(N(e.$$.fragment,a),N(t.$$.fragment,a),i=!0)},o(a){C(e.$$.fragment,a),C(t.$$.fragment,a),i=!1},d(a){q(e,a),a&&c(n),q(t,a)}}}function je(o){let e,n,t,i,a,s;e=new me({props:{class:"min-w-0 m-0",title:"Compatibility information (click to view more info)",$$slots:{default:[Se]},$$scope:{ctx:o}}}),e.$on("click",o[2]);function $(l){o[3](l)}let p={$$slots:{default:[_e]},$$scope:{ctx:o}};return o[1]!==void 0&&(p.open=o[1]),i=new ue({props:p}),de.push(()=>pe(i,"open",$)),{c(){n=v("div"),T(e.$$.fragment),t=W(),T(i.$$.fragment),this.h()},l(l){n=D(l,"DIV",{style:!0});var m=A(n);_(e.$$.fragment,m),t=S(l),_(i.$$.fragment,l),this.h()},h(){Y(n,"display","contents"),Y(n,"--mdc-text-button-container-height","20px")},m(l,m){u(l,n,m),j(e,n,null),u(l,t,m),j(i,l,m),s=!0},p(l,[m]){const P={};m&17&&(P.$$scope={dirty:m,ctx:l}),e.$set(P);const b={};m&17&&(b.$$scope={dirty:m,ctx:l}),!a&&m&2&&(a=!0,b.open=l[1],$e(()=>a=!1)),i.$set(b)},i(l){s||(N(e.$$.fragment,l),N(i.$$.fragment,l),s=!0)},o(l){C(e.$$.fragment,l),C(i.$$.fragment,l),s=!1},d(l){l&&c(n),q(e,l),l&&c(t),q(i,l)}}}function qe(o,e,n){let t=!1,{compatibility:i}=e;const a=()=>{n(1,t=!0)};function s($){t=$,n(1,t)}return o.$$set=$=>{"compatibility"in $&&n(0,i=$.compatibility)},[i,t,a,s]}class Le extends R{constructor(e){super(),Z(this,e,qe,je,z,{compatibility:0})}}export{Le as C,Je as O};
//# sourceMappingURL=CompatibilityButton-593d5045.js.map