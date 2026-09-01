// ================================================================
// ZAMPATH CAREER QUEST - SERVICE WORKER (V3)
// ================================================================
// V3 improvements:
//  • Relative paths → works from ANY hosting folder (no more '/'-scope bugs)
//  • Network-first for HTML → updates reach users promptly
//  • Cache-first for versioned libraries → instant, offline-ready
//  • Offline fallback page → app always loads, even with no connection
//  • Clean activation → old caches deleted, clients claimed immediately
//  • Robust SKIP_WAITING handling with client notification
// ================================================================

const CACHE_VERSION = 3; // Increment to force clients to update
const CACHE_NAME = 'career-quest-v' + CACHE_VERSION;

// App shell — HTML pages are also matched at runtime (network-first)
const APP_SHELL = [
    './',
    './index.html',
    './app.html',
    './style.css',
    './script.js',
    './landingstyle.css',
    './manifest.json'
];

// Heavy libraries — rarely change, so cache them aggressively
const LIB_URLS = [
    './libs/chart.min.js',
    './libs/html2canvas.min.js',
    './libs/jspdf.umd.min.js'
];

// Simple offline fallback (inlined SVG data URL — zero extra requests)
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

self.addEventListener('install', function (event) {
    event.waitUntil(
        Promise.all([
            caches.open(CACHE_NAME).then(function (cache) {
                console.log('📦 [SW] Caching app shell v' + CACHE_VERSION);
                // addAll fails as a whole if ONE file is missing — use
                // individual puts so one 404 can never break installation.
                return Promise.all(
                    APP_SHELL.map(function (url) {
                        return cache.add(url).catch(function (err) {
                            console.warn('⚠️ [SW] Could not cache', url, err.message);
                        });
                    })
                );
            }),
            caches.open(CACHE_NAME).then(function (cache) {
                return Promise.all(
                    LIB_URLS.map(function (url) {
                        return cache.add(url).catch(function () { /* lib optional */ });
                    })
                );
            })
        ]).then(function () {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
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
                return self.clients.claim();
            })
            .then(function () {
                // Let every open tab know a new version is live
                return self.clients.matchAll({ includeUncontrolled: true }).then(function (clients) {
                    clients.forEach(function (client) {
                        client.postMessage({ type: 'UPDATE_AVAILABLE', version: CACHE_VERSION });
                    });
                });
            })
    );
});

self.addEventListener('fetch', function (event) {
    var request = event.request;

    // Only handle same-origin GET requests
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
        return;
    }

    var isHTML = request.mode === 'navigate' ||
        (request.headers.get('accept') || '').includes('text/html');

    if (isHTML) {
        // ---- HTML: NETWORK FIRST (fresh updates), cache fallback ----
        event.respondWith(
            fetch(request)
                .then(function (response) {
                    if (response && response.status === 200) {
                        var copy = response.clone();
                        caches.open(CACHE_NAME).then(function (cache) {
                            cache.put(request, copy);
                        });
                    }
                    return response;
                })
                .catch(function () {
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

    // ---- Assets: CACHE FIRST (fast + offline), refresh in background ----
    event.respondWith(
        caches.match(request).then(function (cached) {
            if (cached) {
                // Stale-while-revalidate: serve instantly, refresh quietly
                fetch(request).then(function (response) {
                    if (response && response.status === 200) {
                        caches.open(CACHE_NAME).then(function (cache) {
                            cache.put(request, response.clone());
                        });
                    }
                }).catch(function () { /* offline — cached copy still works */ });
                return cached;
            }
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
