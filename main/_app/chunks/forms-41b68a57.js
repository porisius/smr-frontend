import{Z as f}from"./forms-2be97dc2.js";const a=(o,n)=>Object.fromEntries(Object.entries(o).map(t=>{if(Object.keys(n.shape).indexOf(t[0])>=0){let e=t[1];if(typeof e=="object"){let r=n.shape[t[0]];if(r instanceof f&&(r=r.unwrap()),Array.isArray(e)){const s=r.element;for(let i=0;i<e.length;i++)e[i]=a(e[i],s)}else e.constructor.name!=="File"&&(e=a(e,r))}return[t[0],e]}}).filter(t=>!!t));export{a as t};
//# sourceMappingURL=forms-41b68a57.js.map