import{w as o}from"./vendor-5faff0be.js";const h=o(!1),l=o(void 0);let s;s=window.matchMedia("(min-width: 1280px)");const i=o(s&&!s.matches),w=o(!1),c=o(!1);s.addEventListener("change",e=>{i&&i.set(!e.matches)});{const e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA","Space"],t=[];window.onkeyup=n=>{if(t.push(n.code),t.length>e.length&&t.shift(),t.length==e.length){let a=!0;for(let r=0;r<e.length;r++)if(e[r]!==t[r]){a=!1;break}a&&c.set(!0)}n.code=="KeyD"&&w.set(!0)}}export{w as d,c as e,l as g,h as l,i as o};
//# sourceMappingURL=global-fb89089b.js.map
