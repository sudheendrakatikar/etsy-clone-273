const router = require('express').Router();
const auth = require('../services/auth')

router.post('/register', async (req, res) => {
    const result = await auth.register(req.body)
    if (result.success) {
        res.status(201)
    }
    else {
        res.status(500)
    }
    res.json(result)
})

router.post('/login', async (req, res) => {
    const result = await auth.login(req.body)
    res.status(result.code).json(result)
})

router.post('/logout', (req, res) => {
    const result = auth.logout(req.body)
    res.status(200).json(result)
})

module.exports = router;