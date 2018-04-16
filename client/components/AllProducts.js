import React, { Component } from 'react';

export default class AllProducts extends Component {

  componentDidMount() {

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
