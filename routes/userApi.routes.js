//SIRVE PARA CONFIGURAR EL OBJETO DE RUTAS
const router = require('express').Router();

// ESTAMOS ENLAZANDO/IMPORTANDO EL CONTROLADOR PARA ENCONTRAR LOS METODOS.
//REPRESENTA EL OBJETO CON METODOS QUE MANEJAN LAS PETICIONES
const userApiController = require('../controllers/userApi.controller');

// POST http://localhost:3000/api/user
router.post("/", userApiController.createUserApi);

// PUT http://localhost:3000/api/user
router.put("/", userApiController.editUserApi);

// DELETE http://localhost:3000/api/books/quijote?API_KEY=123abc
router.delete("/:name?", userApiController.deleteUserApi);

//ESTA EXPORTANDO EL PAQUETE DE RUTAS QUE SE HA PREPARADO
module.exports = router;