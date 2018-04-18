import { connect } from 'react-redux';
import { fetchCategory } from '../store';
import SingleCategory from '../components/SingleCategory';

const mapStateToProps = state => {
  return {
    instruments: state.selectedCategory,
    categories: state.allCategories
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    loadCategory: function () {
      const categoryId = ownProps.match.params.id;
      return dispatch(fetchCategory(categoryId));
    }
  }
}

const SingleCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCategory);

export default SingleCategoryContainer;
