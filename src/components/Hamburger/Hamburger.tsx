import "./Hamburger.css";

interface HamburgerProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = ({ isActive, setIsActive }: HamburgerProps) => {
  return (
    <div
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
};

export default Hamburger;
