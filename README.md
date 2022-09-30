# CursoPWA "Curso para el manejo de aplicaciones web progresivas"

**Profesor** 

![Master](./info/Master.png)

**Enlaces:**

- https://www.udemy.com/course/aplicaciones-web-progresivas/


## Sección 1: Fundamentos que debes tener ya instalados 


Visual Studio Code Extensiones
Estas son las extensiones que estoy usando en Visual Studio Code. 

Importer.
• Angular 6 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout
• Angular Language Service
• angular2-inline
• Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets
• HTML CSS Support
• Ionic 3 snippets
• JavaScript (ES6) code snippets
• jshint
• JSON to TS
• Material Icon Theme
• mysql-inline-decorator
• Prettier - Code formatter
• PWA Tools
• Terminal
• TSLint
• TypeScript Importer


## Sección 2: Fundamentos de las aplicaciones web progresivas

**¿Qué son las aplicaciones web progresivas?**

> Son:
- Son Mobile Firts
- Es pensando para celulares 
- Es un aplicacion web, que puede ser una pagina web 
- Funciona sin conexion web 
- Usa aplicaciones nativas del dispositivo 
- Es confiable  - Esta actualizada - Carga muy rapido. 
- No se le pregunta al usuario si se desea actulizar o no. 
- Ejemplo la PWA de twiter pesa menos que la APP nativa 


>No es: 
- No es una extension de navegadores web 
- No es un Framework como React, Vue, angular
- No es un pluging o libreria para los frameworks
- No es parecido a React Native, Native script, ionic 
- No es responsive 
- No es una aplicación nativa 

**¿Por qué construir una PWA??**

**Razones:**
- Muchos usuarios usan su celular mobil para validar o revisar su navegador web del celular para ver tu sitio web 
- La tendencias es que las personas estan usando mucho el navegador web del celular 
- El usuario promedio instala 0 aplicaciones nativas por mes. 
- El usuario promedio primero busca en el navegador web antes de descrgar una app nativa 
- Las PWA tiene la ventaja de correr sin conexión 
- las PWA tienen el poder de (Push Server, Manifest, IndexedBD, Service Worker)

**¿Conceptos Clave de las PWA??**

**Service Worker**
- Es un pequeño proxy que esta entre nuestra pagina web y el WWW
- Es un arhivo JS plano 
- Cuando nuestra pagina realiza una petición a la WWW pasa por nustro archivo JS (Service Worker) y decide lo que podemos realizar con conexión o sin conexion 
- Debe estar siempre bajo un protocolo HTTPS
- Forma Operacional -> si nos conectamos a la web pasa por el **service worker**  esta valida si existe el elemento en su localstorage si existe la muestra en la web si no se conecta a la web la baja la guarda en local y la muestra. 
- El service worker inicia con el `navigator.serviceWirker.register(/sw.js)`
- El **SW** Corre en hilos independientes si cierras tu pagina que estas consultando este no se termina sigue escuchando para estar listo de nuevo para tu web 
- Ciclo de Vida, Instalando -> Instalado -> Activación -> activado -> Ocioso 
![SW](./info/ciclo_sw.png)

- Paso Instalando: Se descarga el archivo JS, el JS es parseado o revisado paso al siguiente paso 
- Paso Instalado: Se conoce como waiting, Se movera el siguiente paso si no existe algun SW ejecutandose en caso que exista otro SW ejecutandose el solo esperará que todos los tab esten cerrados para ejecutarse
- Paso Activación: susede antes que el SW  tome el control de nuestra aplicación, aqui podemos hacer alguna limpieza en caso que se necesite.
- Paso activado: Cuando esta activo aqui el SW tiene control absoluto de nuestra aplicación we, control total de lo que deseamos hacer. 
- Paso Ocioso: esto es cuando falla la instalación ó es reemplazado por otro SW, ya no hay control de la aplicación, solo esta esperando para ser destruido. 

## Sección 3: Reforzamiento Promesas, Fetch API y HttpServer

**Puntos**
- Promesas
- Promesas en cadena
- Promise.all
- Promise.race
- Fetch API
- Gets
- Posts
- Fetch de Blobs
- http-server

### Clase 13 Reforzamiento Promesas, Fetch API y Httserver 

Podemos instalar `npm install http-server -g` para que podamos ejecutar en un server pero podemos usar Go Live un plugin de visual 

>PD : 

