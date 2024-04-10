const router = require('express').Router();
//const webController = require('../controllers/web.controller');

// WEB
// http://localhost:3000/
router.get("/", (req, res) => {
    res.status(200).send("Vista de inicio de la app");
});
// http://localhost:3000/signup
router.get("/signup", (req, res) => {
    res.status(200).send("Vista de registro de usuario");
});
// http://localhost:3000/login
router.get("/login", (req, res) => {
    res.status(200).send("Vista de ingreso de usuario ya registrado");
    // Aquí iría el render, controlador o lo que sea
});
// http://localhost:3000/favorites
router.get("/favorites", (req, res) => {
    res.status(200).send("Vista del usuario con sus favoritos");
    // Aquí iría el render, controlador o lo que sea
});
// http://localhost:3000/profile
router.get("/profile", (req, res) => {
    res.status(200).send("Vista del usuario o el administrador con sus datos de perfil");
    // Aquí iría el render, controlador o lo que sea
});
// http://localhost:3000/users
router.get("/users", (req, res) => {
    res.status(200).send("Vista del administrador con el listado de usuario registrados (admin)");
    // Aquí iría el render, controlador o lo que sea
});
// http://localhost:3000/dashboard
router.get("/dashboard", (req, res) => {
    res.status(200).send("Vista del administrador para crear y visualizar sus anuncios (admin)");
    // Aquí iría el render, controlador o lo que sea
});


module.exports = router;