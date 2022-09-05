import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Readmore from './components/Readmore';

const Pubuser = createContext()

const obj = {
  id: "",
  username: "",
  email: "",
}

const App = () => {
  const [user, setUser] = useState(obj)
  const [login, setLogin] = useState(false);
  const getuser = async () => {
    const token = localStorage.getItem("techbee_jwtToken")
    if (token !== "") {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.get("http://localhost:8000/getuser/", config)
      setUser(res.data)
      setLogin(true)
    }
  }

  useEffect(() => {
    getuser();
  }, [login])

  const change = (log) => {
    setLogin(log)
  }
  return (
    <>
      <Pubuser.Provider value={user}>
        <Navbar login={login} change={(log) => change(log)} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog login={login} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login change={(log) => change(log)} />} />
          <Route path='/:postid' element={<Readmore />} />
        </Routes>
      </Pubuser.Provider>
    </>
  )
}

export default App
export { Pubuser }