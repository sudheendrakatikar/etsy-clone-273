const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Favourites = sequelize.define('favourites', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Favourites