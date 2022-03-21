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

const get = async (user_id) => {
    const result = await Shop.findOne({
        where: { user_id: user_id }
    })
    if (result) {
        return { success: true, code: 200, message: result.toJSON() }
    }
    else {
        return { success: false, code: 404 }
    }
}

const create = async (newShop) => {
    console.log(newShop)
    const shop = await Shop.create(newShop)
    if (shop.toJSON()) {
        return { success: true, code: 201, message: 'Shop created!' }
    }
    else {
        return { success: false, code: 500, message: 'There was an error, try again' }
    }
}

module.exports = { available, get, create }