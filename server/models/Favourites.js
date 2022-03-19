const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Favourite = sequelize.define('favourite', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Favourite