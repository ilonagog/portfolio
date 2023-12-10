import { Button } from 'flowbite-react';
import React from 'react'
import { FaMedium } from "react-icons/fa6";
const Footer = () => {
    const myEmail = "gogiashvili.ilona@gmail.com"
    return (
        <div>
            <div className="social-icons">
                <h2>Get in touch</h2>
                <a className='email' href={`mailto:${myEmail}`} >
                    <i className='fas fa-envelope' ></i>
                </a>
                <a className="social-icon linkedin" href="https://www.linkedin.com/in/ilona-gogiashvili" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a className="social-icon github" href="https://github.com/ilonagog">
                    <i className="fab fa-github"></i>
                </a>
                <a className="social-icon medium" href="https://medium.com/@gogiashvili.ilona" target="_blank" rel="noopener noreferrer">
                    <FaMedium />
                </a>
                <Button href="https://docs.google.com/document/d/1hPy-qZuDIMd2Okxy7n0CN4x4kd3eMmiScOmq4RXgVrM/edit" target="_blank">Resume</Button>
            </div>
        </div>
    )
}

export default Footer
