import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allInstruments from '../reducers/instruments';
import selectedInstrument from '../reducers/selectedInstrument';
import allCategories from '../reducers/allCategories';
import selectedCategory from '../reducers/singleCategory';
import searchInput from '../reducers/searchInput';

const reducer = combineReducers({
  user,
  selectedInstrument,
  selectedCategory,
  allInstruments,
  allCategories,
  searchInput
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user';
export * from '../reducers/singleCategory';
export * from '../reducers/selectedInstrument';
export * from '../reducers/instruments';
export * from '../reducers/allCategories';
export * from '../reducers/searchInput';
