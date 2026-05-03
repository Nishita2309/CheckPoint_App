const CACHE = 'checkpoint-v1';

const ASSETS = [
  './',
  './index.html',
  './login.html',
  './manifest.json',
  './icons/logo.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap'
];

// ── INSTALL ───────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ──────────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH (FIXED) ─────────────────────────────────────
self.addEventListener('fetch', e => {

  // ❌ Ignore non-GET
  if (e.request.method !== 'GET') return;

  // ❌ Ignore chrome-extension / invalid schemes
  if (!e.request.url.startsWith('http')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {

      if (cached) return cached;

      return fetch(e.request)
        .then(res => {

          // ❌ Do NOT cache bad responses
          if (!res || res.status !== 200 || res.type === 'opaque') {
            return res;
          }

          // ❌ EXTRA SAFETY (prevents your crash)
          if (!e.request.url.startsWith('http')) {
            return res;
          }

          const clone = res.clone();

          caches.open(CACHE).then(cache => {
            cache.put(e.request, clone).catch(() => {
              // silently ignore caching errors
            });
          });

          return res;
        })
        .catch(() => {
          if (e.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });

    })
  );
});