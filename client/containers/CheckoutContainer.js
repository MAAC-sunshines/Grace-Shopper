import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import { postOrder } from '../reducers/checkout';
// import PropTypes from 'prop-types';


const mapStateToProps = function(state, ownProps) {
  return {
    currentOrder: state.cart,
    user: state.user
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleSubmit: function(event, user, total) {
      event.preventDefault();
      const body = {
        email: event.target.email.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        address: event.target.address.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zipcode: event.target.zipcode.value,
        status: 'Processing',
        userId: user.id,
        orderTotal: total
      }
      dispatch(postOrder(body))

    }
  }
}

const CheckoutContainer = connect(mapStateToProps,mapDispatchToProps)(Checkout);

export default CheckoutContainer;
