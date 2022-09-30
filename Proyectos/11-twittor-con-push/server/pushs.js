const fs = require('fs');
const vapid = require('./vapid.json');
const urlBase64 = require('urlsafe-base64');
const webpush = require('web-push');

webpush.setVapidDetails(
  'mailto:cuenca623@gmail.com',
  vapid.publicKey,
  vapid.privateKey
);


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


//Enviamos un mensaje a todas las suscripciones 
const sendPush = ( post ) => {

  console.log('Mandando PUSHES');
  const notificacionesEnviadas = [];


  //Lista de suscripcion
  suscripciones.forEach( (suscripcion, i) => {

    //Forma de enviar notificaciones 
      const pushProm = webpush.sendNotification( suscripcion , JSON.stringify( post ) )
          .then( console.log( 'Notificacion enviada ') )
          .catch( err => {

              console.log('Notificación falló', err.statusCode);

              if ( err.statusCode === 410 ) { // GONE, ya no existe
                  suscripciones[i].borrar = true;//Solo lo marca para borrar
              }

          });

      notificacionesEnviadas.push( pushProm );

  });


  //Aqui borro las que tenga la bandera de borrar 
  Promise.all( notificacionesEnviadas ).then( () => {

      suscripciones = suscripciones.filter( subs => !subs.borrar );//Quedan las que no estan borradas, forma de borrar usando filter

      fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones) );

  });

};

module.exports ={
    getKey,
    addSubscription,
    sendPush
};