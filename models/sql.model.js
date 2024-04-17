
const pool = require('../config/db_pgsql'); // Conexión a BBDD ElefantSQL

const queries = require("../queries/usuarios.queries");
const queriesFavoritos = require("../queries/favoritos.queries");

/* {
  "isAdmin": "false",
  "username": "Cervantes",
  "nombre": "Miguel",
  "apellidos": "Saavedra",
  "password": "7777777",
  "email":"cervantes@email.com"
} */

//POST USER
const createUser = async (user) => {
  const { isAdmin, username, nombre, apellidos, password, email } = user;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.insertarUsuario, [
      isAdmin,
      username,
      nombre,
      apellidos,
      password,
      email
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

/* {
  "isAdmin": "false",
  "username": "Diega",
  "nombre": "Manuela",
  "apellidos": "Pereza"
} */

//PUT USER
const editUserApi = async (user) => {
  const { isAdmin, username, nombre, apellidos, email } = user;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.actualizarUsuario, [
      isAdmin,
      username,
      nombre,
      apellidos,
      email
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//PARA BUSCAR SI EXISTE UN USUARIO ANTES DE BORRARLO
const getUserByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.buscarUsuarioEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//DELETE USER
const deleteUserApi = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.borrarUsuario, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//DELETE FAVOURITE USER
const deleteFavouriteApi = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.borrarFavoritosUsuario, [email]);
    result = data.rows;
  } catch (err) {
      console.log(err);
    throw err;
  } finally {
      client.release();
  }
  return result;
};

/* {
  "user_id": "cervantes@email.com",
  "title": "Diseñaré un sitio web creativo y único",
  "anuncio_id": 2,
  "path": "https://es.fiverr.com/hipinspire/design-creative-and-unique-website?context_referrer=subcategory"
} */

const createFavorite = async (favorite) => {
  const { user_id, title, anuncio_id, path } = favorite;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesFavoritos.insertarFavoritos, [
      user_id,
      title,
      anuncio_id,
      path
    ]);
    result = data.rowCount;
  } catch (err) {
      console.log(err);
    throw err;
  } finally {
      client.release();
  }
  return result;
};

const apiModels = {
  createUser,
  createFavorite,
  editUserApi,
  getUserByEmail,
  deleteUserApi,
  deleteFavouriteApi
}

module.exports = apiModels;