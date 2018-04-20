import axios from 'axios';

//ACTION TYPES
const UPDATE_CART = 'UPDATE_CART';
const GET_CART = 'GET_CART';

//ACTION CREATORS
export function updateCart(instrument) {
  const action = { type: UPDATE_CART, cart: instrument };
  return action;
}
export function getCart(cart) {
  const action = { type: GET_CART, cart};
  return action;
}

//REDUCER
export default function reducer(state = [], action) {
  console.log('action', action)
  switch (action.type) {
    // update_cart needs to add a new instrument to the array of instruments on cart
    case UPDATE_CART:
      return {...state, cart: action.instrument};
      //return Object.assign({}, state, {cart: action.cart});
    case GET_CART:
      return Object.assign({}, state, {cart: action.cart});
    default:
      return state;
  }
}
