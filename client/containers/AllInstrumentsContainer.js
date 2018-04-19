import { connect } from 'react-redux';
import AllInstruments from '../components/AllInstruments';
import { fetchInstruments, addInstrumentsPost } from '../reducers/instruments';


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
    addNewInstrument: function(event) {
      event.preventDefault();
      console.log('EVENT', event.target.name.value)
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

const AllInstrumentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllInstruments);

export default AllInstrumentsContainer;
