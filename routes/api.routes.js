/***** RUTAS API *******/
const userApiRoutes = require("./routes/userApi.routes");
const offerApiRoutes = require("./routes/offerApi.routes");
/* const loginApiRoutes = require("./routes/userApi.routes");
const logoutApiRoutes = require("./routes/userApi.routes");
const searchApiRoutes = require("./routes/offerApi.routes");
const adsApiRoutes = require("./routes/offerApi.routes");
const favoritesApiRoutes = require("./routes/userApi.routes");
const recoverPasswordRoutes = require("./routes/userApi.routes");
const restorePasswordRoutes = require("./routes/userApi.routes"); */

//API - Prefijos de las rutas

app.use('/api/user', userApiRoutes); //POST, PUT y DELETE
app.use('/api/login', userApiRoutes); //POST
app.use('/api/logout', userApiRoutes); //POST
app.use('/api/search', offerApiRoutes); //GET
app.use('/api/ads', offerApiRoutes); //POST, PUT y DELETE
app.use('/api/favorites', userApiRoutes); //POST y DELETE
app.use('/api/recoverpassword', userApiRoutes); //GET
app.use('/api/restorepassword', userApiRoutes); //GET

//POST http://localhost:3000/user
app.post("/user", (req, res) => {
  const name = req.params.name;
  res.status(201).send("Registrarse en la aplicación");
});

//PUT http://localhost:3000/user
app.put("/user", (req, res) => {
  const name = req.params.name;
  res.status(201).send("Editar datos del perfil del usuario o administrador");
});

//DELETE http://localhost:3000/user
app.delete("/user/:name?", (req, res) => {
  res.status(200).send("Borrar un usuario de la base de datos (admin)");
});

//POST http://localhost:3000/login
app.post("/login", (req, res) => {
  res.status(200).send("Login usuario de la API");
});

//POST http://localhost:3000/logout
app.post("/logout", (req, res) => {
  res.status(200).send("Logout usuario de la API");
//Boton que borrará el token y redirect a ruta principal / de Endpoint Web
});

//GET http://localhost:3000/search
app.get("/search", (req, res) => {
  res.status(200).send("Listado de resultados de la búsqueda");
});

//POST http://localhost:3000/ads
app.post("/ads", (req, res) => {
  const name = req.params.name;
  res.status(201).send("Crear nueva oferta de trabajo/subvención/evento (admin)");
});

//PUT http://localhost:3000/ads
app.put("/ads", (req, res) => {
  const name = req.params.name;
  res.status(201).send("Editar datos de una oferta de trabajo/subvención/evento (admin)");
});

//DELETE http://localhost:3000/ads
app.delete("/ads/:name?", (req, res) => {
  res.status(200).send("Borrar una oferta de trabajo/subvención/evento de la base de datos (admin)");
});

//POST http://localhost:3000/favorite
app.post("/ads", (req, res) => {
  const name = req.params.name;
  res.status(201).send("Guardar favorito del usuario");
});

//DELETE http://localhost:3000/favorite
app.delete("/favorite/:name?", (req, res) => {
  res.status(200).send("Borrar favorito del usuario");
});

//GET http://localhost:3000/recoverpassword
app.get("/recoverpassword", (req, res) => {
  res.status(200).send("Recuperar password");
});

//GET http://localhost:3000/restorepassword
app.get("/restorepassword", (req, res) => {
  res.status(200).send("Cambiar password");
})
