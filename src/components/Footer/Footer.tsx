import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <button className="backToTop" type="button">
        <Link
          to="Intro"
          smooth
          duration={3000}
          offset={-500}
          className="link"
          aria-label="Back To Top"
        >
          Back To Top
        </Link>
      </button>
      <div className="footer">
        <p className="contactInfo">Contact Info</p>
        <p className="phone">
          <a href="tel:+972-544-718-317">+972-544-718-317</a>
        </p>
        <p className="email">
          <a href="mailto:Yanivwein22@gmail.com">yanivwein22@gmail.com</a>
        </p>
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
        <p className="copyright">Ⓒ {year} Yaniv Weinshtein</p>
      </div>
    </div>
  );
}
export default Footer;
