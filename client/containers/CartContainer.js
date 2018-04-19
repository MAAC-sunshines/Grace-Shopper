import { connect } from 'react-redux';
import { updateCart, getCart } from '../store';
import Cart from '../components/Cart';

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    getCart: function () {
      const cart = ownProps.match.params.id;
      return dispatch(getCart(cart));
    }
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
