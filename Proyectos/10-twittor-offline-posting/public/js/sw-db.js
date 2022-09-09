//Logica necesaria para usar indexeDB 
// Debemos buscar la libreria https://pouchdb.com/download.html  -> PunchDB
 
const db = new PouchDB('mensaje');

//Utilidades para grabar PunchDB 
// Si se ejecuta esta función tenemos un posteo offLine 
function guardarMensaje(mensaje){

    mensaje._id = new Date().toISOString();
    return db.put(mensaje).then(()=>{

        //Le indicamos al SW que tiene tareas  que hacer apenas tengas internet 
        self.registration.sync.register('nuevo-post');
        //Se crea una respuesta ficticia ya que estamos en OffLine
        const newReponse = {ok:true, offline:true}
        //Así podemos crear y retornar una repuesta falsa ya que estamos en Offline 
        return new Response(JSON.stringify(newReponse));
    });

}