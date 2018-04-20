import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from 'react-router-dom';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class OrderHistory extends Component {
componentDidMount() {
    this.props.loadAllOrders();
}

render() {
    const {allOrders = []} = this.props;
    return (
        <Grid>
        <h2>PREVIOUS ORDERS</h2>
        <Row>
        {
            allOrders && allOrders.map(singleOrder => {
            return (
                <Row key={singleOrder.id}>
                <Link to={`/order-history/${singleOrder.id}`}>
                    <Col sm={6}>
                    <h2>{singleOrder.purchaseDate}</h2>
                    </Col>
                    <Col sm={6}>
                      <h4>${singleOrder.totalCost}</h4>
                    </Col>
                </Link>
                </Row>
                )
            })
        }
        </Row>
    </Grid>
    )
}
}
