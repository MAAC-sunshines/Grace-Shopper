import { connect } from 'react-redux';
import OrderHistory from '../components/OrderHistory';
import { fetchAllOrders } from '../reducers/orderHistory';

const mapStateToProps = function(state) {
  return {
    user: state.user.id,
    allOrders: state.allOrders
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadAllOrders: function() {
      dispatch(fetchAllOrders())
    }
  }
}

const OrderHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(OrderHistory);

export default OrderHistoryContainer;
