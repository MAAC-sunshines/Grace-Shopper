import { connect } from 'react-redux';
import OrderHistory from '../components/OrderHistory';

const mapStateToProps = function(state) {
  console.log('STATE!!!!!',state)
  return {
    user: state.user.id
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    // loadAllOrders: function() {
    //   dispatch(fetchAllOrders())
    // }
  }
}

const OrderHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(OrderHistory);

export default OrderHistoryContainer;
