const CACHE_NAME = 'brain-injury-red-flags-v1';
const urlsToCache = [
  '/brain-injury-red-flags/',
  '/brain-injury-red-flags/index.html',
  '/brain-injury-red-flags/manifest.json'
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch files from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      }
    )
  );
});
