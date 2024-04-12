const router = require('express').Router();

// ESTAMOS ENLAZANDO/IMPORTANDO EL CONTROLADOR PARA ENCONTRAR LOS METODOS.
//REPRESENTA EL OBJETO CON METODOS QUE MANEJAN LAS PETICIONES
const apiController = require('../controllers/api.controller');

// POST http://localhost:3000/api/user
router.post("/", apiController.createUserApi);

// PUT http://localhost:3000/api/user
router.put("/", apiController.editUserApi);

// DELETE http://localhost:3000/user
router.delete("/:name?", apiController.deleteUserApi);

//POST http://localhost:3000/login
router.post("/", apiController.loginUserApi);

//POST http://localhost:3000/logout
router.post("/", apiController.logoutUserApi);

//GET http://localhost:3000/search
router.post("/", apiController.searchUserApi);

//POST http://localhost:3000/ads
router.post("/", apiController.createAdsUserApi);

//PUT http://localhost:3000/ads
router.put("/", apiController.editAdsUserApi);

//DELETE http://localhost:3000/ads
router.delete("/", apiController.deleteAdsUserApi);

// POST http://localhost:3000/api/favourite
router.post("/", apiController.createFavoriteUserApi);

// POST http://localhost:3000/api/favourite
router.delete("/", apiController.deleteFavoriteUserApi);

//GET http://localhost:3000/recoverpassword
router.get("/", apiController.recoverPasswordUserApi);

//GET http://localhost:3000/recoverpassword
router.get("/", apiController.restorepasswordUserApi);

//ESTA EXPORTANDO EL PAQUETE DE RUTAS QUE SE HA PREPARADO
module.exports = router;
