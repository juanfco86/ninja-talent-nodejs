# codechallenge-NodeJS

**CODE CHALLENGE**

Requeremientos para la prueba:
- Desarrollar un backend (RESTful) en Node.js de usuarios usando el swagger disponible en la siguiente url:
https://s3-eu-west-1.amazonaws.com/mmi-codechallenge/swagger-users-v1.json
- Usar la versión Node.js LTS.
- El API permitirá dar de alta, modificar, eliminar y consultar usuarios.
- El API tiene que cumplir los recursos definidos en el Swagger adjunto en el correo. 1 PUNTO


Por otro lado se valorará:
- Realización de pruebas unitarias. 
- Patrones y estilo de desarrollo de back. Buenas prácticas, limpieza del código.


**ENTREGA**

El tiempo de desarrollo es de una semana pero mucho mejor si nos lo puedes
enviar antes.

Se debe entregar:

- Url con la aplicación desplegada.
- Código fuente.
- Postman de prueba.

**RECUERDA**

- La evaluación la realizarán nuestros ninja masters, gente con mucha experiencia.
- Según tu calificación, recibirás un diploma de ninja



#
#


# Challenge Ninja Talent Nodejs

API que permite dar de alta, modificar, eliminar y consultar usuarios, siguiendo las especificaciones del archivo JSON Swagger.

## Tecnologías Utilizadas

- Node.js
- Nodemon (dependencia de desarrollo)
- Dotenv
- Express
- Mongoose
- Swagger-jsdoc
- Swagger-ui-express
- Body-parser

## Instrucciones de Instalación

1. Clonar este repositorio: git clone https://github.com/juanfco86/ninja-talent-nodejs
2. Instalar las dependencias: npm install
3. Ejecutar el servidor: node index.js o npm start (para nodemon)

## Endpoints API

La API tiene los siguientes endpoints disponibles:
- /users/createUsers: Crea un nuevo usuario.
- /users/getusers: Obtiene todos los usuarios.
- /users/getusersById/{id usuario}: Obtiene un usuario por su ID.
- /users/updateUsersById/{id usuario}: Actualiza un usuario por su ID.
- /users/deleteUsersById/{id usuario}: Elimina un usuario por su ID.
- /api-docs

## Autor

Juan Francisco Solano Pérez




