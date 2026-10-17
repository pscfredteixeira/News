/* NEWS PWA v3 — prioriza dados atualizados e preserva leitura offline. */
const CACHE='news-app-v4-music';
const CORE=['./','./index.html','./data.js?v=music1','./manifest.webmanifest','./news-touch-20261016.png','./icon.svg'];
self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(k=>k.startsWith('news-app-')&&k!==CACHE).map(k=>caches.delete(k))
  )).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith(
    fetch(req,{cache:'no-store'}).then(response=>{
      if(response.ok){
        const cloned=response.clone();
        event.waitUntil(caches.open(CACHE).then(cache=>cache.put(req,cloned)));
      }
      return response;
    }).catch(async()=>{
      const cached=await caches.match(req,{ignoreSearch:true});
      if(cached)return cached;
      if(req.mode==='navigate')return (await caches.match('./index.html'))||Response.error();
      return Response.error();
    })
  );
});
