import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class AllInstruments extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.loadAllInstruments();
  }

  onClickHandler() {
    //render the findOrCreate form from Alexa
  }

  render() {
    const allInstruments = this.props.allInstruments;
    return (
      <Grid className="all-categories-box">
        <div className="subheader">
          <h2>All Instruments</h2>
          <Button bsStyle="primary" bsSize="xsmall">ADD NEW INSTRUMENT</Button>
        </div>
        <Row className="row-mapping">
          {
            allInstruments && allInstruments.map(single => {
              return (
                <Col sm={3} key={single.id} className="category-box">
                <Link to={`/instruments/${single.id}`}>
                <Image src={single.imageUrl} rounded/>
                  <li>
                    <h2>{single.name}</h2>
                    <p>Price: ${single.cost}</p>
                  </li>
                  </Link>
              </Col>
              )
            })
          }
      </Row>
      </Grid>
    )
  }
}
