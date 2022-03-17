const router = require('express').Router();
const shop = require('../services/shop')

router.get('/available', async (req, res) => {
    const name = req.query.name
    const result = await shop.available(name)
    res.status(200).json(result)
})

router.post('/', async (req, res) => {
    const result = await shop.create(req.body, req.files)
    if (result.success) {
        res.status(201)
    }
    else {
        res.status(500)
    }
    res.json(result)
})

module.exports = router;