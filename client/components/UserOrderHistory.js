import React, { Component } from 'react';
import OrderHistory from './OrderHistory';

export default class UserOrderHistory extends Component {
    componentDidMount() {
        this.props.loadUserOrders();
    }

    render() {
        console.log('userOrders', this.props.userOrders)
        return (
            <OrderHistory orders={this.props.userOrders} />
        )
    }
}
