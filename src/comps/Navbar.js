import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <h3 className="logo"> <Link to="/" className="home">FireGram</Link></h3>
            <ul className="nav-links">
                <Link to="/login" className="login">
                    <li>Login</li>
                </Link>
                <Link to="/signup" className="signup">
                    <li>Sign up</li>
                </Link>
            </ul>
        </div>
    )
}
export default Navbar;