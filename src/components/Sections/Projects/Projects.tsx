import { Row, Col, Container } from "react-bootstrap";
import ProjectCard from "../../Misc/ProjectCard/ProjectCard";
import Text from "../../../constants";
import MyProjects from "../../../data/MyProjects";
import { ReactComponent as TopAngle } from "../../../assets/media/TopAngle.svg";
import { ReactComponent as BottomAngle } from "../../../assets/media/BottomAngle.svg";
import "./Projects.css";

export default function Projects() {
  return (
    <div data-aos="slide-up" data-aos-once="true">
      <div className="topAngle-svg">
        <TopAngle />
      </div>
      <div className="projects" id="Projects">
        <Container data-aos="slide-up" data-aos-once="true">
          <h1>{Text.headers.projects}</h1>
          <Row className="no-gutters">
            {MyProjects.map((project) => (
              <Col
                data-aos="slide-up"
                data-aos-once="true"
                key={project.id}
                sm={12}
                md={6}
                lg={4}
              >
                <ProjectCard project={project} />
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
          data-aos-once="true"
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
