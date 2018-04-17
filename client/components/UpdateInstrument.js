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
                <h2>Edit {instrument.name}</h2>
                <form onSubmit>
                    <h2>
                        <label>Instrument Name: </label>
                        <input type="text" name="name" placeholder={instrument.name} />
                    </h2>
                    <img src={instrument.imageUrl} />
                    <h3>
                        <label>Image url: </label>
                        <input type="text" name="imageUrl" placeholder={instrument.imageUrl} />
                    </h3>
                    <h3>
                        <label>Price: </label>
                        <input type="number" name="cost" placeholder={instrument.cost} />
                    </h3>
                    <h4>
                        <label>Category: </label>
                        <input type="text" name="category" placeholder={instrument.categoryId} />
                    </h4>
                    <h4>
                        <label>Description: </label>
                    </h4>
                    <p>
                        <textarea type="text" name="description" placeholder={instrument.description} />
                    </p>
                    <button onClick={
                        (event) => this.props.handleSubmit(event, instrument.id)}>
                        Update</button>
                </form>
            </div>
        )
    }
}
