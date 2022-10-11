class Camara{

    constructor(videoNode){
        this.videoNode = videoNode;
    }


    encender(){
        navigator.mediaDevices.getUserMedia({
            audio:false,
            video:{width:300, height:300}
        }).then(stream=>{
            this.videoNode.srcObject = stream;
            this.stream = stream;
        });

    }

    apagar(){
        this.videoNode.pause();
        if (this.stream){
            this.stream.getTracks()[0].stop();
        }


    }

    tomarfoto(){
      //Canvas : Es un lienzo donde podemos colocar informacion   
      //Crear un elemento canvas para renderizar ahi la foto 
        let  canvas = document.createElement('canvas');
        
       // Colocar las dimensiones igual al del video 
        canvas.setAttribute('width', 300);
        canvas.setAttribute('height', 300);

        //obtener el contexto del canvas 
        let context = canvas.getContext('2d');
        //Dibujar o rendereizar 
        context.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height);

        //Extraer imagen 
        this.foto = context.canvas.toDataURL();
        //limpieza 
        canvas = null;
        context = null; 

        return this.foto;
        

    }
}

