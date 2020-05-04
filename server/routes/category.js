const router = require('express').Router()
const Category = require('../models/category')

// POST
router.post('/category',
    async (req, res) => {
        try {
            let category = new Category();
            category.type = req.body.type;

            await category.save()

            res.json({
                status: true,
                message: "Successfully created a category"
            })
        } catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    })

// GET
router.get('/categories',
    async (req, res) => {
        console.log('GET CATEGORY')
        try {
            let categories = await Category.find()

            res.json({
                status: true,
                categories: categories
            })
        } catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    })

module.exports = router;