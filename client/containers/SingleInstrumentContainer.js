import { fetchInstrument, deleteInstrument, getInstrument, putInstrument, fetchAllCategories, postCart } from '../store';
import React from 'react';
import { connect } from 'react-redux';
import SingleInstrument from '../components/SingleInstrument';
//import UpdateInstrument from '../components/UpdateInstrument';
import Cart from '../components/Cart';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
    return {
        selectedInstrument: state.selectedInstrument,
        cart: state.cart,
        allCategories: state.allCategories[0],
        isAdmin: !!state.user.admin,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadInstrument: function () {
            const instrumentId = ownProps.match.params.id;
            return dispatch(fetchInstrument(instrumentId));
        },
        loadAllCategories: function(){
            return dispatch(fetchAllCategories());
        },
        handleDelete(event, id) {
            event.preventDefault();
            dispatch(deleteInstrument(id, ownProps.history));
            dispatch(getInstrument(''));
        },
        handleSubmit(instrument, event) {
            event.preventDefault();
            console.log('instrument event', event)
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
        },
        addToCart(event, instrument, user) {
            event.preventDefault();
            const body = {
              instrument,
              user,
              quantity: event.target.quantity.value,
              itemPrice: instrument.cost
            }
            dispatch(postCart(body));
        }
    };
};

const SingleInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default SingleInstrumentContainer;

SingleInstrument.propTypes = {
    isAdmin: PropTypes.bool.isRequired,
    user: PropTypes.object
}
