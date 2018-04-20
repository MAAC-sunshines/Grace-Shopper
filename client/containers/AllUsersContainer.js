import { connect } from 'react-redux';
import AllUsers from '../components/AllUsers';
import { fetchUsers } from '../reducers/allUsers';
import PropTypes from 'prop-types';

const mapStateToProps = function(state) {
  return {
    users: state.allUsers,
    isAdmin: !!state.user.admin
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadAllUsers: function() {
      dispatch(fetchUsers());
    },
  }
}

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;

AllUsers.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

