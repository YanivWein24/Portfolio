import { useState } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import "./Intro.css";
import Video from "../../assets/Graphic.mp4";
import Resume from "../../assets/Yaniv-Resume.pdf";

function Intro() {
  const [firstButtonHovering, setFirstHovering] = useState<boolean>(false);
  const [secondButtonHovering, setSecondeHovering] = useState<boolean>(false);

  return (
    <div className="intro fade-in" id="Intro">
      <div>
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
        <h4 className="welcomeMessage">
          <em>Hi! my name is</em>
        </h4>
        <h1>
          <span>{"< Yaniv Weinshtein />"}</span>
        </h1>
        <h2>
          <span>
            {/* eslint-disable-next-line */}
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
          <a href={Resume} download="Yaniv-Resume.pdf">
            <i className="fa-solid fa-download" /> &nbsp;Download Resume
          </a>
        </Button>
        <Button
          onMouseOver={() => setSecondeHovering(true)}
          onMouseOut={() => setSecondeHovering(false)}
          className={secondButtonHovering ? "shake-bottom" : ""}
        >
          <Link
            to="Contact"
            smooth
            duration={3000}
            offset={-60}
            className="link"
            aria-label="To 'Contact-Me' Section"
          >
            <i className="fa-solid fa-envelope" /> &nbsp;Contact Me
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Intro;
