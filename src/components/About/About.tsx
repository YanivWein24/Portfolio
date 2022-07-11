import React, { FC } from 'react'
import { Button, Row, Col } from "react-bootstrap"
import "./About.css"

const About: FC = () => {
    return (
        <div id="About">
            <div className="intro">
                <h1>I'm Yaniv Weinshtein,</h1>
                <h2>A <span>Full Stack</span> Web Developer.</h2>
                <Button><a href="../../Resume Template.pdf" download>My Resume</a></Button >
            </div>
            <Row lg={3} md={12} sm={12} className="about-me">
                <Col className="solving-problems">
                    <i className="fa-solid fa-laptop-code"></i>
                    <h3>Solving Problems</h3>
                    <p>As a developer, I</p>
                </Col>
                <Col className="former-technician">
                    <i className="fa-solid fa-wrench"></i>
                    <h3>Former Naval Technician</h3>
                    <p>As a former power and control systems technician in the israeli navy,
                        I've gained experience on locating and solving complex problems on large scale systems. <br />
                        I am also experienced with Working in groups and meeting tight schedules.
                    </p>
                </Col>
                <Col className="always-learning">
                    <i className="fa-solid fa-book"></i>
                    <h3>growth mindset</h3>
                    <p>
                        As technology evolves, developers are constantly
                    </p>
                </Col>
            </Row>
        </div >
    )
}

export default About