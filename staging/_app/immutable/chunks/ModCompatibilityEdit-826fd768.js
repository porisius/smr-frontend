import{S as M,i as N,s as O,u as w,ad as A,Z as u,a as x,e as D,_ as m,g as h,c as F,$ as p,j as y,ae as C,m as o,t as c,a1 as g,f as b,b as I,k as G,l as H,aM as J,aa as q,ab as P,q as K,bk as L,bl as S,bm as R,bn as T}from"./vendor-93f46a94.js";import{C as E}from"./graphql-663dc1a6.js";import{S as Q,T as U,g as V,O as Y}from"./forms-98f7f7a2.js";function W(s,t,n){const e=s.slice();return e[3]=t[n],e}function ee(s){let t=s[3]+"",n;return{c(){n=q(t)},l(e){n=P(e,t)},m(e,i){y(e,n,i)},p:K,d(e){e&&b(n)}}}function B(s){let t,n;return t=new Y({props:{value:s[3],$$slots:{default:[ee]},$$scope:{ctx:s}}}),{c(){u(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,i){p(t,e,i),n=!0},p(e,i){const r={};i&64&&(r.$$scope={dirty:i,ctx:e}),t.$set(r)},i(e){n||(o(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function te(s){let t,n,e=Object.values(E),i=[];for(let $=0;$<e.length;$+=1)i[$]=B(W(s,e,$));const r=$=>c(i[$],1,1,()=>{i[$]=null});return{c(){for(let $=0;$<i.length;$+=1)i[$].c();t=I()},l($){for(let l=0;l<i.length;l+=1)i[l].l($);t=I()},m($,l){for(let a=0;a<i.length;a+=1)i[a].m($,l);y($,t,l),n=!0},p($,l){if(l&0){e=Object.values(E);let a;for(a=0;a<e.length;a+=1){const v=W($,e,a);i[a]?(i[a].p(v,l),o(i[a],1)):(i[a]=B(v),i[a].c(),o(i[a],1),i[a].m(t.parentNode,t))}for(G(),a=e.length;a<i.length;a+=1)r(a);H()}},i($){if(!n){for(let l=0;l<e.length;l+=1)o(i[l]);n=!0}},o($){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)c(i[l]);n=!1},d($){J(i,$),$&&b(t)}}}function $e(s){let t;return{c(){t=q("A small description regarding the compatibility.")},l(n){t=P(n,"A small description regarding the compatibility.")},m(n,e){y(n,t,e)},d(n){n&&b(t)}}}function re(s){let t,n;return t=new V({props:{slot:"helper",$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){u(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,i){p(t,e,i),n=!0},p(e,i){const r={};i&64&&(r.$$scope={dirty:i,ctx:e}),t.$set(r)},i(e){n||(o(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function ne(s){let t,n,e,i,r,$,l,a;function v(f){s[1](f)}let _={style:"margin-bottom: 10px",label:"Compatibility State",$$slots:{default:[te]},$$scope:{ctx:s}};s[0].state!==void 0&&(_.value=s[0].state),t=new Q({props:_}),w.push(()=>A(t,"value",v));function z(f){s[2](f)}let j={textarea:!0,label:"Note",$$slots:{helper:[re]},$$scope:{ctx:s}};return s[0].note!==void 0&&(j.value=s[0].note),$=new U({props:j}),w.push(()=>A($,"value",z)),{c(){u(t.$$.fragment),e=x(),i=D("br"),r=x(),u($.$$.fragment)},l(f){m(t.$$.fragment,f),e=h(f),i=F(f,"BR",{}),r=h(f),m($.$$.fragment,f)},m(f,d){p(t,f,d),y(f,e,d),y(f,i,d),y(f,r,d),p($,f,d),a=!0},p(f,[d]){const X={};d&64&&(X.$$scope={dirty:d,ctx:f}),!n&&d&1&&(n=!0,X.value=f[0].state,C(()=>n=!1)),t.$set(X);const k={};d&64&&(k.$$scope={dirty:d,ctx:f}),!l&&d&1&&(l=!0,k.value=f[0].note,C(()=>l=!1)),$.$set(k)},i(f){a||(o(t.$$.fragment,f),o($.$$.fragment,f),a=!0)},o(f){c(t.$$.fragment,f),c($.$$.fragment,f),a=!1},d(f){g(t,f),f&&b(e),f&&b(i),f&&b(r),g($,f)}}}function ie(s,t,n){let{compatibility:e={state:E.Works}}=t;function i($){s.$$.not_equal(e.state,$)&&(e.state=$,n(0,e))}function r($){s.$$.not_equal(e.note,$)&&(e.note=$,n(0,e))}return s.$$set=$=>{"compatibility"in $&&n(0,e=$.compatibility)},[e,i,r]}class Z extends M{constructor(t){super(),N(this,t,ie,ne,O,{compatibility:0})}}function se(s){let t;return{c(){t=q("Early Access - Compatibility")},l(n){t=P(n,"Early Access - Compatibility")},m(n,e){y(n,t,e)},d(n){n&&b(t)}}}function ae(s){let t,n,e;function i($){s[1]($)}let r={};return s[0].EA!==void 0&&(r.compatibility=s[0].EA),t=new Z({props:r}),w.push(()=>A(t,"compatibility",i)),{c(){u(t.$$.fragment)},l($){m(t.$$.fragment,$)},m($,l){p(t,$,l),e=!0},p($,l){const a={};!n&&l&1&&(n=!0,a.compatibility=$[0].EA,C(()=>n=!1)),t.$set(a)},i($){e||(o(t.$$.fragment,$),e=!0)},o($){c(t.$$.fragment,$),e=!1},d($){g(t,$)}}}function le(s){let t,n,e,i;return t=new R({props:{$$slots:{default:[se]},$$scope:{ctx:s}}}),e=new T({props:{$$slots:{default:[ae]},$$scope:{ctx:s}}}),{c(){u(t.$$.fragment),n=x(),u(e.$$.fragment)},l(r){m(t.$$.fragment,r),n=h(r),m(e.$$.fragment,r)},m(r,$){p(t,r,$),y(r,n,$),p(e,r,$),i=!0},p(r,$){const l={};$&8&&(l.$$scope={dirty:$,ctx:r}),t.$set(l);const a={};$&9&&(a.$$scope={dirty:$,ctx:r}),e.$set(a)},i(r){i||(o(t.$$.fragment,r),o(e.$$.fragment,r),i=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),i=!1},d(r){g(t,r),r&&b(n),g(e,r)}}}function fe(s){let t;return{c(){t=q("Experimental - Compatibility")},l(n){t=P(n,"Experimental - Compatibility")},m(n,e){y(n,t,e)},d(n){n&&b(t)}}}function oe(s){let t,n,e;function i($){s[2]($)}let r={};return s[0].EXP!==void 0&&(r.compatibility=s[0].EXP),t=new Z({props:r}),w.push(()=>A(t,"compatibility",i)),{c(){u(t.$$.fragment)},l($){m(t.$$.fragment,$)},m($,l){p(t,$,l),e=!0},p($,l){const a={};!n&&l&1&&(n=!0,a.compatibility=$[0].EXP,C(()=>n=!1)),t.$set(a)},i($){e||(o(t.$$.fragment,$),e=!0)},o($){c(t.$$.fragment,$),e=!1},d($){g(t,$)}}}function ce(s){let t,n,e,i;return t=new R({props:{$$slots:{default:[fe]},$$scope:{ctx:s}}}),e=new T({props:{$$slots:{default:[oe]},$$scope:{ctx:s}}}),{c(){u(t.$$.fragment),n=x(),u(e.$$.fragment)},l(r){m(t.$$.fragment,r),n=h(r),m(e.$$.fragment,r)},m(r,$){p(t,r,$),y(r,n,$),p(e,r,$),i=!0},p(r,$){const l={};$&8&&(l.$$scope={dirty:$,ctx:r}),t.$set(l);const a={};$&9&&(a.$$scope={dirty:$,ctx:r}),e.$set(a)},i(r){i||(o(t.$$.fragment,r),o(e.$$.fragment,r),i=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),i=!1},d(r){g(t,r),r&&b(n),g(e,r)}}}function ue(s){let t,n,e,i;return t=new S({props:{$$slots:{default:[le]},$$scope:{ctx:s}}}),e=new S({props:{$$slots:{default:[ce]},$$scope:{ctx:s}}}),{c(){u(t.$$.fragment),n=x(),u(e.$$.fragment)},l(r){m(t.$$.fragment,r),n=h(r),m(e.$$.fragment,r)},m(r,$){p(t,r,$),y(r,n,$),p(e,r,$),i=!0},p(r,$){const l={};$&9&&(l.$$scope={dirty:$,ctx:r}),t.$set(l);const a={};$&9&&(a.$$scope={dirty:$,ctx:r}),e.$set(a)},i(r){i||(o(t.$$.fragment,r),o(e.$$.fragment,r),i=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),i=!1},d(r){g(t,r),r&&b(n),g(e,r)}}}function me(s){let t,n;return t=new L({props:{$$slots:{default:[ue]},$$scope:{ctx:s}}}),{c(){u(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,i){p(t,e,i),n=!0},p(e,[i]){const r={};i&9&&(r.$$scope={dirty:i,ctx:e}),t.$set(r)},i(e){n||(o(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function pe(s,t,n){let{compatibilityInfo:e=void 0}=t;e==null&&(e={EA:{state:E.Works,note:""},EXP:{state:E.Works,note:""}});function i($){s.$$.not_equal(e.EA,$)&&(e.EA=$,n(0,e))}function r($){s.$$.not_equal(e.EXP,$)&&(e.EXP=$,n(0,e))}return s.$$set=$=>{"compatibilityInfo"in $&&n(0,e=$.compatibilityInfo)},[e,i,r]}class be extends M{constructor(t){super(),N(this,t,pe,me,O,{compatibilityInfo:0})}}export{be as M};
//# sourceMappingURL=ModCompatibilityEdit-826fd768.js.map