self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cafe-menu-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        // Add any extra files you want cached:
        // '/assets/menu.css', '/assets/menu.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
