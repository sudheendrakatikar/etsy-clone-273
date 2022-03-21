const User = require('../models/User')

const get = async (user_id) => {
    const result = await User.findOne({
        where: { user_id: user_id }
    })
    if (result) {
        return { succcess: true, code: 200, message: result.toJSON() }
    }
    else {
        return { succcess: true, code: 500, message: 'There was an error, please try again' }
    }
}

const update = async (data) => {

}

module.exports = { get, update }