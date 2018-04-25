import React, { Component } from 'react';
import OrderHistory from './OrderHistory';

export default class OrderHistoryList extends Component {
    componentDidMount() {
        this.props.loadAllOrders();
    }

    render() {
        return (
            <OrderHistory orders={this.props.allOrders} />
        )
    }
}
