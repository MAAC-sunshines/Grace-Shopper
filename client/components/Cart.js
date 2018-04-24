import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import CheckoutContainer from '../containers/CheckoutContainer';

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
    let total = 0;

    return (
      <Grid className="all-categories-box">
        {
          !cart.length
            ?
            (<h2>Your Shopping Cart is Empty</h2>)
            :
            (<h2>Your Shopping Cart</h2>)
        }
        <Row className="row-mapping">
          {
            cart && cart.map(lineOrder => {
              const instrumentInfo = instruments.filter(instrument => instrument.id === lineOrder.instrumentId);

              total += instrumentInfo[0] && instrumentInfo[0].cost * lineOrder.quantity

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
                  <form onSubmit={(event) => this.props.handleSubmit(event, lineOrder.instrumentId)}>
                    <input
                      placeholder="Enter quantity" name="quantity"
                    />
                    <button type="submit">Submit</button>
                  </form>
                  <Button bsStyle="danger" bsSize="xsmall" onClick={(event) => this.props.deleteCartItem(event, user, lineOrder.instrumentId)}>Remove From Cart</Button>
                </Col>
              )
            })
          }
        </Row>
        {
          !cart.length
            ?
            (null)
            :
            (
              <div>
                <Button bsStyle="danger" bsSize="xsmall" onClick={(event) => this.props.deleteCart(event, user)} className="btn clear-btn">Clear Cart</Button>
                <h3>Cart Total: ${total}</h3>
                <Link to="/checkout">
                  <Button bsStyle="success" bsSize="xsmall">
                    <h3>Checkout</h3>
                  </Button>
                </Link>
              </div>
            )
        }
      </Grid>
    )
  }
}
