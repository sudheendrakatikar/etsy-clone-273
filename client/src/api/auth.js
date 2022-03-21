import { registerStart, registerSuccess, registerFailure } from '../redux/user'
import { loginStart, loginSuccess, loginFailure } from '../redux/user'
import { logoutStart, logoutSuccess, logoutFailure } from '../redux/user'
import { request } from '../requests'

export const register = async (dispatch, user) => {
    dispatch(registerStart())
    try {
        const res = await request.post('/auth/register', user)
        dispatch(registerSuccess())
        window.location.href = '/login'
    }
    catch (err) {
        dispatch(registerFailure())
    }
}

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await request.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const logout = async (dispatch, user) => {
    dispatch(logoutStart())
    try {
        const res = await request.post('/auth/logout', user)
        dispatch(logoutSuccess())
        window.location.href = '/'
    } catch (err) {
        dispatch(logoutFailure())
    }
}