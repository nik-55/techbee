import React from 'react'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Readmore from './components/Readmore';
import AuthorPost from './components/AuthorPost';
import RequiredAuth from './components/RequiredAuth';
import Auth from './components/Auth';

const App = () => {

  return (
    <>
      <Auth>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<RequiredAuth><Blog/></RequiredAuth>} />
            <Route path='/profile' element={<RequiredAuth><Profile/></RequiredAuth>} />
            <Route path="/profile/editpost/:postid" element={<AuthorPost />} />

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/:postid' element={<Readmore />} />
          </Routes>
      </Auth>
    </>
  )
}

export default App