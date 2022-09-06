const {Router} = require('express')
const {productsController} = require('../controllers/products.controller')
const router = Router()
router.get('/products', productsController.getProducts)
router.get('/products/:id',productsController.getsProducts)
router.post('/products',productsController.postProducts)
router.delete('/products/:id',productsController.deleteProducts)
module.exports = router