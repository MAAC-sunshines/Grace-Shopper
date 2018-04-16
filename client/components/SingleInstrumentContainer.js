import { fetchInstrument } from '../store';
import { connect } from 'react-redux';
import SingleInstrument from './SingleInstrument';

const mapStateToProps = state => {
    return {
        selectedInstrument: state.selectedInstrument
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadInstrument: function(){
            const instrumentId = ownProps.match.params.instrumentId;
            return dispatch(fetchInstrument(instrumentId));
        }
    };
};

const SingleInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default SingleInstrumentContainer;
