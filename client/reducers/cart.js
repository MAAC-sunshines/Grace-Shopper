import axios from 'axios';

//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';

//ACTION CREATORS
export function addToCart(instrument) {
  const action = { type: ADD_TO_CART, cart: instrument };
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
    case GET_CART:
      return [...state, action.cart]
    case ADD_TO_CART:
      return [...state, cart = [...state.cart, action.cart]]
    default:
      return state;
  }
}

//thunk
export function postCart(instrument,userId,itemPrice) {
  console.log('ITEM!!!', instrument, userId, itemPrice)
  const instrumentId = instrument.id;
  const item = {instrumentId, userId, itemPrice}
  return function (dispatch) {
    axios.post('/api/cart', item)
      .then(res => res.data)
      .then(cartItem => {
        dispatch(addToCart(cartItem))
      })
      .catch(err => console.error(err))
  }
}

//thunk to get cart
export function fetchCart(){
  console.log("this cart has", cart )
  return function(dispatch){
    axios.get(`/api/cart`)
    .then(res => res.data)
    .then(cart => {
      dispatch(getCart(cart))
    })
    .catch(err => console.error(err))
  }
}
