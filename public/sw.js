const CACHE = "narid-cache-v5";

self.addEventListener("install", event => {
  self.skipWaiting();
  // Pre-cache core files so offline fallback works immediately
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete old caches to free up space
          if (cacheName !== CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  // Only handle GET requests and http/https schemes (prevents chrome-extension:// errors)
  if (event.request.method !== "GET" || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache the new response dynamically
        const clone = response.clone();
        caches.open(CACHE).then(cache => {
          cache.put(event.request, clone);
        });
        return response;
      })
      .catch(() => {
        // If network fails, try to serve from cache
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If it's a page navigation and not in cache, fallback to index.html (SPA routing)
          if (event.request.mode === "navigate") {
            return caches.match("/");
          }
        });
      })
  );
});
