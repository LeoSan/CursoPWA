//Siempre poner la ruta completa no asi /sq es asi ./sw.js
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('./sw.js');
}