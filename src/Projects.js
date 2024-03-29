import React from "react";
import image1 from "./images/social.jpg";
import image2 from "./images/project4.jpg";
import image3 from "./images/movies.png";

const Projects = () => {
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="cards">
        <div className="card">
          <img className="project-image" alt="project" src={image1} />
          <div className="content">
            <h3>Social</h3>
            <p>Ruby on Rails</p>
            <p>React.js</p>
            <p>Material UI</p>
            <p>Active Storage</p>
          </div>
          <div className="footer">
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=v18cFURl6gQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ilonagog/Social.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img className="project-image" alt="project" src={image2} />
          <div className="content">
            <h3>Vacations</h3>
            <p>Ruby on Rails</p>
            <p>REST API</p>
            <p>Auth</p>
            <p>Bootstrap</p>
          </div>
          <div className="footer">
            <ul>
              <li>
                <a
                  href="https://www.loom.com/share/cb637accac9049d18a8da8d16d6617fb?sid=ad1c10d7-3f97-426a-9c0a-b7c79925b2bc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ilonagog/vacation-app-rails-react.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img className="project-image" alt="project" src={image3} />
          <div className="content">
            <h3>Trending-movies</h3>
            <p>React.js</p>
            <p>Tailwind CSS</p>
            <p></p>
          </div>
          <div className="footer">
            <ul>
              <li>
                <a
                  href="https://youtu.be/Oflpq-ca2CM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ilonagog/trending-movies.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
