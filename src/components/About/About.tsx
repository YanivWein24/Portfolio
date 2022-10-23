import React, { FC, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import "./About.css";
import Typewriter from "typewriter-effect";

const About: FC = () => {
  const [firstButtonHovering, setFirstHovering] = useState<boolean>(false);
  const [secondButtonHovering, setSecondeHovering] = useState<boolean>(false);

  const tabletScreen: boolean =
    window.innerWidth > 768 && window.innerWidth < 1000;
  const smallScreen: boolean = window.innerWidth < 768;

  return (
    <div id="About">
      <div className="intro fade-in">
        <video autoPlay muted loop id="myVideo">
          <source src={require("../../Graphic.mp4")} type="video/mp4" />
        </video>
        <h2 className="welcomeMessage">
          <em>Hi! my name is</em>
        </h2>
        <h1>
          <span>{"< Yaniv Weinshtein />"}</span>
        </h1>
        <h2>
          <span>
            I'm A{" "}
            <Typewriter
              options={{
                strings: ["FULL-STACK", "FRONT-END"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          Web Developer.
        </h2>
        <Button
          onMouseOver={() => setFirstHovering(true)}
          onMouseOut={() => setFirstHovering(false)}
          className={
            firstButtonHovering
              ? "shake-bottom downloadButton"
              : "downloadButton"
          }
        >
          <a
            href={require("../../Yaniv-Resume.pdf")}
            download="Yaniv-Resume.pdf"
          >
            <i className="fa-solid fa-download"></i> &nbsp;Download Resume
          </a>
        </Button>
        <Button
          onMouseOver={() => setSecondeHovering(true)}
          onMouseOut={() => setSecondeHovering(false)}
          className={secondButtonHovering ? "shake-bottom" : ""}
        >
          <Link
            to="Contact"
            smooth={true}
            duration={1000}
            offset={-60}
            className="link"
            aria-label="To 'Contact-Me' Section"
          >
            <i className="fa-solid fa-envelope"></i> &nbsp;Contact Me
          </Link>
        </Button>
      </div>
      <div className="bottomContainer">
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Row lg={3} md={12} sm={12} className="about-me no-gutters">
          <Col
            md={12}
            data-aos={tabletScreen ? "fade-down" : "fade-left"}
            data-aos-once={smallScreen && "true"}
            className="solving-problems"
          >
            <div className="imageContainer">
              {/* <i className="fa-solid fa-laptop-code"></i> */}
              <i className="fa-solid fa-user"></i>
            </div>
            <h3>About Me</h3>
            <p>
              My name is Yaniv Weinshtein. I'm a Practical Engineer in
              Electronics and a Full stack developer specializing in the "MERN"
              stack. I got exposed to coding in some of my practical engineering
              courses, and immediately I fell in love with the idea of creating
              solutions to day-to-day problems using only lines of code! I
              continued to code for fun for a while, and now I'm doing it
              professionally as my main career path!
            </p>
          </Col>
          <Col
            md={6}
            data-aos={smallScreen || tabletScreen ? "fade-right" : "zoom-in-up"}
            data-aos-once={smallScreen && "true"}
            className="always-learning"
          >
            <i className="fa-solid fa-book"></i>
            <h3>Always Learning</h3>
            <p>
              A part of being a software developer is being able to keep up with
              the latest technologies. and as technology evolves, I constantly
              find myself learning new things, exposing myself to new tools and
              technologies, and growing my skills and knowledge.
            </p>
          </Col>
          <Col
            md={6}
            data-aos={smallScreen || tabletScreen ? "fade-left" : "fade-right"}
            data-aos-once={smallScreen && "true"}
            className="former-technician"
          >
            <i className="fa-solid fa-wrench"></i>
            <h3>Former Naval Technician</h3>
            <p>
              As a former "Monitor And Control Systems" Technician in the
              Israeli navy, I've gained experience in locating and solving
              complex problems in large-scale systems. I'm also experienced with
              working in a team and meeting tight schedules.
            </p>
          </Col>
        </Row>
        <div className="bottom-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
