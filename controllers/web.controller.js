const Anuncio = require("../models/web.model");

const getIndex = async (req, res) => {
    let anuncios = await Anuncio.find({}, '-id, -__v');
    console.log(anuncios[0]);
    res.status(200).render("../views/headerAdmin.pug", anuncios[0]);
}   

const getSignUp = async (req, res) => {
    res.status(200).send("Vista de registro de usuario");
}

const getLogin = async (req, res) => {
    res.status(200).send("Vista de ingreso de usuario ya registrado");
}

const getFavorites = async (req, res) => {
    res.status(200).send("Vista del usuario con sus favoritos");
}

const getProfile = async (req, res) => {
    res.status(200).send("Vista del usuario o el administrador con sus datos de perfil");
}

const getUsers = async (req, res) => {
    res.status(200).send("Vista del administrador con el listado de usuario registrados (admin)");
}

const getDashboard = async (req, res) => {
    res.status(200).send("Vista del administrador para crear y visualizar sus anuncios (admin)");
}

module.exports = {
    getIndex,
    getSignUp,
    getLogin,
    getFavorites,
    getProfile,
    getUsers,
    getDashboard
}