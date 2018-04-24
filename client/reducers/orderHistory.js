import axios from 'axios';

//ACTION TYPES
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';

//ACTION CREATORS
export function getAllOrders(allOrders) {
  const action = { type: GET_ALL_ORDERS, allOrders };
  return action;
}
// export function getAllOrders(allOrders) {
//   const action = { type: GET_ALLORDERS, allOrders };
//   return action;
// }

//THUNKS
export function fetchAllOrders(userId) {
  return function thunk(dispatch) {
    return axios.get(`/api/order-history`)
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
  case GET_ALL_ORDERS:
    return action.selectedCategory;
  default:
    return state;
  }
}
