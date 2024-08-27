import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedAuthRoute({ children }) {
    const { useToken } = useContext(AuthContext)
    return (
        <>

            {
                !useToken ? children : <Navigate to={'/'} />
            }
        </>
    )
}
