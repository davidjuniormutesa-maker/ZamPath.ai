// ================================================================
// ZAMPATH CAREER QUEST - SERVICE WORKER
// ================================================================
// What this file does:
// 1. Caches all app files on the user's device
// 2. Makes the app work OFFLINE
// 3. Handles updates (new version detection)
// 4. Sends update notifications to the bell icon
// ================================================================

// --- Version constant ---
// Increment this number whenever you make changes to the app
// This tells the browser to download new files
const CACHE_VERSION = 1;
const CACHE_NAME = 'career-quest-v' + CACHE_VERSION;

// --- List of files to cache ---
// These files will be saved on the user's device
// so the app works offline
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

// ================================================================
// INSTALL EVENT
// ================================================================
// This runs when the service worker is first installed
// It downloads and caches all the files listed above

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('📦 Service Worker: Caching files for version', CACHE_VERSION);
                return cache.addAll(urlsToCache);
            })
            .then(function() {
                console.log('✅ Service Worker: All files cached!');
                // Skip waiting so the new service worker activates immediately
                return self.skipWaiting();
            })
    );
});

// ================================================================
// ACTIVATE EVENT
// ================================================================
// This runs when the service worker becomes active
// It cleans up old caches (previous versions) to save space

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    // If the cache name doesn't match the current version, delete it
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            console.log('✅ Service Worker: Activated and taking control');
            // Take control of all clients immediately
            return self.clients.claim();
        })
    );
});

// ================================================================
// FETCH EVENT
// ================================================================
// This runs for every request the app makes (HTML, CSS, JS, images, etc.)
// It intercepts the request and tries to serve from cache first

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // If the file is found in cache, return it (OFFLINE!)
                if (response) {
                    return response;
                }
                // Otherwise, fetch from the network
                return fetch(event.request).then(function(response) {
                    // Check if we got a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    // Clone the response so we can cache it
                    const responseToCache = response.clone();
                    // Save it in the cache for next time
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                });
            })
    );
});

// ================================================================
// MESSAGE EVENT
// ================================================================
// Listens for messages from the app
// Used for update notifications (bell icon red dot)

self.addEventListener('message', function(event) {
    // If the app says "SKIP_WAITING", activate the new service worker
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
        // Notify all clients that an update is available
        self.clients.matchAll().then(function(clients) {
            clients.forEach(function(client) {
                client.postMessage({
                    type: 'UPDATE_AVAILABLE'
                });
            });
        });
    }
});