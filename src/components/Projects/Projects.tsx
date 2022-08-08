import React, { FC } from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Cards from "../Cards/Cards"
import myProjects from "./myProjects"
import "./Projects.css"

const Projects: FC = () =>
    <div style={{ position: "relative" }} data-aos="slide-up">
        <div className="topAngle-svg">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
            </svg>
        </div>
        <div data-aos-once="true" className="projects" id="Projects">
            <h1>Projects:</h1>
            <Container>
                <Row className='no-gutters'>
                    {myProjects.map(project => (
                        <Col data-aos="slide-up" data-aos-once="true" key={project.id} sm={12} md={project.mediumSize ? 12 : 6} lg={3}>
                            <Cards project={project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
        <div className="bottomAngle-svg">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
            </svg>
        </div>
    </div>
export default Projects