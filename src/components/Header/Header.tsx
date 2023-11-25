import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import { HeaderLinkProps } from "../../types/HeaderLinkProps";
import HeaderLinks from "../../data/HeaderLinks";
import Hamburger from "../Hamburger/Hamburger";
import Resume from "../../assets/Yaniv-Resume.pdf";
import "./Header.css";

function AbstractLink({
  name,
  icon,
  duration,
  offset,
  mobileSize,
  scroll,
}: HeaderLinkProps) {
  const [hoverLink, setHoverLink] = useState<boolean>(false);

  return (
    <div
      className="linkContainer"
      style={{
        borderRadius: mobileSize || scroll ? "10px" : "0 0 10px 10px",
      }}
      onMouseOver={() => setHoverLink(true)}
      onMouseOut={() => setHoverLink(false)}
    >
      <Link
        to={name}
        smooth
        duration={duration}
        offset={offset}
        className="link"
        style={{
          color: mobileSize || hoverLink ? "#fff" : scroll ? "#ccc" : "#fff",
        }}
      >
        <i className={icon} /> {name}
      </Link>
    </div>
  );
}

function Header() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { mobileSize } = useWindowSize();

  const changeBackground = () => {
    window.scrollY >= 66 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      className="header"
      style={{
        backgroundColor:
          mobileSize || (!mobileSize && scroll) ? "#000000d4" : "transparent",
        borderBottom:
          mobileSize || (!mobileSize && scroll)
            ? "5px solid #1c72ff"
            : "transparent",
        padding: mobileSize || (!mobileSize && scroll) ? "10px" : "0",
      }}
    >
      <Navbar variant="dark" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Yaniv <span>Weinshtein</span>
          </Navbar.Brand>

          <Navbar.Toggle>
            <Hamburger isActive={isActive} setIsActive={setIsActive} />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="me-auto ">
              {HeaderLinks.map((link) => (
                <AbstractLink
                  key={link.id}
                  id={link.id}
                  name={link.name}
                  icon={link.icon}
                  offset={link.offset}
                  duration={link.duration || 750}
                  mobileSize={mobileSize}
                  scroll={scroll}
                />
              ))}
              <div
                className="linkContainer resume"
                style={{
                  borderRadius: mobileSize
                    ? "10px"
                    : scroll
                      ? "10px"
                      : "0 0 10px 10px",
                }}
              >
                <a className="link" href={Resume} download="Yaniv-Resume.pdf">
                  <i className="fa-solid fa-download" /> Resume
                </a>
              </div>
            </Nav>
            <div className="socials">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/YanivWein24/"
                aria-label="My Github"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/yaniv-weinshtein/"
                aria-label="My Linkedin"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="mailto:yanivwein22@gmail.com" aria-label="Email Me">
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
