import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const auth = localStorage.getItem('user');
    // const auth = {name:"faheem"}
    const navigate = useNavigate();
    const logout = () => {
            localStorage.clear();
            navigate('/login');
        }
    return(
        <div className="navbar">
        {
            auth ?
        <ul className="navLeft">
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/about'>About</Link></li>
            <li><Link to = '/services'>Services</Link></li>
            <li><Link to = '/contact'>Contact Us</Link></li>
            <li><Link to = '/signup' onClick={logout}>Logout</Link></li>
        </ul>
        :
        <ul className="navRight">
        <li><Link to = '/signup'>Signup</Link></li>
        <li><Link to = '/login'>Login</Link></li>
        </ul>
        }
        </div>
    )
}
export default Navbar;