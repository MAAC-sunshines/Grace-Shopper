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
    return (
      <div>
        <h3>Order List</h3>
      </div>
    )
  }
}
