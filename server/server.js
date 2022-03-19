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
const product = require('./api/product')
const shop = require('./api/shop')
const cart = require('./api/cart')

app.use('/api/auth', auth)
app.use('/api/product', product)
app.use('/api/shop', shop)
app.use('/api/cart', cart)

app.use(express.static(__dirname + '/img'));

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running!')
})