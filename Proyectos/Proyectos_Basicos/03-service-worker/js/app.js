

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('./sw03.js')
    .then(reg=>{
        //Registro de una tarea asyncrona cuando no hay internet 
        setTimeout(() => {
            reg.sync.register('posteo-gatitos');
            console.log('Se envio fotos');
        }, 3000);
    });
}

/*if ( window.SyncManager ){


}
*/

fetch('http://127.0.0.1:5500/Proyectos/Proyectos_Basicos/03-service-worker/index.html')
.then(resp=> resp.text())
.then(console.log);