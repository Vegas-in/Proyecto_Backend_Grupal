// CREATE
const createFavoriteUserApi = (req, res) => {
   /*  const result = validationResult(req);
    if (!result.isEmpty()) {
       return res.send({ errors: result.array() });
    }
    console.log(req.body);
    res.status(201).json({
        success: true,
        name: req.body.name,
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        data: req.body
    }); */
}

// DELETE
const deleteFavoriteUserApi = (req, res) => {
    /* const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.send({ errors: result.array() });
    } */
    res.status(200).send("Favorito borrado!. Has borrado:" + req.params.name);
}



//EXPORTACION DE DATOS
module.exports = {
    createFavoriteUserApi,
    deleteFavoriteUserApi
}