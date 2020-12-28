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

import PageTitle from "../../../components/common/PageTitle";
import NewModal from "./newmodal";
import EditModal from "./editmodal";
import RemoveModal from "./removemodal";

import Lib from "../../utils/lib";

import ViewModal from "./viewmodal";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cancelModal: false,
      viewModal: false
    };
  }

  openViewModal(item) {
    this.setState({ viewModal: true, currentItem: item });
  }

  closeViewModal() {
    this.setState({ viewModal: false });
  }

  openCancelModal() {
    this.setState({ newModal: true });
  }

  closeCancelModal() {
    this.setState({ newModal: false });
  }
  render() {
    return (
      <div>
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle
              sm="4"
              subtitle="YOUR TICKETS"
              className="text-sm-left"
            />
          </Row>

          {/* Default Light Table */}
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Active Tours</h6>
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
                          Status
                        </th>
                        <th scope="col" className="border-0">
                          Price
                        </th>
                        <th scope="col" className="border-0">
                          Origin
                        </th>
                        <th scope="col" className="border-0">
                          Destination
                        </th>
                        <th scope="col" className="border-0">
                          Start at
                        </th>
                        <th scope="col" className="border-0">
                          End at
                        </th>
                        <th scope="col" className="border-0"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.items
                        .filter(item => item.isActive)
                        .map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.status}</td>
                            <td>{Lib.formatCurrency(item.ticketPrice)}</td>
                            <td>
                              {Lib.renderFullPlace(item.trip.tour.startPlace)}{" "}
                            </td>
                            <td> {Lib.renderFullPlace(item.trip.tour.endPlace)} </td>
                            <td> {Lib.formatDate(item.trip.startDate)} </td>
                            <td> {Lib.formatDate(item.trip.endDate)} </td>
                            <td>
                              <Button
                                theme="primary"
                                className="mr-1"
                                onClick={() => this.openViewModal(item)}
                              >
                                TOUR DETAIL
                              </Button>
                              
                              <Button
                                onClick={() => this.openRemoveModal(item)}
                                theme="danger"
                                className="mr-1"
                              >
                                CANCEL
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
          <EditModal
            item={this.state.currentItem}
            places={this.props.places}
            cancel={this.closeEditModal.bind(this)}
          />
        ) : null}
        {this.state.removeModal ? (
          <RemoveModal
            item={this.state.currentItem}
            cancel={this.closeRemoveModal.bind(this)}
          />
        ) : null}
        {this.state.viewModal ? (
          <ViewModal
            places={this.props.places}
            item={this.state.currentItem}
            cancel={this.closeViewModal.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}
