import React, { useState } from "react";
import imageOfMe from "./images/me.jpeg";
import imageOfKnitting from "./images/imageOfKnitting.jpeg";
import imageOfBakery from "./images/imageOfBakery.jpeg";
import ReactCardFlip from "react-card-flip";
const About = () => {
  const [isFlipCard, setIsFlipCard] = useState(false);

  const handleFlipCard = () => {
    setIsFlipCard(!isFlipCard);
  };
  return (
    <div className="containerImage">
      <ReactCardFlip isFlipped={isFlipCard} flipDirection="horizontal">
        <section className="story">
          <div className="story">
            <h1>About Me</h1>
            <p>
              <br />I am a graduate of the Flatiron School Software Engineering
              bootcamp. I've always had a fascination with technology and a
              passion for learning new skills. I am excited to create technology
              solutions to improve the digital experience of users by creating
              user-friendly web applications.
            </p>
            <p>
              My journey started with learning JavaScript, React, Ruby on Rails
              and will continue to grow with advancements in technology. With a
              background in retail banking, I am responsible, detail-oriented
              and have built trustworthy relationships with my clients.
            </p>
            <p>
              I am eager to learn new skills, stay up to date with the latest
              technology, and strive for continuous improvement in this
              industry.
            </p>
            <button
              onClick={handleFlipCard}
              style={{
                border: "none",
                background: "none",
                outline: "none",
                cursor: "pointer",
                color: "rgb(24 194 66)",
              }}
            >
              More about me
            </button>
          </div>
        </section>
        <section className="story">
          <div className="story">
            <h2>Little more about me </h2>
            <p>
              Hi there! I'm originally from the beautiful country of Georgia. My
              journey has been quite an adventure. I worked hard, overcame
              language barriers, and proudly graduated from Baruch College. I
              initially built a career in the banking industry, gaining valuable
              experience. However the desire to pursue my passion led me to make
              a significant change - i transitioned to become a software
              developer. It's a dream came true! My journey in software
              engineering is not just a career shift, it's my pride.
            </p>
            <p>
              Despite a hectic schedule, i find the moments to pursue my
              personal interests. Knitting,embroidery, creating felted wool
              crafts, creating Georgian cloisonne enamel tiny paintings. You can
              see some pictures of my work. And of course as a Georgian, i love
              my national food, but i also love to bake.
            </p>
            <p>
              My priority now is not only to excel in tech industry, but also to
              provide the best for my daughter.
            </p>
            <p>
              I am grateful for the opportunities to grow both professionally
              and personally. Each day is a step forward in achieving my dreams
              and creating a bright future for my daughter! I would love her to
              become a cybersecurity specialist or software engineer,following
              in her mom's footsteps, but a better version.
            </p>
            <img
              className="flipimage"
              src={imageOfBakery}
              alt="imageOfBakery"
              width="300px"
            />
            <img
              className="flipimage"
              src={imageOfKnitting}
              alt="imageOfKnitting"
              width="300px"
            />
            <button
              style={{
                border: "none",
                background: "none",
                outline: "none",
                cursor: "pointer",
                color: "rgb(24 194 66)",
              }}
              onClick={handleFlipCard}
            >
              Read less
            </button>
          </div>
        </section>
      </ReactCardFlip>

      <div className="image">
        <img
          className="portrait"
          src={imageOfMe}
          alt="portrait"
          height="450px"
        />
      </div>
    </div>
  );
};

export default About;
