const nameCache='apv-v1'//cambiar de versión si se quiere una nueva cache
const files = [
    '/',
   
    '/index.html',
    '/error.html',
    '/js/app.js',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/img/icons/Icon-144.png'
]

//Cuando se instala el service worker
self.addEventListener('install',e => {
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
self.addEventListener('activate', e => {
    console.log('Service worker activado')
    
    e.waitUntil(
        caches.keys()
        .then(keys=>{

            return Promise.all(
                keys.filter(key => key !== nameCache)
                .map(key => caches.delete(key))
            )
        })
    )
})

//Evento fetch para descargar archivos estáticos
self.addEventListener('fetch',e => {
    console.log('fetch',e);

    e.respondWith(
          caches.match(e.request)
            .then(responseCache => { 
            console.log('Respuesta correcta')
            return responseCache || fetch(e.request);
                 
            })
            .catch(() => caches.match('/error.html'))
        
        
    )
   
})

