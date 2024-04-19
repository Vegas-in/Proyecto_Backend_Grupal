# FreeLance Jobs Finder
## _Proyecto de Aplicación Web de Búsqueda de Trabajos Freelance_

Este proyecto consiste en el desarrollo de una aplicación web en el que utilizarán conceptos de API-REST y MVC desde Backend.

Autores:

- Adrián Terciado [@AdrianTerciado](https://github.com/AdrianTerciado)
- Ángel Vegas [@Vegas-in](https://github.com/Vegas-in)
- Rafa Lasso [@RLVM13 ](https://github.com/RLVM13)
- Verónica Parra [@VeroPG](https://github.com/VeroPG)


## Tecnologías:

- HTML5 como plantillas.
- PUG como motor para renderizar las vistas.
- CSS3 con Media Queries para generar vistas responsive.
- Node.js, Express.js
- Oauth (Google) & Json Web Token(JWT).
- NoSql: MongoDB, Mongoose y despliegue en Mongo Atlas.
- Sql: despliegue en Elephant.
- Puppeteer para Web Scraping.
- Middlewares Dev: Morgan y manage404 para seguimiento de logs y gestión de errores.
- Postman para probar rutas y conexiones.
- Trello con metodología Agile Scrum.
- Git y Github.
- Despliegue de la App en Render.
- ✨Magia✨

Puedes ver la aplicación en funcionamiento aquí:
https://proyecto-backend-grupal.onrender.com/

Para ver el proyecto en tu IDE, clona y en terminal escribe el siguiente comando para descargar node modules y las dependencias necesarias:
```sh
npm ci
```
Tendrás que incluir tus credenciales en el archivo .env

## Especificaciones

Este proyecto consiste en el desarrollo de una aplicación web de búsqueda y gestión de ofertas de trabajo freelance. 
Requisitos:

 - Distintos tipos de usuario: usuario normal, usuario registrado y administrador.
 - Almacenamiento de los datos de los usuarios y favoritos en una base de datos relacional (SQL).
- Almacenamiento de los datos de las ofertas en una basde de datos no-relacional (MongoDB)
 - Aplicación de técnicas de web scraping..
 - Desarrollo de una aplicación mobile-first y de tipo Server Side Rendering (SSR)

![Captura de pantalla 2024-04-18 182929](https://github.com/Vegas-in/Proyecto_Backend_Grupal/assets/59848697/447a5c97-f624-4896-ac69-c040bc0a5ce8)
![Captura de pantalla 2024-04-18 182956](https://github.com/Vegas-in/Proyecto_Backend_Grupal/assets/59848697/2aaf29c7-946e-4c76-837e-65470b03eec6)
![Captura de pantalla 2024-04-19 102059](https://github.com/Vegas-in/Proyecto_Backend_Grupal/assets/59848697/69760fdb-4e63-42a9-bf21-f5ed54b76d12)
![Captura de pantalla 2024-04-11 183215](https://github.com/Vegas-in/Proyecto_Backend_Grupal/assets/59848697/3221a2c2-1e5b-49fb-acc0-1f0b6aa36051)
![image (1)](https://github.com/Vegas-in/Proyecto_Backend_Grupal/assets/59848697/5d395293-e766-4c97-a6a9-6f5ab91509ab)


## Endpoints

### Endpoints Web:

- [GET] `/`: Vista de inicio de la app
- [GET] `/signup`: Vista de registro de usuario
- [GET] `/login`: Vista de ingreso de usuario ya registrado
- [GET] `/favorites`: Vista del usuario con sus favoritos
- [GET] `/profile`: Vista del usuario o el administrador con sus datos de perfil
- [GET] `/users`: Vista del administrador con el listado de usuarios registrados (admin)
- [GET] `/dashboard`: Vista del administrador para crear y visualizar sus anuncios (admin)

### Endpoints API:

- [POST] `/api/user`: Registrarse en la aplicación
- [PUT] `/api/user`: Editar datos del perfil del usuario o administrador
- [DELETE] `/api/user`: Borrar un usuario de la base de datos (admin)
- [POST] `/api/login`: Hacer login en la aplicación
- [POST] `/api/logout`: Salir
- [GET] `/api/search`: Listado de resultados de la búsqueda
- [POST] `/api/ads`: Crear nueva oferta de ayuda, subvención, beca o premio (admin)
- [PUT] `/api/ads`: Editar datos de una oferta de ayuda, subvención, beca o premio (admin)
- [DELETE] `/api/ads`: Borrar una oferta de ayuda, subvención, beca o premio de la base de datos (admin)
- [POST] `/api/favorites`: Guardar favorito del usuario
- [DELETE] `/api/favorites`: Borrar favorito del usuario
- [GET] `/recoverpassword`: Recuperar password
- [GET] `/restorepassword`: Cambiar password

### Menú:

No asociado a ningún endpoint concreto, estará presente una vez dentro de la app, pasada la identificación, en todas las vistas excepto el Panel de control.
  *Pendiente de implementar.

### Endpoints para usuario no logueado:

- [GET] `/`: Inicio
- [GET] `/register`: Registrarse
- [GET] `/login`: Ingresar

### Endpoints para usuario logueado:

- [GET] `/`: Inicio
- [GET] `/favorites`: Vista de favoritos
- [GET] `/profile`: Vista de los datos del perfil
- [POST] `/logout`: Salir (redirige a `/`)

### Endpoints para Administrador:

- [GET] `/`: Inicio
- [GET] `/profile`: Vista de los datos del administrador
- [POST] `/logout`: Salir
- [GET] `/users`: Vista de listado de usuarios dados de alta en el sistema
- [GET] `/dashboard`: Vista para dar de alta nuevos anuncios


![Deploy](https://github.com/Vegas-in/Proyecto_Backend_Grupal/assets/59848697/e4de0b38-64c2-42ae-a20d-d06968279e17)

