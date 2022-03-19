const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Cart = sequelize.define('cart', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports = Cart