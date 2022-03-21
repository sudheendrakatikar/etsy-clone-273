const router = require('express').Router();
const user = require('../services/user')

router.get('/', async (req, res) => {
    const result = await user.get(req.query.id)
    res.status(result.code).json(result)
})

router.put('/', async (req, res) => {
    const result = await user.update(req.body)
    res.status(result.code).json(result)
})

module.exports = router