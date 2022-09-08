import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth';

const RequiredAuth = ({ children }) => {
    const { login } = useAuth()
    if (!login) return <Navigate to="/login" replace={true}/>
    return (
        <>
            {children}
        </>
    )
}

export default RequiredAuth