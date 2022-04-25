import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import constants from './../../utils/constants.json'

const PrivateRoute = () => {

    const [session, setSession] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        try {
            const res = await axios.post(constants.uri+"/users/auth")
            if (res.status != 200) {
                setSession(false)
                setLoading(false)
            } else {
                setSession(true)
                setLoading(false)
            }
        } catch (error) {
            setSession(false)
            setLoading(false)
        }


    }, [])

    const token = window.localStorage.getItem('userdetails')

    return  token ? <Outlet /> : <Navigate to="/dashboard" />;
    
}

export default PrivateRoute