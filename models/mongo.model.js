const mongoose = require('mongoose');
require('../config/dbmongo') // Conexión a BBDD MongoDB

/**	{
		
        "idOferta":1,
		"tituloOferta":"Senior Front-end Developer (freelance)",
		"fechaOferta":"Posted 18 hrs ago ",
        "salarioOferta": 1.500,
		"descripcionOferta":"Smile is the European leader in open source digital services, combining innovation, technology, and a passion for digital transformation. With nearly 2,000 employees across the globe, we deliver hundreds of strategic digital projects annually for some of the biggest names in the industry. Our expertise spans Digital, Business Apps, Embedded & IoT, and Infrastructure. As part of our team, you will have the opportunity to work on cutting-edge projects, leveraging our extensive knowledge and commitment to open source solutions to drive digital innovation.",
		"paisOferta": "España",
		"linkOferta": "https://httpstatusdogs.com/100-continue"
	} */

const objectSchema = {
    idOferta: { 
        type: Number, 
        required: true,
        unique: true
    },
    tituloOferta: { 
        type: String, 
        required: true,
    },
    fechaOferta: { 
        type: String, 
        required: true 
    },
    salarioOferta: { 
        type: Number, 
        required: true 
    },
    descripcionOferta:{
        type: String, 
        required: true
    },
    paisOferta: {
        type: String, 
        required: true
    },
    linkOferta: {
        type: String, 
        required: true
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Anuncio = mongoose.model('Anuncio', productSchema);

module.exports = Anuncio;