import React, { useEffect, useRef } from "react";

function Modal({ children, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    // Function to detect click outside the modal
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose(); // Close the modal if the click is outside
      }
    }

    // Attach the event listener
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [onClose]);

  return (
    <div style={modalStyles.overlay}>
      <div ref={modalRef} style={modalStyles.modal}>
        {children}
      </div>
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    overFlow: "hidden",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    overFlow: "hidden",
  },
};

export default Modal;
