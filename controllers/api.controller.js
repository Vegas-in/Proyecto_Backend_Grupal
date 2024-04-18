const users = require("../models/sql.model");
const Anuncio = require("../models/mongo.model");

const jwt = require("jsonwebtoken");

const Scraper = require("../utils/scraper");

const dataPrueba = [
    {
        "tituloOferta": "Transcription Team Leader & Reviewer",
        "fechaOferta": "Oct 2020",
        "salarioOferta": "$25/hr · Starting at $100",
        "descripcionOferta": "I generally work in transcription, regardless the language, i have the experience to understand the tools and guidelines, the speed and accuracy to get the quality & quantity needed I mainly focus on forming my own teams and get large batches of work done under my management and supervision with the quality and deadlines needed",
        "paisOferta": "istanbul, Istanbul, Turkey",
        "linkOferta": "www.cervezucas.com"
    },
    {
        "tituloOferta": "IT & Networking, Web Design, Pentesting",
        "fechaOferta": "Sep 2020",
        "salarioOferta": "$175/hr · Starting at $1K",
        "descripcionOferta": "Web Application Security Tests (Penetration Tests) – I can provide them from your internal network and from Internet. I use Blackbox, GreyBox and WhiteBox tests. Load, Stress, Performance tests for Web Applications. I can test how your application will behave during expected or unexpected load from visitors. I specialize in Digital Transformation, or taking a company's existing IT and moving it into cloud environments. 12 years experience in IT Security - I was a manager and a security specialist.",
        "paisOferta": "Dubai, Dubai, United Arab Emirates",
        "linkOferta": "www.quesitos.com"
    },
    {
        "tituloOferta": "Web Development",
        "fechaOferta": "Nov 2005",
        "salarioOferta": "$45/hr · Starting at $1K",
        "descripcionOferta": "Full-cycle web development services — we can handle everything from classic websites to multilevel SaaS platforms with cutting-edge technologies on board, providing you with the highest quality results.",
        "paisOferta": "Kfar Saba, Tel Aviv, Israel",
        "linkOferta": "www.patatitas.com"
    }
];


// USER
const createUser = async (req, res) => {
    const newUser = req.body;
    const response = await users.createUser(newUser);
    res.status(201).json({
        "items_created": response
    },
        {
            message: `usuario creado`
        });
}

const updateUser = async (req, res) => {
    const modifiedUser = req.body;
    const response = await users.editUserApi(modifiedUser);
    res.status(200).json({
        "item_updated": response
    }, {
        message: `usuario actualizado:`
    })
};


const deleteUser = async (req, res) => {
    let userSearch;
    if (req.params.email) {
        userSearch = await users.getUserByEmail(req.params.email);
        if (userSearch.length > 0) {
            //PRIMERO MANDAMOS BORRAR LOS FAVORITOS Y DESPUES BORRAMOS EL USUARIO
            await users.deleteFavouriteApi(req.params.email);
            await users.deleteUserApi(req.params.email);
            res.status(200).json({ message: `Se ha borrado el usuario con email: ${req.params.email}` })
        } else {
            res.status(404).json("No se ha encontrado el usuario")
        }
    }
    else {
        res.status(404).json("No se ha encontrado el usuario")
    }
};

// LOGIN-LOGOUT
const login = async (req, res) => {

    const userData = req.user._json;

    const { email: mail, given_name: name, family_name: surname }  = userData;
    const user = {
        email: mail,
        nombre: name,
        apellidos: surname
    }

    let userSearch = await users.getUserByEmail(mail);
    console.log("esto es usersearch " + userSearch);
    if (userSearch.length == 0) {
        users.createUser(user);
    }   
    

    //Estos son los pasos para crear un token si la autenticación es exitosa
    const payload = {
        email: mail,
        check: true
    };
    const token = jwt.sign(payload, `secret_key`, {
        expiresIn: "20m"
    });

    console.log("Esto es para ver token"+token);
    //Almacenamos el token en las cookies
    res.cookie("access-token", token, {
        httpOnly: true,
        sameSite: "strict",
    }).render("../views/indexLogin");
};

const failure = async (req, res) => {
    res.send('UUPSS!! ALGO VA MAL... HOUSTON TENEMOS PROBLEMAS');
}

const logout = async (req, res) => {
    //eliminamos la sesión y limpiamos el token de las cookies.
    req.logout(function (err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.clearCookie("access-token").redirect("/");
    })
}


