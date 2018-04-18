import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Instruments from './Instruments';

export default class AllInstruments extends Component {
  state = { query: '' }

  componentDidMount() {
    this.props.loadAllInstruments();
  }

  handleChange = (event) => {
    this.setState ({
      query: event.target.value.toLocaleLowerCase()
    })
  }

  get instruments() {
    const {allInstruments=[]} = this.props
    return allInstruments
      .filter(instrument => instrument.name
        .toLocaleLowerCase()
        .indexOf(this.state.query) !== -1)
  }

  render() {
    return (
      <div className="subheader">
        <h2>All Instruments</h2>
        <input
          placeholder = "Enter instrument name"
          onChange={this.handleChange}
        />
        <Instruments instruments={this.instruments} />
        <Button bsStyle="primary" bsSize="xsmall">ADD NEW INSTRUMENT</Button>
      </div>
    )
  }
}

