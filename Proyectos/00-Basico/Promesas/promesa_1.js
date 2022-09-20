//Callback Hell 
//Un maximo comun de callback son 3 si son mas de 3 pasamos a usar callback hell y nos es recomendado 

const sumar =( num, callBack)=>{
   
    setTimeout(() => {
        callBack (num + 1 ) 
    }, 800);
    
}

sumar(9, (nuevoValor)=>{
    console.log(nuevoValor);

});