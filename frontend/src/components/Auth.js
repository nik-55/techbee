import React, { createContext, useContext, useState,useEffect } from 'react'
import axios from 'axios';

const AuthContext = createContext(null);

const obj = {
    id: "",
    username: "",
    email: "",
}

const Auth = ({ children }) => {
    const [user, setUser] = useState(obj);
    const [login, setLogin] = useState(false)

    const getuser = async () => {
        const token = localStorage.getItem("techbee_jwtToken")
        if (token !== "") {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const res = await axios.get("http://localhost:8000/getuser/", config)
            return res;
        }
    }

    useEffect(() => {
        const call = async () => {
            const res = await getuser();
            setUser(res.data)
            setLogin(true)
        }
        call()
    },[login])

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