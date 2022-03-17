//Usando metodo Promesa.all 

const sumarLento =( num )=>{

    return  new Promise( (resolve, reject)=>{
            setTimeout(() => {
                resolve(num + 1 );  
            }, 800);
   });
}

const sumarRapido =( num)=>{

    return new Promise( (resolve, reject)=>{
            setTimeout(() => {
                resolve(num + 1 );  
            }, 100);
   });
}

//digamos que ambos quereos ejecutar ambas funciones simultaneas 

Promise.all([sumarLento(5), sumarRapido(6), "hola mundo", true ]).then(respuestas =>{
    console.log(respuestas);
}).catch( error =>{
    cpnsole.log(`Error -> ${error}`);
});

//La salida se muestra en el mismo orden como vienen declaradas 
// Si una funcion falla todo falla, si de las nueves promesas que se declaran falla una solo una la salida es error
// Promise no funciona solo con promesas 
// Es super comun es una forma de trabajarlo en el serviceWorked 
