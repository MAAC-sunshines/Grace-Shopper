import axios from 'axios';

const GET_INSTRUMENT = 'GET_INSTRUMENT';

export function getInstrument(instrument) {
    const action = { type: GET_INSTRUMENT, selectedInstrument: instrument };
    return action;
}

export function fetchProduct(instrumentId) {
	return function thunk(dispatch) {
		return axios.get(`/api/instruments/${instrumentId}`)
			.then(res => res.data)
			.then(instrument => {
				const action = getInstrument(instrument);
				dispatch(action);
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
