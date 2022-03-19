const Sequelize = require('sequelize')

const sequelize = new Sequelize('etsy_db', 'admin', 'admin1234', {
    dialect: 'mysql',
    host: 'db-273.c8kdf2cgilxy.us-east-1.rds.amazonaws.com'
})

module.exports = sequelize 