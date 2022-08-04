const nameCache='apv-v2'//cambiar de versión si se quiere una nueva cache
const files = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
]

//Cuando se instala el service worker
self.addEventListener('install',e=>{
    console.log('el service worker está instalado');
    e.waitUntil(
        caches.open(nameCache)
        .then(cache=>{
            console.log('Catching')
            cache.addAll(files)
        })
    )
})

//Al activar el service worker
self.addEventListener('activate', e=>{
    console.log('Service worker activado')
    
    e.waitUntil(
        caches.keys()
        .then(keys=>{

            return Promise.all(
                keys.filter(key => key !== nameCache)
                .map(key=> caches.delete(key))
            )
        })
    )
})

//Evento fetch para descargar archivos estáticos
self.addEventListener('fetch',e=>{
    console.log('fetch',e);

    e.respondWith(
        caches.match(e.request)
        .then(responseCache =>{
            return responseCache
        })
        .catch(() => caches.match('/error.html'))
    )
})

