import React from 'react';
import { Button, Image } from 'react-bootstrap';

export default function AddInstrumentsForm(props){

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h2>
                    <label>Instrument Name: </label>
                    <input type="text" name="name" defaultValue="Name"/>
                </h2>
                <h3>
                    <label>Image url: </label>
                    <input type="text" name="imageUrl" defaultValue="https://campusinvolvement.umich.edu/files/campusinvolvement/field/image/Air-Guitar%20Extended.jpg"/>
                </h3>
                <h3>
                    <label>Price: $</label>
                    <input type="number" name="cost" defaultValue="0"/>
                </h3>
                <h4>
                    <label>Category: </label>
                    <input type="text" name="categoryId" defaultValue="Guitar"/>
                </h4>
                <h4>
                    <label>Description: </label>
                </h4>
                <p>
                    <textarea type="text" name="description" defaultValue="Awesome Description"/>
                </p>
                <Button type="submit" bsStyle="success">ADD</Button>
            </form>
            <Button onClick={props.cancelClick} bsStyle="danger">Cancel</Button>
        </div>
    )

}
