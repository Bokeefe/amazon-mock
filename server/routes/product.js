const router = require('express').Router()
const Product = require('../models/product')

router.post('/products',
    async (req, res) => {
        try {
            let product = new Product()
            product.title = req.body.title;
            product.description = req.body.description;
            product.phot = req.body.phot;
            product.stockQuantity = req.body.stockQuantity;
            await product.save();

            res.json({
                status: true,
                message: "Successfully saved"
            })
        } catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    })

// PUT
router.put('/products/:id',
    async (req, res) => {
        try {
            let product = await Product.findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    category: req.body.categoryID,
                    photo: req.body.photo,
                    description: req.body.description,
                    owner: req.body.ownerID,
                }
            }, {
                upsert: true
            });

            res.json({
                status: true,
                updatedProduct: product
            })
        } catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            });
        }
    })

// GET
router.get('/product/:id',
    async (req, res) => {
        try {
            let product = await Product.findOne({
                _id: req.params.id
            })

            res.json({
                status: true,
                updatedProduct: product
            })
        } catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    })

router.get('/products',
    async (req, res) => {
        try {
            let products = await Product.find()

            res.json({
                status: true,
                products: products
            })
        } catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    })

// DELETE
router.delete('/products/:id', async (req, res) => {
    console.log('hitting here', req.params.id)
    try {
        let deletedProduct = await Product.findByIdAndDelete({
            _id: req.params.id
        })
        if (deletedProduct) {
            res.json({
                status: true,
                message: 'Successfully deleted product'
            })
        }
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
})

module.exports = router;