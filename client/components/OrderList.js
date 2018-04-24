import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class OrderList extends Component {
  componentDidMount() {
      this.props.loadOrderList();
  }

  render() {
    console.log(this.props.orderList);
    const orderList = this.props.orderList;
    return (
      orderList && orderList.map(order => {
        return (
          <div key={order.id} >
            <p>Status: {order.status}</p>
            <p>Date Created: {order.createdAt}</p>
            <p>Ordered By: {order.user.firstName} {order.user.lastName} | userId:{order.userId}</p>
          </div>
        )
      })
    )
  }
}
