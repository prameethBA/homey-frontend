// Install the SW
self.addEventListener('install', event => {
    console.log('Insatalled')
    self.skipWaiting()
})

// Activate the SW
self.addEventListener('activate', event => console.log('Activated '))

// Listen for fetch
self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url)
})

// Listen for push
var options = {}
self.addEventListener('push', event =>
    event.waitUntil(self.registration.showNotification('Hello', options))
)
