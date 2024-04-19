-- Crear tabla usuarios
CREATE TABLE usuarios (
    user_id serial NOT NULL PRIMARY KEY UNIQUE,
    isAdmin boolean DEFAULT false,
    username varchar(45),
    nombre varchar(45) NOT NULL,
    apellidos varchar(255),
    password varchar(45),
    email varchar(45) NOT NULL UNIQUE
);

-- Crear tabla favoritos
CREATE TABLE favoritos (
    favoritos_id serial NOT NULL PRIMARY KEY UNIQUE,
    user_id int,
    title varchar(100) NOT NULL UNIQUE,
    anuncio_id int,
    path varchar(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES usuarios(user_id)
);

-- Insertar datos en tabla usuarios
INSERT INTO usuarios (isAdmin, username, nombre, apellidos, password, email)
VALUES
('false','yo','pepito','gomez moreno','12345','pepito@correo.com')
('false','tu','manolito','sanchez perez','23456','manolito@correo.com');

-- Insertar datos en tabla favoritos
INSERT INTO favoritos (user_id, title, anuncio_id, path) --BORRAR TITLE Y ANUNCIO
VALUES
((SELECT user_id FROM usuarios WHERE email='pepito@correo.com'),'Diseñaré un sitio web creativo y único','2','https://es.fiverr.com/hipinspire/design-creative-and-unique-website?context_referrer=subcategory');

-- Actualizar datos en tabla usuarios
UPDATE usuarios
    SET
        isadmin='false', 
        username='brujo', 
        nombre='pepe', 
        apellidos='gomez gomez'
    WHERE email = 'pepito@correo.com';

-- Buscar datos en tabla usuarios con email dado
SELECT * FROM usuarios WHERE email='pepito@correo.com'

-- borrar usuario aunque tenga favoritos
DELETE FROM favoritos WHERE user_id=(SELECT user_id FROM usuarios WHERE email='pepito@correo.com');
DELETE FROM usuarios WHERE user_id=(SELECT user_id FROM usuarios WHERE email='pepito@correo.com');

