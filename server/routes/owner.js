const router = require('express').Router()
const Owner = require('../models/owner');

router.post('/owner', async (req, res) => {
    try {
        let owner = new Owner();
        owner.name = req.body.name;
        owner.description = req.body.description;
        await owner.save();

        res.json({
            success: true,
            message: "succesffully created  an owner"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

router.get('/owners', async (req, res) => {
    try {
        let owners = await Owner.find()

        res.json({
            success: true,
            owners: owners
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;