- Para generar una promesa 
```
const sumar =( num)=>{

    var promesa = new Promise( (resolve, reject)=>{
            setTimeout(() => {
                resolve(num + 1 );  
            }, 800);
   });

   return promesa;
}

sumar(9).then( (nuevoNumero)=>{
    console.log(nuevoNumero);
} ); // has esto cuando la promesa termine, no dispara la promesa  

console.log("Aqui promesa manejando error");

const sumar =( num)=>{

    var promesa = new Promise( (resolve, reject)=>{
            console.log(num);
            if (num >= 7){
                reject('El numero es muy alto');
            }
            setTimeout(() => {
                resolve(num + 1 );  
            }, 800);
   });

   return promesa;
}

sumar(3).then( sumar )
        .then( sumar )
        .then( sumar )        
        .catch(error =>{
         console.log(`Error:>`, error);   
        });
```
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

## Sección 3: Origenes del Fetch Clase 22


**Petición Fetch Nueva **
```

fetch('https://reqres.in/api/users')
	.then(resp=>{
	//Esto es una promesa tambien
	let valor = resp.json().then();
	console.log(valor);
});

```
## Sección 4: Service Worker y Fetch Event 

## Clase 34: Introducción al service worker 

**Que és**
- Es un mediador que tiene la función de validar todas la peticiones antes de entrar o establecer una conexcion a la web. 
- Service corre en su backgorund, corre en su propio hilo. 
- Recuerda a pesar que cierres el navegador el servicewroker siempre queda activo. 
- Se identifica en el navegador por tener un engranaje como icono
- Es un archivo normal js, lo diferencia de los demas porque tiene un gran conjunto de eventListener, esta pendiente de sucesos. 
- Podemos disparar eventos para install, active, push, fetch, sync, message. 
- Siempre se debe ejecutar en una ruta segura si no, no funciona es decir conexiones HTTPS://



## Clase 35: Inicio del Proyecto 

**Consejos**
- Siempre debemos limpiar cache para manejar los service worker
- https://jshint.com/docs/options/ Comfiguración 

![Usar_ToolDEV_0001](./info/Usar_ToolDEV_0001.png)


## Clase 36: Instalacion del Service Worker

**Consejos**
> Paso 1:
- Debes usar algun servidor para usar SW, yo ando usando un plugin de Visual Code llamado `Live Server`, pero puedes usar Laragon o otro servidor apache que tengas disponible 
- Debemos validar que version que navegador web soporta service worker 
- https://caniuse.com/?search=service%20worker 
  
> Paso 2:  
- Los SW siempre van en la raiz de los proyectos 
- Podemos referencias nuestro SW de esta manera `navigator.serviceWorker.register('sw.js');`
- Claro previamente debemos crear nuestro archivo `sw.js` en raiz recuerda en raiz de TU proyecto. 
- Nota se genera en la raíz ya que con este, le estamos diciendo que tome control absoluto de todos los archivos y carpetas que tienen nuestro proyecto. 
  

> Paso 3:  
-


## Clase 37: Como hacer un escuchador 

```
 self.addEventListener('fetch', event=>{
    console.log(event);
})
```



## Sección 5: Ciclo de vida de un Service Worker y los listeners más comunes

**Temas puntuales de la sección**


> Esta sección tiene un resumen de los principales listeners usado dentro de un service worker, mi objetivo es enseñarles cómo y en qué momento son invocados para posteriormente utilizarlos en una aplicación que desarrollaremos que requiere estos conocimientos.

**Entre los listeners más comunes están:**

- fetch
- sync
- install
- activate
- push

## Clase 47. Service Worker: Install


Forma de instalar un SW
```

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('./sw03.js');
}
```

> Nota: Si ves que no jala la instalción cierra el navegaor o abre otro navegador y sigue con la practica

## Clase 48-51:

```
// Ciclo de vida del SW

//install
self.addEventListener('install', event=>{

    //Durante la Instalación del SW 
    //Descargar Assets 
    // Creamos un Cache
    console.log("SW: Instalando SW");

    //self.skipWaiting(); // 
const instalacion = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("SW: Instalaciones terminadas");
        self.skipWaiting();
        resolve();
    }, 2000);

});

    //Esto permite esperar que hasta la promesa termine    
    // Siempre resive promesas 
    event.waitUntil(instalacion); 

3});

//Cuando el SQ toma el control de la aplicación.
//activate
self.addEventListener('activate', event=>{
    console.log('SW: activo y listo para controlar app');

});

//FETCH: Manejo de peticiones http 
self.addEventListener('fetch', event=>{
    //Aplicar estrategias del cache 
    //Hay que preguntarnos vale la pena guardar cache 
    console.log('SW: '+ event.request.url);
    if (event.request.url.includes('body')){
        const resp = new Response(`mensaje jajaa`);
    }
});



//SYNC: LO USAMOS CUANDO RECUPERAMOS CONEXION A INTENER 
// se combina el index del navegador y validar el tag 
// Tenemos que validar si el navegador soporta esta funcionalidad 
self.addEventListener('sync', event=>{

    console.log("SW: Tenemos conexión");
    console.log(event);
    console.log(event.tag); 

});

```
## Clases 58: introducción al cache storage 

