import "./Backdrop.css";

interface BackdropProps {
  isOpen: boolean;
  onClick: () => void;
}

function Backdrop({ isOpen, onClick }: BackdropProps) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={`backdrop ${!isOpen && "closed"}`} onClick={onClick} />
  );
}

export default Backdrop;
