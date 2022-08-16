function actualizaCacheDinamico(dinamic_cache, request, response){

    if (response.ok){
        return caches.open(dinamic_cache).then(cache=>{
            cache.put(request, response.clone());
            return response.clone();
        }).catch(err=>{
            imprimeError(err, "Linea 8, sw-utils.js");
        });
    }else{
        //Fallo el cache y fallo la red 
        imprimeError("vacio", "Linea 12, sw-utils.js");
        return request;
    }
}

function imprimeError(err, dondeEstoy){
    const falla ={
        MsjDondeEstoy:dondeEstoy,
        MsjHumano:'Nota-> Los eventos de WS siempre se rompen por ubicar mal los recursos checa tus variables cache donde define los recursos.',
        MsjMaquina:"Error->"+err,
        
    };
    console.table(falla);
}
