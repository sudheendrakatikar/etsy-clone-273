const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Shop = sequelize.define('shop', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Shop