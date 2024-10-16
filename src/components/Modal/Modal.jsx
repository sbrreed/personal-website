import { useNavigate } from "react-router-dom";

function Modal({ onClose, children, workType }) {
  const navigate = useNavigate();
  const handleCloseNavigation = () => {
    navigate(`/work/${workType}`);
  };
  return (
    <>
      <div className="modalOverlay"></div>
      <div className="modal">
        <div className="modal-closeButton">
          <span
            className="close"
            onClick={() => {
              handleCloseNavigation();
              onClose();
            }}
          >
            &times;
          </span>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}

export default Modal;
