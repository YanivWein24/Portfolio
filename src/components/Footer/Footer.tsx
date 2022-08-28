import React, { FC } from 'react'
import { Link } from 'react-scroll'
import "./Footer.css"

const Footer: FC = () =>
    <div data-aos="slide-down" data-aos-once="true">
        <button className="backToTop"><Link to="About" smooth={true} duration={1000} offset={-500} className="link">Back To Top <i className="fa-solid fa-up-long"></i></Link></button>
        <div className="footer">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/YanivWein24/"><i className="fa-brands fa-github"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yaniv-weinshtein/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:yanivwein22@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
    </div>

export default Footer