import { fetchInstrument, deleteInstrument, getInstrument, putInstrument } from '../store';
import React from 'react';
import { connect } from 'react-redux';
import SingleInstrument from '../components/SingleInstrument';
import UpdateInstrument from '../components/UpdateInstrument';

const mapStateToProps = state => {
    return {
        selectedInstrument: state.selectedInstrument
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadInstrument: function () {
            const instrumentId = ownProps.match.params.id;
            return dispatch(fetchInstrument(instrumentId));
        },
        handleDelete(event, id) {
            event.preventDefault();
            dispatch(deleteInstrument(id, ownProps.history));
            dispatch(getInstrument(''));
        },
        handleClick(event) {
            event.preventDefault();
            return (
                <UpdateInstrument />
            )
        },
        handleSubmit(instrument, event) {
            event.preventDefault();
            if (event.target.name.value){
                instrument.name = event.target.name.value;
            }
            if (event.target.imageUrl.value){
                instrument.imageUrl = event.target.imageUrl.value;
            }
            if (event.target.cost.value){
                instrument.cost = +event.target.cost.value;
            }
            if (event.target.categoryId.value){
                instrument.categoryId = event.target.categoryId.value;
            }
            if (event.target.description.value){
                instrument.description = event.target.description.value;
            }
            dispatch(putInstrument(instrument, ownProps.history));
            dispatch(getInstrument(''));
        }
    };
};

const SingleInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default SingleInstrumentContainer;
