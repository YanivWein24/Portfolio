import { Dispatch, MutableRefObject, SetStateAction, useRef } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Resume from "../../assets/Yaniv-Resume.pdf";
import "./PDFModal.css";

interface PDFModalProps {
  isPDFModalOpen: boolean;
  setIsPDFModalOpen: Dispatch<SetStateAction<boolean>>;
}

function PDFModal({
  isPDFModalOpen,
  setIsPDFModalOpen,
}: PDFModalProps): JSX.Element {
  const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const closeModal = () => setIsPDFModalOpen(false);

  const unsupportedDeviceText =
    "This PDF viewer is not available on mobile devices";

  return (
    <>
      <Backdrop isOpen={isPDFModalOpen} onClick={closeModal} />
      <div
        className={`modal-container ${!isPDFModalOpen && "closed"}`}
        ref={modalRef}
      >
        <button
          type="button"
          className="close-modal-button"
          onClick={closeModal}
        >
          <i className="fa-solid fa-close" />
        </button>
        <object data={Resume} type="application/pdf" width="100%" height="100%">
          <p className="unsupported-text">{unsupportedDeviceText}</p>
        </object>
      </div>
    </>
  );
}

export default PDFModal;
