
//const pool = require("../config/db_pgsql"); ---> cambiar la ruta, no esta creada todavia
//const queries = require("../queries/user.queries");  ---> cambiar la ruta tambien no esta creada todavia

//POST USER
const createUser = async (user) => {
    const { user_id, isAdmin, username, nombre, apellidos, email, password  } = user;
    let client, result;
    try {
      client = await pool.connect();
      const data =  await client.query(queries.createUser, [  //!!!!HAY QUE CAMBIAR EL NOMBRE DE LA QUERY PORQUE NO ESTA HECHA TODAVIA
        user_id,
        isAdmin,
        username,
        nombre,
        apellidos,
        email,
        password
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

//PUT USER
const editUserApi = async (user) => {
    const { user_id, isAdmin, username, nombre, apellidos, email, password  } = user;
    let client, result;
    try {
        client = await pool.connect(); 
        const data =  await client.query(queries.editUser, [ //!!!!HAY QUE CAMBIAR EL NOMBRE DE LA QUERY PORQUE NO ESTA HECHA TODAVIA
          user_id,
          isAdmin,
          username,
          nombre,
          apellidos,
          email,
          password
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
      const data = await client.query(queries.getUserByEmail, [email]); //!!!!HAY QUE CAMBIAR EL NOMBRE DE LA QUERY PORQUE NO ESTA HECHA TODAVIA
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
      const data = await client.query(queries.deleteUser, [email]);//!!!!HAY QUE CAMBIAR EL NOMBRE DE LA QUERY PORQUE NO ESTA HECHA TODAVIA
      result = data.rows;
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
    editUserApi,
    deleteUserApi,
    getUserByEmail
};

module.exports = apiModels;