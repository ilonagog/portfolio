
import React from 'react';
import Projects from './Projects'
import Blogs from "./Blogs"
import About from './About'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <div className='container'>
        <div className='about'>
          <h1 className="title">
            Hi, I'm Ilona Gogiashvili,
          </h1>
          <p >
            A Full Stack Web Developer
          </p>
        </div>
        <div className='subtitle'>
          <h3 >based in NY, NY.</h3>
        </div>

        <h2>Skills</h2>
        <div className='skills'>
          <h3>
            JavaScript, React.js, CSS, HTML, Object Oriented Programming, Ruby on Rails, Active Storage, SQL.
          </h3>
        </div>
      </div>
      <div class="spacer"></div>
      <a href="/about"><About />
      </a>

      <div class="spacer"></div>
      <a href="/projects"><Projects /></a>
      <div class="spacer"></div>
      <a href="/blogs"><Blogs /></a>
    </>
  )
}

export default Home
