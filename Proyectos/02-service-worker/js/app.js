//Como validar si podemos usar service worker
if(navigator.serviceWorker){
    console.log("Podemos usar SW");
    navigator.serviceWorker.register('./sw.js');

}