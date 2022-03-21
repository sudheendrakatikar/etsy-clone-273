const router = require('express').Router();
const product = require('../services/product')

router.post('/', async (req, res) => {
    const result = await product.create(req.body)
    res.status(result.code).json(result)
})

router.get('/', async (req, res) => {
    const result = await product.findAll()
    res.status(result.code).json(result)
})

router.get('/id', async (req, res) => {
    const result = await product.findById(req.query.id)
    res.status(result.code).json(result)
})

router.get('/name', async (req, res) => {
    const result = await product.findByName(req.query.name)
    res.status(result.code).json(result)
})

router.get('/category', async (req, res) => {
    const result = await product.findByCategory(req.query.category)
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