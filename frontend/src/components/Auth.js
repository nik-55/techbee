import React, { createContext, useContext, useState, useEffect } from 'react'
import { getuser } from '../api/getuser';

const AuthContext = createContext(null);
const obj = {
    id: "",
    username: "",
    email: "",
}

const Auth = ({ children }) => {
    const [user, setUser] = useState(obj);
    const [login, setLogin] = useState(false)

    useEffect(() => {
        const call = async () => {
            try {
                const res = await getuser();
                setUser(res.data)
                setLogin(true)
            }
            catch (err) { console.log(err) }
        }
        call()
    }, [login])

    const signin = () => {
        setLogin(true)
    }

    const signout = () => {
        setUser(obj)
        setLogin(false)
    }

    return (
        <><AuthContext.Provider value={{ login, user, signin, signout }}>{children}</AuthContext.Provider></>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default Auth