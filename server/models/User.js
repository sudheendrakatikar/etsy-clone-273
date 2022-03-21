const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.DATE,
    },
    phone: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.TEXT
    },
    country: {
        type: Sequelize.STRING
    }
})

module.exports = User