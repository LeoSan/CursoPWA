const fs = require('fs');
const vapid = require('./vapid.json');
const urlBase64 = require('urlsafe-base64');
const webpush = require('web-push');

//let suscripciones = [];
let suscripciones = require('./subs-db.json');

//Metodo para geneear la llave publica
const getKey = () =>{
  return urlBase64.decode(vapid.publicKey);
};


//Metodo para generar la suscripcion con el API de notificaciones de CHROME 
const addSubscription = ( suscripcion ) => {
  suscripciones.push( suscripcion );
  console.log(suscripcion);
  //Aqui lo podemos colocar en una base de datos pero como no tenemos usamos un archivo json 
  fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones) );

};

module.exports ={
    getKey,
    addSubscription
};