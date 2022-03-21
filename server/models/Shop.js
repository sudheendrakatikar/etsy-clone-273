const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Shop = sequelize.define('shop', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})

module.exports = Shop