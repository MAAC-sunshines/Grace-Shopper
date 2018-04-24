import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from 'react-router-dom';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class OrderHistory extends Component {

  componentDidMount() {
      // this.props.loadAllOrders();
  }

  render () {
      const {allOrders = []} = this.props;
      return (
          <Grid>
          <h2>PREVIOUS ORDERS</h2>
          <Row>

          </Row>
      </Grid>
      )
  }
}


export default OrderHistory;
