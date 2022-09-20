import React, { FC } from "react";
import "./Skills.css";
import { Row, Col } from "react-bootstrap";

const Skills: FC = () => (
  <div className="skills" id="Skills">
    <h1 data-aos="fade-right" data-aos-once="true">
      Skills:
    </h1>
    <div data-aos="fade-left" data-aos-once="true">
      <h2>Front-End:</h2>
      <hr />
      <Row>
        <Col>
          <div className="skill">
            <p style={{ color: "#f0db4f" }}>Javascript</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#2d79c7" }}>Typescript</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org/"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                alt="TypeScript"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#53d2fa" }}>React</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
                alt="React"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#764abc" }}>Redux</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://redux.js.org/"
            >
              <img
                src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
                alt="Redux"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#6e10f4" }}>Bootstrap</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://getbootstrap.com"
            >
              {" "}
              <img
                src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4"
                alt="Bootstrap"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#f37844" }}>HTML5</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.w3.org/html/"
            >
              {" "}
              <img
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                alt="HTML5"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#33a9dc" }}>CSS3</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.w3schools.com/css/"
            >
              {" "}
              <img
                src="https://cdn.cdnlogo.com/logos/c/18/css.svg"
                alt="CSS3"
              />
            </a>
          </div>
        </Col>
      </Row>
    </div>
    <div data-aos="fade-right" data-aos-once="true">
      <h2>Back-End:</h2>
      <hr />
      <Row>
        <Col>
          <div className="skill">
            <p style={{ color: "#8bc500" }}>Node.js</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nodejs.org/en/"
            >
              {" "}
              <img
                src="https://miro.medium.com/max/800/1*bc9pmTiyKR0WNPka2w3e0Q.png"
                alt="Node.js"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#494949" }}>Express</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://expressjs.com/"
            >
              {" "}
              <img
                src="https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg"
                alt="Express.js"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#68a95d" }}>MongoDB</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mongodb.com/"
            >
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#000" }}>Socket.IO</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://socket.io/"
            >
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
                alt="Socket-IO"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#34e27a" }}>passport.js</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.passportjs.org/"
            >
              {" "}
              <img
                src="https://cdn.glitch.me/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png"
                alt="Passport.js"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#3d3d3d" }}>OAuth2.0</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://oauth.net/"
            >
              {" "}
              <img
                src="https://net.cloudinfrastructureservices.co.uk/wp-content/uploads/2021/12/OAuth-2.png"
                alt="Oauth2.0"
              />
            </a>
          </div>
        </Col>
      </Row>
    </div>
    <div data-aos="fade-left" data-aos-once="true">
      <h2>Misc:</h2>
      <hr />
      <Row>
        <Col>
          <div className="skill">
            <p style={{ color: "#c63d14" }}>Jest</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jestjs.io/"
            >
              {" "}
              <img
                src="https://iconape.com/wp-content/png_logo_vector/jest-logo.png"
                alt="Jest"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#343434" }}>CircleCI</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jestjs.io/"
            >
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Circleci-icon-logo.svg/1200px-Circleci-icon-logo.svg.png"
                alt="CircleCI"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#f03c2e" }}>Git</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://git-scm.com/"
            >
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="Git"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#ff6c37" }}>Postman</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.postman.com/"
            >
              {" "}
              <img
                src="https://iconape.com/wp-content/png_logo_vector/postman.png"
                alt="Postman"
              />
            </a>
          </div>
          <div className="skill">
            <p style={{ color: "#4182b3" }}>Python</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.python.org/"
            >
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
                alt="Python"
              />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Skills;
