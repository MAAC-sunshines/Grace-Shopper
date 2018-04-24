import { connect } from 'react-redux';
import { fetchCart, emptyCart, fetchInstruments, updateLineOrder, getCart } from '../store';
import Cart from '../components/Cart';

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user,
    instruments: state.allInstruments
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    loadCart: function() {
      dispatch(fetchCart());
    },
    loadInstruments: function() {
      dispatch(fetchInstruments());
    },
    deleteCart: function(event, user) {
      dispatch(emptyCart(user, ownProps.history))
    },
    deleteCartItem: function(event, user, instrumentId) {
      dispatch(updateLineOrder(instrumentId, ownProps.history));
    },
    handleSubmit: function(event, instrumentId) {
      const quantity = Number(event.target.quantity.value);
      console.log('all the things', instrumentId, quantity);
      dispatch(updateLineOrder(instrumentId, ownProps.history, quantity));
      dispatch(getCart());
    }
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
