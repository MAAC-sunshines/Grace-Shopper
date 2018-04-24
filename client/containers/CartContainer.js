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

const mapDispatchToProps = function (dispatch) {
  return {
    loadCart: function() {
      dispatch(fetchCart());
    },
    loadInstruments: function() {
      dispatch(fetchInstruments());
    },
    deleteCart: function(event, user) {
      console.log('user', user);
      dispatch(emptyCart(user))
    },
    deleteCartItem: function(event, user, id) {
      console.log('id', id);
      dispatch(clearItem(user, id));
    }
  }
}

// const mapDispatchToProps = function (dispatch) {
//   return {
//     loadCart: dispatch(fetchCart()),
//     deleteCart: dispatch(emptyCart())
//   }
// }

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
