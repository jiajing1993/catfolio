const e=location.pathname.split("/").slice(0,-1).join("/"),r=[e+"/_app/immutable/entry/app.CN6vxkX1.js",e+"/_app/immutable/nodes/0.BON1GQHw.js",e+"/_app/immutable/assets/0.Ba7kssZm.css",e+"/_app/immutable/nodes/1.HRclkKfV.js",e+"/_app/immutable/nodes/2.Br-msLb7.js",e+"/_app/immutable/nodes/3.DmatM7ks.js",e+"/_app/immutable/chunks/entry.CdJiaqg5.js",e+"/_app/immutable/chunks/index.C2NzGguW.js",e+"/_app/immutable/chunks/scheduler.DUa3pFyD.js",e+"/_app/immutable/entry/start.CgE_w1zR.js"],l=[e+"/apple-touch-icon-180x180.png",e+"/cats-logo.svg",e+"/favicon.ico",e+"/favicon.png",e+"/manifest.json",e+"/maskable-icon-512x512.png",e+"/pwa-192x192.png",e+"/pwa-512x512.png",e+"/pwa-64x64.png"],u="1717521246411";console.log({build:r,files:l,version:u});const i=`cache-${u}`,m=[...r,...l];self.addEventListener("install",s=>{async function a(){await(await caches.open(i)).addAll(m)}s.waitUntil(a())});self.addEventListener("activate",s=>{async function a(){for(const n of await caches.keys())n!==i&&await caches.delete(n)}s.waitUntil(a())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;const a=s.request.url;if(a.startsWith("chrome-extension")||a.includes("extension")||a.indexOf("http")!==0)return;async function n(){const o=new URL(s.request.url),c=await caches.open(i);if(m.includes(o.pathname)){const t=await c.match(o.pathname);if(t)return t}try{const t=await fetch(s.request);if(!(t instanceof Response))throw new Error("invalid response from fetch");return t.status===200&&c.put(s.request,t.clone()),t}catch(t){const p=await c.match(s.request);if(p)return p;throw t}}s.respondWith(n())});
