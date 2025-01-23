import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../Static/logo.svg'
const Navbar = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg bg-black w-100">
                <div className="container-fluid w-100">
                    <div>
                        <NavLink className="navbar-brand" to="/">
                            <img src={Logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                        </NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-around">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-light fs-6" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light fs-6" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light fs-6" to="/cars">Cars</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light fs-6" to="/users">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light fs-6" to="/admin">Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-6 text-light" to="/userlogin">
                                    
                                    User Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light fs-6" to="/services">Services</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar