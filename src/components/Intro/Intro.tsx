import { useRef, useState } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import PDFModal from "../PDFModal/PDFModal";
import Video from "../../assets/Graphic.mp4";
import Resume from "../../assets/Yaniv-Resume.pdf";
import "./Intro.css";

function Intro() {
  const { tabletSize } = useWindowSize();
  const [firstButtonHovering, setFirstHovering] = useState<boolean>(false);
  const [secondButtonHovering, setSecondeHovering] = useState<boolean>(false);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleLoadedVideo = () => {
    if (videoRef.current) videoRef.current.style.opacity = "1";
  };

  return (
    <>
      <PDFModal
        isPDFModalOpen={isPDFModalOpen}
        setIsPDFModalOpen={setIsPDFModalOpen}
      />
      <div className="intro fade-in" id="Intro">
        <div>
          <div className="videoContainer">
            <video
              autoPlay
              muted
              loop
              ref={videoRef}
              onLoadedData={handleLoadedVideo}
              width={tabletSize ? "unset" : "100%"}
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
          <a
            href={Resume}
            download="Yaniv-Resume.pdf"
            // this link should be enabled for mobile devices only. on Larger devices it will open the PDF preview modal
            onClick={(event) => !tabletSize && event.preventDefault()}
          >
            <Button
              onMouseOver={() => setFirstHovering(true)}
              onMouseOut={() => setFirstHovering(false)}
              onClick={() => !tabletSize && setIsPDFModalOpen(true)}
              className={`downloadButton ${
                firstButtonHovering && "shake-bottom"
              }`}
            >
              <i
                className={`fa-solid fa-${
                  tabletSize ? "download" : "file-invoice"
                }`}
              />{" "}
              &nbsp;
              {tabletSize ? "Download" : "My"} Resume
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
    </>
  );
}

export default Intro;
