import React, { Component } from 'react';
import Payment from './Payment';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
  }

  handleEmailChange = (evt) => this.setState({ email: evt.target.value });
  handleFirstNameChange = (evt) => this.setState({ firstName: evt.target.value });
  handleLastNameChange = (evt) => this.setState({ lastName: evt.target.value });
  handleAddressChange = (evt) => this.setState({ address: evt.target.value });
  handleCityChange = (evt) => this.setState({ city: evt.target.value });
  handleStateChange = (evt) => this.setState({ state: evt.target.value });
  handleZipcodeChange = (evt) => this.setState({ zipcode: evt.target.value });



  render () {
    const { email, firstName, lastName, address, city, state, zipcode } = this.state;
    const isEnabled =
      email.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      address.length > 0 &&
      city.length > 0 &&
      state.length > 0 &&
      zipcode.length > 0

    const orders = this.props.currentOrder;
    let total = orders && orders.reduce((sum, item) => {
      item && (sum += item.totalPrice);
      return sum;
    }, 0);

    console.log('ENABLED????', isEnabled)
    const name = "AirPlay";
    const description = "Purchase"

    return (
      <div>
        <h2>Total To Be Charged: ${total}</h2>
        <form onSubmit={(event) => this.props.handleSubmit(event, this.props.user, total)}>
          <h5>Shipping Address</h5>
          <input type="text" name="email" placeholder="email" onChange={this.handleEmailChange}/>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleFirstNameChange}/>
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleLastNameChange}/>
          <input type="text" name="address" placeholder="Street" onChange={this.handleAddressChange}/>
          <input type="text" name="city" placeholder="City" onChange={this.handleCityChange}/>
          <input type="text" name="state" placeholder="State" onChange={this.handleStateChange}/>
          <input type="text" name="zipcode" placeholder="Zipcode" onChange={this.handleZipcodeChange}/>
          <div>
         <Payment name={name} description={description} amount={total} type="submit" disabled={!isEnabled}/>
        </div>
        </form>

      </div>
    )
  }
}

export default Checkout;
