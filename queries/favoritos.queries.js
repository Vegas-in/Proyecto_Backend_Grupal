const favoritosQueries = {
    /* -- Crear tabla favoritos */
    tablaFavoritos: `CREATE TABLE favoritos (
        favoritos_id serial NOT NULL PRIMARY KEY UNIQUE,
        user_id int,
        title varchar(100) NOT NULL UNIQUE,
        anuncio_id int,
        path varchar(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES usuarios(user_id));`,

    /* -- Insertar datos en tabla favoritos */
    insertarFavoritos: `INSERT INTO favoritos (user_id, title, anuncio_id, path) 
        VALUES ((SELECT user_id FROM usuarios WHERE email=$1),$2,$3,$4)`,

    /* --borrar favoritos que ya esta en usuarios porque se necesitaba al borrar el usuario*/
    /* borrarFavoritosUsuario: `DELETE FROM favoritos WHERE user_id=(SELECT user_id FROM usuarios WHERE email=$1);`, */
    }

module.exports = favoritosQueries;