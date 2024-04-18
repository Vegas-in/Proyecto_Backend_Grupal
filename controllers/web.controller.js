const Anuncio = require("../models/mongo.model");

const getIndex = async (req, res) => {
  res.status(200).render("../views/index.pug");
};

const getSignUp = async (req, res) => {
  res.status(200).render("../views/signup.pug");
};

const getLogin = async (req, res) => {
  res.status(200).render("../views/login.pug");
};

const getFavorites = async (req, res) => {
  res.status(200).render("../views/favorites.pug");
};

const getProfile = async (req, res) => {
  res.status(200).render("../views/profile.pug");
};

const getUsers = async (req, res) => {
  res.status(200).render("../views/usuarios-view.pug");
};

const getDashboard = async (req, res) => {
  res.status(200).render("../views/dashboard.pug");
};

module.exports = {
  getIndex,
  getSignUp,
  getLogin,
  getFavorites,
  getProfile,
  getUsers,
  getDashboard,
};
