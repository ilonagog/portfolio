import React from 'react'
import image1 from "./images/activestorage.webp"
import image2 from "./images/ruby.webp"
import image3 from "./images/sinatraApi.webp"
import { FaMedium } from "react-icons/fa6";
const Blogs = () => {
    return (
        <div className='container'>
            <h2>Blogs</h2>
            <div className='cards'>
                <div className="card">
                    <img className="project-image" alt="project" src={image1} />
                    <div className="content">
                        <h3>Active Storage in Ruby on Rails/React</h3>
                    </div>
                    <div className='footer'>
                        <ul>
                            <li>
                                <a className="social-icon medium" href="https://medium.com/@gogiashvili.ilona/active-storage-in-ruby-on-rails-react-3fe0fd76f806" target="_blank" rel="noopener noreferrer">
                                    <FaMedium />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img className="project-image" alt="project" src={image2} />
                    <div className="content">
                        <h3>Ruby on Rails, and what i liked most</h3>
                    </div>
                    <div className='footer'>
                        <ul>
                            <li>
                                <a className="social-icon medium" href="https://medium.com/@gogiashvili.ilona/ruby-on-rails-and-what-i-liked-most-ff4d14c185fb" target="_blank" rel="noopener noreferrer">
                                    <FaMedium />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img className="project-image" alt="project" src={image3} />
                    <div className="content">
                        <h3>Ruby-Sinatra and RESTful routes</h3>
                        <p></p>
                    </div>
                    <div className='footer'>
                        <ul>
                            <li>
                                <a className="social-icon medium" href="https://medium.com/@gogiashvili.ilona/ruby-sinatra-and-restful-routes-b26f70630a7f" target="_blank" rel="noopener noreferrer">
                                    <FaMedium />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
