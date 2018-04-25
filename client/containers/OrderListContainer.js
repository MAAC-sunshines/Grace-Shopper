import { connect } from 'react-redux';
import AllOrders from '../components/OrderList';
import { fetchOrderList, changeStatus } from '../reducers/orderList';
//import { deleteUser, putUser } from '../store';
import PropTypes from 'prop-types';

const mapStateToProps = function(state) {
  return {
    orderList: state.orderList,
    isAdmin: !!state.user.admin
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadOrderList: function() {
      dispatch(fetchOrderList());
    },
    handleChangeStatus: function (status, order){
      console.log('hit orderListContainer STATUS', status, order)
      const body = {status, order}
      dispatch(changeStatus(body));
    }
    // handleDelete: function(event, user){
    //   event.preventDefault();
    //   dispatch(deleteUser(user, ownProps.history));
    //   dispatch(fetchUsers(''));
    // },
    // updateAdmin: function(event, user) {
    //   event.preventDefault();
    //   user.admin = !user.admin;
    //   dispatch(putUser(user, ownProps.history));
    //   dispatch(fetchUsers(''));
    // }
  }
}

const AllOrdersContainer = connect(mapStateToProps, mapDispatchToProps)(AllOrders);

export default AllOrdersContainer;

AllOrders.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}
