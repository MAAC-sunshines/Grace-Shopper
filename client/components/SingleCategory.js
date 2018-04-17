import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleCategory extends Component {
  componentDidMount() {
      this.props.loadCategory();
  }

  render() {
    const {instruments = []} = this.props;
    return (
      <div>
        <h2>CATEGORIES</h2>
        <div>
          {
            instruments && instruments.map(singleInstrument => {
              return (
                  <div key = {singleInstrument.id}>
                  <h2>{singleInstrument.name}</h2>
                  <Link to={`/instruments/${singleInstrument.id}`}>
                  <img src={singleInstrument.imageUrl} />
                  </Link>
                  <h4>{singleInstrument.description}</h4>
                  <h6>${singleInstrument.cost}</h6>
                  </div>
                )
            })
          }
        </div>
      </div>
    )
  }
}
