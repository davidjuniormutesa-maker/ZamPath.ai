// ================================================================
// ZAMPATH CAREER QUEST - SERVICE WORKER (V3)
// ================================================================
// What is a Service Worker?
// It's a script that runs in the background, separate from your webpage.
// It handles:
//   1. Caching files so the app works OFFLINE
//   2. Updating the app when new versions are available
//   3. Intercepting network requests to serve cached files
// ================================================================

// ================================================================
// CACHE VERSION: Increment this number whenever you update files
// ================================================================
const CACHE_VERSION = 4; // V3.2: new questions, why-box, offline banner, surprise me
const CACHE_NAME = 'career-quest-v' + CACHE_VERSION;

// ================================================================
// APP SHELL: These are the core files that MUST be cached
// Every user needs these to use the app offline
// ================================================================
const APP_SHELL = [
    './',                    // The root URL (index.html)
    './index.html',          // The landing page
    './app.html',            // The main app page
    './style.css',           // All styles
    './script.js',           // ALL JavaScript logic
    './landingstyle.css',    // Landing page styles
    './manifest.json'        // PWA manifest
];

// ================================================================
// HEAVY LIBRARIES: Rarely change, cache them aggressively
// ================================================================
const LIB_URLS = [
    './libs/chart.min.js',       // Radar chart library (200KB)
    './libs/html2canvas.min.js', // PDF generation (100KB)
    './libs/jspdf.umd.min.js'    // PDF creation (100KB)
];

// ================================================================
// OFFLINE FALLBACK: A simple page shown if NOTHING is cached
// This is a data URI (inline) so it needs NO network request
// ================================================================
const OFFLINE_FALLBACK =
    'data:text/html;charset=utf-8,' + encodeURIComponent(
        '<!DOCTYPE html><html><head><meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1">' +
        '<title>Offline — ZamPath</title></head>' +
        '<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
        'background:#0c2f20;color:#fff;font-family:system-ui,sans-serif;text-align:center;padding:24px;">' +
        '<div><div style="font-size:64px;margin-bottom:12px;">📶</div>' +
        '<h1 style="color:#eeba2c;margin:0 0 8px;">You are offline</h1>' +
        '<p style="opacity:0.8;margin:0;">Career Quest works offline once installed —' +
        ' open the installed app, or reconnect and reload this page.</p>' +
        '</div></body></html>'
    );

// ================================================================
// INSTALL EVENT: When the service worker is first installed
// This happens when a user visits the page for the first time
// ================================================================
self.addEventListener('install', function (event) {
    event.waitUntil(
        Promise.all([
            // Cache the app shell files
            caches.open(CACHE_NAME).then(function (cache) {
                console.log('📦 [SW] Caching app shell v' + CACHE_VERSION);
                // Use individual puts so if ONE file fails, the rest still cache
                return Promise.all(
                    APP_SHELL.map(function (url) {
                        return cache.add(url).catch(function (err) {
                            console.warn('⚠️ [SW] Could not cache', url, err.message);
                        });
                    })
                );
            }),
            // Cache the heavy libraries
            caches.open(CACHE_NAME).then(function (cache) {
                return Promise.all(
                    LIB_URLS.map(function (url) {
                        return cache.add(url).catch(function () { /* Library optional */ });
                    })
                );
            })
        ]).then(function () {
            // Force the service worker to activate immediately
            return self.skipWaiting();
        })
    );
});

// ================================================================
// ACTIVATE EVENT: When the service worker starts running
// Cleans up old caches and claims all open pages
// ================================================================
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
                // Delete any caches that aren't the current version
                return Promise.all(
                    cacheNames.map(function (cacheName) {
                        if (cacheName !== CACHE_NAME) {
                            console.log('🗑️ [SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(function () {
                // Take control of all open pages immediately
                return self.clients.claim();
            })
            .then(function () {
                // Tell every open tab that a new version is live
                return self.clients.matchAll({ includeUncontrolled: true }).then(function (clients) {
                    clients.forEach(function (client) {
                        client.postMessage({ type: 'UPDATE_AVAILABLE', version: CACHE_VERSION });
                    });
                });
            })
    );
});

// ================================================================
// FETCH EVENT: Intercepts every network request
// This is where we decide: serve from cache or go to network?
// ================================================================
self.addEventListener('fetch', function (event) {
    var request = event.request;

    // Only handle same-origin GET requests
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
        return; // Ignore cross-origin requests
    }

    // ================================================================
    // HTML FILES: NETWORK FIRST (get fresh updates)
    // If network fails, fall back to cache
    // ================================================================
    var isHTML = request.mode === 'navigate' ||
        (request.headers.get('accept') || '').includes('text/html');

    if (isHTML) {
        // ---- HTML: NETWORK FIRST (fresh updates), cache fallback ----
        event.respondWith(
            fetch(request)
                .then(function (response) {
                    // If we got a valid response, cache it for next time
                    if (response && response.status === 200) {
                        var copy = response.clone();
                        caches.open(CACHE_NAME).then(function (cache) {
                            cache.put(request, copy);
                        });
                    }
                    return response;
                })
                .catch(function () {
                    // Network failed: try to serve from cache
                    return caches.match(request).then(function (cached) {
                        return cached || caches.match('./app.html') || caches.match('./index.html');
                    }).then(function (fallback) {
                        return fallback || new Response(OFFLINE_FALLBACK, {
                            headers: { 'Content-Type': 'text/html; charset=utf-8' }
                        });
                    });
                })
        );
        return;
    }

    // ================================================================
    // ASSETS: CACHE FIRST (fast + offline)
    // Refresh in the background (stale-while-revalidate)
    // ================================================================
    event.respondWith(
        caches.match(request).then(function (cached) {
            if (cached) {
                // Serve cached version immediately
                // Meanwhile, update the cache in the background
                fetch(request).then(function (response) {
                    if (response && response.status === 200) {
                        caches.open(CACHE_NAME).then(function (cache) {
                            cache.put(request, response.clone());
                        });
                    }
                }).catch(function () { /* Offline — cached copy still works */ });
                return cached;
            }
            // Not in cache: go to network
            return fetch(request).then(function (response) {
                if (response && response.status === 200) {
                    var copy = response.clone();
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(request, copy);
                    });
                }
                return response;
            });
        })
    );
});

// ================================================================
// MESSAGE EVENT: Listens for SKIP_WAITING messages
// This allows the user to force an update immediately
// ================================================================
self.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting().then(function () {
            return self.clients.matchAll({ includeUncontrolled: true });
        }).then(function (clients) {
            clients.forEach(function (client) {
                client.postMessage({ type: 'UPDATE_AVAILABLE', version: CACHE_VERSION });
            });
        });
    }
});