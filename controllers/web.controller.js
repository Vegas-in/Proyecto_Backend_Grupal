const getIndex = async (req, res) => {
    let products = id? await Product.find({id},'-_id -__v') : await Product.find({},'-_id -__v'); //{}
    res.status(200).render("products",{products,msj:"Café??"}); // Respuesta de la API para 1 producto
}



module.exports = {
    getProduct
}