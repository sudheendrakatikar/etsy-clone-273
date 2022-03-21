const router = require('express').Router();
const shop = require('../services/shop')

router.get('/available', async (req, res) => {
    const result = await shop.available(req.query.name)
    res.status(200).json(result)
})

router.get('/', async (req, res) => {
    const result = await shop.get(req.query.user_id)
    res.status(result.code).json(result)
})

router.post('/', async (req, res) => {
    const result = await shop.create(req.body)
    if (result.success) {
        res.status(201)
    }
    else {
        res.status(500)
    }
    res.json(result)
})

module.exports = router;