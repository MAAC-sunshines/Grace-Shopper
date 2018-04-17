import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleCategory extends Component {
  componentDidMount() {
      this.props.loadCategory();
  }

  render() {
    const {instruments = []} = this.props;
    const instrument = instruments[0];
    const category = instrument && instrument.categoryId;
    return (
      <div>
        <h2>CATEGORY</h2>
        <div>
          {
            instruments && instruments.map(singleInstrument => {
              return (
                  <div key = {singleInstrument.id}>
                  <h2>{singleInstrument.name}</h2>
                  <Link to={`/instruments/${singleInstrument.id}`}>
                  <img src={singleInstrument.imageUrl} />
                  <h6>***Case not included***</h6>
                  </Link>
                  <h4>{singleInstrument.description}</h4>
                  <h5>${singleInstrument.cost}</h5>
                  </div>
                )
            })
          }
        </div>
      </div>
    )
  }
}
