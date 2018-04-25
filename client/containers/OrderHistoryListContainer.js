import { connect } from 'react-redux';
import OrderHistoryList from '../components/OrderHistoryList';
import { fetchAllOrders } from '../store';

const mapStateToProps = function (state) {
    return {
        user: state.user,
        allOrders: state.allOrders
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        loadAllOrders: function() {
            dispatch(fetchAllOrders());
        }
    }
}

const OrderHistoryListContainer = connect(mapStateToProps, mapDispatchToProps)(OrderHistoryList);

export default OrderHistoryListContainer;
