import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Instruments from './Instruments';
export default class SingleCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.loadCategory();
    this.props.loadCategories();
  }
  handleChange(event) {
    this.setState({
      query: event.target.value.toLocaleLowerCase()
    })
  }
  get instruments() {
    const { allInstruments = [] } = this.props
    return allInstruments
      .filter(instrument => instrument.name
        .toLocaleLowerCase()
        .indexOf(this.state.query) !== -1)
  }
  render() {
    const { allInstruments = [] } = this.props;
    const isAdmin = this.props.isAdmin;
    const instrument = allInstruments[0];
    const categoryId = instrument &&
      instrument.categoryId;
    const { categories } = this.props;
    const category = categories && categories.filter(topic => topic.id === categoryId)
    const theCategory = category && category[0];
    return (
      <Grid className="all-categories-box">
        <div className="subheader">
          <h2>{theCategory && theCategory.name}</h2>
          <input
            placeholder="Enter category name"
            onChange={this.handleChange}
          />
          {
            // isAdmin &&
            // <div className="add-instrument">
            //     <Button bsStyle="primary" bsSize="xsmall" onClick={this.showForm}>ADD NEW INSTRUMENT</Button>
            //     {
            //         this.state.showForm ? <AddInstrumentsForm handleSubmit={(event) => this.props.addNewInstrument(event)} cancelClick={this.cancelForm} /> : null
            //     }
            // </div>
          }
        </div>
        <Instruments instruments={this.instruments} />
      </Grid>
    )
  }
}
