//SIRVE PARA CONFIGURAR EL OBJETO DE RUTAS
const router = require('express').Router();

// ESTAMOS ENLAZANDO/IMPORTANDO EL CONTROLADOR PARA ENCONTRAR LOS METODOS.
//REPRESENTA EL OBJETO CON METODOS QUE MANEJAN LAS PETICIONES
const offerApiController = require('../controllers/offerApi.controller');

// POST http://localhost:3000/api/favourite
router.post("/", offerApiController.createFavoriteUserApi);

// POST http://localhost:3000/api/favourite
router.delete("/", offerApiController.deleteFavoriteUserApi);




//ESTA EXPORTANDO EL PAQUETE DE RUTAS QUE SE HA PREPARADO
module.exports = router;