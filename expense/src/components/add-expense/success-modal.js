import React from "react";
import "./success-modal.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "10px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully</label>
        <img
          src={require("../../assets/images/added-image.png").default}
          alt="Expense Added Successfully"
          className="added-image"
        />
        <Link to="/">
          <div className="take-home-button">
            <i className="fi-rr-home"></i>
            Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
