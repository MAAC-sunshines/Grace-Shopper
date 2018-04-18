import { connect } from 'react-redux';
import AllInstruments from '../components/AllInstruments';
import { fetchInstruments, fetchAddInstrument } from '../reducers/instruments';


const mapStateToProps = function(state) {
  return {
    allInstruments: state.allInstruments[0]
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadAllInstruments: function() {
      dispatch(fetchInstruments())
    },
    addNewInstrument: function () {
      dispatch(fetchAddInstrument())
    }
  }
}

const AllInstrumentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllInstruments);

export default AllInstrumentsContainer;
