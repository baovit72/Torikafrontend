import React from "react";
import { Modal, ModalHeader, ModalBody } from "shards-react";

export default ({ title, content, close }) => {
  setTimeout(() => close(), 2000);
  return (
    <Modal size="sm" open={true} centered>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
    </Modal>
  );
};
