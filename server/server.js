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

app.use('/api/auth', auth)

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running!')
})