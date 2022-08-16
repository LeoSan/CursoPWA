//Importo 
importScripts('js/sw-utils.js');


//Declaro variables
//Metemos las variables que son corazon de nuestra aplicación y solo se usa cuando se instala wl ws
const CACHE_STATIC_NAME = 'static-v1'; 
//Metemos valores que cambian de forma muy recurrente, puede crecer mucho por eso lo separamos
const CACHE_DYNAMIC_NAME = 'dynamic-v1'; 
//Metemos valores que no cambian en el tiempo 
const CACHE_INMUTABLE_NAME = 'inmutable-v1';//inmurabol  
const CACHE_DYMAMIC_LIMIT  = '50'; 


//Esto es nuestro corazón es lo que deberia cargarse de manera rapida 
const APP_SHELL = [
    '/',
    'index.html',
    'css/style.css',
    'img/favicon.ico',
    'img/avatars/spiderman.jpg',
    'img/avatars/ironman.jpg',
    'img/avatars/thor.jpg',
    'img/avatars/hulk.jpg',
    'img/avatars/wolverine.jpg',
    'js/app.js',
    'js/sw-utils.js'
];

//Estos son recursos que no se podran cambiar son constantes 
const APP_SHELL_INMUTABLE = [
    'https://fonts.googleapis.com/css?family=Quicksand:300,400',
    'https://fonts.googleapis.com/css?family=Lato:400,300',
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
    'css/animate.css',
    'js/libs/jquery.js'
];


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


//**************************************************************************** */

//Iniciamos nuestra instalación 

self.addEventListener('install', event=>{
    
    const cacheProm = caches.open(CACHE_STATIC_NAME)
    .then(cache =>{
        return cache.addAll(APP_SHELL);
    });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
    .then(cache =>{
        return cache.addAll(APP_SHELL_INMUTABLE);
    }).catch(err =>{

        imprimeError(err, "Linea 75, ws.js");
     });


    //Debemos esperar que se termine 
    event.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});


//Evento de Activación 
self.addEventListener('activate', e=>{

    //Metodo para eliminar la caches 
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
 

 const options = {
    method: 'GET',
    mode: 'no-cors'
  };


//Esto si me permite trabajar offline pero rompe cuando no encuentra un recurso en este caso es el all.css tiene problemas cors 
self.addEventListener( 'fetch', e => {
    const respuesta = caches.match( e.request ).then( res => {
        if ( res ) {
            return res;
        } else {
            return fetch( e.request ).then( newRes => {
                return actualizaCacheDinamico( CACHE_DYNAMIC_NAME, e.request, newRes );
            });
        }
    });
    e.respondWith( respuesta );
});


/*
//Esto no me permite trabajar oofline le falta algo 
self.addEventListener( 'foreignfetch', e => {
    const respuesta = caches.match( e.request ).then( res => {
        if ( res ) {
            return res;
        } else {
         return requestLogic(e.request).then(newRes => {
                return {
                response: actualizaCacheDinamico( CACHE_DYNAMIC_NAME, e.request, newRes ),
                // Omit to origin to return an opaque response.
                // With this set, the client will receive a CORS response.
                origin: e.origin,
                // Omit headers unless you need additional header filtering.
                // With this set, only Content-Type will be exposed.
                headers: ['Content-Type']
                };
            });
            
            
        }
    });
    e.respondWith( respuesta );
});*/
