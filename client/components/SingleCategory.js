import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class SingleCategory extends Component {
  componentDidMount() {
      this.props.loadCategory();
  }

  render() {
    const {instruments = []} = this.props;
    const instrument = instruments[0];
    const category = instrument && instrument.categoryId;
    return (
      <Grid className="single-product-box">
        <h2>CATEGORY</h2>
        <Row>
          {
            instruments && instruments.map(singleInstrument => {
              return (
                <Grid>
                  <Row>
                    <Col sm={6} key={singleInstrument.id}>
                      <h2>{singleInstrument.name}</h2>
                      <Link to={`/instruments/${singleInstrument.id}`}>
                          <img src={singleInstrument.imageUrl} className="single-product-img"/>
                      </Link>
                      <h6>***Case not included***</h6>
                    </Col>

                    <Col sm={6}>

                      <h4>{singleInstrument.description}</h4>
                      <h5>${singleInstrument.cost}</h5>
                  </Col>
                </Row>
               </Grid>
                )
            })
          }
       </Row>
     </Grid>
    )
  }
}
