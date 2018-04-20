import axios from 'axios';

//action-type
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER';

//action-creator
const getSingleOrder = function(order) {
  return {
    type: GET_SINGLE_ORDER,
    order
  }
}

//reducer
const getOrder = function(state = [], action) {
  switch (action.type) {
    case GET_SINGLE_ORDER:
      return [...state, action.order]
    default:
      return state
  }
}


//thunk
export function fetchSingleOrder() {
  return function(dispatch) {
    axios.get(`/api/users/${id}/order-history/${orderId}`)
      .then(res => res.data)
      .then(order => {
        dispatch(getSingleOrder(order))
      })
      .catch(err => console.error(err))
  }
}
