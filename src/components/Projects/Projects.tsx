import React, { FC } from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Cards from "../Cards/Cards"
import myProjects from "./myProjects"
import "./Projects.css"

const Projects: FC = () => {
    return (
        <div data-aos="slide-up" data-aos-once="true" className="projects" id="Projects">
            <h1>Projects:</h1>
            <Container>
                <Row>
                    {myProjects.map(project => (
                        <Col data-aos="slide-up" data-aos-once="true" key={project.id} sm={12} md={12} lg={3}>
                            <Cards project={project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Projects