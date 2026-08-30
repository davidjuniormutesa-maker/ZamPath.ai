// ================================================================
// ZAMPATH CAREER QUEST - SERVICE WORKER
// ================================================================
const CACHE_VERSION = 2; // Increment to force update
const CACHE_NAME = 'career-quest-v' + CACHE_VERSION;

const urlsToCache = [
    '/',
    '/app.html',
    '/index.html',
    '/style.css',
    '/script.js',
    '/landingstyle.css',
    '/libs/chart.min.js',
    '/libs/html2canvas.min.js',
    '/libs/jspdf.umd.min.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('📦 Caching files for version', CACHE_VERSION);
                return cache.addAll(urlsToCache);
            })
            .then(function() {
                return self.skipWaiting();
            })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                });
            })
    );
});

self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
        self.clients.matchAll().then(function(clients) {
            clients.forEach(function(client) {
                client.postMessage({ type: 'UPDATE_AVAILABLE' });
            });
        });
    }
});