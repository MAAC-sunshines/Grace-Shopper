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
  switch (action.type) {
    // update_cart needs to add a new instrument to the array of instruments on cart
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return [...state, [...state.cart, action.cart]]
    case DELETE_FROM_CART:
      return state.cart.filter(instrument => instrument.id !== action.item )
    case DELETE_CART:
    return action.cart
    default:
      return state;
  }
}

//thunk
export function postCart(body) {
  const instrumentId = body.instrument.id;
  const userId = body.user.id;
  const quantity = body.quantity;
  const itemPrice = body.itemPrice;
  const order = {instrumentId, userId, quantity, itemPrice}
  console.log('thunk body', order);
  
  return function (dispatch) {
    axios.post('/api/cart', order)
      .then(res => res.data)
      .then(cartItem => {
        dispatch(addToCart(cartItem));
        dispatch(getCart());
      })
      .catch(err => {throw Error('Add to cart unsuccessful', err)});
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
export function emptyCart(user, history){
  console.log('user', user);
	return function thunk(){
		return axios.delete('/api/cart', user)
			.then(res => res.data)
			.then(() => history.push('/cart'))
      .catch(err => console.error(err))
	};
}

export function clearItem(user, instrumentId, history){
  const itemToDelete = {user, instrumentId};
  console.log('delete', itemToDelete)
	return function thunk(){
		return axios.put('/api/cart', itemToDelete)
			.then(res => res.data)
			.then(() => history.push('/cart'))
      .catch(err => console.error(err))
	};
}
