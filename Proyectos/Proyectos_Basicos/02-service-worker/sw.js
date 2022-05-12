 console.log("SW: hola mundo");


 //Ya se sabe que el self apunta al this 

 self.addEventListener('fetch', event=>{
    
    //Manera de interceptar Css 
    if ( event.request.url.includes('style.css') ){
        interceptarCSS(event); 
    }

    //Manera de interceptar Imagen 
    if ( event.request.url.includes('main.jpg') ){
        
        voltearImagen(event); 
    }

    
    //console.log(event);
}); 

const interceptarCSS = (evento)=>{

            let respuesta = new Response(`
                body{
                    background-color:red !important;
                    color: blue;
                }
            
            `, {
                headers:{
                    'Content-type':'text/css'
                }
            });
            evento.respondWith(respuesta);

}

const voltearImagen = (evento)=>{
  //Forma de validar tus feth // Traer bring //llevar 
    evento.respondWith( 
        fetch('img/main-patas-arribasss.jpg')
        .then(resp=>{
            console.log("Resultado->",resp);
            if (resp.ok){
                return resp;
            }else{
                return fetch('img/main.jpg')
            }

        })
        
        );

}