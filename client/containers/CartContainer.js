import { connect } from 'react-redux';
import { updateCart, fetchCart } from '../store';
import Cart from '../components/Cart';

const mapStateToProps = state => {
  return {
    cart: state.cart
    // cart: state.cart.instrument
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getCart: function () {
      return dispatch(fetchCart());
    }
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
