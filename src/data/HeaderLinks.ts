import { HeaderLinkProps } from "../types/HeaderLinkProps";

const HeaderLinks: HeaderLinkProps[] = [
  {
    name: "About",
    icon: "fa-solid fa-address-card",
    offset: window.innerWidth < 1200 ? 420 : 550,
    duration: 1000,
  },
  {
    name: "Skills",
    icon: "fa-solid fa-bars-progress",
    offset: -70,
  },
  {
    name: "Projects",
    icon: "fa-solid fa-code",
    offset: -20,
  },
  {
    name: "Contact",
    icon: "fa-solid fa-envelope",
    offset: -60,
  },
];

export default HeaderLinks;
