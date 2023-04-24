import React from "react";
import { Modal } from "react-bootstrap";

const Model = ({ children, title, show, funk }) => {
  return (
    <>
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <button onClick={(f) => funk(false)} className="btn-close"></button>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default Model;
