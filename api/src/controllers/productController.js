const Product = require('../models/Product')

module.exports = {
    // list all products
    async index(req, res) {
        const products = await Product.find().sort('createdAt')

        return res.json(products)
    },

    // create a new product
    async create(req, res) {
        const product = await Product.create(req.body)
        
        return res.json(product)
    }
}