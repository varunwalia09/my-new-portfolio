import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='top-1'>
        <a href="/" className="logo-1">
        </a>
        <ul className="navbar-1">
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar