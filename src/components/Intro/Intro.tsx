import { useRef, useState } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import Video from "../../assets/Graphic.mp4";
import Resume from "../../assets/Yaniv-Resume.pdf";
import "./Intro.css";

function Intro() {
  const [firstButtonHovering, setFirstHovering] = useState<boolean>(false);
  const [secondButtonHovering, setSecondeHovering] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleLoadedVideo = () => {
    if (videoRef.current) videoRef.current.style.opacity = "1";
  };

  return (
    <div className="intro fade-in" id="Intro">
      <div>
        <div className="videoContainer">
          <video
            autoPlay
            muted
            loop
            ref={videoRef}
            onLoadedData={handleLoadedVideo}
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
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
                strings: ["FULL-STACK", "FRONT-END", "REACT"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          Developer.
        </h2>
        <a href={Resume} download="Yaniv-Resume.pdf">
          <Button
            onMouseOver={() => setFirstHovering(true)}
            onMouseOut={() => setFirstHovering(false)}
            className={`downloadButton ${
              firstButtonHovering && "shake-bottom"
            }`}
          >
            <i className="fa-solid fa-download" /> &nbsp;Download Resume
          </Button>
        </a>
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
