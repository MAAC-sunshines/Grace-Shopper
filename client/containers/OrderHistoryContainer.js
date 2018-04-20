import { connect } from 'react-redux';
import OrderHistory from '../components/OrderHistory';
import { fetchAllOrders } from '../reducers/orderHistory';


const mapStateToProps = function(state) {
  return {
    allOrders: state.allOrders[0]
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadAllOrders: function() {
      dispatch(fetchAllOrders())
    }
  }
}

const OrderHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(OrderHistory);

export default OrderHistoryContainer;
