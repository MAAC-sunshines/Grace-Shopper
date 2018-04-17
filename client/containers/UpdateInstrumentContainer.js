import { fetchInstrument, deleteInstrument, getInstrument } from '../store';
import { connect } from 'react-redux';
import SingleInstrument from '../components/SingleInstrument';

const mapStateToProps = state => {
    return {
        selectedInstrument: state.selectedInstrument
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadInstrument: function(){
            const instrumentId = ownProps.match.params.id;
            return dispatch(fetchInstrument(instrumentId));
        },
        handleSubmit(event, id){
			event.preventDefault();
			dispatch(deleteInstrument(id, ownProps.history));
			dispatch(getInstrument(''));
		}
    };
};

const UpdateInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default UpdateInstrumentContainer;
