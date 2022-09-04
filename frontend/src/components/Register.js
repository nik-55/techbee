import axios from 'axios';
import React, { useState } from 'react'

const object = {
  username: "",
  email: "",
  password: ""
}

const Register = () => {
  const [obj, setObj] = useState(object);
  const handleinput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setObj({ ...obj, [name]: val });
  }

  const handlesubmit = async () => {
    await axios.post("http://localhost:8000/register/", {
      email: obj.email,
      username: obj.username,
      password: obj.password
    })
    setObj(object);
    alert("Registered Successfully")
  }
  return (
    <div className='mx-5 my-5 w-50'>
      <input placeholder='Username' type={"text"} name={"username"} value={obj.username} onChange={handleinput} className='form-control d-block w-50 my-3' />
      <input placeholder='Email' type={"email"} name={"email"} value={obj.email} onChange={handleinput} className='form-control d-block w-50 my-3' />
      <input placeholder='Password' type={"password"} name={"password"} value={obj.password} onChange={handleinput} className='form-control d-block w-50 my-3' />
      <button onClick={handlesubmit} className='btn btn-success'>Register</button>
    </div>
  )
}

export default Register