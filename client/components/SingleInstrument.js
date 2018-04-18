import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class SingleProduct extends Component {
    componentDidMount() {
        this.props.loadInstrument();
    }
    render() {
        const instrument = this.props.selectedInstrument;
        return (
          <Grid className="single-product-box">
              <Row>
                <Col md={1}>
                </Col>
                <Col md={6}>
                  <div className="single-product-img-box">
                    <h2>{instrument.name}</h2>
                    <Image src={instrument.imageUrl} className="single-product-img"/>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="single-product-description">
                    <h3>Price: ${instrument.cost}</h3>
                    <h4>Category: {instrument.category}</h4>
                    <h4>Description: </h4>
                    <p>{instrument.description}</p>

                    <Grid className="single-product-btns">
                      <Row>

                        <Col sm={5}>
                          <Link to={`/instruments/${instrument.id}/edit`} >
                              <Button bsStyle="primary" bsSize="xsmall">Update Instrument Info</Button>
                          </Link>
                        </Col>
                        <Col sm={2}>
                        </Col>
                        <Col sm={5}>
                          <Button bsStyle="primary" bsSize="xsmall" onClick={
                              (event) => this.props.handleDelete(event, instrument.id)}>
                              Delete Instrument
                          </Button>

                        </Col>
                      </Row>
                    </Grid>
                  </div>
                </Col>
                <Col md={1}>
                </Col>
              </Row>
          </Grid>
        )
    }
}
