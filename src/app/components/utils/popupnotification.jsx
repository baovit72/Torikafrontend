import React from "react";
import { Modal, ModalHeader, ModalBody } from "shards-react";

export default ({ title, content, close, callback }) => {
  setTimeout(() => {
    close();
    callback && callback();
  }, 2000);
  return (
    <Modal size="md" open={true} centered>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
    </Modal>
  );
};
