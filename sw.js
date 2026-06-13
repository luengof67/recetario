// Service worker para Mi Recetario · Hablemos de Cocina
// Mínimo y sin caché agresiva: así siempre cargas la última versión.
// Solo existe para cumplir el requisito de instalabilidad de la PWA.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handler de fetch obligatorio para que Chrome ofrezca instalar la app.
// Estrategia "network first" simple: siempre intenta la red.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
