import "./Hamburger.css";

interface HamburgerProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Hamburger({ isActive, setIsActive }: HamburgerProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`hamburger hamburger--collapse ${isActive && "is-active"}`}
      onClick={() =>
        isActive === false ? setIsActive(true) : setIsActive(false)
      }
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  );
}

export default Hamburger;
