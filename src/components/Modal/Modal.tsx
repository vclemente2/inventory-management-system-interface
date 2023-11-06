import { Button, Typography } from "@mui/material";
import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000
  },
  content: {
    display: "flex",
    "flex-direction": "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "fit-content",
    height: "200px",
    background: "white",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

interface MyModalProps {
  isOpen: boolean;
  children: string;
  closeModal?: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, children, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <Typography typography="h4">{children}</Typography>
      <Button variant="contained" onClick={closeModal}>
        Ok
      </Button>
    </Modal>
  );
};

export default MyModal;