// SEARCH 
// http://localhost:3000/api/search/
// POST
/* const postSearch = async (req, res) => {
    try {
        const tituloOferta = req.body.search;
        console.log(`Estamos en el POST buscando esta oferta ${tituloOferta}`);
        let anuncios = await Anuncio.find({ tituloOferta :  { $regex: tituloOferta, $options: 'i' } }, '-id, -__v');
        console.log(`Aquí tienes tu ofertita ${anuncios}`);

        res.render("../views/index.pug", anuncios[0]);

       
         res.redirect("/api/search/" + title); 
            }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
} */

// GET
const getSearch = async (req, res) => {
    console.log(req.query.search);
    const tituloOferta = req.query.search;
    if (tituloOferta) {
        let anuncios = await Anuncio.find({ tituloOferta: { $regex: tituloOferta, $options: 'i' } }, '-id, -__v');
        res.status(200).json(anuncios);
    }
    else {
        res.status(400).send("problemas");
    }
}


// ADS (admin)
// http://localhost:3000/api/ads/manual
// POST
const createOfferManual = async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        let answer = await new Anuncio(data).save();
        res.status(201).json(answer);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

// http://localhost:3000/api/ads/scraping
// POST
const createOfferScrap = async (req, res) => {

    await Anuncio.deleteMany({ });

    let data = await Scraper.scrap("https://www.guru.com/d/freelancers/");

    data.forEach(element => {
         
        new Anuncio(element).save();
       
    });

    res.status(201).json("Base de datos actualizada");

}


/* http://localhost:3000/api/ads/Senior Front-end Developer (freelance)
 PUT
{
    "idOferta":1,
    "tituloOferta":"Senior Front-end Developer (freelance)",
    "fechaOferta":"Posted 18 hrs ago ",
    "salarioOferta": "1.500",
    "descripcionOferta":"Smile is the European leader in open source digital services, combining innovation, technology, and a passion for digital transformation. With nearly 2,000 employees across the globe, we deliver hundreds of strategic digital projects annually for some of the biggest names in the industry. Our expertise spans Digital, Business Apps, Embedded & IoT, and Infrastructure. As part of our team, you will have the opportunity to work on cutting-edge projects, leveraging our extensive knowledge and commitment to open source solutions to drive digital innovation.",
    "paisOferta": "España",
    "linkOferta": "https://httpstatusdogs.com/100-continue"
} */
const updateOffer = async (req, res) => {
    try {
        const tituloOferta = req.params.name;
        const newData = req.body;
        let anuncio = await Anuncio.updateOne({ tituloOferta }, newData)
        res.status(200).json(anuncio);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` }); {
        }
    }
}

// DELETE
const deleteOffer = async (req, res) => {
    try {
        const tituloOferta = req.params.name;
        await Anuncio.deleteOne({ tituloOferta });
        res.status(200).send("Oferta freelance borrada");
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}


// FAVOURITE
const createFavorite = async (req, res) => {
    const newFavourite = req.body;
    const response = await users.createFavorite(newFavourite);
    res.status(201).json({
        "item_created": response
    },
        {
            message: `favorito creado`
        });
}

const deleteFavorite = async (req, res) => {
    let userSearch;
    if (req.params.email) {
        userSearch = await users.getUserByEmail(req.params.email);
        if (userSearch.length > 0) {
            await users.deleteFavouriteApi(req.params.email);
            res.status(200).json({ message: `Se han borrado los favoritos del usuario con email: ${req.params.email}` })
        } else {
            res.status(404).json("No se ha encontrado favoritos")
        }
    }
    else {
        res.status(404).json("No se ha encontrado favoritos")
    }
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
    failure,
    logout,

    getSearch,

    createOfferManual,
    createOfferScrap,
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
        "paisOferta": "Portugal",
        "linkOferta": "https://httpstatusdogs.com/100-continue"
    },
    {	
        "idOferta":4,
        "tituloOferta":"Software Development Manager",
        "fechaOferta":"Posted 8 hours ago ",
        "salarioOferta": 1.800,
        "descripcionOferta":"We are looking for a software development manager to manage teams of freelance developers on enterprise-level projects and Proteams' internal software products.",
        "paisOferta": "Francia",
        "linkOferta": "https://httpstatusdogs.com/100-continue"
    },
    {	
        "idOferta":5,
        "tituloOferta":"Software Development Manager",
        "fechaOferta":"Posted 14 minutes ago ",
        "salarioOferta": 1.750,
        "descripcionOferta":"In 2022, we joined ShopFully, the tech company that is reinventing local shopping worldwide (shopfully.com). With teams in 12 countries, a network of 45 million active users and over 400 partnerships with major retailers and the best-known brands around the world, ShopFully is the European champion and an international leading player in Drive to Store.",
        "paisOferta": "Japón",
        "linkOferta": "https://httpstatusdogs.com/100-continue"
    }
]
}
*/

/** */