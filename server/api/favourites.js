const router = require('express').Router();
const favourites = require('../services/favourites')

router.post('/', async (req, res) => {
    const result = await favourites.add(req.query.user_id, req.query.product_id)
    res.status(result.code).json(result)
})

router.get('/', async (req, res) => {
    const result = await favourites.get(req.query.user_id, req.query.product_id)
    res.status(result.code).json(result)
})

router.delete('/', async (req, res) => {
    const result = await favourites.remove(req.query.user_id, req.query.product_id)
    res.status(result.code).json(result)
})

module.exports = router;