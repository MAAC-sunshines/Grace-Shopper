import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import AddInstrumentsForm from './AddInstrumentsForm';

export default class AllInstruments extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    }

    this.showForm = this.showForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  componentDidMount() {
    this.props.loadAllInstruments();
  }

  showForm() {
    this.setState({
      showForm: true
    })
  }

  cancelForm() {
    this.setState({
      showForm: false
    })
  }

  render() {
    const allInstruments = this.props.allInstruments;
    return (
      <Grid className="all-categories-box">
        <div className="subheader">
          <h2>All Instruments</h2>
          <div className="add-instrument">
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.showForm}>ADD NEW INSTRUMENT</Button>
          {
            this.state.showForm ? <AddInstrumentsForm handleSubmit={(event) => this.props.addNewInstrument(event)} cancelClick={this.cancelForm}/> : null
          }
          </div>
        </div>
        <Row className="row-mapping">
          {
            allInstruments && allInstruments.map(single => {
              return (
                <Col sm={3} key={single.id} className="category-box">
                  <Link to={`/instruments/${single.id}`}>
                  <Image src={single.imageUrl} rounded className="thumbnail-photo"/>
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
