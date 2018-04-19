import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class AllCategories extends Component {
  componentDidMount() {
    this.props.loadAllCategories();
  }
  render() {
    const allCategories = this.props.allCategories;
    return (
      <Grid className="all-categories-box">
        <h2>Categories</h2>

        <Row className="row-mapping">
          {
            allCategories && allCategories.map(category => {
              return (
                <Col md={3} key={category.id} className="category-box">
                  <Link to={`/categories/${category.id}`}>
                    <Image src={category.imageUrl} className="thumbnail-photo" />
                    <h2>{category.name}</h2>
                  </Link>
                  <div className="category-description">{category.description}</div>
                </Col>
              )
            })
          }
        </Row>

      </Grid>
    )
  }
}
