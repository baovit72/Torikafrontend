import React, { Component } from "react";
import Table from "../components/ticket/clienttable";

import { Store, Dispatcher, Constants } from "../../flux";
export default class YourTickets extends Component {
    constructor() {
        super();
        this.state = {
            tickets: []
        };
        Dispatcher.dispatch({
            actionType: Constants.LIST_TICKETS
        });
    }
    componentWillMount() {
        Store.addChangeListener(this.onChange.bind(this));
    }
    componentWillUnmount() {
        Store.removeChangeListener(this.onChange.bind(this));
    }

    onChange() {
        console.log(Store.getTickets());
        this.setState({ tickets: Store.getTickets() });
    }
    render() {
        return (
            <div>
                <Table items={this.state.tickets} />{" "}
            </div>
        );
    }
}
