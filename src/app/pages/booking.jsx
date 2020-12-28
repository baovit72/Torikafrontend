/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormTextarea
} from "shards-react";

import DateTimePicker from "react-datetime-picker";

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
      <div>
        <header class="main_menu">
          <div class="main_menu_iner">
            <div class="container">
              <div class="row align-items-center ">
                <div class="col-lg-12">
                  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
                    <a class="navbar-brand" href="index.html">
                      {" "}
                      <img src={Config.LOGO_URL} width={70} alt="logo" />{" "}
                    </a>

                    <a href="#" class="btn_1 d-lg-block">
                      log in
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section class="banner_part">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-10">
                <div class="banner_text text-center">
                  <div class="banner_text_iner">
                    <h1> Torikatravel</h1>
                    <p>
                      Let’s start your journey with us, your dream will come
                      true
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="booking_part">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="booking_menu">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <i
                        class="nav-link"
                        id="place-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="place"
                        aria-selected="false"
                      >
                        destination
                      </i>
                    </li>
                    <li class="nav-item">
                      <i
                        class="nav-link"
                        id="place-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="place"
                        aria-selected="false"
                      >
                        start 
                      </i>
                    </li>
                    <li class="nav-item">
                      <i
                        class="nav-link"
                        id="place-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="place"
                        aria-selected="false"
                      >
                        end
                      </i>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="booking_content">
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade active show"
                      id="hotel"
                      role="tabpanel"
                      aria-labelledby="hotel-tab"
                    >
                      <div class="booking_form">
                        <Form>
                          <Row form>
                            <Col md="4" className="form-group">
                              <FormInput
                                innerRef={elem => (this.iName = elem)}
                                id="plName"
                                placeholder="Where you go ?"
                              />
                            </Col>{" "}
                            <Col md="4" className="form-group">
                              <DateTimePicker
                                disableClock
                                clearIcon={null}
                                minDate={new Date()}
                              />
                            </Col>{" "}
                            <Col md="4" className="form-group">
                              <DateTimePicker
                                disableClock
                                clearIcon={null}
                                minDate={new Date()}
                              />
                            </Col>{" "}
                            
                          </Row>
                        </Form>
                        <form action="#">
                          <div class="form-row">
                            <div class="form_btn">
                              <a href="#" class="btn_1">
                                search
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

    
  }
}
