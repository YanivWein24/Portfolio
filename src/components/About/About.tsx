import { Row, Col } from "react-bootstrap";
import { ReactComponent as TopWave } from "../../assets/media/TopWave.svg";
import { ReactComponent as BottomWave } from "../../assets/media/BottomWave.svg";
import "./About.css";

const About = () => {
  const smallScreen: boolean = window.innerWidth < 768;

  return (
    <div className="aboutMeContainer" id="About">
      <div className="wave">
        <TopWave />
      </div>
      <Row className="about-me no-gutters">
        <Col
          lg={12}
          md={12}
          sm={12}
          data-aos="fade-down"
          data-aos-once={smallScreen && "true"}
        >
          <h1 className="aboutMeHeader">About Me:</h1>
        </Col>
        <Col
          lg={6}
          md={12}
          sm={12}
          data-aos={smallScreen ? "fade-right" : "zoom-in-right"}
          data-aos-once={smallScreen && "true"}
        >
          <img
            className="profile"
            src={require("../../assets/media/profile.png")}
            alt="Me"
          />
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div
            className="textContainer"
            data-aos={smallScreen ? "fade-left" : "fade-down"}
            data-aos-once={smallScreen && "true"}
          >
            <p className="bigger">
              My name is Yaniv Weinshtein. I'm a Practical Engineer in
              Electronics and a Full stack developer specializing in the "MERN"
              stack. I got exposed to coding in some of my practical engineering
              courses, and immediately I fell in love with the idea of creating
              solutions to day-to-day problems using only lines of code! I
              continued to code for fun for a while, and now I'm doing it
              professionally as my main career path!
            </p>
          </div>
          <Row>
            <Col
              lg={6}
              className="textContainer"
              data-aos={smallScreen ? "fade-right" : "fade-right"}
              data-aos-once={smallScreen && "true"}
            >
              <h3>Always Discovering</h3>
              <p>
                A part of being a software developer is being able to keep up
                with the latest technologies. and as technology evolves, I
                constantly find myself learning new things, exposing myself to
                new tools and technologies, and growing my skills and knowledge.
              </p>
            </Col>
            <Col
              lg={6}
              className="textContainer"
              data-aos={smallScreen ? "fade-left" : "fade-left"}
              data-aos-once={smallScreen && "true"}
            >
              <h3>Former Naval Technician</h3>
              <p>
                As a former "Monitor And Control Systems" Technician in the
                Israeli navy, I've gained experience in locating and solving
                complex problems in large-scale systems.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="bottom-wave">
        <BottomWave />
      </div>
    </div>
  );
};

export default About;
