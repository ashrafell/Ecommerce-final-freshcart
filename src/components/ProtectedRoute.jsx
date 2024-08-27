import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import Login from '../components/Login'

export default function ProtectedRoute({ children }) {

    const { useToken } = useContext(AuthContext)
    return (
        <>
            {useToken ? children : <Login />

            }
        </>
    )
}
