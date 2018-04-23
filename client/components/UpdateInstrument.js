import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default function UpdateInstrument(props) {
    const instrument = props.selectedInstrument;
    const isAdmin = props.isAdmin;
    return (
        <Grid>
            <form onSubmit={props.handleSubmit}>
                <Row>
                    <Col md={8}>
                        <h2>
                            <input type="text" name="name" defaultValue={instrument.name} />
                        </h2>
                        <Image src={instrument.imageUrl} className="single-product-img" />
                        <h4>
                            <label>Image url: </label>
                            <input type="text" name="imageUrl" defaultValue={instrument.imageUrl} />
                        </h4>
                    </Col>
                    <Col md={4}>
                        <h3>
                            <label>Price: $</label>
                            <input type="number" name="cost" defaultValue={instrument.cost} />
                        </h3>
                        <h4>
                            <label>Category: </label>
                            <input type="text" name="categoryId" defaultValue={props.category} />
                        </h4>
                        <h4>
                            <label>Description: </label>
                        </h4>
                        <p>
                            <textarea type="text" name="description" defaultValue={instrument.description} />
                        </p>
                        {
                            isAdmin &&
                            <div>
                                <Button bsStyle="success" bsSize="xsmall" type="submit">Update</Button>
                                <Button bsStyle="danger" bsSize="xsmall" onClick={props.showForm} >Cancel</Button>
                                <div clsasName="edit-delete">
                                    <Button
                                        bsStyle="danger" bsSize="xsmall" onClick={
                                            (event) => props.handleDelete(event, instrument.id)}>Delete Instrument</Button>
                                </div>
                            </div>
                        }
                    </Col>
                </Row>
            </form>
        </Grid>
    )

}
