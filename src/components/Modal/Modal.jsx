import { useNavigate } from "react-router-dom";

function Modal({ children, workType }) {
  const navigate = useNavigate();
  // const handleCloseNavigation = () => {
  //   navigate(`/work/${workType}`);
  // };
  return (
    <>
      <div className="modalOverlay"></div>
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}

export default Modal;
