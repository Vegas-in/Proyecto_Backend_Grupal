const Anuncio = require("../models/web.model");

const getIndex = async (req, res) => {
    let anuncios = await Anuncio.find({}, '-id, -__v');
    console.log(anuncios[0]);
    res.status(200).render("../views/headerAdmin.pug", anuncios[0]);
}   

const getSignUp = async (req, res) => {
    res.status(200).send("../views/signUp.pug");
}

const getLogin = async (req, res) => {
    res.status(200).send("../views/login.pug");
}

const getFavorites = async (req, res) => {
    res.status(200).send("../views/favorites.pug");
}

const getProfile = async (req, res) => {
    res.status(200).send("../views/profile.pug");
}

const getUsers = async (req, res) => {
    res.status(200).send("../views/listUsers.pug");
}

const getDashboard = async (req, res) => {
    res.status(200).send("../views/jobsOffers.pug");
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