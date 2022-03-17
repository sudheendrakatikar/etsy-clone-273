const Shop = require('../models/Shop')

const available = async (name) => {
    const result = await Shop.findOne({
        where: { name: name }
    })
    if (result) {
        return { success: false, code: 200, message: 'This shop name is already taken! Try another one' }
    }
    else {
        return { success: true, code: 200, message: 'This shop name is available!' }
    }
}

const create = async (data) => {
    const newShop = {
        user_id: data.user_id,
        name: data.name,
    }
    const shop = await Shop.create(newShop)
    if (shop.toJSON()) {
        return { success: true, code: 201, message: 'Shop created!' }
    }
    else {
        return { success: false, code: 500, message: 'There was an error, try again' }
    }
}

module.exports = { available, create }