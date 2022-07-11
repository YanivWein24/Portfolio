import React, { FC } from 'react'
import { Link } from 'react-scroll'
import { Navbar, Nav, Container } from 'react-bootstrap'
import "./Header.css"

const Header: FC = () => {
    return (
        <div className="header" >
            <Navbar variant="dark" expand="lg" className="py-2 navbar" collapseOnSelect>
                <Container>
                    {/* <Navbar.Brand href="/">Yaniv Weinshtein</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="me-auto ">
                            <Nav.Link><Link to="About" smooth={true} duration={750} offset={-500} className="link"><i className="fa-solid fa-address-card"></i> About</Link></Nav.Link>
                            <Nav.Link><Link to="Skills" smooth={true} duration={750} offset={-70} className="link"><i className="fa-solid fa-bars-progress"></i> Skills</Link></Nav.Link>
                            <Nav.Link><Link to="Projects" smooth={true} duration={500} className="link"><i className="fa-solid fa-code"></i> Projects</Link></Nav.Link>
                            <Nav.Link><Link to="Skills" smooth={true} duration={500} className="link" href="#Contact-me"><i className="fa-solid fa-comments"></i> Contact me</Link></Nav.Link>
                            <Nav.Link><a className="link" href="../../Resume Template.pdf" download><i className="fa-solid fa-file"></i> Resume</a></Nav.Link>
                        </Nav>
                        <div className="socials">
                            <a href="https://github.com/YanivWein24/"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/yaniv-weinshtein/"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="mailto:yanivwein22@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header