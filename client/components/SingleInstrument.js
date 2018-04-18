import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

export default class SingleProduct extends Component {
    componentDidMount() {
        this.props.loadInstrument();
    }
    render() {
        const instrument = this.props.selectedInstrument;
        return (
            <div>
                <h2>{instrument.name}</h2>
                <Image src={instrument.imageUrl} rounded/>
                <h3>Price: ${instrument.cost}</h3>
                <h4>Category: {instrument.category}</h4>
                <h4>Description: </h4>
                <p>{instrument.description}</p>
                <Link to={`/instruments/${instrument.id}/edit`} >
                    <Button bsStyle="primary" bsSize="xsmall">Update Instrument Info</Button>
                </Link>
                <Button bsStyle="primary" bsSize="xsmall" onClick={
                    (event) => this.props.handleDelete(event, instrument.id)}>
                    Delete Instrument</Button>
            </div>
        )
    }
}
