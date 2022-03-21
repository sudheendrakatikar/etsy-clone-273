const express = require('express')
const app = express()
app.use(express.json())

const sequelize = require('./config/database')
connectToDb()
async function connectToDb() {
    try {
        await sequelize.authenticate()
        console.log('Connected to database')
        sequelize.sync()
    }
    catch (err) {
        console.log(err)
    }
}

const dotenv = require("dotenv")
dotenv.config()

const cors = require('cors')
app.use(cors())

const auth = require('./api/auth')
const user = require('./api/user')
const product = require('./api/product')
const favourite = require('./api/favourite')
const shop = require('./api/shop')
const cart = require('./api/cart')

app.get('/', (req, res) => {
    res.status(200).send()
})

app.use('/api/auth', auth)
app.use('/api/user', user)
app.use('/api/product', product)
app.use('/api/favourite', favourite)
app.use('/api/shop', shop)
app.use('/api/cart', cart)

app.use(express.static(__dirname + '/img'));

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running!')
})

module.exports = server