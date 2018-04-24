import React, { Component } from 'react'
import axios from 'axios';
import Payment from './Payment';

class Order extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadCurrentOrder();

  }

  render() {
    const {allOrders = []} = this.props;
    return (
        <Grid>
        <h2>Singler ORDER</h2>

        {
            allOrders && allOrders.map(singleOrder => {
            return (
                <Row key={singleOrder.id}>
                <Link to={`/order-history/${user.id}`}>
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

    </Grid>
    )
}


export default Order;
