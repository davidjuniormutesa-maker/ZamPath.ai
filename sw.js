// ================================================================
// ZAMPATH CAREER QUEST - SERVICE WORKER
// Makes the app installable and fully offline
// ================================================================

var CACHE_NAME = 'career-quest-v1';
var urlsToCache = [
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

// Step 1: Install the service worker and cache files
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Service Worker: Caching files...');
                return cache.addAll(urlsToCache);
            })
            .then(function() {
                return self.skipWaiting();
            })
    );
});

// Step 2: Activate and clean up old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

// Step 3: Intercept fetch requests and serve from cache
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // If found in cache, return it (offline)
                if (response) {
                    return response;
                }
                // Otherwise, fetch from network and cache it for next time
                return fetch(event.request).then(function(response) {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    var responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                });
            })
    );
});