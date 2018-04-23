import { putInstrument, addInstrument } from '../store';
import { connect } from 'react-redux';
import UpdateInstrument from '../components/UpdateInstrument';

const mapStateToProps = state => {
    return {
        selectedInstrument: state.selectedInstrument
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit(event, id){
            event.preventDefault();
            const name = event.target.name.value;
            const imageUrl = event.target.imageUrl.value;
            const cost = event.target.cost.value;
            const category = event.target.category.value;
            const description = event.target.description.value;
            const info = {name: name, imageUrl: imageUrl, cost: cost, category: category, description: description}
			//dispatch(putInstrument(info, id, ownProps.history));
			//dispatch(addInstrument(''));
		}
    };
};

const UpdateInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateInstrument);

export default UpdateInstrumentContainer;
