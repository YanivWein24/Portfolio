import { Link } from "react-scroll";
import MouseSVG from "../../../assets/media/mouse.svg";
import "./ScrollDownCTA.css";

// ? This component is used in Intro.tsx and should be rendered on large screens only
const ScrollDownCTA = () => (
  <Link
    to="About"
    smooth
    duration={1000}
    offset={35}
    className="scrollDownLink"
  >
    <div className="scrollDownContainer">
      <img src={MouseSVG} alt="Mouse" className="mouseSVG" />
      <i className="fa-solid fa-chevron-down bounce" />
      <p className="scrollDownText">
        Scroll Down <br /> To See More
      </p>
    </div>
  </Link>
);

export default ScrollDownCTA;
