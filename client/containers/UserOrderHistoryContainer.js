import { connect } from 'react-redux';
import UserOrderHistory from '../components/UserOrderHistory';
import { fetchUserOrders } from '../store';

const mapStateToProps = function(state) {
    return {
        user: state.user,
        userOrders: state.userOrders
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        loadUserOrders: function() {
            console.log(ownProps)
            const userId = ownProps.match.params.id;
            dispatch(fetchUserOrders(userId));
        }
    }
}

const UserOrderHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(UserOrderHistory);

export default UserOrderHistoryContainer;

