const router = require('express').Router();
// ESTAMOS ENLAZANDO/IMPORTANDO EL CONTROLADOR PARA ENCONTRAR LOS METODOS.
// REPRESENTA EL OBJETO CON METODOS QUE MANEJAN LAS PETICIONES
const apiController = require('../controllers/api.controller');
const passport = require("passport");
require("../middlewares/auth");

// http://localhost:3000/api/user/
router.post("/user/", apiController.createUser);
router.put("/user/:email", apiController.updateUser);
router.delete("/user/:email", apiController.deleteUser);

// http://localhost:3000/api/login/
// http://localhost:3000/api/logout/
router.get("/login", passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" }));

router.get('/auth/failure', apiController.failure)
router.get("/logout/", apiController.logout);

// http://localhost:3000/api/search/
router.get("/search", apiController.getSearch);

// http://localhost:3000/api/ads/
router.post("/ads/", apiController.createOffer);
router.put("/ads/:name", apiController.updateOffer);
router.delete("/ads/:name", apiController.deleteOffer);

// http://localhost:3000/api/favorite/
router.post("/favorite/", apiController.createFavorite);
router.delete("/favorite/:email", apiController.deleteFavorite);

// http://localhost:3000/api/recoverpassword/
router.get("/recoverpassword/", apiController.recoverPassword);

// http://localhost:3000/api/restorepassword/
router.get("/restorepassword/", apiController.restorepassword);

//ESTA EXPORTANDO EL PAQUETE DE RUTAS QUE SE HA PREPARADO
module.exports = router;