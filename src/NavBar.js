import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navigation'>
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/projects">Projects</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

export default NavBar
