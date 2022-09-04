import React from 'react'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Route , Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Readmore from './components/Readmore';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/blog' element = {<Blog />}/>
      <Route path='/contact' element = {<Contact />}/>
      <Route path='/register' element = {<Register />}/>
      <Route path='/login' element = {<Login />}/>
      <Route path='/:postid' element = {<Readmore/>}/>
      </Routes>

    </>
  )
}

export default App