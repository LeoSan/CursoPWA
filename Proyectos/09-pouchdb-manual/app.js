

// Entrenamiento PouchDB

// 1- Crear la base de datos
// Nombre:  mensajes
var db = new PouchDB('mensajes');
var remoteCouch = false;



// Objeto a grabar en base de datos
let mensaje = {
    _id: new Date().toISOString(),
    user: 'spiderman',
    mensaje: 'Mi tía hizo unos panqueques muy buenos',
    sincronizado: false
};


// 2- Insertar en la base de datos
    //Forma Promesa
    db.put(mensaje)
      .then( console.log('Insertado') )    
      .catch( console.log );
    


// 3- Leer todos los mensajes offline

function redrawTodosUI(todos) {
    var ul = document.getElementById('todo-list');
    ul.innerHTML = '';
    todos.forEach(function(todo) {
      ul.appendChild((todo.doc));
    });
  }

    //Forma de promesa
    db.allDocs({include_docs: true, descending: true})
    .then(doc =>{
        "use strict";
      console.log(doc);
    });


// 4- Cambiar el valor 'sincronizado' de todos los objetos
//  en la BD a TRUE

    //Forma de promesa
    db.allDocs({include_docs: true, descending: true})
    .then(docs =>{
        "use strict";
        docs.rows.forEach(row=>{
            //console.log(row.doc)
            let doc = row.doc;
            doc.sincronizado = true;
            db.put(doc);
        });
    });



// 5- Borrar todos los registros, uno por uno, evaluando
// cuales estan sincronizados
// deberá de comentar todo el código que actualiza
// el campo de la sincronización 

db.allDocs({include_docs: true, descending: true})
.then(docs =>{
    "use strict";
    docs.rows.forEach(row=>{
        let doc = row.doc;
        if (doc.sincronizado){
           // db.remove(doc).then(console.log('Registro Eliminado'));
        }
    });
});




/*
if (doc.sincronizado){
    
}*/
