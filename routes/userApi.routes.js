//SIRVE PARA CONFIGURAR EL OBJETO DE RUTAS
const router = require('express').Router();

// ESTAMOS ENLAZANDO/IMPORTANDO EL CONTROLADOR PARA ENCONTRAR LOS METODOS.
//REPRESENTA EL OBJETO CON METODOS QUE MANEJAN LAS PETICIONES
const userApiController = require('../controllers/userApi.controller');

// POST http://localhost:3000/api/user
router.post("/", userApiController.createUserApi);

// PUT http://localhost:3000/api/user
router.put("/", userApiController.editUserApi);

// DELETE http://localhost:3000/user
router.delete("/:name?", userApiController.deleteUserApi);

//POST http://localhost:3000/login
router.post("/", userApiController.loginUserApi);

//POST http://localhost:3000/logout
router.post("/", userApiController.logoutUserApi);

//GET http://localhost:3000/search
router.post("/", userApiController.searchUserApi);

//POST http://localhost:3000/ads
router.post("/", userApiController.createAdsUserApi);

//PUT http://localhost:3000/ads
router.put("/", userApiController.editAdsUserApi);

//GET http://localhost:3000/recoverpassword
router.post("/", userApiController.recoverPasswordUserApi);

//GET http://localhost:3000/recoverpassword
router.post("/", userApiController.restorepasswordUserApi);

//ESTA EXPORTANDO EL PAQUETE DE RUTAS QUE SE HA PREPARADO
module.exports = router;