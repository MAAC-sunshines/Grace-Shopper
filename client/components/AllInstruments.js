import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import AddInstrumentsForm from './AddInstrumentsForm';
import Instruments from './Instruments';

export default class AllInstruments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            query: ''
        }
        this.showForm = this.showForm.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        const {isLoggedIn} = this.props;
        return (
            <Grid className="all-categories-box">
                <div className="subheader">
                    <h2>All Instruments</h2>
                    <input
                        placeholder="Enter instrument name"
                        onChange={this.handleChange}
                    />
                    {
                        isLoggedIn &&
                        <div className="add-instrument">
                            <Button bsStyle="primary" bsSize="xsmall" onClick={this.showForm}>ADD NEW INSTRUMENT</Button>
                            {
                                this.state.showForm ? <AddInstrumentsForm handleSubmit={(event) => this.props.addNewInstrument(event)} cancelClick={this.cancelForm} /> : null
                            }
                        </div>
                    }
                </div>
                <Instruments instruments={this.instruments} />
            </Grid>
        )
    }
}
