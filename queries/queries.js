//CREO QUE ESTE ARCHIVO NO ES NECESARIO PORQUE NO SE LE LLAMA

const queries = {
    getAllFavoritos: `SELECT * FROM favoritos;`,
    getAllUsuarios: `SELECT * FROM usuarios`,
    getUsuariosEmail: `SELECT * FROM usuarios WHERE email=$1`,
    insertarUsuario: `INSERT INTO usuarios (isAdmin, username, nombre, apellidos, password, email)
    VALUES ($1,$2,$3,$4,$5,$6);`,
    actualizarUsuario: `UPDATE usuarios
    SET isadmin=$1, username=$2, nombre=$3, apellidos=$4
    WHERE email = $5;`,
    buscarUsuarioEmail: `SELECT * FROM usuarios WHERE email=$1`,
    borrarFavoritosUsuario: `DELETE FROM favoritos WHERE user_id=(SELECT user_id FROM usuarios WHERE email=$1);`,
    borrarUsuario: `DELETE FROM usuarios WHERE user_id=(SELECT user_id FROM usuarios WHERE email=$1);`,
}

module.exports = queries;