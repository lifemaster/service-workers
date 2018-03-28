const CACHE = 'my-cache';

self.addEventListener('install', e => {
  console.log('Service worker has been installed');

  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll([
      '/',
      '/style.css',
      '/script.js',
      '/img.jpg'
    ]))
  );
});

self.addEventListener('activate', e => {
  console.log('Service worker has been activated');
});

self.addEventListener('fetch', e => {
  console.log('Request to server is processing. Event: ', e);

  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));

  // update cache
  e.waitUntil(updateCache(e.request));
});

function updateCache(request) {
  return caches.open(CACHE).then(cache => {
    fetch(request).then(response => {
      cache.put(request, response);
    });
  });
}