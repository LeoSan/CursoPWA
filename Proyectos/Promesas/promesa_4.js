//Usando metodo Promesa.race  

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

Promise.race([sumarLento(5), sumarRapido(6) ]).then(respuestas =>{
    console.log(respuestas);
}).catch( error =>{
    cpnsole.log(`Error -> ${error}`);
});

//La salida es la primera promesa que se ejecuta 
// si existen promesas que se ejecuta mas rapido a pesar que exista una que falla esta mostrara la las mas rapida 