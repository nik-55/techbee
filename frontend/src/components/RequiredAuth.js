import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from './Auth';

const RequiredAuth = ({ children }) => {
    const { login } = useAuth()
    return (
        <>
            {login ? children : <Link className="mx-5 my-5" to="/login">Please login</Link>}
        </>
    )
}

export default RequiredAuth