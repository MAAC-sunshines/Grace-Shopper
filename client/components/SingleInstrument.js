import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SingleProduct extends Component {
    componentDidMount() {
        this.props.loadInstrument();
    }
    render() {
        const instrument = this.props.selectedInstrument;
        return (
            <div>
                <h2>{instrument.name}</h2>
                <img src={instrument.imageUrl} />
                <h3>Price: {instrument.cost}</h3>
                <h4>Category: {instrument.category}</h4>
                <h4>Description: </h4>
                <p>{instrument.description}</p>
                <Link to={`/instruments/${instrument.id}/update`} >
                    Update Instrument Info
                </Link>
                <button onClick={
                    (event) => this.props.handleDelete(event, instrument.id)}>
                    Delete Instrument</button>
            </div>
        )
    }
}
