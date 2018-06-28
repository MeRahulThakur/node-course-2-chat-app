self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('nodeChat').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/chat.html',
       '/css/styles.css',
       '/js/libs/jquery-3.3.1.min.js',
       '/js/libs/deparam.js',
       '/js/libs/moment.js',
       '/js/libs/mustache.js',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

    console.log(event.request.url);

    event.respondWith(

        caches.match(event.request).then(function(response) {

        return response || fetch(event.request);

        })

    );
});
