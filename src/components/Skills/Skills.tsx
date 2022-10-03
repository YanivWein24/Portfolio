import React, { FC } from "react";
import "./Skills.css";
import { Row, Col } from "react-bootstrap";

const Skills: FC = () => {
  const smallScreen: Boolean = window.innerWidth < 940;

  return (
    <div className="skills" id="Skills">
      <h1 data-aos="fade-right" data-aos-once={smallScreen && "true"}>
        Skills:
      </h1>
      <div data-aos="fade-left" data-aos-once={smallScreen && "true"}>
        <h2>Front-End:</h2>
        <hr />
        <Row>
          <Col>
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #ffe600" }}
            >
              <p style={{ color: "#ffe600" }}>Javascript</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="JavaScript"
                />
              </a>
            </div>
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #2d79c7" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #53d2fa" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #764abc" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #6e10f4" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #f37844" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #33a9dc" }}
            >
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
      <div data-aos="fade-right" data-aos-once={smallScreen && "true"}>
        <h2>Back-End:</h2>
        <hr />
        <Row>
          <Col>
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #8bc500" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #494949" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #68a95d" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #000" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #34e27a" }}
            >
              <p style={{ color: "#34e27a" }}>Passport.js</p>
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #3d3d3d" }}
            >
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
      <div data-aos="fade-left" data-aos-once={smallScreen && "true"}>
        <h2>Misc:</h2>
        <hr />
        <Row>
          <Col>
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #c63d14" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #343434" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #f03c2e" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #ff6c37" }}
            >
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
            <div
              className="skill"
              style={{ boxShadow: "1px 1px 10px 2px #4182b3" }}
            >
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
      <div data-aos="fade-down" data-aos-once={smallScreen && "true"}>
        <h2 className="familiarHeader">
          Also familiar with the following CS concepts:
        </h2>
        <hr />
        <Row>
          <Col>
            <div
              className="skill familiarSkill"
              data-aos={smallScreen && "fade-down"}
              data-aos-once={smallScreen && "true"}
              style={{ transition: "all .8s ease" }}
            >
              <p>Data Structures</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.geeksforgeeks.org/data-structures/"
              >
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1953/1953354.png"
                  alt="Data Structures"
                />
              </a>
            </div>
            <div
              className="skill familiarSkill"
              data-aos={smallScreen && "fade-down"}
              data-aos-once={smallScreen && "true"}
              style={{ transition: "all .8s ease" }}
            >
              <p>Algorithms</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
              >
                {" "}
                <img
                  src="https://i.pinimg.com/originals/dd/4e/5e/dd4e5ee83c35523f1e06fc7548af119c.png"
                  alt="Algorithms"
                />
              </a>
            </div>
            <div
              className="skill familiarSkill"
              data-aos={smallScreen && "fade-down"}
              data-aos-once={smallScreen && "true"}
              style={{ transition: "all .8s ease" }}
            >
              <p>Object-Oriented Programming</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Object-oriented_programming"
              >
                {" "}
                <img
                  src="https://cdn4.iconfinder.com/data/icons/technology-83/1000/object_programming_development_oriented_developer_object-oriented_programming_software-512.png"
                  alt="OOP"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
