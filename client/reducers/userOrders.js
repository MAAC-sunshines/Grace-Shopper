import axios from 'axios';

//action-type
// const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER';
const GET_USER_ORDERS = 'GET_USER_ORDERS';

//action-creator
// const getSingleOrder = function(order) {
//   return {
//     type: GET_SINGLE_ORDER,
//     order
//   }
// }
const getUserOrders = function(orders) {
  return {
    type: GET_USER_ORDERS,
    orders
  }
}
//reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // case GET_SINGLE_ORDER:
    //   return [...state, action.order]
    case GET_USER_ORDERS:
      return action.orders
    default:
      return state
  }
}

//thunk
// export function fetchSingleOrder() {
//   return function(dispatch) {
//     axios.get(`/api/users/${id}/order-history/${orderId}`)
//       .then(res => res.data)
//       .then(order => {
//         dispatch(getSingleOrder(order))
//       })
//       .catch(err => console.error(err))
//   }
// }

export function fetchUserOrders(userId){
  console.log('here');
  return function(dispatch) {
    axios.get(`/api/order-history/${userId}`)
    .then(res => res.data)
    .then(orders => {
      dispatch(getUserOrders(orders))
    })
    .catch(err => console.error(err));
  }
}
