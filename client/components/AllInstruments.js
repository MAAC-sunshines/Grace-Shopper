import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllInstruments extends Component {

  componentDidMount() {
    this.props.loadAllInstruments();
  }

  render() {
    const allInstruments = this.props.allInstruments;
    return (
      <div>
        <h2>All Instruments</h2>
        <ul>
          {
            allInstruments && allInstruments.map(single => {
              return (
              <div key={single.id}>
                <Link to={`/instruments/${single.id}`}>
                  <li>{single.name}</li>
                  <img src={single.imageURL} height="100" width="150"/>
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
