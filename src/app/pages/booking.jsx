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

import Lib from "../utils/lib";
import Config from "../../config/index";
import { Store, Dispatcher, Constants } from "../../flux";

export default class BookingPage extends Component {
  constructor() {
    super();
    this.state = {
      trips: []
    };
    Dispatcher.dispatch({
      actionType: Constants.LIST_TRIPS
    });
  }
  componentWillMount() {
    Store.addChangeListener(this.onChange.bind(this));
  }
  componentWillUnmount() {
    Store.removeChangeListener(this.onChange.bind(this));
  }
  onChange() {
    console.log(Store.getTrips());
    this.setState({ tours: Store.getTours(), trips: Store.getTrips() });
  }
  render() {
    return (
      <div className="trip-booking">
        <div className="company-logo">
          <div style={{ backgroundImage: `url(${Config.LOGO_URL})` }} />
          <span>A More Rewarding Way To Travel</span>
        </div>
        <div className="trip-banner"></div>

        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle
              sm="4"
              subtitle="TRIP BOOKING"
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
                          Name
                        </th>
                        <th scope="col" className="border-0">
                          Type
                        </th>
                        <th scope="col" className="border-0">
                          Start at
                        </th>
                        <th scope="col" className="border-0">
                          End at
                        </th>
                        <th scope="col" className="border-0">
                          Price
                        </th>
                        <th scope="col" className="border-0">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.trips
                        .filter(item => item.isActive)
                        .map((item, index) => (
                          <tr key={index}>
                            <td> {index + 1} </td>
                            <td> {item.tripName} </td>
                            <td> {item.tripType} </td>
                            <td> {Lib.formatDate(item.startDate)} </td>
                            <td> {Lib.formatDate(item.endDate)} </td>
                            <td> {Lib.formatCurrency(item.price)} </td>
                            <td>
                              <Button
                                theme="primary"
                                className="mr-1"
                                onClick={() => this.openViewModal(item)}
                              >
                                BOOK NOW
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
      </div>
    );
  }
}
