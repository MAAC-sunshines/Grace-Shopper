import { connect } from 'react-redux';
import AllProducts from './AllProducts';


const mapStateToProps = function(state) {
  return {
    allInstruments: state.allInstruments
  }
}

const mapDispatchToProps = function(dispatch) {
  return {

  }
}

const AllProductsContainer = connect(mapStateToProps, mapDispatchToProps)(AllProducts);

export default AllProductsContainer;
