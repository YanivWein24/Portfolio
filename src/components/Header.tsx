import React, { FC } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const Header: FC = () => {
    return (
        <Navbar variant="dark" expand="lg" className="py-2 navbar" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">Yaniv Weinshtein</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto ">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Resume</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header