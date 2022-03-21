import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isRegistering: false,
        isFetching: false,
        error: false,
    },
    reducers: {
        registerStart: (state) => {
            state.isRegistering = true
        },
        registerSuccess: (state) => {
            state.isRegistering = false
        },
        registerFailure: (state) => {
            state.isRegistering = false
            state.error = true
        },
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        logoutStart: (state) => {
            state.isFetching = true
        },
        logoutSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = null
        },
        logoutFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
    },
})

export const {
    registerStart, registerSuccess, registerFailure,
    loginStart, loginSuccess, loginFailure,
    logoutStart, logoutSuccess, logoutFailure } = userSlice.actions
export default userSlice.reducer