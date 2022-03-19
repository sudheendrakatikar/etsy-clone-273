const router = require('express').Router();
const cart = require('../services/cart')

router.post('/', async (req, res) => {
    const result = await cart.add(req.body)
    res.status(result.code).json(result)
})

router.delete('/', async (req, res) => {
    const result = await cart.remove(req.query.user_id, req.query.product_id)
    res.status(result.code).json(result)
})

module.exports = router;