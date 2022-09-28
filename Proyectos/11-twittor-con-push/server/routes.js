// Routes.js - Módulo de rutas
const express = require('express');
const pushs = require('./pushs');
var router = express.Router();


const mensajes = [

  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});

// Almacenar subcrición
router.post('/subscribe',  (req, res) => {
  const suscripcion = req.body;
  pushs.addSubscription( suscripcion );
  res.json('subscribe');
});

// Almacenar key
router.get('/key',  (req, res) => {
  const key = pushs.getKey();
  res.send(key);
});


// Enviar notificación PUSH a las personas 
//Esto es algo que se controla desde el lado server  
router.get('/push',  (req, res) => {
  res.json('key publico');

});

module.exports = router;