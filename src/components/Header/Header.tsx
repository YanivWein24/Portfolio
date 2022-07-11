import React, { FC } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import "./Header.css"

const Header: FC = () => {
    return (
        <div className="header">
            <Navbar variant="dark" expand="lg" className="py-2 navbar" collapseOnSelect>
                <Container>
                    {/* <Navbar.Brand href="/">Yaniv Weinshtein</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="me-auto ">
                            <Nav.Link className="link" href="#About"><i className="fa-solid fa-address-card"></i> About</Nav.Link>
                            <Nav.Link className="link" href="#Skills"><i className="fa-solid fa-bars-progress"></i> Skills</Nav.Link>
                            <Nav.Link className="link" href="#Projects"><i className="fa-solid fa-code"></i> Projects</Nav.Link>
                            <Nav.Link className="link" href="#Contact-me"><i className="fa-solid fa-comments"></i> Contact me</Nav.Link>
                            <Nav.Link className="link" href="../Resume Template.pdf" download><i className="fa-solid fa-file"></i> Resume</Nav.Link>
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