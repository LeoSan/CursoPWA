
//Iniciamos con método fecth 
self.addEventListener('fetch', event=>{

    //Inicio este valor con alguna respuesta en caso que falle 
    const template = fetch('template/404.html');
    const offlineResp = new Response(template, { headers:{'Content-type':'text/html'}});

    const resp = fetch(event.request)//Si esto falla es porque no hay conexion a internet 
            .catch(()=>{
                 //Si no logro cargar    
                return offlineResp;
            });

    //Nota Siempre debemos regresar una respuesta        
    event.respondWith(resp);

});



