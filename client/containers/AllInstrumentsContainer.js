import { connect } from 'react-redux';
import AllInstruments from '../components/AllInstruments';
import { fetchInstruments, addInstrumentsPost } from '../reducers/instruments';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const mapStateToProps = function(state) {
  return {
    allInstruments: state.allInstruments,
    isAdmin: !!state.user.admin
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadAllInstruments: function() {
      dispatch(fetchInstruments())
    },
    addNewInstrument: function(event) {
      event.preventDefault();

      const body = {
        name: event.target.name.value,
        type: event.target.categoryId.value,
        imageUrl: event.target.imageUrl.value,
        cost: event.target.cost.value,
        description: event.target.description.value
      }
      dispatch(addInstrumentsPost(body))
    }
  }
}

const AllInstrumentsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllInstruments));

export default AllInstrumentsContainer;

AllInstruments.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

