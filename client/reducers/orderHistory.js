import axios from 'axios';

//ACTION TYPES
const GET_ALLORDERS = 'GET_ALLORDERS';

//ACTION CREATORS
export function getAllOrders(allOrders) {
  const action = { type: GET_ALLORDERS, allOrders };
  return action;
}

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
    return action.selectedCategory;
  default:
    return state;
  }
}