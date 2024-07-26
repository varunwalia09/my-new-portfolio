import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='top-1'>
        <a href="/" className="logo-1">
        <p>Varun Walia</p>
        </a>
        <ul className="navbar-1">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;