import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allInstruments from '../reducers/instruments';
import selectedInstrument from '../reducers/selectedInstrument';
import allCategories from '../reducers/allCategories';
import selectedCategory from '../reducers/singleCategory';
import allUsers from '../reducers/allUsers';
import allOrders from '../reducers/orderHistory';
import cart from '../reducers/cart';
import userOrders from '../reducers/userOrders';
import checkout from '../reducers/checkout';

const reducer = combineReducers({
  user,
  allUsers,
  selectedInstrument,
  selectedCategory,
  allInstruments,
  allCategories,
  userOrders,
  checkout,
  cart,
  allOrders
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user';
export * from '../reducers/allUsers';
export * from '../reducers/singleCategory';
export * from '../reducers/selectedInstrument';
export * from '../reducers/instruments';
export * from '../reducers/allCategories';
export * from '../reducers/orderHistory';
export * from '../reducers/cart';
export * from '../reducers/checkout';
export * from '../reducers/userOrders';
