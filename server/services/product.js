const Product = require('../models/Product')
const { Op } = require('@sequelize/core');

const create = async (data) => {
    const newProduct = {
        shop_id: data.shop_id,
        name: data.name,
        description: data.description,
        category: data.category,
        rating: 0,
        quantity: data.quantity,
        price: data.price
    }
    const product = await Product.create(newProduct)
    if (product.toJSON()) {
        return { success: true, code: 201, message: 'Product created!' }
    }
    else {
        return { success: false, code: 500, message: 'There was an error, try again' }
    }
}

const findAll = async () => {
    const result = await Product.findAll()
    if (result.length > 0) {
        return { success: true, code: 200, message: JSON.parse(JSON.stringify(result)) }
    }
    else {
        return { success: false, code: 404, message: 'No products found' }
    }
}

const findById = async (product_id) => {
    const result = await Product.findOne({
        where: { product_id: product_id }
    })
    if (result) {
        return { success: true, code: 200, message: result.toJSON() }
    }
    else {
        return { success: false, code: 404, message: 'Product ID not found' }
    }
}

const findByName = async (name) => {
    const result = await Product.find({
        where: {
            name: { [Op.like]: `%${name}%` }
        }
    })
    if (result) {
        return { success: true, code: 200, message: result.toJSON() }
    }
    else {
        return { success: false, code: 404, message: 'No products found' }
    }
}

const findByCategory = async (category) => {
    const result = await Product.find({
        where: { category: category }
    })
    if (result) {
        return { success: true, code: 200, message: result.toJSON() }
    }
    else {
        return { success: false, code: 404, message: 'No products found' }
    }
}

const update = async (product_id, data) => {
    const result = await Product.update(data, {
        where: { product_id: product_id }
    })
    if (result[0] == 1) {
        return { success: true, code: 202, message: 'Product updated!' }
    }
    else {
        return { success: false, code: 500, message: 'There was an error, try again' }
    }
}

const remove = async (product_id) => {
    const result = await Product.destroy({
        where: { product_id: product_id }
    })
    if (result == 1) {
        return { success: true, code: 202, message: 'Product deleted!' }
    }
    else {
        return { success: false, code: 500, message: 'There was an error, try again' }
    }
}

module.exports = { create, findAll, findById, findByName, findByCategory, update, remove }