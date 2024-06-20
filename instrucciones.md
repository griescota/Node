## Instrucciones proyecto
1. Instalar MongoDB --> https://www.mongodb.com/try/download/community
2. Una vez instalado Mongo, instalar librerias de node: 

```sh
npm -i mongoose express body-parser
```

> Informacion relevante sobre las librerias:

mongoose:
            Es una libreria que actua como cliente de una base de datos, en el fichero backend, se observa como se despliega. A su vez al registrar un usuario, se crea una base de datos que guarda la informacion introducida.

express:
            Servidor REST API con el que interactua el front de ANGULAR. La comunicacion se establece mediante peticiones HTTP POST.

body-parser:
            Libreria que se encarga de trabajar con JSON de manera fácil y óptima


3. Se ha editado ficheros como:
                                /src
                                    /app
                                        /registro
                                                /registro.component.ts --> Corregida validacion de datos y añadida envio por 
                                                                           POST a base de datos MongoDB. Se ha hecho Standalone dicho componente.
                                                                           Se ha añadido funcionalidad de tras registro pasar el nombre de usuario por query param en la url que redirige siguiente.

                                                /registro.component.html --> Adaptado para la realizacion del formulario    
                                                                             correctamente
                                    
                                /src
                                    /app.config.ts --> Añadida libreria HttpClient para establecer peticiones HTTP por 
                                                       Typescript

                                /src
                                    /app.module.ts --> Añadida libreria de FormsModule para el formulario de registro


                                /src
                                    /app
                                        /seleccion-ejercicios
                                            /seleccion-ejercicios.ts --> Se realiza una recuperacion de la informacion, 
                                                                         se procede a efectuar una solicitud de la informacion relacionada con el usuario y muestra por console.log la informacion proveniente de la base de datos.


4. Para ejecutar el server de node, situate en la ruta /src/app/backend y ejecutar:

```sh
node .\server.js
```

5. Cualquier duda me dices, ánimo :D

> PostData: 
    No soy FrontDeveloper, soy puro full stack. He hecho lo que se llama codigo spaghetti y angular no lo he tocado nada ya que *node* tengo algo de conocimientos porque lo usé en mi *TFG* con pug (puro html y javaScript :D)