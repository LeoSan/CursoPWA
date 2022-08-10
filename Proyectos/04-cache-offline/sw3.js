
//Declaro variables

//Metemos las variables que son corazon de nuestra aplicación y solo se usa cuando se instala wl ws
const CACHE_STATIC_NAME = 'static-v2'; 

//Metemos valores que cambian de forma muy recurrente, puede crecer mucho por eso lo separamos
const CACHE_DYMAMIC_NAME = 'dynamic-v1'; 

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

//Iniciamos Instaladore 
self.addEventListener('install', event=>{
    
    const cacheProm = caches.open(CACHE_STATIC_NAME)
    .then(cache =>{
       
        return cache.addAll([
            '/',
            './template/404.html',
            './css/style.css',
            './img/main.jpg',
            './js/app.js',
            './index.html'
        ]);

    });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME).then(cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));     

    //Debemos esperar que se termine 
    event.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});


//Iniciamos con método fecth

self.addEventListener('fetch', event=>{

    if (event.request.url.includes('bootstrap')){
       return  event.respondWith(caches.match(event.request));
    }
    
    //Estrategia  4- Cache with network update
    const respuesta = caches.open(CACHE_STATIC_NAME).then(cache => {

        fetch(event.request).then( newResp =>{//Hacemos pesto para obtener la ultima version del host 
            //Aqui actualizó de nuevo la cache con lo que se regesa
            cache.put(event.request, newResp);
            
            return cache.match(event.request);//Se actuliza de nuevo la cache
        });

    });
    
    //Aqui permite pasar nuestra promesa 
    event.respondWith(respuesta);

    
});


