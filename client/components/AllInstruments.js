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
        <h2>Instruments</h2>
        <ul>
          {
            allInstruments && allInstruments.map(single => {
              return <li key={single.id}>{single.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
