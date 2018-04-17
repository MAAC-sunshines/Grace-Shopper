import axios from 'axios';

//action type
export const GET_ALL_INSTRUMENTS = 'ALL_INSTRUMENTS';
export const ADD_INSTRUMENT = 'ADD_INSTRUMENT';

//action creator
export const getAllInstruments = function(allInstruments) {
  return {
    type: GET_ALL_INSTRUMENTS,
    allInstruments
  }
}

export const addInstrument = function(instrument) {
  return {
    type: ADD_INSTRUMENT,
    instrument
  }
}

//reducer
export default function allInstruments(state = [], action) {
  switch (action.type) {
    case GET_ALL_INSTRUMENTS:
      return [...state, action.allInstruments]
    case ADD_INSTRUMENT:
      return [...state, state.allInstruments = [...state.allInstruments, action.instrument]]
    default:
      return state
  }
}


//thunk to get the instruments
export function fetchInstruments () {
  return function (dispatch) {
    axios.get('/api/instruments')
      .then(res => res.data)
      .then(instruments => {
        dispatch(getAllInstruments(instruments))
      })
      .catch(err => console.error(err))
  }
}

