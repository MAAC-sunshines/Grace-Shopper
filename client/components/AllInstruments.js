import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

export default class AllInstruments extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.loadAllInstruments();
  }

  onClickHandler() {
    //render the findOrCreate form
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const allInstruments = this.props.allInstruments;
    let dirty = false;
    if (this.state.searchInput.length > 1) dirty = true
    const instruments = dirty && allInstruments.filter(instrument => instrument.name.match(this.state.inputValue))
    return (
      <div>
        <h2>All Instruments</h2>
        <h2>HIIIIII</h2>
        <form>
          <input
            placeholder = "Enter instrument name"
            onChange={this.handleChange}
          />
        </form>
        <button>ADD NEW INSTRUMENT</button>
        <ul>
          {
            instruments && instruments.map(single => {
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
          }
        </ul>
      </div>
    )
  }
}
