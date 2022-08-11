
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
            './index.html',
            './img/no-img.jpg'
        ]);

    });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME).then(cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));     

    //Debemos esperar que se termine 
    event.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});


//Iniciamos con método fecth

self.addEventListener('fetch', event=>{

    const respuesta = new Promise( (resolve, reject)=>{
        let rechazada = false; 

        const falloUnaVez = ()=>{
            if (rechazada){
                //No existe en el cache ni una respuesta valida  
                if (/\.(png|jpg)$/i.test(event.request) ){
                    //si entra a este codnicional debo retornar una imagen 
                    resolve(caches.match('./Proyectos/04-cache-offline/img/no-image.jpg'));
                }else{
                    //Podemos crear y decir que esta pagina web no se encontro
                    reject('No se encontro respuesta');
                }
            }else{
                rechazada = true;
            }

        };

        fetch(event.request).then( resp=>{
            //Recuerda que el fetch puede fallar por el 404 
            resp.ok ? resolve(resp): falloUnaVez();

        }).catch(error=>{
            falloUnaVez();
        });

        caches.match(event.request).then(resp =>{

            resp ? resolve(resp) : falloUnaVez();
        
        }).catch(falloUnaVez);

    });
    
    //Aqui permite pasar nuestra promesa 
    event.respondWith(respuesta);
    
});


