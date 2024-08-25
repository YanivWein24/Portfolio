import { Link } from "react-scroll";
import socialLinks from "../../data/SocialLinks";
import "./Footer.css";

function Footer() {
  const topDetails = {
    phone: "+972-544-718-317",
    email: "Yanivwein22@gmail.com",
  } as const;

  const year = new Date().getFullYear();

  return (
    <div>
      <Link
        to="Intro"
        smooth
        duration={3000}
        offset={-500}
        className="link"
        aria-label="Back To Top"
      >
        <button className="backToTop" type="button">
          Back To Top
        </button>
      </Link>
      <div className="footer">
        <p className="contactInfo">Contact Info</p>
        {Object.values(topDetails).map((detail, index) => (
          <p key={detail} className={index ? "email" : "phone"}>
            <a href={`${index ? "mailto" : "tel"}:${detail}`}>{detail}</a>
          </p>
        ))}
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
        <p className="copyright">Ⓒ {year} Yaniv Weinshtein</p>
      </div>
    </div>
  );
}
export default Footer;
