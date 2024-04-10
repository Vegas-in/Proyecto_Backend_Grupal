require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//Inicializamos server
const app = express();
const port = 3000;


console.log(process.env.claveUltrasecreta);





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});