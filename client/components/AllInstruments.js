import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

export default class AllInstruments extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.loadAllInstruments();
  }

  onClickHandler() {
    //render the findOrCreate form from Alexa
  }

  render() {
    const allInstruments = this.props.allInstruments;
    return (
      <div>
        <h2>All Instruments</h2>
        <Button bsStyle="primary" bsSize="xsmall">ADD NEW INSTRUMENT</Button>
        <ul>
          {
            allInstruments && allInstruments.map(single => {
              return (
              <div key={single.id}>
                <Link to={`/instruments/${single.id}`}>
                  <li>
                    <h3>{single.name}</h3>
                    <p>Price: ${single.cost}</p>
                    <Image src={single.imageUrl} rounded/>
                  </li>
                </Link>
              </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
