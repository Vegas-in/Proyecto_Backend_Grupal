# Proyecto_Backend_Grupal

# Proyecto de Aplicación Web de Búsqueda de Ayudas, Subvenciones y Becas

Este proyecto consiste en el desarrollo de una aplicación web para buscar ayudas, subvenciones, becas y premios que puedan utilizar empresas. Se utilizarán conceptos de Frontend y Backend.

## Roles de Usuario

La aplicación contará con dos roles distintos: Usuario y Administrador. Las funcionalidades variarán dependiendo del tipo de usuario.

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

## Implementación y Tecnologías

La aplicación se desarrollará utilizando una arquitectura de Server Side Rendering con un motor de plantillas Pug. Se utilizará gestión de control de versiones con Git y GitHub desde el principio del proyecto. Se seguirá una metodología ágil tipo SCRUM, aplicando TDD desde el comienzo hasta el final.

## Modelo de Datos

- Usuarios: Almacenamiento en base de datos relacional SQL.
- Búsqueda de ayudas, subvenciones, becas y premios: Scraping de al menos dos webs distintas y BD MongoDB.
- Anuncios: Almacenamiento en base de datos NoSQL con MongoDB.

## Recursos de Terceros

Se permite el uso de cualquier recurso de terceros (librerías, paquetes npm, etc.) además del código propio.

## Control de Acceso

La aplicación estará protegida contra entradas indebidas de usuarios no registrados. Se utilizará JWT para la autenticación y OAuth para el login con proveedores externos.

## Notas adicionales

- La aplicación debe ser mobile-first.
- Se seguirá una metodología ágil tipo SCRUM.
- Se realizarán tests unitarios desde el principio y, a ser posible, tests e2e al final.


