const CACHE_NAME = 'ielts-speak-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js'
];

// 安装Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// 拦截请求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});