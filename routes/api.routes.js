/***** RUTAS API *******/
const userApiRoutes = require("./routes/userApi.routes");
const loginApiRoutes = require("./routes/loginApi.routes");
const logoutApiRoutes = require("./routes/logoutApi.routes");
const searchApiRoutes = require("./routes/searchApi.routes");
const adsApiRoutes = require("./routes/adsApi.routes");
const favoritesApiRoutes = require("./routes/favoritesApi.routes");
const recoverPasswordRoutes = require("./routes/recoverApi.routes");
const restorePasswordRoutes = require("./routes/restoreApi.routes");

//API - Prefijos de las rutas

app.use('/api/user', userApiRoutes); //POST, PUT y DELETE
app.use('/api/login', loginApiRoutes); //POST
app.use('api/logout', logoutApiRoutes); //POST
app.use('api/search', searchApiRoutes); //GET
app.use('/api/ads', adsApiRoutes); //POST, PUT y DELETE
app.use('/api/favorites', favoritesApiRoutes); //POST y DELETE
app.use('/recoverpassword', recoverPasswordRoutes); //GET
app.use('/restorepassword', restorePasswordRoutes); //GET

//POST http://localhost:3000/user
app.post("/user", (req, res) => {
    console.log(req.body);
    const user = req.body;
    //Codigo para guardar la BBDD
    //INSERT INTO USERS...

    res.status(201).json({
      success: true,
      name: user.name,
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      data: req.body
    });
  });

  //PUT http://localhost:3000/user
app.put("/user", (req, res) => {
    const name = req.params.name;
    res.status(201).send("Se ha editado el usuario " + name);
  });

  //DELETE http://localhost:3000/user
app.delete("/user/:name?", (req, res) => {
    const name = req.params.name;
    if (name) {
      res.status(200).send("Se ha eliminado un usuario: " + name);
    }
    else {
      res.status(200).send("Se han borrado todos los usuarios");
    }
  });