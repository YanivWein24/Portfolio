import { HeaderLinkProps } from "../types/HeaderLinkProps";

const HeaderLinks: HeaderLinkProps[] = [
  {
    id: 0,
    name: "About",
    icon: "fa-solid fa-address-card",
    offset: 20,
    duration: 1000,
  },
  {
    id: 1,
    name: "Skills",
    icon: "fa-solid fa-bars-progress",
    offset: -70,
  },
  {
    id: 2,
    name: "Projects",
    icon: "fa-solid fa-code",
    offset: -20,
  },
  {
    id: 3,
    name: "Contact",
    icon: "fa-solid fa-envelope",
    offset: -60,
  },
];

export default HeaderLinks;