> El cache es un espacio de disco duro, podremos crear variables y anxar cualquier valor 


**Meotodos básicos**
-  caches.open
-  caches.has
-  caches.delete
-  cache.add
-  cache.addAll
-  cache.match
-  caches.keys


**Nota**
- La funcionalidad `Cache` es propia de windows 
- La funcionalidad `server worker` es del navegador 
- Al consultar cache se convierte en una promesa por lo que podemos usar .then 
- Puedo almacenar imagenes, estilos, js, paginas web. 


**Ejemplos**

```
//Validamos SI EL NAVEGADOR SOPORTA caches 
if (window.caches){
    //Asi creamos Cache 
    console.log("Creando caches");
    caches.open('prueba-1');

    //Asi valido si existe dicha chache 
    if (caches.has('prueba-1')){
        console.log("valido caches");
        caches.has('prueba-1').then(console.log);
    }

    //Asi elimino cache
    console.log("elimino caches"); 
    caches.delete('prueba-1');

    //Asi agrego  valores a la cache
    cache.add('../template/404.html');

}

// Crear caches multiples 
    caches.open('cache-v1.1').then(cache =>{
        //Tambien es una promesa
        cache.addAll(
            ['../template/404.html',
            '../css/style.css',
            '../img/offline.gif'
            ]).then(()=>{
                //Puedo meter operaciones aqui 
                caches.delete('../css/style.css');
                cache.put('../template/404.html', new Response('Hola mundo')); // Asi se remplaza
            });

            // es otra promesa
            cache.match('../template/404.html').then(resp =>{

                resp.text().then(console.log);
            });
    });

    //Forma de validar que caches existen 
    //Es un trabajo asincrono
    caches.keys().then(keys =>{

        console.log(keys);
    })

```
http://127.0.0.1:5500/Proyectos/04-cache-offline/


## Clases 59. Guardar el APP SHELL a la hora de instalar SW

**APP SHELL**
> Es un metodo que nos ayuda a validar que se necesita instalar para que tu apalicion pueda trabajar, es algo que deseo cargar rapidanmente 

## Clases 60. Estrategia: Cache Only

> Una ves instanciado el unico cache, la idea es que jamas regrese a consultar algo a la web 
> Esta es usada cuando toda la aplicación es servida desde el unico cache, no va existir peticion que aceda a la web.  

**Ejemplo**
```
//Iniciamos Instaladore 
self.addEventListener('install', event=>{
    
    const cacheProm = caches.open('cache-1').then(cache =>{
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


    //Estrategia del cache 
    //cache Only 
    event.respondWith( caches.match( event.request) ); 

    
});

``` 

## Clases 61. Estrategia: Cache with network fallback


**Nota**
- Esta estrategia es algo complicada ya que si existe un error 404 validando cache no lo puedo cath con un try 
- No estan optima ya que se mezcla logica de programación con tus propios metodos originales 



**Ejemplo**
```


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



```

## 62. Cache dinámico - Optimizaciones

**Nota**
- Nos permite crear caches mas mantenibles en el tiempo debido que las segmentamos
- Podemos manera una cache dinamica pero hay que limitarla ya que no podemos colocar todo lo de la nube en esa cache 

```

//Declaro variables

//Metemos las variables que son corazon de nuestra aplicación y solo se usa cuando se instala wl ws
const CACHE_STATIC_NAME = 'static-v1'; 

//Metemos valores que cambian de forma muy recurrente, puede crecer mucho por eso lo separamos
const CACHE_DYMAMIC_NAME = 'dynamic-v1'; 

//Metemos valores que no cambian en el tiempo 
const CACHE_INMUTABLE_NAME = 'inmutable-v1'; 




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

    //Estrategia 
    // Cache with network fallback
    const respuesta = caches.match( event.request)
    .then( resp =>{
        
        //Si todo bien
        if (resp) return resp;

        //Si todo mal, debo conectarme a la web 
        console.log("No Existe", event.request.url);


        return fetch( event.request ).then( newResp => {
            caches.open(CACHE_DYMAMIC_NAME)
                .then(cache =>{
                    cache.put( event.request, newResp );
            });
            return newResp.clone();

        });

    });

    event.respondWith(respuesta);

    
});

```


## 63. Limitar el cache dinámico

**Nota**


