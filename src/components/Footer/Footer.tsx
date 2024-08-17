import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  const topDetails = {
    phone: "+972-544-718-317",
    email: "Yanivwein22@gmail.com",
  } as const;

  const bottomLinks: {
    href: string;
    ariaLabel: string;
    icon: string;
  }[] = [
    {
      href: "https://github.com/YanivWein24/",
      ariaLabel: "My Github",
      icon: "fa-brands fa-github",
    },
    {
      href: "https://www.linkedin.com/in/yaniv-weinshtein/",
      ariaLabel: "My Linkedin",
      icon: "fa-brands fa-linkedin",
    },
    {
      href: "mailto:Yanivwein22@gmail.com",
      ariaLabel: "My Email",
      icon: "fa-solid fa-envelope",
    },
  ];

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
        {bottomLinks.map((link) => (
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
