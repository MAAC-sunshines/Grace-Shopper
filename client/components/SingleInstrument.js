import React, { Component } from 'react';

export default class SingleProduct extends Component {
    constructor(props) {
        super(props);
    }
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
                <h4>Edit Shit</h4>
                <button>Delete Instrument</button>
            </div>
        )
    }
}