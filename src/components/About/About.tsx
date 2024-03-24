import { Row, Col } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import Text from "../../constants";
import { ReactComponent as TopWave } from "../../assets/media/TopWave.svg";
import { ReactComponent as BottomWave } from "../../assets/media/BottomWave.svg";
import Profile from "../../assets/media/profile.jpg";
import "./About.css";

function About() {
  const { tabletSize } = useWindowSize();

  return (
    <div className="aboutMeContainer" id="About">
      <div className="wave">
        <TopWave />
      </div>
      <Row className="about-me no-gutters">
        <Col lg={12} md={12} sm={12} data-aos="fade-down" data-aos-once="true">
          <h1 className="aboutMeHeader">About Me:</h1>
        </Col>
        <Col
          lg={6}
          md={12}
          sm={12}
          data-aos={tabletSize ? "fade-right" : "zoom-in-right"}
          data-aos-once="true"
        >
          <img className="profile" src={Profile} alt="Me" />
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div
            className="textContainer"
            data-aos={tabletSize ? "fade-left" : "fade-down"}
            data-aos-once="true"
          >
            <p className="bigger">{Text.AboutMeText}</p>
          </div>
          <Row>
            <Col
              lg={6}
              className="textContainer"
              data-aos={tabletSize ? "fade-right" : "fade-right"}
              data-aos-once="true"
            >
              <h3>Always Discovering</h3>
              <p>{Text.AlwaysDiscovering}</p>
            </Col>
            <Col
              lg={6}
              className="textContainer"
              data-aos={tabletSize ? "fade-left" : "fade-left"}
              data-aos-once="true"
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
