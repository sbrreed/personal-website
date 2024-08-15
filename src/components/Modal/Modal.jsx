function Modal({ onClose, children }) {
  return (
    <>
      <div className="modalOverlay"></div>
      <div className="modal">
        <div className="modal-closeButton">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}

export default Modal;
