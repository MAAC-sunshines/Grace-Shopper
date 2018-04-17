import { connect } from 'react-redux';
import AllInstruments from '../components/AllInstruments';
import { fetchInstruments } from '../reducers/instruments';


const mapStateToProps = function(state) {
  return {
    allInstruments: state.allInstruments[0]
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadAllInstruments: function() {
      dispatch(fetchInstruments())
    }
  }
}

const AllInstrumentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllInstruments);

export default AllInstrumentsContainer;
