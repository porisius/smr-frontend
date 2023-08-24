import{S as Tt,i as Gt,d as h,s as Jt,aQ as G,a_ as J,bo as mt,v as Qt,aJ as rt,aL as ft,bp as tt,a8 as b,a6 as R,x as q,k as j,bi as Ft,ab as S,q as p,a9 as V,y as H,z,ac as et,C as A,ae as w,l as d,ad as nt,p as x,t as y,n as Q,aj as B,P as Kt,aw as Ut,L as C,N as D,m as F,a$ as lt,O as E,b0 as Wt}from"../chunks/vendor.29fd6bc5.js";import{D as $t,g as ut}from"../chunks/graphql.cb6ec208.js";import{P as ot}from"../chunks/PageControls.8530f683.js";import{M as pt}from"../chunks/MetaDescriptors.fb1d9f7c.js";import{D as gt,H as dt,B as xt,R as it,C as M}from"../chunks/forms.349b4af3.js";import{p as U}from"../chunks/formatting.6f84ef8f.js";const T="src/routes/admin/sml-versions/+page.svelte";function at(s,t,o){const i=s.slice();return i[6]=t[o],i}function vt(s){let t;const o={c:function(){t=C("New SML Version")},l:function(e){t=D(e,"New SML Version")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:vt.name,type:"slot",source:'(41:2) <Button variant=\\"outlined\\" href=\\"{base}/admin/sml-versions/new\\">',ctx:s}),o}function W(s){let t,o,i;o=new ot({props:{totalPages:Math.ceil(s[2]/L),currentPage:K},$$inline:!0});const e={c:function(){t=q("div"),b(o.$$.fragment),this.h()},l:function(c){t=H(c,"DIV",{});var r=z(t);S(o.$$.fragment,r),r.forEach(p),this.h()},h:function(){A(t,T,43,4,1406)},m:function(c,r){d(c,t,r),w(o,t,null),i=!0},p:function(c,r){const a={};r&4&&(a.totalPages=Math.ceil(c[2]/L)),o.$set(a)},i:function(c){i||(x(o.$$.fragment,c),i=!0)},o:function(c){y(o.$$.fragment,c),i=!1},d:function(c){c&&p(t),B(o)}};return h("SvelteRegisterBlock",{block:e,id:W.name,type:"if",source:"(43:2) {#if totalVersions}",ctx:s}),e}function yt(s){let t,o;t=new gt({props:{class:"max-w-full",$$slots:{default:[qt]},$$scope:{ctx:s}},$$inline:!0});const i={c:function(){b(t.$$.fragment)},l:function(n){S(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,c){const r={};c&513&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i:function(n){o||(x(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){B(t,n)}};return h("SvelteRegisterBlock",{block:i,id:yt.name,type:"else",source:"(55:2) {:else}",ctx:s}),i}function kt(s){let t,o;t=new tt({props:{$$slots:{default:[Ht]},$$scope:{ctx:s}},$$inline:!0});const i={c:function(){b(t.$$.fragment)},l:function(n){S(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,c){const r={};c&513&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i:function(n){o||(x(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){B(t,n)}};return h("SvelteRegisterBlock",{block:i,id:kt.name,type:"if",source:"(53:28) ",ctx:s}),i}function ht(s){let t,o;t=new tt({props:{$$slots:{default:[zt]},$$scope:{ctx:s}},$$inline:!0});const i={c:function(){b(t.$$.fragment)},l:function(n){S(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,c){const r={};c&512&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i:function(n){o||(x(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){B(t,n)}};return h("SvelteRegisterBlock",{block:i,id:ht.name,type:"if",source:"(51:2) {#if $versions.fetching}",ctx:s}),i}function bt(s){let t;const o={c:function(){t=C("Version")},l:function(e){t=D(e,"Version")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:bt.name,type:"slot",source:"(59:10) <Cell>",ctx:s}),o}function St(s){let t;const o={c:function(){t=C("Stability")},l:function(e){t=D(e,"Stability")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:St.name,type:"slot",source:"(60:10) <Cell>",ctx:s}),o}function wt(s){let t;const o={c:function(){t=C("Satisfactory Version")},l:function(e){t=D(e,"Satisfactory Version")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:wt.name,type:"slot",source:"(61:10) <Cell>",ctx:s}),o}function Bt(s){let t;const o={c:function(){t=C("Bootstrap Version")},l:function(e){t=D(e,"Bootstrap Version")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:Bt.name,type:"slot",source:"(62:10) <Cell>",ctx:s}),o}function Rt(s){let t;const o={c:function(){t=C("Release Date")},l:function(e){t=D(e,"Release Date")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:Rt.name,type:"slot",source:"(63:10) <Cell>",ctx:s}),o}function Vt(s){let t,o,i,e,n,c,r,a,$,u,m,g;t=new M({props:{$$slots:{default:[bt]},$$scope:{ctx:s}},$$inline:!0}),i=new M({props:{$$slots:{default:[St]},$$scope:{ctx:s}},$$inline:!0}),n=new M({props:{$$slots:{default:[wt]},$$scope:{ctx:s}},$$inline:!0}),r=new M({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}},$$inline:!0}),$=new M({props:{$$slots:{default:[Rt]},$$scope:{ctx:s}},$$inline:!0}),m=new M({$$inline:!0});const P={c:function(){b(t.$$.fragment),o=R(),b(i.$$.fragment),e=R(),b(n.$$.fragment),c=R(),b(r.$$.fragment),a=R(),b($.$$.fragment),u=R(),b(m.$$.fragment)},l:function(f){S(t.$$.fragment,f),o=V(f),S(i.$$.fragment,f),e=V(f),S(n.$$.fragment,f),c=V(f),S(r.$$.fragment,f),a=V(f),S($.$$.fragment,f),u=V(f),S(m.$$.fragment,f)},m:function(f,l){w(t,f,l),d(f,o,l),w(i,f,l),d(f,e,l),w(n,f,l),d(f,c,l),w(r,f,l),d(f,a,l),w($,f,l),d(f,u,l),w(m,f,l),g=!0},p:function(f,l){const v={};l&512&&(v.$$scope={dirty:l,ctx:f}),t.$set(v);const _={};l&512&&(_.$$scope={dirty:l,ctx:f}),i.$set(_);const N={};l&512&&(N.$$scope={dirty:l,ctx:f}),n.$set(N);const I={};l&512&&(I.$$scope={dirty:l,ctx:f}),r.$set(I);const O={};l&512&&(O.$$scope={dirty:l,ctx:f}),$.$set(O)},i:function(f){g||(x(t.$$.fragment,f),x(i.$$.fragment,f),x(n.$$.fragment,f),x(r.$$.fragment,f),x($.$$.fragment,f),x(m.$$.fragment,f),g=!0)},o:function(f){y(t.$$.fragment,f),y(i.$$.fragment,f),y(n.$$.fragment,f),y(r.$$.fragment,f),y($.$$.fragment,f),y(m.$$.fragment,f),g=!1},d:function(f){B(t,f),f&&p(o),B(i,f),f&&p(e),B(n,f),f&&p(c),B(r,f),f&&p(a),B($,f),f&&p(u),B(m,f)}};return h("SvelteRegisterBlock",{block:P,id:Vt.name,type:"slot",source:"(58:8) <Row>",ctx:s}),P}function Ct(s){let t,o;t=new it({props:{$$slots:{default:[Vt]},$$scope:{ctx:s}},$$inline:!0});const i={c:function(){b(t.$$.fragment)},l:function(n){S(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,c){const r={};c&512&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i:function(n){o||(x(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){B(t,n)}};return h("SvelteRegisterBlock",{block:i,id:Ct.name,type:"slot",source:"(57:6) <Head>",ctx:s}),i}function Dt(s){let t=s[6].version+"",o;const i={c:function(){o=C(t)},l:function(n){o=D(n,t)},m:function(n,c){d(n,o,c)},p:function(n,c){c&1&&t!==(t=n[6].version+"")&&E(o,t)},d:function(n){n&&p(o)}};return h("SvelteRegisterBlock",{block:i,id:Dt.name,type:"slot",source:"(70:12) <Cell>",ctx:s}),i}function Mt(s){let t=s[6].stability+"",o;const i={c:function(){o=C(t)},l:function(n){o=D(n,t)},m:function(n,c){d(n,o,c)},p:function(n,c){c&1&&t!==(t=n[6].stability+"")&&E(o,t)},d:function(n){n&&p(o)}};return h("SvelteRegisterBlock",{block:i,id:Mt.name,type:"slot",source:"(71:12) <Cell>",ctx:s}),i}function Pt(s){let t=s[6].satisfactory_version+"",o;const i={c:function(){o=C(t)},l:function(n){o=D(n,t)},m:function(n,c){d(n,o,c)},p:function(n,c){c&1&&t!==(t=n[6].satisfactory_version+"")&&E(o,t)},d:function(n){n&&p(o)}};return h("SvelteRegisterBlock",{block:i,id:Pt.name,type:"slot",source:"(72:12) <Cell>",ctx:s}),i}function _t(s){let t=s[6].bootstrap_version+"",o;const i={c:function(){o=C(t)},l:function(n){o=D(n,t)},m:function(n,c){d(n,o,c)},p:function(n,c){c&1&&t!==(t=n[6].bootstrap_version+"")&&E(o,t)},d:function(n){n&&p(o)}};return h("SvelteRegisterBlock",{block:i,id:_t.name,type:"slot",source:"(73:12) <Cell>",ctx:s}),i}function Lt(s){let t=U(s[6].created_at)+"",o;const i={c:function(){o=C(t)},l:function(n){o=D(n,t)},m:function(n,c){d(n,o,c)},p:function(n,c){c&1&&t!==(t=U(n[6].created_at)+"")&&E(o,t)},d:function(n){n&&p(o)}};return h("SvelteRegisterBlock",{block:i,id:Lt.name,type:"slot",source:"(74:12) <Cell>",ctx:s}),i}function jt(s){let t;const o={c:function(){t=C("Delete")},l:function(e){t=D(e,"Delete")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:jt.name,type:"slot",source:'(77:16) <Button variant=\\"outlined\\" on:click={() => deleteVersion(version.id)}>',ctx:s}),o}function Et(s){let t;const o={c:function(){t=C("Edit")},l:function(e){t=D(e,"Edit")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:Et.name,type:"slot",source:`(78:16) <Button variant=\\"outlined\\" href={base + '/admin/sml-versions/' + version.id + '/edit'}>`,ctx:s}),o}function Nt(s){let t,o,i,e,n;function c(){return s[4](s[6])}o=new G({props:{variant:"outlined",$$slots:{default:[jt]},$$scope:{ctx:s}},$$inline:!0}),o.$on("click",c),e=new G({props:{variant:"outlined",href:J+"/admin/sml-versions/"+s[6].id+"/edit",$$slots:{default:[Et]},$$scope:{ctx:s}},$$inline:!0});const r={c:function(){t=q("div"),b(o.$$.fragment),i=R(),b(e.$$.fragment),this.h()},l:function($){t=H($,"DIV",{class:!0});var u=z(t);S(o.$$.fragment,u),i=V(u),S(e.$$.fragment,u),u.forEach(p),this.h()},h:function(){et(t,"class","grid grid-flow-col gap-4"),A(t,T,75,14,2397)},m:function($,u){d($,t,u),w(o,t,null),nt(t,i),w(e,t,null),n=!0},p:function($,u){s=$;const m={};u&512&&(m.$$scope={dirty:u,ctx:s}),o.$set(m);const g={};u&1&&(g.href=J+"/admin/sml-versions/"+s[6].id+"/edit"),u&512&&(g.$$scope={dirty:u,ctx:s}),e.$set(g)},i:function($){n||(x(o.$$.fragment,$),x(e.$$.fragment,$),n=!0)},o:function($){y(o.$$.fragment,$),y(e.$$.fragment,$),n=!1},d:function($){$&&p(t),B(o),B(e)}};return h("SvelteRegisterBlock",{block:r,id:Nt.name,type:"slot",source:"(75:12) <Cell>",ctx:s}),r}function It(s){let t,o,i,e,n,c,r,a,$,u,m,g,P;t=new M({props:{$$slots:{default:[Dt]},$$scope:{ctx:s}},$$inline:!0}),i=new M({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}},$$inline:!0}),n=new M({props:{$$slots:{default:[Pt]},$$scope:{ctx:s}},$$inline:!0}),r=new M({props:{$$slots:{default:[_t]},$$scope:{ctx:s}},$$inline:!0}),$=new M({props:{$$slots:{default:[Lt]},$$scope:{ctx:s}},$$inline:!0}),m=new M({props:{$$slots:{default:[Nt]},$$scope:{ctx:s}},$$inline:!0});const k={c:function(){b(t.$$.fragment),o=R(),b(i.$$.fragment),e=R(),b(n.$$.fragment),c=R(),b(r.$$.fragment),a=R(),b($.$$.fragment),u=R(),b(m.$$.fragment),g=R()},l:function(l){S(t.$$.fragment,l),o=V(l),S(i.$$.fragment,l),e=V(l),S(n.$$.fragment,l),c=V(l),S(r.$$.fragment,l),a=V(l),S($.$$.fragment,l),u=V(l),S(m.$$.fragment,l),g=V(l)},m:function(l,v){w(t,l,v),d(l,o,v),w(i,l,v),d(l,e,v),w(n,l,v),d(l,c,v),w(r,l,v),d(l,a,v),w($,l,v),d(l,u,v),w(m,l,v),d(l,g,v),P=!0},p:function(l,v){const _={};v&513&&(_.$$scope={dirty:v,ctx:l}),t.$set(_);const N={};v&513&&(N.$$scope={dirty:v,ctx:l}),i.$set(N);const I={};v&513&&(I.$$scope={dirty:v,ctx:l}),n.$set(I);const O={};v&513&&(O.$$scope={dirty:v,ctx:l}),r.$set(O);const ct={};v&513&&(ct.$$scope={dirty:v,ctx:l}),$.$set(ct);const st={};v&513&&(st.$$scope={dirty:v,ctx:l}),m.$set(st)},i:function(l){P||(x(t.$$.fragment,l),x(i.$$.fragment,l),x(n.$$.fragment,l),x(r.$$.fragment,l),x($.$$.fragment,l),x(m.$$.fragment,l),P=!0)},o:function(l){y(t.$$.fragment,l),y(i.$$.fragment,l),y(n.$$.fragment,l),y(r.$$.fragment,l),y($.$$.fragment,l),y(m.$$.fragment,l),P=!1},d:function(l){B(t,l),l&&p(o),B(i,l),l&&p(e),B(n,l),l&&p(c),B(r,l),l&&p(a),B($,l),l&&p(u),B(m,l),l&&p(g)}};return h("SvelteRegisterBlock",{block:k,id:It.name,type:"slot",source:"(69:10) <Row>",ctx:s}),k}function X(s){let t,o;t=new it({props:{$$slots:{default:[It]},$$scope:{ctx:s}},$$inline:!0});const i={c:function(){b(t.$$.fragment)},l:function(n){S(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,c){const r={};c&513&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i:function(n){o||(x(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){B(t,n)}};return h("SvelteRegisterBlock",{block:i,id:X.name,type:"each",source:"(68:8) {#each $versions.data.getSMLVersions.sml_versions as version}",ctx:s}),i}function Ot(s){let t,o,i=s[0].data.getSMLVersions.sml_versions;lt(i);let e=[];for(let r=0;r<i.length;r+=1)e[r]=X(at(s,i,r));const n=r=>y(e[r],1,1,()=>{e[r]=null}),c={c:function(){for(let a=0;a<e.length;a+=1)e[a].c();t=j()},l:function(a){for(let $=0;$<e.length;$+=1)e[$].l(a);t=j()},m:function(a,$){for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(a,$);d(a,t,$),o=!0},p:function(a,$){if($&9){i=a[0].data.getSMLVersions.sml_versions,lt(i);let u;for(u=0;u<i.length;u+=1){const m=at(a,i,u);e[u]?(e[u].p(m,$),x(e[u],1)):(e[u]=X(m),e[u].c(),x(e[u],1),e[u].m(t.parentNode,t))}for(F(),u=i.length;u<e.length;u+=1)n(u);Q()}},i:function(a){if(!o){for(let $=0;$<i.length;$+=1)x(e[$]);o=!0}},o:function(a){e=e.filter(Boolean);for(let $=0;$<e.length;$+=1)y(e[$]);o=!1},d:function(a){Wt(e,a),a&&p(t)}};return h("SvelteRegisterBlock",{block:c,id:Ot.name,type:"slot",source:"(67:6) <Body>",ctx:s}),c}function qt(s){let t,o,i,e;t=new dt({props:{$$slots:{default:[Ct]},$$scope:{ctx:s}},$$inline:!0}),i=new xt({props:{$$slots:{default:[Ot]},$$scope:{ctx:s}},$$inline:!0});const n={c:function(){b(t.$$.fragment),o=R(),b(i.$$.fragment)},l:function(r){S(t.$$.fragment,r),o=V(r),S(i.$$.fragment,r)},m:function(r,a){w(t,r,a),d(r,o,a),w(i,r,a),e=!0},p:function(r,a){const $={};a&512&&($.$$scope={dirty:a,ctx:r}),t.$set($);const u={};a&513&&(u.$$scope={dirty:a,ctx:r}),i.$set(u)},i:function(r){e||(x(t.$$.fragment,r),x(i.$$.fragment,r),e=!0)},o:function(r){y(t.$$.fragment,r),y(i.$$.fragment,r),e=!1},d:function(r){B(t,r),r&&p(o),B(i,r)}};return h("SvelteRegisterBlock",{block:n,id:qt.name,type:"slot",source:'(56:4) <DataTable class=\\"max-w-full\\">',ctx:s}),n}function Ht(s){let t,o=s[0].error.message+"",i;const e={c:function(){t=C("Oh no... "),i=C(o)},l:function(c){t=D(c,"Oh no... "),i=D(c,o)},m:function(c,r){d(c,t,r),d(c,i,r)},p:function(c,r){r&1&&o!==(o=c[0].error.message+"")&&E(i,o)},d:function(c){c&&p(t),c&&p(i)}};return h("SvelteRegisterBlock",{block:e,id:Ht.name,type:"slot",source:"(54:4) <Content>",ctx:s}),e}function zt(s){let t;const o={c:function(){t=C("Loading...")},l:function(e){t=D(e,"Loading...")},m:function(e,n){d(e,t,n)},d:function(e){e&&p(t)}};return h("SvelteRegisterBlock",{block:o,id:zt.name,type:"slot",source:"(52:4) <Content>",ctx:s}),o}function At(s){let t,o,i,e;const n=[ht,kt,yt],c=[];function r($,u){return $[0].fetching?0:$[0].error?1:2}t=r(s),o=c[t]=n[t](s);const a={c:function(){o.c(),i=j()},l:function(u){o.l(u),i=j()},m:function(u,m){c[t].m(u,m),d(u,i,m),e=!0},p:function(u,m){let g=t;t=r(u),t===g?c[t].p(u,m):(F(),y(c[g],1,1,()=>{c[g]=null}),Q(),o=c[t],o?o.p(u,m):(o=c[t]=n[t](u),o.c()),x(o,1),o.m(i.parentNode,i))},i:function(u){e||(x(o),e=!0)},o:function(u){y(o),e=!1},d:function(u){c[t].d(u),u&&p(i)}};return h("SvelteRegisterBlock",{block:a,id:At.name,type:"slot",source:"(50:0) <Card>",ctx:s}),a}function Y(s){let t,o,i,e;i=new ot({props:{totalPages:Math.ceil(s[2]/L),currentPage:K},$$inline:!0});const n={c:function(){t=q("div"),o=q("div"),b(i.$$.fragment),this.h()},l:function(r){t=H(r,"DIV",{class:!0});var a=z(t);o=H(a,"DIV",{});var $=z(o);S(i.$$.fragment,$),$.forEach(p),a.forEach(p),this.h()},h:function(){A(o,T,89,4,2847),et(t,"class","mt-5 ml-auto flex justify-end"),A(t,T,88,2,2799)},m:function(r,a){d(r,t,a),nt(t,o),w(i,o,null),e=!0},p:function(r,a){const $={};a&4&&($.totalPages=Math.ceil(r[2]/L)),i.$set($)},i:function(r){e||(x(i.$$.fragment,r),e=!0)},o:function(r){y(i.$$.fragment,r),e=!1},d:function(r){r&&p(t),B(i)}};return h("SvelteRegisterBlock",{block:n,id:Y.name,type:"if",source:"(88:0) {#if totalVersions}",ctx:s}),n}function Z(s){let t,o,i,e,n,c,r,a,$,u;t=new pt({props:{description:"SML Versions",title:"Admin: SML Versions"},$$inline:!0}),e=new G({props:{variant:"outlined",href:J+"/admin/sml-versions/new",$$slots:{default:[vt]},$$scope:{ctx:s}},$$inline:!0});let m=s[2]&&W(s);r=new mt({props:{$$slots:{default:[At]},$$scope:{ctx:s}},$$inline:!0});let g=s[2]&&Y(s);const P={c:function(){b(t.$$.fragment),o=R(),i=q("div"),b(e.$$.fragment),n=R(),m&&m.c(),c=R(),b(r.$$.fragment),a=R(),g&&g.c(),$=j(),this.h()},l:function(f){const l=Ft("svelte-1iwjzfb",document.head);S(t.$$.fragment,l),l.forEach(p),o=V(f),i=H(f,"DIV",{class:!0});var v=z(i);S(e.$$.fragment,v),n=V(v),m&&m.l(v),v.forEach(p),c=V(f),S(r.$$.fragment,f),a=V(f),g&&g.l(f),$=j(),this.h()},h:function(){et(i,"class","mb-5 ml-auto flex justify-between"),A(i,T,39,0,1240)},m:function(f,l){w(t,document.head,null),d(f,o,l),d(f,i,l),w(e,i,null),nt(i,n),m&&m.m(i,null),d(f,c,l),w(r,f,l),d(f,a,l),g&&g.m(f,l),d(f,$,l),u=!0},p:function(f,[l]){const v={};l&512&&(v.$$scope={dirty:l,ctx:f}),e.$set(v),f[2]?m?(m.p(f,l),l&4&&x(m,1)):(m=W(f),m.c(),x(m,1),m.m(i,null)):m&&(F(),y(m,1,1,()=>{m=null}),Q());const _={};l&513&&(_.$$scope={dirty:l,ctx:f}),r.$set(_),f[2]?g?(g.p(f,l),l&4&&x(g,1)):(g=Y(f),g.c(),x(g,1),g.m($.parentNode,$)):g&&(F(),y(g,1,1,()=>{g=null}),Q())},i:function(f){u||(x(t.$$.fragment,f),x(e.$$.fragment,f),x(m),x(r.$$.fragment,f),x(g),u=!0)},o:function(f){y(t.$$.fragment,f),y(e.$$.fragment,f),y(m),y(r.$$.fragment,f),y(g),u=!1},d:function(f){B(t),f&&p(o),f&&p(i),B(e),m&&m.d(),f&&p(c),B(r,f),f&&p(a),g&&g.d(f),f&&p($)}};return h("SvelteRegisterBlock",{block:P,id:Z.name,type:"component",source:"",ctx:s}),P}const L=20,K=1;function Xt(s,t,o){let i,e,n,c=Kt,r=()=>(c(),c=Ut(i,k=>o(0,n=k)),i);s.$$.on_destroy.push(()=>c());let{$$slots:a={},$$scope:$}=t;Qt("Page",a,[]);const u=rt(),m=k=>{u.mutation($t,{smlVersionID:k}).toPromise().then(()=>{i.pause(),i.resume()})},g=[];Object.keys(t).forEach(k=>{!~g.indexOf(k)&&k.slice(0,2)!=="$$"&&k!=="slot"&&console.warn(`<Page> was created with unknown prop '${k}'`)});const P=k=>m(k.id);return s.$capture_state=()=>({DeleteSmlVersionDocument:$t,GetSmlVersionsAdminDocument:ut,getContextClient:rt,queryStore:ft,PageControls:ot,base:J,MetaDescriptors:pt,Card:mt,Content:tt,DataTable:gt,Head:dt,Body:xt,Row:it,Cell:M,Button:G,prettyDate:U,client:u,perPage:L,page:K,deleteVersion:m,versions:i,totalVersions:e,$versions:n}),s.$inject_state=k=>{"versions"in k&&r(o(1,i=k.versions)),"totalVersions"in k&&o(2,e=k.totalVersions)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&1&&o(2,e=n?.data?.getSMLVersions?.count)},r(o(1,i=ft({query:ut,client:u,variables:{filter:{offset:(K-1)*L,limit:L}}}))),[n,i,e,m,P]}class ie extends Tt{constructor(t){super(t),Gt(this,t,Xt,Z,Jt,{}),h("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:Z.name})}}export{ie as component};
//# sourceMappingURL=4.80032136.js.map
