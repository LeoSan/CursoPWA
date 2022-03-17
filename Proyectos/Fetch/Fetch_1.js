//Solicitud Vieja 

var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function(state){
    console.log(request);

    if (request.readyState === 4){
        let resp = request.response;
        let obj  = JSON.parse(resp);
        console.log(obj);

    }
}


//

console.log("hola mundo tres ");