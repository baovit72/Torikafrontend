import React, { Component } from "react";

import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormCheckbox,
  Button,
  FormTextarea
} from "shards-react";

export default props => {
    
  const {save, cancel, item} = props;
  return (
    <Modal open={true} centered>
      <ModalHeader>REMOVE PLACE</ModalHeader>
      <ModalBody>
         Do you want to remove place {item.placeName} ?
      </ModalBody>
      <ModalFooter>
        <Button theme="danger" onClick={save}>
          DELETE
        </Button>
        <Button theme="white" onClick={cancel}>
          CANCEL
        </Button>
      </ModalFooter>
    </Modal>
  );
};
