const Cart = require('../models/Cart')

const add = async (item) => {
    const result = await Cart.create(item)
    if (result.toJSON()) {
        return { success: true, code: 201, message: 'Item added to cart!' }
    }
    else {
        return { success: false, code: 500, message: 'There was an error, try again' }
    }
}

const get = async (user_id) => {
    const result = await Cart.find({
        where: {
            user_id: user_id
        }
    })
    if (result) {
        return { success: true, code: 200, message: result.toJSON() }
    }
    else {
        return { success: false, code: 404, message: 'Your cart is empty' }
    }
}

const remove = async (user_id, product_id) => {
    const result = await Cart.destroy({
        where: {
            user_id: user_id,
            product_id: product_id
        }
    })
    if (result == 1) {
        return { success: true, code: 202, message: 'Item removed!' }
    }
    else {
        return { success: false, code: 500, message: 'There was an error, try again' }
    }
}

module.exports = { add, get, remove }