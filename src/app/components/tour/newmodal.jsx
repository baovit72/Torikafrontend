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

import PopupNotification from "../utils/popupnotification";
import APIHelper from "../../utils/apihelper.js";
import { Store, Dispatcher, Constants } from "../../../flux";

export default class NewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      resultContent: {}
    };
  }
  save() {
    const name = this.iName.value;
    const desc = this.iDesc.value;
    const notes = this.iNotes.value;
    const start = this.iStart.value;
    const end = this.iEnd.value;
    const type = this.iType.value;
    const duration = this.iDuration.value;
    if (name && name.length >= 0 && start !== end && duration > 0) {
      const data = {
        tourName: name,
        description: desc,
        notes: notes,
        tourType: type,
        tourDuration: duration,
        startPlaceId: start,
        endPlaceId: end
      };
      APIHelper.post(window.API_DOMAIN + "/api/tours", data)
        .then(resp => {
          if (!resp.errors) {
            this.setState(
              {
                showResult: true,
                resultContent: {
                  title: "Success",
                  content: "You have successfully created a new tour !",
                  closeTop: this.props.cancel
                }
              },
              () => {
                Dispatcher.dispatch({
                  actionType: Constants.LIST_TOURS
                });
              }
            );
          } else {
            this.setState({
              showResult: true,
              resultContent: {
                title: "Failure",
                content: "An error has occurred, please try again !"
              }
            });
          }
        })
        .catch(e => {
          console.log(e);
          this.setState({
            showResult: true,
            resultContent: {
              title: "Failed",
              content: "Please check your network and try again !"
            }
          });
        });
    } else {
      this.setState({
        showResult: true,
        resultContent: {
          title: "Failed",
          content: "Please check your input and try again !"
        }
      });
    }
  }
  render() {
    const { cancel, places } = this.props;
    return (
      <div>
        {" "}
        <Modal open={true} centered>
          <ModalHeader>NEW TOUR</ModalHeader>
          <ModalBody>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="tName">Name</label>
                          <FormInput
                            innerRef={elem => (this.iName = elem)}
                            id="tName"
                            placeholder="Name"
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="tType">Type</label>
                          <FormSelect
                            innerRef={elem => (this.iType = elem)}
                            id="tType"
                          >
                            {["Internatonal", "Domestic"].map((type, index) => (
                              <option key={index} value={type}>
                                {type}
                              </option>
                            ))}
                          </FormSelect>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="tDuration">Duration (hour)</label>
                          <FormInput
                            defaultValue={0}
                            innerRef={elem => (this.iDuration = elem)}
                            id="tDuration"
                            type="number"
                            placeholder="Duration"
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="tStart">Start from</label>
                          <FormSelect
                            innerRef={elem => (this.iStart = elem)}
                            id="tStart"
                          >
                            {places.map((place, index) => (
                              <option key={index} value={place.placeId}>
                                {place.placeName}
                              </option>
                            ))}
                          </FormSelect>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="tEnd">End in</label>
                          <FormSelect
                            innerRef={elem => (this.iEnd = elem)}
                            id="tEnd"
                          >
                            {places.map((place, index) => (
                              <option key={index} value={place.placeId}>
                                {place.placeName}
                              </option>
                            ))}
                          </FormSelect>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label htmlFor="tDescription">Description</label>
                        <FormTextarea
                          innerRef={elem => (this.iDesc = elem)}
                          size="lg"
                          id="tDescription"
                          placeholder="Description"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="tNotes">Notes</label>
                        <FormTextarea
                          innerRef={elem => (this.iNotes = elem)}
                          size="lg"
                          id="tNotes"
                          placeholder="Notes"
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button theme="primary" onClick={this.save.bind(this)}>
              SAVE
            </Button>
            <Button theme="white" onClick={cancel}>
              CANCEL
            </Button>
          </ModalFooter>
        </Modal>
        {this.state.showResult && (
          <PopupNotification
            title={this.state.resultContent.title}
            content={this.state.resultContent.content}
            close={() =>
              this.setState({ showResult: false }, () => {
                this.state.resultContent.closeTop &&
                  this.state.resultContent.closeTop();
              })
            }
          />
        )}
      </div>
    );
  }
}
