import axios from 'axios';

//ACTION TYPES
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';

//ACTION CREATORS
export function getAllOrders(allOrders) {
  const action = { type: GET_ALL_ORDERS, allOrders };
  return action;
}

//THUNKS
export function fetchAllOrders() {
  return function thunk(dispatch) {
    axios.get('/api/order-history')
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
    return action.allOrders;
  default:
    return state;
  }
}
