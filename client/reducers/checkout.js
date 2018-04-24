import axios from 'axios';

const SET_ORDER = "SET_ORDER";

const setOrder = function(order) {
  type: SET_ORDER,
  order
}

export default function reducer (state = [], action) {
  switch (action.type) {
    case SET_ORDER:
      return action.order
    default:
      return state
  }
}


export function postOrder (body) {
  return function(dispatch) {
    axios.post('/api/checkout', body)
      .then(res => res.data)
      .then(created => {
        dispatch(setOrder(created))
      })
      .catch(err => console.error(err));
  }
}
