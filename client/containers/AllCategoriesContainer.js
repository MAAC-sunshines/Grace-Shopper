import { connect } from 'react-redux';
import AllCategories from '../components/AllCategories';
import { fetchAllCategories } from '../reducers/allCategories';


const mapStateToProps = function(state) {
  return {
    allCategories: state.allCategories[0]
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadAllCategories: function() {
      console.log('in container')
      dispatch(fetchAllCategories())
    }
  }
}

const AllCategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCategories);

export default AllCategoriesContainer;
