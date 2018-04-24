import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Image, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class OrderHistory extends Component {

  componentDidMount() {
    this.props.loadAllOrders();
  }

  render() {
    const orders = this.props.allOrders;
    console.log('ORDERSSSSERERERER', orders)
    return (
      <Grid className="all-categories-box">
        <div>
          {
            <div className="users-list">
              <h2>Your Order</h2>
              <ListGroup>
                {
                  orders && orders.map(order => {

                    return (
                      <div key={order.id} className="user-list">
                        <ListGroupItem
                          header={`Order#${order.id}`}
                          href={`/order-history/${order.id}`}>
                          {order.address} {order.city}, {order.state} {order.zipcode}
                          <div>
                            Order Total: ${order.orderTotal}
                          </div>
                          <div>
                            Status: {order.status}
                          </div>
                        </ListGroupItem>
                      </div>
                    )
                  })
                }
              </ListGroup>
            </div>
          }
        </div>
      </Grid>
    )
  }
}



