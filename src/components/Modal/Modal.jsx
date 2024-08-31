import { useNavigate } from "react-router-dom";

function Modal({ onClose, children, portfolioType }) {
  const navigate = useNavigate();
  const handleCloseNavigation = () => {
    navigate(`/portfolio/${portfolioType}`);
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
