// CREATE
const createUserApi = (req, res) => {
    /* const result = validationResult(req);
    if (!result.isEmpty()) {
       return res.send({ errors: result.array() });
    }
    console.log(req.body); */
    res.status(201).json({
        success: true,
        name: req.body.name,
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        data: req.body
    });
}

// UPDATE
const editUserApi = (req, res) => {
    /* const result = validationResult(req);
    if (!result.isEmpty()) {
       return res.send({ errors: result.array() });
    } */
    res.status(200).send("Usuario editado!");
}

// DELETE
const deleteUserApi = (req, res) => {
    /* const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.send({ errors: result.array() });
    } */
    res.status(200).send("Usuario borrado!. Has borrado:" + req.params.name);
}

//EXPORTACION DE DATOS
module.exports = {
    createUserApi,
   /*  getUserApi, */
    editUserApi,
    deleteUserApi
}