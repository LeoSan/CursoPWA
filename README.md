# CursoPWA "Curso para el manejo de aplicaciones web progresivas"

**Profesor** 

![Master](./info/Master.png)

**Enlaces:**

- https://www.udemy.com/course/aplicaciones-web-progresivas/


## Sección 1: Fundamentos que debes tener ya instalados 


Visual Studio Code Extensiones
Estas son las extensiones que estoy usando en Visual Studio Code. 

Importer.
• Angular 6 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout
• Angular Language Service
• angular2-inline
• Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets
• HTML CSS Support
• Ionic 3 snippets
• JavaScript (ES6) code snippets
• jshint
• JSON to TS
• Material Icon Theme
• mysql-inline-decorator
• Prettier - Code formatter
• PWA Tools
• Terminal
• TSLint
• TypeScript Importer


## Sección 2: Fundamentos de las aplicaciones web progresivas

**¿Qué son las aplicaciones web progresivas?**

> Son:
- Son Mobile Firts
- Es pensando para celulares 
- Es un aplicacion web, que puede ser una pagina web 
- Funciona sin conexion web 
- Usa aplicaciones nativas del dispositivo 
- Es confiable  - Esta actualizada - Carga muy rapido. 
- No se le pregunta al usuario si se desea actulizar o no. 
- Ejemplo la PWA de twiter pesa menos que la APP nativa 


>No es: 
- No es una extension de navegadores web 
- No es un Framework como React, Vue, angular
- No es un pluging o libreria para los frameworks
- No es parecido a React Native, Native script, ionic 
- No es responsive 
- No es una aplicación nativa 

**¿Por qué construir una PWA??**

**Razones:**
- Muchos usuarios usan su celular mobil para validar o revisar su navegador web del celular para ver tu sitio web 
- La tendencias es que las personas estan usando mucho el navegador web del celular 
- El usuario promedio instala 0 aplicaciones nativas por mes. 
- El usuario promedio primero busca en el navegador web antes de descrgar una app nativa 
- Las PWA tiene la ventaja de correr sin conexión 
- las PWA tienen el poder de (Push Server, Manifest, IndexedBD, Service Worker)

**¿Conceptos Clave de las PWA??**

**Service Worker**
- Es un pequeño proxy que esta entre nuestra pagina web y el WWW
- Es un arhivo JS plano 
- Cuando nuestra pagina realiza una petición a la WWW pasa por nustro archivo JS (Service Worker) y decide lo que podemos realizar con conexión o sin conexion 
- Debe estar siempre bajo un protocolo HTTPS
- Forma Operacional -> si nos conectamos a la web pasa por el **service worker**  esta valida si existe el elemento en su localstorage si existe la muestra en la web si no se conecta a la web la baja la guarda en local y la muestra. 
- El service worker inicia con el `navigator.serviceWirker.register(/sw.js)`
- El **SW** Corre en hilos independientes si cierras tu pagina que estas consultando este no se termina sigue escuchando para estar listo de nuevo para tu web 
- Ciclo de Vida, Instalando -> Instalado -> Activación -> activado -> Ocioso 
![SW](./info/ciclo_sw.png)

- Paso Instalando: Se descarga el archivo JS, el JS es parseado o revisado paso al siguiente paso 
- Paso Instalado: Se conoce como waiting, Se movera el siguiente paso si no existe algun SW ejecutandose en caso que exista otro SW ejecutandose el solo esperará que todos los tab esten cerrados para ejecutarse
- Paso Activación: susede antes que el SW  tome el control de nuestra aplicación, aqui podemos hacer alguna limpieza en caso que se necesite.
- Paso activado: Cuando esta activo aqui el SW tiene control absoluto de nuestra aplicación we, control total de lo que deseamos hacer. 
- Paso Ocioso: esto es cuando falla la instalación ó es reemplazado por otro SW, ya no hay control de la aplicación, solo esta esperando para ser destruido. 

## Sección 3: Reforzamiento Promesas, Fetch API y HttpServer

**Puntos**
- Promesas
- Promesas en cadena
- Promise.all
- Promise.race
- Fetch API
- Gets
- Posts
- Fetch de Blobs
- http-server

