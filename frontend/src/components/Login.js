import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const object = {
    email: "",
    password: ""
}

const Login = ({change}) => {
    const navigate = useNavigate()
    const [obj, setObj] = useState(object);
    const handleinput = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setObj({ ...obj, [name]: val });
    }

    const handlesubmit = async () => {
        const res = await axios.post("http://localhost:8000/login/", {
            email: obj.email,
            password: obj.password
        })
        const token = res.data.token
        localStorage.setItem("techbee_jwtToken",token.access)
        alert("Loggined")
        setObj(object)
        change(true)
        navigate("/",{replace:true})
    }
    return (
        <div className='mx-5 my-5 w-50'>
            <input placeholder='email' name={"email"} value={obj.email} onChange={handleinput} className='form-control d-block w-50 my-3' />
            <input placeholder='Password' type={"password"} name={"password"} value={obj.password} onChange={handleinput} className='form-control d-block w-50 my-3' />
            <button onClick={handlesubmit} className='btn btn-success'>Login</button>
        </div>
    )
}

export default Login