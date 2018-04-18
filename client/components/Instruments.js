import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Instruments = ({ instruments = []}) => {
  return (
    <Grid className="all-categories-box">
      <Row className="row-mapping">
        {
          instruments.map(single => {
            return (
              <Col sm={3} key={single.id} className="category-box">
                <Link to={`/instruments/${single.id}`}>
                <Image src={single.imageUrl} rounded className="thumbnail-photo" />
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
};

export default Instruments;
