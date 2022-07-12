import React, { FC } from 'react'
import { Button, Row, Col } from "react-bootstrap"
import "./About.css"

const About: FC = () => {
    return (
        <div id="About">
            <div className="intro">
                <h1><span>I'm Yaniv Weinshtein,</span></h1>
                <h2>A <span>Full Stack</span> Web Developer.</h2>
                <Button><a download href="../../Resume-Template.pdf">Download Resume</a></Button >
            </div>
            <Row lg={3} md={12} sm={12} className="about-me">
                <Col md={12} className="solving-problems">
                    <i className="fa-solid fa-laptop-code"></i>
                    <h3>Solving Problems</h3>
                    <p>
                        Solving problems is a major part of developing new and innovative technology.
                        I look at problems as a way to gain knowledge and experience, and improve my skills to solve more complicated problems in the future.
                    </p>
                </Col>
                <Col md={6} className="former-technician">
                    <i className="fa-solid fa-wrench"></i>
                    <h3>Former Naval Technician</h3>
                    <p>As a former power and control systems technician in the israeli navy,
                        I've gained experience on locating and solving complex problems in large scale systems. <br />
                        I'm also experienced with Working in a team and meeting tight schedules.
                    </p>
                </Col>
                <Col md={6} className="always-learning">
                    <i className="fa-solid fa-book"></i>
                    <h3>Always Learning</h3>
                    <p>
                        A part of being a software developer is to be able to keep up with the latest technology.<br />
                        and as technology evolves, I find myself constantly learning something new and growing my skills and knowledge.
                    </p>
                </Col>
            </Row>
        </div >
    )
}

export default About