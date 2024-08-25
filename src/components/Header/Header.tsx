import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import { HeaderLinkProps } from "../../types/HeaderLinkProps";
import HeaderLinks from "../../data/HeaderLinks";
import socialLinks from "../../data/SocialLinks";
import Hamburger from "../Hamburger/Hamburger";
import Resume from "../../assets/Yaniv-Resume.pdf";
import "./Header.css";

// MARK: AbstractLink
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

// MARK: Header
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
            <Nav className="me-auto">
              {HeaderLinks.map((link) => (
                <AbstractLink
                  key={link.id}
                  {...link}
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
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                  aria-label={link.ariaLabel}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
