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