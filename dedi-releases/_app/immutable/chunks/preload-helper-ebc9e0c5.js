const c="modulepreload",o={},a="/smr-frontend/dedi-releases/_app/",f=function(s,t){return!t||t.length===0?s():Promise.all(t.map(e=>{if(e=`${a}${e}`,e in o)return;o[e]=!0;const n=e.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":c,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((d,l)=>{r.addEventListener("load",d),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};export{f as _};
//# sourceMappingURL=preload-helper-ebc9e0c5.js.map
