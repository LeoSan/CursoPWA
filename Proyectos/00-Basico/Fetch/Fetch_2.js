//Solicitud Nueva 

fetch('https://reqres.in/api/users')
	.then(resp=> resp.json())
	.then(respObj  =>{
		console.log(respObj)
		console.log(respObj.data)
	});
	
	

//ejemplo 
/*
fetch('https://wikipedia.org/')
	.then(resp=>{
	//Esto es una promesa tambien
	let html = resp.text().then();
	console.log(html);
});
*/




