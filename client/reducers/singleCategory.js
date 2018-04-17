import axios from 'axios';

//ACTION TYPES
const GET_CATEGORY = 'GET_CATEGORY';

//ACTION CREATORS
export function getCategory(category) {
  const action = { type: GET_CATEGORY, selectedCategory: category };
  return action;
}

//THUNKS
export function fetchCategory(categoryId) {
  return function thunk(dispatch) {
    return axios.get(`/api/categories/${categoryId}`)
      .then(res => res.data)
      .then(category => {
        console.log('instruments', category);
        const action = getCategory(category);
        dispatch(action);
    });
  };
}


//REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {
  case GET_CATEGORY:
    return action.selectedCategory;
  default:
    return state;
  }
}

// export function putInstrument(instrument, id, history){
// 	return function thunk(dispatch){
// 		return axios.put(`/api/instruments/${id}`, instrument)
// 			.then(res => res.data)
// 			.then(updatedInstrument => {
// 				const action = getInstrument(updatedInstrument);
// 				dispatch(action);
// 				history.push(`/instruments/${id}`);
// 			});
// 	};
// }