```

//Declaro variables

//Metemos las variables que son corazon de nuestra aplicación y solo se usa cuando se instala wl ws
const CACHE_STATIC_NAME = 'static-v2'; 

//Metemos valores que cambian de forma muy recurrente, puede crecer mucho por eso lo separamos
const CACHE_DYMAMIC_NAME = 'dynamic-v1'; 

//Metemos valores que no cambian en el tiempo 
const CACHE_INMUTABLE_NAME = 'inmutable-v1'; 


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

    //Estrategia 
    // Cache with network fallback
    const respuesta = caches.match( event.request)
    .then( resp =>{
        
        //Si todo bien
        if (resp) return resp;

        //Si todo mal, debo conectarme a la web 
        console.log("No Existe", event.request.url);


        return fetch( event.request ).then( newResp => {
            caches.open(CACHE_DYMAMIC_NAME)
                .then(cache =>{
                    cache.put( event.request, newResp );
                    //Buen Lugar para limpiar el cache 
                    limpiarCache(CACHE_DYMAMIC_NAME, 3);
            });
            return newResp.clone();

        });

    });

    event.respondWith(respuesta);

    
});

```


##  64. Estrategia: Network with cache fallback

**Nota**
- Si usamos dispositivos mobiles siempre siempre va consultar algo de la nube 
- Es mas lenta por lo que la estrategia pudiera fallar con conexiones 2g 3g 

```
self.addEventListener('fetch', event=>{

    //Estrategia  3- Network with cache fallback
    // Si usamos dispositivos mobiles siempre siempre va consultar algo de la nube 
    //Es mas lenta por lo que la estrategia pudiera fallar con conexiones 2g 3g 
   
   if (!res){
        return caches.match(event.request);//Esto es como un ultimo recurso 
   }
    const respuesta = fetch(event.request).then(res =>{

        caches.open(CACHE_DYMAMIC_NAME)
            .then(cache => {
                    cache.put(event.request, res);
                    limpiarCache(CACHE_DYMAMIC_NAME, CACHE_DYMAMIC_LIMIT);
            });

        return res.clone();

    }).catch(err=>{
        return caches.match(event.request);
    });
    
    //Aqui permite pasar nuestra promesa 
    event.respondWith(respuesta);

    
});
```

##  65. Estrategia: Cache with network update

**Nota**
- Se usa cuando necesitamos un rendimiento exigente 
- Nuestra app estara un paso atras de la versio original 
- En esta estrategia se supone que toda la información existe en la cache no se tiene nunguna cache que sea dinamica
- Se retorna el producto obtenido en se actualiza la cache 

```
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

```


##  66. Estrategia: Cache & Network Race 

**Nota**
- Es una competencia para ver cual de los dos responde primero 
- Es para aquellos dispositivos que tenga un procesamiento de cache lento pero una velocidad de internet rapida 
- Es para darle al usuario la mas alta velocidad de respuesta en estas peticiones 

```
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
```

##  67 y 68 y 69 . Estrategia combinadas
**Nota**
- Podemos usas estrategias para definir nuestro pwa todo depende de la logica del negocio o lo que requieres
- `if (e.request.headers.get('accept').includes('text/html')){` podemos usar esta estrategia para validar un html, css, js lo que venga de request 

## 70 - 71 

**Resultados Cuestionarios**
![Resultados](./info/CuestionarioB.png)

## Seccion 7 - Despliegues a disposivos 

**Resumen**
![Prueba](info/TemaSeccion7.png)

## Clase 72-73-74-75-76-77-78

**Nota**
- El Master nos comparte ya una herramienta de chat creada funcional el proposito es pasarla PWA
- Aqui aplicaremos las nociones basicas aprendidas y pequeños tips para empezar desarrollar PWA 
- No logro solventar problemas del cors usando los eventos he estado leyendo esto sin exito -> https://developer.chrome.com/blog/foreign-fetch/

**Ejemplo**
- El proyecto [Chat Vengadores](Proyectos\05-twittor)

**Resumen**
- Paso 1: Creamos nuestro archivo ws.js 
- Paso 2: En nuestro app.js creamos el enlace con el ws.js creado PD-> recuerda que tu app.js es tu archivo js que arranca alguna funcionalidad de tu apliación para este ejemplo este archivo esta en js/app.js 
- Paso 3: ya arrancamos a la configuración del WS 
  - Paso 3.1: Creamos nuestras variables caches
  - Paos 3.2: creamos nuestro evento instalador  
  - Paos 3.3: creamos nuestro evento activate
  - Paos 3.4: creamos nuestro evento fetch

