import React, { Component } from 'react';
import UpdateInstrument from '../components/UpdateInstrument';

export default class SingleProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            showForm: false
        };
        this.showForm = this.showForm.bind(this);
    }
    componentDidMount() {
        this.props.loadInstrument();
    }
    showForm(){
        this.setState({
            showForm: true
        })
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
                <button onClick={
                    (event) => this.props.handleDelete(event, instrument.id)}>
                    Delete Instrument</button>
                <button onClick={this.showForm}>Edit Instrument</button>
                <div>
                {
                    this.state.showForm && <UpdateInstrument selectedInstrument={instrument} handleSubmit={this.props.handleSubmit.bind(this, instrument)} />
                }
                </div>
            </div>
        )
    }
}
