
//Declaro variables
const CACHE_NAME = 'cache-1'; 


//Iniciamos Instaladore 
self.addEventListener('install', event=>{
    
    const cacheProm = caches.open(CACHE_NAME).then(cache =>{
        return cache.addAll([
            '/'
            ,'./template/404.html'
            , './css/style.css'
            , './img/main.jpg'
            , 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
            , './js/app.js'
            , './index.html'
        ]);

    });

    //Debemos esperar que se termine 
    event.waitUntil(cacheProm);

});


//Iniciamos con método fecth

self.addEventListener('fetch', event=>{

    //Estrategia 
    // Cache with network fallback
    const respuesta = caches.match( event.request).then( resp =>{
        
        //Si todo bien
        if (resp) return resp;

        //Si todo mal, debo conectarme a la web 
        console.log("No Existe", event.request.url);


        return fetch( event.request ).then( newResp => {
            caches.open(CACHE_NAME)
                .then(cache =>{
                    cache.put( event.request, newResp );
            });
            return newResp.clone();

        });

    });

    event.respondWith(respuesta);

    
});



