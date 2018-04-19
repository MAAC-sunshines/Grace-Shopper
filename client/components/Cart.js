import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import CartContainer from '../containers/CartContainer';

export default class Cart extends Component {
  constructor(props){
    super(props);

    this.state = [

    ];
  }
  render(){
    console.log('PROPS', this.props)
    return (
      <Grid className="all-categories-box">
          <h2>Your Shopping Cart</h2>
            <Row className="row-mapping">
            {
              cartItems && cartItems.map(instrument => {
                return (
                  <Col md={3} key={instrument.id} className="category-box">
                      <Link to={`/instruments/${instrument.id}`}>
                        <Image src={instrument.imageUrl} rounded className="thumbnail-photo"/>
                        <li>
                          <h2>{instrument.name}</h2>
                          <p>Price: ${instrument.cost}</p>
                        </li>
                      </Link>
                  </Col>
                )
              })
            }
            </Row>
      </Grid>
    )

  }
}