- Paso 4: Creamos nuestro Manifest.json 
  - Paso 4.1: Debemos crear el archivo manifest y configurarlo [Manifest](https://web.dev/add-manifest/)
  - Paso 4.2: debemos colocar esto en cada página html o plantilla que usemos`<link rel="manifest" href="manifest.json"/>` 
**Ejemplo  Manifest validado**
!Manifest[](info/ManifestComprobado.png)


```
```

## Seccion 8 - IndexedDB - Reforzamiento de base de datos local

**Resumen**
![Prueba](info/TemaSeccion8.png)

## Clase 89- Inicios de indexedDB
**Nota**
- Cuando modificamos cualquier cosa de la base de datos debemos manejar todos los request y todos los listenes de manera manual. 
- 

**Ejemplo**
```
// indexedDB: Reforzamiento
let request = window.indexedDB.open('mi-database', 1);

//Se actualiza cuando se crea o se sube una nueva version de la DB 

request.onupgradeneeded = event =>{

    console.log('Actualiza DB');
    let db = event.target.result; //Referencia a la BD 

    //Necesitamos una key para nuestra BD 
    db.createObjectStore('heroes', {
        keyPath:'id'

    });

};

```

**Enlace**
- https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API


## Clase 90 - Manejo de errrores 
**Nota**
- Es complejo ya que se debe manejar por eventos
- se pierde organización del código
- no es seguro y no es facil de mantener
  
**Interfaz**
- ![info 90](info/Clase90.png)

**Ejemplo**
- [Ejemplo](Proyectos/07-indexeddb/app.js)

## Clase 92 - PouchDB- Empesando 
**Nota**
- PouchDB es una base de datos de JS, que nos permitirá grabar información durante el offline y luego conectarnos y sincronizarlo con otra base de datos en un servidor. 
- Es un Plugin que trabaja a base de promesas 

**Info**
- [Tuto](info/Getting+Started+Guide.pdf)
- https://pouchdb.com/getting-started.html

**Como**
- Paso 1: Configuramos en el index.html o el archivo principal el la libreria DNS 
- Anexamos esto en la parte inferior `<script src="//cdn.jsdelivr.net/npm/pouchdb@7.3.0/dist/pouchdb.min.js"></script>`
- Paso 2: Creamos la base de Datos JS en el `app.js`

```
var db = new PouchDB('todos');
var remoteCouch = false;
```
- Paso 3: Creamos el metodo para insertar 
```
  // We have to create a new todo document and enter it in the database
  function addTodo(text) {
    var todo = {
      _id: new Date().toISOString(),
      title: text,
      completed: false
    };
    db.put(todo, function callback(err, result) {
      if (!err) {
        console.log('Successfully posted a todo!');
      }
    });    
  }

```

## Podemos generar un CRUD de la sigueinte manera. 
```

  //CREAR
  // We have to create a new todo document and enter it in the database
  function addTodo(text) {
    var todo = {
      _id: new Date().toISOString(),
      title: text,
      completed: false
    };
    
    //Forma callback
    
    db.put(todo, function callback(err, result) {
      if (!err) {
        console.log('Successfully posted a todo!');
      }
    });
    

    //Forma Promesa
    /*db.put(todo)
      .then( console.log('Insertado') )    
      .catch( console.log );
      */
  }

  //Mostrar 

    // Show the current list of todos by reading them from the database
  function showTodos() {

    
    //Forma call back
    /*db.allDocs({include_docs: true, descending: true}, function(err, doc) {
      redrawTodosUI(doc.rows);
    });
    */

    //include_docs: true -> Esto es para recibir el metadato del objeto 
    //Forma de promesa
    db.allDocs({include_docs: true, descending: true})
    .then(doc =>{
      redrawTodosUI(doc.rows);
    });

  }

//Editar


  function todoBlurred(todo, event) {

    var trimmedText = event.target.value.trim();
    if (!trimmedText) {
      db.remove(todo);
    } else {
      todo.title = trimmedText;
      db.put(todo);
    }    
  }

//actualizar
    function checkboxChanged(todo, event) {

    todo.completed = event.target.checked;
    db.put(todo).then(console.log('Registro actualizado'));    
  }

  //Eliminar
  // User pressed the delete button for a todo, delete it
  function deleteButtonPressed(todo) {
    db.remove(todo).then(console.log('Registro Eliminado'));
  }

```


# Sección 9: Sincronización sin conexión - Offline Synchronization

## Clase 99 a 105: 
**Notas**

- Es la forma de manejar la cache cuando usamos APis
- Debemos tener presente que cada respuesta se debe estar controlando que va y que no va a la caches para este ejemplo validamos la ruta que se obtienen los mensajes. 
- Para los post tambien debemos realizar una estrategia para mantener la caches actualiazada
- Recuerda Reuerda que el SW corre independiente a la isntancia de nuestra aplicación para el caso de usar librerias que respalde el uso de sw podemos usar el metodo `importScripts` podemos añadir nuestros pluging de una manera mas comoda 
- Recuerda que los SW jalan cuando el https seguro 
- Esto ayuda mucho para generar ID aleatorias sin bajar o instalar un npm `getMensajes._id = new Date().toISOString();`
- //syncmanager -> No es soportado por todos los navegadores web 
- Manera de preguntar o validar si el sw esta enlinea -> `self.register` -> `if (self.register.sync){`, todo lo que digar `self` se refiere al `service worker` 
- Recuerda que los SW deben siempre responder algo 
- Recuerda la noción básica de `SW` es como un `PROXY` que interfiere las peticiones `fetch` 
```
//Esto es para caches dinamicos usando APIS
// Network with cache fallback / Update 
// Nota-> cada vez que retornas algo debes manejar la caches para el offline 
function manejoApiMensajes(cacheName, req){
    return  fetch(req)
    .then(resp=>{
        if (resp.ok){
            actualizaCacheDinamico(cacheName,req, resp.clone() );//Siempre las respuesta la clonamos para evitar los callback hell
            return resp.clone();//Para evitar que se ejecute primero
        }else{
            return caches.match(req);
        }
    }).catch(err =>{
        return caches.match(req);
    });
}
```

## Clase 109: Disparar posteos cuando hay conexión a internet

**Nota**
- Esto se hace siempre y cuando el dispositivo tenga soporte a el `Sync Manager` es decir a esto `self.registration.sync`, esto permite que se pueda realizar la sincronización luego que regrese el internet 
- Recuerda noción básica de como funciona, debemos capturar los datos y estos los podemos meter en una indexDB de tipo cache del lado del navegador, si nos quedamos sin internet usamos esta opción para almacenar los datos y cuando tengamos internet podemos meterle un servicio web para que envie a X base de datos los que se capturo en modo Offline. 


```
//Tareas Asincronas ->  aquellas que son offline 
self.addEventListener('sync', e=>{
    console.log('SW:Sync');
    if (e.tag === 'nuevo-post'){
        //Postear en la DB 
        const respuesta = postearMensajes();
        //Esto lo envia al SW 
        e.waitUntil(respuesta);
    }

});
```

## Clase 110. Front-End: Detectar cambios de conexión a internet

**Nota**
- Usaremos el navigator para validar si tenemos  conexión a internet 
- conociendo esto podemos activar ciertos elementos esto es en caso que que un dispositivo no soporte el `self.registration.sync` 


# Sección 10: Notifications - Push Notifications - Push Server
![Tema 10](info/TemaSeccion10.png)

## 114-118. Introducción al envío de Push Notifications

**Qué es**
> Notificación push es una manera que tiene un servidor para mandarte una notificación directamente en tu dispositivo sin que tú hayas programado algo en particular. 

**Características**
- Importa el permiso, nosotros no vamos a poder Mandar ninguna notificación push sin que el usuario literalmente no acepte recibir notificaciones. 
- Existen 3 tipos de estados para la notificaciones 
- Estado 1 -> Este estado es el `Granted` quiere decir que el usuario acepto recibir tus notificaciones
- Estado 2 -> Este estado `Denied` quiere decir que el usuario no quiere recibir notificaciones tuyas y por más que quieras no le vas a poder Mandar ninguna. 
- Estado 3 -> Existen usuarios que no quieren que les estén preguntando y las aceptan todas o las bloquean todas ahí no tenemos mucho que hacer pero nos daríamos cuenta si están permitidas o denegadas. 

**Notas**

>la gran mayoria de las aplicaciones preguntan demasiado temprano si desea recibir notificaciones en 99% de la gente cuando entra a un sitio web que desconoce y le dice "te queremos Mandar notificaciones" el 99% de nosotros va a decir que NO;  NO queremos que nos molesten porque no sabemos ni para quien nos quieren Mandar notificaciones pero si lo ofrecemos en el momento correcto y ofrecemos los beneficios podemos incrementar esto dramáticamente. 

**Como**
> lamentablemente tenemos que pasar por un servicio de terceros normalmente es ofrecido por el mismo navegador web en caso de Google chrome o navegadores que usen androide pasa por `Google firebase cloud Messenger`  para los usuarios de firefox también tienen su propio `cloud messaging` pero lo bueno aquí es que no hay que suscribirse no hay que registrarse no hay que pagar nada no hay un un límite de envío de notificaciones. 
![como](info/NOTI_PUSH_0001.png)


**Ejemplo Código**
```
//Solicitar notificaciones 

//Ejemplo creando una estructura personalizada al notificacion
function enviarNoticacion(){
    const objOpt = {
        body:'Este va ser el cuerpo',
        icon:'Proyectos\11-twittor-con-push\public\img\icons\icon-72x72.png',
    }
   const noti =  new Notification('Hola mundo', objOpt);
   return noti;
}


function notificarme(){

    //Debemos validar si el navegador lo soporta 
    if(!window.Notification){
        console.log("Este navegador no soporta notificaciones");
        return null; 
    }

    if (Notification.permission === 'granted'){
        new Notification('hola mundo - granted');
    }else if(Notification.permission !== 'granted' || Notification.permission ==='default'){
        Notification.requestPermission( (permission)=>{

            console.log("permission", permission );
            if (permission === 'granted'){
                new Notification('hola mundo - pregunta');
            }

        });
    }
}


notificarme();
```

## Clase 119: Generar llave publica y privada  

> Podemos usar web-push como un administrador de publicaciones push 

**Como**
- Podemos ejecutar el comando `npm i web-push`
- [Enlace - Documentación](https://www.npmjs.com/package/web-push)

**Uso**
- Paso 1: Debemos instalar el paquete 
- Paso 2: habilitarlo en nuestro script de `package.json` de la siguiente manera:
```
  "scripts": {
    "start": "node server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node ./node_modules/nodemon/bin/nodemon.js server/server",
    "generate-vapid": "node ./node_modules/web-push/src/cli.js generate-vapid-keys --json  > server/vapid.js"
  },
```
- Paso 3: ejecutamos el comando y este nos genera las llaves, `npm run generate-vapid`
- Paso 4: esto se genera una sola ves 

## Clase 120 - 124 : Retornando nuestro Key 
> Para este caso el portal web-push no recomienda usar una función que tiene windows pero esto solo funciona del lado del cliente por lo que debemos buscar un paquete que debemos instalar en el lado servidor este tiene el nombre de `urlsafe-base64`

**Como**
- Paso 1: debemos instalar el paquete `npm i urlsafe-base64` [Enlace-documentacion](https://www.npmjs.com/package/urlsafe-base64)
- Paso 2: Editamos nuestro archivo `pushs.js` de esta manera: 
```
const vapid = require('./vapid.json');
const urlBase64 = require('urlsafe-base64');
const getKey = () =>{
  return urlBase64.decode(vapid.publicKey);
};

module.exports ={
    getKey
};

```
- Paso 3: esta es la forma segura de retornar una llave publica para los push, luego vamos a nuetsro `app.js` del lado cliente y anexamos lo siguiente: 

```
//Aseguramos que el SW se cargue al mismo tiempo que cargue la pagina y no despues 

var url = window.location.href;
var swLocation = '/twittor/sw.js';
var swReg;

if ( navigator.serviceWorker ) {


    if ( url.includes('localhost') ) {
        swLocation = '/sw.js';
    }

    
    //Super importante cuando cargue la pagina principal cargamos tambien el SW
    window.addEventListener('load', function() {

        navigator.serviceWorker.register( swLocation ).then( function(reg){
            swReg = reg;
            swReg.pushManager.getSubscription().then( verificaSuscripcion );
        });

    });

    
}


//Aqui generamos la suscripción del push usando las llaves privadas claro esto se ativa al dar clic al boton de activar notificaciones, recuerda las notificaciones funcionan por un API del navegador Chrome y esta es diferente o soportada por diferentes navegadores

//Evento Clic para registrar subcripcion 
btnDesactivadas.on( 'click', function() {

    if ( !swReg ) return console.log('No hay registro de SW');

    getPublicKey().then( function( key ) {

        swReg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: key
        })
        .then( res => res.toJSON() )
        .then( suscripcion => {
            
            // console.log(suscripcion);
            //Hacemos el posteo de la Suscripción para registrarlo en el navegador 
            fetch('api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( suscripcion )
            })
            .then( verificaSuscripcion )
            .catch( cancelarSuscripcion );

        });

    });

});


//Ahora del lado del cliente router va esto 
// Almacenar subcrición
router.post('/subscribe',  (req, res) => {
  const suscripcion = req.body;
  pushs.addSubscription( suscripcion );
  res.json('subscribe');
});

// Usamos nuestro push 

const fs = require('fs');
const vapid = require('./vapid.json');
const urlBase64 = require('urlsafe-base64');
const webpush = require('web-push');

//let suscripciones = [];
let suscripciones = require('./subs-db.json');

//Metodo para geneear la llave publica
const getKey = () =>{
  return urlBase64.decode(vapid.publicKey);
};


//Metodo para generar la suscripcion con el API de notificaciones de CHROME 
const addSubscription = ( suscripcion ) => {
  suscripciones.push( suscripcion );
  console.log(suscripcion);
  //Aqui lo podemos colocar en una base de datos pero como no tenemos usamos un archivo json 
  fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones) );

};

module.exports ={
    getKey,
    addSubscription
};


```


## Clase 120 - 124 : Configurar web-push y enviar una notificicion 

**Nota**
- Para este ejemplo usamos un pquetes llamado web-push 
- Necesito esperar que la notifiacación haga todo lo que tiene  que hacer 
- [Documento de notificación](https://web.dev/push-notifications-display-a-notification/) Esta es la documentación para configurar un poco de las notificaicones 
- En caso de Mobile podemos tener patrones de vibraciones  [Documentación](https://gearside.com/custom-vibration-patterns-mobile-devices/) 
- Se recomienda usar direcciones absolutas para las imagenes en las notificaciones 
- Segun no tienen un costo por tantas notificaciones creadas 


**Como**
- Paso 1: Instalar paquete `npm i web-push`
- Paso 2: en nuestro archivo ``pushs.js` hacemos la configuración de esta manera  
```
//Enviamos un mensaje a todas las suscripciones 
const sendPush = ( post ) => {

  console.log('Mandando PUSHES');
  const notificacionesEnviadas = [];


  //Lista de suscripcion
  suscripciones.forEach( (suscripcion, i) => {

    //Forma de enviar notificaciones 
      const pushProm = webpush.sendNotification( suscripcion , JSON.stringify( post ) )
          .then( console.log( 'Notificacion enviada ') )
          .catch( err => {

              console.log('Notificación falló', err.statusCode);

              if ( err.statusCode === 410 ) { // GONE, ya no existe
                  suscripciones[i].borrar = true;//Solo lo marca para borrar
              }

          });

      notificacionesEnviadas.push( pushProm );

  });


  //Aqui borro las que tenga la bandera de borrar 
  Promise.all( notificacionesEnviadas ).then( () => {

      suscripciones = suscripciones.filter( subs => !subs.borrar );//Quedan las que no estan borradas, forma de borrar usando filter

      fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones) );

  });

};
```

- Paso 3: configuramos nuestro router o service lo siguiente: claro peviamente importamos nuestro `pushs.js` 
```
// Enviar notificación PUSH a las personas 
//Esto es algo que se controla desde el lado server  
router.post('/push',  (req, res) => {
  
  const notificacion = {
    titulo:req.body.titulo,
    body:req.body.body,
    usuario:req.body.usuario
  }; 

  pushs.sendPush(notificacion);

  res.json(notificacion);

});

```

- Paso 4: Configuramos el `SW` para que pueda escuchar cuando enviamos un `sendPush`: 
```
//Debemos escuchar Push 
// tareas asíncronas
self.addEventListener('push', e => {

    console.log(e);
    const data = JSON.parse( e.data.text() );

    //Hacemos la notificación del push 
    const title = data.titulo;
    const options = {
        body: data.body,
        // icon: 'img/icons/icon-72x72.png',
        icon: `img/avatars/${ data.usuario }.jpg`,//Imagen que se muestra en el navegador 
        badge: 'img/favicon.ico',//Se usa para los dispositivos android 
        image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/5b/Torre_de_los_Avengers.png/revision/latest?cb=20150626220613&path-prefix=es',//Colocar una imagen grande en el celular 
        vibrate: [125,75,125,275,200,275,125,75,125,275,200,600,200,600],//Permite que vibre el celular 
        openUrl: '/',
        data: {
             url: 'https://google.com',
            //url: '/',
            id: data.usuario
        },
        actions: [//Desplega un mini menu en el push 
            {
                action: 'thor-action',
                title: 'Thor',
                icon: 'img/avatar/thor.jpg'
            },
            {
                action: 'ironman-action',
                title: 'Ironman',
                icon: 'img/avatar/ironman.jpg'
            }
        ]
    };

    //Necesito esperar que la notifiacación haga todo lo que tiene  que hacer 
    e.waitUntil( self.registration.showNotification( title, options) );

});
```

## Clase 127 - 128: Mas opciones del noficaciones y redireccionamientos acciones del notificaciones 
**Nota**
- Podemos validar el archivo SW.js para validar este evento [ejemplo](Proyectos\11-twittor-con-push\public\sw.js)

```
self.addEventListener('notificationclick', e => {

    //La notificación y la acción viene en event 
    const notificacion = e.notification;
    const accion = e.action;

    console.log({ notificacion, accion });


    //Permite aceder a las  notificaciones de los clientes 
    const respuesta = clients.matchAll()
    .then( clientes => {

        let cliente = clientes.find( c => {
            return c.visibilityState === 'visible';//Valido si hay un Cliente visible 
        });


        if ( cliente !== undefined ) {
            cliente.navigate( notificacion.data.url );
            cliente.focus();//Habilita este tag para que este activo en el navegador 
        } else {//Esto en caso que el navegador este cerrado 
            clients.openWindow( notificacion.data.url );
        }

        return notificacion.close();//Forma de cerrar notficaciones 

    });

    //Valido hasta que podamos resolver todas las acciones 
    e.waitUntil( respuesta );
});

```

> Resumen: 
- No me funciono en Chrome ando indagando poque demonios
- Si me funciono en FireFox pero las opciones extras del la notificación no me funciono 
- Me quedo con el aprendizaje es otra ciencia es decir no es algo que se hace un dos por tres al menos una semana para hacer unas buena notificaciones 
- Podemos usar notificaciones para sistemas en caso que se detecte acciones como un nuevo registro, edición o eliminación del mismo. 
- Esta perro esto ya que si la pestaña principal esta cerrada el SW seguira dando vueltitas y te avisará de lo que desees .