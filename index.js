require("dotenv").config();
const express = require("express");
/* const jwt = require("jsonwebtoken");
const passport = require("passport"); */

//Inicializamos server
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Envío de formularios
app.use(express.static('public'));

// Middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");
app.use(express.json()); // Habilito recepción de JSON en servidor

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Ficheros de rutas
const webRoutes = require("./routes/web.routes");
const apiRoutes = require("./routes/api.routes");

// Rutas
app.use('/', webRoutes);
app.use('/api/', apiRoutes);

// Configuración de PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

//app.use(error404);
app.use("*", error404); // Middleware que gestiona el error 404

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

