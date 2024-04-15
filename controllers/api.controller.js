const Anuncio = require("../models/web.model");

// USER
const createUser = async (req, res) => {
    res.status(200).send("Funciona");
}

const updateUser = async (req, res) => {
    res.status(200).send("Funciona");
}

const deleteUser = async (req, res) => {
    res.status(200).send("Funciona");
}


// LOGIN-LOGOUT
const login = async (req, res) => {
    res.status(200).send("Funciona");
}

const logout = async (req, res) => {
    res.status(200).send("Funciona");
}


// SEARCH 
const search = async (req, res) => {
    res.status(200).send("Funciona");
}


// ADS (admin)
// http://localhost:3000/api/ads/
const createOffer = async (req, res) => {
    
    console.log(req.body);

    try{
        const data = req.body;
        let answer = await new Anuncio(data).save();
        res.status(201).json(answer);

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const updateOffer = async (req, res) => {
    res.status(200).send("Funciona");
}

const deleteOffer = async (req, res) => {
    res.status(200).send("Funciona");
}


// FAVOURITE
const createFavorite = async (req, res) => {
    res.status(200).send("Funciona");
}

const deleteFavorite = async (req, res) => {
    res.status(200).send("Funciona");
}

// PASSWORD
const recoverPassword = async (req, res) => {
    res.status(200).send("Funciona");
}

const restorepassword = async (req, res) => {
    res.status(200).send("Funciona");
}

//EXPORTACION DE DATOS
module.exports = {
    createUser,
    updateUser,
    deleteUser,

    login,
    logout,

    search,
   
    createOffer,
    updateOffer,
    deleteOffer,

    createFavorite,
    deleteFavorite,

    recoverPassword,
    restorepassword
}

/*{
    "arrayOfertas":[
	{
        "idOferta":1,
		"tituloOferta":"Senior Front-end Developer (freelance)",
		"fechaOferta":"Posted 18 hrs ago ",
        "salarioOferta": 1.500,
		"descripcionOferta":"Smile is the European leader in open source digital services, combining innovation, technology, and a passion for digital transformation. With nearly 2,000 employees across the globe, we deliver hundreds of strategic digital projects annually for some of the biggest names in the industry. Our expertise spans Digital, Business Apps, Embedded & IoT, and Infrastructure. As part of our team, you will have the opportunity to work on cutting-edge projects, leveraging our extensive knowledge and commitment to open source solutions to drive digital innovation.",
		"paisOferta": "España",
		"linkOferta": "https://httpstatusdogs.com/100-continue"
	},
    {
        "idOferta":2,
		"tituloOferta":"WordPress designer & Developer",
		"fechaOferta":"Posted 1 week ago ",
        "salarioOferta": 1.300,
		"descripcionOferta":"Are you a talented designer that knows all the ins and outs of WordPress? Do you have experience developing and designing WordPress sites? Is classical music your passion? Come and join our team. You will be working creating beautiful websites for the most talented artists. Top designing skills and web development are required as well as excellent communication.",
		"paisOferta": "Italia",
		"linkOferta": "https://httpstatusdogs.com/100-continue"
	},
    {
        "idOferta":3,
		"tituloOferta":"Full Stack Developer - React & Nodejs",
		"fechaOferta":"Posted 30 minutes ago ",
        "salarioOferta": 2.100,
		"descripcionOferta":"We help brands and retailers optimize their marketing strategies, reaching their audiences throughout the customer journey and driving customers to visit physical stores. In 2022, we joined ShopFully, the tech company that is reinventing local shopping worldwide (shopfully.com). With teams in 12 countries, a network of 45 million active users and over 400 partnerships with major retailers and the best-known brands around the world, ShopFully is the European champion and an international leading player in Drive to Store.",
		"linkOferta": "https://httpstatusdogs.com/100-continue"
	},
    {	
        "idOferta":4,
		"tituloOferta":"Software Development Manager",
		"fechaOferta":"Posted 8 hours ago ",
        "salarioOferta": 1.800,
		"descripcionOferta":"We are looking for a software development manager to manage teams of freelance developers on enterprise-level projects and Proteams' internal software products.",
		"linkOferta": "https://httpstatusdogs.com/100-continue"
	},
    {	
        "idOferta":5,
		"tituloOferta":"Software Development Manager",
		"fechaOferta":"Posted 14 minutes ago ",
        "salarioOferta": 1.750,
		"descripcionOferta":"In 2022, we joined ShopFully, the tech company that is reinventing local shopping worldwide (shopfully.com). With teams in 12 countries, a network of 45 million active users and over 400 partnerships with major retailers and the best-known brands around the world, ShopFully is the European champion and an international leading player in Drive to Store.",
		"linkOferta": "https://httpstatusdogs.com/100-continue"
	}
]
}
*/