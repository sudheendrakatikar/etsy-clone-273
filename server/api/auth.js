const router = require('express').Router();
const user = require('../services/user')

router.post('/register', async (req, res) => {
    const result = await user.register(req.body)
    if (result.success) {
        res.status(201)
    }
    else {
        res.status(500)
    }
    res.json(result)
})

router.post('/login', async (req, res) => {
    const result = await user.login(req.body)
    res.status(result.code).json(result)
})

router.post('/logout', (req, res) => {
    const result = user.logout(req.body)
    res.status(200).json(result)
})

module.exports = router;