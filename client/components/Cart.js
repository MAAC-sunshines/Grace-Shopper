import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCart();
    this.props.loadInstruments();
  }

  render() {
    const { user } = this.props;
    const cart = this.props.cart;
    const instruments = this.props.instruments;
    console.log('instruments', instruments);
    //DONT FORGET TO DO TOTAL PRICES
    return (
      <Grid className="all-categories-box">
        <h2>Your Shopping Cart</h2>
        <Row className="row-mapping">
          {
            cart && cart.map(lineOrder => {
              const instrumentInfo = instruments.filter(instrument => instrument.id === lineOrder.instrumentId);
              console.log('instrument info', instrumentInfo);
              return (
                <Col md={3} key={lineOrder.instrumentId} className="category-box">
                  <Link to={`/instruments/${lineOrder.instrumentId}`}>
                    <Image src={instrumentInfo[0] && instrumentInfo[0].imageUrl} rounded className="thumbnail-photo" />
                  </Link>
                  <li>
                    <h3>{instrumentInfo.name}</h3>
                    <p>Unit Price: ${instrumentInfo[0] && instrumentInfo[0].cost}</p>
                    <p>Quantity: {lineOrder.quantity}</p>
                  </li>
                  <form>
                    <input
                      placeholder="Enter quantity"
                    // add a handle change function that updates quantity in the cart on the backend
                    />
                    <button type="submit">Submit</button>
                  </form>
                  <Button bsStyle="primary" bsSize="xsmall" onClick={(event) => this.props.deleteCartItem(event, user, lineOrder.instrumentId)}>
                    Remove From Cart
                          {/* add an onClick */}
                  </Button>
                </Col>
              )
            })
          }
        </Row>
        <h3>Cart Total: </h3>
        <button onClick={(event) => this.props.deleteCart(event, user)} className="btn clear-btn">Clear Cart</button>
        <Link to="/checkout"> <h3>Checkout</h3></Link>

      </Grid>
    )
  }
}
