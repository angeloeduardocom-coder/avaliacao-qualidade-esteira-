/* Nova Neruda: guarda o app no celular para abrir sem internet na esteira.
   Ao publicar uma versão nova, aumente o número em VERSAO. */
const VERSAO = 'nova-neruda-v3';
const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vendor/jspdf.umd.min.js',
  './vendor/jspdf.plugin.autotable.min.js',
  './icones/icone-192.png',
  './icones/icone-512.png',
  './icones/icone-180.png',
  './icones/icone-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Página: tenta a internet primeiro (pega a versão nova) e usa a cópia guardada se estiver sem sinal.
   Demais arquivos (PDF, ícones, fontes): usa a cópia guardada e atualiza em segundo plano. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => { const c = r.clone(); caches.open(VERSAO).then(x => x.put('./index.html', c)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(hit => {
      const rede = fetch(req).then(r => {
        if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(VERSAO).then(x => x.put(req, c)); }
        return r;
      }).catch(() => hit);
      return hit || rede;
    })
  );
});
