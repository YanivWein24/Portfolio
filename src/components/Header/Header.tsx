import React, { FC, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header: FC = () => {
  const smallScreen: boolean = window.innerWidth < 420;

  const [scroll, setScroll] = useState<boolean>(false);
  const [hoverAbout, setHoverAbout] = useState<boolean>(false);
  const [hoverSkills, setHoverSkills] = useState<boolean>(false);
  const [hoverProjects, setHoverProjects] = useState<boolean>(false);
  const [hoverContact, setHoverContact] = useState<boolean>(false);

  const changeBackground = () => {
    window.scrollY >= 66 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className="header"
      style={{
        backgroundColor: smallScreen
          ? "#000000e6"
          : scroll
          ? "#000000e6"
          : "transparent",
        borderBottom: smallScreen
          ? "5px solid #1c72ff"
          : scroll
          ? "5px solid #1c72ff"
          : "transparent",
      }}
    >
      <Navbar variant="dark" expand="lg" className="py-2 navbar">
        <Container>
          <Link to="About" smooth={true} duration={1000} offset={-500}>
            <Navbar.Brand>
              Yaniv <span>Weinshtein</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="me-auto ">
              {" "}
              {/*me-auto - to center */}
              <div
                className="linkContainer"
                style={{
                  borderRadius: smallScreen
                    ? "10px"
                    : scroll
                    ? "10px"
                    : "0 0 10px 10px",
                }}
                onMouseOver={() => setHoverAbout(true)}
                onMouseOut={() => setHoverAbout(false)}
              >
                <Link
                  to="About"
                  smooth={true}
                  duration={1000}
                  offset={-500}
                  className="link"
                  style={{
                    color:
                      smallScreen || hoverAbout
                        ? "#fff"
                        : scroll
                        ? "#ccc"
                        : "#fff",
                  }}
                >
                  <i className="fa-solid fa-address-card"></i> About
                </Link>
              </div>
              <div
                className="linkContainer"
                style={{
                  borderRadius: smallScreen
                    ? "10px"
                    : scroll
                    ? "10px"
                    : "0 0 10px 10px",
                }}
                onMouseOver={() => setHoverSkills(true)}
                onMouseOut={() => setHoverSkills(false)}
              >
                <Link
                  to="Skills"
                  smooth={true}
                  duration={750}
                  offset={-70}
                  className="link"
                  style={{
                    color:
                      smallScreen || hoverSkills
                        ? "#fff"
                        : scroll
                        ? "#ccc"
                        : "#fff",
                  }}
                >
                  <i className="fa-solid fa-bars-progress"></i> Skills
                </Link>
              </div>
              <div
                className="linkContainer"
                style={{
                  borderRadius: smallScreen
                    ? "10px"
                    : scroll
                    ? "10px"
                    : "0 0 10px 10px",
                }}
                onMouseOver={() => setHoverProjects(true)}
                onMouseOut={() => setHoverProjects(false)}
              >
                <Link
                  to="Projects"
                  smooth={true}
                  duration={750}
                  offset={-20}
                  className="link"
                  style={{
                    color:
                      smallScreen || hoverProjects
                        ? "#fff"
                        : scroll
                        ? "#ccc"
                        : "#fff",
                  }}
                >
                  <i className="fa-solid fa-code"></i> Projects
                </Link>
              </div>
              <div
                className="linkContainer"
                style={{
                  borderRadius: smallScreen
                    ? "10px"
                    : scroll
                    ? "10px"
                    : "0 0 10px 10px",
                }}
                onMouseOver={() => setHoverContact(true)}
                onMouseOut={() => setHoverContact(false)}
              >
                <Link
                  to="Contact"
                  smooth={true}
                  duration={750}
                  offset={-60}
                  className="link"
                  href="#Contact-me"
                  style={{
                    color:
                      smallScreen || hoverContact
                        ? "#fff"
                        : scroll
                        ? "#ccc"
                        : "#fff",
                  }}
                >
                  <i className="fa-solid fa-envelope"></i> Contact me
                </Link>
              </div>
              <div className="linkContainer resume">
                <a
                  className="link"
                  href={require("../../Yaniv-Resume.pdf")}
                  download="Yaniv-Resume.pdf"
                >
                  <i className="fa-solid fa-download"></i> Resume
                </a>
              </div>
            </Nav>
            <div className="socials">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/YanivWein24/"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/yaniv-weinshtein/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:yanivwein22@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
