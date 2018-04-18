import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import UpdateInstrument from './UpdateInstrument';
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
        this.props.loadAllCategories();
    }
    showForm(){
        this.setState({
            showForm: true
        })
    }
    render() {
        const instrument = this.props.selectedInstrument;
        const categoryId = instrument.categoryId;
        const categories = this.props.allCategories;
        const categoryName = categories && categories[categoryId].name;
        return (
            <div>
                <h2>{instrument.name}</h2>
                <Image src={instrument.imageUrl} rounded />
                <h3>Price: ${instrument.cost}</h3>
                <h4>Category: {categoryName}</h4>
                <h4>Description: </h4>
                <p>{instrument.description}</p>
                <Button bsStyle="primary" bsSize="xsmall" onClick={
                    (event) => this.props.handleDelete(event, instrument.id)}>
                    Delete Instrument</Button>
                <Button bsStyle="primary" bsSize="xsmall" onClick={this.showForm}>Edit Instrument</Button>
                <div>
                {
                    this.state.showForm && <UpdateInstrument selectedInstrument={instrument} handleSubmit={this.props.handleSubmit.bind(this, instrument)} />
                }
                </div>
            </div>
        )
    }
}
