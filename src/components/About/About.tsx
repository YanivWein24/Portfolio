import { Row, Col } from "react-bootstrap";
import { ReactComponent as TopWave } from "../../assets/media/TopWave.svg";
import { ReactComponent as BottomWave } from "../../assets/media/BottomWave.svg";
import Profile from "../../assets/media/profile.png";
import "./About.css";
import Text from "../../constants";

function About() {
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
          <img className="profile" src={Profile} alt="Me" />
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div
            className="textContainer"
            data-aos={smallScreen ? "fade-left" : "fade-down"}
            data-aos-once={smallScreen && "true"}
          >
            <p className="bigger">{Text.AboutMeText}</p>
          </div>
          <Row>
            <Col
              lg={6}
              className="textContainer"
              data-aos={smallScreen ? "fade-right" : "fade-right"}
              data-aos-once={smallScreen && "true"}
            >
              <h3>Always Discovering</h3>
              <p>{Text.AlwaysDiscovering}</p>
            </Col>
            <Col
              lg={6}
              className="textContainer"
              data-aos={smallScreen ? "fade-left" : "fade-left"}
              data-aos-once={smallScreen && "true"}
            >
              <h3>Former Naval Technician</h3>
              <p>{Text.NavalTechnician}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="bottom-wave">
        <BottomWave />
      </div>
    </div>
  );
}

export default About;
