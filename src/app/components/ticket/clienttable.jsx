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

import CancelModal from "./cancelmodal";

import PageTitle from "../../../components/common/PageTitle";

import Lib from "../../utils/lib";

// import ViewModal from "./viewmodal";
import QRCode from "react-qr-code";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cancelModal: false,
      viewModal: false,
      currentItem: {}
    };
    this.closeCancelModal = this.closeCancelModal.bind(this);
    this.openCancelModal = this.openCancelModal.bind(this);
  }

  openCancelModal(item) {
    this.setState({ cancelModal: true, currentItem: item });
  }

  closeCancelModal() {
    this.setState({ cancelModal: false });
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
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-0">
                          #
                        </th>
                        <th scope="col" className="border-0">
                          Code
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
                            <td>
                              <QRCode size={64} value={item.ticketId} />
                            </td>
                            <td>{item.status}</td>
                            <td>{Lib.formatCurrency(item.ticketPrice)}</td>
                            <td>
                              {Lib.renderFullPlace(item.trip.tour.startPlace)}{" "}
                            </td>
                            <td>
                              {" "}
                              {Lib.renderFullPlace(
                                item.trip.tour.endPlace
                              )}{" "}
                            </td>
                            <td> {Lib.formatDate(item.trip.startDate)} </td>
                            <td> {Lib.formatDate(item.trip.endDate)} </td>
                            <td>
                              <Button
                                theme="danger"
                                disabled={item.status==="CANCELED"}
                                onClick={() => this.openCancelModal(item)}
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

        {this.state.cancelModal ? (
          <CancelModal
            item={this.state.currentItem}
            cancel={this.closeCancelModal.bind(this)}
          />
        ) : null}
        {/* {this.state.viewModal ? (
          <ViewModal
            places={this.props.places}
            item={this.state.currentItem}
            cancel={this.closeViewModal.bind(this)}
          />
        ) : null} */}
      </div>
    );
  }
}
