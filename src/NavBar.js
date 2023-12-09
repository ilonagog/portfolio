import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navigation'>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default NavBar
