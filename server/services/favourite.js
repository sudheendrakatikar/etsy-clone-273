const Favourite = require('../models/Favourite')

const add = async (user_id, product_id) => {
    const newFav = {
        user_id: user_id,
        product_id: product_id
    }
    const result = await Favourite.create(newFav)
    if (result.toJSON()) {
        return { success: true, code: 201, message: 'Item added to favourites!' }
    }
    else {
        return { success: false, code: 500, message: 'There was an error, try again' }
    }
}

const get = async (user_id) => {
    console.log('GET FAV ---------- ' + user_id)
    const result = await Favourite.findAll({
        where: {
            user_id: user_id
        }
    })
    if (result.length > 0) {
        return { success: true, code: 200, message: JSON.parse(JSON.stringify(result)) }
    }
    else {
        return { success: false, code: 404, message: 'Your favourites list is empty' }
    }
}

const remove = async (user_id, product_id) => {
    const result = await Favourite.destroy({
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