import { connect } from 'react-redux';
import { fetchCategory, fetchAllCategories } from '../store';
import SingleCategory from '../components/SingleCategory';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {
    allInstruments: state.selectedCategory,
    categories: state.allCategories[0],
    isAdmin: !!state.user.admin
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    loadCategory: function () {
      const categoryId = ownProps.match.params.id;
      return dispatch(fetchCategory(categoryId));
    },
    loadCategories: function(){
      dispatch(fetchAllCategories());
    }
  }
}

const SingleCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCategory);

export default SingleCategoryContainer;

SingleCategory.propTypes = {
  isAdmin: PropTypes.bool
}