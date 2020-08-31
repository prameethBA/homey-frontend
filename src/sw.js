const filesToCache = [
    '/',
    'assets/css/reset.css',
    'index.html',
    'favicon.ico',
    'app.js'
]

const staticCacheName = 'pages-cache-v1'

// Install the SW
self.addEventListener('install', event => {
    console.log('Insatalled')
    self.skipWaiting()

    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(filesToCache)
        })
    )
})

// Activate the SW
self.addEventListener('activate', event => console.log('Activated '))

// Listen for fetch
self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url)
    event.respondWith(
        caches
            .match(event.request)
            .then(response => {
                if (response) {
                    console.log('Found ', event.request.url, ' in cache')
                    return response
                }
                console.log('Network request for ', event.request.url)
                return fetch(event.request)

                // TODO 4 - Add fetched files to the cache
            })
            .catch(error => {
                // TODO 6 - Respond with custom offline page
            })
    )
})

// Listen for push
var options = {}
self.addEventListener('push', event =>
    event.waitUntil(self.registration.showNotification('Hello', options))
)
