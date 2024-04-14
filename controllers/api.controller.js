const users = require("../models/api.model");

// CREATE
const createUserApi = async (req, res) => {
    const newUser = req.body; // {title,content,email,category}
    const response = await users.createUser(newUser);
    res.status(201).json({
        "items_created": response,
        data: newUser
        },
        {
            message: `usuario creado`
        }); 
}

// UPDATE
const editUserApi = async (req, res) => {
    const modifiedUser = req.body; // {title,content,date,category,email,old_title}
    const response = await users.editUserApi(modifiedUser);
    res.status(200).json({
        "items_updated": response,
        data: modifiedUser
    },{
        message: `usuario creado:`
    });
}

// DELETE
const deleteUserApi = async (req, res) => {
    let userSearch;
    if (req.params.email) {
        userSearch = await users.getUserByEmail(req.params.email);
        if (userSearch.length > 0) {
            deleted = await users.deleteUserApi(req.params.email); 
            res.status(200).json({message: `Se ha borrado ${req.params.email}`})
        }else{
            res.status(404).json("No se ha encontrado el usuario")
        }
    }
    else {
        res.status(404).json("No se ha encontrado el usuario")
    }
};

const loginUserApi = async (req, res) => {

}

const logoutUserApi = async (req, res) => {

}

const createFavoriteUserApi = async (req, res) => {

}

const deleteFavoriteUserApi = async (req, res) => {

}

const searchUserApi = async (req, res) => {

}

const createAdsUserApi = async (req, res) => {

}

const editAdsUserApi = async (req, res) => {

}
// DELETE
const deleteAdsUserApi = async (req, res) => {

}

const recoverPasswordUserApi = async (req, res) => {

}

const restorepasswordUserApi = async (req, res) => {

}

//EXPORTACION DE DATOS
module.exports = {
    createUserApi,
    editUserApi,
    deleteUserApi,
    loginUserApi,
    logoutUserApi,
    createFavoriteUserApi,
    deleteFavoriteUserApi,
    searchUserApi,
    createAdsUserApi,
    editAdsUserApi,
    deleteAdsUserApi,
    recoverPasswordUserApi,
    restorepasswordUserApi
}