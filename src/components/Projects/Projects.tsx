import { Row, Col, Container } from "react-bootstrap";
import Cards from "../Cards/Cards";
import MyProjects, { MyExperience } from "../../data/MyProjects";
import "./Projects.css";
import { ReactComponent as TopAngle } from "../../assets/media/TopAngle.svg";
import { ReactComponent as BottomAngle } from "../../assets/media/BottomAngle.svg";

const smallScreen: Boolean = window.innerWidth < 940;

function Projects() {
  return (
    <div data-aos="slide-up" data-aos-once={smallScreen && "true"}>
      <div className="topAngle-svg">
        <TopAngle />
      </div>
      <div className="projects" id="Experience">
        <h1>Experience:</h1>
        <Container>
          <Row className="no-gutters">
            {MyExperience.map((project) => (
              <Col
                data-aos="slide-up"
                data-aos-once={smallScreen && "true"}
                key={project.id}
                sm={12}
                md={6}
                lg={6}
              >
                <Cards project={project} experienceProject />
              </Col>
            ))}
          </Row>
        </Container>
        <Container data-aos="slide-up" data-aos-once={smallScreen && "true"}>
          <h1>Projects:</h1>
          <Row className="no-gutters">
            {MyProjects.map((project) => (
              <Col
                data-aos="slide-up"
                data-aos-once={smallScreen && "true"}
                key={project.id}
                sm={12}
                md={6}
                lg={4}
              >
                <Cards project={project} />
              </Col>
            ))}
          </Row>
        </Container>
        <a
          href="https://github.com/YanivWein24/"
          target="_blank"
          rel="noopener noreferrer"
          className="githubLink"
          aria-label="my github"
          data-aos="slide-up"
          data-aos-once={smallScreen && "true"}
        >
          More Projects!
        </a>
      </div>
      <div className="bottomAngle-svg">
        <BottomAngle />
      </div>
    </div>
  );
}
export default Projects;
