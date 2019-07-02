const express = require('express')
const { index, create } = require('./controllers/productController')

const routes = new express.Router()

routes.get('/products', index);
routes.post('/products', create);

module.exports = routes