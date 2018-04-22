import { connect } from 'react-redux';
import { updateCart, fetchCart } from '../store';
import Cart from '../components/Cart';

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = function (dispatch) {
  return dispatch(fetchCart());
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
