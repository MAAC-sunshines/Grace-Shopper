import axios from 'axios';

//ACTION TYPES
const GET_ALLORDERS = 'GET_ALLORDERS';

//ACTION CREATORS
export const getAllOrders = function(allOrders) {
  return { 
    type: GET_ALLORDERS,
    allOrders
}
// export function getAllOrders(allOrders) {
//   const action = { type: GET_ALLORDERS, allOrders };
//   return action;
// }

//THUNKS
export function fetchAllOrders(categoryId) {
  return function thunk(dispatch) {
    return axios.get(`/api/${id}/order-history`)
      .then(res => res.data)
      .then(allOrders => {
        const action = getAllOrders(allOrders);
        dispatch(action);
    });
  };
}


//REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {
  case GET_ALLORDERS:
    return [...state, action.allOrders]
  default:
    return state;
  }
}