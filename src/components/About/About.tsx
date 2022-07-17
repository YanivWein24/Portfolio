import React, { FC, useState } from 'react'
import { Button, Row, Col } from "react-bootstrap"
import { Link } from 'react-scroll'
import "./About.css"

const About: FC = () => {

    const [firtstButtonHovering, setFirstHovering] = useState<boolean>(false);
    const [secondButtonHovering, setSecondeHovering] = useState<boolean>(false);

    const handleFirstMouseOver = () => {
        setFirstHovering(true);
    };

    const handleFirstMouseOut = () => {
        setFirstHovering(false);
    };

    const handleSecondMouseOver = () => {
        setSecondeHovering(true);
    };

    const handleSecondMouseOut = () => {
        setSecondeHovering(false);
    };

    const smallScreen: boolean = window.innerWidth < 940

    return (
        <div id="About">
            <div className="intro" data-aos="slide-right" data-aos-once="true">
                <h1><span>I'm Yaniv Weinshtein,</span></h1>
                <h2>A <span>Full Stack</span> Web Developer.</h2>
                <Button onMouseOver={handleFirstMouseOver} onMouseOut={handleFirstMouseOut} className={firtstButtonHovering ? "shake-bottom" : ""}>
                    <a download href="../../Resume-Template.pdf"><i className="fa-solid fa-download"></i> &nbsp;Download Resume</a></Button >
                <Button onMouseOver={handleSecondMouseOver} onMouseOut={handleSecondMouseOut} className={secondButtonHovering ? "shake-bottom" : ""}>
                    <Link to="Contact" smooth={true} duration={1000} offset={-60} className="link"><i className="fa-solid fa-envelope"></i> &nbsp;Contact Me</Link></Button >
            </div>
            <Row lg={3} md={12} sm={12} className="about-me">
                <Col md={12} data-aos={smallScreen ? "fade-left" : "zoom-in-down"} data-aos-once="true" className="solving-problems">
                    <i className="fa-solid fa-laptop-code"></i>
                    <h3>Solving Problems</h3>
                    <p>
                        Solving problems is a major part of developing new and innovative technology.
                        I look at problems as a way to gain knowledge and experience, and improve my skills to solve more complicated problems in the future.
                    </p>
                </Col>
                <Col md={6} data-aos={smallScreen ? "fade-right" : "zoom-in-up"} data-aos-once="true" className="former-technician">
                    <i className="fa-solid fa-wrench"></i>
                    <h3>Former Naval Technician</h3>
                    <p>As a former power and control systems technician in the Israeli navy, I've gained experience in locating and solving complex problems in large scale systems.
                        I'm also experienced with working in a team and meeting tight schedules.
                    </p>
                </Col>
                <Col md={6} data-aos={smallScreen ? "fade-left" : "zoom-in-down"} data-aos-once="true" className="always-learning">
                    <i className="fa-solid fa-book"></i>
                    <h3>Always Learning</h3>
                    <p>
                        A part of being a software developer is being able to keep up with the latest technologies.
                        and as technology evolves, I find myself constantly learning new things and growing my skills and knowledge.
                    </p>
                </Col>
            </Row>
        </div >
    )
}

export default About