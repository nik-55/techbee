import React, { useState } from 'react'
import axios from 'axios';

const object = {
    username: "",
    password: ""
}

const Login = () => {
    const [obj, setObj] = useState(object);
    const handleinput = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setObj({ ...obj, [name]: val });
    }

    const handlesubmit = async () => {
        await axios.post("http://localhost:8000/login/", {
            username: obj.username,
            password: obj.password
        })
        setObj(object);
        alert("Loggined")
    }
    return (
        <div>
            <input placeholder='Username' name={"username"} value={obj.username} onChange={handleinput} />
            <input placeholder='Password' type={"password"} name={"password"} value={obj.password} onChange={handleinput} />
            <button onClick={handlesubmit}>Login</button>
        </div>
    )
}

export default Login