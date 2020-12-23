/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import NewModal from "./newplacemodal";
import EditModal from "./editplacemodal";
import RemoveModal from "./removeplacemodal";

export default class PlaceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newModal: false,
      editModal: false,
      removeModal: false,
      currentItem: null
    };
  }

  openEditModal() {
    this.setState({ editModal: true });
  }

  closeEditModal() {
    this.setState({ editModal: false });
  }

  openNewModal() {
    this.setState({ newModal: true });
  }

  closeNewModal() {
    this.setState({ newModal: false });
  }

  openRemoveModal(item) {
    this.setState({ removeModal: true, currentItem: item });
  }

  closeRemoveModal() {
    this.setState({ removeModal: false });
  }
  render() {
    return (
      <div>
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle
              sm="4"
              subtitle="PLACE MANAGEMENT"
              className="text-sm-left"
            />
          </Row>

          {/* Default Light Table */}
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Active Places</h6>
                  <Button
                    theme="primary"
                    className="mb-2 mt-2"
                    onClick={this.openNewModal.bind(this)}
                  >
                    NEW
                  </Button>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-0">
                          #
                        </th>
                        <th scope="col" className="border-0">
                          Name
                        </th>
                        <th scope="col" className="border-0">
                          Description
                        </th>
                        <th scope="col" className="border-0">
                          Notes
                        </th>
                        <th scope="col" className="border-0">
                          Belong to
                        </th>
                        <th scope="col" className="border-0">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.places
                        .filter(place => place.isActive)
                        .map((place, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{place.placeName}</td>
                            <td>{place.description}</td>
                            <td>{place.notes}</td>
                            <td>
                              {(place.parentPlace &&
                                place.parentPlace.placeName) ||
                                "None"}
                            </td>
                            <td>
                              <Button theme="secondary" className="mr-1">
                                EDIT
                              </Button>
                              <Button
                                onClick={() => this.openRemoveModal(place)}
                                theme="danger"
                                className="mr-1"
                              >
                                DELETE
                              </Button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.state.newModal ? (
          <NewModal
            cancel={this.closeNewModal.bind(this)}
            places={this.props.places}
          />
        ) : null}
        {this.state.editModal ? (
          <EditModal item={this.state.currentItem} />
        ) : null}
        {this.state.removeModal ? (
          <RemoveModal
            item={this.state.currentItem}
            cancel={this.closeRemoveModal.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}
