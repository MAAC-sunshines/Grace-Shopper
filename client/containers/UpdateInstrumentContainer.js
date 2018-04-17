import { fetchInstrument, putInstrument, getInstrument } from '../store';
import { connect } from 'react-redux';
import UpdateInstrument from '../components/UpdateInstrument';

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
        handleSubmit(event){
            event.preventDefault();
            
			dispatch(putInstrument(id, ownProps.history));
			dispatch(getInstrument(''));
		}
    };
};

const UpdateInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateInstrument);

export default UpdateInstrumentContainer;
