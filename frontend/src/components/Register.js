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
    setObj({ ...obj, [name] : val });
  }

  const handlesubmit = async () => {
      await axios.post("http://localhost:8000/register/",{
        username : obj.username,
        email : obj.email,
        password : obj.password
      })
      setObj(object);
      alert("Registered Successfully")
  }
  return (
    <div>
      <input placeholder='Username' type={"text"} name={"username"} value={obj.username} onChange={handleinput} />
      <input placeholder='Email' type={"email"} name={"email"} value={obj.email} onChange={handleinput} />
      <input placeholder='Password' type={"password"} name={"password"} value={obj.password} onChange={handleinput} />
      <button onClick={handlesubmit}>Register</button>
    </div>
  )
}

export default Register