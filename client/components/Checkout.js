import React, { Component } from 'react';
import Payment from './Payment';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

class Checkout extends Component {

  render () {
    const orders = this.props.currentOrder;
    let total = orders && orders.reduce((sum, item) => {
      item && (sum += item.totalPrice);
      return sum;
    }, 0);

    const name = "AirPlay";
    const description = "Purchase"

    return (
      <div>
        <h2>Total To Be Charged: ${total}</h2>
        <form onSubmit={(event) => this.props.handleSubmit(event)}>
          <h5>Shipping Address</h5>
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="text" name="address" placeholder="Street" />
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="state" placeholder="State" />
          <input type="text" name="zipcode" placeholder="Zipcode" />
        <Button bsStyle="success" type="submit">Procceed to Payment</Button>
        </form>
        <Payment name={name} description={description} amount={total}/>
      </div>
    )
  }
}

export default Checkout;
