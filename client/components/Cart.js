import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Cart extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('STATE BE', this.props.cart[0])
    const cart = this.props.cart[0];
    let total = cart && cart.reduce((sum, item) => {
      item && (sum += item.totalPrice);
      return sum;
    }, 0);
    console.log('total', total);
    return (
      <Grid className="all-categories-box">
          <h2>Your Shopping Cart</h2>
            <Row className="row-mapping">
            {
              cart && cart.map(instrument => {
                return (
                  <Col md={3} key={instrument.instrumentId} className="category-box">
                     <Link to={`/instruments/${instrument.instrumentId}`}>
                        <Image src={instrument.instrument.imageUrl} rounded className="thumbnail-photo"/>
                      </Link>
                      <li>
                        <h3>{instrument.instrument.name}</h3>
                        <p>Unit Price: ${instrument.itemPrice}</p>
                        <p>Quantity: {instrument.quantity}</p>
                        <p>Total Price: ${instrument.totalPrice}</p>
                      </li>
                      <form>
                      <input
                        placeholder = "Enter quantity"
                        // add a handle change function that updates quantity in the cart on the backend
                      />
                      <button type='submit'>Submit</button>
                      </form>
                      <Button bsStyle="primary" bsSize="xsmall">
                          Remove From Cart
                          {/* add an onClick */}
                      </Button>
                  </Col>
                )
              })
            }
            </Row>
          <h3>Cart Total: ${total}</h3>
            {/* write a reducer */}
            <button OnClick={() => this.props.emptyCart()}className='btn clear-btn'>Clear Cart</button>
            <button className='btn checkout-btn'>Checkout</button>
      </Grid>
    )
}
}