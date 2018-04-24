import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import { postOrder } from '../reducers/checkout';
// import PropTypes from 'prop-types';


const mapStateToProps = function(state, ownProps) {
  return {
    currentOrder: state.cart[0]
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleSubmit: function(event) {
      const body = {
        email: event.target.email.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        address: event.target.address.value,
        city: event.target.city.value,
        zipcode: event.target.zipcode.value,
        status: 'Processing'
      }
      dispatch(postOrder(body))
    }
  }
}

const CheckoutContainer = connect(mapStateToProps,mapDispatchToProps)(Checkout);

export default CheckoutContainer;
