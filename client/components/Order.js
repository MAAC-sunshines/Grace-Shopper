import React, { Component } from 'react'
import axios from 'axios';
import Payment from './Payment';

class Checkout extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadCurrentOrder();

  }

  render() {
    console.log('THIS IS PROPS', this.props)
    return (
      <div>
      <h2>Your Current Order: </h1>
      <Payment />
      </div>
    )}
}


export default Checkout;
