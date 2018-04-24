import { connect } from 'react-redux';
import { fetchCart, emptyCart, clearItem, fetchInstruments } from '../store';
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
      console.log('event', user);
      dispatch(emptyCart(user, ownProps.history))
    },
    deleteCartItem: function(event, user, id) {
      console.log('id', id);
      dispatch(clearItem(user, id, ownProps.history));
    }
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
