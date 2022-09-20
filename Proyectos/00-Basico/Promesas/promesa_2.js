//Usando metodo Promesa 


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
/*
sumar(9).then( (nuevoNumero)=>{
    return sumar(nuevoNumero);
} ).then( (nuevoNumero)=>{
    return sumar(nuevoNumero);
} ).then( (nuevoNumero)=>{
    console.log(nuevoNumero);
} ); // has esto cuando la promesa termine, no dispara la promesa  
*/
console.log("Aqui promesa manejando error");

sumar(3).then( sumar )
        .then( sumar )
        .then( sumar )        
        .catch(error =>{
         console.log(`Error:>`, error);   
        });
        

        