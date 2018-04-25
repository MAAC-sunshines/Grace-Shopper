import { connect } from 'react-redux';
import OrderHistory from '../components/OrderHistory';
import { fetchAllOrders } from '../reducers/orderHistory';
import { fetchUserOrders } from '../store';

const mapStateToProps = function(state) {
  return {
    user: state.user.id,
    allOrders: state.allOrders,
    userOrders: state.singleOrder
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadAllOrders: function() {
      dispatch(fetchAllOrders())
    },
    loadUserOrders: function(user) {
      dispatch(fetchUserOrders(user));
    }
  }
}

const OrderHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(OrderHistory);

export default OrderHistoryContainer;
