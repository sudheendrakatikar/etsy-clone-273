const router = require('express').Router();
const product = require('../services/product')

router.post('/', async (req, res) => {
    const result = await product.create(req.body)
    res.status(result.code).json(result)
})

router.get('/', async (req, res) => {
    const id = req.query.id
    const result = await product.findById(id)
    res.status(result.code).json(result)
})

router.put('/', async (req, res) => {
    const result = await product.update(req.query.id, req.body)
    res.status(result.code).json(result)
})

router.delete('/', async (req, res) => {
    const result = await product.remove(req.query.id)
    res.status(result.code).json(result)
})

module.exports = router;