import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-scroll'
import "./Footer.css"

const Footer = () =>
    <div data-aos="slide-right" data-aos-once="true">
        <Button variant="outline-info" className="backToTop"><Link to="About" smooth={true} duration={1000} offset={-500} className="link">Back To Top <i className="fa-solid fa-up-long"></i></Link></Button>
        <div className="footer">
            <a href="https://github.com/YanivWein24/"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/yaniv-weinshtein/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:yanivwein22@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
    </div>

export default Footer