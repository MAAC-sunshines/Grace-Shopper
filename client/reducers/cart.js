import axios from 'axios';

//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const DELETE_CART = 'DELETE_CART';

//ACTION CREATORS
export function addToCart(instrument) {
  const action = { type: ADD_TO_CART, cart: instrument }
  return action;
}
export function getCart(cart) {
  const action = { type: GET_CART, cart}
  return action;
}
export function deleteFromCart(instrument){
  const action = { type: DELETE_FROM_CART, item: instrument.id}
  return action;
}
export function deleteCart() {
  const action = { type: DELETE_CART, cart: [] }
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
    case DELETE_FROM_CART:
      return state.cart.filter(instrument => instrument.id !== action.item )
    case DELETE_CART:
    return action.cart
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
  return function(dispatch){
    axios.get(`/api/cart`)
    .then(res => res.data)
    .then(cart => {
      dispatch(getCart(cart))
    })
    .catch(err => console.error(err))
  }
}

//thunk to delete cart
export function emptyCart(user){
	return function thunk(dispatch){
		return axios.delete(`/api/users/${user.id}`)
			.then(res => res.data)
			.then(() => {
				dispatch(getCart());
      })
      .catch(err => console.error(err))
	};
}

// export function clearItem(user, id){
// 	return function thunk(dispatch){
// 		return axios.delete(`/api/users/${user.id}/cart`, id)
// 			.then(res => res.data)
// 			.then(() => {
// 				dispatch(getCart());
//       })
//       .catch(err => console.error(err))
// 	};
// }
