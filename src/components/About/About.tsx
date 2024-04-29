import { Row, Col } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import Text from "../../constants";
import { ReactComponent as TopWave } from "../../assets/media/TopWave.svg";
import { ReactComponent as BottomWave } from "../../assets/media/BottomWave.svg";
import Profile from "../../assets/media/profile.jpg";
import "./About.css";

function About() {
  const { tabletSize } = useWindowSize();

  const bottomSections: Record<string, string>[] = [
    {
      label: "1.5 years of experience",
      text: Text.yearsOfExperience,
      animation: "fade-right",
    },
    {
      label: "Always Discovering",
      text: Text.AlwaysDiscovering,
      animation: "fade-left",
    },
  ];

  return (
    <div className="aboutMeContainer" id="About">
      <div className="wave">
        <TopWave />
      </div>
      <div className="backgroundLinear">
        <Row className="about-me no-gutters mx-auto">
          <Col xs={12} data-aos="fade-down" data-aos-once="true">
            <h1 className="aboutMeHeader">{Text.headers.aboutMe}</h1>
          </Col>
          <Col
            sm={12}
            data-aos={tabletSize ? "fade-right" : "fade-up"}
            data-aos-once="true"
            className="mb-4"
          >
            <img className="profile" src={Profile} alt="Me" />
          </Col>
          <Col xs={12}>
            <div
              className="textContainer"
              data-aos={tabletSize ? "fade-left" : "fade-down"}
              data-aos-once="true"
            >
              <p className="bigger">{Text.AboutMeText}</p>
            </div>
            <Row>
              {bottomSections.map(({ label, text, animation }) => (
                <Col
                  key={label}
                  lg={6}
                  className="textContainer"
                  data-aos={animation}
                  data-aos-once="true"
                >
                  <h3>{label}</h3>
                  <p>{text}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>

      <div className="bottom-wave">
        <BottomWave />
      </div>
    </div>
  );
}

export default About;
