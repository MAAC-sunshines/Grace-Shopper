import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllInstruments extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.loadAllInstruments();
  }

  onClickHandler() {
    //render the findOrCreate form
  }

  render() {
    const allInstruments = this.props.allInstruments;
    return (
      <div>
        <h2>All Instruments</h2>
        <button>ADD NEW INSTRUMENT</button>
        <ul>
          {
            allInstruments && allInstruments.map(single => {
              return (
              <div key={single.id}>
                <Link to={`/instruments/${single.id}`}>
                  <li>{single.name}</li>
                  <img src={single.imageUrl} height="100" width="150"/>
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
