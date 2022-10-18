import React, { FC } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Cards from "../Cards/Cards";
import myProjects from "./myProjects";
import "./Projects.css";

const smallScreen: Boolean = window.innerWidth < 940;

const Projects: FC = () => (
  <div data-aos="slide-up" data-aos-once={smallScreen && "true"}>
    <div className="topAngle-svg">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
    <div className="projects" id="Projects">
      <h1>Top Projects:</h1>
      <Container>
        <Row className="no-gutters">
          {myProjects.map((project) => (
            <Col
              data-aos="slide-up"
              data-aos-once={smallScreen && "true"}
              key={project.id}
              sm={12}
              md={project.id === 0 || project.id === 1 ? 6 : 4}
              lg={project.id === 0 || project.id === 1 ? 6 : 4}
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
      >
        Check out more projects!
      </a>
    </div>
    <div className="bottomAngle-svg">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
);
export default Projects;
