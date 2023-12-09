import React from 'react'
import imageOfMe from "./images/me.JPG"
const About = () => {
    return (
        <div className='containerImage'>
            <section className="story">
                <h1>About Me</h1>
                <p>
                    <br />
                    I am a graduate of the Flatiron School Software Engineering bootcamp. I've always had a fascination with technology and a passion for learning new skills. I am excited to create technology solutions to improve the digital experience of users by creating user-friendly web applications.

                </p>
                <p>
                    My journey started with learning JavaScript, React, Ruby on Rails and will continue to grow with advancements in technology. I have proficiency in technologies such as Active Storage, ensuring efficient and secure file management within web applications.

                    Coming from a retail banking background, I am responsible, detail-oriented and have an excellent customer service experience.


                </p>
                <p>
                    I am eager to learn new skills, stay up to date with the latest technology, and strive for continuous improvement in this  industry.

                </p>
            </section>
            <div className='image'>
                <img className='portrait' src={imageOfMe} alt="portrait" height="450px" />
            </div>
        </div>
    )
}

export default About
