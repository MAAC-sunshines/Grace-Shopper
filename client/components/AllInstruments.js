import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllInstruments extends Component {
  state = { query: '' }

  componentDidMount() {
    this.props.loadAllInstruments();
  }

  handleChange = (event) => {
    this.setState({
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
      <div>
        <h2>All Instruments</h2>
        <input
          placeholder = "Enter instrument name"
          onChange={this.handleChange}
        />
        <button>ADD NEW INSTRUMENT</button>
        <Instruments instruments={this.instruments} />
      </div>
    )
  }
}

const Instruments = ({instruments=[]}) =>
  <ul>{
    instruments.map(single => {
      return (
      <div key={single.id}>
        <Link to={`/instruments/${single.id}`}>
          <li>{single.name}
            <p>Price: ${single.cost}</p>
            <img src={single.imageUrl} height="100" width="150"/>
          </li>
        </Link>
      </div>
      )
    })
  }</ul>