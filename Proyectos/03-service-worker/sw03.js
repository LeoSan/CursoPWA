
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

});

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





