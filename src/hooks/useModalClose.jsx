import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useModalClose(modalIsOpen, closeModal, modalRef, workType) {
  const navigate = useNavigate();
  const handleCloseNavigation = () => {
    navigate(`/work/${workType}`);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && event.target.classList.contains("modalOverlay")) {
        handleCloseNavigation();
        closeModal();
      }
    }

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        handleCloseNavigation();
        closeModal();
      }
    }

    if (modalIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [modalIsOpen, closeModal, modalRef]);
}

export default useModalClose;
