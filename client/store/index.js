import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allInstruments from '../reducers/instruments';
import selectedInstrument from '../reducers/selectedInstrument';
import allCategories from '../reducers/allCategories';

const reducer = combineReducers({
  user,
  allInstruments,
  selectedInstrument,
  allCategories
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
