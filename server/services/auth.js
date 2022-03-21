const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

const register = async (data) => {
    const newUser = {
        name: data.name,
        email: data.email,
        password: CryptoJS.AES.encrypt(
            data.password,
            process.env.PASS_SEC
        ).toString(),
    }
    const user = await User.create(newUser)
    if (user.toJSON()) {
        return { success: true, message: 'Account created! You can login now' }
    }
    else {
        return { success: false, message: 'There was an error, try again' }
    }
}

const login = async (data) => {
    const email = data.email
    const password = data.password
    const result = await User.findOne({
        where: { email: email }
    })
    if (!result) {
        return { success: false, code: 401, message: 'Email not found' }
    }
    const user = result.toJSON()
    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
    )
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (originalPassword != password) {
        return { success: false, code: 401, message: 'Invalid credentials' }
    }
    const accessToken = jwt.sign(
        {
            id: user.user_id,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
    )
    return { success: true, code: 200, user_id: user.user_id, token: accessToken }
}

const logout = (data) => {
    console.log(`Logging out user ${data.email} with token ${data.token}`)
    return { success: true, code: 200 }
}

module.exports = { register, login, logout }

