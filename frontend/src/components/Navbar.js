import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({login,change}) => {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.setItem("techbee_jwtToken","");
        change(false)
        navigate("/",{replace : true})
    }
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand" style={{ "color": "#00ffb1", "fontFamily": "cursive" }}>Techbee</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            </li>
                            {
                                login ? <>
                                    <li className="nav-item">
                                        <NavLink to="/profile" className="nav-link">Profile</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className='nav-link' onClick={logout}>Logout</button>
                                    </li>
                                </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/register" className="nav-link">Register</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link">Login</NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar