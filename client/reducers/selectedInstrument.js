import axios from 'axios';

const GET_INSTRUMENT = 'GET_INSTRUMENT';

export function getInstrument(instrument) {
    const action = { type: GET_INSTRUMENT, selectedInstrument: instrument };
    return action;
}

export function fetchInstrument(instrumentId) {
	return function thunk(dispatch) {
		return axios.get(`/api/instruments/${instrumentId}`)
			.then(res => res.data)
			.then(instrument => {
				const action = getInstrument(instrument);
				dispatch(action);
			});
	};
}
export function deleteInstrument(instrumentId, history){
	return function thunk(){
		return axios.delete(`/api/instruments/${instrumentId}`)
			.then(res => res.data)
			.then(() => {
				history.push('/instruments');
			});
	};
}
export function putInstrument(instrument, history){
	console.log('instrument', instrument);
	return function thunk(dispatch){
		return axios.put(`/api/instruments/${instrument.id}`, instrument)
			.then(res => res.data)
			.then(updatedInstrument => {
				const action = getInstrument(updatedInstrument);
				dispatch(action);
				history.push(`/instruments/${instrument.id}`);
			});
	};
}
export default function reducer(state = {}, action) {
	switch (action.type) {
	case GET_INSTRUMENT:
		return action.selectedInstrument;
	default:
		return state;
	}
}
