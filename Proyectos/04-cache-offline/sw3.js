//Estrategia Final 
//Declaro variables
//Metemos las variables que son corazon de nuestra aplicación y solo se usa cuando se instala wl ws
const CACHE_STATIC_NAME = 'static-v3'; 
//Metemos valores que cambian de forma muy recurrente, puede crecer mucho por eso lo separamos
const CACHE_DYNAMIC_NAME = 'dynamic-v1'; 
//Metemos valores que no cambian en el tiempo 
const CACHE_INMUTABLE_NAME = 'inmutable-v1'; 
const CACHE_DYMAMIC_LIMIT  = '50'; 

function limpiarCache( cacheName, numeroItems ){

    caches.open(cacheName)
    .then( cache =>{
        return cache.keys()
            .then(keys =>{
                console.log(keys);
                if (keys.length > numeroItems ){
                    //Lo vuelve recursivo
                    cache.delete(keys[0]).then(limpiarCache(cacheName, numeroItems));
                }

        });

    });

}

//Evento Instalador
self.addEventListener('install', event=>{
    
    const cacheProm = caches.open(CACHE_STATIC_NAME)
    .then(cache =>{
       
        return cache.addAll([
            './',
            './template/404.html',
            './css/style.css',
            './img/main.jpg',
            './js/app.js',
            './index.html',
            './img/no-img.jpg',
            './pages/offline.html',
        ]);

    });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME).then(cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));     

    //Debemos esperar que se termine 
    event.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});

//Evento de Activación 
self.addEventListener('activate', e=>{

   const respuesta =  caches.keys().then(keys =>{
        keys.forEach(key => {
            if (key !== CACHE_STATIC_NAME && key.includes('static')){
                return caches.delete(key);
            }
                
        });
    });
    
    //const respuesta = new Promise
    e.waitUntil( respuesta );
});


//Iniciamos con Estrategia 2
self.addEventListener('fetch', e=>{

    // 2- Cache with Network Fallback
    const respuesta = caches.match( e.request )
         .then( res => {

             if ( res ) return res;

             // No existe el archivo
             // tengo que ir a la web
             return fetch( e.request ).then( newResp => {

                 caches.open( CACHE_DYNAMIC_NAME )
                     .then( cache => {
                         cache.put( e.request, newResp );
                         limpiarCache( CACHE_DYNAMIC_NAME, CACHE_DYMAMIC_LIMIT );
                     });

                 return newResp.clone();
             });
         }).catch(err =>{

            if (e.request.headers.get('accept').includes('text/html')){

                return caches.match('./pages/offline.html');
            }

         });
     e.respondWith( respuesta );
    
});


